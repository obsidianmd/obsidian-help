This page lists common issues that you might encounter, and how to address them.

![[Sync your notes across devices#^sync-files-on-demand]]

## Conflict resolution

A conflict happens when you make changes to the same file on two or more devices between syncs. For example, you might have changed a file on your computer, and before that change is uploaded, you also change the same file on your phone.

Conflicts usually happen more frequently if you work offline, since there are more changes and a longer period of time between syncs and thus more potential conflicts.

When Sync downloads a new version of a file, and finds that there are conflicts with the local version, the changes are merged with Google's [diff-match-patch](https://github.com/google/diff-match-patch) algorithm.

> [!help] To find when conflicts have happened, you can search for "Merging conflicted file" in **Settings → Sync → Sync activity → View**.

## Obsidian Sync deleted a note I just created on two devices

Generally, Obsidian Sync tries to [[#Conflict resolution|resolve conflicts]] between devices by merging the content of the conflicting notes. Unfortunately, merging conflicting notes can cause issues for users who *automatically generate* or *alter notes* on startup, for example using [[Daily notes]].

If a note was created locally on a device less than a couple of minutes before Sync downloads a remote version of that note, then Sync keeps the remote version without attempting to merge the two. You can still recover the local version using [[File recovery]].

## What does "Vault limit exceeded" mean?

Your account exceeds the [[Sync limitations#How large can each remote vault be|maximum size of 50 GB]]. See [[Storage limits]].

Since attachments and version history contributes to the total size of your vault, your vault can exceed the maximum size even if the actual size of your vault is less than the limit.

To identify and purge large files from the vault:

1. Open **Settings → Sync**.
2. Explore the options under **Vault size over limit** for how you can reduce the size of your vault.

## What does "Vault not found" mean?

`{"res":"err","msg":"Vault not found."}`

This error may occur in the following scenarios:

1. The vault has been deleted from another device for any reason.
2. The sync subscription was inactive for over 30 days, leading to the removal of the remote vault.
3. The subscription was canceled or refunded, resulting in the purging of the remote vault.

In each case, it is necessary to disconnect from the remote vault and establish a new connection, ensuring the data on your device is retained.