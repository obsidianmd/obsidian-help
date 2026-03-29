---
permalink: glossary
---
Denna ordlista innehåller vanlig Obsidian-terminologi.

## Alias

Ett **alias** är en typ av [[#egenskap]] som definierar alternativa namn för en [[#anteckning]].

## Bilaga

En **bilaga** är ett [[Accepterade filformat|accepterat filformat]] som skapades utanför valvet och lades till senare.

## Kommando

Ett **kommando** är en åtgärd som kan utföras antingen genom att välja det från [[Kommandopalett|kommandopaletten]] eller genom att tilldela det en [[#tangentbordsgenväg]].

## Inbäddning

**Inbäddning** innebär att ersätta en referens till externt innehåll med själva innehållet, till exempel att inkludera en bild i din anteckning. Se även [[Bädda in filer]].

## Frontmatter

Frontmatter är ett sätt att definiera [[#egenskap|egenskaper]] genom att lägga till [YAML](https://yaml.org/) eller [JSON](https://www.json.org/) högst upp i anteckningen. Se även [[Egenskaper#Egenskapsformat|Egenskapsformat]].

## Graf

En **graf** är en visualisering som belyser kopplingar mellan [[#anteckning|anteckningar]]. Se även [[Grafvy]].

## Tangentbordsgenväg

En **tangentbordsgenväg** är en kortkommando för ett [[#kommando]]. Se även [[Snabbkommandon]] och [[Snabbkommandon|Hur man/Använder tangentbordsgenvägar]].

## Länk

En **länk** refererar till en annan anteckning eller fil. En [[Interna länkar|intern länk]] pekar till en fil som finns i det aktuella valvet. En [[Grundläggande formateringssyntax#Externa länkar|extern länk]] pekar till en plats utanför valvet, vanligtvis en webbsida.

## Huvudområde

**Huvudområdet** är det centrala området i Obsidian-appen, där du huvudsakligen redigerar [[#anteckning|anteckningar]].

## Markdown

Markdown är ett märkspråk för formatering av text och det primära filformatet som används för anteckningar i Obsidian, `.md`-filer. Se även [[Grundläggande formateringssyntax]].

## Anteckning

En **anteckning** är en Markdown-fil inuti ett [[#valv]].

## Tillägg

Ett **tillägg** utökar Obsidian med ytterligare funktioner.

- [[Kärntillägg]] är skrivna av Obsidian-teamet och inkluderas som standard.
- [[Gemenskapstillägg]] är skrivna av tredjepartsutvecklare och måste [[Gemenskapstillägg#Installera ett gemenskapstillägg|installeras]] innan du kan använda dem.

Du kan [bygga ditt eget tillägg](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin).

## Fristående fönster

Som standard öppnas alla anteckningar i ett valv i samma appfönster. Ett **fristående fönster** låter dig öppna anteckningar från samma valv i separata fönster, till exempel för att visa på en andra skärm.

Se även [[Fristående fönster]].

## Egenskap

[[Egenskaper]] definierar ytterligare information om en anteckning, såsom ett förfallodatum eller författare.

## Ribbon

**Ribbon** fungerar som en behållare för ofta använda åtgärdsikoner.

I skrivbordsversionen är det det vertikala området längst till vänster.

I mobilversionen representeras det av en menyknapp ![[lucide-menu.svg#icon]] på [[#statusfält|statusfältet]].

## Sidofält

Ett område som innehåller stödjande [[#vy|vyer]] organiserade som [[#flik|flikar]]. Ett sidofält kan delas upp i flera [[#flikgrupp|flikgrupper]].

Obsidian för skrivbordet har två sidofält, ett på varje sida om [[#huvudområde|huvudområdet]]. Båda sidofälten kan nås via ikoner i det övre vänstra och övre högra hörnet i Obsidian-appen, förutom att svepa åt vänster eller höger. Den övre högra ikonen måste hållas ned för att öppna fönstret.

## CSS-instick

Ett **CSS-instick**, eller [[CSS-instick]], ändrar utseendet på Obsidian, precis som ett [[#tema]]. Till skillnad från teman kan du använda flera CSS-instick samtidigt.

## Statusfält

**Statusfältet** i Obsidian-appen visar viktig statistik och status. I skrivbordsversionen hittar du det i det nedre högra hörnet, medan det på mobila enheter är placerat längs appens nederkant.


## Flik

En **flik** innehåller en [[#vy]]. Flikar kan omplaceras inom [[#huvudområde|huvudområdet]] och [[#sidofält|sidofälten]]. Se även [[Flikar]].

## Flikgrupp

En **flikgrupp** är en samling [[#flik|flikar]] i [[#huvudområde|huvudområdet]]. Flikar i en flikgrupp kan staplas.

## Tagg

En **tagg** är ett ord som börjar med en brädgård (`#`), till exempel `#bok`. Taggar används främst för att hitta relaterade [[#anteckning|anteckningar]].

## Tema

Ett **tema** ändrar utseendet på Obsidian-appen med hjälp av [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). Du kan åsidosätta delar av ett tema med [[#CSS-instick|CSS-instick]].

## Valv

`Aliases: lokalt valv, lokal data`

Ett **valv** är en mapp i ditt filsystem som innehåller [[#anteckning|anteckningar]] och en `.obsidian`-mapp med Obsidian-specifik konfiguration. Se även [[Hur Obsidian lagrar data]].

### Fjärrvalv

`Aliases: Fjärrdata`

Ett [[Lokala och fjärrvalv|fjärrvalv]] är en kopia av ditt lokala valv som underhålls med [[Introduktion till Obsidian Sync|Obsidian Sync]]. Fjärrvalvets data uppdateras baserat på ändringar i lokal data.

## Vy

En **vy** visar information, till exempel [[Sök|sökvyn]].
