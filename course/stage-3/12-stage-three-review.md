# Exercise 12 — Stage 3 review

## Goal

Explain how your website now turns service content into cards and pages.

You do not have to memorise the implementation. You should be able to identify which file to change for a particular job.

## Explain these terms

In your learning notes, write a short explanation in your own words:

- Markdown body
- Frontmatter
- Content collection
- Loader
- Schema
- Collection entry
- Page layout and slot
- `getStaticPaths()`
- Static build
- Draft filtering

## Follow one service through the project

Choose Fleksjob and fill in:

```md
## How one service reaches the website

- The source Markdown file is:
- Its title is stored in:
- Its longer text is stored in:
- The configuration that finds it is:
- The code that displays its card is:
- Its entry ID is:
- Its generated URL is:
- The route template is:
- The layout used by the route is:
- The CSS that styles its body text is:
```

Open the relevant files while you answer.

## A small independent task

Without asking Codex to edit files:

1. Improve one sentence in a service's Markdown body.
2. Change its summary description.
3. Check where the description appears and where the body appears.
4. Inspect the diff.
5. Run `pnpm build` and inspect the preview.
6. Commit with a message that describes the wording change.

You may ask Codex to explain something, but make the edits yourself.

## Practical checklist

- [ ] The homepage uses the services collection for its cards.
- [ ] The overview links to each service's page.
- [ ] Four service pages are generated from one route template.
- [ ] Each page shares the intended header and footer.
- [ ] Page titles and descriptions come from the service metadata.
- [ ] Draft entries are excluded from cards, the overview and generated routes.
- [ ] Card and overview ordering follow the order field.
- [ ] A new service can be added without adding another page template.
- [ ] Markdown content is readable on narrow and wide screens.
- [ ] Navigation works from detail pages as well as the homepage.
- [ ] The production build passes and the preview works.
- [ ] No intentional validation error remains.
- [ ] The final changes are committed.

## Ask Codex for a review

```text
CONTEXT:
I have completed Stage 3 of a beginner Astro course.
The site uses Markdown services, a loader-based collection,
generated static detail pages and collection-driven cards.

TASK:
Review the implementation without modifying files.
Check that the content, route template and layouts connect correctly.
Check draft filtering across the cards, overview and getStaticPaths.
Check ordering in the two service lists and metadata passed to the layout.
Look for duplicated service text or document structure.
Run pnpm build.

LIMITS:
Do not install packages, upgrade Astro, redesign or fix anything yet.

CHECK:
Report concrete issues with their filenames, if there are any.
Explain the content-to-page flow in a short beginner-friendly paragraph.
Distinguish build results from visual or navigation checks you have not performed.
```

If the review finds a real problem, handle one small fix at a time. Repeat the checks affected by that fix before committing it.

## Decide where a future change belongs

| Requested change | Where to start |
| --- | --- |
| Change a service's wording | Its Markdown file |
| Reorder services | The Markdown order fields |
| Hide an unfinished service | Its draft field, then verify all filters |
| Change all card appearances | The service card's styling |
| Change all service page structures | The service page layout |
| Change how service URLs are generated | The dynamic route template |
| Require an additional metadata field | The collection schema and all service files |

## Stage 3 complete

You now have a website whose service content can grow while reusing the same components and page templates.

Stage 4 will cover deployment: GitHub Pages, production URLs and base paths, build automation, and a custom domain. Keep this stage's working version before starting it.

[Previous](11-build-preview-and-check-links.md) · [Stage overview](README.md)
