<#
.SYNOPSIS
    OpenClaw Mission Control - Windows Event Push Script
    
.DESCRIPTION
    This script collects OpenClaw activity data and pushes it to the Mission Control
    webhook endpoint for real-time dashboard updates.
    
    Should be run via Windows Task Scheduler every 1-5 minutes for near real-time updates.
    
.PARAMETER WebhookUrl
    The URL of the webhook endpoint (default: https://openclaw-mission-control-rosy-seven.vercel.app/api/webhook)
    
.PARAMETER DryRun
    If set, only outputs what would be sent without making the HTTP request
    
.EXAMPLE
    .\push-to-mission-control.ps1
    
.EXAMPLE
    .\push-to-mission-control.ps1 -DryRun
    
.EXAMPLE
    .\push-to-mission-control.ps1 -WebhookUrl "http://localhost:3000/api/webhook"
#>

param(
    [string]$WebhookUrl = "https://openclaw-mission-control-rosy-seven.vercel.app/api/webhook",
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"

# Colors for console output
$Green = "`e[32m"
$Yellow = "`e[33m"
$Red = "`e[31m"
$Blue = "`e[34m"
$Reset = "`e[0m"

function Write-Status($message, $color = $Reset) {
    $timestamp = Get-Date -Format "HH:mm:ss"
    Write-Host "$color[$timestamp] $message$Reset"
}

function Get-OpenClawStatus {
    try {
        $output = & openclaw status 2>&1
        $active = $output -match "running|active|online"
        $version = if ($output -match "version[:\s]+(v?[\d.]+)") { $matches[1] } else { $null }
        $sessions = if ($output -match "sessions[:\s]+(\d+)") { [int]$matches[1] } else { $null }
        
        return @{
            active = $active
            version = $version
            sessions = $sessions
            uptime = $null
        }
    }
    catch {
        Write-Status "Failed to get OpenClaw status: $($_.Exception.Message)" $Yellow
        return @{
            active = $false
            version = $null
            sessions = $null
            uptime = $null
        }
    }
}

function Get-SessionHistory {
    try {
        $output = & openclaw sessions list --limit 10 2>&1
        $sessions = @()
        $lines = $output -split "`r?`n"
        
        foreach ($line in $lines) {
            $trimmed = $line.Trim()
            if (-not $trimmed -or $trimmed.StartsWith("-") -or $trimmed -match "^(ID|TYPE|STATUS)") {
                continue
            }
            
            # Parse session line
            $parts = $trimmed -split "\s{2,}"
            if ($parts.Count -ge 3) {
                $status = if ($parts[2] -match "complete|success") { "complete" } 
                          elseif ($parts[2] -match "error|fail") { "error" } 
                          else { "active" }
                
                $sessions += @{
                    id = $parts[0].Substring(0, [Math]::Min(8, $parts[0].Length))
                    type = $parts[1]
                    status = $status
                    created = if ($parts.Count -gt 3) { $parts[3] } else { "recently" }
                }
            }
        }
        
        return $sessions
    }
    catch {
        Write-Status "Failed to get session history: $($_.Exception.Message)" $Yellow
        return @()
    }
}

function Get-CronJobs {
    try {
        $output = & openclaw cron list 2>&1
        $jobs = @()
        $lines = $output -split "`r?`n"
        
        foreach ($line in $lines) {
            $trimmed = $line.Trim()
            if (-not $trimmed -or $trimmed.StartsWith("-") -or $trimmed -match "^(ID|NAME|SCHEDULE)") {
                continue
            }
            
            $parts = $trimmed -split "\s{2,}"
            if ($parts.Count -ge 3) {
                $statusStr = $parts[$parts.Count - 1].ToLower()
                $status = if ($statusStr -match "ok|active") { "ok" }
                          elseif ($statusStr -match "fail|error") { "failing" }
                          else { "pending" }
                
                $jobs += @{
                    id = $parts[0].Substring(0, [Math]::Min(8, $parts[0].Length))
                    name = $parts[1]
                    schedule = $parts[2]
                    status = $status
                }
            }
        }
        
        return $jobs
    }
    catch {
        Write-Status "Failed to get cron jobs: $($_.Exception.Message)" $Yellow
        return @()
    }
}

function Send-EventToWebhook {
    param(
        [hashtable]$EventData
    )
    
    $body = $EventData | ConvertTo-Json -Depth 10
    
    if ($DryRun) {
        Write-Status "DRY RUN - Would send:" $Blue
        Write-Host $body
        return @{ success = $true }
    }
    
    try {
        $response = Invoke-RestMethod -Uri $WebhookUrl -Method Post -ContentType "application/json" -Body $body -TimeoutSec 30
        return $response
    }
    catch {
        $statusCode = $_.Exception.Response?.StatusCode.value__
        $errorMessage = $_.Exception.Message
        
        if ($statusCode) {
            Write-Status "HTTP Error ${statusCode}: $errorMessage" $Red
        } else {
            Write-Status "Request failed: $errorMessage" $Red
        }
        
        throw
    }
}

function Send-Heartbeat {
    $event = @{
        event_type = "heartbeat"
        timestamp = (Get-Date -Format "o")
        message = "Windows Task Scheduler heartbeat"
        severity = "info"
        metadata = @{
            hostname = $env:COMPUTERNAME
            username = $env:USERNAME
            source = "windows_task_scheduler"
        }
    }
    
    return Send-EventToWebhook -EventData $event
}

function Send-GatewayStatus {
    param([hashtable]$Status)
    
    $eventType = if ($Status.active) { "gateway_health" } else { "gateway_crash" }
    $severity = if ($Status.active) { "info" } else { "critical" }
    
    $event = @{
        event_type = $eventType
        timestamp = (Get-Date -Format "o")
        message = if ($Status.active) { "OpenClaw gateway is healthy" } else { "OpenClaw gateway appears offline" }
        severity = $severity
        metadata = @{
            version = $Status.version
            sessions = $Status.sessions
            hostname = $env:COMPUTERNAME
        }
    }
    
    return Send-EventToWebhook -EventData $event
}

function Send-SessionEvents {
    param([array]$Sessions)
    
    $results = @()
    
    foreach ($session in $Sessions | Select-Object -First 5) {
        $eventType = switch ($session.status) {
            "complete" { "session_complete" }
            "error" { "session_complete" } # Could be error, but we use complete for now
            default { "session_spawn" }
        }
        
        $severity = if ($session.status -eq "error") { "error" } else { "info" }
        
        $event = @{
            event_type = $eventType
            timestamp = (Get-Date -Format "o")
            session_id = $session.id
            agent_name = $session.type
            message = "$($session.type) session $($session.status)"
            severity = $severity
            metadata = @{
                session_status = $session.status
                created = $session.created
            }
        }
        
        $results += Send-EventToWebhook -EventData $event
    }
    
    return $results
}

function Send-CronEvents {
    param([array]$Jobs)
    
    $results = @()
    
    foreach ($job in $Jobs) {
        $eventType = switch ($job.status) {
            "ok" { "cron_complete" }
            "failing" { "cron_error" }
            default { "cron_start" }
        }
        
        $severity = switch ($job.status) {
            "ok" { "info" }
            "failing" { "error" }
            default { "warning" }
        }
        
        $event = @{
            event_type = $eventType
            timestamp = (Get-Date -Format "o")
            cron_id = $job.id
            cron_name = $job.name
            message = "Cron job '$($job.name)' is $($job.status)"
            severity = $severity
            metadata = @{
                schedule = $job.schedule
            }
        }
        
        $results += Send-EventToWebhook -EventData $event
    }
    
    return $results
}

# ===============================
# MAIN EXECUTION
# ===============================

Write-Status "OpenClaw Mission Control - Event Push Script" $Blue
Write-Status "Webhook URL: $WebhookUrl" $Reset
Write-Status "Dry Run: $DryRun" $Reset
Write-Host ""

# Test webhook connectivity first
if (-not $DryRun) {
    Write-Status "Testing webhook connectivity..." $Yellow
    try {
        $testResponse = Invoke-RestMethod -Uri $WebhookUrl -Method Get -TimeoutSec 10
        Write-Status "Webhook is healthy: $($testResponse.message)" $Green
    }
    catch {
        Write-Status "Webhook health check failed: $($_.Exception.Message)" $Red
        exit 1
    }
}
Write-Host ""

# Send heartbeat
Write-Status "Sending heartbeat..." $Yellow
try {
    Send-Heartbeat | Out-Null
    Write-Status "Heartbeat sent successfully" $Green
}
catch {
    Write-Status "Failed to send heartbeat" $Red
}

# Get and send gateway status
Write-Status "Checking OpenClaw gateway status..." $Yellow
$status = Get-OpenClawStatus
try {
    Send-GatewayStatus -Status $status | Out-Null
    Write-Status "Gateway status sent: $(if ($status.active) { 'ONLINE' } else { 'OFFLINE' })" $(if ($status.active) { $Green } else { $Red })
}
catch {
    Write-Status "Failed to send gateway status" $Red
}

# Get and send session events
Write-Status "Collecting session history..." $Yellow
$sessions = Get-SessionHistory
if ($sessions.Count -gt 0) {
    Write-Status "Found $($sessions.Count) sessions, sending events..." $Yellow
    try {
        Send-SessionEvents -Sessions $sessions | Out-Null
        Write-Status "Session events sent successfully" $Green
    }
    catch {
        Write-Status "Failed to send some session events" $Red
    }
}
else {
    Write-Status "No sessions found" $Yellow
}

# Get and send cron events
Write-Status "Collecting cron job status..." $Yellow
$jobs = Get-CronJobs
if ($jobs.Count -gt 0) {
    Write-Status "Found $($jobs.Count) cron jobs, sending events..." $Yellow
    try {
        Send-CronEvents -Jobs $jobs | Out-Null
        Write-Status "Cron events sent successfully" $Green
    }
    catch {
        Write-Status "Failed to send some cron events" $Red
    }
}
else {
    Write-Status "No cron jobs found" $Yellow
}

Write-Host ""
Write-Status "Push complete!" $Green
