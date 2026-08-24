---
permalink: import/csv
cssclasses:
  - soft-embed
---
Obsidian laat je gegevens importeren uit CSV-bestanden met behulp van de officiële [[Importeren|Importer-plug-in]]. Dit is handig als je tabelgegevens hebt opgeslagen in apps zoals Excel, Google Sheets, Numbers, Notion of Airtable.

CSV-import genereert Markdown-bestanden voor elke rij en een [[Introductie tot Bases|Basis]]-bestand dat alle geïmporteerde bestanden als tabel weergeeft.

Als je notities importeert vanuit een specifieke app, wil je misschien eerst de lijst met apps bekijken die worden ondersteund door de [[Importeren|Importer-plug-in]] om te controleren of er een specifieke converter is die de gegevens die je migreert beter behoudt.

## Notities aanmaken van CSV-gegevens in Obsidian

Je hebt de officiële Obsidian [[Importeren]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activeer de Importer-plug-in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Kies onder **Bestandsformaat** de optie **CSV (.csv).**
6. Selecteer de locatie van je CSV-bestand.
7. Selecteer **Importeren** om te configureren hoe gegevens in je CSV-bestand worden omgezet naar notities met [[Eigenschappen]].
8. Selecteer **Doorgaan** om het gegenereerde sjabloon te bekijken en voorbeelden van je rijen te bekijken.
9. Selecteer **Importeren** en wacht tot de import is voltooid.

## Configureren hoe CSV-velden worden geïmporteerd

In de veldconfiguratiestap kun je kiezen hoe gegevens worden geïmporteerd. Importer genereert een sjabloon op basis van de CSV-koppen, gebruikt de eerste kolom voor de initiële notitienaam en maakt een eigenschap aan voor elke kolom.

## Sjablonen

Gebruik [[Importeur-sjablonen|Importer-sjablonen]] om volledig te configureren hoe je gegevens worden geïmporteerd.

Elke CSV-kolom is beschikbaar via de kop. Als een kolom geen kop heeft, gebruikt Importer de gegenereerde kolomnaam.

Gebruik haakjesnotatie zodat spaties en leestekens veilig worden verwerkt:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Importeur-sjablonen#Variabelen]]
