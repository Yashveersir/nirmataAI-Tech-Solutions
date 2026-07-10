# Phase 1 Plan Verification Report

**Documents reviewed:**
- Design spec: `.kimchi/docs/specs/phase1-design.md`
- Implementation plan: `.kimchi/docs/plans/phase1-plan.md`

---

## Verdict

**NEEDS_REVISION**

The plan is well-organized, has concrete file paths, defined type contracts upfront, clear dependency graph, and explicit parallel groups. However, it contains two blocking ambiguities that would force a builder to invent design decisions and one minor inconsistency that affects React 19 compatibility. These should be resolved before the plan is handed to builders.

---

## Build Feasibility

**Assessment:** Largely buildable as-is, with the caveats below.

**Strengths:**
- `src/types/index.ts` (Chunk 1) defines all shared TypeScript interfaces upfront, so later chunks can import concrete types rather than re-derive them.
- Zod schemas for contact and appointment (Chunk 9) are fully spelled out with field-level validation rules.
- Each chunk lists exact file paths under `src/` rather than vague descriptions.
- Dependency graph is explicit (Chunk 1 → Chunk 2 → parallel groups A/B → Chunk 11).
- Parallel-safety flag is included per chunk.

**Concerns:**
- See Issues 1, 2, and 3 — these are gaps where a builder must make a decision that the design doc does not authorize.
- Chunk 10 specifies "focus is trapped inside open panel" but does not state which primitive provides this (likely Radix Dialog via shadcn, but not explicit). Builders will infer it from the shadcn `Dialog` component, so this is acceptable.

---

## Complexity Classification

All eleven chunks are marked **simple**. Verification of each:

| Chunk | Subject | Concurrency / state machines / graph algorithms / subtle ordering? | Classification correct? |
|-------|---------|--------------------------------------------------------------------|--------------------------|
| 1 | Scaffold + layout + SEO | No | simple ✓ |
| 2 | Shared UI + navigation | No | simple ✓ |
| 3 | Home page composition | No | simple ✓ |
| 4 | About page | No | simple ✓ |
| 5 | Services + AI solutions | No | simple ✓ |
| 6 | Portfolio | No | simple ✓ |
| 7 | Blog (search + render) | No — substring/case-insensitive filter is trivial | simple ✓ |
| 8 | Careers + apply form | No | simple ✓ |
| 9 | Forms + server actions + Zod | No — Zod parsing is linear validation | simple ✓ |
| 10 | Chatbot (FAQ matching, focus trap) | No — first-match keyword scan, not state-machine driven | simple ✓ |
| 11 | Tests + integration | No | simple ✓ |

**No misclassifications.** Chatbot (Chunk 10) is the closest to needing "complex" because it has multi-step behavior (match → respond → fallback to lead capture → quick-action routing), but it is implemented as a flat keyword scan with linear control flow, not a state machine. `simple` is correct.

---

## Chunk Scope

Most chunks are well-scoped. Two borderline cases:

1. **Chunk 2 (Shared UI + Navigation)** — 11 shadcn primitives + 7 layout components + `site.ts` data. This is the largest chunk by file count (~20 files) but they are a cohesive set that all pages depend on, so splitting would only create artificial barriers. **Acceptable.**

2. **Chunk 5 (Services Listing + Detail + AI Solutions)** — bundles three distinct pages (`/services`, `/services/[slug]`, `/ai-solutions`). These share UI primitives (`ServiceCard`, `AISolutionCard`) and one data file each, so co-locating is reasonable. **Acceptable, but see Issue 4 below** (JSON-LD for service detail is unstated).

3. **Chunk 9 (Contact + Appointment Forms)** — bundles two forms, two Zod schemas, and two server actions. Splitting schemas into Chunk 1 would be cleaner but the current layout is workable. **Acceptable.**

**No chunk needs splitting.**

---

## Placeholder Scan

| Location | Issue | Severity |
|----------|-------|----------|
| Chunk 7, Behavior | "rich text rendered as safe HTML or Markdown via a simple renderer" — this sentence directly contradicts the next sentence ("Content is stored as HTML-safe strings in `blog.ts` for Phase 1"). A builder must pick one. | **High** |
| Chunk 11, Files | No `lighthouserc.json` or equivalent Lighthouse CI config is listed, but the acceptance criteria require Lighthouse ≥ 95 on all four categories. The criteria cannot be verified without the config. | **High** |
| Chunk 5, Acceptance | "Each detail page has correct metadata and JSON-LD" — JSON-LD is asserted but no helper file or pattern is listed in Chunk 5 (Chunk 7 explicitly mentions `BlogPosting` JSON-LD; services/portfolio do not). | **Medium** |
| Chunk 9, Behavior | "Forms use `useActionState` or `useFormState`" — `useFormState` is deprecated in React 19. The plan's stack is React 19, so only `useActionState` is correct. | **Low** |
| Chunk 1, Architecture | Plan text says "single `apps/web` package" but the file structure uses root-level paths (`/package.json`, `/src/...`) with no `apps/web/` prefix. | **Low** |
| Chunk 2, Footer | "newsletter subscribe input (client-side only, no backend)" — vague. What does the submit button do? Show a toast? Log to console? | **Low** |

---

## Issues

The following must be resolved before the plan can be handed to builders.

### Issue 1 (blocking) — Blog content rendering mechanism is contradictory

**File/chunk:** `phase1-plan.md`, Chunk 7, "Behavior"

The two consecutive sentences contradict each other:
> "content (rich text rendered as safe HTML or Markdown via a simple renderer)"
> "Content is stored as HTML-safe strings in `blog.ts` for Phase 1."

A standard-tier builder will either pick Markdown (introducing a parser dependency not in the tech stack) or raw HTML strings (which then requires hand-escaping by every content author). Either choice is a design decision the plan should make.

**Suggested fix:** Pick one approach and remove the alternative. Recommend "Content is stored as pre-escaped HTML strings in `blog.ts`; rendered with `dangerouslySetInnerHTML` after passing through a sanitizer (e.g., `isomorphic-dompurify`) or, simpler, render only as paragraphs split on `\n\n` since Phase 1 has no rich formatting requirement." If Markdown is chosen, add the renderer dependency (`marked` or `markdown-it`) to the install list in Chunk 1.

### Issue 2 (blocking) — Lighthouse CI acceptance criterion has no config file

**File/chunk:** `phase1-plan.md`, Chunk 11, Files + Acceptance criteria

Chunk 11 lists only `vitest.config.ts`, `playwright.config.ts`, and the three test files. But the design spec requires "Lighthouse: run in CI with budgets" and Chunk 11's acceptance criteria require verifying scores ≥ 95 in four categories. Without a `lighthouserc.json` (or equivalent) and a `lhci` script in `package.json`, a builder cannot verify the criterion.

**Suggested fix:** Add to Chunk 11's Files:
- `.lighthouserc.json` (with budgets for performance, accessibility, best-practices, SEO all at 95)
- Add an `lhci` script to the `package.json` scripts defined in Chunk 1 (or note that it is added in Chunk 11)

### Issue 3 (medium) — JSON-LD for service detail pages is asserted but unstated

**File/chunk:** `phase1-plan.md`, Chunk 5

Acceptance criterion says "Each detail page has correct metadata and JSON-LD" but the Files list does not include any JSON-LD helper, and Behavior says nothing about emitting JSON-LD for services. Chunk 7 explicitly mentions `BlogPosting` JSON-LD but Chunks 5 and 6 do not specify which schema.org types (`Service`, `CreativeWork`, `Organization`, etc.) should appear.

**Suggested fix:** Either (a) state explicitly that only BlogPosting, Organization, and WebSite JSON-LD are emitted in Phase 1, or (b) add a small `src/lib/jsonld.ts` helper to Chunk 1 that all detail pages can reuse, and reference it from Chunks 5, 6, 7.

### Issue 4 (low) — `useFormState` reference is incompatible with React 19

**File/chunk:** `phase1-plan.md`, Chunk 9, Behavior

"Forms use `useActionState` or `useFormState`" — `useFormState` from `react-dom` is deprecated as of React 19 and produces a console warning. The tech stack specifies React 19.

**Suggested fix:** Replace with "Forms use `useActionState` from `react`."

### Issue 5 (low) — Plan architecture text and file structure disagree on package layout

**File/chunk:** `phase1-plan.md`, Architecture section vs File Structure section

Architecture says "single `apps/web` package" but the file tree shows root-level paths (`/package.json`, `/src/app/...`). One of these is wrong.

**Suggested fix:** Remove "single `apps/web` package" from the Architecture section, or move all paths under `apps/web/` consistently. Recommend the former (single root package) because monorepo scaffolding is not in scope and adds boilerplate.

### Issue 6 (low) — Footer newsletter subscribe behavior is unspecified

**File/chunk:** `phase1-plan.md`, Chunk 2, Behavior

"newsletter subscribe input (client-side only, no backend)" — what happens on submit?

**Suggested fix:** Add a single sentence: "On submit, the input shows a success toast (`'Thanks for subscribing!'`) and clears the field. No network call is made in Phase 1."

---

## Decision Log (verifier observations)

These are not issues but worth recording:

- The plan correctly classifies all chunks as simple. The chatbot's FAQ matcher could superficially look state-machine-ish but is implemented as a linear keyword scan; the classification holds.
- Parallel groups A (3,4,5,6) and B (7,8,9,10) are correctly identified as independent. The plan does not falsely serialize work that could be parallelized.
- Type contracts in Chunk 1 prevent the common failure mode of later chunks redefining types and drifting from each other. This is a good pattern.
- Server actions in Chunk 9 correctly separate validation (Zod) from side effects (logging/email), which keeps the `RESEND_API_KEY` extension non-breaking as promised in the design spec.

---

## Recommendation

Resolve Issues 1 and 2 before handing the plan to builders — both will cause rework or unverifiable acceptance criteria. Issues 3-6 can be fixed in the same revision pass with minimal effort. After revision, this plan is likely to receive APPROVED status on a re-verification.
