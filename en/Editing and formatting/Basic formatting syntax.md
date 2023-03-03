## Headings

To create a heading, add up to six `#` symbols before you heading text. The number of `#` symbols determines the size of the heading.

```md
# This is a heading 1
## This is a heading 2
### This is a heading 3
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>This is a heading 1</h1>
<h2>This is a heading 2</h2>
<h3>This is a heading 3</h3>
<h4>This is a heading 4</h4>
<h5>This is a heading 5</h5>
<h6>This is a heading 6</h6>

## Styling text

| Style | Syntax | Example | Output |
|-|-|-|-|
| Bold | `** **` or `__ __` | `**Bold text**` | **Bold text** |
| Italic | `* *` or `_ _`  | `*Italic text*` | *Italic text* |
| Strikethrough | `~~ ~~` |  `~~Striked out text~~` | ~~Striked out text~~ |
| Highlight | `== ==` |  `==Highlighted text==` | ==Highlighted text== |
| Bold and nested italic | `** **` and `_ _`  | `**Bold text and _nested italic_ text**` | **Bold text and _nested italic_ text** |
| Bold and italic | `*** ***` or `___ ___` |  `***Bold and italic text***` | ***Bold and italic text*** |


## Quotes

You can quote text by adding a `>` symbols before the text.

```md
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961
```

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961

> [!tip]
> You can turn your quote into a [[Callouts|callout]] by adding `[!info]` as the first line in a quote.

## Code

You can format code both inline within a sentence, or in its own block.

### Inline code

You can format code within a sentence using single backticks.

```md
Text inside `backticks` on a line will be formatted like code.
```

Text inside `backticks` on a line will be formatted like code.

### Code blocks

To format a block of code, surround the code with triple backticks.

~~~
```
cd ~/Desktop
```
~~~

```md
cd ~/Desktop
```

You can add syntax highlighting to a code block, by adding a language code after the first set of backticks.

~~~md
```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
~~~

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

Obsidian uses Prism for syntax highlighting. For more information, refer to [Supported languages](https://prismjs.com/#supported-languages).

> [!note]
> [[Live preview update|Live Preview mode]] doesn't support PrismJS and may render syntax highlighting differently.

## External links

If you want to link to an external URL, you can create an inline link by surrounding the link text in brackets (`[ ]`), and then the URL in parentheses (`( )`).

```md
[Obsidian Help](https://help.obsidian.md)
```

[Obsidian Help](https://help.obsidian.md)

> [!tip]
> If you want to link to a file inside your vault, consider using an [[Internal links|internal link]] instead.

You can also create external links to files in other vaults, by linking to an [[Using Obsidian URI|Obsidian URI]].

```md
[Note](obsidian://open?vault=MainVault&file=Note.md)
```

### Escape blank spaces in links

If your URL contains blank spaces, you need to escape them by replacing them with `%20`.

```md
[My Note](obsidian://open?vault=MainVault&file=My%20Note.md)
```

You can also escape the URL by wrapping it with angled brackets (`< >`).

```md
[My Note](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## External images

You can add images with external URLs, by adding a `!` symbol before an [[#External links|external link]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

You can change the image dimensions, by adding `|640x480` to the link destination, where 640 is the width and 480 is the height.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

If you only specify the width, the image scales according to its original aspect ratio. For example, `![[Engelbart.jpg|100]]`.

> [!tip]
> If you want to add an image from inside your vault, you can also [[Embedding files#Embed an image in a note|embed an image in a note]].

## Lists

You can create an unordered list by adding a `-`, `*`, or `+` before the text.

```md
- Siberian husky
- German shephard
- Pomeranian
```

- Siberian husky
- German shephard
- Pomeranian

To create an ordered list, start each line with a number followed by a `.` symbol.

```md
1. Siberian husky
2. German shephard
3. Pomeranian
```

1. Siberian husky
2. German shephard
3. Pomeranian

### Nested lists

### Task lists

To create a task list, start each list item with a hyphen and space followed by `[ ]`.

```md
- [x] This is a completed task.
- [ ] This is an incomplete task.
```

- [x] This is a completed task.
- [ ] This is an incomplete task.

> [!tip] 
> You can use any character inside the brackets to mark it as complete.
>
> ```md
> - [x] Milk
> - [?] Eggs
> - [-] Eggs
> ```
>
> - [x] Milk
> - [?] Eggs
> - [-] Eggs
 

## Footnotes

## Ignore Markdown formatting

