---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: Eigenschaften ermöglichen es, Informationen über eine Notiz zu organisieren. Eigenschaften enthalten strukturierte Daten wie Text, Links, Daten, Kontrollkästchen und Zahlen.
---
Eigenschaften ermöglichen es, Informationen über eine Notiz zu organisieren. Eigenschaften enthalten strukturierte Daten wie Text, Links, Daten, Kontrollkästchen und Zahlen. Eigenschaften können auch in Kombination mit [[Community-Erweiterungen]] verwendet werden, die nützliche Dinge mit strukturierten Daten tun können.

## Eigenschaften zu einer Notiz hinzufügen

Es gibt mehrere Möglichkeiten, einer Notiz eine Eigenschaft hinzuzufügen:

- Verwende den [[Befehlspalette|Befehl]] **Dateieigenschaften hinzufügen**.
- Verwende das **`Cmd/Strg+;`** [[Tastenkürzel|Tastenkürzel]].
- Wähle **Dateieigenschaften hinzufügen** aus dem Menü **Weitere Optionen** (erreichbar über das Drei-Punkte-Symbol oder durch Rechtsklick auf den Tab).
- Gib `---` ganz am Anfang einer Datei ein.

Sobald du eine Eigenschaft hinzufügst, erscheint eine Zeile oben in der Datei mit zwei Eingabefeldern: dem _Namen_ der Eigenschaft und dem _Wert_ der Eigenschaft.

Für den Namen kannst du wählen, was du möchtest. Obsidian bietet mehrere Standardeigenschaften: `tags`, `cssclasses` und `aliases`.

Sobald du den Eigenschaftsnamen gewählt hast, kannst du ihm einen Wert zuweisen.

### Eigenschaftentypen

Neben einem Namen und einem Wert haben Eigenschaften auch einen _Typ_. Der Typ einer Eigenschaft bestimmt, welche Art von Werten sie speichern kann und wie Obsidian sie behandelt. Um den Typ einer Eigenschaft zu ändern, klicke auf das Typ-Symbol neben dem Eigenschaftsnamen und wähle eine andere Option. Du kannst Eigenschaftentypen auch über die integrierte Erweiterung [[Eigenschaften-Ansicht]] verwalten.

Obsidian unterstützt die folgenden Eigenschaftentypen:

- **[[#Text]]**
- **[[#Liste]]**
- **[[#Zahl]]**
- **[[#Kontrollkästchen]]**
- **[[#Datum]]**
- **[[#Datum und Uhrzeit]]**
- **[[#Tags]]**

Sobald einem Eigenschaftsnamen ein Eigenschaftentyp zugewiesen ist, verwenden alle Eigenschaften mit diesem Namen in deinem gesamten Vault denselben Typ.

## Erweiterte Nutzung

### Eigenschaften durchsuchen

Eigenschaften haben ihre eigene [[Suchen|Suchsyntax]], die du zusammen mit anderen Suchbegriffen und Operatoren verwenden kannst. [[Suchen#Eigenschaften durchsuchen|Siehe Suchsyntax für Eigenschaften]].

### Vorlagen

Du kannst Eigenschaften zu [[Erweiterungen/Vorlagen|Vorlagen]] hinzufügen.

Wenn du eine Vorlage in die aktive Notiz einfügst, werden alle Eigenschaften der Vorlage zur Notiz hinzugefügt. Obsidian führt auch alle Eigenschaften, die bereits in deiner Notiz vorhanden sind, mit den Eigenschaften der Vorlage zusammen. ^templates-properties

### Eigenschaften umbenennen

Du kannst eine Eigenschaft umbenennen, indem du sie in der [[Eigenschaften-Ansicht|Alle-Eigenschaften-Ansicht]] mit der rechten Maustaste anklickst.

### Anzeigemodi

Du kannst ändern, wie Eigenschaften in deiner Notiz angezeigt werden, indem du zu **[[Einstellungen]] → Editor → Eigenschaften im Dokument** gehst. Die Optionen sind:

- **Sichtbar** (Standard) – zeigt Eigenschaften oben in der Notiz an, falls vorhanden.
- **Nicht sichtbar** – blendet Eigenschaften aus, sie können weiterhin in der Seitenleiste über [[Eigenschaften-Ansicht]] angezeigt werden.
- **Quelle** – zeigt Eigenschaften im YAML-Klartextformat an.

### CSS-Snippets

Du kannst [[CSS-Bausteine]] verwenden, um das Erscheinungsbild bestimmter Notizen zu ändern.

### Nicht unterstützt

Einige Funktionen werden derzeit in Obsidian nicht unterstützt:

- **Verschachtelte Eigenschaften**: Um verschachtelte Eigenschaften anzuzeigen, empfehlen wir die Verwendung der [[Ansichten und Bearbeitungsmodus#Quellcode-Ansicht|Quellcode-Ansicht]].
- **Massenbearbeitung von Eigenschaften**: Für umfangreiche Massenbearbeitungen außerhalb der [[Eigenschaften-Ansicht]] empfehlen wir die Verwendung von Massenbearbeitungswerkzeugen wie VSCode, Skripten und Community-Erweiterungen.
- **Markdown in Eigenschaften**: Dies ist eine bewusste Einschränkung, da Eigenschaften für kleine, atomare Informationseinheiten gedacht sind, die sowohl für Menschen als auch für Maschinen lesbar sind.

## Tastenkürzel

### Eigenschaft hinzufügen

| Aktion | Tastenkürzel |
|---|---|
|Neue Eigenschaft hinzufügen|`Cmd + ;`|

### Zwischen Eigenschaften navigieren

Wenn eine Eigenschaft fokussiert ist:

| Aktion | Tastenkürzel |
|---|---|
|Nächste Eigenschaft fokussieren|`Pfeil nach unten` oder `Tab`|
|Vorherige Eigenschaft fokussieren|`Pfeil nach oben` oder `Umschalt+Tab`|
|Zum Editor springen|`Alt+Pfeil nach unten`|

### Eigenschaften auswählen

| Aktion | Tastenkürzel |
|---|---|
|Auswahl nach oben erweitern|`Umschalt+Pfeil nach oben`|
|Auswahl nach unten erweitern|`Umschalt+Pfeil nach unten`|
|Alles auswählen|`Cmd+A`|

### Eigenschaften bearbeiten

| Aktion | Tastenkürzel |
|---|---|
|Eigenschaftsname bearbeiten|`Pfeil nach links`|
|Eigenschaftswert bearbeiten|`Pfeil nach rechts`|
|Eigenschaft fokussieren|`Escape`|
|Eigenschaft löschen|`Cmd+Rücktaste`<br><br>Falls Eigenschaften ausgewählt sind, wird stattdessen die Auswahl gelöscht.|
|Rückgängig|`Cmd+Z`|
|Wiederholen|`Cmd+Umschalt+Z`|

### Vim (erweitert)

| Aktion | Tastenkürzel |
|---|---|
|Nach unten bewegen|`j`|
|Nach oben bewegen|`k`|
|Schlüssel fokussieren|`h`|
|Wert fokussieren|`l`|
|Wert fokussieren (Cursor am Ende)|`A`|
|Wert fokussieren (Cursor am Anfang)|`i`|
|Neue Eigenschaft erstellen|`o`|

## Eigenschaftsformat

Eigenschaften werden im [YAML](https://yaml.org/)-Format am Anfang der Datei gespeichert. YAML ist ein beliebtes Format, das sowohl für Menschen als auch für Computer leicht lesbar ist.

Eigenschaftsnamen werden durch einen Doppelpunkt gefolgt von einem Leerzeichen von ihren Werten getrennt:

```yaml
---
name: value
---
```

Während die Reihenfolge der Name-Wert-Paare keine Rolle spielt, muss jeder Name innerhalb einer Notiz eindeutig sein. Beispielsweise kann es nicht mehr als eine `tags`-Eigenschaft geben.

Werte können [[#Text|Text]], [[#Zahl|Zahlen]], [[#Kontrollkästchen|Kontrollkästchen]], [[#Datum|Daten]], [[#Datum und Uhrzeit|Datum und Uhrzeit]] oder [[#Liste|Listen]] sein.

### Text

Text-Eigenschaften enthalten eine einzelne Textzeile. Markdown-Formatierung wird in Text-Eigenschaften nicht gerendert. Hashtags erstellen keine Tags, wenn sie in Text-Eigenschaften verwendet werden.

Text-Eigenschaften können URLs und [[Interne Links]] in der Syntax `[[Link]]` enthalten. [[Interne Links]] in Text-Eigenschaften müssen in Anführungszeichen eingeschlossen werden. Obsidian fügt diese automatisch hinzu, wenn du interne Links manuell in Eigenschaften eingibst. Achte jedoch darauf, sie hinzuzufügen, wenn du Vorlagen-Erweiterungen verwendest.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Liste

Listen-Eigenschaften enthalten mehrere Werte. Jeder Wert in einer Liste erscheint in einer eigenen Zeile, eingeleitet durch einen Bindestrich (-) und ein Leerzeichen.

Listenwerte können Text, Zahlen und [[Interne Links]] enthalten. Wenn du [[Interne Links]] in Listen-Eigenschaften verwendest, umschließe sie mit Anführungszeichen.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Zahl

Eigenschaften vom Typ Zahl müssen immer eine literale Zahl sein, kein Ausdruck mit Operatoren. Ganzzahlen und Dezimalzahlen sind gleichermaßen erlaubt.

```yaml
---
year: 1977
pie: 3.14
---
```

### Kontrollkästchen

Kontrollkästchen-Eigenschaften sind entweder `true` oder `false`. In der Live-Vorschau wird dies als Kontrollkästchen angezeigt.

```yaml
---
favorite: true
reply: false
last: # Unbestimmter Wert; wird oft als false behandelt
```

### Datum

Datums-Eigenschaften werden im folgenden Format gespeichert:

```yaml
---
date: 2020-08-21
---
```

Die Datumsauswahl folgt dem Standardformat für Datum und Uhrzeit deines Betriebssystems. Du kannst es in deinen Systemeinstellungen ändern:

> [!info]- Windows
> **[[Einstellungen]] → Zeit & Sprache → Sprache & Region → Regionales Format → Formate ändern**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Systemeinstellungen → Sprache und Region → Datumsformat**
> 
> ![[Mac-OS-DateTime.png|450]]

Wenn die Erweiterung [[Tägliche Notizen]] aktiviert ist, funktioniert die Datums-Eigenschaft zusätzlich als interner Link zur entsprechenden täglichen Notiz für dieses Datum.

![[Tägliche Notizen#^daily-notes-date]]

### Datum und Uhrzeit

Datum-und-Uhrzeit-Eigenschaften enthalten sowohl ein Datum als auch eine bestimmte Uhrzeit und werden im folgenden Format gespeichert:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Wie bei [[#Datum|Datums-Eigenschaften]] folgt die Datums- und Zeitauswahl dem Standardformat deines Betriebssystems. Du kannst es in deinen Systemeinstellungen ändern.

### Tags

Tags-Eigenschaften sind ein spezieller Eigenschaftentyp, der ausschließlich von der Eigenschaft `tags` verwendet wird. Dieser Eigenschaftentyp kann nicht anderen Eigenschaften zugewiesen werden.

Tags-Eigenschaften sind als Liste formatiert, wobei jeder Tag in einer eigenen Zeile steht, eingeleitet durch einen Bindestrich (-) und ein Leerzeichen.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

Die `tags`-Eigenschaft ist eine der [[#Standardeigenschaften]] von Obsidian. Siehe [[Tags]] für weitere Informationen zur Verwendung von Tags in Obsidian.

### JSON-Eigenschaften

Obwohl wir empfehlen, YAML zur Definition von Eigenschaften zu verwenden, kannst du Eigenschaften auch mit [JSON](https://www.json.org/) definieren:

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Beachte, dass der JSON-Block gelesen, interpretiert und als YAML gespeichert wird.

## Standardeigenschaften

Obsidian wird mit einer Reihe von Standardeigenschaften ausgeliefert:

| Eigenschaft  | Typ  | Beschreibung                                                 |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | Liste | Siehe [[Tags]].                |
| `aliases`    | Liste | Siehe [[Aliasse]].                                          |
| `cssclasses` | Liste | Ermöglicht es, einzelne Notizen mit [[CSS-Bausteine]] zu gestalten. |

### Eigenschaften für Obsidian Publish

Die folgenden Standardeigenschaften können mit [[Einführung in Obsidian Publish|Obsidian Publish]] verwendet werden:

| Eigenschaft   | Beschreibung                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Siehe [[Inhalte veröffentlichen#Notizen automatisch zur Veröffentlichung auswählen\|Notizen automatisch zur Veröffentlichung auswählen]]. |
| `permalink`   | Siehe [[Permalinks\|Permalinks]].                                                                          |
| `description` | Siehe [[Linkvorschau für soziale Medien#Description\|Beschreibung]].                                       |
| `image`       | Siehe [[Linkvorschau für soziale Medien#Image\|Bild]].                                                     |
| `cover`       | Siehe [[Linkvorschau für soziale Medien#Image\|Bild]].                                                     |

### Veraltete Eigenschaften

Diese Eigenschaften wurden in Obsidian 1.4 als veraltet markiert und sollten durch ihre modernen Entsprechungen ersetzt werden. Die Unterstützung als [[#Standardeigenschaften]] wurde in Obsidian 1.9 eingestellt.

| Eigenschaft | Beschreibung |
|-|-|
| `tag` | Veralteter Alias für `tags`. |
| `alias` | Veralteter Alias für `aliases`. |
| `cssclass` | Veralteter Alias für `cssclasses`. |

> [!tip] Wenn du die Dateien in deinem Vault in das Format der [[#Standardeigenschaften]] konvertieren musst, kannst du das [[Importprogramm für Markdown Format]] verwenden, um deinen Vault in einem Schritt umzuwandeln.
