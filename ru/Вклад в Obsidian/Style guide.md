---
aliases:
  - Obsidian Style Guide
---
The Obsidian documentation uses the [Google developer documentation style guide](https://developers.google.com/style). For any topics not covered by the Google style guide, use the [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/).

This page lists any deviations from the Google style guide, or terminology worth highlighting.

> [!tip] Contribute
> Most of the documentation existed before this style guide did. If you find any violations of this style guide, please [create an issue](https://github.com/obsidianmd/obsidian-docs/issues/new) or submit a pull request to [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminology and grammar

### Terms

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

- Use **bold** to indicate button text
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

### Reference documentation for settings

When possible, any settings should be documented within Obsidian using a descriptive text. Avoid documenting a specific setting in Obsidian Help unless:

- It requires more in-depth knowledge on how and when to use it.
- It's commonly misused or asked about.
- It _drastically_ changes the user experience.

Consider using a tip callout if you want to draw attention to a specific setting.

### Directional terms

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

- Next to **Pick remote vault**, select **Choose**.

**Not recommended:**

- To the right of **Pick remote vault**, select **Choose**.

### Instructions

Use imperatives for the names of guides, section headings, and step-by-step instructions. The imperative mood is concise and action-oriented, which is more straightforward for users following instructions.

- Prefer "Set up" over "Setting up"
- Prefer "Move a file" over "Moving a file"
- Prefer "Import your notes" over "Importing your notes"

### Sentence case

Prefer *sentence case* over *title case* for headings, buttons, and titles. When referencing UI elements always match the case of the text in the UI.

**Recommended:**

- How Obsidian stores data

**Not recommended:**

- How Obsidian Stores Data
### Examples

Prefer realistic examples over nonsense terms.

**Recommended:**

- `task:(call OR schedule)`

**Not recommended:**

- `task:(foo OR bar)`

### Key names

When referring to a character on the keyboard by name, add the character between parentheses right after the name:

**Recommended:**

- Add a hyphen (-) in front of the word.

**Not recommended:**

- Add a hyphen in front of the word.
- Add a `-` in front of the word.

### Markdown

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

### Images

Use "**width** x **height** pixels" for describing image or screen dimensions.

**Example:**

Recommended image dimensions: 1920 x 1080 pixels.

## Icons and images

Include icons and images when they make it easier to explain things that are hard to describe with words, or when you need to show important parts of the Obsidian application. You can save images in the `Attachments` folder.

- The image should make the text it accompanies easier to understand.

 **Example**: Once enabled, the [[Word count]] plugin will create a new entry on your bottom statusbar.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Images should be in either `.png` or `.svg` format.
- If an image looks too big in the note, make it smaller outside of Obsidian, or adjust its dimensions as explained in [[Embed files#Embed an image in a note|embedding an image in a note]].
- In rare cases, you may want to place especially large or complex images in a [[Callouts#Foldable callouts|folded callout]]. 
- For pop-up windows or modals, the image should show the entire Obsidian application window.
 ![[Style-guide-modal-example.png#interface]]

### Icons

[Lucide](https://lucide.dev/icons/) and custom Obsidian icons can be used alongside detailed elements to provide a visual representation of a feature.

**Example:** In the ribbon on the left, select **Create new canvas** ( ![[lucide-layout-dashboard.svg#icon]] ) to create a canvas in the same folder as the active file.

**Guidelines for icons**

- Store icons in the `Attachments/icons` folder.
- Add the prefix `lucide-` before the Lucide icon name.
- Add the prefix `obsidian-icon-` before the Obsidian icon name.

**Example:** The icon for creating a new canvas should be named `lucide-layout-dashboard`.

- Use the SVG version of the icons available.
- Icons should be `18` pixels in width, `18` pixels in height, and have a stroke width of `1.5`. You can adjust these settings in the SVG data.

> [!info]- Adjusting size and stroke in an SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="WIDTH" height="HEIGHT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STROKE-WIDTH" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Utilize the `icon` anchor in embedded images, to tweak the spacing around the icon so that it aligns neatly with the text in the vicinity.
- Icons should be surrounded by parenthesis. ( ![[lucide-cog.svg#icon]] )

**Example**: `( ![[lucide-cog.svg#icon]] )`

### Image anchor tags

Image anchors tags are available to add decorative changes to the embedded images. 

> [!warning] Live preview warning
> The icon anchor tags will not display correctly in **Live preview.** Use **Reading view** to confirm the anchor tag has been applied. 

**Icon**

`![[lucide-menu.svg#icon]]`

The icon anchor tag ensures correct vertical alignment for icons used to indicate interface elements.

The first menu icon uses the anchor tag ( ![[lucide-menu.svg#icon]] ), while the second menu icon ( ![[lucide-menu.svg]] ) does not.


**Interface**

`![[Vault picker.png#interface]]`

The interface anchor tag adds a decorative box shadow around the image. In the first image, the interface anchor tag is applied.
![[Vault picker.png#interface]]
In contrast, the second image does not have the interface anchor applied.

![[Vault picker.png]]

**Outline**

`![[Backlinks.png#outline]]`

The outline anchor tag adds a subtle border around the image. In the first image, the outline anchor tag is applied. 

> [!tip] Observe the lower left of the image to see the difference.

![[Backlinks.png#outline]]

The second image lacks the outline anchor tag.

![[Backlinks.png]]

### Optimization

Images slow the loading time of the page, and take valuable [[Introduction to Obsidian Publish|Publish]] storage space. Optimizing images allows a reduction in file size, but maintains the visual integrity of the image. 

Both images and icons should be optimized.


> [!success] Tools for optimizing images
> Here are a some recommended programs for reducing the size of your images.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> We recommend an optimization rate of 65-75%.

## Translations

  Translate the entirety of the content when completing a translation. This includes and is not limited to:

- Note names
- Folder names
- Aliases
- Attachment names
- Alt link text