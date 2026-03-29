---
permalink: publish/sites
---
Tämä sivu selittää, miten [[Johdanto Obsidian Publishiin|Obsidian Publish]] -sivustoja hallinnoidaan.

Sivusto on kokoelma muistiinpanoja, joita Obsidian Publish isännöi ja jotka ovat saatavilla verkossa joko Obsidian Publish -osoitteen tai [[Mukautetut verkkotunnukset|mukautetun verkkotunnuksen]] kautta.

## Luo uusi sivusto

> [!note] Samanaikaisesti käytettävien sivustojen määrä riippuu Obsidian Publish -tilauksestasi. Varmista ennen uuden sivuston luomista, että tilauksesi sallii sen.

1. Napsauta sovelluksen ikkunan vasemmassa reunassa olevasta nauhavalikosta **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Jos sinulla on jo olemassa oleva sivusto, napsauta **Vaihda sivustoa** ![[lucide-repeat.svg#icon]].
3. Kirjoita **Sivuston tunnus** -kenttään haluamasi polku sivustollesi. Esimerkiksi sivusto, jonka tunnus on `my-amazing-site`, on käytettävissä osoitteessa publish.obsidian.md/my-amazing-site.
4. Napsauta **Luo**.

## Poista olemassa oleva sivusto

> [!note] Muistiinpanot säilyvät holvissasi, vaikka poistaisit sivuston.

1. Napsauta sovelluksen ikkunan vasemmassa reunassa olevasta nauhavalikosta **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Napsauta **Vaihda sivustoa** ![[lucide-repeat.svg#icon]].
3. Napsauta **Poista sivusto** ![[lucide-x.svg#icon]] poistettavan sivuston oikealla puolella.
4. Vahvista napsauttamalla **Poista**.

## Vaihda sivustojen välillä

1. Napsauta sovelluksen ikkunan vasemmassa reunassa olevasta nauhavalikosta **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Napsauta **Vaihda sivustoa** ![[lucide-repeat.svg#icon]].
3. Napsauta **Valitse** sen sivuston oikealla puolella, johon haluat vaihtaa.

## Vaihda sivuston tunnus

1. Napsauta sovelluksen ikkunan vasemmassa reunassa olevasta nauhavalikosta **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Napsauta **Vaihda sivustoa** ![[lucide-repeat.svg#icon]].
3. Napsauta **Muokkaa sivuston tunnusta** ![[lucide-edit-3.svg#icon]] muokattavan sivuston oikealla puolella.
4. Kirjoita **Sivuston tunnus** -kenttään uusi tunnus sivustollesi.
5. Napsauta **Muuta**.

## Näytä sivuston asetukset

1. Napsauta sovelluksen ikkunan vasemmassa reunassa olevasta nauhavalikosta **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Napsauta **Julkaise muutokset** -valintaikkunassa **Muuta sivuston asetuksia** ![[lucide-cog.svg#icon]].

## Sivuston asetukset

### Yleiset

| Asetus                            | Tyyppi  | Kuvaus                                                                                                                          |
| --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Sivuston nimi                     | Syöte   | Obsidian Publish -sivustosi julkinen nimi ja otsikko.                                                                           |
| Kotisivu                          | Syöte   | Sen Markdown-tiedoston sijainti, jota haluat käyttää aloitussivunasi.                                                           |
| Logo                              | Syöte   | Kuva, jota haluat käyttää sivustosi bannerina. Kuvan täytyy olla [[Julkaise sisältösi#Publish notes\|julkaistu]].               |
| Sivuston toimittajat              | Painike | Määritä muut käyttäjät, joille haluat antaa oikeuden muokata julkaistuja muistiinpanojasi. Käyttäjillä on oltava Obsidian-tili.  |
| Mukautettu verkkotunnus           | Painike | [[Mukautetut verkkotunnukset]]                                                                                                  |
| Estä hakukoneiden indeksointi     | Kytkin  | Estä hakukoneita indeksoimasta sivustoasi lisäämällä `robots.txt`-tiedosto.                                                     |

### Ulkoasu

| Asetus              | Tyyppi       | Kuvaus                                                                                                 |
|---------------------|--------------|--------------------------------------------------------------------------------------------------------|
| Teema               | Pudotusvalikko | Valitse, miten teemasi näkyy sivustollasi: **Vaalea**, **Tumma** tai **Järjestelmän mukainen**.       |
| Vaalea/tumma        | Kytkin       | Salli käyttäjien vaihtaa **vaalean** ja **tumman** tilan välillä kytkimellä sivustollasi.              |

## Lukukokemus

| Asetus                          | Tyyppi | Kuvaus                                                                                                  |
|--------------------------------|--------|---------------------------------------------------------------------------------------------------------|
| Näytä esikatselu kohdistettaessa | Kytkin | Ota käyttöön tai poista käytöstä sivun esikatselu, kun kohdistetaan aktiiviseen sisäiseen linkkiin.     |
| Piilota sivun otsikko           | Kytkin | Ota käyttöön tai poista käytöstä julkaistun muistiinpanon otsikon näyttäminen asiakirjassa.             |
| Luettava rivin pituus           | Kytkin | Ota käyttöön tai poista käytöstä luettava rivin pituus sivustollasi.                                   |
| Markdown-rivinvaihdot           | Kytkin | Ota käyttöön tai poista käytöstä yksittäisten rivinvaihtojen näyttäminen sivustollasi.                  |
| Vierekkäiset sivut              | Kytkin | Ota käyttöön tai poista käytöstä [[Välilehdet#Stack tab groups\|pinotut välilehdet]] sivustollasi.      |

### Komponentit

| Asetus                    | Tyyppi  | Kuvaus                                                                                                                                    |
|---------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Näytä hakemisto           | Kytkin  | Ota käyttöön tai poista käytöstä [[Tiedostoselain]]-näkymä Publish-sivustollasi.                                                          |
| Mukauta siirtymistä       | Painike | [[Mukauta sivustoasi#Customize navigation\|Mukauta]] tiedostojen järjestystä, jos **Näytä hakemisto** on käytössä.                        |
| Näytä hakupalkki          | Kytkin  | Ota käyttöön tai poista käytöstä hakupalkki sivustollasi.                                                                                 |
| Näytä verkkonäkymä        | Kytkin  | Ota käyttöön tai poista käytöstä verkkonäkymä sivustosi oikeassa sivupalkissa.                                                            |
| Näytä sisällysluettelo    | Kytkin  | Ota käyttöön tai poista käytöstä [[Sisällysluettelo\|sisällysluettelo]]-näkymä sivustollasi.                                              |
| Näytä paluulinkit         | Kytkin  | Ota käyttöön tai poista käytöstä [[Paluulinkit]] sivustollasi.                                                                            |

### Muut sivuston asetukset

| Asetus                                 | Tyyppi  | Kuvaus                                                                                                     |
| -------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| Salasanat                              | Painike | [[Obsidian Publish/Turvallisuus ja yksityisyys#Add a site password\|Aseta salasana]] rajoittaaksesi pääsyä koko sivustollesi. |
| Google Analytics -seurantakoodi        | Syöte   | **Vain mukautettu verkkotunnus**. Syötä Google Analytics -sivuston seurantakoodi tähän.                    |
