"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Terminal, Activity, Cpu, Clock, AlertCircle, CheckCircle2, XCircle, Zap, Layers } from "lucide-react";

export interface TerminalLogEntry {
  id: string;
  timestamp: string;
  event_type: string;
  agent_name?: string;
  message: string;
  severity: "info" | "warning" | "error" | "critical";
  metadata?: Record<string, any>;
}

interface LiveActivityTerminalProps {
  logs: TerminalLogEntry[];
  maxLines?: number;
  autoScroll?: boolean;
  onPause?: () => void;
  onResume?: () => void;
  isPaused?: boolean;
}

// Event type icons and colors
const eventConfig: Record<string, { icon: React.ElementType; color: string; label: string }> = {
  agent_start: { icon: Play, color: "#00ff88", label: "AGENT" },
  agent_complete: { icon: CheckCircle2, color: "#00ff88", label: "AGENT" },
  agent_error: { icon: XCircle, color: "#ff4466", label: "AGENT" },
  cron_start: { icon: Clock, color: "#ffaa00", label: "CRON" },
  cron_complete: { icon: CheckCircle2, color: "#00ff88", label: "CRON" },
  cron_error: { icon: XCircle, color: "#ff4466", label: "CRON" },
  gateway_health: { icon: Activity, color: "#00ff88", label: "GATEWAY" },
  gateway_crash: { icon: AlertCircle, color: "#ff4466", label: "GATEWAY" },
  session_spawn: { icon: Layers, color: "#8888ff", label: "SESSION" },
  session_complete: { icon: CheckCircle2, color: "#00ff88", label: "SESSION" },
  tool_call: { icon: Zap, color: "#ffaa00", label: "TOOL" },
  heartbeat: { icon: Activity, color: "#8888ff", label: "HEARTBEAT" },
  error: { icon: XCircle, color: "#ff4466", label: "ERROR" },
};

function Play({ size, color }: { size?: number; color?: string }) {
  return (
    <svg width={size || 16} height={size || 16} viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const date = new Date(timestamp);
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  
  if (diffSecs < 5) return "just now";
  if (diffSecs < 60) return `${diffSecs}s ago`;
  const diffMins = Math.floor(diffSecs / 60);
  if (diffMins < 60) return `${diffMins}m ago`;
  return formatTimestamp(timestamp);
}

export function LiveActivityTerminal({
  logs,
  maxLines = 100,
  autoScroll = true,
  onPause,
  onResume,
  isPaused = false,
}: LiveActivityTerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [userScrolled, setUserScrolled] = useState(false);
  const [selectedLog, setSelectedLog] = useState<TerminalLogEntry | null>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current && autoScroll && !userScrolled && !isPaused) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs, autoScroll, userScrolled, isPaused]);

  // Handle scroll events to detect user scrolling
  const handleScroll = useCallback(() => {
    if (terminalRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = terminalRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
      setUserScrolled(!isAtBottom);
    }
  }, []);

  // Truncate logs to maxLines
  const displayLogs = logs.slice(-maxLines);

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <Terminal size={16} color="#00ff88" />
          <span style={styles.headerTitle}>Live Activity Stream</span>
          {isPaused && (
            <span style={styles.pausedBadge}>PAUSED</span>
          )}
        </div>
        <div style={styles.headerRight}>
          <span style={styles.logCount}>{logs.length} events</span>
          <button
            onClick={() => isPaused ? onResume?.() : onPause?.()}
            style={styles.pauseButton}
          >
            {isPaused ? "▶ Resume" : "⏸ Pause"}
          </button>
        </div>
      </div>

      {/* Terminal */}
      <div
        ref={terminalRef}
        onScroll={handleScroll}
        style={styles.terminal}
      >
        {displayLogs.length === 0 ? (
          <div style={styles.emptyState}>
            <Activity size={32} color="#333" />
            <p style={styles.emptyText}>Waiting for activity...</p>
            <p style={styles.emptySubtext}>Events will appear here in real-time</p>
          </div>
        ) : (
          displayLogs.map((log, index) => (
            <TerminalLine
              key={log.id}
              log={log}
              isNew={index === displayLogs.length - 1}
              onClick={() => setSelectedLog(log)}
            />
          ))
        )}

        {/* Scroll to bottom indicator */}
        {userScrolled && (
          <button
            onClick={() => {
              if (terminalRef.current) {
                terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
                setUserScrolled(false);
              }
            }}
            style={styles.scrollToBottom}
          >
            ↓ New events below
          </button>
        )}
      </div>

      {/* Detail Panel */}
      {selectedLog && (
        <div style={styles.detailPanel}>
          <div style={styles.detailHeader}>
            <span style={styles.detailTitle}>Event Details</span>
            <button
              onClick={() => setSelectedLog(null)}
              style={styles.closeButton}
            >
              ×
            </button>
          </div>
          <div style={styles.detailContent}>
            <DetailRow label="Type" value={selectedLog.event_type} />
            <DetailRow label="Time" value={new Date(selectedLog.timestamp).toLocaleString()} />
            <DetailRow label="Agent" value={selectedLog.agent_name || "-"} />
            <DetailRow label="Message" value={selectedLog.message} />
            <DetailRow label="Severity" value={selectedLog.severity} />
            {selectedLog.metadata && Object.keys(selectedLog.metadata).length > 0 && (
              <div style={styles.metadataSection}>
                <span style={styles.metadataLabel}>Metadata:</span>
                <pre style={styles.metadataPre}>
                  {JSON.stringify(selectedLog.metadata, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Status bar */}
      <div style={styles.statusBar}>
        <div style={styles.statusLeft}>
          <span style={styles.statusIndicator} />
          <span style={styles.statusText}>LIVE</span>
        </div>
        <div style={styles.statusRight}>
          <span style={styles.statusText}>
            {isPaused ? "Paused" : "Streaming..."}
          </span>
        </div>
      </div>
    </div>
  );
}

function TerminalLine({
  log,
  isNew,
  onClick,
}: {
  log: TerminalLogEntry;
  isNew: boolean;
  onClick: () => void;
}) {
  const config = eventConfig[log.event_type] || eventConfig.error;
  const Icon = config.icon;

  return (
    <div
      onClick={onClick}
      style={{
        ...styles.line,
        ...(isNew ? styles.lineNew : {}),
        ...(log.severity === "error" || log.severity === "critical" ? styles.lineError : {}),
      }}
    >
      <span style={styles.lineTimestamp}>{formatTimestamp(log.timestamp)}</span>
      <span style={{ ...styles.lineType, color: config.color }}>
        <Icon size={12} color={config.color} style={{ marginRight: 4 }} />
        {config.label}
      </span>
      {log.agent_name && (
        <span style={styles.lineAgent}>{log.agent_name}</span>
      )}
      <span style={styles.lineMessage}>{log.message}</span>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.detailRow}>
      <span style={styles.detailLabel}>{label}:</span>
      <span style={styles.detailValue}>{value}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: "#0a0a0f",
    border: "1px solid #1a1a2e",
    borderRadius: 12,
    overflow: "hidden",
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
    fontSize: 13,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    background: "linear-gradient(180deg, #111118 0%, #0d0d12 100%)",
    borderBottom: "1px solid #1a1a2e",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 14,
  },
  pausedBadge: {
    padding: "2px 8px",
    background: "rgba(255, 170, 0, 0.2)",
    color: "#ffaa00",
    borderRadius: 4,
    fontSize: 10,
    fontWeight: 600,
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  logCount: {
    color: "#666",
    fontSize: 12,
  },
  pauseButton: {
    padding: "4px 12px",
    background: "rgba(136, 136, 255, 0.15)",
    border: "1px solid rgba(136, 136, 255, 0.3)",
    borderRadius: 6,
    color: "#8888ff",
    fontSize: 11,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  terminal: {
    height: 320,
    overflowY: "auto",
    padding: "12px 0",
    background: "#050508",
    position: "relative",
  },
  line: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: "6px 16px",
    color: "#ccc",
    cursor: "pointer",
    transition: "background 0.15s",
    borderLeft: "3px solid transparent",
  },
  lineNew: {
    borderLeftColor: "#00ff88",
    background: "rgba(0, 255, 136, 0.05)",
  },
  lineError: {
    color: "#ff4466",
    background: "rgba(255, 68, 102, 0.05)",
  },
  lineTimestamp: {
    color: "#444",
    fontSize: 11,
    minWidth: 70,
    flexShrink: 0,
  },
  lineType: {
    display: "flex",
    alignItems: "center",
    fontSize: 10,
    fontWeight: 700,
    minWidth: 70,
    flexShrink: 0,
    textTransform: "uppercase",
  },
  lineAgent: {
    color: "#8888ff",
    fontSize: 11,
    minWidth: 120,
    flexShrink: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  lineMessage: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#444",
  },
  emptyText: {
    marginTop: 12,
    fontSize: 14,
    color: "#666",
  },
  emptySubtext: {
    marginTop: 4,
    fontSize: 12,
    color: "#444",
  },
  scrollToBottom: {
    position: "absolute",
    bottom: 12,
    left: "50%",
    transform: "translateX(-50%)",
    padding: "8px 16px",
    background: "rgba(136, 136, 255, 0.9)",
    border: "none",
    borderRadius: 20,
    color: "#fff",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  detailPanel: {
    borderTop: "1px solid #1a1a2e",
    background: "#0d0d12",
    maxHeight: 200,
    overflowY: "auto",
  },
  detailHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 16px",
    background: "#111118",
    borderBottom: "1px solid #1a1a2e",
  },
  detailTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 600,
  },
  closeButton: {
    background: "none",
    border: "none",
    color: "#666",
    fontSize: 20,
    cursor: "pointer",
    padding: 0,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  detailContent: {
    padding: "12px 16px",
  },
  detailRow: {
    display: "flex",
    gap: 12,
    marginBottom: 8,
  },
  detailLabel: {
    color: "#666",
    minWidth: 80,
    fontSize: 12,
  },
  detailValue: {
    color: "#ccc",
    flex: 1,
    fontSize: 12,
    wordBreak: "break-word",
  },
  metadataSection: {
    marginTop: 12,
  },
  metadataLabel: {
    color: "#666",
    fontSize: 12,
    display: "block",
    marginBottom: 6,
  },
  metadataPre: {
    background: "#050508",
    padding: 10,
    borderRadius: 6,
    color: "#8888ff",
    fontSize: 11,
    overflowX: "auto",
    margin: 0,
  },
  statusBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 16px",
    background: "#050508",
    borderTop: "1px solid #1a1a2e",
  },
  statusLeft: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#00ff88",
    boxShadow: "0 0 8px #00ff88",
    animation: "pulse 1.5s ease-in-out infinite",
  },
  statusText: {
    color: "#666",
    fontSize: 11,
  },
  statusRight: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
};

// Hook for managing terminal logs with realtime updates
export function useTerminalLogs() {
  const [logs, setLogs] = useState<TerminalLogEntry[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const pendingLogsRef = useRef<TerminalLogEntry[]>([]);

  const addLog = useCallback((log: TerminalLogEntry) => {
    if (isPaused) {
      pendingLogsRef.current.push(log);
    } else {
      setLogs((prev) => [...prev, log].slice(-100));
    }
  }, [isPaused]);

  const addLogs = useCallback((newLogs: TerminalLogEntry[]) => {
    if (isPaused) {
      pendingLogsRef.current.push(...newLogs);
    } else {
      setLogs((prev) => [...prev, ...newLogs].slice(-100));
    }
  }, [isPaused]);

  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
    // Flush pending logs
    if (pendingLogsRef.current.length > 0) {
      setLogs((prev) => [...prev, ...pendingLogsRef.current].slice(-100));
      pendingLogsRef.current = [];
    }
  }, []);

  const clear = useCallback(() => {
    setLogs([]);
    pendingLogsRef.current = [];
  }, []);

  return {
    logs,
    isPaused,
    addLog,
    addLogs,
    pause,
    resume,
    clear,
  };
}
