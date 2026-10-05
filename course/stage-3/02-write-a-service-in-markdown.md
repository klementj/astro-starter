# Exercise 2 — Write your first service in Markdown

## Goal

Create one service file and recognise the difference between metadata and the main text.

## Create the content folder

In your editor, create `src/content/services/`.

Inside it, create `fleksjob.md`. Add:

```md
---
title: "Fleksjob"
description: "Få hjælp til at skabe overblik over din sag om fleksjob."
order: 1
draft: false
---

Jeg hjælper dig med at samle spørgsmål og skabe overblik over din sag.

## Hvordan kan jeg hjælpe?

- Gennemgå de dokumenter, du allerede har.
- Forberede spørgsmål til dit næste møde.
- Hjælpe dig med at holde styr på aftaler og næste skridt.

## Sådan kan vi begynde

Vi starter med en samtale om din situation og den hjælp, du ønsker.
```

Save the file. This is practice text, not a statement about who qualifies for fleksjob.

## What is frontmatter?

The section between the first two lines of `---` is called **frontmatter**. It uses YAML to store metadata: information about the document.

| Field | How we will use it |
| --- | --- |
| `title` | The card title and service page heading |
| `description` | The card summary and page description |
| `order` | The position in a service list |
| `draft` | Whether our code should exclude the service from public pages |

The text after the second `---` is the Markdown body. It will become the longer content on the service page.

Notice that `1` is a number and `false` is a Boolean: a true/false value. Leave them unquoted. Quoting them would make them text.

Use quotes around titles and descriptions, especially when they contain punctuation such as a colon.

## One heading belongs to the page

Do not put `# Fleksjob` in the body. Our layout will display the main `<h1>` from `title`. Use `##` for the next level of headings.

## Did the website change?

It should still look the same. A file in this content folder needs code that loads it and uses it on a page.

Also notice that there is no `layout:` field. We will choose the layout in our Astro page template.

## Ask Codex to explain

```text
Inspect src/content/services/fleksjob.md without changing it.
Explain which part is frontmatter and which part is the Markdown body.
Explain why saving this file has not created a service page yet.
Keep the explanation beginner-friendly.
```

## Check and commit

Run `pnpm build`. Check that the existing homepage still works. The new service page does not exist yet.

Inspect the new file and commit with a message such as `Add first service content file`.

## Checkpoint

Which field belongs on a card? Which part contains the longer service text?

[Previous](01-understand-content-and-structure.md) · [Stage overview](README.md) · [Next: Define the collection](03-define-the-services-collection.md)
