---
permalink: import/templates
description: 'Pas de notitienaam, eigenschappen en inhoud aan die door Importer worden aangemaakt.'
---
[[Importeren]] laat je sjablonen definiëren die bepalen hoe je notities worden geïmporteerd vanuit andere apps. Dit betekent dat je de titel, eigenschappen en inhoud van geïmporteerde notities kunt aanpassen.

## Het importsjabloon bewerken

Selecteer **Bewerken** boven de voorbeeldweergave om het standaardsjabloon te bewerken. Je kunt bewerken:

- De notitienaam, weergegeven als inline titel.
- Eigenschappen aan het begin van de notitie.
- De Markdown-inhoud van de notitie.

Selecteer **Opslaan** om terug te keren naar de voorbeeldweergave. De importeur onthoudt een bewerkt inline sjabloon voor toekomstige imports die dezelfde indeling gebruiken.

Je kunt ook een sjabloon laden vanuit een Markdown-bestand in de huidige kluis.

## Resultaten voorbeschouwen

De voorbeeldweergave toont maximaal tien voorbeelden van de geselecteerde gegevens. Gebruik de pijlknoppen om tussen voorbeelden te navigeren. Wijzigingen in importinstellingen en het sjabloon worden in de voorbeeldweergave bijgewerkt voordat er iets aan je kluis wordt toegevoegd.

Sommige bijlagen, externe items en verwijzingen tussen notities kunnen pas volledig worden opgelost wanneer de import wordt uitgevoerd. In die gevallen kan de voorbeeldweergave de bronkoppeling behouden of een tijdelijke aanduiding tonen.

## Sjabloonsyntaxis

Importsjablonen gebruiken een syntaxis die bestaat uit variabelen, [[Filters]] en [[Logica]]. Het gebruikt dezelfde [Knap](https://github.com/obsidianmd/knap)-syntaxis als [[Introductie tot Obsidian Web Clipper|Web Clipper]].

Voeg variabelen in met dubbele accolades, zoals `{{title}}`, `{{content}}` of `{{date}}`. Variabelen kunnen worden gebruikt in de notitienaam, eigenschappen en inhoud.

Je kunt variabelen aanpassen met [[Filters]]. Bijvoorbeeld om de datumindeling te wijzigen met `{{date|date:"YYYY-MM-DD"}}`. Gebruik [[Logica]] voor geavanceerdere condities, lussen en variabeletoewijzingen.

## Variabelen

De volgende variabelen zijn beschikbaar voor gebruik in elk importsjabloon:

| Variabele        | Beschrijving                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Markdown-inhoud zonder eigenschappen (geen voormetadata).                                                 |
| `{{content}}`    | Volledige Markdown voordat het geselecteerde sjabloon wordt toegepast.                                    |
| `{{ctime}}`      | Aanmaaktijd van de bron als ISO 8601-tijdstempel; leeg wanneer niet beschikbaar.                          |
| `{{date}}`       | Huidige datum en tijd wanneer het sjabloon wordt verwerkt, als ISO 8601-tijdstempel.                      |
| `{{importer}}`   | Importeur-ID, zoals `keep`, `html` of `notion-api`.                                                       |
| `{{folder}}`     | Uiteindelijke bovenliggende map relatief aan de kluis. Leeg wanneer de notitie in de hoofdmap staat.      |
| `{{mtime}}`      | Wijzigingstijd van de bron als ISO 8601-tijdstempel; leeg wanneer niet beschikbaar.                       |
| `{{noteName}}`   | Uiteindelijk opgeloste notitienaam, na verwijdering van ongeldige tekens en toevoeging van achtervoegsels voor duplicaten. |
| `{{path}}`       | Uiteindelijk pad relatief aan de kluis, inclusief de `.md`-extensie.                                      |
| `{{properties}}` | Object met de voormetadata-eigenschappen.                                                                 |
| `{{source}}`     | Object met gegenereerde eigenschappen en bronspecifieke waarden.                                          |
| `{{sourceId}}`   | Stabiele bronidentificatie wanneer de importeur er een levert; anders leeg.                               |
| `{{time}}`       | Alias voor `{{date}}`.                                                                                    |
| `{{title}}`      | Oorspronkelijke notitietitel vóór opschoning en ontdubbeling.                                             |

## Bronwaarden voor eigenschappen

Voor importindelingen die [[Eigenschappen]] ondersteunen, zijn de bronwaarden ook beschikbaar als variabelen op het hoogste niveau voor het gemak.

Als een bronwaarde dezelfde naam heeft als een gedeelde variabele, benader je deze via `{{source}}`. Bijvoorbeeld, als je importbron een eigenschap heeft met de naam `content`, dan is deze beschikbaar als `{{source.content}}`, terwijl `{{content}}` de standaard importeur-variabele blijft.

Gebruik haakjesnotatie wanneer een veldnaam spaties, leestekens of andere speciale tekens bevat:

```twig
{{source["Project: status"]}}
```

## Voorbeeldsjabloon

Hier is een voorbeeld van een sjabloon met variabelen en [[Filters|filters]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Je kunt gegevens voorwaardelijk aan een notitie toevoegen met [[Logica]]:

```twig
{% if tags %}
## Labels
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
