---
localized: false
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian runs as a local application on each of your team member's devices. It is designed to work both online and offline, securely and privately, and give you total control over your team's data. Obsidian is not available as a web-based application, therefore you will need to deploy the app to your team members.

## Install and update Obsidian

Your team can download Obsidian from our [Download page](https://obsidian.md/download). Releases are also available on our [GitHub releases page](https://github.com/obsidianmd/obsidian-releases/releases) which includes links to [the changelog](https://obsidian.md/changelog/).

> [!tip] For Windows users who need a system installer, the Universal `.exe` includes the option to install Obsidian for all users.

If automatic updates are enabled in the app, future versions will be installed automatically when users restart Obsidian. Additionally, we recommend periodically performing [[អាប់ដេត Obsidian#Installer updates|installer updates]] to receive the latest updates to the Electron framework, including security fixes.

If you are looking how to limit network access to Obsidian during this process, review [[ការពិចារណាសុវត្ថិភាពសម្រាប់ក្រុម#Network and access|network and access]].

## Customizing Obsidian

Obsidian is easy to modify to suit your team's needs. With an extensive API and a large ecosystem of users, Obsidian offers access to numerous plugins, themes, and complementary tools.

For security-related questions concerning these topics, please refer to [[ការពិចារណាសុវត្ថិភាពសម្រាប់ក្រុម]].

### Configuration folders

The [[ថតកំណត់រចនាសម្ព័ន្ធ]] is where an Obsidian [[សទ្ទានុក្រម#Vault|vault]] stores its application settings. By default, this folder is named `.obsidian`, but you have the flexibility to [[ថតកំណត់រចនាសម្ព័ន្ធ#Change your configuration folder|change the configuration folder]] name according to your preference.

We recommend creating a standardized template of the configuration folder to be deployed across your team's devices.

### Plugins

[[កម្មវិធីជំនួយចម្បង]] are optional features created by the Obsidian team. These features are integrated in the core application codebase and can be turned on or off.

[[កម្មវិធីជំនួយសហគមន៍]] are third-party features added to the Obsidian application, and can be installed via the community directory. Third-party plugins leverage the [Obsidian API](https://github.com/obsidianmd/obsidian-api). Plugins are located in the `.obsidian/plugins` folder within a vault, and can be installed manually at this location.

### Themes and snippets

[[រូបរាង]] visually alter the Obsidian interface. Like plugins, themes can be downloaded from our community directory. Themes are located in the `.obsidian/themes` folder within a vault.

[[ស្នីប៉ែត CSS|Snippets]] are small `.css` files that visually modify aspects of the Obsidian interface. In some cases, it can also add functional enhancements. Snippets are located in the `.obsidian/snippets` folder within a vault.

## Frequently asked questions

For questions about account management and security, please refer to [[ការពិចារណាសុវត្ថិភាពសម្រាប់ក្រុម#Account security|account security]].

### Deployment

**Can I deploy licenses across multiple installations?**
Currently, we do not support deploying licenses via a deployment script, such as in a `.json` file. If you're interested in this feature for your team, please submit a [feature request](https://forum.obsidian.md/c/feature-requests/8). 

**Can Obsidian lock certain features or configurations via a setting or an application flag?**
Currently you can do this by blocking edit access to the `.obsidian` folder, or specific files and folders within it, described above. If you're interested in more access controls for your team, please submit a [feature request](https://forum.obsidian.md/c/feature-requests/8). 
