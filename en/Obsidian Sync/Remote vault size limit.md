Each Obsidian Sync account can have up to 50 GB of data, including [[version history]] and [[attachments]]. When you reach the maximum size of your account limit, Sync will cease syncing files, and you will be prompted to prune your remote vault(s).

## Identify and delete large files

To identify and delete large files from the vault:

1. Open **Settings → Sync**.
2. Select **View largest files** next to **Vault size over limit**. If you don’t see **Vault size over limit**, it means you haven’t hit the size limit yet.
3. Close the **View largest files** modal.
4. Delete some of the large files you no longer need.
5. Wait a little bit.
6. Open **Settings → Sync**.
7. Select **Prune** next to **Vault size over limit**. This will remove the deleted files from the remote vault to free up space.

After the prune syncs to the server, Obsidian Sync should resume functioning properly.

## Create new remote vault

Create a new remote vault lets you drop the version history and give you a chance to set up excluded large files before syncing. Please be sure that you don’t version history any more before proceeding.

To sync to a new remote vault, do the following:

1. Open **Settings → Sync**.
2. Select **Manage** next to **Remote vault**.
3. Choose **Create new vault** and follow the steps to create it. If you run out of vaults, you might need to disconnect from the current remote vault and delete it first.
4. Set up excluded files before you start syncing to the new remote vault (optional).
5. Start syncing to the new remote vault.

The new remote vault should be smaller than the previous vault, because of the absence of version history and excluded files.