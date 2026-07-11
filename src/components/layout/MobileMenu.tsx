"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/types";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";

interface MobileMenuProps {
  links: NavLink[];
  cta?: NavLink;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
}

/**
 * Full-screen mobile navigation overlay. Toggled via React state from the
 * parent header so the hamburger button and close button stay in sync.
 *
 * Keyboard:
 *   - Escape closes the menu and restores focus to the trigger.
 *   - Tab cycles within the open menu while body scroll is locked.
 */
export function MobileMenu({ links, cta, open, onOpenChange, className }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={cn(
        "bg-background/98 fixed inset-0 z-50 flex flex-col overflow-y-auto backdrop-blur-xl",
        className,
      )}
    >
      <div className="border-border/60 flex h-16 items-center justify-between border-b px-4 sm:px-6">
        <Logo />
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close menu"
          className="text-foreground hover:bg-accent/80 inline-flex size-10 items-center justify-center rounded-lg transition-colors duration-200"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>
      <nav aria-label="Mobile primary" className="flex-1 px-4 py-10 sm:px-6">
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => onOpenChange(false)}
                className="text-foreground hover:bg-accent/80 hover:text-primary block rounded-xl px-4 py-3.5 text-lg font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {cta ? (
          <div className="mt-10 px-1">
            <Link
              href={cta.href}
              onClick={() => onOpenChange(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold shadow-sm shadow-primary/20 transition-all duration-200"
            >
              {cta.label}
            </Link>
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export { Menu };
