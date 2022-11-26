Learn how you can extend Obsidian with more features by building your own plugins and sharing them with the community on the [[Marketplace]].

## Quickstart

The easiest way to get started with Obsidian plugin development is by using the [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin).

> [!danger] Before you start
> Don't develop plugins in your main vault. When you develop a plugin, one mistake can lead to unintentional modifications to your vault. You also risk permanently deleting your vault.

1. Clone the sample plugin.

   ```bash
   git clone https://github.com/obsidianmd/obsidian-sample-plugin.git
   mv obsidian-sample-plugin your-plugin-id
   cd your-plugin-id
   ```

1. Install dependencies using NPM or Yarn.

   ```bash
   # Using NPM
   npm install

   # Using Yarn
   yarn install
   ```

1. Rebuild plugin whenever you edit the code.

   ```bash
   # Using NPM
   npm run dev

   # Using Yarn
   yarn run dev
   ```

1. Install the plugin to your vault.

   ```bash
   mkdir $YOUR_VAULT_PATH/.obsidian/plugins/your-plugin-id
   mv main.js styles.css manifest.json $VAULT_PATH/.obsidian/plugins/your-plugin-id
   ```

1. Restart Obsidian.

For more help on building plugins for Obsidian, check out the following resources:

- For API reference documentation, refer to the [Obsidian API](https://github.com/obsidianmd/obsidian-api).
- For a more in-depth guide on how to get started with plugin development, check out the [Obsidian Plugin Developer Docs](https://marcus.se.net/obsidian-plugin-docs) by [Marcus Olsson](https://marcus.se.net).
- For a video walkthrough on plugin development, check out our YouTube playlist on how to [Build you first Obsidian plugin](https://www.youtube.com/playlist?list=PLIDCb22ZUTBnMCbJa-st4PD5T3Olep078).

## Submit your plugin

When you're ready, you can share your plugin with the Obsidian community by submitting it to the [[Marketplace]].

For an in-depth guide on how to submit your plugin, refer to [How to add your plugin to the community plugin list](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/How+to+add+your+plugin+to+the+community+plugin+list) on the Obsidian Hub.

## Community and support

If you get stuck, or if you're looking for feedback, [join the community](https://obsidian.md/community).

- `#plugin-dev` channel on Discord.
- [Developers & API](https://forum.obsidian.md/c/developers-api/14) and [Share & showcase](https://forum.obsidian.md/c/share-showcase/9) on the forum.
