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
      "Green Valley Poultry Farm needed a modern, reliable online ordering system to replace their manual phone-order process. Our engineering team at NirmataAI designed a scalable full-stack application backed by MongoDB to manage products, carts, and high-volume orders seamlessly.\n\nThe primary technical challenge was architecting a payment flow that was frictionless for rural customers while remaining highly secure for the business. We integrated Razorpay to process UPI, card, and net banking transactions. Furthermore, we deployed a Twilio-powered SMS pipeline that autonomously notifies customers at every critical stage: order placed, payment confirmed, and dispatched.\n\nThe business impact was immediate: Green Valley scaled from 15–20 daily phone orders to 60+ daily digital orders within the first month of launch, completely automating their payment-to-dispatch workflow and eliminating manual bottlenecks.",
  },
  {
    id: "interactive-3d-experience",
    slug: "interactive-3d-experience",
    title: "Interactive 3D Web Experience",
    category: "Web Application & WebGL",
    description:
      "A visually stunning, high-performance web platform built with Next.js and React Three Fiber, featuring live 3D scenes, Framer Motion animations, and buttery-smooth Lenis scrolling.",
    technologies: ["Next.js", "Three.js / R3F", "Framer Motion", "Tailwind CSS", "Lenis"],
    thumbnail: "/images/portfolio/interactive-3d.png",
    liveUrl: "https://yashveersingh.xyz",
    githubUrl: "https://github.com/Yashveersir/Portfolio",
    caseStudy:
      "The client's brief was straightforward but technically demanding: build a digital presence that immediately communicates engineering excellence and premium design capability — before the visitor reads a single word.\n\nOur team at NirmataAI moved beyond conventional 2D layouts and integrated React Three Fiber directly into the Next.js App Router, rendering interactive 3D WebGL scenes without sacrificing page performance or SEO. Framer Motion handles complex animation orchestration — staggered reveals, scroll-triggered effects, and page transitions — while Lenis provides the silky smooth scrolling that ties the whole immersive experience together.\n\nThe resulting platform scores 95+ on Google PageSpeed despite its visual complexity, serving as a flagship benchmark for high-end, interactive digital experiences.",
  },
  {
    id: "taskflow",
    slug: "taskflow-multi-team",
    title: "TaskFlow — Real-Time Multi-Team Task Management",
    category: "Real-Time Web Application",
    description:
      "A production-ready, real-time collaborative task management system featuring Multi-Team Workspace Support.",
    technologies: ["React 18", "Node.js", "Express", "MongoDB", "Socket.io", "Recharts", "Vite"],
    thumbnail: "/images/portfolio/taskflow.png",
    liveUrl: "https://task-manager-theta-ten-91.vercel.app/",
    caseStudy:
      "A corporate client required a robust, highly scalable internal tool to manage overlapping engineering teams without compromising data security. In response, our team at NirmataAI architected TaskFlow: a production-ready, real-time collaborative task management system featuring seamless Multi-Team Workspace Support.\n\nTaskFlow allows users to belong to multiple workspaces simultaneously, switching between team contexts instantly via the sidebar. We engineered a high-performance Socket.io architecture ensuring all task changes sync instantly across all team members globally. The platform includes live presence tracking and real-time toast notifications for mission-critical updates.\n\nSecurity and tenant isolation were paramount. We implemented a secure JWT authentication flow and strict multi-tenant data segregation at the database level, ensuring users only access data authorized for their active workspace. Wrapped in a premium glassmorphism-based dark theme, the dashboard provides a high-level overview with distribution charts, delivering enterprise-grade performance with an intuitive, modern UX.",
  },
  {
    id: "backend-ledger",
    slug: "backend-ledger-api",
    title: "Enterprise Backend Ledger API",
    category: "Financial Infrastructure & API",
    description:
      "A highly secure, scalable ledger management REST API handling robust user authentication, account management, and atomic transaction processing.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "Bcrypt", "Nodemailer"],
    thumbnail: "/images/portfolio/backend-ledger.png",
    liveUrl: "https://backend-ledger-8to4.onrender.com",
    githubUrl: "https://github.com/Yashveersir/Backend-Ledger",
    caseStudy:
      "A financial technology client approached us to build the core infrastructure for their ledger and digital wallet system. They required an uncompromisingly secure backend capable of handling sensitive account data and atomic fund transfers at scale.\n\nOur engineering team at NirmataAI architected a robust RESTful API using Node.js and Express, backed by MongoDB. We implemented strict ledger validation logic to guarantee that transactions are processed atomically and balances are always mathematically sound. Security was woven into every layer, featuring robust JWT-based authentication, bcrypt password hashing, and middleware-enforced authorization across all sensitive endpoints.\n\nTo ensure a seamless user journey, we integrated Nodemailer with Gmail OAuth2 for automated transactional emails, instantly notifying users of registrations and secure fund transfers. The resulting system serves as a scalable, high-performance financial backbone that is fully compliant with standard REST conventions and rigorously tested for enterprise deployment.",
  },
  {
    id: "ai-presentation-evaluator",
    slug: "ai-presentation-evaluator",
    title: "AI Presentation Evaluator",
    category: "Generative AI & Computer Vision",
    description:
      "An AI-powered presentation analysis platform that evaluates confidence, speech clarity, eye contact, and facial expressions to provide personalized coaching feedback.",
    technologies: ["React 18", "Firebase", "Whisper API", "MediaPipe", "Claude Sonnet", "FFmpeg"],
    thumbnail: "/images/portfolio/ai-presentation-evaluator.png",
    liveUrl: "https://presentai-eval-yash2026.web.app",
    caseStudy:
      "A corporate training client needed an automated, scalable way to evaluate and coach employees on their public speaking skills. Our AI engineering team at NirmataAI built a comprehensive video analysis pipeline that processes raw video uploads to extract multi-modal performance metrics.\n\nWe orchestrated a complex serverless pipeline utilizing FFmpeg for audio/frame extraction, OpenAI's Whisper API for precise speech-to-text and filler word detection, and MediaPipe for advanced computer vision tasks like facial landmark detection and eye contact tracking. By aggregating these distinct data streams (confidence, clarity, engagement, and gaze direction), our proprietary scoring engine calculates a weighted composite score.\n\nFinally, we integrated Anthropic's Claude Sonnet to synthesize the raw metric data into actionable, highly personalized coaching feedback. The resulting platform delivers enterprise-grade, unbiased presentation coaching automatically, revolutionizing how the client handles professional development.",
  },
  {
    id: "karyadesk",
    slug: "karyadesk-platform",
    title: "KaryaDesk Management Platform",
    category: "Enterprise SaaS Platform",
    description:
      "A comprehensive full-stack project management platform offering real-time collaboration, strict role-based access control, and advanced security architectures.",
    technologies: ["React 18", "Node.js", "Express", "MongoDB", "Zustand", "TanStack Query", "Tailwind CSS"],
    thumbnail: "/images/portfolio/karyadesk.png",
    liveUrl: "https://www.karyadesk.xyz/",
    caseStudy:
      "A rapidly scaling enterprise required a bespoke project management platform that could securely handle complex team hierarchies and real-time collaboration without compromising data integrity. In response, our engineering team at NirmataAI developed KaryaDesk, a full-stack enterprise SaaS solution.\n\nWe architected a robust Node.js and Express backend integrated with MongoDB, implementing highly secure authentication mechanisms including JWT rotation, HTTP-only cookies, and a sophisticated double submit cookie pattern for CSRF protection on all state-changing endpoints. The system supports dynamic role-based access control (Owner, Project Admin, Member, Viewer) ensuring strict data segregation and operational security.\n\nOn the frontend, we built a highly responsive React 18 SPA utilizing Vite, Zustand for global state, and TanStack Query for seamless server-state synchronization and caching. Integrated with Cloudinary for asset management and Nodemailer for automated communications, KaryaDesk delivers a seamless, high-performance workspace that empowers teams to track progress, manage subtasks, and collaborate securely in real-time.",
  },
];
