---
permalink: bases/functions
publish: true
mobile: true
description: 'Tällä sivulla kuvataan Obsidian Basesissa käytettävät funktiot, joilla käsitellään ominaisuuksien tietoja suodattimissa ja kaavoissa.'
---
Funktioita käytetään [[Johdanto kantoihin|kannoissa]] [[määreet|määreiden]] tietojen käsittelemiseen [[Näkymät#Suodattimet|suodattimissa]] ja [[Kaavat|kaavoissa]]. Katso [[Kantojen syntaksi|kantojen syntaksiviite]] saadaksesi lisätietoja funktioiden käytöstä.

[[Funktiot#Yleiset|Yleisten]] funktioiden lisäksi useimmat funktiot riippuvat muokattavan arvon tyypistä:

- [[Funktiot#Mikä tahansa|Mikä tahansa]]
- [[Funktiot#Päiväys|Päiväys]]
- [[Funktiot#Merkkijono|Merkkijono]]
- [[Funktiot#Numero|Numero]]
- [[Funktiot#Luettelo|Luettelo]]
- [[Funktiot#Linkki|Linkki]]
- [[Funktiot#Tiedosto|Tiedosto]]
- [[Funktiot#Objekti|Objekti]]
- [[Funktiot#Säännöllinen lauseke|Säännöllinen lauseke]]

## Yleiset

Yleisiä funktioita käytetään ilman tyyppiä.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Muuntaa merkkijonon erikoismerkit turvallisiksi HTML-sisällytystä varten.

### `date()`

`date(date: string): date`

- `date(string): date` jäsentää annetun merkkijonon ja palauttaa päiväysobjektin.
- `date`-merkkijonon tulee olla muodossa `VVVV-KK-PP HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Jäsentää merkkijonon kestoksi. Katso [[Kantojen syntaksi#Päiväysaritmetiikka|päiväysaritmetiikan osio]] `value`-merkkijonon muodon osalta.
- Kestoja ei tarvitse erikseen jäsentää päiväysaritmetiikassa (esimerkiksi `now() + '1d'`), mutta ne on jäsennettävä suoritettaessa aritmeettisia operaatioita kestoille (esimerkiksi `now() + (duration('1d') * 2)`).
- Suoritettaessa aritmeettisia operaatioita kestoille skalaarien kanssa, keston on oltava vasemmalla puolella. Esimerkiksi `duration('5h') * 2`, eikä `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Palauttaa tiedosto-objektin annetulle tiedostolle tai polulle.
- Esimerkki: `file(link("[[tiedostonimi]]"))` tai `file("polku tiedostoon")`.

### `html()`

`html(html: string): html`

- Muuntaa merkkijonon koodipätkäksi, joka renderöityy HTML:nä.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` on arvioitava ehto.
- `trueResult` on tulos, jos ehto on tosi.
- `falseResult` on valinnainen tulos, jos ehto on epätosi. Jos sitä ei anneta, sen oletetaan olevan `null`.
- Palauttaa `trueResult`-arvon, jos `condition` on tosi tai totuudenmukainen arvo, muuten `falseResult`.
- Esimerkki: `if(isModified, "Muokattu", "Muokkaamaton")`

### `image()`

`image(path: string | file | url): image`

- Palauttaa kuvaobjektin, joka renderöi kuvan näkymässä.
- Esimerkki: `image(kuva-määre)` tai `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Palauttaa arvon, joka renderöityy kuvakkeena näkymässä. Kuvakkeen nimen on vastattava tuettua Lucide-kuvaketta.
- Esimerkki: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Jäsentää merkkijonon `path` ja palauttaa Link-objektin, joka renderöityy linkkinä annettuun polkuun.
- Voit halutessasi antaa `display`-parametrin muuttaaksesi linkin näytettävää tekstiä.

### `list()`

`list(element: any): List`

- Jos annettu elementti on luettelo, palauttaa sen muuttamattomana.
- Muussa tapauksessa käärii annetun `element`-arvon luetteloon ja luo luettelon, jossa on yksi elementti.
- Tämä funktio voi olla hyödyllinen, kun määre sisältää holvin eri tiedostoissa sekoituksen merkkijonoja ja luetteloita.
- Esimerkki: `list("arvo")` palauttaa `["arvo"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Palauttaa suurimman kaikista annetuista luvuista.

### `min()`

`min(value1: number, value2: number...): number`

- Palauttaa pienimmän kaikista annetuista luvuista.

### `now()`

`now(): date`

- `now()` palauttaa päiväysobjektin, joka edustaa nykyhetkeä.

### `number()`

`number(input: any): number`

- Yrittää palauttaa annetun arvon lukuna.
- Päiväysobjektit palautetaan millisekunteina Unix-epookista.
- Totuusarvot palauttavat 1 tai 0.
- Merkkijonot jäsennetään luvuksi ja palautetaan virhe, jos tulos on virheellinen.
- Esimerkki: `number("3.4")` palauttaa `3.4`.

### `duration()`

`duration(value: string): duration`

- Jäsentää merkkijonon kestoksi. Katso [[Kantojen syntaksi#Päiväysaritmetiikka|päiväysaritmetiikan osio]] `value`-merkkijonon muodon osalta.
- Kestoja ei tarvitse erikseen jäsentää päiväysaritmetiikassa (esimerkiksi `now() + '1d'`), mutta ne on jäsennettävä suoritettaessa aritmeettisia operaatioita kestoille (esimerkiksi `now() + (duration('1d') * 2)`).
- Suoritettaessa aritmeettisia operaatioita kestoille skalaarien kanssa, keston on oltava vasemmalla puolella. Esimerkiksi `duration('5h') * 2`, eikä `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` palauttaa päiväysobjektin, joka edustaa nykyistä päivämäärää. Kellonaikaosuus on asetettu nollaan.

### `random()`

`random(): number`

- `random()` palauttaa satunnaisluvun väliltä 0–1.
- Lukugenerointi päivittyy aina, kun näkymä ladataan. Näkymien välillä siirtyminen muuttaa satunnaislukua.

## Mikä tahansa

Funktioita, joita voit käyttää minkä tahansa arvon kanssa. Tämä sisältää merkkijonot (esim. `"hello"`), luvut (esim. `42`), luettelot (esim. `[1,2,3]`), objektit ja muut.

### `isTruthy()`

`any.isTruthy(): boolean`

- Palauttaa arvon pakotettuna totuusarvoksi.
- Esimerkki: `1.isTruthy()` palauttaa `true`.

### `isType()`

`any.isType(type: string): boolean`

- Palauttaa tosi, jos arvo on annettua tyyppiä.
- Esimerkki: `"example".isType("string")` ja `true.isType("boolean")` palauttavat molemmat tosi.

### `toString()`

`any.toString(): string`

- Palauttaa minkä tahansa arvon merkkijonoesityksen.
- Esimerkki: `123.toString()` palauttaa `"123"`.

## Päiväys

Funktioita, joita voit käyttää päiväyksen ja kellonajan kanssa, kuten `date("2025-05-27")`. Päiväysvertailuja voidaan tehdä [[Kantojen syntaksi#Päiväysaritmetiikka|päiväysaritmetiikan]] avulla.

### Kentät

Seuraavat kentät ovat käytettävissä päiväyksille:

| Kenttä              | Tyyppi   | Kuvaus                         |
| ------------------- | -------- | ------------------------------ |
| `date.year`         | `number` | Päiväyksen vuosi               |
| `date.month`        | `number` | Päiväyksen kuukausi (1–12)     |
| `date.day`          | `number` | Kuukauden päivä                |
| `date.hour`         | `number` | Tunti (0–23)                   |
| `date.minute`       | `number` | Minuutti (0–59)                |
| `date.second`       | `number` | Sekunti (0–59)                 |
| `date.millisecond`  | `number` | Millisekunti (0–999)           |

### `date()`

`date.date(): date`

- Palauttaa päiväysobjektin ilman kellonaikaa.
- Esimerkki: `now().date().format("YYYY-MM-DD HH:mm:ss")` palauttaa merkkijonon kuten "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` on muotoilumerkkijono (esim. `"YYYY-MM-DD"`).
- Palauttaa päiväyksen muotoiltuna Moment.js-muotoilumerkkijonon mukaisesti.
- Esimerkki: `date.format("YYYY-MM-DD")` palauttaa `"2025-05-27"`.

### `time()`

`date.time(): string`

- Palauttaa kellonajan.
- Esimerkki: `now().time()` palauttaa merkkijonon kuten "23:59:59"

### `relative()`

`date.relative(): string`

- Palauttaa luettavan vertailun päiväyksen ja nykyhetken välillä.
- Esimerkki: `file.mtime.relative()` palauttaa arvon kuten `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Palauttaa epätosi.

## Merkkijono

Funktioita, joita voit käyttää merkkijonojen kanssa, kuten `"hello"`.

### Kentät

| Kenttä          | Tyyppi   | Kuvaus                              |
| --------------- | -------- | ----------------------------------- |
| `string.length` | `number` | Merkkijonon merkkien lukumäärä      |

### `contains()`

`string.contains(value: string): boolean`

- `value` on haettava alimerkkijono.
- Palauttaa tosi, jos merkkijono sisältää `value`-arvon.
- Esimerkki: `"hello".contains("ell")` palauttaa `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` on yksi tai useampi haettava alimerkkijono.
- Palauttaa tosi, jos merkkijono sisältää kaikki `values`-arvot.
- Esimerkki: `"hello".containsAll("h", "e")` palauttaa `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` on yksi tai useampi haettava alimerkkijono.
- Palauttaa tosi, jos merkkijono sisältää vähintään yhden `values`-arvoista.
- Esimerkki: `"hello".containsAny("x", "y", "e")` palauttaa `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` on merkkijono, joka tarkistetaan lopusta.
- Palauttaa tosi, jos merkkijono päättyy `query`-arvoon.
- Esimerkki: `"hello".endsWith("lo")` palauttaa `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Palauttaa tosi, jos merkkijonossa ei ole merkkejä tai se puuttuu.
- Esimerkki: `"Hello world".isEmpty()` palauttaa `false`.
- Esimerkki: `"".isEmpty()` palauttaa `true`.

### `lower()`

`string.lower(): string`

- Palauttaa merkkijonon muunnettuna pieniksi kirjaimiksi.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` on kohdemerkkijonosta haettava arvo.
- `replacement` on arvo, jolla löydetyt osumat korvataan.
- Jos `pattern` on merkkijono, kaikki esiintymät korvataan.
- Jos `pattern` on säännöllinen lauseke, `g`-lippu määrittää, korvaako vain ensimmäisen vai kaikki esiintymät.
- Esimerkki: `"a:b:c:d".replace(/:/, "-")` palauttaa `"a-b,c,d"`, kun taas `"a:b:c:d".replace(/:/g, "-")` palauttaa `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` on kertojen lukumäärä, kuinka monta kertaa merkkijono toistetaan.
- Esimerkki: `"123".repeat(2)` palauttaa `"123123"`

### `reverse()`

`string.reverse(): string`

- Kääntää merkkijonon.
- Esimerkki: `"hello".reverse()` palauttaa `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` on sisällyttävä aloitusindeksi.
- `end` on valinnainen poissulkeva lopetusindeksi.
- Palauttaa alimerkkijonon kohdasta `start` (sisällyttävä) kohtaan `end` (poissulkeva).
- Esimerkki: `"hello".slice(1, 4)` palauttaa `"ell"`.
- Jos `end` jätetään pois, leikkaa merkkijonon loppuun asti.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` on erotin merkkijonon jakamista varten.
- `n` on valinnainen luku. Jos annettu, tuloksessa on ensimmäiset `n` elementtiä.
- Palauttaa luettelon alimerkkijonoista.
- Esimerkki: `"a,b,c,d".split(",", 3)` tai `"a,b,c,d".split(/,/, 3)` palauttaa `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` on merkkijono, joka tarkistetaan alusta.
- Palauttaa tosi, jos merkkijono alkaa `query`-arvolla.
- Esimerkki: `"hello".startsWith("he")` palauttaa `true`.

### `title()`

`string.title(): string`

- Muuntaa merkkijonon otsikkomuotoon (jokaisen sanan ensimmäinen kirjain isoksi).
- Esimerkki: `"hello world".title()` palauttaa `"Hello World"`.

### `trim()`

`string.trim(): string`

- Poistaa tyhjät merkit merkkijonon molemmista päistä.
- Esimerkki: `"  hi  ".trim()` palauttaa `"hi"`.

## Numero

Funktioita, joita voit käyttää numeeristen arvojen kanssa, kuten `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Palauttaa luvun itseisarvon.
- Esimerkki: `(-5).abs()` palauttaa `5`.

### `ceil()`

`number.ceil(): number`

- Pyöristää luvun ylöspäin lähimpään kokonaislukuun.
- Esimerkki: `(2.1).ceil()` palauttaa `3`.

### `floor()`

`number.floor(): number`

- Pyöristää luvun alaspäin lähimpään kokonaislukuun.
- Esimerkki: `(2.9).floor()` palauttaa `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Palauttaa tosi, jos lukua ei ole.
- Esimerkki: `5.isEmpty()` palauttaa `false`.

### `round()`

`number.round(digits: number): number`

- Pyöristää luvun lähimpään kokonaislukuun.
- Voit halutessasi antaa `digits`-parametrin pyöristääksesi haluamaasi desimaalitarkkuuteen.
- Esimerkki: `(2.5).round()` palauttaa `3`, ja `(2.3333).round(2)` palauttaa `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` on desimaalipaikkojen lukumäärä.
- Palauttaa merkkijonon, jossa luku on kiinteän pisteen merkintätavalla.
- Esimerkki: `(3.14159).toFixed(2)` palauttaa `"3.14"`.

## Luettelo

Funktioita, joita voit käyttää järjestetyn elementtilistan kanssa, kuten `[1, 2, 3]`.

### Kentät

| Kenttä        | Tyyppi   | Kuvaus                            |
| ------------- | -------- | --------------------------------- |
| `list.length` | `number` | Luettelon elementtien lukumäärä   |

### `contains()`

`list.contains(value: any): boolean`

- `value` on haettava elementti.
- Palauttaa tosi, jos luettelo sisältää `value`-arvon.
- Esimerkki: `[1,2,3].contains(2)` palauttaa `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` on yksi tai useampi haettava elementti.
- Palauttaa tosi, jos luettelo sisältää kaikki `values`-arvot.
- Esimerkki: `[1,2,3].containsAll(2,3)` palauttaa `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` on yksi tai useampi haettava elementti.
- Palauttaa tosi, jos luettelo sisältää vähintään yhden `values`-arvoista.
- Esimerkki: `[1,2,3].containsAny(3,4)` palauttaa `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Suodattaa luettelon elementit kutsumalla suodatusfunktiota, joka käyttää muuttujia `index` ja `value`, ja palauttaa totuusarvon siitä, pidetäänkö elementti.
- `value` on luettelon kohteen arvo.
- `index` on nykyisen arvon indeksi.
- Esimerkki: `[1,2,3,4].filter(value > 2)` palauttaa `[3,4]`.

### `flat()`

`list.flat(): list`

- Litistää sisäkkäisen luettelon yhdeksi luetteloksi.
- Esimerkki: `[1,[2,3]].flat()` palauttaa `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Palauttaa tosi, jos luettelossa ei ole elementtejä.
- Esimerkki: `[1,2,3].isEmpty()` palauttaa `false`.

### `join()`

`list.join(separator: string): string`

- `separator` on merkkijono, joka lisätään elementtien väliin.
- Yhdistää kaikki luettelon elementit yhdeksi merkkijonoksi.
- Esimerkki: `[1,2,3].join(",")` palauttaa `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Muuntaa jokaisen luettelon elementin kutsumalla muunnosfunktiota, joka käyttää muuttujia `index` ja `value`, ja palauttaa uuden arvon luetteloon sijoitettavaksi.
- `value` on luettelon kohteen arvo.
- `index` on nykyisen arvon indeksi.
- Esimerkki: `[1,2,3,4].map(value + 1)` palauttaa `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Tiivistää luettelon elementit yhdeksi arvoksi suorittamalla lausekkeen jokaiselle elementille. Lauseke voi käyttää muuttujia `index`, `value` ja `acc` (kertymä), ja sen tulisi palauttaa seuraava kertymäarvo.
- `expression` arvioidaan jokaiselle luettelon elementille.
- `value` on nykyisen luettelokohteen arvo.
- `index` on nykyisen kohteen indeksi.
- `acc` on tähänastinen kertynyt arvo.
- Esimerkki (summa): `[1,2,3].reduce(acc + value, 0)` palauttaa `6`.
- Esimerkki (maksimi): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` palauttaa suurimman luvun tai `null`, jos yhtään ei ole.

### `reverse()`

`list.reverse(): list`

- Kääntää luettelon paikalleen.
- Esimerkki: `[1,2,3].reverse()` palauttaa `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` on sisällyttävä aloitusindeksi.
- `end` on valinnainen poissulkeva lopetusindeksi.
- Palauttaa matalan kopion luettelon osasta kohdasta `start` (sisällyttävä) kohtaan `end` (poissulkeva).
- Esimerkki: `[1,2,3,4].slice(1,3)` palauttaa `[2,3]`.
- Jos `end` jätetään pois, leikkaa luettelon loppuun asti.

### `sort()`

`list.sort(): list`

- Järjestää luettelon elementit pienimmästä suurimpaan.
- Esimerkki: `[3, 1, 2].sort()` palauttaa `[1, 2, 3]`.
- Esimerkki: `["c", "a", "b"].sort()` palauttaa `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Poistaa päällekkäiset elementit.
- Esimerkki: `[1,2,2,3].unique()` palauttaa `[1,2,3]`.

## Linkki

Funktioita, joita voit käyttää linkin kanssa. Linkkejä voidaan luoda tiedostosta (`file.asLink()`) tai polusta (`link("polku")`).

### `asFile()`

`link.asFile(): file`

- Palauttaa tiedosto-objektin, jos linkki viittaa kelvolliseen paikalliseen tiedostoon.
- Esimerkki: `link("[[tiedostonimi]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Palauttaa, onko `link`-linkin edustamalla tiedostolla linkki `file`-tiedostoon.

## Tiedosto

Funktioita, joita voit käyttää holvin tiedostojen kanssa.

### Kentät

Seuraavat kentät ovat käytettävissä tiedostoille:

| Kenttä            | Tyyppi   | Kuvaus                                                         |
| ----------------- | -------- | -------------------------------------------------------------- |
| `file.name`       | `string` | Tiedoston nimi.                                                |
| `file.basename`   | `string` | Tiedoston nimi ilman tiedostopäätettä.                         |
| `file.path`       | `string` | Tiedoston koko polku suhteessa holvin juureen.                 |
| `file.folder`     | `string` | Ylemmän kansion koko polku.                                    |
| `file.ext`        | `string` | Tiedoston tiedostopääte.                                       |
| `file.size`       | `number` | Tiedoston koko tavuina.                                        |
| `file.properties` | `object` | Muistiinpanon määreet.                                         |
| `file.tags`       | `list`   | Tiedoston tunnisteet. Sisältää myös tekstissä olevat tunnisteet. |
| `file.links`      | `list`   | Tiedoston sisäiset linkit.                                     |
| `file.ctime`      | `date`   | Aikaleima tiedoston luontiajankohdasta.                         |
| `file.mtime`      | `date`   | Aikaleima tiedoston viimeisestä muokkauksesta.                  |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` valinnainen linkin näytettävä teksti.
- Palauttaa Link-objektin, joka renderöityy toimivana linkkinä.
- Esimerkki: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` on toinen tiedosto-objekti tai merkkijonopolku tarkistettavaksi.
- Palauttaa tosi, jos `file` linkittää `otherFile`-tiedostoon.
- Esimerkki: `file.hasLink(otherFile)` palauttaa `true`, jos `file`-tiedostosta on linkki `otherFile`-tiedostoon.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Palauttaa tosi, jos muistiinpanolla on annettu tiedostomääre.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` on yksi tai useampi tunnisteen nimi.
- Palauttaa tosi, jos tiedostolla on jokin `values`-arvojen tunnisteista.
- Esimerkki: `file.hasTag("tag1", "tag2")` palauttaa `true`, jos tiedostolla on tunniste `#tag1` tai `#tag2`. Sisältää myös kaikki [[Tunnisteet#Sisäkkäiset tunnisteet|sisäkkäiset tunnisteet]], kuten `#tag1/a` tai `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` on tarkistettavan kansion nimi.
- Palauttaa tosi, jos tiedosto on määritetyssä kansiossa tai jossakin sen alikansiossa.
- Esimerkki: `file.inFolder("notes")` palauttaa `true`.

## Objekti

Funktioita, joita voit käyttää avain-arvo-parien kokoelman kanssa, kuten `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Palauttaa tosi, jos objektilla ei ole omia ominaisuuksia.
- Esimerkki: `{}.isEmpty()` palauttaa `true`.

### `keys()`

`object.keys(): list`

- Palauttaa luettelon, joka sisältää objektin avaimet.

### `values()`

`object.values(): list`

- Palauttaa luettelon, joka sisältää objektin arvot.

## Säännöllinen lauseke

Funktioita, joita voit käyttää säännöllisen lausekkeen kanssa. Esimerkki: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` on testattava merkkijono.
- Palauttaa tosi, jos säännöllinen lauseke vastaa `value`-arvoa.
- Esimerkki: `/abc/.matches("abcde")` palauttaa `true`.
