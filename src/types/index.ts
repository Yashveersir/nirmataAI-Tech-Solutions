export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon?: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    whatsapp?: string;
    address: string;
  };
  socials: SocialLink[];
  nav: NavLink[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  technologies: string[];
  benefits: string[];
  faq: { question: string; answer: string }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  screenshots?: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage: string;
  publishedAt: string;
  author: {
    name: string;
    avatar?: string;
  };
}

export interface JobOpening {
  id: string;
  title: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract";
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ChatbotRule {
  keywords: string[];
  response: string;
  action?: "link" | "lead";
  actionValue?: string;
}
