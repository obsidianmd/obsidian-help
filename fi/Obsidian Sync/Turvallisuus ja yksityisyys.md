---
permalink: sync/security
publish: true
mobile: false
description: Tutustu Obsidian Syncin tietoturvaan ja yksityisyyteen liittyviin näkökohtiin.
---
## Salaus

Turvallisuutesi vuoksi [[Johdanto Obsidian Synciin|Obsidian Sync]] salaa [[Paikalliset ja etäholvit|etäholvisi]] ja kaiken viestinnän Obsidianin palvelimien kanssa.

Kun luot uuden etäholvin, sinulla on kaksi vaihtoehtoa:

- **Päästä päähän -salaus (oletus)** on turvallisin, mutta vaatii sinua muistamaan salasanan. Tämä takaa, ettei kukaan — ei edes Obsidian-tiimi — pääse käsiksi muistiinpanoihisi.
- **Tavallinen salaus** käyttää Obsidianin hallinnoimaa salausavainta tietojesi suojaamiseen siirrossa ja palvelimellamme.

Suosittelemme päästä päähän -salausta kaikille käyttäjille, koska se on yksityisin ja turvallisin vaihtoehto. Huomaa kuitenkin, että jos unohdat tai kadotat salaussalasanasi, tietosi pysyvät salattuina ja käyttökelvottomina ikuisesti. Emme pysty palauttamaan salasanaasi tai salattuja tietojasi puolestasi.

Valintasi koskee vain etäholviasi. Obsidian ei salaa paikallista holviasi.

### Mitä päästä päähän -salaus tarkoittaa?

Päästä päähän -salaus tarkoittaa, että tiedot salataan heti, kun ne lähtevät laitteeltasi, ja ne voidaan purkaa vain salausavaimellasi, kun ne ovat palanneet jollekin laitteellesi.

Emme voi lukea tietojasi. Eivät myöskään mahdolliset salakuuntelijat, kuten internetpalveluntarjoajasi.

Harvinaisessa tapauksessa, jossa palvelin murretaan kokonaan, tietosi pysyvät salattuina — kukaan ei voi purkaa tiedostojasi tietämättä salasanaasi.

### Mitkä ovat tavallisen salauksen riskit?

Tavallinen salaus on perustavanlaatuisesti vähemmän turvallista kuin päästä päähän -salaus, mutta se voi olla kätevä vaihtoehto, jos et odota synkronoitavien tietojesi olevan täysin yksityisiä. Jos esimerkiksi synkronoitu holvisi on [[Johdanto Obsidian Publishiin|julkaistu]] julkisena verkkosivustona kuten tämä Ohje-sivusto, päästä päähän -salaus ei ole tarpeen.

Tavallinen salaus on sama salausmenetelmä, jota pilvitallennusyritykset ja ohjelmistopalvelualustat käyttävät, kuten Google Docs, Dropbox ja iCloud (ilman edistynyttä tietosuojaa). Salausavain luodaan sovelluksen toimesta ja sitä käytetään tietojesi suojaamiseen siirrossa ja palvelimella. Koska salausavain on tallennettu yrityksen palvelimille, sitä voidaan käyttää tietojesi purkamiseen, esim. tilanteessa, jossa yritys on etsintäluvan kohteena, tai tilanteessa, jossa haluat käyttää tietojasi verkkoselaimen kautta.

Päästä päähän -salaus takaa, ettei Obsidian voi koskaan päästä käsiksi tietoihisi, ja sitä tulisi aina käyttää sellaisten tietojen synkronointiin, jotka haluat pitää täysin yksityisinä ja turvallisina.

### Mitä salausta käytätte?

Tietoturvan takaamiseksi käytämme alan standardinmukaisia salausprotokollia. Tarkemmin sanottuna käytämme [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0)-salausta, vahvinta salausstandardia, jota käytetään laajalti esimerkiksi verkkopankkitoiminnassa. Salausprosessi sisältää seuraavat tekniset yksityiskohdat:

- **Avainjohdannaisfunktio:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) suolalla
- **Salausalgoritmi:** AES-256 käyttäen [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode) -tilaa

### Voinko varmistaa, että tietoni on päästä päähän -salattu?

Kyllä. Katso oppaamme, [kuinka varmistaa Obsidian Syncin päästä päähän -salaus](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Tämä opas tarjoaa vaiheittaiset ohjeet, joiden avulla voit luottamuksettomasti varmistaa tietojesi päästä päähän -salauksen, kun niitä lähetetään ja vastaanotetaan Sync-palvelimien kautta.

### Onko Obsidian läpäissyt kolmannen osapuolen tietoturvatarkastuksen?

Kyllä. Obsidian on riippumattomasti auditoitu. Vieraile [Turvallisuus-sivullamme](https://obsidian.md/security) nähdäksesi tarkastusraportit. Kolmannen osapuolen tietoturvayritysten säännölliset auditoinnit varmistavat, että Obsidianin koodi ja menettelyt täyttävät korkeimmat turvallisuusstandardit.

### Mitä tapahtuu, jos unohdan salaussalasanani?

Jos kadotat tai unohdat salaussalasanasi, et voi yhdistää lisälaitteita etäholviisi. Koska salaussalasanaa ei tallenneta minnekään, se on lopullisesti menetetty.

Tietosi ovat kuitenkin yleensä turvallisesti tallennettuna paikallisesti jokaisella laitteellasi.

Jatkaaksesi Obsidian Syncin käyttöä suosittelemme tekemään täydellisen uudelleenmäärityksen, jotta voit lisätä uusia laitteita Sync-järjestelmääsi:

1. Tee täydellinen holvin varmuuskopio ensisijaisella laitteellasi siltä varalta, että jokin menee pieleen. Tämä voi olla yksinkertaisesti holvin kansion kopioiminen tai zip-tiedoston luominen holvista.
2. Katkaise yhteys etäholviin jokaisella laitteellasi. Tämä tehdään valitsemalla **[[Asetukset]] → Sync → Valitse etäholvi → Katkaise yhteys**.
3. [[Obsidian Syncin käyttöönotto#Luo uusi etäholvi|Luo uusi etäholvi]] ensisijaiselta laitteeltasi samalta Asetukset-sivulta. Vaihtoehtoisesti voit poistaa edellisen etäholvin, koska sinulla ei ole siihen salasanaa joka tapauksessa. (Saatat joutua poistamaan edellisen etäholvin, jos olet [[Usein kysytyt kysymykset#Kuinka monta etäholvia minulla voi olla?|holvirajalla]])
4. Odota, että ensisijainen laitteesi synkronoituu. Seuraa synkronoinnin ilmaisinta näytön oikeassa alareunassa, kunnes se näyttää vihreän valintamerkin.
5. Yhdistä jokainen laitteesi samaan juuri luotuun etäholviin. Yhdistettäessä näytetään varoitus holvien yhdistämisestä, tämä on odotettavissa ja voit jatkaa. Odota, että jokainen laite on täysin synkronoitunut ennen kuin siirryt seuraavaan. Tämä vähentää ongelmien mahdollisuutta.
6. Nyt kaikkien laitteidesi pitäisi olla yhdistettyinä uuteen etäholviin.

## Isännöinti

### Missä isännöitte Obsidian Syncin palvelimia?

Datakeskuksemme, joita ylläpitää [DigitalOcean](https://www.digitalocean.com), tarjoavat maantieteellisesti alueellisia etäholvin isännöintivaihtoehtoja seuraavissa sijainneissa:

> [!abstract] Sync-alueet
> **Automaattinen**: Datakeskus valitaan IP-sijaintisi perusteella sillä hetkellä, kun määrität sen ensimmäisen kerran.
> 
> **Aasia**: Singapore
> **Eurooppa**: Frankfurt, Saksa
> **Pohjois-Amerikka**: San Francisco, USA
> **Oseania**: Sydney, Australia
^sync-geo-regions

### Mistä löydän nykyisen Sync-palvelimeni ja missä se on isännöity?

Löytääksesi Obsidian Sync -palvelimesi, toimi seuraavasti:
1. Siirry kohtaan **[[Asetukset]]** → **Sync** → **Kopioi virheenkorjaustiedot**.
2. Liitä kopioidut tiedot muistiinpanoon tai tiedostoon.
3. Etsi rivi, joka näyttää tältä: `Host server: wss://sync-xx.obsidian.md`

Tämä rivi osoittaa palvelimen, jossa etäholvisi on isännöity. Lisätietoja palvelimen sijainneista ja käyttöajasta saat [tilasivultamme](https://status.obsidian.md/).

## Verkko ja käyttöoikeudet

### Obsidian Syncin käyttöoikeuksien hallinta verkossasi

Hallitaksesi Obsidian Syncin käyttöoikeuksia verkossasi, sinun tulee hallita seuraavia verkkotunnuksia:

`sync-xx.obsidian.md`

Tässä `xx` on numero väliltä `1 - 100`.

> [!tip] Jos palomuurijärjestelmäsi tukee sitä, suosittelemme sallittujen listalle lisäämistä `sync-*.obsidian.md`, jotta alatunnusten jatkuva kasvu huomioidaan.

## Rajoitukset

Obsidian Sync on suunniteltu pitämään muistiinpanosi yksityisinä ja turvallisina. Tarjotaksemme nopean, luotettavan synkronoinnin ja tehokkaan tallennustilan laitteiden välillä, teemme joitakin harkittuja kompromisseja salauksen soveltamistavassa.

### Deterministinen tiedostotiivisteen salaus

Salaamme tiedostotiivisteet deterministisesti: sama tiedostosisältö, samalla salausavaimella ja suolalla, tuottaa aina saman salatun tiivisteen palvelimella. Tämä auttaa Synciä tunnistamaan kaksoiskappaleet ja välttämään identtisten tietojen uudelleenlataamista tai -tallentamista, mikä säästää kaistanleveyttä ja etätallennustilaa, erityisesti versiohistoriassa tai kun suuret tiedostot toistuvat.

Kuitenkin, jos hyökkääjä murtautuu Sync-palvelimelle ja hänellä on erillinen keino pakottaa käyttäjä lataamaan valitsemiaan tiedostoja, hyökkääjä voisi pakottaa käyttäjän lataamaan tiettyjä tiedostoja ja selvittää, vastaako tiedosto käyttäjän aiemmin lataamaa tiedostoa.

### Ei kryptografista sidontaa polun ja sisällön välillä

Joitakin metatietoja ei salata päästä päähän: mikä laite latasi tai poisti tiedoston, milloin se ladattiin, sekä *yhdistäminen* salattujen tiedostopolkujen ja salatun sisällön välillä. Nämä tiedot ovat palvelimen luettavissa, jotta se voi reitittää muutoksia, määrittää tiedoston versiohistorian ja pitää laitteet synkronoituina.

Jos Sync-palvelin murrettaisiin, hyökkääjä voisi peukaloida tätä yhdistämistä, jolloin yhden salatun tiedoston sisältö toimitettaisiin eri tiedostopolun alla. Tämä ei paljasta tekstitietojasi — ne pysyvät salattuina.
