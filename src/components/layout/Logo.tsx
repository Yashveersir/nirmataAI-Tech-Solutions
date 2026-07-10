import Image from "next/image";
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
 * Brand mark for NirmataAI Tech Solution. Renders the custom logo image.
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
      <Image
        src="/logo-transparent.png"
        alt="NirmataAI Logo"
        width={400}
        height={120}
        className="h-16 w-auto object-contain md:h-20"
        priority
      />
    </Link>
  );
}
