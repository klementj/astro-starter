# Exercise 11 — Build, preview and check navigation

## Goal

Understand what the static build produces and test the finished pages together.

## Build the website

From the project folder, run:

```sh
pnpm build
```

Astro reads the content and templates and produces the deployable website in `dist/`.

Look for the overview and four service routes in the build output. A normal directory-style build creates files such as `dist/ydelser/fleksjob/index.html`. A project configured for file-style output can use a different arrangement.

You can inspect the generated files, but edit their source files when making changes. A new build recreates `dist/`.

## Preview the production build

Run:

```sh
pnpm preview
```

Open the address the terminal prints. It may differ from the development server's address.

Preview serves the completed build. After a source change, build again to refresh it. `pnpm dev` is the server for ongoing editing.

## Test this route set

| Page | Expected result |
| --- | --- |
| `/` | Four linked service cards |
| `/ydelser/` | Four linked service summaries |
| `/ydelser/fleksjob/` | Fleksjob content and back link |
| `/ydelser/foertidspension/` | Førtidspension content and back link |
| `/ydelser/sygedagpenge/` | Sygedagpenge content and back link |
| `/ydelser/jobafklaring/` | Jobafklaring content and back link |

Refresh each detail page directly. It should work without first visiting the homepage.

## Check navigation from a detail page

A header link such as `href="#kontakt"` looks for an element on the current page. That may have worked on the homepage but fail on a service page.

If contact lives only on the homepage, link to the homepage section instead:

```html
<a href="/#kontakt">Kontakt</a>
```

Use the actual section ID from your project. Likewise, check the links to the homepage's about and services sections.

If a base path is configured, keep the project's existing base-aware link approach. Do not reset the configuration to make a copied link work. GitHub Pages and domain configuration will be covered in Stage 4.

## Check the page structure

On a detail page, confirm:

- the header, footer and main content appear once
- there is one main `<h1>` and body headings follow it sensibly
- the browser tab title matches the service
- the page source contains one appropriate description meta tag
- all links have usable destinations and visible keyboard focus
- content fits a small screen and remains usable when zoomed

For the meta tag, use the browser's page source or developer tools. It is not visible body text.

## Ask for a narrow navigation fix if needed

```text
CONTEXT:
The site now has a homepage, a services overview and service detail pages.

TASK:
Inspect the shared navigation links from a service detail page.
Make the smallest change needed so homepage section links reach the correct homepage sections.
Use the actual IDs and preserve any configured base-path behavior.

LIMITS:
Do not redesign navigation, rename sections or change content.
Do not install packages.

CHECK:
Run pnpm build. Explain the changed destinations and list changed files.
```

After any fix, rebuild and check the preview again. Stop a server with Ctrl+C when you no longer need it.

## Save the working result

Inspect the diff. Commit any fixes with `Fix navigation from service pages`. If no files changed, no extra commit is needed.

## Checkpoint

Does Astro generate these service pages during the build or separately for each visitor? Why does editing Markdown require a new production build?

Reference: [Astro CLI commands](https://docs.astro.build/en/reference/cli-reference/).

[Previous](10-style-markdown-content.md) · [Stage overview](README.md) · [Next: Stage 3 review](12-stage-three-review.md)
