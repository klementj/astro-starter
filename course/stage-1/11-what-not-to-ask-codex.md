# Exercise 11 — Learn what not to ask Codex

## Goal

Learn why large, vague AI tasks are difficult to supervise.

---

# Avoid prompts like these

```text
Copy this entire website.
```

```text
Build the whole website.
```

```text
Make this look professional.
```

```text
Improve everything.
```

```text
Fix the whole project.
```

These requests may result in many files changing at once.

That makes it harder to understand:

- what Codex did
- why it did it
- whether it was necessary
- where a mistake came from

---

# Divide large jobs into smaller jobs

Instead of:

```text
Build the homepage.
```

we may later use:

```text
Create the header.
```

then:

```text
Create the hero section.
```

then:

```text
Create one reusable service card.
```

then:

```text
Add the contact section.
```

then:

```text
Create the footer.
```

Each task has a clear result.

---

# The project will eventually contain pieces like

```text
Header
Hero
Service cards
About section
Contact section
Footer
```

These pieces can become separate Astro components.

That makes both the website and the AI tasks easier to manage.

---

# When something breaks

Also avoid:

```text
It doesn't work. Fix it.
```

Instead, give Codex the actual error.

Start with:

```text
I received this error:

[PASTE ERROR]

Do not change anything yet.

Explain what the error means and which file I should inspect first.
```

Then decide what needs to be fixed.

---

## Checkpoint

Which is easier to supervise?

```text
Build my whole website.
```

or:

```text
Add one footer component.
Only change the files required for the footer.
```

Explain why in your own words.

---

## Next exercise

➡️ [Exercise 12 — Stage 1 review](12-stage-one-review.md)
