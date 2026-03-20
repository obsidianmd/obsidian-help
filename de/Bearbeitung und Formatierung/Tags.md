---
permalink: tags
---
Tags sind Schlüsselwörter oder Themen, die dir helfen, die gewünschten Notizen schnell zu finden.

## Einen Tag zu einer Notiz hinzufügen

Um einen Tag zu erstellen, gib ein Rautezeichen (`#`) im Editor ein, gefolgt von einem Schlüsselwort. Zum Beispiel `#meeting`.

Du kannst Tags auch über die `tags`-[[Eigenschaften|Eigenschaft]] hinzufügen. Tags in YAML sollten immer als Liste formatiert werden:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Notizen mithilfe von Tags finden

Um Notizen mit der [[Suchen|Suche]]-Erweiterung zu finden, verwende den `tag`-[[Suchen#Suchoperatoren|Suchoperator]] in deinem Suchbegriff, zum Beispiel `tag:#meeting`.

Du kannst auch nach Tags suchen, indem du in deinen Notizen darauf klickst.

Um Notizen mit der [[Tag-Übersicht|Tag-Übersicht]]-Erweiterung zu finden, wähle **Tags: Tag-Übersicht anzeigen** in der [[Befehlspalette]] und dann den Tag aus, nach dem du suchen möchtest.

## Verschachtelte Tags

Verschachtelte Tags definieren Tag-Hierarchien, die das Finden und Filtern verwandter Tags erleichtern.

Erstelle verschachtelte Tags, indem du Schrägstriche (`/`) im Tag-Namen verwendest, zum Beispiel `#inbox/to-read` und `#inbox/processing`.

- In der [[Suchen|Suche]] stimmt `tag:inbox` sowohl mit `#inbox` als auch mit allen verschachtelten Tags wie `#inbox/to-read` überein.
- In der [[Tag-Übersicht]] werden verschachtelte Tags als zugehörig zu ihrem übergeordneten Tag angezeigt.
- In [[Einführung in Bases|Basen]] werden verschachtelte Tags von der [[Funktionen#hasTag|`hasTag`]]-Funktion erkannt, sodass `file.hasTag("a")` sowohl `#a` als auch `#a/b` findet.

## Tag-Format

Du kannst die folgenden Zeichen in deinen Tags verwenden:

- Buchstaben
- Zahlen
- Unterstrich (`_`)
- Bindestrich (`-`)
- Schrägstrich (`/`) für [[#Verschachtelte Tags]]

Tags müssen mindestens ein nicht-numerisches Zeichen enthalten. Zum Beispiel ist #1984 kein gültiger Tag, aber #y1984 schon.

Tags unterscheiden nicht zwischen Groß- und Kleinschreibung. Zum Beispiel werden #tag und #TAG als identisch behandelt.

> [!note]
> Tags werden in der [[Tag-Übersicht]] mit der Schreibweise angezeigt, mit der sie zuerst erstellt wurden.
> Wenn du beispielsweise #Tag und dann #TAG erstellst, wird für beide #Tag angezeigt.

Tags dürfen keine Leerzeichen enthalten. Um zwei oder mehr Wörter zu trennen, kannst du stattdessen die folgenden Formate verwenden:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
