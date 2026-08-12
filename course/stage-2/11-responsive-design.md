# Exercise 11 — Make the page responsive

## Goal

Make the homepage work better on both wide and narrow screens.

---

# What does responsive mean?

A responsive website adjusts to different screen sizes.

For example:

```text
Desktop:
[ Card ] [ Card ] [ Card ]

Small screen:
[ Card ]
[ Card ]
[ Card ]
```

We do not need a complicated mobile design yet.

---

# Step 1 — Inspect before changing

Resize the browser window.

Look for problems such as:

- text touching the edge
- navigation not fitting
- cards becoming too narrow
- very large headings
- content overflowing horizontally

Write down the most obvious problem you see.

---

# Ask Codex for a review only

```text
CONTEXT:
This is a small Astro homepage built with components.
I am learning responsive CSS.

TASK:
Review the current homepage CSS for obvious problems on narrow mobile screens.

LIMITS:
Do not modify anything yet.
Do not suggest JavaScript.
Do not install packages.

CHECK:
Give me the three most important responsive issues.
For each issue, tell me which CSS rule or component is involved.
Keep the explanation beginner-friendly.
```

---

# Fix one issue at a time

Do not ask Codex to fix all three at once.

Example:

```text
CONTEXT:
You identified that the service cards do not fit well on narrow screens.

TASK:
Fix only the service-card layout so it works on small screens.

LIMITS:
Only change the CSS required for the service-card layout.
Do not redesign other sections.
Do not install packages.
Do not add JavaScript.

CHECK:
Explain the media query or CSS layout change you used.
Run pnpm build afterwards.
```

Then inspect and test.

Repeat for the next issue only if needed.

---

# Useful concepts you may encounter

## `max-width`

Limits how wide content can become.

## `margin`

Space outside an element.

## `padding`

Space inside an element.

## `display: grid`

A CSS layout system.

## `display: flex`

Another CSS layout system.

## media query

CSS rules that apply only at certain screen sizes.

Example:

```css
@media (max-width: 700px) {
  /* mobile rules */
}
```

You do not need to memorise these.

---

# Test

Try at least:

```text
wide desktop
medium window
narrow mobile-like window
```

Make sure there is no obvious horizontal scrolling.

---

# Commit

Suggested message:

```text
Improve responsive homepage layout
```

---

## Next exercise

➡️ [Exercise 12 — Stage 2 review](12-stage-two-review.md)
