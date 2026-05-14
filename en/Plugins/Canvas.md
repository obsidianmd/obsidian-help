---
description: Canvas is a core plugin for visual note-taking. Arrange and connect notes, images, and other files in a 2D space.
permalink: plugins/canvas
---
Canvas is a [[Core plugins|core plugin]] for visual note-taking. It gives you infinite space to lay out notes and connect them to other notes, attachments, and web pages.

Arranging your notes in a 2D space helps you see and understand the connections between them. Connect notes with lines and group related ones together.

Obsidian saves canvases as `.canvas` files using the open [JSON Canvas](https://jsoncanvas.org/) format.

## Create a new canvas

To start using Canvas, you first need to create a file to hold your canvas. You can create a new canvas using the following methods.

**Command palette:**

1. Open the [[Command palette]].
2. Select **Canvas: Create new canvas** to create a canvas in the same folder as the active file.

**File explorer:**

- In the [[File explorer]], right-click the folder you want to create the canvas in.
- Select **New canvas**.

**Ribbon:**

- In the vertical ribbon menu, select **Create new canvas** ![[lucide-layout-dashboard.svg#icon]] to create a canvas in the same folder as the active file.

> [!note] The .canvas file extension
> Obsidian stores your canvas data as `.canvas` files using an open file format called [JSON Canvas](https://jsoncanvas.org/).

## Add cards

You can drag files into your canvas from Obsidian or from other applications. For example, Markdown files, images, audio, PDFs, or even unrecognized file types.

### Add text cards

You can add text-only cards that don't reference a file. You can use Markdown, links, and code blocks the same way as in a note.

To add a new text card to your canvas:

- Select or drag the blank file icon at the bottom of the canvas.

You can also add text cards by double-clicking on the canvas.

To convert a text card to a file:

1. Right-click the text card and then select **Convert to file...**.
2. Enter the note name and then select **Save**.

> [!note] Text-only cards and backlinks
> Text-only cards don't appear in [[Backlinks]]. To make them appear, you need to convert them to a file.

### Add cards from notes

To add a note from your vault to your canvas:

1. Select or drag the document icon at the bottom of the canvas.
2. Select the note you want to add.

You can also add notes from the canvas context menu:

1. Right-click the canvas and then select **Add note from vault**.
2. Select the note you want to add.

You can also drag notes from the [[File explorer]] into the canvas.

### Add cards from media

To add media from your vault to your canvas:

1. Select or drag the image file icon at the bottom of the canvas.
2. Select the media file you want to add.

You can also add media from the canvas context menu:

1. Right-click the canvas and then select **Add media from vault**.
2. Select the media file you want to add.

You can also drag media files from the [[File explorer]] into the canvas.

### Add cards from web pages

To embed a web page in your canvas:

1. Right-click the canvas and then select **Add web page**.
2. Enter the URL to the web page and then select **Save**.

You can also select a URL in your browser and then drag it into the canvas to embed it in a card.

To open the web page in your browser, press `Ctrl` (or `Cmd` on macOS) and select the card label. Or, right-click the card and select **Open in browser**.

### Add cards from folders

Drag a folder from the [[File explorer]] to add all files in that folder to the canvas.

### Edit a card

Double-click on a text or note card to start editing it. Select anywhere outside the card to stop editing it. You can also press `Escape` to stop editing a card.

You can also edit a card by right-clicking it and selecting **Edit**.

### Delete a card

Remove selected cards by right-clicking any of them, and then selecting **Delete**. Or, press `Backspace` (or `Delete` on macOS).

You can also select **Remove** ![[lucide-trash-2.svg#icon]] in the selection controls above your selection.

### Swap cards

You can swap a note or media card for another card of the same type.

To swap a note card:

1. Right-click the card you want to replace.
2. Select **Swap file**.
3. Select the note you want to replace with.

## Select cards

Select individual cards, or drag a selection around multiple cards.

You can also add and remove cards from an existing selection by pressing `Shift` and selecting them.

Press `Ctrl+a` (or `Cmd+a` on macOS) to select all cards in the canvas.

To scroll the content of a card, you first need to select it.

### Arrange cards

Drag a selected card to move it.

Press `Alt` (or `Option` on macOS) and drag to duplicate the selection.

You can press `Shift` while dragging to only move in one direction.

Press `Space` while moving a selection to disable snapping.

Selecting a card moves it to the front.

### Resize a card

Drag any of a card's edges to resize it.

You can press `Space` while resizing to disable snapping.

To maintain the aspect ratio while resizing, press `Shift` while resizing.

## Connect cards

Draw lines between cards to show relationships. Add colors and labels to describe how they relate.

### Connect two cards

To connect two cards with a directed line:

1. Hover the cursor over one of the edges of a card until you see a filled circle.
2. Drag the circle to the edge of a different card to connect them.

> [!tip]- Create a card from a new connection
> If you drag the line without connecting it to another card, you can create a new card at the other end.

### Disconnect two cards

To remove the connection between two cards:

1. Hover the cursor over a connection line until two small circles appear on the line.
2. Drag one of the circles from the card without connecting it to another.

You can also disconnect two cards by right-clicking the line between them, and then selecting **Remove**. Or, select the line and then press `Backspace` (or `Delete` on macOS).

### Connect a card to a different card

To move one of the ends of a connection line:

1. Hover the cursor over a connection line until two small circles appear on the line.
2. Drag the circle to another card to reconnect it.

### Navigate a connection

If two connected cards are far apart, you can navigate to the source or the target of the connection by right-clicking the line and then selecting **Go to target** or **Go to source**.

### Add a label to a connection

You can add a label to a line to describe the relationship between two cards.

To label a connection:

1. Double-click the line.
2. Enter the label and then press `Escape` or select anywhere on the canvas.

You can also label a connection by selecting it and then selecting **Edit label** from the selection controls.

To edit a connection label, double-click on the line, or right-click the line and then select **Edit label**.

### Change the color of a card or connection

1. Select the cards or connections you want to color.
2. In the selection controls, select **Set color** ![[lucide-palette.svg#icon]].
3. Select a color.

## Group cards

### Group selected cards

To create an empty group:

- Right-click the canvas and then select **Create group**.

To group related cards:

1. Select the cards.
2. Right-click any of the selected cards and then select **Create group**.

**Rename group:** Double-click the name of the group to edit it, and then press `Enter` to save.

## Navigate the canvas

Use panning and zooming to move across the canvas.

### Pan the canvas

To move the canvas vertically and horizontally, also known as _panning_, you can use any of the following approaches:

- Press `Space` and drag the canvas.
- Drag the canvas using the middle mouse button.
- Scroll the mouse to pan vertically, and press `Shift` while scrolling to pan horizontally.

### Zoom the canvas

To zoom the canvas, press `Space` or `Ctrl` (or `Cmd` on macOS) and scroll using the mouse wheel. Or, select **Zoom in** ![[lucide-plus.svg#icon]] and **Zoom out** ![[lucide-minus.svg#icon]] from the zoom controls in the upper-right corner.

#### Zoom to fit

To zoom the canvas so that every item is visible, select **Zoom to fit** ![[lucide-maximize.svg#icon]]. Or, use the keyboard shortcut `Shift+1`.

#### Zoom to selection

To zoom the canvas so that all selected items are visible, right-click a selected card and then select **Zoom to selection**. Or, press `Shift+2`.

#### Reset zoom

To change the zoom level back to the default, select **Reset zoom** in the zoom controls in the upper-right corner.

## Embed a canvas

You can embed a canvas in a note using the standard embed syntax. For more information, refer to [[Embed files#Embed a canvas in a note|Embed a canvas in a note]].

## Advanced tips

We have made some quick videos to demonstrate some advanced use cases of Canvas.

You can [view all 72 tips here](https://obsidian.md/canvas#protips). The tip videos are only visible on desktop.
