import React from "react";
import clsx from "clsx";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "muted"
  | "label"
  | "caption"
  | "bold"
  | "italic";

type Props<T extends React.ElementType> = {
  as?: T;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export const headingSm =
  "text-lg font-semibold mb-2";

export const headingMd =
  "text-xl font-bold";

export const bodyText =
  "text-gray-600 dark:text-gray-400";

export const badgeBase =
  "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";


const styles: Record<Variant, string> = {
  h1: "text-3xl font-semibold tracking-tight",
  h2: "text-2xl font-semibold",
  h3: "text-xl font-semibold",
  h4: "text-lg font-medium",
  h5: "text-base font-medium",
  h6: "text-sm font-medium",

  body: "text-sm",
  muted: "text-sm text-gray-500 dark:text-gray-400",
  label: "text-sm font-medium",
  caption: "text-xs text-gray-500",
  bold: "font-semibold",
  italic: "italic",
};

export function Typography<T extends React.ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
}: Props<T>) {
  const Component = as || "p";

  return (
    <Component className={clsx(styles[variant], className)}>
      {children}
    </Component>
  );
}
