import Link from "next/link";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/button";

export function PortfolioShowcase() {
  return (
    <Section id="portfolio">
      <Container>
        <AnimatedSection>
          <SectionHeader
            centered
            eyebrow="Portfolio"
            title="Featured Work"
            subtitle="A selection of projects that show how we turn complex problems into elegant, scalable products."
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id}>
              <ProjectCard
                project={project}
                priority={index === 0}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
