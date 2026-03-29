---
permalink: snippets
publish: true
mobile: true
description: Lär dig hur du ändrar delar av Obsidian-appens utseende utan att skapa ett fullständigt tema.
---
Lär dig hur du kan ändra delar av Obsidian-appens utseende utan att behöva [bygga ett tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Om du letar efter vägledning om hur du hanterar CSS för [[Introduktion till Obsidian Publish|Obsidian Publish]], se till att läsa [[Anpassa din webbplats]].

CSS är ett språk som styr hur HTML ser ut. Genom att lägga till CSS-instick kan du ändra delar av Obsidians användargränssnitt, som storlek och färg på rubriker. Obsidian har [CSS-variabler](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) som hjälper dig att enkelt anpassa gränssnittet.

Obsidian letar efter CSS-instick i valvets [[Konfigurationsmapp|konfigurationsmapp]].

## Lägga till ett instick

För att lägga till ett CSS-instick på **dator** ![[lucide-monitor-check.svg#icon]], följ dessa steg:

1. Öppna **[[Inställningar]]** ![[lucide-settings.svg#icon]].
2. Under **Utseende → CSS-instick**, välj **Öppna insticksmappen** ![[lucide-folder-open.svg#icon]].
3. I insticksmappen, skapa en CSS-fil som innehåller ditt instick.
4. I Obsidian, under **Utseende → CSS-instick**, välj **Ladda om instick** ![[lucide-refresh-cw.svg#icon]] för att se insticket i listan.
5. Aktivera insticket genom att klicka på reglaget.

För att lägga till ett CSS-instick på **mobil/surfplatta** ![[obsidian-icon-smartphone.svg#icon]] kan du följa dessa steg:

1. Öppna en filhanterare och hitta ditt valv. Du kan kontrollera valvets plats i _Hantera valv…_ genom att trycka på ditt valv och titta på sökvägen.
2. Öppna [[Konfigurationsmapp|konfigurationsmappen]] och skapa en mapp som heter `snippets` om den inte finns.
3. Lägg till ditt CSS-instick i denna mapp.
4. Öppna Obsidians **[[Inställningar]]** ![[lucide-settings.svg#icon]].
5. Välj **Utseende** till vänster.
6. Rulla ned till sektionen **CSS-instick**.
7. Tryck på **Ladda om instick** ![[lucide-refresh-cw.svg#icon]] för att uppdatera listan.
8. Tryck på reglaget för att aktivera insticket.

Alternativt kan du
- [[Synkronisera dina anteckningar mellan enheter|Synkronisera]] eventuella ändringar med din synkroniseringstjänst.
- Använda ett gemenskapstillägg för att skapa ett instick inifrån Obsidian.

När insticket är aktiverat kommer Obsidian automatiskt att upptäcka ändringar i CSS-instick och tillämpa dem när du sparar filen.

> [!tip] Du behöver inte starta om Obsidian för att ändringar ska träda i kraft. Dock kan du behöva använda kommandot i [[Kommandopalett|kommandopaletten]] för att ladda om Obsidian utan att spara för att se ändringar i det aktuella temat eller anteckningen.

## Skriva CSS för Obsidian

Obsidian erbjuder flera metoder som gör det enklare och mer kraftfullt att skriva CSS.

Det finns en mängd [CSS-variabler](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) för att enkelt modifiera delar av Obsidian och en inbyggd [[Egenskaper#Egenskapstyper|egenskapstyp]] för att ändra utseendet på en eller flera anteckningar.

> [!example] Variabler
> Skapa en fil som heter `headers.css` med följande innehåll för att ändra färgerna på de sex [[Grundläggande formateringssyntax#Rubriker|rubriknivåerna]] till en regnbåge:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS-klasser
> Tilldela namnet på en anpassad CSS-klass (eller en lista med CSS-klasser) till den fördefinierade [[Egenskaper|egenskapen]] `cssclasses` för att få en eller flera anteckningar att se annorlunda ut jämfört med andra.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Egenskaper**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> I varje anteckning som innehåller värdet `red-border` i egenskapen `cssclasses` visas bilder med en röd ram.

För att säkerställa att CSS-filen är giltig och korrekt formaterad rekommenderar vi att du validerar den med ett verktyg som [CSS Validation Service](https://jigsaw.w3.org/css-validator/), eftersom ogiltig CSS inte fungerar.

## Läs mer

- Om du är ny på CSS, kolla in [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) av Mozilla.
- För mer information om att styla Obsidian, se:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
