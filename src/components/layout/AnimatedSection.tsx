"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /**
   * Vertical translation distance for the fade-up effect in pixels.
   */
  offset?: number;
  /**
   * Animation duration in seconds.
   */
  duration?: number;
  /**
   * Delay before the animation starts, in seconds.
   */
  delay?: number;
  id?: string;
  /**
   * Render as a specific HTML tag. Defaults to `<section>`.
   */
  as?: "section" | "div" | "article" | "header" | "footer" | "main";
}

/**
 * Wraps content with a Framer Motion fade-up reveal triggered on first viewport entry.
 *
 * Respects `prefers-reduced-motion` by rendering a static element when the user
 * has indicated a preference for reduced motion.
 */
export function AnimatedSection({
  children,
  className,
  offset = 24,
  duration = 0.5,
  delay = 0,
  id,
  as = "section",
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      id={id}
      className={cn(className)}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
