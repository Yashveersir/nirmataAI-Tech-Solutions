import type { LucideIcon } from "lucide-react";
import { Eye, Lightbulb, ShieldCheck, Trophy } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about NirmataAI Tech Solution — our mission, values, and the team behind our AI-first software services.",
  path: "/about",
});

interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const values: ValueItem[] = [
  {
    title: "Innovation",
    description:
      "We explore emerging technologies and push boundaries so our clients stay ahead of the curve.",
    icon: Lightbulb,
  },
  {
    title: "Quality",
    description:
      "We sweat the details — robust architecture, clean code, and thoughtful design in every deliverable.",
    icon: ShieldCheck,
  },
  {
    title: "Transparency",
    description:
      "Honest communication, clear pricing, and shared decision-making at every step of the engagement.",
    icon: Eye,
  },
  {
    title: "Client Success",
    description:
      "Your outcomes are our outcomes. We measure success by the real-world impact of what we ship.",
    icon: Trophy,
  },
];

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2021",
    title: "Founded",
    description:
      "NirmataAI was founded with a mission to make AI-powered engineering accessible to product teams of every size.",
  },
  {
    year: "2023",
    title: "Expanding Capabilities",
    description:
      "We grew into a full-stack software services partner, adding cloud, design, and mobile practices alongside our AI roots.",
  },
  {
    year: "2025",
    title: "Global Delivery",
    description:
      "Today we partner with startups and enterprises worldwide, shipping resilient digital products end-to-end.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section id="about-hero" spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="About NirmataAI"
              subtitle="We are a team of engineers, designers, and AI specialists who help ambitious teams build digital products that last."
            />
          </AnimatedSection>
        </Container>
      </Section>

      <Section id="story" tone="muted" aria-labelledby="story-heading">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader id="story-heading" title="Our Story" />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="text-muted-foreground mt-8 space-y-6 text-base leading-relaxed sm:text-lg">
              <p>
                NirmataAI Tech Solution was founded on a simple belief: ambitious teams
                deserve partners who treat software as a craft. We started as a small
                group of engineers and researchers obsessed with applying AI to real
                product problems, and we grew by delivering work we were proud to put
                our names on.
              </p>
              <p>
                Today, we operate as a multidisciplinary studio spanning AI engineering,
                full-stack web, cloud infrastructure, and product design. Every project
                we take on is an opportunity to combine rigorous engineering with
                thoughtful design — building systems that scale gracefully and products
                that people genuinely enjoy using.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <Section id="values" aria-labelledby="values-heading">
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              id="values-heading"
              title="What We Believe"
              subtitle="Four principles guide how we build, communicate, and grow alongside our clients."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="border-border bg-card text-card-foreground rounded-lg border p-6 shadow-sm"
                  >
                    <div className="bg-accent text-accent-foreground mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-foreground text-lg font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <Section id="team" tone="muted" aria-labelledby="team-heading">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader id="team-heading" title="Meet the Team" />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="text-muted-foreground mt-8 space-y-4 text-base leading-relaxed sm:text-lg">
              <p>
                Our team is a mix of senior engineers, product designers, and AI
                researchers who have shipped software for startups, scale-ups, and
                enterprise teams across multiple industries.
              </p>
              <p>
                Full team profiles and headshots are coming soon. In the meantime, reach
                out and we will introduce the right people for your project.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <Section id="journey" aria-labelledby="journey-heading">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              id="journey-heading"
              title="Our Journey"
              subtitle="A short timeline of how NirmataAI has evolved since day one."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ol className="border-border mt-12 space-y-8 border-l-2 pl-6 sm:pl-8">
              {milestones.map((milestone) => (
                <li key={milestone.year} className="relative">
                  <span
                    aria-hidden="true"
                    className="bg-primary absolute -left-[33px] sm:-left-[41px] top-1.5 h-3 w-3 rounded-full ring-4 ring-background"
                  />
                  <div className="text-primary text-sm font-semibold tracking-widest uppercase">
                    {milestone.year}
                  </div>
                  <h3 className="text-foreground mt-1 text-lg font-semibold">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
                    {milestone.description}
                  </p>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
