# API Design and Folder Structure

## NirmataAI Tech Solution

**Version:** 1.0  
**Date:** 2026-07-10  
**Branch:** feat/phase1-public-site

---

## 1. API Design Overview

The API follows RESTful principles with consistent conventions:

- Base URL: `https://api.nirmataai.example/v1`
- Content-Type: `application/json`
- Authentication: Bearer token for protected routes (admin scope)
- Response envelope: `{ data, meta, error }` where applicable
- HTTP status codes used correctly

### 1.1 Response Envelope

**Success:**

```json
{
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 42
  }
}
```

**Error:**

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [ ... ]
  }
}
```

---

## 2. API Endpoints

### 2.1 Health

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/health` | Health check | No |

### 2.2 Leads

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/leads` | Submit a contact or consultation lead | No |
| GET | `/leads` | List all leads | Admin |
| GET | `/leads/:id` | Get a lead | Admin |
| PATCH | `/leads/:id` | Update lead status | Admin |
| DELETE | `/leads/:id` | Delete a lead | Admin |

**POST /leads request body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1 555 010 2024",
  "company": "Example Inc",
  "serviceInterest": "ai-solutions",
  "budgetRange": "10k-25k",
  "message": "We need an AI chatbot for customer support.",
  "type": "CONTACT"
}
```

### 2.3 Consultations

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/consultations` | Book a consultation | No |
| GET | `/consultations` | List consultations | Admin |
| GET | `/consultations/:id` | Get consultation | Admin |
| PATCH | `/consultations/:id` | Update status | Admin |

**POST /consultations request body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1 555 010 2024",
  "company": "Example Inc",
  "topic": "ai-chatbot",
  "preferredDate": "2026-07-20",
  "preferredTime": "10:00",
  "notes": "Prefer morning IST."
}
```

### 2.4 Newsletter

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/newsletter/subscribe` | Subscribe to newsletter | No |
| POST | `/newsletter/unsubscribe` | Unsubscribe | No |
| GET | `/newsletter/subscribers` | List subscribers | Admin |

**POST /newsletter/subscribe request body:**

```json
{
  "email": "jane@example.com"
}
```

### 2.5 Blog

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/blog/posts` | List published posts | No |
| GET | `/blog/posts/:slug` | Get a post by slug | No |
| GET | `/blog/categories` | List categories | No |
| GET | `/blog/tags` | List tags | No |
| POST | `/blog/posts` | Create a post | Admin |
| PATCH | `/blog/posts/:id` | Update a post | Admin |
| DELETE | `/blog/posts/:id` | Delete a post | Admin |

**GET /blog/posts query params:**

- `page`: number, default 1
- `limit`: number, default 10
- `category`: string
- `tag`: string
- `q`: search term

### 2.6 Careers

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/careers/jobs` | List open jobs | No |
| GET | `/careers/jobs/:slug` | Get job details | No |
| POST | `/careers/applications` | Submit application | No |
| GET | `/careers/applications` | List applications | Admin |
| GET | `/careers/applications/:id` | Get application | Admin |
| PATCH | `/careers/applications/:id` | Update status | Admin |

### 2.7 Projects and Case Studies

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/portfolio/projects` | List projects | No |
| GET | `/portfolio/projects/:slug` | Get project | No |
| GET | `/case-studies` | List case studies | No |
| GET | `/case-studies/:slug` | Get case study | No |

### 2.8 Team and Testimonials

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/team` | List team members | No |
| GET | `/testimonials` | List testimonials | No |

### 2.9 Admin

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/admin/dashboard` | Dashboard stats | Admin |
| GET | `/admin/analytics` | Analytics data | Admin |

### 2.10 Upload

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/upload/image` | Upload image to Cloudinary | Admin |
| POST | `/upload/document` | Upload document to Cloudinary | Admin |

---

## 3. Validation

All request bodies validated with Zod schemas.

Example lead schema:

```typescript
import { z } from "zod";

export const createLeadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  company: z.string().max(100).optional(),
  serviceInterest: z.string().max(50).optional(),
  budgetRange: z.string().max(50).optional(),
  message: z.string().min(10).max(5000),
  type: z.enum(["CONTACT", "CONSULTATION"]),
});

export type CreateLeadDto = z.infer<typeof createLeadSchema>;
```

---

## 4. Folder Structure

### 4.1 Frontend (Next.js)

```
/
├── .kimchi/
│   └── docs/
│       └── planning/           # Planning documents
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   └── projects/
│   └── og-default.png
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx        # Home
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   ├── industries/
│   │   │   ├── ai-solutions/
│   │   │   ├── portfolio/
│   │   │   ├── case-studies/
│   │   │   ├── pricing/
│   │   │   ├── blog/
│   │   │   ├── careers/
│   │   │   ├── contact/
│   │   │   ├── faqs/
│   │   │   ├── privacy-policy/
│   │   │   └── terms-and-conditions/
│   │   ├── (admin)/            # Future admin portal
│   │   ├── api/                # Next.js API routes
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── sections/           # Page section components
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── AI SolutionsTeaser.tsx
│   │   │   ├── PortfolioShowcase.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── FAQAccordion.tsx
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ConsultationForm.tsx
│   │   │   ├── NewsletterForm.tsx
│   │   │   └── JobApplicationForm.tsx
│   │   ├── cards/
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   ├── JobCard.tsx
│   │   │   └── TestimonialCard.tsx
│   │   └── chat/
│   │       ├── ChatWidget.tsx
│   │       └── ChatMessage.tsx
│   ├── data/
│   │   ├── site.ts
│   │   ├── services.ts
│   │   ├── ai-solutions.ts
│   │   ├── industries.ts
│   │   ├── projects.ts
│   │   ├── case-studies.ts
│   │   ├── team.ts
│   │   ├── testimonials.ts
│   │   ├── faqs.ts
│   │   └── navigation.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── metadata.ts
│   │   ├── api.ts
│   │   ├── validation.ts
│   │   └── constants.ts
│   ├── types/
│   │   └── index.ts
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   └── use-scroll.ts
│   └── styles/
│       └── animations.ts
├── tests/
│   ├── unit/
│   └── e2e/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 4.2 Backend (NestJS)

```
api/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── common/
│   │   ├── decorators/
│   │   ├── filters/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── pipes/
│   │   └── utils/
│   ├── config/
│   │   ├── database.config.ts
│   │   ├── cloudinary.config.ts
│   │   ├── resend.config.ts
│   │   ├── razorpay.config.ts
│   │   └── sentry.config.ts
│   ├── modules/
│   │   ├── health/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── leads/
│   │   ├── consultations/
│   │   ├── newsletter/
│   │   ├── blog/
│   │   ├── careers/
│   │   ├── portfolio/
│   │   ├── case-studies/
│   │   ├── team/
│   │   ├── testimonials/
│   │   ├── upload/
│   │   ├── email/
│   │   ├── payments/
│   │   └── analytics/
│   └── prisma/
│       ├── schema.prisma
│       ├── migrations/
│       └── seed.ts
├── test/
│   ├── unit/
│   └── e2e/
├── nest-cli.json
├── tsconfig.json
└── package.json
```

### 4.3 Module Structure (NestJS)

Each module follows this pattern:

```
modules/{name}/
├── {name}.module.ts
├── {name}.controller.ts
├── {name}.service.ts
├── {name}.repository.ts
├── dto/
│   ├── create-{name}.dto.ts
│   └── update-{name}.dto.ts
├── entities/
│   └── {name}.entity.ts
└── tests/
    ├── {name}.service.spec.ts
    └── {name}.controller.spec.ts
```

---

## 5. Naming Conventions

### 5.1 Files

- Components: PascalCase (`ContactForm.tsx`)
- Hooks: camelCase with `use` prefix (`use-mobile.ts`)
- Utilities: camelCase (`metadata.ts`)
- API routes: kebab-case (`[case-study-slug]`)
- Constants: UPPER_SNAKE_CASE in `constants.ts`

### 5.2 Variables and Functions

- Variables/functions: camelCase
- Components: PascalCase
- Constants: UPPER_SNAKE_CASE
- Types/interfaces: PascalCase
- Enums: PascalCase, members UPPER_SNAKE_CASE

### 5.3 CSS Classes

- Tailwind utility classes.
- Custom classes use kebab-case.
- CSS variables use kebab-case with `--` prefix.

---

## 6. Environment Variables

### 6.1 Frontend

```env
NEXT_PUBLIC_SITE_URL=https://www.nirmataai.example
NEXT_PUBLIC_SITE_NAME=NirmataAI Tech Solution
NEXT_PUBLIC_API_URL=https://api.nirmataai.example/v1
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_SENTRY_DSN=
```

### 6.2 Backend

```env
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://...
JWT_SECRET=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
SENTRY_DSN=
```
