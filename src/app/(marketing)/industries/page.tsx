import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Stethoscope,
  GraduationCap,
  Store,
  Landmark,
  HeartHandshake,
  Globe,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Industries We Serve",
  description:
    "From healthcare and fintech to education and e-commerce — NirmataAI delivers AI-powered software solutions across industries.",
  path: "/industries",
});

interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
  capabilities: string[];
}

const industries: Industry[] = [
  {
    icon: TrendingUp,
    name: "Fintech & Financial Services",
    description:
      "Secure, compliant platforms for banking, wealth management, insurance, and payments.",
    capabilities: [
      "Real-time dashboards & analytics",
      "AI-powered fraud detection",
      "Compliant data architecture",
      "Payment gateway integration",
    ],
  },
  {
    icon: Stethoscope,
    name: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant solutions for patient care, clinical research, and health operations.",
    capabilities: [
      "Electronic health record systems",
      "Telemedicine platforms",
      "AI-assisted diagnostics",
      "Clinical trial management",
    ],
  },
  {
    icon: GraduationCap,
    name: "Education & E-Learning",
    description:
      "Modern learning platforms, LMS integrations, and AI-powered educational tools.",
    capabilities: [
      "Learning management systems",
      "Adaptive learning algorithms",
      "Student analytics dashboards",
      "Virtual classroom solutions",
    ],
  },
  {
    icon: Store,
    name: "E-Commerce & Retail",
    description:
      "Scalable e-commerce platforms with AI-driven personalization and inventory management.",
    capabilities: [
      "Custom e-commerce platforms",
      "AI product recommendations",
      "Inventory & order management",
      "Multi-channel integrations",
    ],
  },
  {
    icon: Landmark,
    name: "Government & Public Sector",
    description:
      "Secure, accessible digital services that meet government compliance and accessibility standards.",
    capabilities: [
      "Citizen portal development",
      "Data management systems",
      "Accessibility-first design",
      "Secure authentication",
    ],
  },
  {
    icon: Building2,
    name: "Real Estate & Property",
    description:
      "Digital platforms for property management, real estate listings, and virtual tours.",
    capabilities: [
      "Property listing platforms",
      "Virtual tour integration",
      "CRM for real estate agents",
      "Market analytics dashboards",
    ],
  },
  {
    icon: HeartHandshake,
    name: "Non-Profit & Social Impact",
    description:
      "Cost-effective technology solutions for mission-driven organizations.",
    capabilities: [
      "Donor management systems",
      "Impact tracking dashboards",
      "Volunteer coordination",
      "Fundraising platforms",
    ],
  },
  {
    icon: Globe,
    name: "Logistics & Supply Chain",
    description:
      "Real-time tracking, route optimization, and supply chain visibility platforms.",
    capabilities: [
      "Supply chain analytics",
      "Real-time tracking systems",
      "Route optimization",
      "Inventory forecasting",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="Industries We Serve"
              subtitle="We bring our AI-first engineering approach to a wide range of industries, delivering solutions that are secure, scalable, and tailored to your domain."
            />
          </AnimatedSection>
        </Container>
      </Section>

      <Section tone="muted" spacing="md">
        <Container>
          <AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Card key={industry.name} className="h-full">
                    <CardHeader>
                      <div
                        aria-hidden="true"
                        className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg"
                      >
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-lg">{industry.name}</CardTitle>
                      <CardDescription>{industry.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1.5">
                        {industry.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="text-muted-foreground flex items-start gap-2 text-sm"
                          >
                            <span
                              aria-hidden="true"
                              className="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full"
                            />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="md">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                We work across many more industries. If you have a specific need,
                we would love to learn about it and explore how we can help.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="min-w-[200px]">
                  <Link href="/contact">Tell Us About Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
