---
permalink: plugins/search
publish: true
mobile: true
description: 'Haku on ydinlaajennus, joka auttaa sinua löytämään tietoa Obsidian-holvistasi hakutermien ja operaattoreiden avulla tulosten rajaamiseksi.'
---
Haku on [[Sisäänrakennetut lisäosat|sisäänrakennettu lisäosa]], joka auttaa sinua löytämään tietoa Obsidian-holvistasi hakutermien ja operaattoreiden avulla tulosten rajaamiseksi.

Oletuksena Haku löytyy vasemmasta sivupalkista ![[lucide-search.svg#icon]]. Voit myös avata Haun painamalla `Ctrl+Shift+F` (Windows/Linux) tai `Command+Shift+F` (macOS).

- **Hae valittua tekstiä**: Jos valitset tekstiä muokkaimessa ja avaat Haun pikanäppäimellä, Haku näyttää hakutulokset valitulle tekstille.
- **Hae viimeaikaisilla hakutermeillä**: Avaa Haku tyhjällä hakutermillä nähdäksesi viimeaikaiset hakutermit. Napsauta mitä tahansa niistä käyttääksesi hakutermiä uudelleen.

> [!info] Pois jätettävät tiedostot
> Tiedostot, jotka vastaavat [[Asetukset#Pois jätettävät tiedostot|Pois jätettävät tiedostot]] -asetuksiasi, eivät näy hakutuloksissa.

## Hakutermit

Hakutermi on sana tai lause, jonka kirjoitat hakukenttään. Hakutermien tehokkaan kirjoittamisen oppiminen voi auttaa sinua löytämään nopeasti etsimäsi, jopa suurissa holveissa. Obsidian hakee vain muistiinpanojen ja valkotaulujen sisällöstä.

> [!tip]- Polkujen ja tiedostonimien hakeminen
> Oletuksena voit hakea vain muistiinpanojen ja valkotaulujen polkuja ja tiedostonimiä. Hakeaksesi minkä tahansa holvin tiedoston polkua tai tiedostonimeä, käytä `path`- tai `file`-operaattoria.

Jokainen hakutermin sana täsmäytetään itsenäisesti jokaisessa tiedostossa. Hakeaksesi tarkkaa lausetta, ympäröi se lainausmerkeillä, esimerkiksi `"star wars"`. Hakeaksesi lainausmerkkejä sisältävää tekstiä tarkan lauseen sisällä, voit _suojata_ lainausmerkit lisäämällä kenoviivan (`\`) lainausmerkin eteen, esimerkiksi `"they said \"hello\" to each other"`.

Voit hallita, palautetaanko tiedostot, jotka sisältävät _kaikki_ hakutermin sanat vai _minkä tahansa_ sanoista:

- `meeting work` palauttaa tiedostot, jotka sisältävät sekä `meeting` että `work`.
- `meeting OR work` palauttaa tiedostot, jotka sisältävät joko `meeting` tai `work`.

Voit jopa yhdistää molemmat samaan hakutermiin.

- `meeting work OR meetup personal` palauttaa tiedostot työpalavereista ja henkilökohtaisista tapaamisista.

Voit käyttää sulkeita hallitaksesi kunkin lausekkeen prioriteettia.

- `meeting (work OR meetup) personal` palauttaa tiedostot, jotka sisältävät `meeting`, `personal` ja joko `work` tai `meetup`.

Poistaaksesi sanan hakutuloksista tai kieltääksesi sen, lisää tavuviiva (`-`) sen eteen:

- `meeting -work` palauttaa tiedostot, jotka sisältävät `meeting` mutta eivät `work`.

Voit poistaa useita lausekkeita:

- `meeting -work -meetup` palauttaa tiedostot, jotka sisältävät `meeting` mutta eivät `work` tai `meetup`.

Voit poistaa lausekkeiden yhdistelmän sulkeilla:

- `meeting -(work meetup)` palauttaa tiedostot, jotka sisältävät `meeting` mutta eivät _molempia_ `work` ja `meetup`.

Suodattaaksesi tuloksia pienempi kuin (`<`) ja suurempi kuin (`>`) -operaattoreilla, ympäröi ne hakasulkeilla (`[]`) tai lainausmerkeillä (`""`):

- `meeting [duration:<5]` palauttaa tiedostot, joissa meeting esiintyy ja duration on pienempi kuin 5.
- `meeting [duration:>5]` palauttaa tiedostot, joissa meeting esiintyy ja duration on suurempi kuin 5.

> [!tip]- Selitä hakutermi
> Jos sinun täytyy selvittää monimutkaista hakutermiä, voit napsauttaa **Selitä hakutermi** Haussa saadaksesi selityksen hakutermistäsi.

## Hakuoperaattorit

Hakuoperaattorit mahdollistavat tarkempien hakutermien käytön tulosten suodattamiseksi entisestään.

Jotkin operaattorit sallivat jopa sisäkkäisen hakutermin lisäämisen sulkeisiin, esimerkiksi: `task:(call OR email)`.

| Hakuoperaattori | Kuvaus                                                                                                                                                                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file:`         | Etsi tekstiä tiedostonimestä. Täsmää mihin tahansa holvin tiedostoon.<p/>Esimerkki: `file:.jpg` tai `file:202209`.                                                                                                                                                                                                  |
| `path:`         | Etsi tekstiä tiedoston polusta. Täsmää mihin tahansa holvin tiedostoon.<p/>Esimerkki: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                 |
| `content:`      | Etsi tekstiä tiedoston sisällöstä.<p/>Esimerkki: `content:"happy cat"`.                                                                                                                                                                                                                                             |
| `match-case:`   | Kirjainkoon huomioiva haku.<p/>Esimerkki: `match-case:HappyCat`.                                                                                                                                                                                                                                                    |
| `ignore-case:`  | Kirjainkoon ohittava haku.<p/>Esimerkki: `ignore-case:ikea`.                                                                                                                                                                                                                                                        |
| `tag:`          | Etsi tunniste tiedostosta.<p/>Esimerkki: `tag:#work`.<p/>Huomaa, että `tag:#work` -haku ei palauta tuloksia tunnisteelle `#myjob/work`.<br /><br />**Huom:** Koska `tag:` ohittaa osumat koodilohkoissa ja muussa kuin Markdown-sisällössä, se on usein nopeampi ja tarkempi kuin tavallinen kokotekstihaku `#work`. |
| `line:`         | Etsi tiedostoja, jotka sisältävät vähintään yhden rivin, joka täsmää `x`:ään.<p/>Esimerkki: `line:(mix flour)`.<p/><br>**Huom:** `-line`-käyttö kääntää haun, eli se löytää tiedostot, joissa mikään rivi ei täsmää `x`:ään.                                                                                        |
| `block:`        | Etsi osumat samasta lohkosta.<p/>Esimerkki: `block:(dog cat)`.<p/>**Huom:** Koska `block:` vaatii Haun jäsentämään jokaisen tiedoston Markdown-sisällön, hakutermin käsittely voi kestää kauemmin.                                                                                                                   |
| `section:`      | Etsi osumat samasta osiosta (teksti kahden otsikon välillä).<p/>Esimerkki: `section:(dog cat)`.                                                                                                                                                                                                                     |
| `task:`         | Etsi osumat [[Muotoilun perussyntaksi#Tehtäväluettelot\|tehtävästä]] lohko kerrallaan.<p/>Esimerkki: `task:call`.                                                                                                                                                                                                   |
| `task-todo:`    | Etsi osumat *tekemättömästä* [[Muotoilun perussyntaksi#Tehtäväluettelot\|tehtävästä]] lohko kerrallaan.<p/>Esimerkki: `task-todo:call`.                                                                                                                                                                             |
| `task-done:`    | Etsi osumat *valmiista* [[Muotoilun perussyntaksi#Tehtäväluettelot\|tehtävästä]] lohko kerrallaan.<p/>Esimerkki: `task-done:call`.                                                                                                                                                                                  |

## Hakumääreet

Voit käyttää [[Määreet|määreisiin]] tallennettua tietoa hakutermeissäsi.

Käytä hakasulkeita ominaisuuden nimen ympärillä `[property]` palauttaaksesi tiedostot, joilla on kyseinen määre:

- `[aliases]` palauttaa tiedostot, jotka sisältävät `aliases`-määreen

Käytä hakasulkeita ja kaksoispistettä `[property:value]` palauttaaksesi tiedostot, joilla on kyseinen määre ja arvo:

- `[aliases:Name]` palauttaa tiedostot, joissa `aliases`-määreen arvo on `Name`

Käytä arvona `null` löytääksesi määreet, joilla ei ole arvoa:

- `[aliases:null]` palauttaa tiedostot, joissa `aliases`-määre on olemassa mutta sillä ei ole arvoa

> [!info]+ Tyhjät arvot
> `null`-operaattori toimii, kun määre on tyhjä (esim. `aliases: `), mutta ei kun määre sisältää tyhjiä lainausmerkkejä (`""`) tai tyhjiä hakasulkeita (`[]`).

Sekä määre että arvo sallivat alikyselyt, kuten sulkeet ryhmittelyyn, `OR`-operaattorin, kaksoislainausmerkit tarkkaan hakuun ja säännölliset lausekkeet.

- `[status:Draft OR Published]` palauttaa tiedostot, joissa `status`-määreen arvo on `Draft` tai `Published`

## Kirjainkoon huomioinnin muuttaminen

Oletuksena hakutermit eivät huomioi kirjainkokoa. Jos haluat hakea hakutermisi tarkkaa kirjainkokoa, valitse **Kirjainkoolla on väliä** ![[obsidian-icon-upper-lowercase.svg#icon]] hakupalkin sisällä.

Tätä asetusta voi vaihtaa. Jos **Kirjainkoolla on väliä** -kuvake on korostettuna, teet parhaillaan kirjainkoon huomioivan haun.

## Tulosten järjestyksen muuttaminen

1. Syötä [[#Hakutermit|hakutermi]].
2. Valitse hakukentän alla oikealla oleva pudotusvalikko.
3. Valitse haluamasi järjestys. Oletus on "Tiedostonimi (A–Ö)".

Käytettävissä ovat seuraavat vaihtoehdot:

- Tiedostonimi (A–Ö)
- Tiedostonimi (Ö–A)
- Muokkausaika (uusi-vanha)
- Muokkausaika (vanha-uusi)
- Luomisaika (uusi-vanha)
- Luomisaika (vanha-uusi)

## Hakutulosten kopioiminen

1. Syötä [[#Hakutermit|hakutermi]].
2. Valitse hakukentän alla kolmen pisteen kuvake tulosmäärän vierestä.
3. Valitse **Kopioi hakutulokset**.

## Säännöllisten lausekkeiden käyttö

Säännöllinen lauseke on joukko merkkejä, jotka kuvaavat tekstikuviota. Käyttääksesi säännöllisiä lausekkeita hakutermissäsi, ympäröi lauseke kauttaviivoilla (`/`).

- `/\d{4}-\d{2}-\d{2}/` täsmää ISO 8601 -päivämäärään, kuten 2022-01-01.

Voit jopa yhdistää säännöllisiä lausekkeita hakuoperaattoreihin:

- `path:/\d{4}-\d{2}-\d{2}/` palauttaa tiedostot, joiden tiedostopolussa on päivämäärä.

Lisätietoja säännöllisten lausekkeiden kirjoittamisesta löydät FreeCodeCampin [käytännön regex-oppaasta](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) tai Mozillan [säännöllisten lausekkeiden dokumentaatiosta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

> [!info]+ JavaScript-tyyppiset säännölliset lausekkeet
> Säännöllisiä lausekkeita on eri variantteja, jotka voivat näyttää erilaisilta toisistaan. Obsidian käyttää JavaScript-tyyppisiä säännöllisiä lausekkeita.

## Hakuasetusten määrittäminen

Määrittääksesi Haun asetuksia, valitse **Hakuasetukset** ![[lucide-sliders-horizontal.svg#icon]] hakupalkin oikealta puolelta nähdäksesi vaihtoehdot.

| Asetus                     | Kuvaus                                                                       |
|----------------------------|------------------------------------------------------------------------------|
| **Selitä hakutermi**       | Erittelee hakutermit ja selittää ne selkokielellä.                           |
| **Kutista tulokset**       | Vaihtaa, näytetäänkö haun konteksti.                                         |
| **Näytä enemmän kontekstia** | Laajentaa hakutulosta näyttämään enemmän tekstiä osuman ympäriltä.          |

## Hakutulosten upottaminen muistiinpanoon

Upottaaksesi hakutulokset muistiinpanoon, lisää `query`-koodilohko:

````
```query
embed OR search
```
````

[[Johdanto Obsidian Publishiin|Obsidian Publish]] ei tue upotettuja [[Publish-rajoitukset#Hae|hakutuloksia]]. Nähdäksesi reaaliaikaisen renderöidyn esimerkin, käytä yllä olevaa koodilohkoa holvissasi.

![[search-query-rendered.png]]
