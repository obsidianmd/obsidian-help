---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Ominaisuudet mahdollistavat muistiinpanoa koskevien tietojen järjestämisen. Ominaisuudet sisältävät jäsenneltyä dataa, kuten tekstiä, linkkejä, päivämääriä, valintaruutuja ja numeroita.'
---
Määreet mahdollistavat tiedon järjestämisen muistiinpanosta. Määreet sisältävät rakenteista tietoa, kuten tekstiä, linkkejä, päivämääriä, valintaruutuja ja numeroita. Määreitä voidaan myös käyttää yhdessä [[Yhteisön lisäosat|yhteisön lisäosien]] kanssa, jotka voivat tehdä hyödyllisiä asioita rakenteisella tiedollasi.

## Määreiden lisääminen muistiinpanoon

Muistiinpanoon voi lisätä määreen usealla tavalla:

- Käytä **Lisää tiedostolle määre** -[[Komentovalikko|komentoa]].
- Käytä **`Cmd/Ctrl+;`** -[[Pikanäppäimet|pikanäppäintä]].
- Valitse **Lisää tiedostolle määre** **Lisätoiminnot**-valikosta (kolme pistettä -kuvake tai välilehden oikea napsautus).
- Kirjoita `---` tiedoston alkuun.

Kun lisäät määreen, tiedoston yläosaan ilmestyy rivi, jossa on kaksi kenttää: määreen _nimi_ ja määreen _arvo_.

Nimeksi voit valita mitä haluat. Obsidian tarjoaa useita oletusmääreitä: `tags`, `cssclasses` ja `aliases`.

Kun olet valinnut määreen nimen, voit antaa sille arvon.

### Määretyypit

Nimen ja arvon lisäksi määreillä on myös _tyyppi_. Määreen tyyppi määrittää, millaisia arvoja se voi tallentaa ja miten Obsidian käsittelee niitä. Voit muuttaa määreen tyyppiä napsauttamalla tyyppikuvaketta määreen nimen vieressä ja valitsemalla toisen vaihtoehdon. Voit myös hallita määretyyppejä [[Määrenäkymä]]-sisäänrakennetulla lisäosalla.

Obsidian tukee seuraavia määretyyppejä:

- **[[#Teksti]]**
- **[[#Luettelo]]**
- **[[#Numero]]**
- **[[#Valintaruutu]]**
- **[[#Päiväys]]**
- **[[#Päiväys ja kellonaika]]**
- **[[#Tunnisteet]]**

Kun määretyyppi on asetettu määreen nimelle, kaikki samannimiset määreet kaikkialla holvissa käyttävät samaa tyyppiä.

## Edistynyt käyttö

### Määreiden hakeminen

Määreillä on oma [[Hae|hakusyntaksinsa]], jota voit käyttää yhdessä muiden hakutermien ja operaattorien kanssa. [[Hae#Hae määreitä|Katso määreiden hakusyntaksi]].

### Mallineet

Voit lisätä määreitä [[Mallineet|mallineisiin]].

Kun lisäät mallineen aktiiviseen muistiinpanoon, kaikki mallineen määreet lisätään muistiinpanoon. Obsidian myös yhdistää muistiinpanossa jo olevat määreet mallineen määreisiin. ^templates-properties

### Määreiden uudelleennimeäminen

Voit nimetä määreen uudelleen napsauttamalla sitä hiiren oikealla painikkeella [[Määrenäkymä|Kaikki määreet -näkymässä]].

### Näyttötavat

Voit muuttaa määreiden näyttötapaa muistiinpanossa kohdasta **[[Asetukset]] → Muokkain → Tiedoston määreet**. Vaihtoehdot ovat:

- **Näkyvissä** (oletus) – näyttää määreet muistiinpanon yläosassa, jos niitä on.
- **Piilotettu** – piilottaa määreet; ne voidaan silti näyttää sivupalkissa [[Määrenäkymä|määrenäkymän]] kautta.
- **Lähdekoodi** – näyttää määreet YAML-muotoisena tekstinä ilman muotoilua.

### CSS-pätkät

Voit käyttää [[CSS-pätkät|CSS-pätkiä]] muuttaaksesi tiettyjen muistiinpanojen ulkoasua.

### Ei tuetut ominaisuudet

Muutamia ominaisuuksia ei tällä hetkellä tueta Obsidianissa:

- **Sisäkkäiset määreet**: Sisäkkäisten määreiden tarkasteluun suosittelemme [[Näkymät ja muokkaustila#Lähdekooditila|lähdekooditilan]] käyttöä.
- **Määreiden joukkomuokkaus**: Syvällisempään joukkomuokkaukseen [[Määrenäkymä|määrenäkymän]] ulkopuolella suosittelemme joukkomuokkaustyökaluja, kuten VSCodea, skriptejä ja yhteisön lisäosia.
- **Markdown määreissä**: Tämä on tarkoituksellinen rajoitus, sillä määreet on tarkoitettu pienille, atomisille tietoyksiköille, jotka ovat sekä ihmisten että koneiden luettavissa.

## Pikanäppäimet

### Määreen lisääminen

| Toiminto | Pikanäppäin |
|---|---|
|Lisää uusi määre|`Cmd + ;`|

### Määreiden välillä siirtyminen

Kun määre on kohdistettuna:

| Toiminto | Pikanäppäin |
|---|---|
|Kohdista seuraava määre|`Nuoli alas` tai `Tab`|
|Kohdista edellinen määre|`Nuoli ylös` tai `Shift+Tab`|
|Siirry muokkaimeen|`Alt+Nuoli alas`|

### Määreiden valitseminen

| Toiminto | Pikanäppäin |
|---|---|
|Laajenna valintaa ylöspäin|`Shift+Nuoli ylös`|
|Laajenna valintaa alaspäin|`Shift+Nuoli alas`|
|Valitse kaikki|`Cmd+A`|

### Määreiden muokkaaminen

| Toiminto | Pikanäppäin |
|---|---|
|Muokkaa määreen nimeä|`Nuoli vasemmalle`|
|Muokkaa määreen arvoa|`Nuoli oikealle`|
|Kohdista määre|`Escape`|
|Poista määre|`Cmd+Backspace`<br><br>jos määreitä on valittuna, poistaa valinnan.|
|Kumoa|`Cmd+Z`|
|Tee uudelleen|`Cmd+Shift+Z`|

### Vim (edistynyt)

| Toiminto | Pikanäppäin |
|---|---|
|Siirry alas|`j`|
|Siirry ylös|`k`|
|Kohdista avain|`h`|
|Kohdista arvo|`l`|
|Kohdista arvo (kohdistin lopussa)|`A`|
|Kohdista arvo (kohdistin alussa)|`i`|
|Luo uusi määre|`o`|

## Määreiden muoto

Määreet tallennetaan [YAML](https://yaml.org/)-muodossa tiedoston yläosaan. YAML on suosittu muoto, joka on helppo lukea sekä ihmisille että koneille.

Määreiden nimet erotetaan arvoistaan kaksoispisteellä ja välilyönnillä:

```yaml
---
name: value
---
```

Vaikka nimi-arvo-parien järjestyksellä ei ole merkitystä, jokaisen nimen on oltava uniikki muistiinpanon sisällä. Esimerkiksi sinulla ei voi olla useampaa kuin yksi `tags`-määre.

Arvot voivat olla [[#Teksti|tekstiä]], [[#Numero|numeroita]], [[#Valintaruutu|valintaruutuja]], [[#Päiväys|päivämääriä]], [[#Päiväys ja kellonaika|päivämääriä ja kellonaikoja]] tai [[#Luettelo|luetteloita]].

### Teksti

Tekstimääreet sisältävät yhden rivin tekstiä. Markdown-muotoilu ei renderöidy tekstimääreissä. Aihetunnisteet eivät luo tunnisteita tekstimääreissä.

Tekstimääreet voivat sisältää URL-osoitteita ja [[Sisäiset linkit|sisäisiä linkkejä]] `[[Linkki]]`-syntaksilla. [[Sisäiset linkit|Sisäiset linkit]] tekstimääreissä on ympäröitävä lainausmerkeillä. Obsidian lisää ne automaattisesti, jos syötät sisäisiä linkkejä manuaalisesti määreisiin, mutta ole huolellinen lisäämään ne käyttäessäsi mallinelisäosia.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Luettelo

Luettelomääreet sisältävät useita arvoja. Jokainen luettelon arvo näkyy omalla rivillään, edessään yhdysmerkki (-) ja välilyönti.

Luettelon arvot voivat sisältää tekstiä, numeroita ja [[Sisäiset linkit|sisäisiä linkkejä]]. Kun käytät [[Sisäiset linkit|sisäisiä linkkejä]] luettelomääreissä, ympäröi ne lainausmerkeillä.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Numero

Numerotyyppisten määreiden on aina oltava kirjaimellisia lukuja, ei lausekkeita operaattoreineen. Sekä kokonaisluvut että desimaalit ovat sallittuja.

```yaml
---
year: 1977
pie: 3.14
---
```

### Valintaruutu

Valintaruutumääreet ovat joko `true` tai `false`. Visuaalisessa muokkauksessa tämä näytetään valintaruutuna.

```yaml
---
favorite: true
reply: false
last: # Määrittelemätön arvo; käsitellään usein arvona false
```

### Päiväys

Päiväysmääreet tallennetaan seuraavassa muodossa:

```yaml
---
date: 2020-08-21
---
```

Päivämäärävalitsin noudattaa käyttöjärjestelmäsi oletuspäivämäärä- ja aikamuotoa. Voit muuttaa sitä järjestelmäasetuksista:

> [!info]- Windows
> **[[Asetukset]] → Aika ja kieli → Kieli ja alue → Alueellinen muoto → Muuta muotoja**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Järjestelmäasetukset → Kieli ja alue → Päiväyksen muoto**
> 
> ![[Mac-OS-DateTime.png|450]]

Kun [[Päivittäiset muistiinpanot]]-lisäosa on käytössä, päiväysmääre toimii lisäksi sisäisenä linkkinä kyseisen päivän muistiinpanoon.

![[Päivittäiset muistiinpanot#^daily-notes-date]]

### Päiväys ja kellonaika

Päiväys ja kellonaika -määreet sisältävät sekä päivämäärän että tarkan kellonajan seuraavassa muodossa:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Kuten [[#Päiväys|päiväysmääreissä]], päivämäärä- ja aikavalikko noudattaa käyttöjärjestelmäsi oletusmuotoa. Voit muuttaa sitä järjestelmäasetuksista.

### Tunnisteet

Tunnistemääreet ovat erityinen määretyyppi, jota käytetään yksinomaan `tags`-määreelle. Tätä määretyyppiä ei voi asettaa muille määreille.

Tunnistemääreet muotoillaan luettelona, jossa jokainen tunniste on omalla rivillään edessään yhdysmerkki (-) ja välilyönti.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

`tags`-määre on yksi Obsidianin [[#Oletusmääreet|oletusmääreistä]]. Katso [[Tunnisteet]] saadaksesi lisätietoja tunnisteiden käytöstä Obsidianissa.

### JSON-määreet

Vaikka suosittelemme YAML:n käyttöä määreiden määrittämiseen, voit myös määrittää määreitä [JSON](https://www.json.org/)-muodossa:

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Huomaa, että JSON-lohko luetaan, tulkitaan ja tallennetaan YAML-muodossa.

## Oletusmääreet

Obsidianissa on joukko oletusmääreitä:

| Määre        | Tyyppi | Kuvaus                                                       |
| ------------ | ------ | ------------------------------------------------------------ |
| `tags`       | Luettelo | Katso [[Muokkaus ja muotoilu/Tunnisteet\|Tunnisteet]].          |
| `aliases`    | Luettelo | Katso [[Aliakset]].                                         |
| `cssclasses` | Luettelo | Mahdollistaa yksittäisten muistiinpanojen tyylittelyn [[CSS-pätkät|CSS-pätkillä]]. |

### Obsidian Publishin määreet

Seuraavia oletusmääreitä voidaan käyttää [[Johdanto Obsidian Publishiin|Obsidian Publishin]] kanssa:

| Määre         | Kuvaus                                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Katso [[Julkaise sisältösi#Automatically select data to publish\|Julkaistavan sisällön automaattinen valinta]]. |
| `permalink`   | Katso [[Pysyvät linkit\|Pysyvät linkit]].                                                                  |
| `description` | Katso [[Sosiaalisen median linkkien esikatselut#Description\|Kuvaus]].                                     |
| `image`       | Katso [[Sosiaalisen median linkkien esikatselut#Image\|Kuva]].                                             |
| `cover`       | Katso [[Sosiaalisen median linkkien esikatselut#Image\|Kuva]].                                             |

### Vanhentuneet määreet

Nämä määreet vanhentuivat Obsidian 1.4 -versiossa ja ne tulisi korvata nykyaikaisilla vastineillaan. Niiden tuki [[#Oletusmääreet|oletusmääreinä]] poistettiin Obsidian 1.9 -versiossa.

| Määre | Kuvaus |
|-|-|
| `tag` | Vanhentunut alias `tags`-määreelle. |
| `alias` | Vanhentunut alias `aliases`-määreelle. |
| `cssclass` | Vanhentunut alias `cssclasses`-määreelle. |

> [!tip] Jos sinun tarvitsee muuntaa holvin tiedostot [[#Oletusmääreet|oletusmääreiden]] muotoon, voit käyttää [[Muotoilumuunnin|muotoilumuunninta]] muuttaaksesi holvin tiedostot kerralla.
