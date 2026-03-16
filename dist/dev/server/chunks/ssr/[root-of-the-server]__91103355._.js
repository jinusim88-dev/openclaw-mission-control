module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/openclaw-mission-control/app/data/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Real OpenClaw data from mission-control-data.json
__turbopack_context__.s([
    "agentIcons",
    ()=>agentIcons,
    "agents",
    ()=>agents,
    "cronHealth",
    ()=>cronHealth,
    "projectColors",
    ()=>projectColors,
    "projectIcons",
    ()=>projectIcons,
    "projects",
    ()=>projects,
    "recentActivity",
    ()=>recentActivity,
    "stats",
    ()=>stats
]);
const stats = {
    projects: 4,
    agents: 14,
    tasksDone: "12/18",
    cronIssues: 0
};
const projects = [
    {
        id: "mainline-billing",
        name: "Mainline Billing",
        description: "Invoice, customer & task management system",
        url: "https://billing.mainlinepowerph.com",
        status: "active",
        progress: 85,
        tech: [
            "Next.js 16",
            "Supabase",
            "Vercel"
        ],
        tasks: [
            {
                name: "Tasks & Oculars System",
                done: true
            },
            {
                name: "Invoice Management",
                done: true
            },
            {
                name: "Customer & Leads CRM",
                done: true
            },
            {
                name: "Dashboard & Analytics",
                done: true
            },
            {
                name: "Activity Logs",
                done: true
            },
            {
                name: "Google Drive Integration",
                done: false
            },
            {
                name: "Payment Tracking",
                done: false
            }
        ],
        cronJobs: [
            {
                name: "Daily Billing Check",
                schedule: "11:00 PM",
                lastRun: "1h ago",
                status: "ok"
            }
        ]
    },
    {
        id: "sugarphilippines",
        name: "SugarPhilippines.com",
        description: "Wholesale sugar supplier website",
        url: "https://sugarphilippines.com",
        status: "active",
        progress: 92,
        tech: [
            "Static HTML",
            "Vercel"
        ],
        tasks: [
            {
                name: "Core Pages (5)",
                done: true
            },
            {
                name: "Product Pages (8)",
                done: true
            },
            {
                name: "Blog Section",
                done: true
            },
            {
                name: "SEO Optimization",
                done: true
            },
            {
                name: "Clean URLs",
                done: true
            },
            {
                name: "Mobile Menu Fix",
                done: true
            }
        ],
        cronJobs: []
    },
    {
        id: "mission-control",
        name: "Mission Control",
        description: "OpenClaw dashboard & monitoring",
        url: "https://openclaw-mission-control-rosy-seven.vercel.app",
        status: "active",
        progress: 60,
        tech: [
            "Next.js 16",
            "Tailwind",
            "Vercel"
        ],
        tasks: [
            {
                name: "Dashboard UI",
                done: true
            },
            {
                name: "Stats Widgets",
                done: true
            },
            {
                name: "Project Cards",
                done: true
            },
            {
                name: "Agent View",
                done: true
            },
            {
                name: "Real Data Integration",
                done: false
            },
            {
                name: "Live Logs",
                done: false
            }
        ],
        cronJobs: []
    },
    {
        id: "frontline-deliveries",
        name: "Frontline Deliveries",
        description: "Sugar delivery operations system",
        url: "https://docs.google.com/spreadsheets/d/1Yz9yWerQGRiuL7-ICr9xYDiEvVJ0_dGRzqRpdzR5wks",
        status: "active",
        progress: 95,
        tech: [
            "Google Sheets",
            "Forms",
            "Calendar"
        ],
        tasks: [
            {
                name: "8 Customer Forms",
                done: true
            },
            {
                name: "Delivery Calendar",
                done: true
            },
            {
                name: "Expense Tracking",
                done: true
            },
            {
                name: "Payment Tracking",
                done: true
            },
            {
                name: "Auto-sync Scripts",
                done: true
            }
        ],
        cronJobs: [
            {
                name: "Daily Calendar Check",
                schedule: "7:00 AM",
                lastRun: "17h ago",
                status: "ok"
            },
            {
                name: "Daily Deliveries Sync",
                schedule: "8:00 AM",
                lastRun: "16h ago",
                status: "ok"
            }
        ]
    }
];
const agents = [
    {
        id: "daily-digest-mainline",
        name: "Daily Digest - Mainline",
        trigger: "cron",
        schedule: "9:05 AM daily",
        status: "active",
        lastRun: "9h ago",
        purpose: "Generate daily business digest with calendar events and operational summaries",
        integrations: [
            "Supabase",
            "Google Calendar",
            "ActiveCampaign"
        ]
    },
    {
        id: "ai-news-digest",
        name: "Daily AI News Digest",
        trigger: "cron",
        schedule: "9:30 AM daily",
        status: "active",
        lastRun: "15h ago",
        purpose: "Fetch and summarize latest AI news for team updates",
        integrations: [
            "Web Search",
            "Daily Notes"
        ]
    },
    {
        id: "tools-tactics",
        name: "Tools & Tactics Scanner",
        trigger: "cron",
        schedule: "10:00 AM daily",
        status: "active",
        lastRun: "14h ago",
        purpose: "Scan notes for business tools, marketing strategies, and tech patterns",
        integrations: [
            "Obsidian Vault",
            "Concepts DB"
        ]
    },
    {
        id: "people-linker",
        name: "People Linker Scanner",
        trigger: "cron",
        schedule: "10:30 AM daily",
        status: "active",
        lastRun: "14h ago",
        purpose: "Scan notes for real human mentions and create People profiles",
        integrations: [
            "Obsidian Vault",
            "People DB"
        ]
    },
    {
        id: "cron-health-monitor",
        name: "Cron Health Monitor",
        trigger: "on-demand",
        schedule: "As needed",
        status: "standby",
        lastRun: "Never",
        purpose: "Monitor and auto-fix stuck or failed cron jobs",
        integrations: [
            "OpenClaw API"
        ]
    },
    {
        id: "openclaw-health-monitor",
        name: "OpenClaw Health Monitor",
        trigger: "on-demand",
        schedule: "As needed",
        status: "standby",
        lastRun: "Never",
        purpose: "Diagnose gateway crashes and instability",
        integrations: [
            "OpenClaw Gateway"
        ]
    },
    {
        id: "mainline-expense-group",
        name: "Mainline Expense Logger",
        trigger: "telegram",
        schedule: "Real-time",
        status: "active",
        lastRun: "Active now",
        purpose: "Auto-log expenses from Mainline Expenses Telegram group",
        integrations: [
            "Telegram",
            "Mainline Billing API"
        ]
    },
    {
        id: "travel-agent",
        name: "Travel Agent",
        trigger: "mention",
        schedule: "On request",
        status: "standby",
        lastRun: "Never",
        purpose: "Find cheap flights, hotels, and plan trips",
        integrations: [
            "Google Flights API",
            "Skyscanner",
            "Agoda",
            "Booking.com"
        ]
    },
    {
        id: "tooling-agent",
        name: "Tooling Agent",
        trigger: "mention",
        schedule: "On request",
        status: "standby",
        lastRun: "Never",
        purpose: "Librarian for all tools, credentials, and scripts",
        integrations: [
            "TOOLS.md",
            "Skills DB"
        ]
    },
    {
        id: "mainline-add-lead",
        name: "Mainline Lead Adder",
        trigger: "mention",
        schedule: "On request",
        status: "standby",
        lastRun: "Never",
        purpose: "Add leads to Mainline Billing and sync to ActiveCampaign",
        integrations: [
            "Supabase",
            "ActiveCampaign API"
        ]
    },
    {
        id: "concept-linker",
        name: "Concept Linker",
        trigger: "cron",
        schedule: "Daily (backup)",
        status: "standby",
        lastRun: "14h ago",
        purpose: "Create wiki-style concept notes from scientific/medical terms",
        integrations: [
            "Obsidian Vault",
            "Concepts DB"
        ]
    },
    {
        id: "supabase-query",
        name: "Supabase Query",
        trigger: "mention",
        schedule: "On request",
        status: "standby",
        lastRun: "Never",
        purpose: "Query Mainline Power billing database",
        integrations: [
            "Supabase"
        ]
    },
    {
        id: "pdf-converter",
        name: "PDF Converter",
        trigger: "mention",
        schedule: "On request",
        status: "standby",
        lastRun: "Never",
        purpose: "Convert HTML and Markdown files to PDF",
        integrations: [
            "Chrome Headless"
        ]
    },
    {
        id: "cron-job-runner",
        name: "Cron Job Runner",
        trigger: "cron",
        schedule: "Daily",
        status: "standby",
        lastRun: "Never",
        purpose: "Master skill for running cron jobs with anti-hallucination guardrails",
        integrations: [
            "OpenClaw Cron"
        ]
    }
];
const recentActivity = [
    {
        time: "23m ago",
        agent: "Coder Agent",
        message: "Built Mission Control dashboard and deployed to Vercel",
        type: "success"
    },
    {
        time: "1h ago",
        agent: "Daily Billing",
        message: "Daily billing check completed - no issues",
        type: "info"
    },
    {
        time: "9h ago",
        agent: "Daily Digest",
        message: "Generated daily digest for Mainline",
        type: "info"
    },
    {
        time: "14h ago",
        agent: "People Linker",
        message: "Scanned notes - no new people found",
        type: "info"
    },
    {
        time: "14h ago",
        agent: "Tools & Tactics",
        message: "Scanned notes - 3 new concepts added",
        type: "success"
    },
    {
        time: "15h ago",
        agent: "AI News Digest",
        message: "Generated AI news summary",
        type: "info"
    }
];
const cronHealth = [
    {
        id: "e54e81d8",
        name: "Daily Digest - Mainline",
        schedule: "9:05 AM",
        nextRun: "in 9h",
        lastRun: "9h ago",
        status: "ok"
    },
    {
        id: "acfae32d",
        name: "Daily AI News Digest",
        schedule: "9:30 AM",
        nextRun: "in 9h",
        lastRun: "15h ago",
        status: "ok"
    },
    {
        id: "b537950b",
        name: "Tools & Tactics Scanner",
        schedule: "10:00 AM",
        nextRun: "in 10h",
        lastRun: "14h ago",
        status: "ok"
    },
    {
        id: "e6640474",
        name: "People Linker Scanner",
        schedule: "10:30 AM",
        nextRun: "in 10h",
        lastRun: "14h ago",
        status: "ok"
    },
    {
        id: "7881ea9e",
        name: "Mainline Billing Daily",
        schedule: "11:00 PM",
        nextRun: "in 23h",
        lastRun: "1h ago",
        status: "ok"
    }
];
const projectColors = {
    "mainline-billing": "#00ff88",
    "sugarphilippines": "#ffaa00",
    "mission-control": "#8888ff",
    "frontline-deliveries": "#ff6688"
};
const projectIcons = {
    "mainline-billing": "⚡",
    "sugarphilippines": "🍯",
    "mission-control": "🎯",
    "frontline-deliveries": "🚚"
};
const agentIcons = {
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
    "cron-job-runner": "🤖"
};
}),
"[project]/openclaw-mission-control/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MissionControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-ssr] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/list-todo.js [app-ssr] (ecmascript) <export default as ListTodo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-ssr] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/history.js [app-ssr] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-mission-control/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-mission-control/app/data/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// ============================================
// STYLES - Mobile-first CSS
// ============================================
const mobileFirstStyles = `
  :root {
    --bg-primary: #0a0a0f;
    --bg-secondary: #111118;
    --bg-tertiary: #1a1a2e;
    --border-color: #1a1a2e;
    --accent-green: #00ff88;
    --accent-blue: #8888ff;
    --accent-orange: #ffaa00;
    --accent-red: #ff4466;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --text-muted: #888888;
    --text-dim: #666666;
  }

  /* Base styles */
  .mc-container {
    min-height: 100vh;
    background: var(--bg-primary);
    padding-bottom: 80px; /* Space for bottom nav */
  }

  /* Header */
  .mc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 16px;
    background: linear-gradient(180deg, #111118 0%, #0a0a0f 100%);
    border-bottom: 1px solid var(--border-color);
  }

  .mc-header-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.5px;
  }

  .mc-header-clock {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 14px;
    color: var(--accent-blue);
    background: rgba(136, 136, 255, 0.1);
    padding: 8px 14px;
    border-radius: 10px;
    border: 1px solid rgba(136, 136, 255, 0.2);
  }

  /* Stats Carousel */
  .mc-stats-section {
    padding: 20px 0;
    border-bottom: 1px solid var(--border-color);
  }

  .mc-stats-carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0 16px;
    gap: 12px;
  }

  .mc-stats-carousel::-webkit-scrollbar {
    display: none;
  }

  .mc-stat-card {
    flex: 0 0 calc(100% - 32px);
    scroll-snap-align: center;
    background: linear-gradient(145deg, #111118 0%, #0d0d12 100%);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
  }

  .mc-stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
  }

  .mc-stat-card.green::before { background: var(--accent-green); }
  .mc-stat-card.blue::before { background: var(--accent-blue); }
  .mc-stat-card.orange::before { background: var(--accent-orange); }
  .mc-stat-card.red::before { background: var(--accent-red); }

  .mc-stat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .mc-stat-label {
    font-size: 14px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .mc-stat-icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mc-stat-icon-wrapper.green { background: rgba(0, 255, 136, 0.15); }
  .mc-stat-icon-wrapper.blue { background: rgba(136, 136, 255, 0.15); }
  .mc-stat-icon-wrapper.orange { background: rgba(255, 170, 0, 0.15); }
  .mc-stat-icon-wrapper.red { background: rgba(255, 68, 102, 0.15); }

  .mc-stat-value {
    font-size: 42px;
    font-weight: 700;
    color: var(--text-primary);
    font-family: var(--font-jetbrains-mono), monospace;
    margin-top: 8px;
  }

  .mc-stats-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
  }

  .mc-stats-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--text-dim);
    transition: all 0.3s ease;
  }

  .mc-stats-dot.active {
    background: var(--accent-green);
    width: 24px;
    border-radius: 4px;
  }

  /* Content Area */
  .mc-content {
    padding: 16px;
  }

  /* Project Cards */
  .mc-project-card {
    background: linear-gradient(145deg, #111118 0%, #0d0d12 100%);
    border-radius: 16px;
    border: 1px solid var(--border-color);
    margin-bottom: 16px;
    overflow: hidden;
  }

  .mc-project-header {
    padding: 20px;
    cursor: pointer;
  }

  .mc-project-title-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .mc-project-icon {
    font-size: 28px;
  }

  .mc-project-name {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
    flex: 1;
  }

  .mc-project-expand {
    color: var(--text-dim);
    transition: transform 0.3s ease;
  }

  .mc-project-expand.expanded {
    transform: rotate(180deg);
  }

  /* Progress Bar */
  .mc-progress-container {
    margin: 16px 0;
  }

  .mc-progress-bar-bg {
    height: 8px;
    background: var(--bg-tertiary);
    border-radius: 4px;
    overflow: hidden;
  }

  .mc-progress-bar-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.5s ease;
  }

  .mc-progress-text {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 13px;
    color: var(--text-muted);
  }

  /* Status Badge */
  .mc-status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .mc-status-badge::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .mc-status-badge.active {
    background: rgba(0, 255, 136, 0.15);
    color: var(--accent-green);
    border: 1px solid rgba(0, 255, 136, 0.3);
  }
  .mc-status-badge.active::before {
    background: var(--accent-green);
    box-shadow: 0 0 8px var(--accent-green);
  }

  .mc-status-badge.in-progress {
    background: rgba(255, 170, 0, 0.15);
    color: var(--accent-orange);
    border: 1px solid rgba(255, 170, 0, 0.3);
  }
  .mc-status-badge.in-progress::before {
    background: var(--accent-orange);
    box-shadow: 0 0 8px var(--accent-orange);
  }

  .mc-status-badge.pending {
    background: rgba(136, 136, 255, 0.15);
    color: var(--accent-blue);
    border: 1px solid rgba(136, 136, 255, 0.3);
  }
  .mc-status-badge.pending::before {
    background: var(--accent-blue);
    box-shadow: 0 0 8px var(--accent-blue);
  }

  .mc-status-badge.done {
    background: rgba(0, 255, 136, 0.15);
    color: var(--accent-green);
    border: 1px solid rgba(0, 255, 136, 0.3);
  }
  .mc-status-badge.done::before {
    background: var(--accent-green);
    box-shadow: 0 0 8px var(--accent-green);
  }

  /* Expanded Content */
  .mc-expanded {
    padding: 0 20px 20px;
    border-top: 1px solid var(--border-color);
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .mc-section-title {
    font-size: 11px;
    font-weight: 600;
    color: var(--text-dim);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 20px 0 12px;
  }

  .mc-tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .mc-tech-tag {
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 12px;
    background: rgba(136, 136, 255, 0.1);
    color: var(--accent-blue);
    border: 1px solid rgba(136, 136, 255, 0.2);
  }

  .mc-task-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mc-task-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    border: 1px solid var(--border-color);
  }

  .mc-task-text {
    flex: 1;
    font-size: 14px;
    color: var(--text-secondary);
  }

  .mc-task-text.done {
    color: var(--text-dim);
    text-decoration: line-through;
  }

  .mc-project-url {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: var(--accent-blue);
    text-decoration: none;
    margin-top: 8px;
    word-break: break-all;
  }

  /* Agent Cards */
  .mc-agent-card {
    background: linear-gradient(145deg, #111118 0%, #0d0d12 100%);
    border-radius: 16px;
    border: 1px solid var(--border-color);
    margin-bottom: 16px;
    overflow: hidden;
  }

  .mc-agent-header {
    padding: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .mc-agent-avatar {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    border: 1px solid var(--border-color);
    flex-shrink: 0;
  }

  .mc-agent-info {
    flex: 1;
  }

  .mc-agent-name {
    font-size: 17px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
  }

  .mc-agent-purpose {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.4;
  }

  .mc-agent-badges {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  .mc-trigger-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .mc-trigger-badge.cron {
    background: rgba(255, 170, 0, 0.15);
    color: var(--accent-orange);
    border: 1px solid rgba(255, 170, 0, 0.3);
  }

  .mc-trigger-badge.mention {
    background: rgba(136, 136, 255, 0.15);
    color: var(--accent-blue);
    border: 1px solid rgba(136, 136, 255, 0.3);
  }

  .mc-trigger-badge.telegram {
    background: rgba(0, 255, 136, 0.15);
    color: var(--accent-green);
    border: 1px solid rgba(0, 255, 136, 0.3);
  }

  .mc-trigger-badge.on-demand {
    background: rgba(255, 102, 136, 0.15);
    color: #ff6688;
    border: 1px solid rgba(255, 102, 136, 0.3);
  }

  .mc-agent-detail {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    margin-bottom: 10px;
  }

  .mc-agent-detail-label {
    font-size: 11px;
    color: var(--text-dim);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .mc-agent-detail-value {
    font-size: 14px;
    color: var(--text-secondary);
  }

  .mc-integrations-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .mc-integration-tag {
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 11px;
    background: rgba(255, 170, 0, 0.1);
    color: var(--accent-orange);
    border: 1px solid rgba(255, 170, 0, 0.2);
  }

  /* Activity List */
  .mc-activity-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .mc-activity-item {
    display: flex;
    gap: 12px;
    padding: 16px;
    background: linear-gradient(145deg, #111118 0%, #0d0d12 100%);
    border-radius: 14px;
    border: 1px solid var(--border-color);
  }

  .mc-activity-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 4px;
    flex-shrink: 0;
  }

  .mc-activity-dot.success {
    background: var(--accent-green);
    box-shadow: 0 0 10px var(--accent-green);
  }

  .mc-activity-dot.info {
    background: var(--accent-blue);
    box-shadow: 0 0 10px var(--accent-blue);
  }

  .mc-activity-dot.warning {
    background: var(--accent-orange);
    box-shadow: 0 0 10px var(--accent-orange);
  }

  .mc-activity-dot.error {
    background: var(--accent-red);
    box-shadow: 0 0 10px var(--accent-red);
  }

  .mc-activity-content {
    flex: 1;
  }

  .mc-activity-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }

  .mc-activity-time {
    font-size: 12px;
    color: var(--text-dim);
    font-family: var(--font-jetbrains-mono), monospace;
  }

  .mc-activity-agent {
    font-size: 12px;
    color: var(--accent-blue);
    font-weight: 500;
  }

  .mc-activity-message {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  /* Cron Health Section in Activity */
  .mc-cron-section {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid var(--border-color);
  }

  .mc-cron-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    margin-bottom: 10px;
  }

  .mc-cron-info {
    flex: 1;
  }

  .mc-cron-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 2px;
  }

  .mc-cron-schedule {
    font-size: 12px;
    color: var(--accent-blue);
    font-family: var(--font-jetbrains-mono), monospace;
  }

  .mc-cron-times {
    text-align: right;
  }

  .mc-cron-time {
    font-size: 11px;
    color: var(--text-dim);
  }

  /* Bottom Navigation */
  .mc-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, #0d0d12 0%, #0a0a0f 100%);
    border-top: 1px solid var(--border-color);
    display: flex;
    justify-content: space-around;
    padding: 8px 0 calc(8px + env(safe-area-inset-bottom));
    z-index: 100;
  }

  .mc-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--text-dim);
    transition: color 0.2s ease;
  }

  .mc-nav-item.active {
    color: var(--accent-green);
  }

  .mc-nav-icon {
    width: 24px;
    height: 24px;
  }

  .mc-nav-label {
    font-size: 11px;
    font-weight: 500;
  }

  /* Desktop Overrides */
  @media (min-width: 768px) {
    .mc-container {
      padding-bottom: 0;
    }

    .mc-header {
      padding: 24px 32px;
    }

    .mc-header-title {
      font-size: 28px;
    }

    .mc-stats-carousel {
      padding: 0 32px;
    }

    .mc-stat-card {
      flex: 0 0 calc(50% - 38px);
    }

    .mc-content {
      padding: 24px 32px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .mc-bottom-nav {
      display: none;
    }

    /* Desktop tabs */
    .mc-desktop-tabs {
      display: flex;
      gap: 8px;
      padding: 0 32px;
      border-bottom: 1px solid var(--border-color);
    }

    .mc-desktop-tab {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 16px 20px;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-dim);
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .mc-desktop-tab:hover {
      color: var(--text-secondary);
    }

    .mc-desktop-tab.active {
      color: var(--accent-green);
      border-bottom-color: var(--accent-green);
    }
  }

  @media (max-width: 767px) {
    .mc-desktop-tabs {
      display: none;
    }
  }
`;
// ============================================
// COMPONENTS
// ============================================
function StyleInjector() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
        dangerouslySetInnerHTML: {
            __html: mobileFirstStyles
        }
    }, void 0, false, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 776,
        columnNumber: 10
    }, this);
}
function LiveClock() {
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const update = ()=>{
            setTime(new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }));
        };
        update();
        const interval = setInterval(update, 1000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mc-header-clock",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 800,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: time
            }, void 0, false, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 801,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 799,
        columnNumber: 5
    }, this);
}
function StatusBadge({ status }) {
    const normalizedStatus = status.toLowerCase().replace(/\s+/g, "-");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `mc-status-badge ${normalizedStatus}`,
        children: status
    }, void 0, false, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 808,
        columnNumber: 10
    }, this);
}
function ProgressBar({ progress, color }) {
    const doneCount = Math.floor(progress / 100 * 10);
    const totalCount = 10;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mc-progress-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mc-progress-bar-bg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mc-progress-bar-fill",
                    style: {
                        width: `${progress}%`,
                        background: color
                    }
                }, void 0, false, {
                    fileName: "[project]/openclaw-mission-control/app/page.tsx",
                    lineNumber: 818,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 817,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mc-progress-text",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Progress"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 824,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color,
                            fontWeight: 600
                        },
                        children: [
                            progress,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 825,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 823,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 816,
        columnNumber: 5
    }, this);
}
// ============================================
// STAT CAROUSEL
// ============================================
function StatsCarousel() {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tasksDoneParts = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].tasksDone.split("/");
    const tasksDoneNum = parseInt(tasksDoneParts[0]) || 0;
    const totalTasksNum = parseInt(tasksDoneParts[1]) || 0;
    const taskProgress = totalTasksNum > 0 ? Math.round(tasksDoneNum / totalTasksNum * 100) : 0;
    const statCards = [
        {
            label: "Projects",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].projects,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
            color: "#00ff88",
            variant: "green",
            subtext: "Active projects"
        },
        {
            label: "Agents",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].agents,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
            color: "#8888ff",
            variant: "blue",
            subtext: "Running agents"
        },
        {
            label: "Tasks Done",
            value: `${tasksDoneNum}/${totalTasksNum}`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"],
            color: "#ffaa00",
            variant: "orange",
            subtext: `${taskProgress}% complete`
        },
        {
            label: "Cron Issues",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].cronIssues,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"],
            color: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].cronIssues > 0 ? "#ff4466" : "#00ff88",
            variant: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].cronIssues > 0 ? "red" : "green",
            subtext: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].cronIssues > 0 ? "Needs attention" : "All healthy"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const carousel = carouselRef.current;
        if (!carousel) return;
        const handleScroll = ()=>{
            const scrollLeft = carousel.scrollLeft;
            const cardWidth = carousel.offsetWidth - 32;
            const newIndex = Math.round(scrollLeft / cardWidth);
            setActiveIndex(Math.min(newIndex, statCards.length - 1));
        };
        carousel.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>carousel.removeEventListener("scroll", handleScroll);
    }, [
        statCards.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mc-stats-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mc-stats-carousel",
                ref: carouselRef,
                children: statCards.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mc-stat-card ${stat.variant}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mc-stat-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mc-stat-label",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 899,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mc-stat-icon-wrapper ${stat.variant}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                            size: 22,
                                            color: stat.color
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                            lineNumber: 901,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 900,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 898,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mc-stat-value",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 904,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 897,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 895,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mc-stats-dots",
                children: statCards.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mc-stats-dot ${idx === activeIndex ? "active" : ""}`
                    }, idx, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 910,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 908,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 894,
        columnNumber: 5
    }, this);
}
// ============================================
// PROJECT CARD
// ============================================
function ProjectCard({ project }) {
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const doneCount = project.tasks.filter((t)=>t.done).length;
    const progress = Math.round(doneCount / project.tasks.length * 100);
    const color = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectColors"][project.id] || "#8888ff";
    const icon = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectIcons"][project.id] || "📁";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mc-project-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mc-project-header",
                onClick: ()=>setExpanded(!expanded),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mc-project-title-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mc-project-icon",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 935,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mc-project-name",
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 936,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mc-project-expand ${expanded ? "expanded" : ""}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                    lineNumber: 938,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 937,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 934,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                        status: project.status
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 941,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                        progress: progress,
                        color: color
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 942,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 933,
                columnNumber: 7
            }, this),
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mc-expanded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "14px",
                            color: "#888",
                            lineHeight: 1.6,
                            marginTop: "16px"
                        },
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 947,
                        columnNumber: 11
                    }, this),
                    project.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: project.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "mc-project-url",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 959,
                                columnNumber: 15
                            }, this),
                            project.url
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 952,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mc-section-title",
                        children: "Tech Stack"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 964,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mc-tech-tags",
                        children: project.tech.map((tech, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mc-tech-tag",
                                children: tech
                            }, idx, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 967,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 965,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mc-section-title",
                        children: [
                            "Tasks (",
                            doneCount,
                            "/",
                            project.tasks.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 973,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mc-task-list",
                        children: project.tasks.map((task, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mc-task-item",
                                children: [
                                    task.done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 18,
                                        color: "#00ff88"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 978,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                        size: 18,
                                        color: "#ffaa00"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 980,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `mc-task-text ${task.done ? "done" : ""}`,
                                        children: task.name
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 982,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 976,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 974,
                        columnNumber: 11
                    }, this),
                    project.cronJobs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mc-section-title",
                                children: "Cron Jobs"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 991,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mc-task-list",
                                children: project.cronJobs.map((cron, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mc-task-item",
                                        children: [
                                            cron.status === "ok" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 16,
                                                color: "#00ff88"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                                lineNumber: 996,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                size: 16,
                                                color: "#ff4466"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                                lineNumber: 998,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "12px",
                                                    color: "#8888ff",
                                                    fontFamily: "var(--font-jetbrains-mono), monospace",
                                                    minWidth: "70px"
                                                },
                                                children: cron.schedule
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                                lineNumber: 1000,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    flex: 1,
                                                    fontSize: "14px",
                                                    color: "#ccc"
                                                },
                                                children: cron.name
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                                lineNumber: 1003,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "11px",
                                                    color: "#666"
                                                },
                                                children: cron.lastRun
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                                lineNumber: 1006,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 994,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 992,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 946,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 932,
        columnNumber: 5
    }, this);
}
// ============================================
// AGENT CARD
// ============================================
function AgentCard({ agent }) {
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const triggerColors = {
        cron: "#ffaa00",
        mention: "#8888ff",
        telegram: "#00ff88",
        "on-demand": "#ff6688"
    };
    const icon = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agentIcons"][agent.id] || "🤖";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mc-agent-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mc-agent-header",
                onClick: ()=>setExpanded(!expanded),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mc-agent-avatar",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1038,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mc-agent-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mc-agent-name",
                                children: agent.name
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1040,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mc-agent-purpose",
                                children: agent.purpose
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1041,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mc-agent-badges",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                        status: agent.status
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 1043,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `mc-trigger-badge ${agent.trigger}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                size: 10
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 15
                                            }, this),
                                            agent.trigger
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1042,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1039,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "#666",
                            transform: expanded ? "rotate(180deg)" : "rotate(0)",
                            transition: "transform 0.3s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/openclaw-mission-control/app/page.tsx",
                            lineNumber: 1051,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1050,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1037,
                columnNumber: 7
            }, this),
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mc-expanded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mc-agent-detail",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                size: 18,
                                color: "#8888ff"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1058,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mc-agent-detail-label",
                                        children: "Schedule"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 1060,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mc-agent-detail-value",
                                        children: agent.schedule
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 1061,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1059,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1057,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mc-agent-detail",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 18,
                                color: agent.status === "active" ? "#00ff88" : "#ffaa00"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1066,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mc-agent-detail-label",
                                        children: "Last Run"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 1068,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mc-agent-detail-value",
                                        children: agent.lastRun
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 1069,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1067,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1065,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mc-agent-detail",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                size: 18,
                                color: "#ffaa00"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1074,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mc-agent-detail-label",
                                        children: "Integrations"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 1076,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mc-integrations-list",
                                        style: {
                                            marginTop: "6px"
                                        },
                                        children: agent.integrations.map((integration, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mc-integration-tag",
                                                children: integration
                                            }, idx, false, {
                                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                                lineNumber: 1079,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 1077,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1075,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1073,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1056,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 1036,
        columnNumber: 5
    }, this);
}
// ============================================
// ACTIVITY LIST
// ============================================
function ActivityView() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mc-activity-list",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recentActivity"].map((activity, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mc-activity-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mc-activity-dot ${activity.type}`
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mc-activity-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mc-activity-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mc-activity-time",
                                                children: activity.time
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                                lineNumber: 1104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mc-activity-agent",
                                                children: activity.agent
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                                lineNumber: 1105,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 1103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mc-activity-message",
                                        children: activity.message
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                        lineNumber: 1107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1100,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1098,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mc-cron-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mc-section-title",
                        style: {
                            marginTop: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                size: 14,
                                style: {
                                    display: "inline",
                                    marginRight: "6px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1116,
                                columnNumber: 11
                            }, this),
                            "Cron Health"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1115,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cronHealth"].map((cron)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mc-cron-card",
                            children: [
                                cron.status === "ok" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 20,
                                    color: "#00ff88"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                    lineNumber: 1122,
                                    columnNumber: 15
                                }, this) : cron.status === "failing" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    size: 20,
                                    color: "#ff4466"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                    lineNumber: 1124,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                    size: 20,
                                    color: "#ffaa00"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                    lineNumber: 1126,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mc-cron-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mc-cron-name",
                                            children: cron.name
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                            lineNumber: 1129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mc-cron-schedule",
                                            children: cron.schedule
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                            lineNumber: 1130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                    lineNumber: 1128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mc-cron-times",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mc-cron-time",
                                            children: [
                                                "Next: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#00ff88"
                                                    },
                                                    children: cron.nextRun
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                                    lineNumber: 1134,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                            lineNumber: 1133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mc-cron-time",
                                            children: [
                                                "Last: ",
                                                cron.lastRun
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                            lineNumber: 1136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                    lineNumber: 1132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, cron.id, true, {
                            fileName: "[project]/openclaw-mission-control/app/page.tsx",
                            lineNumber: 1120,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 1097,
        columnNumber: 5
    }, this);
}
// ============================================
// DESKTOP TABS
// ============================================
function DesktopTabs({ activeTab, setActiveTab }) {
    const tabs = [
        {
            id: "projects",
            label: "Projects",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
        },
        {
            id: "agents",
            label: "Agents",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
        },
        {
            id: "activity",
            label: "Activity",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mc-desktop-tabs",
        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveTab(tab.id),
                className: `mc-desktop-tab ${activeTab === tab.id ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1163,
                        columnNumber: 11
                    }, this),
                    tab.label
                ]
            }, tab.id, true, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1158,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 1156,
        columnNumber: 5
    }, this);
}
// ============================================
// BOTTOM NAVIGATION
// ============================================
function BottomNav({ activeTab, setActiveTab }) {
    const tabs = [
        {
            id: "projects",
            label: "Projects",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
        },
        {
            id: "agents",
            label: "Agents",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
        },
        {
            id: "activity",
            label: "Activity",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "mc-bottom-nav",
        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveTab(tab.id),
                className: `mc-nav-item ${activeTab === tab.id ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                        className: "mc-nav-icon"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1189,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mc-nav-label",
                        children: tab.label
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1190,
                        columnNumber: 11
                    }, this)
                ]
            }, tab.id, true, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1184,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 1182,
        columnNumber: 5
    }, this);
}
function MissionControl() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("projects");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mc-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyleInjector, {}, void 0, false, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mc-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mc-header-title",
                        children: "Mission Control"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveClock, {}, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCarousel, {}, void 0, false, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopTabs, {
                activeTab: activeTab,
                setActiveTab: setActiveTab
            }, void 0, false, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mc-content",
                children: [
                    activeTab === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: project
                            }, project.id, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1224,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1222,
                        columnNumber: 11
                    }, this),
                    activeTab === "agents" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agents"].map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AgentCard, {
                                agent: agent
                            }, agent.id, false, {
                                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                                lineNumber: 1232,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1230,
                        columnNumber: 11
                    }, this),
                    activeTab === "activity" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityView, {}, void 0, false, {
                        fileName: "[project]/openclaw-mission-control/app/page.tsx",
                        lineNumber: 1237,
                        columnNumber: 38
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$mission$2d$control$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomNav, {
                activeTab: activeTab,
                setActiveTab: setActiveTab
            }, void 0, false, {
                fileName: "[project]/openclaw-mission-control/app/page.tsx",
                lineNumber: 1241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-mission-control/app/page.tsx",
        lineNumber: 1204,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__91103355._.js.map