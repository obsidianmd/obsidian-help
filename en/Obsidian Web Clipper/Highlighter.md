---
permalink: web-clipper/highlight
aliases:
  - highlights
  - Highlighter
---
[[Introduction to Obsidian Web Clipper|Web Clipper]] lets you highlight text on web pages, and select the elements you want to save to Obsidian. Highlights are saved so you can see them when you return to a page.

Highlights can be saved to Obsidian using the extension. You can define highlighter options in the extension settings.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Use the highlighter

Highlighter can be used on live web pages pages or [[Reader]]. In the Reader view, creating a text selection gives you the option to highlight it.

You can also automatically add selections to your highlights, by activating the highlighter:

- ![[lucide-highlighter.svg#icon]] **Highlighter icon** in the extension panel or Reader toolbar.
- **Keyboard shortcut** customizable in the extension settings.
- **Context menu** by right-clicking the web page you are visiting.

Once Highlighter turned is on, any selected text, images, and elements will be added to your highlights. All the methods above also allow you to exit the highlighter.

## Add highlights to notes

There are three options for how highlights can be inserted into your clipped notes:

- **Highlight the page content** — adds highlights directly to the text with the [[Obsidian Flavored Markdown|syntax]] `==highlight==`.
- **Replace the page content** — returns a list of highlights, without any of the page content.
- **Do nothing** — returns the original content without highlights.
 
These options change the `{{content}}` [[Variables|variable]] in your template. You can also add highlights directly to your template using the `{{highlights}}` variable, for example:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## View and search highlights

All the highlights you create can be viewed in your Highlights page. You can open this page by going to **Settings** → **Highlighter**.

## Export highlights

Highlights can be exported to a `.json` file, either in the Settings page or in the Highlights page.