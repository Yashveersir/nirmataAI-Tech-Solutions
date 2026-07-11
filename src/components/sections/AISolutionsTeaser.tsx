import { Bot, Sparkles, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { aiSolutions } from "@/data/ai-solutions";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Sparkles,
  Database,
};

export function AISolutionsTeaser() {
  return (
    <Section tone="muted" id="ai-solutions" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid-subtle opacity-50 [mask-image:linear-gradient(to_bottom,transparent,white_30%,white_70%,transparent)]"
      />

      <Container>
        <AnimatedSection>
          <SectionHeader
            centered
            eyebrow="Artificial Intelligence"
            title="AI Solutions"
            subtitle="Practical AI capabilities that integrate into your products and workflows without rebuilding them."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {aiSolutions.map((solution) => {
              const Icon = iconMap[solution.icon] ?? Bot;
              return (
                <Card
                  key={solution.id}
                  className="group premium-card h-full border-border/60"
                >
                  <CardHeader>
                    <div
                      aria-hidden="true"
                      className="bg-primary/8 border border-primary/15 text-primary mb-4 flex size-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {solution.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {solution.capabilities.slice(0, 3).map((capability) => (
                        <li
                          key={capability}
                          className="text-muted-foreground flex items-start gap-2.5 text-sm"
                        >
                          <span
                            aria-hidden="true"
                            className="bg-primary mt-2 size-1.5 shrink-0 rounded-full"
                          />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Button asChild size="lg">
              <Link href="/ai-solutions">Explore AI Solutions</Link>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
