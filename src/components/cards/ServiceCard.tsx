import Link from "next/link";
import { ArrowRight, Code2, type LucideIcon } from "lucide-react";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: Service;
  icon?: LucideIcon;
  className?: string;
}

/**
 * Card used in the home page services grid and on the services index.
 * Renders an icon, title, short description, and a link to the service page.
 */
export function ServiceCard({ service, icon: Icon = Code2, className }: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group h-full bg-card/40 border-border/50 backdrop-blur-md glow-card-hover flex flex-col justify-between overflow-hidden relative",
        className,
      )}
    >
      <CardHeader className="relative z-10 flex-1">
        <div
          aria-hidden="true"
          className="bg-primary/15 border border-primary/25 text-primary flex size-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 mb-4"
        >
          <Icon className="size-6" />
        </div>
        <CardTitle className="text-xl font-display font-bold group-hover:text-primary transition-colors duration-300 mt-2">{service.title}</CardTitle>
        <CardDescription className="text-muted-foreground/80 mt-2 text-sm leading-relaxed">{service.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto relative z-10 pt-4 pb-6">
        <Button asChild variant="link" size="sm" className="px-0 text-primary hover:text-primary/80 font-semibold group/btn">
          <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1.5">
            Learn more
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
