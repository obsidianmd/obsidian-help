Adds a new button to the left pane, which can be used to create a new file and prefix it for you using the current time. 
This is beneficial for followers of the Zettelkasten UID-in-filename method as it helps users create new notes with a **vault-wise unique time-based prefix**.

The default format is 12-digit timestamp, e.g. "202001010000". 
If a file with the current Zettelkasten prefix already exists, the next available timestamp will be used. 

### Templates
You can define a [[Templates|template file]] for your Zettelkasten notes. This file will be copied when a new Zettel note is created.

For the Zettelkasten prefixer plugin, `{{date}}` and `{{time}}` do not work. Please use `{{date:YYYY-MM-DD}}` and `{{time:HH:mm}}` in your template.
