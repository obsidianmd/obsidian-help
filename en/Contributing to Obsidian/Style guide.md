---
aliases:
  - Obsidian Style Guide
description: This page explains the style guide for writing our support documentation.
mobile: true
permalink: style-guide
publish: true
---

The Obsidian documentation follows the style guidelines listed on this page. These guidelines are based on industry best practices, particularly the [Google developer documentation style guide](<https://developers.google.com/style>) and [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/). For edge cases not covered below, consult those external guides as secondary references.

> [!tip]- Contribute
> Most of the documentation existed before this style guide did.
> 
> If you find any violations of this style guide, please [create an issue](https://github.com/obsidianmd/obsidian-docs/issues/new) and submit a pull request to [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminology and grammar

### Language style

For our English documentation, it is recommended to use [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) to better serve our worldwide audience and to assist with [[#Translations]]. This means:

- Avoiding idioms and culturally-specific expressions
- Using active voice and direct sentence construction
- Preferring simple, common words over complex terminology
- Being explicit rather than implied
- For spelling conventions, use American English (e.g., 'organize' not 'organise').

### Terms

- Prefer "keyboard shortcut" over "hotkey". Use Hotkey when referring to the specific feature.
- Prefer "the Obsidian app" on mobile, and "the Obsidian application" on desktop.
- Prefer "sync" or "syncing" over "synchronise" or "synchronising".
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
	- For mobile-specific instructions, "tap" is acceptable when describing touch interactions as "click" is not available.
- Prefer "sidebar" over "side bar".
- Prefer "perform" over "invoke" and "execute" when referring to commands or actions.

When referring to multiple UI interactions in a sequence, use the → (U+2192) symbol. For example, "**[[Settings]] → Community plugins**".

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

- Select **[[Settings]]** in the bottom-left corner.
- Select **[[Settings]]** in the bottom left.

**Not recommended:**

- Select **[[Settings]]** in the bottom left corner.
- Select **[[Settings]]** in the bottom-left.

Prefer "upper-left" and "upper-right" over "top-left" and "top-right".

Don't indicate a direction when referring to settings. The location of the settings control depends on the device.

**Recommended:**

- Next to **Pick remote vault**, select **Choose**.

**Not recommended:**

- To the right of **Pick remote vault**, select **Choose**.

When describing vertical direction in UI elements, use "above" and "below" for spatial relationships. Avoid "up" and "down" as they're ambiguous in different contexts.

**Recommended:**

- The search box appears above the file list.
- Additional options are available below.

**Not recommended:**

- The search box is up from the file list.
- More options are down below.

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

### Key names and keyboard shortcuts

When referring to keyboard keys and shortcuts, use consistent notation.

**Individual key names:**

When referring to a character on the keyboard by name, add the character between parentheses right after the name.

**Recommended:**

- Press the hyphen (-) key to add a dash.
- Use the question mark (?) to search.

**Not recommended:**

- Press the hyphen key to add a dash.
- Use the ? to search.
- Add a `-` in front of the word.

**Keyboard shortcuts:**

Format keyboard shortcuts with no spaces around the plus sign. When a shortcut differs between operating systems, specify both.

**Recommended:**

- Press `Ctrl+Z` (Windows) or `Command+Z` (macOS) to undo.
- Press `Escape` to close this window.
- Use `Tab` to move between fields.

**Not recommended:**

- Press `Cmd+Z` to undo.
- Press `Ctrl + Z` (with spaces) to undo.
- Press `Ctrl/Cmd+Z` to undo.

For shortcuts that are identical across all platforms, you don't need to specify the OS. If you're unsure whether a shortcut differs by platform, specify the OS to be safe. Windows and Linux typically use the same shortcuts.

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

**Em dashes in lists:**

Use em dashes (—) to separate bolded terms from their descriptions in bullet lists. Do not use em dashes in simple nested bullet lists with links.

**Recommended:**

- **View menu** — create, edit, and switch views.
- **Calculate values** — add prices, compute totals, or perform math operations.

**Not recommended:**

- [[Create a base]] — Learn how to create and embed a base.

### Images

Use "**width** x **height** pixels" for describing image or screen dimensions.

**Example:**

Recommended image dimensions: 1920 x 1080 pixels.

## Information structure

### Callout types

Use callouts strategically to highlight specific types of information:

**Tip** (`[!tip]-`) - Practical advice or best practices that enhance the user's workflow. Use for shortcuts, workarounds, or non-essential but helpful information. These callouts start out collapsed.

**Info** (`[!info]+`) - Additional context, background information, or clarifications. Use when information adds understanding but isn't required to complete a task. These callouts start out open.

**Warning** (`[!warning]+`) - Important cautions that prevent data loss, errors, or unintended consequences. Use sparingly for genuinely risky situations. These callouts should never be collapsed.

**Example** (`[!example]-`) - General asides or supplementary details. Use for tangential information that some users may find relevant. These callouts start out collapsed.

**Examples:**
```md
> [!tip]- Use keyboard shortcuts
> You can speed up your workflow by memorizing the most-used shortcuts.

> [!info]+ This is a paid addon
> This feature requires a paid subscription to use.

> [!warning]+ This action cannot be undone
> Deleting a vault is permanent. Consider exporting your notes first.

> [!example]- Advanced usage
> You can also configure this setting via the Graph menu.
```

### Lists vs. prose

Use lists when presenting discrete items that don't have strong sequential or causal relationships. Use prose and paragraphs when items build on each other, require explanation, or benefit from narrative flow.

**Use a list for:**
- A set of unrelated features
- Installation requirements
- Configuration options
- Troubleshooting steps

**Use prose for:**
- Explanations of how something works
- Workflows with dependencies
- Conceptual overviews
- Guidance requiring context

### Tables

Use tables to compare features, versions, or related data points where alignment aids understanding. Avoid tables for simple lists or single-column data.

**Good use case:**

| Feature | Mobile | Desktop |
|---------|--------|---------|
| Sync | Yes | Yes |
| Plugins | No | Yes |
| Themes | Limited | Full |

### Cross-references

Use internal wiki links (`[[Note name]]`) liberally to help users navigate related topics. However, avoid over-linking:

- Don't link the same term multiple times in a single page
- Link only when the referenced page provides significant added context
- Use descriptive link text when helpful: `[[Note name#Section|descriptive text]]`

**Example:**

First mention: "Learn about [[Introduction to Obsidian Sync|Obsidian Sync]] to keep your vault updated across devices."
Later mention: "You can configure Sync for each device separately."

### Platform-specific content

When documenting features that differ between platforms, use section headings to organize the content.

Use `Desktop` and `Mobile` as subsection headings to separate platform-specific instructions or features.

**Recommended:**
```md
## Customizing the ribbon

### Desktop

On the desktop version, you can customize the ribbon as follows:

- Rearrange the order of ribbon actions by dragging and dropping the icons.
- To hide specific actions, right-click on an empty space and uncheck the actions you want to hide.

### Mobile

In the mobile version, you can customize the ribbon through settings:

1. Open **[[Settings]]**.
2. Navigate to **Appearance**.
3. Click **Manage** under **Ribbon menu**.
```

> [!info]+ When to create sections?
> Only create separate sections if content significantly differs. If instructions are largely the same with minor variations, use inline notes instead.

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

> [!info] Tools for optimizing images
> Here are a some recommended programs for reducing the size of your images.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> We recommend an optimization rate of 65-75%.

## Layout

### Broken links

Before submitting your Pull Request, please check for any broken links in the documentation of the translation you are working on, and correct them. Broken links can occur naturally over time, so verifying their accuracy helps maintain the quality of the documentation.

You can check for broken links using [[Community plugins]] or tools available in your IDE.

### Descriptions

This documentation is edited on GitHub and hosted online via [[Introduction to Obsidian Publish|Obsidian Publish]], which includes [[Social media link previews#Description|descriptions]] for social cards and other [[SEO]] elements.

If the page you are working on does not have a `description` [[Properties|property]], please add one. The description should be 150 characters or fewer and provide an objective summary of the page's content.

**Good**: Learn to create templates that capture and organize web page metadata automatically with Web Clipper.
**Could be tweaked**: Learn how to create templates that automatically capture and organize metadata from web pages with Web Clipper.

### Directions

When writing or rewriting [[#Instructions]] on how to perform an action within the app, be sure to include steps for both the mobile and desktop versions.

If you do not have access to a mobile or desktop device, please mention this when submitting your Pull Request.

## Translations

  Translate the entirety of the content when completing a translation. This includes and is not limited to:

- Note names
- Folder names
- Aliases
- Attachment names
- Alt link text
