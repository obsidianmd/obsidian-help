---
permalink: uri
---
Obsidian URI är ett anpassat URI-protokoll som stöds av Obsidian och som låter dig utlösa olika åtgärder, som att öppna en anteckning eller skapa en anteckning. Obsidian URI möjliggör automatisering och arbetsflöden mellan appar.

## URI-format

Obsidian URI:er använder följande format:

```
obsidian://action?param1=value&param2=value
```

Parametern `action` är den åtgärd du vill utföra. Tillgängliga åtgärder inkluderar:

- `open` för att öppna en anteckning.
- `new` för att skapa eller lägga till i en befintlig anteckning.
- `daily` för att skapa eller öppna din dagliga anteckning.
- `unique` för att skapa en ny unik anteckning.
- `search` för att öppna en sökning.
- `choose-vault` för att öppna valvhanteraren.

> [!warning] Kodning
> Säkerställ att dina värden är korrekt URI-kodade. Till exempel måste snedstreck `/` kodas som `%2F` och mellanslag måste kodas som `%20`.
> 
> Detta är särskilt viktigt eftersom ett felaktigt kodat "reserverat" tecken kan bryta tolkningen av URI:n. [Se här för detaljer](https://en.wikipedia.org/wiki/Percent-encoding).

## Öppna anteckning

Åtgärden `open` öppnar ett Obsidian-valv, eller öppnar en fil inom det valvet.

### Exempel

- `obsidian://open?vault=my%20vault`
  Detta öppnar valvet `my vault`. Om valvet redan är öppet, fokuseras fönstret.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Detta öppnar valvet som identifieras av id:t `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Detta öppnar anteckningen `my note.md` i valvet `my vault`, förutsatt att filen finns.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Detta söker efter ett valv som innehåller sökvägen `/home/user/my vault/path/to/my note`. Sedan skickas resten av sökvägen till parametern `file`. Till exempel, om ett valv finns på `/home/user/my vault`, så skulle detta motsvara parametern `file` satt till `path/to/my note`.


> [!tip] Öppna en rubrik eller ett block
> Med korrekt URI-kodning kan du navigera till en rubrik eller ett block inom en anteckning. `Note%23Heading` skulle navigera till rubriken "Heading", medan `Note%23%5EBlock` skulle navigera till blocket "Block".

### Parametrar

- `vault` kan vara antingen valvnamnet eller valv-id:t[^1].
- `file` kan vara antingen ett filnamn eller en sökväg från valvroten till den angivna filen. Om filändelsen är `md` kan ändelsen utelämnas.
- `path` en absolut filsystemsökväg till en fil.
  - Att använda denna parameter åsidosätter både `vault` och `file`.
  - Detta gör att appen söker efter det mest specifika valvet som innehåller den angivna filsökvägen.
  - Sedan ersätter resten av sökvägen parametern `file`.
- `prepend` lägger till i början av filen och försöker sammanfoga egenskaper.
- `append` lägger till i slutet av filen och försöker också sammanfoga egenskaper.
- `paneType` (valfritt) avgör var anteckningen öppnas i gränssnittet.
  - om den inte anges ersätts den senast aktiva fliken.
  - `paneType=tab` öppna i en ny flik.
  - `paneType=split` öppna i en ny flikgrupp.
  - `paneType=window` öppna i ett fristående fönster (endast skrivbord).

## Skapa anteckning

Åtgärden `new` skapar en ny anteckning i valvet, valfritt med visst innehåll.

### Exempel

- `obsidian://new?vault=my%20vault&name=my%20note`
  Detta öppnar valvet `my vault` och skapar en ny anteckning som heter `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Detta öppnar valvet `my vault` och skapar en ny anteckning på `path/to/my note`.

### Parametrar

- `vault` kan vara antingen valvnamnet eller valv-id:t[^1]. Samma som åtgärden `open`.
- `name` filnamnet som ska skapas. Om detta anges väljs filplatsen baserat på dina inställningar för "Stället där nya anteckningar hamnar".
- `file` en absolut sökväg inom valvet, inklusive namnet. Åsidosätter `name` om det anges.
- `path` en globalt absolut sökväg. Fungerar liknande alternativet `path` i åtgärden `open`, som åsidosätter både `vault` och `file`.
- `paneType` (valfritt) avgör var anteckningen öppnas i gränssnittet. Samma som åtgärden `open`.
- `content` (valfritt) innehållet i anteckningen.
- `clipboard` (valfritt) använd urklippsinnehållet istället för att ange `content`.
- `silent` (valfritt) inkludera denna parameter om du inte vill öppna den nya anteckningen.
- `append` (valfritt) inkludera denna parameter för att lägga till i en befintlig fil om en sådan finns.
- `overwrite` (valfritt) skriv över en befintlig fil om en sådan finns, men bara om `append` inte är satt.
- `x-success` (valfritt) se [[#Använda x-callback-url-parametrar]].

## Skapa eller öppna daglig anteckning

Åtgärden `daily` skapar eller öppnar din dagliga anteckning. Tillägget [[Dagliga anteckningar]] måste vara aktiverat.

### Exempel

- `obsidian://daily?vault=my%20vault`
  Detta öppnar valvet `my vault` och skapar eller öppnar den dagliga anteckningen.

### Parametrar

Åtgärden `daily` accepterar samma parametrar som åtgärden `new`.

## Unik anteckning

Åtgärden `unique` skapar en ny unik anteckning i valvet. Tillägget [[Unik anteckningsskapare|Unik anteckningsskapare]] måste vara aktiverat.

### Exempel

- `obsidian://unique?vault=my%20vault`
  Detta öppnar valvet `my vault` och skapar en ny unik anteckning.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Detta öppnar valvet `my vault` och skapar en ny unik anteckning med innehållet `Hello World`.

### Parametrar

- `vault` kan vara antingen valvnamnet eller valv-id:t[^1]. Samma som åtgärden `open`.
- `paneType` (valfritt) avgör var anteckningen öppnas i gränssnittet. Samma som åtgärden `open`.
- `content` (valfritt) innehållet i anteckningen.
- `clipboard` (valfritt) använd urklippsinnehållet istället för att ange `content`.
- `x-success` (valfritt) se [[#Använda x-callback-url-parametrar]].

## Öppna sökning

Åtgärden `search` öppnar [[Sök]] i det angivna valvet, och utför valfritt en sökning.

### Exempel

- `obsidian://search?vault=my%20vault`
  Detta öppnar valvet `my vault` och öppnar [[Sök]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Detta öppnar valvet `my vault`, öppnar [[Sök]] och utför en sökning efter `Obsidian`.

### Parametrar

- `vault` kan vara antingen valvnamnet eller valv-id:t[^1]. Samma som åtgärden `open`.
- `query` (valfritt) söktermen att utföra.

## Öppna valvhanteraren

Åtgärden `choose-vault` öppnar [[Hantera valv|valvhanteraren]].

### Exempel

- `obsidian://choose-vault`

## Integrera med Hook

Denna Obsidian URI-åtgärd är avsedd att användas med [Hook](https://hookproductivity.com/).

### Exempel

`obsidian://hook-get-address`

### Parametrar

- `vault` (valfritt) kan vara antingen valvnamnet eller valv-id:t[^1]. Om det inte anges används det aktuella eller senast fokuserade valvet.
- `x-success` (valfritt) se [[#Använda x-callback-url-parametrar]].
- `x-error` (valfritt) se [[#Använda x-callback-url-parametrar]].

Om `x-success` är definierat kommer detta API att använda det som x-callback-url. Annars kopieras en Markdown-länk till den aktuellt fokuserade anteckningen till urklippet, som en `obsidian://open`-URL.

## Använda x-callback-url-parametrar

Vissa slutpunkter accepterar x-callback-url-parametrarna `x-success` och `x-error`. När de tillhandahålls kommer Obsidian att skicka följande till `x-success`-callback:

- `name` filens namn, utan filändelsen.
- `url` `obsidian://`-URI:n för denna fil.
- `file` (endast skrivbord) `file://`-URL:en för denna fil.

Till exempel, om Obsidian tar emot
`obsidian://.....x-success=myapp://x-callback-url`, skulle svaret vara `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Kortformat

Utöver formaten ovan finns det ytterligare två "kortformat" tillgängliga för att öppna valv och filer:

1. `obsidian://vault/my vault/my note` motsvarar `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` motsvarar `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Felsökning

### Registrera Obsidian URI

På Windows och macOS bör det räcka att köra appen en gång för att registrera Obsidian URI-protokollet på din dator.

På Linux är det en betydligt mer involverad process:

1. Säkerställ att du skapar en `obsidian.desktop`-fil. [Se här för detaljer](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Säkerställ att din desktop-fil anger fältet `Exec` som `Exec=executable %u`. `%u` används för att skicka `obsidian://`-URI:er till appen.
3. Om du använder AppImage-installationsprogrammet kan du behöva packa upp det med `Obsidian-x.y.z.AppImage --appimage-extract`. Se sedan till att `Exec`-direktivet pekar på den uppackade körbara filen.


[^1]: Valv-id är den slumpmässiga 16-teckens koden som tilldelas valvet, till exempel `ef6ca3e3b524d22f`. Detta id är unikt per mapp på din dator. Id:t kan hittas genom att öppna valvväxlaren och klicka på "Kopiera valv-ID" i snabbmenyn för det önskade valvet.
