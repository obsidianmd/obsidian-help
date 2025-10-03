---
permalink: bases/views
---
Views allow you to organize the information in a [[Introduction to Bases|Base]] in multiple ways. A base can contain several views, and each view can have a unique configuration to display, sort, and filter files.

For example, you may want to create a base called "Books" that has separate views for "Reading list" and "Recently finished". The first view in your list of views will load by default. Drag views by their icon to change their order.

## Add and switch views

There are two ways to add a view to a base:

- Click the view name in the top left and select **Add view**.
- Use the [[command palette]] and select **Bases: Add view**.

## View settings

Each view has its own configuration options. To edit view settings:

1. Click the view name in the top left.
2. Click the right arrow next to the view you want to configure.

Alternatively *right-click* the view name in the base's toolbar to quickly access the view settings.

## Layout

Views can be displayed with different layouts such as **table**, **list**, and **cards**. Additional layouts can be added by [[Community plugins]]. Some layouts are still being developed and require [[early access versions]] of Obsidian.

| Layout                | Description                                                                                   | App&nbsp;version |
| --------------------- | --------------------------------------------------------------------------------------------- | ---------------- |
| [[Table view\|Table]] | Display files as rows in a table. Columns are populated from [[properties]] in your notes.    | 1.9              |
| [[Cards view\|Cards]] | Display files as a grid of cards. Lets you create gallery-like views with images.             | 1.9              |
| [[List view\|List]]   | Display files as a [[Basic formatting syntax#Lists\|list]] with bulleted or numbered markers. | 1.10             |
| [[Map view\|Map]]     | Display files as pins on an interactive map.                                                  | 1.10             |

## Filters

A base without filters shows all the files in your vault. Filters allow you to narrow down results to only show files that meet specific criteria. For example, you can use filters to only display files with a specific [[Tags|tag]] or within a specific folder. Many filter types are available.

Click the **Filters** button at the top of a base to add filters.

Filters can be applied to all views in a base, or just a single view by choosing from the two sections in the **Filters** menu.

- **All views** applies filters to all views in the base.
- **This view** applies filters to the active view.

#### Components of a filter

Filters have three components:

1. **Property** — lets you choose a [[Properties|property]] in your vault, including [[Bases syntax#File properties|file properties]].
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

### Limit results

The *results* menu shows the number of results in view. Click the results button to limit the number of results, and access additional actions.

### Copy to clipboard

This action copies the view to your clipboard. Once in your clipboard you can paste it into a Markdown file, or into other document apps including spreadsheets like Google Sheets, Excel, and Numbers.

### Export CSV

This action saves a CSV of your current view.