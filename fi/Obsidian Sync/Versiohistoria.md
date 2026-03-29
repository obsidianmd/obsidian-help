---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync pitää kirjaa kaikista muistiinpanoihisi tehdyistä muutoksista ja tarkistaa säännöllisesti päivitykset sekä luo uusia versioita muistiinpanoistasi.
---
[[Johdanto Obsidian Synciin|Obsidian Sync]] tarkistaa säännöllisesti [[Synkronoinnin asetukset ja valikoiva synkronointi|synkronoitujen tiedostojen]] päivitykset ja pitää kirjaa kaikista muutoksista. Ne tallennetaan uusina merkintöinä [[#Versiohistoria|versiohistoriaan]]. Näihin tietoihin pääsee käsiksi muutamalla tavalla:

- [[#Sync-historia]]
- [[#Versiohistoria]]

Vaikka se ei ole osa Obsidian Synciä, paikallinen versiohistoria on myös saatavilla jokaisella laitteella, jos [[Tiedoston palautus]] -lisäosa on käytössä.

## Sync-historia

Sync-historia (tai Sync-sivupalkki) on Obsidianin versiossa 1.7 esitelty ominaisuus, jonka avulla voit nopeasti tarkastella äskettäin luotuja tai muokattuja synkronoituja muistiinpanoja ja liitteitä. Voit ajatella sitä myös _muokkaushistoriana_.

Sivupalkissa voit valita kohteen avataksesi sen tiedoston aktiivisessa ikkunassasi. Kohteilla on myös kontekstivalikot, joiden avulla voit suorittaa toimintoja, kuten siirtää tiedoston tai tarkastella sen [[#Muistiinpanot ja liitteet|versiohistoriaa]].

> [!compatibility] Vain työpöytäominaisuus
> Kun kohdistit synkronoituun tiedostoon sivupalkissa, näet, kuka on viimeksi muokannut tiedostoa. Tämä on erityisen hyödyllistä, jos [[Yhteistyö jaetussa holvissa|teet yhteistyötä]] jaetussa holvissa.

> [!tip] 
> Asetukset ja poistetut kohteet eivät näy Sync-historian sivupalkissa. Ne löytyvät sen sijaan [[#Muistiinpanot ja liitteet|versiohistoriasta]].

### Näytä Sync-historia

Kun otat [[Johdanto Obsidian Synciin|Sync]]-sisäänrakennetun lisäosan käyttöön, Sync-historia otetaan automaattisesti käyttöön, mutta se ei oletuksena näy sivupalkissa. Sinun täytyy lisätä se manuaalisesti komennon tai pikanäppäimen avulla.

#### Ota käyttöön komentovalikon kautta

> [!info] Tämä vaihtoehto edellyttää, että [[Komentovalikko]]-sisäänrakennettu lisäosa on käytössä.

**Työpöytä/Tabletti** ![[lucide-monitor-check.svg#icon]]

1. Avaa **komentovalikko**. ![[lucide-terminal.svg#icon]]
2. Kirjoita "Sync".
3. Valitse "Sync: Näytä Sync-historia" -vaihtoehto.

Sync-historia ilmestyy tämän jälkeen [[Sivupalkki|oikeaan sivupalkkiin]].

**Mobiili** ![[obsidian-icon-smartphone.svg#icon]]

1. Avaa [[Nauha]] ![[lucide-menu.svg#icon]].
2. Avaa **komentovalikko**. ![[lucide-terminal.svg#icon]]
3. Kirjoita "Sync".
4. Valitse "Sync: Näytä Sync-historia" -vaihtoehto.

Sync-historia ilmestyy tämän jälkeen pudotusvalikon vaihtoehtona [[Sivupalkki|oikeaan sivupalkkiin]].

#### Ota käyttöön pikanäppäimellä

1. Avaa **[[Asetukset]]**.
2. Valitse **Asetukset**-kategoriasta **Pikanäppäimet**.
3. Kirjoita pikanäppäinten hakupalkkiin "Sync".
4. Aseta haluamasi pikanäppäin kohtaan "Sync: Näytä Sync-historia".

## Versiohistoria

[[#Sync-historia|Sync-historian]] lisäksi Obsidian ylläpitää myös versiohistoriaa muistiinpanojen ja liitteiden palauttamista varten. Jos poistat vahingossa muistiinpanon tai haluat palata aiempaan versioon, voit palauttaa sen versiohistoriasta.

Versiohistorian säilytysaika riippuu [[Tilaukset ja tallennustilan rajoitukset|Obsidian Sync -tilauksestasi]]. Standard-tilauksessa muistiinpanot säilytetään 1 kuukauden ajan, kun taas Plus-tilauksessa ne säilytetään 12 kuukautta. Tämän ajanjakson jälkeen muistiinpanojesi vanhemmat versiot poistetaan.

[[Liitteet|Liitteiden]] vanhemmat versiot säilytetään <u>kaksi viikkoa</u>.

![[Yhteistyö jaetussa holvissa#^version-history-image]]

### Muistiinpanot ja liitteet

Muistiinpanojen ja liitteiden palautusprosessi on sama.

#### Tiedoston versiohistorian tarkasteleminen

**Työpöytä/Tabletti** ![[lucide-monitor-check.svg#icon]]
1. Valitse **tiedostoselaimesta** muistiinpano, jonka haluat palauttaa.
2. Valitse **Avaa versiohistoria**.
3. Valitse vasemmalta muistiinpanon versio, jota haluat tarkastella. Sisältö näytetään oikealla.

**Mobiili** ![[obsidian-icon-smartphone.svg#icon]]
1. Valitse **tiedostoselaimesta** muistiinpano, jonka haluat palauttaa.
2. Paina pitkään avataksesi kontekstivalikon.
3. Valitse **Avaa versiohistoria**.
4. Valitse ponnahdusvalikosta muistiinpanon versio, jota haluat tarkastella.
5. Valinnan jälkeen muistiinpanon sisältö on tarkasteltavissa.

#### Poistetun tai uudelleennimetyn tiedoston versiohistorian tarkasteleminen

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista kohdasta **Sisäänrakennetut lisäosat** vaihtoehto **Sync**.
3. Valitse **Poistetut tiedostot** -kohdan vierestä **Näytä**.
4. Valitse muistiinpano, jonka versiohistoriaa haluat tarkastella.
5. Valitse versiohistorian ponnahdusikkunassa vasemmalta muistiinpanon versio, jota haluat tarkastella.

#### Tiedoston aiemman version palauttaminen

**Työpöytä/Tabletti** ![[lucide-monitor-check.svg#icon]]
1. Valitse **tiedostoselaimesta** muistiinpano, jonka haluat palauttaa.
2. Valitse **Avaa versiohistoria**.
3. Valitse vasemmalta muistiinpanon versio, jonka haluat palauttaa. Sisältö näytetään oikealla.
4. Valitse **Palauta**-painike.
5. Muistiinpanon sisältö korvataan palautetulla versiolla.

**Mobiili** ![[obsidian-icon-smartphone.svg#icon]]
1. Valitse **tiedostoselaimesta** muistiinpano, jonka haluat palauttaa.
2. Paina pitkään avataksesi kontekstivalikon.
3. Valitse **Avaa versiohistoria**.
4. Valitse ponnahdusvalikosta muistiinpanon versio, jonka haluat palauttaa.
5. Valinnan jälkeen muistiinpanon sisältö on tarkasteltavissa.
6. Valitse **Palauta**-painike.
7. Muistiinpanon sisältö korvataan palautetulla versiolla.

#### Poistetun tiedoston palauttaminen

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista kohdasta **Sisäänrakennetut lisäosat** vaihtoehto **Sync**.
3. Valitse **Poistetut tiedostot** -kohdan vierestä **Näytä**.
4. Valitse muistiinpano, jonka haluat palauttaa.
5. Valitse vasemmalla olevasta versiolistasta versio, jonka haluat palauttaa.
6. Valitse oikealla oleva **Palauta**-painike.
7. Muistiinpano palautetaan alkuperäiseen sijaintiinsa tiedostojärjestelmässä.

> [!tip] Voit valita useita muistiinpanoja **usean tiedoston palautuksella** valitsemalla valintaruudut tai käyttämällä `shift+click`. Näitä tiedostoja ei voi tarkastella tässä valikossa.

### Asetusten historia

Obsidian Sync pitää kirjaa myös holvin asetusten muutoksista.

#### Asetuksen versiohistorian tarkasteleminen

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista kohdasta **Sisäänrakennetut lisäosat** vaihtoehto **Sync**.
3. Siirry kohtaan **Synkronoi holvin asetukset**.
4. Valitse **Näytä**-painike kohdan **[[Asetukset|Asetusten]] versiohistoria** vierestä.
5. Valitse **[[Asetukset|Asetusten]] tiedosto** -ponnahdusikkunasta asetustiedosto, jota haluat tarkastella.

#### Asetuksen aiemman version palauttaminen

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista kohdasta **Sisäänrakennetut lisäosat** vaihtoehto **Sync**.
3. Siirry kohtaan **Synkronoi holvin asetukset**.
4. Valitse **Näytä**-painike kohdan **[[Asetukset|Asetusten]] versiohistoria** vierestä.
5. Valitse **[[Asetukset|Asetusten]] tiedosto** -ponnahdusikkunasta asetustiedosto, jota haluat tarkastella.
6. Valitse muutosikkunassa **Palauta**-painike.
7. Lataa uudelleen tai käynnistä Obsidian uudelleen, jotta asetus tulee voimaan. Lisätietoja on ohjeissa kohdassa [[Obsidian Syncin käyttöönotto#Obsidian Syncin asetusten säätäminen|Obsidian Syncin asetusten säätäminen]].
