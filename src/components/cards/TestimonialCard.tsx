import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

/**
 * Customer testimonial card. Renders a quote, attribution (name, role,
 * company) and a decorative quotation glyph. Used on the home page and
 * the testimonials section.
 */
export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card className={cn("premium-card h-full border-border/60", className)}>
      <CardContent className="flex h-full flex-col gap-6 pt-8">
        <figure className="flex h-full flex-col">
          <Quote
            aria-hidden="true"
            className="text-primary/30 mb-4 size-8"
          />
          <blockquote className="text-foreground flex-1 text-base leading-relaxed">
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="border-border/60 mt-6 border-t pt-5">
            <p className="text-foreground text-sm font-semibold">
              {testimonial.author}
            </p>
            <p className="text-muted-foreground mt-0.5 text-xs">
              {testimonial.role}, {testimonial.company}
            </p>
          </figcaption>
        </figure>
      </CardContent>
    </Card>
  );
}
