# Exercise 5 — Create the Footer component

## Goal

Move the footer into its own Astro component.

---

# Footer content

Use temporary/example information only.

For example:

```text
Socialrådgivning
kontakt@example.dk
+45 12 34 56 78
```

Do not use real personal information unless it has been approved for the project.

---

# Ask Codex

```text
CONTEXT:
This Astro homepage already uses Header and Hero components.
The footer is still simple or written directly in the homepage.
I am learning reusable components.

TASK:
Create:

src/components/Footer.astro

The footer should contain temporary example contact information:
- Socialrådgivning
- kontakt@example.dk
- +45 12 34 56 78

Then use Footer.astro on the homepage.

LIMITS:
Do not install packages.
Do not add JavaScript.
Do not redesign Header or Hero.
Keep the styling simple.

CHECK:
Tell me which files changed.
Explain how Footer.astro is reused from index.astro.
Run pnpm build afterwards.
```

---

# Inspect

Expected structure:

```text
src/components/
├── Header.astro
├── Hero.astro
└── Footer.astro
```

The homepage should contain very little footer-specific markup now.

---

# Important idea

The homepage is becoming an **assembly of components**.

Instead of one large file:

```text
index.astro
[hundreds of lines]
```

we want something easier to understand:

```text
index.astro

Header
Hero
...
Footer
```

---

# Checkpoint

Open `index.astro`.

Can you identify where these are used?

```text
Header
Hero
Footer
```

You do not need to explain every line.

---

# Commit

Suggested message:

```text
Create Footer component
```

---

## Next exercise

➡️ [Exercise 6 — Create a ServiceCard](06-create-a-service-card.md)
