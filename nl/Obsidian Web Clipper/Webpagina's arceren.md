---
permalink: web-clipper/highlight
---
[[Introductie tot Obsidian Web Clipper|Web Clipper]] stelt je in staat om tekst op webpagina's te arceren en de elementen te selecteren die je wilt opslaan naar Obsidian. Arceringen worden bewaard zodat je ze kunt zien wanneer je terugkeert naar een pagina.

Arceringen kunnen worden opgeslagen naar Obsidian met behulp van de extensie. Je kunt markeerderopties definiëren in de extensie-instellingen.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## De markeerder gebruiken

De markeerder kan worden gebruikt op live webpagina's of in de [[Lezer]]. In de Reader-weergave geeft het maken van een tekstselectie je de optie om deze te arceren.

Je kunt ook automatisch selecties aan je arceringen toevoegen door de markeerder te activeren:

- ![[lucide-highlighter.svg#icon]] **Markeerderpictogram** in het extensiepaneel of de Reader-werkbalk.
- **Sneltoets**, aanpasbaar in de extensie-instellingen.
- **Contextmenu**, door met de rechtermuisknop op de webpagina te klikken die je bezoekt.

Zodra de markeerder is ingeschakeld, worden alle geselecteerde tekst, afbeeldingen en elementen aan je arceringen toegevoegd. Alle bovenstaande methoden stellen je ook in staat om de markeerder te verlaten.

## Arceringen aan notities toevoegen

Er zijn drie opties voor hoe arceringen worden ingevoegd in je geknipte notities:

- **Markeer de pagina-inhoud** — voegt arceringen direct toe aan de tekst met de [[Obsidian Flavored Markdown|syntaxis]] `==highlight==`.
- **Pagina-inhoud vervangen** — geeft een lijst van arceringen terug, zonder de pagina-inhoud.
- **Niets doen** — geeft de originele inhoud terug zonder arceringen.
 
Deze opties wijzigen de `{{content}}` [[Variabelen|variabele]] in je sjabloon. Je kunt arceringen ook direct aan je sjabloon toevoegen met de `{{highlights}}`-variabele, bijvoorbeeld:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Arceringen bekijken en doorzoeken

Alle arceringen die je maakt, kun je bekijken op je Arceringen-pagina. Je kunt deze pagina openen door naar **Instellingen** → **Markeerder** te gaan.

## Arceringen exporteren

Arceringen kunnen worden geëxporteerd naar een `.json`-bestand, zowel op de Instellingen-pagina als op de Arceringen-pagina.
