---
permalink: backup
---
Jos et ole vielä varmuuskopioinut tietokonettasi, aloita nyt! Obsidianin [[Tiedoston palautus]]-lisäosa on hyödyllinen mutta rajallinen. Se pystyy palauttamaan vain tietyn määrän tietoa, ja se tallentaa palautustiedot laitekohtaisesti. Kattavamman suojan saamiseksi suosittelemme kunnollisen varmuuskopiointijärjestelmän käyttöönottoa.

**Miksi varmuuskopioida tietosi?**

Oletuksena Obsidian tallentaa muistiinpanosi **paikallisesti** laitteellesi, ei pilveen. Tämä tarkoittaa, että [tieto on täysin sinun](https://obsidian.md/about), ja sinulla on sen hallinta. Paikalliseen tallennukseen voivat kuitenkin vaikuttaa ongelmat kuten tiedon vioittuminen tai tiedon menetys. Kyse ei ole siitä tapahtuuko näin, vaan milloin. Tietojen varmuuskopiointi suojaa näiltä väistämättömyyksiltä ja varmistaa, että muistiinpanosi pysyvät hallinnassasi.

## Synkronointi ei ole varmuuskopio

Palvelut kuten [[Johdanto Obsidian Synciin|Obsidian Sync]], iCloud, OneDrive ja Dropbox auttavat synkronoimaan muistiinpanosi eri laitteiden välillä. Vaikka ne voivat tarjota ominaisuuksia kuten [[Versiohistoria|muistiinpanojen palauttamisen]], **ne eivät ole suunniteltu varmuuskopiointiin**. Synkronointi pitää muistiinpanosi ajan tasalla, mutta se ei suojaa tiedon menetykseltä.

- **Synkronointi:** Synkronointi varmistaa, että tiedostosi ovat samat kaikilla laitteilla. Kun muutat tiedostoa yhdellä laitteella, se päivittyy kaikilla synkronoiduilla laitteilla. Synkronointipalveluilla ei ole "ensisijaista" laitetta.
- **Varmuuskopio:** Varmuuskopio tallentaa kopion tiedoistasi eri sijaintiin, jotta ne voidaan palauttaa tiedon menetyksen tai vioittumisen yhteydessä. Varmuuskopiot eivät ole tarkoitettu reaaliaikaisiin päivityksiin tai yhteistyöhön.

Holvin asianmukaiseen varmuuskopiointiin kannattaa käyttää erillistä varmuuskopiointityökalua, joka luo yksisuuntaisen kopion tiedoistasi. Tämä työkalu lähettää tietosi turvalliseen varmuuskopiointisijaintiin muuttamatta laitteellasi olevia tietoja.

Jos käytät useita laitteita synkronoinnilla, valitse **yksi laite** varmuuskopiointilaitteeksesi. Tämä on yleensä pää- tai "ensisijainen" laitteesi, eli se, jota käytät eniten. Huomaa, että useimmat synkronointipalvelut eivät tunnista mitään laitetta "ensisijaiseksi"; tämä on vain käsite, joka auttaa varmuuskopioiden hallinnassa.

> [!Example] Käytät Obsidian Syncia kannettavalla tietokoneella, tabletilla, puhelimella ja työtietokoneella. Käytät holviasi enimmäkseen työtietokoneella, joskus kannettavalla ja harvoin tabletilla tai puhelimella. Tässä tapauksessa työtietokoneesi olisi "ensisijainen laite" varmuuskopiointia varten.

## Käytä yhteisön lisäosia

Vaikka Obsidian-tiimi ei voi virallisesti suositella mitään tiettyä lisäosaa, tunnistamme kaksi yhteisön lisäosaa, jotka ovat tulleet suosituiksi käyttäjien keskuudessa tiedostojen varmuuskopiointiin:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Käytä tätä lisäosaa holvisi varmuuskopiointiin tallentamalla sen sisältö [Git-arkistoon](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). Se on tehokas tapa versionhallita muistiinpanojasi ja varmistaa niiden turvallisuus etäpalvelimella. Huomioi kuitenkin, että tietosi saatetaan tallentaa [[#Käytä pilvipalveluita|ulkoiselle hosting-alustalle]] tällä menetelmällä.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Tämä lisäosa antaa sinun luoda paikallisia kopioita holvistasi valitsemaasi kansioon arkistointivaihtoehtoineen. Voit jopa käyttää synkronointikansiota, kuten Dropbox-kansiota, yhdistääksesi paikalliset ja pilvivarmuuskopiot. Tämä menetelmä **sopii hyvin yhteen** alla kuvattujen varmuuskopiointivaihtoehtojen kanssa.

## Käytä pilvipalveluita

> [!info] Ei ole suositeltavaa pitää holvin sijaintia valitsemassasi varmuuskopiointipalvelussa.

Varmuuskopion pitäminen pilvessä on vaihtoehto ja täydennys fyysiselle tiedon tallennukselle ulkoisen kiintolevyn tai USB-tikun sijaan. Ulkoinen kiintolevy tai USB-tikku voi kadota tai vaurioitua. Pilvitallennuksen suurin etu on, että tiedostot ovat saatavilla milloin ja missä tahansa. Haittapuolena on, että useimmat varmuuskopiointipalvelut ovat yksityisen yrityksen omistamia.

Turvallisuuden kannalta pilvivarmuuskopioiden pääsyoikeuksiin ja tietoturvaan tulee aina kiinnittää erityistä huomiota. [Worldbackupday](https://www.worldbackupday.com/en) ylläpitää ajantasaista listaa harkittavista online-varmuuskopiointipalveluista.

## Käytä ulkoisia asemia

**Kiintolevyt ja SSD-asemat**
Ulkoisen kiintolevyn varmuuskopiot ovat edelleen arvokkaita yhä pilvipohjaisemmassa maailmassa, ja niitä käytetään pääasiassa tiedon tallennukseen ja tietokoneen varmuuskopiointiin. Ulkoisen aseman suurin haittapuoli on, että asema voi rikkoutua tai kadota. Suurin etu on, että tallennustila tarvitsee ostaa vain kerran. Ulkoisen kiintolevyn käyttö yhdistetään usein [[#Käytä tietokoneen varmuuskopioita|tietokoneen varmuuskopiointiin]].

**USB-muistitikut**
Muistitikut (kutsutaan myös peukaloasemiksi tai muistitikuiksi) ovat yksinkertainen ja tehokas menetelmä nopeisiin varmuuskopioihin.

1. Kytke muistitikku tietokoneeseesi tai kannettavaasi.
2. Varmista, että laite tunnistetaan ja liitetään tiedostojärjestelmääsi. Tarvittaessa alusta muistitikku tiedostojärjestelmäsi yhteensopivaksi.
3. Kopioi holvin kansio nykyisestä sijainnistaan muistitikulle.
4. Irrota muistitikku turvallisesti.
5. Poista muistitikku laitteestasi.

**NAS-varmuuskopiointi**
Kokeneille käyttäjille tietojen varmuuskopiointi NAS-palvelimelle (Network Attached Storage) on hyvä ja turvallinen menetelmä, sillä siinä on useita kiintolevyjä ja lisäpalautusmekanismeja.

> [!tip] Jos ulkoinen asemasi sisältää arkaluonteisia tietoja, on suositeltavaa säilyttää ulkoinen asema turvallisesti, esimerkiksi lukitussa tilassa.

## Käytä tietokoneen varmuuskopioita

Käyttöjärjestelmäsi itsessään tarjoaa mahdollisuuden luoda varmuuskopioita, joko pilveen tai ulkoiselle asemalle.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Varmuuskopioi OneDriveen tai ulkoiselle asemalle.
- **[Mac](https://support.apple.com/en-us/104984)**: Varmuuskopioi ulkoiselle laitteelle Time Machinen avulla.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: Käytä `rsync`-komentoa valitsemaasi hakemistoon tai asemalle.

## Seuraavat vaiheet

Tämä ohjesivu tarjoaa lyhyen yleiskatsauksen varmuuskopiointivaihtoehdoista, mutta se ei ole kattava. Lisätietoja löydät osoitteesta [Worldbackupday.com](https://www.worldbackupday.com/en) tai kysy muilta Obsidian-käyttäjiltä [yhteisössämme](https://obsidian.md/community) heidän varmuuskopiointistrategioistaan!
