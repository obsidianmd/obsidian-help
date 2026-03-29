---
permalink: plugins/file-recovery
publish: true
mobile: true
description: Tiedostojen palautus suojaa työtäsi tahattomalta tietojen menetykseltä tallentamalla automaattisesti tilannekuvia muistiinpanoistasi säännöllisin väliajoin.
---
Tiedoston palautus on [[Sisäänrakennetut lisäosat|sisäänrakennettu lisäosa]], joka suojaa työtäsi vahinkopoistoja, tiedostojen korruptoitumista tai ei-toivottuja muutoksia vastaan tallentamalla automaattisesti kokonaisia tilannevedoksia muistiinpanoistasi säännöllisin väliajoin. Tiedoston palautus ei ole täydellinen varmuuskopiointiratkaisu, ja suosittelemme myös [[Varmuuskopioi Obsidian-tiedostosi|varmuuskopioimaan]] Obsidian-tiedostosi erikseen.

Jotta tilannevedokset eivät [[#Tallennustila ja suorituskyky|vie liikaa tilaa]], Obsidian säilyttää tilannevedoksia tietyn määrän päiviä ennen niiden poistamista. Tilannevedokset tallentavat tiedostojesi koko sisällön, eivät vain muutoksia, joten voit palauttaa minkä tahansa aiemman version.

> [!info]+ Tietoa
> Oletuksena tilannevedoksia tallennetaan vähintään 5 minuutin välein, ja niitä säilytetään 7 päivää. Voit määrittää molemmat aikavälit kohdassa **[[Asetukset]] → Sisäänrakennetut lisäosat → Tiedoston palautus**.

Tilannevedoksia säilytetään [[Miten Obsidian tallentaa tietoja#Yleiset asetukset|yleisissä asetuksissa]], holvin ulkopuolella, holviin liittyvän tietojen menetyksen varalta. Tämä tarkoittaa, että tilannevedokset tallennetaan muistiinpanon absoluuttisen polun perusteella. Jos olet äskettäin siirtänyt holviasi, saatat joutua siirtämään sen takaisin siihen sijaintiin, jossa se oli tilannevedoksen ottamishetkellä.

> [!tip] Jos käytät [[Johdanto Obsidian Synciin|Obsidian Synciä]] tai [[Synkronoi muistiinpanosi laitteiden välillä|muita synkronointipalveluja]], tiedoston palautuksen tilannevedokset eivät synkronoidu laitteiden välillä. Tilannevedokset ovat laitekohtaisia ja pysyvät paikallisina kullakin laitteella.

## Tilannevedoksen palauttaminen

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista **Tiedoston palautus** kohdasta **Sisäänrakennetut lisäosat**.
3. Valitse **Tilannevedokset**-kohdasta **Näytä**.
4. Aloita tiedostonimikentässä palautettavan tiedoston nimen kirjoittaminen, niin näet ehdotusluettelon.
5. Valitse tiedosto, paina Enter, ja näet luettelon saatavilla olevista tilannevedoksista.
6. Valitse tilannevedos, jonka haluat palauttaa.
    1. Jos haluat kopioida ja liittää sisällön uuteen muistiinpanoon, valitse **Kopioi**-painike.
    2. Jos haluat palauttaa tiedoston kokonaan, valitse **Palauta**-painike.
7. Voit halutessasi näyttää tilannevedosten väliset erot ottamalla käyttöön **Näytä muutokset**. Tämä näyttää, mitä sisältöä on lisätty, poistettu tai muokattu tilannevedosten versioiden välillä.

## Tilannevedoshistorian tyhjentäminen

> [!danger] Tilannevedoshistorian tyhjentäminen poistaa peruuttamattomasti kaikki holvin tilannevedokset.

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista **Tiedoston palautus** kohdasta **Sisäänrakennetut lisäosat**.
3. Valitse **Tyhjennä historia** -kohdasta **Tyhjennä**.
4. Vahvista, että haluat poistaa kaikki tilannevedokset, napsauttamalla **Tyhjennä**.

## Tallennustila ja suorituskyky

Tiedoston palautuksen tilannevedokset käyttävät tyypillisesti vain vähän levytilaa, koska ne tallentavat vain muuttuneet tiedostot. Holveissa, joissa on paljon suuria tiedostoja tai usein tehtäviä muokkauksia, tilannevedokset voivat kuitenkin kasaantua ajan myötä. Seuraa tallennustilan käyttöä ja muuta säilytysaikaa tarvittaessa.

## Rajoitukset

- **Applen lukitustila**: Tämä ominaisuus ei ole käytettävissä Apple-laitteilla, joissa on [lukitustila](https://support.apple.com/en-us/105120) käytössä, ellei Obsidiania ole vapautettu rajoituksista.
- **Tiedostotyypit**: Vain `.md`- ja `.canvas`-tiedostoja voidaan palauttaa tiedoston palautuksen avulla.
- **Holvin sijainti**: Jos siirrät holviasi toiseen sijaintiin käyttämättä [[Hallinnoi holveja#Holvin siirtäminen eri kansioon|holvinvaihdinta]], aiemmat tilannevedokset eivät välttämättä ole saatavilla.
