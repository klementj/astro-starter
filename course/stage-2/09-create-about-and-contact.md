# Exercise 9 — Create About and Contact sections

## Goal

Add two more reusable homepage sections.

You will create:

```text
AboutSection.astro
ContactSection.astro
```

---

# Temporary content

Use original placeholder content.

## About

Heading:

```text
Om rådgivningen
```

Paragraph:

```text
Rådgivningen hjælper med at skabe struktur, forståelse og overblik i komplekse sociale sager.
```

## Contact

Heading:

```text
Har du brug for hjælp?
```

Paragraph:

```text
Kontakt os for en indledende samtale om din situation.
```

Link text:

```text
Kontakt
```

---

# Ask Codex

```text
CONTEXT:
This Astro homepage already uses Header, Hero, ServicesSection and Footer.
I am learning to build a page from small reusable components.

TASK:
Create:
- src/components/AboutSection.astro
- src/components/ContactSection.astro

Use the provided temporary content.

Add both sections to the homepage in this order:

Header
Hero
ServicesSection
AboutSection
ContactSection
Footer

LIMITS:
Do not install packages.
Do not add JavaScript.
Do not copy text from any reference website.
Keep styling simple and consistent with the existing page.

CHECK:
Tell me which files changed.
Run pnpm build afterwards.
Explain how index.astro is becoming simpler by using components.
```

---

# Inspect `index.astro`

It should now be easier to understand.

You should be able to look at the component names and understand the homepage structure without reading every component's internal code.

---

# Checkpoint

Write the homepage structure in order:

```text
1.
2.
3.
4.
5.
6.
```

---

# Commit

Suggested message:

```text
Add About and Contact sections
```

---

## Next exercise

➡️ [Exercise 10 — Navigation and page structure](10-navigation-and-page-structure.md)
