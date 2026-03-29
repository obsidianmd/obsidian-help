---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Opi linkittämään muistiinpanoihin, liitteisiin ja muihin tiedostoihin muistiinpanojesi sisällä käyttämällä sisäisiä linkkejä.'
---
Opi linkittämään muistiinpanoihin, liitteisiin ja muihin tiedostoihin muistiinpanoistasi käyttämällä _sisäisiä linkkejä_. Linkittämällä muistiinpanoja voit luoda tietoverkostoja. ^b15695

Obsidian voi automaattisesti päivittää holvin sisäiset linkit, kun muutat tiedoston nimeä. Jos haluat, että sinulta kysytään ensin, voit poistaa toiminnon käytöstä kohdasta:

**[[Asetukset]]** → **[[Asetukset#Tiedostot ja linkit|Tiedostot ja linkit]]** → **[[Asetukset#Päivitä sisäiset linkit aina|Päivitä sisäiset linkit aina]]**.

## Sisäisten linkkien tuetut muodot

Obsidian tukee seuraavia linkkimuotoja:

- Wikilinkki: `[[Three laws of motion]]` tai `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` tai `[Three laws of motion](Three%20laws%20of%20motion.md)`

Yllä olevat esimerkit ovat samanarvoisia, ja ne näyttävät samalta muokkaimessa ja linkittävät samaan muistiinpanoon.

> [!note] Huom
> Kun käytät Markdown-muotoa, muista [URL-koodata](https://en.wikipedia.org/wiki/Percent-encoding) linkin kohde. Esimerkiksi välilyönneistä tulee `%20`.

Oletuksena Obsidian luo linkit wikilinkki-muodossa sen tiiviimmän syntaksin vuoksi. Jos yhteensopivuus muiden sovellusten kanssa on sinulle tärkeää, voit poistaa wikilinkit käytöstä ja käyttää sen sijaan Markdown-linkkejä.

Markdown-muodon käyttöönotto:

1. Avaa **[[Asetukset]]**.
2. Poista kohdasta **Tiedostot ja linkit** käytöstä asetus **Käytä \[\[wikilinkkejä\]\]**.

Vaikka poistaisit wikilinkki-muodon käytöstä, voit silti täydentää linkkejä automaattisesti kirjoittamalla kaksi hakasulkua `[[`. Kun valitset jonkin ehdotetuista tiedostoista, Obsidian luo sen sijaan Markdown-linkin.

> [!note] Virheelliset merkit
> Merkkijono, joka sisältää seuraavia merkkejä, ei välttämättä toimi linkkinä: `# | ^ : %% [[ ]]`.
> 
> Suosittelemme välttämään näitä merkkejä ja noudattamaan [turvallisia tiedostonimeämiskäytäntöjä](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Linkitä tiedostoon

Luodaksesi linkin muokkausnäkymässä voit käyttää jompaakumpaa seuraavista tavoista:

- Kirjoita muokkaimeen `[[` ja valitse sitten tiedosto, johon haluat luoda linkin.
- Valitse tekstiä muokkaimessa ja kirjoita sitten `[[`.
- Avaa [[Komentovalikko]] ja valitse sitten Lisää sisäinen linkki.

![[Pikavaihdin#^search-autocomplete-large]]

Vaikka voit linkittää mihin tahansa [[Hyväksytyt tiedostomuodot|hyväksyttyyn tiedostomuotoon]], muihin kuin Markdown-tiedostoihin linkittäminen vaatii tiedostopäätteen, kuten `[[Kuva 1.png]]`.

> [!tip] Sisäisen linkin eteen lisätty huutomerkki (!) mahdollistaa linkitetyn sisällön upottamisen. Lisätietoja löydät kohdasta [[Upota tiedostoja]].

> [!info] Pois jätettävät tiedostot
> Tiedostot, jotka vastaavat [[Asetukset#Pois jätettävät tiedostot|Pois jätettävät tiedostot]] -malleja, näytetään linkkiehdotuksissa alemmalla prioriteetilla sisäisiä linkkejä luotaessa.

## Linkitä muistiinpanon otsikkoon

Voit linkittää muistiinpanojen tiettyihin otsikoihin, joita kutsutaan myös _ankkurilinkeiksi_.

**Linkittäminen saman muistiinpanon otsikkoon**

Linkittääksesi saman muistiinpanon otsikkoon kirjoita `[[#`, jolloin näet luettelon muistiinpanon otsikoista, joihin voit linkittää.

Esimerkiksi `[[#Esikatsele linkitettyä tiedostoa]]` luo linkin kohtaan [[#Esikatsele linkitettyä tiedostoa]].

**Linkittäminen toisen muistiinpanon otsikkoon**

Linkittääksesi toisen muistiinpanon otsikkoon lisää linkki kohteen loppuun risuaita (`#`) ja sen jälkeen otsikkoteksti.

Esimerkiksi `[[Tietoa Obsidianista#Linkit ovat ensiluokkaisia kansalaisia]]` luo linkin kohtaan [[Tietoa Obsidianista#Linkit ovat ensiluokkaisia kansalaisia]].

**Linkittäminen alaotsikkoihin**

Voit lisätä useita risuaitoja jokaiselle alaotsikolle.

Esimerkiksi `[[Apua ja tuki#Questions and advice#Report bugs and request features]]` luo linkin kohtaan [[Apua ja tuki#Questions and advice#Report bugs and request features]].

**Otsikoiden hakeminen koko holvista**

Voit hakea otsikoita koko holvista käyttämällä syntaksia `[[## otsikko]]`.

Esimerkiksi `[[##` hakee yleisesti koko holvista, kun taas `[[## team]]` hakee kaikki otsikot, jotka sisältävät sanan _team_.

> [!info]- Kuvakaappaus otsikkolinkin hakemisesta
>
> ![[internal-links-header.png#interface]]

## Linkitä muistiinpanon lohkoon

Lohko on muistiinpanon tekstiyksikkö, kuten kappale, lainaus tai luettelokohta.

Voit linkittää lohkoon lisäämällä linkin kohteen loppuun `#^` ja sen jälkeen yksilöllisen lohkotunnisteen. Esimerkiksi: `[[2023-01-01#^37066d]]`. Onneksi tunnistetta ei tarvitse etsiä manuaalisesti — kun kirjoitat sirkumfleksin (`^`), näkyviin tulee ehdotusluettelo, josta voit valita oikean lohkon.

*Yksinkertaisten kappaleiden* kohdalla lisää välilyönti, sirkumfleksi `^` ja lohkotunniste rivin loppuun:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

*Rakenteellisissa lohkoissa* (luettelot, lainaukset, nostolaatikot, taulukot) lohkotunnisteen tulee olla omalla rivillään, ja ennen ja jälkeen tulee olla tyhjä rivi:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

*Luettelon tiettyjen rivien* kohdalla lohkotunnisteen voi sijoittaa suoraan luettelomerkin yhteyteen:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Emme tue linkkejä lainausten, nostolaatikoiden tai taulukoiden tiettyihin osiin.

**Lohkojen hakeminen koko holvista**

Voit myös hakea linkitettäviä lohkoja koko holvista käyttämällä syntaksia `[[^^lohko]]`. Lohkoiksi luokitellaan kuitenkin enemmän kohteita kuin [[#Linkitä muistiinpanon otsikkoon|otsikkolinkeissä]], joten tämä luettelo on huomattavasti pidempi.

> [!info]- Kuvakaappaus lohkolinkin hakemisesta
> ![[link-block-heading.png#interface]]

Voit myös luoda ihmisen luettavia lohkotunnisteita lisäämällä välilyönnin, sirkumfleksin (`^`) ja tunnisteen. Lohkotunnisteet voivat sisältää vain latinalaisia kirjaimia, numeroita ja tavuviivoja.

Lisää esimerkiksi `^quote-of-the-day` lohkon loppuun:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Nyt voit linkittää lohkoon kirjoittamalla `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Yhteensopivuus
> Lohkoviittaukset ovat Obsidianin oma ominaisuus eivätkä osa Markdown-standardia. Lohkoviittauksia sisältävät linkit eivät toimi Obsidianin ulkopuolella.

## Muuta linkin näytettävää tekstiä

Oletuksena Obsidian näyttää linkin tekstin sellaisenaan. Esimerkiksi:
- `[[Example]]` näkyy muodossa [[Example]]
- `[[Example#Details]]` näkyy muodossa [[Example#Details]]

Voit muuttaa linkin näkymistapaa muokkaamalla sen näytettävää tekstiä:

**Wikilinkki-muoto**:
Käytä pystyviivaa (`|`) muuttaaksesi näytettävää tekstiä.

- `[[Example|Mukautettu nimi]]` näkyy muodossa [[Example|Mukautettu nimi]]
- `[[Example#Details|Osion nimi]]` näkyy muodossa [[Example#Details|Osion nimi]]

**Markdown-muoto**:
Käytä `[Näytettävä teksti](Linkin URL)` muokataksesi linkin ulkoasua.

- `[Mukautettu nimi](Example.md)` näkyy muodossa [Mukautettu nimi](Example.md)
- `[Osion nimi](Example.md#Details)` näkyy muodossa [Osion nimi](Example.md#Details)

Tämä tapa on hyödyllinen yksittäisissä tilanteissa, joissa haluat muuttaa linkin ulkoasua tietyssä kontekstissa. Jos haluat määrittää vaihtoehtoisen linkkinimen, jota voit käyttää uudelleen koko holvissa, harkitse [[Aliakset|aliaksen]] käyttöä.

Esimerkiksi jos viittaat säännöllisesti muistiinpanoon `[[Three laws of motion]]` nimellä `[[The 3 laws]]`, sanan "3 laws" lisääminen aliakseksi mahdollistaa sen kirjoittamisen suoraan — eikä sinun tarvitse lisätä mukautettua näytettävää tekstiä joka kerta.

> [!tip] Vinkki
> Käytä [[#Muuta linkin näytettävää tekstiä|linkin näytettävää tekstiä]], kun haluat muokata linkin ulkoasua *tietyssä paikassa*.
> 
> Käytä [[Aliakset|aliaksia]], kun haluat viitata samaan muistiinpanoon *eri nimillä* koko holvissasi.
^callout-internal-links-link-text

## Esikatsele linkitettyä tiedostoa

> [!note] Huom
> Linkitettyjen tiedostojen esikatseluun sinun täytyy ensin ottaa käyttöön [[Sivun esikatselu]].

Esikatsele linkitettyä tiedostoa viemällä osoitin sisäisen linkin päälle. Muokkaustilassa paina `Ctrl` (tai `Cmd` macOS:ssä) samalla kun viet osoittimen linkin päälle. Tiedoston sisällön esikatselu ilmestyy osoittimen viereen.
