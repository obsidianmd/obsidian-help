---
permalink: plugins/canvas
---
Canvas ist eine [[Obsidian-Erweiterungen|Obsidian-Erweiterung]] für visuelles Notieren. Es bietet dir unendlich viel Platz, um Notizen anzuordnen und sie mit anderen Notizen, Anhängen und Webseiten zu verbinden.

Visuelles Notieren hilft dir, deine Notizen besser zu verstehen, indem du sie in einem 2D-Raum organisierst. Verbinde Notizen mit Linien und gruppiere verwandte Notizen, um die Beziehungen zwischen ihnen besser zu verstehen.

Canvas-Daten, die du in Obsidian erstellst, werden als `.canvas`-Dateien im offenen Dateiformat [JSON Canvas](https://jsoncanvas.org/) gespeichert.

## Einen neuen Canvas erstellen

Um Canvas zu verwenden, musst du zunächst eine Datei für deinen Canvas erstellen. Du kannst einen neuen Canvas mit folgenden Methoden erstellen:

**Befehlspalette:**

1. Öffne die [[Befehlspalette]].
2. Wähle **Canvas: Neuen Canvas erstellen**, um einen Canvas im selben Ordner wie die aktive Datei zu erstellen.

**Dateiexplorer:**

- Klicke im [[Dateiexplorer]] mit der rechten Maustaste auf den Ordner, in dem du den Canvas erstellen möchtest.
- Wähle **Neuer Canvas**.

**Werkzeugleiste:**

- Wähle in der vertikalen Werkzeugleiste **Neuen Canvas erstellen** ( ![[lucide-layout-dashboard.svg#icon]] ), um einen Canvas im selben Ordner wie die aktive Datei zu erstellen.

> [!note] Die Dateiendung .canvas
> Obsidian speichert deine Canvas-Daten als `.canvas`-Dateien in einem offenen Dateiformat namens [JSON Canvas](https://jsoncanvas.org/).

## Karten hinzufügen

Du kannst Dateien aus Obsidian oder aus anderen Anwendungen in deinen Canvas ziehen. Zum Beispiel Markdown-Dateien, Bilder, Audio, PDFs oder auch nicht erkannte Dateitypen.

### Textkarten hinzufügen

Du kannst reine Textkarten hinzufügen, die keine Datei referenzieren. Du kannst Markdown, Links und Quelltext-Blöcke genau wie in einer Notiz verwenden.

Um eine neue Textkarte zu deinem Canvas hinzuzufügen:

- Wähle oder ziehe das leere Dateisymbol am unteren Rand des Canvas.

Du kannst auch Textkarten hinzufügen, indem du auf den Canvas doppelklickst.

Um eine Textkarte in eine Datei umzuwandeln:

1. Klicke mit der rechten Maustaste auf die Textkarte und wähle dann **In Datei umwandeln...**.
2. Gib den Notiznamen ein und wähle dann **Speichern**.

> [!note] Hinweis
> Reine Textkarten erscheinen nicht in [[Rückverweise|Rückverweisen]]. Damit sie dort erscheinen, musst du sie in eine Datei umwandeln.

### Karten aus Notizen hinzufügen

Um eine Notiz aus deinem Vault zu deinem Canvas hinzuzufügen:

1. Wähle oder ziehe das Dokumentsymbol am unteren Rand des Canvas.
2. Wähle die Notiz aus, die du hinzufügen möchtest.

Du kannst auch Notizen über das Canvas-Kontextmenü hinzufügen:

1. Klicke mit der rechten Maustaste auf den Canvas und wähle dann **Notiz aus Vault hinzufügen**.
2. Wähle die Notiz aus, die du hinzufügen möchtest.

Oder du kannst sie zum Canvas hinzufügen, indem du die Datei aus dem [[Dateiexplorer]] ziehst.

### Karten aus Medien hinzufügen

Um Medien aus deinem Vault zu deinem Canvas hinzuzufügen:

1. Wähle oder ziehe das Bilddateisymbol am unteren Rand des Canvas.
2. Wähle die Mediendatei aus, die du hinzufügen möchtest.

Du kannst auch Medien über das Canvas-Kontextmenü hinzufügen:

1. Klicke mit der rechten Maustaste auf den Canvas und wähle dann **Medien aus Vault hinzufügen**.
2. Wähle die Mediendatei aus, die du hinzufügen möchtest.

Oder du kannst sie zum Canvas hinzufügen, indem du die Datei aus dem [[Dateiexplorer]] ziehst.

### Karten aus Webseiten hinzufügen

Um eine Webseite in deinen Canvas einzubetten:

1. Klicke mit der rechten Maustaste auf den Canvas und wähle dann **Webseite hinzufügen**.
2. Gib die URL der Webseite ein und wähle dann **Speichern**.

Du kannst auch eine URL in deinem Browser auswählen und dann in den Canvas ziehen, um sie in einer Karte einzubetten.

Um die Webseite in deinem Browser zu öffnen, drücke `Strg` (oder `Cmd` unter macOS) und wähle die Kartenbeschriftung. Oder klicke mit der rechten Maustaste auf die Karte und wähle **Im Browser öffnen**.

### Karten aus Ordnern hinzufügen

Ziehe einen Ordner aus dem Dateiexplorer, um alle Dateien in diesem Ordner zum Canvas hinzuzufügen.

### Eine Karte bearbeiten

Doppelklicke auf eine Text- oder Notizkarte, um sie zu bearbeiten. Klicke außerhalb der Karte, um die Bearbeitung zu beenden. Du kannst auch `Escape` drücken, um die Bearbeitung einer Karte zu beenden.

Du kannst eine Karte auch bearbeiten, indem du mit der rechten Maustaste darauf klickst und **Bearbeiten** wählst.

### Eine Karte löschen

Entferne ausgewählte Karten, indem du mit der rechten Maustaste auf eine davon klickst und dann **Löschen** wählst. Oder drücke die `Rücktaste` (oder `Entf` unter macOS).

Du kannst auch **Entfernen** ( ![[lucide-trash-2.svg#icon]] ) in den Auswahlsteuerelementen über deiner Auswahl wählen.

### Karten austauschen

Du kannst eine Notiz- oder Medienkarte gegen eine andere Karte desselben Typs austauschen.

Um eine Notizkarte auszutauschen:

1. Klicke mit der rechten Maustaste auf die Karte, die du ersetzen möchtest.
2. Wähle **Datei tauschen**.
3. Wähle die Notiz aus, durch die du ersetzen möchtest.

## Karten auswählen

Wähle Karten im Canvas aus, indem du darauf klickst. Du kannst mehrere Karten auswählen, indem du eine Auswahl um sie herum ziehst.

Du kannst auch Karten zu einer bestehenden Auswahl hinzufügen oder daraus entfernen, indem du `Shift` gedrückt hältst und sie auswählst.

Drücke `Strg+A` (oder `Cmd+A` unter macOS), um alle Karten im Canvas auszuwählen.

Um den Inhalt einer Karte zu scrollen, musst du sie zuerst auswählen.

### Karten anordnen

Ziehe eine ausgewählte Karte, um sie zu verschieben.

Drücke `Alt` (oder `Option` unter macOS) und ziehe, um die Auswahl zu duplizieren.

Du kannst `Shift` beim Ziehen gedrückt halten, um dich nur in eine Richtung zu bewegen.

Drücke `Leertaste` beim Verschieben einer Auswahl, um das Einrasten zu deaktivieren.

Das Auswählen einer Karte bringt sie in den Vordergrund.

### Kartengröße ändern

Ziehe eine der Kanten einer Karte, um ihre Größe zu ändern.

Du kannst `Leertaste` beim Ändern der Größe drücken, um das Einrasten zu deaktivieren.

Um das Seitenverhältnis beim Ändern der Größe beizubehalten, halte `Shift` gedrückt.

## Karten verbinden

Zeichne Linien zwischen Karten, um Beziehungen zwischen ihnen herzustellen. Verwende Farben und Beschriftungen, um zu beschreiben, wie sie zueinander in Beziehung stehen.

### Zwei Karten verbinden

Um zwei Karten mit einer gerichteten Linie zu verbinden:

1. Bewege den Cursor über eine der Kanten einer Karte, bis ein ausgefüllter Kreis erscheint.
2. Ziehe den Kreis zur Kante einer anderen Karte, um sie zu verbinden.

> [!tip] Tipp
> Wenn du die Linie ziehst, ohne sie mit einer anderen Karte zu verbinden, kannst du anschließend die Karte hinzufügen, mit der du sie verbinden möchtest.

### Zwei Karten trennen

Um die Verbindung zwischen zwei Karten zu entfernen:

1. Bewege den Cursor über eine Verbindungslinie, bis zwei kleine Kreise auf der Linie erscheinen.
2. Ziehe einen der Kreise von der Karte weg, ohne ihn mit einer anderen zu verbinden.

Du kannst auch zwei Karten trennen, indem du mit der rechten Maustaste auf die Linie zwischen ihnen klickst und dann **Entfernen** wählst. Oder indem du die Linie auswählst und dann die `Rücktaste` (oder `Entf` unter macOS) drückst.

### Eine Karte mit einer anderen Karte verbinden

Um eines der Enden einer Verbindungslinie zu verschieben:

1. Bewege den Cursor über eine Verbindungslinie, bis zwei kleine Kreise auf der Linie erscheinen.
2. Ziehe den Kreis über dem Ende, das du neu verbinden möchtest, zu einer anderen Karte.

### Einer Verbindung folgen

Wenn zwei verbundene Karten weit voneinander entfernt sind, kannst du zur Quelle oder zum Ziel der Verbindung navigieren, indem du mit der rechten Maustaste auf die Linie klickst und dann **Zum Ziel gehen** oder **Zur Quelle gehen** wählst.

### Einer Verbindung eine Beschriftung hinzufügen

Du kannst einer Linie eine Beschriftung hinzufügen, um die Beziehung zwischen zwei Karten zu beschreiben.

Um eine Verbindung zu beschriften:

1. Doppelklicke auf die Linie.
2. Gib die Beschriftung ein und drücke dann `Escape` oder klicke irgendwo auf den Canvas.

Du kannst eine Verbindung auch beschriften, indem du sie auswählst und dann **Beschriftung bearbeiten** in den Auswahlsteuerelementen wählst.

Um eine Verbindungsbeschriftung zu bearbeiten, doppelklicke auf die Linie, oder klicke mit der rechten Maustaste auf die Linie und wähle dann **Beschriftung bearbeiten**.

### Die Farbe einer Karte oder Verbindung ändern

1. Wähle die Karten oder Verbindungen aus, die du einfärben möchtest.
2. Wähle in den Auswahlsteuerelementen **Farbe wählen** ( ![[lucide-palette.svg#icon]] ).
3. Wähle eine Farbe.

## Karten gruppieren

### Ausgewählte Karten gruppieren

Um eine leere Gruppe zu erstellen:

- Klicke mit der rechten Maustaste auf den Canvas und wähle dann **Gruppe erstellen**.

Um verwandte Karten zu gruppieren:

1. Wähle die Karten aus.
2. Klicke mit der rechten Maustaste auf eine der ausgewählten Karten und wähle dann **Gruppe erstellen**.

**Gruppe umbenennen:** Doppelklicke auf den Namen der Gruppe, um ihn zu bearbeiten, und drücke dann `Enter` zum Speichern.

## Im Canvas navigieren

Wenn du mehr Karten zu deinem Canvas hinzufügst, möchtest du verstehen, wie du im Canvas navigieren kannst, um einen bestimmten Bereich zu betrachten. Erfahre, wie du verschieben und vergrößern kannst, um dich mühelos über den Canvas zu bewegen.

### Den Canvas verschieben

Um den Canvas vertikal und horizontal zu bewegen, auch bekannt als _Verschieben_, kannst du einen der folgenden Ansätze verwenden:

- Drücke `Leertaste` und ziehe den Canvas.
- Ziehe den Canvas mit der mittleren Maustaste.
- Scrolle mit der Maus, um vertikal zu verschieben, und drücke `Shift` beim Scrollen, um horizontal zu verschieben.

### Den Canvas vergrößern

Um den Canvas zu vergrößern, drücke `Leertaste` oder `Strg` (oder `Cmd` unter macOS) und scrolle mit dem Mausrad. Oder wähle **Vergrößern** ( ![[lucide-plus.svg#icon]] ) und **Verkleinern** ( ![[lucide-minus.svg#icon]] ) in den Zoom-Steuerelementen in der oberen rechten Ecke.

#### Vergrößerung anpassen

Um den Canvas so zu zoomen, dass jedes Element sichtbar ist, wähle **Vergrößerung anpassen** ( ![[lucide-maximize.svg#icon]] ). Oder verwende das Tastenkürzel `Shift+1`.

#### Auf Auswahl zoomen

Um den Canvas so zu zoomen, dass alle ausgewählten Elemente sichtbar sind, klicke mit der rechten Maustaste auf eine ausgewählte Karte und wähle dann **Auf Auswahl zoomen**. Oder verwende ein Tastenkürzel, indem du `Shift+2` drückst.

#### Vergrößerung zurücksetzen

Um die Vergrößerungsstufe auf den Standard zurückzusetzen, wähle **Vergrößerung zurücksetzen** in den Zoom-Steuerelementen in der oberen rechten Ecke.

## Erweiterte Tipps

Wir haben einige kurze Videos erstellt, die einige fortgeschrittene Anwendungsfälle von Canvas demonstrieren.

Du kannst [alle 72 Tipps hier ansehen](https://obsidian.md/canvas#protips). Bitte beachte, dass die Tipp-Videos nur auf dem Desktop sichtbar sind.
