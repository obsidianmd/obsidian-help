---
description: Learn how to modify aspects of the Obsidian application's appearance without needing to build a theme.
mobile: true
---


Learn how to modify aspects of the Obsidian application's appearance without needing to [build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme). 

> [!tip] If you're looking for guidance on handling CSS for [[Introduction to Obsidian Publish|Obsidian Publish]], be sure to review [[Customize your site]].

CSS is a language to describe how to present HTML. By adding CSS snippets, you can redefine parts of the Obsidian user interface, such as the size and color of headings. Obsidian includes [CSS variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) that you can use to easily customize parts of the interface.

Obsidian looks for CSS snippets inside the vault's [[Configuration folder|configuration folder]].

## Adding a snippet

To add a CSS snippet on **Desktop** ![[lucide-monitor-check.svg#icon]], follow these steps:

1. Open **Settings**.
2. Under **Appearance → CSS snippets**, select **Open snippets folder** ( ![[lucide-folder-plus.svg#icon]] ).
3. In the snippets folder, create a CSS file that contains your snippet.
4. In Obsidian, under **Appearance → CSS snippets**, select **Reload snippets** ( ![[lucide-refresh-cw.svg#icon]] ) to see the snippet in the list.
5. Enable snippet by clicking the toggle.

To add a CSS snippet on **Mobile/Tablet** ![[obsidian-smartphone.svg#icon]], you can follow these steps:

1. Open a file manager and locate your vault. Its location can be determined in the *Manage vaults...* menu by tapping your vault and seeing the path.
2. Open the [[Configuration folder]] and then open or create a folder called `snippets`.
3. Add your CSS snippet to this folder.
4. In Obsidian, under **Appearance → CSS snippets**, select **Reload snippets** ( ![[lucide-refresh-cw.svg#icon]] ) to see the snippet in the list.
5. Enable snippet by tapping the toggle.

Alternately, you can
- [[Sync your notes across devices|Sync]] any changes in with your syncing service.
- Use a community plugin to create a snippet from within Obsidian. 


Once enabled, Obsidian detects changes to CSS snippets automatically and applies them when you save the file. You don't need to restart Obsidian for changes to take effect.

## Writing CSS for Obsidian

Obsidian provides several methods that make writing CSS easier and more powerful.

It has a host of [CSS variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) to easily modify parts of Obsidian and a built-in [[properties#Property types|property type]] to change the appearance of one or several notes.

> [!tip] Example: Variables
> Create a file called `snippet.css` with the following content to modify the six [[Basic formatting syntax#Headings|heading levels]] to a rainbow.
>
>
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!tip] Example: CSSclasses
> With a [[Properties|property]] name of `CSSclasses` and a value of whatever you like, you can make one or several notes different from one another.
> 
> CSS:
> ```css
> .no-inline .inline-title {
>    display: none;
> }
> ```
> 
> YAML/Properties:
> ```yaml
> cssclasses: no-inline
> ```
> This hides the inline title from any note with this property and value.

To ensure that the CSS file is valid and formatted correctly, we advise creating and editing it with a program like [Visual Studio Code](https://visualstudio.microsoft.com/) or [Sublime Text](https://www.sublimetext.com/), as invalid CSS will not work.

## Learn more

- If you're new to CSS, refer to [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) by Mozilla.
- If you'd like more information on styling Obsidian, refer to:
	- [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
	- [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)