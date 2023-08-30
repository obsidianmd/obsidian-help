---
aliases:
  - front matter
  - Advanced topics/YAML front matter
  - metadata
---
While most of the text in a note is meant to be read by a human, _properties_ are text that's meant to be easily readable by a program, for example a [[Community plugins|community plugin]] or Obsidian itself.

You can add properties to your notes by adding a block on the first line of your note. The block must start and end with three hyphens (`---`).

For example, the following note contains two pieces of properties, `tag` and `publish`:

```yaml
---
tag: journal
publish: false
---

# Daily note

Today I learned about front matter.
```

> [!tip]
> By default, properties are only visible in the [[Editing and previewing Markdown#Editor views|editing view]].
>
> To display properties in reading view:
>
> 1. Open **Settings**.
> 2. Under **Editor**, enable **Show frontmatter**.

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
