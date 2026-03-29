---
permalink: import/csv
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
7. Klicka på **Importera** för att konfigurera hur data i din CSV-fil kommer att konverteras till anteckningar med [[Egenskaper]].
8. Klicka på **Fortsätt** och vänta tills importen är klar.
9. Du är klar!

## Konfigurera hur CSV-fält importeras

I det andra steget av CSV-importen kan du välja hur data importeras med hjälp av en mall.

Varje kolumn i din CSV-fil tilldelas en variabel som kallas `{{column_name}}` som representerar namnet på rubriken i din fil. Du kan använda denna variabel för att definiera anteckningens titel, plats, innehåll och [[Egenskaper|egenskaper]].
