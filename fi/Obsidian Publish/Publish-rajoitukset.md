---
permalink: publish/limitations
---
> [!tip] Mahtavan yhteisömme jäsenet ovat kehittäneet kiertotapoja joihinkin näistä rajoituksista. Lisätietoja saat Obsidianin foorumien [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) -keskusteluketjusta.

## Yhteisön lisäosat

Obsidian Publish tukee [[Yhteisön lisäosat|yhteisön lisäosia]] vain rajoitetusti.

Lisäosat, jotka tuottavat raakaa Markdown-sisältöä, kuten Waypoint-lisäosa, ovat yhteensopivia Publishin kanssa, koska ne eivät vaadi sovellusta tietojensa renderöintiin.

Sen sijaan lisäosat, jotka vaativat lisäosan koodilohkon renderöitäväksi, kuten Dataview tai Fantasy Statblocks, eivät oletuksena toimi Publishissa.

## Verkko

Publish tarjoaa verkkonäkymälleen yksinkertaisen värienmuokkauksen CSS:n avulla. Voit muokata solmujen värejä `publish.css`-tiedostossasi hyödyntämällä [verkkonäkymän CSS-muuttujia](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Huomaa, että julkaistu verkko ei tue sovelluksen [[Verkkonäkymä|verkkonäkymässä]] käytettävissä olevia kattavia järjestely- ja katseluvaihtoehtoja.

## Mediatiedostot

Obsidian Publish ei ole optimoitu videon suoratoistoon tai suuriin äänitiedostoihin. Sisällytämme näihin dokumentteihin joitakin parhaita käytäntöjä [[Mediatiedostot|mediatiedostojen]] käsittelyyn.

Parantaaksesi vierailijoidesi kokemusta suosittelemme käyttämään videoiden isännöintipalvelua, kuten YouTubea tai Vimeota.

Voit ladata Publish-sivustollesi tiedostoja, joiden koko on **enintään 50 Mt**. ^publish-media-limit

## PDF-tiedostot

Mobiililaitteilla, tableteilla ja pienen näytön tietokoneilla saatat kohdata ongelmia, joissa upotettu PDF ei lataudu tai vain ensimmäinen sivu näytetään. Tämä johtuu PDF-renderöijän rajoituksista mobiililaitteilla.

Mobiilivaihtoehdon käyttäjille suunnatun sisällön osalta suosittelemme tarjoamaan linkkejä ulkoisesti isännöityihin PDF-tiedostoihin tai sisällyttämään sisäisiä linkkejä, joiden avulla käyttäjät voivat ladata PDF-tiedoston suoraan laitteilleen.

## Haku

Publish tukee perustasolla teksti ilman muotoilua -hakua julkaistusta sisällöstä. Hakutuloksissa etusija annetaan:

- Tiedostonimille
- Aliaksille
- Otsikoiden nimille

Näiden vastaavuuksien haun jälkeen haku sisällyttää myös julkaistujen muistiinpanojen pelkän tekstisisällön.

Parantaaksesi julkaistun sivustosi haettavuutta on suositeltavaa käyttää kuvaavia tiedostonimiä, sisällyttää useita aliaksia ja valita otsikoiden nimet, jotka kuvaavat sisältöä tarkasti.

Lisäksi Publish ei tällä hetkellä tue sovelluksen [[Hae#Upota hakutuloksia muistiinpanoon|upotetut hakutulokset]] -ominaisuutta.
