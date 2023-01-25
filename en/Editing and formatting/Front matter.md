---
aliases:
  - front matter
  - YAML front matter
---

Front matter lets you add metadata to your note.

Front matter is a block that sits at the first line of your note, and starts and ends with triple dashes. Anything between two lines of triple hyphens (`---`) is metadata.

For example, the following note contains front matter with two variables, `tag` and `publish`:

```yaml
---
tag: journal
publish: false
---

# Daily note

Today I learned about front matter.
```

> [!tip]
> By default, front matter is only visible in the [[Read and edit modes|editing view]].
>
> To display front matter in reading view:
>
> 1. Open **Settings**.
> 2. Under **Editor**, enable **Show frontmatter**.

## Configure front matter

[YAML](https://yaml.org/) is a widely used configuration format that's readable by both humans and machines.

```yaml
---
key: value
---
```

While the order of each variable doesn't matter, each variable name must be unique. For example, you can't have more than one `tag` variable.

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

> [!tip] JSON front matter
> While we recommend using YAML in your front matter, Obsidian also supports JSON front matter:
>
> ```md
> ---
> {
>   "tag": "journal",
>   "publish": false
> }
> ---
> ```

## Predefined variables

Obsidian is aware of a set of predefined variables:

| Variable | Description |
|-|-|
| `tag` | See [[Working with tags]]. |
| `tags` | Alias for `tag`. |
| `alias` | See [[Aliases]]. |
| `aliases` | Alias for `alias`. |
| `publish` | Used by [[Introduction to Obsidian Publish\|Obsidian Publish]] to [[Publish and unpublish notes#Automatically select notes to publish\|automatically select notes to publish]]. |
| `cssclass` | Allows you to style individual notes using [[CSS snippets]]. |
