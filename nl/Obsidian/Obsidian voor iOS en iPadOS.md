---
permalink: ios
---
De mobiele Obsidian-app voor iOS en iPadOS brengt krachtige mogelijkheden voor het maken van notities naar je iPhone en iPad. Je kunt deze downloaden vanuit de [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Deze pagina behandelt iOS-specifieke functies, waaronder widgets, Siri-integratie en Opdrachten.

## Synchronisatie

Zie [[Notities synchroniseren tussen apparaten]] voor informatie over het synchroniseren van notities tussen apparaten.

## Widgets

Obsidian voor iOS biedt verschillende widgets om snel acties uit te voeren in je kluis.

> [!note] Opmerking
> Widgets zijn beschikbaar op iOS en iPadOS 18 en hoger.
> Widgets zijn niet beschikbaar wanneer je "Face ID vereisen" gebruikt om de app te ontgrendelen.


### Widgets voor vergrendelscherm en Bedieningspaneel

Widgets voor het vergrendelscherm en Bedieningspaneel stellen je in staat om:
- Een nieuwe notitie aan te maken
- Een specifieke notitie te openen
- De dagelijkse notitie te openen
- Zoeken te openen
- Obsidian te openen

### Widgets voor beginscherm

Widgets voor het beginscherm stellen je in staat om:
- Een notitie aan te maken
- Een notitie te bekijken
- Je dagelijkse notitie te openen

### Widgets aanpassen

Je kunt widgets aanpassen aan je werkwijze, zoals kiezen welke kluis je wilt gebruiken of een specifieke notitie opgeven om te openen.

- **Widgets voor beginscherm:** Tik en houd de widget ingedrukt en selecteer vervolgens **Wijzig widget**.
- **Widgets voor vergrendelscherm:** Houd je vergrendelscherm ingedrukt, tik op **Pas aan**, selecteer het vergrendelscherm en tik vervolgens op de widget die je wilt aanpassen.
- **Widgets voor Bedieningspaneel:** Open het Bedieningspaneel, tik op de **+**-knop linksboven om te beginnen met bewerken en tik vervolgens op de widget die je wilt aanpassen.

Configuratieopties voor de **Nieuwe notitie**-widget:

![[ios-new-note-configuration.png|400]]

Configuratieopties voor de **Notitie bekijken**-widget:

![[ios-view-note-configuration.png|400]]

## Opdrachten

Obsidian integreert met de Opdrachten-app van Apple, waarmee je krachtige automatiseringen kunt maken. Beschikbare opdrachten zijn:

- **Open een notitie** — Open een specifieke notitie in je kluis
- **Maak een nieuwe notitie** — Maak een nieuwe notitie in je kluis
- **Dagelijkse notitie openen** — Ga direct naar de dagelijkse notitie van vandaag
- **Vastleggen in dagnotitie** — Voeg tekst toe aan het begin of einde van de dagnotitie zonder de Obsidian-app te openen
- **Vastleggen in bladwijzer** — Voeg tekst toe aan het begin of einde van een notitie met bladwijzer zonder de Obsidian-app te openen

Vastlegopdrachten zijn bijzonder handig voor het snel maken van notities, omdat je hiermee op de achtergrond inhoud aan een notitie kunt toevoegen.

## Deelvenster

Met het Deelvenster van Obsidian kun je inhoud van webpagina's vastleggen. Het werkt ook met apps zoals YouTube en andere sociale netwerken.

> [!note]
> - Het native Deelvenster is beschikbaar op iOS en iPadOS 18 en hoger.
> - De Deelvenster-functies die in dit gedeelte worden beschreven, vereisen Obsidian 1.13.0 of hoger.

Gebruik het Deelvenster om snel inhoud vanuit een andere app naar Obsidian te sturen:
1. Tik in een andere app op de **Deel**-knop.
2. Selecteer **Obsidian**.
3. Kies een Locatie.
4. Controleer of bewerk de vastgelegde inhoud.
5. Tik op **Opslaan**.

![[ios-share-sheet-extension.png|400]]

### Locaties

Met Locaties kun je bepalen waar de gedeelde inhoud naartoe moet voordat je deze opslaat.

Locaties kunnen vastleggen naar:
- **Nieuwe notitie** — Maak een nieuwe notitie in een kluis of map.
- **Dagelijkse notitie** — Voeg inhoud toe aan het begin of einde van de dagelijkse notitie van vandaag.
- **Notitie met bladwijzer** — Voeg inhoud toe aan het begin of einde van een notitie met bladwijzer.
- **Notitie** — Kies een bestaande notitie in je kluis.
- **Nieuwe bladwijzer** — Sla een gedeelde URL op in Obsidian-bladwijzers.

![[ios-share-sheet-locations.png|400]]

### Locaties aanpassen

Je kunt Locaties maken voor veelgebruikte werkwijzen, zoals het opslaan van artikelen in een inbox, het toevoegen van citaten aan je dagelijkse notitie of het toevoegen van koppelingen aan bladwijzers.

Om Locaties aan te passen:

1. Open Obsidian vanuit het iOS Deelvenster.
2. Tik op de huidige Locatie in de werkbalk.
3. Tik op de **+**-knop om een nieuwe Locatie te maken, of selecteer een bestaande Locatie om te bewerken.
4. Kies de kluis, het gedrag en optionele instellingen.

Afhankelijk van het type `Gedrag` kun je opties configureren zoals:
- Map
- Sjabloon
- Bladwijzergroep
- Positie aan het begin of einde toevoegen
- Of gedeelde koppelingen **Volledige tekst** of alleen de **URL** vastleggen

![[ios-share-sheet-add-location.png|400]]

### Een sjabloon gebruiken bij het delen

Je kunt een sjabloon gebruiken wanneer je inhoud deelt vanuit het Deelvenster. Met sjablonen kun je vastgelegde webinhoud opmaken met details zoals de paginatitel, auteur, bronwebsite en publicatiedatum.

Om een Locatie met een sjabloon in te stellen:

1. Open Obsidian vanuit het iOS Deelvenster.
2. Tik op de huidige Locatie in de werkbalk.
3. Tik op de **+**-knop om een nieuwe Locatie te maken.
4. Voer een naam in voor de Locatie.
5. Selecteer een kluis.
6. Stel **Gedrag** in op **Nieuwe notitie**.
7. Tik in het gedeelte **Optioneel** op **Sjabloon**.
8. Selecteer een notitie uit je kluis om als sjabloon te gebruiken.
9. Tik op **Opslaan** om de Locatie op te slaan.

![[ios-share-sheet-set-template.png|400]]

Wanneer je een koppeling deelt met deze Locatie, past Obsidian eerst het sjabloon toe en voegt vervolgens de gedeelde inhoud toe.

Ondersteunde sjabloonvariabelen:

| Variabele | Beschrijving |
| --- | --- |
| `{{author}}` | Auteur van het artikel |
| `{{description}}` | Beschrijving of samenvatting van het artikel |
| `{{domain}}` | Domeinnaam van de website |
| `{{favicon}}` | URL van het favicon van de website |
| `{{image}}` | URL van de hoofdafbeelding van het artikel |
| `{{published}}` | Publicatiedatum van het artikel, in het standaard datumformaat |
| `{{published: YYYY-MM-DD}}` | Publicatiedatum in een aangepast datumformaat |
| `{{site}}` | Naam van de website |
| `{{title}}` | Titel van het artikel |
| `{{wordCount}}` | Totaal aantal woorden in de geëxtraheerde inhoud |

Je kunt ook standaard sjabloonvariabelen voor datum en tijd gebruiken:

| Variabele | Beschrijving |
| --- | --- |
| `{{date}}` | Huidige datum |
| `{{date: YYYY-MM-DD}}` | Huidige datum in een aangepast formaat |
| `{{time}}` | Huidige tijd |
| `{{time: HH:mm}}` | Huidige tijd in een aangepast formaat |

## Siri-integratie

Je kunt Siri-spraakopdrachten gebruiken om met Obsidian te werken:

- "Capture using Obsidian"
- "Capture to Obsidian"
- "Open my daily note in Obsidian"
- "Search in Obsidian"

## Spotlight-integratie

Wanneer je zoekt naar "Obsidian" in iOS Spotlight, zie je snelle acties:
- Nieuwe notitie
- Zoeken
- Dagelijkse notitie
