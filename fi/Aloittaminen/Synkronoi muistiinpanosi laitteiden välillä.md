---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Kuinka synkronoida Obsidian-muistiinpanosi eri laitteiden ja alustojen välillä.
---
Obsidian tallentaa muistiinpanot paikallisesti laitteellesi, joten voit aina käyttää niitä, myös ilman verkkoyhteyttä. Jos haluat käyttää muistiinpanojasi useilla laitteilla, sinun on otettava käyttöön jokin synkronointimenetelmä.

Tämä opas käsittelee yleisiä synkronointimenetelmiä, mukaan lukien vinkkejä tietojen menetyksen välttämiseksi ja sujuvan käyttökokemuksen varmistamiseksi.

Suosittelemme myös lukemaan [[Varmuuskopioi Obsidian-tiedostosi|varmuuskopiointioppaan]] tietojesi suojaamiseksi.

## Synkronointimenetelmät

Obsidianissa tietosi tallennetaan yksinkertaisesti tiedostoina kansioon, jota kutsutaan [[Paikalliset ja etäholvit|holviksi]]. Tämä tarkoittaa, että tietojesi synkronointiin on monia tapoja.

Seuraavat ovat muutamia yleisesti käytettyjä synkronointimenetelmiä, joita [Obsidian-yhteisön](https://obsidian.md/community) jäsenet ovat raportoineet:

1. **Ensimmäisen osapuolen synkronointi**: [[#Obsidian Sync]]
2. **Kolmannen osapuolen pilvisynkronointi**: [[#iCloud]], [[#OneDrive]] ja [[#Google Drive]]
3. **Paikallinen synkronointi**: [[#Syncthing]]
4. **Versionhallinta**: [[#Git]] ja [[#Working Copy]]

## Obsidian Sync

**Suositellut järjestelmät**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Yksinkertaisin ja virallisesti tuettu synkronointimenetelmä on ensimmäisen osapuolen ratkaisumme: [[Johdanto Obsidian Synciin|Obsidian Sync]].

Obsidian Sync pitää holvisi synkronoituna kaikilla laitteilla käyttämällä etäholvia, joka tekee kopiot tiedoistasi. Paikallinen kopio säilyy laitteillasi aina.

Seuraa [[Obsidian Syncin käyttöönotto|käyttöönotto-opasta]] Obsidian Syncin määrittämiseksi.

## iCloud

**Suositellut järjestelmät**: `macOS`, `iOS`, `iPadOS`

iCloudia voidaan käyttää holvien synkronointiin iOS:n ja macOS:n välillä. **iCloud Drive Windowsissa** voi kuitenkin johtaa tiedostojen kaksoiskappaleisiin tai tiedostojen vioittumiseen.

**Holvin luominen ja tallentaminen iCloud Driveen**:

- **Ota iCloud Drive käyttöön**:
    - macOS: Siirry kohtaan **Järjestelmäasetukset → Apple ID → iCloud → iCloud Drive**.
    - iOS: Siirry kohtaan **Asetukset → [Nimesi] → iCloud → iCloud Drive**.
- **Luo uusi holvi iCloudiin**:
    - macOS:
        1. Avaa **Obsidian** ja valitse **Luo uusi holvi**.
        2. Siirry tiedostovalitsimessa kohtaan **iCloud Drive → Obsidian**.
        3. Luo kansio holvillesi ja anna sille nimi.
        4. Valitse **Luo** viimeistelläksesi.
    - iOS:
        1. Avaa **Obsidian** ja napauta **Luo uusi holvi**.
        2. Anna holvillesi nimi.
        3. Ota käyttöön **Tallenna iCloudiin**.
        4. Napauta **Luo**.
- **Avaa holvi toisella Apple-laitteella**: 
    - Avaa toisella macOS- tai iOS-laitteella **Obsidian**, siirry [[Hallinnoi holveja|holvinvaihtajaan]] ja valitse **Avaa kansio holvina**. Siirry kohtaan **iCloud Drive → Obsidian**.

> [!warning]+ iOS- ja iPadOS-kansion sijainti
> Kun käytät iCloudia mobiililaitteilla, varmista että holvisi on tallennettu oikeaan sijaintiin: `iCloud Drive/Obsidian/[Holvisi nimi]`.
> 
> Holvien tulisi olla **Obsidian**-kansion sisällä iCloud Drivessa. Oikealla puolella oleva kansio, jossa on Obsidian-kuvake, on oikea. Älä käytä tavallista kansiota, jossa ei ole sovelluskuvaketta.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Voit tarkistaa holvisi sijainnin avaamalla **Tiedostot**-sovelluksen, napauttamalla **Selaa**, valitsemalla **iCloud Drive** kohdasta **Sijainnit** ja varmistamalla, että holvisi on **Obsidian**-kansion sisällä. Jos holvisi on eri sijainnissa, synkronointiongelmia saattaa esiintyä.

> [!tip] Parhaat käytännöt
> - **macOS 14 (Sonoma) ja aiemmat**: Poista käytöstä **Optimoi Mac-tallennustila** iCloud-asetuksissa estääksesi tiedostojen siirtämisen pois laitteelta. Tämä asetus vaikuttaa kaikkeen iCloud-tallennustilaan laitteella, ei vain Obsidianiin.
> - **macOS 15 (Sequoia)**: Napsauta hiiren kakkospainikkeella **Obsidian**-kansiota iCloud Drivessa ja valitse **Pidä ladattuna**.

## OneDrive

**Suositellut järjestelmät**: `Windows`, `macOS` (rajoitettu toiminnallisuus Androidilla)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) on suosittu pilvitallennusvaihtoehto Windows- ja macOS-käyttäjille. Sillä on kuitenkin rajoituksia Androidilla, eikä sitä tueta virallisesti Obsidian-holvien synkronointiin iOS:lla.

> [!info] Pidä tiedostot käytettävissä offline-tilassa
> Ennen kuin käytät OneDrivea synkronointiin, varmista että holvikansiosi on merkitty tilaan **Pidä aina tällä laitteella**. Tämä estää OneDrivea siirtämästä tiedostoja pois laitteelta, mikä saisi Obsidianin luulemaan niiden puuttuvan.

**Holvin luominen ja tallentaminen OneDriveen**:

1. **Ota OneDrive käyttöön**:
   - Windows: Kirjaudu sisään OneDrive-sovelluksen tai Microsoft-tilisi kautta.
   - macOS: Lataa OneDrive-sovellus ja kirjaudu sisään.
2. **Luo uusi holvi OneDriveen**:
   - Windows/macOS:
     1. Avaa **Resurssienhallinta** (Windows) tai **Finder** (macOS) ja siirry kohtaan **OneDrive → Tiedostot**.
     2. Luo uusi kansio (esim. \"Obsidian Vault\").
     3. Avaa **Obsidian**, valitse **Luo uusi holvi** ja valitse OneDrive-kansio.
3. **Avaa holvi toisella laitteella**:
   - Avaa toisella laitteella **Obsidian**, siirry [[Hallinnoi holveja|holvinvaihtajaan]] ja valitse **Avaa kansio holvina**. Siirry kohtaan **OneDrive → Tiedostot**.

> [!info] Android-synkronointi
> OneDrive ei välttämättä toimi hyvin Android-synkronoinnissa. Harkitse sovellusten kuten [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) tai [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite) käyttöä.

> [!tip] Parhaat käytännöt
> - Pidä holvitiedostosi aina **Käytettävissä offline-tilassa** napsauttamalla kansiota hiiren kakkospainikkeella ja valitsemalla **Pidä aina tällä laitteella**.
> - Vältä OneDriven **Tiedostot tarvittaessa** -ominaisuuden käyttöä holvien kanssa synkronointiongelmien välttämiseksi.

## Google Drive

**Suositellut järjestelmät**: `Windows`, `macOS`, `Android` (rajoitettu toiminnallisuus iOS:lla)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) on toinen suosittu pilvitallennusratkaisu. Vaikka sitä ei tueta virallisesti Obsidian-holvien synkronointiin, voit käyttää kolmannen osapuolen sovelluksia ja lisäosia synkronointiin laitteiden välillä.

> [!info] iOS-tuki
> Google Drivea ei tueta virallisesti Obsidian-holvien synkronointiin iOS:lla. Harkitse kolmannen osapuolen ratkaisun tai lisäosan käyttöä iOS-synkronointiin.

**Holvin luominen ja tallentaminen Google Driveen**:

1. **Ota Google Drive käyttöön**:
    - Windows tai macOS: Lataa Google Drive -sovellus ja kirjaudu sisään.
    - Android: Varmista, että Google Drive on käytössä ja kirjautuneena.
2. **Luo uusi holvi Google Driveen**:
    - Windows/macOS:
        1. Avaa **Resurssienhallinta** (Windows) tai **Finder** (macOS) ja siirry kohtaan **Google Drive**.
        2. Luo uusi kansio (esim. \"Obsidian Vault\").
        3. Avaa **Obsidian**, valitse **Luo uusi holvi** ja valitse Google Drive -kansio.
3. **Avaa holvi toisella laitteella**:
    - Avaa toisella laitteella **Obsidian**, siirry [[Hallinnoi holveja|holvinvaihtajaan]] ja valitse **Avaa kansio holvina**. Siirry Google Drive -kansioosi.

> [!tip] Parhaat käytännöt
> - Aseta holvitiedostot **Käytettävissä offline-tilassa** Google Drivessa välttääksesi synkronointiongelmia tiedostojen siirron vuoksi.
> - iOS:lla harkitse vaihtoehtoisia menetelmiä kuten [[Johdanto Obsidian Synciin|Obsidian Sync]], [[#iCloud]] tai käytä **Remotely Save** -lisäosaa.

## Syncthing

**Suositellut järjestelmät**: `Windows`, `macOS`, `Linux`

Syncthing on hajautettu tiedostojen synkronointityökalu, joka ei tarvitse pilvitallennusta. Se synkronoi holvisi suoraan laitteiden välillä verkon tai internetin kautta.

> [!info]+ Android-tuki
> Virallista Syncthing Android -sovellusta ei enää ylläpidetä. Yhteisön ylläpitämä haarukkasovellus [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) jatkaa kuitenkin aktiivista kehitystä ja sitä voidaan käyttää Android-laitteilla.

**Holvin luominen ja tallentaminen Syncthingillä**:

1. **Ota Syncthing käyttöön**:
   - Asenna Syncthing jokaiselle laitteelle. Katso asennusohjeet [Syncthingin verkkosivuilta](https://syncthing.net/).
   - Androidilla asenna [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) GitHub-julkaisuista tai F-Droidista.
2. **Luo ja määritä jaettu kansio**:
   - Kaikilla laitteilla:
     1. Avaa Syncthing ja luo jaettu kansio. Aseta kansiopoluksi Obsidian-holvisi.
     2. Varmista, että sama kansio on valittu kaikilla laitteilla.
     3. Määritä kansion synkronointiasetukset (esim. **Lähetä ja vastaanota** kaksisuuntaiseen synkronointiin).
3. **Avaa holvi Obsidianissa**:
   - Kun kansio on synkronoitu laitteiden välillä, avaa **Obsidian**, siirry [[Hallinnoi holveja|holvinvaihtajaan]] ja valitse **Avaa kansio holvina**.

> [!info] Laitteiden saatavuus
> Syncthing toimii parhaiten, kun vähintään yksi laite on aina päällä jatkuvan synkronoinnin varmistamiseksi.

> [!tip] Parhaat käytännöt
> - Paikallisessa synkronoinnissa varmista, että kaikki laitteet ovat yhteydessä samaan verkkoon.
> - Jätä `.obsidian` pois synkronoinnista, jos haluat erilliset asetukset kullekin laitteelle.
> - Käytä ohituskuvioita välttääksesi väliaikaisten tai varmuuskopiotiedostojen synkronointia.

## Git

**Suositellut järjestelmät**: `Windows`, `macOS`, `Linux`

**Git** on versionhallintajärjestelmä, jonka avulla voit seurata muutoksia, tehdä yhteistyötä muiden kanssa ja synkronoida holvejasi koodivarastojen kuten GitHubin, GitLabin tai itse ylläpidetyn palvelimen kautta.

**Holvin synkronointi Gitillä**:

1. **Luo etäkoodivarasto**:
    - Luo koodivarasto Git-palvelualustalle (esim. GitHub, GitLab tai itse ylläpidetty palvelin).
2. **Synkronoi holvisi**:
    1. Avaa pääte tai Gitin käyttöliittymäsovellus (esim. GitKraken, Sourcetree).
    2. Alusta Git-koodivarasto holvikansiossasi komennolla `git init`.
    3. Lisää etäkoodivarasto: `git remote add origin [URL]`.
    4. Tee muutoksista pysyvä tallennus: `git add .` ja `git commit -m "Viestisi"`.
    5. Lähetä muutokset: `git push origin main`.
3. **Hae muutokset toisilla laitteilla**:
    - Kloonaa koodivarasto toiselle laitteelle ja hae muutokset komennolla `git pull origin main`.

> [!info] Manuaalinen synkronointi vaaditaan
> Git tarjoaa vahvan versionhallinnan, mutta synkronointi ei ole automaattista. Sinun on manuaalisesti lähetettävä ja haettava muutokset.

## iPhonen ja iPadin synkronointi

**Suositellut vaihtoehdot**:
- [[Johdanto Obsidian Synciin|Obsidian Sync]]
- [[#iCloud]]

> [!info] Vältä synkronointipalveluiden sekoittamista
> Vältä saman holvin synkronointia useiden palveluiden kautta (esim. sekä Obsidian Syncin että iCloudin samanaikainen käyttö) tietoristiriitojen tai tiedostojen vioittumisen estämiseksi.

**Tuettomat vaihtoehdot**:
Seuraavia palveluita ei tueta virallisesti iOS:lla, mutta käyttäjät ovat löytäneet kiertoteitä kolmannen osapuolen työkalujen tai lisäosien avulla:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Jotkut käyttäjät ovat onnistuneesti käyttäneet lisäosia kuten **Remotely Save** tai **LiveSync** holvien synkronointiin iOS:lla. Nämä menetelmät eivät kuitenkaan ole virallisesti tuettuja, ja tulokset voivat vaihdella.

### Working Copy

**Suositellut järjestelmät**: `iOS`
**Vaatii**: [[#Git]]

**Working Copy** on Git-asiakassovellus iOS:lle, jolla voit kloonata, tallentaa pysyvästi ja lähettää muutoksia Git-koodivarastoon. Se toimii hyvin Obsidian-holvien synkronoinnissa Gitin kautta, vaikka jotkin ominaisuudet vaativat maksullisen sovelluksen sisäisen oston.

**Holvin synkronointi Working Copylla**:

1. **Asenna Working Copy**:
    - Lataa **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** -sovellus iPhonellesi tai iPadillesi.
2. **Kloonaa Git-koodivarastosi**:
    - Avaa Working Copy, napauta **Add Repository** ja syötä koodivarastosi URL (esim. GitHub, GitLab).
3. **Linkitä koodivarasto Obsidianiin**:
    - Linkitä kloonattu koodivarastokansio tyhjään holviin **Obsidianissa**.
4. **Tallenna ja lähetä muutokset**:
    - Muokattuasi muistiinpanoja Obsidianissa, käytä Working Copya muutosten **tallentamiseen pysyvästi** (Commit) ja **lähettämiseen** (Push) etäkoodivarastoon.
    - Hae muutokset toisilla laitteilla Gitillä holvin synkronoimiseksi.

> [!info] Yhteisön käyttö
> Vaikka Working Copya ei tueta virallisesti, monet käyttäjät ovat onnistuneesti käyttäneet sitä holvien synkronointiin Gitin kanssa.

## Usein kysytyt kysymykset

**Miksi haluamaani synkronointipalvelua ei tueta virallisesti?**

Toisin kuin jotkin muistiinpanosovellukset, jotka käsittelevät yhtä tiedostoa kerrallaan, Obsidian tarvitsee pääsyn koko holviin ominaisuuksiensa vuoksi (esim. linkkien päivittäminen tiedostoa uudelleennimettäessä). Tämä tekee joidenkin palveluiden luotettavasta toiminnasta Obsidianin kanssa vaikeaa.

**Miksi minun on pidettävä tiedostot "Käytettävissä offline-tilassa"?**

Jos palvelut kuten OneDrive tai iCloud siirtävät tiedostoja pois laitteelta (esim. **Tiedostot tarvittaessa** tai **Optimoi Mac-tallennustila** -ominaisuuden avulla), Obsidian ei pääse niihin käsiksi, mikä aiheuttaa synkronointiongelmia. Merkitse holvikansiosi tilaan **Pidä aina tällä laitteella** (OneDrive) tai varmista, että **Pidä ladattuna** on käytössä (iCloud).

**Miten hallitsen eri asetuksia holveilleni?**

Obsidian mahdollistaa asetuskansion mukauttamisen laitekohtaisesti [[Asetuskansio|asetuskansioiden]] avulla.
