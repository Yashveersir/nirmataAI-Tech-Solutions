import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /**
   * Controls vertical padding. Defaults to a generous marketing rhythm.
   */
  spacing?: "sm" | "md" | "lg" | "none";
  /**
   * Optional background tone for visual separation.
   */
  tone?: "default" | "muted" | "accent";
  /**
   * Render as a specific HTML tag. Defaults to `<section>`.
   */
  as?: "section" | "div" | "article" | "header" | "footer" | "main";
  id?: string;
  "aria-labelledby"?: string;
}

const spacingMap: Record<NonNullable<SectionProps["spacing"]>, string> = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20 lg:py-24",
  lg: "py-20 md:py-28 lg:py-32",
};

const toneMap: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  accent: "bg-accent text-accent-foreground",
};

/**
 * Semantic section wrapper providing consistent vertical rhythm and
 * optional background tone across marketing pages.
 */
export function Section({
  children,
  className,
  spacing = "lg",
  tone = "default",
  as = "section",
  id,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(spacingMap[spacing], toneMap[tone], className)}
    >
      {children}
    </Tag>
  );
}
