# Exercise 2 — Create a simple site shell

## Goal

Create the simplest possible structure for the new website.

Do not focus on visual design yet.

The page should only contain:

```text
Header
Main content
Footer
```

---

# Why start simple?

A website is easier to understand when the basic structure works before detailed styling is added.

We will gradually replace these temporary sections with real components.

---

# Ask Codex

Use:

```text
CONTEXT:
This is a small Astro static website.
The default starter content has been removed.
I am learning Astro and I am a beginner.

TASK:
Create a very simple homepage structure with:

- a header
- a main element
- a footer

Inside the main element, add the heading:
"Socialrådgivning med mennesket i centrum"

Add one short temporary paragraph underneath it.

LIMITS:
Keep everything simple.
Do not create separate components yet.
Do not install packages.
Do not add JavaScript.
Do not try to match the final design yet.

CHECK:
Use semantic HTML.
Tell me which file you changed.
Run pnpm build afterwards.
Explain what header, main and footer mean.
```

---

# Inspect the page

You should now have something conceptually similar to:

```text
<header>
    ...
</header>

<main>
    ...
</main>

<footer>
    ...
</footer>
```

You do not need to memorise the exact HTML.

---

# Important idea — semantic HTML

Elements such as:

```text
header
main
footer
nav
section
```

describe the purpose of different areas of the page.

This makes the structure easier for:

- people
- browsers
- search engines
- accessibility tools

to understand.

---

# Checkpoint

Answer:

```text
<header> is used for:

<main> is used for:

<footer> is used for:
```

---

# Test

Check the page in your browser.

Then run:

```sh
pnpm build
```

---

# Commit

Suggested message:

```text
Create basic site shell
```

---

## Next exercise

➡️ [Exercise 3 — Create the Header component](03-create-the-header.md)
