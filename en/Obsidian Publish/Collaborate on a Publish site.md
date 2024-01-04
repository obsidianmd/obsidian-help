---
aliases:
  - Obsidian Publish/Collaborating
---
Learn how to collaborate on your [[Introduction to Obsidian Publish|Obsidian Publish]] site with other Obsidian users. By adding your friends and colleagues as collaborators, they can publish changes to your site.

Only the site owner needs an active subscription for Obsidian Publish. Collaborators only need an [Obsidian account](https://obsidian.md/account).

> [!warning]
> Before you publish changes to a shared site, make sure to [[#Syncing changes between collaborators|sync changes from other collaborators]]. Otherwise, you risk overwriting changes from other collaborators.

## Add a collaborator to a site

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. In the **Publish changes** dialog, click **Change site options** (cog icon).
3. Next to **Site collaboration**, select **Manage**.
4. In **Invite user**, enter the email of the collaborator.
5. Select **Add**.

## Remove a collaborator from a site

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. In the **Publish changes** dialog, click **Change site options** (cog icon).
3. Next to **Site collaboration**, select **Manage**.
4. Next to the collaborator you want to remove, select **Remove user** (cross icon).

## Sync changes between collaborators

Obsidian Publish doesn't sync published changes between local vaults automatically. Instead, collaborators need to manually sync changes from other collaborators.

To update a local note with changes from the live site:

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. Right-click the change you want to sync, and then select **Use live version**. **This will overwrite the note in your local vault.**

> [!tip]
> We recommend that you use another tool to sync changes between vaults, such as [[Introduction to Obsidian Sync|Obsidian Sync]] or [git](https://git-scm.com/).

## Permissions

The following table lists the available site permissions for owners and collaborators:

| Action                             | Collaborator | Owner |
|------------------------------------|:------------:|:-----:|
| Publish new pages                  | ✓            | ✓     |
| Publish changes to published pages | ✓            | ✓     |
| Unpublish pages                    | ✓            | ✓     |
| Configure site options             |              | ✓     |
| Manage permissions                 |              | ✓     |
