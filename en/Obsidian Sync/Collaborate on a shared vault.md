---
aliases:
  - Share remote vaults
  - Collaboration
  - Collaborating
  - Obsidian Sync/Share remote vaults
---
With [[Introduction to Obsidian Sync|Obsidian Sync]] you can collaborate on a shared vault with your team.

All collaborators must have an active Sync subscription to access a shared vault. Joining a shared vault does not count towards your [[Sync limitations#How many remote vaults can I have?|vault limit]].

If the remote vault is [[Obsidian Sync/Security and privacy|end-to-end encrypted]], collaborators must enter the encryption password when they set up the vault.

## Manage users

### Add users

To invite a user to share a remote vault:

1. Open **Settings**.
2. In the side menu, select **Sync**.
3. Next to **Remote vault**, select **Manage**.
4. Next to the remote vault you want to share, select **Manage sharing** ( ![[lucide-users.svg#icon]] ).
5. In **Invite user**, enter the email of the user you want to invite.
6. Select **Add**.

### Remove users

1. Open **Settings**.
2. In the side menu, select **Sync**.
3. Next to **Remote vault**, select **Manage**.
4. Next to the user you want to remove access from, select **Remove user** ( ![[lucide-x.svg#icon]] ).

## Collaborate with your team

### Permissions

Fine-grained permissions are not supported yet. All collaborators receive the same permissions as the vault owner, with one exception: only the vault owner can invite collaborators.

### Live editing

Shared vaults allow teams to work together on a set of files, however Obsidian does not yet support collaborative live editing on the same file. You will not see the other user's cursor, and their edits will only appear once the changes are synced.

If multiple users are editing the same file at the same time, [[Troubleshoot Obsidian Sync#Conflict resolution|changes will be merged]] during the syncing process. Changes can be viewed and restored using [[Version history]].

![[version-history-collaboration.png]]^version-history-image

 
## Limitations

Be aware that Obsidian Sync has [[Sync limitations|Limitations]] that may affect your team:

- The maximum number of collaborators on a shared vault is 20 users.
- The maximum file size for attachments depends on the [[Plans and storage limits|plan]] of your remote vault host, with 5MB for the Standard Plan and 200MB for the Plus Plan.

Learn more about [[Syncing for Teams]].