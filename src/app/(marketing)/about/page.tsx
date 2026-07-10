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
    title: "Innovation-First",
    description:
      "We aggressively explore emerging AI technologies and push boundaries so our clients stay ahead of the curve.",
    icon: Lightbulb,
  },
  {
    title: "Engineering Excellence",
    description:
      "We sweat the details — robust architecture, clean code, and thoughtful design in every scalable deliverable.",
    icon: ShieldCheck,
  },
  {
    title: "Radical Transparency",
    description:
      "Honest communication, clear pricing, and shared decision-making at every step of the engagement.",
    icon: Eye,
  },
  {
    title: "Client Success",
    description:
      "Your outcomes are our outcomes. We measure success by the real-world impact and ROI of the intelligent systems we ship.",
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
    year: "March 2026",
    title: "Founded",
    description:
      "NirmataAI was founded with a mission to make AI-powered engineering accessible and practical for product teams of every size.",
  },
  {
    year: "Mid 2026",
    title: "First Projects Shipped",
    description:
      "We launched our first client projects — Green Valley Poultry Farm and a 3D developer portfolio — proving we could deliver production-quality software fast.",
  },
  {
    year: "2026 → Beyond",
    title: "Growing & Expanding",
    description:
      "Today we're expanding our capabilities across AI, cloud, digital marketing, and mobile — building a team and a reputation we are proud of.",
  },
];

interface TeamMemberItem {
  name: string;
  initials: string;
  bio: string;
  skills: string[];
}

const team: TeamMemberItem[] = [
  {
    name: "Yashveer Singh",
    initials: "YS",
    bio: "Full-stack engineer passionate about AI integrations, clean architecture, and building products people actually enjoy using.",
    skills: ["Next.js", "Node.js", "AI/ML", "MongoDB"],
  },
  {
    name: "Team Member",
    initials: "TM",
    bio: "Frontend wizard obsessed with pixel-perfect UIs, smooth animations, and making the web feel alive.",
    skills: ["React", "Framer Motion", "UI/UX", "Tailwind"],
  },
  {
    name: "Team Member",
    initials: "TM",
    bio: "Backend engineer and cloud architect — keeps our systems fast, secure, and scalable under pressure.",
    skills: ["DevOps", "AWS", "PostgreSQL", "Security"],
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
              subtitle="We are a collective of engineers, designers, and AI specialists who help ambitious businesses build intelligent digital products that last."
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
               NirmataAI Tech Solution was founded in March 2026 on a simple belief: ambitious teams
                deserve partners who treat software as a craft, especially in the rapidly evolving era of AI. We started as a small
                group of friends and engineers obsessed with applying artificial intelligence to real
                business problems, and we've grown by delivering work we are proud to put
                our names on.
              </p>
              <p>
                Today, we operate as a multidisciplinary studio spanning AI engineering,
                full-stack web development, cloud infrastructure, and product design. Every project
                we take on is an opportunity to combine rigorous engineering with
                thoughtful user experience — building intelligent systems that scale gracefully and products
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

      {/* Team Section */}
      <Section id="team" tone="muted" aria-labelledby="team-heading">
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              id="team-heading"
              title="The People Behind It"
              subtitle="We're a team of friends from UIT, University of Burdwan — builders who got tired of waiting for permission to build cool things."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="size-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-2xl font-bold text-primary">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-12 text-center text-sm text-muted-foreground max-w-lg mx-auto">
              We don&apos;t have fancy titles. We just love building. Every project is a team effort — ideas, code, design, and late-night debugging sessions, all shared equally.
            </p>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
