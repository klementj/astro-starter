# Exercise 3 — Create the Header component

## Goal

Move the header into its own Astro component.

This is your first important reusable site component.

---

# What is a component?

A component is a piece of a webpage stored in its own file.

Instead of keeping this:

```text
homepage
├── header code
├── main code
└── footer code
```

all in one large file, we can create:

```text
src/components/Header.astro
```

and then use the component from the homepage.

---

# Ask Codex to explain the plan first

```text
I am learning Astro components.

Do not modify anything yet.

Explain how we can move the existing homepage header into:

src/components/Header.astro

Then explain how index.astro can use that component.

Keep the explanation beginner-friendly.
```

Read the explanation.

---

# Ask Codex to create the component

```text
CONTEXT:
This is a small Astro website.
The homepage currently contains a simple header directly inside index.astro.
I am learning Astro components.

TASK:
Move the existing header into a new component:

src/components/Header.astro

Then use Header.astro from the homepage.

Inside the header, include:
- a simple text site name
- a navigation area

Use these temporary navigation labels:
- Forside
- Ydelser
- Om
- Kontakt

LIMITS:
Do not add complex styling.
Do not install packages.
Do not add JavaScript.
Do not create mobile navigation yet.
Keep the change focused on the header.

CHECK:
Tell me which files changed.
Explain how the homepage uses the Header component.
Run pnpm build afterwards.
```

---

# Inspect the diff

You should expect approximately:

```text
NEW:
src/components/Header.astro

CHANGED:
src/pages/index.astro
```

There may be a small related layout/style change if necessary.

If Codex changes many unrelated files, stop and inspect why.

---

# Important idea

The homepage now **uses** the Header component.

Conceptually:

```text
index.astro
    ↓
Header.astro
```

The Header code does not need to be copied into every page later.

---

# Checkpoint

Complete:

```text
A component is:

My Header component is stored in:

The homepage uses the component by:
```

---

# Commit

Suggested message:

```text
Create Header component
```

---

## Next exercise

➡️ [Exercise 4 — Create the Hero component](04-create-the-hero.md)
