import type { BlogPost } from "@/types";

/**
 * Blog posts with full content for the NirmataAI blog.
 */
export const blogPosts: BlogPost[] = [
  {
    id: "ai-engineering-2026",
    slug: "future-of-ai-engineering-2026",
    title: "The Future of AI Engineering: Moving Beyond the Hype",
    excerpt:
      "As Generative AI matures, the focus is shifting from prompt engineering to rigorous systems architecture and evaluation.",
    content: `## The Hype Cycle Is Over. The Work Begins.

Two years ago, every tech conversation started with "we should add ChatGPT to this." Today, the businesses that actually stuck with AI are having a very different conversation: how do we make this thing *reliable*?

That shift — from excitement to engineering — is what separates companies that will win with AI from those that are still demoing it.

## What Changed in 2025

The explosion of Generative AI in 2023-24 created a gold rush mentality. Every startup sprinted to wrap GPT-4 in a thin interface and call it a product. What happened next was predictable: hallucinations in production, unpredictable latency, and users who lost trust after one bad answer.

The companies that survived and thrived did something different. They treated AI not as a magic box but as an engineering component — one that requires the same discipline as any other piece of critical infrastructure.

## The Rise of Evaluation-Driven Development

The most important shift we've seen in 2025 is the rise of **evals** — structured test suites that measure AI output quality the same way unit tests measure code correctness.

At NirmataAI, before we deploy any AI feature, we define:
- **Golden datasets**: curated input-output pairs that represent ideal behavior
- **Automated scorers**: LLM-as-judge or rule-based systems that grade outputs
- **Regression thresholds**: numeric targets that must hold across model updates

This isn't sexy work. But it's what separates a demo from a product.

## RAG Is Maturing — But Most Implementations Are Still Bad

Retrieval-Augmented Generation (RAG) is now the standard architecture for grounding LLMs in proprietary data. But in 2024, "RAG" often meant "chunk documents and do cosine similarity." That naive approach is failing in production.

The systems we're building today use:
- **Hybrid retrieval** (dense + sparse, BM25 + embeddings)
- **Query rewriting** to handle ambiguous user intent
- **Re-rankers** to push the most relevant chunks to the top
- **Chunk-level citation** so users can verify answers

The difference in output quality between a naive RAG and a well-tuned one is dramatic. Don't ship the naive version.

## The India Opportunity

India is uniquely positioned to lead in applied AI engineering. We have world-class ML talent, cost-competitive engineering teams, and a huge domestic market hungry for AI-powered business tools.

The gap we see most often: Indian businesses know AI is important but don't know how to evaluate a real solution versus a demo. Our job — as engineers and as an industry — is to raise that bar.

## What to Build Next

If you're planning your AI roadmap for 2026, focus on:
1. **Internal tools first** — AI copilots for your own team before external-facing products
2. **Domain-specific fine-tuning** — generic models are a commodity; tuned models are a moat
3. **Human-in-the-loop workflows** — the best AI products keep humans in control of high-stakes decisions

The hype is over. The engineering era of AI has begun. And that's actually great news for teams who know how to build.`,
    category: "AI Engineering",
    tags: ["Generative AI", "Architecture", "RAG", "LLM"],
    featuredImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&h=400&auto=format&fit=crop",
    publishedAt: "2026-05-12",
    author: {
      name: "nirmataAI team",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=120&h=120&auto=format&fit=crop",
    },
  },
  {
    id: "modern-web-architecture",
    slug: "architecting-for-scale-nextjs",
    title: "Architecting for Scale: Why We Bet on Next.js",
    excerpt:
      "An in-depth look at how server components and edge computing are transforming the way we build high-performance web applications.",
    content: `## Why We're All-In on Next.js for Production Web Apps

When a client asks us what framework to use for their new web platform, the answer has been Next.js for the past two years without hesitation. Here's the full reasoning — including the tradeoffs we've wrestled with.

## The Problem with Traditional SPAs

React SPAs were revolutionary in 2016. By 2023, they had a well-documented set of production problems:

- **Slow Time to First Contentful Paint (FCP)**: JavaScript bundle ships to browser, executes, fetches data, renders. Three round trips before the user sees anything.
- **SEO dependence on crawlers**: Most bots still struggle with client-rendered content.
- **Bundle bloat**: Every npm install ships to every user.
- **Waterfall data fetching**: Child components can't fetch until parent renders.

Next.js App Router — specifically the RSC (React Server Components) model — solves all four.

## Server Components: The Architecture Shift

With RSCs, components that don't need interactivity run entirely on the server. They:
- Have zero JavaScript bundle footprint on the client
- Can directly query databases, call APIs, read files
- Stream HTML to the browser progressively

The mental model shift is significant. You're no longer thinking "fetch data in useEffect and render it." You're thinking "this component runs on the server and returns HTML."

For a typical marketing page with heavy data requirements (portfolio items, blog posts, service details), we've seen FCP drop by 40-60% after migrating from a SPA architecture to RSC-first Next.js.

## Edge Runtime: Getting Closer to the User

Vercel's edge network runs Next.js middleware and edge API routes in data centers around the world — milliseconds from the user instead of seconds.

For the NirmataAI site itself, static pages are pre-rendered at build time and served from CDN edge nodes. Dynamic routes (like the contact form API) run on edge functions. The result: sub-100ms response times globally.

## When NOT to Use Next.js

In the spirit of honesty: Next.js is not always the right tool.

- **Highly interactive apps** (e.g., Figma, complex dashboards): The server-first mental model fights against the grain of apps that are 90% client state. React without RSC, or a framework like SvelteKit, may be better.
- **Small sites with no dynamic data**: A static site generator (Astro, Hugo) will be simpler and cheaper.
- **Mobile apps**: Obviously. Use React Native, Flutter, or native.

## Our Stack Recommendation for 2026

For product companies and agencies building modern web platforms:

| Layer | Our Choice | Why |
|-------|-----------|-----|
| Framework | Next.js 15 | RSC, App Router, edge support |
| Styling | Tailwind CSS v4 | CSS-first config, no config files |
| Database | Postgres (via Supabase or Neon) | Reliability, familiarity, SQL |
| Auth | Supabase Auth | Managed, integrates with DB |
| Deployment | Vercel | Zero-config, edge, analytics |
| State | Zustand + React Query | Simple global state + server sync |

This stack is predictable, well-documented, and fast to hire for. Those properties matter more than any individual technical advantage.

## The Takeaway

The next generation of web apps will be built server-first by default. Client JavaScript will be the exception, not the rule. Next.js is currently the best implementation of that vision in production.

If you're starting a new web project in 2026 and you're not starting with this conversation, you're leaving performance and developer experience on the table.`,
    category: "Web Development",
    tags: ["Next.js", "Performance", "React", "Architecture"],
    featuredImage:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600&h=400&auto=format&fit=crop",
    publishedAt: "2026-06-28",
    author: {
      name: "nirmataAI team",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=120&h=120&auto=format&fit=crop",
    },
  },
  {
    id: "building-secure-backends",
    slug: "building-secure-backends",
    title: "Securing Modern APIs: Best Practices for 2026",
    excerpt:
      "Security isn't a feature; it's a foundation. Learn the essential strategies for protecting your backend infrastructure against emerging threats.",
    content: `## Security Is Not a Sprint Task

Every project we've ever worked on has a security section somewhere in the Jira backlog. It's usually in the last sprint, labeled "Security Hardening", with the implicit understanding that it may not get done if the deadline is tight.

This is backwards. And in 2026, with AI-generated attack vectors and automated exploit tooling, the cost of shipping insecure APIs has never been higher.

This post covers the security practices we bake into every backend we ship — not as afterthoughts, but as defaults.

## Layer 1: Authentication — Stop Using JWTs Wrong

JSON Web Tokens are everywhere. They're also frequently misconfigured.

**Common mistakes:**
- Signing tokens with a weak or hardcoded secret (SECRET_KEY=mysecret)
- Not validating the aud (audience) claim — allows token reuse across services
- Storing tokens in localStorage — vulnerable to XSS attacks
- Setting expiry times too long (24+ hours on access tokens)

**What we do instead:**
- RS256 (asymmetric) signing for tokens shared between services
- Short-lived access tokens (15–30 minutes) + refresh token rotation
- HttpOnly, SameSite cookies for browser clients — XSS can't touch them
- Token revocation list in Redis for immediate invalidation when needed

## Layer 2: Authorization — Never Trust the Client

Authentication answers "who are you?" Authorization answers "what are you allowed to do?"

The rule is simple: **never make authorization decisions based on data the client sends**. Always derive permissions from the authenticated user's identity on the server.

Bad pattern:
\`\`\`js
// ❌ Never do this
const { userId, role } = req.body; // client-sent
if (role === 'admin') allowDelete();
\`\`\`

Good pattern:
\`\`\`js
// ✅ Always do this
const { userId } = req.auth; // server-verified JWT payload
const user = await db.users.findById(userId);
if (user.role === 'admin') allowDelete();
\`\`\`

This distinction catches an entire class of privilege escalation attacks.

## Layer 3: Input Validation — Treat All Input as Hostile

Every piece of data entering your API — headers, query params, body, cookies — should be validated against a strict schema before it touches your business logic.

We use **Zod** in TypeScript projects for runtime validation that's also type-safe:

\`\`\`ts
const createOrderSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().min(1).max(100),
  addressId: z.string().uuid(),
});

const body = createOrderSchema.parse(req.body); // throws if invalid
\`\`\`

This single pattern prevents SQL injection via malformed input, business logic abuse via out-of-range values, and crashes from unexpected data shapes.

## Layer 4: Rate Limiting and Abuse Prevention

Without rate limiting, your API is vulnerable to:
- Credential stuffing (automated login attempts with breached passwords)
- Enumeration attacks (discovering valid user emails via timing differences)
- Cost amplification (an attacker triggering expensive AI calls at your expense)

We implement three tiers:
1. **IP-based rate limits** at the edge (Vercel, Cloudflare) — 100 req/min for anonymous
2. **User-based rate limits** in middleware — prevents authenticated abuse
3. **Endpoint-specific limits** — tighter limits on expensive operations (file upload, AI inference, email sending)

## Layer 5: Secrets Management

Never commit secrets to Git. This sounds obvious. It still happens to experienced teams.

Our workflow:
- **Local development**: .env.local (gitignored) + 1Password CLI for team sharing
- **Production**: Environment variables injected at deploy time by Vercel/AWS
- **CI/CD**: GitHub Actions secrets — never printed in logs
- **Rotation**: Quarterly rotation schedule with automated reminders

One tool we strongly recommend: **GitGuardian** for automatic scanning of your commits for accidentally committed secrets. It catches what developers miss.

## Building a Security Culture

Technical controls matter, but they don't help if the team doesn't have a security mindset.

Practices that stick:
- **Security review checklist** as part of every PR template
- **Monthly threat model sessions** — 30 minutes of "what could an attacker do with this?"
- **Post-incident blameless reviews** — learning focus, not punishment

Security is a team sport. The goal isn't to build a perfect fortress on day one. It's to systematically reduce your attack surface over time, faster than attackers can find new holes.

Start with the five layers above. They'll block 90% of attacks in the wild.`,
    category: "Cloud & DevOps",
    tags: ["Security", "Node.js", "Cloud", "APIs", "Authentication"],
    featuredImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&h=400&auto=format&fit=crop",
    publishedAt: "2026-07-05",
    author: {
      name: "nirmataAI team",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=120&h=120&auto=format&fit=crop",
    },
  },
];
