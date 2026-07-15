---
permalink: bases/views/map
---
Map este un tip de [[Views|vizualizare]] pe care îl poți folosi în [[Introduction to Bases|Baze]]. Necesită instalarea modulului [Maps](obsidian://show-plugin?id=maps).

Selectează ![[lucide-map.svg#icon]]  **Hartă** din meniul de vizualizare pentru a afișa fișierele ca o hartă interactivă cu marcaje pentru fiecare fișier și o previzualizare care afișează proprietățile acelui fișier.

![[bases-map-places.png#interface]]

## Instalează modulul Maps

Vizualizările de tip hartă necesită Obsidian 1.10. Modulul [Maps](obsidian://show-plugin?id=maps) este un [[Community plugins|modul comunitar]] oficial pe care îl poți descărca separat.

1. Urmează instrucțiunile din [[Community plugins#Install a community plugin]]
2. Descarcă și activează [Maps](obsidian://show-plugin?id=maps) din listă

## Exemplu

Pentru a începe, încearcă să creezi o notă numită **Eiffel Tower** și copiază următoarele proprietăți în ea:

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

Iată ce înseamnă codul de mai sus:

| Proprietate      | Valoare                    |                                                                                                                                                      |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Coordonatele sunt stocate ca `latitudine, longitudine`. Poți obține coordonatele dând clic dreapta pe o locație de pe hartă și selectând **Copiază coordonatele**. |
| `icon`        | `landmark`               | Numele unei iconițe din [biblioteca Lucide](https://lucide.dev/).                                                                                  |
| `color`       | `red`                    | O valoare CSS validă: hexazecimal, RGB, culoare denumită etc.                                                                                                       |
| `tags`        | `places`                 | Eticheta pe care o vom folosi pentru a găsi marcajele hărții în baza noastră.                                                                                                   |
Acum creează o vizualizare de tip hartă cu un filtru pentru eticheta `places` și stabilește coordonatele, iconița și culoarea marcajelor folosind proprietățile listate mai sus.

Poți deschide și aceste [fișiere exemplu](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) în Obsidian pentru a vedea vizualizări de tip hartă funcționale, cu marcaje, iconițe și culori deja configurate.

## Setări

Setările vizualizării de tip hartă pot fi configurate în [[Views#View settings|Setările vizualizării]].

- Înălțimea încorporării
- Coordonatele centrului
- Constrângerile de zoom
- Coordonatele, culoarea și iconița marcajelor
- Fundal

### Marcaje

#### Coordonate

Pentru a afișa pini pe hartă, mergi la [[Views#View settings|setările vizualizării]] și selectează o proprietate pentru **coordonatele marcajului**. Proprietatea trebuie să conțină coordonate de latitudine și longitudine. Sunt acceptate următoarele formate:

```yaml
# Proprietate de tip text
coordinates: "lat, lng"

# Proprietate de tip listă
coordinates:
  - "lat"
  - "lng"
```

Dacă stochezi coordonatele ca proprietăți separate `latitude` și `longitude`, le poți combina cu o proprietate de tip [[Bases syntax#Formulas|formulă]], definind-o ca un array de coordonate folosind următoarea formulă: `[latitude, longitude]`.

#### Iconițe

Adaugă iconițe marcajelor definind o proprietate pentru **iconițele marcajelor**. De exemplu, poți adăuga o proprietate numită `icon` notelor tale și îi poți da valori precum `landmark` sau `utensils` din [biblioteca Lucide](https://lucide.dev/icons/) inclusă în Obsidian.

##### Folosește o formulă pentru a defini iconițe

Să presupunem că vrei ca toate restaurantele să aibă aceeași iconiță pe hartă:

1. Creează o notă numită **Restaurants** și adaugă o proprietate numită `icon` cu valoarea `utensils`.
2. Dă notelor de restaurant o proprietate numită `type` care face legătura către nota `[[Restaurants]]`.
3. Adaugă o proprietate de tip formulă numită `Type icon` în baza ta, cu următorul cod:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Alege `Type icon` ca iconiță de marcaj în setările vizualizării.

Voilà! Acum harta ta va afișa iconițe în funcție de *tipul* locului, nu de locul în sine.

#### Culori

Stabilește culoarea marcajelor. Acceptă valori sub formă de RGB `rgb(0,0,0)`, HEX `#000`, sau variabile CSS precum `var(--color-blue)`. La fel ca în exemplul cu iconițele de mai sus, poți folosi o proprietate de tip formulă pentru a defini culorile în mod dinamic.

### Fundal

#### Plăci de hartă (map tiles)

Plăcile de hartă sunt o metodă standard de afișare a hărților digitale. Există mai multe servicii pe care le poți folosi pentru a personaliza hărțile cu stiluri, culori și fonturi unice. Maps acceptă atât plăci raster, cât și vectoriale, și acceptă majoritatea URL-urilor de plăci, inclusiv URL-uri TileJSON.

[OpenFreeMap](https://openfreemap.org/) oferă câteva stiluri pe care le poți folosi gratuit. Încearcă să folosești unul dintre următoarele URL-uri în setarea **Plăci de hartă**:

| Nume     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Legături utile

- [Maputnik](https://maputnik.github.io/) pentru personalizarea plăcilor de hartă.
- [Protomaps](https://protomaps.com/) pentru găzduirea proprie a plăcilor de hartă.
- Alte servicii găzduite cu niveluri gratuite includ [MapTiler](https://www.maptiler.com/) și [Mapbox](https://www.mapbox.com/).


## Sfaturi

Poți face legătura către servicii populare de hărți folosind [[Formulas|Formule]]. De exemplu, pinul tău poate afișa o legătură către Google Maps folosind următoarea formulă:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Depanare

Dacă harta apare goală când încarci pentru prima dată modulul Maps, încearcă să [[Update Obsidian|actualizezi versiunea de instalare a Obsidian]].

Modulul [Maps](https://github.com/obsidianmd/obsidian-maps) este open source. Poți ajuta contribuind cu rapoarte de erori, cereri de funcționalități și pull request-uri.
