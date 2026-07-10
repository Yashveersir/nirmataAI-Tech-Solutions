export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "general-1",
    category: "General",
    question: "What is NirmataAI Tech Solution?",
    answer:
      "NirmataAI is a technology services company that specializes in AI-powered software development, modern web platforms, cloud infrastructure, UI/UX design, and mobile applications. We partner with startups, SMBs, and enterprises to design, build, and scale digital products.",
  },
  {
    id: "general-2",
    category: "General",
    question: "How is NirmataAI different from other software agencies?",
    answer:
      "We are an AI-first engineering studio. This means every project we take on benefits from our deep expertise in large language models, retrieval-augmented generation, and production AI. We combine this with strong full-stack engineering, product design, and DevOps practices to deliver complete, production-ready solutions.",
  },
  {
    id: "general-3",
    category: "General",
    question: "Where is NirmataAI based?",
    answer:
      "Our headquarters are in San Francisco, CA, but we operate as a remote-first company with team members across multiple time zones. We serve clients worldwide.",
  },
  {
    id: "process-1",
    category: "Process",
    question: "How do you start a new project?",
    answer:
      "Every engagement begins with a free discovery call where we learn about your goals, technical requirements, timeline, and budget. If there is mutual fit, we move to a scoping phase that produces a detailed proposal, timeline, and cost estimate before any development begins.",
  },
  {
    id: "process-2",
    category: "Process",
    question: "What is the typical project timeline?",
    answer:
      "Timelines vary by scope. A typical web application takes 8–16 weeks from kickoff to launch. AI features and complex platform builds may take longer. We provide a detailed timeline during the scoping phase and update it transparently throughout development.",
  },
  {
    id: "process-3",
    category: "Process",
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes. Many of our clients retain us for ongoing feature development, maintenance, and AI model monitoring after launch. We offer flexible retainer arrangements tailored to your needs.",
  },
  {
    id: "pricing-1",
    category: "Pricing",
    question: "How does pricing work?",
    answer:
      "We primarily work on fixed-price or time-and-materials basis depending on the project. Every engagement starts with a clearly defined scope, timeline, and budget. We believe in radical transparency — there are no hidden fees or surprise billing.",
  },
  {
    id: "pricing-2",
    category: "Pricing",
    question: "Do you offer free consultations?",
    answer:
      "Absolutely. The initial 30-minute discovery call is always free and comes with no obligation. We use this time to understand your project and determine if we are the right partner for you.",
  },
  {
    id: "technical-1",
    category: "Technical",
    question: "What technology stack do you use?",
    answer:
      "We default to modern, proven technologies: Next.js, React, TypeScript, Node.js, PostgreSQL, and Tailwind CSS for web applications. For AI projects we use OpenAI, Anthropic, LangChain, and vector databases. We also work with React Native for mobile, AWS/Vercel for cloud, and Figma for design.",
  },
  {
    id: "technical-2",
    category: "Technical",
    question: "Can you work with our existing codebase?",
    answer:
      "Yes. We routinely audit, refactor, and extend existing codebases built with Next.js, React, Node.js, and other modern frameworks. We also provide documentation and knowledge transfer as part of every engagement.",
  },
  {
    id: "ai-1",
    category: "AI Solutions",
    question: "Do you build AI features from scratch or use existing APIs?",
    answer:
      "We take a pragmatic approach. For most projects, we build on top of existing LLM APIs (OpenAI, Anthropic, etc.) with custom prompt engineering, RAG pipelines, and evaluation systems. For specialized needs, we can fine-tune models or deploy open-source models on your infrastructure.",
  },
  {
    id: "ai-2",
    category: "AI Solutions",
    question: "How do you handle data privacy for AI features?",
    answer:
      "Data privacy is a first-class concern. We design architectures that keep your data within your control — whether that is your VPC, on-premise deployment, or a dedicated vector database instance. We can also work with on-premise or air-gapped deployments for regulated industries.",
  },
];
