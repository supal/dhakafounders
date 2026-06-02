"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Network,
  Rocket,
  TrendingUp,
  Star,
  MapPin,
  ChevronRight,
  Search,
  Sparkles,
  Users,
  Building2,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

// ─── Data ─────────────────────────────────────────────
const HERO_HEADLINES = [
  "Discover the Minds Building Bangladesh's Future.",
  "Connect, Collaborate, and Scale with Dhaka's Top Founders.",
  "Your Gateway to the Bangladeshi Startup Ecosystem.",
] as const;

const STATS = [
  { value: "500+", label: "Founders", icon: Users },
  { value: "200+", label: "Startups", icon: Building2 },
  { value: "12", label: "Industries", icon: Globe },
  { value: "3", label: "Cities", icon: MapPin },
] as const;

const FEATURES = [
  {
    icon: Network,
    title: "Build Your Network",
    description:
      "Connect directly with founders, co-founders, and operators across Bangladesh's thriving startup scene.",
    badge: "Community" as const,
    color: "text-brand-sky",
    bg: "bg-brand-sky/10",
  },
  {
    icon: Rocket,
    title: "Launch Faster",
    description:
      "Access curated resources, find co-founders, investors, and mentors who've already been through the journey.",
    badge: "Growth" as const,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: TrendingUp,
    title: "Scale Together",
    description:
      "Share knowledge, open doors, and grow together in a collaborative ecosystem built on mutual success.",
    badge: "Scale" as const,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
] as const;

const FEATURED_FOUNDERS = [
  {
    name: "Tanjim Hossain",
    role: "Founder & CEO",
    company: "DataBridge BD",
    industry: "FinTech",
    stage: "Series A",
    location: "Dhaka",
    initials: "TH",
    color: "#5CB3F9",
  },
  {
    name: "Nusrat Jahan",
    role: "Co-founder",
    company: "GreenLoop",
    industry: "CleanTech",
    stage: "Seed",
    location: "Chittagong",
    initials: "NJ",
    color: "#34d399",
  },
  {
    name: "Arif Rahman",
    role: "CTO & Co-founder",
    company: "MediConnect",
    industry: "HealthTech",
    stage: "Pre-seed",
    location: "Dhaka",
    initials: "AR",
    color: "#a78bfa",
  },
] as const;

// ─── Animated Headline Component ──────────────────────
function AnimatedHeadline() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % HERO_HEADLINES.length);
        setIsVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 transition-all duration-400"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      {HERO_HEADLINES[index].split(" ").map((word, i) => (
        <span key={i}>
          {["Bangladesh's", "Dhaka's", "Bangladeshi", "Build", "Connect,", "Your"].includes(
            word,
          ) ? (
            <span className="text-gradient">{word} </span>
          ) : (
            `${word} `
          )}
        </span>
      ))}
    </h1>
  );
}

// ─── Stat Card ────────────────────────────────────────
function StatCard({
  value,
  label,
  icon: Icon,
}: (typeof STATS)[number]) {
  return (
    <div className="glass-light rounded-xl px-6 py-4 flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200">
      <div className="w-10 h-10 rounded-lg bg-brand-sky/10 flex items-center justify-center shrink-0">
        <Icon size={20} className="text-brand-sky" />
      </div>
      <div>
        <p className="font-heading font-bold text-2xl text-white leading-none">{value}</p>
        <p className="text-xs text-[#94afc7] mt-0.5">{label}</p>
      </div>
    </div>
  );
}

// ─── Founder Card ─────────────────────────────────────
function FounderCard({ founder }: { founder: (typeof FEATURED_FOUNDERS)[number] }) {
  return (
    <Card hover glow className="group">
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-white text-lg shrink-0 shadow-lg"
          style={{ backgroundColor: founder.color, boxShadow: `0 4px 16px ${founder.color}40` }}
        >
          {founder.initials}
        </div>
        <div className="min-w-0">
          <p className="font-heading font-semibold text-white text-sm truncate">{founder.name}</p>
          <p className="text-xs text-[#94afc7] truncate">{founder.role}</p>
          <p className="text-xs text-brand-sky font-medium truncate mt-0.5">{founder.company}</p>
        </div>
        <Star
          size={16}
          className="ml-auto text-[#5a7a99] group-hover:text-amber-400 transition-colors duration-200 shrink-0"
        />
      </div>
      <div className="flex flex-wrap gap-1.5">
        <Badge variant="sky">{founder.industry}</Badge>
        <Badge variant="slate">{founder.stage}</Badge>
        <span className="inline-flex items-center gap-1 text-xs text-[#94afc7]">
          <MapPin size={11} />
          {founder.location}
        </span>
      </div>
    </Card>
  );
}

// ─── Page ─────────────────────────────────────────────
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col">
      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,114,180,0.4) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(92,179,249,0.15) 0%, transparent 50%), #0d1620",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#5CB3F9 1px, transparent 1px), linear-gradient(90deg, #5CB3F9 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-[100px] -z-10 animate-float" />

        {/* Badge */}
        <div className="mb-8 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-xs font-semibold text-brand-sky tracking-wide uppercase">
            <Sparkles size={13} className="animate-pulse" />
            Bangladesh&apos;s #1 Founder Network
          </span>
        </div>

        {/* Headline — animated */}
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedHeadline />
          <p className="text-lg text-[#94afc7] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animate-delay-100">
            Connecting Bangladeshi founders, operators, and builders. Find co-founders, investors,
            and your next big opportunity in Dhaka&apos;s growing startup ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-200">
            <Button as={Link} variant="primary" size="lg" href="/directory">
              Explore the Directory
              <ArrowRight size={18} />
            </Button>
            <Button as={Link} variant="outline" size="lg" href="/join">
              Join the Network
            </Button>
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-12 w-full max-w-2xl mx-auto animate-fade-up animate-delay-300">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5a7a99]"
            />
            <input
              id="hero-search"
              type="search"
              placeholder='Search founders, startups, or industries… e.g. "FinTech"'
              className="w-full pl-12 pr-4 py-4 rounded-xl glass border border-[var(--border-subtle)] focus:border-brand-sky/50 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 text-sm text-[var(--text-primary)] placeholder:text-[#5a7a99] bg-transparent transition-all duration-200"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════════════ */}
      <section className="bg-brand-slate border-y border-[var(--border-subtle)] py-8" aria-label="Platform statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FEATURES
      ════════════════════════════════════════════════ */}
      <section className="py-24 px-4" aria-label="Platform features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="sky" className="mb-4">Why Dhaka Founders?</Badge>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Everything a founder needs,{" "}
              <span className="text-gradient">in one place.</span>
            </h2>
            <p className="text-[#94afc7] max-w-xl mx-auto">
              Built by founders, for founders. We remove friction so you can focus on what matters —
              building great products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map(({ icon: Icon, title, description, badge, color, bg }) => (
              <Card key={title} hover glow padding="lg">
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                  <Icon size={24} className={color} />
                </div>
                <Badge variant="sky" className="mb-3">
                  {badge}
                </Badge>
                <h3 className="font-heading text-xl text-white mb-3">{title}</h3>
                <p className="text-sm text-[#94afc7] leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FEATURED FOUNDERS
      ════════════════════════════════════════════════ */}
      <section
        className="py-24 px-4 bg-brand-slate/40"
        aria-label="Featured founders"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <Badge variant="sky" className="mb-3">Featured</Badge>
              <h2 className="font-heading text-3xl md:text-4xl text-white">
                Meet the <span className="text-gradient">Builders</span>
              </h2>
              <p className="mt-2 text-[#94afc7]">
                Founders shaping Bangladesh&apos;s next chapter.
              </p>
            </div>
            <Button as={Link} variant="outline" size="sm" href="/directory">
              View All Founders
              <ChevronRight size={16} />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_FOUNDERS.map((founder) => (
              <FounderCard key={founder.name} founder={founder} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          JOIN CTA
      ════════════════════════════════════════════════ */}
      <section
        className="py-28 px-4 relative overflow-hidden"
        aria-label="Join the network CTA"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(37,114,180,0.25) 0%, transparent 70%), #0d1620",
          }}
        />
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="blue" className="mb-6">Limited Early Access</Badge>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
            Ready to join Bangladesh&apos;s{" "}
            <span className="text-gradient">most connected</span> founder network?
          </h2>
          <p className="text-[#94afc7] text-lg mb-10">
            Get early access. Connect with 500+ founders. Start building your network today.
          </p>

          {/* Email capture */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              id="cta-email"
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-xl glass border border-[var(--border-subtle)] focus:border-brand-sky/50 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 text-sm text-[var(--text-primary)] placeholder:text-[#5a7a99] bg-transparent transition-all"
            />
            <Button variant="primary" size="md" className="shrink-0">
              Get Early Access
              <ArrowRight size={16} />
            </Button>
          </div>

          <p className="mt-4 text-xs text-[#5a7a99]">
            No spam. No credit card. Join 500+ founders already on the list.
          </p>
        </div>
      </section>
    </div>
  );
}
