# Exercise 7 — Generate a page for each service

## Goal

Use one Astro page template to generate a separate page for every public service.

## Create the route template

Create `src/pages/ydelser/[id].astro`. The brackets are part of the filename. They mark a variable part of the URL.

Use:

```astro
---
import { getCollection, render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import ServicePageLayout from '../../layouts/ServicePageLayout.astro';

export async function getStaticPaths() {
  const services = await getCollection('services', ({ data }) => !data.draft);

  return services.map((service) => ({
    params: { id: service.id },
    props: { service },
  }));
}

interface Props {
  service: CollectionEntry<'services'>;
}

const { service } = Astro.props;
const { Content } = await render(service);
---

<ServicePageLayout
  title={service.data.title}
  description={service.data.description}
>
  <Content />
</ServicePageLayout>
```

## Read it in small pieces

`getStaticPaths()` tells a static build which URLs to generate. Its `id` parameter matches `[id]` in the filename. The `props` value passes the matching service to the page template.

`render(service)` prepares the Markdown body for display. `<Content />` inserts it into the layout's slot.

The `Props` interface helps the editor recognise the data passed to this page. You do not have to learn all of TypeScript to use this example.

We are using `service.id`, not an old collection entry's `.slug` property or `.render()` method.

## Expected pages

| Markdown file | Page URL |
| --- | --- |
| `fleksjob.md` | `/ydelser/fleksjob/` |
| `foertidspension.md` | `/ydelser/foertidspension/` |
| `sygedagpenge.md` | `/ydelser/sygedagpenge/` |

All three share this template and layout. They have different content.

## Ask Codex if you want help

```text
CONTEXT:
I have a services collection and ServicePageLayout.astro.
This project uses static output and loader-based collections.

TASK:
Create src/pages/ydelser/[id].astro.
Use getStaticPaths to generate routes for services where draft is false.
Use service.id for params.id and pass the entry through props.
Use render from astro:content and display Content inside ServicePageLayout.
Pass the service title and description to the layout.

LIMITS:
Keep static output. Do not add an adapter or install packages.
Do not create a separate Astro file for every service.
Do not redesign other pages.

CHECK:
Run pnpm build. Confirm that the three service routes are generated.
Explain the route parameter and the layout slot briefly.
```

## Test the pages

Open every URL in the table on your development server.

Check the title, summary, body text and back link. Confirm that each page has one main heading and that the browser tab uses the correct service title.

In the build output, look for the generated service routes. Do not edit their HTML in `dist/`.

Inspect the diff and commit with `Generate service detail pages`.

## Checkpoint

What changes between the three pages? What is shared?

Reference: [Static routing](https://docs.astro.build/en/guides/routing/#static-ssg-mode) and [render API](https://docs.astro.build/en/reference/modules/astro-content/#render).

[Previous](06-create-a-service-page-layout.md) · [Stage overview](README.md) · [Next: Connect homepage cards](08-connect-the-homepage-cards.md)
