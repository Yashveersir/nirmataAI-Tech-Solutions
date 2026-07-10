import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/data/site";

interface LogoProps {
  className?: string;
  /**
   * Render the wordmark alongside the icon. Defaults to true.
   */
  withWordmark?: boolean;
  /**
   * Override the link target. Defaults to "/".
   */
  href?: string;
}

/**
 * Brand mark for NirmataAI Tech Solution. Renders an inline SVG icon plus optional wordmark.
 */
export function Logo({ className, withWordmark = true, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={`${siteInfo.name} home`}
      className={cn(
        "group inline-flex items-center gap-2 font-semibold tracking-tight",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md font-bold"
      >
        N
      </span>
      {withWordmark ? (
        <span className="text-foreground text-base leading-none sm:text-lg">
          Nirmata<span className="text-muted-foreground">AI</span>
        </span>
      ) : null}
    </Link>
  );
}
