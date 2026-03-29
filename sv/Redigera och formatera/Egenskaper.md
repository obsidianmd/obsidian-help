---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Egenskaper låter dig organisera information om en anteckning. Egenskaper innehåller strukturerad data såsom text, länkar, datum, kryssrutor och siffror.'
---
Egenskaper låter dig organisera information om en anteckning. Egenskaper innehåller strukturerad data som text, länkar, datum, kryssrutor och nummer. Egenskaper kan också användas i kombination med [[Gemenskapstillägg]] som kan göra användbara saker med din strukturerade data.

## Lägg till egenskaper i en anteckning

Det finns flera sätt att lägga till en egenskap i en anteckning:

- Använd kommandot **Lägg till filegenskap** i [[Kommandopalett|kommandopaletten]].
- Använd **`Cmd/Ctrl+;`** [[Snabbkommandon|tangentbordsgenvägen]].
- Välj **Lägg till filegenskap** från menyn **Fler åtgärder** (som öppnas via ikonen med tre prickar eller genom att högerklicka på fliken).
- Skriv `---` längst upp i en fil.

När du lägger till en egenskap visas en rad högst upp i filen med två inmatningsfält: egenskapens _namn_ och egenskapens _värde_.

För namnet kan du välja vad du vill. Obsidian erbjuder flera standardegenskaper: `tags`, `cssclasses` och `aliases`.

När du har valt egenskapsnamnet kan du ge det ett värde.

### Egenskapstyper

Utöver namn och värde har egenskaper också en _typ_. En egenskaps typ bestämmer vilken typ av värden den kan lagra och hur Obsidian hanterar dem. För att ändra typen på en egenskap, klicka på typikonet bredvid egenskapsnamnet och välj ett annat alternativ. Du kan också hantera egenskapstyper med kärntillägget [[Egenskapsvy]].

Obsidian stöder följande egenskapstyper:

- **[[#Text]]**
- **[[#Lista]]**
- **[[#Nummer]]**
- **[[#Kryssruta]]**
- **[[#Datum]]**
- **[[#Datum & tid]]**
- **[[#Taggar]]**

När en egenskapstyp har tilldelats ett egenskapsnamn kommer alla egenskaper med det namnet i hela ditt valv att använda samma typ.

## Avancerad användning

### Sök egenskaper

Egenskaper har sin egen [[Sök|söksyntax]] som du kan använda tillsammans med andra söktermer och operatorer. [[Sök#Sök egenskaper|Se söksyntax för egenskaper]].

### Mallar

Du kan lägga till egenskaper i [[Mallar|Mallar]].

När du infogar en mall i den aktiva anteckningen läggs alla egenskaper från mallen till i anteckningen. Obsidian kommer också att sammanfoga eventuella egenskaper som redan finns i din anteckning med egenskaperna i mallen. ^templates-properties

### Byt namn på egenskaper

Du kan byta namn på en egenskap genom att högerklicka på den i [[Egenskapsvy|vyn Alla egenskaper]].

### Visningslägen

Du kan ändra hur egenskaper visas i din anteckning genom att gå till **[[Inställningar]] → Redigerare → Egenskaper i dokument**. Alternativen är:

- **Synlig** (standard) – visar egenskaper högst upp i anteckningen, om det finns några.
- **Dold** – döljer egenskaper, kan fortfarande visas i sidofältet via [[Egenskapsvy]].
- **Källkod** – visar egenskaper i YAML-format som oformaterad text.

### CSS-instick

Du kan använda [[CSS-instick]] för att ändra utseendet på specifika anteckningar.

### Stöds inte

Några funktioner stöds för närvarande inte i Obsidian:

- **Nästlade egenskaper**: För att visa nästlade egenskaper rekommenderar vi att använda [[Vyer och redigeringsläge#Källkodsläge|källkodsläget]].
- **Massredigering av egenskaper**: För djupgående massredigering utanför [[Egenskapsvy]] rekommenderar vi att använda massredigeringsverktyg som VSCode, skript och gemenskapstillägg.
- **Markdown i egenskaper**: Detta är en avsiktlig begränsning eftersom egenskaper är avsedda för små, atomära informationsbitar som är läsbara för både människor och maskiner.

## Tangentbordsgenvägar

### Lägg till en egenskap

| Åtgärd | Tangentbordsgenväg |
|---|---|
|Lägg till ny egenskap|`Cmd + ;`|

### Navigera mellan egenskaper

När en egenskap är fokuserad

| Åtgärd | Tangentbordsgenväg |
|---|---|
|Fokusera nästa egenskap|`Nedpil` eller `Tab`|
|Fokusera föregående egenskap|`Uppil` eller `Shift+Tab`|
|Hoppa till redigeraren|`Alt+Nedpil`|

### Markera egenskaper

| Åtgärd | Tangentbordsgenväg |
|---|---|
|Utöka markering uppåt|`Shift+Uppil`|
|Utöka markering nedåt|`Shift+Nedpil`|
|Markera allt|`Cmd+A`|

### Redigera egenskaper

| Åtgärd | Tangentbordsgenväg |
|---|---|
|Redigera egenskapsnamn|`Vänsterpil`|
|Redigera egenskapsvärde|`Högerpil`|
|Fokusera egenskap|`Escape`|
|Radera egenskap|`Cmd+Backspace`<br><br>om några egenskaper är markerade raderas markeringen istället.|
|Ångra|`Cmd+Z`|
|Gör om|`Cmd+Shift+Z`|

### Vim (avancerat)

| Åtgärd | Tangentbordsgenväg |
|---|---|
|Flytta ned|`j`|
|Flytta upp|`k`|
|Fokusera nyckel|`h`|
|Fokusera värde|`l`|
|Fokusera värde (markör i slutet)|`A`|
|Fokusera värde (markör i början)|`i`|
|Skapa ny egenskap|`o`|

## Egenskapsformat

Egenskaper lagras i [YAML](https://yaml.org/)-format högst upp i filen. YAML är ett populärt format som är enkelt att läsa för både människor och datorer.

Egenskapsnamn separeras från sina värden med ett kolon följt av ett mellanslag:

```yaml
---
name: value
---
```

Även om ordningen på varje namn-värde-par inte spelar roll måste varje namn vara unikt inom en anteckning. Du kan till exempel inte ha mer än en `tags`-egenskap.

Värden kan vara [[#Text|text]], [[#Nummer|nummer]], [[#Kryssruta|kryssrutor]], [[#Datum|datum]], [[#Datum & tid|datum och tider]] eller [[#Lista|listor]].

### Text

Textegenskaper innehåller en enskild rad text. Markdown-formatering renderas inte i textegenskaper. Hashtags skapar inte taggar när de används i textegenskaper.

Textegenskaper kan innehålla URL:er och [[Interna länkar]] med syntaxen `[[Länk]]`. [[Interna länkar]] i textegenskaper måste omges av citattecken. Obsidian lägger automatiskt till dessa om du manuellt anger interna länkar i egenskaper, men var noga med att lägga till dem när du använder malltillägg.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Lista

Listegenskaper innehåller flera värden. Varje värde i en lista visas på sin egen rad, föregånget av ett bindestreck (-) och ett mellanslag.

Listvärden kan innehålla text, nummer och [[Interna länkar]]. När du använder [[Interna länkar]] i listegenskaper, omge dem med citattecken.

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

### Nummer

Nummeregenskaper måste alltid vara ett litteralt nummer, inte ett uttryck med operatorer. Både heltal och decimaltal är tillåtna.

```yaml
---
year: 1977
pie: 3.14
---
```

### Kryssruta

Kryssruteegenskaper är antingen `true` eller `false`. I live-förhandsvisning visas detta som en kryssruta.

```yaml
---
favorite: true
reply: false
last: # Obestämt värde; behandlas ofta som false
```

### Datum

Datumegenskaper lagras i följande format:

```yaml
---
date: 2020-08-21
---
```

Datumväljaren följer ditt operativsystems standardformat för datum och tid. Du kan ändra det i dina systeminställningar:

> [!info]- Windows
> **[[Inställningar]] → Tid och språk → Språk och region → Regionalt format → Ändra format**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Systeminställningar → Språk och region → Datumformat**
> 
> ![[Mac-OS-DateTime.png|450]]

Med tillägget [[Dagliga anteckningar]] aktiverat fungerar datumegenskapen dessutom som en intern länk till motsvarande dagliga anteckning för det datumet.

![[Dagliga anteckningar#^daily-notes-date]]

### Datum & tid

Datum & tid-egenskaper inkluderar både ett datum och en specifik tid, lagrade i följande format:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Liksom [[#Datum|datumegenskaper]] följer datum- och tidsväljaren ditt operativsystems standardformat. Du kan ändra det i dina systeminställningar.

### Taggar

Taggegenskaper är en speciell egenskapstyp som används exklusivt av egenskapen `tags`. Denna egenskapstyp kan inte tilldelas andra egenskaper.

Taggegenskaper formateras som en lista, med varje tagg på sin egen rad föregånget av ett bindestreck (-) och ett mellanslag.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

Egenskapen `tags` är en av Obsidians [[#Standardegenskaper]]. Se [[Taggar]] för mer information om att använda taggar i Obsidian.

### JSON-egenskaper

Även om vi rekommenderar att använda YAML för att definiera egenskaper kan du också definiera egenskaper med [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Observera att JSON-blocket kommer att läsas, tolkas och sparas som YAML.

## Standardegenskaper

Obsidian levereras med en uppsättning standardegenskaper:

| Egenskap     | Typ  | Beskrivning                                                  |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | Lista | Se [[Redigera och formatera/Taggar\|Taggar]].                |
| `aliases`    | Lista | Se [[Aliaser]].                                              |
| `cssclasses` | Lista | Låter dig styla enskilda anteckningar med [[CSS-instick]].   |

### Egenskaper för Obsidian Publish

Följande standardegenskaper kan användas med [[Introduktion till Obsidian Publish|Obsidian Publish]]:

| Egenskap      | Beskrivning                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Se [[Publicera ditt innehåll#Automatiskt välja data att publicera\|Automatiskt välja data att publicera]]. |
| `permalink`   | Se [[Permalänkar\|Permalänkar]].                                                                           |
| `description` | Se [[Förhandsvisning av länkar på sociala medier#Beskrivning\|Beskrivning]].                               |
| `image`       | Se [[Förhandsvisning av länkar på sociala medier#Bild\|Bild]].                                             |
| `cover`       | Se [[Förhandsvisning av länkar på sociala medier#Bild\|Bild]].                                             |

### Utfasade egenskaper

Dessa egenskaper fasades ut i Obsidian 1.4 och bör ersättas med sina moderna motsvarigheter. Stöd för dem som [[#Standardegenskaper]] togs bort i Obsidian 1.9.

| Egenskap | Beskrivning |
|-|-|
| `tag` | Utfasat alias för `tags`. |
| `alias` | Utfasat alias för `aliases`. |
| `cssclass` | Utfasat alias för `cssclasses`. |

> [!tip] Om du behöver konvertera dina filer i ditt valv till formatet för [[#Standardegenskaper]] kan du använda [[Markdown-formatimportör]] för att ändra hela ditt valv på en gång.
