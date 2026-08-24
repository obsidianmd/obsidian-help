---
description: Customize the note name, properties, and content created by Importer.
permalink: import/templates
---
[[Importer]] lets you define templates that control how your notes are imported from other apps. This means you can modify the title, properties, and content of notes that you import.

## Edit the import template

Select **Edit** above the preview to edit the default template. You can edit:

- The note name shown as the inline title.
- Properties at the beginning of the note.
- The Markdown content of the note.

Select **Save** to return to the preview. Importer remembers an edited inline template for future imports that use the same format.

Alternatively you can load a template from a Markdown file in the current vault.

## Preview results

The preview shows up to ten samples from the data you selected. Use the arrow buttons to move between samples. Changes to import settings and the template update the preview before anything is added to your vault.

Some attachments, remote items, and cross-note references can't be fully resolved until the import runs. In those cases, the preview may retain the source link or show a placeholder.

## Template syntax

Importer templates use a syntax that consists of variables, [[Filters]], and [[Logic]]. It uses the same [Knap](https://github.com/obsidianmd/knap) syntax as [[Introduction to Obsidian Web Clipper|Web Clipper]].

Insert variables with double curly brackets, such as `{{title}}`, `{{content}}`, or `{{date}}`. Variables can be used in the note name, properties, and content.

You can modify variables using [[Filters]]. For example to change the date format using `{{date|date:"YYYY-MM-DD"}}`. Use [[Logic]] for more advanced conditionals, loops, and variable assignment.

## Variables

The following variables are available to use in any Importer template:

| Variable         | Description                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Markdown body without properties (no frontmatter).                                                  |
| `{{content}}`    | Complete Markdown before the selected template is applied.                                          |
| `{{ctime}}`      | Source creation time as an ISO 8601 timestamp; empty when unavailable.                              |
| `{{date}}`       | Current date and time when the template is rendered, as an ISO 8601 timestamp.                      |
| `{{importer}}`   | Importer ID, such as `keep`, `html`, or `notion-api`.                                               |
| `{{folder}}`     | Final vault-relative parent folder. Empty when the note is in the vault root.                       |
| `{{mtime}}`      | Source modification time as an ISO 8601 timestamp; empty when unavailable.                          |
| `{{noteName}}`   | Final resolved note name, after removing invalid characters and adding any suffixes for duplicates. |
| `{{path}}`       | Final vault-relative path, including the `.md` extension.                                           |
| `{{properties}}` | Object containing the frontmatter properties.                                                       |
| `{{source}}`     | Object containing generated properties and source-specific values.                                  |
| `{{sourceId}}`   | Stable source identifier when the importer provides one; otherwise empty.                           |
| `{{time}}`       | Alias for `{{date}}`.                                                                               |
| `{{title}}`      | Original note title before sanitization and deduplication.                                          |

## Source values for properties

For Import formats that support [[Properties]], the source values are also available as top-level variables for convenience. 

If a source value has the same name as a shared variable, access it through `{{source}}`. For example, if your import source has a property named `content` is available as `{{source.content}}`, while `{{content}}` remains the default Importer variable.

Use bracket notation when a field name contains spaces, punctuation, or other special characters:

```twig
{{source["Project: status"]}}
```


