import { Code2, Sparkles, Blocks, Cloud, Palette, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { ServiceCard } from "@/components/cards/ServiceCard";

const iconMap: Record<string, LucideIcon> = {
  "web-development": Code2,
  "ai-solutions": Sparkles,
  "custom-software": Blocks,
  "cloud-devops": Cloud,
  "ui-ux-design": Palette,
  "mobile-development": Smartphone,
};

export function ServicesGrid() {
  return (
    <Section id="services">
      <Container>
        <AnimatedSection>
          <SectionHeader
            centered
            title="Our Services"
            subtitle="End-to-end software capabilities that help teams ship faster, scale smarter, and build with confidence."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                icon={iconMap[service.slug] ?? Code2}
              />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
