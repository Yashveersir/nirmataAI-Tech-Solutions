import type { BlogPost } from "@/types";

/**
 * Recent blog posts surfaced on the home page. Full content lives in MDX
 * files; this is the metadata used for previews and listings.
 */
export const blogPosts: BlogPost[] = [
  {
    id: "evaluating-rag-pipelines",
    slug: "evaluating-rag-pipelines",
    title: "A Practical Guide to Evaluating RAG Pipelines",
    excerpt:
      "Retrieval-augmented generation is easy to demo and hard to trust. Here is how we build evaluation harnesses that catch regressions before they reach customers.",
    content:
      "RAG evaluation is the difference between a demo and a product. In this guide we walk through the three layers of evaluation we use on every RAG engagement: retrieval quality, answer groundedness, and end-to-end task success.",
    category: "AI Engineering",
    tags: ["RAG", "Evaluation", "LLMs"],
    featuredImage: "https://placehold.co/600x400",
    publishedAt: "2026-06-12",
    author: {
      name: "Aarav Mehta",
      avatar: "https://placehold.co/120x120",
    },
  },
  {
    id: "next-js-app-router-in-production",
    slug: "next-js-app-router-in-production",
    title: "Next.js App Router in Production: Lessons from Twelve Launches",
    excerpt:
      "Twelve Next.js App Router launches later, here are the patterns that aged well and the ones we would not repeat.",
    content:
      "Server Components, streaming, and partial pre-rendering all sound great in conference talks. Here is what they look like when you have to support them in production for a year.",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance"],
    featuredImage: "https://placehold.co/600x400",
    publishedAt: "2026-05-28",
    author: {
      name: "Lin Chen",
      avatar: "https://placehold.co/120x120",
    },
  },
  {
    id: "designing-for-ai-features",
    slug: "designing-for-ai-features",
    title: "Designing Product UX for AI Features",
    excerpt:
      "AI features are not magic. They need clear guardrails, honest loading states, and a plan for when the model is wrong.",
    content:
      "We unpack the design patterns that make AI features feel trustworthy: progressive disclosure, citation surfacing, and graceful fallbacks when confidence is low.",
    category: "Design",
    tags: ["UX", "AI", "Product Design"],
    featuredImage: "https://placehold.co/600x400",
    publishedAt: "2026-05-04",
    author: {
      name: "Sara Idris",
      avatar: "https://placehold.co/120x120",
    },
  },
];
