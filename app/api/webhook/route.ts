import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://gjvlqjjfsfnjpyjpklks.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqdmxxampmc2ZuanB5anBrbGtzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTg5OTI1MCwiZXhwIjoyMDg1NDc1MjUwfQ.AoRAyMhJ_xUaqwYljmHIy7U3zfsUHRhz8IspdvwWMls";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Valid event types from OpenClaw
export type OpenClawEventType = 
  | "agent_start"
  | "agent_complete"
  | "agent_error"
  | "cron_start"
  | "cron_complete"
  | "cron_error"
  | "gateway_health"
  | "gateway_crash"
  | "session_spawn"
  | "session_complete"
  | "tool_call"
  | "heartbeat"
  | "error";

export interface OpenClawEvent {
  event_type: OpenClawEventType;
  timestamp: string;
  agent_id?: string;
  agent_name?: string;
  session_id?: string;
  cron_id?: string;
  cron_name?: string;
  tool_name?: string;
  message: string;
  metadata?: Record<string, any>;
  severity?: "info" | "warning" | "error" | "critical";
}

/**
 * Webhook endpoint to receive real-time events from OpenClaw
 * 
 * POST /api/webhook
 * Body: OpenClawEvent
 * 
 * Events are stored in Supabase and will trigger realtime subscriptions
 */
export async function POST(request: NextRequest) {
  try {
    const event: OpenClawEvent = await request.json();
    
    // Validate required fields
    if (!event.event_type || !event.timestamp || !event.message) {
      return NextResponse.json(
        { error: "Missing required fields: event_type, timestamp, message" },
        { status: 400 }
      );
    }

    // Validate event type
    const validEventTypes: OpenClawEventType[] = [
      "agent_start", "agent_complete", "agent_error",
      "cron_start", "cron_complete", "cron_error",
      "gateway_health", "gateway_crash",
      "session_spawn", "session_complete",
      "tool_call", "heartbeat", "error"
    ];
    
    if (!validEventTypes.includes(event.event_type)) {
      return NextResponse.json(
        { error: `Invalid event_type: ${event.event_type}` },
        { status: 400 }
      );
    }

    // Insert into mission_control table with record_type for filtering
    const recordType = getRecordType(event.event_type);
    const recordKey = getRecordKey(event);
    
    const { data, error } = await supabase
      .from("mission_control")
      .insert({
        record_type: recordType,
        record_key: recordKey,
        data: {
          event_type: event.event_type,
          timestamp: event.timestamp,
          agent_id: event.agent_id,
          agent_name: event.agent_name,
          session_id: event.session_id,
          cron_id: event.cron_id,
          cron_name: event.cron_name,
          tool_name: event.tool_name,
          message: event.message,
          metadata: event.metadata || {},
          severity: event.severity || "info",
        },
      })
      .select()
      .single();

    if (error) {
      console.error("[Webhook] Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to store event", details: error.message },
        { status: 500 }
      );
    }

    console.log(`[Webhook] Event stored: ${event.event_type} - ${event.message.substring(0, 50)}...`);

    return NextResponse.json({
      success: true,
      id: data.id,
      event_type: event.event_type,
      timestamp: event.timestamp,
    }, { status: 201 });

  } catch (error) {
    console.error("[Webhook] Error processing event:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint for webhook status/health check
 */
export async function GET(request: NextRequest) {
  try {
    // Check Supabase connection
    const { data, error } = await supabase
      .from("mission_control")
      .select("count")
      .limit(1);

    if (error) {
      return NextResponse.json(
        { status: "error", message: "Supabase connection failed", details: error.message },
        { status: 503 }
      );
    }

    return NextResponse.json({
      status: "healthy",
      message: "Webhook endpoint is ready",
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Health check failed", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 503 }
    );
  }
}

// Helper to determine record type for filtering
function getRecordType(eventType: OpenClawEventType): string {
  if (eventType.startsWith("agent_")) return "agent_event";
  if (eventType.startsWith("cron_")) return "cron_event";
  if (eventType.startsWith("gateway_")) return "gateway_event";
  if (eventType.startsWith("session_")) return "session_event";
  if (eventType === "tool_call") return "tool_usage";
  if (eventType === "heartbeat") return "heartbeat";
  return "system_event";
}

// Helper to generate a unique record key
function getRecordKey(event: OpenClawEvent): string {
  const ts = event.timestamp.replace(/[:.]/g, "-");
  
  switch (event.event_type) {
    case "agent_start":
    case "agent_complete":
    case "agent_error":
      return `${event.agent_id || "unknown"}:${event.event_type}:${ts}`;
    case "cron_start":
    case "cron_complete":
    case "cron_error":
      return `${event.cron_id || event.cron_name || "unknown"}:${event.event_type}:${ts}`;
    case "session_spawn":
    case "session_complete":
      return `${event.session_id || "unknown"}:${event.event_type}:${ts}`;
    case "tool_call":
      return `${event.tool_name || "unknown"}:${ts}`;
    default:
      return `${event.event_type}:${ts}`;
  }
}
