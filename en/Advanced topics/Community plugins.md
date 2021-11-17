Obsidian allows developers to write community plugins to extend Obsidian's functionality.

Right now, the plugin API is in alpha status. This means any part of the API could introduce breaking changes in a future release.

### For developers

For instructions on creating new plugins, see [our sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin).

For documentation on the API, check out [our plugin API repo](https://github.com/obsidianmd/obsidian-api).

After you created your plugin, you can add it to our community plugin marketplace by creating a pull request in [our releases repo](https://github.com/obsidianmd/obsidian-releases). Refer to the sample plugin on how to release updates for your plugin.

### For users

#### Safe Mode

By default, Obsidian has Safe Mode turned on to protect you from potential harm. Under Safe Mode, no community plugin will run.

Please be aware that community plugins can access files on your computer, connect to the internet, and even install additional programs. To read more about plugin security, [[#Plugin security|see here]].

In order to install community plugins, you need to turn off Safe Mode in Settings -> Community plugin -> Safe Mode.

#### Discover and install community plugins

After disabling Safe Mode, you can find community plugins created by the community in Settings -> Community plugin -> Community plugins -> Browse.

On this page, you can browse plugins by popularity, or search for specific plugins. Click on a plugin to see details and instruction from the plugin author. In the details page, you can click "Install" to install a plugin.

After installing, you can then find the installed plugins under Settings -> Community plugin. They need to be enabled in order to take effect. You can also uninstall them there.

### Plugin security

Thanks for trusting Obsidian with your data! It means a lot to us, and we take security very seriously. That includes community plugins too.

Due to technical reasons with our platform, we're unable to restrict plugins to a specific permission or access level. Since we offer Obsidian for free, currently we're unable to manually review each plugin.

The good news is that Obsidian has an amazing and passionate community, so we rely on community trust to ensure security of community plugins.

In general, you should be able to trust most of the popular plugins from the community. We require all community community plugins to be open sourced on GitHub. **If you're working with sensitive data, we recommend you to inspect the plugin code before installing it, so that your security needs are met.** You can find a link to the plugin repository on the plugin detail page.

If you find any security flaws with community plugins, contact the plugin author by adding an issue on GitHub. If you believe the plugin is malicious, contact us to get the plugin investigated and removed.
