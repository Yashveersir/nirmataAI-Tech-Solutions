/**
 * AI solutions promoted on the marketing site. Each entry represents a
 * distinct capability or productised offering within our AI practice.
 */
export interface AISolution {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export const aiSolutions: AISolution[] = [
  {
    id: "ai-chatbots",
    slug: "ai-chatbots",
    title: "AI Chatbots",
    shortDescription:
      "Conversational assistants that handle support, lead capture, and product questions.",
    description:
      "We design, train, and deploy chatbots that plug into your knowledge base, ticketing system, or CRM. Every bot ships with analytics, escalation paths, and a human handoff fallback.",
    capabilities: [
      "Knowledge base grounding",
      "Multi-channel deployment (web, WhatsApp, Slack)",
      "Human handoff & escalation",
      "Conversation analytics",
    ],
    icon: "Bot",
  },
  {
    id: "generative-ai",
    slug: "generative-ai",
    title: "Generative AI",
    shortDescription:
      "Production-grade generative features: copy, summaries, image workflows, and more.",
    description:
      "From content generation to structured extraction, we help you ship generative features with the right guardrails, evaluation, and observability in place.",
    capabilities: [
      "Prompt & system design",
      "Evaluation pipelines",
      "Cost & latency optimisation",
      "Safety & guardrail design",
    ],
    icon: "Sparkles",
  },
  {
    id: "rag-applications",
    slug: "rag-applications",
    title: "RAG Applications",
    shortDescription:
      "Retrieval-augmented generation pipelines grounded in your private data.",
    description:
      "We architect RAG systems that combine your proprietary documents, embeddings, and LLMs into answers you can trust — with citations, freshness controls, and access governance.",
    capabilities: [
      "Document ingestion pipelines",
      "Hybrid search & reranking",
      "Citation & provenance",
      "Access control & data isolation",
    ],
    icon: "Database",
  },
];
