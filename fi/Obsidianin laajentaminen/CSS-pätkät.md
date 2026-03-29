---
permalink: snippets
publish: true
mobile: true
description: Opi muuttamaan Obsidian-sovelluksen ulkoasun osia luomatta kokonaista teemaa.
---
Opi muokkaamaan Obsidian-sovelluksen ulkoasua ilman tarvetta [rakentaa teemaa](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Jos etsit ohjeita CSS:n käsittelyyn [[Johdanto Obsidian Publishiin|Obsidian Publishissä]], tutustu sivuun [[Mukauta sivustoasi]].

CSS on kieli, joka ohjaa HTML:n ulkoasua. Lisäämällä CSS-pätkiä voit muuttaa Obsidianin käyttöliittymän osia, kuten otsikoiden kokoa ja väriä. Obsidianissa on [CSS-muuttujia](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables), jotka helpottavat käyttöliittymän mukauttamista.

Obsidian etsii CSS-pätkiä holvin [[Asetuskansio|asetuskansiosta]].

## Pätkän lisääminen

Lisää CSS-pätkä **tietokoneella** ![[lucide-monitor-check.svg#icon]] seuraavasti:

1. Avaa **[[Asetukset]]** ![[lucide-settings.svg#icon]].
2. Valitse kohdasta **Ulkoasu → CSS-pätkät** vaihtoehto **Avaa pätkäkansio** ![[lucide-folder-open.svg#icon]].
3. Luo pätkäkansioon CSS-tiedosto, joka sisältää pätkäsi.
4. Valitse Obsidianissa kohdasta **Ulkoasu → CSS-pätkät** vaihtoehto **Lataa pätkät uudelleen** ![[lucide-refresh-cw.svg#icon]], jotta pätkä näkyy luettelossa.
5. Ota pätkä käyttöön napsauttamalla kytkintä.

Lisää CSS-pätkä **mobiilissa/tabletissa** ![[obsidian-icon-smartphone.svg#icon]] seuraavasti:

1. Avaa tiedostonhallinta ja etsi holvisi. Voit tarkistaa holvin sijainnin kohdasta _Hallinnoi holveja…_ napauttamalla holviasi ja katsomalla polkua.
2. Avaa [[Asetuskansio]] ja luo kansio nimeltä `snippets`, jos sitä ei ole olemassa.
3. Lisää CSS-pätkäsi tähän kansioon.
4. Avaa Obsidianin **[[Asetukset]]** ![[lucide-settings.svg#icon]].
5. Valitse vasemmalta **Ulkoasu**.
6. Vieritä alas kohtaan **CSS-pätkät**.
7. Napauta **Lataa pätkät uudelleen** ![[lucide-refresh-cw.svg#icon]] päivittääksesi luettelon.
8. Napauta kytkintä ottaaksesi pätkän käyttöön.

Vaihtoehtoisesti voit
- [[Synkronoi muistiinpanosi laitteiden välillä|Synkronoida]] muutokset synkronointipalvelullasi.
- Käyttää yhteisön lisäosaa pätkän luomiseen suoraan Obsidianissa.

Kun pätkä on käytössä, Obsidian tunnistaa automaattisesti CSS-pätkien muutokset ja soveltaa ne, kun tallennat tiedoston.

> [!tip] Obsidiania ei tarvitse käynnistää uudelleen, jotta muutokset tulevat voimaan. Saatat kuitenkin joutua käyttämään [[Komentovalikko|komentovalikon]] komentoa Lataa Obsidian uudelleen tallentamatta nähdäksesi muutokset nykyisessä teemassa tai muistiinpanossa.

## CSS:n kirjoittaminen Obsidianille

Obsidian tarjoaa useita tapoja, jotka tekevät CSS:n kirjoittamisesta helpompaa ja tehokkaampaa.

Siinä on lukuisia [CSS-muuttujia](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) Obsidianin osien helpoksi muokkaamiseksi sekä sisäänrakennettu [[Määreet#Määreen tyypit|määreen tyyppi]], jolla voit muuttaa yhden tai useamman muistiinpanon ulkoasua.

> [!example] Muuttujat
> Luo tiedosto nimeltä `headers.css` seuraavalla sisällöllä muuttaaksesi kuuden [[Muotoilun perussyntaksi#Otsikot|otsikkotason]] värit sateenkaaren väreiksi:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS-luokat
> Määritä mukautetun CSS-luokan nimi (tai luettelo CSS-luokista) ennalta määritettyyn [[Määreet|määreeseen]] `cssclasses`, jotta yksi tai useampi muistiinpano näyttää erilaiselta kuin muut.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Määreet**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> Jokaisessa muistiinpanossa, jossa `cssclasses`-määreessä on arvo `red-border`, kuvat näytetään punaisella reunuksella.

Varmistaaksesi, että CSS-tiedosto on kelvollinen ja oikein muotoiltu, suosittelemme sen tarkistamista työkalulla kuten [CSS Validation Service](https://jigsaw.w3.org/css-validator/), koska virheellinen CSS ei toimi.

## Lue lisää

- Jos CSS on sinulle uutta, tutustu Mozillan oppaaseen [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS).
- Lisätietoja Obsidianin tyylittelystä:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
