import { faqs } from "@/data/faqs";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about NirmataAI's services, process, pricing, and AI solutions.",
  path: "/faqs",
});

/** Group FAQs by category */
const categories = Array.from(new Set(faqs.map((f) => f.category)));

export default function FAQsPage() {
  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about working with NirmataAI. Can't find what you're looking for? Reach out to us."
            />
          </AnimatedSection>
        </Container>
      </Section>

      {categories.map((category, catIndex) => {
        const categoryFaqs = faqs.filter((f) => f.category === category);
        return (
          <Section
            key={category}
            tone={catIndex % 2 === 0 ? "default" : "muted"}
            spacing={catIndex === categories.length - 1 ? "md" : "md"}
          >
            <Container size="md">
              <AnimatedSection>
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs tracking-wider">
                  {category}
                </Badge>
                <Accordion type="single" collapsible className="w-full">
                  {categoryFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left text-base font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </Container>
          </Section>
        );
      })}

      {/* Still have questions CTA */}
      <Section spacing="lg">
        <Container size="sm">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                We are happy to answer any questions about your specific project
                or requirements. No obligation, just a conversation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
