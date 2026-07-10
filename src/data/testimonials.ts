import type { Testimonial } from "@/types";

/**
 * Customer testimonials surfaced on the home page. Quotes are attributed to
 * named individuals with their role and company for authenticity.
 */
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "NirmataAI transformed how we manage our internal operations. Their custom AI solution cut our manual data entry by 80%, allowing our team to focus on strategic growth. The engineering quality and transparency were exceptional.",
    author: "Sarah Jenkins",
    role: "Chief Operations Officer",
    company: "Lumina Logistics",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&h=120&auto=format&fit=crop",
  },
  {
    id: "testimonial-2",
    quote: "We needed a robust backend and a seamless mobile experience. They delivered beyond our expectations, building a highly scalable platform that easily handled our surge in traffic during peak season. Truly a world-class team.",
    author: "Marcus Thorne",
    role: "Founder & CEO",
    company: "Elevate Retail",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&h=120&auto=format&fit=crop",
  },
  {
    id: "testimonial-3",
    quote: "Partnering with NirmataAI was the best technical decision we made. They didn't just build software; they provided strategic guidance on cloud architecture and AI integration that positioned us years ahead of our competitors.",
    author: "Elena Rodriguez",
    role: "CTO",
    company: "FinTech Forward",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&h=120&auto=format&fit=crop",
  }
];
