# Exercise 10 — Write better Codex prompts

## Goal

Learn a simple structure for asking Codex to modify a project.

---

# The four-part prompt

Try to include:

```text
CONTEXT

TASK

LIMITS

CHECK
```

---

## 1. CONTEXT

Tell Codex what it is working with.

Example:

```text
This is a small Astro static website.
I am learning Astro and I am a beginner.
```

---

## 2. TASK

Give Codex one clear job.

Example:

```text
Add a short paragraph underneath the homepage heading.
```

---

## 3. LIMITS

Tell Codex what it should avoid changing.

Example:

```text
Only modify the homepage.
Do not install packages.
Do not redesign anything else.
```

---

## 4. CHECK

Tell Codex how to verify its work.

Example:

```text
Run the build afterwards.
Tell me which files changed.
Explain the change.
```

---

# Full example

```text
CONTEXT:
This is a small Astro static website.
I am learning Astro and I am a beginner.

TASK:
Add the following paragraph underneath the homepage heading:

"Jeg hjælper dig med at skabe overblik i din sociale sag."

LIMITS:
Only modify the homepage.
Do not install packages.
Do not redesign anything else.

CHECK:
Run the build afterwards.
Tell me which files changed.
Explain what you changed in beginner-friendly language.
```

---

# Why this helps

Compare:

```text
Make the site better.
```

with:

```text
Add this specific paragraph under this specific heading.
Only modify the homepage.
```

The second task is:

- easier for Codex
- easier for you to inspect
- easier to test
- easier to undo

---

## Your task

Write your own Codex prompt using:

```text
CONTEXT:

TASK:

LIMITS:

CHECK:
```

The task should be something small.

Do not run it until you have read through it once.

---

## Next exercise

➡️ [Exercise 11 — What not to ask Codex](11-what-not-to-ask-codex.md)
