Obsidian supports a custom URI protocol `obsidian://` which can be used to trigger various actions within the app. This is commonly used on MacOS and mobile apps for automation and cross-app workflows.

If you have Obsidian installed, this link will open the app on your device: [Click here](obsidian://open)

## Installing Obsidian URI

To make sure your operating system redirect `obsidian://` URIs to the Obsidian app, there may be additional steps you need to perform.

- On Windows, running the app once should be sufficient. This will register for the `obsidian://` custom protocol handler in the Windows registry.
- On MacOS, running the app once should be sufficient, however, your app **must** be installer version 0.8.12 or later.
- On Linux, there's a much more involved process:
	- First, ensure you create a `obsidian.desktop` file. [See here for details](https://developer.gnome.org/integration-guide/stable/desktop-files.html.en)
	- Ensure that your desktop file specifies the `Exec` field as `Exec=executable %u`. The `%u` is used to pass the `obsidian://` URIs to the app.
	- If you're using the AppImage installer, you may have to unpack it using `Obsidian-x.y.z.AppImage --appimage-extract`. Then make sure the `Exec` directive points to the unpacked executable.

## Using Obsidian URIs

Obsidian URIs are typically in this format:

```
obsidian://action?param1=value&param2=value
```

- The `action` is usually the action that you would like to perform.

### Encoding

==Important==

Ensure that your values are properly URI encoded. For example, forward slash characters `/` must be encoded as `%2F` and space characters must be encoded as `%20`.

This is especially important because an improperly encoded "reserved" character may break the interpretation of the URI. [See here for details](https://en.wikipedia.org/wiki/Percent-encoding)

### Available actions

#### Action `open`

Description: Opens an Obsidian vault, and possibly open a file within that vault.

Possible parameters:

- `vault` can be either the vault name, or the vault ID.
	- The vault name is simply the name of the vault folder.
	- The vault ID is the random 16-character code assigned to the vault. This ID is unique per folder on your computer. Example: `ef6ca3e3b524d22f`. There isn't an easy way to find this ID yet, one will be offered at a later date in the vault switcher. Currently it can be found in `%appdata%/obsidian/obsidian.json` for Windows. For MacOS, replace `%appdata%` with `~/Library/Application Support/`. For Linux, replace `%appdata%` with `~/.config/`.
- `file` can be either a file name, or a path from the vault root to the specified file.
	- To resolve the target file, Obsidian uses the same link resolution system as a regular `[[wikilink]]` within the vault.
	- If the file extension is `md`, the extension can be omitted.
- `path` an absolute file system path to a file.
	- Using this parameter will override both `vault` and `file`.
	- This will cause the app to search for the most specific vault which contains the specified file path.
	- Then the rest of the path replaces the `file` parameter.

Examples:

- `obsidian://open?vault=my%20vault`
	This opens the vault `my vault`. If the vault is already open, focus on the window.

- `obsidian://open?vault=ef6ca3e3b524d22f`
	This opens the vault identified by the ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=my%20vault&file=my%20note`
	This opens the note `my note` in the vault `my vault`, assuming `my note` exists and the file is `my note.md`.

- `obsidian://open?vault=my%20vault&file=my%20note.md`
	This also opens the note `my note` in the vault `my vault`.

- `obsidian://open?vault=my%20vault&file=path%2Fto%2Fmy%20note`
	This opens the note located at `path/to/my note` in the vault `my vault`.

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
	This will look for any vault that contains the path `/home/user/my vault/path/to/my note`. Then, the rest of the path is passed to the `file` parameter. For example, if a vault exists at `/home/user/my vault`, then this would be equivalent to `file` parameter set to `path/to/my note`.

- `obsidian://open?path=D%3A%5CDocuments%5CMy%20vault%5CMy%20note`
	This will look for any vault that contains the path `D:\Documents\My vault\My note`. Then, the rest of the path is passed to the `file` parameter. For example, if a vault exists at `D:\Documents\My vault`, then this would be equivalent to `file` parameter set to `My note`.
	
#### Action `search`

Description: Opens the search pane for a vault, and optionally perform a search query.

Possible parameters:

- `vault` can be either the vault name, or the vault ID. Same as action `open`.
- `query` (optional) The search query to perform.

Examples:

- `obsidian://search?vault=my%20vault`
	This opens the vault `my vault`, and opens the search pane.

- `obsidian://search?vault=my%20vault&query=MOC`
	This opens the vault `my vault`, opens the search pane, and performs a search for `MOC`.
	
#### Action `new`

Description: Creates a new note in the vault, optionally with some content.

Possible parameters:

- `vault` can be either the vault name, or the vault ID. Same as action `open`.
- `name` the file name to be created. If this is specified, the file location will be chosen based on your "Default location for new notes" preferences.
- `file` a vault absolute path, including the name. Will override `name` if specified.
- `path` a globally absolute path. Works similar to the `path` option in the `open` action, which will override both `vault` and `file`.
- `content` (optional) the contents of the note.
- `silent` (optional) set this if you don't want to open the new note.

Examples:

- `obsidian://new?vault=my%20vault&name=my%20note`
	This opens the vault `my vault`, and creates a new note called `my note`.
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note`
	This opens the vault `my vault`, and creates a new note at `path/to/my note`.
	
#### Action `hook-get-address`

Description: Endpoint for use with [Hook](https://hookproductivity.com/). Copies a markdown link of the current focused note to the clipboard, as an `obsidian://open` URL. Use: `obsidian://hook-get-address`

Possible parameters:

- `vault` (optional) can be either the vault name, or the vault ID. If not provided, the current or last focused vault will be used.

## Shorthand formats

In addition to the formats above, there are two more "shorthand" formats available to open vaults and files:

- `obsidian://vault/my vault/my note` is equivalent to `obsidian://open?vault=my%20vault&file=my%20note`
- `obsidian:///absolute/path/to/my note` is equivalent to `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`
