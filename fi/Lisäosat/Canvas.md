---
permalink: plugins/canvas
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

### Korttien lisääminen kansioista

Raahaa kansio [[Tiedostoselain|tiedostoselaimesta]] lisätäksesi kaikki kansion tiedostot valkotaululle.

### Kortin muokkaaminen

Kaksoisnapsauta teksti- tai muistiinpanokorttia aloittaaksesi sen muokkaamisen. Napsauta mitä tahansa kortin ulkopuolella lopettaaksesi muokkaamisen. Voit myös lopettaa muokkaamisen painamalla `Escape`.

Voit myös muokata korttia napsauttamalla sitä hiiren kakkospainikkeella ja valitsemalla **Muokkaa**.

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

Jos kaksi yhdistettyä korttia ovat kaukana toisistaan, voit siirtyä yhteyden lähteeseen tai kohteeseen napsauttamalla viivaa hiiren kakkospainikkeella ja valitsemalla **Siirry kohteeseen** tai **Siirry lähteeseen**.

### Leiman lisääminen yhteyteen

Voit lisätä leiman viivaan kuvataksesi kahden kortin välistä yhteyttä.

Yhteyden nimeäminen:

1. Kaksoisnapsauta viivaa.
2. Kirjoita leima ja paina `Escape` tai napsauta mitä tahansa kohtaa valkotaululla.

Voit myös nimetä yhteyden valitsemalla sen ja valitsemalla **Muokkaa leimaa** valinnan hallintatoiminnoista.

Muokataksesi yhteyden leimaa kaksoisnapsauta viivaa tai napsauta viivaa hiiren kakkospainikkeella ja valitse **Muokkaa leimaa**.

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

## Valkotaulun upottaminen

Voit upottaa valkotaulun muistiinpanoon tavallisella upotussyntaksilla. Lisätietoja on kohdassa [[Upota tiedostoja#Embed a canvas in a note|Valkotaulun upottaminen muistiinpanoon]].

## Edistyneet vinkit

Olemme tehneet lyhyitä videoita, jotka esittelevät Canvas-lisäosan edistyneitä käyttötapoja.

Voit [katsoa kaikki 72 vinkkiä täällä](https://obsidian.md/canvas#protips). Vinkkivideot näkyvät vain työpöytäversiossa.
