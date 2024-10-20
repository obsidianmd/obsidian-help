---
description: Learn how to modify aspects of the Obsidian application's appearance without needing to build a theme.
mobile: true
---


Learn how to modify aspects of the Obsidian application's appearance without needing to [build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme). 

> [!tip] If you're looking for guidance on handling CSS for [[Introduction to Obsidian Publish|Obsidian Publish]], be sure to review [[Customize your site]].

CSS is a language to describe how to present a HTML document. By adding CSS snippets, you can redefine parts of the Obsidian user interface, such as the size and color of headings. Obsidian includes [CSS variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) that you can use to easily customize parts of the interface.

Obsidian looks for CSS snippets inside the vault [[Configuration folder]].

To add a CSS snippet on **Desktop** ![[lucide-monitor-check.svg#icon]], follow these steps:

1. Open **Settings**.
2. Under **Appearance → CSS snippets**, select **Open snippets folder** ( ![[lucide-folder-plus.svg#icon]] ).
3. In the snippets folder, create a CSS file that contains your snippet.
4. In Obsidian, under **Appearance → CSS snippets**, select **Reload snippets** ( ![[lucide-refresh-cw.svg#icon]] ) to see the snippet in the list.

To add a CSS snippet on **Mobile/Tablet** ![[obsidian-smartphone.svg#icon]], you will need to do one of the following:
- [[Sync your notes across devices|Sync]] any changes in from your syncing service.
- Use a file manager to access the [[Configuration folder]], and place the `file.css` in the snippet folder. 
- Use a community plugin to directly create a `file.css` from within Obsidian. 

Once done, you can reload the snippets the same way you do on Desktop. 

Once loaded, Obsidian detects changes to CSS snippets automatically and applies them when you save your snippet. You don't need to restart Obsidian for changes to take effect.

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

To ensure that the CSS file is valid and formatted correctly, we advise creating and editing it with a program like [Visual Studio Code](https://visualstudio.microsoft.com/) or [Sublime Text](https://www.sublimetext.com/), as invalid CSS will not work.

## Learn more

- If you're new to CSS, refer to [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) by Mozilla.
- If you want more tips on styling Obsidian, refer to [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling).
