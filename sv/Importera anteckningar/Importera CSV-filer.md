---
permalink: import/csv
cssclasses:
  - soft-embed
---
Obsidian låter dig importera data från CSV-filer med det officiella [[Importerare|Importerare-tillägget]]. Detta är användbart om du har tabulär data lagrad i appar som Excel, Google Sheets, Numbers, Notion eller Airtable.

CSV-import genererar Markdown-filer för varje rad och en [[Introduktion till baser|bas]]-fil som visar alla importerade filer som en tabell.

Om du importerar anteckningar från en specifik app kan du först vilja granska listan över appar som stöds av [[Importerare|Importerare-tillägget]] för att kontrollera om det finns en specifik konverterare som bättre bevarar datan du migrerar.

## Skapa anteckningar från CSV-data i Obsidian

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget med kommandopaletten eller ribbon-ikonen.
5. Under **Formatering** välj **CSV (.csv).**
6. Välj platsen för din CSV-fil.
7. Välj **Importera** för att konfigurera hur data i din CSV-fil kommer att konverteras till anteckningar med [[Egenskaper]].
8. Välj **Fortsätt** för att granska den genererade mallen och förhandsgranska exempel från dina rader.
9. Välj **Importera** och vänta tills importen är klar.

## Konfigurera hur CSV-fält importeras

I fältkonfigurationssteget kan du välja hur data importeras. Importerare genererar en mall från CSV-rubrikerna, använder den första kolumnen som initialt anteckningsnamn och skapar en egenskap för varje kolumn.

## Mallar

Använd [[Mallar för Importer|Importerare-mallar]] för att fullt ut konfigurera hur din data importeras.

Varje CSV-kolumn är tillgänglig via sin rubrik. Om en kolumn saknar rubrik använder Importerare sitt genererade kolumnnamn.

Använd hakparentesnotation så att mellanslag och skiljetecken hanteras säkert:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Mallar för Importer#Variabler]]
