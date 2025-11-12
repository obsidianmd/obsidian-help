---
permalink: bases/views
---
Views allow you to organize the information in a [[Introduction to Bases|Base]] in multiple ways. A base can contain several views, and each view can have a unique configuration to display, sort, and filter files.

For example, you may want to create a base called "Books" that has separate views for "Reading list" and "Recently finished".

## Toolbar

At the top of a base is a toolbar that allows you to interact with views and their results.

- ![[lucide-table.svg#icon]] **View menu** — create, edit, and switch views.
- **Results** — limit, copy and export files.
- ![[lucide-arrow-up-down.svg#icon]] **Sort** — sort and group files.
- ![[lucide-list-filter.svg#icon]] **Filter** — filter files.
- ![[lucide-list.svg#icon]] **Properties** — choose properties to display and create formulas.
- ![[lucide-plus.svg#icon]] **New** — create a new file in the current view.

## Add and switch views

There are two ways to add a view to a base:

- Click the view name in the top left and select ![[lucide-plus.svg#icon]] **Add view**.
- Use the [[command palette]] and select **Bases: Add view**.

The first view in your list of views will load by default. Drag views by their icon to change their order.

## View settings

Each view has its own configuration options. To edit view settings:

1. Click the view name in the top left.
2. Click the right arrow next to the view you want to configure.

Alternatively *right-click* the view name in the base's toolbar to quickly access the view settings.

## Layout

Views can be displayed with different layouts including as  ![[lucide-table.svg#icon]] **table**, ![[lucide-list.svg#icon]] **list**, ![[lucide-layout-grid.svg#icon]] **cards**, and ![[lucide-map.svg#icon]] **map**. Additional layouts can be added by [[Community plugins]]. Some layouts are still being developed and require [[early access versions]] of Obsidian.

| Layout                | Description                                                                                   | App&nbsp;version |
| --------------------- | --------------------------------------------------------------------------------------------- | ---------------- |
| [[Table view\|Table]] | Display files as rows in a table. Columns are populated from [[properties]] in your notes.    | 1.9              |
| [[Cards view\|Cards]] | Display files as a grid of cards. Lets you create gallery-like views with images.             | 1.9              |
| [[List view\|List]]   | Display files as a [[Basic formatting syntax#Lists\|list]] with bulleted or numbered markers. | 1.10             |
| [[Map view\|Map]]     | Display files as pins on an interactive map. Requires the Maps plugin.                        | 1.10             |


## Filters

Open the ![[lucide-list-filter.svg#icon]] **Filter** menu at the top of a base to add filters.

A base without filters shows all the files in your vault. Filters narrow down the results to only show files that meet specific criteria. For example, you can use filters to only display files with a specific [[Tags|tag]] or within a specific folder. Many filter types are available.

Filters can be applied to all views in a base, or just a single view by choosing from the two sections in the ![[lucide-list-filter.svg#icon]] **Filter** menu.

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

## Sort and group results

Open the ![[lucide-arrow-up-down.svg#icon]] **Sort** menu to sort and group the results in a view.

You can arrange results by one or more properties in ascending or descending order. This makes it easy to list notes by name, last edited time, or any other property — including formulas.

You can also group results by a property to organize similar items into visually distinct sections. Currently, Obsidian supports grouping by only one property.

### Add a sort

1. Open the ![[lucide-arrow-up-down.svg#icon]] **Sort** menu at the top of the view.
2. Choose the property you want to sort (or group) by.
3. If you have multiple sorts, drag them up or down using the ![[lucide-grip-vertical.svg#icon]] grip handle to change their priority.

The options for ordering results depend on the property type:

- **Text**: sort *alphabetically* (A→Z) or in *reverse alphabetical order* (Z→A).
- **Number**: sort from *smallest to largest* (0→1) or *largest to smallest* (1→0).
- **Date and time**: sort by *old to new*, or *new to old*.

### Remove a sort

1. Open the ![[lucide-arrow-up-down.svg#icon]] **Sort** menu at the top of the view.
2. Click the ![[lucide-trash-2.svg#icon]] trash can button next to the sort or group you want to remove.

## Limit, copy, and export results

### Limit results

The *results* menu shows the number of results in view. Click the results button to limit the number of results, and access additional actions.

### Copy to clipboard

This action copies the view to your clipboard. Once in your clipboard you can paste it into a Markdown file, or into other document apps including spreadsheets like Google Sheets, Excel, and Numbers.

### Export CSV

This action saves a CSV of your current view.

## Embed a view

You can embed base files in [[Embed files|any other file]] using the `![[File.base]]` syntax. The first view in the list will be used. You can change the order by dragging views in the view menu.

To specify the default view for an embed use `![[File.base#View]]`.