import Link from "next/link";
import { Zap, Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = {
  Platform: [
    { href: "/directory", label: "Founder Directory" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/join", label: "Join the Network" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
} as const;

const SOCIALS = [
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-slate border-t border-[var(--border-subtle)]">
      {/* ── CTA Band ── */}
      <div className="border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-sky mb-2">
              Ready to grow?
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-white">
              Build.{" "}
              <span className="text-gradient">Ship.</span>{" "}
              Scale.
            </h2>
            <p className="mt-1.5 text-sm text-[#94afc7] max-w-sm">
              Join 500+ founders connecting, collaborating, and scaling together across Bangladesh.
            </p>
          </div>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-blue hover:bg-[#1e5d99] text-white font-heading font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-[0_0_24px_rgba(92,179,249,0.3)] hover:-translate-y-0.5 shrink-0"
          >
            Get Started Free
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap size={16} className="text-white fill-white" />
              </div>
              <span className="font-heading font-bold text-white">
                Dhaka <span className="text-gradient">Founders</span>
              </span>
            </Link>
            <p className="text-sm text-[#94afc7] leading-relaxed mb-5 max-w-xs">
              Connecting Bangladeshi founders and supporting each other&apos;s growth.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-[#94afc7] hover:text-brand-sky hover:border-brand-sky/40 transition-all duration-150"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="font-heading font-semibold text-xs uppercase tracking-widest text-[#5a7a99] mb-4">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-[#94afc7] hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#5a7a99]">
            © {currentYear} Dhaka Founders. All rights reserved.
          </p>
          <p className="text-xs text-[#5a7a99]">
            Your gateway to the Bangladeshi startup ecosystem 🇧🇩
          </p>
        </div>
      </div>
    </footer>
  );
}
