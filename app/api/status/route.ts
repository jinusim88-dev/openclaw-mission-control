import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export interface OpenClawStatusResponse {
  active: boolean;
  version?: string;
  sessions?: number;
  uptime?: string;
  error?: string;
}

async function getOpenClawStatus(): Promise<OpenClawStatusResponse> {
  try {
    // Try to get status from openclaw CLI
    const { stdout } = await execAsync("openclaw status", { timeout: 10000 });
    
    // Parse the output - this is a simple parser, adjust based on actual output format
    const lines = stdout.split("\n");
    const result: OpenClawStatusResponse = { active: true };
    
    for (const line of lines) {
      if (line.includes("Version:")) {
        result.version = line.split(":")[1]?.trim();
      } else if (line.includes("Sessions:") || line.includes("Active sessions:")) {
        const match = line.match(/(\d+)/);
        result.sessions = match ? parseInt(match[1]) : undefined;
      } else if (line.includes("Uptime:")) {
        result.uptime = line.split(":")[1]?.trim();
      }
    }
    
    return result;
  } catch (error) {
    // If openclaw command fails, return inactive status
    return {
      active: false,
      error: error instanceof Error ? error.message : "Failed to get OpenClaw status",
    };
  }
}

export async function GET(request: NextRequest) {
  try {
    const status = await getOpenClawStatus();
    return NextResponse.json(status);
  } catch (error) {
    return NextResponse.json(
      { 
        active: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    );
  }
}
