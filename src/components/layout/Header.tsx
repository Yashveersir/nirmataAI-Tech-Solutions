"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import type { NavLink } from "@/types";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
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
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border/40 glass-surface shadow-sm transition-all duration-300 supports-[backdrop-filter]:bg-background/50",
          className,
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[4.75rem] lg:px-8">
          <Logo />
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground relative rounded-full px-4 py-2 text-[0.9rem] font-semibold transition-all duration-300 hover:bg-white/5 after:absolute after:bottom-1 after:left-1/2 after:h-[3px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:shadow-[0_0_8px_var(--color-primary)] after:transition-all after:duration-300 hover:after:w-1/2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            {cta ? (
              <Button asChild size="default" className="rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.2)] hover:shadow-[0_0_25px_rgba(var(--color-primary),0.4)] transition-shadow duration-300 font-bold px-6">
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ) : null}
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="text-foreground hover:bg-accent/50 hover:shadow-md inline-flex size-10 items-center justify-center rounded-full border border-transparent hover:border-border/50 transition-all duration-300"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        links={links}
        cta={cta}
        open={mobileOpen}
        onOpenChange={setMobileOpen}
      />
    </>
  );
}
