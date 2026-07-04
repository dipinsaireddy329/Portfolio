import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300";

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" }) {
  return (
    <button
      className={cn(
        base,
        variant === "primary"
          ? "bg-white text-black hover:bg-cyan-200"
          : "border border-white/15 bg-white/5 text-[var(--foreground)] hover:bg-white/10",
        className
      )}
      {...props}
    />
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
      className={cn(
        base,
        variant === "primary"
          ? "bg-white text-black hover:bg-cyan-200"
          : "border border-white/15 bg-white/5 text-[var(--foreground)] hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
