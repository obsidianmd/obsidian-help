---
permalink: tags
---
Taggar är nyckelord eller ämnen som hjälper dig att snabbt hitta de anteckningar du letar efter.

## Lägg till en tagg i en anteckning

För att skapa en tagg, skriv en hash-symbol (`#`) i redigeraren, följt av ett nyckelord. Till exempel `#meeting`.

Du kan också lägga till taggar med hjälp av `tags`-[[Egenskaper|egenskapen]]. Taggar i YAML bör alltid formateras som en lista:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Hitta anteckningar med taggar

För att hitta anteckningar med tillägget [[Sök]], använd `tag`-[[Sök#Sökoperatorer|sökoperatorn]] i din sökterm, till exempel `tag:#meeting`.

Du kan också söka efter taggar genom att klicka på dem i dina anteckningar.

För att hitta anteckningar med tillägget [[Taggpanel|Taggpanel]], välj **Tags: Show tags** i [[Kommandopalett|kommandopaletten]], och välj sedan den tagg du vill söka efter.

## Nästlade taggar

Nästlade taggar definierar tagghierarkier som gör det enklare att hitta och filtrera relaterade taggar.

Skapa nästlade taggar genom att använda snedstreck (`/`) i taggnamnet, till exempel `#inbox/to-read` och `#inbox/processing`.

- I [[Sök]] matchar `tag:inbox` både `#inbox` och alla nästlade taggar som `#inbox/to-read`.
- I [[Taggpanel|Taggpanelen]] visas nästlade taggar som tillhörande sin överordnade tagg.
- I [[Introduktion till baser|Baser]] känns nästlade taggar igen av funktionen [[Funktioner#hasTag|`hasTag`]], så `file.hasTag("a")` matchar både `#a` och `#a/b`.

## Taggformat

Du kan använda följande tecken i dina taggar:

- Bokstäver
- Siffror
- Understreck (`_`)
- Bindestreck (`-`)
- Snedstreck (`/`) för [[#Nästlade taggar]]
- Vanligt accepterade Unicode-tecken, inklusive emojis och andra symboler

Taggar måste innehålla minst ett icke-numeriskt tecken. Till exempel är #1984 inte en giltig tagg, men #y1984 är det.

Taggar är skiftlägesokänsliga. Till exempel behandlas #tag och #TAG som identiska.

> [!note]
> Taggar visas med det skiftläge de först skapades med i [[Taggpanel|Taggpanelen]].
> Till exempel, om du skapar #Tag och sedan #TAG visas #Tag för båda.

Taggar kan inte innehålla blanksteg. För att separera två eller fler ord kan du istället använda följande format:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
