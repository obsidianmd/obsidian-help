---
permalink: bases/views/kanban
---
Kanban is a type of [[Views|view]] you can use in [[Introduction to Bases|Bases]].

Select ![[lucide-kanban-square.svg#icon]] **Kanban** from the view menu to display files as cards organized into columns. Each column represents a value of the property used to group results.


> [!note] Requires Obsidian 1.14+
> Kanban views are available in Obsidian 1.14 and later.


## Group cards into columns

A Kanban view requires a property to group results by.

1. Select **Group** in the toolbar. On phones, select **Display → Group**.
2. Under **Group by**, choose a property.

Files without a value for the selected property appear in the **None** column.

> [!info] 
> If you group by a formula or a file property other than `file.folder`, you can't move cards or columns, or create notes from the columns. You can still [[Views#Reorder, hide, and add groups|manage group order and visibility]] in the **Group** menu.

## Work with cards and columns

- Drag a card to another column to update the grouped property in that note. Only Markdown notes can be moved between columns, except when grouping by `file.folder`, where moving a card moves the file to that folder.
- Select the plus icon in a column heading or ![[lucide-plus.svg#icon]] **New** at the bottom of a column to create a note with that column's value.
- Drag a column heading to change the column order. To restore automatic order, open **Group** and choose an automatic sort order instead of **Manual**.
- Use **Group** to [[Views#Reorder, hide, and add groups|reorder, hide, or add columns]].
- Use the ![[lucide-list.svg#icon]] **Properties** menu to choose the properties shown on each card. The first property is displayed as the card title.

## Settings

Kanban view settings can be configured in [[Views#View settings|View settings]].

- Hide empty columns
- Column width
- Image property
- Image fit
- Image aspect ratio

### Hide empty columns

Hides columns that don't contain any cards.

### Column width

Defines the width of each column and its cards.

### Image property

Kanban cards support an optional cover image that's displayed at the top of the card. The supported property values are the same as for the [[Cards view#Image property|image property in Cards view]].

### Image fit

If you have an image property configured, this option determines how the image is displayed in the card.

- **Cover:** The image fills the card's content box. If it does not fit, the image is cropped.
- **Contain:** The image is scaled until it fits within the card's content box. The image is not cropped.

### Image aspect ratio

The height of the cover image is determined by its aspect ratio. Adjust this option to make the image shorter or taller.
