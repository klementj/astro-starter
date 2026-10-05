# Exercise 5 — Read the collection on a page

## Goal

Display service titles and summaries on a simple overview page.

We will leave the homepage cards alone until Exercise 8.

## The data we need

Inside an Astro page's opening code section, we can read our collection:

```astro
---
import { getCollection } from 'astro:content';

const services = (await getCollection('services', ({ data }) => !data.draft))
  .sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
---
```

This fragment is not a complete page. Add it alongside the page's layout import.

We filter out draft entries and sort by `order`. If two orders match, the IDs break the tie. Do not rely on the collection's original order.

Each entry has an `id` and a `data` object. For our flat filenames, `fleksjob.md` gives the ID `fleksjob`. `service.data.title` reads the title from the parsed metadata.

## Display the data

Inside the shared layout and the page's main content, use:

```astro
<h1>Ydelser</h1>
<p>Læs om den hjælp, du kan få.</p>

<ul>
  {services.map((service) => (
    <li>
      <h2>{service.data.title}</h2>
      <p>{service.data.description}</p>
    </li>
  ))}
</ul>
```

`.map()` makes one list item for each service. The braces let Astro insert values into the markup.

We have not created detail pages yet, so these titles are not links.

## Ask Codex to integrate it

```text
CONTEXT:
I have a loader-based services collection with three Markdown entries.
I am a beginner and want to understand how Astro reads them.

TASK:
Create or adapt src/pages/ydelser/index.astro using the existing site layout.
Read services with getCollection('services'), excluding draft entries.
Sort by data.order, then by id to break ties.
Show a Ydelser heading and a simple list of titles and descriptions.

LIMITS:
Do not change the homepage cards yet. Do not install packages.
Reuse the existing header and footer exactly once.
Ensure the complete page has exactly one main element.
Do not add links to detail pages that do not exist yet.

CHECK:
Run pnpm build. Explain getCollection, data and map briefly.
Tell me which files changed and the URL of the overview page.
```

## Test

Open `/ydelser/` on the development server. You should see Fleksjob, Førtidspension and Sygedagpenge in that order.

Change one description in its Markdown file and save. Check that the overview updates. Restore it or keep a wording change you want.

The longer body text should not appear here. That belongs on the detail page.

Inspect the diff, build, and commit with `Add services overview from collection`.

## Checkpoint

Which file did you edit to change a summary? Why did you not need to rewrite the list markup?

Reference: [getCollection API](https://docs.astro.build/en/reference/modules/astro-content/#getcollection).

[Previous](04-add-services-and-check-validation.md) · [Stage overview](README.md) · [Next: Create a service page layout](06-create-a-service-page-layout.md)
