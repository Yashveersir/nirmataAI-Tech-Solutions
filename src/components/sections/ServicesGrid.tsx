import { FaAws, FaReact, FaApple, FaGoogle, FaServer } from "react-icons/fa";
import { SiPython, SiTypescript } from "react-icons/si";
import { services } from "@/data/services";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { ServiceCard } from "@/components/cards/ServiceCard";

const iconMap: Record<string, React.ElementType> = {
  "custom-websites": FaReact,
  "mobile-app-development": FaApple,
  "ai-solutions": SiPython,
  "enterprise-software": SiTypescript,
  "it-support-maintenance": FaServer,
  "digital-marketing": FaGoogle,
  "cloud-solutions": FaAws,
};

export function ServicesGrid() {
  return (
    <Section id="services">
      <Container>
        <AnimatedSection>
          <SectionHeader
            centered
            eyebrow="What We Do"
            title="Our Services"
            subtitle="End-to-end software capabilities that help teams ship faster, scale smarter, and build with confidence."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                icon={iconMap[service.slug] ?? FaReact}
              />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
