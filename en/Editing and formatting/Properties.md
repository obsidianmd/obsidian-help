---
aliases:
  - front matter
  - Advanced topics/YAML front matter
  - metadata
  - property
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

In addition to a name and value, properties also have a *type*. A property's type describes the kind of values it can store. To change the type of a property, click the property's icon or use the **Edit file property** command.

Obsidian supports the following property types:

- **Text**
- **List**
- **Number**
- **Checkbox**
- **Date**
- **Date & time**

Once a property type is assigned to a property, all properties with that name are assumed to have the same property type.

## Advanced uses

### Links

**Text** and **List** type properties can contain URLs and [[Internal links]] using the `[[Link]]` syntax.

### Search properties

Properties have their own [[Search|search syntax]] that you can use alongside other search terms and operators. [[Search#Search properties|See search syntax for properties]].

### Templates

You can add properties to [[Templates]]. When you insert a template into the active note, all the properties from the template will be added to the note. Obsidian will also merge any properties that exist in your note with properties in the template.

### Rename properties

You can rename a property by right-clicking it in the [[Properties view|All properties view]].

### Display modes

You can change how properties are displayed in your note by going to  **Settings → Editor → Properties in document**. The options are:

- **Visible** (default) — displays properties at the top of the note, if there are any.
- **Hidden** — hides properties, can still be displayed in the sidebar via [[Properties view]].
- **Source** — displays properties in plain text YAML format.

### Not supported

A few features are not supported in Obsidian:

- **Nested properties** — to view nested properties we recommend using the Source display.
- **Bulk editing properties** — this can be achieved with community-made tools such as Python scripts.
- **Markdown in properties** — this is an intentional limitation as properties are meant for small, atomic bits of information that are both human and machine readable.

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

Properties are stored in [YAML](https://yaml.org/)  format at the top of the file. YAML is a widely used format that's readable by both humans and machines.

Property names are separated from their values by a colon followed by a space:

```yaml
---
name: value
---
```

While the order of each name-value pair doesn't matter, each name must be unique within a note. For example, you can't have more than one `tags` property.

Values can be text, numbers, true or false, or even collections of values (arrays).

```yaml
---
title: A New Hope
year: 1977
favorite: true
cast:
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
---
```

Internal links in **Text** and **List** type properties must be surrounded with quotes. Obsidian will automatically add these if you manually enter internal links into properties, but be careful to add them when using templating plugins.

```yaml
---
link: "[[Link]]" 
linklist: 
  - "[[Link]]" 
  - "[[Link2]]"
---
```

**Date** and **Date & time** type properties are stored in the following format:

```yaml
---
date: 2020-08-21
time: 2020-08-21T10:30:00
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
### JSON Properties

While we recommend using YAML to define properties, you can also define properties using [JSON](https://www.json.org/):

```json
---
{
  "tags": "journal",
  "publish": false
}
---
```

Note that the JSON block will be read, interpreted, and saved as YAML.

## Default properties

Obsidian comes with a set of default properties:

| Property | Description |
|-|-|
| `tags` | See [[Editing and formatting/Tags\|Tags]]. |
| `aliases` | See [[Aliases]]. |
| `cssclasses` | Allows you to style individual notes using [[CSS snippets]]. |

### Properties for Obsidian Publish

The following properties can be used with [[Introduction to Obsidian Publish|Obsidian Publish]]:

| Property | Description |
|-|-|
| `publish` | See [[Publish and unpublish notes#Automatically select notes to publish\|Automatically select notes to publish]]. |
| `permalink` | See [[Publish and unpublish notes#Permalinks\|Permalinks]]. |
| `description` | See [[Social media link previews#Description\|Description]]. |
| `image` | See [[Social media link previews#Image\|Image]]. |
| `cover` | See [[Social media link previews#Image\|Image]]. |

### Deprecated properties

These properties were deprecated in Obsidian 1.4. Please do not use them anymore:

| Property | Description |
|-|-|
| `tag` | Deprecated alias for `tags`. |
| `alias` | Deprecated alias for `aliases`. |
| `cssclass` | Deprecated alias for `cssclasses`. |

