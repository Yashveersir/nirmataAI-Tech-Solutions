import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  primaryNavLinks,
  footerNavGroups,
  legalLinks,
  headerCta,
} from "@/data/navigation";

export default function MarketingLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header links={primaryNavLinks} cta={headerCta} />
      <main id="main" className="flex-1 focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      <Footer groups={footerNavGroups} legalLinks={legalLinks} />
    </div>
  );
}
