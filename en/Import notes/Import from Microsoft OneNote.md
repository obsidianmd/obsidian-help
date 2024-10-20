---
permalink: import/onenote
---
Obsidian allows you to easily migrate your notes from Microsoft OneNote using the [[Importer|Importer plugin]]. This will convert your OneNote data to durable Markdown files, that you can use with Obsidian and many other apps.

## Import your OneNote data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **Settings**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Microsoft OneNote**.
6. Click **Sign in** to open your web browser to the Microsoft sign-in page. Enter the credentials for your Microsoft account which contains your OneNote Notebooks. More information about the Microsoft sign-in process is available below.
7. Click **Accept** to grant Obsidian permission to view your OneNote Notebooks.
8. Click **Open Link** to allow your browser to redirect you to the Obsidian app.
9. In the Obsidian app, the Importer dialog will now display that you are signed in and list your OneNote Notebooks and Sections. Check the sections you wish to import.

![[OneNote-Importer-Select-Sections.png]]

10. Click **Import** and wait until import is complete.
11. You're done!

## Troubleshooting

### No sections or notebooks appear

Make sure that the notebooks you're trying to import are synced to OneDrive and visible in OneNote Web. They must be owned by you (shared notebooks written by others are unsupported).

If a specific section is missing, make sure it's not a locked section — those are invisible without removing the lock first.

### Imported notes are empty or missing content

This issue may occur on notebooks that you rarely use. To solve the issue follow these steps:

1. Open [OneNote Web](https://onenote.com/notebooks) in your browser.
2. **Right click** on the Notebooks which are missing content.
3. Select **Export Notebook** from the menu.
4. **Unzip** the file you've just downloaded into a folder.
5. Upload your OneNote notebooks [here](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Open **Obsidian Importer** and try importing again

If you've followed these tips and your issue remains unresolved, it's possible that there is a temporary problem with Microsoft servers. If that's the case, wait a few minutes and try again. If the problem persists, please open an issue on the [Obsidian Importer GitHub repository](https://github.com/obsidianmd/obsidian-importer/issues).

## Privacy

The Obsidian Importer plugin uses [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) to authenticate with your Microsoft account and import your OneNote notebooks. This grants a short term access token to your account which is used only from your computer and is never stored. After the import completes you may optionally revoke the token from the [Microsoft apps & services page](https://account.live.com/consent/Manage). 
