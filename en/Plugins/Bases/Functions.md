---
permalink: bases/functions
---
Functions are used in [[Introduction to Bases|Bases]] to manipulate data from [[Properties]] in filters and formulas. See the [[Bases syntax|bases syntax]] reference to learn more about how you can use functions.

Aside from [[Functions#Global|Global]] functions, most functions depend on the type of value you want to modify:

- [[Functions#Any|Any]]
- [[Functions#Date|Date]]
- [[Functions#String|String]]
- [[Functions#Number|Number]]
- [[Functions#List|List]]
- [[Functions#Link|Link]]
- [[Functions#File|File]]
- [[Functions#Object|Object]]
- [[Functions#Regular expression|Regular expression]]

## Global

Global functions are used without a type.

### `date()`

`date(date: string): date`

- `date(string): date` parses the provided string and returns a date object.
- The `date` string should be in the format `YYYY-MM-DD HH:mm:ss`.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` is the condition to be evaluated.
- `trueResult` is the output if condition is true.
- `falseResult` is the optional output if the condition is false. If it is not given, then it is assumed to be `null`.
- Returns the `trueResult` if `condition` is true, or is a truthy value, or `falseResult` otherwise.
- Example: `if(isModified, "Modified", "Unmodified")`

### `max()`

`max(value1: number, value2: number...): number`

- Returns the largest of all the provided numbers.

### `min()`

`min(value1: number, value2: number...): number`

- Returns the smallest of all the provided numbers.

### `link()`

`link(path: string | file, display?: string): Link`

- Parses a string `path` and returns a Link object that renders as a link to the path given.
- Optionally provide the `display` parameter to change what text the link says.

### `list()`

`list(element: any): List`

- If the provided element is a list, return it unmodified.
- Otherwise, wraps the provided `element` in a list, creating a list with a single element.
- This function can be helpful when a property contains a mixture of strings or lists across the vault.
- Example: `list("value")` returns `["value"]`.

### `now()`

`now(): date`

- `now()` returns a date object representing the current moment.

### `number()`

`number(input: any): number`

- Attempt to return the provided value as a number.
- Date objects will be returned as milliseconds since the unix epoch.
- Booleans will return a 1 or 0.
- Strings will be parsed into a number and return an error if the result is invalid.
- Example, `number("3.4")` returns `3.4`.

### `today()`

`today(): date`

- `today()` returns a date object representing the current date. The time portion is set to zero.

## Any

Functions you can use with any value. This includes strings (e.g. `"hello"`), numbers (e.g. `42`), lists (e.g. `[1,2,3]`), objects, and more.

### `toString()`

`any.toString(): string`

- Returns the string representation of any value.
- Example: `123.toString()` returns `"123"`.


## Date

Functions you can use with a date and time such as `date("2025-05-27")`. Date comparisons can be done using [[Bases syntax#Date arithmetic|date arithmetic]].

### Fields

The following fields are available for dates:

| Field              | Type     | Description                  |
| ------------------ | -------- | ---------------------------- |
| `date.year`        | `number` | The year of the date         |
| `date.month`       | `number` | The month of the date (1–12) |
| `date.day`         | `number` | The day of the month         |
| `date.hour`        | `number` | The hour (0–23)              |
| `date.minute`      | `number` | The minute (0–59)            |
| `date.second`      | `number` | The second (0–59)            |
| `date.millisecond` | `number` | The millisecond (0–999)      |

### `date()`

`date.date(): date`

- Returns a date object with the time removed.
- Example: `now().date().format("YYYY-MM-DD HH:mm:ss"` returns a string such as "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` is the format string (e.g., `"YYYY-MM-DD"`).
- Returns the date formatted as specified by a Moment.js format string.
- Example: `date.format("YYYY-MM-DD")` returns `"2025-05-27"`.

### `time()`

`date.time(): string`

- Returns the time
- Example: `now().time()` returns a string such as "23:59:59"

## String

Functions you can use with a sequence of characters such as `"hello".`

### Fields

| Field           | Type     | Description                            |
| --------------- | -------- | -------------------------------------- |
| `string.length` | `number` | The number of characters in the string |

### `contains()`

`string.contains(value: string): boolean`

- `value` is the substring to search for.
- Returns true if the string contains `value`.
- Example: `"hello".contains("ell")` returns `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` are one or more substrings to search for.
- Returns true if the string contains all of the `values`.
- Example: `"hello".containsAll("h", "e")` returns `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` are one or more substrings to search for.
- Returns true if the string contains at least one of the `values`.
- Example: `"hello".containsAny("x", "y", "e")` returns `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` is the string to check at the end.
- Returns true if this string ends with `query`.
- Example: `"hello".endsWith("lo")` returns `true`.

### `icon()`

`string.icon(): string`

- Returns a string that represents the icon name to be rendered using Lucide. The icon name must match a supported Lucide icon.
- Example: `"arrow-right".icon()` returns `"arrow-right"`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Returns true if the string has no characters, or is not present.
- Example: `"Hello world".isEmpty()` returns `false`.
- Example: `"".isEmpty()` returns `true`.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` is the value to search for in the target string.
- `replacement` is the value to replace found patterns with.
- If `pattern` is a string, all occurrences of the pattern will be replaced.
- If `pattern` is a Regexp, the `g` flag determines if only the first or if all occurrences are replaced.
- Example: `"a,b,c,d".replace(/,/, "-")` returns `"a-b,c,d"`, where as `"a,b,c,d".replace(/,/g, "-")` returns `"a-b-c-d"`.

### `lower()`

`string.lower(): string`

- Returns the string converted to lower case.

### `reverse()`

`string.reverse(): string`

- Reverses the string.
- Example: `"hello".reverse()` returns `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` is the inclusive start index.
- `end` is the optional exclusive end index.
- Returns a substring from `start` (inclusive) to `end` (exclusive).
- Example: `"hello".slice(1, 4)` returns `"ell"`.
- If `end` is omitted, slices to the end of the string.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` is the delimiter for splitting the string.
- `n` is an optional number. If provided, the result will have the first `n` elements.
- Returns an list of substrings.
- Example: `"a,b,c,d".split(",", 3)` or `"a,b,c,d".split(/,/, 3)` returns `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` is the string to check at the beginning.
- Returns true if this string starts with `query`.
- Example: `"hello".startsWith("he")` returns `true`.

### `title()`

`string.title(): string`

- Converts the string to title case (first letter of each word capitalized).
- Example: `"hello world".title()` returns `"Hello World"`.

### `trim()`

`string.trim(): string`

- Removes whitespace from both ends of the string.
- Example: `"  hi  ".trim()` returns `"hi"`.

## Number

Functions you can use with numeric values such as `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Returns the absolute value of the number.
- Example: `(-5).abs()` returns `5`.

### `ceil()`

`number.ceil(): number`

- Rounds the number up to the nearest integer.
- Example: `(2.1).ceil()` returns `3`.

### `floor()`

`number.floor(): number`

- Rounds the number down to the nearest integer.
- Example: `(2.9).floor()` returns `2`.

### `round()`

`number.round(digits: number): number`

- Rounds the number to the nearest integer.
- Optionally, provided a `digits` parameter to round to that number of decimal digits.
- Example: `(2.5).round()` returns `3`, and `(2.3333).round(2)` returns `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` is the number of decimal places.
- Returns a string with the number in fixed-point notation.
- Example: `(3.14159).toFixed(2)` returns `"3.14"`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Returns true if the number is not present.
- Example: `5.isEmpty()` returns `false`.

## List

Functions you can use with an ordered list of elements such as `[1, 2, 3]`.

### Fields

| Field         | Type     | Description                        |
| ------------- | -------- | ---------------------------------- |
| `list.length` | `number` | The number of elements in the list |

### `contains()`

`list.contains(value: any): boolean`

- `value` is the element to search for.
- Returns true if the list contains `value`.
- Example: `[1,2,3].contains(2)` returns `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` are one or more elements to search for.
- Returns true if the list contains all of the `values`.
- Example: `[1,2,3].containsAll(2,3)` returns `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` are one or more elements to search for.
- Returns true if the list contains at least one of the `values`.
- Example: `[1,2,3].containsAny(3,4)` returns `true`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Returns true if the list has no elements.
- Example: `[1,2,3].isEmpty()` returns `false`.

### `join()`

`list.join(separator: string): string`

- `separator` is the string to insert between elements.
- Joins all list elements into a single string.
- Example: `[1,2,3].join(",")` returns `"1,2,3"`.

### `reverse()`

`list.reverse(): list`

- Reverses the list in place.
- Example: `[1,2,3].reverse()` returns `[3,2,1]`.

### `sort()`

`list.sort(): list`

- Sorts list elements from smallest to largest.
- Example: `[3, 1, 2].sort()` returns `[1, 2, 3]`.
- Example: `["c", "a", "b"].sort()` returns `["a", "b", "c"]`.

### `flat()`

`list.flat(): list`

- Flattens nested list into a single list.
- Example: `[1,[2,3]].flat()` returns `[1,2,3]`.

### `unique()`

`list.unique(): list`

- Removes duplicate elements.
- Example: `[1,2,2,3].unique()` returns `[1,2,3]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` is the inclusive start index.
- `end` is the optional exclusive end index.
- Returns a shallow copy of a portion of the list from `start` (inclusive) to `end` (exclusive).
- Example: `[1,2,3,4].slice(1,3)` returns `[2,3]`.
- If `end` is omitted, slices to the end of the list.

## Link

Functions you can use on a link. Links can be created from a file (`file.asLink()`) or a path (`link("path")`).

### `linksTo()`

`link.linksTo(file): boolean`

- Returns whether the file represented by the `link` has a link to `file`.

## File

Functions you can use with file in the vault, such as `file("notes.md")`.

### `asLink()`

`file.asLink(display?: string): Link`

- `display` optional display text for the link.
- Returns a Link object that renders as a functioning link.
- Example: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` is another file object or string path to check.
- Returns true if `file` links to`otherFile`.
- Example: `file.hasLink(otherFile)` returns `true` if there’s a link from `file` to `otherFile`.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` are one or more tag names.
- Returns true if the file has any of the tags in `values`.
- Example: `file.hasTag("tag1", "tag2")` returns `true` if the file has either tag.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` is the folder name to check.
- Returns true if the file is in the specified folder.
- Example: `file.inFolder("notes")` returns `true`.

## Object

Functions you can use with a collection of key-value pairs such as `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Returns true if the object has no own properties.
- Example: `{}.isEmpty()` returns `true`.

## Regular expression

Functions you can use with a regular expression pattern. Example: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` is the string to test.
- Returns true if the regular expression matches `value`.
- Example: `/abc/.matches("abcde")` returns `true`.