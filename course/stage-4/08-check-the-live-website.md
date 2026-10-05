# Exercise 8 — Check the live website and troubleshoot

## Goal

Check what a visitor sees, including direct service-page visits.

Use the live public address, not the development server or local preview.

## Follow the visitor's path

1. Open the homepage in a fresh browser tab.
2. Follow each service card to its detail page.
3. Use the overview and back links.
4. Follow the header's home, about and contact links from a detail page.
5. Open and refresh a service URL directly.
6. Test the contact method and read the visible contact information.

Use another browser or a private window if an old cached page makes the result unclear.

## Check the presentation

Look at images, CSS, the favicon and the tab title. Try a real phone if available, or narrow the browser. Use the keyboard to follow links and check visible focus.

Confirm the published service text matches the intended commit. An older successful workflow is not evidence that the newest source was deployed.

## Recognise common symptoms

| Symptom | First thing to inspect |
| --- | --- |
| No workflow run | Pushed branch and workflow trigger |
| Build job fails | First relevant build error and matching source file |
| Deploy job fails | Pages source, workflow permissions and environment rules |
| Homepage returns 404 | Actual Pages URL, workflow outcome and artifact contents |
| Homepage works but cards return 404 | Generated service routes and link base prefix |
| Missing styles or images | Failing asset URL in the browser's Network panel |
| Contact link does nothing on a detail page | Destination and homepage section ID |
| Old wording still appears | Commit in the latest deployment and browser cache |

This table suggests where to inspect. It does not identify every possible cause.

## Collect useful evidence

For a broken link, record the page you were on, the link label and the full destination URL.

For a missing asset, use the browser developer tools' Network panel to find the request that failed. A 404 means the requested address did not supply that file.

For a workflow failure, use the Actions job log. A source change cannot fix a repository setting that prevents deployment.

## Give Codex a specific task

```text
CONTEXT:
The GitHub Pages website is live at: [URL].
Its configured base is: [BASE].
The latest workflow result is: [RESULT AND COMMIT].

PROBLEM:
From [PAGE], clicking [LINK] leads to [ACTUAL DESTINATION].
The expected destination is [EXPECTED DESTINATION].

TASK:
Inspect the relevant source and explain the likely cause before editing.

LIMITS:
Do not redesign, change hosting providers, reset configuration or install packages.
Do not push or change external settings.
```

Once you understand the cause, ask for the smallest fix. Check its diff, build and preview, then commit and push. Repeat the affected live check after the new deployment succeeds.

## Save your check results

In your notes, record the checked URL, date, deployed commit and any unfinished issue.

Do not call an untested form or link working just because the homepage loads.

## Checkpoint

Which evidence shows that deployment completed? Which evidence shows that the service card destination actually works?

Reference: [Using workflow logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs).

[Previous](07-publish-with-github-pages.md) · [Stage overview](README.md) · [Next: Updates and undo](09-publish-updates-and-undo.md)
