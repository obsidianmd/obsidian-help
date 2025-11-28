---
permalink: /formulas
description: Formulas allow you to create calculated properties using data from other properties. You can perform calculations, manipulate text, work with dates, and more.
---
Formulas allow you to create calculated properties in [[Introduction to Bases|Bases]] using data from other [[Properties|properties]]. You can perform calculations, manipulate text, work with dates, and more. 

## What formulas can do

Formulas can help you:

- **Calculate values**, add prices, compute totals, or perform math operations.
- **Manipulate text**, combine strings, change case, or extract substrings.
- **Work with dates**, calculate time differences, format dates, or determine deadlines.
- **Apply logic**, use conditional statements to display different values.
- **Process lists**, filter, sort, map, or aggregate list data.

## Create a formula property

To create a formula property:

1. In your base, click **Properties** in the toolbar.
2. Click **Add formula** at the bottom of the menu.
3. Enter a name for your formula property.
4. Type your formula in the **Formula** field.
5. Close the dialog.

The formula editor will autocomplete [[Functions|function]] and property names as you type to validate your formula syntax. A green checkmark appears when your formula is valid.

Once created, you can use a formula property like any other property in your base. Add it to [[Views|views]], use it in filters, sort by it, and more.

## Write a formula

In the formula editor, type an expression using properties, operators, and functions.

### Reference properties

You can reference different types of properties in your formulas:

- **Note properties** — Properties from a note's [[Properties|frontmatter]].
- **File properties** — Built-in properties like `file.name`, `file.size`, or `file.mtime`.
- **Formula properties** — Other formulas using `formula.formula_name`.

**Examples:**

- `price * quantity` — multiply two note properties
- `file.name + " - " + description` — combine file name with a note property
- `formula.price_per_unit * 1.1` — use another formula property

### Use operators

**Arithmetic operators** perform math on numbers:

- `price + tax` — add
- `price - discount` — subtract
- `price * quantity` — multiply
- `price / quantity` — divide
- `(part / whole) * 100` — use parentheses for order of operations

**Comparison operators** compare values:

- `price > 100` — greater than
- `age < 18` — less than
- `status == "Done"` — equals
- `status != "Done"` — not equals
- `file.mtime > now() - '7d'` — compare dates

**Boolean operators** combine logical conditions:

- `!completed` — not
- `price > 0 && quantity > 0` — and
- `urgent || important` — or

Learn more in [[Bases syntax#Operators|Bases syntax]].

### Use functions

Functions perform operations on values. The available functions depend on the type of value you're working with. See the complete list of [[Functions]].

**Common function categories:**

- **Global functions** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **String functions** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Number functions** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Date functions** — `format()`, `relative()`, `date()`, `time()`
- **List functions** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Examples:**

- `if(price, "$" + price.toFixed(2), "")` to define a conditional with number formatting.
- `file.name.lower()` to convert to lowercase.
- `tags.contains("urgent")` to check if the tags list contains a value.
- `due_date.format("YYYY-MM-DD")` to format a date.

## Formula examples

### Calculate a deadline

Set a project's due date as 2 weeks after the start date:

```js
start_date + "2w"
```

### Display overdue status

Show "Overdue" if the due date has passed and status is not "Done":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Format currency

Display a price with 2 decimal places and currency symbol:

```js
if(price, "$" + price.toFixed(2), "")
```

### Count list items

Count the number of items in a list property:

```js
tasks.length
```

### Calculate priority score

Combine multiple factors into a priority score:

```js
(impact * urgency) / effort
```

### Combine text fields

Create a full name from first and last name:

```js
first_name + " " + last_name
```

### Calculate total cost

Multiply monthly cost by number of months owned:

```js
monthlyUses * formula.Owned.round()
```

## Data types

Formulas work with different types of data:

- **Strings** — Text enclosed in quotes: `"hello"` or `'world'`
- **Numbers** — Numeric values: `42`, `3.14`, `(2 + 2)`
- **Booleans** — True or false: `true`, `false`
- **Dates** — Created with `date()`, `today()`, or `now()`
- **Lists** — Collections of values: `[1, 2, 3]`
- **Objects** — Key-value pairs: `{"name": "value"}`

The output type of a formula is determined by the data and functions used.

## Reference other formulas

Formulas can reference other formulas, creating derived calculations. For example, if you have a formula called `price_per_unit`:

```js
price / quantity
```

You can reference it in another formula:

```js
formula.price_per_unit * 1.1
```

> [!warning] Avoid circular references
> A formula cannot reference itself directly or indirectly through other formulas.
