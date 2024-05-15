---
aliases:
  - Obsidian Sync/Remote vault size limit
  - storage limits
  - Obsidian Sync/Storage limits
---
## Plans

To sync your notes with [[Introduction to Obsidian Sync|Obsidian Sync]] you need a subscription plan. You can purchase a Sync plan by logging into [your account](https://obsidian.md/account). See the [Sync landing page](https://obsidian.md/sync) for pricing.

Below is a comparison between the Standard plan and Plus plan:

|                                                  | Sync Standard | Sync Plus       |
| ------------------------------------------------ | ------------- | --------------- |
| Synced vaults                                    | 1             | 10              |
| Maximum file size                                | 5 MB          | 200 MB          |
| Total storage                                    | 1 GB          | 10 GB to 100 GB |
| [[Version history]]                              | 1 month       | 12 months       |
| Devices                                          | Unlimited     | Unlimited       |
| [[Collaborate on a shared vault\|Shared vaults]] | Yes           | Yes             |

## Storage limits

The amount of data you can store using [[Introduction to Obsidian Sync|Obsidian Sync]] depends on your subscription plan. On the Sync Plus plan you can purchase additional storage up to 100 GB via [your account dashboard](https://obsidian.md/account). See [[Sync limitations]] for more details.

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

## Upgrade your plan

You can upgrade your plan by logging into [your account dashboard](https://obsidian.md/account). From there you will be able to upgrade your plan from Sync Standard to Sync Plus, and increase storage up to 100 GB.

## Downgrade your plan

If you want to downgrade your Sync plan but your storage use exceeds the new plan's limit, you will need to free up space in your remote vault. However, there is no way to quickly remove specific files from an existing remote vault, because attachments are held in version history for up to two weeks and version history counts towards your storage limit.

The fastest way to reduce the amount of Sync storage you use is to [[#create a new remote vault]] with attachments disabled, then delete the old remote vault that exceeds the storage limits. Note that you will lose version history by doing so.

### Preserve version history

Attachments are held in your [[version history]] for up to two weeks. If you plan to downgrade in the near future, you can start by removing attachments from your local vault. After two weeks these will be purged from the remote vault and will no longer count towards your storage limit. At this point you will be able to downgrade your plan while preserving the version history for other file types, such as Markdown files.