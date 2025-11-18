---
permalink: bases/views/table
---
Table is a type of [[Views|view]] you can use in [[Introduction to Bases|Bases]].

Select ![[lucide-table.svg#icon]]  **Table** from the view menu to display files as a table with a row for each file, and columns for [[Properties]] of that file.

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
3. Choose one of the built-in summary functions, or select ![[lucide-square-function.svg#icon]] **Add summary** to define your own.

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

1. In the ![[lucide-calculator.svg#icon]] **Summarize…** menu, choose ![[lucide-square-function.svg#icon]] **Add summary**.
2. Give the summary a name.
3. Enter a formula. The formula runs over the list of values in that column (for example, using a [[Functions|function]] like `values.reduce(...)`).
4. Save the summary.

Custom summaries are useful when you need a calculation that isn’t covered by the built-in options.

## Shortcuts

You can quickly move around a table view using the following mouse and [[Editing shortcuts|keyboard shortcuts]].

- Shift-click creates a cell selection.
- Right-click a cell selection to access additional actions for those files. 

| Action                                                                                                          | Shortcut            | macOS              |
| --------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ |
| Copy the selected cells                                                                                         | `Ctrl+C`            | `Cmd+C`            |
| Paste the selected cells                                                                                        | `Ctrl+V`            | `Cmd+V`            |
| Undo changes to properties                                                                                      | `Ctrl+Z`            | `Cmd+Z`            |
| Redo changes to properties                                                                                      | `Ctrl+Shift+Z`      | `Cmd+Shift+Z`      |
| Select all cells in the current group                                                                           | `Ctrl+A`            | `Cmd+A`            |
| Select all cells in a given direction                                                                           | `Ctrl+Shift+Arrow`  | `Ctrl+Shift+Arrow` |
| Select the column                                                                                               | `Ctrl+Space`        |                    |
| Select the row                                                                                                  | `Shift+Space`       |                    |
| Focus the current cell — for checkboxes, this toggles the checkbox, for formulas, this opens the formula editor | `Enter`             |                    |
| Go to the first column                                                                                          | `Home`              |                    |
| Go to the last column                                                                                           | `End`               |                    |
| Navigate up and down by page height                                                                             | `PageUp`,`PageDown` |                    |
| Clear the current cell selection                                                                                | `Esc`               |                    |
| Clear the current cells                                                                                         | `Backspace`         |                    |
| Go to the next cell                                                                                             | `Tab`               |                    |
| Go to the previous cell                                                                                         | `Shift-Tab`         |                    |
