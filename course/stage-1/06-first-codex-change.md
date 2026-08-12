# Exercise 6 — Let Codex make one small change

## Goal

Let Codex modify the project for the first time.

The task will deliberately be very small.

---

## Ask Codex

Use:

```text
I am learning Astro and I am a beginner.

TASK:
Change the homepage heading to:

"Socialrådgivning med mennesket i centrum"

LIMITS:
Only make the smallest change necessary.
Do not install packages.
Do not redesign the page.
Do not change unrelated files.

AFTERWARDS:
Tell me which file you changed.
Explain the change in beginner-friendly language.
Check that the Astro project still builds.
```

---

# Do not commit immediately

First, inspect what Codex did.

Look at the diff.

Ask yourself:

```text
Did Codex change the file I expected?

Did Codex change anything else?

Does the website still work?

Can I roughly explain what changed?
```

---

## Build check

Codex may run:

```sh
pnpm build
```

This asks Astro to create the production version of the website.

A successful build is a useful check that the project does not contain an obvious build error.

---

## Commit

If the change is correct and the site still works, create a commit:

```text
Update homepage heading
```

---

## Important idea

Codex wrote the change.

**You approved it.**

That difference will become important as the project becomes larger.

---

## Next exercise

➡️ [Exercise 7 — Use Codex as a teacher](07-use-codex-as-a-teacher.md)
