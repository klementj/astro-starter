# Exercise 4 — Add services and understand validation

## Goal

Add two services and see how Astro catches a metadata mistake.

## Add Førtidspension

Create `src/content/services/foertidspension.md`:

```md
---
title: "Førtidspension"
description: "Få støtte til at samle dine spørgsmål og dokumenter om førtidspension."
order: 2
draft: false
---

Et længere sagsforløb kan være svært at overskue. Vi kan sammen skabe et overblik.

## Hvordan kan jeg hjælpe?

- Samle de dokumenter, du vil gennemgå.
- Tale om de spørgsmål, du ønsker svar på.
- Forberede en samtale eller et møde.

## Det første skridt

Fortæl kort om din situation og om, hvad du har brug for hjælp til.
```

## Add Sygedagpenge

Create `src/content/services/sygedagpenge.md`:

```md
---
title: "Sygedagpenge"
description: "Få hjælp til at holde overblik over spørgsmål og aftaler i din sag."
order: 3
draft: false
---

Jeg hjælper dig med at få overblik over den information, du har modtaget.

## Hvordan kan jeg hjælpe?

- Læse breve sammen med dig.
- Samle spørgsmål til næste møde.
- Skrive de aftalte næste skridt ned.

## En samtale om din situation

Vi begynder med det, der fylder mest for dig lige nu.
```

The filenames use `oe` in `foertidspension`. The visible title still uses the correct Danish spelling.

## Check the working files

Run `pnpm build`. It should succeed. Inspect and commit the two new files with `Add more service content`.

## Make one deliberate mistake

In `sygedagpenge.md`, temporarily change:

```yaml
order: 3
```

to:

```yaml
order: "three"
```

Run `pnpm build` again. It should fail because the schema expects a number.

Read the error. Find the filename, the field name and the expected type.

## Ask for an explanation if needed

```text
I deliberately changed the order field to "three" in sygedagpenge.md.
Here is the build error:
[PASTE ERROR]

Do not change files.
Explain how this error relates to the services schema.
Which value should I inspect first?
```

Restore `order: 3` manually and build again. Do not commit the broken version.

## What validation has taught us

A metadata error is easier to fix when Astro tells us which field is wrong.

Using numbers for ordering also lets us sort services predictably later.

Draft documents must still have valid metadata because the loader reads them before our page code filters them.

## Checkpoint

Explain why `3` and `"three"` are different kinds of values. Confirm that the final build passes and the intentional mistake no longer appears in the diff.

[Previous](03-define-the-services-collection.md) · [Stage overview](README.md) · [Next: Read the collection](05-read-the-collection.md)
