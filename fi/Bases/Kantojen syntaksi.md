---
permalink: bases/syntax
publish: true
mobile: true
description: Tämä sivu tarjoaa johdannon Bases-syntaksiin Obsidianissa.
---
Kun [[Luo kanta|luot tietokannan]] Obsidianissa, se tallennetaan `.base`-tiedostona. Tietokantoja muokataan tyypillisesti sovelluksen käyttöliittymän kautta, mutta syntaksia voi muokata myös manuaalisesti ja upottaa koodilohkoon.

[[Johdanto kantoihin|Kantojen]] syntaksi määrittelee [[Näkymät|näkymät]], suodattimet ja [[Kaavat|kaavat]]. Kantojen tulee olla validia YAML:ää, joka noudattaa alla määriteltyä skeemaa.

## Esimerkki

Tässä on esimerkki tietokantatiedostosta. Käymme läpi jokaisen osion yksityiskohtaisesti.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Suodattimet

Oletuksena tietokanta sisältää jokaisen tiedoston holvissa. Erillistä `from`- tai `source`-kyselyä kuten SQL:ssä tai Dataview'ssä ei ole. `filters`-osio mahdollistaa ehtojen määrittelyn tietojoukon rajaamiseksi.

```yaml
# Yksinkertainen suodatin:
filters:
  and:
    - file.hasTag("tag")

# Monimutkainen suodatin:
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Suodattimia voi käyttää kahdessa kohdassa:

1. Yleisellä `filters`-tasolla (näytetty yllä), jossa ne koskevat kaikkia tietokannan näkymiä.
2. `view`-tasolla, jossa ne koskevat vain tiettyä näkymää.

Nämä kaksi osiota ovat toiminnallisesti vastaavat, ja näkymää arvioitaessa ne yhdistetään `AND`-operaattorilla.

`filters`-osio sisältää joko yksittäisen suodatinlauseen merkkijonona tai rekursiivisesti määritellyn suodatinobjektin. Suodatinobjektit voivat sisältää jonkin seuraavista: `and`, `or` tai `not`. Nämä avaimet ovat heterogeenisiä luetteloita, jotka sisältävät muita suodatinobjekteja tai merkkijonomuotoisia suodatinlauseita. Suodatinlause on rivi, joka evaluoituu joko todeksi tai epätodeksi, kun sitä sovelletaan muistiinpanoon. Se voi olla jokin seuraavista:

- Perusvertailu standardeilla aritmeettisilla operaattoreilla.
- Funktio. Useita [[Funktiot|funktioita]] on sisäänrakennettuja, ja lisäosat voivat tarjota lisäfunktioita.

Suodattimien ja kaavojen syntaksi ja käytettävissä olevat funktiot ovat samat.

### Kaavat

`formulas`-osio määrittelee [[Kaavat|kaavamääreet]], joita voidaan näyttää kaikissa tietokantatiedoston näkymissä.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Kaavamääreet tukevat perusaritmeettisia operaattoreita ja useita sisäänrakennettuja [[Funktiot|funktioita]]. Tulevaisuudessa lisäosat voivat lisätä funktioita kaavoissa käytettäväksi.

Määreisiin voi viitata eri tavoilla niiden tyypin mukaan:

- **Muistiinpanomääreet** ovat muistiinpanon alkulehtisissä määriteltyjä määreitä. Esimerkiksi `note.price` tai `note["price"]`.  
  Jos etuliitettä ei ole määritelty, määreen oletetaan olevan `note`-määre.
- **Tiedostomääreet** kuvaavat itse tiedostoa.  
  Esimerkiksi `file.size` tai `file.ext`. Voit myös viitata tiedosto-objektiin suoraan, esim. `file.hasLink()`.
- **Kaavamääreet** ovat muita tietokannan kaavoja.  
  Esimerkiksi `formula.formatted_price`.

Kaava voi käyttää arvoja muista kaavamääreistä, kunhan kiertoviittauksia ei synny.

Kaavamääreet tallennetaan aina merkkijonoina YAML:ssa, mutta niiden todellinen **tulosteen tietotyyppi** määräytyy taustalla olevan datan tyypin ja käytettyjen funktioiden paluuarvon perusteella.

Huomaa, että sisäkkäisten lainausmerkkien käyttö on tarpeen tekstiliteraalien sisällyttämiseksi YAML-kenttään. Tekstiliteraalit on suljettava yksinkertaisiin tai kaksoislainausmerkkeihin.

### Määreet

`properties`-osio mahdollistaa kunkin määreen asetustietojen tallentamisen. Yksittäinen näkymä päättää, miten näitä asetusarvoja käytetään. Esimerkiksi taulukoissa näyttönimeä käytetään sarakeotsikoina.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Näyttönimiä ei käytetä suodattimissa tai kaavoissa.

### Yhteenvedot

`summaries`-osiota voidaan käyttää mukautettujen yhteenvetokaavojen määrittelyyn. Tässä määriteltyjen yhteenvetokaavojen lisäksi käytettävissä on useita oletusyhteenvetokaavoja.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

Tässä esimerkissä `customAverage`-kaava on sama kuin oletus `Average`, paitsi että arvo pyöristetään eri tarkkuuteen. Yhteenvetokaavoissa `values`-avainsana on luettelo, joka sisältää kaikki kyseisen määreen arvot jokaisesta muistiinpanosta tulosjoukossa. Yhteenvetokaavan tulisi palauttaa yksittäinen arvo.

Huomaa, että tämä `summaries`-osio on eri kuin näkymäkonfiguraation `summaries`-osio (selitetty alla), jossa yhteenvetokaavat osoitetaan tietyille määreille.

#### Oletusyhteenvetokaavat

| Nimi      | Syötetyyppi | Kuvaus                                                        |
| --------- | ----------- | ------------------------------------------------------------- |
| Average   | Numero      | Syötearvojen lukujen matemaattinen keskiarvo.                 |
| Min       | Numero      | Syötearvojen pienin luku.                                     |
| Max       | Numero      | Syötearvojen suurin luku.                                     |
| Sum       | Numero      | Syötearvojen lukujen summa.                                   |
| Range     | Numero      | `Max`- ja `Min`-arvojen erotus.                               |
| Median    | Numero      | Syötearvojen lukujen matemaattinen mediaani.                  |
| Stddev    | Numero      | Syötearvojen lukujen keskihajonta.                            |
| Earliest  | Päiväys     | Syötearvojen aikaisin päivämäärä.                             |
| Latest    | Päiväys     | Syötearvojen myöhäisin päivämäärä.                            |
| Range     | Päiväys     | `Latest`- ja `Earliest`-arvojen erotus.                       |
| Checked   | Totuusarvo  | `true`-arvojen lukumäärä.                                     |
| Unchecked | Totuusarvo  | `false`-arvojen lukumäärä.                                    |
| Empty     | Mikä tahansa| Syötearvojen tyhjien arvojen lukumäärä.                       |
| Filled    | Mikä tahansa| Syötearvojen ei-tyhjien arvojen lukumäärä.                    |
| Unique    | Mikä tahansa| Syötearvojen uniikkien arvojen lukumäärä.                     |

### Näkymät

`views`-osio määrittelee, miten data voidaan esittää. Jokainen `views`-luettelon kohde määrittelee erillisen näkymän samasta datasta, ja eri näkymiä voi olla niin monta kuin tarvitaan.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` valitsee sisäänrakennetuista ja lisäosien lisäämistä näkymätyypeistä.
- `name` on näyttönimi, ja sitä voidaan käyttää oletusnäkymän määrittelyyn.
- `filters` ovat täsmälleen samoja kuin yllä kuvattiin, mutta ne koskevat vain kyseistä näkymää.
- `groupBy` määrittelee määreen ja järjestyssuunnan. Määritetyn määreen arvo kullakin rivillä käytetään rivin sijoittamiseen ryhmiin.
- `summaries` yhdistää määrenimet nimettyyn yhteenvetoon. Yhteenvedot suorittavat koosteen määreestä kaikkien rivien yli.

[[Näkymät]] voivat lisätä ylimääräistä dataa minkä tahansa tilan ylläpitämiseen tai oikeaan esittämiseen tarvittavan tiedon tallentamiseksi, mutta lisäosakehittäjien tulisi huolehtia, etteivät he käytä avaimia, jotka ovat jo Bases-sisäänrakennetun lisäosan käytössä. Esimerkiksi taulukkonäkymä voi käyttää tätä rivien lukumäärän rajoittamiseen tai sen valitsemiseen, mitä saraketta käytetään rivien lajitteluun ja mihin suuntaan. Eri näkymätyyppi, kuten kartta, voisi käyttää tätä kartoittamaan, mikä muistiinpanon määre vastaa leveys- ja pituusastetta ja mikä määre tulisi näyttää nuppineulaotsikkona.

Tulevaisuudessa API mahdollistaa näkymien lukea ja kirjoittaa näitä arvoja, jolloin näkymä voi rakentaa oman käyttöliittymänsä konfigurointia varten.

## Määreet

Tietokannoissa käytetään kolmenlaisia määreitä:

1. **Muistiinpanomääreet**, jotka tallennetaan Markdown-tiedostojen alkulehtisissä.
2. **Tiedostomääreet**, jotka ovat käytettävissä kaikille tiedostotyypeille.
3. **Kaavamääreet**, jotka määritellään itse `.base`-tiedostossa (katso yllä).

### Muistiinpanomääreet

[[Määreet|Muistiinpanomääreet]] ovat käytettävissä vain Markdown-tiedostoille, ja ne tallennetaan kunkin muistiinpanon YAML-alkulehtisissä. Näihin määreisiin voi viitata muodossa `note.author` tai yksinkertaisesti `author` lyhennyksenä.

### Tiedostomääreet

Tiedostomääreet viittaavat tiedostoon, jota parhaillaan testataan tai arvioidaan. Tiedostomääreet ovat käytettävissä kaikille [[Hyväksytyt tiedostomuodot|tiedostotyypeille]], mukaan lukien liitteet.

Esimerkiksi suodatin `file.ext == "md"` on tosi kaikille Markdown-tiedostoille ja epätosi muille.

| Määre         | Tyyppi | Kuvaus                                                        |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Lista  | Paluulinkkitiedostojen luettelo. Huomio: Tämä määre on suorituskykyä rasittava. Käytä mahdollisuuksien mukaan käänteistä hakua ja `file.links`-määrettä. Ei päivitä tuloksia automaattisesti holvin muuttuessa. |
| `file.ctime`  | Päiväys | Luontiaika                                                   |
| `file.embeds` | Lista  | Luettelo kaikista upotteista muistiinpanossa                  |
| `file.ext`    | Merkkijono | Tiedostopääte                                             |
| `file.file`   | Tiedosto | Tiedosto-objekti, käytettävissä vain tietyissä funktioissa  |
| `file.folder` | Merkkijono | Tiedostokansion polku                                     |
| `file.links`  | Lista  | Luettelo kaikista sisäisistä linkeistä muistiinpanossa, mukaan lukien alkulehtiset |
| `file.mtime`  | Päiväys | Muokkausaika                                                |
| `file.name`   | Merkkijono | Tiedostonimi                                              |
| `file.path`   | Merkkijono | Tiedoston polku                                           |
| `file.properties`   | Objekti | Kaikki tiedoston määreet. Huomio: Ei päivitä tuloksia automaattisesti holvin muuttuessa. |
| `file.size`   | Numero | Tiedostokoko                                                  |
| `file.tags`   | Lista  | Luettelo kaikista tunnisteista tiedoston sisällössä ja alkulehtisissä |

### Määreiden käyttö `this`-objektilla

Käytä `this`-objektia tiedostomääreiden käyttämiseen. Se, mihin `this` viittaa, riippuu siitä, missä tietokanta näytetään.

Kun tietokanta avataan pääsisältöalueella, `this` osoittaa itse tietokantatiedoston määreisiin. Esimerkiksi `this.file.folder` palauttaa kansion polun, jossa tietokanta sijaitsee.

Kun tietokanta on upotettu toiseen tiedostoon, `this` osoittaa _upottavan_ tiedoston (muistiinpanon tai Canvas-tiedoston, joka sisältää tietokannan) määreisiin. Esimerkiksi `this.file.name` palauttaa upottavan tiedoston nimen, ei tietokannan nimen.

Kun tietokanta on sivupalkissa, `this` viittaa pääsisältöalueen aktiiviseen tiedostoon. Tämä mahdollistaa aktiiviseen tiedostoon perustuvien kyselyjen luomisen. Voit esimerkiksi käyttää `file.hasLink(this.file)` kopioidaksesi paluulinkkipaneelin toiminnan.

## Operaattorit

### Aritmeettiset operaattorit

Aritmeettiset operaattorit suorittavat laskutoimituksia luvuilla. Esimerkiksi `radius * (2 * 3.14)`.

| Operaattori | Kuvaus      |
| ----------- | ----------- |
| `+`         | plus        |
| `-`         | miinus      |
| `*`         | kerto       |
| `/`         | jako        |
| `%`         | modulo      |
| `( )`       | sulkeet     |

### Päivämääräaritmetiikka

Päivämääriä voidaan muokata lisäämällä ja vähentämällä kestoja. Kestoyksiköt hyväksyvät useita muotoja:

| Yksikkö                  | Kesto    |
| ------------------------ | -------- |
| `y`, `year`, `years`     | vuosi    |
| `M`, `month`, `months`   | kuukausi |
| `d`, `day`, `days`       | päivä    |
| `w`, `week`, `weeks`     | viikko   |
| `h`, `hour`, `hours`     | tunti    |
| `m`, `minute`, `minutes` | minuutti |
| `s`, `second`, `seconds` | sekunti  |

Päivämääräobjektien muokkaamiseen tai siirtämiseen käytä `+`- tai `-`-operaattoria kestomerkkijonon kanssa. Esimerkiksi `date + "1M"` lisää 1 kuukauden päivämäärään, kun taas `date - "2h"` vähentää 2 tuntia päivämäärästä.

Globaalia [[Funktiot|funktiota]] `today()` voidaan käyttää nykyisen päivämäärän hakemiseen, ja `now()` voidaan käyttää nykyisen päivämäärän ja kellonajan hakemiseen.

- `now() + "1 day"` palauttaa päivämäärän ja ajan tasan 24 tuntia suoritushetkestä.
- `file.mtime > now() - "1 week"` palauttaa `true`, jos tiedostoa on muokattu viimeisen viikon aikana.
- `date("2024-12-01") + "1M" + "4h" + "3m"` palauttaa päivämääräobjektin, joka edustaa arvoa `2025-01-01 04:03:00`.
- Kahden päivämäärän vähentäminen toisistaan antaa millisekuntieron niiden välillä, esimerkiksi `now() - file.ctime`.
- Saadaksesi päivämääräosan päivämäärästä, jossa on aika, käytä `datetime.date()`.
- Päivämääräobjektin muotoilemiseen käytä `format()`-funktiota, esimerkiksi `datetime.format("YYYY-MM-DD")`.

### Vertailuoperaattorit

Vertailuoperaattoreita voidaan käyttää lukujen tai päivämääräobjektien vertailuun. Yhtäsuuruus- ja erisuuruusoperaattoreita voidaan käyttää minkä tahansa arvotyypin kanssa, ei ainoastaan lukujen ja päivämäärien.

| Operaattori | Kuvaus                    |
| ----------- | ------------------------- |
| `==`        | yhtä suuri                |
| `!=`        | eri suuri                 |
| `>`         | suurempi kuin             |
| `<`         | pienempi kuin             |
| `>=`        | suurempi tai yhtä suuri   |
| `<=`        | pienempi tai yhtä suuri   |

### Boolen operaattorit

Boolen operaattoreita voidaan käyttää loogisten arvojen yhdistämiseen tai kääntämiseen, jolloin tuloksena on tosi tai epätosi.

| Operaattori | Kuvaus       |
| ----------- | ------------ |
| `!`         | looginen ei  |
| `&&`        | looginen ja  |
| \|\|        | looginen tai |

## Funktiot

Katso [[Funktiot|luettelo funktioista]], joita voidaan käyttää kaavoissa ja [[Näkymät|suodattimissa]].

## Tyypit

Tietokannoissa on tyyppijärjestelmä, jota kaavat ja suodattimet käyttävät funktioiden soveltamiseen määreisiin.

### Merkkijonot, luvut ja totuusarvot

Merkkijonot, luvut ja totuusarvot ovat "primitiivisiä" arvoja, jotka eivät vaadi funktiota luomiseen.

- Merkkijonot suljetaan yksinkertaisiin tai kaksoislainausmerkkeihin, esimerkiksi `"message"`.
- Luvut kirjoitetaan numeroina, ja ne voidaan valinnaisesti sulkea sulkeisiin selkeyden vuoksi. Esimerkiksi `1` tai `(2.5)`.
- Totuusarvot kirjoitetaan muodossa `true` tai `false` ilman lainausmerkkejä.

### Päivämäärät ja kestot

Päivämäärät edustavat tiettyä päivämäärää tai päivämäärää ja aikaa riippuen niiden luomiseen käytetystä funktiosta tai [[Määreet|määreelle]] osoitetusta tyypistä.

- Päivämäärän luomiseen käytä `date`-funktiota, esimerkiksi `date("2025-01-01 12:00:00")`
- Päivämäärän muokkaamiseen lisää tai vähennä kesto, esimerkiksi `now() + "1 hour"` tai `today() + "7d"`
- Vertaa päivämääriä vertailuoperaattoreilla (esim. `>` tai `<`) ja aritmeettisilla operaattoreilla (esimerkiksi `(now() + "1d") - now()` palauttaa `86400000` millisekuntia.)
- Päivämäärän osien poimimiseen käytä käytettävissä olevia kenttiä (`now().hour`) tai apufunktioita (`now.time()`).
- Useita muita [[Funktiot|kenttiä ja funktioita]] on käytettävissä päivämääräobjekteilla.

### Objektit ja luettelot

- Muuta yksittäinen elementti luetteloksi käyttämällä `list()`-funktiota. Tämä on erityisen hyödyllistä määreille, jotka voivat sisältää sekoituksen luetteloita ja yksittäisiä arvoja.
- Käytä luettelon elementtejä hakasulkeilla ja 0-pohjaisella indeksillä. Esimerkiksi `property[0]` palauttaa luettelon ensimmäisen elementin.
- Käytä objektin elementtejä hakasulkeilla ja elementin nimellä tai pistenotaatiolla. Esimerkiksi `property.subprop` tai `property["subprop"]`.

### Tiedostot ja linkit

[[Linkitä muistiinpanoja|Wikilinkit]] [[Määreet|alkulehti-määreissä]] tunnistetaan automaattisesti linkkiobjekteiksi. Linkit esitetään klikattavana linkkinä [[Näkymät|näkymässä]].

- Linkin luomiseen käytä globaalia `link`-[[Funktiot|funktiota]], esimerkiksi `link("filename")` tai `link("https://obsidian.md")`.
- Voit luoda linkin mistä tahansa merkkijonosta, esimerkiksi `link(file.ctime.date().toString())`.
- Näytettävän tekstin asettamiseen anna valinnainen merkkijono tai kuvake toisena parametrina, esimerkiksi `link("filename", "display")` tai `link("filename", icon("plus"))`.

Tiedosto-objektin voi muuttaa linkiksi käyttämällä `file.asLink()`-funktiota valinnaisella näyttötekstillä.

Linkkejä voidaan vertailla `==`- ja `!=`-operaattoreilla. Ne ovat yhtäläisiä niin kauan kuin ne osoittavat samaan tiedostoon, tai jos tiedostoa ei löydy haussa, niiden linkkitekstin on oltava identtinen.

Linkkejä voidaan vertailla tiedostoihin, kuten `file` tai `this`. Ne ovat yhtäläisiä, jos linkki osoittaa kyseiseen tiedostoon. Esimerkiksi `author == this`.

Linkkejä voidaan myös tarkistaa luettelon sisältämisessä, esimerkiksi `authors.contains(this)`.
