# Exercise 12 — Accessibility review and Stage 2 review

You have reached the end of Stage 2.

Before moving to Markdown content and automatic page generation, review the homepage.

---

# Part 1 — Ask Codex for an accessibility review

Use Codex as an **inspector**, not a programmer.

```text
CONTEXT:
This is a small static Astro homepage.
I am learning web development.

TASK:
Review the current homepage for obvious accessibility and semantic HTML problems.

LIMITS:
Do not modify any files.
Do not install packages.
Focus only on issues a beginner can reasonably understand and fix.

CHECK:
Give me at most five issues.
Order them from most important to least important.
For each one:
- explain the problem
- identify the relevant component
- explain the smallest possible fix
```

Read the review.

---

# Part 2 — Fix only important problems

If Codex finds something important, fix one issue at a time.

Example:

```text
TASK:
Fix only the missing accessible label you identified in Header.astro.

LIMITS:
Do not modify unrelated components.
Do not redesign the header.

CHECK:
Explain the change and run pnpm build.
```

Do not chase tiny perfection issues.

The goal is to learn the process.

---

# Part 3 — Practical review

You should now have components similar to:

```text
src/components/
├── Header.astro
├── Hero.astro
├── ServiceCard.astro
├── ServicesSection.astro
├── AboutSection.astro
├── ContactSection.astro
└── Footer.astro
```

Your exact project may differ slightly.

That is okay.

---

# Explain these concepts

## Component

```text
A component is:
```

## Reusable component

```text
A reusable component is useful because:
```

## Prop

```text
A prop is:
```

## Semantic HTML

```text
Semantic HTML means:
```

## Responsive design

```text
Responsive design means:
```

---

# Draw the homepage

Without opening `index.astro`, try to write the homepage structure from memory:

```text
Header
...
...
...
Footer
```

Then open `index.astro` and compare.

---

# Important Stage 2 mental model

You should now understand this:

```text
index.astro
    │
    ├── Header.astro
    ├── Hero.astro
    ├── ServicesSection.astro
    │       └── ServiceCard.astro
    ├── AboutSection.astro
    ├── ContactSection.astro
    └── Footer.astro
```

The page is built from smaller pieces.

---

# Build check

Run:

```sh
pnpm build
```

The build should succeed.

---

# Final Stage 2 commit

Suggested message:

```text
Complete Stage 2 component structure
```

---

# Stage 2 complete

You now have a homepage built from Astro components.

In Stage 3, you will learn how to separate **content** from **design**.

Instead of writing every service directly into Astro components, we will begin working toward:

```text
Markdown files
      ↓
Astro content collection
      ↓
one page template
      ↓
many generated service pages
```

That is where the project becomes a true content-driven static site.
