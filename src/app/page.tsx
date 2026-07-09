import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NirmataAI Tech Solution",
  description:
    "AI-powered software, modern web platforms, and digital experiences for ambitious teams.",
};

export default function HomePage() {
  return (
    <main id="main" className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">NirmataAI Tech Solution</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Phase 1 marketing site scaffold. Content sections land in subsequent chunks.
        </p>
      </div>
    </main>
  );
}
