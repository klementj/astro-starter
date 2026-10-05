# Exercise 9 — Publish updates and undo a change

## Goal

Practise a small update and understand how to reverse an unwanted content commit.

## Make one approved wording change

Choose one service Markdown file. Improve one sentence without changing its filename, metadata structure or service meaning.

Inspect the diff. It should show only the intended text change.

Run `pnpm build`, then `pnpm preview`. Check the affected page and any card or summary that uses the changed field.

Commit with a clear message such as `Clarify fleksjob introduction`, then push to the publishing branch.

## Confirm the update

Wait for the workflow associated with that commit to succeed. Open the live page and read the new sentence.

Record the commit ID. This connects an editorial change with a deployed result.

Saving a file is not publishing it. Neither is creating a local commit. With this workflow, the publishing-branch push starts the remote work.

## Understand two ways to recover

| Situation | Appropriate small recovery |
| --- | --- |
| The newest commit changed one sentence incorrectly | Edit the sentence back and publish another commit |
| One specific simple commit should be reversed | Create a Git revert commit, check it and push |
| A domain or Pages setting is wrong | Correct the setting as well as any affected source configuration |

A revert records an inverse change in a new commit. It keeps the existing history. Reverting source does not undo DNS or repository settings.

## Optional revert practice

Use the simple wording commit from this exercise if it is suitable to undo. Start with a clean working tree, and confirm the exact commit in your Git history.

If your Git tool supports reverting a commit, use that command on the specific wording commit. The terminal equivalent is:

```sh
git revert --no-edit YOUR_COMMIT_ID
```

Replace `YOUR_COMMIT_ID` with the actual ID. Do not choose a merge commit or a workflow/configuration change for this first practice.

The command normally creates a new commit. Inspect it, build and preview before pushing. Then check its successful deployment and the restored live wording.

If Git reports a conflict, stop and ask it to be explained. Do not switch to a hard reset or force-push as an attempted shortcut.

If you want to retain the wording improvement, discuss the revert in your notes instead of performing it.

## Ask Codex to help identify the change

```text
I want to understand how to undo this one content change.
The commit is: [ACTUAL COMMIT ID].

Inspect the commit and current Git status without editing.
Explain what reverting it would change and whether it is a simple content-only commit.
Do not revert, reset, push or deploy yet.
```

## Your routine for future updates

Understand, edit, inspect, build, preview, commit, push, watch the workflow and verify the live result.

Repeat the checks affected by the change. A layout change needs broader page checks than a single sentence edit.

## Checkpoint

How does a revert differ from deleting history? Why does correcting a local file not immediately repair the hosted page?

Reference: [Git revert](https://git-scm.com/docs/git-revert).

[Previous](08-check-the-live-website.md) · [Stage overview](README.md) · [Next: Plan a custom domain](10-plan-a-custom-domain.md)
