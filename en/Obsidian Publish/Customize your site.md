This page explains how you can customize how your [[Introduction to Obsidian Publish|Obsidian Publish]] site looks and feels.

## Static assets

You can customize your site by [[Publish and unpublish notes#Publish notes|publishing]] the following files to your site:

- `publish.css` to add custom CSS
- `publish.js` to add custom JavaScript
- `favicon-32x32.png` to set the favicon

**Notes:**

- Since Obsidian doesn't support CSS or JavaScript files, you need to use another application to create and edit them.
- Both `publish.css` and `publish.js` must be located in the root directory (`/`) of your vault.
- By default, `publish.css` and `publish.js` don't appear in the file explorer, but you can still publish them from the **Publish changes** dialog.
- To use custom JavaScript with `publish.js`, you need to [[Set up a custom domain]].

For favicons, Obsidian Publish supports the following naming conventions, where `32` is the icon dimensions in pixels:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

We recommend that you provide one or more of the following dimensions:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

You have flexibility in placing favicons anywhere within the vault, as long as they are published to your site.

## Use a community theme

To use one of the community themes for your site:

1. Open your vault in the default file explorer for your OS.
2. Go to the vault settings folder (default: `.obsidian`).
3. Open the `themes` folder.
4. Copy the CSS file for the theme you want to use for your site.
5. Paste the file into the root folder of your vault.
6. Rename the CSS file to `publish.css`.
7. [[Publish and unpublish notes#Publish notes|Publish]] `publish.css`.

**Notes:**

- If the style doesn't change within a few minutes, you may need to refresh your browser cache.
- You can switch between light and dark mode in the [[Manage sites#View site options|site options]].

> [!tip] Developing themes
> Can't find the theme for you? Learn how to [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) yourself.

## Enable UI features

You can toggle several UI features for your site, such as the graph view or a table of contents.

Browse the available UI features under the **Reading experience** and **Components** sections in the [[Manage sites#View site options|site options]]

### Customize navigation

Within Obsidian Publish, you have the ability to customize the navigation order and display of files and folders within the Publish [[File explorer]]. Navigation items are listed in published order by default. Notes not published will not appear within this pane.

#### Accessing Customize navigation options

1. In ribbon, to the left of the application window, select **Publish changes** (paper plane icon).
2. In the **Publish changes** dialog, select **Change site options** (cog icon).
3. Under **Components settings**, next to **Customize navigation**, select the **manage** button. 

A new pop-up window titled **Navigation** will appear over your **Change site options** window.

#### Adjust navigation items

In the section labeled **Navigation preview**, you can adjust the display order of your published content.

1. Select the folder or note you want to adjust.
2. Drag the note or folder up or down until it is your desired place.
3. In the lower right of the **Navigation** window, select **Done**. 

Publish will send your navigation changes to your site. 

#### Hide and unhide navigation items

If there are notes or folders you have published, but you do not want visible within your Navigation, you can opt to hide those items instead. 

1. Select the folder or note you want to adjust.
2. Right click and select **Hide in navigation**. The item should now disappear from the **Navigation preview**.
3. In the lower right of the **Navigation** window, select **Done**. 

Publish will send your navigation changes to your site. 

> [!tip] You can **Show hidden** files by selecting the checkbox to the right of the **Navigation Preview** title

## FAQ

**Can I move files from one folder to another within the Navigation?**

No. The file navigation structure for notes within folders needs to be maintained. You can adjust note order within folders (including the vault root), and folder order within other folders. 

**Can I edit the order of multiple notes and folders before selecting Done?**

Yes.

**How do I revert these changes?**

- **Display order**: Select the **Restore Default** icon (counter clockwise rotate arrow) next to **Navigation item display order**. This will restore your navigation items to alphabetical order.
- **Hidden status**: Select the **Restore Default** icon (counter clockwise rotate arrow) next to **Hide pages or folders from navigation**. This will restore your hidden navigation items to a visible state.
