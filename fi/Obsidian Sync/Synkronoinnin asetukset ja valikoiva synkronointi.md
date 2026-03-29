---
permalink: sync/settings
publish: true
mobile: true
description: 'Tämä sivu selittää Syncin asetukset ja opastaa sinua valitsemaan, mitkä tiedostot synkronoidaan.'
---
Kun [[Tilaukset ja tallennustilan rajoitukset#Uuden etäholvin luominen|luot etäholvin]] ja [[Obsidian Syncin käyttöönotto#Yhdistä etäholviin|yhdistät siihen]], Sync-sisäänrakennettu lisäosa tulee paikaksi, jossa hallinnoit etäholviasi.

## Synkronoinnin asetukset

**Etäholvi**
Tämä osio näyttää tällä hetkellä yhdistetyn etäholvin. Se sisältää **Katkaise yhteys** -painikkeen etäholvin yhteyden katkaisemiseen ja **Hallinnoi**-painikkeen kaikkien tilisi etäholvien tarkastelemiseen (mukaan lukien jaetut holvit [[Yhteistyö jaetussa holvissa|yhteistyön]] kautta).

> [!warning]+ Etäholvi ulkoisessa synkronointipalvelussa
> Jos etäholvisi sijaitsee ulkoisessa synkronointipalvelussa, näet punaisen virheilmoituksen. Seuraa ohjeita kohdassa [[Siirtyminen Obsidian Synciin]] ongelman ratkaisemiseksi.

**Syncin tila**
Näyttää etäholvin nykyisen synkronointitilan. Tämä osio sisältää joko **Keskeytä**- tai **Jatka**-painikkeen tilasta riippuen.

**Laitteen nimi**
Määritä yksilöllinen nimi synkronoitavalle laitteelle. Tämä auttaa seuraamaan toimintaa [[Tilakuvake ja viestit#Syncin sisäinen loki|Sync-lokissa]]. Tämä asetus on laitekohtainen, aivan kuten [[#Valikoiva synkronointi]].

**[[#Ristiriitojen ratkaiseminen]]**
Valitse, miten ristiriidat ratkaistaan, kun muokkaat tiedostoa useilla laitteilla. Tämä asetus on laitekohtainen, aivan kuten [[#Valikoiva synkronointi]].

**Poistetut tiedostot**
Sisältää painikkeen poistettujen tiedostojen **näyttämiseen** tai **palauttamiseen**. Lisätietoja on kohdassa [[Versiohistoria]].

**Tallennustilan käyttö**
Näyttää edistymispalkin, joka osoittaa, kuinka paljon synkronoinnin tallennustilasta on käytössä.

> [!tip]- Palvelimen käsittelyaika
> Nykyisen käytön päivittyminen voi kestää jopa 30 minuuttia palvelinpuolen käsittelyn vuoksi.

**Ota yhteyttä tukeen**
Antaa ohjeet [[Apua ja tuki#Ota yhteyttä Obsidianin tukeen|Obsidianin tukeen yhteyden ottamiseen]], mukaan lukien vaihtoehdot **Kopioi virheenkorjaustiedot** ja **Sähköpostituki**.

### Ristiriitojen ratkaiseminen

Valitse, miten ristiriidat ratkaistaan, kun muokkaat tiedostoa useilla laitteilla ennen synkronointia. Voit yhdistää muutokset automaattisesti tai luoda erilliset ristiriitatiedostot manuaalista tarkistusta varten. Katso [[Obsidian Syncin vianmääritys#Ristiriitojen ratkaiseminen|Ristiriitojen ratkaiseminen]] saadaksesi lisätietoja ristiriitojen toiminnasta ja tämän asetuksen määrittämisestä.

> [!warning]+ Määritä jokaisella laitteella
> Tämä asetus on määritettävä erikseen jokaisella laitteella.

---

Voit myös valita, mitä synkronoidaan Sync-sisäänrakennetun lisäosan asetuksissa. Tämä osio käsittelee **valikoivaa synkronointia** ja **holvin asetusten synkronointia** sekä niihin liittyviä huomioita.

## Valikoiva synkronointi

[[Paikalliset ja etäholvit|Etäholviin]] synkronoidut tiedostot vaikuttavat [[Usein kysytyt kysymykset#How large can each remote vault be|tallennustilarajoitukseen]]. Oletuksena Obsidian Sync aktivoi **valikoivan synkronoinnin** seuraaville tiedostotyypeille:
- Kuvat
- Äänitiedostot
- Videot
- PDF-tiedostot

Synkronoidaksesi lisää tiedostotyyppejä, ota käyttöön `Synkronoi muut tiedostot` -asetus.

**Holvin asetusten synkronoinnin** oletusasetukset sisältävät:
- Muut tiedostotyypit
- Pääasetukset
- Ulkoasu
- Teemat ja pätkät
- Pikanäppäimet
- Käytettävät sisäänrakennetut lisäosat
- Sisäänrakennettujen lisäosien asetukset

Yhteisön lisäosien synkronoimiseksi ota manuaalisesti käyttöön **Käytössä olevat yhteisön lisäosat** ja **Asennettujen yhteisön lisäosien luettelo**.

### Synkronoitavien tiedostotyyppien muuttaminen

1. Avaa **[[Asetukset]] → Sync**.
2. Ota **Valikoiva synkronointi** -kohdassa käyttöön haluamasi tiedostotyypit.
3. Käynnistä sovellus uudelleen ottaaksesi uudet asetukset käyttöön. Mobiililaitteella tai tabletilla tämä voi vaatia pakotetun sulkemisen.

Huomaa, että [[Tilaukset ja tallennustilan rajoitukset|Sync-tilauksesi]] määrittää synkronoitavan tiedoston enimmäiskoon. Standard-tilaus sallii enintään 5 Mt:n tiedostojen synkronoinnin, kun taas Plus-tilaus tukee enintään 200 Mt:n tiedostoja.

> [!info]+ Pois jätetyt tiedostot säilyvät etäholvissa
> Tiedoston lisääminen **Pois jätettävät tiedostot** -luetteloon ei poista sitä etäholvista, jos se on jo synkronoitu. Määritä Sync-asetuksesi ennen synkronointia välttääksesi tarpeettoman tallennustilan käytön.

### Kansion jättäminen pois synkronoinnista

Oletuksena Obsidian synkronoi kaikki holvin tiedostot ja kansiot. Tietyn kansion jättäminen pois synkronoinnista:
1. Avaa **[[Asetukset]] → Sync**.
2. Valitse **Pois jätettävät kansiot** -kohdan vierestä **Hallinnoi**.
3. Valitse luettelosta kansio, jonka haluat jättää pois.
4. Valitse **Valmis**.

Poistaaksesi kansion poissulkuluettelosta, valitse ![[lucide-x.svg#icon]]-painike kansion nimen vierestä.

#### Aina synkronoinnista pois jätetyt

##### Tiedoston palautuksen tilannevedokset

[[Tiedoston palautus]] -lisäosan tilannevedoksia ei synkronoida Obsidian Syncin kautta, koska tilannevedokset säilytetään [[Miten Obsidian tallentaa tietoja#Yleiset asetukset|yleisissä asetuksissa]].

##### Piilotetut tiedostot ja kansiot

Pisteellä (`.`) alkavia tiedostoja ja kansioita käsitellään piilotettuina, ja ne jätetään pois synkronoinnista. Ainoa poikkeus on holvin [[Asetuskansio|asetuskansio]] (`.obsidian`), joka synkronoidaan.

Yleisiä esimerkkejä piilotetuista tiedostoista ja kansioista, joita ei synkronoida:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Synkronoinnin asetukset

Synkronoinnin asetukset eivät synkronoidu laitteiden välillä. Sinun on määritettävä ne erikseen jokaisella laitteella tarpeen mukaan.

## Synkronoidun holvin asetusten päivittäminen

Synkronointiasetusten muokkaamiseksi useilla laitteilla toimi seuraavasti:

> [!tip]- Ensisijainen ja toissijainen laite
> Termit "ensisijainen" ja "toissijainen" laite ovat vain selkeyden vuoksi. Sync ei tee eroa niiden välillä.

### Ensisijainen laite

Ensisijainen laite toimii totuuden lähteenä. Tässä tehdyt muutokset synkronoidaan kaikille muille laitteille.

1. Siirry kohtaan **[[Asetukset]] → Sync**.
2. Aktivoi halutut asetukset kohdassa **Synkronoi holvin asetukset**.
3. Lataa uudelleen tai käynnistä Obsidian uudelleen. Mobiililaitteella tai tabletilla pakotettu sulkeminen voi olla tarpeen.
4. Anna asetusten synkronoitua etäholvin kanssa.

### Toissijainen laite (tai laitteet)

Toissijaiset laitteet (kuten puhelimesi) vastaanottavat päivitykset ensisijaiselta laitteelta.

1. Siirry kohtaan **[[Asetukset]] → Sync**.
2. Ota käyttöön tarvittavat asetukset kohdassa **Synkronoi holvin asetukset**.
3. Odota, että muutokset latautuvat etäholvista.
4. Lataa uudelleen tai käynnistä sovellus uudelleen synkronoitujen asetusten käyttöönottamiseksi. Mobiililaitteella tai tabletilla pakotettu sulkeminen voi olla tarpeen.

### Asetusten uudelleenlataus

Tietyt asetukset voidaan ladata uudelleen lennossa, kun taas toiset vaativat uudelleenkäynnistyksen:

- **Lennossa ladattavat**: Useimmat Obsidianin asetukset, mukaan lukien pikanäppäimet ja määreet, ulkoasuasetukset ja jo käyttöön otettujen sisäänrakennettujen lisäosien asetukset.
- **Vaatii uudelleenlatauksen**: CSS-muutokset (esim. [[CSS-pätkät]], [[Teemat]]), verkkonäkymän asetukset ja sisäänrakennettujen lisäosien tilat (esim. Päivittäisten muistiinpanojen käyttöönotto/poisto käytöstä).

Yhteisön lisäosat eivät yleensä tue lennossa uudelleenlatausta ja vaativat uudelleenkäynnistyksen, kun uusia asetuksia otetaan käyttöön.

> [!info]+ Lisäosakehittäjille
> Opi [integroimaan lennossa uudelleenlataus Obsidian Syncin kanssa](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Asetusprofiilit

Obsidian Sync voi synkronoida useita [[Asetuskansio|asetuskansioita]] samaan etäholviin, jolloin voit luoda erillisiä profiileja (esim. yksi mobiililaitteelle, toinen kannettavalle).

### Asetusprofiilin luominen

Uuden asetusprofiilin luominen:

1. Avaa **[[Asetukset]] → Tiedostot ja linkit**.
2. Kirjoita **Mukautettu määrityskansio** -kohtaan profiilisi nimi, joka alkaa pisteellä (`.`), esim. `.obsidian-mobile`.
3. Käynnistä Obsidian uudelleen ottaaksesi muutokset käyttöön.

> [!info]+ Vältä lisäosien ja teemojen uudelleenlatausta
> Asetusprofiilin vaihtaminen vaatii synkronointiasetusten uudelleenmäärityksen. Lisäosien ja teemojen uudelleenlatauksen välttämiseksi kopioi olemassa oleva `.obsidian`-kansiosi ja nimeä se uudelleen vastaamaan uutta profiiliasi (esim. `.obsidian-mobile`) ennen muutosten tekemistä.
