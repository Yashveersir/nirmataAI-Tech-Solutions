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
        "group premium-card h-full overflow-hidden pt-0 flex flex-col justify-between relative",
        className,
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="focus-visible:ring-ring block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        <div className="bg-muted relative aspect-[16/9] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 opacity-80 transition-opacity duration-500 group-hover:opacity-50" />
          <Image
            src={post.featuredImage}
            alt={`${post.title} cover image`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05] filter group-hover:brightness-110"
          />
        </div>
      </Link>
      <CardHeader className="relative z-10 flex-1 px-8 pt-6 -mt-6">
        <div className="text-muted-foreground flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.15em] uppercase">
          <span className="text-primary drop-shadow-[0_0_8px_rgba(var(--color-primary),0.8)]">
            {post.category}
          </span>
          <span aria-hidden="true" className="text-border/50">•</span>
          <span className="flex items-center gap-1.5 opacity-80">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            <time dateTime={post.publishedAt}>{publishedDate}</time>
          </span>
        </div>
        <CardTitle className="text-xl font-bold tracking-tight mt-3">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-primary transition-colors duration-300"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-3 text-[0.95rem] font-medium leading-relaxed">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto relative z-10 px-8 pb-8 pt-4">
        <p className="text-muted-foreground text-[0.8rem] font-bold tracking-wide">By {post.author.name}</p>
      </CardContent>
    </Card>
  );
}
