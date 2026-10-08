---
permalink: pdf
publish: true
mobile: true
description: 'Leer hoe je PDF''s kunt bekijken, doorzoeken en ernaar kunt linken in Obsidian, en hoe je een notitie als PDF kunt exporteren.'
---
Obsidian opent PDF-bestanden in een ingebouwde viewer. Je kunt ook een PDF insluiten in een notitie, naar een passage erin linken en elke notitie als PDF exporteren. Zie [[Geaccepteerde bestandsformaten]] voor de bestandstypen die Obsidian ondersteunt.

> [!info]+ Sommige functies zijn alleen beschikbaar op desktop
> De mobiele Obsidian-app kan niet zoeken in een PDF, een citaat of een koppeling naar een selectie kopiëren, of een notitie naar PDF exporteren.

## Een PDF openen

Selecteer in de [[Bestandsverkenner]] een PDF om het in een tabblad te openen.

> [!info]+ Annotaties worden niet ondersteund
> Obsidian ondersteunt het toevoegen van annotaties of markeringen aan een PDF niet. Gebruik een andere app om een PDF te markeren en open vervolgens het bijgewerkte bestand in je kluis.

De viewer heeft een werkbalk met de volgende knoppen. De mobiele Obsidian-app heeft dezelfde werkbalk.

- **Toon/verberg zijpaneel** toont of verbergt het zijpaneel, en **Zijpaneelopties** wijzigt wat het zijpaneel toont.
- **Uitzoomen** en **Inzoomen** wijzigen de grootte van de pagina.
- **Weergaveopties** wijzigt hoe pagina's worden ingedeeld.
- Het paginavak toont de huidige pagina. Voer een paginanummer in om naar die pagina te gaan.

Om met het PDF-bestand zelf te werken, zoals het hernoemen of verplaatsen, selecteer **Meer opties** ![[lucide-more-horizontal.svg#icon]]. Een PDF heeft minder items in dit menu dan een notitie. Zie [[Meer opties menu]].

## Navigeren in een PDF

Selecteer **Zijpaneelopties** en kies vervolgens wat je wilt weergeven.

- **Miniaturen** toont een klein voorbeeld van elke pagina.
- **Inhoudsopgave** toont de structuur van de PDF, als die er is.
- **Laat de pagina zien in de inhoudsopgave** markeert de huidige pagina in de inhoudsopgave.

Om naar een pagina te linken, klik je met de rechtermuisknop op de miniatuur en selecteer je **Link naar pagina N kopiëren**, waarbij N het paginanummer is. Plak de koppeling in een notitie.

Om naar een sectie te linken, klik je met de rechtermuisknop op een item in de inhoudsopgave en selecteer je **Link naar "Titel" kopiëren**, waarbij Titel de naam van het item is. Op mobiel houd je het item lang ingedrukt.

## Het uiterlijk van een PDF wijzigen

Selecteer **Weergaveopties** om de lay-out te wijzigen.

- **Scherm in de breedte vullen** en **Scherm in de hoogte vullen** passen de pagina aan de viewer aan.
- **Enkele pagina** toont één pagina tegelijk.
- **Twee pagina's (oneven)** toont pagina's naast elkaar, beginnend met een oneven pagina links. Bijvoorbeeld pagina's 1 en 2 worden samen getoond, en daarna pagina's 3 en 4.
- **Twee pagina's (even)** toont pagina's naast elkaar, beginnend met een even pagina links. Bijvoorbeeld pagina 1 wordt alleen getoond, en daarna worden pagina's 2 en 3 samen getoond.
- **Aan thema aanpassen** maakt de kleuren van de PDF donkerder wanneer je Obsidian-thema donker is.

## Zoeken in een PDF

Zoeken in een PDF is alleen beschikbaar op desktop. De mobiele Obsidian-app heeft geen zoekfunctie in de PDF-viewer.

1. Druk op `Ctrl+F` (Windows en Linux) of `Command+F` (macOS).
2. Voer in **Typ om te beginnen met zoeken...** de tekst in die je wilt vinden.
3. Selecteer de pijl omhoog of omlaag om tussen resultaten te navigeren.

Gebruik deze opties om te wijzigen hoe het zoeken werkt.

- **Hoofdletters moeten overeenkomen** komt exact overeen met hoofd- en kleine letters. Het is de **Aa**-knop in het zoekveld.
- **Alles markeren** markeert elk resultaat. Selecteer de instellingenknop naast de pijlen om deze optie te vinden.
- **Vergelijk diakrieten** behandelt letters met accenten als verschillende letters. Dit staat in hetzelfde instellingenmenu.
- **Hele woorden** vindt alleen hele woorden. Dit staat in hetzelfde instellingenmenu.

Selecteer de sluitknop om het zoeken te verlaten.

## Tekst kopiëren uit een PDF

Selecteer op desktop tekst in de PDF en klik er vervolgens met de rechtermuisknop op.

- **Kopiëren** kopieert de tekst.
- **Als citaat kopiëren** kopieert de tekst als een citaat, gevolgd door een koppeling naar de passage.
- **Link naar selectie kopiëren** kopieert een koppeling naar die passage, zodat je het in een notitie kunt plakken.

Een citaat ziet er zo uit wanneer je het in een notitie plakt.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Een koppeling naar een selectie bevat dezelfde koppeling op zichzelf.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Op mobiel toont het selecteren van tekst in een PDF het standaard tekstmenu van je apparaat. **Als citaat kopiëren** en **Link naar selectie kopiëren** zijn niet beschikbaar.

## Een PDF insluiten

Zie hoe je [[Bestanden insluiten#Een PDF insluiten in een notitie|een PDF kunt insluiten in een notitie]] om een PDF in een notitie weer te geven. Een ingesloten PDF heeft dezelfde werkbalk als de viewer. Selecteer **Dit blok aanpassen** om de insluitkoppeling te wijzigen.

## Een notitie exporteren naar PDF

Je kunt elke notitie als PDF exporteren op desktop. Exporteren naar PDF is niet beschikbaar in de mobiele Obsidian-app.

1. Open de notitie die je wilt exporteren.
2. Open het [[Opdrachtenpaneel|opdrachtenpalet]] en selecteer **Exporteer naar PDF**. Je kunt ook **Meer opties** ![[lucide-more-horizontal.svg#icon]] in de notitie selecteren en vervolgens **Exporteer naar PDF** kiezen.
3. Kies je instellingen.
    - **Bestandsnaam als titel toevoegen** voegt de bestandsnaam toe bovenaan de PDF.
    - **Paginagrootte** stelt het papierformaat in. Je kunt kiezen uit A3, A4, A5, Legal, Letter of Tabloid.
    - **Liggend** draait de pagina's zijwaarts.
    - **Marge** stelt de paginamarge in op **Standaard**, **Minimaal** of **Geen**.
    - **Verklein percentage** schaalt de inhoud op elke pagina. Bij 100 blijft de inhoud op volledige grootte. Lagere waarden maken de tekst en afbeeldingen kleiner, zodat er meer op elke pagina past.
4. Selecteer **Exporteer naar PDF**.
5. Kies waar je het bestand wilt opslaan.

> [!tip]- Een notitie exporteren met een donker thema
> Exports gebruiken altijd een lichte opmaak, zelfs als je thema donker is. Om het uiterlijk van een export te wijzigen, kun je een [[CSS-fragmenten|CSS-snippet]] gebruiken. Het Obsidian-forum heeft voorbeelden van snippets voor afdrukken en exporteren.[^1]

[^1]: Zie [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) en [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
