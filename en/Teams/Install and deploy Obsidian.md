---
cssclasses:
  - soft-embed
---

This page details how to install and manage the Obsidian installation in your workplace.

## Installing and updating Obsidian

Download your preferred version of Obsidian from our [GitHub releases page](https://github.com/obsidianmd/obsidian-releases/releases). Each release includes a link to [our changelog](https://obsidian.md/changelog/).

> [!tip] For Windows users who need a system installer, use the `-allusers.exe` file on the releases page.

If automatic updates are enabled, future updates will install as allowed. Additionally, we recommend periodically completing [[Update Obsidian#Installer updates|installer updates]] to receive the latest electron updates, including security fixes.

If you are looking how to limit network access to Obsidian during this process, review [[Security considerations#Network and access|network and access]] instead.

## Customizing Obsidian

One of Obsidian's strength lies in its extensibility. With an extensive API and a large community base, Obsidian offers access to numerous community-made plugins, themes, and complementary tools, including Command Line Interfaces (CLIs).

For security-related questions concerning these subjects, please refer to our [[Security considerations]] page.

**Configuration folders**
A [[Configuration folder]] is the designated folder where an Obsidian [[Glossary#Vault|vault]] stores its application settings. By default, this folder is named `.obsidian`, but you have the flexibility to [[Configuration folder#Changing your configuration folder|change the configuration folder]] name according to your preference.

We recommend creating a standardized template of the configuration folder to be deployed across your team's devices.

**Plugins**
A [[Core plugins|Core plugin]] is an optional feature within the base Obsidian application, created by the Obsidian Team. These features are integrated within the existing codebase. 

A [[Community plugins|Community plugin]] is a third-party optional feature added to the Obsidian application through the plugin, and can be added to the application through the community store. If installing manually, community plugins need to be installed into the `.obsidian/plugins` folder for Obsidian to read them. 

Community plugins operate through a combination of their own code and [Obsidian's API](https://github.com/obsidianmd/obsidian-api).

**Themes and snippets**
A [[CSS snippets|Snippet]] is a `.css` file that visually modifies one or more aspects of the Obsidian interface. In some cases, it can also add functional enhancements, such as CSS animations like transitions. To be recognized by Obsidian, snippets must be inserted into `.obsidian/snippets`.

A [[Themes|Theme]] is a `.css` file that visually alters multiple aspects of the Obsidian interface to create a unified look. Themes, like plugins, can be downloaded from our community store. When installing manually, themes need to be placed into `.obsidian/themes`.

Many themes utilize the community plugin [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) to further enhance the features and customizability of their theme.

## Frequently asked questions

For questions regarding account management and security, please refer to [[Security considerations#Account security|account security]].

### Deployment

**Can I deploy licenses across multiple installations?**
Currently, we do not support deploying licenses via a deployment script, such as in a `.json` file. If you're interested in this feature for your team, please submit a [feature request](https://forum.obsidian.md/c/feature-requests/8). 

**Can Obsidian lock certain features or configurations via a setting or an application flag?**
No, this capability is not available at this time. If you're interested in this feature for your team, please submit a [feature request](https://forum.obsidian.md/c/feature-requests/8). 
