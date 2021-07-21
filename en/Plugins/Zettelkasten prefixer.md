Adds a new button to the left pane, which can be used to create a new file and prefix it for you using the current time. This can be beneficial if you are a follower of the Zettelkasten UID-in-filename method.

The default format is 12-digit timestamp, e.g. "202001010000".

### Templates
You can define a [[Templates|template file]] for your Zettelkasten notes. This file will be copied when a new Zettel note is created.

For the Zettelkasten prefixer plugin, `{{date}}` and `{{time}}` do not work. Please use `{{date:YYYY-MM-DD}}` and `{{time:HH:mm}}` in your template.
