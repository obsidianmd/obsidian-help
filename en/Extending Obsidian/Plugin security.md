The Obsidian team takes security seriously. This page explains the risks involved when installing community plugins, and what the Obsidian team does to address them.

## Restricted mode

By default, Obsidian runs in Restricted Mode to prevent third-party code execution. Only disable Restricted mode if you trust the authors of the plugins that you install.

To turn off Restricted mode:

1. Open **Settings**.
2. In the side menu, select **Community plugins**.
3. Select **Turn on community plugins**.

To turn on Restricted mode:

1. Open **Settings**.
2. In the side menu, select **Community plugins**.
3. Next to **Restricted mode**, select **Turn on**.

Installed plugins remain in your vault even if you turn on Restricted mode, but are ignored by Obsidian.

## Plugin capabilities

Due to technical limitations, Obsidian cannot reliably restrict plugins to specific permissions or access levels. This means that plugins will inherit Obsidian's access levels. As a result, consider the following examples of what community plugins can do:

- Community plugins can access files on your computer.
- Community plugins can connect to internet.
- Community plugins can install additional programs.

> [!tip] 
> If you're working with sensitive data and wish to install a community plugin, we recommend that you perform an independent security audit on the plugin before using it.

## Plugin review process

Community plugins undergo an initial review when they're submitted to the plugin store. All plugins must adhere to [Obsidian Developer Policies](https://docs.obsidian.md/Developer+policies).

The Obsidian team is small and unable to manually review every new release of community plugins. Instead, we rely on the help of the community to identify and report issues with plugins.

- If you discover any minor security vulnerabilities in a community plugin, refer to the plugin author's `security.md` or `readme.md` for how to report those. For Critical category flaws, please report the issue to [[Help and support#Contact Obsidian support|Obsidian support]] as well. 
- If you suspect that a community plugin is malicious, report it to [[Help and support#Contact Obsidian support|Obsidian support]], or by sending a DM to our moderators.


