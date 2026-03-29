---
permalink: bases/views/map
---
Mapa és un tipus de [[Vistes|vista]] que pots utilitzar a [[Introducció a Bases|Bases]]. Requereix instal·lar el [connector Maps](obsidian://show-plugin?id=maps).

Selecciona ![[lucide-map.svg#icon]]  **Mapa** des del menú de vista per mostrar fitxers com un mapa interactiu amb marcadors per a cada fitxer, i una previsualització que mostra les propietats d'aquell fitxer.

![[bases-map-places.png#interface]]

## Instal·lar el connector Maps

Les vistes de mapa requereixen Obsidian 1.10. El [connector Maps](obsidian://show-plugin?id=maps) és un [[Connectors de la comunitat|connector de la comunitat]] oficial que pots baixar per separat.

1. Segueix les instruccions a [[Connectors de la comunitat#Instal·lar un connector de la comunitat]]
2. Baixa i habilita [Maps](obsidian://show-plugin?id=maps) des de la llista

## Exemple

Per començar, prova de crear una nota anomenada **Torre Eiffel** i copia les propietats següents:

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

Aquí tens el significat del codi anterior:

| Propietat     | Valor                    |                                                                                                                                                                    |
| ------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `coordinates` | `48.85837`<br>`2.294481` | Les coordenades s'emmagatzemen com a `latitud, longitud`. Pots obtenir coordenades fent clic dret sobre una ubicació al mapa i seleccionant **Copia coordenades**. |
| `icon`        | `landmark`               | El nom d'una icona de la [biblioteca Lucide](https://lucide.dev/).                                                                                                 |
| `color`       | `red`                    | Un valor CSS vàlid: hex, RGB, color amb nom, etc.                                                                                                                  |
| `tags`        | `places`                 | L'etiqueta que utilitzarem per trobar marcadors de mapa a la nostra base.                                                                                          |
Ara crea una vista de mapa amb un filtre per a l'etiqueta `places` i configura les coordenades dels marcadors, la icona i el color utilitzant les propietats llistades anteriorment.

També pots obrir aquests [fitxers d'exemple](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) a Obsidian per veure vistes de mapa funcionals amb marcadors, icones i colors ja configurats.

## Configuració

La configuració de la vista de mapa es pot configurar a [[Vistes#Configuració de la vista|Configuració de la vista]].

- Alçada incrustada
- Coordenades del centre
- Restriccions d'ampliació
- Coordenades, color i icona dels marcadors
- Fons

### Marcadors

#### Coordenades

Per mostrar marcadors al mapa, ves a la [[Vistes#Configuració de la vista|configuració de la vista]] i selecciona una propietat de **coordenades del marcador**. La propietat ha de contenir coordenades de latitud i longitud. S'accepten els formats següents:

```yaml
# Propietat de text
coordinates: "lat, lng"

# Propietat de llista
coordinates:
  - "lat"
  - "lng"
```

Si emmagatzemes les coordenades com a propietats separades de `latitude` i `longitude`, pots combinar-les amb una propietat de [[Sintaxi de Bases#Fórmules|fórmula]] definint-la com una matriu de coordenades amb la fórmula següent: `[latitude, longitude]`.

#### Icones

Afegeix icones als marcadors definint una propietat d'**icones del marcador**. Per exemple, pots afegir una propietat anomenada `icon` a les teves notes i donar-li valors com `landmark` o `utensils` de la [biblioteca Lucide](https://lucide.dev/icons/) integrada a Obsidian.

##### Utilitzar una fórmula per definir icones

Suposem que vols que tots els restaurants tinguin la mateixa icona al mapa:

1. Crea una nota anomenada **Restaurants** i afegeix una propietat anomenada `icon` amb el valor `utensils`.
2. Dona a les notes de restaurant una propietat anomenada `type` que enllaci a la nota `[[Restaurants]]`.
3. Afegeix una propietat de fórmula anomenada `Type icon` a la teva base amb el codi següent:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Escull `Type icon` com a icona del marcador a la configuració de la vista.

Et voilà! Ara el teu mapa mostrarà icones del *tipus* del lloc, no del lloc en si.

#### Colors

Configura el color dels marcadors. Accepta valors com RGB `rgb(0,0,0)`, HEX `#000`, o variables CSS com `var(--color-blue)`. Com a l'exemple de les icones anterior, pots utilitzar una propietat de fórmula per definir colors dinàmicament.

### Fons

#### Rajoles de mapa

Les rajoles de mapa són una manera estàndard de mostrar mapes digitals. Hi ha diversos serveis que pots utilitzar per personalitzar mapes amb estils, colors i tipus de lletra únics. Maps admet tant rajoles ràster com vectorials, i accepta la majoria d'URL de rajoles, incloses les URL TileJSON.

[OpenFreeMap](https://openfreemap.org/) ofereix alguns estils que pots utilitzar gratuïtament. Prova d'utilitzar una de les URL següents a la configuració de **Rajoles de mapa**:

| Nom      | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Enllaços útils

- [Maputnik](https://maputnik.github.io/) per personalitzar rajoles de mapa.
- [Protomaps](https://protomaps.com/) per allotjar rajoles de mapa pròpiament.
- Altres serveis allotjats amb nivells gratuïts inclouen [MapTiler](https://www.maptiler.com/) i [Mapbox](https://www.mapbox.com/).


## Consells

Pots enllaçar a serveis de mapes populars utilitzant [[Fórmules]]. Per exemple, el teu marcador pot mostrar un enllaç a Google Maps amb la fórmula següent:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Resolució de problemes

Si el mapa apareix en blanc quan carregues el connector Maps per primera vegada, prova d'[[Actualitza Obsidian|actualitzar la versió de l'instal·lador d'Obsidian]].

El [connector Maps](https://github.com/obsidianmd/obsidian-maps) és codi obert. Pots ajudar contribuint amb informes d'errors, sol·licituds de funcionalitats i pull requests.
