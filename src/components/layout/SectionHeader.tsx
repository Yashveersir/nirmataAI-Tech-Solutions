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
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-primary inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase">
          <span aria-hidden="true" className="bg-primary h-px w-6" />
          {eyebrow}
          {centered ? (
            <span aria-hidden="true" className="bg-primary h-px w-6" />
          ) : null}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "text-muted-foreground text-base leading-relaxed sm:text-lg",
            centered && "max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      ) : null}
      {description ? (
        <div
          className={cn(
            "text-muted-foreground text-sm leading-relaxed",
            centered && "max-w-2xl",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
