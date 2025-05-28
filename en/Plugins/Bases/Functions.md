---
permalink: bases/functions
---
Functions are used in [[Introduction to Bases|Bases]] to manipulate data from [[Properties]] in filters and formulas. See the [[Bases syntax|bases syntax]] reference to learn more about how you can use functions.

## Global functions

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` is the condition to be evaluated.
- `trueResult` is the output if condition is true.
- `falseResult` is the optional output if the condition is false. If it is not given, then it is assumed to be `null`.
- Returns the `trueResult` if `condition` is true, or is a truthy value, or `falseResult` otherwise.
- Example: `if(isModified, "Modified", "Unmodified")`

### `min()`

`min(value1: number, value2: number...): number`

- Returns the smallest of all the provided numbers.

### `max()`

`max(value1: number, value2: number...): number`

- Returns the largest of all the provided numbers.

## Any functions

Functions you can use with any value, including strings, numbers, arrays, objects, and more.  Example: `42`, `"hello"`, `[1, 2, 3]`.

### `toString()`

`any.toString(): string`

- Returns the string representation of any value.
- Example: `123.toString()` returns `"123"`.

## String functions

Functions you can use with a sequence of characters. For example: `"hello".`

### Fields

| Field           | Type     | Description                            |
| --------------- | -------- | -------------------------------------- |
| `string.length` | `number` | The number of characters in the string |

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` is the string to check at the beginning.
- Returns true if this string starts with `query`.
- Example: `"hello".startsWith("he")` returns `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` is the string to check at the end.
- Returns true if this string ends with `query`.
- Example: `"hello".endsWith("lo")` returns `true`.

### `trim()`

`string.trim(): string`

- Removes whitespace from both ends of the string.
- Example: `"  hi  ".trim()` returns `"hi"`.

### `title()`

`string.title(): string`

- Converts the string to title case (first letter of each word capitalized).
- Example: `"hello world".title()` returns `"Hello World"`.

### `icon()`

`string.icon(): string`

- Returns a string that represents the icon name to be rendered using Lucide. The icon name must match a supported Lucide icon.
- Example: `"arrow-right".icon()` returns `"arrow-right"`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Returns true if the string has no characters.
- Example: `"".isEmpty()` returns `true`.

### `split()`

`string.split(separator: string, n?: number): array`

- `separator` is the delimiter for splitting the string.
- `n` is an optional number. If provided, the result will have at most `n` elements. The final element includes any remaining unsplit content.
- Returns an array of substrings.
- Example: `"a,b,c,d".split(",", 3)` returns `["a", "b", "c,d"]`.

### `contains()`

`string.contains(value: string): boolean`

- `value` is the substring to search for.
- Returns true if the string contains `value`.
- Example: `"hello".contains("ell")` returns `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` are one or more substrings to search for.
- Returns true if the string contains at least one of the `values`.
- Example: `"hello".containsAny("x", "y", "e")` returns `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` are one or more substrings to search for.
- Returns true if the string contains all of the `values`.
- Example: `"hello".containsAll("h", "e")` returns `true`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` is the inclusive start index.
- `end` is the optional exclusive end index.
- Returns a substring from `start` (inclusive) to `end` (exclusive).
- Example: `"hello".slice(1, 4)` returns `"ell"`.
- If `end` is omitted, slices to the end of the string.

### `reverse()`

`string.reverse(): string`

- Reverses the string.
- Example: `"hello".reverse()` returns `"olleh"`.


## Number functions

Functions you can use with numeric values. For example: `42`, `3.14`.

### `round()`

`number.round(): number`

- Rounds the number to the nearest integer.
- Example: `(2.5).round()` returns `3`.

### `ceil()`

`number.ceil(): number`

- Rounds the number up to the nearest integer.
- Example: `(2.1).ceil()` returns `3`.

### `floor()`

`number.floor(): number`

- Rounds the number down to the nearest integer.
- Example: `(2.9).floor()` returns `2`.

### `abs()`

`number.abs(): number`

- Returns the absolute value of the number.
- Example: `(-5).abs()` returns `5`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` is the number of decimal places.
- Returns a string with the number in fixed-point notation.
- Example: `(3.14159).toFixed(2)` returns `"3.14"`.


## Array functions

Functions you can use with an ordered list of elements. Example: `[1, 2, 3]`.

### Fields

| Field          | Type     | Description                         |
| -------------- | -------- | ----------------------------------- |
| `array.length` | `number` | The number of elements in the array |

### `isEmpty()`

`array.isEmpty(): boolean`

- Returns true if the array has no elements.
- Example: `[1,2,3].isEmpty()` returns `false`.

### `join()`

`array.join(separator: string): string`

- `separator` is the string to insert between elements.
- Joins all array elements into a single string.
- Example: `[1,2,3].join(",")` returns `"1,2,3"`.

### `reverse()`

`array.reverse(): array`

- Reverses the array in place.
- Example: `[1,2,3].reverse()` returns `[3,2,1]`.

### `flat()`

`array.flat(): array`

- Flattens nested arrays into a single array.
- Example: `[1,[2,3]].flat()` returns `[1,2,3]`.

### `unique()`

`array.unique(): array`

- Removes duplicate elements.
- Example: `[1,2,2,3].unique()` returns `[1,2,3]`.

### `contains()`

`array.contains(value: any): boolean`

- `value` is the element to search for.
- Returns true if the array contains `value`.
- Example: `[1,2,3].contains(2)` returns `true`.

### `containsAny()`

`array.containsAny(...values: any): boolean`

- `values` are one or more elements to search for.
- Returns true if the array contains at least one of the `values`.
- Example: `[1,2,3].containsAny(3,4)` returns `true`.

### `containsAll()`

`array.containsAll(...values: any): boolean`

- `values` are one or more elements to search for.
- Returns true if the array contains all of the `values`.
- Example: `[1,2,3].containsAll(2,3)` returns `true`.

### `slice()`

`array.slice(start: number, end?: number): array`

- `start` is the inclusive start index.
- `end` is the optional exclusive end index.
- Returns a shallow copy of a portion of the array from `start` (inclusive) to `end` (exclusive).
- Example: `[1,2,3,4].slice(1,3)` returns `[2,3]`.
- If `end` is omitted, slices to the end of the array.


## Object functions

Functions you can use with a collection of key-value pairs. Example: `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Returns true if the object has no own properties.
- Example: `{}.isEmpty()` returns `true`.


## RegExp functions

Functions you can use with a regular expression pattern. Example: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` is the string to test.
- Returns true if the regular expression matches `value`.
- Example: `/abc/.matches("abcde")` returns `true`.

## Date functions

Functions you can use with a date and time. Example: `date("2025-05-27")`.

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

### `format()`

`date.format(format: string): string`

- `format` is the format string (e.g., `"YYYY-MM-DD"`).
- Returns the date formatted as specified.
- Example: `date.format("YYYY-MM-DD")` returns `"2025-05-27"`.


## File functions

Functions you can use with file in the vault. Example: `file("notes.md")`.

### `linksTo()`

`file.linksTo(file: file): boolean`

- `file` is another file to check.
- Returns true if this file links to `file`.
- Example: `file.linksTo(otherFile)` returns `true` if there’s a link.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` is the folder name to check.
- Returns true if the file is in the specified folder.
- Example: `file.inFolder("notes")` returns `true`.

### `taggedWith()`

`file.taggedWith(...values: string): boolean`

- `values` are one or more tag names.
- Returns true if the file has any of the tags in `values`.
- Example: `file.taggedWith("tag1", "tag2")` returns `true` if the file has either tag.
