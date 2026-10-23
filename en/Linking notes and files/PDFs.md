---
aliases:
  - PDF viewer
  - Export to PDF
description: Learn how to view, search, and link to PDFs in Obsidian, and how to export a note as a PDF.
mobile: true
permalink: pdf
publish: true
---

Obsidian opens PDF files in a built-in viewer. You can also embed a PDF in a note, link to a passage in it, and export any note as a PDF. For the file types Obsidian supports, see [[Accepted file formats]].

> [!info]+ Some features are desktop only
> The Obsidian app on mobile can't search inside a PDF, copy a quote or a link to a selection, or export a note to PDF.

## Open a PDF

In the [[File explorer]], select a PDF to open it in a tab.

> [!info]+ Annotations are not supported
> Obsidian doesn't support adding annotations or highlights to a PDF. To mark up a PDF, use another app and then open the updated file in your vault.

The viewer has a toolbar with these controls. The Obsidian app on mobile has the same toolbar.

- **Toggle sidebar** shows or hides the sidebar, and **Sidebar options** changes what the sidebar shows.
- **Zoom out** and **Zoom in** change the size of the page.
- **Display options** changes how pages are laid out.
- The page box shows the current page. Enter a page number to go to that page.

To work with the PDF file itself, such as renaming or moving it, select **More options** ![[lucide-more-horizontal.svg#icon]]. A PDF has fewer items in this menu than a note. See [[More options menu]].

## Navigate a PDF

Select **Sidebar options**, and then choose what to show.

- **Thumbnails** shows a small preview of each page.
- **Table of contents** shows the PDF's outline, if it has one.
- **Reveal page in table of contents** highlights the current page in the table of contents.

To link to a page, right-click its thumbnail and select **Copy link to page N**, where N is the page number. Paste the link into a note.

To link to a section, right-click an entry in the table of contents and select **Copy link to “Title”**, where Title is the name of the entry. On mobile, press and hold the entry.

## Change how a PDF looks

Select **Display options** to change the layout.

- **Fit width** and **Fit height** size the page to the viewer.
- **Single page** shows one page at a time.
- **Two-page (odd)** shows pages side by side, starting with an odd page on the left. For example, pages 1 and 2 show together, and then pages 3 and 4.
- **Two-page (even)** shows pages side by side, starting with an even page on the left. For example, page 1 shows alone, and then pages 2 and 3 show together.
- **Adapt to theme** darkens the PDF's colors when your Obsidian theme is dark.

## Search a PDF

Searching inside a PDF is available on desktop only. The Obsidian app on mobile doesn't have search in the PDF viewer.

1. Press `Ctrl+F` (Windows and Linux) or `Command+F` (macOS).
2. In **Search...**, enter the text you want to find.
3. Select the up or down arrow to move between matches.

To change how the search works, use these options.

- **Match case** matches upper and lower case exactly. It is the **Aa** button in the search field.
- **Highlight all** highlights every match. Select the settings button next to the arrows to find this option.
- **Match diacritics** treats letters with accents as different letters. It is in the same settings menu.
- **Whole words** finds only whole words. It is in the same settings menu.

Select the close button to leave search.

## Copy text from a PDF

On desktop, select text in the PDF, and then right-click it.

- **Copy** copies the text.
- **Copy as quote** copies the text as a quote, followed by a link to the passage.
- **Copy link to selection** copies a link to that passage, so you can paste it into a note.

A quote looks like this when you paste it into a note.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

A link to a selection has the same link on its own.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

On mobile, selecting text in a PDF shows your device's standard text menu. **Copy as quote** and **Copy link to selection** are not available.

## Embed a PDF

To show a PDF inside a note, see how to [[Embed files#Embed a PDF in a note|embed a PDF in a note]]. An embedded PDF has the same toolbar as the viewer. Select **Edit this block** to change the embed link.

## Export a note to PDF

You can export any note as a PDF on desktop. Exporting to PDF is not available in the Obsidian app on mobile.

1. Open the note you want to export.
2. Open the [[Command palette]] and select **Export to PDF...**. You can also select **More options** ![[lucide-more-horizontal.svg#icon]] in the note, and then select **Export to PDF...**.
3. Choose your settings.
    - **Include file name as title** adds the file name at the top of the PDF.
    - **Page size** sets the paper size. You can choose A3, A4, A5, Legal, Letter, or Tabloid.
    - **Landscape** turns the pages sideways.
    - **Margin** sets the page margin to **Default**, **Minimal**, or **None**.
    - **Downscale percent** scales the content on each page. At 100, the content stays full size. Lower values make the text and images smaller, so more fits on each page.
4. Select **Export to PDF**.
5. Choose where to save the file.

> [!tip]- Export a note with a dark theme
> Exports always use light styling, even if your theme is dark. To change how an export looks, you can use a [[CSS snippets|CSS snippet]]. The Obsidian forum has examples of snippets for printing and exporting.[^1]

[^1]: See [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) and [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
