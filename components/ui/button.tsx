import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",
  secondary:
    "bg-[var(--color-surface)] text-[var(--color-foreground)] border",
  ghost:
    "bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
  danger:
    "bg-red-600 text-white hover:bg-red-700",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
