import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  centered?: boolean;
  className?: string;
  /**
   * Optional id used for in-page anchor links and ARIA labelling.
   */
  id?: string;
}

/**
 * Consistent heading block used at the top of page sections.
 */
export function SectionHeader({
  title,
  subtitle,
  description,
  eyebrow,
  centered = false,
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className={cn(
        "flex flex-col gap-3",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className={cn("text-muted-foreground text-base sm:text-lg", centered && "max-w-2xl")}>
          {subtitle}
        </p>
      ) : null}
      {description ? (
        <div className={cn("text-muted-foreground text-sm", centered && "max-w-2xl")}>
          {description}
        </div>
      ) : null}
    </div>
  );
}
