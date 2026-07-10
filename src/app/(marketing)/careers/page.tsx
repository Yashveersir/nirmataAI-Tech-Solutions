import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Briefcase,
  Clock,
  Heart,
  Lightbulb,
  Users,
  Globe,
  ArrowRight,
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
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Join NirmataAI Tech Solution. We're looking for engineers, designers, and AI specialists who care deeply about their craft.",
  path: "/careers",
});

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Globe,
    title: "Remote-First",
    description:
      "Work from anywhere. We believe great talent isn't limited by geography.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "Async communication and flexible schedules that respect your time zone and life.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health coverage and a wellness budget for what keeps you balanced.",
  },
  {
    icon: Lightbulb,
    title: "Learning Budget",
    description:
      "Annual budget for courses, conferences, books, and tools that help you grow.",
  },
  {
    icon: Users,
    title: "Great Team",
    description:
      "Work alongside senior engineers and designers who push each other to do better work.",
  },
  {
    icon: Briefcase,
    title: "Equipment Stipend",
    description:
      "Get the gear you need — from laptops to standing desks — on day one.",
  },
];

interface OpenRole {
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
}

const openRoles: OpenRole[] = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    description:
      "Build production-grade web applications with Next.js, TypeScript, and Node.js. You'll own features end-to-end and mentor junior engineers.",
  },
  {
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Remote",
    department: "AI",
    description:
      "Design and ship AI features including RAG pipelines, chatbots, and evaluation systems. Strong Python and LLM experience required.",
  },
  {
    title: "Product Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    description:
      "Own the end-to-end design process for client products — from user research and wireframes to high-fidelity prototypes and design systems.",
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Infrastructure",
    description:
      "Design and maintain cloud infrastructure, CI/CD pipelines, and observability tooling for client projects and internal platforms.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="Join Our Team"
              subtitle="We are building a remote-first team of engineers, designers, and AI specialists who care deeply about their craft."
            />
          </AnimatedSection>
        </Container>
      </Section>

      {/* Culture Section */}
      <Section tone="muted">
        <Container size="md">
          <AnimatedSection>
            <div className="text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                At NirmataAI, we believe that great software is built by small,
                empowered teams of people who genuinely enjoy working together.
                We are looking for teammates who take pride in their work,
                communicate clearly, and are never satisfied with &quot;good enough.&quot;
              </p>
              <p className="text-lg leading-relaxed">
                We work across a wide range of industries and technologies, so
                every week brings new challenges. If you love learning, shipping,
                and raising the bar — you will fit right in.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              title="Why Work With Us?"
              subtitle="We invest in the people who invest in their craft."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title}>
                    <CardHeader>
                      <Icon
                        className="text-primary size-8"
                        aria-hidden="true"
                        strokeWidth={1.75}
                      />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Open Roles */}
      <Section tone="muted" id="open-roles">
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              title="Open Positions"
              subtitle="We are growing. Here are the roles we are actively hiring for."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-16 space-y-6">
              {openRoles.map((role) => (
                <Card key={role.title}>
                  <CardContent className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                        <Badge variant="secondary">{role.type}</Badge>
                        <Badge variant="outline" className="gap-1">
                          <MapPin className="size-3" aria-hidden="true" />
                          {role.location}
                        </Badge>
                      </div>
                      <CardDescription className="max-w-2xl">
                        {role.description}
                      </CardDescription>
                      <Badge variant="default" className="mt-2">
                        {role.department}
                      </Badge>
                    </div>
                    <Button asChild variant="outline" className="shrink-0">
                      <Link href="/contact">
                        Apply Now
                        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* No role found CTA */}
      <Section>
        <Container size="sm">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Don&apos;t See Your Role?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                We are always on the lookout for talented people. Send us your
                resume and we will keep you in mind for future opportunities.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
