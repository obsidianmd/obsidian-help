This page lists common issues that you might encounter, and how to address them.

## Conflict resolution

A conflict happens when you make changes to the same file on two or more devices between syncs. For example, you might have changed a file on your computer, and before that change is uploaded, you also change the same file on your phone.

Conflicts usually happen more frequently if you work offline, since there are more changes and a longer period of time between syncs and thus more potential conflicts.

When Sync downloads a new version of a file, and finds that there are conflicts with the local version, the changes are merged with Google's diff-match-patch algorithm.

> [!tip]
> To find when conflicts have happened, you can search for "Merging conflicted file" in **Settings** → **Sync** → **Sync activity** → **View**.


## What does the `vault limit exceeded` error mean?

Your vault exceeds the [[Limitations#How large can each remote vault be|maximum size of 10 GB]].

Since attachments and version history contributes to the total size of your vault, your vault can exceed the maximum size even if the actual size of your vault is less than the limit.

To identify and purge large files from the vault:

1. Open **Settings** -> **Sync**.
2. Explore the options under **Vault size over limit** for how you can reduce the size of your vault.
