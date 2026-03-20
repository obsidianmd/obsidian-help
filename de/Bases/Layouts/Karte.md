---
permalink: bases/views/map
---
Karte ist eine Art von [[Ansichten|Ansicht]], die in [[Einführung in Bases|Bases]] verwendet werden kann. Sie erfordert die Installation der [Maps-Erweiterung](obsidian://show-plugin?id=maps).

Wähle ![[lucide-map.svg#icon]]  **Karte** aus dem Ansichtsmenü, um Dateien als interaktive Karte mit Markern für jede Datei und einer Vorschau anzuzeigen, die Eigenschaften dieser Datei darstellt.

![[bases-map-places.png#interface]]

## Maps-Erweiterung installieren

Kartenansichten erfordern Obsidian 1.10. Die [Maps-Erweiterung](obsidian://show-plugin?id=maps) ist eine offizielle [[Community-Erweiterungen|Community-Erweiterung]], die separat heruntergeladen werden kann.

1. Folge den Anweisungen unter [[Community-Erweiterungen#Eine Community-Erweiterung installieren]]
2. Lade [Maps](obsidian://show-plugin?id=maps) aus der Liste herunter und aktiviere sie

## Beispiel

Erstelle zum Einstieg eine Notiz namens **Eiffelturm** und kopiere die folgenden Eigenschaften hinein:

```yaml
---
coordinates:
  - "48.85837"
  - "2.294481"
icon: "landmark"
color: "red"
tags:
  - places
---
```

Hier ist die Bedeutung des obigen Codes:

| Eigenschaft   | Wert                     |                                                                                                                                                                              |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Koordinaten werden als `Breitengrad, Längengrad` gespeichert. Koordinaten können durch Rechtsklick auf einen Ort auf der Karte und Auswahl von **Koordinaten kopieren** abgerufen werden. |
| `icon`        | `landmark`               | Der Name eines Symbols aus der [Lucide-Bibliothek](https://lucide.dev/).                                                                                                     |
| `color`       | `red`                    | Ein gültiger CSS-Wert: Hex, RGB, benannte Farbe usw.                                                                                                                        |
| `tags`        | `places`                 | Der Tag, den wir verwenden, um Kartenmarker in unserer Basis zu finden.                                                                                                      |
Erstelle nun eine Kartenansicht mit einem Filter für den Tag `places` und setze Marker-Koordinaten, Symbol und Farbe mithilfe der oben aufgeführten Eigenschaften.

Du kannst auch diese [Beispieldateien](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) in Obsidian öffnen, um funktionierende Kartenansichten mit bereits konfigurierten Markern, Symbolen und Farben zu sehen.

## Einstellungen

Kartenansicht-Einstellungen können in den [[Ansichten#Ansichtseinstellungen|Ansichtseinstellungen]] konfiguriert werden.

- Eingebettete Höhe
- Mittelkoordinaten
- Zoom-Einschränkungen
- Marker-Koordinaten, Farbe und Symbol
- Hintergrund

### Marker

#### Koordinaten

Um Pins auf der Karte anzuzeigen, gehe zu den [[Ansichten#Ansichtseinstellungen|Ansichtseinstellungen]] und wähle eine Eigenschaft für **Marker-Koordinaten** aus. Die Eigenschaft muss Breiten- und Längengradkoordinaten enthalten. Die folgenden Formate werden akzeptiert:

```yaml
# Text-Eigenschaft
coordinates: "lat, lng"

# Listen-Eigenschaft
coordinates:
  - "lat"
  - "lng"
```

Wenn Koordinaten als separate `latitude`- und `longitude`-Eigenschaften gespeichert werden, können sie mit einer [[Bases-Syntax#Formeln|Formel]]-Eigenschaft kombiniert werden, indem sie als Array von Koordinaten mit folgender Formel definiert wird: `[latitude, longitude]`.

#### Symbole

Füge Markern Symbole hinzu, indem eine Eigenschaft für **Marker-Symbole** definiert wird. Beispielsweise kann eine Eigenschaft namens `icon` zu Notizen hinzugefügt werden mit Werten wie `landmark` oder `utensils` aus Obsidians eingebauter [Lucide-Bibliothek](https://lucide.dev/icons/).

##### Eine Formel verwenden, um Symbole zu definieren

Angenommen, alle Restaurants sollen dasselbe Symbol auf der Karte haben:

1. Erstelle eine Notiz namens **Restaurants** und füge eine Eigenschaft namens `icon` mit dem Wert `utensils` hinzu.
2. Gib Restaurant-Notizen eine Eigenschaft namens `type`, die auf die Notiz `[[Restaurants]]` verlinkt.
3. Füge eine Formel-Eigenschaft namens `Type icon` zu deiner Basis hinzu mit folgendem Code:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Wähle `Type icon` als Marker-Symbol in den Ansichtseinstellungen.

Voilà! Jetzt zeigt die Karte Symbole basierend auf dem *Typ* des Ortes an, nicht dem Ort selbst.

#### Farben

Lege die Farbe der Marker fest. Akzeptiert Werte als RGB `rgb(0,0,0)`, HEX `#000` oder CSS-Variablen wie `var(--color-blue)`. Wie im obigen Symbol-Beispiel kann eine Formel-Eigenschaft verwendet werden, um Farben dynamisch zu definieren.

### Hintergrund

#### Kartenkacheln

Kartenkacheln sind eine Standardmethode zur Anzeige digitaler Karten. Es gibt mehrere Dienste, die zur Anpassung von Karten mit einzigartigen Stilen, Farben und Schriftarten verwendet werden können. Maps unterstützt sowohl Raster- als auch Vektorkacheln und akzeptiert die meisten Kachel-URLs, einschließlich TileJSON-URLs.

[OpenFreeMap](https://openfreemap.org/) bietet einige Stile, die kostenlos verwendet werden können. Probiere eine der folgenden URLs in der Einstellung **Kartenkacheln** aus:

| Name     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Nützliche Links

- [Maputnik](https://maputnik.github.io/) zur Anpassung von Kartenkacheln.
- [Protomaps](https://protomaps.com/) zum Selbsthosten von Kartenkacheln.
- Weitere gehostete Dienste mit kostenlosen Stufen sind [MapTiler](https://www.maptiler.com/) und [Mapbox](https://www.mapbox.com/).


## Tipps

Es kann auf beliebte Kartendienste mithilfe von [[Formeln]] verlinkt werden. Beispielsweise kann ein Pin einen Link zu Google Maps mit folgender Formel anzeigen:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Fehlerbehebung

Wenn die Karte beim ersten Laden der Maps-Erweiterung leer erscheint, versuche die [[Obsidian aktualisieren|Obsidian-Installationsversion zu aktualisieren]].

Die [Maps-Erweiterung](https://github.com/obsidianmd/obsidian-maps) ist Open Source. Du kannst helfen, indem du Fehlerberichte, Funktionswünsche und Pull Requests einreichst.
