---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian toimii paikallisena sovelluksena jokaisen tiimisi jäsenen laitteella. Se on suunniteltu toimimaan sekä verkossa että ilman verkkoyhteyttä, turvallisesti ja yksityisesti, ja antaa sinulle täyden hallinnan tiimisi tietoihin. Obsidian ei ole saatavilla verkkopohjaisena sovelluksena, joten sinun on otettava sovellus käyttöön tiimisi jäsenille.

## Asenna ja päivitä Obsidian

Tiimisi voi ladata Obsidianin [Lataussivultamme](https://obsidian.md/download). Julkaisut ovat saatavilla myös [GitHub-julkaisusivullamme](https://github.com/obsidianmd/obsidian-releases/releases), joka sisältää linkit [muutoslokiin](https://obsidian.md/changelog/).

> [!tip] Windows-käyttäjille, jotka tarvitsevat järjestelmätason asennusohjelman: Universal `.exe` sisältää vaihtoehdon asentaa Obsidian kaikille käyttäjille.

Jos automaattiset päivitykset ovat käytössä sovelluksessa, tulevat versiot asennetaan automaattisesti, kun käyttäjät käynnistävät Obsidianin uudelleen. Lisäksi suosittelemme suorittamaan säännöllisesti [[Päivitä Obsidian#Asennusohjelman päivitykset|asennusohjelman päivityksiä]] saadakseen uusimmat Electron-kehyksen päivitykset, mukaan lukien tietoturvakorjaukset.

Jos haluat rajoittaa Obsidianin verkkopääsyä tämän prosessin aikana, tutustu osioon [[Tietoturvanäkökohdat tiimeille#Verkko ja pääsy|verkko ja pääsy]].

## Obsidianin mukauttaminen

Obsidiania on helppo muokata tiimisi tarpeisiin sopivaksi. Laajan API:n ja suuren käyttäjäekosysteemin ansiosta Obsidian tarjoaa pääsyn lukuisiin lisäosiin, teemoihin ja täydentäviin työkaluihin.

Näitä aiheita koskeviin tietoturvakysymyksiin löydät vastauksia sivulta [[Tietoturvanäkökohdat tiimeille]].

### Asetuskansiot

[[Asetuskansio]] on paikka, johon Obsidianin [[Sanasto#Holvi|holvi]] tallentaa sovelluksen asetukset. Oletuksena tämä kansio on nimeltään `.obsidian`, mutta voit joustavasti [[Asetuskansio#Vaihda asetuskansio|vaihtaa asetuskansion]] nimen mieltymyksesi mukaan.

Suosittelemme luomaan standardoidun pohjan asetuskansiosta, joka otetaan käyttöön tiimisi laitteilla.

### Lisäosat

[[Sisäänrakennetut lisäosat]] ovat Obsidian-tiimin luomia valinnaisia ominaisuuksia. Nämä ominaisuudet ovat integroitu sovelluksen ydinkoodiin ja ne voidaan ottaa käyttöön tai poistaa käytöstä.

[[Yhteisön lisäosat]] ovat kolmansien osapuolien lisäämiä ominaisuuksia Obsidian-sovellukseen, ja ne voidaan asentaa yhteisön hakemiston kautta. Kolmansien osapuolien lisäosat hyödyntävät [Obsidian API:a](https://github.com/obsidianmd/obsidian-api). Lisäosat sijaitsevat holvin `.obsidian/plugins`-kansiossa ja ne voidaan asentaa manuaalisesti tähän sijaintiin.

### Teemat ja pätkät

[[Teemat]] muuttavat Obsidianin käyttöliittymän visuaalista ilmettä. Kuten lisäosat, teemat voidaan ladata yhteisön hakemistosta. Teemat sijaitsevat holvin `.obsidian/themes`-kansiossa.

[[CSS-pätkät|Pätkät]] ovat pieniä `.css`-tiedostoja, jotka muokkaavat visuaalisesti Obsidianin käyttöliittymän osia. Joissakin tapauksissa ne voivat myös lisätä toiminnallisia parannuksia. Pätkät sijaitsevat holvin `.obsidian/snippets`-kansiossa.

## Usein kysytyt kysymykset

Tilin hallintaan ja tietoturvaan liittyvissä kysymyksissä tutustu osioon [[Tietoturvanäkökohdat tiimeille#Tilin tietoturva|tilin tietoturva]].

### Käyttöönotto

**Voinko ottaa käyttöön lisenssejä useissa asennuksissa?**
Tällä hetkellä emme tue lisenssien käyttöönottoa käyttöönottoskriptin kautta, esimerkiksi `.json`-tiedostossa. Jos olet kiinnostunut tästä ominaisuudesta tiimillesi, lähetä [ominaisuuspyyntö](https://forum.obsidian.md/c/feature-requests/8).

**Voiko Obsidian lukita tiettyjä ominaisuuksia tai asetuksia asetuksen tai sovelluksen lipun avulla?**
Tällä hetkellä voit tehdä tämän estämällä muokkausoikeuden `.obsidian`-kansioon tai tiettyihin tiedostoihin ja kansioihin sen sisällä, kuten yllä on kuvattu. Jos olet kiinnostunut laajemmista pääsynhallintaominaisuuksista tiimillesi, lähetä [ominaisuuspyyntö](https://forum.obsidian.md/c/feature-requests/8).
