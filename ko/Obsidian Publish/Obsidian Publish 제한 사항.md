---
aliases:
  - Publish Limitations
---

> [!tip] Members of our awesome community have devised workarounds for some of these limitations. For more information, please visit our [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) thread on the Obsidian forums.

## Community plugins

Obsidian Publish has minimal support for [[Community plugins]]. 

Plugins which output in raw markdown, such as the Waypoint plugin, are compatible with Publish because they do not require the application to render their data. 

Whereas a plugin that requires a plugin codeblock to render, such as Dataview or Fantasy Statblocks, will not work by default in Publish. 

## Graph

Publish offers basic color customization for its graph view using CSS. You can modify the node colors in your `publish.css` file by utilizing the [Graph View CSS variables](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Note that the published graph does not support the comprehensive sorting and viewing options available in the application's [[Graph view]].

## Media files

Obsidian Publish is not optimized for streaming video or large audio files. We include some best practices for handling your [[Media files|media files]] in these documents. 

To improve the experience for your visitors, we recommend that you instead use a video hosting service, such as YouTube or Vimeo.

You can upload files **up to 50mb** in size to your Publish site. ^publish-media-limit

## PDFs

On mobile devices, tablets, and computers with small screens, you may encounter issues where an embedded PDF won't load or only the first page is displayed. This is due to limitations with the PDF Renderer on mobile devices. 

For content aimed at mobile users, we suggest providing links to PDFs hosted externally or including internal links that allow users to download the PDF directly to their device.

## Search

Publish has basic support for searching plain text in published content. Preference for search results is given to:

- File names
- Aliases
- Header names

After searching the above for matches, the search will then include plain text of the published notes.

To improve the searchability of your published site, it is recommended to use descriptive file names, incorporate multiple aliases, and select header names that accurately reflect the content.

