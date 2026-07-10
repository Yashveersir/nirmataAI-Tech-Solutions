import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { createMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/portfolio/${slug}`,
    type: "article",
  });
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Project Hero */}
      <AnimatedSection as="div">
        <Container size="md" className="py-20 md:py-28">
          <div className="space-y-4">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase">
              {project.category}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Start a Similar Project</Link>
              </Button>
              {project.liveUrl ? (
                <Button asChild variant="outline" size="lg">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 size-4" />
                    Live Site
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Thumbnail */}
      <AnimatedSection as="div" delay={0.1}>
        <Container size="lg">
          <div className="bg-muted relative aspect-[2/1] w-full overflow-hidden rounded-xl">
            <Image
              src={project.thumbnail}
              alt={`${project.title} preview`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 80vw, 100vw"
            />
          </div>
        </Container>
      </AnimatedSection>

      {/* Case Study Content */}
      <AnimatedSection as="div" delay={0.2}>
        <Container size="md" className="py-20 md:py-28">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Case Study
          </h2>
          <p className="text-foreground text-lg leading-relaxed mt-6">
            {project.caseStudy}
          </p>
        </Container>
      </AnimatedSection>

      <Separator />

      {/* Technologies */}
      <AnimatedSection as="div" delay={0.1}>
        <Container size="md" className="py-20">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-center text-muted-foreground">
            Technologies Used
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-1.5 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <Separator />

      {/* CTA */}
      <AnimatedSection as="div" delay={0.2}>
        <Container size="sm" className="py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Want to Build Something Similar?
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">
              Let&apos;s discuss how we can apply our experience to your unique
              challenges.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="min-w-[200px]">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                <Link href="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
