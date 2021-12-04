The Templates plugin lets you quickly insert snippets of text into your current note.

### Set up template folder

Each template snippet is just a normal Markdown note, like everything else in Obsidian.

To designate template files, put them into a folder, and choose that folder in Settings => Templates => "Template folder location" after enabling the plugin

### Insert a template

After setting up the folder location, using the ribbon icon to insert the template. As always, you can also set a hotkey for this option, or use the command palette to access it.

The template snippet will be inserted in the current caret position, with special text replaced by their actual value at the time of the insertion (see below).

### Insert title

If you want to insert the title of a note, you can set it in a template with `{{title}}`.

### Insert date and time

In the plugin settings of Template, you can also set a date format and a time format.

After setting these formats, `{{date}}` and `{{time}}` in the template files will be replaced by the formatting current time.

For formatting syntax documentation, [please see here](https://momentjs.com/docs/#/displaying/format/).

_Tip: if you want to have two date formats or two time formats, you can use the other `{{time}}` as the second `{{date}}`, or `{{date}}` as the second `{{time}}`._

### One-off date formats

In addition to `{{date}}` and `{{time}}`, which will work in all template files, you can also write `{{date:YYYY-MM-DD}}` to insert a date with a certain format just once. This will override the `{{date}}` format. Anything after `:` will be considered part of the date format.

`{{time:HH:mm}}` works similarly.

### Using custom date formats elsewhere

Currently, dates like `{{date:YYYY-MM-DD}}` and `{{time:HH:mm}}` also work in the template file of the [[Daily notes]] and [[Zettelkasten prefixer]] plugins. However, `{{date}}` and `{{time}}` do not work yet.
