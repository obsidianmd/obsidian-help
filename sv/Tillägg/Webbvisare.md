---
permalink: plugins/web-viewer
---
Webbvisare är ett [[Kärntillägg|kärntillägg]] som låter dig öppna externa länkar inom Obsidian på skrivbordet. Detta låter dig läsa länkinnehåll utan att lämna appen och gör multitasking i webbforskningsprojekt enklare.

Externa länkar öppnas som en [[Flikar|flik]] som du kan ordna om, dela och öppna i ett [[Fristående fönster|fristående fönster]]. Alla webbsideskort som är inbäddade i [[canvas]]-filer kan öppnas som webbvisarflikar.

Webbvisaren är inte en ersättning för din primära webbläsare. Webbvisaren erbjuder ett snabbt sätt att komma åt webbsidor för forskning inom Obsidian. Den erbjuder dock inte den fulla funktionaliteten, säkerhetskontrollerna eller utökningsbarheten hos en dedikerad webbläsare.

## Läsvy

Klicka på glasögonikonen för att visa en oformaterad textversion av webbsidan. Denna funktion fungerar genom att rensa innehållet med hjälp av Mozillas Readability-bibliotek som utvecklats för Firefox.

## Spara till valv

Klicka på ikonen för fler åtgärder för att spara en webbsida till ditt valv. Du kan anpassa platsen för sparade sidor genom att gå till **[[Inställningar]]** → **Webbvisare**.

## Annonsblockering

Webbvisaren blockerar annonser som standard. Du kan anpassa annonsblockeringsregler genom att lägga till listor som [Easylist](https://easylist.to/).

## Säkerhet

Om du använder Obsidian-tillägg från tredje part rekommenderar vi att du använder din primära webbläsare för känsliga uppgifter och lösenordsskyddade webbplatser istället för webbvisaren.

Webbvisaren är baserad på samma [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag)-funktion som låter dig bädda in webbsidor i [[Canvas]]. Webbvisaren har [granskats oberoende](https://obsidian.md/blog/cure53-second-client-audit/) för att verifiera att den har implementerats på ett säkert sätt.

Obsidian-tillägg [[Tilläggssäkerhet#Tilläggsmöjligheter|körs inte i sandlåda]] och har djup kontroll över appen. Denna design möjliggör kraftfull funktionalitet men medför också säkerhetsavvägningar. Medan Obsidian körs har tredjepartstillägg full åtkomst till cookies i webbvisaren.
