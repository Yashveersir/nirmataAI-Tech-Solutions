import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  className?: string;
  /**
   * Image priority hint passed through to `next/image`. Useful for above-the-fold cards.
   */
  priority?: boolean;
}

/**
 * Card used in the home page portfolio showcase. Renders a project
 * thumbnail, category, title, description, and a link to the case study.
 */
export function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group h-full bg-card/40 border-border/50 backdrop-blur-md glow-card-hover overflow-hidden pt-0 flex flex-col justify-between relative",
        className,
      )}
    >
      <div className="bg-muted relative aspect-[3/2] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10" />
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="relative z-10 flex-1">
        <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-1">
          {project.category}
        </span>
        <CardTitle className="text-xl font-display font-bold group-hover:text-primary transition-colors duration-300 mt-1">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground/80 mt-2 text-sm leading-relaxed">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto relative z-10 pt-4 pb-6">
        <Button asChild variant="link" size="sm" className="px-0 text-primary hover:text-primary/80 font-semibold group/btn">
          <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-1.5">
            View case study
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
