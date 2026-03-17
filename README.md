# OpenClaw Mission Control

A NASA-style mission control dashboard for monitoring OpenClaw agents, cron jobs, and real-time activity.

## Features

- **Real-time Updates**: Supabase Realtime subscriptions for instant data updates
- **Live Activity Terminal**: Terminal-style scrolling log showing agent starts/stops, cron jobs, gateway health, and tool usage
- **Webhook Events**: Receive events from OpenClaw via HTTP webhooks
- **Mobile-first Design**: Responsive UI optimized for mobile and desktop

## Tech Stack

- Next.js 16 + TypeScript + Tailwind CSS
- Supabase (PostgreSQL + Realtime)
- Vercel deployment

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://gjvlqjjfsfnjpyjpklks.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqdmxxampmc2ZuanB5anBrbGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4OTkyNTAsImV4cCI6MjA4NTQ3NTI1MH0.McLrZ5qPowDuel03h3JelfpcGIuR8-Dcc042Sc1bR44
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqdmxxampmc2ZuanB5anBrbGtzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTg5OTI1MCwiZXhwIjoyMDg1NDc1MjUwfQ.AoRAyMhJ_xUaqwYljmHIy7U3zfsUHRhz8IspdvwWMls
```

## API Endpoints

### `/api/webhook` - Receive OpenClaw Events

POST events to this endpoint to stream them to the dashboard in real-time.

**Event Types:**
- `agent_start`, `agent_complete`, `agent_error`
- `cron_start`, `cron_complete`, `cron_error`
- `gateway_health`, `gateway_crash`
- `session_spawn`, `session_complete`
- `tool_call`, `heartbeat`, `error`

**Example Payload:**
```json
{
  "event_type": "agent_start",
  "timestamp": "2026-03-18T10:30:00Z",
  "agent_id": "daily-digest-mainline",
  "agent_name": "Daily Digest - Mainline",
  "message": "Agent started execution",
  "severity": "info",
  "metadata": {
    "trigger": "cron",
    "schedule": "9:05 AM"
  }
}
```

### Windows Task Scheduler Integration

Run `scripts/push-to-mission-control.ps1` via Windows Task Scheduler every 1-5 minutes to push OpenClaw status updates to the dashboard.

**Setup:**
1. Open Task Scheduler
2. Create Basic Task
3. Name: "OpenClaw Mission Control Push"
4. Trigger: Every 5 minutes
5. Action: Start a program
6. Program: `powershell.exe`
7. Arguments: `-ExecutionPolicy Bypass -File "C:\path\to\push-to-mission-control.ps1"`

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
vercel --prod
```

## Architecture

```
┌─────────────────┐     POST events      ┌──────────────────┐
│   OpenClaw CLI  │ ────────────────────▶ │  /api/webhook    │
│   (Windows)     │                      │  (Next.js API)   │
└─────────────────┘                      └────────┬─────────┘
                                                  │
                                                  ▼
┌─────────────────┐     Realtime Sub      ┌──────────────────┐
│   Dashboard     │ ◀──────────────────── │    Supabase      │
│   (Next.js)     │                       │   (PostgreSQL)   │
└─────────────────┘                       └──────────────────┘
```
