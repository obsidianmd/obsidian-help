---
permalink: import/templates
description: 'Tilpass notatnavnet, egenskapene og innholdet som opprettes av Importer.'
---
[[Importer|Importer]] lar deg definere maler som kontrollerer hvordan notatene dine importeres fra andre apper. Dette betyr at du kan endre tittelen, egenskapene og innholdet i notater du importerer.

## Rediger importmalen

Velg **Rediger** over forhåndsvisningen for å redigere standardmalen. Du kan redigere:

- Notatnavnet som vises som innebygd tittel.
- Egenskaper i begynnelsen av notatet.
- Markdown-innholdet i notatet.

Velg **Lagre** for å gå tilbake til forhåndsvisningen. Importer husker en redigert innebygd mal for fremtidige importer som bruker samme format.

Alternativt kan du laste inn en mal fra en Markdown-fil i gjeldende hvelv.

## Forhåndsvis resultater

Forhåndsvisningen viser opptil ti eksempler fra dataene du valgte. Bruk pilknappene for å flytte mellom eksempler. Endringer i importinnstillinger og malen oppdaterer forhåndsvisningen før noe legges til i hvelvet ditt.

Noen vedlegg, eksterne elementer og kryssreferanser mellom notater kan ikke fullstendig løses før importen kjører. I slike tilfeller kan forhåndsvisningen beholde kildelenken eller vise en plassholder.

## Malsyntaks

Importer-maler bruker en syntaks som består av variabler, [[Filtre]], og [[Logikk]]. Den bruker samme [Knap](https://github.com/obsidianmd/knap)-syntaks som [[Introduksjon til Obsidian Web Clipper|Web Clipper]].

Sett inn variabler med doble klammeparenteser, som `{{title}}`, `{{content}}`, eller `{{date}}`. Variabler kan brukes i notatnavnet, egenskaper og innhold.

Du kan endre variabler ved å bruke [[Filtre]]. For eksempel for å endre datoformatet med `{{date|date:"YYYY-MM-DD"}}`. Bruk [[Logikk]] for mer avanserte betingelser, løkker og variabeltilordning.

## Variabler

Følgende variabler er tilgjengelige for bruk i enhver Importer-mal:

| Variabel         | Beskrivelse                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Markdown-tekst uten egenskaper (ingen startmetadata).                                               |
| `{{content}}`    | Fullstendig Markdown før den valgte malen brukes.                                                   |
| `{{ctime}}`      | Kildens opprettelsestid som ISO 8601-tidsstempel; tom når ikke tilgjengelig.                        |
| `{{date}}`       | Gjeldende dato og klokkeslett når malen gjengis, som ISO 8601-tidsstempel.                          |
| `{{importer}}`   | Importer-ID, som `keep`, `html`, eller `notion-api`.                                                |
| `{{folder}}`     | Endelig hvelv-relativ overordnet mappe. Tom når notatet er i hvelvets rot.                          |
| `{{mtime}}`      | Kildens endringstid som ISO 8601-tidsstempel; tom når ikke tilgjengelig.                            |
| `{{noteName}}`   | Endelig løst notatnavn, etter fjerning av ugyldige tegn og tillegg av suffikser for duplikater.    |
| `{{path}}`       | Endelig hvelv-relativ bane, inkludert `.md`-filtypen.                                               |
| `{{properties}}` | Objekt som inneholder egenskapene fra startmetadata.                                                |
| `{{source}}`     | Objekt som inneholder genererte egenskaper og kildespesifikke verdier.                              |
| `{{sourceId}}`   | Stabil kildeidentifikator når importøren gir en; ellers tom.                                        |
| `{{time}}`       | Alias for `{{date}}`.                                                                               |
| `{{title}}`      | Opprinnelig notattittel før sanitering og deduplisering.                                            |

## Kildeverdier for egenskaper

For importformater som støtter [[Egenskaper]], er kildeverdiene også tilgjengelige som toppnivåvariabler for enkelhets skyld.

Hvis en kildeverdi har samme navn som en delt variabel, kan du nå den via `{{source}}`. For eksempel, hvis importkilden din har en egenskap kalt `content`, er den tilgjengelig som `{{source.content}}`, mens `{{content}}` forblir standard Importer-variabelen.

Bruk klammeparentesnotasjon når et feltnavn inneholder mellomrom, tegnsetting eller andre spesialtegn:

```twig
{{source["Project: status"]}}
```

## Eksempelmal

Her er et eksempel på en mal som bruker variabler og [[Filtre|filtre]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Du kan legge til data i et notat betinget ved å bruke [[Logikk]]:

```twig
{% if tags %}
## Tagger
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
