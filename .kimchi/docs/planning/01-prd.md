# Product Requirements Document (PRD)

## NirmataAI Tech Solution

**Version:** 1.0  
**Date:** 2026-07-10  
**Branch:** feat/phase1-public-site  
**Status:** Draft — pending review

---

## 1. Executive Summary

NirmataAI Tech Solution is an AI-first software services and product company. "Nirmata" means *Creator*. The company creates modern digital products that solve real business problems through technology and artificial intelligence.

This PRD defines the requirements for the initial digital presence: a public marketing website and the architectural foundation for future client portals, SaaS products, and internal platforms.

**Primary goals of Phase 1:**

1. Establish credibility and trust with decision-makers.
2. Clearly present services, industries, AI solutions, portfolio, and company culture.
3. Generate qualified leads through consultation booking, contact forms, and newsletter signups.
4. Build a fast, accessible, SEO-optimized, responsive marketing site.
5. Design an architecture that supports future expansion without major redesign.

---

## 2. Vision and Mission

### Vision

To become a globally trusted AI-first software company that helps businesses accelerate growth through intelligent technology solutions.

### Mission

We help startups, small businesses, enterprises, and organizations transform their ideas into scalable digital products by delivering modern websites, web applications, AI solutions, automation systems, cloud applications, and custom software.

Our goal is to become a long-term technology partner rather than just a software vendor.

### Core Values

- Innovation
- Quality
- Transparency
- Client Success
- Security
- Scalability
- Continuous Learning
- Long-term Relationships

---

## 3. Business Goals

The company exists to:

- Build custom websites
- Develop modern web applications
- Build enterprise software
- Develop AI-powered business solutions
- Create SaaS products
- Automate business workflows
- Provide UI/UX design services
- Offer cloud and DevOps solutions
- Build mobile applications
- Provide software maintenance and support
- Become the preferred technology partner for businesses

Long-term, NirmataAI will launch its own SaaS products and AI platforms.

---

## 4. Target Audience

The website must appeal to:

- Startups
- Small Businesses
- Medium Businesses
- Enterprises
- Educational Institutions
- Government Organizations
- NGOs
- Individual Entrepreneurs

**Primary decision-makers:** CTOs, CEOs, founders, product managers, operations heads, procurement teams.

---

## 5. Product Goals

Phase 1 focuses on the public marketing platform. It must:

1. Build credibility.
2. Generate qualified leads.
3. Showcase expertise.
4. Display services.
5. Present case studies.
6. Show project portfolio.
7. Publish blogs.
8. Allow consultation booking.
9. Collect inquiries.
10. Recruit employees.
11. Present company culture.
12. Demonstrate AI capabilities.
13. Convert visitors into long-term clients.

Every page must have a clear call to action (CTA).

---

## 6. Brand Personality

The brand should feel:

- Professional
- Premium
- Modern
- Innovative
- AI-first
- Enterprise-grade
- Trustworthy
- Friendly
- Minimal
- Elegant

Avoid generic agency designs. Create a unique identity through premium animations, strong typography, and modern layouts inspired by — but not copying — companies known for clean design and strong engineering culture.

---

## 7. Scope

### 7.1 In Scope (Phase 1)

**Public Website Pages:**

- Home
- About
- Services
- Industries
- AI Solutions
- Portfolio
- Case Studies
- Pricing
- Blog
- Careers
- Contact
- FAQs
- Privacy Policy
- Terms & Conditions

**Features:**

- AI Chat Assistant
- Consultation Booking
- Contact Forms
- Newsletter Signup
- Search
- SEO Management

**Platform Foundation:**

- Next.js frontend
- NestJS backend scaffolding
- PostgreSQL database with Prisma ORM
- Better Auth integration plan
- Cloudinary storage plan
- Resend email integration plan
- Razorpay payments integration plan
- Sentry monitoring plan

### 7.2 Out of Scope (Phase 1)

- Full admin dashboard UI
- Blog CMS UI
- Client portal
- Project tracking
- CRM/ERP functionality
- Employee portal
- Customer dashboard
- Billing system
- AI automation platform
- Analytics dashboard

These are planned for future phases. Phase 1 must design the architecture to support them.

---

## 8. Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 95 |
| Lighthouse Accessibility | > 95 |
| Lighthouse Best Practices | > 95 |
| Lighthouse SEO | > 95 |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.5s |
| Contact form submissions | Baseline + track |
| Consultation bookings | Baseline + track |
| Newsletter signups | Baseline + track |
| Organic traffic growth | Measure monthly |

---

## 9. Release Criteria

Phase 1 is complete when:

- All public pages are implemented and responsive.
- Core interactive features work (forms, chat assistant, search).
- SEO metadata and structured data are in place.
- Accessibility review passes WCAG AA.
- Performance review exceeds Lighthouse 95 targets.
- Code review is approved.
- Documentation and tests are complete.
- Deployment pipeline to Vercel and Railway is configured.

---

## 10. Assumptions and Dependencies

**Assumptions:**

- Vercel and Railway accounts are available for deployment.
- Cloudinary, Resend, Razorpay, and Sentry accounts will be created before integration.
- Domain and DNS configuration will be handled separately.

**Dependencies:**

- Next.js 15 App Router
- Tailwind CSS 4
- shadcn/ui components
- Framer Motion
- NestJS runtime and CLI
- PostgreSQL database instance
- Prisma ORM

---

## 11. Open Questions

1. Should the blog be statically generated from markdown or managed via a CMS database?
2. Should consultation booking use a third-party scheduler (Calendly, Savvycal) or a custom form?
3. What is the exact pricing model and tiers to display?
4. Which portfolio projects and case studies are available for launch?
5. What is the preferred region for database hosting?

---

## 12. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-07-10 | Product Manager | Initial draft |
