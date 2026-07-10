"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import type { NavLink } from "@/types";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";

interface HeaderProps {
  links: NavLink[];
  cta?: NavLink;
  className?: string;
}

/**
 * Sticky site header. Server-friendly except for the mobile menu toggle
 * state, which is encapsulated inside the dedicated MobileMenu component.
 */
export function Header({ links, cta, className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {cta ? (
            <Button asChild size="sm">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          ) : null}
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="text-foreground hover:bg-muted inline-flex size-10 items-center justify-center rounded-md transition-colors md:hidden"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>
      <MobileMenu
        links={links}
        cta={cta}
        open={mobileOpen}
        onOpenChange={setMobileOpen}
      />
    </header>
  );
}
