---
permalink: bases/views/map
---
Kart er en type [[Visninger|visning]] du kan bruke i [[Introduksjon til Bases|Bases]]. Det krever installering av [Maps-utvidelsen](obsidian://show-plugin?id=maps).

Velg ![[lucide-map.svg#icon]]  **Kart** fra visningsmenyen for å vise filer som et interaktivt kart med markører for hver fil, og en forhåndsvisning som viser egenskaper for den filen.

![[bases-map-places.png#interface]]

## Installer Maps-utvidelsen

Kartvisninger krever Obsidian 1.10. [Maps-utvidelsen](obsidian://show-plugin?id=maps) er en offisiell [[Community-utvidelser|community-utvidelse]] som du kan laste ned separat.

1. Følg instruksjonene i [[Community-utvidelser#Installer en community-utvidelse]]
2. Last ned og aktiver [Maps](obsidian://show-plugin?id=maps) fra listen

## Eksempel

For å starte, prøv å opprette et notat kalt **Eiffeltårnet** og kopier følgende egenskaper inn i det:

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

Her er hva koden ovenfor betyr:

| Egenskap      | Verdi                    |                                                                                                                                                      |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Koordinater lagres som `breddegrad, lengdegrad`. Du kan hente koordinater ved å høyreklikke en plassering på kartet og velge **Kopier koordinater**. |
| `icon`        | `landmark`               | Navnet på et ikon fra [Lucide-biblioteket](https://lucide.dev/).                                                                                     |
| `color`       | `red`                    | En gyldig CSS-verdi: hex, RGB, navngitt farge, osv.                                                                                                  |
| `tags`        | `places`                 | Taggen vi bruker for å finne kartmarkører i basen vår.                                                                                               |
Opprett nå en kartvisning med et filter for taggen `places` og sett markørkoordinater, ikon og farge ved hjelp av egenskapene listet ovenfor.

Du kan også åpne disse [eksempelfilene](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) i Obsidian for å se fungerende kartvisninger med markører, ikoner og farger som allerede er konfigurert.

## Innstillinger

Kartvisningsinnstillinger kan konfigureres i [[Visninger#Visningsinnstillinger|Visningsinnstillinger]].

- Innebygd høyde
- Senterkoordinater
- Zoom-begrensninger
- Markørkoordinater, farge og ikon
- Bakgrunn

### Markører

#### Koordinater

For å vise nåler på kartet, gå til [[Visninger#Visningsinnstillinger|visningsinnstillingene]] og velg en egenskap for **markørkoordinater**. Egenskapen må inneholde breddegrad- og lengdegradkoordinater. Følgende formater godtas:

```yaml
# Tekstegenskap
coordinates: "lat, lng"

# Listeegenskap
coordinates:
  - "lat"
  - "lng"
```

Hvis du lagrer koordinater som separate `latitude`- og `longitude`-egenskaper, kan du kombinere dem med en [[Bases-syntaks#Formler|formel]]-egenskap ved å definere den som en matrise av koordinater med følgende formel: `[latitude, longitude]`.

#### Ikoner

Legg til ikoner på markører ved å definere en egenskap for **markørikoner**. For eksempel kan du legge til en egenskap kalt `icon` i notatene dine og gi den verdier som `landmark` eller `utensils` fra Obsidians innebygde [Lucide-bibliotek](https://lucide.dev/icons/).

##### Bruk en formel for å definere ikoner

La oss si at du vil at alle restauranter skal ha samme ikon på kartet:

1. Opprett et notat kalt **Restauranter** og legg til en egenskap kalt `icon` med verdien `utensils`.
2. Gi restaurantnotater en egenskap kalt `type` som lenker til `[[Restauranter]]`-notatet.
3. Legg til en formelegenskap kalt `Type-ikon` i basen din med følgende kode:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Velg `Type-ikon` som markørikon i visningsinnstillingene.

Voilà! Nå vil kartet ditt vise ikoner fra *typen* av stedet, ikke stedet selv.

#### Farger

Sett fargen på markører. Godtar verdier som RGB `rgb(0,0,0)`, HEX `#000`, eller CSS-variabler som `var(--color-blue)`. Som i ikoneksempelet ovenfor kan du bruke en formelegenskap for å definere farger dynamisk.

### Bakgrunn

#### Kartfliser

Kartfliser er en standardmåte å vise digitale kart på. Det finnes flere tjenester du kan bruke for å tilpasse kart med unike stiler, farger og skrifttyper. Maps støtter både raster- og vektorfliser, og godtar de fleste flis-URL-er, inkludert TileJSON-URL-er.

[OpenFreeMap](https://openfreemap.org/) tilbyr noen stiler du kan bruke gratis. Prøv å bruke en av følgende URL-er i **Kartfliser**-innstillingen:

| Navn     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Nyttige lenker

- [Maputnik](https://maputnik.github.io/) for tilpasning av kartfliser.
- [Protomaps](https://protomaps.com/) for selvhosting av kartfliser.
- Andre hostede tjenester med gratis nivåer inkluderer [MapTiler](https://www.maptiler.com/) og [Mapbox](https://www.mapbox.com/).


## Tips

Du kan lenke til populære karttjenester ved hjelp av [[Formler]]. For eksempel kan nålen din vise en lenke til Google Maps med følgende formel:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Feilsøking

Hvis kartet vises tomt når du først laster inn Maps-utvidelsen, prøv å [[Oppdater Obsidian|oppdatere Obsidian-installasjonsversjonen]].

[Maps-utvidelsen](https://github.com/obsidianmd/obsidian-maps) er åpen kildekode. Du kan bidra med feilrapporter, funksjonsforespørsler og pull requests.
