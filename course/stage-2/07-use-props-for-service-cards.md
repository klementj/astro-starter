# Exercise 7 — Learn Astro props

## Goal

Make `ServiceCard.astro` reusable with different content.

This introduces **props**.

---

# What is a prop?

A prop is information that is passed into a component.

Imagine a reusable card template:

```text
ServiceCard
├── title
├── description
└── link
```

Instead of storing one fixed title inside the component, the homepage can provide a different title each time.

Conceptually:

```text
ServiceCard
title = Fleksjob

ServiceCard
title = Sygedagpenge

ServiceCard
title = Førtidspension
```

Same component.

Different information.

---

# Ask Codex to explain before editing

```text
I am learning Astro props.

Do not modify the project yet.

Look at ServiceCard.astro and explain how we can replace its hard-coded title, description and link with props.

Use a small example.
Explain what Astro.props means in beginner-friendly language.
```

Read the explanation.

---

# Ask Codex to implement props

```text
CONTEXT:
The project has a ServiceCard.astro component with hard-coded content.
I am learning Astro props.

TASK:
Change ServiceCard.astro so it receives:
- title
- description
- href

as props.

Then use the component three times on the homepage with:

1.
title: Fleksjob
description: Hjælp til at forstå muligheder og krav i forbindelse med fleksjob.
href: /ydelser/fleksjob

2.
title: Sygedagpenge
description: Hjælp til at skabe overblik i et sygedagpengeforløb.
href: /ydelser/sygedagpenge

3.
title: Førtidspension
description: Hjælp til at forstå processen og dokumentationen omkring førtidspension.
href: /ydelser/foertidspension

LIMITS:
Do not create those destination pages yet.
Do not install packages.
Do not add JavaScript.
Do not change unrelated components.

CHECK:
Explain how the props move from index.astro into ServiceCard.astro.
Tell me which files changed.
Run pnpm build afterwards.
```

---

# Important idea

The links may point to pages that do not exist yet.

That is okay for this exercise.

We are learning the component structure first.

Later we will create those pages automatically from Markdown.

---

# Draw the data flow

Try to understand:

```text
index.astro
    │
    ├── title
    ├── description
    └── href
           ↓
    ServiceCard.astro
           ↓
      rendered card
```

---

# Checkpoint

Complete:

```text
A prop is:

We use props because:

One prop used by ServiceCard is:
```

---

# Commit

Suggested message:

```text
Make ServiceCard reusable with props
```

---

## Next exercise

➡️ [Exercise 8 — Create the Services section](08-create-the-services-section.md)
