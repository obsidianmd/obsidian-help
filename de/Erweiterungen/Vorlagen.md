---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Vorlagen ist eine Obsidian-Erweiterungen|integrierte Erweiterung, mit der du vordefinierte Textbausteine in deine aktive Notiz einfügen kannst.'
---
Vorlagen ist eine [[Obsidian-Erweiterungen|integrierte Erweiterung]], mit der du vordefinierte Textbausteine in deine aktive Notiz einfügen kannst.

## Vorlagenordner festlegen

1. Klicke in der unteren linken Ecke auf **[[Einstellungen]]** ![[lucide-cog.svg#icon]].
2. Gib unter **Obsidian-Erweiterungen → Vorlagen → Speicherort für Vorlagen** den Ordner an, der deine Vorlagen enthält.

## Vorlagenvariablen

Du kannst dynamische Informationen in deine Vorlagen einfügen, indem du _Vorlagenvariablen_ verwendest. Wenn du eine Vorlage mit einer Vorlagenvariablen einfügst, ersetzt Vorlagen diese durch den entsprechenden Wert.

| Variable    | Beschreibung                                              |
|-------------|-----------------------------------------------------------|
| `{{title}}` | Titel der aktiven Notiz.                                  |
| `{{date}}`  | Heutiges Datum. **Standardformat:** `YYYY-MM-DD`.        |
| `{{time}}`  | Aktuelle Uhrzeit. **Standardformat:** `HH:mm`.           |

Sowohl `{{date}}` als auch `{{time}}` ermöglichen es dir, das Standardformat mit einem _Formatstring_ zu ändern.

Um einen Formatstring festzulegen, füge einen Doppelpunkt (`:`) gefolgt von einer Zeichenkette aus [Moment.js-Formattoken](https://momentjs.com/docs/#/displaying/format/) hinzu, zum Beispiel `{{date:YYYY-MM-DD}}`.

Du kannst `{{date}}` und `{{time}}` mit Formatstrings auf die gleiche Weise verwenden, zum Beispiel `{{time:YYYY-MM-DD}}`.

Du kannst die standardmäßigen Datums- und Zeitformate unter **[[Einstellungen]] → Obsidian-Erweiterungen → Vorlagen → Datumsformat** und **[[Einstellungen]] → Obsidian-Erweiterungen → Vorlagen → Zeitformat** ändern. ^template-settings-date-time-formatting

> [!tip]- Datums- und Zeitvariablen in anderen Erweiterungen verwenden
> Du kannst die Vorlagenvariablen `{{date}}` und `{{time}}` auch in den Erweiterungen [[Tägliche Notizen]] und [[Eindeutige Notizen]] verwenden.

## Eine Vorlage erstellen

Erstelle im [[#Vorlagenordner festlegen|Vorlagenordner]] eine [[Notizen verwalten#Neue Notiz erstellen|neue Notiz]] mit dem Text, der beim Verwenden der Vorlage erscheinen soll. Du kannst [[#Vorlagenvariablen|Vorlagenvariablen]] für dynamischen Text wie das aktuelle Datum verwenden.

Hier ist zum Beispiel eine Vorlage für Lernnotizen:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Schlüsselkonzepte


## Wichtige Details


## Beispiele


## Fragen
- 

## Zusammenfassung


## Verwandte Themen
- [[]]
```

> [!warning]+ Vorlagen in der Quellcode-Ansicht bearbeiten
> In der [[Ansichten und Bearbeitungsmodi#Live-Vorschau|Live-Vorschau]] kann das Panel **Eigenschaften im Dokument** Vorlagenvariablen überschreiben, die keine Anführungszeichen haben.
>
> Um dies zu vermeiden, bearbeite Vorlagen in der [[Ansichten und Bearbeitungsmodi#Quellcode-Ansicht|Quellcode-Ansicht]], oder setze **[[Einstellungen]] → Editor → [[Einstellungen#Eigenschaften im Dokument|Eigenschaften im Dokument]]** auf **Quelle**.

## Eine Vorlage in die aktive Notiz einfügen

> [!todo] [[#Vorlagenordner festlegen]], bevor du eine Vorlage einfügst.

1. Klicke in der Werkzeugleiste auf **Vorlage einfügen**.
2. Wähle die Vorlage aus, die an der Cursorposition in der aktiven Notiz eingefügt werden soll.

Um eine Vorlage über die [[Befehlspalette]] oder ein [[Tastenkürzel#Tastenkürzel festlegen|benutzerdefiniertes Tastenkürzel]] einzufügen, verwende den Befehl `Vorlagen: Vorlage einfügen`.

Der Inhalt der Vorlage wird an der aktuellen Cursorposition eingefügt. Wenn sich der Cursor nicht im Notizkörper befindet, wird der Inhalt an der letzten Cursorposition eingefügt.

### Vorlageneigenschaften

![[Eigenschaften#^templates-properties]]

## Aktuelles Datum und aktuelle Uhrzeit in die aktive Notiz einfügen

Verwende die Befehle `Vorlagen: Aktuelles Datum einfügen` und `Vorlagen: Aktuelle Zeit einfügen`, um das aktuelle Datum und die aktuelle Uhrzeit an der aktuellen Cursorposition einzufügen. Wie beim Befehl `Vorlage einfügen` kannst du dies auch über die Befehlspalette oder ein benutzerdefiniertes Tastenkürzel ausführen.

Das eingefügte Datum und die Uhrzeit verwenden die [[#^template-settings-date-time-formatting|in den Erweiterungseinstellungen festgelegte Formatierung]].
