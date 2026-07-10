# Software Requirements Specification (SRS)

## NirmataAI Tech Solution

**Version:** 1.0  
**Date:** 2026-07-10  
**Branch:** feat/phase1-public-site  
**Status:** Draft — pending review

---

## 1. Introduction

This SRS defines the functional and non-functional requirements for the Phase 1 public website and platform foundation of NirmataAI Tech Solution.

### 1.1 Purpose

Provide a complete, unambiguous specification for engineers, designers, QA, and stakeholders to build and validate the Phase 1 deliverables.

### 1.2 Scope

Phase 1 covers the public marketing website, lead capture features, foundational backend services, and the database schema required to support future expansion.

### 1.3 Definitions

- **CTA:** Call to Action
- **WCAG:** Web Content Accessibility Guidelines
- **OG:** Open Graph
- **SSR:** Server-Side Rendering
- **SSG:** Static Site Generation
- **ISR:** Incremental Static Regeneration
- **RAG:** Retrieval-Augmented Generation

---

## 2. Functional Requirements

### 2.1 Public Pages

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-001 | Home page must display hero, services overview, AI solutions teaser, portfolio highlights, testimonials, blog previews, and CTAs. | Must |
| FR-002 | About page must display company story, mission, vision, values, team, and timeline. | Must |
| FR-003 | Services page must list all service categories with detail pages for each. | Must |
| FR-004 | Industries page must list target industries and their relevant solutions. | Should |
| FR-005 | AI Solutions page must detail AI offerings: chatbots, generative AI, RAG, knowledge bases, support, assistants, document processing, automation. | Must |
| FR-006 | Portfolio page must display project cards with filtering by category. | Must |
| FR-007 | Case Studies page must present detailed project stories with metrics. | Should |
| FR-008 | Pricing page must display service packages and engagement models. | Should |
| FR-009 | Blog page must list articles with categories, tags, search, and pagination. | Must |
| FR-010 | Careers page must list job openings with application form. | Should |
| FR-011 | Contact page must display contact info, form, map placeholder, and social links. | Must |
| FR-012 | FAQs page must display categorized questions with expandable answers. | Must |
| FR-013 | Privacy Policy and Terms & Conditions pages must display legal content. | Must |

### 2.2 Navigation and Layout

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-014 | Persistent header with logo, navigation links, mobile menu, and CTA button. | Must |
| FR-015 | Persistent footer with sitemap, contact info, social links, newsletter signup, and legal links. | Must |
| FR-016 | Skip-to-content link for accessibility. | Must |
| FR-017 | Breadcrumb navigation on detail pages. | Should |
| FR-018 | Search functionality across blog and services. | Should |

### 2.3 Lead Generation

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-019 | Contact form must collect name, email, phone, company, service interest, budget range, and message. | Must |
| FR-020 | Consultation booking must collect preferred date/time, name, email, phone, and topic. | Should |
| FR-021 | Newsletter signup must collect email and confirm subscription intent. | Must |
| FR-022 | All forms must validate input client-side and server-side. | Must |
| FR-023 | Form submissions must be stored in the database and trigger a notification email. | Must |
| FR-024 | Career application form must allow resume/CV upload. | Should |

### 2.4 AI Chat Assistant

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-025 | Chat widget must be available on all pages. | Should |
| FR-026 | Chat must answer common questions using predefined rules and knowledge base. | Should |
| FR-027 | Chat must capture lead information when a user requests consultation. | Should |
| FR-028 | Chat must be keyboard accessible and screen-reader friendly. | Must |

### 2.5 Blog

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-029 | Blog posts must support categories, tags, author, published date, and featured image. | Must |
| FR-030 | Blog detail page must render rich content with proper heading hierarchy. | Must |
| FR-031 | Blog listing must support search, category filter, tag filter, and pagination. | Must |
| FR-032 | Blog posts must include OG and Twitter card metadata. | Must |

### 2.6 SEO and Performance

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-033 | Every page must have unique title, description, canonical URL, and OG metadata. | Must |
| FR-034 | Structured data (JSON-LD) must be included for Organization, WebSite, and BlogPosting. | Must |
| FR-035 | Sitemap and robots.txt must be generated dynamically. | Must |
| FR-036 | Images must use Next.js Image component with proper sizing and alt text. | Must |

### 2.7 Backend Foundation

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-037 | NestJS API must expose health check endpoint. | Must |
| FR-038 | Database schema must support leads, contacts, newsletter subscribers, blog posts, jobs, and users. | Must |
| FR-039 | API must validate all incoming data using Zod or class-validator. | Must |
| FR-040 | API must handle errors consistently and log to Sentry. | Must |

---

## 3. Non-Functional Requirements

### 3.1 Performance

| ID | Requirement |
|----|-------------|
| NFR-001 | Lighthouse Performance score > 95 on all public pages. |
| NFR-002 | First Contentful Paint < 1.2s on 4G. |
| NFR-003 | Largest Contentful Paint < 2.5s on 4G. |
| NFR-004 | Total Blocking Time < 200ms. |
| NFR-005 | Cumulative Layout Shift < 0.1. |

### 3.2 Accessibility

| ID | Requirement |
|----|-------------|
| NFR-006 | WCAG AA compliance on all pages. |
| NFR-007 | All interactive elements keyboard accessible. |
| NFR-008 | Color contrast ratio at least 4.5:1 for normal text. |
| NFR-009 | Focus indicators visible on all focusable elements. |
| NFR-010 | Screen reader announcements for dynamic content. |

### 3.3 Security

| ID | Requirement |
|----|-------------|
| NFR-011 | All forms protected by honeypot and rate limiting. |
| NFR-012 | No sensitive data exposed in client-side code. |
| NFR-013 | API endpoints validated and sanitized. |
| NFR-014 | Secure headers configured (CSP, HSTS, X-Frame-Options). |
| NFR-015 | Authentication handled by Better Auth with secure defaults. |

### 3.4 Scalability

| ID | Requirement |
|----|-------------|
| NFR-016 | Frontend deployed on Vercel with edge caching. |
| NFR-017 | Backend and database deployed on Railway. |
| NFR-018 | Static pages generated at build time where possible. |
| NFR-019 | Database schema normalized to 3NF for core entities. |

### 3.5 Maintainability

| ID | Requirement |
|----|-------------|
| NFR-020 | TypeScript strict mode enabled. |
| NFR-021 | ESLint and Prettier configured and enforced. |
| NFR-022 | Component library based on shadcn/ui with documented variants. |
| NFR-023 | Tests cover unit, integration, and end-to-end flows. |
| NFR-024 | API documentation generated from OpenAPI/Swagger. |

### 3.6 Compatibility

| ID | Requirement |
|----|-------------|
| NFR-025 | Responsive from 320px to 2560px width. |
| NFR-026 | Support latest two versions of Chrome, Firefox, Safari, Edge. |
| NFR-027 | Progressive enhancement for JavaScript-disabled scenarios where feasible. |

---

## 4. Constraints

- Use Next.js 15 App Router.
- Use Tailwind CSS 4 and shadcn/ui.
- Use TypeScript strict mode.
- Use PostgreSQL with Prisma ORM.
- Use NestJS for backend API.
- Better Auth for authentication.
- Cloudinary for media storage.
- Resend for email delivery.
- Razorpay for payments.
- Sentry for monitoring.

---

## 5. Data Requirements

See Database Design document for full schema.

Core entities:

- Users (admin, author, applicant)
- Leads (contact form, consultation booking)
- NewsletterSubscribers
- BlogPosts
- BlogCategories
- BlogTags
- Jobs
- JobApplications
- TeamMembers
- Testimonials
- Projects
- CaseStudies

---

## 6. Interface Requirements

### 6.1 User Interfaces

Defined in Wireframes and Design System document.

### 6.2 API Interfaces

Defined in API Design document.

### 6.3 Hardware Interfaces

None specific.

### 6.4 Software Interfaces

- Cloudinary SDK for image upload.
- Resend SDK for email sending.
- Razorpay SDK for payments.
- Sentry SDK for error tracking.

---

## 7. Appendices

### Appendix A: Reference Documents

- PRD: `.kimchi/docs/planning/01-prd.md`
- Information Architecture: `.kimchi/docs/planning/03-information-architecture.md`
- Database Design: `.kimchi/docs/planning/07-database-design.md`
- API Design: `.kimchi/docs/planning/08-api-design.md`
