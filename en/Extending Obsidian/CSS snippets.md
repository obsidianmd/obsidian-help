Learn how to modify aspects of the Obsidian appearance without needing to [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

CSS is a language to describe how to present a HTML document. By adding CSS snippets, you can redefine parts of the Obsidian user interface, such as the size and color of headings. Obsidian includes [CSS variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) that you can use to easily customize parts of the interface.

Obsidian looks for CSS snippets inside the vault configuration folder.

To add a CSS snippet, follow these steps:

1. Open **Settings**.
2. Under **Appearance → CSS snippets**, select **Open snippets folder** (folder icon).
3. In the snippets folder, create a CSS file that contains your snippet.
4. In Obsidian, under **Appearance → CSS snippets**, select **Reload snippets** (refresh icon) to see the snippet in the list.

Obsidian detects changes to CSS snippets automatically and applies them when you save your snippet. You don't need to restart Obsidian for changes to take effect.

> [!tip] Example: Change text color
> For example, create a file called `snippet.css` with the following content to change the text color to red:
>
>
>
> ```css
> body {
>   --text-normal: red;
> }
> ```

## Learn more

- If you're new to CSS, refer to [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) by Mozilla.
- If you want more tips on styling Obsidian, refer to [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling).
