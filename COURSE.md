# Astro Website Course

This course starts with a working **Astro Starter Kit: Basics** project.

Do the lessons in order.

Do not skip ahead to building the final website yet.

---

# Lesson 1 — Start the website

## Goal

Run the existing Astro website.

You are not changing anything yet.

---

## Step 1

Open the project folder.

Find the file:

```text
package.json
```

You do not need to understand everything inside it.

For now, just know:

> `package.json` describes this project and the tools it uses.

---

## Step 2

Open a terminal inside the project folder.

Run:

```bash
pnpm install
```

This installs the packages the project needs.

Then run:

```bash
pnpm run dev
```

Astro should show you a local address similar to:

```text
http://localhost:4321
```

Open that address in your browser.

You should see the Astro starter website.

---

## Checkpoint

Before continuing, answer:

* Can I see the website?
* Is the development server still running?
* What command started it?

Write your answer here:

```text
Command:

What happened:
```

---

# Lesson 2 — Find the homepage

## Goal

Discover which file controls the homepage.

Do not ask Codex to modify anything yet.

---

## Ask Codex

Use this prompt:

```text
I am learning Astro and I am a beginner.

Please inspect this project.

Do not modify any files.

Tell me:

1. Which file controls the homepage?
2. Which important folders should I know about right now?
3. What is the purpose of the src folder?

Keep the explanation short and beginner-friendly.
```

Read the answer.

Now find the homepage file yourself.

It will normally be inside:

```text
src/pages/
```

---

## Important idea

Astro uses files inside:

```text
src/pages/
```

to create website pages.

For example:

```text
src/pages/index.astro
```

creates the homepage.

The word:

```text
index
```

usually means the default page for a location.

---

## Checkpoint

Complete these sentences:

```text
My homepage file is:

The pages folder is:

An .astro file is:
```

Do not worry about having perfect definitions.

Write what you currently understand.

---

# Lesson 3 — Make your first manual change

## Goal

Change one piece of text without Codex.

This is important.

You need to know that you can edit the project yourself.

---

## Step 1

Open the homepage file.

Find some visible text from the starter website.

Change one heading.

For example, change it to:

```text
My first Astro website
```

Save the file.

Look at the browser.

Astro should automatically update the website.

---

## What just happened?

You changed:

```text
source code
```

Astro noticed the change and rebuilt the page.

The browser then showed the new version.

---

## Experiment

Change the heading again.

For example:

```text
Jeg bygger min første Astro hjemmeside
```

Save.

Look at the browser again.

---

## Checkpoint

Answer:

```text
Which file did I edit?

What happened when I saved it?

Did I need to restart Astro?
```

---

# Lesson 4 — Look at a diff

## Goal

Understand what changed.

This introduces an important Git concept:

> a diff

A diff shows the difference between the old version and the new version.

---

## In your Git tool

Look at the changed files.

You should see the homepage file listed as modified.

Open the diff.

Usually:

```text
- old text
+ new text
```

means:

```text
removed
added
```

---

## Important rule

Before accepting a Codex change later, always look at the diff.

You do not have to understand every character.

Ask yourself:

* Did it change the file I expected?
* Did it change other files?
* Did it delete something unexpected?
* Is the change roughly the size I expected?

---

## Checkpoint

Write:

```text
A diff is:

The file currently changed is:
```

---

# Lesson 5 — Make your first Git commit

## Goal

Create a safe point.

A Git commit is like a named save point in the history of the project.

It is more powerful than pressing Save.

---

## Commit your change

Create a commit with a message similar to:

```text
Change homepage heading
```

---

## Important idea

A good commit describes what changed.

Good:

```text
Change homepage heading
```

Good:

```text
Add contact section
```

Good:

```text
Fix mobile navigation
```

Not very useful:

```text
stuff
```

or:

```text
changes
```

---

## Checkpoint

You should now have:

```text
Starter project commit
        ↓
Change homepage heading
```

You have created your first safe point.

---

# Lesson 6 — Let Codex make one tiny change

## Goal

Use Codex to make a controlled change.

For this exercise, Codex is allowed to modify the project.

---

## Ask Codex

```text
I am learning Astro and I am a beginner.

TASK:
Change the homepage heading to:

"Socialrådgivning med mennesket i centrum"

LIMITS:
Only make the smallest change necessary.
Do not install packages.
Do not redesign the page.
Do not change unrelated files.

AFTERWARDS:
Tell me which file you changed.
Explain the change in beginner-friendly language.
Check that the Astro project still builds.
```

---

## Do not immediately commit

First inspect the change.

Look at the diff.

Ask yourself:

```text
Did Codex change the file I expected?

Did it change anything else?

Does the website still work?

Can I roughly explain what changed?
```

If yes, commit it.

Suggested commit:

```text
Update homepage heading
```

---

# Lesson 7 — Ask Codex to explain code

## Goal

Use AI for learning, not only for generating code.

Choose a small section from the homepage `.astro` file.

Ask:

```text
I am learning Astro.

Explain this code to me in beginner-friendly language:

[PASTE SMALL SECTION HERE]

Explain:

1. what is normal HTML
2. what is Astro-specific
3. what appears on the webpage

Do not suggest improvements yet.
```

---

## Important idea

You do not need to memorise the code.

You should gradually become able to recognise things.

For example:

```html
<h1>Hello</h1>
```

is an HTML heading.

And:

```astro
---
const title = "Hello";
---
```

is Astro code that runs before the HTML is generated.

We will learn more about this later.

---

# Lesson 8 — CSS controls appearance

## Goal

Make one visual change.

Ask Codex first to locate the styling.

```text
I am learning Astro and CSS.

Inspect the project but do not change anything.

Tell me where the styling for the homepage comes from.

Show me the most relevant CSS file or style section.

Keep the explanation short.
```

Open the file Codex identifies.

Try to find something related to:

```css
font-size
```

or:

```css
color
```

or:

```css
background
```

---

## Make one small visual change

You can do this manually or ask Codex.

Example Codex prompt:

```text
I am learning Astro and CSS.

Make the homepage main heading slightly larger.

Only change the CSS needed for the heading.

Do not change the HTML structure.
Do not change colours.
Do not install anything.

Explain which CSS property you changed and what it does.
```

Inspect the diff.

Test the website.

Commit the working result.

Suggested commit:

```text
Adjust homepage heading size
```

---

# Lesson 9 — Create a simple Markdown file

## Goal

Learn what Markdown feels like before connecting it deeply to Astro.

Create a file called:

```text
notes.md
```

in the root of the project.

Add:

```md
# Website notes

This project will eventually become a real website.

## Things I have learned

- Astro builds the website.
- `.astro` files can create pages and components.
- CSS controls appearance.
- Git creates a history of my changes.
- Codex can help me understand and modify the project.

## Things I do not understand yet

- Components
- Layouts
- Content collections
- Deployment
```

Save the file.

Nothing appears on the website.

That is expected.

---

## Important idea

Markdown is just a text format.

Creating a Markdown file does **not automatically mean it becomes a webpage**.

Later we will tell Astro how our Markdown content should be used.

---

# Lesson 10 — The four-part Codex prompt

From now on, use this structure when possible.

## CONTEXT

Tell Codex what it is looking at.

Example:

```text
This is a small Astro static website.
I am learning Astro and I am a beginner.
```

## TASK

Give it one clear job.

Example:

```text
Add a short paragraph underneath the homepage heading.
```

## LIMITS

Tell it what not to touch.

Example:

```text
Only modify the homepage.
Do not install packages.
Do not redesign other sections.
```

## CHECK

Tell it how to verify the work.

Example:

```text
Run the build afterwards.
Tell me which files changed.
Explain the change.
```

Put together:

```text
CONTEXT:
This is a small Astro static website.
I am learning Astro and I am a beginner.

TASK:
Add the following paragraph underneath the homepage heading:

"Jeg hjælper dig med at skabe overblik i din sociale sag."

LIMITS:
Only modify the homepage.
Do not install packages.
Do not redesign anything else.

CHECK:
Run the build afterwards.
Tell me which files changed.
Explain what you changed in beginner-friendly language.
```

---

# Lesson 11 — What not to ask Codex yet

For now, avoid prompts like:

```text
Copy this entire website.
```

```text
Make this look professional.
```

```text
Build all the pages.
```

```text
Improve everything.
```

```text
Fix the whole project.
```

These tasks are too large.

They also make it difficult to understand what changed.

Later we will divide the real website into pieces such as:

```text
Header
Hero
Service card
About section
Contact section
Footer
```

Each piece can become a separate task.

---

# Lesson 12 — Your first review

You should now be able to explain these words in your own language:

```text
Astro

HTML

CSS

Markdown

repository

Git

commit

diff

Codex
```

You do not need textbook definitions.

For example:

```text
Commit:

A saved point in the history of my project that I can return to.
```

is completely fine.

---

# End of Stage 1

At this point you have:

* run an Astro project
* found a page
* manually edited code
* used CSS
* looked at a diff
* created commits
* asked Codex to inspect code
* asked Codex to make a controlled change
* used Markdown
* learned a safe prompting pattern

You are now ready to start turning the starter project into the real website.

Do not start the conversion until your instructor gives you the next stage.
