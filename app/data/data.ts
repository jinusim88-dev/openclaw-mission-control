// Real OpenClaw data from mission-control-data.json
import { fetchMissionControlData } from "@/lib/supabase";

export interface Task {
  name: string;
  done: boolean;
}

export interface CronJob {
  name: string;
  schedule: string;
  lastRun: string;
  status: "ok" | "failing";
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  status: "active" | "inactive";
  progress: number;
  tech: string[];
  tasks: Task[];
  cronJobs: CronJob[];
}

export interface Agent {
  id: string;
  name: string;
  trigger: "cron" | "mention" | "telegram" | "on-demand";
  schedule: string;
  status: "active" | "standby" | "inactive";
  lastRun: string;
  purpose: string;
  integrations: string[];
}

export interface ActivityItem {
  time: string;
  agent: string;
  message: string;
  type: "success" | "info" | "warning" | "error";
}

export interface CronHealth {
  id: string;
  name: string;
  schedule: string;
  nextRun: string;
  lastRun: string;
  status: "ok" | "failing" | "pending";
}

export interface Stats {
  projects: number;
  agents: number;
  tasksDone: string;
  cronIssues: number;
}

export const stats: Stats = {
  projects: 4,
  agents: 14,
  tasksDone: "12/18",
  cronIssues: 0,
};

export const projects: Project[] = [
  {
    id: "mainline-billing",
    name: "Mainline Billing",
    description: "Invoice, customer & task management system",
    url: "https://billing.mainlinepowerph.com",
    status: "active",
    progress: 85,
    tech: ["Next.js 16", "Supabase", "Vercel"],
    tasks: [
      { name: "Tasks & Oculars System", done: true },
      { name: "Invoice Management", done: true },
      { name: "Customer & Leads CRM", done: true },
      { name: "Dashboard & Analytics", done: true },
      { name: "Activity Logs", done: true },
      { name: "Google Drive Integration", done: false },
      { name: "Payment Tracking", done: false },
    ],
    cronJobs: [
      { name: "Daily Billing Check", schedule: "11:00 PM", lastRun: "1h ago", status: "ok" },
    ],
  },
  {
    id: "sugarphilippines",
    name: "SugarPhilippines.com",
    description: "Wholesale sugar supplier website",
    url: "https://sugarphilippines.com",
    status: "active",
    progress: 92,
    tech: ["Static HTML", "Vercel"],
    tasks: [
      { name: "Core Pages (5)", done: true },
      { name: "Product Pages (8)", done: true },
      { name: "Blog Section", done: true },
      { name: "SEO Optimization", done: true },
      { name: "Clean URLs", done: true },
      { name: "Mobile Menu Fix", done: true },
    ],
    cronJobs: [],
  },
  {
    id: "mission-control",
    name: "Mission Control",
    description: "OpenClaw dashboard & monitoring",
    url: "https://openclaw-mission-control-rosy-seven.vercel.app",
    status: "active",
    progress: 60,
    tech: ["Next.js 16", "Tailwind", "Vercel"],
    tasks: [
      { name: "Dashboard UI", done: true },
      { name: "Stats Widgets", done: true },
      { name: "Project Cards", done: true },
      { name: "Agent View", done: true },
      { name: "Real Data Integration", done: false },
      { name: "Live Logs", done: false },
    ],
    cronJobs: [],
  },
  {
    id: "frontline-deliveries",
    name: "Frontline Deliveries",
    description: "Sugar delivery operations system",
    url: "https://docs.google.com/spreadsheets/d/1Yz9yWerQGRiuL7-ICr9xYDiEvVJ0_dGRzqRpdzR5wks",
    status: "active",
    progress: 95,
    tech: ["Google Sheets", "Forms", "Calendar"],
    tasks: [
      { name: "8 Customer Forms", done: true },
      { name: "Delivery Calendar", done: true },
      { name: "Expense Tracking", done: true },
      { name: "Payment Tracking", done: true },
      { name: "Auto-sync Scripts", done: true },
    ],
    cronJobs: [
      { name: "Daily Calendar Check", schedule: "7:00 AM", lastRun: "17h ago", status: "ok" },
      { name: "Daily Deliveries Sync", schedule: "8:00 AM", lastRun: "16h ago", status: "ok" },
    ],
  },
];

export const agents: Agent[] = [
  {
    id: "daily-digest-mainline",
    name: "Daily Digest - Mainline",
    trigger: "cron",
    schedule: "9:05 AM daily",
    status: "active",
    lastRun: "9h ago",
    purpose: "Generate daily business digest with calendar events and operational summaries",
    integrations: ["Supabase", "Google Calendar", "ActiveCampaign"],
  },
  {
    id: "ai-news-digest",
    name: "Daily AI News Digest",
    trigger: "cron",
    schedule: "9:30 AM daily",
    status: "active",
    lastRun: "15h ago",
    purpose: "Fetch and summarize latest AI news for team updates",
    integrations: ["Web Search", "Daily Notes"],
  },
  {
    id: "tools-tactics",
    name: "Tools & Tactics Scanner",
    trigger: "cron",
    schedule: "10:00 AM daily",
    status: "active",
    lastRun: "14h ago",
    purpose: "Scan notes for business tools, marketing strategies, and tech patterns",
    integrations: ["Obsidian Vault", "Concepts DB"],
  },
  {
    id: "people-linker",
    name: "People Linker Scanner",
    trigger: "cron",
    schedule: "10:30 AM daily",
    status: "active",
    lastRun: "14h ago",
    purpose: "Scan notes for real human mentions and create People profiles",
    integrations: ["Obsidian Vault", "People DB"],
  },
  {
    id: "cron-health-monitor",
    name: "Cron Health Monitor",
    trigger: "on-demand",
    schedule: "As needed",
    status: "standby",
    lastRun: "Never",
    purpose: "Monitor and auto-fix stuck or failed cron jobs",
    integrations: ["OpenClaw API"],
  },
  {
    id: "openclaw-health-monitor",
    name: "OpenClaw Health Monitor",
    trigger: "on-demand",
    schedule: "As needed",
    status: "standby",
    lastRun: "Never",
    purpose: "Diagnose gateway crashes and instability",
    integrations: ["OpenClaw Gateway"],
  },
  {
    id: "mainline-expense-group",
    name: "Mainline Expense Logger",
    trigger: "telegram",
    schedule: "Real-time",
    status: "active",
    lastRun: "Active now",
    purpose: "Auto-log expenses from Mainline Expenses Telegram group",
    integrations: ["Telegram", "Mainline Billing API"],
  },
  {
    id: "travel-agent",
    name: "Travel Agent",
    trigger: "mention",
    schedule: "On request",
    status: "standby",
    lastRun: "Never",
    purpose: "Find cheap flights, hotels, and plan trips",
    integrations: ["Google Flights API", "Skyscanner", "Agoda", "Booking.com"],
  },
  {
    id: "tooling-agent",
    name: "Tooling Agent",
    trigger: "mention",
    schedule: "On request",
    status: "standby",
    lastRun: "Never",
    purpose: "Librarian for all tools, credentials, and scripts",
    integrations: ["TOOLS.md", "Skills DB"],
  },
  {
    id: "mainline-add-lead",
    name: "Mainline Lead Adder",
    trigger: "mention",
    schedule: "On request",
    status: "standby",
    lastRun: "Never",
    purpose: "Add leads to Mainline Billing and sync to ActiveCampaign",
    integrations: ["Supabase", "ActiveCampaign API"],
  },
  {
    id: "concept-linker",
    name: "Concept Linker",
    trigger: "cron",
    schedule: "Daily (backup)",
    status: "standby",
    lastRun: "14h ago",
    purpose: "Create wiki-style concept notes from scientific/medical terms",
    integrations: ["Obsidian Vault", "Concepts DB"],
  },
  {
    id: "supabase-query",
    name: "Supabase Query",
    trigger: "mention",
    schedule: "On request",
    status: "standby",
    lastRun: "Never",
    purpose: "Query Mainline Power billing database",
    integrations: ["Supabase"],
  },
  {
    id: "pdf-converter",
    name: "PDF Converter",
    trigger: "mention",
    schedule: "On request",
    status: "standby",
    lastRun: "Never",
    purpose: "Convert HTML and Markdown files to PDF",
    integrations: ["Chrome Headless"],
  },
  {
    id: "cron-job-runner",
    name: "Cron Job Runner",
    trigger: "cron",
    schedule: "Daily",
    status: "standby",
    lastRun: "Never",
    purpose: "Master skill for running cron jobs with anti-hallucination guardrails",
    integrations: ["OpenClaw Cron"],
  },
];

export const recentActivity: ActivityItem[] = [
  { time: "23m ago", agent: "Coder Agent", message: "Built Mission Control dashboard and deployed to Vercel", type: "success" },
  { time: "1h ago", agent: "Daily Billing", message: "Daily billing check completed - no issues", type: "info" },
  { time: "9h ago", agent: "Daily Digest", message: "Generated daily digest for Mainline", type: "info" },
  { time: "14h ago", agent: "People Linker", message: "Scanned notes - no new people found", type: "info" },
  { time: "14h ago", agent: "Tools & Tactics", message: "Scanned notes - 3 new concepts added", type: "success" },
  { time: "15h ago", agent: "AI News Digest", message: "Generated AI news summary", type: "info" },
];

export const cronHealth: CronHealth[] = [
  { id: "e54e81d8", name: "Daily Digest - Mainline", schedule: "9:05 AM", nextRun: "in 9h", lastRun: "9h ago", status: "ok" },
  { id: "acfae32d", name: "Daily AI News Digest", schedule: "9:30 AM", nextRun: "in 9h", lastRun: "15h ago", status: "ok" },
  { id: "b537950b", name: "Tools & Tactics Scanner", schedule: "10:00 AM", nextRun: "in 10h", lastRun: "14h ago", status: "ok" },
  { id: "e6640474", name: "People Linker Scanner", schedule: "10:30 AM", nextRun: "in 10h", lastRun: "14h ago", status: "ok" },
  { id: "7881ea9e", name: "Mainline Billing Daily", schedule: "11:00 PM", nextRun: "in 23h", lastRun: "1h ago", status: "ok" },
];

// ============================================
// API RESPONSE TYPES
// ============================================

export interface OpenClawStatusResponse {
  active: boolean;
  version?: string;
  sessions?: number;
  uptime?: string;
  error?: string;
}

export interface CronJobStatus {
  id: string;
  name: string;
  schedule: string;
  lastRun: string;
  nextRun: string;
  status: "ok" | "failing" | "pending" | "unknown";
}

export interface CronListResponse {
  jobs: CronJobStatus[];
  total: number;
  healthy: number;
  failing: number;
  error?: string;
}

export interface ActivityResponse {
  activities: ActivityItem[];
  lastUpdated: string;
  error?: string;
}

// ============================================
// API FETCH FUNCTIONS - Supabase first, fallback to static
// ============================================

export async function fetchOpenClawStatus(): Promise<OpenClawStatusResponse> {
  try {
    // Try Supabase first
    const missionData = await fetchMissionControlData();
    if (missionData?.data?.openclawStatus) {
      return {
        active: missionData.data.openclawStatus.active,
        version: missionData.data.openclawStatus.version,
        sessions: missionData.data.openclawStatus.sessions,
        uptime: missionData.data.openclawStatus.uptime,
      };
    }
  } catch (error) {
    console.log("Supabase fetch failed, trying local API...");
  }

  // Fallback to local API
  try {
    const response = await fetch("/api/status");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch OpenClaw status:", error);
    return { active: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function fetchCronList(): Promise<CronListResponse> {
  try {
    // Try Supabase first
    const missionData = await fetchMissionControlData();
    if (missionData?.data?.cronList) {
      return {
        jobs: missionData.data.cronList.jobs,
        total: missionData.data.cronList.total,
        healthy: missionData.data.cronList.healthy,
        failing: missionData.data.cronList.failing,
      };
    }
  } catch (error) {
    console.log("Supabase fetch failed, trying local API...");
  }

  // Fallback to local API
  try {
    const response = await fetch("/api/cron");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch cron list:", error);
    return {
      jobs: cronHealth.map(c => ({ ...c, status: c.status as "ok" | "failing" | "pending" | "unknown" })),
      total: cronHealth.length,
      healthy: cronHealth.filter(c => c.status === "ok").length,
      failing: cronHealth.filter(c => c.status === "failing").length,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function fetchActivity(): Promise<ActivityResponse> {
  try {
    // Try Supabase first
    const missionData = await fetchMissionControlData();
    if (missionData?.data?.agentList) {
      // Convert agents to activity items for display
      const agentActivities: ActivityItem[] = missionData.data.agentList.agents
        .filter(a => a.lastRun !== "Never" && a.lastRun !== "")
        .slice(0, 10)
        .map(a => ({
          time: a.lastRun,
          agent: a.name,
          message: `Agent is ${a.status}`,
          type: a.status === "active" ? "success" : "info" as "success" | "info" | "warning" | "error",
        }));
      
      return {
        activities: agentActivities.length > 0 ? agentActivities : recentActivity,
        lastUpdated: missionData.updated_at,
      };
    }
  } catch (error) {
    console.log("Supabase fetch failed, trying local API...");
  }

  // Fallback to local API
  try {
    const response = await fetch("/api/activity");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch activity:", error);
    return {
      activities: recentActivity,
      lastUpdated: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Colors for projects
export const projectColors: Record<string, string> = {
  "mainline-billing": "#00ff88",
  "sugarphilippines": "#ffaa00",
  "mission-control": "#8888ff",
  "frontline-deliveries": "#ff6688",
};

// Icons for projects
export const projectIcons: Record<string, string> = {
  "mainline-billing": "⚡",
  "sugarphilippines": "🍯",
  "mission-control": "🎯",
  "frontline-deliveries": "🚚",
};

// Icons for agents
export const agentIcons: Record<string, string> = {
  "daily-digest-mainline": "📊",
  "ai-news-digest": "🤖",
  "tools-tactics": "🛠️",
  "people-linker": "👥",
  "cron-health-monitor": "⏱️",
  "openclaw-health-monitor": "💓",
  "mainline-expense-group": "💰",
  "travel-agent": "✈️",
  "tooling-agent": "🔧",
  "mainline-add-lead": "➕",
  "concept-linker": "🔗",
  "supabase-query": "🗄️",
  "pdf-converter": "📄",
  "cron-job-runner": "🤖",
};
