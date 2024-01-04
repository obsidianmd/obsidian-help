---
aliases:
  - Obsidian Publish/Redirecting old notes
---
Renaming and removing notes is a natural part of maintaining a living vault. While Obsidian automatically updates links when you move a note within your local vault, other websites may still link to your old notes on your published [[Introduction to Obsidian Publish|Obsidian Publish]] site. In this article, you'll learn how to redirect readers from one note to another.

Imagine you want to move a note from one folder to another:

- **Guides**
  - ~~Making friends.md~~ (removed)
- **Tutorials**
  - *How to make friends.md* (added)

After you move the note, Obsidian automatically updates all links within the vault. However, if you publish the change to your Publish site, any links to `/Guides/Making+friends` will result in a 404.

To redirect readers from `/Guides/Making+friends` to `/Tutorials/How+to+make+friends`, you need to add an [[Aliases|alias]] in `How to make friends.md`, the note you want to redirect to.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important]
> Make sure that you include the full path to the old note in the alias. While using only the note name as an alias works in your local vault, Publish needs the full path to the note to be able to redirect to it.

You can redirect multiple notes by adding an alias for each.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```