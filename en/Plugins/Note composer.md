Note composer lets you merge two notes or extract part of a note into a new note.

## Merge notes

Merging notes adds a note to another and removes the first one. Note composer updates all links to reference the merged note.

When you select the note to merge into, you can choose between the following methods:

- `Enter`: Adds the source note at the _end_ to the destination note.
- `Shift+Enter`: Adds the source note at the _start_ of the destination note.
- `Ctrl+Enter` (or `Cmd+Enter` on macOS): Creates a new note with the content of the source note.

To merge the active note with another note in your vault:

**File explorer**

1. In the File explorer, right-click the note you want to merge.
2. Click **Merge entire file with...**.
3. Select the note you want to merge into.
4. Click **Merge** to confirm.

**Command palette**

1. Open the [[Command palette]].
2. Select **Note composer: Merge current file with another file...**.
3. Select the note you want to merge into.
4. Click **Merge** to confirm.

> [!tip]
> By default, Note composer asks you to confirm when merging notes. If you disable the confirmation, and you merge a note by mistake, you can still recover it with the [[File recovery]] plugin.

## Extract note

When you select the note to extract the selection into, you can choose between the following methods:

- `Enter`: Adds the selected text at the _end_ to the destination note.
- `Shift+Enter`: Adds the selected text at the _start_ of the destination note.
- `Ctrl+Enter` (or `Cmd+Enter` on macOS): Creates a new note with the selected text.

To extract text into a new note:

**Editor**

1. While in the **Editing view**, select the text you want to extract.
2. Right-click the selected text.
3. Click **Extract current selection...**.
4. Select the note you want to extract into.

**Command palette**

1. While in the **Editing view**, select the text you want to extract.
2. Open the [[Command palette]].
3. Select **Note composer: Extract current selection...**.
4. Select the note you want to extract into.

> [!tip]
> By default, Note composer replaces the extracted text with a link to the destination note. Under settings, you can also change to instead [[Embed files|embed]] the destination note, or to leave nothing behind.

## Template file

By configuring a template, you can customize the content before you add it to the new note. To use a template, enter a **Template file location** in the plugin settings.

The template can contain the following variables:

| Variable          | Description                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | The content to merge, or the extracted text selection. If you don't include this variable, Note composer adds the content at the bottom of the template. |
| `{{fromTitle}}`   | Name of the source note.                                                                                                                                 |
| `{{newTitle}}`    | Name of the destination note. For example, to add the file name as a heading at the top of the file.                                                     |
| `{{date:FORMAT}}` | Creation date of the new note. For example, `{{date:YYYY-MM-DD}}`.                                                                                       |
