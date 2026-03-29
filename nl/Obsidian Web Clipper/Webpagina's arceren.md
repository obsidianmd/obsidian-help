---
permalink: web-clipper/highlight
---
[[Introductie tot Obsidian Web Clipper|Web Clipper]] stelt je in staat om tekst op webpagina's te arceren en de elementen te selecteren die je wilt opslaan naar Obsidian. Je arceringen worden bewaard, zodat je ze opnieuw kunt bekijken wanneer je terugkeert naar een pagina.

Arceringen kunnen worden [[Webpagina's knippen|vastgelegd]] en opgeslagen naar Obsidian wanneer je de extensie opent.

## Markeerder inschakelen

Je kunt het arceren op verschillende manieren inschakelen, afhankelijk van je browser:

- Het markeerderpictogram in het extensiepaneel.
- Sneltoetsen, om de extensie vanaf je toetsenbord te activeren.
- Contextmenu, door met de rechtermuisknop op de webpagina te klikken die je bezoekt.

Zodra arceren is ingeschakeld, kun je tekst, afbeeldingen en elementen selecteren die je wilt arceren.

## Markeerderinstellingen

Je kunt het gedrag van de markeerder wijzigen door naar de Web Clipper-instellingen te gaan. Hier kun je ook je arceringen exporteren naar een `.json`-bestand.

Er zijn drie opties voor hoe arceringen worden ingevoegd in je geknipte notitie via de `{{content}}` [[Variabelen|variabele]]:

- **Markeer de pagina-inhoud** — voegt arceringen direct toe aan de tekst met de [[Obsidian Flavored Markdown|syntaxis]] `==highlight==`.
- **Pagina-inhoud vervangen** — geeft een lijst van arceringen terug, zonder de pagina-inhoud.
- **Niets doen** — geeft de originele inhoud terug zonder arceringen.

Je kunt arceringen direct aan je sjabloon toevoegen met de `{{highlights}}`-variabele, bijvoorbeeld:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
