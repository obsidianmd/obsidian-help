---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Tämä sivu luettelee harvinaisia ongelmia, joita saatat kohdata Obsidian Syncin kanssa, sekä niiden ratkaisutavat.'
---
Tämä sivu luettelee harvinaisia ongelmia, joihin saatat törmätä [[Johdanto Obsidian Synciin|Obsidian Syncin]] kanssa, sekä niiden ratkaisutavat. Ennen kuin jatkat, suosittelemme tutustumaan sivuihin [[Tilakuvake ja viestit]] ja [[Usein kysytyt kysymykset]].

## Yleiset

### Ristiriitojen ratkaiseminen

Ristiriita syntyy, kun muokkaat samaa tiedostoa kahdella tai useammalla laitteella ennen kuin ne synkronoituvat. Voit esimerkiksi muokata muistiinpanoa tietokoneellasi. Ennen kuin muutos latautuu palvelimelle, muokkaat samaa muistiinpanoa myös puhelimellasi.

Ristiriitoja tapahtuu useammin, kun työskentelet offline-tilassa. Muutoksia kertyy enemmän ja synkronointien välillä on pidempi aika, mikä lisää ristiriitojen todennäköisyyttä.

#### Miten Obsidian Sync käsittelee ristiriitoja

Kun Obsidian Sync havaitsee ristiriidan, lopputulos riippuu tiedostotyypistä:

- **Markdown-tiedostot**: Obsidian Sync yhdistää muutokset Googlen [diff-match-patch](https://github.com/google/diff-match-patch)-algoritmilla.
- **Muut tiedostotyypit**: Kaikissa muissa tiedostoissa, mukaan lukien Canvas-tiedostot, Obsidian käyttää "viimeksi muokattu voittaa" -periaatetta. Viimeksi muokattu versio korvaa aiemmat versiot.

Obsidianin asetuksiin, kuten lisäosa-asetuksiin, liittyvissä ristiriidoissa Obsidian Sync yhdistää JSON-tiedostot. Se soveltaa paikallisen JSON-tiedoston avaimet etä-JSON-tiedoston päälle.

#### Ristiriitojen ratkaisuvaihtoehdot

Obsidianin versiosta 1.9.7 alkaen voit valita, miten ristiriidat käsitellään. Asetuksen määrittäminen:

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista **Sync**.
3. Valitse kohdasta **[[Synkronoinnin asetukset ja valikoiva synkronointi#Jos ilmenee ristiriita|Jos ilmenee ristiriita]]** haluamasi vaihtoehto:
   - **Yhdistä automaattisesti** (oletus): Obsidian Sync yhdistää kaikki eri laitteilta tulevat muutokset yhdeksi tiedostoksi. Tämä tallentaa kaikki muokkaukset, mutta voi joskus aiheuttaa tekstin kaksoiskappaleita tai muotoiluongelmia. Nämä on korjattava manuaalisesti.
   - **Luo ristiriitatiedosto**: Kun Obsidian havaitsee ristiriitaisia muutoksia, se luo erillisen ristiriitatiedoston automaattisen yhdistämisen sijaan. Voit sitten tarkistaa molemmat versiot ja yhdistää ne itse. Tämä antaa sinulle täyden hallinnan lopputuloksesta.

> [!warning]+ Määritä kaikilla laitteilla
> Ristiriitojen ratkaisuasetukset ovat laitekohtaisia. Sinun on määritettävä haluamasi vaihtoehto jokaiselle laitteellesi. Tämä varmistaa saman toiminnan kaikilla synkronoiduilla laitteillasi.

**Ristiriitatiedoston nimeämismalli**

Kun käytät "Luo ristiriitatiedosto" -vaihtoehtoa, Obsidian luo uuden tiedoston seuraavalla nimeämismallilla:

```
alkuperäisen-muistiinpanon-nimi (Conflicted copy laitteen-nimi VVVVKKPPTTMM).md
```

Jos esimerkiksi ristiriita tapahtuu muistiinpanossa nimeltä `Meeting notes.md`, ristiriitatiedoston nimi voi olla:

```
Meeting notes (Conflicted copy MyMacBook2 202411281430).md
```

Ristiriitatiedosto sisältää muutokset laitteelta, jossa ristiriita havaittiin. Alkuperäisessä tiedostossa säilyy etäversio. Voit vertailla molempia tiedostoja ja yhdistää sisällön manuaalisesti.

> [!info]+ Tarkista Sync-loki
> Voit tarkistaa, milloin ristiriitoja on tapahtunut, avaamalla [[Tilakuvake ja viestit#Sync-toimintaloki|Sync-lokin]]. Suodata "Yhdistämiskonfliktit" tai hae sanalla "Conflict".

### Sync poisti muistiinpanon, jonka juuri loin kahdella laitteella

Obsidian Sync yrittää tyypillisesti [[#Ristiriitojen ratkaiseminen|ratkaista ristiriidat]] yhdistämällä ristiriitaiset muistiinpanot laitteiden välillä. Ongelmia voi kuitenkin ilmetä käyttäjillä, jotka luovat tai muokkaavat muistiinpanoja automaattisesti käynnistyksen yhteydessä. Tähän kuuluvat [[Päivittäiset muistiinpanot]] tai yhteisön lisäosan [Templater](https://github.com/SilentVoid13/Templater) käyttö.

Jos luot muistiinpanon paikallisesti yhdellä laitteella ja Sync lataa muutaman minuutin sisällä saman muistiinpanon etäversion, Sync säilyttää etäversion yhdistämättä näitä kahta. Tässä tapauksessa voit palauttaa paikallisen version käyttämällä [[Tiedoston palautus|tiedoston palautusta]].

### Sync ei synkronoi lisäosien ja asetusten päivityksiä

Obsidian [[Usein kysytyt kysymykset#Lataavatko Obsidian Syncin asetukset automaattisesti uudelleen?|ei lataa kaikkia asetuksia automaattisesti uudelleen]]. Asetusten tai lisäosien päivittämisen jälkeen sinun on käynnistettävä Obsidian uudelleen muilla laitteilla nähdäksesi muutokset. Mobiililaitteilla sovellus saattaa olla tarpeen pakottaa sulkeutumaan.

> [!example]- Teeman vaihtaminen
> - Ensisijaisella laitteellasi (yleensä tietokone) vaihdat teeman takaisin oletukseen mukautetusta teemasta.
> - Sync-loki vahvistaa, että päivitetyt tiedostot lähetettiin etäholviin, mutta mobiililaitteessasi näkyy edelleen mukautettu teema.
> - Tarkista mobiililaitteella Sync-lokista, että päivitetty `appearance.json`-tiedosto on vastaanotettu.
> - Lataa uudelleen tai käynnistä Obsidian uudelleen mobiililaitteella.
> - Uudelleenlatauksen tai uudelleenkäynnistyksen jälkeen mobiililaitteen pitäisi näyttää sama teema kuin tietokoneellasi.

### Tiedostoni katoavat jatkuvasti Syncistä heti kun palautan ne

Tämä ongelma on yleisin Windowsissa. Windows Defender saattaa asettaa karanteeniin tiedostoja, joissa on koodilohkoja, mikä aiheuttaa tiettyjen muistiinpanojen katoamisen.

Toinen yleinen syy on kaksoissynkronointi. Tämä tapahtuu, kun Obsidian Sync toimii samanaikaisesti toisen synkronointipalvelun kanssa.

![[Siirtyminen Obsidian Synciin#Siirrä holvisi pois ulkoisesta synkronointipalvelusta tai pilvitallennuksesta]]

---

Lopuksi tämä voi tapahtua, kun palautat tiedoston yhdellä laitteella, mutta se poistetaan toissijaiselta laitteelta. Näin käy, kun tiedostonimessä on [[Tilakuvake ja viestit#Ohitetut-viestit|kiellettyjä merkkejä]].

## Android

**Laitteeni poistaa liitteitä, jotka vastaanotan Syncin kautta**

Tämä ongelma johtuu todennäköisesti siitä, että Google tai Android Photos hallinnoi liitteitäsi. Estä järjestelmää muokkaamasta Syncin kautta vastaanotettuja tiedostoja lisäämällä `.nomedia`-[tiedosto holviisi](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) Android-laitteellasi.

> [!tip]- Käytä lisäosaa
> Yhteisön lisäosa [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) helpottaa tätä. Asenna se Android-puhelimeesi. Huomaa, että `.nomedia`-tiedostot eivät synkronoidu laitteiden välillä Obsidian Syncin kautta.
