# Exercise 4 — Make links work with the base path

## Goal

Make navigation and manually written asset URLs work at both a repository path and the site root.

## Why a link can break after deployment

At `https://YOUR_ACCOUNT.github.io/socialraadgivning/`, a link to `/ydelser/` goes to the hostname's root. The intended destination is `/socialraadgivning/ydelser/`.

Astro does not automatically rewrite every link you type in a template or Markdown document.

## Reuse a helper if one exists

If your project already has a base-aware URL helper, use it. Otherwise, create `src/utils/paths.ts`:

```ts
export function withBase(path: string = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const relativePath = path.replace(/^\/+/, '');
  return `${base}/${relativePath}`;
}
```

This small helper joins the configured base and a site-relative path. Removing boundary slashes prevents duplicated slashes.

It is only for paths inside this site. Do not pass external URLs, `mailto:` or `tel:` links to it.

## Examples in Astro templates

Import the helper using the relative path from the file you are editing. In `src/pages/index.astro`, that is:

```astro
---
import { withBase } from '../utils/paths';
---
```

Keep the file's other imports and code. In its markup, use:

```astro
<a href={withBase('')}>Forside</a>
<a href={withBase('ydelser/')}>Alle ydelser</a>
<a href={withBase('#kontakt')}>Kontakt</a>
```

For a generated service card, pass:

```astro
href={withBase(`ydelser/${service.id}/`)}
```

| Input | Output with base `/socialraadgivning` | Output with base `/` |
| --- | --- | --- |
| `''` | `/socialraadgivning/` | `/` |
| `'ydelser/'` | `/socialraadgivning/ydelser/` | `/ydelser/` |
| `'ydelser/fleksjob/'` | `/socialraadgivning/ydelser/fleksjob/` | `/ydelser/fleksjob/` |
| `'#kontakt'` | `/socialraadgivning/#kontakt` | `/#kontakt` |

An unmodified `href="#kontakt"` still targets the current page. Use it only if that page actually contains the target.

## Images, icons and Markdown

Check manually written URLs for `public/` files, including favicon links and images. For `public/favicon.svg`, an Astro template can use `withBase('favicon.svg')`. The URL never includes the word `public`.

Keep source asset imports that Astro already processes; inspect their built URLs instead of blindly adding the base twice. Check CSS `url(...)` references as well.

Plain Markdown does not evaluate the helper. Relative links can work: on a service URL ending in `/ydelser/fleksjob/`, `[Alle ydelser](../)` goes to the overview and `[Kontakt](../../#kontakt)` goes to the homepage section. Test them with the actual route layout. Shared calls to action can instead live in an Astro layout using the helper.

## Ask Codex

```text
CONTEXT:
My Astro site must work under its configured GitHub Pages base path.

TASK:
Inspect existing internal links and manual public asset URLs.
Reuse a suitable helper, or add withBase in src/utils/paths.ts using BASE_URL.
Update the header, service cards, overview links and service back link as needed.
Check favicon/image URLs and report any Markdown or CSS links needing a separate fix.

LIMITS:
Do not hardcode the repository name in every component.
Do not change external, email, phone or valid same-page anchor links.
Do not double-prefix imported assets, redesign, install packages, push or deploy.

CHECK:
Run pnpm build. List changed files and explain one before/after URL.
```

Check navigation in your browser, inspect the diff and commit with `Make internal URLs respect the site base`.

## Checkpoint

Why will the same helper still work when the site later uses a custom domain at `/`?

Reference: [Astro base configuration](https://docs.astro.build/en/reference/configuration-reference/#base).

[Previous](03-configure-site-and-base.md) · [Stage overview](README.md) · [Next: Check production locally](05-check-the-production-build.md)
