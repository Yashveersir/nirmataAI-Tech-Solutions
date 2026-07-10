import type { SiteInfo } from "@/types";

export const siteInfo: SiteInfo = {
  name: "NirmataAI Tech Solution",
  tagline: "AI-Powered Software & Digital Experiences",
  description:
    "NirmataAI Tech Solution builds AI-powered software, modern web platforms, and digital experiences for ambitious teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nirmataai.example",
  contact: {
    email: "hello@nirmataai.example",
    phone: "+1 (555) 010-2024",
    whatsapp: "+15550102024",
    address: "123 Innovation Drive, Suite 400, San Francisco, CA 94107, USA",
  },
  socials: [
    { platform: "LinkedIn", href: "https://www.linkedin.com/company/nirmataai" },
    { platform: "GitHub", href: "https://github.com/nirmataai" },
    { platform: "Twitter", href: "https://twitter.com/nirmataai" },
    { platform: "YouTube", href: "https://www.youtube.com/@nirmataai" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "AI Solutions", href: "/ai-solutions" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};
