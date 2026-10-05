# Exercise 8 — Connect the homepage cards

## Goal

Make the existing homepage cards use the same content as the detail pages.

This changes where the data comes from. Keep the Stage 2 card design.

## Find the current service list

The homepage may contain a manually written array of titles and descriptions, or individual card calls.

Replace that duplicated service data with a collection query. Put the query in the file that currently owns the list. That may be the homepage or a service section component.

```astro
---
import { getCollection } from 'astro:content';

const services = (await getCollection('services', ({ data }) => !data.draft))
  .sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
---
```

Keep any other imports and code the file needs.

## Pass data to each card

If your existing card accepts `title`, `description` and `href`, the loop can look like this:

```astro
{services.map((service) => (
  <ServiceCard
    title={service.data.title}
    description={service.data.description}
    href={`/ydelser/${service.id}/`}
  />
))}
```

Use the actual prop names from Exercise 1. If the card is not linked yet, add an `href` prop and an accessible link without changing its visual design.

Do not nest an anchor inside another anchor. Use a link label that identifies the destination, for example `Læs om Fleksjob`.

## Link the overview too

In `src/pages/ydelser/index.astro`, turn each service title into a link to the same generated URL:

```astro
<h2>
  <a href={`/ydelser/${service.id}/`}>{service.data.title}</a>
</h2>
```

These links are now useful because the detail pages exist.

## Ask Codex

```text
CONTEXT:
My service pages are generated from a services collection.
My Stage 2 homepage still has manually written service card data.

TASK:
Find the file that owns the service card list.
Replace its duplicated service text with getCollection('services').
Exclude drafts and sort by order, then by id.
Reuse ServiceCard with its existing props and design.
Link each card to /ydelser/{service.id}/, adapting the existing base-path strategy if needed.
Also link the service titles on the /ydelser/ overview to their detail pages.

LIMITS:
Only change the service list, necessary card link behavior and overview links.
Do not redesign the hero, about section, contact section or footer.
Do not install packages or add browser JavaScript.

CHECK:
Run pnpm build. List changed files.
Explain how one Markdown file now supplies both a card and a detail page.
```

## Test

Click all homepage cards and overview links. Each must open the correct page.

Temporarily change the Fleksjob description in its Markdown file. It should change on the card, overview and detail page. Restore it or keep an approved wording change.

Use the Tab key to reach the card links, then Enter to follow one. Check that focus is visible.

Inspect the diff, build, and commit with `Connect service cards to content collection`.

## Checkpoint

Where would you now edit a service summary? Where would you edit every card's border or spacing?

[Previous](07-generate-service-pages.md) · [Stage overview](README.md) · [Next: Control order and drafts](09-control-order-and-drafts.md)
