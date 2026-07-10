# System Architecture and Database Design

## NirmataAI Tech Solution

**Version:** 1.0  
**Date:** 2026-07-10  
**Branch:** feat/phase1-public-site

---

## 1. System Architecture Overview

NirmataAI Tech Solution uses a modern decoupled architecture:

- **Frontend:** Next.js 15 App Router deployed on Vercel.
- **Backend API:** NestJS deployed on Railway.
- **Database:** PostgreSQL hosted on Railway.
- **Storage:** Cloudinary for images and documents.
- **Email:** Resend for transactional and notification emails.
- **Payments:** Razorpay for payment collection.
- **Monitoring:** Sentry for error tracking and performance monitoring.
- **Authentication:** Better Auth for future admin and client portal use.

---

## 2. High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Browser                       │
└───────────────────────┬─────────────────────────────────────┘
                        │ HTTPS
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                       Vercel Edge/CDN                        │
│                    Next.js 15 Frontend                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Static Pages │  │ Server Pages │  │ API Routes   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└──────────┬───────────────────────────────┬──────────────────┘
           │                               │
           │ Static assets / ISR           │ API calls
           ▼                               ▼
┌────────────────────┐           ┌─────────────────────────────┐
│   Cloudinary       │           │    Railway                  │
│   (Media storage)  │           │  ┌───────────────────────┐  │
└────────────────────┘           │  │  NestJS API           │  │
                                 │  │  ┌─────────────────┐  │  │
                                 │  │  │  Modules        │  │  │
                                 │  │  │  - Leads        │  │  │
                                 │  │  │  - Blog         │  │  │
                                 │  │  │  - Careers      │  │  │
                                 │  │  │  - Auth         │  │  │
                                 │  │  └─────────────────┘  │  │
                                 │  │         │             │  │
                                 │  │         ▼             │  │
                                 │  │  ┌─────────────────┐  │  │
                                 │  │  │  Prisma ORM     │  │  │
                                 │  │  └─────────────────┘  │  │
                                 │  │         │             │  │
                                 │  │         ▼             │  │
                                 │  │  ┌─────────────────┐  │  │
                                 │  │  │  PostgreSQL     │  │  │
                                 │  │  └─────────────────┘  │  │
                                 │  └───────────────────────┘  │
└────────────────────────────────┴─────────────────────────────┘
           │                               │
           ▼                               ▼
    ┌─────────────┐              ┌─────────────────┐
    │   Resend    │              │     Sentry      │
    │   (Email)   │              │  (Monitoring)   │
    └─────────────┘              └─────────────────┘
           ▼
    ┌─────────────┐
    │  Razorpay   │
    │ (Payments)  │
    └─────────────┘
```

---

## 3. Frontend Architecture

### 3.1 Next.js App Router Structure

- **Route Groups:** Use `(marketing)` for public pages and `(admin)` for future admin pages.
- **Rendering:** Prefer SSG/ISR for marketing pages. Use SSR only when data must be fresh.
- **Data Fetching:** Server components fetch from NestJS API or read from database directly via Prisma for marketing pages if co-located.
- **Client Components:** Used for interactive elements only (forms, chat, mobile menu).

### 3.2 State Management

- Server state: Next.js server components + API routes.
- Client state: React hooks for local UI state.
- Form state: React Hook Form (future) or native form actions.

### 3.3 Component Architecture

- **Layout components:** Header, Footer, Container, Section.
- **UI components:** shadcn/ui base + custom variants.
- **Feature components:** ServiceCard, ProjectCard, BlogCard, TestimonialCard.
- **Page sections:** Hero, FeaturesGrid, CTASection, FAQAccordion.

### 3.4 Styling

- Tailwind CSS 4 with CSS variables.
- shadcn/ui design tokens.
- Dark mode support (future).

---

## 4. Backend Architecture

### 4.1 NestJS Modules

| Module | Responsibility |
|--------|---------------|
| `HealthModule` | Health checks and status |
| `LeadsModule` | Contact forms, consultations, newsletter |
| `BlogModule` | Blog posts, categories, tags |
| `CareersModule` | Jobs and applications |
| `AuthModule` | Authentication with Better Auth |
| `UsersModule` | User management |
| `MediaModule` | Cloudinary upload and management |
| `EmailModule` | Resend email sending |
| `PaymentsModule` | Razorpay integration |
| `AnalyticsModule` | Basic event tracking |

### 4.2 Layered Architecture

- **Controllers:** Handle HTTP requests and responses.
- **Services:** Contain business logic.
- **Repositories:** Abstract database access via Prisma.
- **DTOs:** Define input validation with Zod or class-validator.
- **Guards:** Protect routes with authentication/authorization.
- **Filters:** Global exception handling.
- **Interceptors:** Logging, transformation, caching.

### 4.3 API Communication

- RESTful JSON API.
- OpenAPI/Swagger documentation.
- Versioned API (`/api/v1/...`).

---

## 5. Database Design

### 5.1 Entity Relationship Diagram

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│    User     │       │    Lead     │       │Newsletter   │
│─────────────│       │─────────────│       │Subscriber   │
│ id          │       │ id          │       │─────────────│
│ email       │       │ name        │       │ id          │
│ name        │       │ email       │       │ email       │
│ role        │       │ phone       │       │ status      │
│ passwordHash│       │ company     │       │ subscribedAt│
│ createdAt   │       │ service     │       └─────────────┘
└─────────────┘       │ budget      │
                      │ message     │
┌─────────────┐       │ type        │       ┌─────────────┐
│  BlogPost   │◄──────│ createdAt   │       │Consultation │
│─────────────│       └─────────────┘       │─────────────│
│ id          │                             │ id          │
│ title       │                             │ leadId      │
│ slug        │                             │ preferredAt │
│ excerpt     │                             │ topic       │
│ content     │                             │ notes       │
│ featuredImg │                             └─────────────┘
│ publishedAt │
│ status      │
│ authorId    │───┐
│ categoryId  │───┼──┐
└─────────────┘   │  │
                  │  │    ┌─────────────┐
                  │  └───►│ BlogCategory│
                  │       │─────────────│
                  │       │ id          │
                  │       │ name        │
                  │       │ slug        │
                  │       └─────────────┘
                  │
                  ▼
            ┌─────────────┐
            │    Team     │
            │   Member    │
            │─────────────│
            │ id          │
            │ userId      │
            │ role        │
            │ bio         │
            │ avatar      │
            └─────────────┘

┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│    Job      │       │JobApplication│      │  Project    │
│─────────────│       │─────────────│       │─────────────│
│ id          │◄──────│ id          │       │ id          │
│ title       │       │ jobId       │       │ title       │
│ slug        │       │ name        │       │ slug        │
│ type        │       │ email       │       │ category    │
│ location    │       │ resumeUrl   │       │ description │
│ department  │       │ coverLetter │       │ thumbnail   │
│ description │       │ status      │       │ technologies│
│ requirements│       │ appliedAt   │       │ liveUrl     │
│ responsibilities      └─────────────┘       │ githubUrl   │
│ benefits    │                             │ caseStudyId │
│ isOpen      │                             └──────┬──────┘
└─────────────┘                                    │
                                                   │
                                                   ▼
                                            ┌─────────────┐
                                            │  CaseStudy  │
                                            │─────────────│
                                            │ id          │
                                            │ projectId   │
                                            │ client      │
                                            │ industry    │
                                            │ challenge   │
                                            │ solution    │
                                            │ results     │
                                            │ testimonial │
                                            └─────────────┘
```

### 5.2 Core Tables

#### User

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| email | String unique | |
| name | String | |
| role | Enum | ADMIN, AUTHOR, EDITOR |
| passwordHash | String | For Better Auth |
| emailVerified | Boolean | |
| createdAt | DateTime | |
| updatedAt | DateTime | |

#### Lead

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| name | String | |
| email | String | |
| phone | String nullable | |
| company | String nullable | |
| serviceInterest | String nullable | |
| budgetRange | String nullable | |
| message | Text | |
| type | Enum | CONTACT, CONSULTATION |
| status | Enum | NEW, CONTACTED, QUALIFIED, CLOSED |
| createdAt | DateTime | |

#### NewsletterSubscriber

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| email | String unique | |
| status | Enum | ACTIVE, UNSUBSCRIBED |
| subscribedAt | DateTime | |

#### BlogPost

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| title | String | |
| slug | String unique | |
| excerpt | String | |
| content | Text | Markdown/HTML |
| featuredImage | String nullable | Cloudinary URL |
| publishedAt | DateTime | |
| updatedAt | DateTime | |
| status | Enum | DRAFT, PUBLISHED |
| authorId | UUID FK | |
| categoryId | UUID FK | |

#### BlogCategory

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| name | String | |
| slug | String unique | |

#### BlogTag

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| name | String | |
| slug | String unique | |

#### BlogPostTag (junction)

| Field | Type | Notes |
|-------|------|-------|
| postId | UUID FK | |
| tagId | UUID FK | |

#### Job

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| title | String | |
| slug | String unique | |
| type | Enum | FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP |
| location | String | |
| department | String | |
| description | Text | |
| requirements | Text[] | |
| responsibilities | Text[] | |
| benefits | Text[] | |
| isOpen | Boolean | |
| createdAt | DateTime | |

#### JobApplication

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| jobId | UUID FK | |
| name | String | |
| email | String | |
| phone | String nullable | |
| resumeUrl | String | Cloudinary URL |
| coverLetter | Text nullable | |
| status | Enum | NEW, REVIEWED, SHORTLISTED, REJECTED, HIRED |
| appliedAt | DateTime | |

#### Project

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| title | String | |
| slug | String unique | |
| category | String | |
| clientName | String nullable | |
| description | Text | |
| technologies | String[] | |
| thumbnail | String | Cloudinary URL |
| screenshots | String[] | Cloudinary URLs |
| liveUrl | String nullable | |
| githubUrl | String nullable | |
| caseStudyId | UUID FK nullable | |

#### CaseStudy

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| projectId | UUID FK | |
| client | String | |
| industry | String | |
| challenge | Text | |
| solution | Text | |
| results | Text | |
| testimonialQuote | Text nullable | |
| testimonialAuthor | String nullable | |
| testimonialRole | String nullable | |

#### Testimonial

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| quote | Text | |
| author | String | |
| role | String | |
| company | String | |
| avatar | String nullable | |

#### TeamMember

| Field | Type | Notes |
|-------|------|-------|
| id | UUID PK | |
| userId | UUID FK nullable | |
| name | String | |
| role | String | |
| bio | Text | |
| avatar | String nullable | |
| linkedin | String nullable | |
| github | String nullable | |
| twitter | String nullable | |

---

## 6. Data Flow

### 6.1 Contact Form Submission

1. User fills contact form on Next.js page.
2. Client-side validation via Zod.
3. Form submitted to Next.js API route or directly to NestJS API.
4. Server validates input.
5. Lead record created in PostgreSQL.
6. Resend sends notification email to NirmataAI team.
7. Resend sends acknowledgment email to user.
8. Sentry logs success or failure.

### 6.2 Blog Post Rendering

1. Build process fetches published blog posts from API/database.
2. Static pages generated for each post at build time.
3. ISR revalidates posts periodically or on publish.
4. Blog detail page renders content with proper SEO metadata and JSON-LD.

### 6.3 Job Application

1. User views job detail page.
2. User submits application with resume upload.
3. Resume uploaded to Cloudinary.
4. Application record created in PostgreSQL.
5. HR receives notification email.
6. Applicant receives acknowledgment email.

---

## 7. Security Considerations

- All API endpoints validate and sanitize input.
- Rate limiting on form submissions.
- Honeypot fields on public forms.
- CSRF protection for state-changing operations.
- Secure headers via Next.js and NestJS middleware.
- Authentication handled by Better Auth with secure session management.
- Database connections encrypted (SSL).
- File uploads restricted to safe formats and sizes.

---

## 8. Scalability Considerations

- Static generation reduces server load.
- Edge caching on Vercel CDN.
- Database connection pooling via Prisma.
- Railway horizontal scaling for NestJS API.
- Cloudinary handles media delivery and optimization.
- Sentry sampling to control monitoring overhead.
