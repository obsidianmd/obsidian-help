---
description: Canvas is a core plugin for visual note-taking. Arrange and connect notes, images, and other files in a 2D space.
mobile: true
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

To show only part of a note in a card, right-click the card and select **Narrow to heading...** or **Narrow to block...**. Then choose the heading or block.

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

To open the web page in your browser, press `Ctrl` (or `Cmd` on macOS) and select the card label. Or, right-click the card and select **Open external link**.

Right-click a web page card for more options.

- **Copy URL** copies the address of the web page.
- **Change URL...** changes the address the card shows.
- **Reload page** loads the web page again.

### Add cards from bases

To show a [[Introduction to Bases|base]] in your canvas, drag the base file from the File explorer into the canvas. The card shows the base.

A base card shows the default view of the base. To show a different view:

1. Right-click the card and then select **Pin view...**.
2. Select the view you want.

To go back to the default view, select **Pin view...** again, and then select **Show default view**.

### Add cards from folders

Drag a folder from the [[File explorer]] to add all files in that folder to the canvas.

### Edit a card

Double-click on a text or note card to start editing it. Select anywhere outside the card to stop editing it. You can also press `Escape` to stop editing a card.

You can also edit a card by right-clicking it and selecting **Edit**. Or, select the card and then select **Edit** ![[lucide-square-pen.svg#icon]] in the selection controls.

### Delete a card

Remove selected cards by right-clicking any of them, and then selecting **Remove**. Or, press `Backspace` (or `Delete` on macOS).

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

### Align and arrange cards

To line up several cards, select two or more cards. In the selection controls, select **Align**, and then choose an option.

- **Align left**, **Align center**, and **Align right** line the cards up on a vertical line.
- **Align top**, **Align middle**, and **Align bottom** line the cards up on a horizontal line.
- **Arrange in a row**, **Arrange in a column**, and **Arrange in a grid** move the cards into that layout.
- **Distribute horizontal spacing** and **Distribute vertical spacing** space the cards evenly.
- **Justify horizontally** and **Justify vertically** resize every card to match the full width or height of the selection.

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

If two connected cards are far apart, you can jump to the card at the other end of the connection. Right-click the line close to one end, and then select **Follow connection**. The canvas moves to the card at the opposite end.

### Add a label to a connection

You can add a label to a line to describe the relationship between two cards.

To label a connection:

1. Double-click the line.
2. Enter the label and then press `Escape` or select anywhere on the canvas.

You can also label a connection by selecting it and then selecting **Edit label** from the selection controls.

To edit a connection label, double-click on the line, or right-click the line and then select **Edit label**.

To remove a label, select the connection and then select **Remove label** in the selection controls.

### Change the direction of a connection

By default, a connection has an arrow at the end that points to the second card. To change this:

1. Select the connection.
2. In the selection controls, select **Line direction**.
3. Choose **Nondirectional**, **Unidirectional**, or **Bidirectional**.

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

### Add a background to a group

You can show an image behind the cards in a group.

1. Select the group.
2. In the selection controls, select **Set background**.
3. Choose an image from your vault.

To change the background, select the group and then select **Edit background**.

- **Replace background** chooses a different image.
- **Remove background** removes the image.
- **Cover** makes the image fill the group.
- **Keep aspect ratio** keeps the proportions of the image.
- **Repeat** tiles the image across the group.

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


### Jump to a group

To move straight to a group in a large canvas, open the command palette and select **Canvas: Jump to group**. A list of the groups in your canvas appears. Select the group you want to go to, and the canvas moves to center on it.

## Canvas settings

Select **Canvas settings** ![[lucide-settings.svg#icon]] above the canvas controls to change how your canvas behaves.

- **Snap to grid** snaps cards to the background grid when you move and resize them.
- **Snap to objects** snaps cards to nearby cards when you move and resize them.
- **Read-only** prevents changes to the canvas.

## Export a canvas as an image

You can export a canvas as a PNG image on desktop. Exporting an image is not available in the Obsidian app on mobile.

1. Open the canvas you want to export.
2. Open the command palette and select **Canvas: Export as image**.
3. Choose your settings.
    - **Viewport** sets what to export. Select **Full canvas** for the whole canvas, or **Viewport only** for the part you can see now.
    - **Zoom** sets the image quality. A higher zoom makes a larger, sharper image. The dialog shows the estimated image size.
    - **Show logo** adds an Obsidian logo to the bottom left. This is on by default.
    - **Privacy mode** hides all the text on your canvas. This is off by default.
4. Select **Save**.
5. Choose where to save the file. The file name defaults to the name of your canvas, with the `.png` extension.

You can't export an empty canvas.

## Undo and redo

To undo your last change, select **Undo** in the canvas controls on the right side of the canvas. Or, press `Ctrl+Z` (Windows and Linux) or `Command+Z` (macOS).

To redo a change, select **Redo**. Or, press `Ctrl+Y` or `Ctrl+Shift+Z` (Windows and Linux), or `Command+Y` or `Command+Shift+Z` (macOS).

## Canvas help

On desktop, select **Canvas help** ![[lucide-help-circle.svg#icon]] below the canvas controls to see a list of the shortcuts for panning, zooming, selecting, and moving cards.

## Embed a canvas

You can embed a canvas in a note using the standard embed syntax. For more information, refer to [[Embed files#Embed a canvas in a note|Embed a canvas in a note]].

## Use Canvas on mobile

When you open a canvas on a phone or tablet, Obsidian shows three hints.

- **Drag to pan**
- **Pinch to zoom**
- **Touch and hold to add / move / select**

### Open the canvas menu

Touch and hold an empty area of the canvas. The menu has these items.

- **Add card** adds a text card.
- **Add note from vault** adds a note from your vault.
- **Add media from vault** adds media from your vault.
- **Add web page** embeds a web page.
- **Create group** creates an empty group.
- **Snap to grid**, **Snap to objects**, and **Read-only** are the same options as in **Canvas settings**.

### Add cards

You can add cards from the canvas menu. You can also select an icon at the bottom of the canvas.

- The blank file icon adds a text card.
- The document icon adds a note from your vault.
- The image icon adds media from your vault.

### Work with a selected card

Tap a card to select it. A toolbar appears above the card.

- **Remove** ![[lucide-trash-2.svg#icon]] deletes the card.
- **Set color** ![[lucide-palette.svg#icon]] changes the color of the card.
- **Zoom to selection** zooms the canvas to the card.
- **Edit** ![[lucide-square-pen.svg#icon]] edits the card.

### Move a card

1. Tap the card to select it.
2. Touch and hold the selected card, and then drag it to a new position.

### Resize a card

1. Tap the card to select it.
2. Drag the sides of the card to make it bigger or smaller.

### Open the card menu

Touch and hold a card. The menu has these items.

- **Zoom to selection** zooms the canvas to the card.
- **Edit** edits the card.
- **Convert to file...** converts a text card to a note.
- **Duplicate** makes a copy of the card.
- **Remove** deletes the card.

### Edit a card

To edit a text card or a note card, use either method.

- Tap the card to select it, and then double-tap it. The keyboard opens.
- Tap the card to select it, and then select **Edit** ![[lucide-square-pen.svg#icon]] in the toolbar above the card.

### Label a connection

1. Tap the line to select it.
2. In the toolbar, select **Edit label** ![[lucide-square-pen.svg#icon]]. The keyboard opens.
3. Enter the label.

To remove a label, tap the line and then select **Remove label** in the toolbar.

### Change the direction of a connection

1. Tap the line to select it.
2. In the toolbar, select **Line direction**.
3. Choose **Nondirectional**, **Unidirectional**, or **Bidirectional**.

### Open the line menu

Touch and hold a line that connects two cards. The menu has these items.

- **Edit label** adds or changes the label of the line.
- **Follow connection** moves the canvas to the card at the opposite end of the line.
- **Remove** deletes the connection.

### Connect cards

1. Tap a card to select it.
2. Drag one of the circles on its edges to another card.

If you drag the line and let go in an empty area, a menu opens with **Add card** and **Add note from vault**. Select one to add a card at the end of the line.

### Disconnect cards

To remove a connection, use either method.

- Tap the line, and then select **Remove** ![[lucide-trash-2.svg#icon]].
- Drag the arrow end of the line back to the card it started from. The line disappears.

### Group cards

To create a group:

1. Touch and hold an empty area of the canvas.
2. Select **Create group**.
3. Drag the edges of the group to change its size.

To add cards to a group, drag them into the group's area. When you move the group, the cards inside it move too.

To rename a group, double-tap its name. The keyboard opens. Enter the new name.

### Canvas controls

Controls on the right side of the canvas change the view and your settings.

- **Zoom in** and **Zoom out** change the zoom level.
- **Reset zoom** returns the canvas to the default zoom level.
- **Zoom to fit** shows every card in the canvas.
- **Undo** and **Redo** reverse or repeat your last change.
- **Canvas settings** has the options **Snap to grid**, **Snap to objects**, and **Read-only**.

## Advanced tips

We have made some quick videos to demonstrate some advanced use cases of Canvas.

You can [view all 72 tips here](https://obsidian.md/canvas#protips). The tip videos are only visible on desktop.
