"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-44"
    >
      {/* High-tech backgrounds */}
      <div className="absolute inset-0 -z-10 bg-dot-grid opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Ambient glow blobs */}
      <div className="absolute -top-24 left-1/4 -z-10 size-96 rounded-full bg-primary/15 blur-3xl animate-pulse duration-5000" />
      <div className="absolute top-20 right-1/4 -z-10 size-96 rounded-full bg-accent/15 blur-3xl animate-pulse duration-7000" />

      <Container>
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase mb-6"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
            </span>
            AI-First Engineering Agency
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent text-glow-cyan">
              Build Intelligent Digital Products
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl font-sans"
          >
            Empowering ambitious enterprises with AI-driven custom software, high-performance web platforms, and premium user experiences.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="min-w-[200px] shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px] border-border/80 hover:bg-muted/50 transition-all">
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
