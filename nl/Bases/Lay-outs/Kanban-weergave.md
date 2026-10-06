---
permalink: bases/views/kanban
---
Kanban is een type [[Weergaven|weergave]] dat je kunt gebruiken in [[Introductie tot Bases|Bases]].

Selecteer ![[lucide-kanban-square.svg#icon]] **Kanban** in het weergavemenu om bestanden weer te geven als kaarten georganiseerd in kolommen. Elke kolom vertegenwoordigt een waarde van de eigenschap die wordt gebruikt om resultaten te groeperen.


> [!note] Vereist Obsidian 1.14+
> Kanban-weergaven zijn beschikbaar in Obsidian 1.14 en later.


## Kaarten groeperen in kolommen

Een Kanban-weergave vereist een eigenschap om resultaten op te groeperen.

1. Selecteer **Groep** in de werkbalk. Op telefoons selecteer je **Scherm → Groep**.
2. Kies onder **Groeperen op** een eigenschap.

Bestanden zonder een waarde voor de geselecteerde eigenschap verschijnen in de kolom **Geen waarde**.

> [!info] 
> Als je groepeert op een formule of een bestandseigenschap anders dan `file.folder`, kun je geen kaarten of kolommen verplaatsen, of notities aanmaken vanuit de kolommen. Je kunt nog steeds [[Weergaven#Groepen herordenen, verbergen en toevoegen|groepsvolgorde en zichtbaarheid beheren]] in het menu **Groep**.

## Werken met kaarten en kolommen

- Sleep een kaart naar een andere kolom om de gegroepeerde eigenschap in die notitie bij te werken. Alleen Markdown-notities kunnen tussen kolommen worden verplaatst, behalve bij groepering op `file.folder`, waarbij het verplaatsen van een kaart het bestand naar die map verplaatst.
- Selecteer het pluspictogram in een kolomkop of ![[lucide-plus.svg#icon]] **Nieuw** onderaan een kolom om een notitie aan te maken met de waarde van die kolom.
- Sleep een kolomkop om de kolomvolgorde te wijzigen. Om de automatische volgorde te herstellen, open je **Groep** en kies je een automatische sorteervolgorde in plaats van **Handmatig**.
- Gebruik **Groep** om [[Weergaven#Groepen herordenen, verbergen en toevoegen|kolommen te herordenen, verbergen of toevoegen]].
- Gebruik het menu ![[lucide-list.svg#icon]] **Eigenschappen** om de eigenschappen te kiezen die op elke kaart worden weergegeven. De eerste eigenschap wordt weergegeven als de kaarttitel.

## Instellingen

Kanban-weergave-instellingen kunnen worden geconfigureerd in [[Weergaven#Weergave-instellingen|Weergave-instellingen]].

- Lege kolommen verbergen
- Kolombreedte
- Afbeeldingseigenschap
- Afbeelding passend maken
- Beeldverhouding van afbeelding

### Lege kolommen verbergen

Verbergt kolommen die geen kaarten bevatten.

### Kolombreedte

Bepaalt de breedte van elke kolom en de bijbehorende kaarten.

### Afbeeldingseigenschap

Kanban-kaarten ondersteunen een optionele omslagafbeelding die bovenaan de kaart wordt weergegeven. De ondersteunde eigenschapwaarden zijn dezelfde als voor de [[Kaartenweergave#Afbeeldingseigenschap|afbeeldingseigenschap in Kaartenweergave]].

### Afbeelding passend maken

Als je een afbeeldingseigenschap hebt geconfigureerd, bepaalt deze optie hoe de afbeelding op de kaart wordt weergegeven.

- **Bedekken:** De afbeelding vult het inhoudsvak van de kaart. Als de afbeelding niet past, wordt deze bijgesneden.
- **Inpassen:** De afbeelding wordt geschaald totdat deze binnen het inhoudsvak van de kaart past. De afbeelding wordt niet bijgesneden.

### Beeldverhouding van afbeelding

De hoogte van de omslagafbeelding wordt bepaald door de beeldverhouding. Pas deze optie aan om de afbeelding korter of hoger te maken.
