---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Olet hankkinut Obsidian Syncin ja olet valmis aloittamaan. Tämä opas auttaa sinua määrittämään Obsidian Syncin asetukset päivittäistä käyttöä varten.
---
Olet hankkinut Obsidian Syncin ja olet valmis aloittamaan. Tämä opas auttaa sinua ottamaan Obsidian Syncin käyttöön ja säätämään asetukset päivittäistä käyttöä varten.

- **Uusi Obsidian Syncin käyttäjä?** Katso: [[#Obsidian Syncin käyttöönotto ensimmäistä kertaa]]
- **Yhdistät toista laitetta?** Katso: [[#Etäholvin synkronointi toisella laitteella]]
- **Tarvitsetko muutoksia?** Katso: [[#Etäholvien hallinta]]

## Obsidian Syncin käyttöönotto ensimmäistä kertaa

Tässä osiossa luot uuden [[Paikalliset ja etäholvit|etäholvin]] ja yhdistät sen olemassa olevaan paikalliseen holviin. Sinun ei tarvitse luoda uutta, tyhjää paikallista holvia Obsidian Syncin käyttöä varten.

> [!info] Onko nykyinen holvisi iCloudissa, OneDrivessa, Dropboxissa tai muussa synkronointikansiossa? Jos **kyllä** tai olet **epävarma**, lue [[Usein kysytyt kysymykset#Voinko käyttää ulkoista synkronointipalvelua yhdessä Obsidian Syncin kanssa?|tämä]] ja [[Siirtyminen Obsidian Synciin]] ennen jatkamista.

**Edellytykset**

- Obsidian-tili. Jos sinulla ei ole sellaista, [rekisteröidy nyt](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Aktiivinen Obsidian Sync -[[Tilaukset ja tallennustilan rajoitukset|tilaus]]. Jos sinulla ei ole sellaista, tilaa [käyttäjätilisi hallintapaneelista](https://obsidian.md/account/sync).
- **Suositeltu**: [[Varmuuskopioi Obsidian-tiedostosi|Varmuuskopiointijärjestelmä]] Obsidian-tiedostoillesi. Synkronointipalvelu ei ole varmuuskopio.

### Kirjaudu sisään Obsidian-tililläsi

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista **Yleiset**.
3. Kohdassa **Tili → Käyttäjätilisi** valitse **Kirjaudu**.
4. Kohtaan **Sähköposti** syötä sähköpostiosoitteesi.
5. Kohtaan **Salasana** syötä salasanasi.
6. Valitse **Kirjaudu**.

### Ota Obsidian Sync käyttöön

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista kohdasta **Asetukset** **Sisäänrakennetut lisäosat**.
3. Ota **Sync** käyttöön.

### Luo uusi etäholvi

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista **Sync**.
3. Kohdassa **Etäholvi** valitse **Valitse**.
4. Valitse **Luo uusi holvi**.
5. Kohtaan **Holvin nimi** syötä etäholvin nimi.
6. Kohdassa **Alue** valitse palvelimen [[Obsidian Syncin käyttöönotto#Alueelliset synkronointipalvelimet|alue]] etäholvillesi.
7. Kohtaan **Salaussalasana** valitse salasana holvillesi. Tämä luo päästä päähän -salatun holvin. Holvin salasana on erillinen Obsidian-tilisi salasanasta ja voi olla eri jokaiselle holvillesi. Lisätietoja on kohdassa [[Turvallisuus ja yksityisyys]].
8. Valitse **Luo**.

### Yhdistä etäholviin

1. Valitse **Yhdistä** juuri luomasi holvin vieressä.
2. Syötä holville määrittämäsi salasana **Salaussalasana**-kenttään, jos valitsit [[Obsidian Sync/Turvallisuus ja yksityisyys#Mitä päästä päähän -salaus tarkoittaa?|päästä päähän -salauksen]].
3. Valitse **Avaa holvi**.
4. **Älä aloita synkronointia vielä.** Tarkista synkronointiasetuksesi kohdassa [[#Obsidian Syncin asetusten säätäminen|Obsidian Syncin asetusten säätäminen]].
    - Jos haluat aloittaa synkronoinnin välittömästi, siirry kohtaan [[#Synkronoinnin aloittaminen Obsidian Syncillä|synkronoinnin aloittaminen Obsidian Syncillä]].
5. Jos et ole vielä tehnyt niin, sulje ponnahdusikkuna, joka kehottaa valitsemaan **Kansioiden poissulkemisen** ja **Aloita synkronointi**. Siirry seuraavaan vaiheeseen.

#### Obsidian Syncin asetusten säätäminen

1. Siirry tarvittaessa kohtaan **[[Asetukset]]** → **Sync**.
2. Jos laitteen nimeä ei ole lisätty, lisää sellainen, jotta Sync-lokien lukeminen on helpompaa!
3. Ota käyttöön tai poista käytöstä asetukset kohdissa **Valikoiva synkronointi** ja **Synkronoi holvin asetukset** sen mukaan, mitkä kohteet tulisi synkronoida etäholviin ja sieltä takaisin.
    - **Huomautus**: Jos olet äskettäin katkaissut yhteyden etäholviin ja yhdistät uudelleen käynnistämättä sovellusta uudelleen, jotkin asetukset saattavat olla jo käytössä.
4. Jos muutat asetuksia, käynnistä Obsidian kokonaan uudelleen.
5. Kun Obsidian on käynnistynyt uudelleen, palaa kohtaan **[[Asetukset]]** → **Sync**.

#### Synkronoinnin aloittaminen Obsidian Syncillä

Jos aloitat synkronoinnin etäholviin yhdistämisen jälkeen, näet **Aloita synkronointi** -painikkeen. Valitse tämä painike aloittaaksesi synkronoinnin.

Jos aloitat synkronoinnin Obsidian Syncin asetusten säätämisen ja sovelluksen uudelleenkäynnistämisen jälkeen, näet **Jatka**-painikkeen Syncin asetuksissa. Valitse tämä painike aloittaaksesi synkronoinnin.

> [!done] Synkronoinnin tila
> Kun Obsidian Sync on valmis, vihreä ympyrä, jossa on valintamerkki ![[obsidian-icon-sync-synced.svg#icon]], ilmestyy oikeaan alakulmaan (työpöytä) tai oikeaan sivupalkkiin (mobiili). Sync-loki näyttää myös "Fully Synced" yhtenä viimeisimmistä viesteistään.
>
> Lisätietoja synkronoinnin tiloista on kohdassa [[Tilakuvake ja viestit]].
^obsidian-sync-status

Yhdistääksesi muita laitteita juuri luotuun ja synkronoituun etäholviin, siirry kohtaan [[Obsidian Syncin käyttöönotto#Etäholvin synkronointi toisella laitteella|Etäholvin synkronointi toisella laitteella]].

Lisätietoja asetuksista ja tiedostoista on kohdassa [[Synkronoinnin asetukset ja valikoiva synkronointi]].

## Etäholvin synkronointi toisella laitteella

Tässä osiossa olet jo luonut etäholvin ja ladannut siihen tietoja. Nyt haluat yhdistää muut laitteesi siihen.

**Edellytykset**
- Obsidian-tili. Jos sinulla ei ole sellaista, [rekisteröidy nyt](https://obsidian.md/account#mode=signup).
- Aktiivinen Obsidian Sync -tilaus. Jos sinulla ei ole sellaista, tilaa [käyttäjätilisi hallintapaneelista](https://obsidian.md/account).
- Sync käytössä [[Sisäänrakennetut lisäosat]]-asetuksissa.
- Aktiivinen etäholvi. Jos et ole vielä luonut sellaista, luo ensin [[Obsidian Syncin käyttöönotto#Luo uusi etäholvi|etäholvi]].
- **Suositeltu**: [[Varmuuskopioi Obsidian-tiedostosi|Varmuuskopiointijärjestelmä]] Obsidian-tiedostoillesi eniten käyttämälläsi laitteella. Synkronointipalvelu ei ole varmuuskopio.

### Synkronoi holvi holvinvaihtajasta

Jos olet juuri asentanut Obsidianin, ohjelma näyttää avautuessaan [[Hallinnoi holveja|holvinvaihtajan]]. Luodaksesi uuden paikallisen holvin etäholvin sisällöstä, toimi seuraavasti:

1. Avaa Obsidian (olettaen, että avaat sen ensimmäistä kertaa)
2. Valitse jokin vaihtoehdoista asennuksestasi riippuen:
	1. **Työpöytä**: Kohdassa Avaa holvi Obsidian Syncistä valitse **Aloita**
	2. **Mobiili/tabletti**: **Aloita Obsidian Sync**
3. Kirjaudu sisään Obsidian-käyttäjätililläsi
	1. Jos [[Kaksivaiheinen todennus|kaksivaiheinen todennus]] on käytössä, syötä koodisi.
4. Sinua pyydetään valitsemaan, minkä etäholvin haluat synkronoida tälle laitteelle. Valitse **Yhdistä**.
5. Sinua pyydetään valitsemaan nimi paikalliselle holville, joka luodaan laitteelle tietojen tallentamista varten. Syötä haluamasi nimi.
	1. Jos käytät [[Obsidian URI]] -osoitteita, kannattaa käyttää samaa nimeä kuin paikallisella holvilla toisella laitteellasi.
6. Valitse **Luo**.
7. Etäholvien ikkuna ilmestyy hetkeksi, kun Obsidian Sync yhdistää palvelimeen ja vahvistaa tilauksen. Sen jälkeen näytetään *Määrittele yhteys* -ikkuna.
	1. On erittäin suositeltavaa sulkea tai pyyhkäistä alas tämä ikkuna ja [[#Obsidian Syncin asetusten säätäminen|säätää Obsidian Syncin asetukset]] ensin.
	2. Jos muutat Sync-asetuksia, lataa uudelleen tai käynnistä Obsidian uudelleen.

### Synkronoi holvi Obsidianin asetuksista

Jos olet jo luonut paikallisen holvin tälle laitteelle ja haluat yhdistää sen etäholviin, ohjeet ovat hyvin samankaltaiset kuin kohdassa [[#Obsidian Syncin käyttöönotto ensimmäistä kertaa]].

![[Obsidian Syncin käyttöönotto#Kirjaudu sisään Obsidian-tililläsi]]

![[Obsidian Syncin käyttöönotto#Ota Obsidian Sync käyttöön]]

#### Yhdistä etäholviin

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista **Sync**.
3. Kohdassa **Valitse etäholvi** napsauta **Valitse**.
4. Napsauta **Yhdistä** sen etäholvin vieressä, johon haluat yhdistää.
5. Kohtaan **Salaussalasana** syötä holvin salasana, jos sinulla on sellainen.
6. Sinua kehotetaan aloittamaan synkronointi. On suositeltavaa odottaa ja säätää synkronointiasetukset ensin. Jos haluat synkronoida koko holvin laitteelle sellaisenaan, voit valita **Aloita synkronointi**.

> [!warning] Jos laitteellasi olevassa holvissa on jo muistiinpanoja (ei suositeltavaa), sinua varoitetaan, että ne yhdistetään ennen jatkamista. Ristiriidat ratkaistaan [[Obsidian Syncin vianmääritys#Ristiriitojen ratkaiseminen|Syncin ristiriidanratkaisulla]].

![[Obsidian Syncin käyttöönotto#Obsidian Syncin asetusten säätäminen]]

![[Obsidian Syncin käyttöönotto#Synkronoinnin aloittaminen Obsidian Syncillä]]

## Etäholvien hallinta

Olet luonut ja yhdistänyt etäholviin. Olet ehkä myös synkronoinut tämän etäholvin useille laitteille. Tässä osiossa käydään läpi joitakin muita yleisiä ohjeita, joita saatat tarvita etäholvin hallinnassa.

### Yhteyden katkaiseminen etäholviin

1. Avaa Obsidianin **[[Asetukset]]**.
2. Valitse sivupalkista **Sync**.
3. Napsauta **Katkaise yhteys** -painiketta Etäholvit-kohdan vieressä.

Olet nyt katkaissut yhteyden etäholviin etkä enää synkronoi tällä laitteella.

### Etäholvin poistaminen

> [!tip] Etäholvin poistaminen ei poista paikallisia tietojasi laitteeltasi.

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista **Sync**.
3. Valitse **Hallinnoi** Etäholvit-kohdan vieressä. Ikkuna avautuu etäholvien luettelon kanssa.
4. Valitse roskakorikuvake ![[lucide-trash-2.svg#icon]] sen etäholvin vieressä, jonka haluat poistaa.
5. Vahvista poisto valitsemalla punainen **Poista**-painike.
6. Etäholvisi on poistettu.

> [!info] Jos roskakorikuvaketta ei näy, sinun on ehkä ensin katkaistava yhteys etäholviin. Kun yhteys on katkaistu, valitse **Valitse**-painike avataksesi etäholvien luettelon.

### Alueelliset synkronointipalvelimet

Obsidian Sync antaa sinun valita etäholvisi isännöintipaikan. Jos käytät Obsidianin versiota `1.4.16` tai vanhempaa, sijainti valitaan automaattisesti puolestasi.

Jos et ole varma nykyisen holvisi alueesta, katso ohjeita kohdasta [[Obsidian Sync/Turvallisuus ja yksityisyys#Mistä löydän nykyisen Sync-palvelimeni ja missä se on isännöity?|Mistä löydän nykyisen Sync-palvelimeni ja missä sitä isännöidään?]].

![[sync-regional-sync-servers.png#interface|300]]

Sijainnin valinnan jälkeen palvelinkeskustasi **ei voi** siirtää toiselle palvelimelle ilman tietojen uudelleenlatausta. Alueen vaihtamiseksi seuraa [[Sync-alueet|Sync-alueiden opasta]].

![[Obsidian Sync/Turvallisuus ja yksityisyys#^sync-geo-regions]]

## Seuraavat vaiheet

Tässä muutamia suositeltuja dokumentteja luettavaksi seuraavaksi.

- Tutustu tarkemmin [[Synkronoinnin asetukset ja valikoiva synkronointi|synkronoitavien tiedostojen ja asetusten valintaan]].
- Lue mitä tapahtuu, jos etäholvisi [[Versiohistoria|täyttyy]].
- [[Yhteistyö jaetussa holvissa]] toisen Obsidian Sync -käyttäjän kanssa.
- Tutustu [[Usein kysytyt kysymykset|Syncin UKK:hon]] löytääksesi vastauksia yleisiin kysymyksiin.
