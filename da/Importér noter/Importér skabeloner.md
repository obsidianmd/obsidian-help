---
permalink: import/templates
description: 'Tilpas notenavnet, egenskaberne og indholdet, der oprettes af Importer.'
---
[[Importér]] giver dig mulighed for at definere skabeloner, der styrer, hvordan dine noter importeres fra andre applikationer. Det betyder, at du kan ændre titel, egenskaber og indhold af noter, du importerer.

## Rediger importskabelonen

Vælg **Rediger** over forhåndsvisningen for at redigere standardskabelonen. Du kan redigere:

- Notenavnet vist som titel i indholdet.
- Egenskaber i begyndelsen af noten.
- Markdown-indholdet af noten.

Vælg **Gem** for at vende tilbage til forhåndsvisningen. Importér husker en redigeret inline-skabelon til fremtidige importer, der bruger samme format.

Alternativt kan du indlæse en skabelon fra en Markdown-fil i den aktuelle boks.

## Forhåndsvis resultater

Forhåndsvisningen viser op til ti eksempler fra de data, du har valgt. Brug pileknapperne for at flytte mellem eksempler. Ændringer i importindstillinger og skabelonen opdaterer forhåndsvisningen, før noget tilføjes til din boks.

Nogle vedhæftninger, fjernressourcer og krydsnotereferencer kan ikke fuldt opløses, før importen kører. I de tilfælde kan forhåndsvisningen bevare kildelinket eller vise en pladsholder.

## Skabelonsyntaks

Importskabeloner bruger en syntaks, der består af variabler, [[Filtre]], og [[Logik]]. Den bruger samme [Knap](https://github.com/obsidianmd/knap)-syntaks som [[Introduktion til Obsidian Web Clipper|Web Clipper]].

Indsæt variabler med dobbelte krøllede parenteser, som f.eks. `{{title}}`, `{{content}}` eller `{{date}}`. Variabler kan bruges i notenavnet, egenskaber og indhold.

Du kan ændre variabler ved hjælp af [[Filtre]]. For eksempel for at ændre datoformatet ved brug af `{{date|date:"YYYY-MM-DD"}}`. Brug [[Logik]] til mere avancerede betingelser, løkker og variabeltildeling.

## Variabler

Følgende variabler er tilgængelige til brug i enhver importskabelon:

| Variabel         | Beskrivelse                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Markdown-brødtekst uden egenskaber (ingen metadata).                                                |
| `{{content}}`    | Komplet Markdown før den valgte skabelon anvendes.                                                  |
| `{{ctime}}`      | Kildens oprettelsestidspunkt som ISO 8601-tidsstempel; tom når ikke tilgængelig.                     |
| `{{date}}`       | Aktuel dato og tid, når skabelonen renderes, som ISO 8601-tidsstempel.                              |
| `{{importer}}`   | Importér-ID, som f.eks. `keep`, `html` eller `notion-api`.                                          |
| `{{folder}}`     | Endelig boks-relativ overordnet mappe. Tom når noten er i boksens rod.                              |
| `{{mtime}}`      | Kildens ændringstidspunkt som ISO 8601-tidsstempel; tom når ikke tilgængelig.                        |
| `{{noteName}}`   | Endeligt opløst notenavn, efter fjernelse af ugyldige tegn og tilføjelse af suffikser for dubletter.|
| `{{path}}`       | Endelig boks-relativ sti, inklusive `.md`-endelsen.                                                 |
| `{{properties}}` | Objekt der indeholder metadata-egenskaberne.                                                        |
| `{{source}}`     | Objekt der indeholder genererede egenskaber og kildespecifikke værdier.                             |
| `{{sourceId}}`   | Stabil kildeidentifikator, når importøren leverer en; ellers tom.                                   |
| `{{time}}`       | Alias for `{{date}}`.                                                                               |
| `{{title}}`      | Oprindelig notetitel før rensning og deduplikering.                                                  |

## Kildeværdier for egenskaber

For importformater der understøtter [[Egenskaber]], er kildeværdierne også tilgængelige som variabler på øverste niveau for nemheds skyld.

Hvis en kildeværdi har samme navn som en delt variabel, tilgås den via `{{source}}`. For eksempel, hvis din importkilde har en egenskab med navnet `content`, er den tilgængelig som `{{source.content}}`, mens `{{content}}` forbliver standard importvariablen.

Brug parentesnotation, når et feltnavn indeholder mellemrum, tegnsætning eller andre specialtegn:

```twig
{{source["Project: status"]}}
```

## Eksempelskabelon

Her er et eksempel på en skabelon, der bruger variabler og [[Filtre]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Du kan tilføje data til en note betinget ved hjælp af [[Logik]]:

```twig
{% if tags %}
## Tags
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
