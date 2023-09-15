---
aliases:
  - Access control for Obsidian Publish
  - Security/privacy for Obsidian Publish
---
You can choose the notes you want to publish to [[Introduction to Obsidian Publish|Obsidian Publish]]. The rest of your notes stay safe in your vault.

Only the notes you choose to publish are sent to Obsidian's servers, and any notes you unpublish are removed.

## Add a site password

**Caution:** If you add a site password, your site is no longer publicly available. Instead, readers see a password prompt when they access your site. Notes cannot be password protected individually.

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. In the **Publish changes** dialog, click **Change site options** (cog icon).
3. Under **Other site settings**, next to **Passwords**, click **Manage**.
4. Click **New password**.
5. In **Password**, enter a password for your site.
6. (Optional) In **Nickname**, enter a nickname for the password, for example, the person you want to give site access to.
7. Click **Add this password**.

## Remove a site password

**Caution:** If you remove the last password, your site becomes publicly available and anyone can access it.

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. In the **Publish changes** dialog, click **Change site options** (cog icon).
3. Under **Other site settings**, next to **Passwords**, click **Manage**.
5. Click the cross-icon next to the password you want to delete.

## Managing access to Obsidian Publish on your network

To regulate access to Obsidian Publish on your network, you need to manage the following domains:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Additionally, the backend services employ the following subdomains: `publish-xx.obsidian.md`, where `xx` is a number ranging from `1 - 100`.

> [!tip] If your firewall system supports it, we recommend whitelisting `publish-*.obsidian.md` to accommodate our continuous expansion of subdomains.
