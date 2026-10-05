# Exercise 6 — Create the deployment workflow

## Goal

Describe how GitHub should build the source and publish the generated website.

A **workflow** is a set of jobs GitHub Actions runs. This one builds first, then deploys the resulting artifact: the packaged website output.

## Create the workflow file

Create `.github/workflows/deploy.yml`. The leading dot in `.github` is intentional.

If a deployment workflow already exists, inspect and adapt it rather than adding a second publisher.

```yaml
name: Publish Astro website

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: github-pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Read the committed source
        uses: actions/checkout@v7
      - name: Build and package the Astro site
        uses: withastro/action@v6
        with:
          node-version: 24
          package-manager: pnpm@10

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Publish the generated site
        id: deployment
        uses: actions/deploy-pages@v5
```

## Match it to your project

Replace `main` if your publishing branch has a different name. The example assumes `package.json` is at the repository root and Astro outputs to `dist/`.

The example uses Node 24 and pnpm major 10. From Exercise 1, choose a Node release compatible with your installed Astro and tested build, and set `package-manager` to `pnpm@` followed by your actual pnpm version for a closer match. For example, a `pnpm --version` result of `10.20.0` would use `pnpm@10.20.0`; that number is illustrative, not a requirement to install it.

If the Astro project is in a subfolder or has a different output directory, use the action's documented `path` or `out-dir` input. Do not move the project just to match the example.

Commit the existing `pnpm-lock.yaml`. The workflow's package manager must agree with it.

## What the pieces mean

- `push` runs this workflow for pushes to the chosen branch.
- `workflow_dispatch` also allows a manual run.
- `withastro/action` installs dependencies, builds and uploads the site artifact.
- `needs: build` makes deployment wait for the build job.
- `github-pages` names the deployment environment.
- The listed permissions let the workflow read source and publish through Pages.

This workflow does not need a personal access token pasted into a file.

## Ask Codex

```text
CONTEXT:
I have checked the static production build and its GitHub Pages base path.
My publishing branch and local Node/pnpm versions are recorded in notes.md.

TASK:
Create or adapt .github/workflows/deploy.yml using the official Astro action.
Use checkout@v7, withastro/action@v6 and deploy-pages@v5,
after checking these versions against the linked official action documentation.
Match the actual branch, project directory, output directory and compatible tool versions.
Keep the build and deploy jobs, required Pages permissions and github-pages environment.

LIMITS:
Do not duplicate an existing publisher, add tokens, change the website design,
upgrade dependencies, push or change GitHub settings.

CHECK:
Inspect the YAML structure and run pnpm build locally.
Explain what still needs to happen on GitHub before publishing.
Do not claim the remote workflow ran during a local build.
```

Inspect the workflow diff and commit with `Add GitHub Pages deployment workflow`. Keep it local until Exercise 7 tells you to push.

## Checkpoint

Which job creates the website output? Which job publishes it? Why should deployment wait for the build?

Reference: [Official Astro action](https://github.com/withastro/action).

[Previous](05-check-the-production-build.md) · [Stage overview](README.md) · [Next: Publish the website](07-publish-with-github-pages.md)
