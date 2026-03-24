---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Vorlagen ist eine Obsidian-Erweiterungen|integrierte Erweiterung, mit der du vordefinierte Textbausteine in deine aktive Notiz einfügen kannst.
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

Du kannst `{{date}}` und `{{time}}` mit Formatstrings austauschbar verwenden, zum Beispiel `{{time:YYYY-MM-DD}}`.

Du kannst die standardmäßigen Datums- und Zeitformate unter **[[Einstellungen]] → Vorlagen → Datumsformat** und **[[Einstellungen]] → Vorlagen → Zeitformat** ändern.

> [!tip] Tipp
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

## Eine Vorlage in die aktive Notiz einfügen

**Wichtig:** Um eine Vorlage einzufügen, musst du zuerst den [[#Vorlagenordner festlegen]].

1. Klicke in der Werkzeugleiste auf **Vorlage einfügen**.
2. Wähle die Vorlage aus, die an der Cursorposition in der aktiven Notiz eingefügt werden soll.

## Vorlageneigenschaften

![[Eigenschaften#^templates-properties]]
