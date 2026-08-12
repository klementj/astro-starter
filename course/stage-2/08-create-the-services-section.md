# Exercise 8 — Create the Services section

## Goal

Group the service cards into their own homepage section.

This introduces another useful kind of component:

> a component that contains other components.

---

# Current situation

The homepage may currently use several `ServiceCard` components directly.

Conceptually:

```text
index.astro
├── Header
├── Hero
├── ServiceCard
├── ServiceCard
├── ServiceCard
└── Footer
```

We can make the homepage easier to read by grouping the cards.

---

# Ask Codex

```text
CONTEXT:
The homepage currently renders three ServiceCard components.
I am learning how Astro components can contain other components.

TASK:
Create:

src/components/ServicesSection.astro

Move the three ServiceCard usages into this component.

The section should have:
- a section heading: "Ydelser"
- a short temporary introduction
- the three existing service cards

Then use ServicesSection on the homepage instead of placing the cards directly there.

LIMITS:
Do not change ServiceCard's prop interface.
Do not create the destination service pages.
Do not install packages.
Do not add JavaScript.
Keep styling simple.

CHECK:
Tell me which files changed.
Explain how ServicesSection uses ServiceCard.
Run pnpm build afterwards.
```

---

# Structure

You should now have something conceptually like:

```text
index.astro
├── Header
├── Hero
├── ServicesSection
└── Footer

ServicesSection.astro
├── ServiceCard
├── ServiceCard
└── ServiceCard
```

---

# Important idea

Components can use other components.

This lets us build the website in layers.

---

# Checkpoint

Answer:

```text
ServicesSection contains:

ServiceCard contains:

The homepage contains:
```

---

# Commit

Suggested message:

```text
Create Services section
```

---

## Next exercise

➡️ [Exercise 9 — Create About and Contact sections](09-create-about-and-contact.md)
