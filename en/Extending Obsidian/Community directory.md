---
aliases:
  - Plugin and theme listings
  - Community plugin listing page
  - Community theme listing page
description: What a plugin or theme's public listing page on the Obsidian Community directory shows.
permalink: community-directory
---
Every plugin and theme has a public listing page on the [Obsidian Community directory](https://community.obsidian.md). Select a plugin from [[Community plugins#Browse community plugins|Browse]], or a theme from [[Themes#Browse themes|Browse]], in Obsidian, or browse [community.obsidian.md](https://community.obsidian.md) directly, to open its listing page.

This page will help you understand what each section does, from an Obsidian user's point of view.

> [!tip]- Are you a plugin or theme developer?
> Learn how to submit and manage your own plugins and themes in the [Community directory documentation](https://docs.obsidian.md/community-directory).

## Header

The header shows the entry's icon and name, with an **Official** badge if it was made by the plugin or theme's original creators, along with the author's icon and name and the entry's total downloads.

Select **Add to Obsidian** to open the entry directly in Obsidian and install it.

## Overview

The **Overview** tab shows the entry's screenshots, its long description, an excerpt of its README file, and a grid of related plugins or themes in the same category.

## Scorecard

The **Scorecard** tab shows automated health and review metrics for the entry.

An overall health rating, such as Excellent, is broken down into hygiene (whether a README, license, contributing guide, and description are present), maintenance (recent commit and release activity), responsiveness (how many issues have been closed and how many contributors have been active recently), and adoption (installation and star counts).

The review section shows the result of the latest automated scan, such as Passed, grouped into passed checks (for example no known vulnerable dependencies, no obfuscated code, verified GitHub artifact attestations, and which Obsidian APIs the entry uses, such as Vault Read or Vault Write), disclosures (things the entry does that aren't necessarily issues but that you should be aware of, such as accessing your clipboard or making requests to external domains), and other notes (such as using browser storage instead of Obsidian's plugin data APIs).

> [!info]+ Interpreting a lower score
> A plugin or theme with a lower health or review score isn't necessarily unsafe, but it's worth a closer look at its disclosures before installing. Think of it like a traffic light: 
> - 🟢 Few or no disclosures means low risk
> - 🟡 A handful of disclosures, worth checking for things like clipboard or network access
> - 🔴 Several disclosures or warnings means you should carefully review what the entry does before installing it.

## Updates

The **Updates** tab lists the entry's release history, with each release's version and date. Select **View all releases on GitHub** to see the full history in the entry's repository.

## Sidebar

Alongside the tabs, the sidebar shows health and review summaries matching the Scorecard tab, the entry's long description, and details such as its current version, when it was last updated and created, its number of updates and downloads, compatible Obsidian version, supported platforms, and license. If the entry isn't Free, a Payments section explains how its pricing works, for example paid tiers or usage limits. If the author added funding links, a Support link appears here too, along with the author's or organization's icon, name, and links to their other profiles.

## Frequently asked questions

**What's the difference between Free, Optional payment, and Paid on a listing?**
Free means there are no payments involved. Optional payment means the entry relies on a paid third-party service, or locks certain features behind payment, while remaining usable for free. Paid means the entry is only accessible with payment. 

Check the listing's Payments section in the sidebar for specifics on how a particular entry's pricing works.

**Why can't I find or install a plugin or theme I've seen mentioned elsewhere?**
The author may have archived it. Archiving removes an entry from the community directory and prevents new installations.

**What's the difference between the Health and Review scores on a listing?**
Health reflects the entry's ongoing hygiene and maintenance, such as recent commits and issue responsiveness. Review reflects the result of the latest automated scan of a release.
