---
permalink: aliases
cssclasses:
  - soft-embed
---
Wenn du auf eine Datei mit verschiedenen Namen verweisen möchtest, erwäge, der Notiz _Aliasse_ hinzuzufügen. Ein Alias ist ein alternativer Name für eine Notiz.

Verwende Aliasse für Dinge wie Akronyme, Spitznamen oder um auf eine Notiz in einer anderen Sprache zu verweisen.

Wenn du nur ändern möchtest, wie ein Link an einer bestimmten Stelle aussieht, sieh dir stattdessen an, wie man den [[Interne Links#Anzeigetext des Links ändern|Anzeigetext des Links ändert]].

![[Interne Links#^callout-internal-links-link-text]]

## Einen Alias zu einer Notiz hinzufügen

Um einen Alias für eine Notiz hinzuzufügen, füge die Eigenschaft `aliases` in den [[Eigenschaften]] der Notiz hinzu. Aliasse sollten in YAML immer als Liste formatiert sein.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Auf eine Notiz über einen Alias verlinken

Um über einen Alias auf eine Notiz zu verlinken:

1. Beginne, den Alias in einem [[Interne Links|internen Link]] einzugeben. Jeder Alias wird in der Vorschlagsliste mit einem gebogenen Pfeilsymbol daneben angezeigt.
2. Drücke `Enter`, um den Alias auszuwählen.

Obsidian erstellt den Link mit dem Alias als benutzerdefiniertem Anzeigetext, zum Beispiel `[[Artificial Intelligence|AI]]`.

> [!note] Hinweis
> Anstatt den Alias einfach als Linkziel zu verwenden (`[[AI]]`), nutzt Obsidian das Linkformat `[[Artificial Intelligence|AI]]`, um die Kompatibilität mit anderen Anwendungen sicherzustellen, die das Wiki-Link-Format verwenden.

## Nicht verlinkte Erwähnungen für einen Alias finden

Mithilfe von [[Rückverweise|Rückverweisen]] kannst du nicht verlinkte Erwähnungen von Aliassen finden.

Wenn du beispielsweise „AI" als Alias für „Artificial intelligence" festgelegt hast, kannst du Erwähnungen von „AI" in anderen Notizen sehen.

Wenn du eine nicht verlinkte Erwähnung mit einem Alias verlinkst, wandelt Obsidian die Erwähnung in einen [[Interne Links|internen Link]] mit dem Alias als Anzeigetext um.
