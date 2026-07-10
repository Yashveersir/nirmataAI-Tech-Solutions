import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import type { BlogPost } from "@/types";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  priority?: boolean;
}

/**
 * Blog preview card used in the home page BlogPreview section and on the
 * blog index. Renders a thumbnail, category, title, excerpt, publish date,
 * and a link to the full article.
 */
export function BlogCard({ post, className, priority = false }: BlogCardProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card
      className={cn(
        "group h-full bg-card border-border overflow-hidden pt-0 flex flex-col justify-between relative shadow-sm transition-all hover:shadow-md hover:-translate-y-1",
        className,
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="focus-visible:ring-ring block rounded-t-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        <div className="bg-muted relative aspect-[3/2] w-full overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={`${post.title} cover image`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardHeader>
        <div className="text-foreground/70 flex items-center gap-3 text-xs">
          <span className="font-semibold tracking-widest uppercase">
            {post.category}
          </span>
          <span aria-hidden="true">•</span>
          <span className="flex items-center gap-1">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            <time dateTime={post.publishedAt}>{publishedDate}</time>
          </span>
        </div>
        <CardTitle className="text-xl text-foreground">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-foreground/80">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <p className="text-foreground/80 text-xs font-medium">By {post.author.name}</p>
      </CardContent>
    </Card>
  );
}
