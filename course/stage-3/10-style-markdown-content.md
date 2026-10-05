# Exercise 10 — Style the Markdown content

## Goal

Make longer service text readable on both a phone and a larger screen.

The Markdown files should remain focused on wording. Put appearance rules in the layout or the existing stylesheet.

## Look before editing

Open a service page. Look at paragraph width, space around headings, list indentation and link visibility.

Try a narrow browser window. Is there horizontal scrolling? Does long text fit?

## The wrapper we already made

`ServicePageLayout.astro` contains `.service-page` and `.service-content` wrappers.

If you add styles inside that layout, a small starting point is:

```astro
<style>
  .service-page {
    max-width: 68ch;
    margin-inline: auto;
    padding: 2rem 1rem;
    overflow-wrap: anywhere;
  }

  .service-content {
    line-height: 1.65;
  }

  .service-content :global(h2) {
    margin-block: 2rem 0.75rem;
  }

  .service-content :global(p) {
    margin-block: 1rem;
  }

  .service-content :global(ul),
  .service-content :global(ol) {
    padding-inline-start: 1.5rem;
  }

  .service-content :global(li + li) {
    margin-block-start: 0.5rem;
  }

  .service-content :global(a) {
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }
</style>
```

Adapt this to your existing spacing rules. If the shared layout already adds horizontal padding, avoid doubling it unnecessarily.

## Why `:global()` appears here

The Markdown body is rendered by a child component. Astro's default scoped styles do not automatically reach all of that child's elements.

`.service-content :global(h2)` reaches headings inside our content wrapper. The wrapper keeps the rule limited to this part of the page.

If you put these rules in an existing global `.css` file instead, use ordinary selectors such as `.service-content h2` without `:global()`.

`68ch` is a text-based width, and `line-height` controls the space between lines. You can adjust these values after looking at the result.

## Ask Codex

```text
CONTEXT:
My service detail pages display Markdown inside a service-content wrapper.
I want the longer text to be comfortable to read.

TASK:
Make a small typography and spacing change for service detail content.
Use the existing CSS approach and target the service page/content wrappers.
Allow scoped layout styles to reach rendered Markdown with :global() where needed.
Keep paragraphs readable, lists indented and links visibly identifiable.

LIMITS:
Do not change service wording, site colours or the homepage design.
Do not install a typography package or remove visible keyboard focus.

CHECK:
Run pnpm build. Explain the few CSS properties changed.
Tell me which file to inspect for the visual change.
```

## Test and commit

Check all four pages at a phone-sized width and a wide width. Zoom to 200% and check that the content remains usable.

Inspect the diff, build, and commit with `Improve service content readability`.

## Checkpoint

Which file would you edit to change the service text? Which file would you edit to change paragraph spacing?

Reference: [Scoped and global styles](https://docs.astro.build/en/guides/styling/#global-styles).

[Previous](09-control-order-and-drafts.md) · [Stage overview](README.md) · [Next: Build and check navigation](11-build-preview-and-check-links.md)
