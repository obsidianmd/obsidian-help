---
permalink: import/csv
---
Obsidian laat je gegevens importeren uit CSV-bestanden met behulp van de officiële [[Importer|Importer-plug-in]]. Dit is handig als je tabelgegevens hebt opgeslagen in apps zoals Excel, Google Sheets, Numbers, Notion of Airtable.

CSV-import genereert Markdown-bestanden voor elke rij en een [[Introductie tot Bases|Basis]]-bestand dat alle geïmporteerde bestanden als tabel weergeeft.

Als je notities importeert vanuit een specifieke app, wil je misschien eerst de lijst met apps bekijken die worden ondersteund door de [[Importer|Importer-plug-in]] om te controleren of er een specifieke converter is die de gegevens die je migreert beter behoudt.

## Notities aanmaken van CSV-gegevens in Obsidian

Je hebt de officiële Obsidian [[Importer]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activeer de Importer-plug-in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Kies onder **Bestandsformaat** de optie **CSV (.csv).**
6. Selecteer de locatie van je CSV-bestand.
7. Klik op **Importeren** om te configureren hoe gegevens in je CSV-bestand worden omgezet naar notities met [[Eigenschappen]].
8. Klik op **Doorgaan** en wacht tot de import is voltooid.
9. Je bent klaar!

## Configureren hoe CSV-velden worden geïmporteerd

In de tweede stap van de CSV-import kun je kiezen hoe gegevens worden geïmporteerd met behulp van een sjabloon.

Elke kolom in je CSV-bestand krijgt een variabele genaamd `{{column_name}}` die de naam van de kop in je bestand vertegenwoordigt. Je kunt deze variabele gebruiken om de titel, locatie, inhoud en [[Eigenschappen|eigenschappen]] van de notitie te definiëren.
