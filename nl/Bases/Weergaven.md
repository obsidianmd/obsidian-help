---
permalink: bases/views
---
Weergaven stellen je in staat om de informatie in een [[Introductie tot Bases|Base]] op meerdere manieren te organiseren. Een basis kan meerdere weergaven bevatten, en elke weergave kan een unieke configuratie hebben om bestanden weer te geven, te sorteren en te filteren.

Je kunt bijvoorbeeld een basis maken met de naam "Boeken" die aparte weergaven heeft voor "Leeslijst" en "Onlangs uitgelezen".

## Werkbalk

Bovenaan een basis bevindt zich een werkbalk waarmee je kunt werken met weergaven en hun resultaten.

- ![[lucide-table.svg#icon]] **Weergavemenu** — weergaven aanmaken, bewerken en wisselen.
- **Resultaten** — bestanden beperken, kopiëren en exporteren.
- ![[lucide-arrow-up-down.svg#icon]] **Sorteren** — bestanden sorteren en groeperen.
- ![[lucide-list-filter.svg#icon]] **Filter** — bestanden filteren.
- ![[lucide-list.svg#icon]] **Eigenschappen** — eigenschappen kiezen om weer te geven en [[Formules|formules]] aanmaken.
- ![[lucide-search.svg#icon]] **Zoeken** — zoeken naar items met behulp van hun weergegeven eigenschappen.
- ![[lucide-plus.svg#icon]] **Nieuw** — een nieuw bestand aanmaken in de huidige weergave.

## Weergaven toevoegen en wisselen

Er zijn twee manieren om een weergave aan een basis toe te voegen:

- Klik op de naam van de weergave linksboven en selecteer ![[lucide-plus.svg#icon]] **Weergave toevoegen**.
- Gebruik het [[Opdrachtenpaneel|opdrachtenpalet]] en selecteer **Bases: Weergave toevoegen**.

De eerste weergave in je lijst van weergaven wordt standaard geladen. Sleep weergaven aan hun pictogram om de volgorde te wijzigen.

## Weergave-instellingen

Elke weergave heeft eigen configuratie-opties. Om weergave-instellingen te bewerken:

1. Klik op de naam van de weergave linksboven.
2. Klik op de pijl naar rechts naast de weergave die je wilt configureren.

Je kunt ook *rechtsklikken* op de naam van de weergave in de werkbalk van de basis om snel toegang te krijgen tot de weergave-instellingen.

## Lay-out

Weergaven kunnen worden weergegeven met verschillende lay-outs, waaronder ![[lucide-table.svg#icon]] **tabel**, ![[lucide-list.svg#icon]] **lijst**, ![[lucide-layout-grid.svg#icon]] **kaarten** en ![[lucide-map.svg#icon]] **kaart**. Aanvullende lay-outs kunnen worden toegevoegd door [[Communityplug-ins]]. Sommige lay-outs worden nog ontwikkeld en vereisen [[Vroege-toegangsversies|vroege-toegangsversies]] van Obsidian.

| Lay-out                       | Beschrijving                                                                                                              | App&nbsp;versie |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------- |
| [[Tabelweergave\|Tabel]]     | Bestanden weergeven als rijen in een tabel. Kolommen worden gevuld vanuit [[Eigenschappen\|eigenschappen]] in je notities. | 1.9             |
| [[Kaartenweergave\|Kaarten]] | Bestanden weergeven als een raster van kaarten. Hiermee kun je galerijachtige weergaven met afbeeldingen maken.            | 1.9             |
| [[Lijstweergave\|Lijst]]     | Bestanden weergeven als een [[Basis opmaaksyntaxis#Lijsten\|lijst]] met opsommingstekens of genummerde markeringen.       | 1.10            |
| [[Kaartweergave\|Kaart]]     | Bestanden weergeven als punaises op een interactieve kaart. Vereist de Maps-plug-in.                                      | 1.10            |


## Filters

Open het ![[lucide-list-filter.svg#icon]] **Filter**-menu bovenaan een basis om filters toe te voegen.

Een basis zonder filters toont alle bestanden in je kluis. Filters beperken de resultaten zodat alleen bestanden worden getoond die aan specifieke criteria voldoen. Je kunt filters bijvoorbeeld gebruiken om alleen bestanden weer te geven met een specifiek [[Labels|label]] of binnen een specifieke map. Er zijn veel filtertypes beschikbaar.

Filters kunnen worden toegepast op alle weergaven in een basis, of op slechts één weergave door te kiezen uit de twee secties in het ![[lucide-list-filter.svg#icon]] **Filter**-menu.

- **Alle weergaven** past filters toe op alle weergaven in de basis.
- **Deze weergave** past filters toe op de actieve weergave.

#### Onderdelen van een filter

Filters hebben drie onderdelen:

1. **Eigenschap** — hiermee kies je een [[Eigenschappen|eigenschap]] in je kluis, inclusief [[Bases-syntaxis#Bestandseigenschappen|bestandseigenschappen]].
2. **Operator** — hiermee kies je hoe de voorwaarden worden vergeleken. De lijst met beschikbare operators hangt af van het eigenschapstype (tekst, datum, getal, enz.)
3. **Waarde** — hiermee kies je de waarde waarmee je vergelijkt. Waarden kunnen wiskunde en [[Functies|functies]] bevatten.

#### Voegwoorden

- **Alle volgende zijn waar** is een `en`-verklaring — resultaten worden alleen getoond als *alle* voorwaarden in de filtergroep zijn voldaan.
- **Een van de volgende is waar** is een `of`-verklaring — resultaten worden getoond als *een* van de voorwaarden in de filtergroep is voldaan.
- **Geen van de volgende is waar** is een `niet`-verklaring — resultaten worden niet getoond als *een* van de voorwaarden in de filtergroep is voldaan.

#### Filtergroepen

Filtergroepen stellen je in staat om complexere logica te creëren door combinaties van voegwoorden te maken.

#### Geavanceerde filtereditor

Klik op de codeknop ![[lucide-code-xml.svg#icon]] om de **geavanceerde filter**-editor te gebruiken. Dit toont de ruwe [[Bases-syntaxis|syntaxis]] voor het filter, en kan worden gebruikt met complexere [[Functies|functies]] die niet kunnen worden weergegeven via de grafische interface.

## Resultaten sorteren en groeperen

Open het ![[lucide-arrow-up-down.svg#icon]] **Sorteren**-menu om de resultaten in een weergave te sorteren en groeperen.

Je kunt resultaten rangschikken op een of meer eigenschappen in oplopende of aflopende volgorde. Dit maakt het eenvoudig om notities te sorteren op naam, laatst bewerkte tijd of elke andere eigenschap — inclusief formules.

Je kunt resultaten ook groeperen op een eigenschap om vergelijkbare items te organiseren in visueel onderscheidbare secties. Momenteel ondersteunt Obsidian groeperen op slechts één eigenschap.

### Een sortering toevoegen

1. Open het ![[lucide-arrow-up-down.svg#icon]] **Sorteren**-menu bovenaan de weergave.
2. Kies de eigenschap waarop je wilt sorteren (of groeperen).
3. Als je meerdere sorteringen hebt, sleep ze omhoog of omlaag met het ![[lucide-grip-vertical.svg#icon]] sleephandvat om hun prioriteit te wijzigen.

De opties voor het ordenen van resultaten hangen af van het eigenschapstype:

- **Tekst**: sorteer *alfabetisch* (A→Z) of in *omgekeerd alfabetische volgorde* (Z→A).
- **Getal**: sorteer van *kleinste naar grootste* (0→1) of *grootste naar kleinste* (1→0).
- **Datum en tijd**: sorteer op *oud naar nieuw* of *nieuw naar oud*.

### Een sortering verwijderen

1. Open het ![[lucide-arrow-up-down.svg#icon]] **Sorteren**-menu bovenaan de weergave.
2. Klik op de ![[lucide-trash-2.svg#icon]] prullenbakknop naast de sortering of groepering die je wilt verwijderen.

## Resultaten beperken, kopiëren en exporteren

### Resultaten beperken

Het *resultaten*-menu toont het aantal resultaten in de weergave. Klik op de resultatenknop om het aantal resultaten te beperken en toegang te krijgen tot aanvullende acties.

### Naar klembord kopiëren

Deze actie kopieert de weergave naar je klembord. Eenmaal op je klembord kun je het plakken in een Markdown-bestand of in andere documentapps, waaronder spreadsheets zoals Google Sheets, Excel en Numbers.

### CSV exporteren

Deze actie slaat een CSV op van je huidige weergave.

## Een weergave insluiten

Je kunt basisbestanden insluiten in [[Bestanden insluiten|elk ander bestand]] met de `![[Bestand.base]]`-syntaxis. De eerste weergave in de lijst wordt gebruikt. Je kunt de volgorde wijzigen door weergaven te slepen in het weergavemenu.

Om de standaardweergave voor een insluiting op te geven, gebruik je `![[Bestand.base#Weergave]]`.
