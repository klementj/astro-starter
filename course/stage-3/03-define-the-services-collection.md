# Exercise 3 — Define the services collection

## Goal

Tell Astro where to find service documents and what metadata each document needs.

A **collection** groups related documents. A **schema** describes the rules for their metadata.

## Create or update the configuration

The loader-based configuration file is `src/content.config.ts`. Notice the dot in the filename. It is not `src/content/config.ts`, which belongs to an older collection setup.

For a project without existing collections, the example is:

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/services',
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    order: z.number().int().positive(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services };
```

Use the Codex prompt below to match your installed version. If it does not support `astro/zod` but exports `z` from `astro:content`, only that import needs to differ:

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
```

Use one supported set of imports, not both. Existing collections must remain in the exported `collections` object.

## Ask Codex for this small change

```text
CONTEXT:
I am learning Astro. My installed version was checked in Exercise 1.
I created src/content/services/fleksjob.md with title, description, order and draft.

TASK:
Create or update src/content.config.ts with a loader-based services collection.
Use glob with pattern '*.md' and base './src/content/services'.
Require a nonempty title and description, and a positive integer order.
Make draft a Boolean with a default of false.
Use the Zod import supported by this installed Astro version:
astro/zod in releases that support it, otherwise the supported astro:content export.

LIMITS:
Preserve any existing collections. Do not upgrade or install packages.
Do not redesign the website or create pages yet.

CHECK:
Run pnpm build. Tell me which file changed and explain loader and schema briefly.
```

## Read the result

`base` names the content folder. `pattern` selects Markdown files directly inside that folder.

The schema requires text for `title` and `description`, and a positive whole number for `order`. If `draft` is omitted, its parsed value becomes `false`.

The schema does not hide drafts by itself. We will explicitly filter them when reading content.

These rules check the metadata's shape. They cannot judge whether the service wording is accurate or helpful.

## Check and commit

Inspect the diff, run `pnpm build`, and check the unchanged homepage.

If the editor has not recognised the new collection, restart the development server. You can also run `pnpm astro sync` to regenerate Astro's generated types. Do not manually edit generated files.

Commit with `Define services content collection`.

## Checkpoint

What does the loader find? What does the schema check?

Reference: [Defining content collections](https://docs.astro.build/en/guides/content-collections/#defining-build-time-content-collections).

[Previous](02-write-a-service-in-markdown.md) · [Stage overview](README.md) · [Next: Add services and check validation](04-add-services-and-check-validation.md)
