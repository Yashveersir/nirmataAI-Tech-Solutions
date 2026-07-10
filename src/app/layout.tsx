import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Outfit } from "next/font/google";
import { createMetadata, siteConfig } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: undefined,
  description: siteConfig.description,
  path: "/",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  name: siteConfig.name,
  url: siteConfig.url,
  logo: new URL("/logo.png", siteConfig.url).toString(),
  description: siteConfig.description,
  sameAs: [
    "https://www.linkedin.com/company/nirmataai",
    "https://github.com/nirmataai",
    "https://twitter.com/nirmataai",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@nirmataai.example",
      availableLanguage: ["English"],
    },
  ],
};

const websiteJsonLd = {
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <JsonLd type="Organization" data={organizationJsonLd} />
        <JsonLd type="WebSite" data={websiteJsonLd} />
      </body>
    </html>
  );
}
