# Phase 1 Public Marketing Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and test a static-first public marketing website for NirmataAI Tech Solution using Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.

**Architecture:** Next.js 15 App Router at the repository root (not a monorepo package). Content is stored in typed TypeScript data modules under `src/data/`. Shared UI primitives live in `src/components/ui/`. Page sections are composed in `src/components/<page>/`. Forms use Next.js Server Actions validated by Zod. SEO is handled via `generateMetadata`, `sitemap.ts`, `robots.ts`, and JSON-LD components.

**Tech Stack:** Next.js 15, React 19, TypeScript 5, Tailwind CSS 4, shadcn/ui, Framer Motion, Zod, Lucide React, Vitest, Playwright, ESLint, Prettier.

---

## Setup (before Chunk 1)

Create an isolated feature branch. Do not commit directly to `main`.

```bash
git checkout -b feat/phase1-public-site
```

---

## File Structure

```
/
├── .kimchi/docs/specs/phase1-design.md
├── .kimchi/docs/plans/phase1-plan.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── components.json
├── playwright.config.ts
├── vitest.config.ts
├── .env.example
├── public/
│   └── images/          # logos, team, portfolio, blog placeholders
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── sitemap.ts
    │   ├── robots.ts
    │   ├── globals.css
    │   ├── about/page.tsx
    │   ├── services/page.tsx
    │   ├── services/[slug]/page.tsx
    │   ├── ai-solutions/page.tsx
    │   ├── portfolio/page.tsx
    │   ├── portfolio/[slug]/page.tsx
    │   ├── blog/page.tsx
    │   ├── blog/[slug]/page.tsx
    │   ├── careers/page.tsx
    │   ├── contact/page.tsx
    │   └── appointment/page.tsx
    ├── components/
    │   ├── ui/            # shadcn primitives
    │   ├── layout/        # Header, Footer, MobileNav, Container, SectionHeader, Logo, SocialLinks
    │   ├── home/          # Hero, ServicesOverview, PortfolioHighlights, Testimonials, Stats, CTASection, ContactPreview, AnimatedSection
    │   ├── about/         # CompanyIntro, MissionVision, CoreValues, Team, Timeline
    │   ├── services/      # ServiceCard, ServiceDetail, AISolutionCard
    │   ├── portfolio/     # ProjectCard, ProjectDetail
    │   ├── blog/          # BlogCard, BlogPost, SearchInput
    │   ├── careers/       # JobCard, ApplyForm
    │   ├── contact/       # ContactForm, ContactChannels, MapPlaceholder
    │   ├── appointment/   # AppointmentForm
    │   └── chatbot/       # Chatbot, ChatMessage
    ├── data/
    │   ├── site.ts
    │   ├── home.ts
    │   ├── about.ts
    │   ├── services.ts
    │   ├── ai-solutions.ts
    │   ├── portfolio.ts
    │   ├── blog.ts
    │   ├── careers.ts
    │   └── chatbot.ts
    ├── lib/
    │   ├── utils.ts
    │   ├── schemas.ts
    │   ├── actions.ts
    │   └── metadata.ts
    ├── types/
    │   └── index.ts
    └── __tests__/
        ├── unit/
        │   ├── utils.test.ts
        │   └── schemas.test.ts
        └── e2e/
            └── smoke.spec.ts
```

---

## Chunk 1: Project Scaffold + Layout + SEO Foundation

**Complexity:** simple  
**Dependencies:** none  
**Parallel safe:** no (must finish first)

**Files to create:**
- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `postcss.config.mjs`
- `components.json`
- `.env.example`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/page.tsx` (minimal placeholder)
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/lib/utils.ts`
- `src/lib/metadata.ts`
- `src/components/JsonLd.tsx`
- `src/types/index.ts`
- `.prettierrc.json` (optional)
- `.eslintrc.json` (optional)

**Shared type contracts (`src/types/index.ts`):**

```ts
export interface NavLink { label: string; href: string; }
export interface SocialLink { platform: string; href: string; icon?: string; }
export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: { email: string; phone: string; whatsapp?: string; address: string; };
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
  author: { name: string; avatar?: string; };
}
export interface JobOpening {
  id: string;
  title: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
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
  action?: 'link' | 'lead';
  actionValue?: string;
}
```

**Behavior:**
- `package.json` includes scripts: `dev`, `build`, `start`, `lint`, `test` (runs vitest + playwright), `test:unit`, `test:e2e`.
- `next.config.ts` exports static-compatible config (`output: 'export'` is NOT used; keep server actions enabled). Set `images.unoptimized: true` only if `output: 'export'` is later needed; for now keep Next.js Image optimization.
- `src/app/layout.tsx` renders `<html lang="en">`, root metadata, skip-to-content link, and children.
- `src/lib/metadata.ts` exports a helper `createMetadata({ title, description, path, image? })` that returns Next.js `Metadata` with Open Graph and Twitter card defaults.
- `src/app/sitemap.ts` returns URLs for all top-level routes and dynamic slugs by reading data modules.
- `src/app/robots.ts` allows all, points sitemap to `/sitemap.xml`.
- `src/components/JsonLd.tsx` accepts a `type` ('Organization' | 'WebSite' | 'Service' | 'BlogPosting') and `data` object and renders a `<script type="application/ld+json">` tag.

**Acceptance criteria:**
- [ ] `npm install` completes without errors.
- [ ] `npm run build` succeeds.
- [ ] `npm run lint` passes.
- [ ] `/sitemap.xml` and `/robots.txt` are reachable in dev.
- [ ] Layout renders valid HTML5 document with `lang="en"`.

---

## Chunk 2: Shared UI Components + Navigation

**Complexity:** simple  
**Dependencies:** Chunk 1  
**Parallel safe:** no (needed by pages)

**Files to create:**
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/textarea.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/separator.tsx`
- `src/components/ui/sheet.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/ui/accordion.tsx`
- `src/components/ui/label.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/MobileNav.tsx`
- `src/components/layout/Container.tsx`
- `src/components/layout/SectionHeader.tsx`
- `src/components/layout/Logo.tsx`
- `src/components/layout/SocialLinks.tsx`
- `src/components/layout/AnimatedSection.tsx`
- `src/data/site.ts`

**Behavior:**
- shadcn/ui components are installed/created under `src/components/ui/` using the project’s design tokens (Tailwind variables). Do not install every shadcn component; only the ones listed.
- `Header` is sticky, includes `Logo`, desktop `nav`, `MobileNav` sheet trigger, and a CTA button.
- `Footer` includes nav links, social links, newsletter subscribe input (client-side only, no backend), and copyright. The newsletter input captures an email address and shows a local "Subscribed" success message; no data is sent to a server in Phase 1.
- `Container` applies consistent max-width and padding.
- `SectionHeader` accepts `title`, `subtitle?`, `centered?` props.
- `AnimatedSection` wraps children with a fade-up Framer Motion viewport animation. Respects `prefers-reduced-motion`.
- `site.ts` exports `siteInfo: SiteInfo` with realistic NirmataAI details.

**Acceptance criteria:**
- [ ] Header appears on all pages; mobile menu opens/closes.
- [ ] Footer appears on all pages and links are valid.
- [ ] `AnimatedSection` animates on scroll and is disabled when reduced motion is preferred.
- [ ] All shadcn components render without prop/type errors.

---

## Chunk 3: Home Page

**Complexity:** simple  
**Dependencies:** Chunk 1, Chunk 2  
**Parallel safe:** yes (after Chunk 2)

**Files to create:**
- `src/app/page.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/ServicesOverview.tsx`
- `src/components/home/PortfolioHighlights.tsx`
- `src/components/home/Testimonials.tsx`
- `src/components/home/Stats.tsx`
- `src/components/home/CTASection.tsx`
- `src/components/home/ContactPreview.tsx`
- `src/data/home.ts`

**Behavior:**
- `page.tsx` composes all home sections in order from FR-1.
- `Hero` displays headline, tagline, two CTAs ("Our Services", "Book Consultation"), and a hero image/illustration.
- `ServicesOverview` renders the first 6 services from `services.ts` as cards with links to `/services/[slug]`.
- `PortfolioHighlights` renders 3 featured projects from `portfolio.ts`.
- `Testimonials` renders a carousel or grid of testimonials.
- `Stats` displays 4 key numbers with icons.
- `CTASection` and `ContactPreview` link to `/contact` and `/appointment`.

**Acceptance criteria:**
- [ ] `/` renders all FR-1 sections.
- [ ] Each section has a unique `id` or `aria-label` for anchor/screen-reader navigation.
- [ ] All CTAs route correctly.
- [ ] Home page Lighthouse score 95+.

---

## Chunk 4: About Page

**Complexity:** simple  
**Dependencies:** Chunk 1, Chunk 2  
**Parallel safe:** yes (after Chunk 2)

**Files to create:**
- `src/app/about/page.tsx`
- `src/components/about/CompanyIntro.tsx`
- `src/components/about/MissionVision.tsx`
- `src/components/about/CoreValues.tsx`
- `src/components/about/Team.tsx`
- `src/components/about/Timeline.tsx`
- `src/data/about.ts`

**Behavior:**
- `page.tsx` generates metadata via `createMetadata` and composes the sections.
- `CompanyIntro` shows a paragraph and an image.
- `MissionVision` displays two cards.
- `CoreValues` displays a grid of values.
- `Team` displays team member cards with avatars.
- `Timeline` displays a vertical timeline of company milestones.

**Acceptance criteria:**
- [ ] `/about` renders all FR-2 sections.
- [ ] Team cards include alt text on images.
- [ ] Timeline is keyboard navigable.

---

## Chunk 5: Services Listing + Detail + AI Solutions

**Complexity:** simple  
**Dependencies:** Chunk 1, Chunk 2  
**Parallel safe:** yes (after Chunk 2)

**Files to create:**
- `src/app/services/page.tsx`
- `src/app/services/[slug]/page.tsx`
- `src/app/ai-solutions/page.tsx`
- `src/components/services/ServiceCard.tsx`
- `src/components/services/ServiceDetail.tsx`
- `src/components/services/AISolutionCard.tsx`
- `src/data/services.ts`
- `src/data/ai-solutions.ts`

**Behavior:**
- `/services` lists all services as cards linking to detail pages.
- `/services/[slug]` uses `generateStaticParams` and `generateMetadata`. It renders overview, features, technologies, benefits, FAQ accordion, and CTA.
- Service detail pages include a `<JsonLd type="Service" data={...} />` tag with `@context`, `@type`, `name`, `description`, and `provider` fields.
- `/ai-solutions` lists 8 AI capabilities from the SRS (Chatbots, Generative AI, RAG, Voice AI, Computer Vision, Automation, LLM Integration, AI Consulting) using `AISolutionCard`.
- Service detail includes a "Request a Quote" button linking to `/contact?subject=quote&service={slug}`.

**Acceptance criteria:**
- [ ] All service detail slugs render without 404.
- [ ] Each detail page has correct metadata and JSON-LD.
- [ ] FAQ accordion is accessible.
- [ ] `/ai-solutions` displays 8 cards.

---

## Chunk 6: Portfolio Listing + Detail

**Complexity:** simple  
**Dependencies:** Chunk 1, Chunk 2  
**Parallel safe:** yes (after Chunk 2)

**Files to create:**
- `src/app/portfolio/page.tsx`
- `src/app/portfolio/[slug]/page.tsx`
- `src/components/portfolio/ProjectCard.tsx`
- `src/components/portfolio/ProjectDetail.tsx`
- `src/data/portfolio.ts`

**Behavior:**
- `/portfolio` lists projects with category badges and tech badges.
- `/portfolio/[slug]` uses `generateStaticParams` and `generateMetadata`. It renders description, screenshots, case study, live demo link, and GitHub link.
- Use placeholder images from `public/images/` if real assets are unavailable.

**Acceptance criteria:**
- [ ] All portfolio detail slugs render.
- [ ] External links open in a new tab with `rel="noopener noreferrer"`.
- [ ] Category and technology badges are visible.

---

## Chunk 7: Blog Listing + Post Pages

**Complexity:** simple  
**Dependencies:** Chunk 1, Chunk 2  
**Parallel safe:** yes (after Chunk 2)

**Files to create:**
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/components/blog/BlogCard.tsx`
- `src/components/blog/BlogPost.tsx`
- `src/components/blog/BlogContent.tsx`
- `src/components/blog/SearchInput.tsx`
- `src/data/blog.ts`

**Behavior:**
- `/blog` lists posts with search input (client-side filter by title/category/tag), category filter, and tag cloud.
- `/blog/[slug]` uses `generateStaticParams` and `generateMetadata`. Renders featured image, author, date, blog content, categories/tags, and related posts (top 3 by shared tags).
- `BlogContent` receives the post `content` string (trusted HTML authored in `blog.ts`) and renders it with `dangerouslySetInnerHTML`. No Markdown parsing is used in Phase 1.
- Content is stored as HTML-safe strings in `blog.ts` for Phase 1.

**Acceptance criteria:**
- [ ] All blog slugs render.
- [ ] Search filters posts case-insensitively.
- [ ] Related posts are displayed.
- [ ] Blog post has JSON-LD `BlogPosting` structured data.

---

## Chunk 8: Careers Page

**Complexity:** simple  
**Dependencies:** Chunk 1, Chunk 2  
**Parallel safe:** yes (after Chunk 2)

**Files to create:**
- `src/app/careers/page.tsx`
- `src/components/careers/JobCard.tsx`
- `src/components/careers/ApplyForm.tsx`
- `src/data/careers.ts`

**Behavior:**
- `/careers` lists job openings and internships using `JobCard`.
- Each `JobCard` expands or links to an apply section with `ApplyForm`.
- `ApplyForm` fields: name, email, phone, position (pre-filled from selected job), resume link (text URL), cover letter, submit.
- Client-side validation only; on submit show a success toast (no backend in Phase 1).

**Acceptance criteria:**
- [ ] All openings are listed with type and location badges.
- [ ] Apply form validates required fields.
- [ ] Submit shows a success message.

---

## Chunk 9: Contact + Appointment Forms

**Complexity:** simple  
**Dependencies:** Chunk 1, Chunk 2  
**Parallel safe:** yes (after Chunk 2)

**Files to create/modify:**
- `src/app/contact/page.tsx`
- `src/app/appointment/page.tsx`
- `src/components/contact/ContactForm.tsx`
- `src/components/contact/ContactChannels.tsx`
- `src/components/contact/MapPlaceholder.tsx`
- `src/components/appointment/AppointmentForm.tsx`
- `src/lib/schemas.ts`
- `src/lib/actions.ts`
- `src/components/ui/SubmitButton.tsx`

**Behavior:**
- `/contact` displays contact form, contact channels (email, phone, WhatsApp, social links), and a map placeholder.
- `/appointment` displays a booking form: select service, date picker, time slot select, name, email, phone, notes.
- `src/lib/schemas.ts` exports `ContactSchema` and `AppointmentSchema` using Zod.
- `src/lib/actions.ts` exports server actions `submitContact(formData)` and `submitAppointment(formData)` that:
  1. Parse with Zod.
  2. If invalid, return a `ZodError`-shaped object.
  3. On success, log the payload (and email via Resend if `RESEND_API_KEY` is set; otherwise no-op).
  4. Return `{ success: true }`.
- Forms use React 19 `useActionState` and display pending/submitting states via `SubmitButton`.

**Schema contracts:**

```ts
export const ContactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message is too short'),
});
export type ContactInput = z.infer<typeof ContactSchema>;

export const AppointmentSchema = z.object({
  service: z.string().min(1, 'Service is required'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date'),
  time: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time'),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  notes: z.string().optional(),
});
export type AppointmentInput = z.infer<typeof AppointmentSchema>;
```

**Acceptance criteria:**
- [ ] Contact form submits via server action and shows success/error states.
- [ ] Appointment form validates date format and shows success state.
- [ ] Invalid submissions return field-level errors.
- [ ] Server actions do not expose internal error details to the client.

---

## Chunk 10: AI Chatbot Widget

**Complexity:** simple  
**Dependencies:** Chunk 1, Chunk 2  
**Parallel safe:** yes (after Chunk 2)

**Files to create/modify:**
- `src/components/chatbot/Chatbot.tsx`
- `src/components/chatbot/ChatMessage.tsx`
- `src/data/chatbot.ts`
- `src/app/layout.tsx` (add `<Chatbot />` before closing body)

**Behavior:**
- Floating action button bottom-right, accessible label "Open chat".
- Click opens a chat panel with intro message.
- `chatbot.ts` defines FAQ rules with `keywords` and `response`.
- Matcher scans user message for keywords; if multiple match, pick first.
- If no match, ask for name/email to connect with the team.
- Provide quick action buttons: "Book appointment", "View services", "Contact us".
- Esc closes panel; focus is trapped inside open panel.

**Acceptance criteria:**
- [ ] Chatbot opens/closes with button and Escape key.
- [ ] Configured FAQs return correct answers.
- [ ] Unknown input collects name/email.
- [ ] Focus is managed inside the open panel.

---

## Chunk 11: Tests + Final Integration

**Complexity:** simple  
**Dependencies:** All chunks above  
**Parallel safe:** no (final integration)

**Files to create:**
- `vitest.config.ts`
- `playwright.config.ts`
- `lighthouserc.json`
- `src/__tests__/unit/utils.test.ts`
- `src/__tests__/unit/schemas.test.ts`
- `src/__tests__/e2e/smoke.spec.ts`

**Behavior:**
- Vitest tests cover `cn()` utility and Zod schemas (valid + invalid inputs).
- Playwright smoke tests:
  1. Navigate home and verify title.
  2. Open mobile menu and navigate to About.
  3. Submit contact form and see success message.
  4. Submit appointment form and see success message.
  5. Verify sitemap is XML.
- `npm run test` runs unit tests then e2e tests.
- `lighthouserc.json` configures Lighthouse CI with budgets: performance 95, accessibility 95, best-practices 95, seo 95.
- `npm run lhci` runs `lhci autorun --config=lighthouserc.json` against the built app.
- Final build passes and Lighthouse CI passes.

**Acceptance criteria:**
- [ ] `npm run test:unit` passes.
- [ ] `npm run test:e2e` passes.
- [ ] `npm run build` succeeds.
- [ ] `npm run lhci` passes with all four categories ≥ 95.

---

## Execution Order

1. **Chunk 1** — scaffold (no parallel).
2. **Chunk 2** — shared UI + navigation (after Chunk 1).
3. **Parallel group A** — Chunks 3, 4, 5, 6 (after Chunk 2).
4. **Parallel group B** — Chunks 7, 8, 9, 10 (after Chunk 2).
5. **Chunk 11** — tests + integration (after all above).

No chunk depends on another within the same parallel group.

---

## Self-Review

- **Spec coverage:** Every FR-1 through FR-10 public requirement maps to a chunk; admin/auth/backend are explicitly out of scope.
- **Placeholder scan:** No TBD/TODO placeholders; file paths, schemas, and acceptance criteria are concrete.
- **Type consistency:** All data types are defined in `src/types/index.ts` in Chunk 1 and reused by later chunks.
