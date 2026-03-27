---
permalink: import/csv
---
Obsidian giver dig mulighed for at importere data fra CSV-filer ved hjælp af det officielle [[Importer|Importer-plugin]]. Dette er nyttigt, hvis du har tabeldata gemt i applikationer som Excel, Google Sheets, Numbers, Notion eller Airtable.

CSV-import genererer Markdown-filer for hver række og en [[Introduktion til Baser|Base]]-fil, der viser alle de importerede filer som en tabel.

Hvis du importerer noter fra en bestemt applikation, kan det være en god idé først at gennemgå listen over applikationer, der understøttes af [[Importer|Importer-plugin]], for at tjekke om der findes en specifik konverter, der bedre bevarer de data, du migrerer.

## Opret noter fra CSV-data i Obsidian

Du skal bruge det officielle Obsidian [[Importer]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-pluginet.
4. Åbn **Importer**-pluginet ved hjælp af kommandopaletten eller værktøjslinjeikonen.
5. Under **Filformat** vælg **CSV (.csv).**
6. Vælg placeringen af din CSV-fil.
7. Klik på **Importér** for at konfigurere, hvordan data i din CSV-fil konverteres til noter med [[Egenskaber]].
8. Klik på **Fortsæt** og vent, til importen er fuldført.
9. Du er færdig!

## Konfigurér, hvordan CSV-felter importeres

I det andet trin af CSV-importen kan du vælge, hvordan data importeres ved hjælp af en skabelon.

Hver kolonne i din CSV-fil tildeles en variabel kaldet `{{column_name}}`, som repræsenterer navnet på overskriften i din fil. Du kan bruge denne variabel til at definere notens titel, placering, indhold og [[Egenskaber|egenskaber]].
