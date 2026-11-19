---
permalink: plugins/canvas
mobile: true
---
Canvas on [[Sisäänrakennetut lisäosat|sisäänrakennettu lisäosa]] visuaaliseen muistiinpanojen tekemiseen. Se tarjoaa rajattoman tilan muistiinpanojen asetteluun ja niiden yhdistämiseen muihin muistiinpanoihin, liitteisiin ja verkkosivuihin.

Muistiinpanojen järjestäminen kaksiulotteiseen tilaan auttaa näkemään ja ymmärtämään niiden väliset yhteydet. Yhdistä muistiinpanoja viivoilla ja ryhmittele toisiinsa liittyvät yhteen.

Obsidian tallentaa valkotaulut `.canvas`-tiedostoina avointa [JSON Canvas](https://jsoncanvas.org/) -muotoa käyttäen.

## Luo uusi valkotaulu

Canvas-lisäosan käyttäminen edellyttää tiedoston luomista valkotaulua varten. Voit luoda uuden valkotaulun seuraavilla tavoilla.

**Komentovalikko:**

1. Avaa [[Komentovalikko]].
2. Valitse **Canvas: Luo uusi valkotaulu** luodaksesi valkotaulun samaan kansioon kuin aktiivinen tiedosto.

**Tiedostoselain:**

- Napsauta [[Tiedostoselain|tiedostoselaimessa]] hiiren kakkospainikkeella kansiota, johon haluat luoda valkotaulun.
- Valitse **Uusi valkotaulu**.

**Nauha:**

- Valitse pystysuuntaisessa nauhavalikossa **Luo uusi valkotaulu** ![[lucide-layout-dashboard.svg#icon]] luodaksesi valkotaulun samaan kansioon kuin aktiivinen tiedosto.

> [!note] .canvas-tiedostopääte
> Obsidian tallentaa valkotaulun tiedot `.canvas`-tiedostoina käyttäen avointa tiedostomuotoa nimeltä [JSON Canvas](https://jsoncanvas.org/).

## Korttien lisääminen

Voit raahata tiedostoja valkotaululle Obsidianista tai muista sovelluksista. Esimerkiksi Markdown-tiedostoja, kuvia, äänitiedostoja, PDF-tiedostoja tai jopa tunnistamattomia tiedostotyyppejä.

### Tekstikorttien lisääminen

Voit lisätä pelkästään tekstiä sisältäviä kortteja, jotka eivät viittaa mihinkään tiedostoon. Voit käyttää Markdownia, linkkejä ja koodilohkoja samalla tavalla kuin muistiinpanossa.

Uuden tekstikortin lisääminen valkotaululle:

- Valitse tai raahaa tyhjän tiedoston kuvake valkotaulun alaosasta.

Voit myös lisätä tekstikortteja kaksoisnapsauttamalla valkotaulua.

Tekstikortin muuntaminen tiedostoksi:

1. Napsauta tekstikorttia hiiren kakkospainikkeella ja valitse **Muunna tiedostoksi...**.
2. Kirjoita muistiinpanon nimi ja valitse **Tallenna**.

> [!note] Tekstikortit ja paluulinkit
> Pelkät tekstikortit eivät näy [[Paluulinkit|paluulinkeissä]]. Jotta ne näkyisivät, sinun täytyy muuntaa ne tiedostoksi.

### Korttien lisääminen muistiinpanoista

Muistiinpanon lisääminen holvistasi valkotaululle:

1. Valitse tai raahaa asiakirjakuvake valkotaulun alaosasta.
2. Valitse muistiinpano, jonka haluat lisätä.

Voit myös lisätä muistiinpanoja valkotaulun kontekstivalikosta:

1. Napsauta valkotaulua hiiren kakkospainikkeella ja valitse **Lisää muistiinpano holvista**.
2. Valitse muistiinpano, jonka haluat lisätä.

Voit myös raahata muistiinpanoja [[Tiedostoselain|tiedostoselaimesta]] valkotaululle.

Jos haluat näyttää kortissa vain osan muistiinpanosta, napsauta korttia hiiren kakkospainikkeella ja valitse **Typistä osioon...** tai **Typistä lohkoon...**. Valitse sitten otsikko tai lohko.

### Korttien lisääminen mediatiedostoista

Median lisääminen holvistasi valkotaululle:

1. Valitse tai raahaa kuvatiedoston kuvake valkotaulun alaosasta.
2. Valitse mediatiedosto, jonka haluat lisätä.

Voit myös lisätä mediaa valkotaulun kontekstivalikosta:

1. Napsauta valkotaulua hiiren kakkospainikkeella ja valitse **Lisää mediaa holvista**.
2. Valitse mediatiedosto, jonka haluat lisätä.

Voit myös raahata mediatiedostoja [[Tiedostoselain|tiedostoselaimesta]] valkotaululle.

### Korttien lisääminen verkkosivuista

Verkkosivun upottaminen valkotaululle:

1. Napsauta valkotaulua hiiren kakkospainikkeella ja valitse **Lisää verkkosivu**.
2. Kirjoita verkkosivun URL-osoite ja valitse **Tallenna**.

Voit myös valita URL-osoitteen selaimessasi ja raahata sen valkotaululle upottaaksesi sen korttiin.

Avataksesi verkkosivun selaimessa, paina `Ctrl` (tai `Cmd` macOS:ssä) ja napsauta kortin leimaa. Tai napsauta korttia hiiren kakkospainikkeella ja valitse **Avaa selaimessa**.

Napsauta verkkosivu-korttia hiiren kakkospainikkeella saadaksesi lisää vaihtoehtoja.

- **Kopioi osoite** kopioi verkkosivun osoitteen.
- **Vaihda osoite...** vaihtaa kortin näyttämän osoitteen.
- **Lataa sivu uudelleen** lataa verkkosivun uudelleen.

### Korttien lisääminen kannoista

Näyttääksesi [[Johdanto kantoihin|kannan]] valkotaulullasi, raahaa kantatiedosto tiedostoselaimesta valkotaululle. Kortti näyttää kannan.

Kantakortti näyttää kannan oletusnäkymän. Näyttääksesi eri näkymän:

1. Napsauta korttia hiiren kakkospainikkeella ja valitse **Kiinnitä näkymä...**.
2. Valitse haluamasi näkymä.

Palataksesi oletusnäkymään, valitse **Kiinnitä näkymä...** uudelleen ja valitse sitten **Näytä oletusnäkymä**.

### Korttien lisääminen kansioista

Raahaa kansio [[Tiedostoselain|tiedostoselaimesta]] lisätäksesi kaikki kansion tiedostot valkotaululle.

### Kortin muokkaaminen

Kaksoisnapsauta teksti- tai muistiinpanokorttia aloittaaksesi sen muokkaamisen. Napsauta mitä tahansa kortin ulkopuolella lopettaaksesi muokkaamisen. Voit myös lopettaa muokkaamisen painamalla `Escape`.

Voit myös muokata korttia napsauttamalla sitä hiiren kakkospainikkeella ja valitsemalla **Muokkaa**. Tai valitse kortti ja valitse sitten **Muokkaa** ![[lucide-square-pen.svg#icon]] valinnan hallintatoiminnoista.

### Kortin poistaminen

Poista valitut kortit napsauttamalla mitä tahansa niistä hiiren kakkospainikkeella ja valitsemalla **Poista**. Tai paina `Backspace` (tai `Delete` macOS:ssä).

Voit myös valita **Poista** ![[lucide-trash-2.svg#icon]] valinnan yläpuolella olevista hallintatoiminnoista.

### Korttien vaihtaminen

Voit vaihtaa muistiinpano- tai mediakortin toiseen samanlaiseen korttiin.

Muistiinpanokortin vaihtaminen:

1. Napsauta korvattavaa korttia hiiren kakkospainikkeella.
2. Valitse **Vaihda tiedosto**.
3. Valitse muistiinpano, johon haluat vaihtaa.

## Korttien valitseminen

Valitse yksittäisiä kortteja tai raahaa valinta-alue useiden korttien ympärille.

Voit myös lisätä ja poistaa kortteja olemassa olevasta valinnasta painamalla `Shift` ja napsauttamalla niitä.

Paina `Ctrl+a` (tai `Cmd+a` macOS:ssä) valitaksesi kaikki valkotaulun kortit.

Vierittääksesi kortin sisältöä sinun täytyy ensin valita se.

### Korttien järjestäminen

Raahaa valittua korttia siirtääksesi sitä.

Paina `Alt` (tai `Option` macOS:ssä) ja raahaa kahdentaaksesi valinnan.

Voit painaa `Shift` raahaamisen aikana siirtääksesi korttia vain yhteen suuntaan.

Paina `Space` valinnan siirtämisen aikana poistaaksesi kohdistuksen käytöstä.

Kortin valitseminen tuo sen etualalle.

### Kortin koon muuttaminen

Raahaa kortin mitä tahansa reunaa muuttaaksesi sen kokoa.

Voit painaa `Space` koon muuttamisen aikana poistaaksesi kohdistuksen käytöstä.

Säilyttääksesi kuvasuhteen koon muutoksen aikana, pidä `Shift` painettuna.

### Korttien kohdistaminen ja järjestely

Voit kohdistaa useita kortteja valitsemalla kaksi tai useampia kortteja. Valitse hallintatoiminnoista **Asettele** ja valitse sitten vaihtoehto.

- **Aseta vasemmalle**, **Aseta keskelle** ja **Aseta oikealle** kohdistaa kortit pystysuoralle linjalle.
- **Aseta ylös**, **Aseta puoliväliin** ja **Aseta alas** kohdistaa kortit vaakasuoralle linjalle.
- **Järjestä riviin**, **Järjestä sarakkeeseen** ja **Järjestä ruudukkoon** siirtävät kortit kyseiseen asetteluun.
- **Hajauta vaakasuoraan** ja **Hajauta pystysuoraan** jakavat korttien välit tasaisesti.
- **Tasaa vaakasuoraan** ja **Tasaa pystysuoraan** muuttavat jokaisen kortin kokoa vastaamaan valinnan koko leveyttä tai korkeutta.

## Korttien yhdistäminen

Piirrä viivoja korttien välille yhteyksien näyttämiseksi. Lisää värejä ja leimoja kuvaamaan, miten ne liittyvät toisiinsa.

### Kahden kortin yhdistäminen

Kahden kortin yhdistäminen suunnatulla viivalla:

1. Vie kohdistin kortin reunan päälle, kunnes näet täytetyn ympyrän.
2. Raahaa ympyrä toisen kortin reunaan yhdistääksesi ne.

> [!tip]- Luo kortti uudesta yhteydestä
> Jos raahaat viivan yhdistämättä sitä toiseen korttiin, voit luoda uuden kortin viivan toiseen päähän.

### Kahden kortin yhteyden poistaminen

Kahden kortin välisen yhteyden poistaminen:

1. Vie kohdistin yhteysviivan päälle, kunnes viivalle ilmestyy kaksi pientä ympyrää.
2. Raahaa yksi ympyröistä pois kortista yhdistämättä sitä toiseen.

Voit myös katkaista kahden kortin yhteyden napsauttamalla niiden välistä viivaa hiiren kakkospainikkeella ja valitsemalla **Poista**. Tai valitsemalla viivan ja painamalla `Backspace` (tai `Delete` macOS:ssä).

### Kortin yhdistäminen eri korttiin

Yhteysviivan toisen pään siirtäminen:

1. Vie kohdistin yhteysviivan päälle, kunnes viivalle ilmestyy kaksi pientä ympyrää.
2. Raahaa ympyrä toisen kortin päälle yhdistääksesi sen uudelleen.

### Yhteyden seuraaminen

Jos kaksi yhdistettyä korttia ovat kaukana toisistaan, voit siirtyä yhteyden toisessa päässä olevaan korttiin. Napsauta viivaa hiiren kakkospainikkeella lähellä toista päätä ja valitse **Seuraa yhteyttä**. Valkotaulu siirtyy vastakkaisen pään korttiin.

### Leiman lisääminen yhteyteen

Voit lisätä leiman viivaan kuvataksesi kahden kortin välistä yhteyttä.

Yhteyden nimeäminen:

1. Kaksoisnapsauta viivaa.
2. Kirjoita leima ja paina `Escape` tai napsauta mitä tahansa kohtaa valkotaululla.

Voit myös nimetä yhteyden valitsemalla sen ja valitsemalla **Muokkaa leimaa** valinnan hallintatoiminnoista.

Muokataksesi yhteyden leimaa kaksoisnapsauta viivaa tai napsauta viivaa hiiren kakkospainikkeella ja valitse **Muokkaa leimaa**.

Poistaaksesi leiman valitse yhteys ja valitse sitten **Poista leima** valinnan hallintatoiminnoista.

### Yhteyden suunnan muuttaminen

Oletuksena yhteydessä on nuoli, joka osoittaa toiseen korttiin. Voit muuttaa tätä:

1. Valitse yhteys.
2. Valitse hallintatoiminnoista **Viivan suunta**.
3. Valitse **Suuntaamaton**, **Yksisuuntainen** tai **Kaksisuuntainen**.

### Kortin tai yhteyden värin muuttaminen

1. Valitse kortit tai yhteydet, joiden värin haluat muuttaa.
2. Valitse hallintatoiminnoista **Aseta väri** ![[lucide-palette.svg#icon]].
3. Valitse väri.

## Korttien ryhmittely

### Valittujen korttien ryhmittely

Tyhjän ryhmän luominen:

- Napsauta valkotaulua hiiren kakkospainikkeella ja valitse **Luo ryhmä**.

Toisiinsa liittyvien korttien ryhmittely:

1. Valitse kortit.
2. Napsauta mitä tahansa valittua korttia hiiren kakkospainikkeella ja valitse **Luo ryhmä**.

**Ryhmän nimeäminen uudelleen:** Kaksoisnapsauta ryhmän nimeä muokataksesi sitä ja paina `Enter` tallentaaksesi.

### Taustan lisääminen ryhmään

Voit näyttää kuvan korttien takana ryhmässä.

1. Valitse ryhmä.
2. Valitse hallintatoiminnoista **Aseta tausta**.
3. Valitse kuva holvistasi.

Voit muuttaa taustaa valitsemalla ryhmän ja valitsemalla **Muokkaa taustaa**.

- **Korvaa tausta** valitsee toisen kuvan.
- **Poista tausta** poistaa kuvan.
- **Peitä** tekee kuvasta ryhmän kokoisen.
- **Pidä kuvasuhde** säilyttää kuvan mittasuhteet.
- **Toista** toistaa kuvan ruudukkona ryhmän alueella.

## Valkotaululla liikkuminen

Käytä liikkumista ja suurentamista/pienentämistä siirtyäksesi valkotaulun eri osiin.

### Valkotaululla liikkuminen

Valkotaulun siirtämiseen pysty- ja vaakasuunnassa, eli _liikkumiseen_, voit käyttää mitä tahansa seuraavista tavoista:

- Paina `Space` ja raahaa valkotaulua.
- Raahaa valkotaulua hiiren keskipainikkeella.
- Vieritä hiirellä liikkuaksesi pystysuunnassa ja paina `Shift` vierittäessä liikkuaksesi vaakasuunnassa.

### Valkotaulun suurentaminen ja pienentäminen

Suurentaaksesi tai pienentääksesi valkotaulua paina `Space` tai `Ctrl` (tai `Cmd` macOS:ssä) ja vieritä hiiren rullaa. Tai valitse **Lähennä** ![[lucide-plus.svg#icon]] ja **Loitonna** ![[lucide-minus.svg#icon]] oikean yläkulman suurennussäätimistä.

#### Loitonna koko taulu näkymään

Suurentaaksesi tai pienentääksesi valkotaulun niin, että jokainen elementti on näkyvissä, valitse **Loitonna koko taulu näkymään** ![[lucide-maximize.svg#icon]]. Tai käytä pikanäppäintä `Shift+1`.

#### Lähennä valintaan

Suurentaaksesi valkotaulun niin, että kaikki valitut elementit ovat näkyvissä, napsauta valittua korttia hiiren kakkospainikkeella ja valitse **Lähennä valintaan**. Tai paina `Shift+2`.

#### Palauta mittakaava

Palauttaaksesi suurennustason oletusarvoon, valitse **Palauta mittakaava** oikean yläkulman suurennussäätimistä.

### Siirry ryhmään

Siirtyäksesi suoraan ryhmään suurella valkotaululla, avaa komentovalikko ja valitse **Canvas: Siirry ryhmään**. Näkyviin tulee luettelo valkotaulun ryhmistä. Valitse ryhmä, johon haluat siirtyä, ja valkotaulu keskittyy siihen.

## Valkotaulun asetukset

Valitse **Valkotaulun asetukset** ![[lucide-settings.svg#icon]] valkotaulun säätimien yläpuolelta muuttaaksesi valkotaulun toimintaa.

- **Kiinnitä ruudukkoon** kiinnittää kortit taustan ruudukkoon, kun siirrät tai muutat niiden kokoa.
- **Kiinnitä muihin esineisiin** kiinnittää kortit lähellä oleviin kortteihin, kun siirrät tai muutat niiden kokoa.
- **Lukutila** estää muutosten tekemisen valkotaululle.

## Valkotaulun vieminen kuvana

Voit viedä valkotaulun PNG-kuvana työpöytäsovelluksessa. Kuvan vieminen ei ole käytettävissä Obsidianin mobiilisovelluksessa.

1. Avaa valkotaulu, jonka haluat viedä.
2. Avaa komentovalikko ja valitse **Canvas: Vie kuvana**.
3. Valitse asetukset.
    - **Kuvassa näkyvä osa** määrittää vietävän alueen. Valitse **Koko taulu** koko valkotaululle tai **Vain näkyvä osa** parhaillaan näkyvissä olevalle osalle.
    - **Suurenna/pienennä** määrittää kuvan laadun. Suurempi arvo tuottaa isomman ja tarkemman kuvan. Ikkunassa näkyy arvio kuvan koosta.
    - **Näytä logo** lisää Obsidian-logon vasempaan alakulmaan. Tämä on oletuksena päällä.
    - **Yksityinen tila** piilottaa kaiken tekstin valkotaulultasi. Tämä on oletuksena pois päältä.
4. Valitse **Tallenna**.
5. Valitse tallennuspaikka. Tiedostonimeksi tulee oletuksena valkotaulun nimi `.png`-päätteellä.

Tyhjää valkotaulua ei voi viedä.

## Kumoa ja tee uudelleen

Kumotaksesi viimeisimmän muutoksen valitse **Kumoa** valkotaulun oikealla puolella olevista säätimistä. Tai paina `Ctrl+Z` (Windows ja Linux) tai `Command+Z` (macOS).

Tehdäksesi muutoksen uudelleen valitse **Tee uudelleen**. Tai paina `Ctrl+Y` tai `Ctrl+Shift+Z` (Windows ja Linux) tai `Command+Y` tai `Command+Shift+Z` (macOS).

## Valkotaulun ohje

Työpöytäversiossa valitse **Valkotaulun ohje** ![[lucide-help-circle.svg#icon]] valkotaulun säätimien alapuolelta nähdäksesi luettelon pikanäppäimistä liikkumiseen, suurentamiseen/pienentämiseen, valitsemiseen ja korttien siirtämiseen.

## Valkotaulun upottaminen

Voit upottaa valkotaulun muistiinpanoon tavallisella upotussyntaksilla. Lisätietoja on kohdassa [[Upota tiedostoja#Embed a canvas in a note|Valkotaulun upottaminen muistiinpanoon]].

## Valkotaulun käyttö mobiilissa

Kun avaat valkotaulun puhelimella tai tabletilla, Obsidian näyttää kolme vihjettä.

- **Liiku raahaamalla**
- **Suurenna nipistämällä**
- **Lisää/liikuta/valitse pitämällä pohjassa**

### Valkotauluvalikon avaaminen

Paina ja pidä tyhjää aluetta valkotaululla. Valikossa on seuraavat vaihtoehdot.

- **Lisää kortti** lisää tekstikortin.
- **Lisää muistiinpano holvista** lisää muistiinpanon holvistasi.
- **Lisää mediaa holvista** lisää mediaa holvistasi.
- **Lisää verkkosivu** upottaa verkkosivun.
- **Luo ryhmä** luo tyhjän ryhmän.
- **Kiinnitä ruudukkoon**, **Kiinnitä muihin esineisiin** ja **Lukutila** ovat samat asetukset kuin **Valkotaulun asetuksissa**.

### Korttien lisääminen

Voit lisätä kortteja valkotauluvalikosta. Voit myös valita kuvakkeen valkotaulun alaosasta.

- Tyhjän tiedoston kuvake lisää tekstikortin.
- Asiakirjakuvake lisää muistiinpanon holvistasi.
- Kuvakuvake lisää mediaa holvistasi.

### Valitun kortin käsittely

Napauta korttia valitaksesi sen. Kortin yläpuolelle ilmestyy työkalupalkki.

- **Poista** ![[lucide-trash-2.svg#icon]] poistaa kortin.
- **Aseta väri** ![[lucide-palette.svg#icon]] muuttaa kortin väriä.
- **Lähennä valintaan** lähentää valkotaulun korttiin.
- **Muokkaa** ![[lucide-square-pen.svg#icon]] muokkaa korttia.

### Kortin siirtäminen

1. Napauta korttia valitaksesi sen.
2. Paina ja pidä valittua korttia ja raahaa se uuteen paikkaan.

### Kortin koon muuttaminen

1. Napauta korttia valitaksesi sen.
2. Raahaa kortin reunoja suurentaaksesi tai pienentääksesi sitä.

### Korttivalikon avaaminen

Paina ja pidä korttia. Valikossa on seuraavat vaihtoehdot.

- **Lähennä valintaan** lähentää valkotaulun korttiin.
- **Muokkaa** muokkaa korttia.
- **Muunna tiedostoksi...** muuntaa tekstikortin muistiinpanoksi.
- **Tee kopio** tekee kopion kortista.
- **Poista** poistaa kortin.

### Kortin muokkaaminen

Teksti- tai muistiinpanokortin muokkaamiseen voit käyttää kumpaa tahansa tapaa.

- Napauta korttia valitaksesi sen ja kaksoisnapauta sitä. Näppäimistö avautuu.
- Napauta korttia valitaksesi sen ja valitse sitten **Muokkaa** ![[lucide-square-pen.svg#icon]] kortin yläpuolella olevasta työkalupalkista.

### Yhteyden nimeäminen

1. Napauta viivaa valitaksesi sen.
2. Valitse työkalupalkista **Muokkaa leimaa** ![[lucide-square-pen.svg#icon]]. Näppäimistö avautuu.
3. Kirjoita leima.

Poistaaksesi leiman napauta viivaa ja valitse sitten **Poista leima** työkalupalkista.

### Yhteyden suunnan muuttaminen

1. Napauta viivaa valitaksesi sen.
2. Valitse työkalupalkista **Viivan suunta**.
3. Valitse **Suuntaamaton**, **Yksisuuntainen** tai **Kaksisuuntainen**.

### Viivalikon avaaminen

Paina ja pidä kahden kortin välistä viivaa. Valikossa on seuraavat vaihtoehdot.

- **Muokkaa leimaa** lisää tai muuttaa viivan leimaa.
- **Seuraa yhteyttä** siirtää valkotaulun viivan toisessa päässä olevaan korttiin.
- **Poista** poistaa yhteyden.

### Korttien yhdistäminen

1. Napauta korttia valitaksesi sen.
2. Raahaa yksi kortin reunojen ympyröistä toiseen korttiin.

Jos raahaat viivan ja päästät irti tyhjään kohtaan, valikko avautuu vaihtoehdoilla **Lisää kortti** ja **Lisää muistiinpano holvista**. Valitse yksi lisätäksesi kortin viivan päähän.

### Korttien yhteyden katkaiseminen

Yhteyden poistamiseen voit käyttää kumpaa tahansa tapaa.

- Napauta viivaa ja valitse **Poista** ![[lucide-trash-2.svg#icon]].
- Raahaa viivan nuolipää takaisin korttiin, josta se lähti. Viiva katoaa.

### Korttien ryhmittely

Ryhmän luominen:

1. Paina ja pidä tyhjää aluetta valkotaululla.
2. Valitse **Luo ryhmä**.
3. Raahaa ryhmän reunoja muuttaaksesi sen kokoa.

Lisätäksesi kortteja ryhmään raahaa ne ryhmän alueelle. Kun siirrät ryhmää, sen sisällä olevat kortit siirtyvät mukana.

Nimeäksesi ryhmän uudelleen kaksoisnapauta sen nimeä. Näppäimistö avautuu. Kirjoita uusi nimi.

### Valkotaulun säätimet

Valkotaulun oikealla puolella olevat säätimet muuttavat näkymää ja asetuksia.

- **Lähennä** ja **Loitonna** muuttavat suurennustasoa.
- **Palauta mittakaava** palauttaa valkotaulun oletusmittakaavaan.
- **Loitonna koko taulu näkymään** näyttää kaikki valkotaulun kortit.
- **Kumoa** ja **Tee uudelleen** kumoavat tai toistavat viimeisimmän muutoksen.
- **Valkotaulun asetuksissa** on vaihtoehdot **Kiinnitä ruudukkoon**, **Kiinnitä muihin esineisiin** ja **Lukutila**.

## Edistyneet vinkit

Olemme tehneet lyhyitä videoita, jotka esittelevät Canvas-lisäosan edistyneitä käyttötapoja.

Voit [katsoa kaikki 72 vinkkiä täällä](https://obsidian.md/canvas#protips). Vinkkivideot näkyvät vain työpöytäversiossa.
