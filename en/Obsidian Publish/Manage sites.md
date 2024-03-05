This page explains how to manage [[Introduction to Obsidian Publish|Obsidian Publish]] sites.

A site is a collection of notes that's hosted by Obsidian Publish and available online, either through a Obsidian Publish address or a [[Set up a custom domain|custom domain]].

## Create a new site

> [!note] The number of sites that you can have at the same time is determined by your Obsidian Publish subscription. Before you create a new site, make sure that your subscription allows it.

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. If you already have an existing site, click **Switch site** (arrows icon).
3. In **Site ID**, enter the path you want for your site. For example, a site with the ID `my-amazing-site` is available from publish.obsidian.md/my-amazing-site.
4. Click **Create**.

## Delete an existing site

> [!note] Notes remain in your vault even after you delete a site.

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. Click **Switch site** (arrows icon).
3. Click **Delete site** (cross icon) to the right of the site you want to delete.
4. Click **Delete** to confirm.

## Switch between sites

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. Click **Switch site** (arrows icon).
3. Click **Choose** to the right of the site you want to switch to.

## Change the site ID

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. Click **Switch site** (arrows icon).
3. Click **Edit site ID** (pen icon) to the right of the site you want to edit.
4. In **Site ID**, enter the new ID for your site.
5. Click **Change**.

## View site options

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. In the **Publish changes** dialog, click **Change site options** (cog icon).

## Site Options

### General

| Option                          | Type   | Description                                                                                                                |
|---------------------------------|--------|----------------------------------------------------------------------------------------------------------------------------|
| Site Name                       | Input  | The public name and title of your Obsidian Publish site.                                                                   |
| Homepage File                   | Input  | The location of the markdown file you want to act as your landing page.                                                    |
| Logo                            | Input  | The image you want to act as your site banner. The image must [[Publish and unpublish notes#Publish notes\|be published]]. |
| Site Collaboration              | Button | Declare other users you want to have access to edit your published notes. Users must have an Obsidian account.             |
| Custom Domain                   | Button | [[Set up a custom domain]]                                                                                                 |
| Disallow search engine indexing | Toggle | Prevent respectful search engines from crawling your site by adding a `robots.txt` file.                                   |

### Appearance

| Option            | Type     | Description                                                                               |
|-------------------|----------|-------------------------------------------------------------------------------------------|
| Theme             | Dropdown | Choose how your theme presents on your site; **Light**, **Dark**, or **Adapt to System**. |
| Light/Dark Toggle | Toggle   | Allow users to toggle **Light**/**Dark** mode with a toggle button on your site.          |

## Reading experience

| Option               | Type   | Description                                                                                |
|----------------------|--------|--------------------------------------------------------------------------------------------|
| Show hover preview   | Toggle | Enable or disable the ability of page preview when hovering over an active, internal link. |
| Hide page title      | Toggle | Enable or disable the inline title of a published note to be displayed.                    |
| Readable line length | Toggle | Enable or disable readable line length within your site.                                   |
| Strict line breaks   | Toggle | Enable or disable single line breaks from being displayed on your site.                    |
| Stack Pages          | Toggle | Enable or disable [[Tabs#Stack tab groups|Stacked tabs]] on your site.    |

### Components

| Option                 | Type   | Description                                                                                                                          |
|------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------|
| Show navigation        | Toggle | Enable or disable the [[File explorer]] view on your publish site.                                                                   |
| Customize navigation   | Button | [[Customize your site#Customize navigation\|Customize]] the order of how your files are listed if **Show navigation** is toggled on. |
| Show search bar        | Toggle | Enable or disable a search bar on your site.                                                                                         |
| Show graph view        | Toggle | Enable or disable the graph view within the right sidebar of your site.                                                              |
| Show table of contents | Toggle | Enable or disable the [[Outline\|Table of contents]] view on your site.                                                              |
| Show backlinks         | Toggle | Enable or disable [[Backlinks]] on your site.                                                                                        |

> [!tip] The search bar searches for published note titles, aliases, and headings.

### Other site settings

| Option                         | Type   | Description                                            |
| ------------------------------ | ------ | ------------------------------------------------------ |
| Passwords                      | Button | [[Obsidian Publish/Security and privacy#Add a site password\|Set a password]] to restrict access to your entire site. |
| Google Analytics tracking code | Input  | **Custom Domain Url Only**. Place your Google Analytics site tracking code here.                                                       |
