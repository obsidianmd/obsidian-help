---
permalink: plugins/daily-notes
---
Päivittäiset muistiinpanot on [[Sisäänrakennetut lisäosat|sisäänrakennettu lisäosa]], joka avaa tämän päivän päivämäärään perustuvan muistiinpanon tai luo sen, jos sitä ei vielä ole. Käytä päivittäisiä muistiinpanoja päiväkirjojen, tehtäväluetteloiden tai päivittäisten lokien luomiseen asioista, joita olet löytänyt päivän aikana.

Avaa tämän päivän muistiinpano jollain seuraavista tavoista:

- Napsauta **Avaa tämän päivän muistiinpanot** ![[lucide-calendar.svg#icon]] [[Nauha|nauhavalikosta]].
- Suorita **Avaa tämän päivän muistiinpanot** [[Komentovalikko|komentovalikosta]].
- [[Pikanäppäimet#Aseta pikanäppäin|Käytä pikanäppäintä]] komennolle **Avaa tämän päivän muistiinpanot**.

Oletuksena Obsidian luo uuden tyhjän muistiinpanon, joka on nimetty tämän päivän päivämäärän mukaan VVVV-KK-PP-muodossa.

> [!tip] Jos haluat pitää päivittäiset muistiinpanosi erillisessä kansiossa, voit määrittää <u>Uuden tiedoston sijainnin</u> lisäosan asetuksissa muuttaaksesi paikkaa, johon Obsidian luo uudet päivittäiset muistiinpanot.

> [!example]- Automaattiset alikansiot
> Voit järjestää päivittäiset muistiinpanosi automaattisesti kansioihin käyttämällä **Päiväyksen muoto** -ominaisuutta.
> 
> Jos esimerkiksi asetat päiväyksen muodoksi `YYYY/MMMM/YYYY-MMM-DD`, muistiinpanosi luodaan muodossa `2023/January/2023-Jan-01`.
> 
> Voit tutustua muotoiluvaihtoehtoihin tarkemmin [momentJS](https://momentjs.com/docs/#/displaying/format/)-dokumentaatiossa.

## Luo päivittäinen muistiinpano pohjatiedostosta

Jos päivittäisillä muistiinpanoillasi on sama rakenne, voit käyttää [[Mallineet|pohjatiedostoa]] lisätäksesi ennalta määriteltyä sisältöä päivittäisiin muistiinpanoihisi, kun luot niitä.

1. Luo uusi muistiinpano nimeltä "Päivittäinen pohja" seuraavalla tekstillä (tai millä tahansa, mikä sopii sinulle!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Tehtävät

   - [ ]
   ```

2. Avaa **[[Asetukset]]**.
3. Napsauta sivupalkissa **Päivittäiset muistiinpanot** kohdassa **Lisäosan asetukset**.
4. Valitse tekstikentässä **Pohjatiedoston sijainti** vieressä "Päivittäinen pohja" -muistiinpano.

Obsidian käyttää pohjatiedostoa seuraavan kerran, kun luot uuden päivittäisen muistiinpanon.

## Päivittäiset muistiinpanot ja määreet

Kun Päivittäiset muistiinpanot -lisäosa on aktivoitu ja muistiinpanossa on päivämäärämääre, Obsidian yrittää automaattisesti luoda linkin kyseisen päivän päivittäiseen muistiinpanoon. Jos esimerkiksi muistiinpano nimeltä `esimerkki.md` sisältää päivämäärämääreen kuten `2023-01-01`, tämä päivämäärä muuttuu klikattavaksi linkiksi [[Näkymät ja muokkaustila#Visuaalinen muokkaus|visuaalisessa muokkauksessa]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
