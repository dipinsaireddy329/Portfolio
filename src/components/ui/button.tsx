"use client";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ── shared style tokens ── */
const base =
  "focus-ring relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out select-none";

const primaryCls =
  "bg-gradient-to-br from-cyan-300 via-sky-300 to-violet-400 text-black shadow-[0_0_20px_rgba(104,225,253,0.45)] hover:shadow-[0_0_36px_rgba(104,225,253,0.7)] hover:scale-[1.04] active:scale-[0.97]";

const ghostCls =
  "border border-white/20 bg-white/5 text-[var(--foreground)] backdrop-blur-sm " +
  "hover:bg-white/12 hover:border-white/35 hover:shadow-[0_0_18px_rgba(255,255,255,0.08)] hover:scale-[1.03] active:scale-[0.97]";

/* ── shimmer overlay (only primary) ── */
const Shimmer = () => (
  <span
    aria-hidden
    className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/25 opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"
  />
);

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost"; children?: ReactNode }) {
  return (
    <button
      className={cn("group", base, variant === "primary" ? primaryCls : ghostCls, className)}
      {...props}
    >
      {variant === "primary" && <Shimmer />}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

export function LinkButton({
  className,
  variant = "primary",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "ghost"; children: ReactNode }) {
  return (
    <a
      className={cn("group", base, variant === "primary" ? primaryCls : ghostCls, className)}
      {...props}
    >
      {variant === "primary" && <Shimmer />}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}
