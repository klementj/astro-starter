# Exercise 2 — Prepare the GitHub repository

## Goal

Put the working source project on GitHub without confusing that step with publishing the website.

## If the repository already exists

Open it on GitHub. Confirm that the account, repository name and branch match your local project.

Do not create another repository just for this course. Keep the existing project history and remote connection.

## If you need a new repository

Use GitHub's New repository screen and choose a clear name, such as `socialraadgivning`.

For this course's GitHub Free route, use a public repository whose content is intended to be public. If you need private source, check Pages availability for your plan before continuing.

When connecting an existing local Git project, create an empty remote repository. Do not initialise it with an extra README, licence or ignore file that would introduce a second starting history.

Use your editor's source-control publishing feature or GitHub Desktop to connect the local project. If using the terminal, first inspect the existing remotes and branch:

```sh
git remote -v
git branch --show-current
```

Only if no appropriate remote exists, add one using your actual repository URL:

```sh
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
```

Do not run that placeholder command unchanged. Do not replace a working remote.

## Check what is tracked

The repository should include source files, `public/`, Astro configuration, `package.json` and `pnpm-lock.yaml`.

Generated `node_modules/`, `.astro/` and `dist/` folders should normally be ignored. Preserve the starter's existing ignore rules. Commit the pnpm lockfile so the deployment knows which dependencies belong to the project.

Use the Git/source-control view to inspect the actual files being committed. Learning Markdown is fine; personal case notes do not belong in this public website project.

## Ask Codex for a local check

```text
Inspect Git status, tracked files, remotes and the publishing branch.
Check that the pnpm lockfile is tracked and generated dependency/build folders are ignored.
Explain any specific problem before making changes.
Do not push, change repository visibility, create a repository or deploy anything.
```

Handle a concrete ignore or tracking problem as its own small task. Adding an ignore rule does not automatically untrack files already committed; have Codex explain the exact fix if that situation occurs.

## Push the working version

Save the intended changes in a commit, then use your Git tool's Push command.

For a publishing branch named `main`, the terminal equivalent is:

```sh
git push -u origin main
```

Substitute the actual remote and branch from your inspection. A rejected push needs explanation; do not force-push to get past it.

Open the repository on GitHub and find the commit and service Markdown files. This proves the source reached GitHub. The deployment workflow will be added later.

## Checkpoint

Explain the difference between commit and push. Why do we keep the source and lockfile in Git rather than manually maintaining generated HTML?

Reference: [Pushing commits](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository).

[Previous](01-understand-publishing.md) · [Stage overview](README.md) · [Next: Configure site and base](03-configure-site-and-base.md)
