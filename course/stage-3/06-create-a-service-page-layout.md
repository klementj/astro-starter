# Exercise 6 — Create a service page layout

## Goal

Create one reusable wrapper for the service detail pages.

It should contain a title, introduction, space for the longer text, and a link back to the overview.

## Build on the Stage 2 layout

Look at your notes from Exercise 1. Find the layout responsible for the document and site shell.

The new `ServicePageLayout.astro` will wrap that layout. It should not create a second `<html>`, `<head>` or `<body>`.

The following example assumes your shared `Layout.astro` accepts `title` and `description`, and already includes the header, footer and one `<main>` around its slot:

```astro
---
import Layout from './Layout.astro';

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<Layout title={title} description={description}>
  <article class="service-page">
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>

    <div class="service-content">
      <slot />
    </div>

    <p><a href="/ydelser/">Tilbage til alle ydelser</a></p>
  </article>
</Layout>
```

If your shared layout has a different name, import that file instead. If it does not render `<main>`, the wrapper must provide it around the article. If the header and footer are currently only in the homepage, reuse those components in the wrapper as needed.

Let Codex adapt these differences after inspecting the actual project.

## Page metadata

The visible `<h1>` is part of the page content. The document `<title>` appears in the browser tab.

If your shared layout does not accept metadata yet, add optional props with defaults that preserve the homepage's current values. In its existing `<head>`, use the values for the single `<title>` and description meta tag:

```astro
<title>{title}</title>
<meta name="description" content={description} />
```

Update the existing tags rather than adding duplicates. Keep the site's Danish `lang="da"` setting.

## Ask Codex

```text
CONTEXT:
I am learning Astro layouts. Stage 2 already provides a site shell.

TASK:
Create src/layouts/ServicePageLayout.astro.
Reuse the existing shared layout and site components.
Accept title and description props. Display one h1, the description,
a service-content wrapper with a slot, and a link back to /ydelser/.
Make each page's document title and meta description use its props.
If needed, add optional metadata props with safe homepage defaults to the shared layout.

LIMITS:
Keep the existing design and header/footer. Do not install packages.
Do not duplicate the document shell, metadata tags, header, footer or main.
Preserve any configured base-path link strategy.
Do not create generated routes yet.

CHECK:
Run pnpm build. Explain where the slot content will go.
List the files changed and explain any shared layout adaptation.
```

## Check and commit

The new layout will not appear on a service page until Exercise 7. Check that the homepage and overview still work, then inspect the diff and build.

Commit with `Create service page layout`.

## Checkpoint

Which layout owns the document shell? Which layout owns the service heading? Where will the Markdown body appear?

[Previous](05-read-the-collection.md) · [Stage overview](README.md) · [Next: Generate service pages](07-generate-service-pages.md)
