---
aliases: front matter
---

YAML front matter is how file-level metadata lives in Obsidian.

Front matter is essentially a section of plain text attributes placed at the very top of the file. Front matter was popularized by static generators like Jekyll, Hugo, and Gatsby. It's one of the most popular ways to put metadata in a Markdown file.

Front matter is a YAML block with **tripe dashes** both before and after. ==It also needs to be placed at the very top of the file.==

For example:

```
---
key: value
key2: value2
multiple: [one, two, three]
multiple:
- one
- two
- three
---
```

As of 0.9.17, [[Add aliases to note|alias]] uses front matter. We'll gradually make it more accessible by plugin developers and more user friendly.