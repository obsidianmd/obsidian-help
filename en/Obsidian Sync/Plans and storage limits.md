---
aliases:
  - Obsidian Sync/Remote vault size limit
  - storage limits
  - Obsidian Sync/Storage limits
---

## Plans

Obsidian Sync offers a flexible plan that allows you to choose your maximum storage based on your needs: 10 GB or 100GB. This plan can be purchased within [your account](https://obsidian.md/account). 

The features of this plan is included below:

|                       | Plus         |
| --------------------- | ------------ |
| Vaults                | 10           |
| Maximum file size     | 200 MB       |
| Total storage         | 10 to 100 GB |
| [[Version history\|Revision history]]      | 12 months    |
| Devices               | Unlimited    |
| [[Collaborate on a shared vault\|Shared vaults]]         | Yes          |

## Storage limits

The amount of data you can store using [[Introduction to Obsidian Sync|Obsidian Sync]] is defined by your subscription plan. Additional Sync storage can be purchased up to 100 GB via your [account dashboard](https://obsidian.md/account). See [[Sync limitations]] for more details.

There is a single account-wide storage limit for all notes across your vaults. [[Version history]] and [[attachments]] are also counted towards your account's storage limit.

When you reach your account's storage limit, the Sync plugin will cease syncing files, and you will be prompted to prune your remote vault(s).

### Identify and delete large files

To identify and delete large files from the vault:

1. Open **Settings → Sync**.
2. Select **View largest files** next to **Vault size over limit**. 
	1. If you don’t see **Vault size over limit**, it means ==you haven’t hit the size limit== yet.
3. Close the **View largest files** modal.
4. Delete some of the large files you no longer need.
5. Wait for Obsidian sync to finish the task. This can take a while.
6. Open **Settings → Sync**.
7. Select **Prune** next to **Vault size over limit**. This will remove the deleted files from the remote vault to free up space.

After the prune syncs to the server, Obsidian Sync should resume functioning.

### Create a new remote vault

You can **create a new remote vault** to exclude large files before syncing. The version history for your files will be reset if you create a new remote vault. Please be sure that you don’t need version history for older files before proceeding.

To sync to a new remote vault, follow these steps:

1. Open **Settings → Sync**.
2. Select **Manage** next to **Remote vault**.
3. Choose **Create new vault** and follow the steps to create it. If you run out of vaults, you might need to [[Set up Obsidian Sync#Disconnect from a remote vault|disconnect]] from the current remote vault and [[Set up Obsidian Sync#Delete a remote vault|delete]] it first.
4. Set up excluded files before you start syncing to the new remote vault.
5. Restart Obsidian to apply your changes.
6. Open **Settings → Sync**.
7. Select resume to start syncing to the new remote vault.

The new remote vault should be smaller than the previous vault, because of the absence of version history and excluded files.

## Downgrading your plan

With the introduction of multiple tiers of Sync plans, you can now upgrade and downgrade your storage limits.

If you choose to downgrade your Sync plan and you are over the plan's allotted capacity, you will need to free up space within your remote vault to successfully continue syncing under your new plan limits.

Unlike hitting the storage limit on an existing plan, we do not allow the removal of existing remote vault content when downgrading, including the version history. Files will remain within the version history for up to a year. Therefore, the first recommended option to quickly downgrade is to [[#create a new remote vault]].

### Remove attachments

As detailed in [[Version history]], attachments are held in the version history for up to two weeks. If you know you will be downgrading in the near future, remove attachments from your local vault sooner rather than later to have them fully removed from your remote vault once your version history purges them.
