---
permalink: bases/views/table
---
Tabel is een type [[Weergaven|weergave]] dat je kunt gebruiken in [[Introductie tot Bases|Bases]].

Selecteer ![[lucide-table.svg#icon]]  **Tabel** in het weergavemenu om bestanden als een tabel weer te geven met een rij voor elk bestand en kolommen voor [[Eigenschappen]] van dat bestand.

![Voorbeeld van een basis met een tabelweergave met een lijst boeken](bases-noshadow.png#interface)

## Instellingen

Tabelweergave-instellingen kunnen worden geconfigureerd in [[Weergaven#Weergave-instellingen|Weergave-instellingen]].

### Rijhoogte

Met rijhoogte kun je meer informatie weergeven. Kies tussen **kort**, **gemiddeld**, **hoog** en **extra hoog**.

## Samenvattingen

Je kunt samenvattingen aan een tabelkolom toevoegen om snel waarden te berekenen zoals totalen, gemiddelden of tellingen voor de rijen die momenteel zichtbaar zijn in de weergave.

Samenvattingen zijn gekoppeld aan de weergave, niet aan de basis. Elke weergave kan verschillende samenvattingen tonen voor dezelfde kolom.

### Een samenvatting toevoegen

1. Klik met de rechtermuisknop op de kolomkop in een tabelweergave.
2. Selecteer ![[lucide-calculator.svg#icon]] **Samenvatten…**.
3. Kies een van de ingebouwde samenvattingsfuncties, of selecteer ![[lucide-square-function.svg#icon]] **Samenvatting toevoegen** om je eigen samenvatting te definiëren.

De samenvatting verschijnt onderaan de kolom. Wanneer resultaten [[Weergaven#Resultaten sorteren en groeperen|gegroepeerd]] zijn, wordt de samenvatting voor elke groep bovenaan de groep weergegeven.

Zodra de samenvattingsbalk is toegevoegd, kun je meer samenvattingen voor andere kolommen toevoegen door op de samenvattingscel te klikken. De samenvattingsbalk wordt verborgen als alle samenvattingen zijn verwijderd.

### Ingebouwde samenvattingen

De volgende samenvattingen zijn standaard beschikbaar. Opties kunnen variëren afhankelijk van het eigenschapstype.

#### Alle eigenschapstypen

- **Geen waarde**: aantal rijen zonder waarde.
- **Gevuld**: aantal rijen met een waarde.
- **Uniek**: aantal verschillende waarden.

#### Getallen

- **Gemiddelde**: gemiddelde van alle numerieke waarden.
- **Max**: grootste waarde.
- **Mediaan**: mediane waarde.
- **Min**: kleinste waarde.
- **Bereik**: verschil tussen max en min.
- **Stddev**: standaardafwijking.
- **Som**: totaal van alle waarden.

#### Datums

- **Vroegste**: de kleinste/oudste datum.
- **Laatste**: de grootste/meest recente datum.
- **Bereik**: verschil tussen vroegste en laatste.

#### Selectievakje

- **Aangevinkt**: aantal rijen waar het selectievakje aan staat.
- **Niet aangevinkt**: aantal rijen waar het selectievakje uit staat.

### Aangepaste samenvattingen

Je kunt je eigen samenvatting definiëren met een formule:

1. Kies in het menu ![[lucide-calculator.svg#icon]] **Samenvatten…** de optie ![[lucide-square-function.svg#icon]] **Samenvatting toevoegen**.
2. Geef de samenvatting een naam.
3. Voer een formule in. De formule wordt uitgevoerd over de lijst met waarden in die kolom (bijvoorbeeld met een [[Functies|functie]] zoals `values.reduce(...)`).
4. Sla de samenvatting op.

Aangepaste samenvattingen zijn handig wanneer je een berekening nodig hebt die niet wordt gedekt door de ingebouwde opties.

## Sneltoetsen

Je kunt snel door een tabelweergave navigeren met de volgende muis- en [[Sneltoetsen voor bewerken|sneltoetsen]].

- Shift-klik maakt een celselectie.
- Klik met de rechtermuisknop op een celselectie om toegang te krijgen tot aanvullende acties voor die bestanden.

| Actie                                                                                                                                                 | Sneltoets            | macOS               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| De geselecteerde cellen kopiëren                                                                                                                      | `Ctrl+C`             | `Cmd+C`             |
| De geselecteerde cellen plakken                                                                                                                       | `Ctrl+V`             | `Cmd+V`             |
| Wijzigingen aan eigenschappen ongedaan maken                                                                                                          | `Ctrl+Z`             | `Cmd+Z`             |
| Wijzigingen aan eigenschappen opnieuw uitvoeren                                                                                                       | `Ctrl+Shift+Z`       | `Cmd+Shift+Z`       |
| Alle cellen in de huidige groep selecteren                                                                                                            | `Ctrl+A`             | `Cmd+A`             |
| Alle cellen in een bepaalde richting selecteren                                                                                                       | `Ctrl+Shift+Pijl`    | `Ctrl+Shift+Pijl`   |
| De kolom selecteren                                                                                                                                   | `Ctrl+Spatie`        |                     |
| De rij selecteren                                                                                                                                     | `Shift+Spatie`       |                     |
| De huidige cel activeren — voor selectievakjes schakelt dit het selectievakje, voor formules opent dit de formule-editor                               | `Enter`              |                     |
| Naar de eerste kolom gaan                                                                                                                             | `Home`               |                     |
| Naar de laatste kolom gaan                                                                                                                            | `End`                |                     |
| Omhoog en omlaag navigeren per paginahoogte                                                                                                           | `PageUp`,`PageDown`  |                     |
| De huidige celselectie wissen                                                                                                                         | `Esc`                |                     |
| De huidige cellen wissen                                                                                                                              | `Backspace`          |                     |
| Naar de volgende cel gaan                                                                                                                             | `Tab`                |                     |
| Naar de vorige cel gaan                                                                                                                               | `Shift-Tab`          |                     |
