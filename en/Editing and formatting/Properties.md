---
aliases:
  - front matter
  - Advanced topics/YAML front matter
  - metadata
---
While most of the text in a note is meant to be read by a human, _properties_ are text that's meant to be easily readable by a program, for example a [[Community plugins|community plugin]] or Obsidian itself.

Properties contain information _about_ a note that don't necessarily belong in the note contents. Let's say, for example, you write journal entries in Obsidian, and you want to record where in the world you were when you wrote that entry.

You could start the entry with "Today, I'm in New York City...". It's easy to read and gets the point across. But what if you wanted to search your notes for all the journal entries you did in New York? Then you're stuck searching all your notes for "New York City" and manually combing through all the notes where you talk about the city.

What you really want is a way to ascribe the note with data. This is where properties come in. You can add a _location_ property and mark each entry with "New York City."

## Basic usage

To add a property to a note, you have several options:
- Using the command _Add file property_.
- Choose _Add file property_ from the file menu.
- Typing `---` at the very beginning of a file.

Once you add a property, a row will appear at the top of the file with two inputs: the property _name_ and the property _value_.

For the name, you can choose anything you'd like. Note that Obsidian provides several default properties out of the box: `tags`, `cssclasses`, and `aliases`.

Once you choose the property name, you'll also want to give it a value.

## Property types

In addition to a name and value, properties also have a type. A _property type_ describes values can be stored in a property, for example, does the property contain text or a number?

Obsidian provides the following property types:
- Text
- List
- Number
- Checkbox
- Date
- Date & time

Once a property type is assigned to a property, all properties with the same name are assumed to have the same property type.

## Getting comfortable

### Add items

|   |   |
|---|---|
|Add new property|⌘ Cmd ;|

### Navigate

When a property is focused, jump 

|   |   |
|---|---|
|Focus next property|↓ or Tab|
|Focus previous property|↑ or Shift Tab|
|Jump to editor|Alt ↓|

### Select items

|   |   |
|---|---|
|Extend selection upwards|⇧ Shift ↑|
|Extend selection downwards|⇧ Shift ↓|
|Select all|⌘ Cmd A|

### Edit items

|   |   |
|---|---|
|Edit key|←|
|Edit value|→|
|Focus property|Escape|
|Delete property|⌘ Cmd Backspace<br><br>if any properties are selected, it will delete the selection instead.|
|Undo|⌘ Cmd z|
|Redo|⌘ Cmd ⇧ Shift z|

### Vim (Advanced)

|   |   |
|---|---|
|Move down|j|
|Move up|k|
|Focus key|h|
|Focus value|l|
|Focus value (Cursor at end)|A|
|Focus value (Cursor at beginning)|i|
|Create new property|o|


### Commands

## Integrations

Currently, the Search view has partial support for properties.

- To find notes containing a property, use [_property_].
- To find notes with a property and a corresponding value, use [_property_:_value_].


## FAQ

##### Can I display the Properties in my file as plaintext instead?
Yes, if you would like to display the Properties as plaintext, you can go to settings and change _Editor → Properties in document_ to **Source**.

##### Can I insert Markdown inside Properties?
No, do not properties will not support Markdown formatting. The only markup supported within properties is `[[wikilinks]]`.

This limitation is intentional, as properties are meant for small, atomic bits of information that are both _human_ and _machine_ readable. 

##### Does it support nested properties?
At the moment, nested properties are not supported. This might change in the future.

##### Can I bulk edit properties?
No, there is no bulk editing functionality for properties in Obsidian.

## Property format

[YAML](https://yaml.org/) is a widely used configuration format that's readable by both humans and machines. Each property consists of a _key_ and a corresponding _value_.

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
