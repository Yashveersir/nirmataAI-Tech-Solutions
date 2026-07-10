import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /**
   * Maximum width preset. Defaults to a 7xl marketing container.
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * When true, renders a semantic `<section>` wrapper. Otherwise renders a `<div>`.
   */
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
  id?: string;
}

const sizeMap: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

/**
 * Centered, horizontally-padded wrapper used across page sections.
 *
 * Applies a consistent `max-w` and horizontal padding that scales on small screens.
 */
export function Container({
  children,
  className,
  size = "xl",
  as = "div",
  id,
}: ContainerProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeMap[size], className)}
    >
      {children}
    </Tag>
  );
}
