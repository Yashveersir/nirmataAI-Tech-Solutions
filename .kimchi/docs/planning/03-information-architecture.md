# Information Architecture and Sitemap

## NirmataAI Tech Solution

**Version:** 1.0  
**Date:** 2026-07-10  
**Branch:** feat/phase1-public-site

---

## 1. Information Architecture Overview

The website is organized around four visitor intents:

1. **Evaluate** — Understand what NirmataAI does and whether it is credible.
2. **Explore** — Browse services, AI solutions, industries, portfolio, and case studies.
3. **Convert** — Book a consultation, submit a contact form, subscribe, or apply for a job.
4. **Learn** — Read blog articles, FAQs, and company updates.

Content depth remains shallow (maximum 3 levels) to support fast navigation and strong SEO.

---

## 2. Page Hierarchy

```
/
├── about
├── services
│   ├── web-development
│   ├── ai-solutions
│   ├── custom-software
│   ├── cloud-devops
│   ├── ui-ux-design
│   └── mobile-development
├── industries
│   ├── startups
│   ├── small-business
│   ├── enterprise
│   ├── education
│   ├── healthcare
│   ├── finance
│   └── government
├── ai-solutions
│   ├── ai-chatbots
│   ├── generative-ai
│   ├── rag-applications
│   ├── ai-knowledge-bases
│   ├── ai-customer-support
│   ├── ai-assistants
│   ├── ai-document-processing
│   └── ai-automation
├── portfolio
│   └── [project-slug]
├── case-studies
│   └── [case-study-slug]
├── pricing
├── blog
│   ├── [category]
│   ├── [tag]
│   └── [post-slug]
├── careers
│   └── [job-slug]
├── contact
├── faqs
├── privacy-policy
└── terms-and-conditions
```

---

## 3. URL Structure

| Page | URL | Layout |
|------|-----|--------|
| Home | `/` | Marketing layout |
| About | `/about` | Marketing layout |
| Services | `/services` | Marketing layout |
| Service Detail | `/services/[slug]` | Marketing layout |
| Industries | `/industries` | Marketing layout |
| Industry Detail | `/industries/[slug]` | Marketing layout |
| AI Solutions | `/ai-solutions` | Marketing layout |
| AI Solution Detail | `/ai-solutions/[slug]` | Marketing layout |
| Portfolio | `/portfolio` | Marketing layout |
| Project Detail | `/portfolio/[slug]` | Marketing layout |
| Case Studies | `/case-studies` | Marketing layout |
| Case Study Detail | `/case-studies/[slug]` | Marketing layout |
| Pricing | `/pricing` | Marketing layout |
| Blog | `/blog` | Marketing layout |
| Blog Category | `/blog/category/[slug]` | Marketing layout |
| Blog Tag | `/blog/tag/[slug]` | Marketing layout |
| Blog Post | `/blog/[slug]` | Marketing layout |
| Careers | `/careers` | Marketing layout |
| Job Detail | `/careers/[slug]` | Marketing layout |
| Contact | `/contact` | Marketing layout |
| FAQs | `/faqs` | Marketing layout |
| Privacy Policy | `/privacy-policy` | Marketing layout |
| Terms & Conditions | `/terms-and-conditions` | Marketing layout |

---

## 4. Sitemap

### 4.1 Primary Navigation

```
Home
About
Services
  Web Development
  AI Solutions
  Custom Software
  Cloud & DevOps
  UI/UX Design
  Mobile Development
Industries
AI Solutions
Portfolio
Blog
Careers
Contact
```

### 4.2 Footer Navigation

**Services:**
- Web Development
- AI Solutions
- Custom Software
- Cloud & DevOps
- UI/UX Design
- Mobile Development

**Company:**
- About
- Careers
- Blog
- Contact
- FAQs

**Legal:**
- Privacy Policy
- Terms & Conditions

**Connect:**
- LinkedIn
- GitHub
- Twitter
- YouTube

---

## 5. Content Models

### 5.1 Service

- Title
- Slug
- Short description
- Full description
- Features list
- Technologies list
- Benefits list
- FAQ list
- CTA

### 5.2 AI Solution

- Title
- Slug
- Short description
- Full description
- Use cases
- Technologies
- Benefits
- FAQ
- CTA

### 5.3 Industry

- Title
- Slug
- Description
- Relevant services
- Case studies
- CTA

### 5.4 Project

- Title
- Slug
- Category
- Client name
- Description
- Technologies
- Thumbnail
- Screenshots
- Live URL
- GitHub URL
- Case study link

### 5.5 Case Study

- Title
- Slug
- Client
- Industry
- Services provided
- Challenge
- Solution
- Results
- Technologies
- Testimonial
- Gallery

### 5.6 Blog Post

- Title
- Slug
- Excerpt
- Content
- Category
- Tags
- Featured image
- Author
- Published date
- Updated date
- SEO metadata

### 5.7 Job Opening

- Title
- Slug
- Type
- Location
- Department
- Description
- Requirements
- Responsibilities
- Benefits
- Application form

---

## 6. Metadata Strategy

### 6.1 Page Title Pattern

- Home: `NirmataAI Tech Solution — AI-Powered Software & Web Solutions`
- Page: `{Page Name} | NirmataAI Tech Solution`
- Detail: `{Title} | NirmataAI Tech Solution`
- Blog: `{Title} | NirmataAI Blog`

### 6.2 Description Pattern

- Use unique descriptions under 160 characters.
- Include primary keyword naturally.
- Include value proposition and CTA.

### 6.3 Structured Data

- Organization JSON-LD on all pages.
- WebSite JSON-LD on all pages.
- BlogPosting JSON-LD on blog posts.
- BreadcrumbList JSON-LD on detail pages.
- Service JSON-LD on service pages.

---

## 7. Internal Linking Strategy

- Home links to Services, AI Solutions, Portfolio, About, and Contact.
- Service pages link to related AI solutions and case studies.
- Portfolio items link to case studies where available.
- Blog posts link to related services and other posts.
- Every page links to Contact or Consultation booking.
- Footer provides persistent navigation to all major sections.
