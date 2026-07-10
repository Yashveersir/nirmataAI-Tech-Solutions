# Wireframes and Design System

## NirmataAI Tech Solution

**Version:** 1.0  
**Date:** 2026-07-10  
**Branch:** feat/phase1-public-site

---

## 1. Design Principles

1. **Clarity over decoration.** Every element must serve a purpose.
2. **Premium minimalism.** Generous whitespace, refined typography, and subtle color.
3. **Motion with meaning.** Animations guide attention and confirm interactions.
4. **Accessibility first.** Color, contrast, and focus states meet WCAG AA.
5. **Mobile-first.** Layouts are designed for small screens first and scale up.

---

## 2. Color System

### 2.1 Primary Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary-50` | `#eff6ff` | Light backgrounds |
| `--color-primary-100` | `#dbeafe` | Hover states |
| `--color-primary-500` | `#3b82f6` | Primary actions, links |
| `--color-primary-600` | `#2563eb` | Primary button hover |
| `--color-primary-700` | `#1d4ed8` | Active states |
| `--color-primary-900` | `#1e3a8a` | Headings, emphasis |

### 2.2 Neutral Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--background` | `#ffffff` | `#0a0a0a` | Page background |
| `--foreground` | `#0a0a0a` | `#fafafa` | Primary text |
| `--muted` | `#f5f5f5` | `#171717` | Muted backgrounds |
| `--muted-foreground` | `#737373` | `#a3a3a3` | Secondary text |
| `--border` | `#e5e5e5` | `#262626` | Borders, dividers |
| `--card` | `#ffffff` | `#171717` | Card backgrounds |

### 2.3 Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#22c55e` | Success states |
| `--warning` | `#f59e0b` | Warnings |
| `--destructive` | `#ef4444` | Errors, destructive actions |
| `--info` | `#3b82f6` | Information |

### 2.4 Gradient Accents

- **Hero gradient:** `linear-gradient(135deg, #0a0a0a 0%, #1e3a8a 50%, #3b82f6 100%)`
- **Card glow:** `radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 40%)`

---

## 3. Typography

### 3.1 Font Family

- **Headings:** `Inter` or `Geist` — clean, modern sans-serif.
- **Body:** `Inter` or `Geist` — highly readable.
- **Monospace:** `JetBrains Mono` for code snippets.

### 3.2 Type Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `text-display` | `4.5rem` / `72px` | `1.0` | 700 | Hero headline |
| `text-h1` | `3rem` / `48px` | `1.1` | 700 | Page titles |
| `text-h2` | `2.25rem` / `36px` | `1.2` | 600 | Section headings |
| `text-h3` | `1.5rem` / `24px` | `1.3` | 600 | Subsection headings |
| `text-h4` | `1.25rem` / `20px` | `1.4` | 600 | Card titles |
| `text-body` | `1rem` / `16px` | `1.6` | 400 | Body text |
| `text-large` | `1.125rem` / `18px` | `1.6` | 400 | Lead paragraphs |
| `text-small` | `0.875rem` / `14px` | `1.5` | 400 | Captions, meta |

### 3.3 Typography Patterns

- Headings use `tracking-tight`.
- Body text uses `text-muted-foreground` for secondary content.
- Maximum line length for paragraphs: `65ch`.

---

## 4. Spacing System

Use Tailwind spacing scale with these section defaults:

| Context | Value |
|---------|-------|
| Section padding Y | `py-20 md:py-28 lg:py-32` |
| Container max-width | `max-w-7xl` |
| Container padding X | `px-4 sm:px-6 lg:px-8` |
| Grid gap | `gap-6 md:gap-8 lg:gap-10` |
| Card padding | `p-6 md:p-8` |
| Stack gap | `space-y-4` / `space-y-6` |

---

## 5. Component Library

### 5.1 Buttons

**Primary Button**
- Background: `--color-primary-600`
- Text: white
- Padding: `px-6 py-3`
- Border radius: `rounded-lg`
- Hover: `--color-primary-700` with subtle lift
- Focus: `ring-2 ring-primary-500 ring-offset-2`

**Secondary Button**
- Background: transparent
- Border: `1px solid --border`
- Text: `--foreground`
- Hover: `--muted`

**Ghost Button**
- Background: transparent
- Text: `--foreground`
- Hover: `--muted`

### 5.2 Cards

- Background: `--card`
- Border: `1px solid --border`
- Border radius: `rounded-xl`
- Shadow: `shadow-sm` or `shadow-md` on hover
- Padding: `p-6 md:p-8`

### 5.3 Forms

**Input**
- Background: `--background`
- Border: `1px solid --border`
- Border radius: `rounded-lg`
- Padding: `px-4 py-3`
- Focus: `ring-2 ring-primary-500 border-primary-500`

**Label**
- Font size: `text-sm`
- Font weight: 500
- Color: `--foreground`

**Error Message**
- Color: `--destructive`
- Font size: `text-sm`

### 5.4 Navigation

**Header**
- Height: `h-16 md:h-20`
- Background: `--background/80` with backdrop blur
- Border bottom: `1px solid --border`
- Sticky on scroll

**Mobile Menu**
- Full-screen overlay
- Slide-in animation
- Close button in top right

### 5.5 Chat Widget

- Floating button bottom-right
- Rounded chat window
- Header with title and close
- Message bubbles with clear sender labels
- Input with send button

---

## 6. Page Wireframes

### 6.1 Home Page

```
[Header]
[Hero]
  Headline: "Build Intelligent Digital Products with NirmataAI"
  Subheadline
  Primary CTA: Book Consultation
  Secondary CTA: Explore Services
[Logo Cloud / Trust Bar]
[Services Grid]
  6 service cards
[AI Solutions Teaser]
  Headline + 3 feature cards + CTA
[Portfolio Showcase]
  3 featured projects
[Why Choose Us]
  Values + metrics
[Testimonials]
  2–3 quotes
[Blog Preview]
  3 latest posts
[CTA Section]
  "Ready to build something great?"
[Footer]
```

### 6.2 Services Page

```
[Header]
[Page Hero]
[Services Grid]
  6 detailed cards with icon, title, description, features, CTA
[Process Section]
[CTA]
[Footer]
```

### 6.3 Service Detail Page

```
[Header]
[Hero with icon and title]
[Overview]
[Features list]
[Technologies]
[Benefits]
[FAQ accordion]
[Related case studies]
[CTA]
[Footer]
```

### 6.4 Portfolio Page

```
[Header]
[Page Hero]
[Filter tabs]
[Project grid]
[CTA]
[Footer]
```

### 6.5 Blog Page

```
[Header]
[Page Hero]
[Search + filters]
[Post grid]
[Pagination]
[Newsletter signup]
[Footer]
```

### 6.6 Contact Page

```
[Header]
[Page Hero]
[Two-column layout]
  Left: contact info, social links
  Right: contact form
[FAQ teaser]
[Footer]
```

---

## 7. Animation and Motion

### 7.1 Global Motion

- **Page transitions:** Subtle fade-in on route change.
- **Scroll reveal:** Elements fade in and translate Y on scroll.
- **Stagger:** Lists and grids animate children with staggered delays.

### 7.2 Micro-interactions

- Buttons: `scale(1.02)` and shadow increase on hover.
- Cards: `translateY(-4px)` and shadow increase on hover.
- Links: Underline animation from left to right.
- Focus rings: Smooth ring appearance.

### 7.3 Hero Animation

- Text reveals with staggered fade-in.
- Gradient background may include subtle animated gradient shift.
- CTA buttons fade in last.

### 7.4 Performance

- Use `will-change` sparingly.
- Prefer `transform` and `opacity` for animations.
- Respect `prefers-reduced-motion`.

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Minor adjustments |
| `md` | 768px | Tablet layouts |
| `lg` | 1024px | Desktop layouts |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Extra wide |

### 8.1 Responsive Patterns

- Single column on mobile, multi-column on desktop.
- Navigation collapses to hamburger menu below `md`.
- Hero text scales down on mobile.
- Cards stack vertically on small screens.

---

## 9. Accessibility

- Color contrast ratio >= 4.5:1 for normal text.
- Focus indicators visible on all interactive elements.
- Skip-to-content link at top of page.
- Form labels associated with inputs.
- ARIA labels for icon-only buttons.
- Reduced motion support for all animations.
- Keyboard navigation for chat widget, mobile menu, and accordions.

---

## 10. Asset Guidelines

### 10.1 Images

- Format: WebP with JPEG fallback.
- Hero images: 1920×1080 minimum.
- Thumbnails: 800×600.
- Icons: SVG.
- Logos: SVG.

### 10.2 Icons

- Use Lucide React for UI icons.
- Use simple line-style icons for services.

### 10.3 Illustrations

- Abstract geometric shapes and gradient blobs.
- Avoid generic stock illustrations.
- Maintain consistent color palette.
