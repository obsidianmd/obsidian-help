---
aliases: 
description: Learn how to change parts of the Obsidian app’s appearance without creating a full theme.
mobile: true
permalink: snippets
publish: true
---
Learn how to modify aspects of the Obsidian application's appearance without needing to [build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme). 

> [!tip] If you're looking for guidance on handling CSS for [[Introduction to Obsidian Publish|Obsidian Publish]], be sure to review [[Customize your site]].

CSS is a language that controls how HTML looks. By adding CSS snippets, you can change parts of the Obsidian user interface, like the size and color of headings. Obsidian has [CSS variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) that help you customise the interface easily.

Obsidian looks for CSS snippets inside the vault's [[Configuration folder|configuration folder]].

## Adding a snippet

To add a CSS snippet on **Desktop** ![[lucide-monitor-check.svg#icon]], follow these steps:

1. Open **Settings**.
2. Under **Appearance → CSS snippets**, select **Open snippets folder** ( ![[lucide-folder-plus.svg#icon]] ).
3. In the snippets folder, create a CSS file that contains your snippet.
4. In Obsidian, under **Appearance → CSS snippets**, select **Reload snippets** ( ![[lucide-refresh-cw.svg#icon]] ) to see the snippet in the list.
5. Enable snippet by clicking the toggle.

To add a CSS snippet on **Mobile/Tablet** ![[obsidian-smartphone.svg#icon]], you can follow these steps:

1. Open a file manager and find your vault. You can check the vault’s location in _Manage vaults…_ by tapping your vault and looking at the path.
2. Open the [[Configuration folder]] and create a folder called `snippets` if it doesn’t exist.
3. Add your CSS snippet to this folder.
4. Open Obsidian's **Settings** (![[lucide-cog.svg#icon]]).
5. Select **Appearance** on the left.
6. Scroll down to the **CSS snippets** section.
7. Tap **Reload snippets** (![[lucide-refresh-cw.svg#icon]]) to refresh the list.
8. Tap the toggle to enable the snippet.

Alternately, you can
- [[Sync your notes across devices|Sync]] any changes in with your syncing service.
- Use a community plugin to create a snippet from within Obsidian. 

Once enabled, Obsidian will automatically detect changes to CSS snippets and apply them when you save the file. 

> [!tip] You don’t need to restart Obsidian for changes to take effect. However, you might need to use the [[Command palette]] command to Reload Obsidian without saving to see changes in the current theme or note.

## Writing CSS for Obsidian

Obsidian offers several methods that make writing CSS easier and more powerful.

It has a host of [CSS variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) to easily modify parts of Obsidian and a built-in [[properties#Property types|property type]] to change the appearance of one or several notes.

> [!example] Variables
> Create a file called `headers.css` with the following content to change the colors of the six [[Basic formatting syntax#Headings|heading levels]] to a rainbow:
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

> [!example] CSSclasses
> With a [[Properties|property]] name `cssclasses` with any value to make one or more notes look different from others.
> 
> **CSS**:
> ```css
> .no-inline .inline-title {
>    display: none;
> }
> ```
> 
> **YAML/Properties**:
> ```yaml
> cssclasses:
>  - homepage
> ```
> 
> This hides the inline title from any note with this property and value.

To ensure that the CSS file is valid and formatted correctly, we advise creating and editing it with a program like [Visual Studio Code](https://visualstudio.microsoft.com/) or [Sublime Text](https://www.sublimetext.com/), as invalid CSS will not work.

## Learn more

- If you're new to CSS, check out [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) by Mozilla.
- For more information about styling Obsidian, see:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
