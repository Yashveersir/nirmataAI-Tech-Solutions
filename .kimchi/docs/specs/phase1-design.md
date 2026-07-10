# NirmataAI Tech Solution — Phase 1 Design

**Scope:** Public marketing website (Home, About, Services, AI Solutions, Portfolio, Blog, Careers, Contact, Appointment Booking, AI chatbot widget).
**Approach:** Static-first Next.js site with content stored in typed TS/JSON modules.
**Target:** Deployable professional presence that satisfies the public-facing FRs in the SRS.

---

## Goals

1. Establish a credible, fast, accessible online presence.
2. Showcase services, AI solutions, portfolio, and team.
3. Capture inquiries and appointment requests via working forms.
4. Provide a lightweight AI chatbot for FAQs and lead capture.
5. Score 95+ on Lighthouse (performance, accessibility, best practices, SEO).

---

## Architecture

- **Framework:** Next.js 15 App Router, React 19, TypeScript strict mode.
- **Styling:** Tailwind CSS 4 (CSS-first config), shadcn/ui primitives.
- **Motion:** Framer Motion for scroll-triggered section reveals and micro-interactions.
- **Content:** Typed data modules under `src/data/` keep content editable without a CMS in Phase 1.
- **Forms:** Next.js Server Actions validate with Zod and forward submissions to a configurable email logger (`console` for local, Resend env var for production).
- **SEO:** Dynamic metadata helpers, Open Graph/Twitter images, JSON-LD structured data, `sitemap.ts`, `robots.ts`.
- **Testing:** Vitest for unit/utils, Playwright for page smoke tests, Lighthouse CI budget.

---

## Pages

| Route | SRS FR | Purpose |
|-------|--------|---------|
| `/` | FR-1 | Hero, intro, services overview, portfolio highlights, testimonials, stats, CTA, contact preview |
| `/about` | FR-2 | Company history, mission, vision, values, team, timeline |
| `/services` | FR-3 | Service cards grid |
| `/services/[slug]` | FR-3 | Service detail: overview, features, technologies, benefits, FAQ, CTA |
| `/ai-solutions` | FR-4 | AI capability cards |
| `/portfolio` | FR-5 | Project listing with categories |
| `/portfolio/[slug]` | FR-5 | Case study with screenshots, live demo, GitHub links |
| `/blog` | FR-6 | Post list with categories/tags/search |
| `/blog/[slug]` | FR-6 | Blog post with featured image, SEO metadata, related posts |
| `/careers` | FR-7 | Job/internship openings, apply form |
| `/contact` | FR-8 | Contact form, map placeholder, contact channels, social links |
| `/appointment` | FR-9 | Date/time/service/details booking form |

---

## Shared Components

- **Layout:** root layout with metadata defaults, header, footer, chatbot widget.
- **Header:** responsive navigation with mobile sheet.
- **Footer:** links, socials, newsletter subscribe.
- **UI primitives:** Button, Card, Input, Textarea, Select, Badge, Separator, Accordion, Sheet, Dialog.
- **Section building blocks:** Container, SectionHeader, AnimatedSection.

---

## Data Layer

Content modules are plain TypeScript arrays/objects:

- `src/data/site.ts` — site name, contact info, social links, nav links.
- `src/data/home.ts` — hero, stats, services highlights, portfolio highlights, testimonials.
- `src/data/about.ts` — history, mission/vision/values, team, timeline.
- `src/data/services.ts` — services list + detail content.
- `src/data/ai-solutions.ts` — AI solution cards.
- `src/data/portfolio.ts` — projects.
- `src/data/blog.ts` — posts.
- `src/data/careers.ts` — openings.
- `src/data/chatbot.ts` — FAQ rules, lead collection flow.

---

## Forms

- `src/lib/schemas.ts` — Zod schemas for contact and appointment.
- `src/lib/actions.ts` — server actions that validate and "send" submissions.
- In Phase 1, the action logs the payload and returns a success message. A `RESEND_API_KEY` env var can be added later to email submissions without changing the interface.

---

## AI Chatbot Widget

- Floating action button in the bottom-right.
- Hardcoded FAQ matching with simple keyword/phrase rules.
- Suggests services, books appointments via link, collects name/email when no match.
- Fully client-side; no backend or LLM API in Phase 1.

---

## SEO & Accessibility

- `generateMetadata` on every page.
- Open Graph and Twitter card metadata.
- JSON-LD for Organization, WebSite, and BlogPosting where applicable.
- `sitemap.ts` and `robots.ts` in App Router.
- Semantic HTML, ARIA labels, keyboard focus, skip-to-content link, reduced-motion support.

---

## Testing

- **Vitest:** utilities, schemas, data helpers.
- **Playwright:** critical path smoke tests for navigation, forms, and mobile menu.
- **Lighthouse:** run in CI with budgets (performance 95, accessibility 95, best-practices 95, SEO 95).

---

## Out of Scope

- Admin dashboard, CMS UI, JWT authentication, PostgreSQL/Prisma backend.
- Real LLM integration (Phase 2).
- File uploads (resume upload is a plain URL/text field in Phase 1).
- Payment processing, client portal, analytics dashboard.

---

## Acceptance Criteria

- [ ] `npm install && npm run build` succeeds with zero errors.
- [ ] All 11 public pages are responsive down to 320px.
- [ ] Navigation works on desktop and mobile.
- [ ] Contact and appointment forms validate and show success states.
- [ ] Chatbot answers configured FAQs and captures leads.
- [ ] Lighthouse scores are 95+ for all four categories on the home page.
- [ ] All tests pass (`npm test`).
