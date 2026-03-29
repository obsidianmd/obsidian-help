---
permalink: import/notion
---
Obsidian låter dig enkelt migrera dina anteckningar från Notion med hjälp av [[Importerare|Importerare-tillägget]]. Detta konverterar dina Notion-data till hållbara Markdown-filer som du kan använda offline med Obsidian och många andra appar.

Obsidian erbjuder två sätt att importera dina Notion-data:

1. **API-import** bevarar hela din arbetsyta inklusive databaser och formler som konverteras till [[Introduktion till baser|baser]], men kräver en Notion-integrationstoken och en internetanslutning.
2. **Filimport** bevarar inte databaser men kräver ingen API-token eller internetanslutning.

## API-import

### Skapa en Notion API-integrationstoken

För att komma åt dina Notion-data via API:et behöver du en integrationstoken. Det här steget tar ungefär 2 minuter att slutföra.

Token är en lång sträng av siffror och bokstäver som vanligtvis börjar med `ntn_...` som gör det möjligt att ladda ner dina data från Notion.

1. Logga in på din [Notion Integrations](https://www.notion.so/profile/integrations/internal)-instrumentpanel.
2. Välj **New integration**.

![[notion-integration.png#interface]]

2. Ge din integration ett namn, t.ex. "Personal". Vilket namn som helst kan användas.
3. Välj den arbetsyta du vill exportera.
4. Klicka på **Save** och fortsätt till **Configure integration settings**.
5. Under fliken **Configuration** finns din API-token i fältet **Internal Integration Secret**.
6. Välj **Show** och sedan **Copy**.
7. Spara token på en säker plats som din lösenordshanterare.

![[notion-token.png#interface]]

Ge sedan din integration åtkomst till de Notion-sidor och databaser du vill importera.

1. Gå till fliken **Access** för integrationen du just skapade.
2. Klicka på **Edit access**.
3. Lägg till de sidor och databaser som du vill importera.

Nu kan du konvertera dina data med Obsidian Importerare.

### Importera dina Notion-data via API

Du behöver det officiella Obsidian [[Importerare]]-tillägget, som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget via kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** välj **Notion (API)**
6. Under **API-token**, klistra in din **Internal Integration Secret** från Notion.
7. Klicka på **Ladda** för att välja de databaser och sidor du vill importera.
8. Granska och redigera importalternativen.
9. Välj **Importera** och vänta tills importen är klar
10. Du är klar!

### Begränsningar

> [!info] API-import är nytt
> Notion API-importeraren är ny. På grund av komplexiteten i Notion-arbetsytor kan vissa specialfall inte ha beaktats. Om du stöter på problem med konverteringen, [skicka en felrapport](https://github.com/obsidianmd/obsidian-importer/issues) så att vi kan förbättra den.

På grund av Notions API-hastighetsbegränsningar kan import av stora arbetsytor ta avsevärd tid. Ha tålamod.

På grund av begränsningar i Notion API:et är viss data inte tillgänglig eller kan inte konverteras:

- Endast den primära vyn för varje databas importeras.
- [Länkade datakällor](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) importeras inte: *"Notions API stöder för närvarande inte länkade datakällor. När du delar en databas med din integration, se till att den innehåller den ursprungliga datakällan!"*
- `People`-funktioner: `name()` och `email()`
- `Text`-funktioner: `style()` och `unstyle()`

Dessutom kommer Importerare att göra följande ändringar:

- Sidor utan underliggande sidor eller databaser importeras som `[filnamn].md` istället för `[filnamn]/[filnamn].md`.
- Databaser representeras alltid som mappar med namnet `[databasnamn]` med en `[databasnamn].base`-fil inuti.

## Filimport

Filimport är ett alternativt sätt att importera dina Notion-data. Denna metod bevarar inte databaser men kräver ingen API-token eller internetanslutning.

### Exportera dina data från Notion

För att förbereda dina data för import behöver du exportera hela din arbetsyta med Notions HTML-exportformat. Vi rekommenderar att du inte använder Notions Markdown-export eftersom den utelämnar viktig data. Du måste ha administratörsåtkomst till Notion-arbetsytan för att exportera allt innehåll.

1. Gå till **[[Inställningar]]** högst upp i Notions sidofält.
2. Under **Workspace** välj **General**.
3. Hitta och välj **Export all workspace content**.
4. Under **Export format** välj **HTML**.
5. Välj **Include everything**.
6. Aktivera **Create folders for subpages**.
7. Du kommer att få en `.zip`-fil via e-post eller direkt i webbläsaren.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Importera din Notion .zip-fil

Du behöver det officiella Obsidian [[Importerare]]-tillägget, som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget via kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** välj **Notion (.zip)**
6. Välj `.zip`-filen med Notion-filer du vill importera. *Det rekommenderas att importera alla dina Notion-data på en gång så att interna länkar kan stämmas av korrekt.*
7. _Valfritt_, välj en mapp för importen. Dina Notion-sidor och databaser kommer att placeras inuti denna mapp.
8. Aktivera **Spara överordnade sidor i undermappar** för att behålla Notion-strukturen. *Observera att i Notion kan du skriva innehåll i mappar, detta är inte möjligt i Obsidian och dessa sidor kommer att läggas till som en undersida under mappen.*
9. Välj **Importera** och vänta tills importen är klar
10. Du är klar!

### Felsökning

Om du stöter på problem vid import från Notion:

- Se till att du använder **HTML** som exportformat i Notion, **inte Markdown**.
- Om Obsidian verkar frysa under importen, inaktivera gemenskapstillägg och försök igen.

Stötte du på något annat? Sök i [Importerare-repositoriet](https://github.com/obsidianmd/obsidian-importer/issues) för att se om andra har upplevt det.

#### Importera stora arbetsytor

Om du importerar en arbetsyta med flera gigabyte data kan exporten från Notion innehålla nästlade `.zip`-filer. I det fallet kan du se ett importfelmeddelande som ser ut ungefär så här:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Om du ser detta fel kan du packa upp filen från Notion och sedan importera de nästlade `Export-{id}-Part-1.zip`-filerna.
