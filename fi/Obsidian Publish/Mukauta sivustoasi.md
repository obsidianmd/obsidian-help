---
permalink: publish/customize
publish: true
description: Opi mukauttamaan Obsidian Publish -sivustosi ulkoasua ja tyyliä.
---
Tämä sivu selittää, miten voit mukauttaa [[Johdanto Obsidian Publishiin|Obsidian Publish]] -sivustosi ulkoasua ja tuntumaa.

## Staattiset resurssit

Voit mukauttaa sivustoasi [[Julkaise sisältösi#Julkaise muistiinpanoja|julkaisemalla]] seuraavat tiedostot sivustollesi:

- `publish.css` mukautetun CSS:n lisäämiseksi
- `publish.js` mukautetun JavaScriptin lisäämiseksi
- `favicon-32x32.png` suosikkikuvakkeen asettamiseksi

**Huomautuksia:**

- [CSS-muuttujat Publishille](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) löytyvät dokumentaatiosivustoltamme.
- Koska Obsidian ei tue CSS- tai JavaScript-tiedostoja, sinun täytyy käyttää toista sovellusta niiden luomiseen ja muokkaamiseen.
- Sekä `publish.css` että `publish.js` on sijoitettava holvisi juurihakemistoon (`/`).
- Oletuksena `publish.css` ja `publish.js` eivät näy tiedostoselaimessa, mutta voit silti julkaista ne **Julkaise muutokset** -valintaikkunasta.
- Käyttääksesi mukautettua JavaScriptiä `publish.js`-tiedostolla tarvitset [[Mukautetut verkkotunnukset|mukautetun verkkotunnuksen]].

Suosikkikuvakkeiden osalta Obsidian Publish tukee seuraavia nimeämiskäytäntöjä, joissa `32` edustaa kuvakkeen mittoja pikseleinä:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Suosittelemme, että tarjoat yhden tai useamman seuraavista mitoista:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Voit sijoittaa suosikkikuvakkeet minne tahansa holvissa, kunhan ne julkaistaan sivustollesi.

## Käytä yhteisön teemaa

Käyttääksesi yhtä yhteisön teemoista sivustollasi:

1. Avaa holvisi käyttöjärjestelmäsi oletustiedostoselaimessa.
2. Siirry holvin asetuskansioon (oletus: `.obsidian`).
3. Avaa `themes`-kansio.
4. Kopioi sen teeman CSS-tiedosto, jota haluat käyttää sivustollasi.
5. Liitä tiedosto holvisi juurikansioon.
6. Nimeä CSS-tiedosto uudelleen nimellä `publish.css`.
7. [[Julkaise sisältösi#Julkaise muistiinpanoja|Julkaise]] `publish.css`.

**Huomautuksia:**

- Jos tyyli ei päivity muutamassa minuutissa, kokeile tyhjentää selaimesi välimuisti.
- Voit vaihtaa vaalean ja tumman tilan välillä [[Hallinnoi sivustoja#Näytä sivuston asetukset|sivuston asetuksissa]].
- Monet yhteisön teemat käyttävät **Style Settings** -lisäosaa mukautettuun tyylittelyyn, mutta nämä asetukset eivät toimi Obsidian Publishissa.

> [!tip] Teemojen kehittäminen
> Etkö löydä sopivaa teemaa? Opi [rakentamaan Publish-teema](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) itse.

## Ota käyttöliittymän ominaisuuksia käyttöön

Voit ottaa käyttöön useita käyttöliittymän ominaisuuksia sivustollesi, kuten verkkonäkymän tai sisällysluettelon.

Selaa käytettävissä olevia käyttöliittymän ominaisuuksia **Lukukokemus**- ja **Komponentit**-osioissa [[Hallinnoi sivustoja#Näytä sivuston asetukset|sivuston asetuksissa]].

### Mukauta siirtymistä

Obsidian Publishissa voit mukauttaa tiedostojen ja kansioiden järjestystä ja näkyvyyttä Publishin [[Tiedostoselain|tiedostoselaimessa]]. Sivuston kohteet on listattu julkaisujärjestyksessä oletuksena. Julkaisemattomat muistiinpanot eivät näy tässä paneelissa.

#### Siirtymisen mukautusasetuksien käyttäminen

1. Valitse [[Nauha|nauhavalikossa]] **Julkaise muutokset** ![[lucide-send.svg#icon]] tai avaa [[Komentovalikko]] ja kirjoita **Publish: Julkaise muutokset...**
2. Valitse **Julkaise muutokset** -valintaikkunassa **Muuta sivuston asetuksia** ![[lucide-cog.svg#icon]].
3. Valitse **Komponenttien asetukset** -kohdassa **Mukauta siirtymistä** -kohdan vierestä **Hallinnoi**-painike.

Uusi ponnahdusikkuna nimeltä **Siirtyminen** ilmestyy **Muuta sivuston asetuksia** -ikkunan päälle.

#### Muokkaa sivuston kohteita

**Hakemiston esikatselu** -osiossa voit muokata julkaistun sisältösi esitysjärjestystä.

1. Valitse kansio tai muistiinpano, jota haluat muokata.
2. Raahaa muistiinpano tai kansio ylös tai alas haluamaasi paikkaan.
3. Valitse **Siirtyminen**-ikkunan oikeasta alakulmasta **Valmis**.

Publish lähettää siirtymismuutoksesi sivustollesi.

#### Piilota ja näytä sivuston kohteita

Jos sinulla on julkaistuja muistiinpanoja tai kansioita, joita et halua näkyviin hakemistoon, voit piilottaa ne.

1. Valitse kansio tai muistiinpano, jota haluat muokata.
2. Napsauta hiiren oikealla painikkeella ja valitse **Piilota hakemistosta**. Kohteen pitäisi nyt kadota **Hakemiston esikatselu** -näkymästä.
3. Valitse **Siirtyminen**-ikkunan oikeasta alakulmasta **Valmis**.

Publish lähettää siirtymismuutoksesi sivustollesi.

> [!tip] Voit **Näyttää piilotetut** tiedostot valitsemalla valintaruudun **Hakemiston esikatselu** -otsikon oikealla puolella.

## UKK

**Voinko siirtää tiedostoja kansiosta toiseen hakemistossa?**

Et. Muistiinpanojen tiedostorakenne kansioiden sisällä on säilytettävä. Voit muokata muistiinpanojen järjestystä kansioiden sisällä (mukaan lukien holvin juuri) ja kansioiden järjestystä muiden kansioiden sisällä.

**Voinko muokata useiden muistiinpanojen ja kansioiden järjestystä ennen Valmis-painikkeen valitsemista?**

Kyllä.

**Miten kumoan nämä muutokset?**

- **Esitysjärjestys**: Valitse **Palauta oletus** -kuvake (vastapäivään kiertävä nuoli) **Kohteiden esitysjärjestys** -kohdan vierestä. Tämä palauttaa sivuston kohteet aakkosjärjestykseen.
- **Piilotustila**: Valitse **Palauta oletus** -kuvake (vastapäivään kiertävä nuoli) **Piilota sivuja tai kansioita** -kohdan vierestä. Tämä palauttaa piilotetut sivuston kohteet näkyviksi.
