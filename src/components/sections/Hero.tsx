"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Code2 } from "lucide-react";

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-background pt-8 pb-24 sm:pt-12 sm:pb-32 lg:pt-16 lg:pb-40"
    >
      {/* Clean subtle background */}
      <div className="absolute inset-0 -z-10 bg-subtle-dots opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/80 to-background" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
              </span>
              🟢 Accepting New Projects
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-semibold tracking-[0.25em] text-muted-foreground uppercase"
            >
              Your Vision,{" "}
              <span className="text-primary">Our Intelligence</span>
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            >
              <span className="text-foreground">We Build </span>
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Software That Works.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl font-sans"
            >
              We are a young team of passionate developers from Kolkata — building
              AI-powered web apps, mobile platforms, and smart automation for
              businesses that want real results, not just demos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group min-w-[200px] shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group min-w-[200px] border-border/80 transition-all hover:bg-muted/50"
              >
                <Link href="/portfolio">
                  <Code2 className="mr-2 size-4" />
                  See Our Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Video Showcase Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent opacity-70 blur-2xl"></div>
              
              <video
                src="/video/logo-animation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 w-full rounded-2xl border border-border/60 bg-background/50 object-contain shadow-2xl backdrop-blur-md"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
