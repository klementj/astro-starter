# Exercise 12 — Stage 4 review and maintenance

## Goal

Show that you can publish a small, understandable update and verify its result.

You should have a working public website at a GitHub Pages address or your chosen custom hostname.

## Explain the terms

Write a short explanation in your own words for:

- local source files
- commit and push
- production build
- hosting
- `site` and `base`
- workflow and artifact
- deployment
- DNS record
- custom hostname
- HTTPS
- revert commit

You can refer to your notes. Do not copy an entire documentation page.

## Follow an update through the project

Complete this note using an actual published change:

```md
## One published update

- The source file I edited:
- What the diff showed:
- How I checked the local build:
- What I checked in preview:
- The commit I pushed:
- The workflow run for that commit:
- The live URL I checked:
- The result I saw:
- How I could reverse this source change:
```

## Practical checklist

- [ ] The intended source is committed and available in the correct repository.
- [ ] Generated dependency and build folders are not manually maintained in Git.
- [ ] The pnpm lockfile is tracked and workflow tool choices match the project.
- [ ] Astro's site and base match the actual public address.
- [ ] Internal navigation and manual public asset URLs respect the base.
- [ ] There is one intended Pages deployment workflow.
- [ ] Pushing the publishing branch starts the expected workflow.
- [ ] The latest intended build and deployment jobs succeed.
- [ ] All four service pages work through links and direct visits.
- [ ] Contact information is approved and the contact method works as described.
- [ ] Layout, keyboard focus and small-screen appearance have been checked live.
- [ ] The deployed version matches the intended commit.
- [ ] You know how to reverse a simple content change.

If using a custom domain, also check:

- [ ] Ownership verification is complete and its TXT record is retained.
- [ ] The repository's Pages setting names the chosen hostname.
- [ ] DNS routes the configured hostname correctly.
- [ ] The custom-domain build serves at `/` without a repository prefix.
- [ ] HTTPS is enforced and assets load correctly.
- [ ] The alternate hostname redirects as intended, if configured.

If you did not connect a domain, mark the domain exercise as planned rather than completed. A working GitHub Pages address is a valid deployment result.

## Ask Codex for a source review

```text
CONTEXT:
I have completed Stage 4 of a beginner Astro course.
My public URL is: [ACTUAL URL].
My publishing branch is: [BRANCH].

TASK:
Review the local Astro configuration, base-aware links and Pages workflow.
Check consistency between the expected public address, site/base and generated URLs.
Run pnpm build. Identify concrete source or workflow problems, if any.

LIMITS:
Do not edit files, upgrade dependencies, push, deploy or change external settings.

CHECK:
Explain the source-to-live-site process in a short paragraph.
Distinguish local checks from remote workflow, DNS and browser results
that you cannot verify from this project alone.
```

Deal with a concrete issue through one small task at a time.

## Keep a short handover note

The website owner should know the repository, public URL, publishing branch, update process and who maintains the domain. Keep login credentials out of the repository.

| When | Useful maintenance action |
| --- | --- |
| After every published change | Check the workflow and affected live pages |
| When contact or services change | Update the relevant content and publish a checked build |
| Before changing dependencies | Save a working version and plan a separate upgrade task |
| Before domain renewal is due | Confirm the owner has arranged renewal with the registrar |
| Before moving hosting or disabling Pages | Plan the source config and DNS changes together |

Reverting source alone will not reverse external domain settings. If moving away from Pages, update the routing records so they do not keep pointing at hosting you no longer use.

## The course result

You have learned to find the responsible file, make a small change, inspect it, test it, save it and publish it.

Keep using that process as the website grows. New services, layout improvements and future integrations can each be handled as a separate, reviewable task.

[Previous](11-connect-domain-and-https.md) · [Stage overview](README.md)
