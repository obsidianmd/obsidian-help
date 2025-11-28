---
aliases:
  - Obsidian Publish/Publish and unpublish notes
description: Learn how to publish your content using Obsidian Publish
permalink: publish/publish
mobile: true
publish: true
---

This page explains how to manage your published content. To learn how to customize your site's styling, see [[Customize your site]].

## Prerequisites

- An Obsidian account. If you don't have one, [sign up now](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- An active Obsidian Publish subscription. If you don't have one, subscribe from [your account dashboard](https://obsidian.md/account/publish).
- The **Publish** core plugin is [[Set up Obsidian Publish#Enable Obsidian Publish|enabled]].
- A [[Manage sites#Create a new site|Publish site]] is created.

## Publish notes

1. In **Ribbon**, select **Publish changes** (![[lucide-send.svg#icon]]).
2. In the **Publish changes** dialog, select **NEW** to view all unpublished notes.
3. Select the notes you want to publish.
4. Select **Publish**.

## Unpublish notes

Notes remain in your local vault even after you unpublish them.

1. In **Ribbon**, select **Publish changes** (![[lucide-send.svg#icon]]).
2. In the **Publish changes** dialog, select **UNCHANGED** to view all published notes.
3. Select the notes you want to unpublish.
4. Select **Publish**.

## Update a published note

1. In **Ribbon**, select **Publish changes** (![[lucide-send.svg#icon]]).
2. In the **Publish changes** dialog, select **CHANGED** to view all modified notes since the last publish.
3. Select the notes you want to update.
4. Select **Publish**.

> [!hint] Deleting renamed or removed notes and images from Publish happens in this step. You must manually select the checkbox to delete this data, as it is not automatically selected for safety.

## Publish linked data

When publishing notes containing links to other notes or embedded images, broken links may occur unless the linked notes are also published. **Obsidian Publish** helps prevent this by automatically selecting media linked from the notes you’ve already chosen.

To include all linked notes, select **Add linked** in the **Publish changes** dialog.

Before publishing, review the updated selection to ensure it doesn’t include any data you’re not ready to publish.

> [!tip] The **Add linked** function respects any exclusions defined in [[#Ignore data]].

## Automatically select data to publish

Set `publish: true` in the [[Properties]] of a note to automatically include it for publishing as either a new or changed note.

You can also automatically select notes and linked images in specific folders by adding them as **Included** folders:

1. In **Ribbon**, select **Publish changes** (![[lucide-send.svg#icon]]) or open the [[Command palette]] and type **Publish: Publish changes...**.
2. Select the **Manage publish filters** (![[lucide-filter.svg#icon]]) icon.
3. In the **Included folders** section, select **Manage**.
4. Choose the folders you want to include from the suggester.
5. The folder is added to the included list.
6. Select **Done** when finished.

### Ignore data

To ignore a note in Obsidian Publish, set `publish: false` in the [[Properties]] of the note. The note no longer appears in the list of notes to publish.

You can also auto-ignore notes and images in specific folders by adding them as **Excluded** folders:

1. In **Ribbon**, select **Publish changes** (![[lucide-send.svg#icon]]) or open the [[Command palette]] and type **Publish: Publish changes...**.
2. Select the **Manage publish filters** (![[lucide-filter.svg#icon]]) icon.
3. In the **Excluded folders** section, select **Manage**.
4. Choose the folders you want to exclude from the suggester.
5. The folder is added to the excluded list.
6. Select **Done** when finished.

> [!note] `publish: true` overrides excluded folders
> If a file has `publish: true`, it will still be published even if it is in a folder or filter that is excluded. This is because `publish: true` gives more specific control.