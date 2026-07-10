import Link from "next/link";
import { Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { BlogCard } from "@/components/cards/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Insights on AI engineering, web development, product design, and building software that lasts.",
  path: "/blog",
});

/** Extract unique categories from blog data */
const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function BlogPage() {
  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="Blog"
              subtitle="Thoughts on AI engineering, web development, product design, and building software that lasts."
            />
          </AnimatedSection>
        </Container>
      </Section>

      {/* Categories Filter (visual only in Phase 1) */}
      <Section tone="muted" spacing="sm">
        <Container>
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="text-muted-foreground size-4" aria-hidden="true" />
              <span className="text-muted-foreground mr-2 text-sm font-medium">
                Categories:
              </span>
              <Badge variant="default" className="cursor-default">
                All
              </Badge>
              {categories.map((category) => (
                <Badge key={category} variant="secondary" className="cursor-default">
                  {category}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section tone="muted" spacing="md">
        <Container>
          <AnimatedSection>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} priority={index < 3} />
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Subscribe CTA */}
      <Section spacing="lg">
        <Container size="sm">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                Get the latest articles delivered to your inbox. No spam — just
                practical insights on building great software.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Subscribe to Newsletter</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
