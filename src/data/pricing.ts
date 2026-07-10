export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small projects, MVPs, and landing pages.",
    price: "$5,000",
    priceNote: "Starting at",
    features: [
      "Up to 5 pages / screens",
      "Responsive design",
      "Basic SEO setup",
      "1 revision round",
      "2 weeks delivery",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    description: "Ideal for full web applications and custom platforms.",
    price: "$15,000",
    priceNote: "Starting at",
    features: [
      "Up to 20 pages / screens",
      "Custom UI/UX design",
      "Full SEO optimization",
      "API integration",
      "Admin dashboard",
      "3 revision rounds",
      "6-8 weeks delivery",
      "Priority email & chat support",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Get Started",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large-scale platforms, AI features, and complex systems.",
    price: "Custom",
    priceNote: "Tailored to your needs",
    features: [
      "Unlimited pages / screens",
      "AI feature integration",
      "Custom software architecture",
      "Cloud infrastructure setup",
      "CI/CD pipeline",
      "Dedicated project manager",
      "Unlimited revisions",
      "Ongoing maintenance",
      "Priority phone & chat support",
    ],
    cta: "Contact Us",
  },
];

export const addOnServices = [
  {
    name: "AI Feature Integration",
    price: "From $5,000",
    description: "Add chatbots, RAG pipelines, or generative AI features to your project.",
  },
  {
    name: "Cloud Infrastructure Setup",
    price: "From $3,000",
    description: "AWS, Vercel, or GCP setup with CI/CD, monitoring, and auto-scaling.",
  },
  {
    name: "Ongoing Maintenance",
    price: "$1,000/mo",
    description: "Monthly maintenance, security updates, performance monitoring, and support.",
  },
  {
    name: "SEO & Performance Audit",
    price: "From $2,000",
    description: "Comprehensive audit with actionable recommendations and implementation support.",
  },
];
