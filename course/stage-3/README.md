# Stage 3 — Content and static pages

In Stage 2, you built a website from reusable Astro components.

In Stage 3, you will give that website content that is easier to maintain. You will write service descriptions in Markdown, use a content collection, and generate a page for each service.

The aim is to understand how the pieces connect. Work through one exercise at a time.

## Before you start

You should have a working homepage with a header, service cards, contact section and footer. You should be able to inspect a diff and create a Git commit.

Run `pnpm build` and save a working commit before Exercise 1. If the build fails, understand and fix that problem before continuing.

This folder contains lessons, not a replacement website. Put it inside your project's `course/` folder, alongside `stage-1/` and `stage-2/`. Start with [Exercise 1](01-understand-content-and-structure.md).

If your main course overview lists the stages, add:

```md
- [Stage 3 — Content and static pages](stage-3/README.md)
```

## What you will build

A service such as Fleksjob will have:

- a Markdown file containing its text and metadata
- a card on the homepage
- a link to its own page, such as `/ydelser/fleksjob/`
- the same site header and footer as the homepage

Later, adding a service will mainly mean adding another Markdown file.

## Exercises

1. [Understand content and structure](01-understand-content-and-structure.md)
2. [Write your first service in Markdown](02-write-a-service-in-markdown.md)
3. [Define the services collection](03-define-the-services-collection.md)
4. [Add services and understand validation](04-add-services-and-check-validation.md)
5. [Read the collection on a page](05-read-the-collection.md)
6. [Create a service page layout](06-create-a-service-page-layout.md)
7. [Generate a page for each service](07-generate-service-pages.md)
8. [Connect the homepage cards](08-connect-the-homepage-cards.md)
9. [Control order and drafts](09-control-order-and-drafts.md)
10. [Style the Markdown content](10-style-markdown-content.md)
11. [Build, preview and check navigation](11-build-preview-and-check-links.md)
12. [Stage 3 review](12-stage-three-review.md)

## Conventions for this stage

| Item | Course convention |
| --- | --- |
| Package manager | `pnpm` throughout |
| Service content | `src/content/services/*.md` |
| Collection configuration | `src/content.config.ts` |
| Collection name in code | `services` |
| Service overview | `src/pages/ydelser/index.astro` |
| Service detail template | `src/pages/ydelser/[id].astro` |
| Service page layout | `src/layouts/ServicePageLayout.astro` |
| URL filenames | Lowercase, without spaces: `foertidspension.md` |

Keep the service files directly inside `services/` for these exercises. Do not add nested folders or a custom `slug` field yet.

The examples assume the site is served at `/`. Exercise 1 checks this. If your project already uses a deployment base path, ask Codex to preserve and use its existing link strategy rather than copying root links unchanged.

## Astro version and existing files

This stage uses the loader-based content collection APIs available in Astro 5 and later: `glob()`, `getCollection()` and `render()`.

Exercise 1 checks the installed Astro version. Do not upgrade or install packages as part of a lesson. An older project needs a separate compatibility task with your instructor.

The collection example uses the current documentation's `astro/zod` import. Some earlier releases export `z` through `astro:content` instead. Exercise 3 asks Codex to choose the import supported by your installed version.

Your Stage 2 layout or card props may have different names. Inspect the actual files first. Adapt imports and prop names while keeping the existing design.

## How to work

For each change:

1. Understand the goal and identify the relevant file.
2. Make one small change manually or with the supplied Codex prompt.
3. Inspect the diff.
4. Check the page in your browser and run the build.
5. Commit the working result.

Build checks and browser checks answer different questions. A build can succeed while a link points to the wrong place or a heading looks poor on a phone.

The Danish service text is practice copy. Replace it with wording approved by the website owner before publishing.

## When something goes wrong

Copy the actual error and ask:

```text
I am learning Astro and I am a beginner.

I received this error:
[PASTE THE ERROR HERE]

Do not modify files yet.
Explain what it means, which file is involved, and what I should inspect first.
Keep the explanation short.
```

Then request the smallest fix, inspect it, and build again.

## Reference material

These are optional references for specific questions, not required reading before starting:

- [Markdown in Astro](https://docs.astro.build/en/guides/markdown-content/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Content collection API reference](https://docs.astro.build/en/reference/modules/astro-content/)
- [Routing](https://docs.astro.build/en/guides/routing/)
- [Styles and CSS](https://docs.astro.build/en/guides/styling/)
- [Astro CLI commands](https://docs.astro.build/en/reference/cli-reference/)

The API examples were checked against these official references on 5 October 2026. Your installed version is the version that matters for your project.

Continue to [Exercise 1 — Understand content and structure](01-understand-content-and-structure.md).
