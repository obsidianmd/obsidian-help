---
aliases: alias, aliases
---

Sometimes, you might want to refer to the same file with multiple names in different contexts. These alternative names are what we call "aliases".

For example, you might want to refer to your partner by their full name, first name, or a nickname. Or you might want to refer to "artificial intelligence" by its abbreviation "AI". If you know multiple languages, you may want to refer to the same concept with their name in the same language that the rest of the note is written in.

### Set aliases

Starting in 0.9.16, you're able to specify the "aliases" property in a note's [[YAML front matter]] like so:

```
---
aliases: [AI, Artificial Intelligence]
---
```

Please note that this section must be placed at the very top of a note to take effect.

In the future, we'll consider more user-friendly ways to manage aliases than manually writing them in front matter.

### Link with aliases

Once you've set aliases for a file, you can write `[[alias]]` to link to the original page. A redirect icon will show up in the auto-complete list like so:

![[Insert alises.png]]

An internal link with display text will get inserted like so: `[[Add aliases to note|alias]]`.

Note: the link to alias is **NOT** inserted as `[[alias]]` for interoperability, so that other software can recognize it as well.

### Find unlinked mentions

After you've set aliases for a note, you can find unlinked mentions by both its name and its aliases.

For example, after setting "AI" as an alias for "Artificial intelligence", you'll see mentions of "AI" in other files in the [[Backlinks]] section.

If you decide to link this mention, a link with display text set to the alias will be created for you. Following the example above, `AI` will become `[[Artificial intelligence|AI]]` once you click on the "Link" button.