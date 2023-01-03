As of v0.14.0, Obsidian supports callout blocks, sometimes called "admonitions". Callout blocks are written as a blockquote, inspired by the "alert" syntax from Microsoft Docs.

Callouts are also supported natively on [[Introduction to Obsidian Publish|Obsidian Publish]].

> [!NOTE]
> For compatibility reasons, if you're also using the Admonitions plugin, you should update it to at least v8.0.0 to avoid problems with the new callout system.

Use the following syntax to denote a callout block: `> [!INFO]`.

```markdown
> [!INFO]
> Here's a callout block.
> It supports **Markdown**, [[Internal link|Wikilinks]], and [[Embed files|embeds]]!
> ![[og-image.png]]
```

It will show up like this:

> [!INFO]
> Here's a callout block.
> It supports **Markdown**, [[Internal links|Wikilinks]] and [[Embed files|embeds]]!
> ![[og-image.png]]

### Types

By default, Obsidian supports several callout types and aliases. Each type comes with a different background color and icon.

To use these default styles, replace `INFO` in the examples with any of these types. Any unrecognized type will default to the "note" type, unless they are [[#Customizations|customized]]. The type identifier is case insensitive.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `check`, `done`


---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`

### Title and body

You can define the title of the callout block, and you can also have a callout without body content.

```markdown
> [!TIP] Callouts can have custom titles, which also supports ==markdown==!
```

> [!TIP] Callouts can have custom titles, which also supports ==markdown==!

### Folding

Additionally, you can create a folding callout by adding `+` (default expanded) or `-` (default collapsed) after the block.

```markdown
> [!FAQ]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden until it is expanded.
```

Will show up as:

> [!FAQ]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden until it is expanded.


### Nesting

You can also nest callouts multiple layers deep.

```markdown
> [!question] Can callouts be nested?
> > [!todo] Yes!, they can.
> > > [!example]  You can even use multiple layers of nesting.
```

Will result in:

> [!question] Can callouts be nested?
> > [!todo] Yes!, they can.
> > > [!example]  You can even use multiple layers of nesting.


### Customizations

Snippets and plugins can define custom callouts, too, or overwrite the default options. Callout types and icons are defined in CSS, where the color is an `r, g, b` tuple and the icon is the icon ID from any internally supported icon (like `lucide-info`). Alternatively, you can specify an SVG icon as a string.

```CSS
.callout[data-callout="my-callout-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: icon-id;
    --callout-icon: '<svg>...custom svg...</svg>';
}
```

### Developer Notes

We choose the syntax because:

- it falls back to blockquotes in unsupported markdown renderers
- it parses all Markdown, including links, embeds, etc.
- it recognizes [[Internal links]], and shows up in [[Backlinks]], [[Outgoing links]], and [[Graph view]]
- the spellchecker can spellcheck it.
