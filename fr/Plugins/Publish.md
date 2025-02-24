The Publish plugin lets you publish notes from your vault onto your site, all from within the Obsidian app.

For more information about the Obsidian Publish™ service, what's included, how it works, and privacy, see the [[Obsidian Publish]] add-on service.

### Enable the plugin

From within Obsidian > Settings > Plugin, enable the Publish plugin. After that, a Publish icon (which looks like a paper plane) will appear in the ribbon pane.

Once enabled, you can also set a hotkey for this option, or use the command palette to access it.

### Set up and Configure your site

Within the Publish plugin, you'll see an option to create a site by entering a unique site ID. Once published, your site will be available at `https://publish.obsidian.md/{site-id}`.

After creating a unique site ID, you'll have the option to give your site a name, select a home page, set a theme, and toggle various components such as graph view, table of contents, etc. You can toggle these options by clicking on the gear icon near your site name at the top of the Publish plugin.

### Select files for publishing

After setting up your site, you can now publish your notes!

With a fresh, empty site, all your notes will appear under the "New" section, meaning they are new to your site. At this point, you may choose which files you want to publish, and then click the "Publish" button.

==Privacy note: Obsidian Publish has no awareness (nor retention) of any notes you choose not to publish (nor any notes you subsequently remove from your published site).==

### Make changes

As you make changes to notes that have already been published, those changes will be automatically selected when you open the Publish plugin dialog. You may uncheck any files you wish not to publish to your site.

### Add linked notes

The "Add linked" button allows you to include for publishing any notes in your vault that are referenced (linked to) by any currently selected notes. This is a good way to ensure there are no dead links on your published site.

By way of example, let's assume you select Note A for publishing. Supposing Note A has links to Note P, Note Q, and Note R, then if you click the "Add linked" button, Notes P, Q, and R will all be selected for publishing along with the currently selected Note A.

Each time you click the "Add linked" button, the Publish plugin will look for links within every currently selected file to include for publication. Please be sure you review the list of selected files before clicking the "Publish" button.

### Delete published notes

You always have the option of removing any notes that have been published to your site. Within the Publish plugin, all published notes will be listed, of which any/all can be selected for removal. Deleting a note from your site **does not** remove the note from your vault, thus giving you the option to re-publish the note again in the future.

### Delete entire site

If you'd like to delete an entire site, click the switch-site (arrows) icon near the top of the Publish plugin. Then click the X button to delete your site. Note: this only removes your public site but does not affect any files in your vault. You can always choose to re-publish your notes. 