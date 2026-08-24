---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian lets you easily import individual HTML files and entire folders of HTML files using the official [[Importer|Importer plugin]]. This is useful if you want to save whole websites to [[Obsidian Flavored Markdown|Markdown]] format, or if you want to import data from a tool that exports to HTML. 

If you are importing notes from a specific app, you may want to first review the list of apps supported by [[Importer|Importer plugin]] to check if there is a specific converter that will better preserve the data you are migrating.

## Import HTML data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **HTML (.html).**
6. Select the location of your HTML files or folders.
7. Select **Import** to review the generated template and preview examples from your files.
8. Select **Import** again and wait for the import to finish.

### Import settings

- **Attachment size limit**: Skip importing attachments larger than the specified size.
- **Minimum image size**: Skip importing images smaller than the specified size in either dimension. Can be used to skip icons and logos.

## Templates

Use [[Importer templates|Importer templates]] to fully configure how your data is imported. 

![[Importer templates#Variables]]

In addition, HTML imports provide many of the same variables as [[Introduction to Obsidian Web Clipper|Web Clipper]]:

| Variable | Description |
| --- | --- |
| `{{author}}` | Author of the page. |
| `{{contentHtml}}` | Extracted page content in HTML format. |
| `{{description}}` | Page description or excerpt. |
| `{{domain}}` | Domain of the page. |
| `{{favicon}}` | Favicon URL. |
| `{{fullHtml}}` | Unprocessed HTML for the full page. |
| `{{image}}` | Social share image URL. |
| `{{language}}` | Page language. |
| `{{published}}` | Published date, which can be formatted with the `date` filter. |
| `{{site}}` | Site name or publisher. |
| `{{url}}` | Source URL found in the imported document, when available. |
| `{{words}}` | Word count. |