"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Directory" },
  { href: "/dashboard", label: "Dashboard" },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-[var(--border-subtle)] py-3"
          : "bg-transparent py-5",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Dhaka Founders Home"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center shadow-[0_0_16px_rgba(92,179,249,0.2)] group-hover:scale-110 transition-transform duration-200">
              <Zap size={16} className="text-white fill-white" />
            </div>
            <span className="font-heading font-bold text-lg text-white tracking-tight">
              Dhaka{" "}
              <span className="text-gradient">Founders</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-150",
                  pathname === href
                    ? "text-brand-sky bg-brand-sky/10"
                    : "text-[#94afc7] hover:text-white hover:bg-white/5",
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ── CTAs ── */}
          <div className="hidden md:flex items-center gap-3">
            <Button as={Link} variant="ghost" size="sm" href="/login">
              Sign In
            </Button>
            <Button as={Link} variant="primary" size="sm" href="/join">
              Join the Network
            </Button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-[#94afc7] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {isMobileOpen && (
          <div className="md:hidden mt-4 pb-2 glass rounded-xl border border-[var(--border-subtle)] animate-fade-in">
            <div className="flex flex-col p-2">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "px-4 py-3 rounded-lg text-sm font-body font-medium transition-colors",
                    pathname === href
                      ? "text-brand-sky bg-brand-sky/10"
                      : "text-[#94afc7] hover:text-white hover:bg-white/5",
                  )}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
                <Button as={Link} variant="ghost" size="sm" href="/login" className="w-full">
                  Sign In
                </Button>
                <Button as={Link} variant="primary" size="sm" href="/join" className="w-full">
                  Join the Network
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
