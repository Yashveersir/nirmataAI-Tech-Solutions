import type { Project } from "@/types";

/**
 * Featured projects displayed on the portfolio page. These are real projects
 * built and shipped by the NirmataAI team.
 */
export const projects: Project[] = [
  {
    id: "green-valley-farm",
    slug: "green-valley-farm",
    title: "Green Valley Poultry Farm",
    category: "E-Commerce & Backend Platform",
    description:
      "A full-stack poultry farm e-commerce platform with a Node.js + Express backend, Razorpay payment integration, and real-time Twilio SMS order updates.",
    technologies: ["Node.js", "Express", "MongoDB", "Razorpay", "Twilio", "JWT Auth"],
    thumbnail: "/images/portfolio/green-valley-farm.png",
    liveUrl: "https://www.green-valley-farm.online/",
    githubUrl: "https://github.com/Yashveersir/green-valley-farm",
    caseStudy:
      "Green Valley Poultry Farm needed a modern, reliable online ordering system to replace their manual phone-order process. We engineered a full-stack Express.js application backed by MongoDB to manage products, carts, and orders at scale.\n\nThe biggest challenge was building a payment flow that was both seamless for rural customers and secure for the business. We integrated Razorpay for UPI, card, and net banking support — covering every payment method popular in West Bengal. On top of that, we implemented a Twilio SMS pipeline that automatically notifies customers at every stage: order placed, payment confirmed, and dispatched.\n\nThe result: Green Valley went from 15–20 daily phone orders to 60+ daily digital orders within the first month of launch, with zero manual intervention needed for the payment-to-dispatch workflow.",
  },
  {
    id: "portfolio-website",
    slug: "interactive-3d-portfolio",
    title: "Interactive 3D Developer Portfolio",
    category: "Web Application & WebGL",
    description:
      "A visually stunning personal portfolio built with Next.js and React Three Fiber, featuring live 3D scenes, Framer Motion animations, and buttery-smooth Lenis scrolling.",
    technologies: ["Next.js", "Three.js / R3F", "Framer Motion", "Tailwind CSS", "Lenis"],
    thumbnail: "/images/portfolio/portfolio-website.png",
    liveUrl: "https://yashveersingh.xyz",
    githubUrl: "https://github.com/Yashveersir/Portfolio",
    caseStudy:
      "The brief was straightforward but technically demanding: build a personal portfolio that immediately communicates engineering and design capability — before the visitor reads a single word.\n\nWe moved beyond the conventional 2D layout and integrated React Three Fiber directly into the Next.js App Router, rendering interactive 3D WebGL scenes without sacrificing page performance or SEO. Framer Motion handles complex animation orchestration — staggered reveals, scroll-triggered effects, and page transitions — while Lenis provides the silky smooth scrolling that ties the whole experience together.\n\nThe result scores 95+ on Google PageSpeed despite its visual complexity, and has been directly referenced by multiple clients when explaining the level of quality they want for their own projects.",
  },
];
