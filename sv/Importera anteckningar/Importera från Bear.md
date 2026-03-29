---
permalink: import/bear
---
Obsidian låter dig enkelt migrera dina anteckningar från Bear med hjälp av [[Importerare|Importerare-tillägget]]. Detta konverterar dina Bear-data till hållbara Markdown-filer som du kan använda med Obsidian och många andra appar.

## Exportera dina data från Bear

Obsidian använder Bears säkerhetskopieringsformat `.bear2bk`-filer. Du hittar Bears instruktioner för att skapa säkerhetskopian [på Bears webbplats](https://bear.app/faq/backup-restore/).

1. Öppna Bear.
2. Skapa en säkerhetskopia
	1. På macOS: **File** → **Backup notes**.
	2. På iOS: klicka på mer-menyn (⋮) högst upp i sidofältet och välj **Backup all notes**.
3. Välj en plats för din säkerhetskopia.
4. Klicka på **Export notes**.
5. Du bör nu ha en `.bear2bk`-fil som innehåller alla dina anteckningar.

## Importera dina Bear-data till Obsidian

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget via kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** välj **Bear (.bear2bk)**.
6. Välj platsen för din Bear-säkerhetskopia.
7. Klicka på **Importera** och vänta tills importen är klar.
8. Du är klar!
