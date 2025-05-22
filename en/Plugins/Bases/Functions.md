---
permalink: bases/functions
---
Functions are used in [[Introduction to Bases|Bases]] to manipulate data from [[Properties]] in filters and formulas. See the [[Bases syntax|bases syntax]] reference to learn more about how you can use functions.

### Logic

#### `contains()`

- `contains(target, query)` returns true if the query can be found in the target.
- `target` can be a list or text. `query` should be text.

#### `containsNone()`

- `containsNone(target, query)` returns the inverse of what `contains(target, query)` would return for the provided target and query.

#### `containsAny()`

- `containsAny(target, query1, query2, query3...)` returns true if any of the query properties are found in the target.
- `target` can be a list or text.
- There can be any number of `query` parameters provided. They should be text values.

#### `containsAll()`

- `containsAll(target, query1, query2, query3...)` is similar to `containsAny()` except all query properties must be found in the target.

#### `empty()`

- `empty(target)` returns true if the target is has no items.
- `target` may be a list (true if there are no items), text (true if length is zero), or an object (true if there are no keys).

#### `notEmpty()`

- `notEmpty(target)` returns the inverse of what `empty(target)` would return for the provided target.

#### `if()`

- `if(logical_expression, value_if_true, value_if_false)`
- First argument is the condition.
- Second argument is output if condition is true.
- Optional third argument output if condition is false.
- e.g. `if(dateAfter(file.mtime, file.ctime), "Modified", "Unmodified")`

#### `inFolder()`

- `inFolder(file.file, folder)` returns true for all notes in the specified folder.
- The first argument should always be `file.file`.
- The second argument is the folder path to test against.

#### `linksTo()`

- `linksTo(file.file, path)` returns true for all notes which have a link to the specified note.
- The first argument should always be `file.file`.
- The second argument is the file path to test against.
- In a Base file in a sidebar you can replicate the backlink pane functionality with the following filter: `linksTo(file.file, this.file.path)`.

#### `not()`

- `not(condition)` can be used to invert any boolean value.

#### `taggedWith()`

- `taggedWith(file.file, "tag1", "tag2" ...)` returns true for all notes which have any of the specified tags.
- The first argument should always be `file.file`.
- Second and on arguments are tags to search for.

### Numbers

#### `abs()`

- `abs(number)` returns the absolute value of the provided number.

#### `ceil()`

- `ceil(number)` returns the provided number rounded up.

#### `floor()`

- `floor(number)` returns the provided number rounded down.

#### `round()`

- `round(number)` returns the provided number rounded to the nearest integer.

#### `min()`

- `min(number1, number2...)` returns the smallest of all the provided numbers.

#### `max()`

- `max(number1, number2...)` returns the largest of all the provided numbers.

### Dates

For all date functions, `datetime` denotes a text value in the format `YYYY-MM-DD[T]HH:mm:ss`, and `date` is a text value in the format `YYYY-MM-DD`.

#### `now()`

- `now()` retrieves a datetime at the moment of formula evaluation.

#### `date(datetime)`

- `date(datetime)` extracts the date portion of the provided datetime.

#### `time(datetime)`

- `time(datetime)` extracts the time portion of the provided datetime.

#### `dateModify()`

- `dateModify(datetime, duration)` retrieves a datetime modified by the provided duration.
- `duration` may be a number of milliseconds (`1 minute` is equivalent to `60000`)
- `duration` may be a text value such as `2h`, `2 hour`, `2 hours`, `-2 hours`
- Valid units for duration text values are `year`, `month`, `week`, `day`, `hour`, `minute`, `second`, the plural versions, and the single letter abbreviation. `month` is abbreviated to `M`.

#### `dateDiff()`

- `dateDiff(datetime, datetime)` retrieves the difference between the two dates in milliseconds.
- Both parameters can be a `datetime` or a `date`.
- `date` parameters are assumed to be at `00:00:00` on the specified date.

#### `dateEquals()`

- `dateEquals(datetime, datetime)` returns true if the two dates are the same.
- Both parameters can be a `datetime` or a `date`.
- If both inputs are `datetimes`, a date and time comparison is performed, otherwise rounded to a date comparison.

#### `dateNotEquals()`

- `dateNotEquals(datetime, datetime)` returns the inverse of `dateEquals`.

#### `dateBefore()`

- `dateBefore(datetime, datetime)` returns true if the first datetime is before the second datetime.
- Both parameters can be a `datetime` or a `date`.
- If both inputs are `datetimes`, a date and time comparison is performed, otherwise rounded to a date comparison.

#### `dateAfter()`

- `dateAfter(datetime, datetime)` returns true if the first datetime is after the second datetime.
- Both parameters can be a `datetime` or a `date`.
- If both inputs are `datetimes`, a date and time comparison is performed, otherwise rounded to a date comparison.

#### `dateOnOrBefore()`

- `dateOnOrBefore(datetime, datetime)` returns true if the first datetime is before the second datetime or if they are equivalent.
- Both parameters can be a `datetime` or a `date`.
- If both inputs are `datetimes`, a date and time comparison is performed, otherwise rounded to a date comparison.

#### `dateOnOrAfter()`

- `dateOnOrAfter(datetime, datetime)` returns true if the first datetime is after the second datetime or if they are equivalent.
- Both parameters can be a `datetime` or a `date`.
- If both inputs are `datetimes`, a date and time comparison is performed, otherwise rounded to a date comparison.

#### `year()`

- `year(date)` retrieves the year from the input date or datetime.
- The parameter can be a `datetime` or a `date`.

#### `month()`

- `month(date)` retrieves the month number from the input date or datetime.
- The parameter can be a `datetime` or a `date`.

#### `day()`

- `day(date)` retrieves the day of the month from the input date or datetime.
- The parameter can be a `datetime` or a `date`.

#### `hour()`

- `hour(datetime)` retrieves the 24-hour hour from the input datetime.

#### `minute()`

- `minute(datetime)` retrieves the minutes from the input datetime.

#### `second()`

- `second(datetime)` retrieves the seconds from the input datetime.

### Strings and lists

#### `concat()`

- `concat(text, text...)` merges all parameters into one text value.

#### `trim()`

- `trim(text)` will remove whitespace before an after the text value.
- e.g. `trim("   spaces   ")` will return `spaces`.

#### `title()`

- `title(text)` will uppercase the first letter of each word in the text value.
- e.g. `title("an example sentence")` will return `An Example Sentence`

#### `flat()`

- `flat(list)` will concatenate all sub-element lists into a single list.
- e.g. `flat([[1, 2], [3, 4]])` will return `[1, 2, 3, 4]`.

#### `index()`

- `index(object, key)` will return a value from an object for the provided key.
- First argument must be an object.
- Second argument must be a text value.

#### `join()`

- `join(separator, list)` joins the elements of the list together using the provided separator.
- First argument is a separator string.
- Second argument is a list. Alternatively, the function can accept multiple additional arguments which will be joined.
- e.g. `join(",", [1, 2, 3])` will return `1,2,3`.

#### `len()`

- `len(input)` will return the length of the input.
- `input` may be a text value, in which case the length of the text is returned.
- `input` may be a list, in which case the number of elements in the list is returned.

#### `slice()`

- `slice(input, start, end)` returns a portion of the provided input.
- `input` may be a text value or a list.
- `start` is the index (starting from 0) of the first element to include.
- `end` is an optional index one greater than the last element to include. If omitted the remaining elements are included.

#### `unique()`

- `unique(list)` returns a subset of the provided list where no element is duplicated.
