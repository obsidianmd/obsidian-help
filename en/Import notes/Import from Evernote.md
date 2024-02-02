---
permalink: import/evernote
---
Obsidian allows you to easily migrate your notes from Evernote using the [[Importer|Importer plugin]].

## Export your data from Evernote

Obsidian uses Evernote's export format `.enex` files.

You can find Evernote's instructions for exporting your data [on Evenote's website](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). This method allows you to export entire notebooks in the desktop client.

1. Go to the Notebooks screen.
2. Click on **More actions** (`•••` icon) and choose **Export Notebook...**
3. Select **ENEX** as the file format.
3. Choose a location for your exported `.enex` file.

Unfortunately Evernote export doesn't keep neither tag hierarchy, nor notebook stacks, but these workarounds could be helpful in order to keep them in Obsidian too. 

### Keeping tag hierarchy

To keep tag hierarchy, you can "flat" tags separated by "/".

For instance, assoming that you have the following structure: 
```
ParentTag
    ChildTag
```
what you need to do to keep tags related is:

1. Right click to ChildTag
2. Select Rename
3. Rename to ```ParentTag/ChildTag```

### Notebook stacks

As the export process can be performed on single notebooks only, there is no way to keep info about notebook stacks by default in the exported file. 
Nevertheless the importer is able to recognize patterns in the name of the enex file, which can be utilized to recreate notebook stacks as folders.
Assuming that you have a notebook called ```NotebookA``` in a stack called ```Stack1```, the only thing you need to is to
1. rename the enex file to 
```Stack1@@@NotebookA```

Then the converted notes are going to be generated within Stack1/NotebookA folder. 

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

### Import settings

For more advanced import options from Evernote you can also try [importing via Yarle](https://github.com/akosbalasko/yarle).
