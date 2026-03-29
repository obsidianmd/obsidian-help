---
permalink: syntax
publish: true
mobile: true
description: Opi lisäämään perusmuotoiluja muistiinpanoihisi Obsidianissa käyttämällä Markdownia.
---
Opi muotoilemaan muistiinpanojasi [Markdownin](https://daringfireball.net/projects/markdown/) avulla. Katso lisää muotoiluvaihtoehtoja kohdasta [[Muotoilun lisäsyntaksi]].

## Kappaleet

Luo kappaleita Markdownissa käyttämällä **tyhjää riviä** tekstilohkojen erottamiseen. Jokainen tyhjällä rivillä erotettu tekstilohko käsitellään erillisenä kappaleena.

```md
Tämä on kappale.

Tämä on toinen kappale.
```

Tämä on kappale.

Tämä on toinen kappale.

Tyhjä rivi tekstirivien välissä luo erilliset kappaleet. Tämä on Markdownin oletuskäyttäytyminen.

> [!tip]- Useat peräkkäiset välilyönnit
> Useat peräkkäiset välilyönnit kappaleiden sisällä ja välillä tiivistyvät yhdeksi välilyönniksi, kun ne näytetään [[Näkymät ja muokkaustila#Lukutila|lukutilassa]] tai [[Johdanto Obsidian Publishiin|Obsidian Publish]] -sivustoilla.
> 
> ```md
> Useita          peräkkäisiä          välilyöntejä
> 
> 
> 
> ja useita rivinvaihtoja kappaleiden välissä.
> ```
> 
> > Useita          peräkkäisiä          välilyöntejä
> > 
> > 
> > 
> > ja useita rivinvaihtoja kappaleiden välissä.
> 
> Jos haluat estää välilyöntien tiivistymisen tai lisätä useita tyhjiä välejä, voit käyttää HTML-tunnisteita `&nbsp;` (sitova välilyönti) tai `<br>` (rivinvaihto).

### Rivinvaihdot

Oletuksena Obsidianissa yhden `Enter`-näppäimen painallus luo uuden rivin muistiinpanoosi, mutta tämä käsitellään saman kappaleen *jatkona* renderöidyssä tulostuksessa, noudattaen tyypillistä Markdown-käyttäytymistä. Lisätäksesi rivinvaihdon *kappaleen sisällä* aloittamatta uutta kappaletta, voit joko:

- Lisätä **kaksi välilyöntiä** rivin loppuun ennen `Enter`-näppäimen painamista, tai
- Käyttää pikanäppäintä `Shift+Enter` rivinvaihdon lisäämiseksi suoraan.

> [!question]- Miksi useat `Enter`-painallukset eivät luo useita rivinvaihtoja lukutilassa?
> Markdownissa yksittäinen `Enter` ohitetaan, ja useat peräkkäiset `Enter`-painallukset tuottavat vain yhden uuden kappaleen. Tämä käyttäytyminen noudattaa Markdownin pehmeän rivinvaihdon sääntöä, jossa ylimääräiset tyhjät rivit eivät tuota lisärivinvaihtoja tai -kappaleita – ne tiivistyvät yhdeksi kappaleenvaihdoksi. Näin Markdown käsittelee tekstiä oletuksena, varmistaen, että kappaleet virtaavat luonnollisesti ilman odottamattomia katkoksia.

Obsidianissa on **[[Asetukset#Markdown-rivinvaihdot|Markdown-rivinvaihdot]]** -asetus, joka saa Obsidianin noudattamaan Markdownin standardimääritystä rivinvaihtojen osalta.

Ota tämä ominaisuus käyttöön seuraavasti:

1. Avaa **[[Asetukset]]**.
2. Siirry **Muokkain**-välilehteen.
3. Ota käyttöön **Markdown-rivinvaihdot**.

Kun **Markdown-rivinvaihdot** on käytössä Obsidianissa, rivinvaihdoilla on kolme eri käyttäytymistä riippuen siitä, miten rivit on erotettu:

**Yksi rivinvaihto ilman välilyöntejä**: Yksi `Enter` ilman lopussa olevia välilyöntejä yhdistää kaksi erillistä riviä yhdeksi riviksi renderöitäessä.

```md
rivi yksi
rivi kaksi
```

Renderöityy:

rivi yksi rivi kaksi

**Yksi rivinvaihto kahdella tai useammalla lopussa olevalla välilyönnillä**: Jos lisäät kaksi tai useamman välilyönnin ensimmäisen rivin loppuun ennen `Enter`-painallusta, kaksi riviä pysyvät saman kappaleen osana, mutta erotetaan rivinvaihdolla (HTML `<br>` -elementti). Käytämme tässä esimerkissä kahta alaviivaa välilyöntien tilalla.

```md
rivi kolme__  
rivi neljä
```

Renderöityy:

rivi kolme<br>
rivi neljä

**Kaksi rivinvaihtoa (lopussa olevilla välilyönneillä tai ilman)**: Kaksi `Enter`-painallusta (tai enemmän) erottaa rivit kahdeksi erilliseksi kappaleeksi (HTML `<p>` -elementit), riippumatta siitä, lisäätkö välilyöntejä ensimmäisen rivin loppuun.

```md
rivi viisi

rivi kuusi
```

Renderöityy:

<p>rivi viisi</p>
<p>rivi kuusi</p>

## Otsikot

Luo otsikko lisäämällä enintään kuusi `#`-merkkiä otsikkotekstin eteen. `#`-merkkien lukumäärä määrittää otsikon tason (kuten [[Sisällysluettelo]]-näkymässä näkyy).

```md
# Tämä on otsikkotaso 1
## Tämä on otsikkotaso 2
### Tämä on otsikkotaso 3
#### Tämä on otsikkotaso 4
##### Tämä on otsikkotaso 5
###### Tämä on otsikkotaso 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Tämä on otsikkotaso 1</h1>
<h2>Tämä on otsikkotaso 2</h2>
<h3>Tämä on otsikkotaso 3</h3>
<h4>Tämä on otsikkotaso 4</h4>
<h5>Tämä on otsikkotaso 5</h5>
<h6>Tämä on otsikkotaso 6</h6>

## Lihavointi, kursivointi ja korostukset

Tekstin muotoilua voi tehdä myös [[Muokkauksen pikanäppäimet|pikanäppäimillä]].

| Tyyli | Syntaksi | Esimerkki | Tulos |
|-|-|-|-|
| Lihavointi | `** **` tai `__ __` | `**Lihavoitu teksti**` | **Lihavoitu teksti** |
| Kursivointi | `* *` tai `_ _`  | `*Kursivoitu teksti*` | *Kursivoitu teksti* |
| Yliviivaus | `~~ ~~` |  `~~Yliviivattu teksti~~` | ~~Yliviivattu teksti~~ |
| Korostus | `== ==` |  `==Korostettu teksti==` | ==Korostettu teksti== |
| Lihavointi ja sisäkkäinen kursivointi | `** **` ja `_ _`  | `**Lihavoitu teksti ja _sisäkkäinen kursivointi_**` | **Lihavoitu teksti ja _sisäkkäinen kursivointi_** |
| Lihavointi ja kursivointi | `*** ***` tai `___ ___` |  `***Lihavoitu ja kursivoitu teksti***` | ***Lihavoitu ja kursivoitu teksti*** |

Muotoilun voi pakottaa näkymään teksti ilman muotoilua lisäämällä kenoviivan `\` sen eteen.

\*\*Tätä riviä ei lihavoida\*\*

```markdown
\*\*Tätä riviä ei lihavoida\*\*
```

\**Tämä rivi kursivoidaan ja tähtimerkit näytetään*\*

```markdown
\**Tämä rivi kursivoidaan ja tähtimerkit näytetään*\*
```

## Sisäiset linkit

Obsidian tukee kahta muotoa muistiinpanojen välisille [[Sisäiset linkit|sisäisille linkeille]]:

- Wikilinkki: `[[Newtonin kolme liikelakia]]`
- Markdown: `[Newtonin kolme liikelakia](Newtonin%20kolme%20liikelakia.md)`

## Ulkoiset linkit

Jos haluat linkittää ulkoiseen URL-osoitteeseen, voit luoda tekstinsisäisen linkin ympäröimällä linkkitekstin hakasulkeilla (`[ ]`) ja URL-osoitteen sulkeilla (`( )`).

```md
[Obsidian-ohje](https://help.obsidian.md)
```

[Obsidian-ohje](https://help.obsidian.md)

Voit myös luoda ulkoisia linkkejä tiedostoihin muissa holveissa linkittämällä [[Obsidian URI|Obsidian URI]] -osoitteeseen.

```md
[Muistiinpano](obsidian://open?vault=MainVault&file=Note.md)
```

### Välilyöntien koodaaminen linkeissä

Jos URL-osoitteessasi on välilyöntejä, ne täytyy koodata korvaamalla ne merkkijonolla `%20`.

```md
[Oma muistiinpano](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Voit myös koodata URL-osoitteen ympäröimällä sen kulmasulkeilla (`< >`).

```md
[Oma muistiinpano](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Ulkoiset kuvat

Voit lisätä kuvia ulkoisilla URL-osoitteilla lisäämällä `!`-merkin [[#Ulkoiset linkit|ulkoisen linkin]] eteen.

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Voit muuttaa kuvan mittoja lisäämällä linkin kohteeseen `|640x480`, jossa 640 on leveys ja 480 on korkeus.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Jos määrität vain leveyden, kuva skaalautuu alkuperäisen kuvasuhteensa mukaisesti. Esimerkiksi:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Vinkki
> Jos haluat lisätä kuvan holvisi sisältä, voit myös [[Upota tiedostoja#Upota kuva muistiinpanoon|upottaa kuvan muistiinpanoon]].

## Lainaukset

Voit lainata tekstiä lisäämällä `>`-merkin tekstin eteen.

```md
> Ihmiskunta kohtaa yhä monimutkaisempia ja kiireellisempiä ongelmia, ja sen tehokkuus näiden ongelmien käsittelyssä on asia, joka on kriittinen yhteiskunnan vakauden ja jatkuvan kehityksen kannalta.

\- Doug Engelbart, 1961
```

> Ihmiskunta kohtaa yhä monimutkaisempia ja kiireellisempiä ongelmia, ja sen tehokkuus näiden ongelmien käsittelyssä on asia, joka on kriittinen yhteiskunnan vakauden ja jatkuvan kehityksen kannalta.

\- Doug Engelbart, 1961

> [!tip]- Vinkki
> Voit muuttaa lainauksen [[Nostolaatikot|nostolaatikoksi]] lisäämällä `[!info]` lainauksen ensimmäiseksi riviksi.

## Luettelot

Voit luoda järjestämättömän luetelman lisäämällä `-`, `*` tai `+` tekstin eteen.

```md
- Ensimmäinen kohta
- Toinen kohta
- Kolmas kohta
```

- Ensimmäinen kohta
- Toinen kohta
- Kolmas kohta

Luo järjestetty luetelma aloittamalla jokainen rivi numerolla ja sen jälkeen `.`- tai `)`-merkillä.

```md
1. Ensimmäinen kohta
2. Toinen kohta
3. Kolmas kohta
```

1. Ensimmäinen kohta
2. Toinen kohta
3. Kolmas kohta

```md
1) Ensimmäinen kohta
2) Toinen kohta
3) Kolmas kohta
```

1) Ensimmäinen kohta
2) Toinen kohta
3) Kolmas kohta

Voit käyttää `Shift+Enter` lisätäksesi [[#Rivinvaihdot|rivinvaihdon]] järjestetyn luetelman sisälle muuttamatta numerointia.

```md
1. Ensimmäinen kohta
   
2. Toinen kohta
3. Kolmas kohta
   
4. Neljäs kohta
5. Viides kohta
6. Kuudes kohta
```

### Tehtäväluettelot

Luo tehtäväluettelo aloittamalla jokainen kohta väliviivalla ja välilyönnillä, jonka jälkeen tulee `[ ]`.

```md
- [x] Tämä on valmis tehtävä.
- [ ] Tämä on keskeneräinen tehtävä.
```

- [x] Tämä on valmis tehtävä.
- [ ] Tämä on keskeneräinen tehtävä.

Voit vaihtaa tehtävän tilaa lukutilassa napsauttamalla valintaruutua.

> [!tip]- Vinkki
> Voit käyttää mitä tahansa merkkiä hakasulkeiden sisällä merkitäksesi tehtävän valmiiksi.
>
> ```md
> - [x] Maito
> - [?] Kananmunat
> - [-] Kananmunat
> ```
>
> - [x] Maito
> - [?] Kananmunat
> - [-] Kananmunat

### Sisäkkäiset luettelot

Voit sisäkkäistää minkä tahansa tyyppisen luettelon – järjestetyn, järjestämättömän tai tehtäväluettelon – toisen luettelotyypin alle.

Luo sisäkkäinen luettelo sisentämällä yhden tai useamman luettelon kohdan. Voit sekoittaa luettelotyyppejä sisäkkäisessä rakenteessa:

```md
1. Ensimmäinen kohta
   1. Järjestetty sisäkkäinen kohta
2. Toinen kohta
   - Järjestämätön sisäkkäinen kohta
```

1. Ensimmäinen kohta
   1. Järjestetty sisäkkäinen kohta
2. Toinen kohta
   - Järjestämätön sisäkkäinen kohta

Vastaavasti voit luoda sisäkkäisen tehtäväluettelon sisentämällä yhden tai useamman luettelon kohdan:

```md
- [ ] Tehtävä 1
	- [ ] Alatehtävä 1
- [ ] Tehtävä 2
	- [ ] Alatehtävä 1
```

- [ ] Tehtävä 1
	- [ ] Alatehtävä 1
- [ ] Tehtävä 2
	- [ ] Alatehtävä 1

Käytä `Tab` tai `Shift+Tab` sisentääksesi tai ulontaaksesi valitut luettelon kohdat niiden helppoon järjestelyyn.

## Vaakaviiva

Voit lisätä vaakaviivan käyttämällä vähintään kolmea tähteä `***`, väliviivaa `---` tai alaviivaa `___` omalla rivillään. Voit myös erottaa merkit välilyönneillä.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Koodi

Voit muotoilla koodia sekä tekstinsisäisesti lauseen sisällä että omana lohkonaan.

### Tekstinsisäinen koodi

Voit muotoilla koodia lauseen sisällä käyttämällä yksittäisiä gravismerkkejä.

```md
Teksti `gravismerkkien` sisällä rivillä muotoillaan koodiksi.
```

Teksti `gravismerkkien` sisällä rivillä muotoillaan koodiksi.

Jos haluat laittaa gravismerkkejä tekstinsisäisen koodilohkon sisälle, ympäröi se kaksinkertaisilla gravismerkeillä: ``koodi jossa on gravis ` sisällä``.

### Koodilohkot

Muotoile koodi lohkoksi ympäröimällä se vähintään kolmella gravismerkillä tai vähintään kolmella tildellä.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

Voit myös luoda koodilohkon sisentämällä tekstin `Tab`-näppäimellä tai neljällä välilyönnillä.
`````md
    cd ~/Desktop
`````

Voit lisätä syntaksin korostuksen koodilohkoon lisäämällä kielikoodin ensimmäisten gravismerkkien jälkeen.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Obsidian käyttää Prism-kirjastoa syntaksin korostukseen. Lisätietoja on sivulla [Tuetut kielet](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS ja muokkausnäkymät
> [[Näkymät ja muokkaustila#Lähdekooditila|Lähdekooditila]] ja [[Näkymät ja muokkaustila#Visuaalinen muokkaus|visuaalinen muokkaus]] eivät tue PrismJS:ää ja saattavat renderöidä syntaksin korostuksen eri tavalla.

#### Sisäkkäiset koodilohkot

Kun sinun täytyy sisällyttää koodilohko toisen koodilohkon sisälle (esimerkiksi dokumentoidessasi koodilohkojen käyttöä), voit käyttää enemmän kuin kolmea gravismerkkiä tai tildeä ulommassa koodilohkossa.

Luo sisäkkäisiä koodilohkoja käyttämällä neljää tai useampaa gravismerkkiä (tai tildeä) ulommassa lohkossa, kun sisempi lohko käyttää kolmea:
`````md
````md
Näin luot koodilohkon:
```js
console.log("Hello world")
```
````
`````

Voit myös sekoittaa gravismerkkejä ja tildejä. Tämä on erityisen hyödyllistä työskennellessä koodin kanssa, joka tuottaa muita koodilohkoja:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

Keskeinen periaate on, että ulomman koodilohkon täytyy käyttää **enemmän** aitausmerkkejä (gravismerkkejä tai tildejä) kuin minkään sisemmän koodilohkon, tai käyttää eri aitausmerkkityyppiä.

## Alaviitteet

Voit lisätä alaviitteitä[^footnote] muistiinpanoihisi seuraavalla syntaksilla:

[^footnote]: Tämä on alaviite.

```md
Tämä on yksinkertainen alaviite[^1].

[^1]: Tämä on viitattu teksti.
[^2]: Lisää 2 välilyöntiä jokaisen uuden rivin alkuun.
  Tämä mahdollistaa usean rivin mittaiset alaviitteet.
[^note]: Nimetyt alaviitteet näkyvät silti numeroina, mutta ne voivat helpottaa viittausten tunnistamista ja linkittämistä.
```

Voit myös käyttää tekstinsisäisiä alaviitteitä lauseessa. Huomaa, että hattu-merkki tulee hakasulkeiden ulkopuolelle.

```md
Voit myös käyttää tekstinsisäisiä alaviitteitä. ^[Tämä on tekstinsisäinen alaviite.]
```

> [!note] Huomautus
> Tekstinsisäiset alaviitteet toimivat vain lukutilassa, eivät visuaalisessa muokkauksessa.

## Kommentit

Voit lisätä kommentteja ympäröimällä tekstin `%%`-merkeillä. Kommentit näkyvät vain muokkausnäkymässä.

```md
Tämä on %%tekstinsisäinen%% kommentti.

%%
Tämä on lohkokommentti.

Lohkokommentit voivat ulottua usealle riville.
%%
```

## Markdown-syntaksin ohittaminen

Joissakin tapauksissa saatat tarvita erikoismerkkien, kuten `*`, `_` tai `#`, näyttämistä Markdownissa ilman, että niiden muotoilu aktivoituu. Näyttääksesi nämä merkit sellaisenaan, lisää kenoviiva (`\`) niiden eteen.

> [!example] Yleisesti ohitettavat merkit
> 
> - Tähti: `\*`
> - Alaviiva: `\_`
> - Risuaita: `\#`
> - Gravismerkki: `` \` ``
> - Pystyviiva (käytetään taulukoissa): `\|`
> - Tilde: `\~`

```md
\*Tätä tekstiä ei kursivoida\*.
```

\*Tätä tekstiä ei kursivoida\*.

Kun työskentelet numeroitujen luetteloiden kanssa, saatat joutua ohittamaan numeron jälkeisen pisteen estääksesi automaattisen luettelomuotoilun. Aseta kenoviiva (`\`) pisteen eteen, **ei** numeron eteen.

```md
1\. Tästä ei tule luettelokohtaa.
```

1\. Tästä ei tule luettelokohtaa.

## Lue lisää

Lisätietoja muotoilun lisäsyntaksista, kuten taulukoista, kaavioista ja matemaattisista lausekkeista, löydät sivulta [[Muotoilun lisäsyntaksi]].

Lisätietoja siitä, miten Obsidian tulkitsee Markdownia, löydät sivulta [[Obsidian Flavored Markdown]].
