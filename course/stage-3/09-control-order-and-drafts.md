# Exercise 9 — Control order and drafts

## Goal

Make a service appear, move and disappear by editing its metadata.

This exercise tests the filtering code you already wrote.

## Add one new service manually

Create `src/content/services/jobafklaring.md`:

```md
---
title: "Jobafklaring"
description: "Få hjælp til at samle spørgsmål og næste skridt i dit forløb."
order: 4
draft: false
---

Vi kan sammen skabe overblik over dit forløb og de aftaler, du har modtaget.

## Hvordan kan jeg hjælpe?

- Samle dine spørgsmål.
- Forberede dig til en samtale.
- Skrive dine næste skridt ned.

## Kontakt

Kontakt mig for en samtale om, hvilken hjælp du ønsker.
```

Do not edit an Astro file to make this entry appear.

Run `pnpm build` and check the development site. There should now be a fourth card, a fourth overview item and `/ydelser/jobafklaring/`.

## Move the service

Change its `order` to `1`, and change the other orders so they remain unique:

| Service | New order |
| --- | --- |
| Jobafklaring | 1 |
| Fleksjob | 2 |
| Førtidspension | 3 |
| Sygedagpenge | 4 |

Check the homepage and overview again. Their ordering should match. The schema checks that orders are positive integers; it does not require uniqueness. Choosing unique numbers makes the intended order clear.

## Hide the service

In `jobafklaring.md`, set:

```yaml
draft: true
```

Build again. The fourth service should be absent from the card list, overview and generated detail routes. Opening its URL should no longer show that page.

We deliberately use the same filter in development and production, so drafts are hidden in both.

## Why the route filter matters

Hiding a card alone does not remove a generated page. The `getStaticPaths()` query must filter drafts too.

Draft filtering controls which pages we generate. It is not a password or a way to protect private source documents. Do not put sensitive material in these practice files.

## If the results disagree

```text
Inspect the services queries in the homepage/service list, /ydelser/ overview
and generated detail route.
I marked jobafklaring.md draft: true.
Explain whether each query excludes drafts.
Do not modify files yet.
```

If needed, request only the missing filter or sort change and rebuild.

## Finish with a working state

Set Jobafklaring back to `draft: false`. Keep the new order or restore your preferred unique orders. Build and check that all four services are present.

Inspect the diff and commit with `Add jobafklaring service and verify draft filtering`.

## Checkpoint

Did you need to create another page template? Why must drafts be filtered in more than one place?

[Previous](08-connect-the-homepage-cards.md) · [Stage overview](README.md) · [Next: Style Markdown content](10-style-markdown-content.md)
