---
permalink: tags
---
Tagger er nøkkelord eller emner som hjelper deg raskt å finne notatene du leter etter.

## Legg til en tagg i et notat

For å opprette en tagg, skriv inn et nummertegn (`#`) i redigeringsprogrammet, etterfulgt av et nøkkelord. For eksempel `#meeting`.

Du kan også legge til tagger ved hjelp av `tags`-[[Egenskaper|egenskapen]]. Tagger i YAML bør alltid formateres som en liste:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Finn notater ved hjelp av tagger

For å finne notater ved hjelp av [[Søk]]-utvidelsen, bruk `tag`-[[Søk#Søkeoperatorer|søkeoperatoren]] i søketermen din, for eksempel `tag:#meeting`.

Du kan også søke etter tagger ved å klikke på dem i notatene dine.

For å finne notater ved hjelp av [[Tag-panel|Tag-panel]]-utvidelsen, velg **Tags: Show tags** i [[Kommandovelger|kommandopaletten]], og velg deretter taggen du vil søke etter.

## Nestede tagger

Nestede tagger definerer tagghierarkier som gjør det enklere å finne og filtrere relaterte tagger.

Opprett nestede tagger ved å bruke skråstreker (`/`) i taggnavnet, for eksempel `#inbox/to-read` og `#inbox/processing`.

- I [[Søk]] vil `tag:inbox` matche `#inbox` samt alle nestede tagger som `#inbox/to-read`.
- I [[Tag-panel]] vises nestede tagger som tilhørende sin overordnede tagg.
- I [[Introduksjon til Bases|Bases]] gjenkjennes nestede tagger av [[Funksjoner#hasTag|`hasTag`]]-funksjonen, slik at `file.hasTag("a")` vil matche både `#a` og `#a/b`.

## Taggformat

Du kan bruke følgende tegn i taggene dine:

- Alfabetiske bokstaver
- Tall
- Understrek (`_`)
- Bindestrek (`-`)
- Skråstrek (`/`) for [[#Nestede tagger]]
- Vanlig aksepterte Unicode-tegn, inkludert emojier og andre symboler

Tagger må inneholde minst ett ikke-numerisk tegn. For eksempel er #1984 ikke en gyldig tagg, men #y1984 er det.

Tagger skiller ikke mellom store og små bokstaver. For eksempel vil #tag og #TAG behandles som identiske.

> [!note]
> Tagger vises med bokstavstørrelsen de først ble opprettet med i [[Tag-panel]].
> For eksempel, hvis du oppretter #Tag og deretter #TAG, vil #Tag vises for begge.

Tagger kan ikke inneholde mellomrom. For å skille to eller flere ord kan du i stedet bruke følgende formater:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
