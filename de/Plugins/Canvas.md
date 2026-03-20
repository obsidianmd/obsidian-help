---
permalink: plugins/canvas
---
Canvas ist eine [[Obsidian-Erweiterungen|Obsidian-Erweiterung]] für visuelles Notieren. Es bietet Ihnen unendlich viel Platz, um Notizen anzuordnen und sie mit anderen Notizen, Anhängen und Webseiten zu verbinden.

Visuelles Notieren hilft Ihnen, Ihre Notizen besser zu verstehen, indem Sie sie in einem 2D-Raum organisieren. Verbinden Sie Notizen mit Linien und gruppieren Sie verwandte Notizen, um die Beziehungen zwischen ihnen besser zu verstehen.

Canvas-Daten, die Sie in Obsidian erstellen, werden als `.canvas`-Dateien im offenen Dateiformat [JSON Canvas](https://jsoncanvas.org/) gespeichert.

## Einen neuen Canvas erstellen

Um Canvas zu verwenden, müssen Sie zunächst eine Datei für Ihren Canvas erstellen. Sie können einen neuen Canvas mit folgenden Methoden erstellen:

**Befehlspalette:**

1. Öffnen Sie die [[Befehlspalette]].
2. Wählen Sie **Canvas: Neuen Canvas erstellen**, um einen Canvas im selben Ordner wie die aktive Datei zu erstellen.

**Dateiexplorer:**

- Klicken Sie im [[Dateiexplorer]] mit der rechten Maustaste auf den Ordner, in dem Sie den Canvas erstellen möchten.
- Wählen Sie **Neuer Canvas**.

**Werkzeugleiste:**

- Wählen Sie in der vertikalen Werkzeugleiste **Neuen Canvas erstellen** ( ![[lucide-layout-dashboard.svg#icon]] ), um einen Canvas im selben Ordner wie die aktive Datei zu erstellen.

> [!note] Die Dateiendung .canvas
> Obsidian speichert Ihre Canvas-Daten als `.canvas`-Dateien in einem offenen Dateiformat namens [JSON Canvas](https://jsoncanvas.org/).

## Karten hinzufügen

Sie können Dateien aus Obsidian oder aus anderen Anwendungen in Ihren Canvas ziehen. Zum Beispiel Markdown-Dateien, Bilder, Audio, PDFs oder auch nicht erkannte Dateitypen.

### Textkarten hinzufügen

Sie können reine Textkarten hinzufügen, die keine Datei referenzieren. Sie können Markdown, Links und Quelltext-Blöcke genau wie in einer Notiz verwenden.

Um eine neue Textkarte zu Ihrem Canvas hinzuzufügen:

- Wählen oder ziehen Sie das leere Dateisymbol am unteren Rand des Canvas.

Sie können auch Textkarten hinzufügen, indem Sie auf den Canvas doppelklicken.

Um eine Textkarte in eine Datei umzuwandeln:

1. Klicken Sie mit der rechten Maustaste auf die Textkarte und wählen Sie dann **In Datei umwandeln...**.
2. Geben Sie den Notiznamen ein und wählen Sie dann **Speichern**.

> [!note] Hinweis
> Reine Textkarten erscheinen nicht in [[Rückverweise|Rückverweisen]]. Damit sie dort erscheinen, müssen Sie sie in eine Datei umwandeln.

### Karten aus Notizen hinzufügen

Um eine Notiz aus Ihrem Vault zu Ihrem Canvas hinzuzufügen:

1. Wählen oder ziehen Sie das Dokumentsymbol am unteren Rand des Canvas.
2. Wählen Sie die Notiz aus, die Sie hinzufügen möchten.

Sie können auch Notizen über das Canvas-Kontextmenü hinzufügen:

1. Klicken Sie mit der rechten Maustaste auf den Canvas und wählen Sie dann **Notiz aus Vault hinzufügen**.
2. Wählen Sie die Notiz aus, die Sie hinzufügen möchten.

Oder Sie können sie zum Canvas hinzufügen, indem Sie die Datei aus dem [[Dateiexplorer]] ziehen.

### Karten aus Medien hinzufügen

Um Medien aus Ihrem Vault zu Ihrem Canvas hinzuzufügen:

1. Wählen oder ziehen Sie das Bilddateisymbol am unteren Rand des Canvas.
2. Wählen Sie die Mediendatei aus, die Sie hinzufügen möchten.

Sie können auch Medien über das Canvas-Kontextmenü hinzufügen:

1. Klicken Sie mit der rechten Maustaste auf den Canvas und wählen Sie dann **Medien aus Vault hinzufügen**.
2. Wählen Sie die Mediendatei aus, die Sie hinzufügen möchten.

Oder Sie können sie zum Canvas hinzufügen, indem Sie die Datei aus dem [[Dateiexplorer]] ziehen.

### Karten aus Webseiten hinzufügen

Um eine Webseite in Ihren Canvas einzubetten:

1. Klicken Sie mit der rechten Maustaste auf den Canvas und wählen Sie dann **Webseite hinzufügen**.
2. Geben Sie die URL der Webseite ein und wählen Sie dann **Speichern**.

Sie können auch eine URL in Ihrem Browser auswählen und dann in den Canvas ziehen, um sie in einer Karte einzubetten.

Um die Webseite in Ihrem Browser zu öffnen, drücken Sie `Strg` (oder `Cmd` unter macOS) und wählen Sie die Kartenbeschriftung. Oder klicken Sie mit der rechten Maustaste auf die Karte und wählen Sie **Im Browser öffnen**.

### Karten aus Ordnern hinzufügen

Ziehen Sie einen Ordner aus dem Dateiexplorer, um alle Dateien in diesem Ordner zum Canvas hinzuzufügen.

### Eine Karte bearbeiten

Doppelklicken Sie auf eine Text- oder Notizkarte, um sie zu bearbeiten. Klicken Sie außerhalb der Karte, um die Bearbeitung zu beenden. Sie können auch `Escape` drücken, um die Bearbeitung einer Karte zu beenden.

Sie können eine Karte auch bearbeiten, indem Sie mit der rechten Maustaste darauf klicken und **Bearbeiten** wählen.

### Eine Karte löschen

Entfernen Sie ausgewählte Karten, indem Sie mit der rechten Maustaste auf eine davon klicken und dann **Löschen** wählen. Oder drücken Sie die `Rücktaste` (oder `Entf` unter macOS).

Sie können auch **Entfernen** ( ![[lucide-trash-2.svg#icon]] ) in den Auswahlsteuerelementen über Ihrer Auswahl wählen.

### Karten austauschen

Sie können eine Notiz- oder Medienkarte gegen eine andere Karte desselben Typs austauschen.

Um eine Notizkarte auszutauschen:

1. Klicken Sie mit der rechten Maustaste auf die Karte, die Sie ersetzen möchten.
2. Wählen Sie **Datei tauschen**.
3. Wählen Sie die Notiz aus, durch die Sie ersetzen möchten.

## Karten auswählen

Wählen Sie Karten im Canvas aus, indem Sie darauf klicken. Sie können mehrere Karten auswählen, indem Sie eine Auswahl um sie herum ziehen.

Sie können auch Karten zu einer bestehenden Auswahl hinzufügen oder daraus entfernen, indem Sie `Shift` gedrückt halten und sie auswählen.

Drücken Sie `Strg+A` (oder `Cmd+A` unter macOS), um alle Karten im Canvas auszuwählen.

Um den Inhalt einer Karte zu scrollen, müssen Sie sie zuerst auswählen.

### Karten anordnen

Ziehen Sie eine ausgewählte Karte, um sie zu verschieben.

Drücken Sie `Alt` (oder `Option` unter macOS) und ziehen Sie, um die Auswahl zu duplizieren.

Sie können `Shift` beim Ziehen gedrückt halten, um sich nur in eine Richtung zu bewegen.

Drücken Sie `Leertaste` beim Verschieben einer Auswahl, um das Einrasten zu deaktivieren.

Das Auswählen einer Karte bringt sie in den Vordergrund.

### Kartengröße ändern

Ziehen Sie eine der Kanten einer Karte, um ihre Größe zu ändern.

Sie können `Leertaste` beim Ändern der Größe drücken, um das Einrasten zu deaktivieren.

Um das Seitenverhältnis beim Ändern der Größe beizubehalten, halten Sie `Shift` gedrückt.

## Karten verbinden

Zeichnen Sie Linien zwischen Karten, um Beziehungen zwischen ihnen herzustellen. Verwenden Sie Farben und Beschriftungen, um zu beschreiben, wie sie zueinander in Beziehung stehen.

### Zwei Karten verbinden

Um zwei Karten mit einer gerichteten Linie zu verbinden:

1. Bewegen Sie den Cursor über eine der Kanten einer Karte, bis ein ausgefüllter Kreis erscheint.
2. Ziehen Sie den Kreis zur Kante einer anderen Karte, um sie zu verbinden.

> [!tip] Tipp
> Wenn Sie die Linie ziehen, ohne sie mit einer anderen Karte zu verbinden, können Sie anschließend die Karte hinzufügen, mit der Sie sie verbinden möchten.

### Zwei Karten trennen

Um die Verbindung zwischen zwei Karten zu entfernen:

1. Bewegen Sie den Cursor über eine Verbindungslinie, bis zwei kleine Kreise auf der Linie erscheinen.
2. Ziehen Sie einen der Kreise von der Karte weg, ohne ihn mit einer anderen zu verbinden.

Sie können auch zwei Karten trennen, indem Sie mit der rechten Maustaste auf die Linie zwischen ihnen klicken und dann **Entfernen** wählen. Oder indem Sie die Linie auswählen und dann die `Rücktaste` (oder `Entf` unter macOS) drücken.

### Eine Karte mit einer anderen Karte verbinden

Um eines der Enden einer Verbindungslinie zu verschieben:

1. Bewegen Sie den Cursor über eine Verbindungslinie, bis zwei kleine Kreise auf der Linie erscheinen.
2. Ziehen Sie den Kreis über dem Ende, das Sie neu verbinden möchten, zu einer anderen Karte.

### Einer Verbindung folgen

Wenn zwei verbundene Karten weit voneinander entfernt sind, können Sie zur Quelle oder zum Ziel der Verbindung navigieren, indem Sie mit der rechten Maustaste auf die Linie klicken und dann **Zum Ziel gehen** oder **Zur Quelle gehen** wählen.

### Einer Verbindung eine Beschriftung hinzufügen

Sie können einer Linie eine Beschriftung hinzufügen, um die Beziehung zwischen zwei Karten zu beschreiben.

Um eine Verbindung zu beschriften:

1. Doppelklicken Sie auf die Linie.
2. Geben Sie die Beschriftung ein und drücken Sie dann `Escape` oder klicken Sie irgendwo auf den Canvas.

Sie können eine Verbindung auch beschriften, indem Sie sie auswählen und dann **Beschriftung bearbeiten** in den Auswahlsteuerelementen wählen.

Um eine Verbindungsbeschriftung zu bearbeiten, doppelklicken Sie auf die Linie, oder klicken Sie mit der rechten Maustaste auf die Linie und wählen Sie dann **Beschriftung bearbeiten**.

### Die Farbe einer Karte oder Verbindung ändern

1. Wählen Sie die Karten oder Verbindungen aus, die Sie einfärben möchten.
2. Wählen Sie in den Auswahlsteuerelementen **Farbe wählen** ( ![[lucide-palette.svg#icon]] ).
3. Wählen Sie eine Farbe.

## Karten gruppieren

### Ausgewählte Karten gruppieren

Um eine leere Gruppe zu erstellen:

- Klicken Sie mit der rechten Maustaste auf den Canvas und wählen Sie dann **Gruppe erstellen**.

Um verwandte Karten zu gruppieren:

1. Wählen Sie die Karten aus.
2. Klicken Sie mit der rechten Maustaste auf eine der ausgewählten Karten und wählen Sie dann **Gruppe erstellen**.

**Gruppe umbenennen:** Doppelklicken Sie auf den Namen der Gruppe, um ihn zu bearbeiten, und drücken Sie dann `Enter` zum Speichern.

## Im Canvas navigieren

Wenn Sie mehr Karten zu Ihrem Canvas hinzufügen, möchten Sie verstehen, wie Sie im Canvas navigieren können, um einen bestimmten Bereich zu betrachten. Erfahren Sie, wie Sie verschieben und vergrößern, um sich mühelos über den Canvas zu bewegen.

### Den Canvas verschieben

Um den Canvas vertikal und horizontal zu bewegen, auch bekannt als _Verschieben_, können Sie einen der folgenden Ansätze verwenden:

- Drücken Sie `Leertaste` und ziehen Sie den Canvas.
- Ziehen Sie den Canvas mit der mittleren Maustaste.
- Scrollen Sie mit der Maus, um vertikal zu verschieben, und drücken Sie `Shift` beim Scrollen, um horizontal zu verschieben.

### Den Canvas vergrößern

Um den Canvas zu vergrößern, drücken Sie `Leertaste` oder `Strg` (oder `Cmd` unter macOS) und scrollen Sie mit dem Mausrad. Oder wählen Sie **Vergrößern** ( ![[lucide-plus.svg#icon]] ) und **Verkleinern** ( ![[lucide-minus.svg#icon]] ) in den Zoom-Steuerelementen in der oberen rechten Ecke.

#### Vergrößerung anpassen

Um den Canvas so zu zoomen, dass jedes Element sichtbar ist, wählen Sie **Vergrößerung anpassen** ( ![[lucide-maximize.svg#icon]] ). Oder verwenden Sie das Tastenkürzel `Shift+1`.

#### Auf Auswahl zoomen

Um den Canvas so zu zoomen, dass alle ausgewählten Elemente sichtbar sind, klicken Sie mit der rechten Maustaste auf eine ausgewählte Karte und wählen Sie dann **Auf Auswahl zoomen**. Oder verwenden Sie ein Tastenkürzel, indem Sie `Shift+2` drücken.

#### Vergrößerung zurücksetzen

Um die Vergrößerungsstufe auf den Standard zurückzusetzen, wählen Sie **Vergrößerung zurücksetzen** in den Zoom-Steuerelementen in der oberen rechten Ecke.

## Erweiterte Tipps

Wir haben einige kurze Videos erstellt, die einige fortgeschrittene Anwendungsfälle von Canvas demonstrieren.

Sie können [alle 72 Tipps hier ansehen](https://obsidian.md/canvas#protips). Bitte beachten Sie, dass die Tipp-Videos nur auf dem Desktop sichtbar sind.
