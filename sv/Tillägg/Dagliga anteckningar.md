---
permalink: plugins/daily-notes
---
Dagliga anteckningar är ett [[Kärntillägg|kärntillägg]] som öppnar en anteckning baserad på dagens datum, eller skapar den om den inte finns. Använd dagliga anteckningar för att skapa journaler, att göra-listor eller dagliga loggar för saker du upptäckte under dagen.

För att öppna dagens dagliga anteckning, gör antingen:

- Klicka på **Öppna dagens anteckning** ![[lucide-calendar.svg#icon]] i [[Ribbon|ribbon]].
- Kör **Öppna dagens anteckning** från [[Kommandopalett|kommandopaletten]].
- [[Snabbkommandon#Ange en tangentbordsgenväg|Använd en tangentbordsgenväg]] för kommandot **Öppna dagens anteckning**.

Som standard skapar Obsidian en ny tom anteckning med dagens datum som namn i formatet ÅÅÅÅ-MM-DD.

> [!tip] Om du föredrar att ha dina dagliga anteckningar i en separat mapp kan du ställa in <u>Ny filplats</u> under tilläggsinställningar för att ändra var Obsidian skapar nya dagliga anteckningar.

> [!example]- Automatiska undermappar
> Du kan automatiskt organisera dina dagliga anteckningar i mappar med hjälp av funktionen **Datumformat**.
> 
> Om du till exempel ställer in datumformatet som `YYYY/MMMM/YYYY-MMM-DD` kommer dina anteckningar att skapas som `2023/January/2023-Jan-01`.
> 
> Du kan utforska fler formateringsalternativ på dokumentationssidan för [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Skapa en daglig anteckning från mall

Om dina dagliga anteckningar har samma struktur kan du använda en [[Mallar|mall]] för att lägga till fördefinierat innehåll i dina dagliga anteckningar när du skapar dem.

1. Skapa en ny anteckning med namnet "Daglig mall" med följande text (eller vad som passar dig!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Uppgifter

   - [ ]
   ```

2. Öppna **[[Inställningar]]**.
3. I sidofältet, klicka på **Dagliga anteckningar** under **Tilläggsinställningar**.
4. I textfältet bredvid **Mallfilplats** väljer du anteckningen "Daglig mall".

Obsidian använder mallen nästa gång du skapar en ny daglig anteckning.

## Dagliga anteckningar och egenskaper

När tillägget Dagliga anteckningar är aktiverat och en datumegenskap finns i någon anteckning kommer Obsidian automatiskt att försöka skapa en länk till den dagliga anteckningen för den specifika dagen. Om till exempel en anteckning med titeln `example.md` innehåller en datumegenskap som `2023-01-01` kommer detta datum att omvandlas till en klickbar länk i avsnittet [[Vyer och redigeringsläge#Live-förhandsvisning|live-förhandsvisning]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
