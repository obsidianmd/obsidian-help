Daily Notes will create a new note that is automatically named with the current date. If it already exists, it will open that note. This is a useful way to create a daily log, todo list, or a list of links to notes that you have created on a specific day.  

The date format and default folder for Daily Notes can be set in Settings => Plugins, by clicking the gear next to the name.  The default date format is "YYYY-MM-DD" (ISO format). This format means that a list of daily notes, listed in alphabetical order, will also be in chronological order. 

You can create a Daily Note either by clicking on the calendar icon in the left panel, or with the [[Command palette]]. You can also set a hotkey in [[Use hotkeys]].

### Templates
You can define a [[Templates|template file]] for daily notes. This file will be copied into your daily note when it's created, so it's a good place to put tags or links you use every day.

For the daily notes plugin, `{{date}}` and `{{time}}` do not work. Please use `{{date:YYYY-MM-DD}}` and `{{time:HH:mm}}` in your template.
