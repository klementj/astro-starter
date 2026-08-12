# Teacher Notes

## Purpose

The student's goal is not to become an Astro developer before beginning the project.

The goal is to develop enough understanding to:

* navigate a small codebase
* recognise the purpose of important files
* make simple changes
* use Git as a safety mechanism
* give Codex well-scoped tasks
* inspect AI-generated changes
* test before accepting them
* gradually build a real static website

Success means the student can supervise the AI rather than blindly accepting generated code.

---

# Starting state

The repository should initially contain a committed, working:

```text
Astro Starter Kit: Basics
```

Do not pre-build the final website architecture yet.

The starter project provides an important baseline:

```text
Known working project
```

The first student commits should sit on top of that baseline.

---

# Do not introduce everything at once

Recommended order:

```text
Running Astro
↓
Finding files
↓
Editing text
↓
CSS
↓
Diff
↓
Git commit
↓
Codex inspection
↓
Codex small edit
↓
Markdown
↓
Components
↓
Layouts
↓
Content collections
↓
Dynamic pages
↓
Real website conversion
↓
GitHub Pages
↓
Custom domain
```

Do not teach GitHub Pages during the first sessions.

It creates another layer of possible errors before the student understands what the project is doing locally.

---

# Core teaching principle

Every exercise should answer four questions.

## 1. Goal

What should visibly happen?

Example:

```text
Change the homepage heading.
```

## 2. Location

Which file controls it?

Example:

```text
src/pages/index.astro
```

## 3. Change

What actually changed?

Use the Git diff.

## 4. Verification

Does it still work?

Use the browser and build command.

---

# The Codex rule

During the early course, almost every Codex coding prompt should contain:

```text
Do not install packages.
Do not refactor unrelated code.
Make the smallest change necessary.
Tell me which files you changed.
Explain the change.
Run the build afterwards.
```

These restrictions can gradually be removed as the student's understanding improves.

---

# Why small tasks matter

A beginner cannot effectively review a change touching fifteen files.

A beginner can review:

```text
1 file changed
3 lines added
1 line removed
```

Therefore, constrain tasks deliberately.

A useful progression is:

```text
one text change
↓
one CSS change
↓
one section
↓
one component
↓
a few related files
↓
one feature
```

Only much later should Codex receive site-wide tasks.

This also makes limited AI usage more efficient.

---

# Use Codex in three modes

The student should learn that Codex can do three different jobs.

## Mode 1 — Inspector

No changes allowed.

Example:

```text
Inspect this repository.

Do not modify anything.

Tell me which file controls the homepage.
```

Use this heavily at the beginning.

---

## Mode 2 — Teacher

The student supplies code or an error.

Example:

```text
Explain this code in beginner-friendly language.

Do not change it.
```

or:

```text
Explain this error.

Do not fix anything yet.
```

This should be encouraged throughout the project.

---

## Mode 3 — Programmer

Codex modifies the repository.

Example:

```text
Add one service card.

Only modify the files required for that card.
```

The student should only use this mode after creating a known-good commit.

---

# Important habit

Teach:

```text
WORKING SITE
    ↓
COMMIT
    ↓
CODEX CHANGE
    ↓
DIFF
    ↓
TEST
    ↓
COMMIT
```

Not:

```text
CODEX
↓
CODEX
↓
CODEX
↓
CODEX
↓
Something is broken
```

---

# What to watch for

A beginner may assume:

> If Codex wrote it, it must be correct.

Counter this by regularly asking:

```text
Which files did Codex change?

Why did it change them?

Did it do more than we requested?

How did you check the result?
```

Do not require the student to explain every line of generated code.

Require them to explain the purpose of the change.

---

# When the student is stuck

Before intervening yourself, encourage this sequence.

## Step 1 — Read the error

Copy the actual error.

## Step 2 — Ask Codex to explain

```text
Do not make any changes.

Explain this error in beginner-friendly language.

What file should I inspect first?
```

## Step 3 — Inspect

Student opens the relevant file.

## Step 4 — Ask for the smallest fix

```text
Make the smallest change required to fix this error.

Do not change unrelated code.
```

## Step 5 — Test

Run the project again.

---

# Suggested Stage 1 completion criteria

Before moving to the real website, the student should be able to do these without significant assistance:

* start the Astro development server
* locate `src/pages`
* identify the homepage
* manually edit visible text
* recognise a CSS property
* view a Git diff
* create a commit
* understand what a commit is for
* ask Codex to inspect without editing
* ask Codex for a small controlled edit
* check which files Codex changed
* run or understand the project build check
* recognise a Markdown file

They do not need to understand:

* JavaScript deeply
* TypeScript
* npm internals
* Astro internals
* Git branches
* rebasing
* pull requests
* CI/CD terminology
* server-side rendering

These can be introduced only if needed.

---

# Stage 2 — Recommended real-project progression

Once Stage 1 is complete, begin replacing the starter site.

Suggested order:

## Exercise 1

Create a very simple page shell:

```text
Header
Main
Footer
```

No accurate styling yet.

---

## Exercise 2

Turn the header into:

```text
Header.astro
```

Teach the idea of a reusable component.

---

## Exercise 3

Create:

```text
Hero.astro
```

Use real approved homepage copy.

---

## Exercise 4

Create one:

```text
ServiceCard.astro
```

Initially hard-code three cards.

This lets the student see why reusable components are useful.

---

## Exercise 5

Introduce props.

One component:

```text
ServiceCard.astro
```

receives different:

```text
title
description
link
```

values.

---

## Exercise 6

Create one service page manually.

For example:

```text
fleksjob
```

---

## Exercise 7

Move the service content into Markdown.

This introduces the important separation:

```text
DESIGN
.astro

CONTENT
.md
```

---

## Exercise 8

Create multiple Markdown service files.

Example:

```text
fleksjob.md
foertidspension.md
sygedagpenge.md
jobafklaring.md
```

---

## Exercise 9

Introduce an Astro content collection.

Codex can do more of the implementation here, but the student should understand:

> This collection gives all our service Markdown files the same structure.

---

## Exercise 10

Automatically generate the service pages.

Mental model:

```text
several .md files
       ↓
one Astro page template
       ↓
several webpages
```

This is the key SSG concept.

---

## Exercise 11

Recreate the remaining homepage sections one at a time.

Do not request the complete homepage from Codex in one prompt.

---

## Exercise 12

Responsive/mobile styling.

Only after the main desktop structure works.

---

## Exercise 13

Accessibility and quality review.

Ask Codex to inspect rather than immediately modify.

Example:

```text
Review this site for obvious accessibility problems.

Do not modify anything.

Give me the five most important issues, ordered by importance.
```

Then address issues separately.

---

## Exercise 14

GitHub Pages.

Only introduce deployment once:

```text
npm run build
```

works reliably.

---

## Exercise 15

Custom domain.

Treat this as the final infrastructure step.

---

# Keep a solution branch or solution repository

Maintain your own known-good version of each major checkpoint.

Example:

```text
starter
stage-1-complete
header-complete
hero-complete
services-static
services-markdown
services-generated
homepage-complete
deployment-ready
```

The student does not need to use these branches.

They are for instructor recovery.

If the student's repository becomes badly damaged, you can compare against a known-good checkpoint instead of spending AI allowance trying to diagnose accumulated mistakes.

---

# Final learning outcome

At the end of the project, the student should be able to explain:

> Astro is a static site generator. Our content can live in Markdown files. Astro components control reusable parts of the design. Astro builds those files into static HTML. Git records the history of the project. GitHub stores the repository and can publish the generated site. Codex helps us understand and modify the code, but we give it specific tasks and inspect its changes.

If the student understands that model, the course has succeeded even if they cannot write an Astro component from memory.
