---
permalink: data-storage
publish: true
mobile: true
description: Denna sida förklarar hur Obsidian lagrar sina data på din enhet.
---
Obsidian lagrar dina anteckningar som [[Grundläggande formateringssyntax|Markdown-formaterade]] oformaterade textfiler i ett _valv_. Ett valv är en mapp i ditt lokala filsystem, inklusive eventuella undermappar.

Eftersom anteckningar är oformaterade textfiler kan du använda andra textredigerare och filhanterare för att redigera och hantera anteckningar. Obsidian uppdaterar automatiskt ditt valv för att hänga med i eventuella externa ändringar.

Du kan skapa ett valv var som helst där ditt operativsystem tillåter. Obsidian synkroniserar med [[Introduktion till Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git och många andra tredjepartstjänster.

Du kan öppna flera mappar som individuella valv, till exempel för att separera anteckningar för arbete och skola.

> [!warning] Valv inom valv
> Eftersom [[Interna länkar]] är lokala för ett valv rekommenderar vi att du inte skapar valv inom valv. Länkar kanske inte uppdateras korrekt.

## Valvinställningar

Obsidian skapar en `.obsidian` [[Konfigurationsmapp|konfigurationsmapp]] i valvets rotmapp, som innehåller inställningar specifika för det valvet, såsom [[Snabbkommandon|tangentbordsgenvägar]], [[Teman|teman]] och [[Gemenskapstillägg|gemenskapstillägg]].

Som standard döljer de flesta operativsystem mappar som börjar med en punkt (`.`), så du kan behöva uppdatera inställningarna för din filhanterare för att se den.

- **macOS**: I Finder, tryck `Cmd+Shift+.` (punkt) för att visa dolda filer.
- **Windows**: [Visa dolda filer](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** I de flesta filutforskare, tryck `Ctrl + h` för att visa dolda filer.

> [!tip] Lägga till `.obsidian` i Git
> Filerna `.obsidian/workspace.json` och `.obsidian/workspaces.json` lagrar den aktuella arbetsytans layout och uppdateras varje gång du öppnar en ny fil. Om du använder [Git](https://git-scm.com) för att hantera ditt valv kanske du vill lägga till dessa filer i `.gitignore`.

## Globala inställningar

Obsidian lagrar globala inställningar i en systemmapp. Platsen för systemmappen beror på vilket operativsystem du använder.

- **macOS**: `/Users/dittanvändarnamn/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` eller `~/.config/obsidian/`

> [!warning] Skapa inte ett valv i systemmappen. Detta kan leda till skadad data eller dataförlust.

## IndexedDB

IndexedDB är en lågnivå-databas på klientsidan som Obsidian använder för backend-lagring. Den hjälper till att upprätthålla tillståndet för [[Introduktion till Obsidian Sync|Obsidian Sync]]-anslutningar och bevarar [[#Metadatacache]] när applikationen stängs.

> [!warning] Om Apples [Låsningsläge](<https://support.apple.com/en-us/105120>) är aktiverat och Obsidian inte är undantaget kommer dessa databasfiler inte att sparas, vilket kräver omindexering varje gång appen startas.

### Metadatacache

För att ge en snabb upplevelse när du använder appen upprätthåller Obsidian ett lokalt register över metadata om filerna i ditt valv som kallas **metadatacache**. Denna metadata driver många funktioner i appen, från grafvyn till dispositionsvyn.

Obsidian håller denna cache synkroniserad med filerna i ditt valv, men det är möjligt att datan hamnar ur synk med de underliggande filerna. Om detta händer med ditt valv kan du bygga om din metadatacache från appinställningarna i avsnittet *Filer och länkar*.
