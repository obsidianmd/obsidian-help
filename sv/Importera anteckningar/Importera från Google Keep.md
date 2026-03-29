---
permalink: import/google-keep
---
Obsidian låter dig enkelt migrera dina anteckningar från Google Keep med hjälp av [[Importerare|Importerare-tillägget]]. Detta konverterar dina Google Keep-data till beständiga Markdown-filer som du kan använda med Obsidian och många andra appar.

## Exportera dina data från Google Keep

1. Gå till [Google Takeout](https://takeout.google.com/settings/takeout) och logga in på ditt Google-konto.
2. Klicka på **Avmarkera alla** i det övre högra hörnet.
3. Rulla ner och välj **Keep** från listan.
4. Rulla ner till botten av sidan och klicka på **Nästa steg**.
5. På nästa skärm klickar du på knappen **Skapa export**.
6. Ladda ner `.zip`-filen när den är tillgänglig.

## Importera dina Google Keep-data till Obsidian

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget med kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** välj **Google Keep (.zip).**
6. Välj platsen för din `.zip`-fil.
7. Klicka på **Importera** och vänta tills importen är klar.
8. Du är klar!

### Funktioner som stöds

- Alla checklistor importeras som toppnivåobjekt eftersom Google Keep inte exporterar information om indrag.
- Påminnelser och användartilldelningar på anteckningar importeras inte eftersom dessa funktioner inte stöds av Obsidian.
- All övrig information bör importeras som en kombination av innehåll och taggar.
