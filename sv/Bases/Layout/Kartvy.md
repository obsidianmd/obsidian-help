---
permalink: bases/views/map
---
Karta är en typ av [[Vyer|vy]] som du kan använda i [[Introduktion till baser|baser]]. Den kräver att tillägget [Maps](obsidian://show-plugin?id=maps) installeras.

Välj ![[lucide-map.svg#icon]]  **Karta** från vymenyn för att visa filer som en interaktiv karta med markörer för varje fil, samt en förhandsvisning som visar egenskaper för den filen.

![[bases-map-places.png#interface]]

## Installera Maps-tillägget

Kartvyer kräver Obsidian 1.10. [Maps-tillägget](obsidian://show-plugin?id=maps) är ett officiellt [[Gemenskapstillägg|gemenskapstillägg]] som du kan ladda ner separat.

1. Följ instruktionerna i [[Gemenskapstillägg#Installera ett gemenskapstillägg]]
2. Ladda ner och aktivera [Maps](obsidian://show-plugin?id=maps) från listan

## Exempel

Börja med att skapa en anteckning som heter **Eiffeltornet** och kopiera följande egenskaper till den:

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

Här är vad koden ovan betyder:

| Egenskap      | Värde                    |                                                                                                                                                           |
| ------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Koordinater lagras som `latitud, longitud`. Du kan hämta koordinater genom att högerklicka på en plats på kartan och välja **Kopiera koordinater**. |
| `icon`        | `landmark`               | Namnet på en ikon från [Lucide-biblioteket](https://lucide.dev/).                                                                                         |
| `color`       | `red`                    | Ett giltigt CSS-värde: hex, RGB, namngivna färger, etc.                                                                                                   |
| `tags`        | `places`                 | Taggen vi använder för att hitta kartmarkörer i vår bas.                                                                                                  |
Skapa nu en kartvy med ett filter för taggen `places` och ange markörkoordinater, ikon och färg med egenskaperna listade ovan.

Du kan också öppna dessa [exempelfiler](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) i Obsidian för att se fungerande kartvyer med markörer, ikoner och färger redan konfigurerade.

## Inställningar

Kartvy-inställningar kan konfigureras i [[Vyer#Vyinställningar|Vyinställningar]].

- Inbäddad höjd
- Mittkoordinater
- Zoombegränsningar
- Markörkoordinater, färg och ikon
- Bakgrund

### Markörer

#### Koordinater

För att visa nålar på kartan, gå till [[Vyer#Vyinställningar|vyinställningarna]] och välj en egenskap för **markörkoordinater**. Egenskapen måste innehålla latitud- och longitudkoordinater. Följande format accepteras:

```yaml
# Textegenskap
coordinates: "lat, lng"

# Listegenskap
coordinates:
  - "lat"
  - "lng"
```

Om du lagrar koordinater som separata egenskaper för `latitude` och `longitude` kan du kombinera dem med en [[Baser-syntax#Formler|formel]]-egenskap genom att definiera den som en array av koordinater med följande formel: `[latitude, longitude]`.

#### Ikoner

Lägg till ikoner på markörer genom att definiera en egenskap för **markör-ikoner**. Du kan till exempel lägga till en egenskap som heter `icon` i dina anteckningar och ge den värden som `landmark` eller `utensils` från Obsidians inbyggda [Lucide-bibliotek](https://lucide.dev/icons/).

##### Använd en formel för att definiera ikoner

Låt oss säga att du vill att alla restauranger ska ha samma ikon på kartan:

1. Skapa en anteckning som heter **Restauranger** och lägg till en egenskap som heter `icon` med värdet `utensils`.
2. Ge restauranganteckningar en egenskap som heter `type` som länkar till anteckningen `[[Restauranger]]`.
3. Lägg till en formelegenskap som heter `Typikon` i din bas med följande kod:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Välj `Typikon` som din markörikon i vyinställningarna.

Voilà! Nu visar din karta ikoner baserade på platsens *typ*, inte platsen i sig.

#### Färger

Ange färgen på markörer. Accepterar värden som RGB `rgb(0,0,0)`, HEX `#000`, eller CSS-variabler som `var(--color-blue)`. Precis som i ikonexemplet ovan kan du använda en formelegenskap för att definiera färger dynamiskt.

### Bakgrund

#### Kartrutor

Kartrutor är ett standardsätt att visa digitala kartor. Det finns flera tjänster du kan använda för att anpassa kartor med unika stilar, färger och typsnitt. Maps stöder både raster- och vektorrutor och accepterar de flesta rut-URL:er, inklusive TileJSON-URL:er.

[OpenFreeMap](https://openfreemap.org/) erbjuder några stilar som du kan använda gratis. Prova att använda en av följande URL:er i inställningen **Kartrutor**:

| Namn     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Användbara länkar

- [Maputnik](https://maputnik.github.io/) för att anpassa kartrutor.
- [Protomaps](https://protomaps.com/) för att själv hosta kartrutor.
- Andra hostade tjänster med gratisalternativ inkluderar [MapTiler](https://www.maptiler.com/) och [Mapbox](https://www.mapbox.com/).


## Tips

Du kan länka till populära karttjänster med [[Formler]]. Till exempel kan din nål visa en länk till Google Maps med följande formel:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Felsökning

Om kartan visas tom när du först laddar Maps-tillägget, prova att [[Uppdatera Obsidian|uppdatera Obsidians installationsversion]].

[Maps-tillägget](https://github.com/obsidianmd/obsidian-maps) har öppen källkod. Du kan hjälpa till genom att bidra med felrapporter, funktionsförfrågningar och pull requests.
