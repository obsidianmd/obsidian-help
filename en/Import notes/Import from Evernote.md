---
permalink: import/evernote
cssclasses:
  - soft-embed
---
Obsidian lets you easily migrate your notes from Evernote using the [[Importer|Importer plugin]]. This converts your Evernote data to durable Markdown files you can use with Obsidian and many other apps.

## Export your data from Evernote

Obsidian uses Evernote's export format `.enex` files.

You can find Evernote's instructions for exporting your data [on Evernote's website](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). This method lets you export entire notebooks in the desktop client.

1. Go to the Notebooks screen.
2. Click on **More actions** ( `•••` ) and choose **Export Notebook...**
3. Select **ENEX** as the file format.
3. Choose a location for your exported `.enex` file.

## Import your Evernote data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Evernote (.enex)**.
6. Select the location of your Evernote backup file.
7. Select **Import** to review the generated template and preview examples from your notes.
8. Select **Import** again and wait for the import to finish.

## Import options

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

## Templates

Use [[Importer templates|Importer templates]] to fully configure how your Evernote data is imported. 

![[Importer templates#Variables]]