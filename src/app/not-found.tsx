import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 — Page Not Found | NirmataAI Tech Solution",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="bg-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-mesh-gradient opacity-70"
      />
      <Container size="sm">
        <div className="text-center">
          <p className="gradient-text font-display text-8xl font-extrabold tracking-tight sm:text-9xl">
            404
          </p>
          <h1 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mx-auto mt-5 max-w-md text-lg leading-relaxed">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved, deleted, or never existed.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[180px]">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[180px] bg-background/60 backdrop-blur-sm">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
