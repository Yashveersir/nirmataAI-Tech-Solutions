import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { AISolutionsTeaser } from "@/components/sections/AISolutionsTeaser";
import { createMetadata } from "@/lib/metadata";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata = createMetadata({
  title: undefined,
  description:
    "NirmataAI Tech Solution builds AI-powered software, modern web platforms, and digital experiences for ambitious teams. AI-first engineering, design, and cloud services.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <PortfolioShowcase />

      {/* Testimonials Section */}
      <Section tone="muted" id="testimonials">
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              title="What Our Clients Say"
              subtitle="We partner with teams that value quality, transparency, and long-term relationships."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <AISolutionsTeaser />

      {/* Blog Preview Section */}
      <Section id="blog-preview">
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
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
      <Section tone="muted" id="cta">
        <Container size="md">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Build Something Great?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                Let&apos;s discuss your project. Whether you need a full platform
                build, an AI feature, or a trusted technology partner — we&apos;re
                here to help.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="min-w-[200px]">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[200px]">
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
