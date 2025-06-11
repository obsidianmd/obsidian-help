---
aliases:
  - How to/Read and edit modes
  - Editing and formatting/Editing and previewing Markdown
  - Editing and formatting/Edit and previewing Markdown
  - Reading view
  - Live preview
  - Source mode
  - Editing view
  - Editing mode
permalink: edit-and-read
---

Obsidian lets you control how you read and edit notes written in Markdown using _views_ and _modes_.

- **Views** toggle between reading and editing your notes.
- **Modes** control how Markdown appears while you're editing.

## Reading view

*Reading view* shows your note without Markdown syntax, offering a clean, readable format for focused review.

To switch to *Reading view*:
- Select the view switcher (![[lucide-book-icon.svg#icon]]) in the upper-right corner of the editor
- Press `Ctrl+E` (`Cmd+E` on macOS).

> [!note]
> Enable **Settings → Appearance → Show tab title bar** to see the view switcher icon.  
> 
> If that is disabled, turn on **Settings → Editor → Show editing mode in status bar** to toggle views from the status bar.

## Editing view

*Editing view* lets you make changes to your note. It includes two editing modes: *Live Preview* and *Source mode*.

To switch to *Editing view*:
- Select the view switcher (![[lucide-edit-3.svg#icon]])
- Press `Ctrl+E` (`Cmd+E` on macOS) again
- Use the [[Command palette]] command **Toggle Reading view**

> [!note]
> You can set the default view for new tabs under **Settings → Editor → Default view for new tabs**.

> [!tip] View side-by-side  
> To open a note in both Editing and Reading view at the same time, hold `Ctrl` (or `Cmd` on macOS) and click the view switcher.

## Editing modes

While in *Editing view*, you can choose how Markdown is displayed using one of two *Editing modes*.

### Live Preview

*Live Preview* shows formatted text inline while hiding most Markdown syntax. When your cursor enters formatted content, the underlying syntax becomes visible for editing.

Set this as the default under **Settings → Editor → Default editing mode**.

> [!tip] In many cases, Live Preview can eliminate the need to switch to [[#Reading view]].

### Source mode

*Source mode* displays all Markdown syntax exactly as written. Use it if you prefer plain text or need precise formatting control.
