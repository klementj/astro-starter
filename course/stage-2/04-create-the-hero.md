# Exercise 4 — Create the Hero component

## Goal

Create the large introductory section at the top of the homepage.

This type of section is often called a **hero**.

---

# What is a hero section?

A hero is usually the first major content section visitors see.

It often contains:

- the main heading
- a short explanation
- an important action
- sometimes an image

For now, we will keep ours simple.

---

# Use original placeholder copy

Do not copy text from the reference website.

Use this temporary content:

```text
Heading:
Socialrådgivning med mennesket i centrum

Text:
Få hjælp til at skabe overblik over din sag og dine muligheder.

Button:
Kontakt
```

This text can be replaced later with approved final content.

---

# Ask Codex

```text
CONTEXT:
This is a small Astro website.
It already has a Header component.
I am learning how to divide a homepage into components.

TASK:
Create:

src/components/Hero.astro

The Hero should contain:
- the heading "Socialrådgivning med mennesket i centrum"
- the paragraph "Få hjælp til at skabe overblik over din sag og dine muligheder."
- a link styled like a simple button with the text "Kontakt"

Use the Hero component on the homepage.

LIMITS:
Do not add an image yet.
Do not install packages.
Do not add JavaScript.
Keep the styling simple.
Do not modify the Header component.

CHECK:
Tell me which files changed.
Explain why Hero is a separate component.
Run pnpm build afterwards.
```

---

# Inspect the structure

The homepage should now conceptually look like:

```text
Header
  ↓
Hero
  ↓
temporary remaining content
  ↓
Footer
```

---

# CSS

If Codex adds simple CSS, inspect it.

Try to identify:

```text
padding
font-size
max-width
```

Ask Codex to explain one property if you do not understand it.

---

# Checkpoint

Answer:

```text
A hero section is:

The Hero component is stored in:

Why might it be useful to keep Hero separate from Header?
```

---

# Commit

Suggested message:

```text
Create Hero component
```

---

## Next exercise

➡️ [Exercise 5 — Create the Footer component](05-create-the-footer.md)
