---
permalink: embeds
cssclasses:
  - soft-embed
---
Eingebettete Dateien zeigen ihren Inhalt inline in einer Notiz an und werden automatisch aktualisiert, wenn sich die Quelldatei ändert.

Um eine Datei in deinem Vault einzubetten, füge ein Ausrufezeichen (`!`) vor einem [[Interne Links|Internen Link]] hinzu. Du kannst Dateien in allen [[Akzeptierte Dateiformate|akzeptierten Dateiformaten]] einbetten.

> [!tip]- Per Drag and Drop einbetten
> Auf dem Desktop kannst du unterstützte Dateien auch direkt in deine Notiz ziehen und ablegen, um sie automatisch einzubetten.

## Eine Notiz in eine andere Notiz einbetten

Um eine Notiz einzubetten:

```md
![[Interne Links]]
```

Du kannst auch bestimmte [[Interne Links#Auf eine Überschrift in einer Notiz verlinken|Überschriften]] und [[Interne Links#Auf einen Block in einer Notiz verlinken|Blöcke]] einbetten.

```md
![[Interne Links#^b15695]]
```

Der folgende Text ist ein Beispiel für einen eingebetteten Block:

![[Interne Links#^b15695]]

## Ein Bild in eine Notiz einbetten

Um ein Bild einzubetten:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Du kannst die Bildabmessungen ändern, indem du `|640x480` zum Link-Ziel hinzufügst, wobei 640 die Breite und 480 die Höhe ist.

```md
![[Engelbart.jpg|100x145]]
```

Wenn du nur die Breite angibst, wird das Bild proportional skaliert. Zum Beispiel: `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Du kannst auch ein extern gehostetes Bild mit einem Markdown-Link einbetten. Breite und Höhe kannst du mit der gleichen Syntax wie bei einem Wiki-Link steuern.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Eine Audiodatei in eine Notiz einbetten

Um eine Audiodatei einzubetten:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Ein PDF in eine Notiz einbetten

Um ein PDF einzubetten:

```md
![[Document.pdf]]
```

Du kannst auch eine bestimmte Seite im PDF öffnen, indem du `#page=N` zum Link-Ziel hinzufügst, wobei `N` die Seitennummer ist:

```md
![[Document.pdf#page=3]]
```

Du kannst auch die Höhe in Pixeln für den eingebetteten PDF-Viewer angeben, indem du `#height=[number]` zum Link hinzufügst. Zum Beispiel:

```md
![[Document.pdf#height=400]]
```

## Einen Canvas in eine Notiz einbetten

Um einen [[Canvas|Canvas]] einzubetten:

```md
![[Mein Canvas.canvas]]
```

> [!info]+ Canvas-Einbettungen zeigen nur Formen
> Eingebettete Canvas zeigen Formen an, aber nicht den Text in Karten. Um den vollständigen Canvas anzuzeigen, öffne ihn direkt.

## Eine Liste in eine Notiz einbetten

Um eine Liste aus einer anderen Notiz einzubetten, füge zunächst eine [[Interne Links#Auf einen Block in einer Notiz verlinken|Block-Kennung]] zu deiner Liste hinzu:

```md

- Listenpunkt 1
- Listenpunkt 2

^my-list-id
```

Verlinke dann die Liste mit der Block-Kennung:

```md
![[Meine Notiz#^my-list-id]]
```

## Suchergebnisse einbetten

![[Suchen#Suchergebnisse in eine Notiz einbetten]]
