---
aliases: front matter
---

YAML, also known as front matter, is designed to be file-level metadata that is readable by humans *and* Obsidian.

Front matter is a section of plain text attributes that starts at the first line of the file. It is one of the most popular ways to add metadata in a Markdown file, and has been popularized by static generators such as Jekyll, Hugo, and Gatsby.

A YAML block needs **triple dashes** at the start and end to be read by Obsidian (and other apps). ==It also needs to be placed at the very top of the file.==

For example:

```
---
key: value
key2: value2
key3: [one, two, three]
key4:
- four
- five
- six
---
```

As of 0.12.12, there are four keys natively supported:
- `tags` ([[Working with tags|more information]])
- `aliases` ([[Add aliases to note|more information]])
- `cssclass`
- `publish`([[Publish#YAML support for Publish|more information]])

As Obsidian continues to develop, we will gradually make it more accessible by plugin developers, and make it more user friendly.
