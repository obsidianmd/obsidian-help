---
permalink: import/logseq
---
Obsidian lets you migrate notes from a file-based Logseq graph (now called "Logseq OG") using the official [[Importer|Importer plugin]]. Importer reads Logseq's Markdown files directly and converts Logseq-specific formatting into durable files that you can use offline with Obsidian and other apps.

## Before you start

- Back up your Logseq graph and Obsidian vault.
- Locate the root folder of your Logseq graph. It normally contains folders named `pages`, `journals`, `assets`, and `logseq`.
- Make sure you are using a file-based Logseq graph. Logseq database graphs aren't supported yet.

## Import your Logseq graph

You need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]] → Community plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
2. Enable the Importer plugin.
3. Open **Importer** using the [[Command palette]] or ribbon icon.
4. Under **File format**, select **Logseq**.
5. Under **Choose folders**, select the root folder of your graph. Select the folder that contains `pages` and `journals`, not either of those folders individually.
6. Review the detected folders and exclude any that you don't want to import.
7. Choose an output folder and where imported attachments should be stored.
8. Review the import options and preview examples of the converted notes.
9. Select **Import** and wait for the import to finish.

## Limitations

- Whiteboards aren't imported.
- Queries are preserved as code blocks if you choose to keep them.
- Dynamic Logseq template macros remain as literal text.
- Logseq flashcard scheduling, PDF annotations, and other app-specific data aren't migrated.

## Settings

Importer converts common Logseq conventions, including:

- Page properties into Obsidian [[Properties]].
- Page aliases, tags, namespaces, and links.
- Workflow states into checkbox list markers, with priorities and dates preserved as readable text.
- Block IDs, block references, and block embeds into Obsidian links and embeds.
- Journal filenames and date links.
- Highlights, numbered lists, Org blocks, media embeds, and linked files from the graph's `assets` folder.

### Journals

By default, **Use daily notes settings** is enabled. Imported journals use the folder and date format configured by the [[Daily notes]] core plugin. This may place journals outside the output folder selected in Importer.

If you disable this option, journals are written to a `Journals` folder inside the selected output folder and use the `YYYY-MM-DD` note name format.

### Flatten outlines

Logseq uses nested bullet points as the structure of a page. By default, Importer preserves this outline structure. Enable **Flatten outlines** to convert outline blocks into a combination of paragraphs, headings, and conventional lists. Tasks and groups of list-like items remain list items, but the conversion is heuristic. Review several examples in the preview before importing a large graph.

### Preserve incompatible data

Logseq queries, flashcards, and time-tracking entries don't have direct equivalents in Obsidian. The import options let you choose whether to keep each kind of content. When kept, it remains as plain text.

- **Keep queries** preserves queries as fenced code blocks or inline code.
- **Keep flashcards** preserves `#card` markers and cloze wrappers as plain text.
- **Keep time tracking** preserves `LOGBOOK` and `CLOCK` entries as plain text.

## Templates

Use [[Importer templates|Importer templates]] to fully configure how your Logseq data is imported. 

![[Importer templates#Variables]]

## Troubleshooting

If Importer doesn't find any notes, make sure you selected the graph's root folder and that the configured page or journal folders contain Markdown files.

If an attachment is reported as missing, confirm that the referenced file still exists in the graph's `assets` folder.

For other problems, search the [Importer issue tracker](https://github.com/obsidianmd/obsidian-importer/issues) or submit a bug report with a small example graph.

