---
permalink: plugins/command-palette
---
The Command palette [[Core plugins|plugin]] lets you run any command directly from your keyboard. It also lets you explore all the available commands and their [[Hotkeys|keyboard shortcuts]].

To run a command from the Command palette:

1. Press `Ctrl+P` (or `Cmd+P` on macOS) to open the Command palette. You can also open it from the [[Ribbon]] with Command palette icon ( ![[lucide-terminal.svg#icon]] ). 
2. Type the name of the command you want to run.
3. Navigate to the command using the arrow keys.
4. Press `Enter`.

> [!tip]
> The Command palette supports _fuzzy matching_, allowing you to search for commands even if you don't know their exact names. For example, typing "scf" will find the **S**ave **c**urrent **f**ile command.

As of **version 1.8.3**, recently used commands appear at the top of the Command palette. However, these recently used commands are still subject to the _fuzzy matching_ algorithm. When you start filtering, shorter commands will be prioritized over recently used ones.

## Pinned commands

You can pin frequently used commands at the top of the Command palette to quickly access them without having to type their name.

> [!tip]
> If you want to quickly run frequently used commands, you can also [[Hotkeys#Setting hotkeys|set hotkeys]] for them.

### Pin a command

1. Open **Settings**.
2. In the sidebar, click **Command palette** under **Plugin options**.
3. Next to **New pinned command**, click **Select a command**.
4. Select the command you want to pin from the list.
5. Press `Enter`.

### Unpin a command

1. Open **Settings**.
2. In the sidebar, click **Command palette** under **Plugin options**.
3. Under **Pinned commands**, click the cross icon next to the command you want to unpin.
