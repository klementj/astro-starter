# Exercise 10 — Plan and verify a custom domain

## Goal

Understand the settings involved before moving the website to its own domain.

This is optional. If you do not control a domain, write a plan and continue using the working GitHub Pages URL. Do not enter `example.com` into real account settings.

## Recognise the four responsibilities

| Place | Responsibility |
| --- | --- |
| Domain registrar | Registration and renewal of the domain name |
| DNS provider | Records that direct the domain's hostnames |
| GitHub Pages settings | Which custom hostname belongs to this site |
| Astro configuration | Which public origin and base path the build expects |

The registrar and DNS provider may be the same company, but they are different functions. Connecting a website usually needs specific DNS records, not a transfer of the domain registration.

## Choose the main hostname

This course's worked example uses `www.example.com` as the main website address. `example.com` is the apex, the hostname without `www`.

Use the real hostname agreed with the website owner. For a domain already serving another website, plan the switch with that owner before editing records. Take a copy of the existing DNS settings so you know which entries serve the website and which serve other services.

Do not remove email records such as MX or unrelated TXT records. Do not change nameservers just to follow this example.

## Write the plan

```md
## Custom-domain plan

- Domain I control:
- Main website hostname:
- GitHub account/organisation hosting the repository:
- Repository:
- DNS provider:
- Current website records:
- Existing email and other records to preserve:
- Planned Astro site value:
- Planned Astro base value: /
- Current GitHub Pages URL to use while preparing:
```

The domain will normally serve this website at its root, so the repository base prefix will be removed from the build. The path helper from Exercise 4 makes that transition easier.

## Verify ownership in GitHub

If you are proceeding with a real domain, first use GitHub's domain verification feature.

Open the hosting account's **Settings → Pages** and add a verified domain. For an organisation, use its organisation settings. Verification takes place at account or organisation level, not in the repository's Pages screen.

GitHub supplies a specific TXT record name and value. Copy those exact values into the DNS provider's appropriate fields, then use GitHub's Verify action when the record is visible. Keep that verification record afterward.

Do not invent a verification token or reuse the example from someone else's account. DNS changes may take time to appear.

## Keep planning separate from routing

The verification TXT record proves ownership. It does not by itself route the website to GitHub Pages.

In the next exercise, save the chosen hostname in the repository's Pages settings before adding the website routing records.

## Ask Codex to check the plan

```text
Explain this custom-domain plan in beginner-friendly language:
[PASTE PLAN WITHOUT PASSWORDS OR TOKENS]

Check which Astro settings will change when the site moves from a repository path
to a custom-domain root. Distinguish account-level domain verification,
repository Pages settings and DNS routing.
Do not edit files, change DNS, purchase anything or deploy.
```

## Checkpoint

Which provider holds the domain registration? Which screen verifies ownership? Which setting will associate the hostname with this repository?

Reference: [Verifying a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

[Previous](09-publish-updates-and-undo.md) · [Stage overview](README.md) · [Next: Connect domain and HTTPS](11-connect-domain-and-https.md)
