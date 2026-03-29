---
permalink: publish/customize
publish: true
description: Leer hoe je het uiterlijk en de stijl van je Obsidian Publish-site kunt aanpassen.
---
Deze pagina legt uit hoe je het uiterlijk en de beleving van je [[Inleiding tot Obsidian Publish|Obsidian Publish]]-site kunt aanpassen.

## Statische bestanden

Je kunt je site aanpassen door de volgende bestanden naar je site te [[Je inhoud publiceren#Notities publiceren|publiceren]]:

- `publish.css` om aangepaste CSS toe te voegen
- `publish.js` om aangepast JavaScript toe te voegen
- `favicon-32x32.png` om het favicon in te stellen

**Opmerkingen:**

- [CSS-variabelen voor Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) zijn te vinden op onze documentatiesite.
- Aangezien Obsidian geen CSS- of JavaScript-bestanden ondersteunt, moet je een andere applicatie gebruiken om ze te maken en te bewerken.
- Zowel `publish.css` als `publish.js` moeten zich in de hoofdmap (`/`) van je kluis bevinden.
- Standaard verschijnen `publish.css` en `publish.js` niet in de verkenner, maar je kunt ze wel publiceren vanuit het dialoogvenster **Publiceer veranderingen**.
- Om aangepast JavaScript met `publish.js` te gebruiken, heb je [[Aangepaste domeinen]] nodig.

Voor favicons ondersteunt Obsidian Publish de volgende naamconventies, waarbij `32` de afmetingen van het pictogram in pixels voorstelt:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

We raden aan dat je een of meer van de volgende afmetingen aanlevert:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Je hebt flexibiliteit bij het plaatsen van favicons, overal binnen de kluis, zolang ze naar je site worden gepubliceerd.

## Een communitythema gebruiken

Om een van de communitythema's voor je site te gebruiken:

1. Open je kluis in de standaard bestandsverkenner van je besturingssysteem.
2. Ga naar de kluisinstellingenmap (standaard: `.obsidian`).
3. Open de map `themes`.
4. Kopieer het CSS-bestand van het thema dat je voor je site wilt gebruiken.
5. Plak het bestand in de hoofdmap van je kluis.
6. Hernoem het CSS-bestand naar `publish.css`.
7. [[Je inhoud publiceren#Notities publiceren|Publiceer]] `publish.css`.

**Opmerkingen:**

- Als de stijl niet binnen een paar minuten wordt bijgewerkt, probeer dan de browsercache te vernieuwen.
- Je kunt wisselen tussen lichte en donkere modus in de [[Sites beheren#Site-instellingen bekijken|site-instellingen]].
- Veel communitythema's gebruiken **Style Settings** voor aangepaste stijlen, maar deze instellingen werken niet op Obsidian Publish.

> [!tip] Thema's ontwikkelen
> Kun je het juiste thema niet vinden? Leer hoe je zelf een [Publish-thema bouwt](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme).

## UI-functies inschakelen

Je kunt verschillende UI-functies voor je site in- en uitschakelen, zoals de grafiekweergave of een inhoudsopgave.

Blader door de beschikbare UI-functies onder de secties **Leeservaring** en **Onderdelen** in de [[Sites beheren#Site-instellingen bekijken|site-instellingen]]

### Navigatie aanpassen

Binnen Obsidian Publish kun je de navigatievolgorde en weergave van bestanden en mappen in de Publish [[Bestandsverkenner]] aanpassen. Navigatieonderdelen worden standaard weergegeven in publicatievolgorde. Notities die niet gepubliceerd zijn, verschijnen niet in dit paneel.

#### Toegang tot opties voor navigatie aanpassen

1. Selecteer in de [[Werkbalk]] **Publiceer veranderingen** ![[lucide-send.svg#icon]] of open het [[Opdrachtenpaneel]] en typ **Publish: Publiceer veranderingen...**
2. Selecteer in het dialoogvenster **Publiceer veranderingen** de optie **Verander site-opties** ![[lucide-cog.svg#icon]].
3. Selecteer onder **Onderdelen instellingen**, naast **Navigatie aanpassen**, de knop **Beheren**.

Er verschijnt een nieuw pop-upvenster met de titel **Navigatie** over je venster **Verander site-opties**.

#### Navigatieonderdelen aanpassen

In de sectie **Navigatievoorbeeld** kun je de weergavevolgorde van je gepubliceerde inhoud aanpassen.

1. Selecteer de map of notitie die je wilt aanpassen.
2. Sleep de notitie of map omhoog of omlaag tot deze op de gewenste plek staat.
3. Selecteer rechtsonder in het venster **Navigatie** de optie **Klaar**.

Publish stuurt je navigatiewijzigingen naar je site.

#### Navigatieonderdelen verbergen en zichtbaar maken

Als er notities of mappen zijn die je hebt gepubliceerd, maar die je niet zichtbaar wilt hebben in je navigatie, kun je ervoor kiezen om die onderdelen te verbergen.

1. Selecteer de map of notitie die je wilt aanpassen.
2. Klik met de rechtermuisknop en selecteer **In navigatie verbergen**. Het onderdeel zou nu moeten verdwijnen uit het **Navigatievoorbeeld**.
3. Selecteer rechtsonder in het venster **Navigatie** de optie **Klaar**.

Publish stuurt je navigatiewijzigingen naar je site.

> [!tip] Je kunt verborgen bestanden **Toon verborgen onderdelen** door het selectievakje rechts van de titel **Navigatievoorbeeld** aan te vinken

## Veelgestelde vragen

**Kan ik bestanden van de ene map naar de andere verplaatsen binnen de navigatie?**

Nee. De bestandsnavigatiestructuur voor notities binnen mappen moet behouden blijven. Je kunt de notitievolgorde binnen mappen aanpassen (inclusief de hoofdmap van de kluis), en de mapvolgorde binnen andere mappen.

**Kan ik de volgorde van meerdere notities en mappen bewerken voordat ik Klaar selecteer?**

Ja.

**Hoe maak ik deze wijzigingen ongedaan?**

- **Weergavevolgorde**: Selecteer het pictogram **Herstel standaard** (pijl tegen de klok in) naast **Volgorde van navigatieonderdelen**. Dit herstelt je navigatieonderdelen naar alfabetische volgorde.
- **Verborgen status**: Selecteer het pictogram **Herstel standaard** (pijl tegen de klok in) naast **Pagina's en mappen uit de navigatie verbergen**. Dit herstelt je verborgen navigatieonderdelen naar een zichtbare status.
