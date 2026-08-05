---
permalink: import/airtable
---
Obsidian låter dig migrera dina data från Airtable med hjälp av [[Importerare|Importerare-tillägget]]. Detta konverterar dina Airtable-baser till hållbara Markdown-filer som du kan använda offline med Obsidian och många andra appar.

Varje tabell blir en mapp med anteckningar där varje post motsvarar en anteckning, plus en [[Introduktion till baser|Bas]]-fil som återskapar tabellen och dess vyer. Eftersom det använder Airtable API kräver importen en personlig åtkomsttoken och en internetanslutning.

## Skapa en personlig åtkomsttoken för Airtable

För att komma åt dina Airtable-data via API:et behöver du en personlig åtkomsttoken. Det här steget tar ungefär 1 minut att slutföra.

Token är en lång sträng av siffror och bokstäver som vanligtvis börjar med `pat...` och som gör det möjligt att ladda ner dina data från Airtable.

1. Logga in på Airtable och gå till sidan [Personal access tokens](https://airtable.com/create/tokens) i dina kontoinställningar.
2. Välj **Create new token**.
3. Ge din token ett namn, t.ex. "Obsidian". Vilket namn som helst kan användas.
4. Under **Scopes**, lägg till `data.records:read` och `schema.bases:read`.
5. Under **Access**, lägg till de baser du vill importera, eller välj alla baser i en arbetsyta.
6. Välj **Create token**, sedan **Copy** för att kopiera token.
7. Spara token på ett säkert ställe, som din lösenordshanterare.

Airtable visar token bara en gång. Om du tappar bort den, skapa en ny.

## Importera dina Airtable-data

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Användartillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget med kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** välj **Airtable**.
6. Under **Airtable Personal Access Token**, klicka på **Länka...** för att lägga till en ny hemlighet. Som **ID** ger du den ett namn som `airtable`, och som **Hemlighet** klistrar du in din personliga åtkomsttoken.
7. Klicka på **Ladda** för att bläddra bland dina baser och välj sedan de tabeller du vill importera.
8. Granska och redigera importalternativen.
9. Välj **Importera** för att konfigurera hur dina fält ska konverteras till anteckningar med [[Egenskaper|egenskaper]].
10. Klicka på **Fortsätt** och vänta tills importen är klar.
11. Du är klar!

### Importalternativ

- **Konvertera formler** — välj om formel-, uppslags-, rollup- och räkningsfält ska skrivas om som [[Formler|Bases-formler]], med återfall till det värde Airtable beräknade när det inte finns någon motsvarighet, eller importeras enbart som statiska värden.
- **Ladda ner bilagor** — spara bifogade filer i ditt valv, med dina inställningar för bilagemapp och länkformat. När detta är inaktiverat, eller när en nedladdning misslyckas, länkar anteckningen till filens URL på Airtable istället.
- **Vyegenskapsnamn** — egenskapen som registrerar vilka Airtable-vyer en post tillhör. Varje vy i den genererade basen filtrerar på denna egenskap. Standardvärdet är `base`.
- **Inkrementell import** — lägger till en `airtable-id`-egenskap till varje anteckning så att en senare import kan hoppa över poster som redan har importerats. Vid en fullständig import tas denna egenskap bort igen.

## Konfigurera hur Airtable-fält importeras

I det andra steget av importen kan du välja hur varje fält importeras.

Varje fält i dina tabeller tilldelas en variabel som kallas `{{field_name}}`. Som standard blir varje fält en egenskap, och du kan använda dessa variabler för att byta namn på egenskaper, ändra deras värden eller skriva innehåll i brödtexten på varje anteckning.

Varje tabells primärfält används alltid som anteckningens titel, och poster placeras alltid i en mapp uppkallad efter deras tabell, så dessa alternativ går inte att konfigurera.

## Vad som importeras

För en bas som heter `Projects` med en `Tasks`-tabell skapar importeraren:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- En anteckning per post, med primärfältet som anteckningstitel och postens övriga fält som [[Egenskaper|egenskaper]].
- En `.base`-fil per tabell, med varje Airtable-vy mappad till en [[Vyer|Bases-vy]]:
	- **Grid** blir en [[Tabellvy]].
	- **Gallery** blir [[Kortvy]].
	- **List** blir en [[Listvy]].
	- Alla andra vytyper konverteras till tabellvy.
- Airtable-fälttyper mappas till Obsidians egenskapstyper, utan att skriva över typer du redan har angett.
- Länkade poster blir länkar till motsvarande anteckningar.
- Bilagor laddas ner till ditt valv med hjälp av dina valvinställningar.

## Begränsningar

> [!info] Airtable-import är nytt
> Airtable-importeraren är ny. Om du stöter på problem med konverteringen, [skicka in en felrapport](https://github.com/obsidianmd/obsidian-importer/issues) så att vi kan förbättra den.

På grund av Airtable API:ets hastighetsbegränsningar kan import av stora baser ta avsevärd tid. Ha tålamod.

På grund av begränsningar i Airtable API:et är vissa data inte tillgängliga eller kan inte konverteras:

- Rollup-värden importeras inte. API:et exponerar inte den aggregering som används för ett rollup-fälts beräknade värde, så bara egenskapsnamnet skrivs, tillsammans med en Bases-formel där fältets schema exponerar ett uttryck.
- Formler som använder funktioner som Obsidian inte har någon motsvarighet till, såsom `SWITCH`, `FIND`, `REGEX_EXTRACT` och `SQRT`, faller tillbaka på det statiska värdet från Airtable.
- Bara grid-, galleri- och listvyer importeras. Andra vytyper, som kalender, kanban, tidslinje och Gantt, ignoreras.
- Länkar till poster i tabeller du inte valde blir postens rena titel istället för en länk.
- Gränssnittsdesigner, automatiseringar, kommentarer och revisionshistorik importeras inte.
