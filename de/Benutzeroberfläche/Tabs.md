---
permalink: tabs
publish: true
mobile: true
description: Erfahre, wie du Tabs in Obsidian öffnest, organisierst und verwaltest, einschließlich Anheften, Stapeln und verlinkter Ansichten.
---
Tabs in Obsidian funktionieren ähnlich wie Tabs in anderen Apps, z. B. in Webbrowsern.

Du kannst in Obsidian so viele Tabs öffnen, wie du möchtest. Du kannst Tabs auch anordnen, um benutzerdefinierte Layouts zu erstellen, die bis zum nächsten Öffnen der App bestehen bleiben.

> [!note] Mobile Tabs
> Auf Mobilgeräten kannst du geöffnete Tabs über den Tab-Zähler in der [[Mobile App#Navigationsleiste|Navigationsleiste]] verwalten.

## Einen neuen Tab öffnen

Wähle oben im Anwendungsfenster neben dem letzten Tab rechts **Neuer Tab** ( ![[lucide-plus.svg#icon]] ). Oder verwende ein Tastaturkürzel:

- **Windows und Linux:** `Strg+T`
- **macOS:** `Cmd+T`

## Einen Link öffnen

Wähle einen Link in Obsidian, um ihn im aktiven Tab zu öffnen.

Um einen Link in einem neuen Tab zu öffnen, drücke `Strg` (oder `Cmd` unter macOS) und wähle den Link.

Im Folgenden findest du alle Modifikatortasten, mit denen du Links auf verschiedene Weise öffnen kannst:

|Aktion|MacOS|Windows/Linux|
|---|---|---|
|**Navigieren**|_Keine_|_Keine_|
|**Neuer Tab**|`⌘` (+ `Shift` in der Quellcode-Ansicht)|`Strg` (+ `Shift` in der Quellcode-Ansicht)|
|**Neue Tab-Gruppe**|`⌘` `⌥`| `Strg` `Alt`|
|**Neues Fenster**|`⌘` `⌥` `Shift`|`Strg` `Alt` `Shift`|

## Tabs und Fenster organisieren

Jeder Tab gehört zu einer _Tab-Gruppe_. Du kannst Tabs per Drag and Drop innerhalb einer Tab-Gruppe neu anordnen, in eine andere Tab-Gruppe verschieben oder eine neue Tab-Gruppe erstellen. Auf dem Desktop kannst du Tabs aus ihrem Fenster ziehen, um sie in einem separaten [[Pop-out-Fenster]] zu öffnen.

Tabs in Seitenleisten zeigen nur das Symbol an. Bewege den Mauszeiger über das Symbol, um einen Tooltip mit dem Tab-Titel anzuzeigen.

### Tabs anordnen

Um die Reihenfolge deiner Tabs zu ändern, ziehe den Tab entlang der Tabs in der Tab-Gruppe.

Beim Ziehen eines Tabs werden _Ablagebereiche_ hervorgehoben — Bereiche, in die du den Tab verschieben kannst. Der Ablagebereich bestimmt, wo der Tab eingefügt wird. Einige Tabs können nur in einer der Seitenleisten platziert werden.

### Eine Tab-Gruppe teilen

Klicke mit der rechten Maustaste auf einen Tab und wähle **Rechts teilen** oder **Unten teilen**, um eine neue Tab-Gruppe mit diesem Tab zu erstellen.

Du kannst eine Tab-Gruppe auch teilen, indem du einen Tab an den unteren Rand eines anderen Tabs ziehst.

### Größe einer Tab-Gruppe ändern

Um die Größe einer Tab-Gruppe zu ändern, bewege den Mauszeiger über den Rand der Tab-Gruppe. Der Rand wird hervorgehoben, wenn er zum Ändern der Größe gezogen werden kann.

Du kannst die Größe der Seitenleisten auf ähnliche Weise ändern, um mehr Platz für die Tab-Gruppen in der Mitte zu schaffen.

### Tab in ein neues Fenster verschieben

**Drag and Drop:**

- Wähle den Tab und ziehe ihn aus dem Anwendungsfenster, um ihn in einem neuen Fenster zu öffnen.

**Befehlspalette:**

- Öffne die Befehlspalette und wähle **Aktiven Tab in neues Fenster verschieben**.

### Einen Tab in ein anderes Fenster verschieben

Um einen Tab in ein anderes vorhandenes Fenster zu verschieben, ziehe den Tab in das gewünschte Fenster.

### Einen Tab anheften

Um einen Tab im Haupteditor anzuheften, klicke mit der rechten Maustaste auf den Tab und wähle **Anheften**. Links in einem angehefteten Tab werden immer in einem separaten Tab geöffnet.

Um die Anheftung eines Tabs im Haupteditor aufzuheben, klicke mit der rechten Maustaste auf den Tab und wähle **Anheftung aufheben**.

Zum Anheften oder Aufheben der Anheftung eines Tabs in der Seitenleiste siehe [[Seitenleiste#Tabs anheften|Tabs in der Seitenleiste anheften]].

## Zu einem anderen Tab wechseln

Wähle einen Tab, um zu ihm zu wechseln. Oder verwende ein Tastaturkürzel:

| Wechseln zu                | MacOS            | Windows/Linux        |
|----------------------------|------------------|----------------------|
| **Nächster Tab**           | `⌃`+`⇥`         | `Strg`+`Tab`         |
| **Vorheriger Tab**         | `⌃`+`⇧`+`⇥`    | `Strg`+`Shift`+`Tab` |
| **Erster Tab links**       | `⌘`+`1`          | `Strg`+`1`           |
| **2. bis 8. Tab**          | `⌘`+`2`..`8`     | `Strg`+`2`..`8`      |
| **Letzter Tab rechts**     | `⌘`+`9`          | `Strg`+`9`           |
| **Zuletzt geschlossener Tab** | `⌘`+`⇧`+`T`  | `Strg`+`Shift`+`T`   |

## Tab-Gruppen stapeln

Du kannst Tabs stapeln, um sie über andere Tabs in derselben Tab-Gruppe gleiten zu lassen.

Um Notizen zu stapeln, wähle den Abwärtspfeil in der oberen rechten Ecke der Tab-Gruppe und dann **Notizen stapeln**.

![tab-stacks](https://user-images.githubusercontent.com/693981/188205363-0f24b2a5-3706-4a8c-b38b-7a66baa68ce6.gif)

Tab-Stapel sind inspiriert von [Andy Matuschaks Sliding Notes](https://notes.andymatuschak.org/).

## Verlinkte Ansichten

_Verlinkte Ansichten_ sind Tabs, die auf einen anderen Tab verweisen. Wenn sich der Inhalt des referenzierten Tabs ändert, ändert sich auch die verlinkte Ansicht.

Für Notiz-Tabs kannst du die folgenden Erweiterungen als verlinkte Ansichten verwenden:

- [[Graph-Ansicht]] (lokal)
- [[Rückverweise]]
- [[Gliederung]]

Um eine verlinkte Ansicht für einen Notiz-Tab zu öffnen:

1. Wähle **Weitere Optionen** ( ![[lucide-more-horizontal.svg#icon]] ) in der oberen rechten Ecke der Notiz.
2. Wähle unter **Verlinkte Ansicht öffnen** die gewünschte verlinkte Ansicht.

## Layouts speichern

Du kannst Fensterlayouts mit der Erweiterung [[Arbeitsbereiche]] speichern und wiederherstellen.
