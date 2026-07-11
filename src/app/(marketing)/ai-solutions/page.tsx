import { CheckCircle } from "lucide-react";
import { FaBrain, FaRobot, FaMicrochip, FaNetworkWired, FaEye, FaDatabase, FaMagic } from "react-icons/fa";
import Link from "next/link";
import { aiSolutions } from "@/data/ai-solutions";
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
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "AI Solutions",
  description:
    "Practical AI capabilities that integrate into your products and workflows: chatbots, generative AI, RAG applications, and more.",
  path: "/ai-solutions",
});

const iconMap: Record<string, React.ElementType> = {
  Brain: FaBrain,
  Bot: FaRobot,
  MessageSquare: FaMicrochip,
  Network: FaNetworkWired,
  Eye: FaEye,
  Database: FaDatabase,
  Sparkles: FaMagic,
};

const approachSteps = [
  {
    step: "01",
    title: "Discovery & Scoping",
    description:
      "We identify the highest-impact AI opportunities for your product, evaluate feasibility, and define success metrics before writing any code.",
  },
  {
    step: "02",
    title: "Prototype & Validate",
    description:
      "A focused proof-of-concept with real data to validate approach, estimate production cost, and surface edge cases early.",
  },
  {
    step: "03",
    title: "Production Build",
    description:
      "We productionize the solution with proper evaluation, observability, guardrails, and CI/CD for model and prompt updates.",
  },
  {
    step: "04",
    title: "Measure & Iterate",
    description:
      "Post-launch monitoring, eval-driven improvements, and ongoing partnership to keep your AI features reliable and up-to-date.",
  },
];

const useCases = [
  {
    title: "Customer Support Automation",
    description:
      "Reduce support ticket volume with AI agents that resolve common issues autonomously and escalate seamlessly to human agents.",
  },
  {
    title: "Intelligent Document Processing",
    description:
      "Extract, classify, and summarize information from unstructured documents — invoices, contracts, reports, and more.",
  },
  {
    title: "AI-Powered Search & Knowledge Base",
    description:
      "Enable your users and team to find answers across your entire knowledge corpus with semantic search and conversational retrieval.",
  },
  {
    title: "Content Generation & Personalization",
    description:
      "Generate product descriptions, marketing copy, email sequences, and personalized recommendations at scale.",
  },
];

export default function AISolutionsPage() {
  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="AI Solutions"
              subtitle="Practical AI capabilities that integrate into your products and workflows without rebuilding them."
            />
          </AnimatedSection>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <AnimatedSection>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aiSolutions.map((solution) => {
                const Icon = iconMap[solution.icon] ?? FaBrain;
                return (
                  <Card key={solution.id} className="group relative overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Watermark */}
                    <div className="absolute -bottom-6 -right-6 z-0 text-primary/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-primary/10 group-hover:-rotate-12 pointer-events-none">
                      <Icon className="size-48" aria-hidden="true" />
                    </div>

                    <CardHeader className="relative z-10">
                      <div
                        aria-hidden="true"
                        className="bg-background/80 border border-primary/20 text-primary mb-4 flex size-12 items-center justify-center rounded-xl shadow-sm"
                      >
                        <Icon className="size-6" />
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <CardDescription>{solution.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {solution.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="text-muted-foreground flex items-start gap-2 text-sm"
                          >
                            <span
                              aria-hidden="true"
                              className="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full"
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
        </Container>
      </Section>

      {/* Our Approach */}
      <Section>
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              title="Our AI Delivery Approach"
              subtitle="We bring engineering rigor to AI projects — from proof-of-concept to production."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {approachSteps.map((step) => (
                <div key={step.step} className="relative">
                  <span className="text-primary/20 text-5xl font-bold leading-none">
                    {step.step}
                  </span>
                  <h3 className="text-foreground mt-4 text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section tone="muted">
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              title="Common Use Cases"
              subtitle="AI is transforming every industry. Here are some of the most impactful applications we help teams build."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {useCases.map((useCase) => (
                <Card key={useCase.title} className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle
                        className="text-primary mt-0.5 size-5 shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <CardTitle className="text-lg">{useCase.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {useCase.description}
                        </CardDescription>
                      </div>
                    </div>
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
                Ready to Explore AI for Your Product?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                Let&apos;s discuss how AI can solve your specific business
                challenges. No buzzwords, just practical engineering.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="min-w-[200px]">
                  <Link href="/contact">Start the Conversation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
