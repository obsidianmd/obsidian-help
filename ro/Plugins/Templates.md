---
localized: null
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Templates is a core plugin that lets you insert pre-defined snippets of text into your active note.
---

Templates is a [[Core plugins|core plugin]] that lets you insert pre-defined snippets of text into your active note.

## Set your template folder

1. In the bottom-left corner, select **[[Settings]]** ![[lucide-cog.svg#icon]].
2. Under **Core plugins → Templates → Template folder location**, enter the folder containing your templates.

## Template variables

You can add dynamic information to your templates, using _template variables_. When you insert a template containing a template variable, Templates replaces it with its corresponding value.

| Variable    | Description                                     |
|-------------|-------------------------------------------------|
| `{{title}}` | Title of the active note.                       |
| `{{date}}`  | Today's date. **Default format:** `YYYY-MM-DD`. |
| `{{time}}`  | Current time. **Default format:** `HH:mm`.      |

Both `{{date}}` and `{{time}}` allow you to change the default format using a _format string_.

To set a format string, add a colon (`:`) followed by a string of [Moment.js format tokens](https://momentjs.com/docs/#/displaying/format/), for example `{{date:YYYY-MM-DD}}`.

You can use `{{date}}` and `{{time}}` with format strings in the same way, for example `{{time:YYYY-MM-DD}}`.

You can change the default date and time formats under **[[Settings]] → Core plugins → Templates → Date format** and **[[Settings]] → Core plugins → Templates → Time format**. ^template-settings-date-time-formatting

> [!tip]- Use date and time variables in other plugins
> You can also use the `{{date}}` and `{{time}}` template variables in the [[Daily notes]] and [[Unique note creator]] plugins.

## Create a template

In the [[#Set your template folder|template folder]], [[Manage notes#Create a new note|create a note]] containing the text you want to appear when you use the template. You can use [[#Template variables|template variables]] for dynamic text like the current date.

For example, here's a template for study notes:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Key Concepts


## Important Details


## Examples


## Questions
- 

## Summary


## Related Topics
- [[]]
```

> [!warning]+ Edit templates in Source mode
> In [[Views and editing mode#Live Preview|Live Preview]], the **Properties in document** panel can overwrite template variables that do not have quotation marks.
>
> To avoid this, edit templates in [[Views and editing mode#Source mode|Source mode]], or set **[[Settings]] → Editor → [[Settings#Properties in document|Properties in document]]** to **Source**.

## Insert a template into the active note

> [!todo] [[#Set your template folder]] before inserting a template.

1. In the ribbon, select **Insert template**.
2. Select the template to insert at the cursor position in the active note.

To insert a template using the [[Command palette]] or [[Hotkeys#Set a hotkey|a custom keyboard shortcut]], use the command `Templates: Insert template`.

The content of the template is inserted at your current cursor position. If your cursor is not in the note body, the content is inserted at your last cursor position.

### Template properties

![[Properties#^templates-properties]]

## Insert current date and time into the active note

Use the commands `Templates: Insert current date` and `Templates: Insert current time` to insert the current date and time at your current cursor position. Like the `Insert template` command, you can also perform these with the Command palette or a custom keyboard shortcut.

The inserted date and time uses the [[#^template-settings-date-time-formatting|formatting set in the plugin settings]].
