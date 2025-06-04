---
permalink: bases/syntax
aliases:
  - Bases file format
---

> [!Warning] Work in progress
> Bases are still in [[Early access versions|beta]] and the syntax is continuing to evolve with feedback we receive during the early access phase. Expect the syntax to change.

When you [[Create a base|create a base]] in Obsidian, it is saved as a `.base` file. Bases are typically edited using the app interface, but the syntax can also be edited manually, and embedded in a code block.

The [[Introduction to Bases|Bases]] syntax defines [[views]], filters, and formulas. Bases must be valid YAML conforming to the schema defined below.

## Example

Here's an example of a base file. We'll walk through each section in detail.

```yaml
filters:
  or:
    - taggedWith(file.file, "tag")
    - and:
        - taggedWith(file.file, "book")
        - linksTo(file.file, "Textbook")
    - not:
        - taggedWith(file.file, "book")
        - inFolder(file.file, "Required Reading")
formulas:
  formatted_price: 'concat(price, " dollars")'
  ppu: "price / age"
display:
  status: Status
  formula.formatted_price: "Price"
  "file.ext": Extension
views:
  - type: table
    name: "My table"
    limit: 10
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    group_by: "status"
    agg: "sum(price)"
    order:
      - file.name
      - file.ext
      - property.age
      - formula.ppu
      - formula.formatted_price
  - type: map
    name: "Example map"
    filters: "has_coords == true"
    lat: lat
    long: long
    title: file.name
```

### Filters

By default a base includes every file in the vault. There is no `from` or `source` like in SQL or Dataview. The `filters` section lets you define conditions to narrow down the dataset.

```yaml
filters:
  or:
    - taggedWith(file.file, "tag")
    - and:
        - taggedWith(file.file, "book")
        - linksTo(file.file, "Textbook")
    - not:
        - taggedWith(file.file, "book")
        - inFolder(file.file, "Required Reading")
```

There are two opportunities to apply filters:

1. At the global `filters` level (shown above) where they apply to all views in the base.
2. At the `view` level where apply only to a specific view.

These two sections are functionally equivalent and when evaluating for a view they will be concatenated with an `AND`.

The `filters` section contains either a single filter statement as a string, or a recursively defined filter object. Filter objects may contain one of `and`, `or`, or `not`. These keys are a heterogenous list of other filter objects or filter statements in strings. A filter statement is a line which evaluates to truthy or falsey when applied to a note. It can be one of the following:

- A basic comparison using standard arithmetic operators.
- A function. A variety of [[functions]] are built-in, and plugins can add additional functions.

The syntax and available functions for filters and formulas are the same.

### Formulas

The `formulas` section defines formula properties that can be displayed across all views in the base file.

```yaml
formulas:
  formatted_price: 'concat(price, " dollars")'
  ppu: "price / age"
```

Formula properties support basic arithmetic operators and a variety of built-in [[functions]]. In the future, plugins will be able to add functions for use in formulas.

Formula properties can use values from other formula properties, as long as there is no circular reference. They are always defined as strings in the YAML, however the data type of the data and the function returns will be used to determine the output data type.

Note the use of nested quotes necessary to include text literals in the YAML field. Text literals must be enclosed in double quotes. The formula must then be enclosed in single quotes.

### Display

The `display` section allows renaming properties with friendlier names. It is up to the individual view how to use the display name. For example, in tables the display name is used for the column headers.

```yaml
display:
  status: Status
  formula.formatted_price: "Price"
  "file.ext": Extension
```

Display names are not used in filters or formulas.

### Views

The `views` section defines how the data can be rendered. Each entry in the `views` list defines a separate view of the same data, and there can be as many different views as needed.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - property.age
      - formula.ppu
      - formula.formatted_price
  - type: map
    name: "Example map"
    filters: "has_coords == true"
    lat: lat
    long: long
    title: file.name
```

- `type` selects from the built-in and plugin-added view types.
- `name` is the display name, and can be used to define the default view.
- `filters` are exactly the same as described above, but apply only to the view.

[[Views]] can add additional data to store any information needed to maintain state or properly render, however plugin authors should take care to not use keys already in use by the core Bases plugin. As an example, a table view may use this to limit the number of rows or to select which column is used to sort rows and in which direction. A different view type such as a map could use this for mapping which property in the note corresponds to the latitude and longitude and which property should be displayed as the pin title.

In the future, API will allow views to read and write these values, allowing the view to build its own interface for configuration.

## Properties

### Implicit properties

Implicit properties refer to the file currently being tested or evaluated. For example, a filter `file.ext == "md"` will be true for all markdown files and false otherwise.

| Property      | Type   | Description                                     |
| ------------- | ------ | ----------------------------------------------- |
| `file.ctime`  | Date   | Created time                                    |
| `file.ext`    | String | File extension                                  |
| `file.file`   | File   | File object. Only usable in specific functions. |
| `file.folder` | String | Path of the file folder                         |
| `file.mtime`  | Date   | Modified time                                   |
| `file.name`   | String | File name                                       |
| `file.path`   | String | Path of the file                                |
| `file.size`   | Number | File size                                       |

### Self-referential properties

Embedded bases can use `this` to access properties of the current file. For example, `this.file.name` will resolve to the name of the file which has embedded the base, instead of the file being evaluated.

In a sidebar, `this` takes on the special meaning of "the currently active file". This allows you to create contextual queries based on the active file in the main content area. For example, this can be used to replicate the backlinks pane with this filter: `linksTo(file.file, this.file.path)`.

## Arithmetic operators

Arithmetic operators must be surrounded by spaces. For example, `radius * (2 * 3.14)`.

| Operator | Description |
| -------- | ----------- |
| `+`      | plus        |
| `-`      | minus       |
| `*`      | multiply    |
| `/`      | divide      |
| `( )`    | parenthesis |

## Comparison operators

| Operator | Description              |
| -------- | ------------------------ |
| `==`     | equals                   |
| `!=`     | not equal                |
| `>`      | greater than             |
| `<`      | less than                |
| `>=`     | greater than or equal to |
| `<=`     | less than or equal to    |

## Functions

See the [[Functions|list of functions]] that can be used in formulas and [[Views|filters]].