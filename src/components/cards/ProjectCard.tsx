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
        "group premium-card h-full overflow-hidden pt-0 flex flex-col justify-between relative",
        className,
      )}
    >
      <div className="bg-muted relative aspect-[4/3] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.08] filter group-hover:brightness-110"
        />
      </div>
      <CardHeader className="relative z-10 flex-1 px-8 pt-6 -mt-8">
        <span className="text-primary text-[0.7rem] font-extrabold tracking-[0.25em] uppercase drop-shadow-[0_0_8px_rgba(var(--color-primary),0.8)]">
          {project.category}
        </span>
        <CardTitle className="text-2xl font-bold tracking-tight mt-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-3 text-[0.95rem] font-medium leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto relative z-10 px-8 pb-8 pt-4">
        <Button asChild variant="link" size="sm" className="px-0 text-primary hover:text-primary/90 font-bold group/btn text-[0.95rem]">
          <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2">
            View case study
            <ArrowRight aria-hidden="true" className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
