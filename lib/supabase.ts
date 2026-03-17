import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://gjvlqjjfsfnjpyjpklks.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqdmxxampmc2ZuanB5anBrbGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4OTkyNTAsImV4cCI6MjA4NTQ3NTI1MH0.McLrZ5qPowDuel03h3JelfpcGIuR8-Dcc042Sc1bR44";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

export interface MissionControlData {
  id: number;
  data: {
    openclawStatus?: {
      active: boolean;
      version?: string;
      sessions?: number;
      uptime?: string;
      timestamp: string;
    };
    cronList?: {
      jobs: Array<{
        id: string;
        name: string;
        schedule: string;
        lastRun: string;
        nextRun: string;
        status: "ok" | "failing" | "pending" | "unknown";
      }>;
      total: number;
      healthy: number;
      failing: number;
    };
    agentList?: {
      agents: Array<{
        id: string;
        name: string;
        status: string;
        lastRun: string;
        purpose: string;
      }>;
      total: number;
      active: number;
    };
    timestamp: string;
  };
  updated_at: string;
}

export async function fetchMissionControlData(): Promise<MissionControlData | null> {
  try {
    const { data, error } = await supabase
      .from("mission_control")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error("Supabase fetch error:", error);
      return null;
    }

    return data as MissionControlData;
  } catch (error) {
    console.error("Failed to fetch mission control data:", error);
    return null;
  }
}

export interface MissionControlRecord {
  id: number;
  record_type: string;
  record_key: string;
  data: any;
  updated_at: string;
  created_at: string;
}

export async function fetchMissionControlHistory(limit = 20): Promise<MissionControlRecord[]> {
  try {
    const { data, error } = await supabase
      .from("mission_control")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Supabase fetch history error:", error);
      return [];
    }

    return (data as MissionControlRecord[]) || [];
  } catch (error) {
    console.error("Failed to fetch mission control history:", error);
    return [];
  }
}

// Simple API - just get the latest data blob
export interface LatestData {
  openclawStatus: MissionControlData["data"]["openclawStatus"] | null;
  cronList: MissionControlData["data"]["cronList"] | null;
  agentList: MissionControlData["data"]["agentList"] | null;
  timestamp: string;
}

export async function getLatestData(): Promise<LatestData | null> {
  try {
    const { data, error } = await supabase
      .from("mission_control")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single();

    if (error || !data) {
      console.error("getLatestData error:", error);
      return null;
    }

    return {
      openclawStatus: data.data?.openclawStatus || null,
      cronList: data.data?.cronList || null,
      agentList: data.data?.agentList || null,
      timestamp: data.updated_at,
    };
  } catch (error) {
    console.error("Failed to get latest data:", error);
    return null;
  }
}

// ============================================
// REALTIME SUBSCRIPTION
// ============================================

export type RealtimeCallback = (payload: {
  record_type: string;
  record_key: string;
  data: any;
  updated_at: string;
}) => void;

export function subscribeToMissionControl(callback: RealtimeCallback) {
  console.log("[Realtime] Subscribing to mission_control changes...");
  
  const channel = supabase
    .channel("mission_control_changes")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "mission_control",
      },
      (payload) => {
        console.log("[Realtime] New record received:", payload);
        const newRecord = payload.new as MissionControlRecord;
        if (newRecord) {
          callback({
            record_type: newRecord.record_type || "unknown",
            record_key: newRecord.record_key || "unknown",
            data: newRecord.data || {},
            updated_at: newRecord.updated_at || new Date().toISOString(),
          });
        }
      }
    )
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "mission_control",
      },
      (payload) => {
        console.log("[Realtime] Record updated:", payload);
        const updatedRecord = payload.new as MissionControlRecord;
        if (updatedRecord) {
          callback({
            record_type: updatedRecord.record_type || "unknown",
            record_key: updatedRecord.record_key || "unknown",
            data: updatedRecord.data || {},
            updated_at: updatedRecord.updated_at || new Date().toISOString(),
          });
        }
      }
    )
    .subscribe((status) => {
      console.log("[Realtime] Subscription status:", status);
    });

  // Return unsubscribe function
  return () => {
    console.log("[Realtime] Unsubscribing from mission_control changes...");
    supabase.removeChannel(channel);
  };
}

// Hook-friendly wrapper for realtime subscription
export function createRealtimeSubscription(callback: RealtimeCallback) {
  let unsubscribe: (() => void) | null = null;
  let reconnectTimeout: NodeJS.Timeout | null = null;
  let isActive = true;

  const start = () => {
    if (!isActive) return;
    
    try {
      unsubscribe = subscribeToMissionControl(callback);
    } catch (error) {
      console.error("[Realtime] Failed to subscribe:", error);
      // Retry after 5 seconds
      reconnectTimeout = setTimeout(start, 5000);
    }
  };

  const stop = () => {
    isActive = false;
    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout);
      reconnectTimeout = null;
    }
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }
  };

  start();

  return stop;
}
