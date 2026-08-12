---
permalink: import/onenote
---
Obsidian lets you easily migrate your notes from Microsoft OneNote using the [[Importer|Importer plugin]]. This will convert your OneNote data to durable Markdown files, that you can use with Obsidian and many other apps.

Obsidian offers two ways to import your OneNote data:

1. **Microsoft account** signs into your Microsoft account and imports the notebooks that are synced to OneDrive. Requires an internet connection.
2. **File import** uses OneNote's export files (`.onepkg` and `.one`). Does not require an account or internet connection, and works for notebooks that were never synced.

## Import from your Microsoft account

> [!Warning]
> Only notebooks owned by your account can be imported. Notebooks that other people shared with you are not supported, and a work or school account may need your organization to approve access.

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Microsoft OneNote**.
6. Click **Sign in** to open your web browser to the Microsoft sign-in page. Enter the credentials for your Microsoft account which contains your OneNote Notebooks. More information about the Microsoft sign-in process is available below.
7. Click **Accept** to grant Obsidian permission to view your OneNote Notebooks.
8. Click **Open Link** to allow your browser to redirect you to the Obsidian app.
9. In the Obsidian app, the Importer dialog will now display that you are signed in and list your OneNote Notebooks and Sections. Check the sections you wish to import.
10. Click **Import** and wait until import is complete.
11. You're done!

If your notebooks belong to a work or school account, OneNote may refuse the plugin access to them after you sign in. When that happens a **Use work or school access** button appears beside **Sign out**. Use it to sign in again with the wider permission those accounts need. Your organization may have to approve that permission before it will work.

### Troubleshooting

#### No sections or notebooks appear

Make sure that the notebooks you're trying to import are synced to OneDrive and visible in OneNote Web. They must be owned by you (shared notebooks written by others are unsupported).

If a specific section is missing, make sure it's not a locked section, as those are invisible without removing the lock first.

If it's a work or school notebook, see the note about **Use work or school access** above.

#### Imported notes are empty or missing content

This issue may occur on notebooks that you rarely use. To solve the issue follow these steps:

1. Open [OneNote Web](https://onenote.com/notebooks) in your browser.
2. **Right click** on the Notebooks which are missing content.
3. Select **Export Notebook** from the menu.
4. **Unzip** the file you've just downloaded into a folder.
5. Upload your OneNote notebooks [here](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Open **Obsidian Importer** and try importing again

If you've followed these tips and your issue remains unresolved, it's possible that there is a temporary problem with Microsoft servers. If that's the case, wait a few minutes and try again. If the problem persists, please open an issue on the [Obsidian Importer GitHub repository](https://github.com/obsidianmd/obsidian-importer/issues).

## Import OneNote files (.one, .onepkg)

File import is an alternative way to import your OneNote data. It reads the export files OneNote writes itself, so it needs no Microsoft account and no internet connection. Use it for notebooks stored only on your computer, notebooks your account can't reach, or when you'd rather not sign in.

### Export your notebooks from OneNote

We recommend exporting each notebook as a **OneNote Package** (`.onepkg`). One package holds every section of the notebook, so you can export and import a notebook in a single step, and Importer will list its sections for you to choose from.

Exporting is only available in **OneNote for Windows**, the desktop app that comes with Microsoft 365. The OneNote app for Mac and the older OneNote for Windows 10 app cannot export to these formats.

1. Open the notebook you want to export in OneNote for Windows.
2. Go to **File → Export**.
3. Under **Export current** choose **Notebook**.
4. Under **Select format** choose **OneNote Package (\*.onepkg)**.
5. Click **Export** and choose where to save the file.
6. Repeat for each notebook you want to import.

To export a single section instead, choose **Section** in step 3 and **OneNote 2010-2016 Section (\*.one)** in step 4.

You can also import the section files OneNote already keeps on disk, without exporting anything:

- Notebooks stored on your computer are in `Documents\OneNote Notebooks`, one `.one` file per section.
- Backups of synced notebooks are in `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Import your OneNote files

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Microsoft OneNote (.one, .onepkg)**.
6. Choose the `.onepkg` and `.one` files you want to import. You can pick more than one file at a time, so all your notebooks can be imported together.
7. Under **Sections to import** the sections found in those files are listed, with everything checked. Uncheck anything you don't want.
8. Optionally, choose an **Output folder** for the import, where the attachments should be saved, and what should happen to **Existing notes** if you import the same notebook again.
9. Click **Import** and wait until import is complete.
10. You're done!

Each section becomes a folder, and each page in it becomes a note. A subpage is saved in a folder named after the page above it, which keeps the structure OneNote showed and stops two subpages with the same name from colliding. Pages in the notebook's recycle bin are not imported.

### Limitations

- Password-protected sections are stored encrypted, and their pages are skipped. Remove the password in OneNote and export again to import them.
- Rights-protected files can only be opened by an account the policy allows, and cannot be read by Importer.

## Privacy

If you choose to import using your Microsoft Account, the Obsidian Importer plugin uses [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) to authenticate and import your OneNote notebooks. This grants a short term access token to your account which is used only from your computer and is never stored. After the import completes you may optionally revoke the token from the [Microsoft apps & services page](https://account.live.com/consent/Manage).

File import never connects to Microsoft: the files you pick are read on your computer, without any network connection.

