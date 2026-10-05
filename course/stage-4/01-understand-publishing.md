# Exercise 1 — Understand what gets published

## Goal

Identify the difference between your source files, a production build and the website visitors see.

## Three places to recognise

| Place | What belongs there |
| --- | --- |
| Your project folder | Astro components, Markdown content, CSS and configuration |
| Your GitHub repository | Committed source files and project history |
| GitHub Pages hosting | The generated website produced by a successful deployment |

The development server runs on your computer. Other people do not visit your website through your `localhost` address.

GitHub Pages will serve the HTML, CSS, images and other static assets produced by Astro. It will not run a Node server for each visitor.

## Check the Stage 3 result

Run:

```sh
pnpm build
pnpm preview
```

Open the address printed by preview. Test the homepage, `/ydelser/`, and each of the four service pages. Adjust the path if you already have a base configured.

Stop preview with Ctrl+C when finished.

## Ask Codex to inspect

```text
CONTEXT:
I am a beginner preparing a Stage 3 Astro site for GitHub Pages.

TASK:
Inspect this project without editing files.
Identify the Astro config, package.json, pnpm lockfile and Git ignore rules.
Check the installed Astro, Node and pnpm versions.
Check the actual Git branch and remote repository, if one exists.
Check static output, the build output folder, site/base settings,
and any existing deployment workflow or internal-link helper.

LIMITS:
Do not install packages, upgrade tools, push commits or deploy anything.

CHECK:
Run pnpm build. Summarise whether this static project is ready for these lessons.
List the specific differences from the course conventions that we must preserve.
```

## Create a deployment note

In your existing `notes.md`, record:

```md
## Stage 4 deployment notes

- Astro version:
- Node version:
- pnpm version:
- Local branch:
- GitHub account or organisation:
- Repository name and URL:
- Publishing branch:
- Build output folder:
- Current site/base settings:
- Existing workflow or URL helper:
```

You will add the public address later. Do not store passwords, tokens or account recovery codes in these notes.

## What a static site does not supply

An email link can open a visitor's email application. A contact form needs somewhere to submit its data. Publishing a form's HTML does not create a working message-delivery service.

Inspect the existing contact section. Keep a working email or phone contact method. If there is a form without a submission service, record it as a separate task rather than treating deployment as the fix.

## Checkpoint

Which files do you edit? Which files does Astro generate? Where does a visitor get the published pages?

Commit any learning notes you intend to keep after inspecting their diff.

[Stage overview](README.md) · [Next: Prepare GitHub](02-prepare-the-github-repository.md)
