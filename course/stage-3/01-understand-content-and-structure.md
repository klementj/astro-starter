# Exercise 1 — Understand content and structure

## Goal

Find where service content currently lives and understand why we will move it into Markdown.

This is an inspection exercise. Do not change the website yet.

## Look at the current website

Start the development server with `pnpm dev`. Open the address shown in the terminal.

Find the service cards. Pick one and ask yourself:

- Where is its title written?
- Where is its short description written?
- What would I have to edit to add another service?

## Ask Codex to inspect

```text
CONTEXT:
I am a beginner continuing from Stage 2 of an Astro website course.
Stage 3 will use Markdown, a services collection and generated service pages.

TASK:
Inspect this project without modifying files.
Find the homepage, service card component, service list and shared site layout.
Show the actual prop names used by the service cards.
Tell me where the header, footer and main element are rendered.
Check the installed Astro version with pnpm astro --version.
Check whether the site is static and whether a base path is configured.
Check whether content configuration or /ydelser/ pages already exist.

LIMITS:
Do not install packages, upgrade Astro or change configuration.

CHECK:
Give a short, beginner-friendly explanation and list the relevant files.
Tell me whether the loader-based collection examples fit this project.
```

If the project is older than Astro 5 or uses server output, discuss that difference with your instructor before the implementation exercises. This stage assumes a static site using the loader-based APIs.

If equivalent content or routes already exist, adapt them with Codex rather than creating conflicting duplicates. Preserve other collections in the existing configuration.

## The idea we are learning

We want to be able to change a service description without editing the card's design.

| Responsibility | Example |
| --- | --- |
| Content | The title and text in `fleksjob.md` |
| Structure | A card component and a service page layout |
| Appearance | The CSS used by those components |

This is a useful division of responsibilities. An Astro component can still contain text, and CSS can live inside an `.astro` file.

## Write a short note

Use your existing `notes.md`, or create one if needed:

```md
## Stage 3 starting point

- My homepage file is:
- My service card component is:
- Its props are:
- My shared layout is:
- The header and footer are rendered in:
- The main element is rendered in:
- My installed Astro version is:
- My site base path is:
- Service text currently lives in:
```

Do not paste an entire Codex answer. Write what you understand.

## Checkpoint

Explain the difference between changing a service's wording and changing every service card's appearance.

Only learning notes should have changed in this exercise. Inspect their diff and commit them if you want to keep them.

[Stage overview](README.md) · [Next: Write a service in Markdown](02-write-a-service-in-markdown.md)
