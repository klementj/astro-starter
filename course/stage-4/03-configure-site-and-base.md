# Exercise 3 — Choose the site URL and base path

## Goal

Tell Astro where the website will live before preparing its links.

## Choose your GitHub Pages address

This stage first uses the normal GitHub Pages address. Leave custom-domain settings for Exercises 10 and 11.

| Repository type | Public address | Astro `site` | Astro `base` |
| --- | --- | --- | --- |
| Project repo `socialraadgivning` | `https://YOUR_ACCOUNT.github.io/socialraadgivning/` | `https://YOUR_ACCOUNT.github.io` | `/socialraadgivning` |
| Special repo `YOUR_ACCOUNT.github.io` | `https://YOUR_ACCOUNT.github.io/` | `https://YOUR_ACCOUNT.github.io` | `/` or omitted |
| Later, a custom domain | `https://www.example.com/` | `https://www.example.com` | `/` or omitted |

Organisation repositories use the organisation's name in place of a personal account name. If Pages settings show an unusual private publishing address, use the applicable GitHub guidance instead of assuming the table fits.

`site` identifies the public site origin for features that create absolute URLs. `base` identifies the path under which this project is served.

## Update your existing config

For the example project repository, the relevant settings look like this:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://YOUR_ACCOUNT.github.io',
  base: '/socialraadgivning',
});
```

This is a minimal example, not a replacement for your whole config. Keep its imports, integrations and other settings. Use your actual account and exact repository name.

Do not add the repository path to both `site` and `base` in this example.

## Ask Codex

```text
CONTEXT:
I am preparing a static Astro project for GitHub Pages.
My repository URL is: [PASTE ACTUAL REPOSITORY URL]
My intended public address is: [PASTE EXPECTED PAGES URL]

TASK:
Update only the relevant site and base settings in the existing Astro config.
Explain how the account and repository name determine those values.

LIMITS:
Preserve integrations, static output and unrelated settings.
Do not install packages, rename the repository, push or deploy.
Do not configure a custom domain yet.

CHECK:
Run pnpm build. List the changed file and show the actual site/base values.
```

## Restart and observe

Restart `pnpm dev` after changing configuration. With a project base, open the path Astro prints, including `/socialraadgivning/` or your equivalent.

Some manually written links may still send you outside that path. That is what Exercise 4 fixes. Do not remove the base just to make a root link work locally.

Inspect the config diff, build and commit with `Configure GitHub Pages site URL`.

## Checkpoint

For a project repository, what is the hostname? What is the repository path? Which Astro setting describes each?

Reference: [Astro GitHub Pages setup](https://docs.astro.build/en/guides/deploy/github/).

[Previous](02-prepare-the-github-repository.md) · [Stage overview](README.md) · [Next: Make links base aware](04-make-links-base-aware.md)
