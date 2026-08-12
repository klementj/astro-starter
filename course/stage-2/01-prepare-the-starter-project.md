# Exercise 1 — Prepare the starter project

## Goal

Prepare the Astro starter project for the real website work.

You will first inspect the existing starter files, then remove only the starter content we no longer need.

---

# Step 1 — Make sure the project works

Run:

```sh
pnpm dev
```

Open the local website in your browser.

Then run:

```sh
pnpm build
```

The build should succeed before you continue.

---

# Step 2 — Create a safe commit

If you have uncommitted changes from Stage 1, commit them first.

A suggested commit message is:

```text
Complete Stage 1
```

This gives you a safe point before the real website conversion begins.

---

# Step 3 — Ask Codex to inspect the starter

Use:

```text
CONTEXT:
This is the Astro Starter Kit: Basics.
I am learning Astro and I am a beginner.

TASK:
Inspect the project and identify which files belong specifically to the default Astro welcome screen.

LIMITS:
Do not modify or delete anything.
Do not install packages.

CHECK:
Tell me which files are probably safe to remove or replace when we begin building our own homepage.
Explain why each file exists.
Keep the explanation beginner-friendly.
```

Read the answer.

Do not delete anything yet.

---

# Step 4 — Remove only the starter-specific content

Now ask:

```text
CONTEXT:
This is the Astro Starter Kit: Basics.
I am beginning to replace the default starter screen with my own website.

TASK:
Remove or stop using only the files that exist specifically for the default Astro welcome content.

LIMITS:
Keep the Astro project working.
Keep the existing main layout if it is useful.
Do not install packages.
Do not create the final website yet.
Do not redesign anything.

CHECK:
Tell me exactly which files you changed or removed.
Run pnpm build afterwards.
```

---

# Step 5 — Inspect the diff

Look carefully at:

- modified files
- deleted files
- new files

Ask yourself:

```text
Did Codex only remove starter-specific content?

Is the project still small and understandable?

Did pnpm build succeed?
```

If something unexpected changed, ask Codex to explain it before accepting the change.

---

# Checkpoint

Complete:

```text
The starter content was mainly controlled by:

Files removed or changed:

The project still builds: yes / no
```

---

# Commit

Suggested message:

```text
Remove Astro starter content
```

---

## Next exercise

➡️ [Exercise 2 — Create a simple site shell](02-create-a-site-shell.md)
