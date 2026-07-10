import { Lightbulb, Shield, Eye, Users, type LucideIcon } from "lucide-react";
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

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We adopt modern tools and AI thoughtfully, choosing what genuinely improves outcomes over what is merely fashionable.",
  },
  {
    icon: Shield,
    title: "Quality & Security",
    description:
      "Every line of code is written with testing, review, and security in mind so the systems we ship remain safe to operate.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "Clear roadmaps, honest estimates, and direct communication keep stakeholders aligned at every stage of delivery.",
  },
  {
    icon: Users,
    title: "Client Success",
    description:
      "We measure our success by the outcomes our clients achieve, partnering beyond launch to ensure lasting impact.",
  },
];
export function WhyChooseUs() {
  return (
    <Section tone="muted" id="why-choose-us" className="relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute -bottom-24 right-10 -z-10 size-80 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        <AnimatedSection>
          <SectionHeader
            centered
            title="Why Choose NirmataAI"
            subtitle="We combine engineering discipline with product craft to deliver high-performance, secure software that lasts."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="group bg-card/30 border-border/50 backdrop-blur-md glow-accent-hover transition-all duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="bg-primary/10 border border-primary/20 text-primary flex size-12 items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        className="size-6"
                        aria-hidden="true"
                        strokeWidth={2}
                      />
                    </div>
                    <CardTitle className="text-xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <CardDescription className="text-muted-foreground/80 leading-relaxed text-sm">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
