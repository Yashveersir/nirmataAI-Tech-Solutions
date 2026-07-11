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
        "bg-muted text-foreground border-border border-t",
        className,
      )}
    >
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="text-muted-foreground mt-4 max-w-sm text-sm">
              {siteInfo.tagline}
            </p>
            <form
              onSubmit={handleSubmit}
              aria-label="Lead magnet signup"
              className="mt-6"
            >
              <label htmlFor="footer-lead-magnet" className="text-sm font-medium text-foreground">
                Get our 2026 AI Readiness Checklist
              </label>
              <p className="text-xs text-muted-foreground mt-1 mb-3">
                Learn exactly how to prepare your enterprise data for custom AI integration.
              </p>
              <div className="flex gap-2">
                <Input
                  id="footer-lead-magnet"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Work Email address"
                  className="flex-1 border-border/80 bg-background/50 focus:bg-background transition-colors"
                />
                <Button type="submit" size="default" aria-label="Download PDF">
                  Download
                </Button>
              </div>
              {status === "success" ? (
                <div role="status" className="mt-3 rounded-md bg-primary/10 px-3 py-2 text-xs font-medium text-primary border border-primary/20">
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
              <h3 className="text-sm font-semibold tracking-wide uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide uppercase">
              Contact
            </h3>
            <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteInfo.contact.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {siteInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteInfo.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-foreground transition-colors"
                >
                  {siteInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteInfo.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border mt-12 flex flex-col items-start justify-between gap-4 border-t pt-8 md:flex-row md:items-center">
          <SocialLinks links={siteInfo.socials} />
          <ul className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
