---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Siirrä Sync-holvisi toiselle alueelle tai suorita salauksen päivitys.
---
Oletusarvoisesti Obsidian Sync käyttää [[Obsidian Sync/Turvallisuus ja yksityisyys#Salaus|päästä päähän -salausta]] kaikelle tiedollesi. Tämä takaa, ettei kukaan — ei edes Obsidian-tiimi — pääse käsiksi muistiinpanoihisi.

Obsidian päivittää ajoittain synkronoinnin salausta ylläpitääkseen korkeimmat [[Obsidian Sync/Turvallisuus ja yksityisyys|turvallisuus]]standardit. Jos salauksen päivitys on saatavilla, näet valinnan nimeltä **Päivitä holvin salausta** kohdassa **Obsidianin asetukset → Sync**. Tämä prosessi mahdollistaa myös [[Sync-alueet|Sync-alueen]] vaihtamisen.

## Salausversiot

Kaikki uudet holvit käyttävät automaattisesti uusinta salausta. Olemassa olevat holvit voidaan päivittää uudennusavustajan avulla. Huomaa, että kaikkien laitteiden tulee käyttää Obsidian-sovelluksen versiota, joka tukee synkronoinnin salausversiota, johon olet siirtymässä.

| Julkaisupäivä                                                           | Sync-versio  | Sovelluksen vähimmäisversio |
| ----------------------------------------------------------------------- | ------------ | --------------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3            | 1.8.3                       |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0            | 0.9.21                      |

## Päivitä salaus uudennusavustajalla

Ennen kuin jatkat, luo [[Varmuuskopioi Obsidian-tiedostosi|varmuuskopio]] holvistasi mahdollisen tietojen menetyksen estämiseksi. Tämä prosessi poistaa pysyvästi kaikki tiedot etäholvistasi vanhalla salauksella, mukaan lukien versiohistorian.

> [!danger] Uudennukset ovat tuhoavia
> 
> **[[Varmuuskopioi Obsidian-tiedostosi|Varmuuskopioi]] holvisi aina ennen uudennuksen aloittamista.**
> 
> Kun uudennat etäholvin, tietosi korvataan. Tämä tarkoittaa:
> 
> 1. Etätiedot poistetaan Obsidianin palvelimilta, ja holvin tiedot ladataan uudelleen niiden tilalle.
> 2. Kaikki holvin [[Versiohistoria|versiohistoria]] menetetään.

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista **Sync**.
3. Napsauta **Päivitä holvia**. Tämä vaihtoehto näkyy vain, jos päivitys on saatavilla etäholvillesi.
4. Tarkista varmuuskopiosi ja napsauta **Jatka**.
5. Kirjoita kohtaan **Holvin nimi** etäholvin nimi.
6. Valitse kohtaan **Alue** palvelimen [[Obsidian Syncin käyttöönotto#Alueelliset synkronointipalvelimet|alue]] etäholvillesi.
7. Valitse kohtaan **Salaussalasana** salasana holvillesi. Tämä luo päästä päähän -salatun holvin. Holvin salasana on erillinen Obsidian-tilistäsi ja voi olla eri jokaiselle holvillesi. Lisätietoja on kohdassa [[Turvallisuus ja yksityisyys]].
8. Kun olet ladannut tietosi uudelleen uudella salauksella, yhdistä uuteen Sync-holviin muilla laitteillasi.
