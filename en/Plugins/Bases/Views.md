---
permalink: bases/views
---
Views allow you to organize the information in a [[Introduction to Bases|Base]] in multiple different ways. A base can contain several views, and each view can have a unique configuration to display, sort, and filter files.

For example, you may want to create a base called "Books" that has separate views for "Reading list" and "Recently finished".

## Layout

Currently, bases can be displayed as a **table** or **cards**. In the future more layout types will be added. See [[Bases roadmap]].

Current layout options:

- **Table layout** displays each file as a row in a table. Columns are populated from the [[Properties]] in your notes.
- **Cards layout** displays each file as a card in a grid. The view settings allow you to optionally configure an image property, which can be an image URL or [[Attachments|attachment]] link.

Each layout type provides its own configuration options and actions. To see a view's configuration options:

1. Click the view name in the top left of the bases toolbar.
2. Click the right arrow next to the current view.
3. Choose **Configure view**.

### Table

Table does not have any specific view configuration.

### Cards

#### Image property

Cards support an optional cover image, which is [[Properties|property]] that's displayed as an image at the top of the card. The property can be any of the following:

- A link to a local attachment `"[[link/to/attachment.jpg]]"`
- An external link (URL)
- A hex color code (`#000000`)

#### Image fit

If you have an image property configured, this option will determine how the image should be displayed in the card.

- **Cover:** The image fills the card's content box. If it does not fit, the image will be cropped.
- **Contain:** The image is scaled until it fits within the card's content box. The image will not be cropped.

#### Image aspect ratio

The size of the cover image is determined based on its aspect ratio. The default aspect ratio is 1:1 meaning all your images will be square. Adjust this option to make the image wider or taller.

## Filters

A base without filters shows all the files in your vault. Filters allow you to narrow down results to only show files that meet specific criteria. For example, you can use filters to only display files with a specific [[Tags|tag]] or within a specific folder. Many filter types are available.

Click the **Filters** button at the top of a base to add filters.

Filters can be applied to all views in a base, or just a single view by choosing from the two sections in the **Filters** menu.

- **All views** applies filters to all views in the base.
- **This view** applies filters to the active view.

#### Properties, operators, values

Filters have three components:

1. **Property** — lets you choose a [[Properties|property]] in your vault, including [[Bases syntax#Implicit properties|implicit properties]]
2. **Operator** — lets you choose how to compare the conditions. The list of available operators depends on the property type (text, date, number, etc) 
3. **Value** — lets you choose the value you are comparing to. Values can include math and [[Functions|functions]].

#### Conjunctions

- **All the following are true** is an `and` statement — results will only be shown if *all* conditions in the filter group are met.
- **Any of the following are true** is an `or` statement — results will be shown if *any* of the conditions in the filter group are met.
- **None of the following are true** is a `not` statement — results will not be shown if *any* of the conditions in the filter group are met.

#### Filter groups

Filter groups allow you to create more complex logic by creating combinations on conjunctions.

#### Advanced filter editor

Click the code button ![[lucide-code-xml.svg#icon]] to use the **advanced filter** editor. This displays the raw [[Bases syntax|syntax]] for the filter, and can be used with more complex [[Functions|functions]] that cannot be displayed using the point-and-click interface.

## Limit, copy, and export results

The *results* menu shows the number of results in view. Click the results button to limit the number of results, and access additional actions.

### Copy to clipboard

This action copies the view to your clipboard. Once in your clipboard you can paste it into a Markdown file, or into other document apps including spreadsheets like Google Sheets, Excel, and Numbers.

### Export CSV

This action saves a CSV of your current view.