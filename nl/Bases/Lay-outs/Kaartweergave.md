---
permalink: bases/views/map
---
Kaart is een type [[Weergaven|weergave]] dat je kunt gebruiken in [[Introductie tot Bases|Bases]]. Hiervoor moet de [Maps-plug-in](obsidian://show-plugin?id=maps) geïnstalleerd zijn.

Selecteer ![[lucide-map.svg#icon]]  **Kaart** uit het weergavemenu om bestanden weer te geven als een interactieve kaart met markeringen voor elk bestand, en een voorvertoning die de eigenschappen van dat bestand toont.

![[bases-map-places.png#interface]]

## De Maps-plug-in installeren

Kaartweergaven vereisen Obsidian 1.10. De [Maps-plug-in](obsidian://show-plugin?id=maps) is een officiële [[Communityplug-ins|community-plugin]] die je apart kunt downloaden.

1. Volg de instructies in [[Communityplug-ins#Een community-plugin installeren]]
2. Download en activeer [Maps](obsidian://show-plugin?id=maps) uit de lijst

## Voorbeeld

Om te beginnen kun je een notitie aanmaken met de naam **Eiffeltoren** en de volgende eigenschappen erin kopiëren:

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

Dit is wat de bovenstaande code betekent:

| Eigenschap    | Waarde                   |                                                                                                                                                              |
| ------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `coordinates` | `48.85837`<br>`2.294481` | Coördinaten worden opgeslagen als `breedtegraad, lengtegraad`. Je kunt coördinaten ophalen door met de rechtermuisknop op een locatie op de kaart te klikken en **Coördinaten kopiëren** te selecteren. |
| `icon`        | `landmark`               | De naam van een pictogram uit de [Lucide-bibliotheek](https://lucide.dev/).                                                                                   |
| `color`       | `red`                    | Een geldige CSS-waarde: hex, RGB, benoemde kleur, etc.                                                                                                        |
| `tags`        | `places`                 | De tag die we gebruiken om kaartmarkeringen in onze basis te vinden.                                                                                          |
Maak nu een kaartweergave met een filter voor de tag `places` en stel markeringscoördinaten, pictogram en kleur in met de hierboven vermelde eigenschappen.

Je kunt ook deze [voorbeeldbestanden](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) openen in Obsidian om werkende kaartweergaven te bekijken met markeringen, pictogrammen en kleuren die al geconfigureerd zijn.

## Instellingen

Instellingen voor kaartweergaven kunnen worden geconfigureerd in [[Weergaven#Weergave-instellingen|Weergave-instellingen]].

- Ingesloten hoogte
- Middencoördinaten
- Zoombeperkingen
- Markeringscoördinaten, kleur en pictogram
- Achtergrond

### Markeringen

#### Coördinaten

Om spelden op de kaart weer te geven, ga je naar de [[Weergaven#Weergave-instellingen|weergave-instellingen]] en selecteer je een eigenschap voor **markeringscoördinaten**. De eigenschap moet breedte- en lengtegraadcoördinaten bevatten. De volgende formaten worden geaccepteerd:

```yaml
# Teksteigenschap
coordinates: "lat, lng"

# Lijsteigenschap
coordinates:
  - "lat"
  - "lng"
```

Als je coördinaten opslaat als afzonderlijke `latitude`- en `longitude`-eigenschappen, kun je ze combineren met een [[Bases-syntaxis#Formules|formule]]-eigenschap door deze te definiëren als een array van coördinaten met de volgende formule: `[latitude, longitude]`.

#### Pictogrammen

Voeg pictogrammen toe aan markeringen door een eigenschap voor **markeringspictogrammen** te definiëren. Je kunt bijvoorbeeld een eigenschap genaamd `icon` aan je notities toevoegen en waarden geven zoals `landmark` of `utensils` uit Obsidians ingebouwde [Lucide-bibliotheek](https://lucide.dev/icons/).

##### Een formule gebruiken om pictogrammen te definiëren

Stel dat je wilt dat alle restaurants hetzelfde pictogram op de kaart hebben:

1. Maak een notitie aan met de naam **Restaurants** en voeg een eigenschap toe genaamd `icon` met de waarde `utensils`.
2. Geef restaurantnotities een eigenschap genaamd `type` die verwijst naar de `[[Restaurants]]`-notitie.
3. Voeg een formule-eigenschap genaamd `Type icon` toe aan je basis met de volgende code:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Kies `Type icon` als je markeringspictogram in de weergave-instellingen.

Voilà! Nu toont je kaart pictogrammen van het *type* plaats, niet van de plaats zelf.

#### Kleuren

Stel de kleur van markeringen in. Accepteert waarden als RGB `rgb(0,0,0)`, HEX `#000`, of CSS-variabelen zoals `var(--color-blue)`. Net als in het pictogramvoorbeeld hierboven kun je een formule-eigenschap gebruiken om kleuren dynamisch te definiëren.

### Achtergrond

#### Kaarttegels

Kaarttegels zijn een standaardmanier om digitale kaarten weer te geven. Er zijn verschillende diensten die je kunt gebruiken om kaarten aan te passen met unieke stijlen, kleuren en lettertypen. Maps ondersteunt zowel raster- als vectortegels en accepteert de meeste tegel-URL's, inclusief TileJSON-URL's.

[OpenFreeMap](https://openfreemap.org/) biedt een aantal stijlen die je gratis kunt gebruiken. Probeer een van de volgende URL's in de instelling **Kaarttegels**:

| Naam     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Nuttige links

- [Maputnik](https://maputnik.github.io/) voor het aanpassen van kaarttegels.
- [Protomaps](https://protomaps.com/) voor het zelf hosten van kaarttegels.
- Andere gehoste diensten met gratis opties zijn onder meer [MapTiler](https://www.maptiler.com/) en [Mapbox](https://www.mapbox.com/).


## Tips

Je kunt koppelingen maken naar populaire kaartdiensten met behulp van [[Formules]]. Je speld kan bijvoorbeeld een koppeling naar Google Maps tonen met de volgende formule:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Probleemoplossing

Als de kaart leeg verschijnt wanneer je de Maps-plug-in voor het eerst laadt, probeer dan [[Obsidian bijwerken|de Obsidian-installatieversie bij te werken]].

De [Maps-plug-in](https://github.com/obsidianmd/obsidian-maps) is open source. Je kunt helpen door bugrapporten, functieverzoeken en pull requests bij te dragen.
