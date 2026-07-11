import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/cards/BlogCard";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { AISolutionsTeaser } from "@/components/sections/AISolutionsTeaser";
import { createMetadata } from "@/lib/metadata";
import { blogPosts } from "@/data/blog";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata = createMetadata({
  title: undefined,
  description:
    "NirmataAI Tech Solution builds AI-powered software, modern web platforms, and digital experiences for ambitious teams. AI-first engineering, design, and cloud services.",
  keywords: [
    "AI software development agency",
    "custom software development Kolkata",
    "enterprise AI integration",
    "cloud devops services",
    "B2B web development",
    "AI consultancy services",
  ],
  path: "/",
});

const stats = [
  { value: "Est.", label: "Founded 2026" },
  { value: "10+", label: "Projects Delivered" },
  { value: "6", label: "Core Services" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats Strip */}
      <Section id="stats" tone="muted" spacing="sm">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="group text-center">
                  <div className="font-display text-4xl font-extrabold tracking-tight text-primary transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2.5 text-sm font-medium tracking-wide text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <ServicesGrid />
      <WhyChooseUs />
      <PortfolioShowcase />

      <AISolutionsTeaser />

      {/* Blog Preview Section */}
      <Section id="blog-preview">
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              eyebrow="Insights"
              title="Latest Insights"
              subtitle="Thoughts on AI engineering, web development, product design, and building software that lasts."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(0, 3).map((post, index) => (
                <BlogCard key={post.id} post={post} priority={index === 0} />
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read All Articles</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section tone="muted" id="cta" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-mesh-gradient opacity-60"
        />
        <Container size="md">
          <AnimatedSection>
            <div className="rounded-3xl border border-border/60 bg-card/80 px-8 py-14 text-center shadow-sm backdrop-blur-sm sm:px-12 sm:py-16">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Build Something Great?
              </h2>
              <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-lg leading-relaxed">
                Let&apos;s discuss your project. Whether you need a full platform
                build, an AI feature, or a trusted technology partner — we&apos;re
                here to help.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="min-w-[220px]">
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[220px] bg-background/60 backdrop-blur-sm">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <JsonLd
        type="Service"
        data={{
          provider: { "@type": "Organization", name: "NirmataAI Tech Solution" },
          serviceType: "Software Development",
          description:
            "AI-powered software development, web platforms, AI solutions, cloud infrastructure, UI/UX design, and mobile development.",
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Software Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Web Development",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Solutions",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Custom Software",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cloud & DevOps",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "UI/UX Design",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Mobile Development",
                },
              },
            ],
          },
        }}
      />
    </>
  );
}
