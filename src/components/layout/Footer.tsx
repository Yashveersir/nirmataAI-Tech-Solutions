"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import type { NavLink } from "@/types";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteInfo } from "@/data/site";

interface FooterNavGroup {
  title: string;
  links: NavLink[];
}

interface FooterProps {
  groups: FooterNavGroup[];
  legalLinks: NavLink[];
  className?: string;
}

/**
 * Marketing footer with sitemap columns, newsletter signup (visual only),
 * contact info, social links, and legal links.
 */
export function Footer({ groups, legalLinks, className }: FooterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
  };

  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t border-border/20 bg-background/50 backdrop-blur-3xl text-foreground",
        className,
      )}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-70"
      />
      {/* Subtle top gradient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />

      <Container className="py-16 md:py-24 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo />
            <p className="text-muted-foreground mt-6 max-w-sm text-sm font-medium leading-relaxed">
              {siteInfo.tagline}
            </p>
            <form
              onSubmit={handleSubmit}
              aria-label="Lead magnet signup"
              className="mt-8 relative"
            >
              <label htmlFor="footer-lead-magnet" className="text-[0.85rem] font-bold tracking-wide text-foreground uppercase">
                Get our 2026 AI Readiness Checklist
              </label>
              <p className="text-muted-foreground mt-2 mb-5 text-[0.8rem] leading-relaxed">
                Learn exactly how to prepare your enterprise data for custom AI integration.
              </p>
              <div className="flex gap-2 relative z-10 group">
                <Input
                  id="footer-lead-magnet"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Work Email address"
                  className="flex-1 rounded-lg border-border/40 bg-background/50 backdrop-blur-md focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all duration-300"
                />
                <Button type="submit" size="default" aria-label="Download PDF" className="rounded-lg shadow-[0_0_15px_rgba(var(--color-primary),0.15)] hover:shadow-[0_0_20px_rgba(var(--color-primary),0.3)] transition-shadow duration-300 font-bold">
                  Download
                </Button>
              </div>
              {status === "success" ? (
                <div
                  role="status"
                  className="mt-4 rounded-lg bg-primary/10 px-4 py-3 text-xs font-semibold tracking-wide text-primary border border-primary/25 shadow-[0_0_10px_rgba(var(--color-primary),0.1)]"
                >
                  Thanks! Check your inbox for the download link.
                </div>
              ) : null}
            </form>
          </div>

          {groups.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="lg:col-span-2"
            >
              <h3 className="text-foreground text-[0.75rem] font-extrabold tracking-[0.2em] uppercase opacity-90">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-[0.85rem] font-medium transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(var(--color-primary),0.4)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-2">
            <h3 className="text-foreground text-[0.75rem] font-extrabold tracking-[0.2em] uppercase opacity-90">
              Contact
            </h3>
            <ul className="text-muted-foreground mt-6 space-y-4.5 text-[0.85rem] font-medium">
              <li className="flex items-start gap-3 group">
                <Mail className="text-primary mt-0.5 size-4 shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <a
                  href={`mailto:${siteInfo.contact.email}`}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {siteInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="text-primary mt-0.5 size-4 shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <a
                  href={`tel:${siteInfo.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {siteInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="text-primary mt-0.5 size-4 shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <span className="leading-relaxed hover:text-primary transition-colors duration-300">{siteInfo.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border/30 mt-16 flex flex-col items-start justify-between gap-6 border-t pt-8 md:flex-row md:items-center">
          <SocialLinks links={siteInfo.socials} />
          <ul className="text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.75rem] font-semibold tracking-wide uppercase">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-[0.75rem] font-medium tracking-wide">
            &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
