### Task list

```md
- [x] #tags, [links](), **formatting** supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [?] this is also a complete item (works with every character)
- [ ] this is an incomplete item
- [ ] tasks can be clicked in Preview to be checked off
```

- [x] #tags, [links](), **formatting** supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [?] this is also a complete item (works with every character)
- [ ] this is an incomplete item
- [ ] tasks can be clicked in Preview to be checked off

---

### Horizontal Bar

Use three stars ***, hyphens ---, or underscores ___ in a new line to produce an horizontal bar.

***

---

### Footnotes

```md
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: meaningful!

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: meaningful!

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

---

```md
You can also use inline footnotes. ^[notice that the caret goes outside of the brackets on this one.]
```

You can also use inline footnotes. ^[notice that the caret goes outside of the brackets on this one.]

---

### Comments

Use `%%` to enclose comments, which will be parsed as Markdown, but won't show up in the preview.

```md
Here is some inline comments: %%You can't see this text%% (Can't see it in Reading mode)

Here is a block comment: (can't see it in Reading mode either)
%%
It can span
multiple lines
%%
```

Here is some inline comments: %%You can't see this text%% (can't see it in Reading mode)

Here is a block comment: (can't see it in Reading mode either)
%%
It can span
multiple lines
%%

---

## Developer notes

We strive for maximum capability without breaking any existing formats, therefore we use a slightly unorthodox combination of flavors of Markdown. It is broadly CommonMark, with the addition of some functionality from GitHub Flavored Markdown (GFM), some LaTeX support, and our chosen embed syntax, which you can read more about at [[Accepted file formats]].

We intentionally don't support parsing Markdown syntax and blank lines within HTML blocks. This is the result of an optimization to handle very large files and to support syncing between editing and reading mode.
