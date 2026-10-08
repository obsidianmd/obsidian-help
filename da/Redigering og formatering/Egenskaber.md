---
cssclasses:
  - soft-embed
description: 'Egenskaber tillader dig at organisere noters metainformation. Egenskaber kan indeholde struktureret data såsom tekst, links, datoer, afkrydsningsfelter og tal.'
mobile: false
permalink: properties
publish: true
aliases:
  - egenskaber
  - Redigering og formatering/Egenskaber
---
Egenskaber tillader sig at organisere information om en note. Egenskaber indholder struktureret data, såsom tekst, links, datoer, afkrydsningsfelter og tal. Egenskaber kan også benyttes i kombination med [[Fællesskabsplugins|plugins]], som kan anvende struktureret data til brugbare funktioner.

## Tilføj egenskaber til en note

De er flere måder, at tilføje en egenskab til en note på:

- Benyt **Tilføj filegenskab** [[Kommandopaletten|kommandoen]]
- Benyt genvejstasten **`Cmd/Ctrl+;`**
- Vælg **Tilføj filegenskab** fra **Flere muligheder** menuen (ved at trykke på ikonet med de tre lodrette punktummer eller ved at højreklikke på fanen)
- Skrive `---` helt i begyndelsen af en note

Når du tilføjer en egenskab, vil der blive tilføjet en række i toppen af noten med to værdier: _Navnet_ på egenskaben og egenskabens _værdi_.

Du kan anvende et hvilket som helst navn. Obsidian har flere standard egenskaber defineret: `tags`, `cssclasses`, and `aliases`.

Når du har valgt et navn på egenskaben, kan du give den en værdi.

### Typer af egenskaber

Egenskaber kan også være af en _type_ udover navnet og værdien. En egenskabs type bestemmer hvilken type værdi, som egenskaben kan indeholde og hvordan Obsidian skal håndtere dem. For at ændre typen på en egenskab, så klik på typeikonet ved siden af navnet på egenskaben og vælg en af mulighederne. Du kan også håndtere typerne for egenskaber ved at anvende [[Egenskabsvisning|egenskabsvinduet]], som er et kerneplugin.

Obsidian understøtter følgende type af egenskaber:

- **[[#Tekst]]**
- **[[#Liste]]**
- **[[#Tal]]**
- **[[#Afkrydsningsfelter]]**
- **[[#Dato]]**
- **[[#Dato & tid]]**
- **[[#Tags]]**

Når en egenskab har fået tildelt en type, vil alle egenskaber med dette navn i din boks være af den type.

## Avanceret brug

### Søgeegenskaber

Egenskaber har deres egen [[Søg|søge syntaks]] som du kan anvende sammen med andre søgetermer og operatorer. Se guiden: [[Søg#Søg efter egenskaber|Søg efter egenskaber]].

### Skabeloner

Du kan også tilføje egenskaber til [[Skabeloner|skabeloner]].

Når du indsætter en skabelon i en aktiv note, vil alle egenskaberne fra skabelonen blive tilføjet til noten. Obsidian vil tilføje egenskaberne til alle eventuelle eksisterende egenskaber i noten. ^templates-properties

### Sådan omdøber du egenskaber

Du kan omdøbe en egenskab ved at højreklikke på den i [[Egenskabsvisning|egenskabsvinduet]].

### Visningstilstande

Du kan ændre på, hvordan egenskaber vises i din note, ved at gå til **[[Indstillinger]] → Editor → Egenskaber i dokument**. Mulighederne er:

- **Synligt** (standard) — Vis egenskaber i toppen af noten, hvis der nogen
- **Skjult** — Skjul egenskaber, men kan stadig vises i sidepanelet via [[Egenskabsvisning|egenskabsvinduet]]
- **Kilde** — Vis egenskaber som almindelig tekst i YAML format

### CSS kodestykker

Du kan anvende [[CSS Kodestykker|CSS kodestykker]] til at ændre udseendet af specifikke noter.

### Ikke understøttede funktioner

Nogle få funktioner er endnu ikke understøttet i Obsidian:

- **Indlejrede egenskaber**: For at vise indlejrede egenskaber, så anbefaler vi at benytte [[Views og redigeringstilstand#Kildetilstand|kildetilstand]]
- **Masseredigering af egenskaber**: Vi anbefaler at anvende værktøjer som VSCode, scripts eller fællesskabsplugins til at masseredigere egenskaber udenfor [[Egenskabsvisning|egenskabsvinduet]]
- **Markdown i egenskaber**: Dette er en bevidst begrænsning fra Obsidians side. Egenskaber er kun ment som små, atomare stykker information, der er læsbare for både mennesker og maskiner.

## Genvejstaster

### Tilføj en egenskab

| Funktion | Genvejstast |
|---|---|
|Tilføj ny egenskab|`Cmd + ;`|

### Naviger mellem egenskaber

Når en egenskab er i fokus

| Funktion | Genvejstast |
|---|---|
|Så sæt fokus på næste egenskab|`Pil ned` or `Tab`|
|Så sæt fokus på foregående egenskab|`Pil op` or `Skift+Tab`|
|Hop til editor|`Alt+Pil ned`|

### Vælg egenskaber

| Funktion | Genvejstast |
|---|---|
|Udvid markering opad|`Skift+Pil op`|
|Udvid markering nedad|`Skift+Pil ned`|
|Vælg alt|`Cmd+A`|

### Rediger egenskaber

| Funktion | Genvejstast |
|---|---|
|Rediger navn på egenskab|`Pil venstre`|
|Rediger egenskabens værdi|`Pil højre`|
|Skift fokus|`Escape`|
|Slet egenskab|`Cmd+Tilbage`<br><br>Hvis flere egenskaber er valgt, vil hele markeringen blive slettet|
|Fortryd|`Cmd+Z`|
|Gendan|`Cmd+Skift+Z`|

### Vim (avanceret)

| Funktion | Genvejstast |
|---|---|
|Flyt ned|`j`|
|Flyt op|`k`|
|Sæt fokus på navn|`h`|
|Sæt fokus på værdi|`l`|
|Sæt fokus på værdi (Markøren i slutningen)|`A`|
|Sæt fokus på værdi (Markøren i begyndelsen)|`i`|
|Opret ny egenskab|`o`|

## Formatet for egenskaber

Egenskaber gemmes i [YAML](https://yaml.org/) formatet i begyndelsen af filen. YAML er et populært format, som nemt kan læses af både mennesker og computere.

Værdier på egenskaber separeres fra deres navne ved at anvende et kolon efterfulgt af et mellemrum:

```yaml
---
navn: værdi
---
```

Da rækkefølgen af hvert navne-værdi par ikke har betydning, skal hvert navn for en egenskab være unikt i en note. Fx. kan du kun have en `tags` egenskab.

Værdier kan være [[#Tekst|tekst]], [[#Tal|tal]], [[#Afkrydsningsfelter|afkrydsningsfelter]], [[#Dato|datoer]], [[#Dato & tid|datoer og tid]], eller [[#Liste|lister]].

### Tekst

Tekstegenskaber indeholder en enkelt linje tekst. Markdown-formatering gengives ikke i tekstegenskaber. Hashtags opretter ikke tags, når de bruges i tekstegenskaber.

Tekstegenskaber kan indeholde URLer og [[Interne links]] ved brug af `[[Link]]` syntaksen. [[Interne links]] i tekstegenskaber skal sættes i anførselstegn. Obsidian vil automatisk tilføje disse, hvis du manuelt skriver interne links i egenskaber, men vær påpasselig med at tilføje dem, når du anvender plugins med skabelonfunktioner.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Liste

Listeegenskaber indeholder flere værdier. Hver værdi i en liste vises på sin egen linje, med en bindestreg (-) og et mellemrum foran.

Listeværdier kan indeholde tekst, tal og [[Interne links]]. Når du bruger [[Interne links]] i listeegenskaber, skal de sættes i anførselstegn.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Tal

Egenskaber med tal skal altid være kun være tal og ikke udtryk med matematiske operatorer. Både heltal og kommatal er tilladt.

```yaml
---
year: 1977
pie: 3.14
---
```

### Afkrydsningsfelter

Afkrydsningsfelter kan enten være `true` eller `false`. I live-forhåndsvisning vises dette som et afkrydsningsfelt.

```yaml
---
favorite: true
reply: false
last: # Ubestemt værdi; behandles ofte som false
```

### Dato

Egenskaber med datoer gemmes i følgende format:

```yaml
---
date: 2020-08-21
---
```

Datovælgeren følger dit operativsystems standard dato og tid format. Du kan ændre den i dit systems indstillinger:

> [!info]- Windows
> **[[Indstillinger]] → Time & Language → Language & Region → Regional Format → Change Formats**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **System Preferences → Language and Region → Date format**
> 
> ![[Mac-OS-DateTime.png|450]]

Hvis du har [[Daglige noter|daglige noter]] pluginnet aktiveret, vil dato egenskaben også fungere som et internt link til den tilsvarende note for den dag.

![[Daglige noter#^daily-notes-date]]

### Dato & tid

Dato & tid egenskaber inkluderer både en dato og et bestemt tidspunkt, gemt i følgende format:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Ligesom [[#Dato|datoegenskaber]] følger dato- og tidsvælgeren dit operativsystems standardformat. Du kan ændre det i dit systems indstillinger.

### Tags

Tags-egenskaber er en speciel egenskabstype, der udelukkende bruges af `tags`-egenskaben. Denne egenskabstype kan ikke tildeles til andre egenskaber.

Tags-egenskaber formateres som en liste, hvor hvert tag vises på sin egen linje med en bindestreg (-) og et mellemrum foran.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

`tags`-egenskaben er en af Obsidians [[#Standardegenskaber]]. Se [[Tags]] for mere information om brug af tags i Obsidian.

### JSON egenskaber

Selvom vi anbefaler at anvende YAML til at definere egenskaber, kan du også anvende [JSON](https://www.json.org/) til at definere dem:

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Bemærk at JSON blokke bliver læst, fortolket og gemt som YAML.

## Standardegenskaber

Obsidian kommer med et sæt af standardegenskaber:

| Egenskab     | Type | Beskrivelse                                                  |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | List | Se [[Redigering og formatering/Tags\|Tags]]                   |
| `aliases`    | List | Se [[Aliaser]].                                             |
| `cssclasses` | List | Tillader dig at style individuelle noter med brug af [[CSS kodestykker]]. |

### Egenskaber for Obsidian Publish

Følgende standardegenskaber kan anvendes sammen med [[Introduktion til Obsidian Publish|Obsidian Publish]]:

| Egenskab      | Beskrivelse                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Se [[Udgiv dit indhold#Automatically select data to publish\|Automatically select data to publish]]. |
| `permalink`   | Se [[Permalinks\|Permalinks]].                                                                            |
| `description` | Se [[Forhåndsvisning af links på sociale medier#Description\|Description]].                                               |
| `image`       | Se [[Forhåndsvisning af links på sociale medier#Image\|Image]].                                                           |
| `cover`       | Se [[Forhåndsvisning af links på sociale medier#Image\|Image]].                                                           |

### Udfasede egenskaber

Følgende egenskaber er udfasede i Obsidian 1.4 og bør erstattes med nye med tilsvarende funktionalitet. Understøttelse af dem som [[#Standardegenskaber|standardegenskaber]] droppes i Obsidian 1.9.

| Egenskab | Beskrivelse |
|-|-|
| `tag` | Udfaset alias for `tags`. |
| `alias` | Udfaset alias for `aliases`. |
| `cssclass` | Udfaset alias for `cssclasses`. |

> [!tip] Hvis du har brug for at konvertere dine filer i din boks til [[#Standardegenskaber|standardegenskaber]], kan du anvende pluginnet [[Formatkonvertering]] til at ændre alle udfasede egenskaber på en gang.
