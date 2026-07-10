import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, ArrowLeft, User } from "lucide-react";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { createMetadata } from "@/lib/metadata";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    authors: [post.author.name],
    image: post.featuredImage,
  });
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Back link + metadata */}
      <AnimatedSection as="div">
        <Container size="md" className="py-12">
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Blog
          </Link>
        </Container>
      </AnimatedSection>

      {/* Article Header */}
      <AnimatedSection as="div" delay={0.1}>
        <Container size="md">
          <article>
            <header className="space-y-6">
              {/* Category + Date + Author row */}
              <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
                <span className="text-primary font-semibold tracking-widest uppercase text-xs">
                  {post.category}
                </span>
                <span aria-hidden="true">•</span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  <time dateTime={post.publishedAt}>{publishedDate}</time>
                </span>
                <span aria-hidden="true">•</span>
                <span className="flex items-center gap-1.5">
                  <User className="size-4" aria-hidden="true" />
                  {post.author.name}
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {post.title}
              </h1>

              <p className="text-muted-foreground text-xl leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>
          </article>
        </Container>
      </AnimatedSection>

      {/* Featured Image */}
      <AnimatedSection as="div" delay={0.2}>
        <Container size="lg" className="py-12">
          <div className="bg-muted relative aspect-[2/1] w-full overflow-hidden rounded-xl">
            <Image
              src={post.featuredImage}
              alt={`${post.title} cover image`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 80vw, 100vw"
            />
          </div>
        </Container>
      </AnimatedSection>

      {/* Article Content */}
      <AnimatedSection as="div" delay={0.1}>
        <Container size="md" className="pb-20">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <p className="text-lg leading-relaxed">{post.content}</p>
            {/* In future phases, MDX content rendering will go here */}
            <Separator className="my-12" />
            <div className="flex items-center justify-between">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="bg-muted flex size-12 items-center justify-center rounded-full">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  ) : (
                    <User className="text-muted-foreground size-5" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold">{post.author.name}</p>
                  <p className="text-muted-foreground text-xs">Author</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection as="div" delay={0.2}>
        <div className="bg-muted py-20">
          <Container size="sm">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Enjoyed This Article?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">
                Subscribe to our newsletter for more insights on AI, web
                development, and product design.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/blog">Read More Articles</Link>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </AnimatedSection>
    </>
  );
}
