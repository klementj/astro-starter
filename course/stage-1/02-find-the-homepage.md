# Exercise 2 — Find the homepage

## Goal

Find the file that controls the homepage.

For this exercise, Codex is allowed to **inspect**, but not change, the project.

---

## Ask Codex

Use this prompt:

```text
I am learning Astro and I am a beginner.

Inspect this project.

Do not modify any files.

Tell me:

1. Which file controls the homepage?
2. Which important folders should I know about right now?
3. What is the purpose of the src folder?

Keep the explanation short and beginner-friendly.
```

---

## Find the homepage yourself

Look inside:

```text
src/pages/
```

You should find:

```text
src/pages/index.astro
```

This file creates the homepage.

---

## Important idea

Files inside:

```text
src/pages/
```

are used by Astro to create pages.

The filename:

```text
index.astro
```

normally represents the default page for that location.

---

## Checkpoint

Complete these sentences:

```text
My homepage file is:

The pages folder is:

An .astro file is:
```

Your answers do not need to be perfect.

Write what you currently understand.

---

## Next exercise

➡️ [Exercise 3 — First manual change](03-first-manual-change.md)
