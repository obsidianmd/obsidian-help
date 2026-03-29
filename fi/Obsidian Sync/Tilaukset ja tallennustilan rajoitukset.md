---
permalink: sync/plans
publish: true
mobile: true
description: Tutustu Obsidian Syncin eri tilausvaihtoehtoihin.
---
## Tilaukset

Muistiinpanojesi synkronoimiseksi [[Johdanto Obsidian Synciin|Obsidian Syncillä]] tarvitset tilauspaketin. Voit ostaa Sync-tilauksen kirjautumalla [käyttäjätilillesi](https://obsidian.md/account/sync). Katso hinnoittelu [Syncin esittelysivulta](https://obsidian.md/sync).

Alla on vertailu Standard- ja Plus-tilausten välillä:

|                                                       | Sync Standard | Sync Plus       |
| ----------------------------------------------------- | ------------- | --------------- |
| Synkronoidut holvit                                   | 1             | 10              |
| Tiedoston enimmäiskoko                                | 5 Mt          | 200 Mt          |
| Kokonaistallennustila                                 | 1 Gt          | 10 Gt – 100 Gt  |
| [[Versiohistoria]]                                    | 1 kuukausi    | 12 kuukautta    |
| Laitteet                                              | Rajoittamaton | Rajoittamaton   |
| [[Yhteistyö jaetussa holvissa\|Jaetut holvit]]        | Kyllä         | Kyllä           |

## Tallennustilan rajoitukset

[[Johdanto Obsidian Synciin|Obsidian Syncillä]] tallennettavan tiedon määrä riippuu tilauksestasi. Sync Plus -tilauksella voit ostaa lisätallennustilaa 100 Gt:uun asti [tilisi hallintapaneelin](https://obsidian.md/account/sync) kautta. Katso lisätietoja kohdasta [[Usein kysytyt kysymykset]].

Käytössäsi on yksi tilikohtainen tallennustilan raja kaikille holvien muistiinpanoille. Myös [[Versiohistoria]] ja [[Liitteet]] lasketaan mukaan tilisi tallennustilan rajaan.

Kun saavutat tilisi tallennustilan rajan, Sync-lisäosa lopettaa tiedostojen synkronoinnin ja sinua pyydetään siivoamaan etäholvisi.

### Suurten tiedostojen tunnistaminen ja poistaminen

Suurten tiedostojen tunnistaminen ja poistaminen holvista:

1. Avaa **[[Asetukset]] → Sync**.
2. Valitse **Näytä suurimmat tiedostot** kohdan **Holvin koko ylittää rajan** vierestä.
	1. Jos et näe kohtaa **Holvin koko ylittää rajan**, se tarkoittaa, että ==et ole vielä saavuttanut kokorajaa==.
3. Sulje **Näytä suurimmat tiedostot** -valintaikkuna.
4. Poista joitakin suuria tiedostoja, joita et enää tarvitse.
5. Odota, että Obsidian Sync saa tehtävän valmiiksi. Tämä voi kestää jonkin aikaa.
6. Avaa **[[Asetukset]] → Sync**.
7. Valitse **Siivoa** kohdan **Holvin koko ylittää rajan** vierestä. Tämä poistaa poistetut tiedostot etäholvista ja vapauttaa tilaa.

Kun siivous on synkronoitu palvelimelle, Obsidian Syncin pitäisi jatkaa toimintaansa normaalisti.

### Uuden etäholvin luominen

Voit **luoda uuden etäholvin** jättääksesi suuret tiedostot pois ennen synkronointia. Tiedostojesi versiohistoria nollautuu, jos luot uuden etäholvin. Varmista, ettei sinulla ole tarvetta vanhempien tiedostojen versiohistorialle ennen kuin jatkat.

Synkronoidaksesi uuteen etäholviin, toimi seuraavasti:

1. Avaa **[[Asetukset]] → Sync**.
2. Valitse **Hallinnoi** kohdan **Etäholvi** vierestä.
3. Valitse **Luo uusi holvi** ja seuraa ohjeita sen luomiseksi. Jos holvit loppuvat kesken, sinun on ehkä ensin [[Obsidian Syncin käyttöönotto#Katkaise yhteys etäholviin|katkaistava yhteys]] nykyiseen etäholviin ja [[Obsidian Syncin käyttöönotto#Poista etäholvi|poistettava]] se.
4. Määritä pois jätettävät tiedostot ennen kuin aloitat synkronoinnin uuteen etäholviin.
5. Käynnistä Obsidian uudelleen ottaaksesi muutokset käyttöön.
6. Avaa **[[Asetukset]] → Sync**.
7. Valitse jatka aloittaaksesi synkronoinnin uuteen etäholviin.

Uuden etäholvin pitäisi olla pienempi kuin edellinen holvi versiohistorian puuttumisen ja pois jätettyjen tiedostojen ansiosta.

## Tilauksen päivittäminen

Voit päivittää tilauksesi kirjautumalla [tilisi hallintapaneeliin](https://obsidian.md/account/sync). Sieltä voit päivittää tilauksesi Sync Standardista Sync Plussaan ja kasvattaa tallennustilaa 100 Gt:uun asti.

## Tilauksen pienentäminen

Jos haluat pienentää Sync-tilaustasi, mutta tallennustilan käyttösi ylittää uuden tilauksen rajan, sinun on vapautettava tilaa etäholvistasi. Tällä hetkellä ei ole suoraa tapaa poistaa tiettyjä tiedostoja nopeasti olemassa olevasta etäholvista. Tämä johtuu siitä, että liitteet säilytetään versiohistoriassa enintään kaksi viikkoa, ja versiohistoria lasketaan tallennustilan rajaan.

Nopein tapa vähentää Syncin tallennustilan käyttöä on luoda uusi etäholvi liitteet poistettuna käytöstä ja poistaa sitten vanha etäholvi, joka ylittää tallennustilan rajat. Huomaa, että menetät versiohistorian tällöin.

Jos pienennät Sync Plussasta Sync Standardiin, sinun on myös vähennettävä holvien määrä yhteen ennen kuin pienennys sallitaan.

### Versiohistorian säilyttäminen

Liitteet säilytetään [[Versiohistoria|versiohistoriassasi]] enintään kaksi viikkoa. Jos aiot pienentää tilaustasi lähitulevaisuudessa, voit aloittaa poistamalla liitteet paikallisesta holvistasi.

Kahden viikon jälkeen ne siivotaan etäholvista, eivätkä ne enää lasketa tallennustilan rajaasi. Tässä vaiheessa voit pienentää tilauksesi säilyttäen samalla versiohistorian muille tiedostotyypeille, kuten Markdown-tiedostoille.
