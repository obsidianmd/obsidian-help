---
aliases:
description: Format converter migrates deprecated property formats in your notes.
mobile: true
permalink: plugins/format-converter
publish: true
---

Format converter migrates [[Properties#Deprecated properties|deprecated property formats]] to the current format used by Obsidian.

> [!warning] Back up your vault
> Conversion applies to your entire vault. [[Back up your Obsidian files]] before you start.

To convert the properties in your notes:

1. Open the [[Command palette]].
2. Select **Format converter: Frontmatter migration**.
3. Select **Start conversion**.

## Supported property formats

The converter updates aliases, tags, and CSS classes from deprecated formats:

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
