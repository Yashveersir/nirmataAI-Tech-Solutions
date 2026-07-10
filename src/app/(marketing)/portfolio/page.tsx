import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Explore our featured projects — from AI copilots and fintech dashboards to internal platforms that transform business operations.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="Our Portfolio"
              subtitle="A selection of projects that show how we turn complex problems into elegant, scalable products."
            />
          </AnimatedSection>
        </Container>
      </Section>

      <Section tone="muted" spacing="md">
        <Container>
          <AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (                  <Card
                    key={project.id}
                    className="group h-full overflow-hidden pt-0 transition-shadow hover:shadow-md"
                  >
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="focus-visible:ring-ring block rounded-t-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                      <div className="bg-muted relative aspect-[3/2] w-full overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          priority={index < 3}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  <CardHeader>
                    <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                      {project.category}
                    </span>
                    <CardTitle className="text-xl">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {project.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="link" size="sm" className="px-0">
                      <Link href={`/portfolio/${project.slug}`}>
                        View Case Study
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
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
                Want Results Like These?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                Every project starts with a conversation. Let&apos;s explore how we
                can help your team ship better software.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="min-w-[200px]">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
