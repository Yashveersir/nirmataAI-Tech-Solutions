import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { pricingTiers, addOnServices } from "@/data/pricing";
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
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent pricing for software development, AI solutions, and digital services. From MVPs to enterprise platforms.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="Transparent Pricing"
              subtitle="Every project is unique. These starting points give you a sense of investment levels — final pricing is determined during scoping."
            />
          </AnimatedSection>
        </Container>
      </Section>

      {/* Pricing Tiers */}
      <Section tone="muted" spacing="md">
        <Container>
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={cn(
                    "relative flex flex-col",
                    tier.highlighted &&
                      "border-primary ring-primary/20 ring-2 shadow-lg"
                  )}
                >
                  {tier.badge ? (
                    <span className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold">
                      {tier.badge}
                    </span>
                  ) : null}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold tracking-tight">
                        {tier.price}
                      </span>
                      {tier.priceNote ? (
                        <p className="text-muted-foreground mt-1 text-sm">
                          {tier.priceNote}
                        </p>
                      ) : null}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            className="text-primary mt-0.5 size-5 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button
                        asChild
                        variant={tier.highlighted ? "default" : "outline"}
                        className="w-full"
                        size="lg"
                      >
                        <Link href="/contact">
                          {tier.cta}
                          <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Add-on Services */}
      <Section>
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              title="Add-On Services"
              subtitle="Enhance your project with additional capabilities."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {addOnServices.map((addon) => (
                <Card key={addon.name} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <CardDescription>{addon.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold tracking-tight">{addon.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Custom Quote CTA */}
      <Section tone="muted">
        <Container size="sm">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Need a Custom Quote?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                Every project is different. Tell us about your requirements and
                we will prepare a detailed proposal tailored to your needs.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="min-w-[200px]">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                  <Link href="/faqs">View FAQs</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
