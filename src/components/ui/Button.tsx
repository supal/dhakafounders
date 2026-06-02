import type { ElementType, ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1620] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue hover:bg-[#1e5d99] text-white shadow-lg hover:shadow-[0_0_24px_rgba(92,179,249,0.3)] border border-brand-blue/30 hover:border-brand-sky/50",
  secondary:
    "bg-brand-sky/10 hover:bg-brand-sky/20 text-brand-sky border border-brand-sky/25 hover:border-brand-sky/50",
  ghost:
    "bg-transparent hover:bg-white/5 text-[#94afc7] hover:text-white border border-transparent hover:border-white/10",
  outline:
    "bg-transparent hover:bg-brand-blue/10 text-brand-sky border border-brand-sky/40 hover:border-brand-sky",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3.5 text-base gap-2.5",
};

// ─── Polymorphic Button ──────────────────────────────────────────────────────

type ButtonOwnProps<E extends ElementType = "button"> = {
  as?: E;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
};

type ButtonComponentProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithRef<E>, keyof ButtonOwnProps>;

export function Button<E extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonComponentProps<E>) {
  const Component = as ?? "button";

  return (
    <Component
      disabled={disabled || isLoading}
      className={twMerge(
        clsx(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className,
        ),
      )}
      {...props}
    >
      {isLoading && (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </Component>
  );
}
