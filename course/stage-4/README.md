# Stage 4 — Publish and maintain the website

In Stage 3, you created a static Astro website with Markdown service content and generated service pages.

In Stage 4, you will publish that website with GitHub Pages, understand its public address, and learn a repeatable process for updates. You will also prepare and, if you own a suitable domain, connect a custom domain.

Work through the exercises in order. Make the GitHub Pages address work before changing DNS.

## Before you start

You should have completed Stage 3 and saved its working result in Git.

You need a GitHub account and permission to configure the repository's Pages settings. This course uses a public repository for the straightforward GitHub Free setup. Public source files are readable by other people; use website content intended for publication.

A custom domain is optional. If you do not own one, complete the planning exercises and keep using the GitHub Pages address. You do not need to buy a domain to finish the deployment lessons.

Put this `stage-4/` folder inside `course/`, alongside the previous stages. If your course overview lists stages, add:

```md
- [Stage 4 — Publish and maintain](stage-4/README.md)
```

## What you will learn

- how local files, a GitHub repository and a hosted website relate
- how to commit and push the source project
- how Astro's `site` and `base` settings affect URLs
- how to make internal links work under a repository path
- how GitHub Actions builds and publishes the website
- how to check the live result and read a failed workflow
- how to publish a small update or reverse an unwanted change
- how domain settings, DNS and HTTPS fit together

## Exercises

1. [Understand what gets published](01-understand-publishing.md)
2. [Prepare the GitHub repository](02-prepare-the-github-repository.md)
3. [Choose the site URL and base path](03-configure-site-and-base.md)
4. [Make links work with the base path](04-make-links-base-aware.md)
5. [Check the production build locally](05-check-the-production-build.md)
6. [Create the deployment workflow](06-create-the-deployment-workflow.md)
7. [Publish with GitHub Pages](07-publish-with-github-pages.md)
8. [Check the live website and troubleshoot](08-check-the-live-website.md)
9. [Publish updates and undo a change](09-publish-updates-and-undo.md)
10. [Plan and verify a custom domain](10-plan-a-custom-domain.md)
11. [Connect the domain and enable HTTPS](11-connect-domain-and-https.md)
12. [Stage 4 review and maintenance](12-stage-four-review.md)

## Course conventions

| Item | Convention |
| --- | --- |
| Package manager | `pnpm` throughout |
| Build command | `pnpm build` |
| Build output | `dist/`, generated rather than hand-edited |
| Publishing approach | GitHub Actions, not a manually committed `dist/` folder |
| Workflow file | `.github/workflows/deploy.yml` |
| Default example branch | `main`; use your actual publishing branch |
| Example repository | `socialraadgivning`; substitute your actual name |
| Custom-domain examples | Reserved `example.com` names; substitute a domain you control |

The current examples use `actions/checkout@v7`, `withastro/action@v6` and `actions/deploy-pages@v5`, checked against the official Astro deployment guide and action repository on 5 October 2026. Before using this course later, compare those versions with the linked documentation.

Keep your existing Astro version and design. No Astro hosting adapter is needed for this static site. Existing workflows or path helpers should be inspected and adapted rather than duplicated.

## Two separate decisions

Committing saves a version in local Git history. Pushing sends commits to GitHub. Once the deployment workflow is enabled, a push to its publishing branch can also update the live website.

The local Codex prompts in this course prepare and check files. The exercises tell you explicitly when to push, enable publishing or change domain settings.

## Working rule

For an update: understand the change, edit, inspect the diff, build, preview, commit, push, check the workflow, then check the live page.

A green workflow means the deployment job completed. You still need to check the content, navigation and appearance in the browser.

## Official references

- [Deploy Astro to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Official Astro deployment action](https://github.com/withastro/action)
- [Astro configuration reference](https://docs.astro.build/en/reference/configuration-reference/)
- [GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Custom publishing workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Managing custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Verifying a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [HTTPS on GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

Start with [Exercise 1 — Understand what gets published](01-understand-publishing.md).
