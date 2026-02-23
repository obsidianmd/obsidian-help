---
cssclasses:
  - soft-embed
description: Egenskaber tillader dig at organisere noters metainformation. Egenskaber kan indeholde struktureret data såsom tekst, links, datoer, afkrydsningsfelter og tal.
mobile: false
permalink: egenskaber
publish: true
---
Egenskaber tillader sig at organisere information om en note. Egenskaber er en notes metainformation. Egenskaber indholder struktureret data, såsom tekst, links, datoer, afkrydsningsfelter og tal. Egenskaber kan opgså benyttes i kombination med [[Fællesskabsplugins|plugins]], som kan anvende metainformationen til brugbare funktioner.

## Tilføj egenskaber til en note

De er flere måder, at tilføje en egenskab til en note på:

- Benyt **Tilføj egenskab** [[Kommandopaletten|kommandoen]]
- Benyt genvejstasten **`Cmd/Ctrl+;`**
- Vælg **Tilføj filegenskab** fra **Flere muligheder** menuen (ved at trykke på ikonet med de tre lodrette punktummer eller ved at højreklikke på fanen)
- Skrive `---` helt i begyndelsen af en note

Når du tilføjer en egenskab, vil der blive tilføjet en fække i toppen af noten med to værdier: _Navnet_ på egenskaben og egenskabens _værdi_.

Du kan anvende et hvilket som helst navn. Obsidian har flere standard egenskaber defineret: `tags`, `cssclasses`, and `aliases`.

Når du har valgt et navn på egenskaben, kan du give den en værdi.

### Typer af egenskaber

Egenskaber kan også være af en _type_ udover navnet og værdien. En EGenskabs type bestemmer hvilken type værdi, som egenskaben kan indeholde og hvordan Obsidian skal håndtere dem. For at ændre typen på en egenskab, så klik på typeikonet ved siden af navnet på egenskaben og vælg en af mulighederne. Du kan også håndtere typerne for egenskaber ved at anvende [[Egenskabsvisning|egenskabsvinduet]], som er et kerneplugin.

Obsidian understøtter følgende type af egenskaber:

- **[[#^text-list|Tekst]]**
- **[[#^text-list|Lister]]**
- **[[#^numbers|Tal]]**
- **[[#^checkbox|Afkrydsningsfelter]]**
- **[[#^date-time|Datoer]]**
- **[[#^date-time|Datoer & tid]]**

Når en egenskab har fået tildelt en type, vil alle egenskaber med dette navn i din boks være af den type.

## Avanceret brug

### Links

Egenskaber af **Tekst**- og **liste**typen kan indeholde URLer og [[Interne links|interne links]], når der anvendes`[[Link]]` synktaksen.

### Søgeegenskaber

Egenskaber har deres egen [[Søg|søge syntaks]] som du kan anvende sammen med andre søgetermer og operatorer. Se guiden: [[Søg#Søg efter egenskaber|Søg efter egenskaber]].

### Skabeloner

Du kan også tilføje egenskaber til [[Skabeloner|skabeloner]].

Når du indsætter en skabelon i en aktiv note, vil alle egenskaberne fra skabelonen blive tilføjet til noten. Obsidian vil tilføje egenskaberne til alle eventuelle eksisterende egenskaber i noten. ^templates-properties

### Sådan omdøber du egenskaber

Du kan omdøbe en egenskab ved at højreklikke på den i [[Egenskabsvisning|egenskabsvinduet]].

### Visningstilstande

Du kan ændre på, hvordan egenskaber vises i din note, ved at gå til **Indstillinger → Editor → Egenskaber i dokument**. Mulighederne er:

- **Synligt** (standard) — Vis egenskaber i toppen af noten, hvis der nogen
- **Skjult** — Skjul egenskaber, men kan stasig vises i sidepanelet via [[Egenskabsvisning|egenskabsvinduet]]
- **Kilde** — Vis egenskaber som almindelig tekst i YAML format

### CSS kodestykker

Du kan anvende [[CSS Kodestykker|CSS kodestykker]] til at ændre udseenet af spevifikke noter.

### Ikke understøttede funktioner

Nogle få funktioner er endnu ikke understøttet i Obsidian:

- **Indlejrede egenskaber**: For at vise indlejrede egenskaber, så anbefaler vi at benytte [[Views og redigeringstilstand#Kildetilstand|kildetilstand]]
- **Masseredigering af egenskaber**: Vi anbefalder at anvende værtøjer som VSCode, scripts eller fællesskabsplugins til at masseredigere egenskaber udenfor [[Egenskabsvisning|egenskabsvinduet]]
- **Markdown i egenskaber**: Dette er en bevidst begræsning fra Obsidian side. Egenskaber er kun ment som metainformation med simple værdier

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
|Slet egenskab|`Cmd+Tilbage`<br><br>Hvis flere egenskaber er valgt, vil hele markeringen blive slettet
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

Egenskaber gemmes i [YAML](https://yaml.org/) formatet i begyndelsen af filen.YAML er et populært format, som nemt kan læses af både mennesker og computere.

Værdier på egenskaber separeres fra deres navne ved at anvende et kolon efterfulgt af et mellemrum:

```yaml
---
navn: værdi
---
```

Da rækkefølgen af hvert navne-værdi par ikke har betydning, skal hvert navn for en egenskab være unikt i en note. Fx. kan du kun have en `tags` egenskab.

Værdier kan være takst, tal, true eller false, eller endda rækker af værdier(lister). 
^text-list

```yaml
---
title: Et ny håb # Dette er en tekst egenskab
year: 1977
favorite: true
cast: # Dette er en liste egenskab
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
---
```

### Links

[[Interne links]] i egenskaber af **Tekst**- og **list**typen skal sættes i firkantede paranteser. Obsidian vil automatisk tilføje disse, hvis du skriver interne links i egenskaber, men vær påpasselig hvis du anvender interne links sammen med plugins, der har skabelonfunktioner.

```yaml
---
link: "[[Link]]" 
linklist: 
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Tal

Egenskaber med tal skal altid være kun være tal og ikke udtryk med matematiske operatorer. Både heltal og kommatal er tilladt. 
^numbers

```yaml
---
year: 1977
pie: 3,14
---
```

### Afkrydsningsfelter

Afskrydningsfelter kan enten være `true` eller `false`. Et tomt afkrydsningsfelt bliver betragtet som `false`. 
^checkbox

```yaml
---
favorite: true
reply: false
last: # dette fortolkes som standard falsk
```

### Datoer

Egenskaber med **datoer** og **dato og tid** er gemt i følgende format: 
^date-time

```yaml
---
date: 2020-08-21
time: 2020-08-21T10:30:00
---
```

Datovælgeren følger dit operativsystems standard dato og tiem format.
Du kan ændre den i dit systems indstillinger (Eksemplerne er på engelske udgaver af operativsystemerne):


> [!info]- Windows
> **Settings → Time & Language → Language & Region → Regional Format → Change Formats**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **System Preferences → Language and Region → Date format**
> 
> ![[Mac-OS-DateTime.png|450]]

Hvis du har [[Daglige noter|daglige noter]] pluginnet aktiveret, vil dato egenskaben også fungere som et internt link til den tilsvarende note for den dag.

![[Daglige noter#^daily-notes-date]]

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

Obsidian kommer med et sæt at standardegenskaber:

| Egenskab     | Type | Beskrivelse                                                  |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | List | Se [[Redigering og formatering/Tags\|Tags]]                   |
| `aliases`    | List | Se [[Aliaser]].                                             |
| `cssclasses` | List | Tillader sig at style individuelle noter med brug af  [[CSS kodestykker]]. |

### Egenskaber for Obsidian Publish

Følgende standardegenskaber kan anvendes sammen med [[Introduktion til Obsidian Publish|Obsidian Publish]]:

> [!note] Note fra oversætter: Links virker ikke, da kapitlet om Obsidian Publish ikke er oversat til nyeste version af dokumentationen endnu.

| Egenskab      | Beskrivelse                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Se [[Publish your content#Automatically select notes to publish\|Automatically select notes to publish]]. |
| `permalink`   | Se [[Permalinks\|Permalinks]].                                                                            |
| `description` | Se [[Social media link previews#Description\|Description]].                                               |
| `image`       | Se [[Social media link previews#Image\|Image]].                                                           |
| `cover`       | Se [[Social media link previews#Image\|Image]].                                                           |

### Udfasede egenskaber

Følgende egenskaber er udfasende i Obsidian 1.4 og bør erstattes med nye med tilsvarende funktionalitet. Understøttelse af dem som [[#Standardegenskaber|standardegenskaber]] droppes i Obsidian 1.9.

| Egenskab | Beskrivelse |
|-|-|
| `tag` | Udfaset alias for `tags`. |
| `alias` | Udfaset alias for `aliases`. |
| `cssclass` | Udfaset alias for `cssclasses`. |

> [!tip] hvis du har brug for at konvertere dine filer i din boks til [[#Standardegenskaber|standardegenskaber]], kan du anvende pluginnet [[Formatkonvertering]] til at ændre alle udfasede egenskaber på en gang.

