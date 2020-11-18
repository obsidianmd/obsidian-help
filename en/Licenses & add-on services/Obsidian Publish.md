Obsidian Publish™ is a paid hosting service for your notes.

For instructions on how to publish your notes from within the Obsidian app, refer to the [[Publish|Publish plugin]].

### Privacy

You have total control over what to publish via the [[Publish|Publish plugin]] - either your entire vault or just selected notes within your vault. As for any notes you choose **not** to publish, you can be confident that those notes remain completely private, and Obsidian Publish has no knowledge of them.

### Backing up

Please note that Obsidian Publish is not to be used as a backup for your content. Make sure you always have a personal backup copy of your site using your preferred backup method. Our efforts on Obsidian Publish will be more focused on functionality, ease of use, and site availability.

### Demo

There's a good chance that you're already viewing this article on our official site powered by Obsidian Publish.

If not, you can visit it here: https://publish.obsidian.md/help.

### What's included

The Obsidian Publish service lets you create your site directly from within the Obsidian app by choosing the notes you want to publish.

To customize your site, you can choose between light and dark mode, and also toggle between readable line length and full page length.

There are several components which can be turned on or off from the [[Publish|Publish plugin]]. Changes to these options will be reflected on your published site once the cache clears, typically within 5 minutes.

##### Navigation

Enabling this option adds a navigation sidebar displaying all published pages and the folders that contain them. Viewers will see the current open note highlighted, and can click on any other note to navigate.

##### Graph view

Displays a local graph of the page currently open. This uses the same rendering engine as the [[Graph view]] plugin in Obsidian.

##### Table of contents

Displays a table of contents for the page currently open. The list is generated from headings within the page, similar to the [[Outline]] plugin. Viewers navigating the note will see the corresponding heading highlighted as they scroll, and can click on another heading to immediately navigate to it.

##### Hover preview

When hovering over links, their content is displayed within a popup box. This works similarly to the [[Page preview]] plugin in Obsidian.

##### Backlinks

Displays a section at the end of each page called "Linked to this page", containing backlinks from other pages. If there are no backlinks, the section will not be displayed.

##### Custom CSS

To customize the styling of your site, you can upload either `obsidian.css` or `publish.css`. These files must be stored in the root folder of your site. You can also upload both so you can use your existing `obsidian.css` and add some extra tweaks for publish in `publish.css`.

##### Favicon

To change the favicon of your site, you can upload `png` icons of any size in the format of `favicon-32.png` or `favicon-32x32.png`. You can also upload the file `favicon.ico`. These files can be stored in any folder. The current recommendation (as of 2020) is to provide sizes `32×32`, `128x128`, `152×152`, `167x167`, `180x180`, `192x192`, and `196x196`.

### Coming up

Obsidian Publish is still in its early days. Here are some features we plan to add:

- Custom domain support
- Search
- Tag pane section
- More built-in themes

Please let us know if you have any Obsidian Publish feature requests by submitting a [forum request here](https://forum.obsidian.md/).

### Pricing

For the pricing of Obsidian Publish, please visit [our pricing page](https://obsidian.md/pricing).

### Technical details

Obsidian Publish uses Cloudflare as the CDN (content delivery network) to distribute your site across the globe for a faster access. This involves caching copies of the files of your site on some of the 200+ data centers to ensure the lowest latency for your readers and the site remain speedy and loads fast even if your viewer lives far away from our primary servers.

However, this does mean that when you change site settings, publish new content, or unpublish content, visitors might not see the latest version for a short while. Currently, our cache is configured to persist for an hour before it has to be "re-validated" to ensure the content hasn't changed.

If you've just published items but you are still seeing an older version, you can typically perform a "hard refresh" by holding the reload button and choosing "Hard reload" in the dropdown menu. Failing that, you can try clearing the browser cache or disabling cache using the developer tools in the network tab.

---

### Related

Refer to the [[Publish|Publish plugin]] for details on publishing your notes. 