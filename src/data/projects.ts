import type { Project } from "@/types";

/**
 * Featured projects displayed on the home page. Three flagship case studies
 * that demonstrate range across web, AI, and platform work.
 */
export const projects: Project[] = [
  {
    id: "helio-finance-platform",
    slug: "helio-finance-platform",
    title: "Helio Finance Platform",
    category: "Web Application",
    description:
      "A modern wealth management dashboard for an emerging fintech, with real-time portfolio tracking and AI-powered insights.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI"],
    thumbnail: "https://placehold.co/600x400",
    liveUrl: "https://example.com/helio",
    caseStudy:
      "Helio needed to replace a legacy Flash-based dashboard with a fast, modern web app. We shipped a Next.js-based platform with real-time portfolio data, role-based access, and an AI summary feature that boosted advisor productivity by 28%.",
  },
  {
    id: "neuron-support-copilot",
    slug: "neuron-support-copilot",
    title: "Neuron Support Copilot",
    category: "AI Solution",
    description:
      "An AI copilot embedded into a SaaS support workflow, grounded in customer documentation and historical tickets.",
    technologies: ["Python", "LangChain", "pgvector", "Next.js"],
    thumbnail: "https://placehold.co/600x400",
    liveUrl: "https://example.com/neuron",
    caseStudy:
      "We designed a retrieval-augmented copilot that suggests answers to support agents in real time. Citation-aware responses reduced average handle time by 31% while keeping escalation quality high.",
  },
  {
    id: "atlas-internal-platform",
    slug: "atlas-internal-platform",
    title: "Atlas Internal Platform",
    category: "Custom Software",
    description:
      "A bespoke internal tooling platform that unified operations across three business units into a single, role-aware console.",
    technologies: ["React", "Node.js", "Prisma", "PostgreSQL"],
    thumbnail: "https://placehold.co/600x400",
    caseStudy:
      "Atlas had five disconnected internal tools. We replaced them with a single role-aware console, cutting training time for new operations hires by 60% and eliminating hours of weekly data reconciliation work.",
  },
];
