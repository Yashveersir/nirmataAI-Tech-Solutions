# Sprint Plan and Risk Assessment

## NirmataAI Tech Solution

**Version:** 1.0  
**Date:** 2026-07-10  
**Branch:** feat/phase1-public-site

---

## 1. Sprint Plan Overview

Phase 1 is divided into 6 sprints of 2 weeks each. The goal is to deliver a production-ready public marketing website with a scalable backend foundation.

### Sprint Schedule

| Sprint | Dates (example) | Theme |
|--------|-----------------|-------|
| Sprint 0 | Week 1 | Setup, design system, scaffolding |
| Sprint 1 | Weeks 2–3 | Core layout and static pages |
| Sprint 2 | Weeks 4–5 | Services, AI solutions, industries |
| Sprint 3 | Weeks 6–7 | Portfolio, case studies, blog |
| Sprint 4 | Weeks 8–9 | Forms, backend, integrations |
| Sprint 5 | Weeks 10–11 | Polish, testing, performance, deployment |
| Sprint 6 | Week 12 | Review, documentation, launch |

---

## 2. Sprint Details

### Sprint 0: Foundation

**Goal:** Set up the project, design system, and CI/CD pipeline.

| ID | Task | Owner | Est. Days |
|----|------|-------|-----------|
| S0-1 | Finalize design system and tokens | UI/UX Designer | 2 |
| S0-2 | Set up Next.js project with Tailwind, shadcn/ui, Framer Motion | Frontend Engineer | 2 |
| S0-3 | Set up NestJS project with Prisma and PostgreSQL | Backend Engineer | 2 |
| S0-4 | Configure ESLint, Prettier, Husky, lint-staged | Frontend Engineer | 1 |
| S0-5 | Set up GitHub Actions CI/CD | DevOps Engineer | 2 |
| S0-6 | Configure Sentry for frontend and backend | DevOps Engineer | 1 |
| S0-7 | Create base layout components (Header, Footer, Container) | Frontend Engineer | 2 |
| S0-8 | Implement metadata helper and JSON-LD components | Frontend Engineer | 1 |

**Sprint 0 Deliverables:**

- Design tokens documented
- Working Next.js and NestJS projects
- CI/CD pipeline running
- Base layout components

### Sprint 1: Core Pages

**Goal:** Build all static marketing pages with content and navigation.

| ID | Task | Owner | Est. Days |
|----|------|-------|-----------|
| S1-1 | Home page sections (Hero, Services teaser, AI teaser, Portfolio, Testimonials, Blog preview, CTA) | Frontend Engineer | 3 |
| S1-2 | About page (story, mission, values, team, timeline) | Frontend Engineer | 2 |
| S1-3 | Contact page with contact info | Frontend Engineer | 1 |
| S1-4 | FAQs page with accordion | Frontend Engineer | 1 |
| S1-5 | Privacy Policy and Terms & Conditions pages | Technical Writer | 2 |
| S1-6 | Responsive mobile menu | Frontend Engineer | 1 |
| S1-7 | Footer with newsletter signup form | Frontend Engineer | 1 |
| S1-8 | Unit tests for layout components | QA Engineer | 2 |

**Sprint 1 Deliverables:**

- All static pages rendered
- Responsive header, footer, mobile menu
- Legal pages published

### Sprint 2: Services, AI, Industries

**Goal:** Build service, AI solution, and industry pages with detail views.

| ID | Task | Owner | Est. Days |
|----|------|-------|-----------|
| S2-1 | Services listing page | Frontend Engineer | 2 |
| S2-2 | Service detail page template | Frontend Engineer | 2 |
| S2-3 | AI Solutions listing page | Frontend Engineer | 2 |
| S2-4 | AI Solution detail page template | Frontend Engineer | 2 |
| S2-5 | Industries listing page | Frontend Engineer | 1 |
| S2-6 | Industry detail page template | Frontend Engineer | 1 |
| S2-7 | Create content data files for services, AI solutions, industries | Technical Writer | 3 |
| S2-8 | Add structured data (Service, Organization) | Frontend Engineer | 1 |

**Sprint 2 Deliverables:**

- All service and AI pages live
- Industry pages live
- Content data files complete

### Sprint 3: Portfolio, Case Studies, Blog

**Goal:** Build portfolio, case studies, and blog systems.

| ID | Task | Owner | Est. Days |
|----|------|-------|-----------|
| S3-1 | Portfolio grid with filtering | Frontend Engineer | 2 |
| S3-2 | Project detail page | Frontend Engineer | 2 |
| S3-3 | Case studies listing page | Frontend Engineer | 1 |
| S3-4 | Case study detail page | Frontend Engineer | 2 |
| S3-5 | Blog listing with search, filters, pagination | Frontend Engineer | 3 |
| S3-6 | Blog post detail page with content rendering | Frontend Engineer | 2 |
| S3-7 | Backend blog module (posts, categories, tags) | Backend Engineer | 3 |
| S3-8 | Seed initial portfolio, case study, and blog content | Technical Writer | 2 |

**Sprint 3 Deliverables:**

- Portfolio and case study pages live
- Blog fully functional
- Backend blog module complete

### Sprint 4: Forms, Backend, Integrations

**Goal:** Implement lead capture, backend API, and third-party integrations.

| ID | Task | Owner | Est. Days |
|----|------|-------|-----------|
| S4-1 | Contact form with client and server validation | Frontend Engineer | 2 |
| S4-2 | Consultation booking form | Frontend Engineer | 2 |
| S4-3 | Newsletter signup form | Frontend Engineer | 1 |
| S4-4 | Job application form with file upload | Frontend Engineer | 2 |
| S4-5 | Backend leads module with validation | Backend Engineer | 2 |
| S4-6 | Backend careers module | Backend Engineer | 2 |
| S4-7 | Resend email integration for notifications | Backend Engineer | 2 |
| S4-8 | Cloudinary upload integration | Backend Engineer | 2 |
| S4-9 | Rate limiting and honeypot on public forms | Security Engineer | 1 |

**Sprint 4 Deliverables:**

- All forms functional and secure
- Backend API for leads and careers
- Email and upload integrations working

### Sprint 5: Polish, Testing, Performance

**Goal:** Ensure quality, performance, accessibility, and SEO.

| ID | Task | Owner | Est. Days |
|----|------|-------|-----------|
| S5-1 | AI chat assistant widget | AI Engineer + Frontend Engineer | 3 |
| S5-2 | Accessibility audit and fixes (WCAG AA) | QA Engineer | 2 |
| S5-3 | Performance optimization and Lighthouse audit | Frontend Engineer | 2 |
| S5-4 | SEO audit (metadata, sitemap, structured data) | SEO Specialist | 2 |
| S5-5 | End-to-end tests with Playwright | QA Engineer | 3 |
| S5-6 | Unit and integration tests | QA Engineer + Backend Engineer | 3 |
| S5-7 | Cross-browser and responsive testing | QA Engineer | 2 |
| S5-8 | Error handling and monitoring with Sentry | DevOps Engineer | 1 |

**Sprint 5 Deliverables:**

- Chat assistant live
- Lighthouse scores > 95
- Test coverage > 70%
- WCAG AA compliance

### Sprint 6: Launch

**Goal:** Deploy, document, and launch.

| ID | Task | Owner | Est. Days |
|----|------|-------|-----------|
| S6-1 | Deploy frontend to Vercel | DevOps Engineer | 1 |
| S6-2 | Deploy backend and database to Railway | DevOps Engineer | 1 |
| S6-3 | Configure custom domain and SSL | DevOps Engineer | 1 |
| S6-4 | Final security review | Security Engineer | 1 |
| S6-5 | Write user and technical documentation | Technical Writer | 2 |
| S6-6 | Team review and stakeholder demo | Project Manager | 1 |
| S6-7 | Launch and post-launch monitoring | DevOps Engineer + PM | 2 |

**Sprint 6 Deliverables:**

- Live production website
- Documentation complete
- Post-launch monitoring active

---

## 3. Team Allocation

| Role | Responsibilities |
|------|-----------------|
| Product Manager | Requirements, prioritization, stakeholder communication |
| Project Manager | Sprint planning, timeline, risk tracking |
| Software Architect | Architecture decisions, code reviews |
| UI/UX Designer | Design system, wireframes, visual QA |
| Frontend Engineer | Next.js implementation, animations, forms |
| Backend Engineer | NestJS API, database, integrations |
| Database Engineer | Schema design, migrations, optimization |
| AI Engineer | Chat assistant logic and knowledge base |
| DevOps Engineer | CI/CD, deployment, monitoring |
| Security Engineer | Security review, rate limiting, auth |
| QA Engineer | Testing, accessibility, performance audits |
| SEO Specialist | Metadata, content, search optimization |
| Technical Writer | Documentation, legal pages, blog content |

---

## 4. Risk Assessment

### 4.1 Risk Register

| ID | Risk | Likelihood | Impact | Mitigation | Owner |
|----|------|------------|--------|------------|-------|
| R1 | Scope creep from additional pages/features | High | Medium | Strict change control; defer non-MVP features to Phase 2 | Project Manager |
| R2 | Third-party integration delays (Resend, Cloudinary, Razorpay) | Medium | Medium | Use mock services during development; integrate early | Backend Engineer |
| R3 | Performance targets not met due to heavy animations | Medium | High | Use `prefers-reduced-motion`; optimize with Lighthouse | Frontend Engineer |
| R4 | Accessibility compliance gaps | Medium | Medium | Audit early and often; use automated a11y testing | QA Engineer |
| R5 | Database schema changes disrupt development | Medium | Medium | Use Prisma migrations; finalize schema in Sprint 0 | Database Engineer |
| R6 | Content not ready for launch | High | Medium | Prepare placeholder content; assign Technical Writer early | Technical Writer |
| R7 | Deployment issues on Vercel/Railway | Low | High | Set up staging environment; test deployments in Sprint 0 | DevOps Engineer |
| R8 | Security vulnerabilities in public forms | Medium | High | Implement rate limiting, validation, honeypot, CSP | Security Engineer |
| R9 | Team availability or skill gaps | Low | High | Cross-train team; document decisions clearly | Project Manager |
| R10 | SEO traffic takes time to build | High | Low | Focus on technical SEO; publish blog content regularly | SEO Specialist |

### 4.2 Mitigation Strategy Summary

- **Scope:** Weekly backlog grooming and stakeholder sign-off.
- **Integrations:** Start integration spikes in Sprint 0.
- **Performance:** Budget animation complexity; measure in each sprint.
- **Accessibility:** Include a11y checks in definition of done.
- **Content:** Create content templates and assign owners in Sprint 0.
- **Deployment:** Maintain staging and production environments from Sprint 0.
- **Security:** Conduct security review before launch.

---

## 5. Definition of Done

A user story is complete when:

1. Code implemented and reviewed.
2. Unit tests written and passing.
3. Responsive design verified.
4. Accessibility review passed.
5. SEO metadata added.
6. Documentation updated.
7. No critical or high bugs open.
8. Merged into main branch via pull request.

---

## 6. Communication Plan

| Meeting | Frequency | Attendees |
|---------|-----------|-----------|
| Daily Standup | Daily | Core team |
| Sprint Planning | Bi-weekly | PM, engineers, designer |
| Sprint Review | Bi-weekly | Team + stakeholders |
| Sprint Retrospective | Bi-weekly | Core team |
| Backlog Refinement | Weekly | PM, leads |

---

## 7. Tools

| Purpose | Tool |
|---------|------|
| Project management | GitHub Projects |
| Design | Figma |
| Code repository | GitHub |
| CI/CD | GitHub Actions |
| Deployment | Vercel + Railway |
| Documentation | Markdown in `.kimchi/docs` |
| Monitoring | Sentry |
| Communication | Slack / Microsoft Teams |
