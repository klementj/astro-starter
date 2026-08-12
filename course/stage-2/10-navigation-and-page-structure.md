# Exercise 10 — Improve navigation and page structure

## Goal

Make the page structure and navigation more useful without adding complex JavaScript.

---

# Step 1 — Inspect the current navigation

Open:

```text
src/components/Header.astro
```

Look at the navigation links.

They may currently point to places that do not exist.

For now, we can link homepage navigation items to sections on the same page.

For example:

```text
#ydelser
#om
#kontakt
```

This type of link points to an element with a matching `id`.

---

# Ask Codex to explain anchor links

```text
I am learning HTML and Astro.

Do not modify anything yet.

Explain how a navigation link like:

href="#kontakt"

can jump to a section like:

<section id="kontakt">

Explain it in beginner-friendly language.
```

---

# Ask Codex to connect the navigation

```text
CONTEXT:
This Astro homepage has Header, Hero, ServicesSection, AboutSection, ContactSection and Footer components.

TASK:
Make the homepage navigation work using simple same-page anchor links.

Use:
Forside -> /
Ydelser -> #ydelser
Om -> #om
Kontakt -> #kontakt

Add the necessary ids to the relevant sections.

LIMITS:
Do not add JavaScript.
Do not create a mobile menu yet.
Do not install packages.
Do not create new pages.
Do not redesign unrelated sections.

CHECK:
Tell me which files changed.
Explain how the links and ids connect.
Run pnpm build afterwards.
```

---

# Test the links

Click:

```text
Ydelser
Om
Kontakt
```

Do they move to the correct section?

---

# Optional small improvement

If the jumping feels abrupt, you may ask Codex:

```text
Can this project use CSS scroll-behavior: smooth for same-page anchor links?

Explain where you would add it.
Do not modify anything yet.
```

Only implement it if you understand the proposed change.

---

# Checkpoint

Complete:

```text
href="#kontakt" means:

id="kontakt" means:

They work together by:
```

---

# Commit

Suggested message:

```text
Connect homepage navigation
```

---

## Next exercise

➡️ [Exercise 11 — Responsive design](11-responsive-design.md)
