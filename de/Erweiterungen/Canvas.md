---
permalink: plugins/canvas
mobile: true
---
Canvas ist eine [[Obsidian-Erweiterungen|Obsidian-Erweiterung]] für visuelles Notieren. Es bietet dir unendlich viel Platz, um Notizen anzuordnen und sie mit anderen Notizen, Anhängen und Webseiten zu verbinden.

Die Anordnung deiner Notizen in einem 2D-Raum hilft dir, die Verbindungen zwischen ihnen zu sehen und zu verstehen. Verbinde Notizen mit Linien und gruppiere verwandte Notizen.

Obsidian speichert Canvas-Dateien als `.canvas`-Dateien im offenen [JSON Canvas](https://jsoncanvas.org/)-Format.

## Einen neuen Canvas erstellen

Um Canvas zu verwenden, musst du zunächst eine Datei für deinen Canvas erstellen. Du kannst einen neuen Canvas mit folgenden Methoden erstellen:

**Befehlspalette:**

1. Öffne die [[Befehlspalette]].
2. Wähle **Canvas: Neuen Canvas erstellen**, um einen Canvas im selben Ordner wie die aktive Datei zu erstellen.

**Dateiexplorer:**

- Klicke im [[Dateiexplorer]] mit der rechten Maustaste auf den Ordner, in dem du den Canvas erstellen möchtest.
- Wähle **Neuer Canvas**.

**Werkzeugleiste:**

- Wähle in der vertikalen Werkzeugleiste **Neuen Canvas erstellen** ![[lucide-layout-dashboard.svg#icon]], um einen Canvas im selben Ordner wie die aktive Datei zu erstellen.

> [!note] Die Dateiendung .canvas
> Obsidian speichert deine Canvas-Daten als `.canvas`-Dateien in einem offenen Dateiformat namens [JSON Canvas](https://jsoncanvas.org/).

## Karten hinzufügen

Du kannst Dateien aus Obsidian oder aus anderen Anwendungen in deinen Canvas ziehen. Zum Beispiel Markdown-Dateien, Bilder, Audio, PDFs oder auch nicht erkannte Dateitypen.

### Textkarten hinzufügen

Du kannst reine Textkarten hinzufügen, die keine Datei referenzieren. Du kannst Markdown, Links und Quelltext-Blöcke auf die gleiche Weise wie in einer Notiz verwenden.

Um eine neue Textkarte zu deinem Canvas hinzuzufügen:

- Wähle oder ziehe das leere Dateisymbol am unteren Rand des Canvas.

Du kannst auch Textkarten hinzufügen, indem du auf den Canvas doppelklickst.

Um eine Textkarte in eine Datei umzuwandeln:

1. Klicke mit der rechten Maustaste auf die Textkarte und wähle dann **In Datei umwandeln...**.
2. Gib den Notiznamen ein und wähle dann **Speichern**.

> [!note] Reine Textkarten und Rückverweise
> Reine Textkarten erscheinen nicht in [[Rückverweise|Rückverweisen]]. Damit sie dort erscheinen, musst du sie in eine Datei umwandeln.

### Karten aus Notizen hinzufügen

Um eine Notiz aus deinem Vault zu deinem Canvas hinzuzufügen:

1. Wähle oder ziehe das Dokumentsymbol am unteren Rand des Canvas.
2. Wähle die Notiz aus, die du hinzufügen möchtest.

Du kannst auch Notizen über das Canvas-Kontextmenü hinzufügen:

1. Klicke mit der rechten Maustaste auf den Canvas und wähle dann **Notiz aus Vault hinzufügen**.
2. Wähle die Notiz aus, die du hinzufügen möchtest.

Du kannst auch Notizen aus dem [[Dateiexplorer]] in den Canvas ziehen.

Um nur einen Teil einer Notiz in einer Karte anzuzeigen, klicke mit der rechten Maustaste auf die Karte und wähle **Auf Überschrift beschränken...** oder **Auf Block beschränken...**. Wähle dann die Überschrift oder den Block aus.

### Karten aus Medien hinzufügen

Um Medien aus deinem Vault zu deinem Canvas hinzuzufügen:

1. Wähle oder ziehe das Bilddateisymbol am unteren Rand des Canvas.
2. Wähle die Mediendatei aus, die du hinzufügen möchtest.

Du kannst auch Medien über das Canvas-Kontextmenü hinzufügen:

1. Klicke mit der rechten Maustaste auf den Canvas und wähle dann **Medien aus Vault hinzufügen**.
2. Wähle die Mediendatei aus, die du hinzufügen möchtest.

Du kannst auch Mediendateien aus dem [[Dateiexplorer]] in den Canvas ziehen.

### Karten aus Webseiten hinzufügen

Um eine Webseite in deinen Canvas einzubetten:

1. Klicke mit der rechten Maustaste auf den Canvas und wähle dann **Webseite hinzufügen**.
2. Gib die URL der Webseite ein und wähle dann **Speichern**.

Du kannst auch eine URL in deinem Browser auswählen und dann in den Canvas ziehen, um sie in einer Karte einzubetten.

Um die Webseite in deinem Browser zu öffnen, drücke `Strg` (oder `Cmd` unter macOS) und wähle die Kartenbeschriftung. Oder klicke mit der rechten Maustaste auf die Karte und wähle **Externen Link öffnen**.

Klicke mit der rechten Maustaste auf eine Webseiten-Karte für weitere Optionen.

- **URL kopieren** kopiert die Adresse der Webseite.
- **URL anpassen...** ändert die Adresse, die die Karte anzeigt.
- **Seite neu laden** lädt die Webseite erneut.

### Karten aus Basen hinzufügen

Um eine [[Einführung in Bases|Basis]] in deinem Canvas anzuzeigen, ziehe die Basis-Datei aus dem Dateiexplorer in den Canvas. Die Karte zeigt die Basis an.

Eine Basis-Karte zeigt die Standardansicht der Basis. Um eine andere Ansicht anzuzeigen:

1. Klicke mit der rechten Maustaste auf die Karte und wähle dann **Ansicht anheften...**.
2. Wähle die gewünschte Ansicht aus.

Um zur Standardansicht zurückzukehren, wähle erneut **Ansicht anheften...** und dann **Standard-Ansicht anzeigen**.

### Karten aus Ordnern hinzufügen

Ziehe einen Ordner aus dem [[Dateiexplorer]], um alle Dateien in diesem Ordner zum Canvas hinzuzufügen.

### Eine Karte bearbeiten

Doppelklicke auf eine Text- oder Notizkarte, um sie zu bearbeiten. Klicke irgendwo außerhalb der Karte, um die Bearbeitung zu beenden. Du kannst auch `Escape` drücken, um die Bearbeitung einer Karte zu beenden.

Du kannst eine Karte auch bearbeiten, indem du mit der rechten Maustaste darauf klickst und **Bearbeiten** wählst. Oder wähle die Karte aus und dann **Bearbeiten** ![[lucide-square-pen.svg#icon]] in den Auswahlsteuerelementen.

### Eine Karte löschen

Entferne ausgewählte Karten, indem du mit der rechten Maustaste auf eine davon klickst und dann **Entfernen** wählst. Oder drücke die `Rücktaste` (oder `Entf` unter macOS).

Du kannst auch **Entfernen** ![[lucide-trash-2.svg#icon]] in den Auswahlsteuerelementen über deiner Auswahl wählen.

### Karten austauschen

Du kannst eine Notiz- oder Medienkarte gegen eine andere Karte desselben Typs austauschen.

Um eine Notizkarte auszutauschen:

1. Klicke mit der rechten Maustaste auf die Karte, die du ersetzen möchtest.
2. Wähle **Datei tauschen**.
3. Wähle die Notiz aus, durch die du ersetzen möchtest.

## Karten auswählen

Wähle einzelne Karten aus oder ziehe eine Auswahl um mehrere Karten.

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

### Karten ausrichten und anordnen

Um mehrere Karten auszurichten, wähle zwei oder mehr Karten aus. Wähle in den Auswahlsteuerelementen **Ausrichten** und dann eine Option.

- **Links ausrichten**, **Mitte horizontal ausrichten** und **Rechts ausrichten** richten die Karten auf einer vertikalen Linie aus.
- **Oben ausrichten**, **Mitte vertikal ausrichten** und **Unten ausrichten** richten die Karten auf einer horizontalen Linie aus.
- **In einer Zeile anordnen**, **In einer Spalte anordnen** und **Gitterförmig anordnen** verschieben die Karten in dieses Layout.
- **Horizontale Abstände aufteilen** und **Vertikale Abstände aufteilen** verteilen die Karten gleichmäßig.
- **Horizontal ausrichten** und **Vertikal ausrichten** ändern die Größe jeder Karte, damit sie die gesamte Breite oder Höhe der Auswahl ausfüllt.

## Karten verbinden

Zeichne Linien zwischen Karten, um Beziehungen darzustellen. Füge Farben und Beschriftungen hinzu, um zu beschreiben, wie sie zueinander in Beziehung stehen.

### Zwei Karten verbinden

Um zwei Karten mit einer gerichteten Linie zu verbinden:

1. Bewege den Cursor über eine der Kanten einer Karte, bis ein ausgefüllter Kreis erscheint.
2. Ziehe den Kreis zur Kante einer anderen Karte, um sie zu verbinden.

> [!tip]- Eine Karte aus einer neuen Verbindung erstellen
> Wenn du die Linie ziehst, ohne sie mit einer anderen Karte zu verbinden, kannst du am anderen Ende eine neue Karte erstellen.

### Zwei Karten trennen

Um die Verbindung zwischen zwei Karten zu entfernen:

1. Bewege den Cursor über eine Verbindungslinie, bis zwei kleine Kreise auf der Linie erscheinen.
2. Ziehe einen der Kreise von der Karte weg, ohne ihn mit einer anderen zu verbinden.

Du kannst auch zwei Karten trennen, indem du mit der rechten Maustaste auf die Linie zwischen ihnen klickst und dann **Entfernen** wählst. Oder wähle die Linie aus und drücke dann die `Rücktaste` (oder `Entf` unter macOS).

### Eine Karte mit einer anderen Karte verbinden

Um eines der Enden einer Verbindungslinie zu verschieben:

1. Bewege den Cursor über eine Verbindungslinie, bis zwei kleine Kreise auf der Linie erscheinen.
2. Ziehe den Kreis zu einer anderen Karte, um die Verbindung neu herzustellen.

### Einer Verbindung folgen

Wenn zwei verbundene Karten weit voneinander entfernt sind, kannst du zur Karte am anderen Ende der Verbindung springen. Klicke mit der rechten Maustaste auf die Linie nahe einem Ende und wähle dann **Verbindung verfolgen**. Der Canvas bewegt sich zur Karte am gegenüberliegenden Ende.

### Einer Verbindung eine Beschriftung hinzufügen

Du kannst einer Linie eine Beschriftung hinzufügen, um die Beziehung zwischen zwei Karten zu beschreiben.

Um eine Verbindung zu beschriften:

1. Doppelklicke auf die Linie.
2. Gib die Beschriftung ein und drücke dann `Escape` oder klicke irgendwo auf den Canvas.

Du kannst eine Verbindung auch beschriften, indem du sie auswählst und dann **Beschriftung bearbeiten** in den Auswahlsteuerelementen wählst.

Um eine Verbindungsbeschriftung zu bearbeiten, doppelklicke auf die Linie, oder klicke mit der rechten Maustaste auf die Linie und wähle dann **Beschriftung bearbeiten**.

Um eine Beschriftung zu entfernen, wähle die Verbindung aus und wähle dann **Beschriftung entfernen** in den Auswahlsteuerelementen.

### Die Richtung einer Verbindung ändern

Standardmäßig hat eine Verbindung einen Pfeil am Ende, der zur zweiten Karte zeigt. Um dies zu ändern:

1. Wähle die Verbindung aus.
2. Wähle in den Auswahlsteuerelementen **Verbindungsrichtung**.
3. Wähle **Ohne Richtung**, **In eine Richtung** oder **In beide Richtungen**.

### Die Farbe einer Karte oder Verbindung ändern

1. Wähle die Karten oder Verbindungen aus, die du einfärben möchtest.
2. Wähle in den Auswahlsteuerelementen **Farbe wählen** ![[lucide-palette.svg#icon]].
3. Wähle eine Farbe.

## Karten gruppieren

### Ausgewählte Karten gruppieren

Um eine leere Gruppe zu erstellen:

- Klicke mit der rechten Maustaste auf den Canvas und wähle dann **Gruppe erstellen**.

Um verwandte Karten zu gruppieren:

1. Wähle die Karten aus.
2. Klicke mit der rechten Maustaste auf eine der ausgewählten Karten und wähle dann **Gruppe erstellen**.

**Gruppe umbenennen:** Doppelklicke auf den Namen der Gruppe, um ihn zu bearbeiten, und drücke dann `Enter` zum Speichern.

### Einen Hintergrund zu einer Gruppe hinzufügen

Du kannst ein Bild hinter den Karten in einer Gruppe anzeigen.

1. Wähle die Gruppe aus.
2. Wähle in den Auswahlsteuerelementen **Hintergrund auswählen**.
3. Wähle ein Bild aus deinem Vault.

Um den Hintergrund zu ändern, wähle die Gruppe aus und dann **Hintergrund bearbeiten**.

- **Hintergrund ersetzen** wählt ein anderes Bild.
- **Hintergrund entfernen** entfernt das Bild.
- **Abdecken** lässt das Bild die Gruppe ausfüllen.
- **Seitenverhältnis beibehalten** behält die Proportionen des Bildes bei.
- **Wiederholen** kachelt das Bild über die Gruppe.

## Im Canvas navigieren

Verwende Verschieben und Vergrößern, um dich über den Canvas zu bewegen.

### Den Canvas verschieben

Um den Canvas vertikal und horizontal zu bewegen, auch bekannt als _Verschieben_, kannst du einen der folgenden Ansätze verwenden:

- Drücke `Leertaste` und ziehe den Canvas.
- Ziehe den Canvas mit der mittleren Maustaste.
- Scrolle mit der Maus, um vertikal zu verschieben, und drücke `Shift` beim Scrollen, um horizontal zu verschieben.

### Den Canvas vergrößern

Um den Canvas zu vergrößern, drücke `Leertaste` oder `Strg` (oder `Cmd` unter macOS) und scrolle mit dem Mausrad. Oder wähle **Vergrößern** ![[lucide-plus.svg#icon]] und **Verkleinern** ![[lucide-minus.svg#icon]] in den Zoom-Steuerelementen in der oberen rechten Ecke.

#### Vergrößerung anpassen

Um den Canvas so zu zoomen, dass jedes Element sichtbar ist, wähle **Vergrößerung anpassen** ![[lucide-maximize.svg#icon]]. Oder verwende das Tastenkürzel `Shift+1`.

#### Auf Auswahl zoomen

Um den Canvas so zu zoomen, dass alle ausgewählten Elemente sichtbar sind, klicke mit der rechten Maustaste auf eine ausgewählte Karte und wähle dann **Auf Auswahl zoomen**. Oder drücke `Shift+2`.

#### Vergrößerung zurücksetzen

Um die Vergrößerungsstufe auf den Standard zurückzusetzen, wähle **Vergrößerung zurücksetzen** in den Zoom-Steuerelementen in der oberen rechten Ecke.


### Zu einer Gruppe springen

Um in einem großen Canvas direkt zu einer Gruppe zu navigieren, öffne die Befehlspalette und wähle **Canvas: Springe zu Gruppe**. Eine Liste der Gruppen in deinem Canvas erscheint. Wähle die Gruppe aus, zu der du navigieren möchtest, und der Canvas zentriert sich darauf.

## Canvas-Einstellungen

Wähle **Canvas Einstellungen** ![[lucide-settings.svg#icon]] über den Canvas-Steuerelementen, um das Verhalten deines Canvas zu ändern.

- **Am Raster ausrichten** rastet Karten am Hintergrundraster ein, wenn du sie verschiebst und ihre Größe änderst.
- **An Objekten ausrichten** rastet Karten an nahegelegenen Karten ein, wenn du sie verschiebst und ihre Größe änderst.
- **Nur Leseansicht** verhindert Änderungen am Canvas.

## Einen Canvas als Bild exportieren

Du kannst einen Canvas auf dem Desktop als PNG-Bild exportieren. Der Export als Bild ist in der mobilen Obsidian-App nicht verfügbar.

1. Öffne den Canvas, den du exportieren möchtest.
2. Öffne die Befehlspalette und wähle **Canvas: Als Bild exportieren**.
3. Wähle deine Einstellungen.
    - **Viewport** legt fest, was exportiert wird. Wähle **Kompletter Canvas** für den gesamten Canvas oder **Nur Viewport** für den aktuell sichtbaren Bereich.
    - **Vergrößern** legt die Bildqualität fest. Eine höhere Vergrößerung erzeugt ein größeres, schärferes Bild. Der Dialog zeigt die geschätzte Bildgröße an.
    - **Logo einblenden** fügt ein Obsidian-Logo in der unteren linken Ecke hinzu. Dies ist standardmäßig aktiviert.
    - **Privater Modus** blendet den gesamten Text auf deinem Canvas aus. Dies ist standardmäßig deaktiviert.
4. Wähle **Speichern**.
5. Wähle den Speicherort für die Datei. Der Dateiname entspricht standardmäßig dem Namen deines Canvas mit der Endung `.png`.

Ein leerer Canvas kann nicht exportiert werden.

## Rückgängig und Wiederholen

Um deine letzte Änderung rückgängig zu machen, wähle **Rückgängig** in den Canvas-Steuerelementen auf der rechten Seite des Canvas. Oder drücke `Strg+Z` (Windows und Linux) oder `Cmd+Z` (macOS).

Um eine Änderung zu wiederholen, wähle **Wiederholen**. Oder drücke `Strg+Y` oder `Strg+Shift+Z` (Windows und Linux) oder `Cmd+Y` oder `Cmd+Shift+Z` (macOS).

## Canvas-Hilfe

Auf dem Desktop wähle **Canvas Hilfe** ![[lucide-help-circle.svg#icon]] unter den Canvas-Steuerelementen, um eine Liste der Tastenkürzel für Verschieben, Vergrößern, Auswählen und Bewegen von Karten anzuzeigen.

## Einen Canvas in eine Notiz einbetten

Du kannst einen Canvas mit der Standard-Einbettungssyntax in eine Notiz einbetten. Weitere Informationen findest du unter [[Dateien einbetten#Embed a canvas in a note|Einen Canvas in eine Notiz einbetten]].

## Canvas auf Mobilgeräten verwenden

Wenn du einen Canvas auf einem Telefon oder Tablet öffnest, zeigt Obsidian drei Hinweise an.

- **Ziehen zum Verschieben**
- **Vergrößern durch Aufziehen**
- **Berühren und halten zum Hinzufügen / Bewegen / Auswählen**

### Das Canvas-Menü öffnen

Berühre und halte einen leeren Bereich des Canvas. Das Menü enthält folgende Einträge:

- **Karte hinzufügen** fügt eine Textkarte hinzu.
- **Notiz aus Vault hinzufügen** fügt eine Notiz aus deinem Vault hinzu.
- **Medien aus Vault hinzufügen** fügt Medien aus deinem Vault hinzu.
- **Webseite hinzufügen** bettet eine Webseite ein.
- **Gruppe erstellen** erstellt eine leere Gruppe.
- **Am Raster ausrichten**, **An Objekten ausrichten** und **Nur Leseansicht** sind die gleichen Optionen wie in den **Canvas-Einstellungen**.

### Karten hinzufügen

Du kannst Karten über das Canvas-Menü hinzufügen. Du kannst auch ein Symbol am unteren Rand des Canvas auswählen.

- Das leere Dateisymbol fügt eine Textkarte hinzu.
- Das Dokumentsymbol fügt eine Notiz aus deinem Vault hinzu.
- Das Bildsymbol fügt Medien aus deinem Vault hinzu.

### Mit einer ausgewählten Karte arbeiten

Tippe auf eine Karte, um sie auszuwählen. Eine Symbolleiste erscheint über der Karte.

- **Entfernen** ![[lucide-trash-2.svg#icon]] löscht die Karte.
- **Farbe wählen** ![[lucide-palette.svg#icon]] ändert die Farbe der Karte.
- **Auf Auswahl zoomen** zoomt den Canvas auf die Karte.
- **Bearbeiten** ![[lucide-square-pen.svg#icon]] bearbeitet die Karte.

### Eine Karte verschieben

1. Tippe auf die Karte, um sie auszuwählen.
2. Berühre und halte die ausgewählte Karte und ziehe sie dann an eine neue Position.

### Kartengröße ändern

1. Tippe auf die Karte, um sie auszuwählen.
2. Ziehe an den Seiten der Karte, um sie größer oder kleiner zu machen.

### Das Kartenmenü öffnen

Berühre und halte eine Karte. Das Menü enthält folgende Einträge:

- **Auf Auswahl zoomen** zoomt den Canvas auf die Karte.
- **Bearbeiten** bearbeitet die Karte.
- **In Datei umwandeln...** wandelt eine Textkarte in eine Notiz um.
- **Duplizieren** erstellt eine Kopie der Karte.
- **Entfernen** löscht die Karte.

### Eine Karte bearbeiten

Um eine Textkarte oder Notizkarte zu bearbeiten, verwende eine der folgenden Methoden:

- Tippe auf die Karte, um sie auszuwählen, und tippe dann doppelt darauf. Die Tastatur öffnet sich.
- Tippe auf die Karte, um sie auszuwählen, und wähle dann **Bearbeiten** ![[lucide-square-pen.svg#icon]] in der Symbolleiste über der Karte.

### Eine Verbindung beschriften

1. Tippe auf die Linie, um sie auszuwählen.
2. Wähle in der Symbolleiste **Beschriftung bearbeiten** ![[lucide-square-pen.svg#icon]]. Die Tastatur öffnet sich.
3. Gib die Beschriftung ein.

Um eine Beschriftung zu entfernen, tippe auf die Linie und wähle dann **Beschriftung entfernen** in der Symbolleiste.

### Die Richtung einer Verbindung ändern

1. Tippe auf die Linie, um sie auszuwählen.
2. Wähle in der Symbolleiste **Verbindungsrichtung**.
3. Wähle **Ohne Richtung**, **In eine Richtung** oder **In beide Richtungen**.

### Das Linienmenü öffnen

Berühre und halte eine Linie, die zwei Karten verbindet. Das Menü enthält folgende Einträge:

- **Beschriftung bearbeiten** fügt eine Beschriftung hinzu oder ändert sie.
- **Verbindung verfolgen** bewegt den Canvas zur Karte am gegenüberliegenden Ende der Linie.
- **Entfernen** löscht die Verbindung.

### Karten verbinden

1. Tippe auf eine Karte, um sie auszuwählen.
2. Ziehe einen der Kreise an ihren Kanten zu einer anderen Karte.

Wenn du die Linie ziehst und in einem leeren Bereich loslässt, öffnet sich ein Menü mit **Karte hinzufügen** und **Notiz aus Vault hinzufügen**. Wähle eine Option, um eine Karte am Ende der Linie hinzuzufügen.

### Karten trennen

Um eine Verbindung zu entfernen, verwende eine der folgenden Methoden:

- Tippe auf die Linie und wähle dann **Entfernen** ![[lucide-trash-2.svg#icon]].
- Ziehe das Pfeilende der Linie zurück zur Karte, von der sie ausging. Die Linie verschwindet.

### Karten gruppieren

Um eine Gruppe zu erstellen:

1. Berühre und halte einen leeren Bereich des Canvas.
2. Wähle **Gruppe erstellen**.
3. Ziehe an den Kanten der Gruppe, um ihre Größe zu ändern.

Um Karten zu einer Gruppe hinzuzufügen, ziehe sie in den Bereich der Gruppe. Wenn du die Gruppe verschiebst, bewegen sich die Karten darin mit.

Um eine Gruppe umzubenennen, tippe doppelt auf ihren Namen. Die Tastatur öffnet sich. Gib den neuen Namen ein.

### Canvas-Steuerelemente

Steuerelemente auf der rechten Seite des Canvas ändern die Ansicht und deine Einstellungen.

- **Vergrößern** und **Verkleinern** ändern die Vergrößerungsstufe.
- **Vergrößerung zurücksetzen** setzt den Canvas auf die Standard-Vergrößerungsstufe zurück.
- **Vergrößerung anpassen** zeigt alle Karten im Canvas an.
- **Rückgängig** und **Wiederholen** machen die letzte Änderung rückgängig oder wiederholen sie.
- **Canvas-Einstellungen** enthält die Optionen **Am Raster ausrichten**, **An Objekten ausrichten** und **Nur Leseansicht**.

## Erweiterte Tipps

Wir haben einige kurze Videos erstellt, die einige fortgeschrittene Anwendungsfälle von Canvas demonstrieren.

Du kannst [alle 72 Tipps hier ansehen](https://obsidian.md/canvas#protips). Die Tipp-Videos sind nur auf dem Desktop sichtbar.
