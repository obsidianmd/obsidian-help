---
permalink: web-clipper/highlight
---
[[Johdanto Obsidian Web Clipperiin|Web Clipper]] mahdollistaa tekstin korostamisen verkkosivuilla ja tallennettavien elementtien valitsemisen Obsidianiin. Korostukset tallennetaan, joten voit nähdä ne palatessasi sivulle.

Korostukset voidaan tallentaa Obsidianiin laajennuksen avulla. Voit määrittää korostustyökalun asetukset laajennuksen asetuksissa.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Korostustyökalun käyttö

Korostustyökalua voidaan käyttää verkkosivuilla tai [[Lukija]]-näkymässä. Reader-näkymässä tekstin valitseminen antaa mahdollisuuden korostaa sen.

Voit myös lisätä valinnat automaattisesti korostuksiin aktivoimalla korostustyökalun:

- ![[lucide-highlighter.svg#icon]] **Korostuskuvake** laajennuksen paneelissa tai Reader-työkalupalkissa.
- **Pikanäppäin**, joka on mukautettavissa laajennuksen asetuksissa.
- **Kontekstivalikko** napsauttamalla hiiren oikealla painikkeella vierailemaasi verkkosivua.

Kun korostustyökalu on päällä, kaikki valittu teksti, kuvat ja elementit lisätään korostuksiisi. Kaikilla yllä mainituilla tavoilla voit myös poistua korostustyökalusta.

## Korostusten lisääminen muistiinpanoihin

Korostusten lisäämiseen leikattuihin muistiinpanoihin on kolme vaihtoehtoa:

- **Korosta sivun sisältö** — lisää korostukset suoraan tekstiin [[Obsidian Flavored Markdown|syntaksilla]] `==korostus==`.
- **Korvaa sivun sisältö** — palauttaa luettelon korostuksista ilman sivun sisältöä.
- **Ei korostuksia** — palauttaa alkuperäisen sisällön ilman korostuksia.
 
Nämä vaihtoehdot muuttavat `{{content}}`-[[Muuttujat|muuttujaa]] pohjatiedostossasi. Voit myös lisätä korostukset suoraan pohjatiedostoosi käyttämällä `{{highlights}}`-muuttujaa, esimerkiksi:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Korostusten tarkastelu ja haku

Kaikki luomasi korostukset ovat nähtävissä Korostukset-sivulla. Voit avata tämän sivun siirtymällä kohtaan **Asetukset** → **Korostustyökalu**.

## Korostusten vienti

Korostukset voidaan viedä `.json`-tiedostoon joko Asetukset-sivulta tai Korostukset-sivulta.
