---
permalink: web-clipper/highlight
---
[[Introduktion till Obsidian Web Clipper|Web Clipper]] låter dig markera text på webbsidor och välja de element du vill spara till Obsidian. Dina markeringar sparas, så du kan återvända till dem när du besöker en sida igen.

Markeringar kan [[Klipp webbsidor|fångas]] och sparas till Obsidian när du öppnar tillägget.

## Aktivera markering

Du kan aktivera markering på flera sätt, beroende på din webbläsare:

- Markeringsikonen i tilläggspanelen.
- Tangentbordsgenvägar, för att aktivera tillägget från tangentbordet.
- Kontextmeny, genom att högerklicka på webbsidan du besöker.

När markering är aktiverad kan du välja text, bilder och element du vill markera.

## Markeringsinställningar

Du kan ändra markeringens beteende genom att gå till Web Clipper-inställningar. Här kan du också exportera dina markeringar till en `.json`-fil.

Det finns tre alternativ för hur markeringar infogas i din klippta anteckning via `{{content}}`-[[Variabler|variabeln]]:

- **Markera sidinnehållet** — lägger till markeringar direkt i texten med [[Obsidian Flavored Markdown|syntaxen]] `==highlight==`.
- **Ersätt sidinnehållet** — returnerar en lista med markeringar, utan något av sidans innehåll.
- **Gör ingenting** — returnerar det ursprungliga innehållet utan markeringar.

Du kan lägga till markeringar direkt i din mall med hjälp av variabeln `{{highlights}}`, till exempel:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
