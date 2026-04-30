---
permalink: web-clipper/highlight
aliases:
  - Markera webbsidor
---
[[Introduktion till Obsidian Web Clipper|Web Clipper]] låter dig markera text på webbsidor och välja de element du vill spara till Obsidian. Markeringar sparas så att du kan se dem när du återvänder till en sida.

Markeringar kan sparas till Obsidian med hjälp av tillägget. Du kan definiera markeringsalternativ i tilläggsinställningarna.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Använd markeringsverktyget

Markeringsverktyget kan användas på webbsidor i realtid eller i [[Läsare]]. I Reader-vyn ger en textmarkering dig möjligheten att markera den.

Du kan också automatiskt lägga till markeringar genom att aktivera markeringsverktyget:

- Markeringsikonen i tilläggspanelen eller Reader-verktygsfältet.
- Tangentbordsgenvägar som kan anpassas i tilläggsinställningarna.
- Kontextmeny, genom att högerklicka på webbsidan du besöker.

När markeringsverktyget är aktiverat kommer all markerad text, bilder och element att läggas till i dina markeringar. Alla metoder ovan låter dig också avsluta markeringsverktyget.

## Lägg till markeringar i anteckningar

Det finns tre alternativ för hur markeringar kan infogas i dina klippta anteckningar:

- **Markera sidinnehållet** — lägger till markeringar direkt i texten med [[Obsidian Flavored Markdown|syntaxen]] `==highlight==`.
- **Ersätt sidinnehållet** — returnerar en lista med markeringar, utan något av sidans innehåll.
- **Gör ingenting** — returnerar det ursprungliga innehållet utan markeringar.
 
Dessa alternativ ändrar `{{content}}`-[[Variabler|variabeln]] i din mall. Du kan också lägga till markeringar direkt i din mall med hjälp av variabeln `{{highlights}}`, till exempel:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Visa och sök markeringar

Alla markeringar du skapar kan visas på din markeringssida. Du kan öppna denna sida genom att gå till **Inställningar** → **Highlighter**.

## Exportera markeringar

Markeringar kan exporteras till en `.json`-fil, antingen på inställningssidan eller på markeringssidan.
