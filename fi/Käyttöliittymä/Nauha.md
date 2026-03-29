---
permalink: ribbon
publish: true
mobile: true
description: 'Opi käyttämään valintanauhaa, Obsidianin yleisten komentojen tilaa, ja mukauttamaan sitä työpöytä- ja mobiiliversioissa.'
---
Nauha toimii tilana yleisille komennoille Obsidianissa.

Työpöytäversiossa se sijaitsee [[Sivupalkki#Avaa piilotetut sivupalkit|vasemmassa sivupalkissa]] ja pysyy näkyvissä, vaikka vasen sivupalkki olisi suljettu.

Mobiiliversiossa voit käyttää [[Mobiilisovellus#Nauhavalikko|nauhavalikkon toimintoja]] napauttamalla **Valikko-painiketta** ![[lucide-menu.svg#icon]] sovelluksen oikeassa alakulmassa, kun et muokkaa muistiinpanoa.

## Toiminnot

Jokainen toiminto on esitetty kuvakkeena nauhavalikossa. Kohdistaminen näihin kuvakkeisiin näyttää työkaluvihjeen, ja niiden valitseminen aktivoi liitetyn toiminnon. Mobiiliversiossa voit napauttaa näitä kuvakkeita aktivoidaksesi ne.

1. Avaa **[[Hallinnoi holveja|Holvinvaihdin]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Käytä **ohjetta** ![[lucide-help-circle.svg#icon]].
3. Avaa **[[Asetukset]]** ![[lucide-settings.svg#icon]].

Mobiiliversiossa voit määrittää pikatoiminnon nauhavalikossa. Lisätietoja löydät [[#Mobiili|mobiiliosiosta]] ja [[Mobiilisovellus]]-sivulta.

## Mukauta nauhavalikkoa

Mukautettu nauhavalikkoasettelu säilyy istuntojen välillä. Se synkronoituu muiden laitteiden ja mobiilisovelluksen kanssa, kun sovelluksen asetukset (tiedostoissa `workspace.json` ja `workspace-mobile.json`) synkronoidaan.

### Työpöytä

Työpöytäversiossa voit mukauttaa nauhavalikkoa seuraavasti:

- Järjestä nauhavalikkon toiminnot uudelleen raahaamalla ja pudottamalla kuvakkeet.
- Piilota tietyt toiminnot napsauttamalla hiiren oikealla painikkeella tyhjää tilaa nauhavalikossa ja poistamalla valinta toiminnoista, jotka haluat piilottaa.

#### Piilota nauha

Voit piilottaa nauhan kahdella tavalla:

- Napsauta nauhaa hiiren oikealla painikkeella ja valitse **Piilota valintanauha**.
- Avaa **[[Asetukset]]** → **Ulkoasu**, vieritä alas kohtaan **Lisäasetukset** ja poista käytöstä **Näytä valintanauha**.

#### Näytä nauha

Jos olet piilottanut nauhan ja haluat näyttää sen uudelleen:

1. Avaa **[[Asetukset]]** → **Ulkoasu**.
2. Vieritä alas kohtaan **Lisäasetukset**.
3. Ota käyttöön **Näytä valintanauha**.
4. Nauha ilmestyy jälleen ikkunan vasempaan reunaan.

> [!tip] Mukautettu CSS
> Jos käytät yhteisön teemaa tai mukautettua CSS:ää, varmista, ettei se piilota nauhavalikkoa mukautettujen tyylisääntöjen kautta.

### Mobiili

Obsidianin mobiiliversiossa voit suorittaa pikatoimintoja, järjestää kohteita uudelleen ja mukauttaa nauhavalikkoa. Pääset näihin mukautuksiin seuraavasti:

1. Avaa Obsidianin **[[Asetukset]]** ![[lucide-cog.svg#icon]].
2. Siirry **Ulkoasu**-osioon.
3. Vieritä alas **Lisäasetukset**-kohtaan.
4. Valitse **Hallinnoi**-painike **Nauhavalikko**-kohdan alta.

#### Pikatoiminto

Oletusarvoisesti pikatoiminto on asetettu arvoon "Avaa nauhavalikko" *lyhyellä painalluksella*. Jos valitset toisen vaihtoehdon pikatoiminnoksi:

- Valittu toiminto käynnistyy *lyhyellä painalluksella*.
- Nauhavalikkon käyttö muuttuu *pitkäksi painallukseksi*.

> [!info] Pikatoimintojen vaihtoehdot riippuvat Obsidianin asetuksista ja käyttöön otetuista sisäänrakennetuista lisäosista.

#### Järjestäminen ja näkyvyys

Muuttaaksesi kohteiden järjestystä nauhavalikossa, paina ja pidä **raahaa ja pudota** -painiketta ![[lucide-menu.svg#icon]] ja siirrä valittua kohdetta ylös tai alas.

Voit näyttää tai piilottaa kohteita nauhavalikossa käyttämällä punaista **poista** ![[lucide-minus-circle.svg#icon]] tai vihreää **lisää** ![[lucide-plus-circle.svg#icon]] -painiketta niiden näkyvyyden vaihtamiseen.
 
 ![[ribbon-rearrange-visibility.jpeg#interface]]
