---
permalink: bases/views
---
Näkymät mahdollistavat tietojen järjestämisen [[Johdanto kantoihin|kannassa]] useilla eri tavoilla. Kanta voi sisältää useita näkymiä, ja jokaisella näkymällä voi olla oma asetuksensa tiedostojen näyttämiseen, järjestämiseen ja suodattamiseen.

Voit esimerkiksi luoda kannan nimeltä "Kirjat", jossa on erilliset näkymät "Lukulista" ja "Äskettäin luetut".

## Työkalurivi

Kannan yläosassa on työkalurivi, jolla voit hallita näkymiä ja niiden tuloksia.

- ![[lucide-table.svg#icon]] **Näkymävalikko** — luo, muokkaa ja vaihda näkymiä.
- **Tulokset** — rajaa, kopioi ja vie tiedostoja.
- ![[lucide-arrow-up-down.svg#icon]] **Järjestä** — järjestä ja ryhmittele tiedostoja.
- ![[lucide-list-filter.svg#icon]] **Suodatin** — suodata tiedostoja.
- ![[lucide-list.svg#icon]] **Määreet** — valitse näytettävät määreet ja luo [[Kaavat|kaavoja]].
- ![[lucide-search.svg#icon]] **Hae** — hae kohteita niiden näytettyjen määreiden perusteella.
- ![[lucide-plus.svg#icon]] **Uusi** — luo uusi tiedosto nykyiseen näkymään.

## Näkymien lisääminen ja vaihtaminen

Näkymän voi lisätä kantaan kahdella tavalla:

- Napsauta näkymän nimeä vasemmassa yläkulmassa ja valitse ![[lucide-plus.svg#icon]] **Lisää näkymä**.
- Käytä [[Komentovalikko|komentovalikkoa]] ja valitse **Kannat: Lisää näkymä**.

Näkymäluettelosi ensimmäinen näkymä latautuu oletuksena. Vaihda näkymien järjestystä raahaamalla niitä kuvakkeen kohdalta.

## Näkymän asetukset

Jokaisella näkymällä on omat asetuksensa. Näkymän asetusten muokkaaminen:

1. Napsauta näkymän nimeä vasemmassa yläkulmassa.
2. Napsauta oikeaa nuolta sen näkymän vieressä, jota haluat määrittää.

Vaihtoehtoisesti *napsauta hiiren oikealla painikkeella* näkymän nimeä kannan työkalurivissä päästäksesi nopeasti näkymän asetuksiin.

## Asettelu

Näkymät voidaan esittää eri asetteluilla, mukaan lukien ![[lucide-table.svg#icon]] **taulukko**, ![[lucide-list.svg#icon]] **luettelo**, ![[lucide-layout-grid.svg#icon]] **kortit** ja ![[lucide-map.svg#icon]] **kartta**. Lisää asetteluja voi lisätä [[Yhteisön lisäosat|yhteisön lisäosilla]]. Jotkut asettelut ovat vielä kehitteillä ja vaativat Obsidianin [[Ennakkojulkaisuversiot|ennakkojulkaisuversion]].

| Asettelu                          | Kuvaus                                                                                                         | Sovelluksen&nbsp;versio |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [[Taulukkonäkymä\|Taulukko]]     | Näyttää tiedostot taulukon riveinä. Sarakkeet täytetään muistiinpanojesi [[Määreet\|määreistä]].                | 1.9                     |
| [[Korttinäkymä\|Kortit]]         | Näyttää tiedostot korttiruudukkona. Mahdollistaa galleriamaisten näkymien luomisen kuvilla.                     | 1.9                     |
| [[Luettelonäkymä\|Luettelo]]     | Näyttää tiedostot [[Muotoilun perussyntaksi#Luettelot\|luettelona]] luettelomerkeillä tai numeroituna.          | 1.10                    |
| [[Karttanäkymä\|Kartta]]         | Näyttää tiedostot nastoina interaktiivisella kartalla. Vaatii Kartat-lisäosan.                                  | 1.10                    |


## Suodattimet

Avaa ![[lucide-list-filter.svg#icon]] **Suodatin**-valikko kannan yläosasta lisätäksesi suodattimia.

Kanta ilman suodattimia näyttää kaikki holvisi tiedostot. Suodattimet rajaavat tulokset näyttämään vain tiedostot, jotka täyttävät tietyt ehdot. Voit esimerkiksi käyttää suodattimia näyttääksesi vain tiedostot, joilla on tietty [[Tunnisteet|tunniste]] tai jotka sijaitsevat tietyssä kansiossa. Saatavilla on monia suodatintyyppejä.

Suodattimet voidaan kohdistaa kaikkiin kannan näkymiin tai vain yksittäiseen näkymään valitsemalla ![[lucide-list-filter.svg#icon]] **Suodatin**-valikon kahdesta osiosta.

- **Kaikki näkymät** kohdistaa suodattimet kaikkiin kannan näkymiin.
- **Tämä näkymä** kohdistaa suodattimet aktiiviseen näkymään.

#### Suodattimen osat

Suodattimissa on kolme osaa:

1. **Määre** — valitsee holvisi [[Määreet|määreen]], mukaan lukien [[Kantojen syntaksi#Tiedoston määreet|tiedoston määreet]].
2. **Operaattori** — valitsee vertailutavan. Käytettävissä olevat operaattorit riippuvat määreen tyypistä (teksti, päiväys, numero jne.).
3. **Arvo** — valitsee vertailtavan arvon. Arvot voivat sisältää laskutoimituksia ja [[Funktiot|funktioita]].

#### Konjunktiot

- **Kaikki seuraavista** on `ja`-ehto — tulokset näytetään vain, jos *kaikki* suodatinryhmän ehdot täyttyvät.
- **Mikä tahansa seuraavista** on `tai`-ehto — tulokset näytetään, jos *mikä tahansa* suodatinryhmän ehdoista täyttyy.
- **Ei mikään seuraavista** on `ei`-ehto — tuloksia ei näytetä, jos *mikä tahansa* suodatinryhmän ehdoista täyttyy.

#### Suodatinryhmät

Suodatinryhmien avulla voit luoda monimutkaisempaa logiikkaa yhdistämällä konjunktioita.

#### Edistynyt suodatinmuokkain

Napsauta koodipainiketta ![[lucide-code-xml.svg#icon]] käyttääksesi **edistynyttä suodatinta**. Tämä näyttää suodattimen raa'an [[Kantojen syntaksi|syntaksin]], ja sitä voi käyttää monimutkaisempien [[Funktiot|funktioiden]] kanssa, joita ei voi esittää osoita ja napsauta -käyttöliittymässä.

## Tulosten järjestäminen ja ryhmittely

Avaa ![[lucide-arrow-up-down.svg#icon]] **Järjestä**-valikko järjestääksesi ja ryhmitelläksesi näkymän tuloksia.

Voit järjestää tulokset yhden tai useamman määreen mukaan nousevassa tai laskevassa järjestyksessä. Tämä helpottaa muistiinpanojen listaamista nimen, viimeisen muokkausajan tai minkä tahansa muun määreen — myös kaavojen — mukaan.

Voit myös ryhmitellä tulokset määreen mukaan, jolloin samankaltaiset kohteet järjestyvät visuaalisesti erillisiin osioihin. Tällä hetkellä Obsidian tukee ryhmittelyä vain yhden määreen mukaan.

### Järjestyksen lisääminen

1. Avaa ![[lucide-arrow-up-down.svg#icon]] **Järjestä**-valikko näkymän yläosasta.
2. Valitse määre, jonka mukaan haluat järjestää (tai ryhmitellä).
3. Jos sinulla on useita järjestyksiä, raahaa niitä ylös tai alas ![[lucide-grip-vertical.svg#icon]] tartuntakahvasta muuttaaksesi niiden prioriteettia.

Tulosten järjestämisvaihtoehdot riippuvat määreen tyypistä:

- **Teksti**: järjestä *aakkosittain* (A→Ö) tai *käänteisessä aakkosjärjestyksessä* (Ö→A).
- **Numero**: järjestä *pienimmästä suurimpaan* (0→1) tai *suurimmasta pienimpään* (1→0).
- **Päiväys ja aika**: järjestä *vanha → uusi* tai *uusi → vanha*.

### Järjestyksen poistaminen

1. Avaa ![[lucide-arrow-up-down.svg#icon]] **Järjestä**-valikko näkymän yläosasta.
2. Napsauta ![[lucide-trash-2.svg#icon]] roskakoripainiketta sen järjestyksen tai ryhmittelyn vieressä, jonka haluat poistaa.

## Tulosten rajaaminen, kopioiminen ja vieminen

### Tulosten rajaaminen

*Tulokset*-valikko näyttää näkymän tulosten määrän. Napsauta tulospainiketta rajoittaaksesi tulosten määrää ja käyttääksesi lisätoimintoja.

### Kopioi leikepöydälle

Tämä toiminto kopioi näkymän leikepöydällesi. Leikepöydältä voit liittää sen Markdown-tiedostoon tai muihin asiakirjasovelluksiin, mukaan lukien taulukkolaskentaohjelmat kuten Google Sheets, Excel ja Numbers.

### Vie CSV

Tämä toiminto tallentaa nykyisen näkymäsi CSV-tiedostona.

## Näkymän upottaminen

Voit upottaa kantatiedostoja [[Upota tiedostoja|mihin tahansa tiedostoon]] käyttämällä `![[Tiedosto.base]]`-syntaksia. Luettelon ensimmäistä näkymää käytetään. Voit muuttaa järjestystä raahaamalla näkymiä näkymävalikossa.

Määrittääksesi upotuksen oletusnäkymän käytä `![[Tiedosto.base#Näkymä]]`.
