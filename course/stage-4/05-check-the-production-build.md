# Exercise 5 — Check the production build locally

## Goal

Test the configured site before enabling automatic publishing.

## Build and preview

Run:

```sh
pnpm build
pnpm preview
```

Use the address printed by preview and include the configured base path. For example, if preview prints port 4321 and your base is `/socialraadgivning`, open `http://localhost:4321/socialraadgivning/`.

Your actual port may differ. Do not use a guessed port when the terminal provides one.

## Test the whole route set

For a project base, test paths like these:

| Page | Path under the example base |
| --- | --- |
| Homepage | `/socialraadgivning/` |
| Overview | `/socialraadgivning/ydelser/` |
| Fleksjob | `/socialraadgivning/ydelser/fleksjob/` |
| Førtidspension | `/socialraadgivning/ydelser/foertidspension/` |
| Sygedagpenge | `/socialraadgivning/ydelser/sygedagpenge/` |
| Jobafklaring | `/socialraadgivning/ydelser/jobafklaring/` |

Use your real base, or remove the repository prefix for a root site.

Click from a card to its page, then use the back link. On a detail page, test the logo/home link and the contact link. Refresh the detail page directly.

## Check appearance and contact

Confirm that CSS, images and the favicon load. Try a narrow viewport, keyboard navigation and zoom.

Read the visible contact details. Replace any demonstration email, phone number or practice wording with the website owner's approved public information before publishing. Handle that as a small content task and build again.

The preview does not prove GitHub settings are correct, but it does let you check the exact output you plan to host.

## Ask Codex for a final local inspection

```text
Review the configured production build without changing files.
Run pnpm build and inspect representative generated HTML for internal URLs,
stylesheets, favicon and service-page links under the configured base.
Check that the current service pages are generated and drafts are excluded.
Report concrete problems and their source filenames.
Do not push, deploy, install packages or claim browser checks you did not perform.
```

## When you find a problem

Give Codex the actual broken destination, source file or browser error. Ask for one specific fix, inspect it and repeat the affected checks.

Build again after source changes; preview serves the generated version. Stop the preview server with Ctrl+C when finished.

Save any fixes in a commit such as `Check production URLs before publishing`. If nothing changed, no extra commit is needed.

## Checkpoint

Which check proves the build succeeds? Which check proves a visitor can follow the contact link from a detail page?

[Previous](04-make-links-base-aware.md) · [Stage overview](README.md) · [Next: Create the workflow](06-create-the-deployment-workflow.md)
