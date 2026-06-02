import type { Metadata } from "next";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Star,
  ExternalLink,
  Filter,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Founder Directory",
  description:
    "Browse and connect with 500+ founders and startups in Bangladesh's premier founder directory.",
};

// ─── Mock Data ────────────────────────────────────────
const INDUSTRY_FILTERS = [
  "All",
  "FinTech",
  "HealthTech",
  "EdTech",
  "CleanTech",
  "E-Commerce",
  "SaaS",
  "AgriTech",
  "LogisTech",
] as const;

const STAGE_FILTERS = ["All Stages", "Pre-seed", "Seed", "Series A", "Series B+"] as const;

const FOUNDERS = [
  {
    name: "Tanjim Hossain",
    role: "Founder & CEO",
    company: "DataBridge BD",
    bio: "Building the financial data infrastructure for Bangladesh's next wave of FinTech startups.",
    industry: "FinTech",
    stage: "Series A",
    location: "Dhaka",
    initials: "TH",
    color: "#5CB3F9",
    connections: 142,
    saves: 38,
  },
  {
    name: "Nusrat Jahan",
    role: "Co-founder & COO",
    company: "GreenLoop",
    bio: "Circular economy platform connecting businesses with sustainable waste management solutions.",
    industry: "CleanTech",
    stage: "Seed",
    location: "Chittagong",
    initials: "NJ",
    color: "#34d399",
    connections: 89,
    saves: 21,
  },
  {
    name: "Arif Rahman",
    role: "CTO & Co-founder",
    company: "MediConnect",
    bio: "Digitizing Bangladesh's healthcare access layer — telemedicine for the next billion.",
    industry: "HealthTech",
    stage: "Pre-seed",
    location: "Dhaka",
    initials: "AR",
    color: "#a78bfa",
    connections: 67,
    saves: 14,
  },
  {
    name: "Sadia Islam",
    role: "Founder",
    company: "LearnBangla",
    bio: "Adaptive learning platform for rural Bangladeshi students with offline-first technology.",
    industry: "EdTech",
    stage: "Seed",
    location: "Sylhet",
    initials: "SI",
    color: "#fb923c",
    connections: 53,
    saves: 19,
  },
  {
    name: "Karim Ahmed",
    role: "CEO",
    company: "Krishak.io",
    bio: "AI-powered crop advisory and market linkage platform for smallholder farmers in Bangladesh.",
    industry: "AgriTech",
    stage: "Pre-seed",
    location: "Rajshahi",
    initials: "KA",
    color: "#4ade80",
    connections: 41,
    saves: 11,
  },
  {
    name: "Risha Begum",
    role: "Founder & CTO",
    company: "ShopDhaka",
    bio: "Hyperlocal e-commerce infrastructure enabling micro-merchants to go digital in 60 seconds.",
    industry: "E-Commerce",
    stage: "Series A",
    location: "Dhaka",
    initials: "RB",
    color: "#f472b6",
    connections: 198,
    saves: 55,
  },
] as const;

// ─── Founder Card ─────────────────────────────────────
function DirectoryFounderCard({
  founder,
}: {
  founder: (typeof FOUNDERS)[number];
}) {
  const badgeVariantMap: Record<string, "sky" | "green" | "purple" | "amber" | "slate"> = {
    FinTech: "sky",
    CleanTech: "green",
    HealthTech: "purple",
    EdTech: "amber",
    AgriTech: "green",
    "E-Commerce": "sky",
    SaaS: "slate",
    LogisTech: "slate",
  };

  return (
    <Card hover glow padding="lg" className="group flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center font-heading font-bold text-white text-lg shrink-0 shadow-lg transition-transform duration-200 group-hover:scale-105"
          style={{
            backgroundColor: founder.color,
            boxShadow: `0 4px 20px ${founder.color}40`,
          }}
        >
          {founder.initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading font-semibold text-white text-base truncate">
            {founder.name}
          </h3>
          <p className="text-xs text-[#94afc7]">{founder.role}</p>
          <p className="text-sm text-brand-sky font-medium mt-0.5">{founder.company}</p>
        </div>
        <button
          aria-label={`Save ${founder.name}`}
          className="p-1.5 rounded-lg text-[#5a7a99] hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-150 shrink-0"
        >
          <Star size={16} />
        </button>
      </div>

      {/* Bio */}
      <p className="text-sm text-[#94afc7] leading-relaxed mb-4 flex-1 line-clamp-2">
        {founder.bio}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        <Badge variant={badgeVariantMap[founder.industry] ?? "slate"}>
          {founder.industry}
        </Badge>
        <Badge variant="slate">{founder.stage}</Badge>
        <span className="inline-flex items-center gap-1 text-xs text-[#94afc7]">
          <MapPin size={11} />
          {founder.location}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
        <div className="flex gap-4">
          <span className="text-xs text-[#5a7a99]">
            <span className="font-semibold text-[var(--text-primary)]">{founder.connections}</span>{" "}
            connections
          </span>
          <span className="text-xs text-[#5a7a99]">
            <span className="font-semibold text-[var(--text-primary)]">{founder.saves}</span> saves
          </span>
        </div>
        <button className="inline-flex items-center gap-1 text-xs text-brand-sky hover:text-white transition-colors group/link">
          View Profile
          <ExternalLink size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </Card>
  );
}

// ─── Page ─────────────────────────────────────────────
export default function DirectoryPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <Badge variant="sky" className="mb-4">
            500+ Verified Founders
          </Badge>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Discover the <span className="text-gradient">Builders</span>
          </h1>
          <p className="text-[#94afc7] max-w-xl mx-auto">
            Connect, collaborate, and scale with the founders shaping Bangladesh&apos;s startup
            ecosystem.
          </p>
        </div>

        {/* ── Search + Filters ── */}
        <div className="mb-10">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5a7a99]"
            />
            <input
              id="directory-search"
              type="search"
              placeholder='Search by name, company, or industry…'
              className="w-full pl-12 pr-4 py-4 rounded-xl glass border border-[var(--border-subtle)] focus:border-brand-sky/50 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 text-sm text-[var(--text-primary)] placeholder:text-[#5a7a99] bg-transparent transition-all"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Industry chips */}
            <div
              className="flex items-center gap-2 overflow-x-auto pb-1 flex-nowrap max-w-full"
              aria-label="Industry filters"
            >
              <Filter size={15} className="text-[#5a7a99] shrink-0" />
              {INDUSTRY_FILTERS.map((filter) => (
                <button
                  key={filter}
                  id={`filter-${filter.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-body whitespace-nowrap transition-all duration-150 shrink-0 ${
                    filter === "All"
                      ? "bg-brand-blue text-white shadow-[0_0_16px_rgba(37,114,180,0.3)]"
                      : "glass-light text-[#94afc7] hover:text-white hover:border-brand-sky/40"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Stage select */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative">
                <select
                  id="stage-filter"
                  className="appearance-none pl-4 pr-8 py-2 rounded-lg glass border border-[var(--border-subtle)] text-xs text-[#94afc7] bg-transparent focus:outline-none focus:border-brand-sky/40 cursor-pointer"
                >
                  {STAGE_FILTERS.map((s) => (
                    <option key={s} value={s} className="bg-brand-slate text-white">
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={13}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#5a7a99] pointer-events-none"
                />
              </div>
              <Button variant="ghost" size="sm" className="gap-1.5">
                <SlidersHorizontal size={14} />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        {/* ── Results count ── */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[#5a7a99]">
            Showing <span className="text-[var(--text-primary)] font-semibold">6</span> of{" "}
            <span className="text-[var(--text-primary)] font-semibold">500+</span> founders
          </p>
          <div className="flex items-center gap-2 text-xs text-[#5a7a99]">
            Sort by:
            <button className="text-brand-sky hover:text-white transition-colors font-medium">
              Most Connected ↓
            </button>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FOUNDERS.map((founder) => (
            <DirectoryFounderCard key={founder.name} founder={founder} />
          ))}
        </div>

        {/* ── Load More ── */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Founders
            <ChevronDown size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
