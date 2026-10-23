---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian låter dig migrera anteckningar från Tomboy och Gnote med det officiella [[Importerare|Importer-tillägget]]. Importer läser apparnas `.note`-filer direkt och konverterar deras XML-innehåll till Markdown.

## Hitta dina anteckningsfiler

Tomboy och Gnote lagrar normalt anteckningar i dessa mappar:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` eller `~/.local/share/gnote`

Den exakta platsen kan skilja sig om du har flyttat datamappen eller använder en annan version av appen.

## Importera dina Tomboy- eller Gnote-anteckningar

1. Öppna **[[Inställningar]] → Användartillägg** och [installera Importer](obsidian://show-plugin?id=obsidian-importer).
2. Aktivera Importer-tillägget.
3. Öppna **Importer** med [[Kommandopalett|kommandopaletten]] eller ribbon-ikonen.
4. Under **Filformat**, välj **Tomboy/Gnote (.note)**.
5. Välj enskilda `.note`-filer eller mappen som innehåller dem.
6. Granska importalternativen, genererad mall och förhandsgranska exempel.
7. Välj **Importera** och vänta tills importen är klar.

## Mallar

Använd [[Mallar för Importer|Importer-mallar]] för att fullt ut konfigurera hur din data importeras.

![[Mallar för Importer#Variabler]]
