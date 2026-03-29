---
permalink: bases/views/map
---
Kartta on eräs [[Näkymät|näkymätyyppi]], jota voit käyttää [[Johdanto kantoihin|kannoissa]]. Se edellyttää [Maps-lisäosan](obsidian://show-plugin?id=maps) asentamista.

Valitse ![[lucide-map.svg#icon]]  **Map** näkymävalikosta näyttääksesi tiedostot vuorovaikutteisena karttana, jossa jokaiselle tiedostolle on merkki ja esikatselu, joka näyttää kyseisen tiedoston määreet.

![[bases-map-places.png#interface]]

## Asenna Maps-lisäosa

Karttanäkymät vaativat Obsidianin version 1.10. [Maps-lisäosa](obsidian://show-plugin?id=maps) on virallinen [[Yhteisön lisäosat|yhteisön lisäosa]], jonka voit ladata erikseen.

1. Noudata ohjeita kohdassa [[Yhteisön lisäosat#Yhteisön lisäosan asentaminen]]
2. Lataa ja ota käyttöön [Maps](obsidian://show-plugin?id=maps) luettelosta

## Esimerkki

Kokeile aluksi luoda muistiinpano nimeltä **Eiffel Tower** ja kopioi siihen seuraavat määreet:

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

Yllä oleva koodi tarkoittaa seuraavaa:

| Määre         | Arvo                     |                                                                                                                                                                      |
| ------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Koordinaatit tallennetaan muodossa `leveysaste, pituusaste`. Voit saada koordinaatit napsauttamalla hiiren oikealla painikkeella sijaintia kartalla ja valitsemalla **Copy coordinates**. |
| `icon`        | `landmark`               | Kuvakkeen nimi [Lucide-kirjastosta](https://lucide.dev/).                                                                                                            |
| `color`       | `red`                    | Kelvollinen CSS-arvo: heksa, RGB, nimetty väri jne.                                                                                                                 |
| `tags`        | `places`                 | Tunniste, jota käytämme karttamerkkien löytämiseen kannassamme.                                                                                                      |

Luo nyt karttanäkymä, jossa on suodatin tunnisteelle `places`, ja aseta merkin koordinaatit, kuvake ja väri yllä lueteltujen määreiden avulla.

Voit myös avata nämä [esimerkkitiedostot](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) Obsidianissa nähdäksesi toimivia karttanäkymiä, joissa merkit, kuvakkeet ja värit on jo määritetty.

## Asetukset

Karttanäkymän asetukset voidaan määrittää kohdassa [[Näkymät#Näkymän asetukset|Näkymän asetukset]].

- Upotettu korkeus
- Keskipisteen koordinaatit
- Suurennuksen/pienennyksen rajat
- Merkin koordinaatit, väri ja kuvake
- Tausta

### Merkit

#### Koordinaatit

Näyttääksesi nuppineuloja kartalla, mene [[Näkymät#Näkymän asetukset|näkymän asetuksiin]] ja valitse **marker coordinates** -määre. Määreen tulee sisältää leveysaste- ja pituustekoordinaatit. Seuraavat muodot hyväksytään:

```yaml
# Tekstimääre
coordinates: "lat, lng"

# Luettelomääre
coordinates:
  - "lat"
  - "lng"
```

Jos tallennat koordinaatit erillisinä `latitude`- ja `longitude`-määreinä, voit yhdistää ne [[Kantojen syntaksi#Kaavat|kaava]]-määreellä määrittelemällä sen koordinaattitaulukoksi seuraavalla kaavalla: `[latitude, longitude]`.

#### Kuvakkeet

Lisää kuvakkeita merkkeihin määrittelemällä **marker icons** -määre. Voit esimerkiksi lisätä muistiinpanoihisi määreen nimeltä `icon` ja antaa sille arvoja kuten `landmark` tai `utensils` Obsidianin sisäänrakennetusta [Lucide-kirjastosta](https://lucide.dev/icons/).

##### Kaavan käyttäminen kuvakkeiden määrittämiseen

Oletetaan, että haluat kaikkien ravintoloiden näyttävän saman kuvakkeen kartalla:

1. Luo muistiinpano nimeltä **Restaurants** ja lisää siihen määre nimeltä `icon` arvolla `utensils`.
2. Anna ravintolamuistiinpanoille määre nimeltä `type`, joka linkittää `[[Restaurants]]`-muistiinpanoon.
3. Lisää kantaasi kaavamääre nimeltä `Type icon` seuraavalla koodilla:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Valitse `Type icon` merkin kuvakkeeksi näkymän asetuksissa.

Voilà! Nyt karttasi näyttää kuvakkeet paikan *tyypin* perusteella, ei itse paikan perusteella.

#### Värit

Aseta merkkien väri. Hyväksyy arvoja muodoissa RGB `rgb(0,0,0)`, HEX `#000` tai CSS-muuttujina kuten `var(--color-blue)`. Kuten yllä olevassa kuvake-esimerkissä, voit käyttää kaavamääreitä värien dynaamiseen määrittämiseen.

### Tausta

#### Karttalaatat

Karttalaatat ovat vakiotapa näyttää digitaalisia karttoja. On useita palveluita, joilla voit mukauttaa karttoja ainutlaatuisilla tyyleillä, väreillä ja kirjasimilla. Maps tukee sekä rasteri- että vektorilaattoja ja hyväksyy useimmat laatta-URL-osoitteet, mukaan lukien TileJSON-URL-osoitteet.

[OpenFreeMap](https://openfreemap.org/) tarjoaa muutamia tyylejä, joita voit käyttää ilmaiseksi. Kokeile käyttää jotakin seuraavista URL-osoitteista **Map tiles** -asetuksessa:

| Nimi     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |

#### Hyödyllisiä linkkejä

- [Maputnik](https://maputnik.github.io/) karttalaatojen mukauttamiseen.
- [Protomaps](https://protomaps.com/) karttalaatojen omatoimiseen isännöintiin.
- Muita isännöityjä palveluita ilmaisilla tasoilla ovat [MapTiler](https://www.maptiler.com/) ja [Mapbox](https://www.mapbox.com/).

## Vinkkejä

Voit linkittää suosittuihin karttapalveluihin [[Kaavat|kaavojen]] avulla. Esimerkiksi merkkisi voi näyttää linkin Google Mapsiin seuraavalla kaavalla:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Vianmääritys

Jos kartta näkyy tyhjänä kun lataat Maps-lisäosan ensimmäisen kerran, kokeile [[Päivitä Obsidian|Obsidianin asennusohjelman version päivittämistä]].

[Maps-lisäosa](https://github.com/obsidianmd/obsidian-maps) on avointa lähdekoodia. Voit auttaa tekemällä vikailmoituksia, ominaisuuspyyntöjä ja pull requesteja.
