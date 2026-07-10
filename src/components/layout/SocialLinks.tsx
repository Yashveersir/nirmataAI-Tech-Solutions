import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import type { SocialLink as SocialLinkData } from "@/types";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  links?: SocialLinkData[];
  className?: string;
  /**
   * Render the icon with the platform name as a visually-hidden label for screen readers.
   */
  showLabels?: boolean;
  iconSize?: number;
}

const ICONS: Record<
  string,
  React.ComponentType<{ className?: string; size?: number }>
> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter: Twitter,
  YouTube: Youtube,
};

/**
 * Render a list of social profile links with matching lucide icons.
 *
 * Falls back to a text link when an icon is not registered for the platform.
 */
export function SocialLinks({
  links,
  className,
  showLabels = false,
  iconSize = 18,
}: SocialLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <ul
      aria-label="Social media links"
      className={cn("flex flex-wrap items-center gap-3", className)}
    >
      {links.map((link) => {
        const Icon = ICONS[link.platform];
        return (
          <li key={link.platform}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors",
              )}
            >
              {Icon ? <Icon size={iconSize} aria-hidden="true" /> : null}
              {showLabels ? (
                <span className="text-sm font-medium">{link.platform}</span>
              ) : (
                <span className="sr-only">{link.platform}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
