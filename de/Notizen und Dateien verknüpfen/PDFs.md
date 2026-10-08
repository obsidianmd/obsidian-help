---
permalink: pdf
publish: true
mobile: true
description: 'Erfahren Sie, wie Sie PDFs in Obsidian anzeigen, durchsuchen und verlinken und wie Sie eine Notiz als PDF exportieren.'
---
Obsidian öffnet PDF-Dateien in einem integrierten Viewer. Du kannst eine PDF auch in eine Notiz einbetten, auf eine Passage darin verlinken und jede Notiz als PDF exportieren. Informationen zu den von Obsidian unterstützten Dateitypen findest du unter [[Akzeptierte Dateiformate]].

> [!info]+ Einige Funktionen sind nur auf dem Desktop verfügbar
> Die mobile Obsidian-App kann nicht innerhalb einer PDF suchen, ein Zitat oder einen Link zu einer Auswahl kopieren oder eine Notiz als PDF exportieren.

## Eine PDF öffnen

Wähle im [[Dateiexplorer]] eine PDF aus, um sie in einem Tab zu öffnen.

> [!info]+ Annotationen werden nicht unterstützt
> Obsidian unterstützt nicht das Hinzufügen von Annotationen oder Hervorhebungen zu einer PDF. Um eine PDF zu markieren, verwende eine andere App und öffne dann die aktualisierte Datei in deinem Vault.

Der Viewer hat eine Symbolleiste mit diesen Steuerelementen. Die mobile Obsidian-App hat dieselbe Symbolleiste.

- **Seitenleisten einblenden** zeigt oder verbirgt die Seitenleiste, und **Seitenleistenoptionen** ändert, was die Seitenleiste anzeigt.
- **Verkleinern** und **Vergrößern** ändern die Größe der Seite.
- **Ansichtsoptionen** ändert, wie Seiten angeordnet werden.
- Das Seitenfeld zeigt die aktuelle Seite an. Gib eine Seitennummer ein, um zu dieser Seite zu springen.

Um mit der PDF-Datei selbst zu arbeiten, z. B. sie umzubenennen oder zu verschieben, wähle **Weitere Optionen** ![[lucide-more-horizontal.svg#icon]]. Eine PDF hat weniger Einträge in diesem Menü als eine Notiz. Siehe [[Weitere Optionen Menü]].

## In einer PDF navigieren

Wähle **Seitenleistenoptionen** und dann, was angezeigt werden soll.

- **Vorschauen** zeigt eine kleine Vorschau jeder Seite.
- **Inhaltsverzeichnis** zeigt die Gliederung der PDF, falls vorhanden.
- **Dokument im Inhaltsverzeichnis anzeigen** hebt die aktuelle Seite im Inhaltsverzeichnis hervor.

Um auf eine Seite zu verlinken, klicke mit der rechten Maustaste auf ihre Vorschau und wähle **Link zu Seite N kopieren**, wobei N die Seitennummer ist. Füge den Link in eine Notiz ein.

Um auf einen Abschnitt zu verlinken, klicke mit der rechten Maustaste auf einen Eintrag im Inhaltsverzeichnis und wähle **Link zu „Titel" kopieren**, wobei Titel der Name des Eintrags ist. Auf Mobilgeräten halte den Eintrag gedrückt.

## Das Aussehen einer PDF ändern

Wähle **Ansichtsoptionen**, um das Layout zu ändern.

- **An Breite anpassen** und **An Höhe anpassen** passen die Seite an den Viewer an.
- **Einzelne Seite** zeigt jeweils eine Seite an.
- **Zwei Seiten (ungerade)** zeigt Seiten nebeneinander, beginnend mit einer ungeraden Seite links. Zum Beispiel werden die Seiten 1 und 2 zusammen angezeigt, dann die Seiten 3 und 4.
- **Zwei Seiten (gerade)** zeigt Seiten nebeneinander, beginnend mit einer geraden Seite links. Zum Beispiel wird Seite 1 allein angezeigt, dann werden die Seiten 2 und 3 zusammen angezeigt.
- **An Thema anpassen** dunkelt die Farben der PDF ab, wenn dein Obsidian-Thema dunkel ist.

## In einer PDF suchen

Die Suche innerhalb einer PDF ist nur auf dem Desktop verfügbar. Die mobile Obsidian-App hat keine Suche im PDF-Viewer.

1. Drücke `Strg+F` (Windows und Linux) oder `Befehl+F` (macOS).
2. Gib unter **Suchbegriff eingeben...** den Text ein, den du finden möchtest.
3. Wähle den Auf- oder Abwärtspfeil, um zwischen den Treffern zu wechseln.

Um die Funktionsweise der Suche zu ändern, verwende diese Optionen.

- **Großschreibung beachten** gleicht Groß- und Kleinschreibung exakt ab. Es ist die **Aa**-Schaltfläche im Suchfeld.
- **Alles markieren** hebt jeden Treffer hervor. Wähle die Einstellungen-Schaltfläche neben den Pfeilen, um diese Option zu finden.
- **Diakritische Zuordnung** behandelt Buchstaben mit Akzenten als unterschiedliche Buchstaben. Diese Option befindet sich im selben Einstellungsmenü.
- **Ganze Wörter** findet nur ganze Wörter. Diese Option befindet sich im selben Einstellungsmenü.

Wähle die Schließen-Schaltfläche, um die Suche zu verlassen.

## Text aus einer PDF kopieren

Auf dem Desktop markiere Text in der PDF und klicke dann mit der rechten Maustaste darauf.

- **Kopieren** kopiert den Text.
- **Als Zitat kopieren** kopiert den Text als Zitat, gefolgt von einem Link zur Passage.
- **Link zur Auswahl kopieren** kopiert einen Link zu dieser Passage, sodass du ihn in eine Notiz einfügen kannst.

Ein Zitat sieht so aus, wenn du es in eine Notiz einfügst.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Ein Link zu einer Auswahl enthält denselben Link allein.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Auf Mobilgeräten zeigt das Markieren von Text in einer PDF das Standard-Textmenü deines Geräts. **Als Zitat kopieren** und **Link zur Auswahl kopieren** sind nicht verfügbar.

## Eine PDF einbetten

Um eine PDF innerhalb einer Notiz anzuzeigen, siehe wie du [[Dateien einbetten#Eine PDF in eine Notiz einbetten|eine PDF in eine Notiz einbettest]]. Eine eingebettete PDF hat dieselbe Symbolleiste wie der Viewer. Wähle **Diesen Block bearbeiten**, um den Einbettungslink zu ändern.

## Eine Notiz als PDF exportieren

Du kannst jede Notiz auf dem Desktop als PDF exportieren. Der PDF-Export ist in der mobilen Obsidian-App nicht verfügbar.

1. Öffne die Notiz, die du exportieren möchtest.
2. Öffne die [[Befehlspalette]] und wähle **Als PDF exportieren**. Du kannst auch **Weitere Optionen** ![[lucide-more-horizontal.svg#icon]] in der Notiz wählen und dann **Als PDF Exportieren** auswählen.
3. Wähle deine Einstellungen.
    - **Dateinamen als Titel anhängen** fügt den Dateinamen oben in der PDF hinzu.
    - **Seitenformat** legt die Papiergröße fest. Du kannst A3, A4, A5, Legal, Letter oder Tabloid wählen.
    - **Querformat** dreht die Seiten seitlich.
    - **Rand** setzt den Seitenrand auf **Standard**, **Minimal** oder **Ohne**.
    - **Verkleinern (Prozent)** skaliert den Inhalt auf jeder Seite. Bei 100 bleibt der Inhalt in voller Größe. Niedrigere Werte machen Text und Bilder kleiner, sodass mehr auf jede Seite passt.
4. Wähle **Als PDF exportieren**.
5. Wähle, wo die Datei gespeichert werden soll.

> [!tip]- Eine Notiz mit dunklem Thema exportieren
> Exporte verwenden immer helle Gestaltung, auch wenn dein Thema dunkel ist. Um das Aussehen eines Exports zu ändern, kannst du ein [[CSS-Bausteine|CSS-Snippet]] verwenden. Das Obsidian-Forum enthält Beispiele für Snippets zum Drucken und Exportieren.[^1]

[^1]: Siehe [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) und [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
