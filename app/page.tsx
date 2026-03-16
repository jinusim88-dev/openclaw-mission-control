"use client";

import { useState, useEffect, useRef } from "react";
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock3,
  ChevronDown,
  ChevronUp,
  Activity,
  Cpu,
  FolderKanban,
  ListTodo,
  CalendarClock,
  ExternalLink,
  History,
  Zap,
  Layers,
  BarChart3,
} from "lucide-react";
import {
  projects,
  agents,
  recentActivity,
  cronHealth,
  stats,
  projectColors,
  projectIcons,
  agentIcons,
  Project,
  Agent,
  ActivityItem,
  CronHealth,
} from "./data/data";

// ============================================
// TYPES
// ============================================
type TabType = "projects" | "agents" | "activity";

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
  return <style dangerouslySetInnerHTML={{ __html: mobileFirstStyles }} />;
}

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mc-header-clock">
      <Clock size={16} />
      <span>{time}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const normalizedStatus = status.toLowerCase().replace(/\s+/g, "-");
  return <span className={`mc-status-badge ${normalizedStatus}`}>{status}</span>;
}

function ProgressBar({ progress, color }: { progress: number; color: string }) {
  const doneCount = Math.floor((progress / 100) * 10);
  const totalCount = 10;

  return (
    <div className="mc-progress-container">
      <div className="mc-progress-bar-bg">
        <div
          className="mc-progress-bar-fill"
          style={{ width: `${progress}%`, background: color }}
        />
      </div>
      <div className="mc-progress-text">
        <span>Progress</span>
        <span style={{ color, fontWeight: 600 }}>{progress}%</span>
      </div>
    </div>
  );
}

// ============================================
// STAT CAROUSEL
// ============================================
function StatsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const tasksDoneParts = stats.tasksDone.split("/");
  const tasksDoneNum = parseInt(tasksDoneParts[0]) || 0;
  const totalTasksNum = parseInt(tasksDoneParts[1]) || 0;
  const taskProgress = totalTasksNum > 0 ? Math.round((tasksDoneNum / totalTasksNum) * 100) : 0;

  const statCards = [
    {
      label: "Projects",
      value: stats.projects,
      icon: FolderKanban,
      color: "#00ff88",
      variant: "green" as const,
      subtext: "Active projects",
    },
    {
      label: "Agents",
      value: stats.agents,
      icon: Cpu,
      color: "#8888ff",
      variant: "blue" as const,
      subtext: "Running agents",
    },
    {
      label: "Tasks Done",
      value: `${tasksDoneNum}/${totalTasksNum}`,
      icon: ListTodo,
      color: "#ffaa00",
      variant: "orange" as const,
      subtext: `${taskProgress}% complete`,
    },
    {
      label: "Cron Issues",
      value: stats.cronIssues,
      icon: AlertCircle,
      color: stats.cronIssues > 0 ? "#ff4466" : "#00ff88",
      variant: stats.cronIssues > 0 ? "red" as const : "green" as const,
      subtext: stats.cronIssues > 0 ? "Needs attention" : "All healthy",
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth - 32;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, statCards.length - 1));
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [statCards.length]);

  return (
    <div className="mc-stats-section">
      <div className="mc-stats-carousel" ref={carouselRef}>
        {statCards.map((stat, idx) => (
          <div key={idx} className={`mc-stat-card ${stat.variant}`}>
            <div className="mc-stat-header">
              <span className="mc-stat-label">{stat.label}</span>
              <div className={`mc-stat-icon-wrapper ${stat.variant}`}>
                <stat.icon size={22} color={stat.color} />
              </div>
            </div>
            <div className="mc-stat-value">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="mc-stats-dots">
        {statCards.map((_, idx) => (
          <div
            key={idx}
            className={`mc-stats-dot ${idx === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================
// PROJECT CARD
// ============================================
function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  const doneCount = project.tasks.filter((t) => t.done).length;
  const progress = Math.round((doneCount / project.tasks.length) * 100);
  const color = projectColors[project.id] || "#8888ff";
  const icon = projectIcons[project.id] || "📁";

  return (
    <div className="mc-project-card">
      <div className="mc-project-header" onClick={() => setExpanded(!expanded)}>
        <div className="mc-project-title-row">
          <span className="mc-project-icon">{icon}</span>
          <span className="mc-project-name">{project.name}</span>
          <div className={`mc-project-expand ${expanded ? "expanded" : ""}`}>
            <ChevronDown size={24} />
          </div>
        </div>
        <StatusBadge status={project.status} />
        <ProgressBar progress={progress} color={color} />
      </div>

      {expanded && (
        <div className="mc-expanded">
          <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6, marginTop: "16px" }}>
            {project.description}
          </p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mc-project-url"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              {project.url}
            </a>
          )}

          <h4 className="mc-section-title">Tech Stack</h4>
          <div className="mc-tech-tags">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="mc-tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <h4 className="mc-section-title">Tasks ({doneCount}/{project.tasks.length})</h4>
          <div className="mc-task-list">
            {project.tasks.map((task, idx) => (
              <div key={idx} className="mc-task-item">
                {task.done ? (
                  <CheckCircle2 size={18} color="#00ff88" />
                ) : (
                  <Clock3 size={18} color="#ffaa00" />
                )}
                <span className={`mc-task-text ${task.done ? "done" : ""}`}>
                  {task.name}
                </span>
              </div>
            ))}
          </div>

          {project.cronJobs.length > 0 && (
            <>
              <h4 className="mc-section-title">Cron Jobs</h4>
              <div className="mc-task-list">
                {project.cronJobs.map((cron, idx) => (
                  <div key={idx} className="mc-task-item">
                    {cron.status === "ok" ? (
                      <CheckCircle2 size={16} color="#00ff88" />
                    ) : (
                      <XCircle size={16} color="#ff4466" />
                    )}
                    <span style={{ fontSize: "12px", color: "#8888ff", fontFamily: "var(--font-jetbrains-mono), monospace", minWidth: "70px" }}>
                      {cron.schedule}
                    </span>
                    <span style={{ flex: 1, fontSize: "14px", color: "#ccc" }}>
                      {cron.name}
                    </span>
                    <span style={{ fontSize: "11px", color: "#666" }}>
                      {cron.lastRun}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================
// AGENT CARD
// ============================================
function AgentCard({ agent }: { agent: Agent }) {
  const [expanded, setExpanded] = useState(false);

  const triggerColors: Record<string, string> = {
    cron: "#ffaa00",
    mention: "#8888ff",
    telegram: "#00ff88",
    "on-demand": "#ff6688",
  };

  const icon = agentIcons[agent.id] || "🤖";

  return (
    <div className="mc-agent-card">
      <div className="mc-agent-header" onClick={() => setExpanded(!expanded)}>
        <div className="mc-agent-avatar">{icon}</div>
        <div className="mc-agent-info">
          <div className="mc-agent-name">{agent.name}</div>
          <div className="mc-agent-purpose">{agent.purpose}</div>
          <div className="mc-agent-badges">
            <StatusBadge status={agent.status} />
            <span className={`mc-trigger-badge ${agent.trigger}`}>
              <CalendarClock size={10} />
              {agent.trigger}
            </span>
          </div>
        </div>
        <div style={{ color: "#666", transform: expanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }}>
          <ChevronDown size={24} />
        </div>
      </div>

      {expanded && (
        <div className="mc-expanded">
          <div className="mc-agent-detail">
            <Activity size={18} color="#8888ff" />
            <div>
              <div className="mc-agent-detail-label">Schedule</div>
              <div className="mc-agent-detail-value">{agent.schedule}</div>
            </div>
          </div>

          <div className="mc-agent-detail">
            <Clock size={18} color={agent.status === "active" ? "#00ff88" : "#ffaa00"} />
            <div>
              <div className="mc-agent-detail-label">Last Run</div>
              <div className="mc-agent-detail-value">{agent.lastRun}</div>
            </div>
          </div>

          <div className="mc-agent-detail">
            <Zap size={18} color="#ffaa00" />
            <div style={{ flex: 1 }}>
              <div className="mc-agent-detail-label">Integrations</div>
              <div className="mc-integrations-list" style={{ marginTop: "6px" }}>
                {agent.integrations.map((integration, idx) => (
                  <span key={idx} className="mc-integration-tag">
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// ACTIVITY LIST
// ============================================
function ActivityView() {
  return (
    <div>
      <div className="mc-activity-list">
        {recentActivity.map((activity, idx) => (
          <div key={idx} className="mc-activity-item">
            <div className={`mc-activity-dot ${activity.type}`} />
            <div className="mc-activity-content">
              <div className="mc-activity-meta">
                <span className="mc-activity-time">{activity.time}</span>
                <span className="mc-activity-agent">{activity.agent}</span>
              </div>
              <div className="mc-activity-message">{activity.message}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Cron Health Section */}
      <div className="mc-cron-section">
        <h4 className="mc-section-title" style={{ marginTop: 0 }}>
          <CalendarClock size={14} style={{ display: "inline", marginRight: "6px" }} />
          Cron Health
        </h4>
        {cronHealth.map((cron) => (
          <div key={cron.id} className="mc-cron-card">
            {cron.status === "ok" ? (
              <CheckCircle2 size={20} color="#00ff88" />
            ) : cron.status === "failing" ? (
              <XCircle size={20} color="#ff4466" />
            ) : (
              <Clock3 size={20} color="#ffaa00" />
            )}
            <div className="mc-cron-info">
              <div className="mc-cron-name">{cron.name}</div>
              <div className="mc-cron-schedule">{cron.schedule}</div>
            </div>
            <div className="mc-cron-times">
              <div className="mc-cron-time">
                Next: <span style={{ color: "#00ff88" }}>{cron.nextRun}</span>
              </div>
              <div className="mc-cron-time">Last: {cron.lastRun}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// DESKTOP TABS
// ============================================
function DesktopTabs({ activeTab, setActiveTab }: { activeTab: TabType; setActiveTab: (t: TabType) => void }) {
  const tabs = [
    { id: "projects" as const, label: "Projects", icon: FolderKanban },
    { id: "agents" as const, label: "Agents", icon: Cpu },
    { id: "activity" as const, label: "Activity", icon: History },
  ];

  return (
    <div className="mc-desktop-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`mc-desktop-tab ${activeTab === tab.id ? "active" : ""}`}
        >
          <tab.icon size={18} />
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// ============================================
// BOTTOM NAVIGATION
// ============================================
function BottomNav({ activeTab, setActiveTab }: { activeTab: TabType; setActiveTab: (t: TabType) => void }) {
  const tabs = [
    { id: "projects" as const, label: "Projects", icon: FolderKanban },
    { id: "agents" as const, label: "Agents", icon: Cpu },
    { id: "activity" as const, label: "Activity", icon: History },
  ];

  return (
    <nav className="mc-bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`mc-nav-item ${activeTab === tab.id ? "active" : ""}`}
        >
          <tab.icon className="mc-nav-icon" />
          <span className="mc-nav-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function MissionControl() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  return (
    <div className="mc-container">
      <StyleInjector />

      {/* Header */}
      <header className="mc-header">
        <h1 className="mc-header-title">Mission Control</h1>
        <LiveClock />
      </header>

      {/* Stats Carousel */}
      <StatsCarousel />

      {/* Desktop Tabs */}
      <DesktopTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content */}
      <main className="mc-content">
        {activeTab === "projects" && (
          <div>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {activeTab === "agents" && (
          <div>
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        )}

        {activeTab === "activity" && <ActivityView />}
      </main>

      {/* Bottom Navigation (Mobile) */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
