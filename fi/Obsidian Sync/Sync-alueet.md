---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Siirrä Sync-holvisi toiselle alueelle.
---
Kun luot [[Paikalliset ja etäholvit|etäholvin]] [[Johdanto Obsidian Synciin|Obsidian Syncin]] kautta, tietosi salataan ja tallennetaan yhdelle Obsidianin alueellisista Sync-palvelimista. Tässä oppaassa kerrotaan, miten Sync-holvisi siirretään toiselle alueelliselle palvelimelle.

## Käytettävissä olevat alueet

Seuraavat alueet ovat käytettävissä Obsidian Syncissä. Suosittelemme valitsemaan **Automaattinen** tai sinua lähellä olevan sijainnin viiveen vähentämiseksi ja synkronoinnin nopeuttamiseksi.

![[Obsidian Sync/Turvallisuus ja yksityisyys#^sync-geo-regions]]

## Kirjaa asetuksesi muistiin

Kun yhdistät laitteen uuteen etäholviin, Sync voi käyttää asetuksia, jotka ovat sillä hetkellä käytössä. Jos käytät eri asetuksia eri laitteilla, kirjaa ne muistiin ennen aloittamista. Esimerkiksi et ehkä synkronoi suuria mediatiedostoja puhelimeesi.

Avaa jokaisella etäholvia käyttävällä laitteella **[[Asetukset]] → Sync** ja kirjaa nämä asetukset muistiin. Kuvakaappaus toimii hyvin.

- **Valikoiva synkronointi**
- **Synkronoi holvin asetukset**
- **Pois jätetyt kansiot**
- Laitekohtaiset asetukset, kuten **Laitteen nimi** ja **Jos ilmenee ristiriita**

Katso [[Syncin asetukset ja valikoiva synkronointi]], mitä kukin asetus tekee ja mitkä ovat oletuksena käytössä.

## Sync-alueen vaihtaminen

Etäholvisi alueen vaihtamiseksi sinun täytyy luoda holvi uudelleen toiselle Sync-palvelimelle. Huomaa, että voit myös vaihtaa aluetta käyttämällä [[Päivitä synkronoinnin salaus|synkronoinnin salauksen päivittämisen]] siirtymäavustajaa, jos etäholvisi on vanhemmalla versiolla.

> [!danger] Siirrot ovat tuhoavia
> 
> **[[Varmuuskopioi Obsidian-tiedostosi|Varmuuskopioi]] aina holvisi ennen siirron aloittamista.**
> 
> Kun siirrät etäholvin, tietosi korvataan. Tämä tarkoittaa:
> 
> 1. Etätiedot poistetaan Obsidianin palvelimilta, ja holvin tiedot ladataan uudelleen niiden tilalle.
> 2. Kaikki holvin [[Versiohistoria|versiohistoria]] menetetään.

![[Obsidian Syncin käyttöönotto#Yhteyden katkaiseminen etäholviin]]

Jos käytät [[Tilaukset ja tallennustilan rajoitukset|Standard-tilausta]], sinun täytyy myös [[Obsidian Syncin käyttöönotto#Etäholvin poistaminen|poistaa etäholvisi]] ennen jatkamista.

![[Obsidian Syncin käyttöönotto#Uuden etäholvin luominen]]

## Muiden laitteidesi yhdistäminen uudelleen

Kun uusi etäholvi on synkronoitunut ensimmäisellä laitteellasi, vaihda jokainen muu laite, joka käytti vanhaa etäholvia. Käsittele yksi laite kerrallaan.

1. [[Obsidian Syncin käyttöönotto#Yhteyden katkaiseminen etäholviin|Katkaise yhteys vanhaan etäholviin]] laitteella.
2. [[Obsidian Syncin käyttöönotto#Etäholvin synkronointi toisella laitteella|Yhdistä uuteen etäholviin]]. Älä valitse vielä **Aloita synkronointi**.
3. Aseta **Valikoiva synkronointi**, **Synkronoi holvin asetukset** ja **Pois jätetyt kansiot** vastaamaan tälle laitteelle muistiin kirjaamiasi asetuksia.
4. Käynnistä Obsidian uudelleen. Mobiililaitteella tai tabletilla saatat joutua pakottamaan sovelluksen sulkemisen.
5. Valitse **Aloita synkronointi** tai **Jatka** ja odota, kunnes synkronointi on valmis, ennen kuin siirryt seuraavaan laitteeseen.

Lisäksi voit [[Obsidian Syncin käyttöönotto#Etäholvin poistaminen|poistaa vanhan etäholvisi]] sen jälkeen, kun olet varmistanut siirtymisen uuteen etäholviisi ja sen alueelle.
