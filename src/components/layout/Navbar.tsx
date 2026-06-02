"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, ArrowRight, LogIn } from "lucide-react";
import { clsx } from "clsx";

/* ─── Nav Links ──────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { href: "/",          label: "Home"      },
  { href: "/directory", label: "Directory" },
  { href: "/dashboard", label: "Dashboard" },
] as const;

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
export function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  /* Scroll detection */
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    handler(); // run once on mount
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Close mobile menu on navigation */
  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  return (
    <header
      className={clsx(
        /* ── Positioning & transition ── */
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-500 ease-in-out",

        /* ── Glass background (always on, intensifies on scroll) ── */
        "backdrop-blur-xl",
        isScrolled
          ? [
              /* Scrolled — opaque glass + defined border */
              "bg-[rgba(13,22,32,0.85)]",
              "border-b border-[var(--color-border-subtle)]",
              "shadow-[0_4px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(92,179,249,0.06)]",
              "py-3",
            ]
          : [
              /* Top of page — lighter glass with gradient veil */
              "bg-[rgba(13,22,32,0.30)]",
              "border-b border-transparent",
              "py-5",
            ],
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ════════════════════════════════
              LOGO
          ════════════════════════════════ */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Dhaka Founders — Home"
          >
            {/* Icon — animated glow ring on hover */}
            <div className="relative">
              <div className={clsx(
                "absolute inset-0 rounded-xl bg-brand-sky/20 blur-md",
                "scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100",
                "transition-all duration-400 ease-out",
              )} />
              <div className={clsx(
                "relative w-9 h-9 rounded-xl bg-brand-blue",
                "flex items-center justify-center",
                "shadow-[0_0_20px_rgba(92,179,249,0.25)]",
                "group-hover:shadow-[0_0_28px_rgba(92,179,249,0.50)]",
                "group-hover:scale-105",
                "transition-all duration-300 ease-out",
              )}>
                <Zap size={17} className="text-white fill-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Wordmark — Plus Jakarta Sans, brand heading typography */}
            <span className="font-heading font-extrabold text-xl tracking-tight leading-none">
              <span className="text-white group-hover:text-white/90 transition-colors duration-200">
                Dhaka
              </span>
              {" "}
              <span className="text-gradient">
                Founders
              </span>
            </span>
          </Link>

          {/* ════════════════════════════════
              DESKTOP NAV LINKS
          ════════════════════════════════ */}
          <div className="hidden md:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "relative px-4 py-2 rounded-lg",
                    "text-sm font-body font-medium",
                    "transition-all duration-200 ease-out",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky/50",
                    isActive
                      ? "text-brand-sky"
                      : "text-text-muted hover:text-white hover:bg-white/5",
                  )}
                >
                  {label}
                  {/* Active indicator — glowing underline pill */}
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full bg-brand-sky shadow-[0_0_8px_rgba(92,179,249,0.8)]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ════════════════════════════════
              DESKTOP CTAs
          ════════════════════════════════ */}
          <div className="hidden md:flex items-center gap-3">
            {/* Sign In — ghost link */}
            <Link
              href="/login"
              className={clsx(
                "inline-flex items-center gap-1.5",
                "px-4 py-2 rounded-lg",
                "text-sm font-heading font-semibold",
                "text-text-muted hover:text-white",
                "hover:bg-white/5",
                "border border-transparent hover:border-white/10",
                "transition-all duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky/50",
              )}
            >
              <LogIn size={14} />
              Sign In
            </Link>

            {/* Join the Network — primary brand CTA */}
            <Link
              href="/join"
              id="navbar-join-cta"
              className={clsx(
                "group/btn inline-flex items-center gap-2",
                "px-5 py-2.5 rounded-xl",
                "text-sm font-heading font-bold text-white",

                /* Brand accent color #2572B4 with hover darkening */
                "bg-brand-blue",
                "hover:bg-brand-blue-dark",

                /* Glow animation on hover */
                "shadow-[0_2px_12px_rgba(37,114,180,0.35)]",
                "hover:shadow-[0_4px_24px_rgba(92,179,249,0.45)]",

                /* Lift + scale micro-animation */
                "hover:-translate-y-0.5 hover:scale-[1.04]",
                "active:scale-[0.97] active:translate-y-0",

                "border border-brand-blue/40 hover:border-brand-sky/40",
                "transition-all duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky/50",
              )}
            >
              Join the Network
              <ArrowRight
                size={15}
                className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* ════════════════════════════════
              MOBILE HAMBURGER
          ════════════════════════════════ */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileOpen((v) => !v)}
            className={clsx(
              "md:hidden p-2 rounded-lg",
              "text-text-muted hover:text-white",
              "hover:bg-white/5",
              "border border-transparent hover:border-white/10",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky/50",
            )}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-5 h-5">
              <X
                size={20}
                className={clsx(
                  "absolute inset-0 transition-all duration-200",
                  isMobileOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90",
                )}
              />
              <Menu
                size={20}
                className={clsx(
                  "absolute inset-0 transition-all duration-200",
                  isMobileOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0",
                )}
              />
            </div>
          </button>
        </div>

        {/* ════════════════════════════════
            MOBILE MENU PANEL
        ════════════════════════════════ */}
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0",
          )}
        >
          <div className="bg-[rgba(13,22,32,0.95)] backdrop-blur-xl rounded-2xl border border-[var(--color-border-subtle)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-2">
            {/* Nav links */}
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "flex items-center px-4 py-3 rounded-xl",
                    "text-sm font-body font-medium",
                    "transition-all duration-150",
                    isActive
                      ? "text-brand-sky bg-brand-sky/10 border border-brand-sky/15"
                      : "text-text-muted hover:text-white hover:bg-white/5 border border-transparent",
                  )}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-sky mr-2.5 shadow-[0_0_6px_rgba(92,179,249,0.8)]" />
                  )}
                  {label}
                </Link>
              );
            })}

            {/* Divider + CTAs */}
            <div className="mt-2 pt-2 border-t border-[var(--color-border-subtle)] flex flex-col gap-2 px-1">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-heading font-semibold text-text-muted hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
              >
                <LogIn size={15} />
                Sign In
              </Link>
              <Link
                href="/join"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-heading font-bold text-white bg-brand-blue hover:bg-brand-blue-dark border border-brand-blue/40 shadow-[0_2px_12px_rgba(37,114,180,0.4)] hover:shadow-[0_4px_20px_rgba(92,179,249,0.4)] transition-all duration-200"
              >
                Join the Network
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
