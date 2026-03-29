---
permalink: web-clipper/templates
description: Lär dig skapa mallar som automatiskt fångar och organiserar metadata från webbsidor med Web Clipper.
---
[[Introduktion till Obsidian Web Clipper|Web Clipper]] låter dig skapa mallar som automatiskt fångar och organiserar metadata från webbsidor. Exempelmallar finns tillgängliga i [clipper-templates-repot](https://github.com/kepano/clipper-templates).

## Skapa eller redigera en mall

För att **skapa** en mall, gå till Web Clipper-inställningar och klicka på knappen **Ny mall** i sidofältet. Du kan också **duplicera** en mall i menyn **Mer** i det övre högra hörnet.

För att **redigera** en mall väljer du en mall från sidofältet. Dina ändringar sparas automatiskt.

Mallar använder sig av [[Variabler]] och [[Filter]], som låter dig anpassa hur innehåll sparas.

## Importera och exportera Web Clipper-mallar

För att importera en mall:

1. Öppna tillägget och klicka på kugghjulsikonen för **[[Inställningar]]**.
2. Gå till valfri mall i listan.
3. Klicka på **Importera** uppe till höger eller dra och släpp dina `.json`-mallfil(er) var som helst i mallområdet.

För att exportera en mall klickar du på **Exportera** uppe till höger. Detta laddar ner mallens `.json`-fil. Du kan också kopiera malldata till ditt urklipp via menyn **Mer**.

## Mallinställningar

### Beteende

Definiera hur innehåll från Web Clipper läggs till i Obsidian:

- **Skapa en ny anteckning**
- **Lägg till i en befintlig anteckning**, högst upp eller längst ner
- **Lägg till i daglig anteckning**, högst upp eller längst ner (kräver att tillägget [[Dagliga anteckningar]] är aktivt)

### Automatiskt utlösa en mall

Mallutlösare låter dig automatiskt välja en mall baserat på den aktuella sidans URL eller [schema.org](https://schema.org/)-data. Du kan definiera flera regler för varje mall, separerade med en ny rad.

Den första matchningen i din malllista bestämmer vilken mall som används. Du kan dra mallar upp och ner i Web Clipper-inställningar för att ändra ordningen i vilken mallar matchas.

#### Enkel URL-matchning

Enkel matchning utlöser en mall om den aktuella sidans URL *börjar med* det angivna mönstret. Till exempel:

- `https://obsidian.md` kommer att matcha alla URL:er som börjar med denna text.

#### Matchning med reguljärt uttryck

Du kan utlösa mallar baserat på mer komplexa URL-mönster med hjälp av reguljära uttryck. Omslut ditt regex-mönster med snedstreck (`/`). Kom ihåg att escapea specialtecken i regex-mönster (som `.` och `/`) med ett omvänt snedstreck (`\`). Till exempel:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` kommer att matcha alla IMDB-referenssidor.

#### Schema.org-matchning

Du kan utlösa mallar baserat på [schema.org](https://schema.org/)-data som finns på sidan. Använd prefixet `schema:` följt av den schema-nyckel du vill matcha. Du kan valfritt ange ett förväntat värde. Till exempel:

- `schema:@Recipe` kommer att matcha sidor där schematypen är "Recipe".
- `schema:@Recipe.name` kommer att matcha sidor där `@Recipe.name` finns.
- `schema:@Recipe.name=Cookie` kommer att matcha sidor där `@Recipe.name` är "Cookie".

Schema.org-värden kan också användas för att [[Variabler#Schema.org-variabler|förifylla data i mallar]].

### Tolkkontext

När [[Tolka webbsidor|Tolk]] är aktiverad kan du använda [[Variabler#Prompt-variabler|prompt-variabler]] för att extrahera sidinnehåll med naturligt språk. För varje mall kan du definiera den [[Tolka webbsidor#Kontext|kontext]] som Tolk har tillgång till.
