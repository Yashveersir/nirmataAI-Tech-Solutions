import type { LucideIcon } from "lucide-react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { FaAws, FaReact, FaApple, FaBrain, FaCode, FaFigma } from "react-icons/fa";
import Link from "next/link";
import { services } from "@/data/services";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createMetadata } from "@/lib/metadata";
import { Separator } from "@/components/ui/separator";

export const metadata = createMetadata({
  title: "Services",
  description:
    "End-to-end software services including web development, AI solutions, custom software, cloud & DevOps, UI/UX design, and mobile development.",
  path: "/services",
});

const iconMap: Record<string, React.ElementType> = {
  "web-development": FaReact,
  "ai-solutions": FaBrain,
  "custom-software": FaCode,
  "cloud-devops": FaAws,
  "ui-ux-design": FaFigma,
  "mobile-development": FaApple,
};

export default function ServicesPage() {
  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="Our Services"
              subtitle="End-to-end software capabilities that help teams ship faster, scale smarter, and build with confidence."
            />
          </AnimatedSection>
        </Container>
      </Section>

      {services.map((service, index) => {
        const Icon = iconMap[service.slug] ?? FaReact;
        return (
          <Section
            key={service.id}
            tone={index % 2 === 0 ? "default" : "muted"}
            id={service.slug}
          >
            <Container>
              <AnimatedSection>
                <div className="grid gap-12 lg:grid-cols-5">
                  {/* Left: Overview */}
                  <div className="lg:col-span-3 relative group">
                    {/* Watermark Logo */}
                    <div className="absolute top-0 right-0 z-0 text-primary/5 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 group-hover:text-primary/10 pointer-events-none">
                      <Icon className="size-64" aria-hidden="true" />
                    </div>

                    <div className="relative z-10">
                      <div className="bg-background/80 border border-primary/20 text-primary mb-5 inline-flex size-14 items-center justify-center rounded-2xl shadow-sm">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <h3 className="mt-8 text-sm font-semibold tracking-widest uppercase">
                      Key Features
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle
                            className="text-primary mt-0.5 size-5 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-8 text-sm font-semibold tracking-widest uppercase">
                      Benefits
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <ArrowRight
                            className="text-primary mt-0.5 size-4 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground text-sm">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>

                  {/* Right: Tech stack + FAQ */}
                  <div className="lg:col-span-2">
                    <div className="bg-card border-border/70 sticky top-28 space-y-6 rounded-2xl border p-7 shadow-sm">
                      {/* Technologies */}
                      <div>
                        <h3 className="text-sm font-semibold tracking-widest uppercase">
                          Technologies
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* FAQs */}
                      <div>
                        <h3 className="text-sm font-semibold tracking-widest uppercase">
                          FAQs
                        </h3>
                        <Accordion type="single" collapsible className="mt-3">
                          {service.faq.map((item, i) => (
                            <AccordionItem key={i} value={`faq-${i}`}>
                              <AccordionTrigger className="text-sm text-left">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground text-sm">
                                {item.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>

                      <Separator />

                      <Button asChild className="w-full">
                        <Link href="/contact">
                          Discuss Your {service.title} Project
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </Container>
          </Section>
        );
      })}

      {/* Bottom CTA */}
      <Section tone="muted" spacing="lg" className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-mesh-gradient opacity-50" />
        <Container size="md">
          <AnimatedSection>
            <div className="rounded-3xl border border-border/60 bg-card/80 px-8 py-14 text-center shadow-sm backdrop-blur-sm">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-lg leading-relaxed">
                Every project is different. Let us learn about your goals and
                recommend the right approach — no obligation, no pressure.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="min-w-[220px]">
                  <Link href="/contact">Book a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
