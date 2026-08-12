# Exercise 9 — Create your first Markdown file

## Goal

Learn what Markdown is before we use it to create website content.

---

## Create a file

In the root of the project, create:

```text
notes.md
```

Add:

```md
# Website notes

This project will eventually become a real website.

## Things I have learned

- Astro builds the website.
- `.astro` files can create pages and components.
- CSS controls appearance.
- Git records the history of my changes.
- Codex can help me understand and modify the project.

## Things I do not understand yet

- Components
- Layouts
- Content collections
- Deployment
```

Save it.

---

## Did the website change?

No.

That is expected.

Creating a Markdown file does **not automatically** make it part of the website.

Later we will tell Astro how our Markdown files should be used.

---

# Markdown basics

A heading:

```md
# Main heading
```

A smaller heading:

```md
## Smaller heading
```

A paragraph:

```md
This is normal text.
```

A list:

```md
- First item
- Second item
- Third item
```

A link:

```md
[Astro](https://astro.build)
```

Markdown is designed to be easy to read even before it becomes HTML.

---

## Important idea

Eventually, we want a useful separation:

```text
.astro
structure and reusable design

.css
appearance

.md
content
```

---

## Commit

Commit the new file.

Suggested message:

```text
Add learning notes
```

---

## Next exercise

➡️ [Exercise 10 — Writing good Codex prompts](10-writing-good-codex-prompts.md)
