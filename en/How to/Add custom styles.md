# Vault Styles

If you want to add custom styles to your vault, you can either use **Community Themes** or your own **CSS Snippets**.

### Community Themes

**Community Themes** allow you to toggle the appearance of your vault with a dropdown menu once they have been added to your vault's theme directory. Choose a theme under `Settings` -> `Appearance` -> `Themes`.

### CSS Snippets

1. Create your custom CSS file
2. Place your custom CSS file in the `themes` directory: `YOUR_VAULT/.obsidian/themes/YOUR_CUSTOM_THEME.css`
3. Enable it under `Settings` -> `Appearance` -> `CSS snippets`

### Use 'obsidian.css'

> This is currently marked as a legacy setting.

This configuration can be found in `Settings` > `Appearance` > `Apply custom CSS` as a toggle in your vault settings.

## Obsidian Publish styles

At this time, [[Obsidian Publish]] is unable to automatically detect the vault's configured [[Add custom styles#Themes|theme]] and publish the respective styles. 

A workaround for this limitation is to:

1. Go into `YOUR_VAULT/.obsidian/themes/CURRENT_THEME_FOLDER`;
2. Copy the primary CSS file `CURRENT_THEME.css` in the folder;
3. Paste it in the root directory of your vault (`YOUR_VAULT`);
4. Rename the CSS file as `publish.css`;
5. In the publish plugin, upload the `publish.css` file;
6. If your CSS doesn't take effect in a few minutes, try refreshing the browser cache as the stale CSS might have been cached.

# Graph styles

Since the graph is rendered using `<canvas>` and WebGL, [[Customizing CSS|CSS]] is unable to affect things like nodes and links. To customize graph view, we have provided a way to convert CSS colors into WebGL commands.

#### The following CSS classes are supported:

```
.graph-view.color-fill
.graph-view.color-fill-tag (theme-dependent)
.graph-view.color-fill-attachment (theme-dependent)
.graph-view.color-arrow
.graph-view.color-circle
.graph-view.color-line
.graph-view.color-text
.graph-view.color-fill-highlight
.graph-view.color-line-highlight
.graph-view.color-fill-unresolved
```

\* theme-dependent means you may have to add `.theme-dark` or `.theme-light` to style it for different themes. See [[Graph view#Custom CSS#Defaults]] for explanation.

#### The following CSS rules are supported:

```css
 .graph-view.color-class {
	/* Supports all CSS color directives, like #HEX, rgb and rgba */
	color:   #FFF;
	color:   #FFFFFF;
	color:   rgb(0, 0, 0);
	color:   rgba(0, 0, 0, 1);
	/* Opacity (similar to rgba) will make the color transparent */
	opacity: 0.5;
}
```

#### Defaults:

These CSS rules are the ones Obsidian use by default. You may override any of them using an identical or [more specific](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) CSS rule. This applies especially to `.color-fill-tag` and `.color-fill-attachment` As a last resort, add `!important` to the end of your rule.

```css
.graph-view.color-fill,
.theme-dark .graph-view.color-fill-tag,
.theme-light .graph-view.color-fill-tag,
.theme-dark .graph-view.color-fill-attachment,
.theme-light .graph-view.color-fill-attachment,
.graph-view.color-arrow,
.graph-view.color-circle,
.graph-view.color-line,
.graph-view.color-text,
.graph-view.color-fill-highlight,
.graph-view.color-line-highlight,
.graph-view.color-fill-unresolved {}
```