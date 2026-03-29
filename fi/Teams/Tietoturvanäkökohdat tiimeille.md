---
permalink: teams/security
cssclasses:
  - soft-embed
---
[Turvallisuus](https://obsidian.md/security)-sivumme kokoaa tietoa siitä, miten Obsidian suhtautuu tietojesi suojaamiseen. Se on myös kolmansien osapuolien suorittamien tietoturva-auditointien kotisivu.

## Huomioitavaa

Obsidian on suunniteltu toimimaan offline-tilassa itsenäisenä sovelluksena. Obsidian tukee myös mukautettuja lisäosia ja teemoja. Lisäksi tarjoamme sekä virallista että epävirallista tukea erilaisille tiedostojen synkronointipalveluille.

Jos et aio käyttää yhteisön lisäosia tai teemoja tai [[Johdanto Obsidian Synciin|Obsidian Synciä]] tai [[Johdanto Obsidian Publishiin|Obsidian Publishia]], tavanomaiset menettelysi sovellusten suojaamiseen pätevät. Jos kuitenkin aiot käyttää jotakin näistä ominaisuuksista, suosittelemme arvioimaan perusteellisesti niiden soveltuvuuden työpaikallesi.

## Yhteisön lisäosat ja teemat

Tutustu [[Lisäosien turvallisuus]]-sivuun tämän osion lisäksi.

Obsidianin tiimi tarkistaa kaikki viralliseen hakemistoon lähetetyt yhteisön lisäosat ja teemat [julkaisuvarastomme](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc) kautta. Emme tarkista yhteisön kohteita, joita ei ole lähetetty viralliseen hakemistoon.

Meillä ei ole yhteisökauppaa [[CSS-pätkät|CSS-pätkille]]. Nämä tiedostot hankitaan tyypillisesti [Obsidian-yhteisöstämme](https://obsidian.md/community) tai julkisista GitHub-varastoista.

Edellytämme resurssien niputtamista CSS-pätkissä ja teemoissa. Olemme kuitenkin tehneet poikkeuksen [Google Fontsille](https://fonts.google.com/) suorituskyvyn ylläpitämiseksi mobiililaitteilla, joilla kirjasinten niputtamisen vaikutus on huomattavampi.

## Verkko ja pääsy

Vaikka Obsidian priorisoi paikallista lähestymistapaa, sovellus tekee verkkokutsuja käyttämiesi palveluiden ja ominaisuuksien perusteella. Nämä verkkoyhteydet voidaan estää verkkotunnuspalomuurilla tai sovelluksen lukituksella.

Obsidian muodostaa verkkoyhteydet HTTPS-portissa 443.

Seuraavassa on luettelo Obsidianin muodostamista verkkoyhteyksistä.

### Obsidianista lähtevät yhteydet

- **Ennakkojulkaisupäivitykset**: Käyttää osoitetta `releases.obsidian.md`.
- **Tilin ja lisenssin hallinta**: Kun käytät Obsidian-tiliäsi asetuksissa ja otat käyttöön kaupallisen lisenssin, kutsumme osoitetta `api.obsidian.md`.
- **Obsidian Sync**: Käytetään muistiinpanojen synkronointiin laitteiden välillä.
	- `sync-xx.obsidian.md`, jossa `xx` on numero välillä 01–100.
- **Obsidian Publish**:
    1. Taustajärjestelmä: `publish-main.obsidian.md` ja `publish-xx.obsidian.md`, jossa `xx` on numero.
    2. Käyttöliittymä: `publish.obsidian.md`.

### GitHubista lähtevät yhteydet

Obsidian tekee verkkopyyntöjä sekä osoitteeseen `github.com` että `raw.githubusercontent.com`.

- **Julkiset julkaisut**: Jos automaattiset päivitykset ovat käytössä, Obsidian tarkistaa GitHubista julkiset julkaisut.
- **Kolmannen osapuolen teemat ja lisäosat**:
    - Tarkistus suoritetaan 12 tunnin välein sovelluksen käynnistysajankohdasta lukien noutaakseen GitHubissa isännöidyn tiedoston "lisäosien käytöstäpoistoille". Tämä tiedosto auttaa etäpoistamaan käytöstä tietyt versiot lisäosista, joiden tiedetään toimivan virheellisesti, aiheuttavan tietojen menetystä tai olevan mahdollisesti haavoittuvia tai haitallisia.
    - Käytössä olevat lisäosat voivat tuottaa verkkoliikennettä Obsidianin ja GitHubin hallinnan ulkopuolella.

### Muut yhteydet

- **Upotettu verkkosisältö**: Kun avataan muistiinpanoja, jotka upottavat verkkosisältöä, kuten kuvan (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS-pyynnöt**: Jos isäntänimi on selvitettävä ennen yhteyden muodostamista, mukaan lukien DNS over HTTPS. Katso lisätietoja [Chromiumin dokumentaatiosta](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium).

## Usein kysytyt kysymykset

### Tilin turvallisuus

**Tukeeko Obsidian kertakirjautumista (SSO)?**
Obsidian ei tue SSO:ta. Useimmissa käyttötapauksissa Obsidian ei vaadi tiliä tai kirjautumista työpaikallasi, ellet käytä [[Johdanto Obsidian Publishiin|Obsidian Publishia]] tai [[Johdanto Obsidian Synciin|Obsidian Synciä]].

**Tukeeko Obsidian monivaiheista todennusta (MFA)?**
Obsidian tukee [[Kaksivaiheinen todennus|kaksivaiheista todennusta]] (2FA) Obsidian-tileille, mutta ei tue 2FA:ta perussovelluksen avaamiseen ja käyttöön. [[Johdanto Obsidian Synciin|Obsidian Syncin]] ja [[Johdanto Obsidian Publishiin|Obsidian Publishin]] käyttäjien, joilla 2FA on käytössä, on vahvistettava 2FA-avaimensa kirjautuessaan ensimmäisen kerran sovellukseen.

### Arvioinnit ja sertifikaatit

**Hyväksyttekö yrityksemme tietoturva-arvioinnit?**
Edellytämme vähimmäistarjouksen ostotilausmäärää ennen kuin harkitsemme tietoturva-arvioinnin suorittamista. Nämä arvioinnit ovat usein aikaa vieviä eivätkä välttämättä sovellu offline-sovelluksiin kuten Obsidianiin, sillä ne on tyypillisesti suunnattu pilvipohjaisille palveluille.

Voit kuitenkin luopua tästä tarjouksen ostotilausmäärästä suostumalla maksamaan ennakkomaksun. Ota yhteyttä [[Apua ja tuki#Ota yhteyttä Obsidianin tukeen|Obsidianin tukeen]] tiedustellaksesi tästä vaihtoehdosta.

**Onko teillä tunnustettuja tietoturvaan tai laatustandardeihin liittyviä sertifikaatteja, kuten ISO27001, NIST, COBIT tai muita ISO- tai CSA-sertifikaatteja?**
Ei tällä hetkellä. Saatamme tutkia asiaa tulevaisuudessa, mutta toistaiseksi keskitymme [tietoturva-auditointeihin](https://obsidian.md/security).
