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
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
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
    order:
      - file.name
      - file.ext
      - note.age
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
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

There are two opportunities to apply filters:

1. At the global `filters` level (shown above) where they apply to all views in the base.
2. At the `view` level where apply only to a specific view.

These two sections are functionally equivalent and when evaluating for a view they will be concatenated with an `AND`.

The `filters` section contains either a single filter statement as a string, or a recursively defined filter object. Filter objects may contain one of `and`, `or`, or `not`. These keys are a heterogeneous list of other filter objects or filter statements in strings. A filter statement is a line which evaluates to truthy or falsey when applied to a note. It can be one of the following:

- A basic comparison using standard arithmetic operators.
- A function. A variety of [[functions]] are built-in, and plugins can add additional functions.

The syntax and available functions for filters and formulas are the same.

### Formulas

The `formulas` section defines formula properties that can be displayed across all views in the base file.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Formula properties support basic arithmetic operators and a variety of built-in [[functions]]. In the future, plugins will be able to add functions for use in formulas.

Properties in formulas can be referenced in multiple ways, depending on the type of property:

- Properties in the frontmatter are called `note` properties. For example `note.price` or `note["price"]`. If a property does not have a prefix it is assumed to be a `note` property.
- Properties about the file (implicit properties) are called `file` properties. For example, `file.size` or `file.ext`. You may also use `file` to reference the file itself, for example `file.hasLink()`.
- Formulas are prefixed with `formula`, for example `formula.formatted_price`.

Formula properties can use values from other formula properties, as long as there is no circular reference. They are always defined as strings in the YAML, however the data type of the data and the function returns will be used to determine the output data type.

Note the use of nested quotes necessary to include text literals in the YAML field. Text literals must be enclosed in single or double quotes.

### Properties

The `properties` section allows storing configuration information about each property. It is up to the individual view how to use these configuration values. For example, in tables the display name is used for the column headers.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
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
      - note.age
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

There are three kinds of properties used in bases:

1. **Note properties**, stored in frontmatter of Markdown files.
2. **File properties**, accessible for all file types.
3. **Formula properties**, defined in the `.base` file itself (see above).

### Note properties

[[Properties|Note properties]] are only available for Markdown files, and are stored in the YAML frontmatter of each note. These properties can be accessed using the format `note.author` or simply `author` as a shorthand.

### File properties

File properties refer to the file currently being tested or evaluated. File properties are available for all [[Accepted file formats|file types]], including attachments.

For example, a filter `file.ext == "md"` will be true for all Markdown files and false otherwise.

| Property      | Type   | Description                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.ctime`  | Date   | Created time                                                  |
| `file.ext`    | String | File extension                                                |
| `file.file`   | File   | File object, only usable in specific functions                |
| `file.folder` | String | Path of the file folder                                       |
| `file.mtime`  | Date   | Modified time                                                 |
| `file.name`   | String | File name                                                     |
| `file.path`   | String | Path of the file                                              |
| `file.size`   | Number | File size                                                     |
| `file.links`  | List   | List of all internal links in the note, including frontmatter |

### Access properties of the current file

Embedded bases can use `this` to access properties of the current file. For example, `this.file.name` will resolve to the name of the file which has embedded the base, instead of the file being evaluated.

In a sidebar, `this` takes on the special meaning of "the currently active file". This allows you to create contextual queries based on the active file in the main content area. For example, this can be used to replicate the backlinks pane with this filter: `file.hasLink(this.file)`.

## Operators

### Arithmetic operators

Arithmetic operators perform arithmetic on numbers. For example, `radius * (2 * 3.14)`.

| Operator | Description |
| -------- | ----------- |
| `+`      | plus        |
| `-`      | minus       |
| `*`      | multiply    |
| `/`      | divide      |
| `%`      | modulo      |
| `( )`    | parenthesis |

### Date arithmetic

Dates can be modified by adding and subtracting durations. Duration units accept multiple formats:

| Unit                     | Duration |
| ------------------------ | -------- |
| `y`, `year`, `years`     | year     |
| `M`, `month`, `months`   | month    |
| `d`, `day`, `days`       | day      |
| `w`, `week`, `weeks`     | week     |
| `h`, `hour`, `hours`     | hour     |
| `m`, `minute`, `minutes` | minute   |
| `s`, `second`, `seconds` | second   |

To modify or offset Date objects, use the `+` or `-` operator with a duration string. For example, `date + "1M"` adds 1 month to the date, while `date - "2h"` subtracts 2 hours from the date.

The global [[Functions|function]] `today()` can be used to get the current date, and `now()` can be used to get the current date with time.

- `now() + "1 day"` returns a datetime exactly 24 hours from the time of execution.
- `file.mtime > now() - "1 week"` returns `true` if the file was modified within the last week.
- `date("2024-12-01") + "1M" + "4h" + "3m"` returns a Date object representing `2025-01-01 04:03:00`.
- Subtract two dates to get the millisecond difference between the two, for example, `now() - file.ctime`.
- To get the date portion of a Date with time, use `datetime.date()`.
- To format a Date object, use the `format()` function, for example `datetime.format("YYYY-MM-DD")`.

### Comparison operators

Comparison operators can be used to compare numbers, or Date objects. Equal and not equal can be used with any kind of value, not just numbers and dates.

| Operator | Description              |
| -------- | ------------------------ |
| `==`     | equals                   |
| `!=`     | not equal                |
| `>`      | greater than             |
| `<`      | less than                |
| `>=`     | greater than or equal to |
| `<=`     | less than or equal to    |

### Boolean operators

Boolean operators can be used to combine or invert logical values, resulting in a true or false value.

| Operator | Description |
| -------- | ----------- |
| `!`      | logical not |
| `&&`     | logical and |
| \|\|     | logical or  |

## Functions

See the [[Functions|list of functions]] that can be used in formulas and [[Views|filters]].

## Types

Bases have a type system which is used by formulas and filters to apply functions to properties.

### Strings, numbers, and booleans

Strings, numbers, and booleans are "primitive" values which do not require a function to create.

- Strings are enclosed in single or double quotes, for example `"message"`.
- Numbers are written as digits, and may optionally be enclosed in parenthesis for clarity. For example, `1` or `(2.5)`.
- Booleans are written as `true` or `false` without quotes.

### Dates and durations

Dates represent a specific date, or a date and time depending on the function used to create them, or that type that has been assigned to the [[Properties|property]].

- To construct a date, use the `date` function, for example `date("2025-01-01 12:00:00")`
- To modify a date, add or remove a duration, for example `now() + "1 hour"` or `today() + "7d"`
- Compare dates using comparison operators (e.g. `>` or `<`) and arithmetic operators (for example, `(now() + "1d") - now()` returns `86400000` milliseconds.)
- To extract portions of a date, use the available fields (`now().hour`), or a convenience function (`now.time()`).
- Many other [[Functions|fields and functions]] are available on date objects.

### Objects and lists

- Turn a single element into a list using the `list()` function. This is especially helpful for properties which may contain a mixture of lists or single values.
- Access list elements using square brackets, and a 0-based index. For example, `property[0]` returns the first element from the list.
- Access object elements using square brackets and the element name or dot notation. For example, `property.subprop` or `property["subprop"]`.

### Files and links

[[Link notes|Wikilinks]] in [[Properties|frontmatter properties]] are automatically recognized as Link objects. Links will render as a clickable link in the [[Views|view]].

- To construct a link, use the global `link` [[Functions|function]], for example `link("filename")` or `link("https://obsidian.md")`.
- You can create a link from any string, for example, `link(file.ctime.date().toString())`.
- To set the display text, pass in an optional string or icon as a second parameter, for example `link("filename", "display")` or `link("filename", "plus".icon())`.

A File object can be turned into a link using `file.asLink()` with an optional display text.

Links can be compared with `==` and `!=`. They are equivalent as long as they point to the same file, or if the file does not exist when looked up, their link text must be identical.

Links can be compared to files such as `file` or `this`. They will equate if the link resolves to the file. For example, `author == this`.

Links can also be checked in list contains, for example, `authors.contains(this)`.
