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
              aria-label="Newsletter signup"
              className="mt-6"
            >
              <label htmlFor="footer-newsletter" className="text-sm font-medium">
                Subscribe to our newsletter
              </label>
              <div className="mt-2 flex gap-2">
                <Input
                  id="footer-newsletter"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  className="flex-1"
                />
                <Button type="submit" size="icon" aria-label="Subscribe">
                  <Send className="size-4" aria-hidden="true" />
                </Button>
              </div>
              {status === "success" ? (
                <p role="status" className="text-foreground mt-2 text-xs">
                  Thanks — we&apos;ll be in touch.
                </p>
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
