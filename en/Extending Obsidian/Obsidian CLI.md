---
permalink: cli
description: Anything you can do in Obsidian can be done from the command line.
---
Obsidian CLI is a command line interface that lets you control Obsidian from your terminal for scripting, automation, and integration with external tools.

Anything you can do in Obsidian can be done from the command line. Obsidian CLI even includes [[#Developer commands|developer commands]] to access developer tools, inspect elements, take screenshots, reload plugins, and more. 

![[obsidian-cli.mp4#interface]]

> [!warning] Early access feature
> Obsidian CLI requires Obsidian 1.12 or above, which is currently an [[Early access versions|early access version]] and requires a [[Catalyst license]]. Commands and syntax are likely to change during the early access phase.

## Install Obsidian CLI

Upgrade to the latest [[Update Obsidian|Obsidian installer version]] (1.11.7) and the latest [[Early access versions|early access version]] (1.12.x).

Enable Obsidian CLI in Obsidian:

1. Go to **Settings** → **General**.
2. Enable **Command line interface**.
3. Follow the prompt to register Obsidian CLI.

On Windows you will also need to run the `.com` file, available to [[Catalyst license|Catalyst]] members on Discord. See [[#Troubleshooting]] for help.

## Get started

**Note:** Obsidian CLI requires the Obsidian app to be running. If Obsidian is not running, the first command you run launches Obsidian.

Obsidian CLI supports both single commands and a terminal user interface (TUI) with interactive help and autocomplete.

### Run a command

Run an individual command without opening the TUI:

```shell
# Run the help command
obsidian help
```

### Use the terminal interface

Use the TUI by entering `obsidian`. Subsequent commands can be entered without `obsidian`.

```shell
# Open the TUI, then run help
obsidian
help
```

The TUI supports autocomplete, command history, and reverse search. Use `Ctrl+R` to search your command history. See [[#Keyboard shortcuts]] for all available shortcuts.

## Examples

Here are a few examples of what Obsidian CLI can do.

### Everyday use

```shell
# Open today's daily note
obsidian daily

# Add a task to your daily note
obsidian daily:append content="- [ ] Buy groceries"

# Search your vault
obsidian search query="meeting notes"

# Read the active file
obsidian read

# List all tasks from your daily note
obsidian tasks daily

# Create a new note from a template
obsidian create name="Trip to Paris" template=Travel

# List all tags in your vault with counts
obsidian tags counts

# Compare two versions of a file
obsidian diff file=README from=1 to=3
```

### For developers

Many [[#Developer commands]] are available for plugin and theme development. These commands allow agentic coding tools to automatically test and debug.

```shell
# Open developer tools
obsidian dev:open

# Reload a community plugin you're developing
obsidian plugin:reload id=my-plugin

# Take a screenshot of the app
obsidian dev:screenshot path=screenshot.png

# Run JavaScript in the app console
obsidian dev:eval code="app.vault.getFiles().length"
```

## How to

### Use parameters and flags

Commands can use **parameters** and **flags**. Most commands do not require any parameters or flags. Required parameters are marked as `required`. For example:

```shell
# Create a new note using the default "Untitled" name
obsidian create
```

A **parameter** takes a value, written as `parameter=value`. If the value has spaces, wrap it in quotes:

```shell
# Create a new note called "Note" with content "Hello world"
obsidian create name=Note content="Hello world"
```

A **flag** is a boolean switch with no value. Include it to turn it on, for example `silent` and `overwrite` are flags:

```shell
# Create the note in the background and overwrite any existing content
obsidian create name=Note content="Hello" silent overwrite
```

For multiline content use `\n` for newline. Use `\t` for tab.

```bash
obsidian create name=Note content="# Title\n\nBody text"
```

### Target a vault

If your terminal's current working directory is a vault folder, that vault is used by default. Otherwise, the currently active vault is used.

Use `vault=<name>` to target a specific vault:

```shell
obsidian vault=Notes daily
obsidian vault="My Vault" search query="test"
```

In the TUI, use `vault:open <name>` to switch to a different vault.

### Target a file

Many commands accept `file` and `path` parameters to target a specific file. If neither is provided, the command defaults to the active file.

- `file=<name>` resolves the file using the same link resolution as [[Internal links|wikilinks]], matching by file name without requiring the full path or extension.
- `path=<path>` requires the exact path from the vault root, e.g. `folder/note.md`.

```shell
# These are equivalent if "Recipe.md" is the only file with that name
obsidian read file=Recipe
obsidian read path="Templates/Recipe.md"
```

### Copy output

Add `--copy` to any command to copy the output to the clipboard:

```shell
read --copy
search query="TODO" --copy
```


## General commands

### `help`

Show list of all available commands.

### `version`

Show Obsidian version.

### `reload`

Reload the app window.

### `restart`

Restart the app.


## Bases

Commands for [[Introduction to Bases|Bases]].

### `bases`

List all `.base` files in the vault.

### `base:views`

List views in the current base file.

### `base:create`

Create a new item in the current base view.

```bash
name=<name>        # file name
content=<text>     # initial content

silent             # create without opening
newtab             # open in new tab
```

### `base:query`

Query a base and return results.

```bash
file=<name>                    # base file name
path=<path>                    # base file path
view=<name>                    # view name to query
format=json|csv|tsv|md|paths   # output format (default: json)
```

## Bookmarks

Commands for [[Bookmarks]].

### `bookmarks`

List bookmarks.

```bash
total              # return bookmark count
verbose            # include bookmark types
```

### `bookmark`

Add a bookmark.

```bash
file=<path>        # file to bookmark
subpath=<subpath>  # subpath (heading or block) within file
folder=<path>      # folder to bookmark
search=<query>     # search query to bookmark
url=<url>          # URL to bookmark
title=<title>      # bookmark title
```

## Command palette

Commands for [[Command palette]] and [[Hotkeys]]. This includes all commands registered by plugins.

### `commands`

List available command IDs.

```bash
filter=<prefix>    # filter by ID prefix
```

### `command`

Execute an Obsidian command.

```bash
id=<command-id>    # (required) command ID to execute
```

### `hotkeys`

List hotkeys.

```bash
total              # return hotkey count
all                # include commands without hotkeys
verbose            # show if hotkey is custom
```

### `hotkey`

Get hotkey for a command.

```bash
id=<command-id>    # (required) command ID

verbose            # show if custom or default
```

## Daily notes

Commands for [[Daily notes]].

### `daily`

Open daily note.

```bash
paneType=tab|split|window    # pane type to open in

silent             # return path without opening
```

### `daily:read`

Read daily note contents.

### `daily:append`

Append content to daily note.

```bash
content=<text>     # (required) content to append
paneType=tab|split|window    # pane type to open in

inline             # append without newline
silent             # do not open file
```

### `daily:prepend`

Prepend content to daily note.

```bash
content=<text>     # (required) content to prepend
paneType=tab|split|window    # pane type to open in

inline             # prepend without newline
silent             # do not open file
```

## File history

### `diff`

List or compare versions from local [[File recovery]] and [[Introduction to Obsidian Sync|Sync]]. Versions are numbered from newest to oldest.

```bash
file=<name>          # file name
path=<path>          # file path
from=<n>             # version number to diff from
to=<n>               # version number to diff to
filter=local|sync    # filter by version source
```

**Examples:**

```shell
# List all versions of the active file
diff

# List all versions of a specific file
diff file=Recipe

# Compare the latest version to the current file
diff file=Recipe from=1

# Compare two versions
diff file=Recipe from=2 to=1

# Only show Sync versions
diff filter=sync
```

### `history`

List versions from [[File recovery]] only. See [[#Sync|sync:history]] for the equivalent Sync command.

```bash
file=<name>        # file name
path=<path>        # file path
```

### `history:list`

List all files with local history.

### `history:read`

Read a local history version.

```bash
file=<name>        # file name
path=<path>        # file path
version=<n>        # version number (default: 1)
```

### `history:restore`

Restore a local history version.

```bash
file=<name>        # file name
path=<path>        # file path
version=<n>        # (required) version number
```

### `history:open`

Open file recovery.

```bash
file=<name>        # file name
path=<path>        # file path
```

## Files and folders

### `file`

Show file info (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
```

Example:

```
path       Notes/Recipe.md
name       Recipe
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

List files in the vault.

```bash
folder=<path>      # filter by folder
ext=<extension>    # filter by extension

total              # return file count
```

### `folder`

Show folder info.

```bash
path=<path>              # (required) folder path
info=files|folders|size  # return specific info only
```

### `folders`

List folders in the vault.

```bash
folder=<path>      # filter by parent folder

total              # return folder count
```

### `open`

Open a file.

```bash
file=<name>        # file name
path=<path>        # file path

newtab             # open in new tab
```

### `create`

Create or overwrite a file.

```bash
name=<name>        # file name
path=<path>        # file path
content=<text>     # initial content
template=<name>    # template to use

overwrite          # overwrite if file exists
silent             # create without opening
newtab             # open in new tab
```

### `read`

Read file contents (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
```

### `append`

Append content to a file (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
content=<text>     # (required) content to append

inline             # append without newline
```

### `prepend`

Prepend content after frontmatter (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
content=<text>     # (required) content to prepend

inline             # prepend without newline
```

### `move`

Move or rename a file (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
to=<path>          # (required) destination folder or path
```

### `delete`

Delete a file (default: active file, trash by default).

```bash
file=<name>        # file name
path=<path>        # file path

permanent          # skip trash, delete permanently
```

## Links

Commands for [[Backlinks]] and [[Outgoing links]].

### `backlinks`

List backlinks to a file (default: active file).

```bash
file=<name>        # target file name
path=<path>        # target file path

counts             # include link counts
total              # return backlink count
```

### `links`

List outgoing links from a file (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path

total              # return link count
```

### `unresolved`

List unresolved links in vault.

```bash
total              # return unresolved link count
counts             # include link counts
verbose            # include source files
```

### `orphans`

List files with no incoming links.

```bash
total              # return orphan count
all                # include non-markdown files
```

### `deadends`

List files with no outgoing links.

```bash
total              # return dead-end count
all                # include non-markdown files
```

## Outline

Commands for [[Outline]].

### `outline`

Show headings for the current file.

```bash
file=<name>        # file name
path=<path>        # file path
format=tree|md     # output format (default: tree)

total              # return heading count
```

## Plugins

Commands for [[Core plugins]] and [[Community plugins]].

### `plugins`

List installed plugins.

```bash
filter=core|community  # filter by plugin type

versions               # include version numbers
```

### `plugins:enabled`

List enabled plugins.

```bash
filter=core|community  # filter by plugin type

versions               # include version numbers
```

### `plugins:restrict`

Toggle or check restricted mode.

```bash
on                 # enable restricted mode
off                # disable restricted mode
```

### `plugin`

Get plugin info.

```bash
id=<plugin-id>     # (required) plugin ID
```

### `plugin:enable`

Enable a plugin.

```bash
id=<id>                # (required) plugin ID
filter=core|community  # plugin type
```

### `plugin:disable`

Disable a plugin.

```bash
id=<id>                # (required) plugin ID
filter=core|community  # plugin type
```

### `plugin:install`

Install a community plugin.

```bash
id=<id>            # (required) plugin ID

enable             # enable after install
```

### `plugin:uninstall`

Uninstall a community plugin.

```bash
id=<id>            # (required) plugin ID
```

### `plugin:reload`

Reload a plugin (for developers).

```bash
id=<id>            # (required) plugin ID
```

## Properties

Commands related to [[Properties]].

### `aliases`

List aliases (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path

all                # list all aliases in vault
total              # return alias count
verbose            # include file paths
```

### `properties`

List properties (default: active file).

```bash
file=<name>        # show properties for file
path=<path>        # show properties for path
name=<name>        # get specific property count
sort=count         # sort by count (default: name)
format=yaml|tsv    # output format (default: yaml)

all                # list all properties in vault
total              # return property count
counts             # include occurrence counts
```

### `property:set`

Set a property on a file (default: active file).

```bash
name=<name>                                    # (required) property name
value=<value>                                  # (required) property value
type=text|list|number|checkbox|date|datetime   # property type
file=<name>                                    # file name
path=<path>                                    # file path
```

### `property:remove`

Remove a property from a file (default: active file).

```bash
name=<name>        # (required) property name
file=<name>        # file name
path=<path>        # file path
```

### `property:read`

Read a property value from a file (default: active file).

```bash
name=<name>        # (required) property name
file=<name>        # file name
path=<path>        # file path
```

## Publish

Commands for [[Introduction to Obsidian Publish|Obsidian Publish]].

### `publish:site`

Show publish site info (slug, URL).

### `publish:list`

List published files.

```bash
total              # return published file count
```

### `publish:status`

List publish changes.

```bash
total              # return change count
new                # show new files only
changed            # show changed files only
deleted            # show deleted files only
```

### `publish:add`

Publish a file or all changed files (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path

changed            # publish all changed files
```

### `publish:remove`

Unpublish a file (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
```

### `publish:open`

Open file on published site (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
```

## Random notes

Commands for [[Random note]].

### `random`

Open a random note.

```bash
folder=<path>      # limit to folder

newtab             # open in new tab
silent             # return path without opening
```

### `random:read`

Read a random note (includes path).

```bash
folder=<path>      # limit to folder
```

## Search

Commands for [[Search]].

### `search`

Search vault for text.

```bash
query=<text>       # (required) search query
path=<folder>      # limit to folder
limit=<n>          # max results
format=text|json   # output format (default: text)

total              # return match count
matches            # show match context
case               # case sensitive
```

### `search:open`

Open search view.

```bash
query=<text>       # initial search query
```

## Sync

Commands for [[Introduction to Obsidian Sync|Obsidian Sync]].

### `sync`

Pause or resume sync.

```bash
on                 # resume sync
off                # pause sync
```

### `sync:status`

Show sync status and usage.

### `sync:history`

List sync version history for a file (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path

total              # return version count
```

### `sync:read`

Read a sync version (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
version=<n>        # (required) version number
```

### `sync:restore`

Restore a sync version (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
version=<n>        # (required) version number
```

### `sync:open`

Open sync history (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
```

### `sync:deleted`

List deleted files in sync.

```bash
total              # return deleted file count
```

## Tags

Commands for [[Tags]].

### `tags`

List tags (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path
sort=count         # sort by count (default: name)

all                # list all tags in vault
total              # return tag count
counts             # include tag counts
```

### `tag`

Get tag info.

```bash
name=<tag>         # (required) tag name

total              # return occurrence count
verbose            # include file list and count
```

## Tasks

Commands for task management.

### `tasks`

List tasks (default: active file).

```bash
file=<name>        # filter by file name
path=<path>        # filter by file path
status="<char>"    # filter by status character

all                # list all tasks in vault
daily              # show tasks from daily note
total              # return task count
done               # show completed tasks
todo               # show incomplete tasks
verbose            # group by file with line numbers
```

**Examples:**

```bash
# List all tasks
tasks

# List incomplete tasks
tasks todo

# List completed tasks from a specific file
tasks file=Recipe done

# List tasks from today's daily note
tasks daily

# Count tasks in daily note
tasks daily total

# List tasks with file paths and line numbers
tasks verbose

# Filter by custom status (quote special chars)
tasks 'status=?'
```

### `task`

Show or update a task.

```bash
ref=<path:line>    # task reference (path:line)
file=<name>        # file name
path=<path>        # file path
line=<n>           # line number
status="<char>"    # set status character

toggle             # toggle task status
daily              # daily note
done               # mark as done
todo               # mark as todo
```

**Examples:**

```bash
# Show task info
task file=Recipe line=8
task ref="Recipe.md:8"

# Toggle task completion
task ref="Recipe.md:8" toggle

# Toggle task in daily note
task daily line=3 toggle

# Set task status
task file=Recipe line=8 done      # → [x]
task file=Recipe line=8 todo      # → [ ]
task file=Recipe line=8 status=-  # → [-]
task daily line=3 done            # Mark daily note task as done
```


## Templates

Commands for [[Plugins/Templates|Templates]].

### `templates`

List templates.

```bash
total              # return template count
```

### `template:read`

Read template content.

```bash
name=<template>    # (required) template name
title=<title>      # title for variable resolution

resolve            # resolve template variables
```

### `template:insert`

Insert template into active file.

```bash
name=<template>    # (required) template name
```

**Notes:**
- `resolve` option processes `{{date}}`, `{{time}}`, `{{title}}` variables
- Use `create path=<path> template=<name>` to create a file with a template

## Themes and snippets

Commands for [[Themes]] and [[CSS snippets]].

### `themes`

List installed themes.

```bash
versions           # include version numbers
```

### `theme`

Show active theme or get info.

```bash
name=<name>        # theme name for details
```

### `theme:set`

Set active theme.

```bash
name=<name>        # (required) theme name (empty for default)
```

### `theme:install`

Install a community theme.

```bash
name=<name>        # (required) theme name

enable             # activate after install
```

### `theme:uninstall`

Uninstall a theme.

```bash
name=<name>        # (required) theme name
```

### `snippets`

List installed CSS snippets.

### `snippets:enabled`

List enabled CSS snippets.

### `snippet:enable`

Enable a CSS snippet.

```bash
name=<name>        # (required) snippet name
```

### `snippet:disable`

Disable a CSS snippet.

```bash
name=<name>        # (required) snippet name
```

## Unique notes

Commands for [[Unique note creator]].

### `unique`

Create unique note.

```bash
name=<text>        # note name
content=<text>     # initial content
paneType=tab|split|window    # pane type to open in

silent             # create without opening
```

## Vault

### `vault`

Show vault info.

```bash
info=name|path|files|folders|size  # return specific info only
```

### `vaults`

List known vaults (desktop only).

```bash
total              # return vault count
verbose            # include vault paths
```

### `vault:open`

Switch to a different vault (TUI only).

```bash
name=<name>        # (required) vault name
```

## Web viewer

Commands for [[Web viewer]].

### `web`

Open URL in web viewer.

```bash
url=<url>          # (required) URL to open

newtab             # open in new tab
```

## Wordcount

Commands for [[Word count]].

### `wordcount`

Count words and characters (default: active file).

```bash
file=<name>        # file name
path=<path>        # file path

words              # return word count only
characters         # return character count only
```

## Workspace

Commands for [[Workspace]] and the [[Workspaces]] plugin.

### `workspace`

Show workspace tree.

```bash
ids                # include workspace item IDs
```

### `workspaces`

List saved workspaces.

```bash
total              # return workspace count
```

### `workspace:save`

Save current layout as workspace.

```bash
name=<name>        # workspace name
```

### `workspace:load`

Load a saved workspace.

```bash
name=<name>        # (required) workspace name
```

### `workspace:delete`

Delete a saved workspace.

```bash
name=<name>        # (required) workspace name
```

### `tabs`

List open tabs.

```bash
ids                # include tab IDs
```

### `tab:open`

Open a new tab.

```bash
group=<id>         # tab group ID
file=<path>        # file to open
view=<type>        # view type to open
```

### `recents`

List recently opened files.

```bash
total              # return recent file count
```

## Developer commands

Commands to help you develop [[Community plugins]] and [[Themes]]. Learn more by heading to the [Obsidian Developer Documentation](https://docs.obsidian.md).

### `devtools`

Toggle Electron dev tools.

### `dev:debug`

Attach/detach Chrome DevTools Protocol debugger.

```bash
on                 # attach debugger
off                # detach debugger
```

### `dev:cdp`

Run a Chrome DevTools Protocol command.

```bash
method=<CDP.method>  # (required) CDP method to call
params=<json>        # method parameters as JSON
```

### `dev:errors`

Show captured JavaScript errors.

```bash
clear              # clear the error buffer
```

### `dev:screenshot`

Take a screenshot (returns base64 PNG).

```bash
path=<filename>    # output file path
```

### `dev:console`

Show captured console messages.

```bash
limit=<n>                        # max messages to show (default 50)
level=log|warn|error|info|debug  # filter by log level

clear                            # clear the console buffer
```

### `dev:css`

Inspect CSS with source locations.

```bash
selector=<css>     # (required) CSS selector
prop=<name>        # filter by property name
```

### `dev:dom`

Query DOM elements.

```bash
selector=<css>     # (required) CSS selector
attr=<name>        # get attribute value
css=<prop>         # get CSS property value

total              # return element count
text               # return text content
inner              # return innerHTML instead of outerHTML
all                # return all matches instead of first
```

### `dev:mobile`

Toggle mobile emulation.

```bash
on                 # enable mobile emulation
off                # disable mobile emulation
```

### `eval`

Execute JavaScript and return result.

```bash
code=<javascript>  # (required) JavaScript code to execute
```

## Keyboard shortcuts

These shortcuts are available in the [[#Use the terminal interface|TUI]].

### Navigation

| Action                                                | Shortcut       |
| ----------------------------------------------------- | -------------- |
| Move cursor left                                      | `←` / `Ctrl+B` |
| Move cursor right (accepts suggestion at end of line) | `→` / `Ctrl+F` |
| Jump to start of line                                 | `Ctrl+A`       |
| Jump to end of line                                   | `Ctrl+E`       |
| Move back one word                                    | `Alt+B`        |
| Move forward one word                                 | `Alt+F`        |

### Editing

| Action                  | Shortcut                   |
| ----------------------- | -------------------------- |
| Delete to start of line | `Ctrl+U`                   |
| Delete to end of line   | `Ctrl+K`                   |
| Delete previous word    | `Ctrl+W` / `Alt+Backspace` |

### Autocomplete

| Action                                             | Shortcut    |
| -------------------------------------------------- | ----------- |
| Enter suggestion mode / accept selected suggestion | `Tab`       |
| Exit suggestion mode                               | `Shift+Tab` |
| Enter suggestion mode (from fresh input)           | `↓`         |
| Accept first/selected suggestion (at end of line)  | `→`         |

### History

| Action                                                     | Shortcut       |
| ---------------------------------------------------------- | -------------- |
| Previous history entry / navigate suggestions up           | `↑` / `Ctrl+P` |
| Next history entry / navigate suggestions down             | `↓` / `Ctrl+N` |
| Reverse history search (type to filter, `Ctrl+R` to cycle) | `Ctrl+R`       |

### Other

| Action                                                 | Shortcut            |
| ------------------------------------------------------ | ------------------- |
| Execute command or accept suggestion                   | `Enter`             |
| Undo autocomplete / exit suggestion mode / clear input | `Escape`            |
| Clear screen                                           | `Ctrl+L`            |
| Exit                                                   | `Ctrl+C` / `Ctrl+D` |

## Troubleshooting

If you are having trouble running Obsidian CLI, make sure you are using the latest [[Update Obsidian|Obsidian installer version]] (1.11.7) and the latest [[Early access versions|early access version]] (1.12).

### Windows

Windows requires using a terminal redirector that connects to Obsidian to stdin/stdout properly. This is unfortunately necessary because Obsidian normally runs as a GUI app which is incompatible with terminal outputs.

To get this file, go to the official Obsidian Discord in the `#insider-desktop-release` channel. Requires a [[Catalyst license]].

- Download the `Obsidian.com` file [here](https://discord.com/channels/686053708261228577/716028884885307432/1470798383085261057).
- Place the `Obsidian.com` file in the folder where you installed the `Obsidian.exe` file, which could be one of these paths:
	- `C:\Users\<YourUsername>\AppData\Local\Programs\obsidian\`
	- `C:\Users\<YourUsername>\AppData\Local\obsidian\`