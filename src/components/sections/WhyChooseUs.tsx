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
      <Section id="why-choose-us" className="relative overflow-hidden bg-background">
        {/* Subtle ambient light */}
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-20 -z-10 size-96 rounded-full bg-primary/10 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-20 right-10 -z-10 size-72 rounded-full bg-primary/10 blur-[80px]"
        />
  
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              eyebrow="Why Us"
              title="Why Choose NirmataAI"
              subtitle="We combine engineering discipline with product craft to deliver high-performance, secure software that lasts."
            />
          </AnimatedSection>
  
          <AnimatedSection delay={0.1}>
            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="group premium-card"
                  >
                    <CardHeader className="pb-4">
                      <div className="bg-background/80 border border-primary/20 text-primary mb-6 flex size-14 items-center justify-center rounded-2xl shadow-[0_0_15px_rgba(var(--color-primary),0.1)] transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--color-primary),0.4)]">
                        <Icon
                          className="size-6"
                          aria-hidden="true"
                          strokeWidth={2}
                        />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-muted-foreground leading-relaxed text-[0.95rem]">
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
