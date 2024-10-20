---
aliases: 
- alias
- aliases
- How to/Add aliases to note
---

If you want to reference a file using different names, consider adding _aliases_ to the note. An alias is an alternative name for a note.

Use aliases for things like acronyms, nicknames, or to refer to a note in a different language.

## Add an alias to a note

To add an alias for a note, add `aliases` property in the note [[Properties]]. Aliases should always be formatted as a list in YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Link to a note using an alias

To link to a note using an alias:

1. Start typing the alias in an [[Internal links|internal link]]. Any alias shows up in the list of suggestions, with a curved arrow icon next to it.
2. Press `Enter` to select the alias.

Obsidian creates the link with the alias as its custom display text, for example `[[Artificial Intelligence|AI]]`.

> [!note]
> Rather than just using the alias as the link destination (`[[AI]]`), Obsidian uses the `[[Artificial Intelligence|AI]]` link format to ensure interoperability with other applications using the Wikilink format.

## Find unlinked mentions for an alias

By using [[Backlinks]], you can find unlinked mentions of aliases.

For example, after setting "AI" as an alias for "Artificial intelligence", you can see mentions of "AI" in other notes.

If you link an unlinked mention to an alias, Obsidian turns the mention into an [[Internal links|internal link]] with the alias as its display text.
