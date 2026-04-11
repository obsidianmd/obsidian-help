---
permalink: web-clipper/capture
---
När du har installerat webbläsartillägget [[Introduktion till Obsidian Web Clipper|Web Clipper]] kan du komma åt det på flera sätt, beroende på din webbläsare:

1. Obsidian-ikonen i webbläsarens verktygsfält.
2. Tangentbordsgenvägar, för att aktivera tillägget från tangentbordet.
3. Snabbmeny, genom att högerklicka på webbsidan du besöker.

För att spara en sida till Obsidian klickar du på knappen **Lägg till i Obsidian**.

## Fånga en sida

När du öppnar tillägget extraherar Web Clipper data från den aktuella webbsidan enligt inställningarna i din [[Obsidian Web Clipper/Mallar|mall]]. Du kan skapa egna mallar och anpassa utdata med hjälp av [[Variabler|variabler]] och [[Filter|filter]].

Som standard försöker Web Clipper att intelligent extrahera enbart det huvudsakliga artikelinnehållet och exkludera andra element på sidan. Du kan dock åsidosätta detta beteende på följande sätt:

- Om en anpassad mall finns använder den din mall.
- Om en markering finns använder den markeringen. Du kan använda `Ctrl/Cmd+A` för att markera hela sidan.
- Om några [[Överstrykningspenna|markeringar]] finns använder den markeringarna.

## Ladda ner bilder

Bilder laddas inte ner automatiskt när du använder Web Clipper. Istället länkar bilder till sin webbaserade URL. Detta sparar utrymme i ditt valv men det innebär att bilderna inte är tillgängliga offline, eller om URL:en slutar fungera.

Du kan ladda ner bilder för valfri fil i Obsidian med [[Kommandopalett|kommandot]] **Ladda ner bilagor för aktuell fil**. Detta kommando kan även mappas till en tangentbordsgenväg i Obsidian.

## Tangentbordsgenvägar

Web Clipper inkluderar tangentbordsgenvägar som du kan använda för att snabba upp ditt arbetsflöde. För att ändra tangentmappningar gå till **Web Clipper-inställningar** → **Allmänt** och följ instruktionerna för din webbläsare. Mappningar kan ändras för alla webbläsare utom Safari som inte stöder redigering av tangentbordsgenvägar.

| Åtgärd              | macOS         | Windows/Linux  |
| -------------------- | ------------- | -------------- |
| Öppna clipper        | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| Snabbklipp           | `Opt+Shift+O` | `Alt+Shift+O`  |
| Växla markering      | `Opt+Shift+H` | `Alt+Shift+H`  |
| Växla läsare         | `Opt+Shift+R` | `Alt+Shift+R`  |

## Gränssnittsfunktionalitet

Web Clipper-gränssnittet är indelat i fyra sektioner:

1. **Sidhuvud** där du kan byta mallar, aktivera [[Överstrykningspenna|markering]], [[Läsare|läsläge]] och komma åt inställningar.
2. **Egenskaper** visar den [[Egenskaper|metadata]] som extraherats från sidan och som sparas som [[Egenskaper]] i Obsidian.
3. **Anteckningsinnehåll** som sparas till Obsidian.
4. **Sidfot** låter dig välja valv och mapp samt lägga till i Obsidian.

Sidhuvudets funktionalitet inkluderar:

- ![[lucide-chevrons-up-down.svg#icon]] **Mall**-väljare för att använda sparade [[Obsidian Web Clipper/Mallar|mallar]] som lagts till i tilläggsinställningarna.
- ![[lucide-more-horizontal.svg#icon]] **Mer**-knapp för att visa sidvariabler som du kan använda i mallar.
- ![[lucide-highlighter.svg#icon]] **Markering**-knapp för att aktivera [[Överstrykningspenna|markering]].
- ![[lucide-book-icon.svg#icon]] **Läsare**-knapp för att aktivera [[Läsare|läsvy]].
- ![[lucide-picture-in-picture-2.svg#icon]] **Bädda in**-knapp för att flytta Web Clipper från popupen till sidan.
- ![[lucide-settings.svg#icon]] **Inställningar**-knapp för att öppna tilläggsinställningarna.

Sidfotens funktionalitet inkluderar:

- **Lägg till i Obsidian**-knapp för att spara data till Obsidian.
- **Valv**-rullgardinsmeny för att växla mellan sparade valv som lagts till i Web Clipper-inställningar.
- **Mapp**-fält för att definiera vilken mapp att spara till.
- **Tolk** för att köra [[Tolk|naturliga språkpromptar]] på sidan.
