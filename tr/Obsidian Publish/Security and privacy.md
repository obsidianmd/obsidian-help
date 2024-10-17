---
aliases:
  - Access control for Obsidian Publish
  - Security/privacy for Obsidian Publish
---
You can choose the notes you want to publish to [[Introduction to Obsidian Publish|Obsidian Publish]]. The rest of your notes stay safe in your vault.

Only the notes you choose to publish are sent to Obsidian's servers, and any notes you unpublish are removed.

## Password protection

For improved access control on your publish site, apply a site password. Visitors will be prompted for a password when attempting to access it. If you decide to remove the site password later, the entire site will become visible to the public again.

> [!warning] Individual password protection for published notes is currently not supported.

### Add a site password

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. In the **Publish changes** dialog, click **Change site options** (cog icon).
3. Under **Other site settings**, next to **Passwords**, click **Manage**.
4. Click **New password**.
5. In **Password**, enter a password for your site.
6. (Optional) In **Nickname**, enter a nickname for the password, for example, the person you want to give site access to.
7. Click **Add this password**.

### Remove a site password

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. In the **Publish changes** dialog, click **Change site options** (cog icon).
3. Under **Other site settings**, next to **Passwords**, click **Manage**.
5. Click the cross-icon next to the password you want to delete.

## Data collection
### Visitor data

By default, Obsidian Publish **does not** collect visitor data, store cookies, or process personal information. However you can implement analytics or log other user data by [[Customize your site|customizing your site]].

As the site owner, you are responsible for complying with GDPR and privacy regulations in your region. This includes creating your own notification banner, which can be implemented using publish.js, and adding a privacy policy page to your site.

## Access
### Managing access to Obsidian Publish on your network

To regulate access to Obsidian Publish on your network, you need to manage the following domains:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Additionally, the backend services employ the following subdomains: `publish-xx.obsidian.md`, where `xx` is a number ranging from `1 - 100`.

> [!tip] If your firewall system supports it, we recommend whitelisting `publish-*.obsidian.md` to accommodate our continuous expansion of subdomains.
