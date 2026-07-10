# Build Implementation Plan

## NirmataAI Tech Solution — Phase 1

**Version:** 1.0  
**Date:** 2026-07-10  
**Branch:** feat/phase1-public-site  
**Status:** Approved — implementation started

---

## 1. Goal

Implement the Phase 1 public marketing website for NirmataAI Tech Solution based on the approved planning documents. This plan breaks the work into independently buildable chunks.

## 2. Reference Documents

- PRD: `.kimchi/docs/planning/01-prd.md`
- SRS: `.kimchi/docs/planning/02-srs.md`
- Information Architecture: `.kimchi/docs/planning/03-information-architecture.md`
- User Personas/Journeys: `.kimchi/docs/planning/04-user-personas-journeys.md`
- Design System: `.kimchi/docs/planning/05-wireframes-design-system.md`
- System Architecture: `.kimchi/docs/planning/06-system-architecture.md`
- API Design: `.kimchi/docs/planning/07-api-design-folder-structure.md`
- Sprint Plan: `.kimchi/docs/planning/08-sprint-plan-risk-assessment.md`
- Review Summary: `.kimchi/docs/planning/09-review-summary.md`

## 3. Current State

The repository already contains a Next.js 15 scaffold with:

- `src/app/layout.tsx` with metadata and JSON-LD
- `src/app/page.tsx` with minimal placeholder
- `src/lib/metadata.ts` helper
- `src/data/site.ts` configuration
- `src/types/index.ts` types
- shadcn/ui configured (`components.json`)
- Tailwind CSS 4, Framer Motion, Zod installed

## 4. Build Chunks

### Chunk 1: Layout Foundation

**Goal:** Create the shared marketing layout components used across all public pages.

**Files to create/modify:**

- `src/components/layout/Container.tsx`
- `src/components/layout/Section.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/app/(marketing)/layout.tsx`
- `src/data/navigation.ts`
- `src/app/globals.css` (update with design tokens)
- `src/app/layout.tsx` (refactor to use shared layout)

**Acceptance criteria:**

1. Header is sticky, responsive, and includes logo, nav links, CTA button, and mobile hamburger menu.
2. Footer includes sitemap columns, newsletter signup form, contact info, social links, and legal links.
3. Skip-to-content link is present and functional.
4. Mobile menu opens/closes smoothly.
5. Layout wraps all marketing pages without breaking existing metadata/JSON-LD.
6. Unit tests exist for Container, Header, Footer.

**Complexity:** simple

---

### Chunk 2: Home Page

**Goal:** Build a complete, conversion-focused home page.

**Files to create/modify:**

- `src/app/(marketing)/page.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/ServicesGrid.tsx`
- `src/components/sections/AISolutionsTeaser.tsx`
- `src/components/sections/PortfolioShowcase.tsx`
- `src/components/sections/WhyChooseUs.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/BlogPreview.tsx`
- `src/components/sections/CTASection.tsx`
- `src/components/cards/ServiceCard.tsx`
- `src/components/cards/ProjectCard.tsx`
- `src/components/cards/BlogCard.tsx`
- `src/components/cards/TestimonialCard.tsx`
- `src/data/services.ts`
- `src/data/ai-solutions.ts`
- `src/data/projects.ts`
- `src/data/testimonials.ts`
- `src/data/blog.ts`

**Acceptance criteria:**

1. Home page renders all sections per wireframe.
2. Service, project, blog, and testimonial cards are reusable.
3. Hero has headline, subheadline, and two CTAs.
4. Sections are responsive and accessible.
5. Content data files exist with realistic placeholder content.
6. Lighthouse score on home page exceeds 95.

**Complexity:** simple

---

### Chunk 3: Static Pages

**Goal:** Build About, Contact, FAQs, Privacy Policy, and Terms & Conditions pages.

**Files to create/modify:**

- `src/app/(marketing)/about/page.tsx`
- `src/app/(marketing)/contact/page.tsx`
- `src/app/(marketing)/faqs/page.tsx`
- `src/app/(marketing)/privacy-policy/page.tsx`
- `src/app/(marketing)/terms-and-conditions/page.tsx`
- `src/components/sections/AboutHero.tsx`
- `src/components/sections/StorySection.tsx`
- `src/components/sections/ValuesGrid.tsx`
- `src/components/sections/TeamGrid.tsx`
- `src/components/sections/Timeline.tsx`
- `src/components/sections/ContactInfo.tsx`
- `src/components/sections/FAQAccordion.tsx`
- `src/data/faqs.ts`
- `src/data/team.ts`
- `src/data/timeline.ts`

**Acceptance criteria:**

1. All five pages render correctly with unique metadata.
2. FAQ accordion is keyboard accessible.
3. About page displays story, mission, values, team, and timeline.
4. Contact page shows contact info and a contact form placeholder (full form in Chunk 7).
5. Privacy and Terms pages display realistic legal content.
6. Each page has proper heading hierarchy.

**Complexity:** simple

---

### Chunk 4: Services, AI Solutions, and Industries

**Goal:** Build listing and detail pages for services, AI solutions, and industries.

**Files to create/modify:**

- `src/app/(marketing)/services/page.tsx`
- `src/app/(marketing)/services/[slug]/page.tsx`
- `src/app/(marketing)/ai-solutions/page.tsx`
- `src/app/(marketing)/ai-solutions/[slug]/page.tsx`
- `src/app/(marketing)/industries/page.tsx`
- `src/app/(marketing)/industries/[slug]/page.tsx`
- `src/data/services.ts`
- `src/data/ai-solutions.ts`
- `src/data/industries.ts`
- `src/components/sections/ServiceDetail.tsx`
- `src/components/sections/IndustryDetail.tsx`
- `src/components/sections/AISolutionDetail.tsx`
- `src/lib/slugs.ts` (helper for static params)

**Acceptance criteria:**

1. Listing pages display all items as cards.
2. Detail pages render full content: description, features, technologies, benefits, FAQ.
3. Static paths generated for all slugs.
4. Related case studies/projects linked where available.
5. Structured data (Service JSON-LD) on service detail pages.
6. 404 handled for unknown slugs.

**Complexity:** simple

---

### Chunk 5: Portfolio and Case Studies

**Goal:** Build portfolio grid, project detail, case studies list, and case study detail.

**Files to create/modify:**

- `src/app/(marketing)/portfolio/page.tsx`
- `src/app/(marketing)/portfolio/[slug]/page.tsx`
- `src/app/(marketing)/case-studies/page.tsx`
- `src/app/(marketing)/case-studies/[slug]/page.tsx`
- `src/components/sections/PortfolioGrid.tsx`
- `src/components/sections/ProjectDetail.tsx`
- `src/components/sections/CaseStudyDetail.tsx`
- `src/data/projects.ts`
- `src/data/case-studies.ts`

**Acceptance criteria:**

1. Portfolio page has category filter tabs.
2. Project detail shows description, technologies, screenshots, live/demo links.
3. Case study detail shows challenge, solution, results, testimonial.
4. Static paths generated.
5. Images use Next.js Image component with proper sizing.

**Complexity:** simple

---

### Chunk 6: Blog

**Goal:** Build blog listing and blog post detail pages.

**Files to create/modify:**

- `src/app/(marketing)/blog/page.tsx`
- `src/app/(marketing)/blog/[slug]/page.tsx`
- `src/app/(marketing)/blog/category/[slug]/page.tsx`
- `src/app/(marketing)/blog/tag/[slug]/page.tsx`
- `src/components/sections/BlogList.tsx`
- `src/components/sections/BlogPost.tsx`
- `src/components/sections/BlogSearch.tsx`
- `src/data/blog.ts`
- `src/data/blog-categories.ts`
- `src/data/blog-tags.ts`

**Acceptance criteria:**

1. Blog listing supports search, category filter, tag filter, and pagination.
2. Blog post detail renders content with proper heading hierarchy.
3. Static paths generated for posts, categories, and tags.
4. Blog posts include OG and BlogPosting JSON-LD.
5. Author and published date displayed.

**Complexity:** simple

---

### Chunk 7: Forms and Lead Capture

**Goal:** Implement contact form, consultation form, newsletter signup, and job application form.

**Files to create/modify:**

- `src/components/forms/ContactForm.tsx`
- `src/components/forms/ConsultationForm.tsx`
- `src/components/forms/NewsletterForm.tsx`
- `src/components/forms/JobApplicationForm.tsx`
- `src/app/api/contact/route.ts`
- `src/app/api/consultation/route.ts`
- `src/app/api/newsletter/route.ts`
- `src/app/api/apply/route.ts`
- `src/lib/validation.ts`
- `src/app/(marketing)/contact/page.tsx` (integrate form)
- `src/app/(marketing)/careers/[slug]/page.tsx` (integrate form)
- `src/components/ui/sonner.tsx` or toast for feedback

**Acceptance criteria:**

1. All forms validate client-side with Zod.
2. API routes validate server-side and return clear errors.
3. Form submissions stored (write to JSON file or database if backend ready).
4. Honeypot field included on public forms.
5. Success/error states accessible to screen readers.
6. Resume upload handled via Cloudinary or base64 if backend not ready.

**Complexity:** complex (forms, validation, file upload, error handling)

---

### Chunk 8: Backend API (NestJS + Prisma)

**Goal:** Scaffold the NestJS backend with Prisma schema, health endpoint, and lead/career modules.

**Files to create/modify:**

- `api/package.json`
- `api/tsconfig.json`
- `api/nest-cli.json`
- `api/src/main.ts`
- `api/src/app.module.ts`
- `api/src/prisma/schema.prisma`
- `api/src/prisma/prisma.service.ts`
- `api/src/modules/health/health.controller.ts`
- `api/src/modules/leads/leads.module.ts`
- `api/src/modules/leads/leads.controller.ts`
- `api/src/modules/leads/leads.service.ts`
- `api/src/modules/leads/leads.repository.ts`
- `api/src/modules/leads/dto/create-lead.dto.ts`
- `api/src/modules/careers/careers.module.ts`
- `api/src/modules/careers/careers.controller.ts`
- `api/src/modules/careers/careers.service.ts`
- `api/src/modules/careers/careers.repository.ts`
- `api/src/modules/careers/dto/create-application.dto.ts`
- `api/src/modules/newsletter/newsletter.module.ts`
- `api/.env.example`

**Acceptance criteria:**

1. NestJS app starts and health endpoint returns 200.
2. Prisma schema matches database design document.
3. Lead creation endpoint validates and stores data.
4. Career application endpoint validates and stores data.
5. Newsletter subscribe/unsubscribe endpoints work.
6. Unit tests for services and controllers pass.

**Complexity:** complex (NestJS, Prisma, validation, multiple modules)

---

### Chunk 9: AI Chat Assistant

**Goal:** Build a floating AI chat assistant widget for all pages.

**Files to create/modify:**

- `src/components/chat/ChatWidget.tsx`
- `src/components/chat/ChatMessage.tsx`
- `src/components/chat/ChatToggle.tsx`
- `src/data/chat-rules.ts`
- `src/hooks/use-chat.ts`
- `src/app/(marketing)/layout.tsx` (include chat widget)

**Acceptance criteria:**

1. Chat widget floats bottom-right on all marketing pages.
2. Predefined rules answer common questions.
3. Chat captures name/email when user requests consultation.
4. Keyboard accessible and screen-reader friendly.
5. Respects `prefers-reduced-motion`.

**Complexity:** simple

---

### Chunk 10: SEO, Accessibility, Performance, and Review

**Goal:** Finalize SEO metadata, structured data, accessibility, performance, and run a review.

**Files to create/modify:**

- `src/lib/metadata.ts` (verify all pages use it)
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/components/JsonLd.tsx` (extend for BlogPosting, Service, BreadcrumbList)
- `next.config.ts` (optimization)
- `lighthouserc.json`
- `src/app/globals.css` (verify no layout shifts)
- Add `aria-label` and focus states where missing
- Run Lighthouse, Playwright tests, accessibility audit

**Acceptance criteria:**

1. Every page has unique metadata and canonical URL.
2. Sitemap and robots.txt generated dynamically.
3. JSON-LD present where applicable.
4. Lighthouse scores > 95 across public pages.
5. Playwright e2e tests pass for critical flows.
6. No WCAG AA violations.

**Complexity:** simple

## 5. Build Order and Dependencies

```
Chunk 1 ──► Chunk 2 ──► Chunk 3 ──► Chunk 4 ──► Chunk 5 ──► Chunk 6
                                              
Chunk 7 (forms) depends on Chunk 1–3
Chunk 8 (backend) can run in parallel with frontend chunks
Chunk 9 (chat) depends on Chunk 1
Chunk 10 (polish) depends on all frontend chunks
```

## 6. Verification Commands

**Frontend:**

```bash
npm run lint
npm run build
npm run test:unit
npm run test:e2e
npm run lhci
```

**Backend:**

```bash
cd api
npm run lint
npm run build
npx prisma generate
npx prisma migrate dev
npm run test
npm run test:e2e
```

## 7. Notes for Builders

- Follow existing code conventions in `src/lib/metadata.ts` and `src/types/index.ts`.
- Use shadcn/ui components where possible; install new ones with `npx shadcn add <component>`.
- Use Tailwind CSS 4 syntax; verify classes compile.
- Prefer server components; use client components only for interactivity.
- All forms must use Zod validation.
- All public pages must be responsive and accessible.
- Do not introduce new dependencies without approval.
