import { notFound } from "next/navigation";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Sparkles,
  Blocks,
  Cloud,
  Palette,
  Smartphone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
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

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, LucideIcon> = {
  "web-development": Code2,
  "ai-solutions": Sparkles,
  "custom-software": Blocks,
  "cloud-devops": Cloud,
  "ui-ux-design": Palette,
  "mobile-development": Smartphone,
};

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.slug] ?? Code2;

  return (
    <>
      {/* Hero */}
      <AnimatedSection as="div">
        <Container size="md" className="py-20 md:py-28 lg:py-32">
          <div className="flex flex-col items-start gap-2">
            <div className="bg-primary/10 text-primary mb-2 inline-flex size-12 items-center justify-center rounded-lg">
              <Icon className="size-6" aria-hidden="true" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl text-lg leading-relaxed">
              {service.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">All Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Features & Benefits */}
      <AnimatedSection as="div" delay={0.1}>
        <div className="bg-muted py-20 md:py-24">
          <Container>
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                  Key Features
                </h2>
                <ul className="mt-6 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-primary mt-1 size-5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-foreground text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                  Benefits
                </h2>
                <ul className="mt-6 space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <ArrowRight
                        className="text-primary mt-1 size-5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-foreground text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </AnimatedSection>

      {/* Technologies */}
      <AnimatedSection as="div" delay={0.2}>
        <Container size="md" className="py-20 md:py-24">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-center text-muted-foreground">
            Technologies We Use
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-1.5 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <Separator />

      {/* FAQs */}
      <AnimatedSection as="div" delay={0.1}>
        <Container size="sm" className="py-20 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {service.faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection as="div" delay={0.2}>
        <div className="bg-muted py-20">
          <Container size="sm">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">
                Let&apos;s discuss how {service.title?.toLowerCase()} can help your
                business grow.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </Container>
        </div>
      </AnimatedSection>
    </>
  );
}
