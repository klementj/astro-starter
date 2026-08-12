# Exercise 6 — Create the first ServiceCard

## Goal

Create a small reusable component that represents one service.

This will prepare us for using the same component several times.

---

# What is a service card?

A service card might display:

```text
Title
Short description
Link
```

For example:

```text
Fleksjob

Kort introduktion til rådgivning om fleksjob.

Læs mere
```

---

# First create only ONE card

Do not build the whole services section yet.

We want to understand one component first.

---

# Ask Codex

```text
CONTEXT:
This is a small Astro website.
I am learning reusable components.

TASK:
Create:

src/components/ServiceCard.astro

For now, hard-code one example card inside it with:
- title: "Fleksjob"
- description: "Kort introduktion til rådgivning om fleksjob."
- link text: "Læs mere"

Add one ServiceCard to the homepage underneath the Hero.

LIMITS:
Only create one card.
Do not create props yet.
Do not install packages.
Do not add JavaScript.
Keep the styling simple.

CHECK:
Tell me which files changed.
Explain why this component may later need props.
Run pnpm build afterwards.
```

---

# Look at the result

Your page now contains one service card.

The important question is:

> What happens if we want five different service cards?

If the text is hard-coded inside the component, all copies would contain the same information.

We will solve this in the next exercise.

---

# Checkpoint

Answer:

```text
The ServiceCard component is stored in:

Right now its content is:

A problem with hard-coded card content is:
```

---

# Commit

Suggested message:

```text
Create first ServiceCard component
```

---

## Next exercise

➡️ [Exercise 7 — Use props for service cards](07-use-props-for-service-cards.md)
