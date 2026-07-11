import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  icon?: React.ElementType;
  className?: string;
}

/**
 * Card used in the home page services grid and on the services index.
 * Renders an icon, title, short description, and a link to the service page.
 */
export function ServiceCard({ service, icon: Icon, className }: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group premium-card h-full flex flex-col justify-between overflow-hidden relative",
        className,
      )}
    >
      <div className="absolute -bottom-6 -right-6 z-0 text-primary/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-primary/10 group-hover:-rotate-12 pointer-events-none">
        {Icon && <Icon className="size-48" aria-hidden="true" />}
      </div>
      <CardHeader className="relative z-10 flex-1 px-8 pt-8">
        <div
          aria-hidden="true"
          className="bg-background/80 border border-primary/20 text-primary mb-6 flex size-14 items-center justify-center rounded-2xl shadow-[0_0_15px_rgba(var(--color-primary),0.1)] transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--color-primary),0.4)] group-hover:-rotate-3"
        >
          {Icon && <Icon className="size-7" />}
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
          {service.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-3 text-[0.95rem] font-medium leading-relaxed">
          {service.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto relative z-10 px-8 pb-8 pt-4">
        <Button asChild variant="link" size="sm" className="px-0 text-primary hover:text-primary/90 font-bold group/btn text-[0.95rem]">
          <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2">
            Learn more
            <ArrowRight aria-hidden="true" className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
