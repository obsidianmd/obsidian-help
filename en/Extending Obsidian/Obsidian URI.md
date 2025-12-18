---
aliases:
  - Using Obsidian URI
  - Advanced topics/Using obsidian URI
  - Concepts/Obsidian URI
  - Obsidian URL
description: Learn how to use Obsidian URI to trigger actions like opening notes, creating files, and integrating with automation tools.
mobile: true
permalink: obsidian-url
publish: true
---

Obsidian URI is a custom URI protocol supported by Obsidian that lets you trigger various actions, such as opening a note or creating a note. Obsidian URI enables automation and cross-app workflows.

> [!info]+ URI vs URL
> While the technical term is "URI" (Uniform Resource Identifier), the Obsidian app uses "URL" (Uniform Resource Locator) in its interface for better readability. Both terms refer to the same `obsidian://` protocol in this documentation.

## URI format

Obsidian URIs use the following format:

```
obsidian://action?param1=value&param2=value
```

The `action` parameter is the action that you would like to perform. Available actions include:

- `open` to open a note.
- `new` to create or add to an existing note.
- `daily` to create or open your daily note.
- `search` to open a search.

> [!warning] Encoding
> Ensure that your values are properly URI encoded. For example, forward slash characters `/` must be encoded as `%2F` and space characters must be encoded as `%20`.
>
> This is especially important because an improperly encoded "reserved" character may break the interpretation of the URI. [See here for details](https://en.wikipedia.org/wiki/Percent-encoding).

## Get an Obsidian URL

To get an Obsidian URL for any note, use the **Copy Obsidian URL** command. This command is available in:

- The [[Command palette]]
- The three-dot menu in the note header
- The right-click context menu for files in the file explorer

The command copies an `obsidian://open` URL to your clipboard that points to the note.

## Common parameters

The following parameters are used across multiple URI actions. Understanding these common parameters will help you construct URIs for different actions more easily.

### `vault`

Specifies which vault to target. Can be either the vault name or the vault ID[^1].

- **Vault name**: The human-readable name of your vault (e.g., `my vault`).
- **Vault ID**: A unique 16-character identifier for the vault (e.g., `ef6ca3e3b524d22f`). Using the vault ID is more reliable if you have multiple vaults with similar names or if you rename your vault.

### `file`

Specifies which file to target within the vault. Can be either a file name or a path from the vault root to the specified file.

- If the file extension is `md`, the extension can be omitted.
- For files in subdirectories, use forward slashes to specify the path (e.g., `folder/subfolder/note`).

### `path`

An absolute file system path to a file on your computer.

- Using this parameter will override both `vault` and `file`.
- The app will search for the most specific vault that contains the specified file path.
- The remainder of the path after the vault root replaces the `file` parameter.

For example, if you have a vault at `/home/user/my vault` and use `path=/home/user/my vault/folder/note`, this is equivalent to setting `vault=my vault` and `file=folder/note`.

## Open note

The `open` action opens an Obsidian vault, or opens a file within that vault.

### Parameters

The `open` action uses the [[#Common parameters]] (`vault`, `file`, `path`).

### Examples

- `obsidian://open?vault=my%20vault`

  Opens the vault `my vault`. If the vault is already open, focuses on the window.

- `obsidian://open?vault=ef6ca3e3b524d22f`

  Opens the vault identified by the ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=my%20vault&file=my%20note`

  Opens the note `my note.md` in the vault `my vault`, assuming the file exists.

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`

  Looks for any vault that contains the path `/home/user/my vault/path/to/my note`. The rest of the path is passed to the `file` parameter. For example, if a vault exists at `/home/user/my vault`, this is equivalent to setting `file=path/to/my note`.

> [!tip] Open a heading or block
> With proper URI encoding, you can navigate to a heading or block within a note. `Note%23Heading` navigates to the heading called "Heading", whereas `Note%23%5EBlock` navigates to the block called "Block".

### Add content to an existing note

You can add content to an existing note when opening it using the `prepend` or `append` parameters. This is useful for automation workflows where you want to add timestamped entries, append daily logs, or prepend important reminders to existing notes.

#### Parameters

- `prepend` — Content to add to the top of the file. The operation will attempt to merge [[Properties|properties]] if they exist.
- `append` — Content to add to the end of the file. The operation will attempt to merge [[Properties|properties]] if they exist.

Both parameters accept URI-encoded text. Remember to encode special characters such as newlines (`%0A`), hash symbols (`%23`), and spaces (`%20`).

#### Examples

- `obsidian://open?vault=my%20vault&file=my%20note&append=%0A%23%23%20New%20section`

  Opens the note `my note.md` and appends a newline followed by "## New section" to the end of the file.

- `obsidian://open?vault=my%20vault&file=my%20note&prepend=Important%20note%3A%20`

  Opens the note `my note.md` and adds "Important note: " to the beginning of the file content (after any properties).

- `obsidian://open?vault=my%20vault&file=daily%20log&append=%0A-%20%5B%5D%20Task%20added%20via%20automation`

  Opens `daily log.md` and appends a newline followed by a task checkbox "- [ ] Task added via automation".

## Create note

The `new` action creates a new note in the vault, optionally with some content.

### Parameters

The `new` action uses the [[#Common parameters]] (`vault`, `file`, `path`) plus the following:

- `name` — The file name to be created. If this is specified, the file location will be chosen based on your "Default location for new notes" preferences in [[Settings]].
- `content` (optional) — The contents of the note. This should be URI-encoded text.
- `clipboard` (optional) — If set to any value, uses the contents of the clipboard instead of the `content` parameter.
- `silent` (optional) — If set to any value, creates the note without opening it.
- `append` (optional) — If set to any value, appends content to an existing file if one exists instead of creating a new file.
- `overwrite` (optional) — Overwrites an existing file if one exists, but only if `append` is not set.
- `x-success` (optional) — See [[#Use x-callback-url parameters]].

> [!info] Parameter precedence
> The `file` parameter will override `name` if both are specified. The `path` parameter will override both `vault` and `file`.

### Examples

- `obsidian://new?vault=my%20vault&name=my%20note`

  Opens the vault `my vault` and creates a new note called `my note`. The note location is determined by your default new note settings.

- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`

  Opens the vault `my vault` and creates a new note at `path/to/my note`.

- `obsidian://new?vault=my%20vault&name=my%20note&content=Note%20content%20here`

  Creates a new note called `my note` with the content "Note content here".

- `obsidian://new?vault=my%20vault&name=quick%20note&clipboard=1&silent=1`

  Creates a new note called `quick note` with the current clipboard contents, without opening the note.

## Create or open daily note

The `daily` action creates or opens your daily note. The [[Daily notes]] plugin must be enabled for this action to work.

### Parameters

The `daily` action accepts the same parameters as the [[#Create note|new]] action.

### Examples

- `obsidian://daily?vault=my%20vault`

  Opens the vault `my vault` and creates or opens the daily note for today.

- `obsidian://daily?vault=my%20vault&append=%0A%0A%23%23%20Evening%20reflection`

  Opens today's daily note and appends two newlines followed by "## Evening reflection".

## Open search

The `search` action opens [[Search]] in the specified vault and optionally performs a search term.

### Parameters

- `vault` — Can be either the vault name or the vault ID[^1].
- `query` (optional) — The search term to perform. This should be URI-encoded and can include [[Search#Search operators|search operators]].

### Examples

- `obsidian://search?vault=my%20vault`

  Opens the vault `my vault` and opens the [[Search]] pane.

- `obsidian://search?vault=my%20vault&query=Obsidian`

  Opens the vault `my vault`, opens [[Search]], and performs a search for `Obsidian`.

- `obsidian://search?vault=my%20vault&query=tag%3A%23important%20path%3AProjects`

  Opens search and performs a query for notes tagged with `#important` in the `Projects` folder.

## Integrate with Hook

This Obsidian URI action is designed to integrate with [Hook](https://hookproductivity.com/), a productivity tool for macOS that helps you link and retrieve related items across different applications.

### Parameters

- `vault` (optional) — Can be either the vault name or the vault ID[^1]. If not provided, the current or last focused vault will be used.
- `x-success` (optional) — See [[#Use x-callback-url parameters]].
- `x-error` (optional) — See [[#Use x-callback-url parameters]].

If `x-success` is defined, this action will use it as the x-callback-url. Otherwise, it will copy a Markdown link of the current focused note to the clipboard as an `obsidian://open` URL.

### Example

`obsidian://hook-get-address`

## Use x-callback-url parameters

Some Obsidian URI endpoints accept the x-callback-url parameters `x-success` and `x-error`. These parameters allow you to create workflows that continue after Obsidian completes an action.

When `x-success` is provided, Obsidian will call that URL with the following parameters:

- `name` — The name of the file, without the file extension.
- `url` — The `obsidian://` URI for this file.
- `file` (desktop only) — The `file://` URL for this file.

### Example

If Obsidian receives:

`obsidian://new?vault=my%20vault&name=my%20note&x-success=myapp://x-callback-url`

The response to the callback URL would be:

`myapp://x-callback-url?name=my%20note&url=obsidian%3A%2F%2Fopen%3Fvault%3Dmy%2520vault%26file%3Dmy%2520note&file=file%3A%2F%2F%2Fpath%2Fto%2Fvault%2Fmy%2520note.md`

## Shorthand formats

In addition to the formats above, there are two shorthand formats available for opening vaults and files. These formats are more concise but less flexible than the full URI format.

1. `obsidian://vault/my vault/my note`

   Equivalent to `obsidian://open?vault=my%20vault&file=my%20note`.

2. `obsidian:///absolute/path/to/my note`

   Equivalent to `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Troubleshooting

### Register Obsidian URI

On Windows and macOS, running the app once should be sufficient to register the Obsidian URI protocol on your computer.

On Linux, the process is more involved:

1. Ensure you create a `obsidian.desktop` file. [See here for details](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Ensure that your desktop file specifies the `Exec` field as `Exec=executable %u`. The `%u` is used to pass the `obsidian://` URIs to the app.
3. If you're using the AppImage installer, you may have to unpack it using `Obsidian-x.y.z.AppImage --appimage-extract`. Then make sure the `Exec` directive points to the unpacked executable.

[^1]: Vault ID is the random 16-character code assigned to the vault, for example `ef6ca3e3b524d22f`. This ID is unique per folder on your computer. The ID can be found by opening the vault switcher and selecting "Copy vault ID" from the context menu for the desired vault.
