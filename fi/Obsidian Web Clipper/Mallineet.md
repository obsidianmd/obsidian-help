---
permalink: web-clipper/templates
description: 'Opi luomaan mallipohjia, jotka tallentavat ja järjestävät verkkosivujen metatiedot automaattisesti Web Clipperin avulla.'
---
[[Johdanto Obsidian Web Clipperiin|Web Clipper]] mahdollistaa mallien luomisen, jotka automaattisesti tallentavat ja järjestävät verkkosivujen metatietoja. Esimerkkimalleja on saatavilla [clipper-templates-reposta](https://github.com/kepano/clipper-templates).

## Mallin luominen tai muokkaaminen

**Luo** malli avaamalla Web Clipperin asetukset ja napsauttamalla **Uusi malli** -painiketta sivupalkissa. Voit myös **kahdentaa** mallin oikean yläkulman **Lisää**-valikossa.

**Muokkaa** mallia valitsemalla se sivupalkista. Muutoksesi tallennetaan automaattisesti.

Mallit hyödyntävät [[Muuttujat|muuttujia]] ja [[Suodattimet|suodattimia]], joiden avulla voit räätälöidä sisällön tallennustapaa.

## Web Clipper -mallien tuonti ja vienti

Mallin tuominen:

1. Avaa laajennus ja napsauta **[[Asetukset]]**-rataskuvaketta.
2. Siirry mihin tahansa malliin luettelossa.
3. Napsauta oikeassa yläkulmassa **Tuo** tai raahaa ja pudota `.json`-mallitiedosto(t) mihin tahansa mallialueelle.

Mallin vieminen: napsauta oikeassa yläkulmassa **Vie**. Tämä lataa mallin `.json`-tiedostona. Voit myös kopioida mallitiedot leikepöydälle **Lisää**-valikon kautta.

## Malliasetukset

### Toiminnot

Määritä, miten Web Clipperin sisältö lisätään Obsidianiin:

- **Luo uusi muistiinpano**
- **Lisää olemassa olevaan muistiinpanoon**, alkuun tai loppuun
- **Lisää päivän muistiinpanoon**, alkuun tai loppuun (edellyttää, että [[Päivittäiset muistiinpanot|päivittäiset muistiinpanot]] -lisäosa on käytössä)

### Mallin automaattinen laukaisu

Mallin laukaisimet mahdollistavat mallin automaattisen valinnan nykyisen sivun URL-osoitteen tai [schema.org](https://schema.org/)-tietojen perusteella. Voit määrittää useita sääntöjä kullekin mallille, erotettuna rivinvaihdolla.

Ensimmäinen vastaavuus malliluettelossasi määrittää käytettävän mallin. Voit raahata malleja ylös ja alas Web Clipperin asetuksissa muuttaaksesi mallien täsmäytysjärjestystä.

#### Yksinkertainen URL-täsmäytys

Yksinkertainen täsmäytys laukaisee mallin, jos nykyisen sivun URL-osoite *alkaa* annetulla kaavalla. Esimerkiksi:

- `https://obsidian.md` vastaa mitä tahansa URL-osoitetta, joka alkaa tällä tekstillä.

#### Säännölliseen lausekkeeseen perustuva täsmäytys

Voit laukaista malleja monimutkaisempien URL-kaavojen perusteella käyttämällä säännöllisiä lausekkeita. Ympäröi säännöllinen lauseke vinoviivoin (`/`). Muista suojata erikoismerkit (kuten `.` ja `/`) kenoviivalla (`\`). Esimerkiksi:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` vastaa mitä tahansa IMDB:n referenssisivua.

#### Schema.org-täsmäytys

Voit laukaista malleja sivulla olevan [schema.org](https://schema.org/)-datan perusteella. Käytä `schema:`-etuliitettä ja sen jälkeen haluamaasi schema-avainta. Voit halutessasi määrittää odotetun arvon. Esimerkiksi:

- `schema:@Recipe` vastaa sivuja, joiden schematyyppi on "Recipe".
- `schema:@Recipe.name` vastaa sivuja, joilla `@Recipe.name` on olemassa.
- `schema:@Recipe.name=Cookie` vastaa sivuja, joilla `@Recipe.name` on "Cookie".

Schema.org-arvoja voidaan myös käyttää [[Muuttujat#Schema.org-muuttujat|mallien tietojen esitäyttämiseen]].

### Tulkkauksen konteksti

Kun [[Verkkosivujen tulkinta|tulkki]] on käytössä, voit käyttää [[Muuttujat#Kehotemuuttujat|kehotemuuttujia]] sivun sisällön poimimiseen luonnollisella kielellä. Kullekin mallille voit määrittää [[Verkkosivujen tulkinta#Konteksti|kontekstin]], johon tulkilla on pääsy.
