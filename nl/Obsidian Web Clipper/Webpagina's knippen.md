---
permalink: web-clipper/capture
---
Zodra je de browserextensie [[Introductie tot Obsidian Web Clipper|Web Clipper]] hebt geïnstalleerd, kun je deze op verschillende manieren openen, afhankelijk van je browser:

1. Het Obsidian-pictogram in je browserwerkbalk.
2. Sneltoetsen, om de extensie vanaf je toetsenbord te activeren.
3. Contextmenu, door met de rechtermuisknop op de webpagina te klikken die je bezoekt.

Om een pagina op te slaan naar Obsidian, klik je op de knop **Toevoegen aan Obsidian**.

## Een pagina vastleggen

Wanneer je de extensie opent, haalt Web Clipper gegevens op van de huidige webpagina volgens de instellingen in je [[Obsidian Web Clipper/Sjablonen|sjabloon]]. Je kunt je eigen sjablonen aanmaken en de uitvoer aanpassen met [[Variabelen|variabelen]] en [[Filters|filters]].

Standaard probeert Web Clipper op intelligente wijze alleen de hoofdinhoud van het artikel te extraheren, exclusief andere elementen op de pagina. Je kunt dit gedrag echter op de volgende manieren overschrijven:

- Als een aangepast sjabloon aanwezig is, wordt je sjabloon gebruikt.
- Als een selectie aanwezig is, wordt de selectie gebruikt. Je kunt `Ctrl/Cmd+A` gebruiken om de hele pagina te selecteren.
- Als er [[Markeerder|markeringen]] aanwezig zijn, worden de markeringen gebruikt.

## Afbeeldingen downloaden

Afbeeldingen worden niet automatisch gedownload wanneer je Web Clipper gebruikt. In plaats daarvan verwijzen afbeeldingen naar hun webgebaseerde URL. Dit bespaart ruimte in je kluis, maar het betekent dat de afbeeldingen niet offline beschikbaar zijn, of als de URL niet meer werkt.

Je kunt afbeeldingen voor elk bestand in Obsidian downloaden met de [[Opdrachtenpaneel|opdracht]] genaamd **Bijlagen downloaden voor huidig bestand**. Deze opdracht kan ook worden gekoppeld aan een sneltoets in Obsidian.

## Sneltoetsen

Web Clipper bevat sneltoetsen die je kunt gebruiken om je workflow te versnellen. Om toetscombinaties te wijzigen, ga je naar **Web Clipper-instellingen** → **Algemeen** en volg je de instructies voor je browser. Toetscombinaties kunnen worden gewijzigd voor alle browsers behalve Safari, dat het bewerken van sneltoetsen niet ondersteunt.

| Actie                       | macOS          | Windows/Linux   |
| --------------------------- | -------------- | --------------- |
| Clipper openen              | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Snel knippen                | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Markeerder in-/uitschakelen | `Opt+Shift+H`  | `Alt+Shift+H`   |
| Lezer in-/uitschakelen      | `Opt+Shift+R`  | `Alt+Shift+R`   |

## Interfacefunctionaliteit

De Web Clipper-interface is verdeeld in vier secties:

1. **Koptekst** waar je van sjabloon kunt wisselen, [[Markeerder|markering]] en [[Lezer|leesmodus]] kunt inschakelen, en instellingen kunt openen.
2. **Eigenschappen** toont de [[Eigenschappen|metadata]] die uit de pagina zijn geëxtraheerd en als [[Eigenschappen]] in Obsidian worden opgeslagen.
3. **Notitie-inhoud** die naar Obsidian wordt opgeslagen.
4. **Voettekst** waarmee je de kluis en map kunt selecteren, en kunt toevoegen aan Obsidian.

Koptekstfunctionaliteit omvat:

- ![[lucide-chevrons-up-down.svg#icon]] **Sjabloon**-schakelaar om opgeslagen [[Obsidian Web Clipper/Sjablonen|sjablonen]] te gebruiken die zijn toegevoegd in de extensie-instellingen.
- ![[lucide-more-horizontal.svg#icon]] **Meer**-knop om paginavariabelen weer te geven die je in sjablonen kunt gebruiken.
- ![[lucide-highlighter.svg#icon]] **Markeerder**-knop om [[Markeerder|markering]] in te schakelen.
- ![[lucide-book-icon.svg#icon]] **Lezer**-knop om [[Lezer|leesweergave]] in te schakelen.
- ![[lucide-picture-in-picture-2.svg#icon]] **Insluiten**-knop om Web Clipper van de pop-up naar de pagina te verplaatsen.
- ![[lucide-settings.svg#icon]] **Instellingen**-knop om de extensie-instellingen te openen.

Voettekstfunctionaliteit omvat:

- **Toevoegen aan Obsidian**-knop om gegevens naar Obsidian op te slaan.
- **Kluis**-dropdown om te wisselen tussen opgeslagen kluizen die zijn toegevoegd in de Web Clipper-instellingen.
- **Map**-veld om te bepalen in welke map wordt opgeslagen.
- **Interpreter** om [[Webpagina's interpreteren|prompts in natuurlijke taal]] op de pagina uit te voeren.
