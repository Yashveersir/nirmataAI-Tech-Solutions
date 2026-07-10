import type { Service } from "@/types";

/**
 * Services promoted across the marketing site. The full catalogue lives here
 * so multiple sections (home grid, services page, footer, etc.) can share a
 * single source of truth.
 */
export const services: Service[] = [
  {
    id: "custom-websites",
    slug: "custom-websites",
    title: "Custom Web Applications",
    shortDescription: "High-performance, scalable web platforms built for your specific business needs.",
    description: "We build modern, responsive, and secure web applications tailored to your business logic. From internal tools to customer-facing portals, our web solutions are designed for scale and exceptional user experience.",
    features: ["Responsive UI/UX Design", "Progressive Web Apps (PWA)", "API Integration & Development", "High-Performance Architecture"],
    technologies: ["React / Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    benefits: ["Increased Conversion Rates", "Seamless Cross-Device Experience", "Scalable for Future Growth", "Optimized for Search Engines (SEO)"],
    faq: [
      { question: "How long does it take to build a custom website?", answer: "A typical web application takes between 4 to 12 weeks depending on the complexity and feature set." },
      { question: "Do you provide ongoing maintenance?", answer: "Yes, we offer ongoing support and maintenance contracts to ensure your application stays secure and up to date." }
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile experiences for iOS and Android.",
    description: "Engage your users on the go with custom mobile applications. We develop intuitive, fast, and reliable apps that integrate seamlessly with your existing infrastructure, ensuring a consistent brand experience across all devices.",
    features: ["Cross-Platform Development", "Native Performance", "Offline Capabilities", "Push Notifications & Real-Time Sync"],
    technologies: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"],
    benefits: ["Broader Market Reach", "Higher User Engagement", "Direct Marketing Channel", "Brand Loyalty & Recognition"],
    faq: [
      { question: "Do you build for both iOS and Android?", answer: "Yes, we use cross-platform frameworks to deliver high-quality apps for both platforms efficiently." },
      { question: "Can the app connect to my existing website's database?", answer: "Absolutely. We build custom APIs that allow your mobile app and website to share the same secure database." }
    ],
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI & Automation Solutions",
    shortDescription: "Intelligent systems that automate workflows and unlock new business insights.",
    description: "Leverage the power of Artificial Intelligence to solve complex problems. We build and integrate custom AI models, chatbots, and predictive analytics tools that streamline your operations and give you a competitive edge.",
    features: ["Generative AI Integration", "Predictive Analytics", "Process Automation", "Custom LLM Development"],
    technologies: ["OpenAI API", "Python", "TensorFlow / PyTorch", "Vector Databases"],
    benefits: ["Reduced Operational Costs", "Data-Driven Decision Making", "24/7 Automated Customer Support", "Increased Productivity"],
    faq: [
      { question: "Do I need a lot of data to use AI?", answer: "While having data helps, we can also integrate pre-trained Generative AI models that require minimal proprietary data to get started." },
      { question: "Is my data secure?", answer: "Yes, we follow strict data privacy protocols and can deploy AI solutions within your private cloud infrastructure." }
    ],
  },
  {
    id: "custom-software",
    slug: "enterprise-software",
    title: "Enterprise Custom Software",
    shortDescription: "Bespoke software solutions engineered to solve your unique operational challenges.",
    description: "When off-the-shelf software doesn't cut it, we build bespoke enterprise solutions. From custom ERPs to complex logistics systems, we engineer software that fits your exact workflow, eliminating inefficiencies.",
    features: ["Workflow Automation", "Legacy System Migration", "Custom Dashboarding", "Secure Cloud Architecture"],
    technologies: ["AWS / Google Cloud", "Docker & Kubernetes", "Go / Rust", "GraphQL"],
    benefits: ["Complete Ownership of IP", "No Recurring License Fees", "Perfect Fit for Your Processes", "Enhanced Security & Compliance"],
    faq: [
      { question: "Can you migrate our legacy systems?", answer: "Yes, we specialize in modernizing legacy applications safely without disrupting your day-to-day operations." }
    ],
  },
  {
    id: "it-support",
    slug: "it-support-maintenance",
    title: "IT Support & Maintenance",
    shortDescription: "Reliable, round-the-clock technical support and proactive system maintenance for your business.",
    description: "Keep your technology stack healthy, secure, and running at peak performance. Our IT support team handles everything from bug fixes and security patches to infrastructure monitoring and troubleshooting — so you can focus on your core business.",
    features: ["24/7 System Monitoring", "Security Patches & Updates", "Bug Fixes & Performance Tuning", "Helpdesk & Incident Response"],
    technologies: ["Linux / Windows Server", "cPanel / WHM", "Cloudflare", "Monitoring Tools (Grafana, Uptime Kuma)"],
    benefits: ["Minimized Downtime", "Proactive Issue Resolution", "Peace of Mind", "Dedicated Technical Team"],
    faq: [
      { question: "What is included in IT maintenance?", answer: "Our plans cover regular security updates, backups, performance monitoring, uptime tracking, and on-demand support for incidents." },
      { question: "Do you offer SLA-backed support?", answer: "Yes, we offer tiered SLA packages with defined response times to match your business criticality." }
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Data-driven marketing strategies that attract, engage, and convert your ideal customers online.",
    description: "Grow your brand's digital presence with targeted, measurable marketing campaigns. From search engine optimization (SEO) and Google Ads to social media and email marketing, we craft strategies that deliver real return on investment.",
    features: ["Search Engine Optimization (SEO)", "Google Ads & PPC Campaigns", "Social Media Management", "Email Marketing Automation"],
    technologies: ["Google Analytics 4", "Google Ads", "Meta Ads", "Mailchimp / Brevo"],
    benefits: ["Higher Organic Traffic", "Lower Customer Acquisition Cost", "Improved Brand Awareness", "Measurable ROI"],
    faq: [
      { question: "How long before I see SEO results?", answer: "SEO is a long-term strategy — most clients see measurable improvement in 3 to 6 months, with compounding results over time." },
      { question: "Do you run paid ads?", answer: "Yes, we manage Google Ads, Meta (Facebook/Instagram) Ads, and other PPC campaigns with full reporting and optimization." }
    ],
  },
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription: "Scalable cloud infrastructure design, migration, and management on AWS, GCP, and Azure.",
    description: "Move to the cloud or optimize your existing infrastructure with confidence. We design fault-tolerant, cost-efficient architectures, manage migrations with zero downtime, and provide ongoing cloud operations support.",
    features: ["Cloud Architecture Design", "Migration & Deployment", "Auto-Scaling & Load Balancing", "Cost Optimization"],
    technologies: ["AWS", "Google Cloud Platform", "Docker & Kubernetes", "Terraform / CI/CD"],
    benefits: ["Reduced Infrastructure Costs", "High Availability & Reliability", "Global Scalability", "Automated Deployments"],
    faq: [
      { question: "Can you migrate my on-premise server to the cloud?", answer: "Yes, we handle end-to-end cloud migrations including data transfer, app refactoring, DNS cutover, and post-migration support." },
      { question: "Which cloud provider do you recommend?", answer: "It depends on your use case and budget. We work with AWS, GCP, and Azure and will recommend the best fit after understanding your requirements." }
    ],
  },
];
