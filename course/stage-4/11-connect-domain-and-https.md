# Exercise 11 — Connect the domain and enable HTTPS

## Goal

Serve the site at the chosen custom hostname and check its HTTPS configuration.

Complete the practical steps only for a domain you control and have planned to use. Otherwise, read the example, record the required changes, and keep the GitHub Pages address.

## Step 1 — Prepare the custom-domain build

In the existing Astro config, change the relevant settings to your actual hostname:

```js
site: 'https://www.example.com',
base: '/',
```

These lines belong inside the existing `defineConfig` object. Keep all unrelated settings.

Run `pnpm build` and `pnpm preview`. Now check the routes at the root: `/`, `/ydelser/`, and all service detail pages. The old repository prefix should no longer be added by the path helper.

Inspect the diff and commit this prepared change. Do not push it until the GitHub setting in Step 2 is saved.

If you had manually typed the repository prefix into links, fix those remaining source links before continuing.

## Step 2 — Save the hostname in GitHub

In the repository's **Settings → Pages**, enter the chosen hostname under Custom domain and save it. Use only the hostname: no `https://`, slash or repository name.

Do this before creating the DNS routing records. Leave GitHub Actions as the publishing source.

For this Actions-based publishing setup, GitHub's custom-domain setting is authoritative. A `public/CNAME` file is not required to configure it; GitHub documents that existing CNAME files are ignored for custom workflow publishing. A DNS CNAME record, used next, is a different thing.

## Step 3 — Set the website DNS records

For a `www` hostname, create a CNAME record pointing to the account or organisation's default GitHub Pages hostname:

| DNS field | Example value |
| --- | --- |
| Type | `CNAME` |
| Name/host | `www`, or `www.example.com` if the provider asks for a full hostname |
| Target/value | `YOUR_ACCOUNT.github.io` |

Use your actual account or organisation. The target must not contain `https://` or `/YOUR_REPOSITORY/`.

Resolve conflicting website records for that same hostname using the saved DNS plan. Preserve email and other unrelated records. Follow your DNS provider's field format.

If you also want the apex domain to reach the site, configure it using GitHub's documented apex records. The currently documented IPv4 option is four A records for `@`:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Check these values against the current GitHub DNS table before entering them. Alternatively, use the provider-supported ALIAS/ANAME approach described there. Do not create a normal apex CNAME that conflicts with other apex records.

When both apex and `www` are correctly configured, GitHub Pages can redirect the alternate hostname to the selected custom hostname. If you configure only `www`, do not expect the bare domain to work automatically.

## Step 4 — Deploy the prepared build

Push the configuration commit to the publishing branch. Wait for its build and deployment to succeed.

The switch involves both hosting configuration and DNS, so the previous address may redirect before the new hostname is fully ready. Check the Pages DNS status and deployed commit rather than repeatedly changing unrelated files.

DNS routing and certificate issuance can take time. If the checks do not succeed, compare the specific saved hostname and DNS records with the official guide.

## Step 5 — Enable and check HTTPS

In Settings → Pages, select **Enforce HTTPS** when it is available. If it is unavailable, check the displayed DNS or certificate status first.

Open the `https://` address, then check all service pages, links and assets again. Test the apex redirect too if you configured it.

If the browser reports mixed content, inspect the assets still requested over `http://`. Update those source URLs to a working HTTPS address, rebuild and redeploy. Do not change ordinary `mailto:` or `tel:` links.

## Ask Codex for the local configuration change

```text
CONTEXT:
My working GitHub Pages site is moving to this owned custom hostname: [HOSTNAME].
I am handling GitHub settings and DNS separately using the course steps.

TASK:
Update Astro site to its HTTPS origin and base to '/'.
Inspect internal links for leftover hardcoded repository prefixes.

LIMITS:
Preserve the website design, integrations and workflow.
Do not change DNS or GitHub settings, add a CNAME file as a substitute for Pages settings,
install packages, push or deploy.

CHECK:
Run pnpm build and explain the changed public URL and link behavior.
List the source files changed and checks still requiring a browser or external settings.
```

## Finish with a record

Record the chosen hostname, successful deployment commit, DNS changes and HTTPS result in your notes. Keep domain registration and recovery details with the owner, outside the public repository.

## Checkpoint

How does a DNS CNAME differ from a file named CNAME? Why did the Astro base change to `/`?

References: [GitHub custom-domain setup and DNS table](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

[Previous](10-plan-a-custom-domain.md) · [Stage overview](README.md) · [Next: Stage 4 review](12-stage-four-review.md)
