import type { Metadata } from "next";
import {
  LayoutDashboard,
  Users,
  Star,
  Eye,
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  Building2,
  ArrowUpRight,
  Activity,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your founder profile, connections, and network activity.",
};

interface SidebarLink {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  count?: number | null;
}

const SIDEBAR_LINKS: SidebarLink[] = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Users, label: "Connections", count: 12 },
  { icon: Building2, label: "My Startup", count: null },
  { icon: Star, label: "Saved Founders", count: 5 },
  { icon: MessageSquare, label: "Messages", count: 3 },
  { icon: Bell, label: "Notifications", count: 2 },
  { icon: Settings, label: "Settings", count: null },
];

const STATS = [
  {
    label: "Profile Views",
    value: "142",
    delta: "+18%",
    positive: true,
    icon: Eye,
    color: "text-brand-sky",
    bg: "bg-brand-sky/10",
  },
  {
    label: "Connections",
    value: "38",
    delta: "+4",
    positive: true,
    icon: Users,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    label: "Saves",
    value: "21",
    delta: "+7",
    positive: true,
    icon: Star,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    label: "Startup Score",
    value: "87",
    delta: "+3",
    positive: true,
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
] as const;

const RECENT_ACTIVITY = [
  {
    type: "connection",
    message: "Nusrat Jahan connected with you",
    time: "2h ago",
    color: "bg-emerald-400",
  },
  {
    type: "view",
    message: "Your profile was viewed 12 times today",
    time: "4h ago",
    color: "bg-brand-sky",
  },
  {
    type: "save",
    message: "Arif Rahman saved your startup",
    time: "Yesterday",
    color: "bg-violet-400",
  },
  {
    type: "message",
    message: "New message from Tanjim Hossain",
    time: "Yesterday",
    color: "bg-amber-400",
  },
] as const;

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-20 flex">
      {/* ── Sidebar ─────────────────────────────────── */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 h-[calc(100vh-80px)] sticky top-20 border-r border-[var(--border-subtle)] bg-brand-slate/30">
        {/* Profile */}
        <div className="p-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center font-heading font-bold text-white text-sm shadow-[0_0_16px_rgba(92,179,249,0.2)]">
              YO
            </div>
            <div className="min-w-0">
              <p className="font-heading font-semibold text-white text-sm truncate">Your Name</p>
              <p className="text-xs text-[#94afc7] truncate">Founder & CEO</p>
            </div>
          </div>
          <Badge variant="green" className="mt-3 w-full justify-center">
            ● Profile Active
          </Badge>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 overflow-y-auto" aria-label="Dashboard navigation">
          {SIDEBAR_LINKS.map(({ icon: Icon, label, active, count }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body font-medium transition-all duration-150 mb-1 ${
                active
                  ? "bg-brand-sky/10 text-brand-sky"
                  : "text-[#94afc7] hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={17} />
              <span className="flex-1 text-left">{label}</span>
              {count != null && (
                <span className="px-2 py-0.5 rounded-full bg-brand-blue/20 text-brand-sky text-xs font-semibold">
                  {count}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Sign out */}
        <div className="p-3 border-t border-[var(--border-subtle)]">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#94afc7] hover:text-red-400 hover:bg-red-500/5 transition-colors duration-150">
            <LogOut size={17} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main Content ─────────────────────────────── */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Header */}
          <div className="mb-10">
            <Badge variant="sky" className="mb-3">Dashboard</Badge>
            <h1 className="font-heading text-3xl md:text-4xl text-white mb-2">
              Welcome back, <span className="text-gradient">Founder</span> 👋
            </h1>
            <p className="text-[#94afc7]">
              Here&apos;s what&apos;s happening with your profile and network.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {STATS.map(({ label, value, delta, positive, icon: Icon, color, bg }) => (
              <Card key={label} padding="md" hover>
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={20} className={color} />
                </div>
                <p className="font-heading font-bold text-2xl text-white leading-none mb-1">
                  {value}
                </p>
                <p className="text-xs text-[#94afc7] mb-2">{label}</p>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-semibold ${
                    positive ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  <ArrowUpRight size={12} />
                  {delta} this week
                </span>
              </Card>
            ))}
          </div>

          {/* Bottom Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Activity Feed */}
            <Card padding="md" hover={false} className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-semibold text-white flex items-center gap-2">
                  <Activity size={18} className="text-brand-sky" />
                  Recent Activity
                </h2>
                <Badge variant="slate">Last 7 days</Badge>
              </div>
              <div className="space-y-4">
                {RECENT_ACTIVITY.map(({ message, time, color }) => (
                  <div
                    key={message}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/3 transition-colors group"
                  >
                    <div className={`w-2 h-2 rounded-full ${color} mt-1.5 shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[var(--text-primary)]">{message}</p>
                      <p className="text-xs text-[#5a7a99] mt-0.5">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Profile Completion */}
            <Card padding="md" hover={false}>
              <h2 className="font-heading font-semibold text-white mb-5 flex items-center gap-2">
                <Star size={18} className="text-amber-400" />
                Profile Score
              </h2>
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-28 h-28">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(92,179,249,0.1)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#5CB3F9"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40 * 0.72} ${2 * Math.PI * 40}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-white">72%</span>
                    <span className="text-[10px] text-[#94afc7]">complete</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Bio", done: true },
                  { label: "Startup info", done: true },
                  { label: "Social links", done: false },
                  { label: "Profile photo", done: false },
                ].map(({ label, done }) => (
                  <div key={label} className="flex items-center gap-2 text-xs">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                        done
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-white/5 text-[#5a7a99]"
                      }`}
                    >
                      {done ? "✓" : "○"}
                    </div>
                    <span className={done ? "text-[var(--text-secondary)]" : "text-[#5a7a99]"}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
