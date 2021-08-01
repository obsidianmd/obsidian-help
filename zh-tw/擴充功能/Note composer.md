The Note composer plugin allows you to easily merge two note or extract part of a note into its own note.

## Merge

When working with the file, you can choose "Merge entire file with..." in the More Options menu.

Alternatively, you can open [[Command palette]] and invoke the command "Note composer: Merge current file with another file...".

This will bring up a menu to choose a file to merge into. Once you confirm the merge, all links to the current note will be updated to the merged file.

The current note will be merged to the bottom by default; you can use `Shift-Enter` instead of `Enter` to merge it to the top.

## Extract

When selecting text, you can either right click on it, select "Extract current selection", or use the [[Command palette]] to find the "Note composer: Extract current selection..." command.

Similar to merging, this will bring up a menu to choose a file to extract into. If no result can be found, a new note will be created. If you want to create a new note instead of using the first result, press `Ctrl-Enter` (or `Cmd-Enter` on macOS).

## Options

Note Composer has a few helpful plugin options.

### Text after moving

After you extract a piece of text, it's often a good idea to leave a link to the new file. By default, a link is created. But you can also change this option to have an embed created for you, or insert nothing at all.

### Template file

When merging or extracting, instead of just sending over the content, you can also apply a template file to it.

This template file can contain the following variables:

- `{{content}}`: this is where the content will be placed. If you do not include this variable, the content will automatically be placed at the bottom of the template.
- `{{fromTitle}}`: the name of the note where the new note comes from.
- `{{newTitle}}`: the title of the new file. Convenient if you prefer to have a heading at the top of the file that's the same as the file name.
- `{{date:FORMAT}}`: you can add multiple dates with your custom format. For example, you can do `{{date:YYYY-MM-DD}}` and it will resolve to the date or time when the note gets created.

### Confirm file merge

Merging files will delete the file and is destructive, so by default we ask for your confirmation. If you prefer, you can choose to skip this confirmation.

In case you accidentally merged something and want to get it back, consider using the [[File recovery]] plugin to recover it.