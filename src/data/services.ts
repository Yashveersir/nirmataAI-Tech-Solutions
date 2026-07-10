import type { Service } from "@/types";

/**
 * Services promoted across the marketing site. The full catalogue lives here
 * so multiple sections (home grid, services page, footer, etc.) can share a
 * single source of truth.
 */
export const services: Service[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Modern, performant web platforms built with the frameworks your team already loves.",
    description:
      "We design, build, and ship production-grade web applications using Next.js, React, TypeScript, and Tailwind CSS. From marketing sites to complex SaaS dashboards, every project is optimised for speed, accessibility, and SEO.",
    features: [
      "Next.js & React applications",
      "Headless CMS integrations",
      "Server-side rendering & edge delivery",
      "Accessibility-first implementation",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    benefits: [
      "Faster time-to-market",
      "Improved Core Web Vitals",
      "Lower long-term maintenance cost",
    ],
    faq: [
      {
        question: "Do you build using Next.js App Router?",
        answer:
          "Yes. We default to the App Router with React Server Components for new builds.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Absolutely. We routinely audit, refactor, and stabilise legacy Next.js or React projects.",
      },
    ],
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Solutions",
    shortDescription:
      "Practical AI features that ship to production: chatbots, copilots, and RAG pipelines.",
    description:
      "We help product teams embed AI into their products without rebuilding them. From prompt engineering and RAG architectures to evaluation and observability, we cover the full lifecycle of an AI feature.",
    features: [
      "LLM application design",
      "Retrieval-augmented generation (RAG)",
      "Prompt & evaluation pipelines",
      "Production observability for AI",
    ],
    technologies: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "pgvector"],
    benefits: [
      "Faster shipping of AI features",
      "Measurable quality with eval suites",
      "Vendor-neutral architecture",
    ],
    faq: [
      {
        question: "Which model providers do you support?",
        answer:
          "OpenAI, Anthropic, Mistral, and open-source models hosted on your infrastructure.",
      },
      {
        question: "Do you handle data privacy?",
        answer:
          "Yes — we design architectures that keep your data within your VPC and your control.",
      },
    ],
  },
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software",
    shortDescription:
      "Bespoke internal tools, SaaS products, and platforms engineered around your workflows.",
    description:
      "When off-the-shelf software gets in the way, we build the bespoke platform you actually need. Our engineers pair with your domain experts to translate operational complexity into maintainable, well-tested software.",
    features: [
      "Domain modelling & API design",
      "Internal tooling & admin panels",
      "Workflow automation",
      "Long-term maintenance partnerships",
    ],
    technologies: ["TypeScript", "PostgreSQL", "Prisma", "tRPC", "GraphQL"],
    benefits: [
      "Reduced operational friction",
      "Systems tailored to your team",
      "Code you actually own",
    ],
    faq: [
      {
        question: "Do you take on long-term engagements?",
        answer:
          "Yes — many of our clients retain us for ongoing feature development after launch.",
      },
      {
        question: "How do you handle handover?",
        answer:
          "We deliver documentation, runbooks, and recorded walkthroughs as part of every engagement.",
      },
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription:
      "Reliable cloud infrastructure, CI/CD pipelines, and observability from day one.",
    description:
      "We design cloud infrastructure that scales with you. From AWS and Vercel to Kubernetes and Terraform, we help you ship faster without trading away reliability, security, or visibility.",
    features: [
      "Infrastructure as code",
      "CI/CD pipelines",
      "Observability & on-call setup",
      "Cost optimisation",
    ],
    technologies: ["AWS", "Vercel", "Docker", "Terraform", "GitHub Actions"],
    benefits: [
      "Predictable deployments",
      "Lower cloud spend",
      "Faster incident recovery",
    ],
    faq: [
      {
        question: "Which cloud providers do you work with?",
        answer:
          "Primarily AWS, Vercel, and GCP. We are happy to extend to other providers as needed.",
      },
      {
        question: "Can you audit our existing setup?",
        answer:
          "Yes. We run a focused infrastructure audit and deliver a prioritised remediation plan.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Product design that bridges user research, systems thinking, and crisp interface craft.",
    description:
      "Our designers partner with you from research through to high-fidelity prototypes and design systems. We make sure every screen earns its place by tying it back to a real user problem.",
    features: [
      "Discovery & user research",
      "Wireframes & prototypes",
      "Design systems",
      "Usability testing",
    ],
    technologies: ["Figma", "FigJam", "Maze", "Storybook"],
    benefits: [
      "Higher conversion rates",
      "Reduced rework during build",
      "Reusable component libraries",
    ],
    faq: [
      {
        question: "Do you build design systems?",
        answer:
          "Yes — we design tokens-first systems that translate cleanly into code.",
      },
      {
        question: "Can you work alongside our in-house designers?",
        answer:
          "Frequently. We are comfortable plugging into existing product and design rituals.",
      },
    ],
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "Mobile Development",
    shortDescription:
      "Native-feeling iOS and Android apps, including cross-platform React Native builds.",
    description:
      "We build mobile apps that feel at home on the device. Whether it is a React Native cross-platform build or a fully native Swift / Kotlin project, we focus on polish, performance, and offline-first reliability.",
    features: [
      "React Native & Expo",
      "Native iOS (Swift) and Android (Kotlin)",
      "Offline-first architecture",
      "App Store submission support",
    ],
    technologies: ["React Native", "Expo", "Swift", "Kotlin", "Firebase"],
    benefits: [
      "Shorter release cycles",
      "Consistent UX across platforms",
      "Smooth App Store / Play Store launches",
    ],
    faq: [
      {
        question: "Do you publish apps on behalf of clients?",
        answer:
          "Yes — we manage the full submission process including store assets and compliance.",
      },
      {
        question: "Can you add offline support to an existing app?",
        answer:
          "Absolutely. We routinely retrofit offline-first sync into legacy mobile apps.",
      },
    ],
  },
];
