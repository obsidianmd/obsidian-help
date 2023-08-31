---
aliases:
  - front matter
  - Advanced topics/YAML front matter
  - metadata
---
Properties contain information about a note. 

## Basic usage

There are several ways to add a property to a note:

- Use the [[Command palette|command]] **Add file property**.
- Use the `Cmd/Ctrl+;` hotkey.
- Choose **Add file property** from the **More actions** menu (three dots icon) or right-clicking the tab.
- Typing `---` at the very beginning of a file.

Once you add a property, a row will appear at the top of the file with two inputs: the property _name_ and the property _value_.

For the name, you can choose anything you like. Note that Obsidian provides several default properties: `tags`, `cssclasses`, and `aliases`.

Once you choose the property name you can give it a value.

## Property types

In addition to a name and value, properties also have a type. A _property type_ describes the kind of values can be stored.

Obsidian provides the following property types:

- **Text**
- **List**
- **Number**
- **Checkbox**
- **Date**
- **Date & time**

Once a property type is assigned to a property, all properties with that name are assumed to have the same property type.

## Search properties

Properties have their own [[Search|search syntax]] that you can use alongside other search terms and operators. [[Search#Search properties|See search syntax for properties]].

## Hotkeys

### Add a property

|   |   |
|---|---|
|Add new property|`Cmd + ;`|

### Navigate between properties

When a property is focused 

|   |   |
|---|---|
|Focus next property|`Down arrow` or `Tab`|
|Focus previous property|`Up arrow` or `Shift+Tab`|
|Jump to editor|`Alt+Down arrow`|

### Select properties

|   |   |
|---|---|
|Extend selection upwards|`Shift+Up arrow`|
|Extend selection downwards|`Shift+Down arrow`|
|Select all|`Cmd+A`|

### Edit properties

|   |   |
|---|---|
|Edit property name|`Left arrow`|
|Edit property value|`Right arrow`|
|Focus property|`Escape`|
|Delete property|`Cmd+Backspace`<br><br>if any properties are selected, it will delete the selection instead.|
|Undo|`Cmd+Z`|
|Redo|`Cmd+Shift+Z`|

### Vim (advanced)

|   |   |
|---|---|
|Move down|`j`|
|Move up|`k`|
|Focus key|`h`|
|Focus value|`l`|
|Focus value (Cursor at end)|`A`|
|Focus value (Cursor at beginning)|`i`|
|Create new property|`o`|


## Property format

Properties are stored in [YAML](https://yaml.org/)  format at the top of the file. YAML is a widely used format that's readable by both humans and machines. Each property consists of a _key_ and a corresponding _value_.

Keys are separated from their values by a colon followed by a space:

```yaml
---
key: value
---
```

While the order of each key-value pair doesn't matter, each key must be unique within a note. For example, you can't have more than one `tag` key.

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

> [!tip] JSON properties
> While we recommend using YAML to define properties, you can also define properties using [JSON](https://www.json.org/):
>
> ```md
> ---
> {
>   "tag": "journal",
>   "publish": false
> }
> ---
> ```

## Predefined properties

Obsidian comes with a set of predefined keys:

| Key | Description |
|-|-|
| `tags` | See [[Editing and formatting/Tags\|Tags]]. |
| `aliases` | See [[Aliases]]. |
| `cssclasses` | Allows you to style individual notes using [[CSS snippets]]. |

### Deprecated properties

These keys are deprecated in 1.4. Please do not use them any more:

| Key | Description |
|-|-|
| `tag` | Deprecated alias for `tags`. |
| `alias` | Deprecated alias for `aliases`. |
| `cssclass` | Deprecated alias for `cssclasses`. |

### Properties for Obsidian Publish

The following properties keys are used by [[Introduction to Obsidian Publish|Obsidian Publish]]:

| Key | Description |
|-|-|
| `publish` | See [[Publish and unpublish notes#Automatically select notes to publish]]. |
| `permalink` | See [[Publish and unpublish notes#Permalinks]]. |
| `description` | See [[Social media link previews#Description]]. |
| `image` | See [[Social media link previews#Image]]. |
| `cover` | See [[Social media link previews#Image]]. |
