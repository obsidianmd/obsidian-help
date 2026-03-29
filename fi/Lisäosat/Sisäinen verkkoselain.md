---
permalink: plugins/web-viewer
---
Sisäinen verkkoselain on [[Sisäänrakennetut lisäosat|sisäänrakennettu lisäosa]], joka mahdollistaa ulkoisten linkkien avaamisen suoraan Obsidianissa työpöytäversiossa. Tämä antaa sinun lukea linkkien sisältöä poistumatta sovelluksesta ja helpottaa moniajoa verkkotutkimusprojekteissa.

Ulkoiset linkit avautuvat [[Välilehdet|välilehtinä]], joita voit järjestää uudelleen, jakaa ja avata [[Irtoikkunat|irtoikkunassa]]. Kaikki [[Canvas]]-tiedostoihin upotetut verkkosivukortit voidaan avata sisäisen verkkoselaimen välilehtinä.

Sisäinen verkkoselain ei korvaa ensisijaista selainta. Sisäinen verkkoselain tarjoaa nopean tavan käyttää verkkosivuja tutkimusta varten Obsidianissa. Se ei kuitenkaan tarjoa täydellisiä toimintoja, suojauskontrolleja tai laajennettavuutta, joita erillisellä selaimella on.

## Lukijanäkymä

Napsauta silmälasikuvaketta nähdäksesi verkkosivun pelkkänä tekstinä. Tämä ominaisuus toimii puhdistamalla sisällön Mozillan Firefoxille kehitetyn Readability-kirjaston avulla.

## Tallenna holviin

Napsauta lisätoimintojen kuvaketta tallentaaksesi verkkosivun holviisi. Voit mukauttaa tallennussijaintia kohdasta **[[Asetukset]]** → **Sisäinen verkkoselain**.

## Mainostenesto

Sisäinen verkkoselain estää mainokset oletuksena. Voit mukauttaa mainosteneston sääntöjä lisäämällä listoja, kuten [Easylist](https://easylist.to/).

## Turvallisuus

Jos käytät kolmannen osapuolen Obsidian-lisäosia, suosittelemme käyttämään ensisijaista selainta arkaluonteisiin tehtäviin ja salasanasuojatuille verkkosivustoille sisäisen verkkoselaimen sijaan.

Sisäinen verkkoselain perustuu samaan [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag)-ominaisuuteen, joka mahdollistaa verkkosivujen upottamisen [[Canvas]]-tiedostoihin. Sisäinen verkkoselain on [riippumattomasti auditoitu](https://obsidian.md/blog/cure53-second-client-audit/) sen varmistamiseksi, että se on toteutettu turvallisesti.

Obsidianin lisäosat [[Lisäosien turvallisuus#Lisäosien ominaisuudet|eivät ole hiekkalaatikossa]] ja niillä on laajat hallintaoikeudet sovellukseen. Tämä suunnittelu mahdollistaa tehokkaat toiminnot, mutta tuo mukanaan myös tietoturvakompromisseja. Kun Obsidian on käynnissä, kolmannen osapuolen lisäosilla on täysi pääsy sisäisen verkkoselaimen evästeisiin.
