Obsidian allows developers to write third-party plugins to extend Obsidian's functionality.

Right now, the plugin API is in alpha status. This means any part of the API could introduce breaking changes in a future release.

### For developers

For instructions on creating new plugins, see [our sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin).

For documentation on the API, check out [our plugin API repo](https://github.com/obsidianmd/obsidian-api).

After you created your plugin, you can add it to our community plugin marketplace by creating a pull request in [our releases repo](https://github.com/obsidianmd/obsidian-releases). Refer to the sample plugin on how to release updates for your plugin.

### For users

#### Safe Mode

By default, Obsidian has Safe Mode turned on to protect you from potential harm. Under Safe Mode, no third-party plugin will run.

Please be aware that third-party plugins can access files on your computer, connect to the internet, and even install additional programs. To read more about plugin security, [[#Plugin security|see here]].

In order to install third-party plugins, you need to turn off Safe Mode in Settings -> Third-party plugin -> Safe Mode.

#### Discover and install community plugins

After disabling Safe Mode, you can find third-party plugins created by the community in Settings -> Third-party plugin -> Community plugins -> Browse.

On this page, you can browse plugins by popularity, or search for specific plugins. Click on a plugin to see details and instruction from the plugin author. In the details page, you can click "Install" to install a plugin.

After installing, you can then find the installed plugins under Settings -> Third-party plugin. They need to be enabled in order to take effect. You can also uninstall them there.

### Plugin security

Thanks for trusting Obsidian with your data! It means a lot to us, and we take security very seriously. This includes third-party plugins that are accessible through Obsidian as a community plugin.

We conduct a code review for the initial release of all community plugins for performance, but cannot guarantee the security of third-party plugins. Since we offer Obsidian for free, we are unable to manually review each plugin update after initial release.

In general, you should be able to trust popular plugins from the community. Obsidian has an amazing and passionate community, and we rely on community trust and review to ensure the security of third-party plugins.

We require all community third-party plugins to be open sourced on GitHub. **If you're working with sensitive data, we recommend you to inspect the plugin code before installing it, so that your security needs are met.** You can find a link to the plugin repository on the plugin detail page.

If you find any security flaws with third-party plugins, let us know on Discord and contact the plugin author by adding an issue on their GitHub repo. If you believe the plugin is malicious, contact us directly to investigate and remove the plugin.
