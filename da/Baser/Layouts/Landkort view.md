---
permalink: baser/views/landkort
---
Landkort er en [[Views|viewtype]], som du kan anvende i [[Introduktion til Baser|Baser]]. Det kræver [Maps pluginnet](obsidian://show-plugin?id=maps) installeret.

Vælg ![[lucide-map.svg#icon]]  **Landkort** fra viewmenuen for at vise filer som et interaktivt kort med markører for hver fil, og en forhåndsvisning, der viser filens egenskaber.

![[bases-map-places.png#interface]]

## Sådan installerer du Maps pluginnet

Landkort views kræver Obsidian 1.10. [Maps pluginnet](obsidian://show-plugin?id=maps) er et officielt [[Fællesskabsplugins|fællesskabsplugin]], som du kan installere separat.

1. Følg instruktionerne i guiden: [[Fællesskabsplugins#Sådan installerer du et fællesskabsplugin|Sådan installerer du et fællesskabsplugin]]
2. Helt og installer [Maps](obsidian://show-plugin?id=maps) fra listen

## Eksempel

Start med at oprette en note kaldet **Eiffeltårnet** og kopiér følgende egenskaber ind i toppen af noten:

```yaml
---
coordinates:
  - "48.85837"
  - "2.294481"
icon: "landmark"
color: "red"
tags:
  - steder
---
```

Her beskrives hvad koden ovenfor betyder:

| Egenskab      | Værdi                    |                                                                                                                                                      |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Koordinater gemmes som `breddegrad, længdegrad`. Du kan få korrdinaterne fra en lokation på kortet ved at højreklikke og vælge **Kopiér koordinater**. |
| `icon`        | `landmark`               | Navnet på et ikon fra [Lucide biblioteket](https://lucide.dev/).                                                                                  |
| `color`       | `red`                    | En gyldig CSS værdi: hexadecimalt, RGB, navngivet farve, osv.                                                                                                       |
| `tags`        | `places`                 | Det tag som vi anvender for at finde landkort markører i vores base.                                                                                                   |
Opret nu et landkortview med et filter for tagget `steder` og sæt makør koordinater, ikon og farver, som allerede er konfigureret ovenfor. 

Du kan også åbne disse [eksempler](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) i Obsidian for at se færdige kort med markører, ikoner og farver allerede konfigureret.

## Indstilinger

Du kan konfigurere landkort viewindstillingerne i [[Views#View indstillinger|View indstillingerne]].

- Højde indlejret
- Center koordinater
- Zoom begrænsninger
- Markør koordinater, farve, og ikon
- Baggrund

### Markører

#### Koordinater

Gå til [[Views#View indstillinger|View indstillingerne]] for at vise markører på landkortet og vælg en **Markør koordinat** egenskab. Denne egenskab indeholder breddegrad og højdegrad. De følgende formater accepteres:

```yaml
# Tekst egenskab
coordinates: "breddegrad, længdegrad"

# Liste egenskab
coordinates:
  - "breddegrad"
  - "længdegrad"
```

Hvis du gemmer koordinater som separate `breddegrad` og `længdegrad` egenskaber, kan du kombinere dem med en [[Basesyntaks#Formler|formelegenskab]] ved at definere dem som en liste af koordinater ved at anvende følgende formel: `[breddegrad, længdegrad]`.

#### Ikoner

Du kan tilføje ikoner ved at definere en **markør ikon** egenskab. Fx. kan du tilføje en egenskab kaldet `ikon` til dine noter og give den værdier såsom `landmark` eller `utensils` fra Obsidians indbyggede [Lucide bibliotek](https://lucide.dev/icons/).

##### Sådan anvender du en formel til at definere ikoner

Forstil dig, at du vil have alle at alle restauranter har det samme ikon på kortet:

1. Opret en note kaldet **Restauranter** og tilføj en egenskab kaldet `ikon` med værdien `utensils`
2. Giv alle restaurant noter en egenskab kaldet `type` der linker til `[[Restauranter]]` noten
3. Tilføj en formel kaldet `Type icon` til din base med den følgende kode:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Vælg `Type icon` som din markør i viewindstillingerne

Voilà! Nu vil dit landkort vise ikoner fra *typen* af sted og ikke stedet selv.

#### Farver

Sætter markørfarver. Accepterer værdier som as RGB `rgb(0,0,0)`, HEX `#000`, eller CSS variable såsom `var(--color-blue)`. Ligesom ikoneksemplet ovenfor, kan du anvende en formelegenskab til at definere farverne dynamisk.

### Baggrund

#### Kortfliser

Standardmåden at vise digitale landkort på er at benytte kortfliser. Der er forskellige services, som du kan benytte for at lave brugerdefinerede landkort med unikke stile, farver og fonte. Landkort understøtter både Kort understøtter både raster- og vektorfliser, og accepterer de fleste flise URLer, inklusiv TileJSON URLer.

[OpenFreeMap](https://openfreemap.org/) tilbyder nogle få stile, som du kan anvende gratis. Prøv at anvende en af de følgende URLer i **Landkort flise** indstillingen:

| Navn     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |

#### Gode links

- [Maputnik](https://maputnik.github.io/) for at tilpasse kortfliser
- [Protomaps](https://protomaps.com/) for at hoste kortfliser selv
- Andre host services med gratis muligheder inkluderer [MapTiler](https://www.maptiler.com/) og [Mapbox](https://www.mapbox.com/).


## Tips

Du kan linke til populære markør services ved at anvende [[Formler|formler]]. Fx. kan din markør vise et link til Google Maps ved at anvende følgende formel:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Fejlfinding

Hvis kortet vises tomt første gang du indlæser Maps pluginnet, så prøv at opdatere [[Opdater Obsidian|Obsidian med en insider version]].

[Maps pluginnet](https://github.com/obsidianmd/obsidian-maps) er open source. Du kan hjælpe til ved at bidrage med fejlrapporter, You can help by contributing bug reports, funktionsanmodninger og _GitHub pull requests_.
