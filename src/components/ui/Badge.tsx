import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

type BadgeVariant = "sky" | "blue" | "slate" | "green" | "amber" | "purple";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  sky: "bg-brand-sky/10 text-brand-sky border-brand-sky/25",
  blue: "bg-brand-blue/10 text-[#7ab8e8] border-brand-blue/25",
  slate: "bg-white/5 text-[var(--text-secondary)] border-white/10",
  green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/25",
  purple: "bg-violet-500/10 text-violet-400 border-violet-500/25",
};

export function Badge({ variant = "sky", children, className, ...props }: BadgeProps) {
  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1 px-2.5 py-0.5",
          "text-xs font-semibold font-body",
          "rounded-full border",
          "transition-colors duration-150",
          variantClasses[variant],
        ),
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
