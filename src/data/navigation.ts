import type { NavLink } from "@/types";
import { siteInfo } from "@/data/site";

/**
 * Primary navigation links rendered in the header and mobile menu.
 *
 * Source of truth is `siteInfo.nav`; this file re-exports it under a more
 * discoverable name and adds the call-to-action that anchors the header.
 */
export const primaryNavLinks: NavLink[] = [...siteInfo.nav];

export interface FooterNavGroup {
  title: string;
  links: NavLink[];
}

/**
 * Sitemap groupings shown in the footer. Each group has a heading and a list
 * of internal links so visitors can quickly reach any marketing page.
 */
export const footerNavGroups: FooterNavGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "AI Solutions", href: "/ai-solutions" },
      { label: "Industries", href: "/industries" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

/**
 * Legal/utility links displayed as a row at the very bottom of the footer.
 */
export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

/**
 * Header call-to-action link rendered on the right side of the navigation bar.
 */
export const headerCta: NavLink = {
  label: "Book a Consultation",
  href: "/contact",
};
