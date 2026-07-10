import type { Testimonial } from "@/types";

/**
 * Customer testimonials surfaced on the home page. Quotes are attributed to
 * named individuals with their role and company for authenticity.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "NirmataAI rebuilt our dashboard in eight weeks. Our advisors finally have a tool they actually enjoy using, and we shipped an AI summary feature that genuinely moves the needle.",
    author: "Priya Raman",
    role: "Head of Product",
    company: "Helio Finance",
  },
  {
    id: "t2",
    quote:
      "The team is rare — they push back when it matters and ship when it counts. Our support copilot went from prototype to production in under a quarter.",
    author: "Daniel Okafor",
    role: "VP Engineering",
    company: "Neuron Labs",
  },
  {
    id: "t3",
    quote:
      "Working with NirmataAI felt like having a senior platform team on call. They left us with documentation we actually use, not shelf-ware.",
    author: "Sofía Mendoza",
    role: "Chief Operating Officer",
    company: "Atlas Logistics",
  },
];
