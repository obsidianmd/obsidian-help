---
aliases:
  - front matter
  - Advanced topics/YAML front matter
  - metadata
  - property
  - frontmatter
cssclasses:
  - soft-embed
description: Properties allow you to organize information about a note. Properties contain structured data such as text, links, dates, checkboxes, and numbers.
mobile: false
permalink: properties
publish: true
---

Properties allow you to organize information about a note. Properties contain structured data such as text, links, dates, checkboxes, and numbers. Properties can also be used in combination with [[Community plugins]] that can do useful things with your structured data.

## Add properties to a note

There are several ways to add a property to a note:

- Use the **Add file property** [[Command palette|command]].
- Use the **`Cmd/Ctrl+;`** [[Hotkeys|hotkey]].
- Choose **Add file property** from the **More actions** menu (brought up by the three dots icon or by right-clicking the tab).
- Type `---` at the very beginning of a file.

Once you add a property, a row will appear at the top of the file with two inputs: the property _name_ and the property _value_.

For the name, you can choose anything you like. Obsidian provides several default properties: `tags`, `cssclasses`, and `aliases`.

Once you choose the property name, you can give it a value.

### Property types

In addition to a name and value, properties also have a _type_. A property's type determines what kind of values it can store and how Obsidian handles them. To change the type of a property, click the type icon next to the property name and select a different option. You can also manage property types using the [[Properties view]] core plugin.

Obsidian supports the following property types:

- **[[#Text]]**
- **[[#List]]**
- **[[#Number]]**
- **[[#Checkbox]]**
- **[[#Date]]**
- **[[#Date & time]]**
- **[[#Tags]]**

Once a property type is assigned to a property name, all properties with that name across your vault will use the same type.

## Advanced uses

### Search properties

Properties have their own [[Search|search syntax]] that you can use alongside other search terms and operators. [[Search#Search properties|See search syntax for properties]].

### Templates

You can add properties to [[Plugins/Templates|Templates]].

When you insert a template into the active note, all the properties from the template will be added to the note. Obsidian will also merge any properties that exist in your note with properties in the template. ^templates-properties

### Rename properties

You can rename a property by right-clicking it in the [[Properties view|All properties view]].

### Display modes

You can change how properties are displayed in your note by going to  **Settings → Editor → Properties in document**. The options are:

- **Visible** (default) – displays properties at the top of the note, if there are any.
- **Hidden** – hides properties, can still be displayed in the sidebar via [[Properties view]].
- **Source** – displays properties in plain text YAML format.

### CSS snippets

You can use [[CSS snippets]] to change the appearance of specific notes.

### Not supported

A few features are not currently supported in Obsidian:

- **Nested properties**: To view nested properties, we recommend using the [[Views and editing mode#Source mode|source mode]].
- **Bulk-editing properties**: For in-depth bulk editing outside of [[Properties view]], we recommend using bulk-editing tools like VSCode, scripts, and community plugins.
- **Markdown in properties**: This is an intentional limitation as properties are meant for small, atomic bits of information that are both human and machine readable.

## Hotkeys

### Add a property

| Action | Hotkey |
|---|---|
|Add new property|`Cmd + ;`|

### Navigate between properties

When a property is focused 

| Action | Hotkey |
|---|---|
|Focus next property|`Down arrow` or `Tab`|
|Focus previous property|`Up arrow` or `Shift+Tab`|
|Jump to editor|`Alt+Down arrow`|

### Select properties

| Action | Hotkey |
|---|---|
|Extend selection upwards|`Shift+Up arrow`|
|Extend selection downwards|`Shift+Down arrow`|
|Select all|`Cmd+A`|

### Edit properties

| Action | Hotkey |
|---|---|
|Edit property name|`Left arrow`|
|Edit property value|`Right arrow`|
|Focus property|`Escape`|
|Delete property|`Cmd+Backspace`<br><br>if any properties are selected, it will delete the selection instead.|
|Undo|`Cmd+Z`|
|Redo|`Cmd+Shift+Z`|

### Vim (advanced)

| Action | Hotkey |
|---|---|
|Move down|`j`|
|Move up|`k`|
|Focus key|`h`|
|Focus value|`l`|
|Focus value (Cursor at end)|`A`|
|Focus value (Cursor at beginning)|`i`|
|Create new property|`o`|

## Property format

Properties are stored in [YAML](https://yaml.org/) format at the top of the file. YAML is a popular format that is easy for both humans and computers to read.

Property names are separated from their values by a colon followed by a space:

```yaml
---
name: value
---
```

While the order of each name-value pair doesn't matter, each name must be unique within a note. For example, you can't have more than one `tags` property.

Values can be [[#Text|text]], [[#Number|numbers]], [[#Checkbox|checkboxes]], [[#Date|dates]], [[#Date & time|dates and times]], or [[#List|lists]].

### Text

Text properties contain a single line of text. Markdown formatting is not rendered in text properties. Hashtags do not create tags when used in text properties.

Text properties can contain URLs and [[Internal links]] using the `[[Link]]` syntax. [[Internal links]] in text properties must be surrounded with quotes. Obsidian will automatically add these if you manually enter internal links into properties, but be careful to add them when using templating plugins.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### List

List properties contain multiple values. Each value in a list appears on its own line, preceded by a hyphen (-) and a space.

List values can contain text, numbers, and [[Internal links]]. When using [[Internal links]] in list properties, surround them with quotes.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Number

Number type properties must always be a literal number, not an expression with operators. Integers and decimals are both allowed.

```yaml
---
year: 1977
pie: 3.14
---
```

### Checkbox

Checkbox properties are either `true` or `false`. In Live Preview, this displays as a checkbox.

```yaml
---
favorite: true
reply: false
last: # Inderminate value; often treated as false
```

### Date

Date properties are stored in the following format: 

```yaml
---
date: 2020-08-21
---
```

The date picker follows your operating system's default date and time format. You can change it in your system preferences: 

> [!info]- Windows
> **Settings → Time & Language → Language & Region → Regional Format → Change Formats**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **System Preferences → Language and Region → Date format**
> 
> ![[Mac-OS-DateTime.png|450]]

With the [[Daily notes]] plugin enabled, the date property will additionally function as an internal link to the corresponding daily note for that date.

![[Daily notes#^daily-notes-date]]

### Date & time

Date & time properties include both a date and a specific time, stored in the following format:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Like [[#Date|date properties]], the date and time picker follows your operating system's default format. You can change it in your system preferences.

### Tags

Tags properties are a special property type used exclusively by the `tags` property. This property type cannot be assigned to other properties.

Tags properties are formatted as a list, with each tag on its own line preceded by a hyphen (-) and a space. 

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

The `tags` property is one of Obsidian's [[#Default properties]]. See [[Tags]] for more information about using tags in Obsidian.

### JSON properties

While we recommend using YAML to define properties, you can also define properties using [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Note that the JSON block will be read, interpreted, and saved as YAML.

## Default properties

Obsidian comes with a set of default properties:

| Property     | Type | Description                                                  |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | List | See [[Editing and formatting/Tags\|Tags]].                   |
| `aliases`    | List | See [[Aliases]].                                             |
| `cssclasses` | List | Allows you to style individual notes using [[CSS snippets]]. |

### Properties for Obsidian Publish

The following default properties can be used with [[Introduction to Obsidian Publish|Obsidian Publish]]:

| Property      | Description                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | See [[Publish your content#Automatically select notes to publish\|Automatically select notes to publish]]. |
| `permalink`   | See [[Permalinks\|Permalinks]].                                                                            |
| `description` | See [[Social media link previews#Description\|Description]].                                               |
| `image`       | See [[Social media link previews#Image\|Image]].                                                           |
| `cover`       | See [[Social media link previews#Image\|Image]].                                                           |

### Deprecated properties

These properties were deprecated in Obsidian 1.4 and should be replaced with their modern equivalents. Support for them as [[#Default properties]] is dropped in Obsidian 1.9.

| Property | Description |
|-|-|
| `tag` | Deprecated alias for `tags`. |
| `alias` | Deprecated alias for `aliases`. |
| `cssclass` | Deprecated alias for `cssclasses`. |

> [!tip] If you need to convert your files in your vault to the [[#Default properties]] format, you can use [[Format converter]] to change your vault en masse.
