When you want to add custom styles to your vault, there are two main ways to do this:

## Vault Styles

### Themes

Themes allow you to toggle the appearance of your vault with a dropdown menu once they have been added to your vault's theme directory.

This configuration can be found in `Settings` > `Appearance` > `Themes` section of your vault settings.

### Create a Custom Theme

If you are creating your own theme, you can do this by:

1. Creating your custom theme CSS file in the themes directory `YOUR_VAULT/.obsidian/themes/YOUR_CUSTOM_THEME.css`
2. Enabling it in the theme dropdown under `Settings` > `Appearance` > `Themes`

For more information on how to customize styles of the graph, you can find more information in [[Graph view]].

### [[Custom CSS]]

> This is currently marked as a legacy setting.

This configuration can be found in `Settings` > `Appearance` > `Apply custom CSS` as a toggle in your vault settings.

For more information, visit the [[Custom CSS]] plugin page.

## [[Publish|Obsidian Publish]] Styles

_Last Updated: 2021-01-10_

At this time, [[Obsidian Publish]] is unable to automatically detect the vault's configured [[Add custom styles#Themes|Theme]] and publish the respective styles. 

A workaround for this limitation is to:

1. Go into `YOUR_VAULT/.obsidian/themes/CURRENT_THEME_FOLDER`
2. Copy the primary CSS file `CURRENT_THEME.css` in the folder
3. Paste it in the root directory of your vault (`YOUR_VAULT`)
4. Rename the CSS file as `publish.css`
