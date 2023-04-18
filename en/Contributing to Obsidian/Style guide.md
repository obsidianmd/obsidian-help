The Obsidian documentation uses the [Google developer documentation style guide](https://developers.google.com/style). For any topics not covered by the Google style guide, use the [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/).

This page lists any deviances from the Google style guide, or terminology worth highlighting.

> [!tip] Contribute
> Most of the documentation existed before this style guide did. If you find any violations of this style guide, please [create an issue](https://github.com/obsidianmd/obsidian-docs/issues/new) or submit a pull request to [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminology

- Prefer "keyboard shortcut" over "hotkey". Use Hotkey when referring to the specific feature.
- Prefer "the Obsidian app" on mobile, and "the Obsidian application" on desktop.
- Prefer "sync" or "syncing" over "synchronize" or "synchronizing".
- Prefer "search term" over "search query".
- Prefer "heading" over "header" when referring to a text that introduces a section.
- Prefer "maximum" over "max" and "minimum" over "min".

### Product names

Obsidian product names start with "Obsidian", for example "Obsidian Publish" and "Obsidian Sync".

If a paragraph becomes overly repetitive, you can use the short form in subsequent references.

For example:

_To allow device-specific configuration, Obsidian Sync doesn't sync its own settings. You need to configure Sync for each of your devices._

### UI and interactions

- Prefer "select" over "tap" or "click".
- Prefer "sidebar" over "side bar".
- Prefer "perform" over "invoke" and "execute" when referring to commands or actions.

When referring to multiple UI interactions in a sequence, use the → (U+2192) symbol. For example, "**Settings → Community plugins**".

### Notes, files, and folders

- Use "note" when referring to a Markdown file in the vault.
- Use "file" when referring to other file extensions than Markdown.
- Prefer "note name" over "note title".
- Prefer "active note" over "current note".
- Prefer "folder" over "directory".
- Prefer "file type" over "file format", unless specifically referring to the data format of the file content.

When moving between notes, use "open" if the destination is hidden, and "switch" if both source and destination notes are open in separate splits.

## Reference documentation for settings

When possible, any settings should be documented within Obsidian using a descriptive text. Avoid documenting a specific setting in Obsidian Help unless:

- It requires more in-depth knowledge on how and when to use it.
- It's commonly misused or asked about.
- It _drastically_ changes the user experience.

Consider using a tip callout if you want to draw attention to a specific setting.

## Directional terms

Hyphenate directional terms when using them as adjectives. Avoid hyphenation when direction is used as a noun.

**Recommended:**

- Select **Settings** in the bottom-left corner.
- Select **Settings** in the bottom left.

**Not recommended:**

- Select **Settings** in the bottom left corner.
- Select **Settings** in the bottom-left.

Prefer "upper-left" and "upper-right" over "top-left" and "top-right".

Don't indicate a direction when referring to settings. The location of the settings control depends on the device.

**Recommended:**

- Next to **Pick remote vault**, click **Choose**.

**Not recommended:**

- To the right of **Pick remote vault**, click **Choose**.

## Examples

Prefer realistic examples over nonsense terms.

**Recommended:**

- `task:(call OR schedule)`

**Not recommended:**

- `task:(foo OR bar)`

## Key names

When referring to a character on the keyboard by name, add the character between parentheses right after the name:

**Recommended:**

- Add a hyphen (-) in front of the word.

**Not recommended:**

- Add a hyphen in front of the word.
- Add a `-` in front of the word.

## Markdown

Use newlines between Markdown blocks:

**Recommended:**

```md
# Heading 1

This is a section.

1. First item
2. Second item
3. Third item
```

**Not recommended:**

```md
# Heading 1
This is a section.
1. First item
2. Second item
3. Third item
```

## Images

Use "**width** x **height** pixels" for describing image or screen dimensions.

**Example:**

Recommended image dimensions: 1920 x 1080 pixels.
