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

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage(props: BlogPageProps) {
  const searchParams = await props.searchParams;
  const selectedCategory = searchParams?.category || "All";

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

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

      {/* Categories Filter */}
      <Section tone="muted" spacing="sm">
        <Container>
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="text-muted-foreground size-4" aria-hidden="true" />
              <span className="text-muted-foreground mr-2 text-sm font-medium">
                Categories:
              </span>
              <Link href="/blog" scroll={false}>
                <Badge 
                  variant={selectedCategory === "All" ? "default" : "secondary"} 
                  className="cursor-pointer hover:bg-primary/90 transition-colors"
                >
                  All
                </Badge>
              </Link>
              {categories.map((category) => (
                <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`} scroll={false}>
                  <Badge 
                    variant={selectedCategory === category ? "default" : "secondary"} 
                    className="cursor-pointer hover:bg-primary/90 transition-colors"
                  >
                    {category}
                  </Badge>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section tone="muted" spacing="md">
        <Container>
          <AnimatedSection>
            {filteredPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} priority={index < 3} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No posts found in this category.</p>
              </div>
            )}
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
