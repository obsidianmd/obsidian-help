Format converter lets you convert Markdown from other applications to Obsidian format.

> [!warning]
> Format converter converts your entire vault based on your settings. Back up your notes before you perform the conversion.

To convert all notes in your vault:

1. In the ribbon, click **Open format converter** ( ![[lucide-binary.svg#icon]] ).
2. Enable the formats you want to convert.
3. Click **Start conversion**.

For more information, refer to [[Basic formatting syntax]].

## Supported formats

| Application   | From                  | To                                                              |
|---------------|-----------------------|-----------------------------------------------------------------|
| Roam Research | `#tag` and `#[[tag]]` | `[[tag]]`                                                       |
| Roam Research | `^^highlight^^`       | `==highlight==`                                                 |
| Roam Research | `{{[[TODO]]}}`        | `[ ]`                                                           |
| Bear          | `::highlight::`       | `==highlight==`                                                 |
| Zettelkasten  | `[[UID]]`             | `[[UID File Name]]` (full link)                                 |
| Zettelkasten  | `[[UID]]`             | <code>\[\[UID File Name&#124;File Name\]\]</code> (pretty link) |

