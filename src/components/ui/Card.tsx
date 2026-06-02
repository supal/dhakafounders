import { type HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = true, glow = false, padding = "md", children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          clsx(
            "rounded-xl glass",
            "transition-all duration-300 ease-out",
            paddingClasses[padding],
            hover && [
              "hover:-translate-y-1",
              "hover:shadow-card-hover",
              "hover:border-brand-sky/25",
            ],
            glow && "hover:glow-sky",
            className,
          ),
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
