---
permalink: import/evernote
---
Obsidian allows you to easily migrate your notes from Evernote using the [[Importer|Importer plugin]]. This will convert your Evernote data to durable Markdown files, that you can use with Obsidian and many other apps.

## Export your data from Evernote

Obsidian uses Evernote's export format `.enex` files.

You can find Evernote's instructions for exporting your data [on Evernote's website](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). This method allows you to export entire notebooks in the desktop client.

1. Go to the Notebooks screen.
2. Click on **More actions** (`•••` icon) and choose **Export Notebook...**
3. Select **ENEX** as the file format.
3. Choose a location for your exported `.enex` file.

## Import your Evernote data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **Settings**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Evernote (.enex)**.
6. Select the location of your Evernote backup file.
7. Click **Import** and wait until import is complete.
8. You're done!

## Advanced import options

### Maintain tag hierarchy

Evernote export does not keep the tag hierarchy. To keep your tag hierarchy, you can "flatten" tags separated by "/". For example, assuming that you have the following tag structure: 

```
ParentTag
    ChildTag
```

What you need to do to keep tags related in Obsidian is:

1. Right-click on the ChildTag.
2. Select "Rename."
3. Rename it as `ParentTag/ChildTag`.

### Handling notebook stacks

Since the export process is limited to single notebooks, the default export file lacks information about notebook stacks. However, the importer can recognize patterns in the enex file name to recreate notebook stacks as folders.

Assuming that you have a notebook called ```NotebookA``` in a stack called ```Stack1```, you can recreate a notebook stack by renaming the enex file to ```Stack1@@@NotebookA```.

This results in the converted notes being generated within the Stack1/NotebookA folder.

### More options

For more advanced import options from Evernote you can also try [importing via Yarle](https://github.com/akosbalasko/yarle).
