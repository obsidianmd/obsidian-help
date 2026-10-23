---
permalink: import/templates
description: 'Anpassa anteckningsnamnet, egenskaperna och innehållet som skapas av Importer.'
---
[[Importerare]] låter dig definiera mallar som styr hur dina anteckningar importeras från andra appar. Det innebär att du kan ändra titel, egenskaper och innehåll i anteckningar som du importerar.

## Redigera importmallen

Välj **Redigera** ovanför förhandsvisningen för att redigera standardmallen. Du kan redigera:

- Anteckningsnamnet som visas som inbäddad rubrik.
- Egenskaper i början av anteckningen.
- Anteckningens Markdown-innehåll.

Välj **Spara** för att återgå till förhandsvisningen. Importerare kommer ihåg en redigerad inbäddad mall för framtida importer som använder samma format.

Alternativt kan du ladda en mall från en Markdown-fil i det aktuella valvet.

## Förhandsgranska resultat

Förhandsvisningen visar upp till tio exempel från den data du valt. Använd pilknapparna för att flytta mellan exemplen. Ändringar i importinställningar och mallen uppdaterar förhandsvisningen innan något läggs till i ditt valv.

Vissa bilagor, fjärrobjekt och korsreferenser mellan anteckningar kan inte lösas fullt ut förrän importen körs. I dessa fall kan förhandsvisningen behålla källänken eller visa en platshållare.

## Mallsyntax

Mallar för Importerare använder en syntax som består av variabler, [[Filter]] och [[Logik]]. Den använder samma [Knap](https://github.com/obsidianmd/knap)-syntax som [[Introduktion till Obsidian Web Clipper|Web Clipper]].

Infoga variabler med dubbla klammerparenteser, som `{{title}}`, `{{content}}` eller `{{date}}`. Variabler kan användas i anteckningsnamnet, egenskaper och innehåll.

Du kan modifiera variabler med hjälp av [[Filter]]. Till exempel för att ändra datumformat med `{{date|date:"YYYY-MM-DD"}}`. Använd [[Logik]] för mer avancerade villkor, loopar och variabeltilldelning.

## Variabler

Följande variabler är tillgängliga att använda i alla mallar för Importerare:

| Variabel         | Beskrivning                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Markdown-brödtext utan egenskaper (ingen frontmatter).                                              |
| `{{content}}`    | Komplett Markdown innan den valda mallen tillämpas.                                                 |
| `{{ctime}}`      | Källans skapelsetid som ISO 8601-tidsstämpel; tom när den inte är tillgänglig.                     |
| `{{date}}`       | Aktuellt datum och tid när mallen renderas, som ISO 8601-tidsstämpel.                              |
| `{{importer}}`   | Importerarens id, som `keep`, `html` eller `notion-api`.                                           |
| `{{folder}}`     | Slutlig valv-relativ överordnad mapp. Tom när anteckningen är i valvets rot.                       |
| `{{mtime}}`      | Källans ändringstid som ISO 8601-tidsstämpel; tom när den inte är tillgänglig.                     |
| `{{noteName}}`   | Slutligt löst anteckningsnamn, efter att ogiltiga tecken tagits bort och eventuella suffix lagts till för dubbletter. |
| `{{path}}`       | Slutlig valv-relativ sökväg, inklusive `.md`-tillägget.                                            |
| `{{properties}}` | Objekt som innehåller frontmatter-egenskaperna.                                                     |
| `{{source}}`     | Objekt som innehåller genererade egenskaper och källspecifika värden.                               |
| `{{sourceId}}`   | Stabil källidentifierare när importeraren tillhandahåller en; annars tom.                           |
| `{{time}}`       | Alias för `{{date}}`.                                                                               |
| `{{title}}`      | Ursprunglig anteckningstitel före sanering och deduplicering.                                       |

## Källvärden för egenskaper

För importformat som stöder [[Egenskaper]] är källvärdena också tillgängliga som toppnivåvariabler för bekvämlighet.

Om ett källvärde har samma namn som en delad variabel, nå det via `{{source}}`. Till exempel, om din importkälla har en egenskap med namnet `content` är den tillgänglig som `{{source.content}}`, medan `{{content}}` förblir standardvariabeln för Importerare.

Använd hakparentesnotation när ett fältnamn innehåller mellanslag, skiljetecken eller andra specialtecken:

```twig
{{source["Project: status"]}}
```

## Exempelmall

Här är ett exempel på en mall som använder variabler och [[Filter|filter]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Du kan lägga till data i en anteckning villkorligt med hjälp av [[Logik]]:

```twig
{% if tags %}
## Taggar
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
