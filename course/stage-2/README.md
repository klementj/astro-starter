# Stage 2 — Build the website with Astro components

In Stage 1, you learned how to work safely with the project.

You have already used:

- Astro
- the terminal
- Git
- commits
- diffs
- Codex
- CSS
- Markdown

In Stage 2, you will begin turning the Astro starter page into the structure of a real website.

The focus is **Astro components and page structure**.

We are **not** yet creating automatic pages from Markdown. That comes later.

---

# What you will build

By the end of this stage, the homepage will have a simple structure like:

```text
Header
  ↓
Hero
  ↓
Services
  ↓
About
  ↓
Contact
  ↓
Footer
```

The exact design does not need to match the final reference website yet.

First we build a clean and understandable structure.

Then we can improve the styling.

---

# Important idea

A component is a reusable piece of a webpage.

For example:

```text
Header.astro
Hero.astro
ServiceCard.astro
AboutSection.astro
ContactSection.astro
Footer.astro
```

The homepage can use these pieces together:

```astro
<Header />
<Hero />
<Services />
<AboutSection />
<ContactSection />
<Footer />
```

You do not need to memorise this syntax.

The important idea is:

> Instead of putting the whole website in one large file, we divide it into understandable pieces.

---

# Working rule

Continue using the workflow from Stage 1:

```text
WORKING WEBSITE
       ↓
    COMMIT
       ↓
 SMALL CHANGE
       ↓
     DIFF
       ↓
     TEST
       ↓
    COMMIT
```

When Codex is involved, keep the tasks small.

A useful instruction is:

```text
Do not install packages.
Do not refactor unrelated files.
Make the smallest change necessary.
Tell me which files you changed.
Run pnpm build afterwards.
```

---

# Exercises

Complete the exercises in order:

1. [Prepare the starter project](01-prepare-the-starter-project.md)
2. [Create a simple site shell](02-create-a-site-shell.md)
3. [Create the Header component](03-create-the-header.md)
4. [Create the Hero component](04-create-the-hero.md)
5. [Create the Footer component](05-create-the-footer.md)
6. [Create the first ServiceCard](06-create-a-service-card.md)
7. [Learn Astro props](07-use-props-for-service-cards.md)
8. [Create the Services section](08-create-the-services-section.md)
9. [Create About and Contact sections](09-create-about-and-contact.md)
10. [Improve navigation and page structure](10-navigation-and-page-structure.md)
11. [Make the page responsive](11-responsive-design.md)
12. [Review accessibility and Stage 2](12-stage-two-review.md)

---

# What we are deliberately not doing yet

Do not add these unless your instructor asks you to:

- React
- Vue
- Svelte
- Tailwind
- a CMS
- a database
- server-side code
- external component libraries
- content collections
- dynamic routes

The project should stay simple.

Stage 3 will introduce Markdown content and automatic page generation.

---

Start here:

➡️ [Exercise 1 — Prepare the starter project](01-prepare-the-starter-project.md)
