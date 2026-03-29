---
permalink: style-guide
publish: true
mobile: true
description: Tämä sivu selittää tukidokumentaatiomme kirjoittamisessa käytettävän tyylioppaan.
---
Obsidianin dokumentaatio noudattaa tällä sivulla lueteltuja tyylioppaita. Nämä ohjeet perustuvat alan parhaisiin käytäntöihin, erityisesti [Googlen kehittäjädokumentaation tyylioppaaseen](<https://developers.google.com/style>) ja [Microsoftin tyylioppaaseen](https://learn.microsoft.com/en-us/style-guide/). Tapauksissa, joita ei käsitellä alla, voit hyödyntää näitä ulkoisia oppaita toissijaisina lähteinä.

> [!tip]- Osallistu
> Suurin osa dokumentaatiosta oli olemassa ennen tämän tyylioppaiden luomista.
> 
> Jos löydät tämän tyylioppaiden vastaisia kohtia, [luo ongelmaraportti](https://github.com/obsidianmd/obsidian-docs/issues/new) ja lähetä pull request osoitteeseen [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Termistö ja kielioppi

### Kielityyli

Englanninkielisessä dokumentaatiossamme suositellaan käyttämään [Global Englishia](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html), jotta se palvelisi paremmin maailmanlaajuista yleisöämme ja helpottaisi [[#Käännökset|käännöksiä]]. Tämä tarkoittaa:

- Idiomien ja kulttuurisidonnaisten ilmausten välttämistä
- Aktiivimuodon ja suoran lauserakenteen käyttämistä
- Yksinkertaisten, yleisten sanojen suosimista monimutkaisen termistön sijaan
- Selkeää ilmaisua vihjailun sijaan
- Oikeinkirjoituskäytännöissä käytetään amerikkalaista englantia (esim. 'organize' eikä 'organise').

### Termit

- Suosi "keyboard shortcut" sijaan "hotkey". Käytä Hotkey-termiä, kun viitataan nimenomaiseen ominaisuuteen.
- Suosi "the Obsidian app" mobiilissa ja "the Obsidian application" työpöydällä.
- Suosi "sync" tai "syncing" sijaan "synchronise" tai "synchronising".
- Suosi "search term" sijaan "search query".
- Suosi "heading" sijaan "header", kun viitataan osion esittelytekstiin.
- Suosi "maximum" sijaan "max" ja "minimum" sijaan "min".

### Tuotteiden nimet

Obsidianin tuotteiden nimet alkavat sanalla "Obsidian", esimerkiksi "Obsidian Publish" ja "Obsidian Sync".

Jos kappaleesta tulee liian toisteinen, voit käyttää lyhyttä muotoa myöhemmissä viittauksissa.

Esimerkiksi:

_Laitekohtaisen kokoonpanon mahdollistamiseksi Obsidian Sync ei synkronoi omia asetuksiaan. Sinun täytyy määrittää Sync jokaiselle laitteellesi erikseen._

### Käyttöliittymä ja vuorovaikutus

- Käytä **lihavointia** ilmaisemaan painikkeen tekstiä
- Suosi "select" sijaan "tap" tai "click".
	- Mobiilikohtaisissa ohjeissa "tap" on hyväksyttävä kuvattaessa kosketusvuorovaikutuksia, koska "click" ei ole käytettävissä.
- Suosi "sidebar" sijaan "side bar".
- Suosi "perform" sijaan "invoke" ja "execute", kun viitataan komentoihin tai toimintoihin.

Kun viitataan useisiin peräkkäisiin käyttöliittymätoimintoihin, käytä → (U+2192) -symbolia. Esimerkiksi "**[[Asetukset]] → Yhteisön lisäosat**".

### Muistiinpanot, tiedostot ja kansiot

- Käytä "muistiinpano", kun viitataan Markdown-tiedostoon holvissa.
- Käytä "tiedosto", kun viitataan muihin tiedostopäätteisiin kuin Markdown.
- Suosi "muistiinpanon nimi" sijaan "muistiinpanon otsikko".
- Suosi "aktiivinen muistiinpano" sijaan "nykyinen muistiinpano".
- Suosi "kansio" sijaan "hakemisto".
- Suosi "tiedostotyyppi" sijaan "tiedostomuoto", ellei nimenomaisesti viitata tiedoston sisällön dataformaattiin.

Kun siirrytään muistiinpanojen välillä, käytä "avaa" jos kohde on piilotettu, ja "vaihda" jos sekä lähde- että kohdemuistiinpanot ovat auki erillisissä jakaumissa.

### Asetusten viitedokumentaatio

Mahdollisuuksien mukaan asetukset tulisi dokumentoida Obsidianin sisällä kuvaavalla tekstillä. Vältä yksittäisen asetuksen dokumentoimista Obsidian-ohjeessa, ellei:

- Se vaadi syvällisempää tietoa siitä, miten ja milloin sitä käytetään.
- Se on yleisesti väärin käytetty tai siitä kysytään usein.
- Se muuttaa _merkittävästi_ käyttäjäkokemusta.

Harkitse vinkki-nostolaatikon käyttämistä, jos haluat kiinnittää huomion tiettyyn asetukseen.

### Suuntaa ilmaisevat termit

Yhdistä suuntaa ilmaisevat termit yhdysmerkillä, kun käytät niitä adjektiiveina. Vältä yhdysmerkkiä, kun suuntaa käytetään substantiivina.

**Suositeltu:**

- Valitse **[[Asetukset]]** vasemmasta alakulmasta.
- Valitse **[[Asetukset]]** vasemmasta alareunasta.

**Ei suositeltu:**

- Valitse **[[Asetukset]]** vasemman alakulman kohdalta (virheellinen muoto).

Älä ilmaise suuntaa viitatessasi asetuksiin. Asetusvalitsimen sijainti riippuu laitteesta.

**Suositeltu:**

- Valitse **Valitse** kohdan **Valitse etäholvi** vierestä.

**Ei suositeltu:**

- Valitse **Valitse** kohdan **Valitse etäholvi** oikealta puolelta.

Käytä "yläpuolella" ja "alapuolella" kuvattaessa pystysuuntaisia suhteita käyttöliittymäelementeissä. Vältä epämääräisiä ilmauksia.

**Suositeltu:**

- Hakukenttä näkyy tiedostoluettelon yläpuolella.
- Lisävaihtoehtoja on saatavilla alapuolella.

**Ei suositeltu:**

- Hakukenttä on ylhäällä tiedostoluettelosta.
- Lisää vaihtoehtoja on alhaalla.

### Ohjeet

Käytä imperatiivimuotoa oppaiden nimissä, osio-otsikoissa ja vaiheittaisissa ohjeissa. Imperatiivimuoto on tiivis ja toimintaan suuntautunut, mikä on suoraviivaisempaa ohjeita seuraaville käyttäjille.

- Suosi "Ota käyttöön" sijaan "Käyttöönotto"
- Suosi "Siirrä tiedosto" sijaan "Tiedoston siirtäminen"
- Suosi "Tuo muistiinpanosi" sijaan "Muistiinpanojen tuominen"

### Virkemuoto

Suosi *virkemuotoa* *otsikkomuodon* sijaan otsikoissa, painikkeissa ja nimikkeissä. Kun viitataan käyttöliittymäelementteihin, käytä aina samaa kirjainkokoa kuin käyttöliittymässä.

**Suositeltu:**

- Miten Obsidian tallentaa tietoja

**Ei suositeltu:**

- Miten Obsidian Tallentaa Tietoja

### Esimerkit

Suosi realistisia esimerkkejä merkityksettömien termien sijaan.

**Suositeltu:**

- `task:(call OR schedule)`

**Ei suositeltu:**

- `task:(foo OR bar)`

### Näppäinten nimet ja pikanäppäimet

Kun viitataan näppäimistön näppäimiin ja pikanäppäimiin, käytä yhdenmukaista merkintätapaa.

**Yksittäisten näppäinten nimet:**

Kun viitataan näppäimistön merkkiin nimellä, lisää merkki sulkeisiin nimen jälkeen.

**Suositeltu:**

- Paina tavuviiva (-) -näppäintä lisätäksesi viivan.
- Käytä kysymysmerkkiä (?) hakuun.

**Ei suositeltu:**

- Paina tavuviivanäppäintä lisätäksesi viivan.
- Käytä ?-merkkiä hakuun.
- Lisää `-` sanan eteen.

**Pikanäppäimet:**

Muotoile pikanäppäimet ilman välilyöntejä plus-merkin ympärillä. Kun pikanäppäin eroaa käyttöjärjestelmien välillä, ilmoita molemmat.

**Suositeltu:**

- Paina `Ctrl+Z` (Windows) tai `Command+Z` (macOS) kumotaksesi.
- Paina `Escape` sulkeaksesi tämän ikkunan.
- Käytä `Tab`-näppäintä siirtyäksesi kenttien välillä.

**Ei suositeltu:**

- Paina `Cmd+Z` kumotaksesi.
- Paina `Ctrl + Z` (välilyönneillä) kumotaksesi.
- Paina `Ctrl/Cmd+Z` kumotaksesi.

Pikanäppäimille, jotka ovat samat kaikilla alustoilla, käyttöjärjestelmää ei tarvitse mainita. Jos olet epävarma, eroavatko pikanäppäimet alustoittain, ilmoita käyttöjärjestelmä varmuuden vuoksi. Windows ja Linux käyttävät yleensä samoja pikanäppäimiä.

### Markdown

Käytä tyhjäriviä Markdown-lohkojen välissä:

**Suositeltu:**

```md
# Otsikko 1

Tämä on osio.

1. Ensimmäinen kohta
2. Toinen kohta
3. Kolmas kohta
```

**Ei suositeltu:**

```md
# Otsikko 1
Tämä on osio.
1. Ensimmäinen kohta
2. Toinen kohta
3. Kolmas kohta
```

**Ajatusviivat luetteloissa:**

Käytä ajatusviivoja (—) erottamaan lihavoidut termit kuvauksistaan luetteloissa. Älä käytä ajatusviivoja yksinkertaisissa sisennetyissä luetteloissa, joissa on linkkejä.

**Suositeltu:**

- **Näkymävalikko** — luo, muokkaa ja vaihda näkymiä.
- **Laske arvoja** — lisää hintoja, laske yhteissummia tai suorita matemaattisia operaatioita.

**Ei suositeltu:**

- [[Luo kanta]] — Opi luomaan ja upottamaan tietokanta.

### Kuvat

Käytä "**leveys** x **korkeus** pikseliä" kuvattaessa kuvan tai näytön mittoja.

**Esimerkki:**

Suositellut kuvan mitat: 1920 x 1080 pikseliä.

## Tietorakenne

### Nostolaatikkotyypit

Käytä nostolaatikoita strategisesti korostaaksesi tietyntyyppistä tietoa:

**Vinkki** (`[!tip]-`) - Käytännön neuvoja tai parhaita käytäntöjä, jotka tehostavat käyttäjän työnkulkua. Käytä pikanäppäimille, kiertoteille tai ei-välttämättömälle mutta hyödylliselle tiedolle. Nämä nostolaatikot ovat oletuksena kutistettuja.

**Tietoa** (`[!info]+`) - Lisäkontekstia, taustatietoa tai tarkennuksia. Käytä, kun tieto lisää ymmärrystä mutta ei ole välttämätöntä tehtävän suorittamiseen. Nämä nostolaatikot ovat oletuksena laajennettuja.

**Varoitus** (`[!warning]+`) - Tärkeitä varoituksia, jotka estävät tietojen menetyksen, virheet tai tahattomat seuraukset. Käytä säästeliäästi aidosti riskialttiissa tilanteissa. Näitä nostolaatikoita ei pitäisi koskaan kutistaa.

**Esimerkki** (`[!example]-`) - Yleisiä huomautuksia tai täydentäviä yksityiskohtia. Käytä sivuhuomautuksille, jotka jotkut käyttäjät voivat kokea oleellisiksi. Nämä nostolaatikot ovat oletuksena kutistettuja.

**Esimerkkejä:**
```md
> [!tip]- Käytä pikanäppäimiä
> Voit nopeuttaa työnkulkuasi opettelemalla eniten käytetyt pikanäppäimet.

> [!info]+ Tämä on maksullinen lisäosa
> Tämän ominaisuuden käyttö edellyttää maksullista tilausta.

> [!warning]+ Tätä toimintoa ei voi kumota
> Holvin poistaminen on pysyvää. Harkitse muistiinpanojesi vientiä ensin.

> [!example]- Edistynyt käyttö
> Voit myös määrittää tämän asetuksen Verkkonäkymä-valikon kautta.
```

### Luettelot vs. proosa

Käytä luetteloita esitettäessä erillisiä kohteita, joilla ei ole vahvoja peräkkäisiä tai kausaalisia suhteita. Käytä proosaa ja kappaleita, kun kohteet rakentuvat toistensa päälle, vaativat selitystä tai hyötyvät kerronnallisesta kulusta.

**Käytä luetteloa:**
- Joukko toisiinsa liittymättömiä ominaisuuksia
- Asennusvaatimukset
- Asetusvalinnat
- Vianmääritysvaiheet

**Käytä proosaa:**
- Selitykset siitä, miten jokin toimii
- Työnkulut riippuvuuksineen
- Käsitteelliset yleiskatsaukset
- Ohjeistus, joka vaatii kontekstia

### Taulukot

Käytä taulukoita ominaisuuksien, versioiden tai toisiinsa liittyvien datapisteiden vertailuun, kun kohdistaminen auttaa ymmärtämistä. Vältä taulukoita yksinkertaisille luetteloille tai yhden sarakkeen datalle.

**Hyvä käyttötapaus:**

| Ominaisuus | Mobiili | Työpöytä |
|------------|---------|----------|
| Sync | Kyllä | Kyllä |
| Lisäosat | Ei | Kyllä |
| Teemat | Rajoitettu | Täysi |

### Ristiviittaukset

Käytä sisäisiä wikilinkkejä (`[[Muistiinpanon nimi]]`) runsaasti auttaaksesi käyttäjiä navigoimaan liittyviin aiheisiin. Vältä kuitenkin liikaa linkittämistä:

- Älä linkitä samaa termiä useita kertoja yhdellä sivulla
- Linkitä vain silloin, kun viitattu sivu tarjoaa merkittävää lisäkontekstia
- Käytä kuvaavaa linkkitekstiä tarvittaessa: `[[Muistiinpanon nimi#Osio|kuvaava teksti]]`

**Esimerkki:**

Ensimmäinen maininta: "Tutustu [[Johdanto Obsidian Synciin|Obsidian Synciin]] pitääksesi holvisi ajan tasalla laitteiden välillä."
Myöhempi maininta: "Voit määrittää Syncin erikseen jokaiselle laitteelle."

### Alustakohtainen sisältö

Kun dokumentoidaan ominaisuuksia, jotka eroavat alustojen välillä, käytä osio-otsikoita sisällön järjestämiseen.

Käytä `Työpöytä` ja `Mobiili` alaotsikkoina alustakohtaisten ohjeiden tai ominaisuuksien erottamiseen.

**Suositeltu:**
```md
## Nauhavalikko mukauttaminen

### Työpöytä

Työpöytäversiossa voit mukauttaa nauhaa seuraavasti:

- Järjestä nauhatoimintojen järjestys raahaamalla ja pudottamalla kuvakkeita.
- Piilota tietyt toiminnot napsauttamalla hiiren oikealla painikkeella tyhjää tilaa ja poistamalla valinta piilotettavien toimintojen kohdalta.

### Mobiili

Mobiiliversiossa voit mukauttaa nauhaa asetusten kautta:

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Ulkoasu**.
3. Valitse **Hallinnoi** kohdasta **Nauhavalikko**.
```

> [!info]+ Milloin luoda erilliset osiot?
> Luo erilliset osiot vain, jos sisältö eroaa merkittävästi. Jos ohjeet ovat pääosin samat pienin eroin, käytä sen sijaan rivinsisäisiä huomautuksia.

## Kuvakkeet ja kuvat

Sisällytä kuvakkeita ja kuvia silloin, kun ne helpottavat sellaisten asioiden selittämistä, joita on vaikea kuvata sanoin, tai kun haluat näyttää Obsidian-sovelluksen tärkeitä osia. Voit tallentaa kuvat `Attachments`-kansioon.

- Kuvan tulisi helpottaa sen ohessa olevan tekstin ymmärtämistä.

 **Esimerkki**: Kun [[Sanamäärä]]-lisäosa on käytössä, se luo uuden merkinnän alareunan tilariville.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Kuvien tulisi olla joko `.png`- tai `.svg`-muodossa.
- Jos kuva näyttää liian suurelta muistiinpanossa, pienennä sitä Obsidianin ulkopuolella tai säädä sen mittoja, kuten kohdassa [[Upota tiedostoja#Upota kuva muistiinpanoon|kuvan upottaminen muistiinpanoon]] selitetään.
- Harvinaisissa tapauksissa erityisen suuret tai monimutkaiset kuvat voidaan sijoittaa [[Nostolaatikot#Kutistettavat nostolaatikot|kutistettavaan nostolaatikkoon]].
- Ponnahdusikkunoissa tai modeissa kuvan tulisi näyttää koko Obsidian-sovellusikkuna.
 ![[Style-guide-modal-example.png#interface]]

### Kuvakkeet

[Lucide](https://lucide.dev/icons/)-kuvakkeita ja mukautettuja Obsidian-kuvakkeita voidaan käyttää yksityiskohtaisten elementtien yhteydessä tarjoamaan ominaisuuden visuaalinen esitys.

**Esimerkki:** Valitse vasemmalla olevasta nauhavalikosta **Luo uusi valkotaulu** ![[lucide-layout-dashboard.svg#icon]] luodaksesi valkotaulun samaan kansioon kuin aktiivinen tiedosto.

**Kuvakkeiden ohjeet**

- Tallenna kuvakkeet `Attachments/icons`-kansioon.
- Lisää etuliite `lucide-` Lucide-kuvakkeen nimen eteen.
- Lisää etuliite `obsidian-icon-` Obsidian-kuvakkeen nimen eteen.

**Esimerkki:** Uuden valkotaulun luomiskuvakkeen tulee olla nimeltään `lucide-layout-dashboard`.

- Käytä kuvakkeiden SVG-versiota.
- Kuvakkeiden leveyden tulisi olla `18` pikseliä, korkeuden `18` pikseliä ja viivan leveyden `1.5`. Voit säätää näitä asetuksia SVG-datassa.

> [!info]- Koon ja viivan leveyden säätäminen SVG:ssä
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="LEVEYS" height="KORKEUS" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="VIIVAN-LEVEYS" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Käytä upotetuissa kuvissa `icon`-ankkuria säätääksesi kuvakkeen ympärillä olevaa välistystä niin, että se kohdistuu siististi ympäröivän tekstin kanssa.
- Kuvakkeet tulisi ympäröidä sulkeilla. ![[lucide-cog.svg#icon]]

**Esimerkki**: `![[lucide-cog.svg#icon]]`

### Kuvien ankkuritunnisteet

Kuvien ankkuritunnisteita on käytettävissä koristeellisten muutosten lisäämiseksi upotettuihin kuviin.

> [!warning] Visuaalisen muokkauksen varoitus
> Kuvakkeiden ankkuritunnisteet eivät näy oikein **visuaalisessa muokkauksessa.** Käytä **lukutilaa** varmistaaksesi, että ankkuritunniste on otettu käyttöön.

**Icon**

`![[lucide-menu.svg#icon]]`

Icon-ankkuritunniste varmistaa oikean pystysuoran kohdistuksen kuvakkeille, joita käytetään osoittamaan käyttöliittymäelementtejä.

Ensimmäinen valikkokuvake käyttää ankkuritunnistetta ![[lucide-menu.svg#icon]], kun taas toinen valikkokuvake ( ![[lucide-menu.svg]] ) ei käytä.

**Interface**

`![[Vault picker.png#interface]]`

Interface-ankkuritunniste lisää kuvan ympärille koristeellisen varjon. Ensimmäisessä kuvassa interface-ankkuritunniste on käytössä.
![[Vault picker.png#interface]]
Sen sijaan toisessa kuvassa interface-ankkuritunnistetta ei ole käytetty.

![[Vault picker.png]]

**Outline**

`![[Backlinks.png#outline]]`

Outline-ankkuritunniste lisää kuvan ympärille hienovaraisen reunan. Ensimmäisessä kuvassa outline-ankkuritunniste on käytössä.

> [!tip] Tarkkaile kuvan vasenta alareunaa nähdäksesi eron.

![[Backlinks.png#outline]]

Toisessa kuvassa outline-ankkuritunnistetta ei ole käytetty.

![[Backlinks.png]]

### Optimointi

Kuvat hidastavat sivun latausaikaa ja vievät arvokasta [[Johdanto Obsidian Publishiin|Publishin]] tallennustilaa. Kuvien optimointi mahdollistaa tiedostokoon pienentämisen säilyttäen samalla kuvan visuaalisen eheyden.

Sekä kuvat että kuvakkeet tulisi optimoida.

> [!info] Kuvien optimointityökalut
> Tässä muutamia suositeltuja ohjelmia kuviesi koon pienentämiseen.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Suosittelemme 65–75 %:n optimointitasoa.

## Asettelu

### Rikkinäiset linkit

Ennen pull requestin lähettämistä tarkista, ettei dokumentaatiossa ole rikkinäisiä linkkejä käännöksessä, jonka parissa työskentelet, ja korjaa ne. Rikkinäisiä linkkejä voi syntyä luonnollisesti ajan myötä, joten niiden tarkkuuden varmistaminen auttaa ylläpitämään dokumentaation laatua.

Voit tarkistaa rikkinäiset linkit [[Yhteisön lisäosat|yhteisön lisäosilla]] tai IDE:ssäsi saatavilla olevilla työkaluilla.

### Kuvaukset

Tämä dokumentaatio muokataan GitHubissa ja isännöidään verkossa [[Johdanto Obsidian Publishiin|Obsidian Publishin]] kautta, joka sisältää [[Sosiaalisen median linkkien esikatselut#Kuvaus|kuvauksia]] sosiaalisen median korteille ja muille SEO-elementeille.

Jos sivulla, jonka parissa työskentelet, ei ole `description`-[[Määreet|määrettä]], lisää sellainen. Kuvauksen tulisi olla enintään 150 merkkiä ja tarjota objektiivinen yhteenveto sivun sisällöstä.

**Hyvä**: Opi luomaan pohjia, jotka tallentavat ja järjestävät verkkosivujen metatietoja automaattisesti Web Clipperilla.
**Voisi parantaa**: Opi luomaan pohjia, jotka automaattisesti tallentavat ja järjestävät metatietoja verkkosivuilta Web Clipperilla.

### Suunnat

Kun kirjoitat tai muokkaat [[#Ohjeet|ohjeita]] toiminnon suorittamiseen sovelluksessa, sisällytä vaiheet sekä mobiili- että työpöytäversioille.

Jos sinulla ei ole pääsyä mobiili- tai työpöytälaitteeseen, mainitse tämä pull requestin lähettämisen yhteydessä.

## Käännökset

Käännä sisältö kokonaisuudessaan käännöstä tehdessäsi. Tämä sisältää muun muassa:

- Muistiinpanojen nimet
- Kansioiden nimet
- Aliakset
- Liitteiden nimet
- Vaihtoehtoisen linkkitekstin
