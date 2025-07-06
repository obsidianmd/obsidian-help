---
aliases:
description: Format converter is a core plugin that lets you convert Markdown from other applications to Obsidian format.
mobile: true
permalink: plugins/format-converter
publish: true
---

Format converter is a [[Core plugins|core plugin]] that lets you convert Markdown from other applications to Obsidian format. It also allows you to convert certain [[Properties]] to new required formats. 

> [!warning]
> Format converter converts your entire vault based on your settings. [[Back up your Obsidian files]] before you perform the conversion.

To convert all notes in your vault:

1. In [[Command palette]], select **Open format converter**. This can also be found in the [[Ribbon]] with the  **Open format converter** ( ![[lucide-binary.svg#icon]] ) icon.
2. Enable the formats you want to convert.
3. Click **Start conversion**.

For more information, refer to [[Basic formatting syntax]].

## Supported formats

### Roam Research

The Format converter can convert the following Roam Research syntax:

- **Tags**: Converts `#tag` and `#[[tag]]` to `[[tag]]`
- **Highlights**: Converts `^^highlight^^` to `==highlight==`
- **TODO items**: Converts `{{[[TODO]]}}` to `[ ]`

### Bear

The Format converter can convert the following Bear syntax:

- **Highlights**: Converts `::highlight::` to `==highlight==`

### Zettelkasten

The Format converter can convert the following Zettelkasten syntax:

- **Full links**: Converts `[[UID]]` to `[[UID File Name]]`
- **Pretty links**: Converts `[[UID]]` to `[[UID File Name|File Name]]`

### [[Properties]]

As of Obsidian `1.9.3`, the Format converter can convert [[Properties#Deprecated properties|deprecated property]] formats to the current format:

**Aliases**

```yaml
# Before

alias: My Note Title

# After

aliases:
  - My Note Title
```

**Tags**

```yaml
# Before

tag: project, important

# After

tags:
  - project
  - important
```

**CSS Classes**

```yaml
# Before

cssclass: custom-style

# After

cssclasses:
  - custom-style
```
