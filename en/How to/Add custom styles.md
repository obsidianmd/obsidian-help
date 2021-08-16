When you want to add custom styles to your vault, there are two main ways to do this:

## Vault styles

### Themes

Themes allow you to toggle the appearance of your vault with a dropdown menu once they have been added to your vault's theme directory.

This configuration can be found in `Settings` => `Appearance` => `Themes` section of your vault settings.

### Create a custom theme

If you are creating your own theme, you can do this by:

1. Creating your custom theme CSS file in the themes directory `YOUR_VAULT/.obsidian/themes/YOUR_CUSTOM_THEME.css`
2. Enabling it in the theme dropdown under `Settings` => `Appearance` => `Themes`

For more information on how to customize styles of the graph, you can find more information in [[Graph view]].

### Use Themes and/or CSS snippets

You can find this configuration in `Settings` => `Appearance`. You can choose a community theme or set the theme you developed yourself. If you set a community theme, it will be automatically placed in the correct folder. If you develop your own theme, you have to put it in the shown folder location yourself.

CSS snippets are supposed to be small pieces of CSS for small changes you want to make/things you want to add. These snippets have to be placed in the shown directory.

You can go to the respective directories by clicking on the folder buttons. If the folder isn't created yet, it will be. In case your snippets or theme don't show up after you've put them there, you can click the button next to the folder icon to refresh the list.

## Obsidian Publish styles

At this time, [[Obsidian Publish]] is unable to automatically detect the vault's configured [[Add custom styles#Themes|theme]] and publish the respective styles. 

A workaround for this limitation is to:

1. Go into `YOUR_VAULT/.obsidian/themes/CURRENT_THEME_FOLDER`;
2. Copy the primary CSS file `CURRENT_THEME.css` in the folder;
3. Paste it in the root directory of your vault (`YOUR_VAULT`);
4. Rename the CSS file as `publish.css`;
5. In the publish plugin, upload the `publish.css` file;
6. If your CSS doesn't take effect in a few minutes, try refreshing the browser cache as the stale CSS might have been cached.
