import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Outfit } from "next/font/google";
import { createMetadata, siteConfig } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Toaster } from "sonner";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
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
  keywords: [
    "AI software company",
    "web development agency",
    "custom software engineering",
    "NirmataAI",
  ],
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
      email: "info@nirmataai.site",
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

import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Chatbot } from "@/components/chat/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-2TYJQ6T9CN`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2TYJQ6T9CN', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          {children}
          {/* Shared bottom-right widget row: Chatbot pill + WhatsApp button */}
          <div className="fixed bottom-6 right-4 z-50 flex items-end gap-3 sm:right-6">
            <Chatbot />
            <WhatsAppButton />
          </div>
          <JsonLd type="Organization" data={organizationJsonLd} />
          <JsonLd type="WebSite" data={websiteJsonLd} />
          <Toaster position="bottom-right" theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}
