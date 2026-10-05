# Exercise 7 — Publish with GitHub Pages

## Goal

Run the workflow on GitHub and open the website at its public address.

This is the exercise that enables publishing. The deployed pages and assets become accessible to visitors.

## Enable Pages for the repository

On GitHub, open the correct repository, then go to **Settings → Pages**.

Under Build and deployment, choose **GitHub Actions** as the source. This course does not use Deploy from a branch or a separate `gh-pages` branch.

If you cannot see or change Pages settings, check the repository permissions and plan with its owner. Do not create a second repository as a workaround.

## Push the prepared commits

Check your local Git status and confirm the intended workflow and configuration commits are saved.

Use your Git tool's Push command. If your remote is `origin` and your publishing branch is `main`, the terminal command is:

```sh
git push origin main
```

Use the actual names from your deployment notes.

## Watch the workflow

Open the repository's **Actions** tab and select the run for your latest commit.

You should see a build job, followed by a deploy job. Wait for both to complete. Note the commit associated with the run so you know which source version was published.

If no run appears, check whether the pushed branch matches the workflow trigger. If necessary, use the workflow's **Run workflow** button and select the intended branch. Any environment branch rules must also allow it.

## Open the published address

Use the URL shown by the successful deployment or Settings → Pages. Do not guess it from the repository's code URL.

For the example project, it should look like:

```text
https://YOUR_ACCOUNT.github.io/socialraadgivning/
```

Record the actual public address in `notes.md`.

## If the run fails

Open the failed step's log and read the first useful error near the failure. Copy the relevant lines, not an entire log containing unrelated details.

Ask Codex:

```text
My GitHub Pages workflow failed for this commit: [COMMIT ID].
The failed job/step is: [NAME].
Here is the relevant error:
[PASTE ERROR]

Do not change files or settings yet.
Explain whether this is a build, dependency, workflow or deployment-settings problem.
Identify the first file or setting I should inspect.
```

After understanding it, fix only that problem, build locally where relevant, commit and push again.

## Checkpoint

Can you show the successful run and its commit? Can you open the public URL? Why is the GitHub code page a different address from the website?

Continue to the live checks even if everything looks correct at first glance.

Reference: [Publishing through custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

[Previous](06-create-the-deployment-workflow.md) · [Stage overview](README.md) · [Next: Check the live website](08-check-the-live-website.md)
