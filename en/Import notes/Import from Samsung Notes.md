---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian lets you migrate your notes from Samsung Notes using the [[Importer|Importer plugin]]. This converts your notes to durable Markdown files you can use with Obsidian and many other apps.

## Export your notes from Samsung Notes

Samsung Notes saves each note as a Samsung Notes file (`.sdocx`).

1. Open Samsung Notes on your phone or tablet.
2. Touch and hold a note, then select every note you want to export.
3. Tap **Save as file**, then choose **Samsung Notes file**.
4. Choose a folder and tap **Save**.
5. Move the `.sdocx` files to the device where you use Obsidian, for example with a USB cable, Quick Share, or a cloud drive.

If you have many files, you can put them in a `.zip` file and import that instead. Samsung Notes doesn't include its folders in the files it saves, but Importer keeps the folders inside the `.zip` file. To keep your notes organized, save each Samsung Notes folder's notes into a folder of the same name before you zip them.

## Import your Samsung Notes data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open Importer in Settings or using the [[Command palette]].
5. Under **File format**, choose **Samsung Notes (.sdocx)**.
6. Select your `.sdocx` files, or a `.zip` file that contains them.
7. Select **Import** to review the generated template and preview examples from your notes.
8. Select **Import** again and wait for the import to finish.

## Limitations

- Handwriting and drawn shapes import as an SVG image at the end of the note. Strokes keep their shape and color, but not the varying width of a pressure-sensitive pen. Shapes and lines import in black.
- Text boxes, images placed on the page, and annotated PDFs aren't imported yet.
- Checklist items import as unchecked.
- Text colors, fonts, and font sizes aren't kept.
- Unlock locked notes in Samsung Notes before you export them.

## Templates

Use [[Importer templates|Importer templates]] to fully configure how your Samsung Notes data is imported.

![[Importer templates#Variables]]
