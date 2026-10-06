---
permalink: manage-notes
publish: true
mobile: false
description: null
---
Du kannst Dateien und Ordner auf verschiedene Weisen verwalten, indem du [[Tastenkürzel]], [[Befehlspalette|Befehle]] oder den [[Dateiexplorer]] verwendest.

## Eine neue Notiz erstellen

Um eine neue Datei zu erstellen:

1. Drücke `Strg+N` (oder `Cmd+N` unter macOS).
2. Gib den Namen der Notiz ein und drücke dann `Enter`, um mit der Bearbeitung der Notiz zu beginnen.

Du kannst Notizen auch über den [[Dateiexplorer#Eine neue Notiz erstellen|Dateiexplorer]] erstellen oder indem du **Neue Notiz erstellen** aus der [[Befehlspalette]] auswählst.

> [!hint] Systembedingte Zeichenbeschränkung
> Obsidian beachtet die Dateinamen-Beschränkungen des Betriebssystems, auf dem du die Notiz erstellst. Wenn du planst, deine [[Notizen geräteübergreifend synchronisieren|Notizen geräteübergreifend zu synchronisieren]], stelle sicher, dass deine Dateinamen [für andere Betriebssysteme geeignet](https://stackoverflow.com/q/1976007) sind.
^blockquote-system-limitation

## Dateien außerhalb deines Vaults öffnen

Auf dem Desktop kannst du einzelne Markdown-Dateien außerhalb deines Vaults öffnen und bearbeiten. Dateien werden in deinem aktuellen Fenster geöffnet und bleiben an ihrem ursprünglichen Speicherort.

> [!note] Erfordert Obsidian 1.14 und das neueste Installationsprogramm
> [[Obsidian aktualisieren#Installer-Updates|Aktualisiere dein Installationsprogramm]], indem du Obsidian von [obsidian.md/download](https://obsidian.md/download) herunterlädst und die Anwendung neu installierst.

Um eine Markdown-Datei zu öffnen:

1. Öffne die [[Befehlspalette]].
2. Wähle **Datei von außerhalb des Vaults öffnen …**.
3. Wähle eine Markdown-Datei auf deinem Computer aus.

Du kannst auch das **Öffnen mit**-Menü deines Betriebssystems verwenden und **Obsidian** auswählen. Um Markdown-Dateien standardmäßig in Obsidian zu öffnen, lege es als Standardanwendung für `.md`-Dateien fest.

Bildeinbettungen und Links zu anderen lokalen Dateien werden relativ zum Ordner der Markdown-Datei aufgelöst. Verwende die [[Gliederung]], um durch Überschriften zu navigieren, und [[Ausgehende Links]], um verlinkte Dateien zu durchsuchen.

### Dateien mit Quick Look in der Vorschau anzeigen

Unter macOS kannst du eine Markdown-Datei im Finder auswählen und `Leertaste` drücken, um sie mit **Quick Look** in der Vorschau anzuzeigen. Quick-Look-Vorschauen funktionieren auch, wenn Obsidian geschlossen ist.

## Eine Notiz umbenennen

Um eine aktive Notiz umzubenennen:

1. Wähle den Namen der Notiz oben im Editor aus (oder drücke `F2`).
2. Gib den neuen Namen ein und drücke dann `Enter`.

Wenn du eine Datei umbenennst, aktualisiert Obsidian automatisch alle Links zu dieser Datei.

Du kannst eine Notiz oder einen Ordner auch umbenennen, ohne sie zu öffnen, indem du den [[Dateiexplorer#Eine Datei oder einen Ordner umbenennen|Dateiexplorer]] verwendest.

## Eine Notiz löschen

Um eine Notiz zu löschen, wähle **Weitere Optionen → Datei löschen** oben rechts in einer aktiven Notiz.

Oder wähle **Aktuelle Datei löschen** aus der [[Befehlspalette]].

Du kannst eine Notiz oder einen Ordner auch über den [[Dateiexplorer#Eine Datei oder einen Ordner löschen|Dateiexplorer]] löschen.

> [!note] Was passiert mit Dateien, nachdem ich sie gelöscht habe?
> Um zu ändern, was mit gelöschten Dateien passiert, wähle eine der folgenden Optionen unter **[[Einstellungen]] → Dateien & Links**:
>
> - **Papierkorb des Systems**: Standardmäßig landen gelöschte Dateien im Papierkorb deines Betriebssystems. Um eine Datei wiederherzustellen, verwende deinen bevorzugten Dateimanager.
> - **Obsidian-Papierkorb**: Du kannst gelöschte Dateien in einen `.trash`-Ordner in deinem Vault verschieben.
> - **Endgültig löschen**: Dateien werden sofort gelöscht, ohne Möglichkeit zur Wiederherstellung.
