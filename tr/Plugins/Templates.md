You can use Templates to insert pre-defined snippets of text into your active note.

## Set your template folder

1. In the bottom-left corner, click **Settings** (cog icon).
2. Under **Core plugins → Templates → Template folder location**, enter the folder containing your templates.

## Insert a template into the active note

**Important:**  To insert a template, you need to first [[#Set your template folder]].

1. In the ribbon, click **Insert template**.
2. Select the template to insert at the cursor position in the active note.

If your template folder contains only one note, Templates inserts it directly into the active note.

## Template variables

You can add dynamic information to your templates, using _template variables_. When you insert a template containing a template variable, Templates replaces it with its corresponding value.

| Variable    | Description                                     |
|-------------|-------------------------------------------------|
| `{{title}}` | Title of the active note.                       |
| `{{date}}`  | Today's date. **Default format:** `YYYY-MM-DD`. |
| `{{time}}`  | Current time. **Default format:** `HH:mm`.      |

Both `{{date}}` and `{{time}}` allow you to change the default format using a _format string_.

To set a format string, add a colon (`:`) followed by a string of [Moment.js format tokens](https://momentjs.com/docs/#/displaying/format/), for example `{{date:YYYY-MM-DD}}`.

You can use `{{date}}` and `{{time}}` interchangeably with format strings, for example `{{time:YYYY-MM-DD}}`.

You can change the default date and time formats under **Settings → Templates → Date format** and **Settings → Templates → Time format**.

> [!tip]
> You can also use the `{{date}}` and `{{time}}` template variables in the [[Daily notes]] and [[Unique note creator]] plugins.
