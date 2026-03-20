---
permalink: publish/permalinks
---
Du kannst die URL zu deinen Notizen mithilfe von _Permalinks_ umbenennen.

Zum Beispiel kannst du dies:

```
https://publish.obsidian.md/username/Company/About+us
```

In dies umwandeln:

```
https://publish.obsidian.md/username/about
```

Um einen Permalink für eine Notiz zu erstellen, füge die `permalink`-Eigenschaft zu deinen [[Eigenschaften]] hinzu.

```yaml
---
permalink: about
---
```

Wenn jemand eine Notiz über die ursprüngliche URL besucht, wird er automatisch zum Permalink weitergeleitet.

## Alte Notizen umleiten

Das Umbenennen und Entfernen von Notizen ist ein natürlicher Teil der Pflege eines aktiven Vaults. Während Obsidian Links automatisch aktualisiert, wenn du eine Notiz innerhalb deines lokalen Vaults verschiebst, können andere Websites weiterhin auf deine alten Notizen auf deiner veröffentlichten [[Einführung in Obsidian Publish|Obsidian Publish]]-Website verlinken. Du kannst Leser von einer Notiz zu einer anderen umleiten.

Stell dir vor, du möchtest eine Notiz von einem Ordner in einen anderen verschieben:

- **Guides**
  - ~~Making friends.md~~ (entfernt)
- **Tutorials**
  - *How to make friends.md* (hinzugefügt)

Nachdem du die Notiz verschoben hast, aktualisiert Obsidian automatisch alle Links innerhalb des Vaults. Wenn du die Änderung jedoch auf deiner Publish-Website veröffentlichst, führen alle Links zu `/Guides/Making+friends` zu einem 404-Fehler.

Um Leser von `/Guides/Making+friends` zu `/Tutorials/How+to+make+friends` umzuleiten, musst du einen [[Aliasse|Alias]] in `How to make friends.md` hinzufügen, also in der Notiz, zu der du umleiten möchtest.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Wichtig
> Stelle sicher, dass du den vollständigen Pfad zur alten Notiz im Alias angibst. Während die Verwendung nur des Notiznamens als Alias in deinem lokalen Vault funktioniert, benötigt Publish den vollständigen Pfad zur Notiz, um die Umleitung durchführen zu können.

Du kannst mehrere Notizen umleiten, indem du für jede einen Alias hinzufügst.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
