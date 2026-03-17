import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://gjvlqjjfsfnjpyjpklks.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqdmxxampmc2ZuanB5anBrbGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4OTkyNTAsImV4cCI6MjA4NTQ3NTI1MH0.McLrZ5qPowDuel03h3JelfpcGIuR8-Dcc042Sc1bR44";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
