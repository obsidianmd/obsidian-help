---
aliases:
  - Using Obsidian URI
  - Advanced topics/Using obsidian URI
  - Concepts/Obsidian URI
---
Obsidian URI is a custom URI protocol supported by Obsidian that lets you trigger various actions, such as opening a note or creating a note.

It is commonly used on macOS and mobile apps for automation and cross-app workflows.

Obsidian URIs are typically in this format:

```
obsidian://action?param1=value&param2=value
```

The `action` parameter is the action that you would like to perform.

> [!warning] Encoding
> Ensure that your values are properly URI encoded. For example, forward slash characters `/` must be encoded as `%2F` and space characters must be encoded as `%20`.
> 
 This is especially important because an improperly encoded "reserved" character may break the interpretation of the URI. [See here for details](https://en.wikipedia.org/wiki/Percent-encoding).

## Register Obsidian URI

On Windows and macOS, running the app once should be sufficient to register the Obsidian URI protocol on your computer.

On Linux, it is a much more involved process:

1. Ensure you create a `obsidian.desktop` file. [See here for details](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Ensure that your desktop file specifies the `Exec` field as `Exec=executable %u`. The `%u` is used to pass the `obsidian://` URIs to the app.
3. If you're using the AppImage installer, you may have to unpack it using `Obsidian-x.y.z.AppImage --appimage-extract`. Then make sure the `Exec` directive points to the unpacked executable.

## Open notes

Opens an Obsidian vault, or open a file within that vault.

### Examples

- `obsidian://open?vault=my%20vault`
  This opens the vault `my vault`. If the vault is already open, focus on the window.

- `obsidian://open?vault=ef6ca3e3b524d22f`
  This opens the vault identified by the ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=my%20vault&file=my%20note`
  This opens the note `my note.md` in the vault `my vault`, assuming the file exists.

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  This will look for any vault that contains the path `/home/user/my vault/path/to/my note`. Then, the rest of the path is passed to the `file` parameter. For example, if a vault exists at `/home/user/my vault`, then this would be equivalent to `file` parameter set to `path/to/my note`.


> [!tip] Open a heading or block
> With proper URI encoding, you can navigate to a heading or block within a note. `Note%23Heading` would navigate to the heading called "Heading", whereas `Note%23%5EBlock` would navigate to the block called "Block".

### Parameters

- `vault` can be either the vault name or the vault ID[^1].
- `file` can be either a file name, or a path from the vault root to the specified file. If the file extension is `md`, the extension can be omitted.
- `path` an absolute file system path to a file.
  - Using this parameter will override both `vault` and `file`.
  - This will cause the app to search for the most specific vault which contains the specified file path.
  - Then the rest of the path replaces the `file` parameter.

## Open search

This Obsidian URI endpoint opens [[Search]] in the specified vault, and optionally perform a search query.

### Examples

- `obsidian://search?vault=my%20vault`
  This opens the vault `my vault`, and opens [[Search]].

- `obsidian://search?vault=my%20vault&query=Obsidian`
  This opens the vault `my vault`, opens [[Search]], and performs a search for `Obsidian`.

### Parameters

- `vault` can be either the vault name, or the vault ID[^1]. Same as action `open`.
- `query` (optional) The search query to perform.

## Create note

This URI endpoint creates a new note in the vault, optionally with some content.

### Examples

- `obsidian://new?vault=my%20vault&name=my%20note`
  This opens the vault `my vault`, and creates a new note called `my note`.
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note`
  This opens the vault `my vault`, and creates a new note at `path/to/my note`.

### Parameters

- `vault` can be either the vault name, or the vault ID[^1]. Same as action `open`.
- `name` the file name to be created. If this is specified, the file location will be chosen based on your "Default location for new notes" preferences.
- `file` a vault absolute path, including the name. Will override `name` if specified.
- `path` a globally absolute path. Works similar to the `path` option in the `open` action, which will override both `vault` and `file`.
- `content` (optional) the contents of the note.
- `silent` (optional) include this parameter if you don't want to open the new note.
- `append` (optional) include this parameter to append to an existing file if one exists.
- `overwrite` (optional) overwrite an existing file if one exists, but only if `append` isn't set.
- `x-success` (optional) see [[#x-callback-url]].

## Integrate with Hook

This Obsidian URI endpoint is to be used with [Hook](https://hookproductivity.com/). 

### Example

`obsidian://hook-get-address`

### Parameters

- `vault` (optional) can be either the vault name, or the vault ID[^1]. If not provided, the current or last focused vault will be used.
- `x-success` (optional) see [[#x-callback-url]].
- `x-error` (optional) see [[#x-callback-url]].

If `x-success` is defined, this API will use it as the x-callback-url. Otherwise, it will copy a Markdown link of the current focused note to the clipboard, as an `obsidian://open` URL.

## Use x-callback-url parameters

Some endpoints will accept the x-callback-url parameters `x-success` and `x-error`. When it's provided, Obsidian will provide the following to the `x-success` callback:

- `name` the name of the file, without the file extension.
- `url` the `obsidian://` URI for this file.
- `file` (desktop only) the `file://` URL for this file.

For example, if Obsidian receives
`obsidian://.....x-success=myapp://x-callback-url`, the response would be `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Shorthand formats

In addition to the formats above, there are two more "shorthand" formats available to open vaults and files:

1. `obsidian://vault/my vault/my note` is equivalent to `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` is equivalent to `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

---

[^1]: Vault ID is the random 16-character code assigned to the vault, for example `ef6ca3e3b524d22f`. This ID is unique per folder on your computer. The ID can be found by opening the vault switcher and clicking "Copy vault ID" in the context menu for the desired vault.
