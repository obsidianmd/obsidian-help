---
permalink: bases/views/table
---
Display files in a [[Introduction to Bases|Base]] as a table with a row for each file, and columns for [[Properties]] of that file.

![Example of a base showing a table view with a list of books](bases-noshadow.png#interface)

## Settings

Table view settings can be configured in [[Views#View settings|View settings]].

### Row height

Row height lets you display more information. Choose between **short**, **medium**, **tall**, and **extra tall**.

## Summaries

You can add summaries to a table column to quickly calculate values like totals, averages, or counts for the rows currently visible in the view.

Summaries are tied to the view, not the base. Each view can show different summaries for the same column.

### Add a summary

1. Right-click the column header in a table view.
2. Select ![[lucide-calculator.svg#icon]] **Summarize…**.
3. Choose one of the built-in summary functions, or select **Add summary** to define your own.

The summary appears at the bottom of the column. When results are [[Views#Sort and group results|grouped]] the summary for each group is displayed at the top of the group.

Once the summary bar is added you can add more summaries for other columns by clicking the summary cell. The summary bar is hidden if all summaries are removed.

### Built-in summaries

The following summaries are available by default. Options may vary depending on the property type.

#### All property types

- **Empty**: count of rows with no value.
- **Filled**: count of rows with a value.
- **Unique**: number of distinct values.

#### Numbers

- **Average**: average of all numeric values.
- **Max**: largest value.
- **Median**: median value.
- **Min**: smallest value.
- **Range**: difference between max and min.
- **Stddev**: standard deviation.
- **Sum**: total of all values.

#### Dates

- **Earliest**: the smallest/oldest date.
- **Latest**: the largest/most recent date.
- **Range**: difference between earliest and latest.

#### Checkbox

- **Checked**: number of rows where the checkbox is on.
- **Unchecked**: number of rows where the checkbox is off.

### Custom summaries

You can define your own summary using a formula:

1. In the **Summarize…** menu, choose ![[lucide-square-function.svg#icon]] **Add summary**.
2. Give the summary a name.
3. Enter a formula. The formula runs over the list of values in that column (for example, using a [[Functions|function]] like `values.reduce(...)`).
4. Save the summary.

Custom summaries are useful when you need a calculation that isn’t covered by the built-in options.

## Shortcuts

Shift-click to create a cell selection. Right-click on the cell selection to get a context menu for the files.

| Command                          | Description                                                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `Ctrl/Cmd-C`                     | Copy the selected cells.                                                                                        |
| `Ctrl/Cmd-V`                     | Paste the selected cells                                                                                        |
| `Ctrl/Cmd-Z`, `Ctrl/Cmd-Shift-Z` | Undo and redo changes made while editing properties.                                                            |
| `Ctrl/Cmd-A`                     | Select all cells in the current group                                                                           |
| `Ctrl/Cmd-Shift-Arrowkey`        | Select all cells in a given direction.                                                                          |
| `Ctrl-Space`                     | Select the column.                                                                                              |
| `Shift-Space`                    | Select the row.                                                                                                 |
| `Enter`                          | Focus the current cell. For checkboxes, this toggles the checkbox. For formulas, this opens the formula editor. |
| `Home`                           | Go to the first column.                                                                                         |
| `End`                            | Go to the last column.                                                                                          |
| `PageUp/PageDown`                | Navigate by visual page height.                                                                                 |
| `Esc`                            | Clear the current cell selection.                                                                               |
| `Backspace`                      | Clear the current cells.                                                                                        |
| `Tab`                            | Go to the next cell.                                                                                            |
| `Shift-Tab`                      | Go to the previous cell.                                                                                        |
