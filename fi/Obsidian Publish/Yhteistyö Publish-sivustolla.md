---
permalink: publish/collaborate
publish: true
mobile: true
description: Opi tekemään yhteistyötä muiden Obsidian-käyttäjien kanssa Obsidian Publish -sivustollasi.
---
Opi tekemään yhteistyötä [[Johdanto Obsidian Publishiin|Obsidian Publish]] -sivustollasi muiden Obsidian-käyttäjien kanssa. Lisäämällä ystäväsi ja kollegasi toimittajiksi he voivat julkaista muutoksia sivustollesi.

Vain sivuston omistaja tarvitsee aktiivisen Obsidian Publish -tilauksen. Toimittajat tarvitsevat vain [Obsidian-tilin](https://obsidian.md/account).

> [!warning] Ennen kuin julkaiset muutoksia jaetulle sivustolle, muista [[#Synkronoi muutokset toimittajien välillä|synkronoida muutokset toimittajien välillä]]. Muuten voit vahingossa korvata muiden toimittajien tekemiä muutoksia.

## Lisää toimittaja sivustolle

1. Valitse [[Nauha|nauhavalikosta]] **Julkaise muutokset** ![[lucide-send.svg#icon]] tai avaa [[Komentovalikko]] ja kirjoita **Publish: Julkaise muutokset...**
2. Napsauta **Julkaise muutokset** -valintaikkunassa **Muuta sivuston asetuksia** ![[lucide-cog.svg#icon]].
3. Valitse **Sivuston toimittajat** -kohdan vierestä **Hallinnoi**.
4. Syötä **Kutsu käyttäjä** -kenttään toimittajan sähköposti.
5. Valitse **Lisää**.

## Poista toimittaja sivustolta

1. Valitse [[Nauha|nauhavalikosta]] **Julkaise muutokset** ![[lucide-send.svg#icon]] tai avaa [[Komentovalikko]] ja kirjoita **Publish: Julkaise muutokset...**
2. Napsauta **Julkaise muutokset** -valintaikkunassa **Muuta sivuston asetuksia** ![[lucide-cog.svg#icon]].
3. Valitse **Sivuston toimittajat** -kohdan vierestä **Hallinnoi**.
4. Valitse poistettavan toimittajan vierestä **Poista käyttäjä** ![[lucide-x.svg#icon]].

## Synkronoi muutokset toimittajien välillä

Obsidian Publish ei synkronoi julkaistuja muutoksia paikallisten holvien välillä automaattisesti. Sen sijaan toimittajien täytyy synkronoida muiden toimittajien muutokset manuaalisesti.

Päivittääksesi paikallisen muistiinpanon sivuston muutoksilla:

1. Valitse [[Nauha|nauhavalikosta]] **Julkaise muutokset** ![[lucide-send.svg#icon]] tai avaa [[Komentovalikko]] ja kirjoita **Publish: Julkaise muutokset...**
2. Napsauta hiiren oikealla painikkeella tai paina pitkään synkronoitavaa muutosta ja valitse **Käytä sivuston versiota**. **Tämä korvaa muistiinpanon paikallisessa holvissasi.**

> [!tip] Suosittelemme käyttämään toista työkalua muutosten synkronointiin holvien välillä, kuten [[Johdanto Obsidian Synciin|Obsidian Sync]] tai [git](https://git-scm.com/).

## Käyttöoikeudet

Seuraava taulukko listaa sivuston käyttöoikeudet omistajille ja toimittajille:

| Toiminto                                    | Toimittaja | Omistaja |
|---------------------------------------------|:----------:|:--------:|
| Julkaise uusia sivuja                       | ✓          | ✓        |
| Julkaise muutoksia julkaistuille sivuille   | ✓          | ✓        |
| Poista sivuja julkaisusta                   | ✓          | ✓        |
| Määritä sivuston asetukset                  |            | ✓        |
| Hallinnoi käyttöoikeuksia                   |            | ✓        |
