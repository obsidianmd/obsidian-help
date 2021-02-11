The **Publish** plugin lets you publish notes from your vault onto your site, all from within the Obsidian app.

For more information about the Obsidian Publish™ service, what's included, how it works, and privacy, see the [[Obsidian Publish]] add-on service.

### Enable the plugin

1. Navigate to `Settings` -> `Core plugins` -> `Publish`
2. Click the button on the right to enable plugin.
3. Check that a **Publish**  icon <svg viewBox="0 0 100 100" width="16" height="16" class="paper-plane"><path fill="currentColor" stroke="currentColor" d="M97.8,0c-0.3,0-0.5,0.1-0.7,0.2l-96,52c-0.7,0.4-1.1,1.1-1,1.9c0.1,0.8,0.6,1.5,1.4,1.7l27.2,8.9l-2.6,27 c-0.1,0.9,0.4,1.7,1.2,2.1c0.8,0.4,1.8,0.1,2.3-0.6l17.2-19.4l25.9,25.6c0.5,0.5,1.2,0.7,1.9,0.5c0.7-0.2,1.2-0.7,1.4-1.4l24-96 c0.2-0.6,0-1.3-0.4-1.8C99.1,0.2,98.5-0.1,97.8,0z M94.9,5.9L72.9,94.1L49.2,70.7l34.4-47.6c0.8-0.8,0.7-2.1-0.1-2.8 s-2.1-0.7-2.8,0.1L30.4,61.2L7,53.6L94.9,5.9z M71.6,33L45.3,69.4c-0.1,0.1-0.1,0.2-0.2,0.2L45,69.8c0,0.1-0.1,0.1-0.1,0.2 L30.6,86.1l2.1-21.6L71.6,33z"></path></svg> is now available in the left menu panel. 

Once enabled, you can also set a hotkey for this option, or use the command palette to access it.

### Set up and Configure your site

Within the **Publish** plugin, you'll see an option to create a site by entering a unique site ID. Once published, your site will be available at `https://publish.obisidian.md/{site-id}`.

After creating a unique site ID, you'll have the option to give your site a name, select a home page, set a theme, and toggle various components such as graph view, table of contents, etc. You can toggle these options by clicking on the gear icon near your site name at the top of the Publish plugin.

### Select files for publishing

After setting up your site, you can now publish your notes!

With a fresh, empty site, all your notes will appear under the "New" section, meaning they are new to your site. At this point, you may choose which files you want to publish, and then click the "Publish" button.

==Privacy note: Obsidian Publish has no awareness (nor retention) of any notes you choose not to publish (nor any notes you subsequently remove from your published site).==

### Make changes

As you make changes to notes that have already been published, those changes will be automatically selected when you open the Publish plugin dialog. You may uncheck any files you wish not to publish to your site.

### Change site options

You can change various site options by clicking on the gear icon near your site name when in the "Publish changes" dialogue.

#### Metadata

In this section, you can set site name, home page file (the file visitors see when they land on your site), and manage custom domain (please see [[Obsidian Publish#Custom domain|this guide]] to set up your custom domain).

#### Appearance

Here you can change the theme between light and dark.

If you want more customization, you can look into setting up [[Obsidian Publish#Custom CSS|custom CSS]] and [[Obsidian Publish#Favicon|favicon]].

#### Reading experience

In this section, you can:

- Enable a special mode called "sliding windows" that looks like [Andy Matuschak's notes](https://notes.andymatuschak.org/);
- Enable page preview on hover like when using [[Page preview]] plugin in the app;
- Configure whether you want readable line length and strict line breaks.

#### Components

Your site comes with a few components that you can toggle on or off. These include:

- File explorer (default on)
- Local graph (default on)
- Outline (default off)
- Backlink at the bottom (default off)
- Search bar (default off, requires file explorer)

#### Security

Here you can set passwords to protect your site. Once set, all visitors need to enter one of the passwords to enter your site.

Multiple passwords facilitate sharing with multiple groups. When you no longer wish to share with one group of visitors, you can simply delete that password. Each password can be named for your convenience as well.

As of 2021/01/20, all notes on your site are protected by the same set of passwords.

### Add linked notes

The "Add linked" button allows you to include for publishing any notes in your vault that are referenced (linked to) by any currently selected notes. This is a good way to ensure there are no dead links on your published site.

By way of example, let's assume you select Note A for publishing. Supposing Note A has links to Note P, Note Q, and Note R, then if you click the "Add linked" button, Notes P, Q, and R will all be selected for publishing along with the currently selected Note A.

Each time you click the "Add linked" button, the Publish plugin will look for links within every currently selected file to include for publication. Please be sure you review the list of selected files before clicking the "Publish" button.

### Delete published notes

You always have the option of removing any notes that have been published to your site. Within the Publish plugin, all published notes will be listed, of which any/all can be selected for removal. Deleting a note from your site **does not** remove the note from your vault, thus giving you the option to re-publish the note again in the future.

### Delete entire site

If you'd like to delete an entire site, click the switch-site (arrows) icon near the top of the Publish plugin. Then click the X button to delete your site. Note: this only removes your public site but does not affect any files in your vault. You can always choose to re-publish your notes. 