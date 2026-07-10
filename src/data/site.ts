import type { SiteInfo } from "@/types";

export const siteInfo: SiteInfo = {
  name: "NirmataAI Tech Solution",
  tagline: "AI-Powered Software & Digital Experiences",
  description:
    "NirmataAI Tech Solution builds AI-powered software, modern web platforms, and digital experiences for ambitious teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nirmataai.example",
  contact: {
    email: "info@nirmataai.site",
    phone: "+91 9546694750",
    whatsapp: "+919546694750",
    address: "9B, Central Rd, Poddar Nagar, Jadavpur, Kolkata, West Bengal 700032, India",
  },
  socials: [
    { platform: "Facebook", href: "https://www.facebook.com/share/1CoyFwaQSy/" },
    { platform: "Instagram", href: "https://www.instagram.com/nirmataai_?igsh=MWRwNTF0dHMxdndhaQ==" },
    { platform: "LinkedIn", href: "https://www.linkedin.com/in/nirmataai-tech-solutions-913625421" },
    { platform: "YouTube", href: "https://www.youtube.com/@nirmataAITechSolutions" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "AI Solutions", href: "/ai-solutions" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};
