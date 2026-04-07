---
permalink: cli
description: 'Kaiken, mitä voit tehdä Obsidianissa, voi tehdä myös komentoriviltä.'
---
Obsidian CLI on komentoliittymä, jonka avulla voit ohjata Obsidiania terminaalistasi skriptausta, automaatiota ja ulkoisten työkalujen integrointia varten.

Kaiken mitä voit tehdä Obsidianissa, voit tehdä komentoriviltä. Obsidian CLI sisältää myös [[#Kehittäjäkomennot|kehittäjäkomentoja]] kehittäjätyökalujen avaamiseen, elementtien tarkastamiseen, kuvakaappausten ottamiseen, lisäosien uudelleenlataamiseen ja muuhun.

![[obsidian-cli.mp4#interface]]

> [!warning] Vaatii Obsidian 1.12 -asennusohjelman
> CLI:n käyttö vaatii Obsidian 1.12 -asennusohjelman. Katso [[Päivitä Obsidian#Asennusohjelman päivitykset|asennusohjelman version päivitysopas]].

## Asenna Obsidian CLI

Päivitä uusimpaan [[Päivitä Obsidian|Obsidianin asennusohjelman versioon]] (1.12.7+).

Ota Obsidian CLI käyttöön Obsidianissa:

1. Siirry kohtaan **Asetukset** → **Yleiset**.
2. Ota käyttöön **Komentoliittymä**.
3. Seuraa ohjeita Obsidian CLI:n rekisteröimiseksi.

Jos kohtaat ongelmia Obsidian CLI:n asennuksessa, katso [[#Vianmääritys]].

## Aloita

Obsidian CLI tukee sekä yksittäisiä komentoja että terminaalin käyttöliittymää (TUI), jossa on interaktiivinen ohje ja automaattinen täydennys.

> [!info] Obsidian-sovelluksen on oltava käynnissä
> Obsidian CLI vaatii, että Obsidian-sovellus on käynnissä. Jos Obsidian ei ole käynnissä, ensimmäinen suorittamasi komento käynnistää Obsidianin.
>
> Haluatko synkronoida ilman työpöytäsovellusta? Katso [[Obsidian Headless|Obsidian Headless]].

### Suorita komento

Suorita yksittäinen komento avaamatta TUI:ta:

```shell
# Suorita ohje-komento
obsidian help
```

### Käytä terminaalikäyttöliittymää

Käytä TUI:ta kirjoittamalla `obsidian`. Seuraavat komennot voidaan syöttää ilman `obsidian`-etuliitettä.

```shell
# Avaa TUI ja suorita ohje
obsidian
help
```

TUI tukee automaattista täydennystä, komentohistoriaa ja käänteistä hakua. Käytä `Ctrl+R` hakeaksesi komentohistoriasta. Katso [[#Pikanäppäimet]] kaikki saatavilla olevat pikakuvakkeet.

## Esimerkkejä

Tässä muutamia esimerkkejä siitä, mitä Obsidian CLI:llä voi tehdä.

### Päivittäinen käyttö

```shell
# Avaa tämän päivän muistiinpano
obsidian daily

# Lisää tehtävä päivän muistiinpanoosi
obsidian daily:append content="- [ ] Osta ruokaa"

# Hae holvistasi
obsidian search query="kokousmuistiinpanot"

# Lue aktiivinen tiedosto
obsidian read

# Listaa kaikki tehtävät päivän muistiinpanostasi
obsidian tasks daily

# Luo uusi muistiinpano pohjatiedostosta
obsidian create name="Matka Pariisiin" template=Matka

# Listaa kaikki holvin tunnisteet lukumäärineen
obsidian tags counts

# Vertaa tiedoston kahta versiota
obsidian diff file=README from=1 to=3
```

### Kehittäjille

Monia [[#Kehittäjäkomennot|kehittäjäkomentoja]] on saatavilla lisäosien ja teemojen kehitykseen. Nämä komennot mahdollistavat agenttipohjaisten koodaustyökalujen automaattisen testauksen ja virheenkorjauksen.

```shell
# Avaa kehittäjätyökalut
obsidian devtools

# Lataa uudelleen kehitettävä yhteisön lisäosa
obsidian plugin:reload id=my-plugin

# Ota kuvakaappaus sovelluksesta
obsidian dev:screenshot path=screenshot.png

# Suorita JavaScript sovelluksen konsolissa
obsidian eval code="app.vault.getFiles().length"
```

## Ohjeita

### Käytä parametreja ja lippuja

Komennot voivat käyttää **parametreja** ja **lippuja**. Useimmat komennot eivät vaadi parametreja tai lippuja. Pakolliset parametrit on merkitty `required`. Esimerkiksi:

```shell
# Luo uusi muistiinpano oletuksena nimellä "Nimetön"
obsidian create
```

**Parametri** saa arvon, joka kirjoitetaan muodossa `parametri=arvo`. Jos arvo sisältää välilyöntejä, ympäröi se lainausmerkeillä:

```shell
# Luo uusi muistiinpano nimeltä "Muistiinpano" sisällöllä "Hei maailma"
obsidian create name=Muistiinpano content="Hei maailma"
```

**Lippu** on boolean-kytkin ilman arvoa. Sisällytä se ottaaksesi sen käyttöön, esimerkiksi `open` ja `overwrite` ovat lippuja:

```shell
# Luo muistiinpano ja avaa se
obsidian create name=Muistiinpano content="Hei" open overwrite
```

Moniriviseen sisältöön käytä `\n` rivinvaihtoon. Käytä `\t` sarkainta varten.

```bash
obsidian create name=Muistiinpano content="# Otsikko\n\nSisältöteksti"
```

### Kohdista holvi

Jos terminaalisi nykyinen työhakemisto on holvin kansio, käytetään sitä oletuksena. Muussa tapauksessa käytetään aktiivista holvia.

Käytä `vault=<nimi>` tai `vault=<tunnus>` kohdistaaksesi tiettyyn holviin. Tämän on oltava ensimmäinen parametri ennen komentoa:

```shell
obsidian vault=Muistiinpanot daily
obsidian vault="Oma holvi" search query="testi"
```

TUI:ssa käytä `vault:open <nimi>` tai `<tunnus>` vaihtaaksesi toiseen holviin.

### Kohdista tiedosto

Monet komennot hyväksyvät `file`- ja `path`-parametrit tietyn tiedoston kohdistamiseen. Jos kumpaakaan ei anneta, komento kohdistuu oletuksena aktiiviseen tiedostoon.

- `file=<nimi>` ratkaisee tiedoston käyttäen samaa linkkien ratkaisua kuin [[Sisäiset linkit|wikilinkit]], ja etsii tiedostonimen perusteella ilman täyden polun tai tiedostopäätteen vaatimista.
- `path=<polku>` vaatii tarkan polun holvin juuresta, esim. `kansio/muistiinpano.md`.

```shell
# Nämä ovat vastaavia, jos "Resepti.md" on ainoa tiedosto tällä nimellä
obsidian read file=Resepti
obsidian read path="Mallineet/Resepti.md"
```

### Kopioi tuloste

Lisää `--copy` mihin tahansa komentoon kopioidaksesi tulosteen leikepöydälle:

```shell
read --copy
search query="TODO" --copy
```


## Yleiset komennot

### `help`

Näytä luettelo kaikista saatavilla olevista komennoista.

| Parametri   | Kuvaus                           |
| ----------- | -------------------------------- |
| `<komento>` | Näytä ohje tietystä komennosta.  |

### `version`

Näytä Obsidianin versio.

### `reload`

Lataa sovellusikkuna uudelleen.

### `restart`

Käynnistä sovellus uudelleen.


## Kannat

Komennot [[Johdanto kantoihin|Kannoille]].

### `bases`

Listaa kaikki `.base`-tiedostot holvissa.

### `base:views`

Listaa nykyisen kantatiedoston näkymät.

### `base:create`

Luo uusi kohde kantaan. Käyttää oletuksena aktiivista kantanäkymää, jos tiedostoa ei ole määritetty.

```bash
file=<nimi>        # kantatiedoston nimi
path=<polku>       # kantatiedoston polku
view=<nimi>        # näkymän nimi
name=<nimi>        # uuden tiedoston nimi
content=<teksti>   # alkusisältö

open               # avaa tiedosto luomisen jälkeen
newtab             # avaa uudessa välilehdessä
```

### `base:query`

Kysy kantaa ja palauta tulokset.

```bash
file=<nimi>                    # kantatiedoston nimi
path=<polku>                   # kantatiedoston polku
view=<nimi>                    # kyseltävän näkymän nimi
format=json|csv|tsv|md|paths   # tulostemuoto (oletus: json)
```

## Kirjanmerkit

Komennot [[Kirjanmerkit|kirjanmerkeille]].

### `bookmarks`

Listaa kirjanmerkit.

```bash
total              # palauta kirjanmerkkien määrä
verbose            # sisällytä kirjanmerkkityypit
format=json|tsv|csv  # tulostemuoto (oletus: tsv)
```

### `bookmark`

Lisää kirjanmerkki.

```bash
file=<polku>       # kirjanmerkittävä tiedosto
subpath=<alipolku> # alipolku (otsikko tai lohko) tiedostossa
folder=<polku>     # kirjanmerkittävä kansio
search=<kysely>    # kirjanmerkittävä hakukysely
url=<url>          # kirjanmerkittävä URL
title=<otsikko>    # kirjanmerkin otsikko
```

## Komentovalikko

Komennot [[Komentovalikko|komentovalikolle]] ja [[Pikanäppäimet|pikanäppäimille]]. Tämä sisältää kaikki lisäosien rekisteröimät komennot.

### `commands`

Listaa saatavilla olevat komentojen tunnukset.

```bash
filter=<etuliite>  # suodata tunnuksen etuliitteen mukaan
```

### `command`

Suorita Obsidian-komento.

```bash
id=<komento-tunnus>    # (pakollinen) suoritettavan komennon tunnus
```

### `hotkeys`

Listaa kaikkien komentojen pikanäppäimet.

```bash
total              # palauta pikanäppäinten määrä
verbose            # näytä onko pikanäppäin mukautettu
format=json|tsv|csv  # tulostemuoto (oletus: tsv)
```

### `hotkey`

Hae komennon pikanäppäin.

```bash
id=<komento-tunnus>    # (pakollinen) komennon tunnus

verbose            # näytä onko mukautettu vai oletus
```

## Päivittäiset muistiinpanot

Komennot [[Päivittäiset muistiinpanot|päivittäisille muistiinpanoille]].

### `daily`

Avaa päivän muistiinpano.

```bash
paneType=tab|split|window    # ruudun tyyppi, johon avataan
```

### `daily:path`

Hae päivän muistiinpanon polku. Palauttaa odotetun polun, vaikka tiedostoa ei olisi vielä luotu.

### `daily:read`

Lue päivän muistiinpanon sisältö.

### `daily:append`

Lisää sisältöä päivän muistiinpanon loppuun.

```bash
content=<teksti>   # (pakollinen) lisättävä sisältö
paneType=tab|split|window    # ruudun tyyppi, johon avataan

inline             # lisää ilman rivinvaihtoa
open               # avaa tiedosto lisäämisen jälkeen
```

### `daily:prepend`

Lisää sisältöä päivän muistiinpanon alkuun.

```bash
content=<teksti>   # (pakollinen) lisättävä sisältö
paneType=tab|split|window    # ruudun tyyppi, johon avataan

inline             # lisää ilman rivinvaihtoa
open               # avaa tiedosto lisäämisen jälkeen
```

## Tiedostohistoria

### `diff`

Listaa tai vertaa versioita paikallisesta [[Tiedoston palautus|tiedoston palautuksesta]] ja [[Johdanto Obsidian Synciin|Syncistä]]. Versiot on numeroitu uusimmasta vanhimpaan.

```bash
file=<nimi>          # tiedoston nimi
path=<polku>         # tiedoston polku
from=<n>             # version numero, josta verrataan
to=<n>               # version numero, johon verrataan
filter=local|sync    # suodata version lähteen mukaan
```

**Esimerkkejä:**

```shell
# Listaa kaikki aktiivisen tiedoston versiot
diff

# Listaa kaikki tietyn tiedoston versiot
diff file=Resepti

# Vertaa uusinta versiota nykyiseen tiedostoon
diff file=Resepti from=1

# Vertaa kahta versiota
diff file=Resepti from=2 to=1

# Näytä vain Sync-versiot
diff filter=sync
```

### `history`

Listaa versiot vain [[Tiedoston palautus|tiedoston palautuksesta]]. Katso [[#Sync|sync:history]] vastaavalle Sync-komennolle.

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
```

### `history:list`

Listaa kaikki tiedostot, joilla on paikallinen historia.

### `history:read`

Lue paikallisen historian versio.

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
version=<n>        # version numero (oletus: 1)
```

### `history:restore`

Palauta paikallisen historian versio.

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
version=<n>        # (pakollinen) version numero
```

### `history:open`

Avaa tiedoston palautus.

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
```

## Tiedostot ja kansiot

### `file`

Näytä tiedoston tiedot (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
```

Esimerkki:

```
path       Muistiinpanot/Resepti.md
name       Resepti
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Listaa holvin tiedostot.

```bash
folder=<polku>     # suodata kansion mukaan
ext=<pääte>        # suodata tiedostopäätteen mukaan

total              # palauta tiedostojen määrä
```

### `folder`

Näytä kansion tiedot.

```bash
path=<polku>              # (pakollinen) kansion polku
info=files|folders|size   # palauta vain tietty tieto
```

### `folders`

Listaa holvin kansiot.

```bash
folder=<polku>     # suodata yläkansion mukaan

total              # palauta kansioiden määrä
```

### `open`

Avaa tiedosto.

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku

newtab             # avaa uudessa välilehdessä
```

### `create`

Luo tai korvaa tiedosto.

```bash
name=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
content=<teksti>   # alkusisältö
template=<nimi>    # käytettävä pohjatiedosto

overwrite          # korvaa, jos tiedosto on olemassa
open               # avaa tiedosto luomisen jälkeen
newtab             # avaa uudessa välilehdessä
```

### `read`

Lue tiedoston sisältö (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
```

### `append`

Lisää sisältöä tiedoston loppuun (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
content=<teksti>   # (pakollinen) lisättävä sisältö

inline             # lisää ilman rivinvaihtoa
```

### `prepend`

Lisää sisältöä alkulehden jälkeen tiedoston alkuun (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
content=<teksti>   # (pakollinen) lisättävä sisältö

inline             # lisää ilman rivinvaihtoa
```

### `move`

Siirrä tai nimeä tiedosto uudelleen (oletus: aktiivinen tiedosto). Tämä päivittää [[Sisäiset linkit|sisäiset linkit]] automaattisesti, jos se on otettu käyttöön [[Asetukset#Päivitä sisäiset linkit aina|holvin asetuksissa]].

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
to=<polku>         # (pakollinen) kohdekansio tai -polku
```

### `rename`

Nimeä tiedosto uudelleen (oletus: aktiivinen tiedosto). Tiedostopääte säilytetään automaattisesti, jos se jätetään uudesta nimestä pois. Käytä [[#`move`|move]]-komentoa nimeämiseen ja siirtämiseen samanaikaisesti. Tämä päivittää [[Sisäiset linkit|sisäiset linkit]] automaattisesti, jos se on otettu käyttöön [[Asetukset#Päivitä sisäiset linkit aina|holvin asetuksissa]].

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
name=<nimi>        # (pakollinen) uusi tiedostonimi
```

### `delete`

Poista tiedosto (oletus: aktiivinen tiedosto, siirretään roskakoriin oletuksena).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku

permanent          # ohita roskakori, poista pysyvästi
```

## Linkit

Komennot [[Paluulinkit|paluulinkeille]] ja [[Lähtevät linkit|lähteville linkeille]].

### `backlinks`

Listaa tiedoston paluulinkit (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # kohdetiedoston nimi
path=<polku>       # kohdetiedoston polku

counts             # sisällytä linkkimäärät
total              # palauta paluulinkkien määrä
format=json|tsv|csv  # tulostemuoto (oletus: tsv)
```

### `links`

Listaa tiedoston lähtevät linkit (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku

total              # palauta linkkien määrä
```

### `unresolved`

Listaa holvin ratkaisemattomat linkit.

```bash
total              # palauta ratkaisemattomien linkkien määrä
counts             # sisällytä linkkimäärät
verbose            # sisällytä lähdetiedostot
format=json|tsv|csv  # tulostemuoto (oletus: tsv)
```

### `orphans`

Listaa tiedostot, joilla ei ole saapuvia linkkejä.

```bash
total              # palauta orpojen määrä
```

### `deadends`

Listaa tiedostot, joilla ei ole lähteviä linkkejä.

```bash
total              # palauta umpikujien määrä
```

## Sisällysluettelo

Komennot [[Sisällysluettelo|sisällysluettelolle]].

### `outline`

Näytä nykyisen tiedoston otsikot.

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
format=tree|md|json  # tulostemuoto (oletus: tree)

total              # palauta otsikoiden määrä
```

## Lisäosat

Komennot [[Sisäänrakennetut lisäosat|sisäänrakennetuille lisäosille]] ja [[Yhteisön lisäosat|yhteisön lisäosille]].

### `plugins`

Listaa asennetut lisäosat.

```bash
filter=core|community  # suodata lisäosan tyypin mukaan

versions               # sisällytä versionumerot
format=json|tsv|csv    # tulostemuoto (oletus: tsv)
```

### `plugins:enabled`

Listaa käytössä olevat lisäosat.

```bash
filter=core|community  # suodata lisäosan tyypin mukaan

versions               # sisällytä versionumerot
format=json|tsv|csv    # tulostemuoto (oletus: tsv)
```

### `plugins:restrict`

Vaihda rajoitettu tila päälle/pois tai tarkista sen tila.

```bash
on                 # ota rajoitettu tila käyttöön
off                # poista rajoitettu tila käytöstä
```

### `plugin`

Hae lisäosan tiedot.

```bash
id=<lisäosa-tunnus>     # (pakollinen) lisäosan tunnus
```

### `plugin:enable`

Ota lisäosa käyttöön.

```bash
id=<tunnus>            # (pakollinen) lisäosan tunnus
filter=core|community  # lisäosan tyyppi
```

### `plugin:disable`

Poista lisäosa käytöstä.

```bash
id=<tunnus>            # (pakollinen) lisäosan tunnus
filter=core|community  # lisäosan tyyppi
```

### `plugin:install`

Asenna yhteisön lisäosa.

```bash
id=<tunnus>        # (pakollinen) lisäosan tunnus

enable             # ota käyttöön asennuksen jälkeen
```

### `plugin:uninstall`

Poista yhteisön lisäosa.

```bash
id=<tunnus>        # (pakollinen) lisäosan tunnus
```

### `plugin:reload`

Lataa lisäosa uudelleen (kehittäjille).

```bash
id=<tunnus>        # (pakollinen) lisäosan tunnus
```

## Määreet

Komennot [[Määreet|määreisiin]] liittyen.

### `aliases`

Listaa holvin aliakset. Käytä `active` tai `file`/`path` näyttääksesi tietyn tiedoston aliakset.

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku

total              # palauta aliasten määrä
verbose            # sisällytä tiedostopolut
active             # näytä aktiivisen tiedoston aliakset
```

### `properties`

Listaa holvin määreet. Käytä `active` tai `file`/`path` näyttääksesi tietyn tiedoston määreet.

```bash
file=<nimi>        # näytä tiedoston määreet
path=<polku>       # näytä polun määreet
name=<nimi>        # hae tietyn määreen lukumäärä
sort=count         # järjestä lukumäärän mukaan (oletus: nimi)
format=yaml|json|tsv  # tulostemuoto (oletus: yaml)

total              # palauta määreiden lukumäärä
counts             # sisällytä esiintymismäärät
active             # näytä aktiivisen tiedoston määreet
```

### `property:set`

Aseta määre tiedostolle (oletus: aktiivinen tiedosto).

```bash
name=<nimi>                                    # (pakollinen) määreen nimi
value=<arvo>                                   # (pakollinen) määreen arvo
type=text|list|number|checkbox|date|datetime   # määreen tyyppi
file=<nimi>                                    # tiedoston nimi
path=<polku>                                   # tiedoston polku
```

### `property:remove`

Poista määre tiedostosta (oletus: aktiivinen tiedosto).

```bash
name=<nimi>        # (pakollinen) määreen nimi
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
```

### `property:read`

Lue määreen arvo tiedostosta (oletus: aktiivinen tiedosto).

```bash
name=<nimi>        # (pakollinen) määreen nimi
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
```

## Publish

Komennot [[Johdanto Obsidian Publishiin|Obsidian Publishille]].

### `publish:site`

Näytä julkaisusivuston tiedot (slug, URL).

### `publish:list`

Listaa julkaistut tiedostot.

```bash
total              # palauta julkaistujen tiedostojen määrä
```

### `publish:status`

Listaa julkaisumuutokset.

```bash
total              # palauta muutosten määrä
new                # näytä vain uudet tiedostot
changed            # näytä vain muutetut tiedostot
deleted            # näytä vain poistetut tiedostot
```

### `publish:add`

Julkaise tiedosto tai kaikki muutetut tiedostot (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku

changed            # julkaise kaikki muutetut tiedostot
```

### `publish:remove`

Peruuta tiedoston julkaisu (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
```

### `publish:open`

Avaa tiedosto julkaistulla sivustolla (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
```

## Satunnaiset muistiinpanot

Komennot [[Satunnainen muistiinpano|satunnaiselle muistiinpanolle]].

### `random`

Avaa satunnainen muistiinpano.

```bash
folder=<polku>     # rajaa kansioon

newtab             # avaa uudessa välilehdessä
```

### `random:read`

Lue satunnainen muistiinpano (sisältää polun).

```bash
folder=<polku>     # rajaa kansioon
```

## Haku

Komennot [[Hae|haulle]].

### `search`

Hae holvista tekstiä. Palauttaa vastaavien tiedostojen polut.

```bash
query=<teksti>     # (pakollinen) hakukysely
path=<kansio>      # rajaa kansioon
limit=<n>          # tiedostojen enimmäismäärä
format=text|json   # tulostemuoto (oletus: text)

total              # palauta osumien määrä
case               # kirjainkoolla on väliä
```

### `search:context`

Hae vastaavien rivien kontekstilla. Palauttaa grep-tyylisen `polku:rivi: teksti` -tulosteen.

```bash
query=<teksti>     # (pakollinen) hakukysely
path=<kansio>      # rajaa kansioon
limit=<n>          # tiedostojen enimmäismäärä
format=text|json   # tulostemuoto (oletus: text)

case               # kirjainkoolla on väliä
```

### `search:open`

Avaa hakunäkymä.

```bash
query=<teksti>     # alkuperäinen hakukysely
```

## Sync

Komennot [[Johdanto Obsidian Synciin|Obsidian Syncille]].

> [!tip] Synkronoi ilman työpöytäsovellusta
> Nämä komennot ohjaavat Synciä käynnissä olevan Obsidian-sovelluksen sisällä. Holvien synkronoimiseksi komentoriviltä ilman työpöytäsovellusta katso [[Headless Sync]].

### `sync`

Keskeytä tai jatka synkronointia.

```bash
on                 # jatka synkronointia
off                # keskeytä synkronointi
```

### `sync:status`

Näytä synkronoinnin tila ja käyttö.

### `sync:history`

Listaa tiedoston Sync-versiohistoria (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku

total              # palauta versioiden määrä
```

### `sync:read`

Lue Sync-versio (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
version=<n>        # (pakollinen) version numero
```

### `sync:restore`

Palauta Sync-versio (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
version=<n>        # (pakollinen) version numero
```

### `sync:open`

Avaa synkronointihistoria (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
```

### `sync:deleted`

Listaa synkronoinnissa poistetut tiedostot.

```bash
total              # palauta poistettujen tiedostojen määrä
```

## Tunnisteet

Komennot [[Tunnisteet|tunnisteille]].

### `tags`

Listaa holvin tunnisteet. Käytä `active` tai `file`/`path` näyttääksesi tietyn tiedoston tunnisteet.

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
sort=count         # järjestä lukumäärän mukaan (oletus: nimi)

total              # palauta tunnisteiden määrä
counts             # sisällytä tunnisteiden lukumäärät
format=json|tsv|csv  # tulostemuoto (oletus: tsv)
active             # näytä aktiivisen tiedoston tunnisteet
```

### `tag`

Hae tunnisteen tiedot.

```bash
name=<tunniste>    # (pakollinen) tunnisteen nimi

total              # palauta esiintymien määrä
verbose            # sisällytä tiedostoluettelo ja lukumäärä
```

## Tehtävät

Komennot tehtävien hallintaan.

### `tasks`

Listaa holvin tehtävät. Käytä `active` tai `file`/`path` näyttääksesi tietyn tiedoston tehtävät.

```bash
file=<nimi>        # suodata tiedostonimen mukaan
path=<polku>       # suodata tiedostopolun mukaan
status="<merkki>"  # suodata tilamerkinnän mukaan

total              # palauta tehtävien määrä
done               # näytä valmiit tehtävät
todo               # näytä keskeneräiset tehtävät
verbose            # ryhmittele tiedoston mukaan rivinumeroineen
format=json|tsv|csv  # tulostemuoto (oletus: text)
active             # näytä aktiivisen tiedoston tehtävät
daily              # näytä päivän muistiinpanon tehtävät
```

**Esimerkkejä:**

```bash
# Listaa kaikki holvin tehtävät
tasks

# Listaa keskeneräiset tehtävät holvissa
tasks todo

# Listaa valmiit tehtävät tietystä tiedostosta
tasks file=Resepti done

# Listaa tehtävät tämän päivän muistiinpanosta
tasks daily

# Laske päivän muistiinpanon tehtävät
tasks daily total

# Listaa tehtävät tiedostopolkujen ja rivinumeroiden kanssa
tasks verbose

# Suodata mukautetun tilan mukaan (laita erikoismerkit lainausmerkkeihin)
tasks 'status=?'
```

### `task`

Näytä tai päivitä tehtävä.

```bash
ref=<polku:rivi>   # tehtävän viite (polku:rivi)
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku
line=<n>           # rivinumero
status="<merkki>"  # aseta tilamerkintä

toggle             # vaihda tehtävän tila
daily              # päivän muistiinpano
done               # merkitse valmiiksi
todo               # merkitse keskeneräiseksi
```

**Esimerkkejä:**

```bash
# Näytä tehtävän tiedot
task file=Resepti line=8
task ref="Resepti.md:8"

# Vaihda tehtävän valmistumistila
task ref="Resepti.md:8" toggle

# Vaihda tehtävän tila päivän muistiinpanossa
task daily line=3 toggle

# Aseta tehtävän tila
task file=Resepti line=8 done      # → [x]
task file=Resepti line=8 todo      # → [ ]
task file=Resepti line=8 status=-  # → [-]
task daily line=3 done             # Merkitse päivän muistiinpanon tehtävä valmiiksi
```


## Mallineet

Komennot [[Mallineet|mallineille]].

### `templates`

Listaa mallineet.

```bash
total              # palauta mallineiden määrä
```

### `template:read`

Lue mallineen sisältö.

```bash
name=<malline>     # (pakollinen) mallineen nimi
title=<otsikko>    # otsikko muuttujien ratkaisuun

resolve            # ratkaise mallineen muuttujat
```

### `template:insert`

Lisää malline aktiiviseen tiedostoon.

```bash
name=<malline>     # (pakollinen) mallineen nimi
```

**Huomautuksia:**
- `resolve`-vaihtoehto käsittelee `{{date}}`-, `{{time}}`- ja `{{title}}`-muuttujat
- Käytä `create path=<polku> template=<nimi>` luodaksesi tiedoston mallineella

## Teemat ja pätkät

Komennot [[Teemat|teemoille]] ja [[CSS-pätkät|CSS-pätkille]].

### `themes`

Listaa asennetut teemat.

```bash
versions           # sisällytä versionumerot
```

### `theme`

Näytä aktiivinen teema tai hae tietoja.

```bash
name=<nimi>        # teeman nimi lisätietoja varten
```

### `theme:set`

Aseta aktiivinen teema.

```bash
name=<nimi>        # (pakollinen) teeman nimi (tyhjä oletusta varten)
```

### `theme:install`

Asenna yhteisön teema.

```bash
name=<nimi>        # (pakollinen) teeman nimi

enable             # aktivoi asennuksen jälkeen
```

### `theme:uninstall`

Poista teema.

```bash
name=<nimi>        # (pakollinen) teeman nimi
```

### `snippets`

Listaa asennetut CSS-pätkät.

### `snippets:enabled`

Listaa käytössä olevat CSS-pätkät.

### `snippet:enable`

Ota CSS-pätkä käyttöön.

```bash
name=<nimi>        # (pakollinen) pätkän nimi
```

### `snippet:disable`

Poista CSS-pätkä käytöstä.

```bash
name=<nimi>        # (pakollinen) pätkän nimi
```

## Uniikit muistiinpanot

Komennot [[Uniikkien muistiinpanojen luonti|uniikkien muistiinpanojen luonnille]].

### `unique`

Luo uniikki muistiinpano.

```bash
name=<teksti>      # muistiinpanon nimi
content=<teksti>   # alkusisältö
paneType=tab|split|window    # ruudun tyyppi, johon avataan

open               # avaa tiedosto luomisen jälkeen
```

## Holvi

### `vault`

Näytä holvin tiedot.

```bash
info=name|path|files|folders|size  # palauta vain tietty tieto
```

### `vaults`

Listaa tunnetut holvit.

```bash
total              # palauta holvien määrä
verbose            # sisällytä holvien polut
```

### `vault:open`

Vaihda toiseen holviin (vain TUI:ssa).

```bash
name=<nimi>        # (pakollinen) holvin nimi
```

## Sisäinen verkkoselain

Komennot [[Sisäinen verkkoselain|sisäiselle verkkoselaimelle]].

### `web`

Avaa URL sisäisessä verkkoselaimessa.

```bash
url=<url>          # (pakollinen) avattava URL

newtab             # avaa uudessa välilehdessä
```

## Sanamäärä

Komennot [[Sanamäärä|sanamäärälle]].

### `wordcount`

Laske sanat ja merkit (oletus: aktiivinen tiedosto).

```bash
file=<nimi>        # tiedoston nimi
path=<polku>       # tiedoston polku

words              # palauta vain sanamäärä
characters         # palauta vain merkkimäärä
```

## Työtila

Komennot [[Työtila|työtilalle]] ja [[Työtilat|työtilat]]-lisäosalle.

### `workspace`

Näytä työtilan puurakenne.

```bash
ids                # sisällytä työtilan kohteiden tunnukset
```

### `workspaces`

Listaa tallennetut työtilat.

```bash
total              # palauta työtilojen määrä
```

### `workspace:save`

Tallenna nykyinen asettelu työtilaksi.

```bash
name=<nimi>        # työtilan nimi
```

### `workspace:load`

Lataa tallennettu työtila.

```bash
name=<nimi>        # (pakollinen) työtilan nimi
```

### `workspace:delete`

Poista tallennettu työtila.

```bash
name=<nimi>        # (pakollinen) työtilan nimi
```

### `tabs`

Listaa avoimet välilehdet.

```bash
ids                # sisällytä välilehtien tunnukset
```

### `tab:open`

Avaa uusi välilehti.

```bash
group=<tunnus>     # välilehtiryhmän tunnus
file=<polku>       # avattava tiedosto
view=<tyyppi>      # avattavan näkymän tyyppi
```

### `recents`

Listaa äskettäin avatut tiedostot.

```bash
total              # palauta äskettäisten tiedostojen määrä
```

## Kehittäjäkomennot

Komentoja, jotka auttavat [[Yhteisön lisäosat|yhteisön lisäosien]] ja [[Teemat|teemojen]] kehittämisessä. Lue lisää [Obsidianin kehittäjädokumentaatiosta](https://docs.obsidian.md).

### `devtools`

Vaihda Electronin kehittäjätyökalut päälle/pois.

### `dev:debug`

Liitä/irrota Chrome DevTools Protocol -virheenkorjain.

```bash
on                 # liitä virheenkorjain
off                # irrota virheenkorjain
```

### `dev:cdp`

Suorita Chrome DevTools Protocol -komento.

```bash
method=<CDP.method>  # (pakollinen) kutsuttava CDP-metodi
params=<json>        # metodin parametrit JSON-muodossa
```

### `dev:errors`

Näytä kaapatut JavaScript-virheet.

```bash
clear              # tyhjennä virhepuskuri
```

### `dev:screenshot`

Ota kuvakaappaus (palauttaa base64 PNG).

```bash
path=<tiedostonimi>    # tulostiedoston polku
```

### `dev:console`

Näytä kaapatut konsoliviestit.

```bash
limit=<n>                        # näytettävien viestien enimmäismäärä (oletus 50)
level=log|warn|error|info|debug  # suodata lokitason mukaan

clear                            # tyhjennä konsolipuskuri
```

### `dev:css`

Tarkasta CSS lähdesijainteineen.

```bash
selector=<css>     # (pakollinen) CSS-valitsin
prop=<nimi>        # suodata ominaisuuden nimen mukaan
```

### `dev:dom`

Kysy DOM-elementtejä.

```bash
selector=<css>     # (pakollinen) CSS-valitsin
attr=<nimi>        # hae attribuutin arvo
css=<ominaisuus>   # hae CSS-ominaisuuden arvo

total              # palauta elementtien määrä
text               # palauta tekstisisältö
inner              # palauta innerHTML outerHTML:n sijaan
all                # palauta kaikki osumat ensimmäisen sijaan
```

### `dev:mobile`

Vaihda mobiiliemulointi päälle/pois.

```bash
on                 # ota mobiiliemulointi käyttöön
off                # poista mobiiliemulointi käytöstä
```

### `eval`

Suorita JavaScript ja palauta tulos.

```bash
code=<javascript>  # (pakollinen) suoritettava JavaScript-koodi
```

## Pikanäppäimet

Nämä pikakuvakkeet ovat käytettävissä [[#Käytä terminaalikäyttöliittymää|TUI:ssa]].

### Navigointi

| Toiminto                                                   | Pikakuvake      |
| ---------------------------------------------------------- | --------------- |
| Siirrä kohdistinta vasemmalle                              | `←` / `Ctrl+B` |
| Siirrä kohdistinta oikealle (hyväksyy ehdotuksen rivin lopussa) | `→` / `Ctrl+F` |
| Siirry rivin alkuun                                        | `Ctrl+A`        |
| Siirry rivin loppuun                                       | `Ctrl+E`        |
| Siirry sana taaksepäin                                     | `Alt+B`         |
| Siirry sana eteenpäin                                      | `Alt+F`         |

### Muokkaus

| Toiminto                      | Pikakuvake                   |
| ----------------------------- | ---------------------------- |
| Poista rivin alkuun asti      | `Ctrl+U`                     |
| Poista rivin loppuun asti     | `Ctrl+K`                     |
| Poista edellinen sana         | `Ctrl+W` / `Alt+Backspace`   |

### Automaattinen täydennys

| Toiminto                                                    | Pikakuvake    |
| ----------------------------------------------------------- | ------------- |
| Siirry ehdotustilaan / hyväksy valittu ehdotus             | `Tab`         |
| Poistu ehdotustilasta                                       | `Shift+Tab`   |
| Siirry ehdotustilaan (tuoreesta syötteestä)                | `↓`           |
| Hyväksy ensimmäinen/valittu ehdotus (rivin lopussa)        | `→`           |

### Historia

| Toiminto                                                        | Pikakuvake       |
| --------------------------------------------------------------- | ---------------- |
| Edellinen historiatietue / navigoi ehdotuksissa ylös            | `↑` / `Ctrl+P`  |
| Seuraava historiatietue / navigoi ehdotuksissa alas             | `↓` / `Ctrl+N`  |
| Käänteinen historiahaku (kirjoita suodattaaksesi, `Ctrl+R` seuraavaan) | `Ctrl+R`   |

### Muut

| Toiminto                                                     | Pikakuvake            |
| ------------------------------------------------------------ | --------------------- |
| Suorita komento tai hyväksy ehdotus                         | `Enter`               |
| Kumoa automaattinen täydennys / poistu ehdotustilasta / tyhjennä syöte | `Escape`    |
| Tyhjennä näyttö                                             | `Ctrl+L`              |
| Poistu                                                       | `Ctrl+C` / `Ctrl+D`  |

## Vianmääritys

Jos sinulla on ongelmia Obsidian CLI:n suorittamisessa:

- Varmista, että käytät uusinta [[Päivitä Obsidian|Obsidianin asennusohjelman versiota]] (1.12.7 tai uudempi).
- Jos päivitit juuri Obsidianin aiemmasta versiosta, poista CLI-asetus käytöstä ja ota se uudelleen käyttöön, ja anna sitten Obsidianin suorittaa automaattinen PATH-rekisteröinti.
- Käynnistä terminaali uudelleen CLI:n rekisteröinnin jälkeen, jotta PATH-muutokset tulevat voimaan.
- Obsidianin on oltava käynnissä. CLI yhdistää käynnissä olevaan Obsidian-instanssiin.

### Windows

Obsidian CLI Windowsilla vaatii Obsidian 1.12.7+ -asennusohjelman. Katso [[Päivitä Obsidian|Asennusohjelman version päivitys]].

Windows käyttää terminaalin uudelleenohjaimea, joka yhdistää Obsidianin stdin/stdout-virtaan asianmukaisesti. Tämä on tarpeen, koska Obsidian toimii normaalisti graafisena sovelluksena, joka ei ole yhteensopiva terminaalitulosteiden kanssa Windowsilla. Kun asennat Obsidian 1.12.7+:n, `Obsidian.com`-terminaalin uudelleenohjain lisätään kansioon, johon asensit `Obsidian.exe`-tiedoston.

CLI-rekisteröinti lisää Obsidianin käyttäjän PATH-muuttujaan, mikä tulee voimaan vasta terminaalin uudelleenkäynnistyksen jälkeen.

### macOS

CLI-rekisteröinti luo symbolisen linkin kohteeseen `/usr/local/bin/obsidian`, joka osoittaa sovelluksen sisällä olevaan CLI-binääriin. Tämä vaatii järjestelmänvalvojan oikeudet — sinulta kysytään lupaa järjestelmäikkunassa.

Tarkista, että symbolinen linkki on olemassa ja osoittaa oikeaan binääriin:

```
ls -l /usr/local/bin/obsidian
```

Jos symbolinen linkki puuttuu, luo se manuaalisesti:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Jos olet aiemmin rekisteröinyt CLI:n vanhemmalla Obsidian-versiolla, `~/.zprofile`-tiedostossa saattaa olla jäänne PATH-merkinnästä. Uusi rekisteröintiprosessi poistaa tämän automaattisesti, mutta jos se säilyy, voit turvallisesti poistaa `# Added by Obsidian` -alkuiset rivit `~/.zprofile`-tiedostosta.

### Linux

CLI-rekisteröinti kopioi CLI-binäärin kohteeseen `~/.local/bin/obsidian`. Tämä tehdään, koska jotkin Linux-asennustavat suorittavat sovelluksen väliaikaisista hakemistoista, joita ei voi linkittää pysyvästi.

Varmista, että `~/.local/bin` on PATH-muuttujassasi. Lisää seuraava `~/.bashrc`- tai `~/.zshrc`-tiedostoosi, jos se puuttuu:

```
export PATH="$PATH:$HOME/.local/bin"
```

Tarkista, että binääri on olemassa:

```
ls -l ~/.local/bin/obsidian
```

Jos binääri puuttuu, kopioi se manuaalisesti Obsidianin asennushakemistosta:

```
cp /polku/Obsidianiin/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```
