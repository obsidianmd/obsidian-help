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

> [!note]
> By default, Obsidian opens new tabs in editing mode. You can change this under **[[Settings]] → Editor → Default view for new tabs**.

## Reading view

*Reading view* shows your note without Markdown syntax, offering a clean, readable format for focused review.

To switch to *Reading view*:

- Click the view switcher ( ![[lucide-book-icon.svg#icon]] ) in the upper-right corner of the editor.
- Or click the interactive status icon ( ![[lucide-edit-3.svg#icon]] or ![[lucide-code-xml.svg#icon]] ) in the status bar and select **Reading view**.
- Or press `Ctrl+E` (`Cmd+E` on macOS).

> [!note]
> Enable **[[Settings]] → Appearance → Show tab title bar** to see the view switcher icon.  
> 
> If that is disabled, turn on **[[Settings]] → Editor → Show editing mode in status bar** to toggle views from the status bar.

> [!tip] View side-by-side  
> To open a note in both *Editing* and *Reading view* at the same time, hold `Ctrl` (or `Cmd` on macOS) and click the view switcher.

## Editing view

*Editing view* lets you make changes to your note.

While in *Editing view*, the *Editing mode* defines, how Markdown is displayed. You can choose one of two *Editing modes*: *Live Preview* or *Source mode*.

### Live Preview

*Live Preview* shows formatted text inline while hiding most Markdown syntax. When your cursor enters formatted content, the underlying syntax becomes visible for editing.

To switch to *Live Preview*:

- Click the view switcher ( ![[lucide-edit-3.svg#icon]] ) in the upper-right corner of the editor.
- Or click the interactive status icon ( ![[lucide-book-icon.svg#icon]] or ![[lucide-code-xml.svg#icon]] ) in the status bar and select **Live Preview**.
- Or press `Ctrl+E` (`Cmd+E` on macOS).
- Or use the [[Command palette|command]] **Toggle Reading view**.

> [!note]
> By default, editing view is set to *Live Preview*. You can change this under **[[Settings]] → Editor → Default editing mode**.

> [!tip] In many cases, Live Preview can eliminate the need to switch to [[#Reading view]].

### Source mode

*Source mode* displays all Markdown syntax exactly as written. Use it if you prefer plain text or need precise formatting control.

To switch to *Source mode*:
- Click the interactive status icon ( ![[lucide-book-icon.svg#icon]] or ![[lucide-edit-3.svg#icon]] ) in the status bar and select **Source mode**.

> [!note]
> By default, editing view is set to *Live Preview*. Change this to *Source mode* under **[[Settings]] → Editor → Default editing mode**.
> 
> To switch to *Source mode*, now additionally you can:
> 
> - Click the view switcher ( ![[lucide-edit-3.svg#icon]] ) in the upper right corner of your note.
> - Or press `Ctrl+E` (`Cmd+E` on macOS).
> - Or use the [[Command palette|command]] **Toggle Reading view**.

> [!tip] Toggle *Editing mode*
> To toggle between *Live Preview* and *Source mode* quickly, you can set a [[Hotkeys|Hotkey]] for the [[Command palette|command]] **Toggle Live Preview/Source mode**.

