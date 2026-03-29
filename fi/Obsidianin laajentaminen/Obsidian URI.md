---
permalink: uri
---
Obsidian URI on Obsidianin tukema mukautettu URI-protokolla, jonka avulla voit käynnistää erilaisia toimintoja, kuten muistiinpanon avaamisen tai luomisen. Obsidian URI mahdollistaa automaation ja sovellusten väliset työnkulut.

## URI-muoto

Obsidian URI:t käyttävät seuraavaa muotoa:

```
obsidian://action?param1=value&param2=value
```

`action`-parametri on toiminto, jonka haluat suorittaa. Käytettävissä olevat toiminnot ovat:

- `open` muistiinpanon avaamiseen.
- `new` muistiinpanon luomiseen tai olemassa olevaan muistiinpanoon lisäämiseen.
- `daily` päivän muistiinpanon luomiseen tai avaamiseen.
- `unique` uuden yksilöllisen muistiinpanon luomiseen.
- `search` haun avaamiseen.
- `choose-vault` holvien hallinnan avaamiseen.

> [!warning] Koodaus
> Varmista, että arvosi on koodattu oikein URI-muotoon. Esimerkiksi kauttaviivat `/` on koodattava muotoon `%2F` ja välilyönnit muotoon `%20`.
> 
> Tämä on erityisen tärkeää, koska virheellisesti koodattu "varattu" merkki voi rikkoa URI:n tulkinnan. [Katso lisätietoja täältä](https://en.wikipedia.org/wiki/Percent-encoding).

## Avaa muistiinpano

`open`-toiminto avaa Obsidian-holvin tai tiedoston holvin sisältä.

### Esimerkkejä

- `obsidian://open?vault=my%20vault`
  Tämä avaa holvin `my vault`. Jos holvi on jo avoinna, ikkuna tuodaan aktiiviseksi.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Tämä avaa holvin, jonka tunnus on `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Tämä avaa muistiinpanon `my note.md` holvissa `my vault`, olettaen että tiedosto on olemassa.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Tämä etsii holvia, joka sisältää polun `/home/user/my vault/path/to/my note`. Sitten loput polusta välitetään `file`-parametrille. Jos esimerkiksi holvi on olemassa polussa `/home/user/my vault`, tämä vastaisi `file`-parametrin arvoa `path/to/my note`.


> [!tip] Avaa otsikko tai lohko
> Oikean URI-koodauksen avulla voit navigoida muistiinpanon otsikkoon tai lohkoon. `Note%23Heading` navigoisi otsikkoon "Heading", kun taas `Note%23%5EBlock` navigoisi lohkoon nimeltä "Block".

### Parametrit

- `vault` voi olla joko holvin nimi tai holvin tunnus[^1].
- `file` voi olla joko tiedostonimi tai polku holvin juuresta määritettyyn tiedostoon. Jos tiedostopääte on `md`, se voidaan jättää pois.
- `path` tiedoston absoluuttinen tiedostojärjestelmäpolku.
  - Tämän parametrin käyttäminen ohittaa sekä `vault`- että `file`-parametrit.
  - Sovellus etsii tarkimmin vastaavan holvin, joka sisältää määritetyn tiedostopolun.
  - Loput polusta korvaavat `file`-parametrin.
- `prepend` lisää tiedoston alkuun ja yrittää yhdistää määreet.
- `append` lisää tiedoston loppuun ja yrittää myös yhdistää määreet.
- `paneType` (valinnainen) määrittää, mihin muistiinpano avataan käyttöliittymässä.
  - Jos ei ole annettu, viimeisin aktiivinen välilehti korvataan.
  - `paneType=tab` avaa uuteen välilehteen.
  - `paneType=split` avaa uuteen välilehtiryhmään.
  - `paneType=window` avaa irtoikkunaan (vain työpöytäversio).

## Luo muistiinpano

`new`-toiminto luo uuden muistiinpanon holviin, valinnaisesti sisällön kanssa.

### Esimerkkejä

- `obsidian://new?vault=my%20vault&name=my%20note`
  Tämä avaa holvin `my vault` ja luo uuden muistiinpanon nimeltä `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Tämä avaa holvin `my vault` ja luo uuden muistiinpanon polkuun `path/to/my note`.

### Parametrit

- `vault` voi olla joko holvin nimi tai holvin tunnus[^1]. Sama kuin `open`-toiminnossa.
- `name` luotavan tiedoston nimi. Jos tämä on määritetty, tiedoston sijainti valitaan "Uuden muistiinpanon oletussijainti" -asetuksen perusteella.
- `file` holvin sisäinen absoluuttinen polku, sisältäen nimen. Ohittaa `name`-parametrin, jos molemmat on määritetty.
- `path` globaali absoluuttinen polku. Toimii samankaltaisesti kuin `path`-vaihtoehto `open`-toiminnossa, joka ohittaa sekä `vault`- että `file`-parametrit.
- `paneType` (valinnainen) määrittää, mihin muistiinpano avataan käyttöliittymässä. Sama kuin `open`-toiminnossa.
- `content` (valinnainen) muistiinpanon sisältö.
- `clipboard` (valinnainen) käyttää leikepöydän sisältöä `content`-parametrin sijaan.
- `silent` (valinnainen) sisällytä tämä parametri, jos et halua avata uutta muistiinpanoa.
- `append` (valinnainen) sisällytä tämä parametri lisätäksesi olemassa olevan tiedoston loppuun, jos sellainen on olemassa.
- `overwrite` (valinnainen) korvaa olemassa oleva tiedosto, jos sellainen on olemassa, mutta vain jos `append`-parametria ei ole asetettu.
- `x-success` (valinnainen) katso [[#x-callback-url-parametrien käyttö]].

## Luo tai avaa päivän muistiinpano

`daily`-toiminto luo tai avaa päivän muistiinpanon. [[Päivittäiset muistiinpanot]] -lisäosan on oltava käytössä.

### Esimerkkejä

- `obsidian://daily?vault=my%20vault`
  Tämä avaa holvin `my vault` ja luo tai avaa päivän muistiinpanon.

### Parametrit

`daily`-toiminto hyväksyy samat parametrit kuin `new`-toiminto.

## Yksilöllinen muistiinpano

`unique`-toiminto luo uuden yksilöllisen muistiinpanon holviin. [[Uniikkien muistiinpanojen luonti|Uniikkien muistiinpanojen luonti]] -lisäosan on oltava käytössä.

### Esimerkkejä

- `obsidian://unique?vault=my%20vault`
  Tämä avaa holvin `my vault` ja luo uuden yksilöllisen muistiinpanon.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Tämä avaa holvin `my vault` ja luo uuden yksilöllisen muistiinpanon sisällöllä `Hello World`.

### Parametrit

- `vault` voi olla joko holvin nimi tai holvin tunnus[^1]. Sama kuin `open`-toiminnossa.
- `paneType` (valinnainen) määrittää, mihin muistiinpano avataan käyttöliittymässä. Sama kuin `open`-toiminnossa.
- `content` (valinnainen) muistiinpanon sisältö.
- `clipboard` (valinnainen) käyttää leikepöydän sisältöä `content`-parametrin sijaan.
- `x-success` (valinnainen) katso [[#x-callback-url-parametrien käyttö]].

## Avaa haku

`search`-toiminto avaa [[Hae|Haun]] määritetyssä holvissa ja suorittaa valinnaisesti haun.

### Esimerkkejä

- `obsidian://search?vault=my%20vault`
  Tämä avaa holvin `my vault` ja avaa [[Hae|Haun]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Tämä avaa holvin `my vault`, avaa [[Hae|Haun]] ja suorittaa haun termillä `Obsidian`.

### Parametrit

- `vault` voi olla joko holvin nimi tai holvin tunnus[^1]. Sama kuin `open`-toiminnossa.
- `query` (valinnainen) suoritettava hakutermi.

## Avaa holvien hallinta

`choose-vault`-toiminto avaa [[Hallinnoi holveja|holvien hallinnan]].

### Esimerkkejä

- `obsidian://choose-vault`

## Integraatio Hookin kanssa

Tämä Obsidian URI -toiminto on tarkoitettu käytettäväksi [Hookin](https://hookproductivity.com/) kanssa.

### Esimerkki

`obsidian://hook-get-address`

### Parametrit

- `vault` (valinnainen) voi olla joko holvin nimi tai holvin tunnus[^1]. Jos ei ole annettu, käytetään nykyistä tai viimeksi aktiivista holvia.
- `x-success` (valinnainen) katso [[#x-callback-url-parametrien käyttö]].
- `x-error` (valinnainen) katso [[#x-callback-url-parametrien käyttö]].

Jos `x-success` on määritetty, tämä API käyttää sitä x-callback-url-osoitteena. Muussa tapauksessa se kopioi leikepöydälle Markdown-linkin nykyiseen aktiiviseen muistiinpanoon `obsidian://open`-URL-muodossa.

## x-callback-url-parametrien käyttö

Jotkin päätepisteet hyväksyvät x-callback-url-parametrit `x-success` ja `x-error`. Kun ne on annettu, Obsidian välittää seuraavat tiedot `x-success`-takaisinkutsulle:

- `name` tiedoston nimi ilman tiedostopäätettä.
- `url` tiedoston `obsidian://`-URI.
- `file` (vain työpöytäversio) tiedoston `file://`-URL.

Jos Obsidian vastaanottaa esimerkiksi
`obsidian://.....x-success=myapp://x-callback-url`, vastaus olisi `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Lyhennemuodot

Yllä olevien muotojen lisäksi on käytettävissä kaksi "lyhennemuotoa" holvien ja tiedostojen avaamiseen:

1. `obsidian://vault/my vault/my note` vastaa muotoa `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` vastaa muotoa `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Vianmääritys

### Rekisteröi Obsidian URI

Windowsissa ja macOS:ssä sovelluksen suorittaminen kerran riittää Obsidian URI -protokollan rekisteröimiseen tietokoneellesi.

Linuxissa prosessi on huomattavasti monimutkaisempi:

1. Varmista, että luot `obsidian.desktop`-tiedoston. [Katso lisätietoja täältä](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Varmista, että desktop-tiedostossa `Exec`-kenttä on muodossa `Exec=executable %u`. `%u`-parametria käytetään `obsidian://`-URI:iden välittämiseen sovellukselle.
3. Jos käytät AppImage-asennusohjelmaa, sinun on ehkä purettava se komennolla `Obsidian-x.y.z.AppImage --appimage-extract`. Varmista sitten, että `Exec`-direktiivi osoittaa purettuun suoritettavaan tiedostoon.


[^1]: Holvin tunnus on holviin liitetty satunnainen 16-merkkinen koodi, esimerkiksi `ef6ca3e3b524d22f`. Tämä tunnus on yksilöllinen jokaiselle kansiolle tietokoneellasi. Tunnuksen löytää avaamalla holvinvaihdin ja napsauttamalla "Kopioi holvin tunnus" halutun holvin pikavalikosta.
