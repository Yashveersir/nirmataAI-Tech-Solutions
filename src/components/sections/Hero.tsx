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
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55 },
    },
  };

  return (
    <section
      aria-label="Hero"
      className="relative flex flex-col overflow-hidden lg:min-h-[90vh] lg:flex-row lg:items-center lg:justify-center"
    >
      {/* Background Video - Stacked on top for mobile, full absolute background on desktop */}
      <div className="relative w-full h-[45vh] sm:h-[50vh] lg:absolute lg:inset-0 lg:h-full lg:-z-20">
        <video
          src="/video/logo-animation.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center lg:object-[80%_center] opacity-100"
        />
        {/* Mobile-only gradient to smoothly fade the bottom of the video into the text section */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent lg:hidden" 
        />
      </div>

      {/* Seamless gradient overlay - Desktop only */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/20 lg:w-[70%] lg:via-background/80 lg:to-transparent"
      />

      <Container className="relative z-10 flex flex-1 items-start pt-6 pb-20 sm:pt-10 sm:pb-24 lg:items-center lg:pt-40 lg:pb-40">
        <motion.div
          className="mx-auto flex w-full max-w-xl flex-col items-center text-center drop-shadow-xl lg:mx-0 lg:mr-auto lg:max-w-[36rem] lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/10 px-5 py-2.5 text-[0.8rem] font-bold tracking-[0.2em] text-primary uppercase backdrop-blur-md shadow-[0_0_20px_rgba(var(--color-primary),0.15)] transition-all duration-300 hover:bg-primary/15 hover:border-primary/40 hover:scale-105"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-90"></span>
              <span className="relative inline-flex size-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"></span>
            </span>
            Accepting New Projects
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mb-5 text-xs font-bold tracking-[0.4em] text-muted-foreground uppercase sm:text-sm"
          >
            Your Vision,{" "}
            <span className="text-primary font-extrabold drop-shadow-[0_0_8px_rgba(var(--color-primary),0.8)]">Our Intelligence</span>
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-[4.5rem] lg:leading-[1.1] pb-3"
          >
            <span className="text-foreground drop-shadow-lg">We Build </span>
            <span className="gradient-text inline-block">Software That Works.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed"
          >
            We are a young team of passionate developers from Kolkata — building
            AI-powered web apps, mobile platforms, and smart automation for
            businesses that want real results, not just demos.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex w-full flex-col items-center justify-center gap-5 sm:flex-row lg:items-start lg:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden rounded-xl min-w-[220px] h-14 bg-primary text-primary-foreground shadow-[0_0_25px_rgba(var(--color-primary),0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--color-primary),0.6)] hover:-translate-y-1"
            >
              <Link href="/contact">
                <span className="relative z-10 font-bold tracking-wide text-[0.95rem]">Get a Free Quote</span>
                <ArrowRight className="relative z-10 ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-[100%]" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group rounded-xl min-w-[220px] h-14 border-border/60 bg-background/40 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-background/80 hover:shadow-lg hover:-translate-y-1"
            >
              <Link href="/portfolio">
                <Code2 className="mr-2 size-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                <span className="font-bold tracking-wide text-[0.95rem]">See Our Work</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
