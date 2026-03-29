---
permalink: import/apple-journal
---
Obsidian låter dig enkelt migrera dina journalanteckningar från Apple Journal med hjälp av [[Importerare|Importerare-tillägget]].
Detta kommer att konvertera dina journalanteckningar till hållbara Markdown-filer som du kan använda med Obsidian och många andra appar.

## Exportera dina data från Apple Journal

### På iPhone
Följ instruktionerna för [Skriv ut och exportera poster i Journal på iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Gå till Journal-appen på din iPhone.
2. Välj en journal eller tryck på Alla poster.
3. Tryck på Mer-knappen högst upp på skärmen.
4. Tryck på Exportera och välj sedan Exportera.
5. Välj en plats och tryck sedan på Vald-knappen.

### På Mac (Tahoe)
Följ instruktionerna för [Skriv ut och exportera poster i Journal på Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Gå till Journal-appen på din Mac.
2. Gå till Arkiv > Exportera och välj sedan Exportera.

## Importera Apple Journal-data till Obsidian

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget med kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** väljer du **Apple Journal (HTML Export)**.
6. I **Filer att importera** väljer du mappen med exporterade data, vanligtvis _AppleJournalEntries_, eller enskilda filer från _Entries_.
7. Granska och redigera de övriga importalternativen.
8. Välj Importera och vänta tills importen är klar.
9. Du är klar!


## Innehåll som stöds

Tillägget kan importera Journal-metadata som frontmatter, såsom _state-of-mind_, _contacts_, _location_ och _workout-route_.

> [!note] Observera
> Tillägget importerar inte resurser. Bilagor som foton, videor och ljudinspelningar ignoreras.
