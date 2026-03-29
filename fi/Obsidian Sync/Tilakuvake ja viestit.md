---
permalink: sync/messages
publish: true
mobile: true
description: Tämä sivu selittää Obsidian Syncin tilakuvakkeet ja tarjoaa tietoja synkronointitoimintojen lokista.
---
Obsidian Sync tarjoaa useita elementtejä synkronoinnin tilan ilmaisemiseen, pääasiassa [[#Syncin tilakuvake]] ja [[#Syncin sisäinen loki]]. Lisätietoja Obsidian Syncin versionhallinnasta löydät [[Versiohistoria]]-sivulta.

## Syncin tilakuvake

Syncin tilakuvake sijaitsee [[Tilarivi|tilarivillä]] työpöytäversiossa ja [[Sivupalkki#Avaa piilotetut sivupalkit|oikeassa sivupalkissa]] mobiili- ja tablet-laitteissa. Kuvake heijastaa eri synkronointitiloja:

- ![[obsidian-icon-sync-synced.svg#icon]] **Synkronoitu**: Obsidian Sync on synkronoinut tiedostosi kokonaan. Tämä kuvake on yleensä vihreä.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Synkronoidaan**: Obsidian päivittää parhaillaan etäholvia. Tämä kuvake on yleensä violetti.
- ![[obsidian-icon-sync-paused.svg#icon]] **Keskeytetty**: Synkronointi on keskeytetty, mutta Obsidian on edelleen yhteydessä etäholviin. Kuvake on yleensä violetti.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Yhteys katkaistu**: Sync-sisäänrakennettu lisäosa on aktiivinen, mutta [[Paikalliset ja etäholvit|paikallinen holvi]] ei ole yhdistetty etäholviin. Tämä kuvake on yleensä punainen.

Kuvakkeen napsauttaminen tai napauttaminen avaa kontekstivalikon, jossa on seuraavat vaihtoehdot:
- ![[obsidian-icon-sync-paused.svg#icon]] Keskeytä (tai ![[lucide-circle-play.svg#icon]] Jatka, jos keskeytetty)
- ![[lucide-history.svg#icon]] [[Versiohistoria]] (harmaa, jos muistiinpanoa ei ole avoinna)
- ![[lucide-align-left.svg#icon]] Avaa [[#Syncin sisäinen loki|Sync-loki]]
- ![[lucide-trash-2.svg#icon]] [[Versiohistoria#Palauta poistettu tiedosto|Poistetut tiedostot]]
- ![[lucide-cog.svg#icon]] [[Synkronoinnin asetukset ja valikoiva synkronointi|Synkronoinnin asetukset]]

## Syncin sisäinen loki

Obsidian Sync sisältää yksityiskohtaisen synkronointilokin, joka seuraa kaikkia paikallisten tiedostojesi ja etäholvin välisiä toimintoja. Loki näyttää lataukset, ladatut tiedostot, poistot ja mahdolliset ongelmat, kuten yhdistämiskonfliktit tai yhteysongelmia.

**Sisäisen lokin avaaminen:**
- Napsauta synkronoinnin tilakuvaketta tilarivillä
- Siirry kohtaan **[[Asetukset]] → Sync → Sisäinen loki**
- Käytä **Komentovalikko → Sync: Avaa synkronointiloki**

Loki tarjoaa aikaleimat ja tiedot jokaisesta synkronointitoiminnosta, mikä tekee siitä hyödyllisen synkronointiongelmien vianmäärityksessä.

> [!warning] Sync-loki ei säily Obsidianin sulkemisen jälkeen. Jos kohtaat ongelman, varmista, että kopioit lokin _ennen_ sovelluksen sulkemista.

Loki luokittelee viestit seuraaviin tyyppeihin:

- [[#Yleiset viestit]]
- [[#Virheviestit]]
- [[#Ohitetut viestit]]
- [[#Tiliviestit]]

Voit suodattaa Sync-lokia valinnoilla **Kaikki**, **Virheet**, **Ohitetut** ja **Yhdistämiskonfliktit**. Lisäksi voit hakea Sync-lokista käyttämällä Sync-ikkunan hakukenttää.

> [!summary] Olemme sisällyttäneet alle joitakin todennäköisimpiä viestejä, joita olet saattanut kohdata. Luettelo ei ole tyhjentävä. Jos kohtaat ongelman ja sinulla on synkronointilokin viesti, josta et ole varma, [[Apua ja tuki#Ota yhteyttä Obsidianin tukeen|ota yhteyttä Obsidianin tukeen]].

### Yleiset viestit

Nämä ovat yleisiä päivittäisiä viestejä, joita saatat kohdata.

**Connecting to server**
Obsidian yrittää muodostaa yhteyttä etäholvisi [[Obsidian Sync/Turvallisuus ja yksityisyys#Mistä löydän nykyisen Sync-palvelimeni ja missä se sijaitsee?|Sync-palvelimeen]].

**Connected to server. Detecting changes...**
Obsidian on muodostanut yhteyden ja vertaa paikallista holvia etäholviin määrittääkseen, tarvitaanko muutoksia.

> [!info] Tämä viesti voi myös viitata muihin mahdollisiin Sync-ongelmiin. Jos näet sen toistuvasti ja uskot, että synkronoitavia kohteita on vielä jäljellä, [[Apua ja tuki#Ota yhteyttä Obsidianin tukeen|ota yhteyttä Obsidianin tukeen]].

**Fully synced**
- Paikallinen ja etäholvi ovat täysin synkronoituja.

**Merging conflicted file**
Synkronoinnin aikana havaittiin ristiriita, ja tiedosto yhdistettiin sen sijaan, että se olisi korvattu. Lisätietoja löydät kohdasta [[Obsidian Syncin vianmääritys#Ristiriitojen ratkaisu|ristiriitojen ratkaisu]]. Jos yhdistäminen oli ei-toivottu, voit palauttaa aiemmat versiot [[Versiohistoria|versiohistorian]] tai [[Tiedoston palautus|tiedoston palautuksen]] kautta.

**Rejected server change**
Etäholvin muutokset ovat vanhempia kuin paikallisen laitteesi versio, joten paikallinen versio säilytetään ja etämuutos ohitetaan.

### Virheviestit

Nämä ovat viestejä, jotka kuvaavat tiedoston synkronoinnissa tapahtunutta virhettä.

**Out of memory**
Tämä ongelma esiintyy tyypillisesti mobiililaitteissa, kun tallennustilaa tai muistia ei ole riittävästi tiedoston lataamiseen. Se on yleisintä suurten tiedostojen, kuten videoiden, kohdalla.

### Ohitetut viestit

Nämä ovat viestejä, jotka kertovat mitä ohitettiin ja mahdollisesti miksi.

**Unable to download file with illegal name**

Tiedosto sisältää [erikoismerkin tai nimeämiskäytännön](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names), joka ei ole sallittu vastaanottavassa käyttöjärjestelmässä. Helpoiten voit nimetä tiedoston uudelleen lähdelaitteella poistamalla kaikki erikoismerkit paitsi `-` ja `_`.

Huomaa, että tämä koskee myös tiedostoja, joiden nimessä on useita pisteitä `.` Android-laitteissa.

### Tiliviestit

Nämä ovat viestejä, jotka liittyvät tilauksesi tai tilisi muutokseen.

**Vault limit exceeded**
Tilisi on ylittänyt [[Usein kysytyt kysymykset#Kuinka suuri kukin etäholvi voi olla|tallennustilan enimmäiskoon]]. Liitteet ja versiohistoria vaikuttavat tähän kokoon. Vaikka holvisi vaikuttaisi rajaa pienemmältä, vanhemmat versiot ja tiedostot voivat nostaa koon rajan yli.

Holvin koon pienentäminen:
1. Avaa **[[Asetukset]] → Sync**.
2. Käytä **Holvin koko ylittää rajan** -kohdan vaihtoehtoja suurten tiedostojen poistamiseen.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Tämä virhe voi ilmetä seuraavissa tapauksissa:

1. Holvi poistettiin toiselta laitteelta.
2. Sync-tilaus oli ei-aktiivinen yli 30 päivää, jolloin etäholvi poistettiin.
3. Tilaus peruutettiin tai hyvitettiin, mikä johti etäholvin poistamiseen.

Näissä tapauksissa sinun on [[Obsidian Syncin käyttöönotto#Katkaise yhteys etäholviin|katkaistava yhteys etäholviin]] ja [[Obsidian Syncin käyttöönotto#Luo uusi etäholvi|luotava uusi etäholvi]], varmistaen samalla paikallisten tietojesi säilyminen.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
Tilisi on nyt täysin vanhentuneessa tilassa, koska emme pystyneet käsittelemään tallennettua maksutapaa.

Jatkaaksesi Obsidian Syncin käyttöä sinun on uusittava tilaus [tililläsi](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync on havainnut, että et ole tällä hetkellä kirjautuneena sisään. Sinun on kirjauduttava takaisin sovelluksessa **[[Asetukset]]**-kohdan [[Asetukset#Yleiset#Tili|Tili]]-osiossa.

Joissakin tapauksissa yhteisön lisäosa voi myös estää Obsidian Synciä vahvistamasta tilisi kirjautumistilaa. Siirry **[[Lisäosien turvallisuus#Rajoitettu tila|rajoitettuun tilaan]]** ja yritä uudelleen.

### Verkkoviestit

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync on katkaissut yhteyden Sync-palvelimeen tuntemattomasta syystä. Sync yrittää muodostaa yhteyden palvelimeen uudelleen ajoittain.

iOS:ssa tämä viesti näkyy seuraavana virheenä:
`Null is not an object (evaluating 'this.socket.send')`

Se tarkoittaa täsmälleen samaa kuin `Unable to connect to server` -viesti, eikä se millään tavalla osoita, että jokin muu olisi vialla.
