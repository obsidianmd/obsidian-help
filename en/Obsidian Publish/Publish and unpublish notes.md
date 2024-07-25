This page explains how to manage your published notes.

## Publish notes

1. In ribbon, to the left of the application window, click **Publish changes** ( ![[lucide-send.svg#icon]] ).
2. In the **Publish changes** dialog, click **NEW** to see all the notes you haven't published yet.
3. Select the notes you want to publish.
4. Click **Publish**.

## Unpublish notes

Notes remain in your local vault even after you unpublish them.

1. In ribbon, to the left of the application window, click **Publish changes** ( ![[lucide-send.svg#icon]] ).
2. In the **Publish changes** dialog, click **UNCHANGED** to see all your published notes.
3. Select the notes you want to unpublish.
4. Click **Publish**.

## Update a published note

1. In ribbon, to the left of the application window, click **Publish changes** ( ![[lucide-send.svg#icon]] ).
2. In the **Publish changes** dialog, click **CHANGED** to see all the notes that have been changed since the last time they were published.
3. Select the notes you want to update.
4. Click **Publish**.

## Publish linked notes

Publishing notes that have links to other notes results in broken links unless you publish the linked notes as well. Obsidian Publish can help you by selecting notes that are linked from the notes that are already selected.

To select all linked notes, click **Add linked** in the **Publish changes** dialog.

Review the updated selection to make sure it doesn't include any notes that you're not ready to publish yet.

## Automatically select notes to publish

To automatically select a note to be published, set `publish: true` in the [[Properties]] for the note.

## Ignore notes

To ignore a note in Obsidian Publish, set `publish: false` in the [[Properties]] for the note.

The note no longer shows up in the list of notes to publish.

## Permalinks

You can rename the URL to your notes, using _permalinks_.

For example, you can turn this:

```
https://publish.obsidian.md/username/Company/About+us
```

Into this:

```
https://publish.obsidian.md/username/about
```

To create a permalink for a note, add the `permalink` property to your [[Properties]].

```yaml
---
permalink: about
---
```

If someone visits a note using the original URL, they'll be automatically redirected to the permalink.
