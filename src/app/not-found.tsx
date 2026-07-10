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
    <div className="bg-background flex min-h-screen flex-col items-center justify-center">
      <Container size="sm">
        <div className="text-center">
          <p className="text-primary text-7xl font-bold tracking-tight sm:text-8xl">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved, deleted, or never existed.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
