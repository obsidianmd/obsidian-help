---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Egenskaper lar deg organisere informasjon om et notat. Egenskaper inneholder strukturerte data som tekst, lenker, datoer, avmerkingsbokser og tall.'
---
Egenskaper lar deg organisere informasjon om et notat. Egenskaper inneholder strukturerte data som tekst, lenker, datoer, avkrysningsbokser og tall. Egenskaper kan også brukes i kombinasjon med [[Community-utvidelser]] som kan gjøre nyttige ting med dine strukturerte data.

## Legg til egenskaper i et notat

Det finnes flere måter å legge til en egenskap i et notat:

- Bruk **Legg til filegenskap**-[[Kommandovelger|kommandoen]].
- Bruk **`Cmd/Ctrl+;`** [[Hurtigtaster|hurtigtasten]].
- Velg **Legg til filegenskap** fra **Flere handlinger**-menyen (åpnes via treprikk-ikonet eller ved å høyreklikke på fanen).
- Skriv `---` helt i begynnelsen av en fil.

Når du legger til en egenskap, vises en rad øverst i filen med to felt: egenskapens _navn_ og egenskapens _verdi_.

For navnet kan du velge hva du vil. Obsidian tilbyr flere standardegenskaper: `tags`, `cssclasses` og `aliases`.

Når du har valgt egenskapsnavnet, kan du gi det en verdi.

### Egenskapstyper

I tillegg til navn og verdi har egenskaper også en _type_. En egenskaps type bestemmer hva slags verdier den kan lagre og hvordan Obsidian håndterer dem. For å endre typen til en egenskap, klikk på typeikonet ved siden av egenskapsnavnet og velg et annet alternativ. Du kan også administrere egenskapstyper med kjerneutvidelsen [[Egenskapsvisning]].

Obsidian støtter følgende egenskapstyper:

- **[[#Tekst]]**
- **[[#Liste]]**
- **[[#Tall]]**
- **[[#Avkrysningsboks]]**
- **[[#Dato]]**
- **[[#Dato og klokkeslett]]**
- **[[#Tagger]]**

Når en egenskapstype er tilordnet et egenskapsnavn, vil alle egenskaper med det navnet i hele hvelvet bruke samme type.

## Avansert bruk

### Søk i egenskaper

Egenskaper har sin egen [[Søk|søkesyntaks]] som du kan bruke sammen med andre søkeord og operatorer. [[Søk#Søk i egenskaper|Se søkesyntaks for egenskaper]].

### Maler

Du kan legge til egenskaper i [[Maler|Maler]].

Når du setter inn en mal i det aktive notatet, legges alle egenskapene fra malen til i notatet. Obsidian vil også slå sammen eventuelle egenskaper som finnes i notatet ditt med egenskaper fra malen. ^templates-properties

### Gi egenskaper nytt navn

Du kan gi en egenskap nytt navn ved å høyreklikke på den i [[Egenskapsvisning|Alle egenskaper-visningen]].

### Visningsmodi

Du kan endre hvordan egenskaper vises i notatet ditt ved å gå til **[[Innstillinger]] → Redigeringsprogram → Egenskaper i dokument**. Alternativene er:

- **Synlig** (standard) – viser egenskaper øverst i notatet, hvis det finnes noen.
- **Skjult** – skjuler egenskaper, kan fortsatt vises i sidefeltet via [[Egenskapsvisning]].
- **Kilde** – viser egenskaper i ren tekst YAML-format.

### CSS-utdrag

Du kan bruke [[CSS-utdrag]] for å endre utseendet på bestemte notater.

### Ikke støttet

Noen funksjoner støttes foreløpig ikke i Obsidian:

- **Nestede egenskaper**: For å se nestede egenskaper anbefaler vi å bruke [[Visninger og redigeringsmodus#Kildemodus|kildemodus]].
- **Masseredigering av egenskaper**: For grundig masseredigering utover [[Egenskapsvisning]], anbefaler vi å bruke masseredigeringsverktøy som VSCode, skript og community-utvidelser.
- **Markdown i egenskaper**: Dette er en bevisst begrensning ettersom egenskaper er ment for små, atomiske informasjonsbiter som er lesbare for både mennesker og maskiner.

## Hurtigtaster

### Legg til en egenskap

| Handling | Hurtigtast |
|---|---|
|Legg til ny egenskap|`Cmd + ;`|

### Naviger mellom egenskaper

Når en egenskap har fokus

| Handling | Hurtigtast |
|---|---|
|Fokuser neste egenskap|`Pil ned` eller `Tab`|
|Fokuser forrige egenskap|`Pil opp` eller `Shift+Tab`|
|Hopp til redigeringsprogrammet|`Alt+Pil ned`|

### Velg egenskaper

| Handling | Hurtigtast |
|---|---|
|Utvid utvalg oppover|`Shift+Pil opp`|
|Utvid utvalg nedover|`Shift+Pil ned`|
|Velg alt|`Cmd+A`|

### Rediger egenskaper

| Handling | Hurtigtast |
|---|---|
|Rediger egenskapsnavn|`Pil venstre`|
|Rediger egenskapsverdi|`Pil høyre`|
|Fokuser egenskap|`Escape`|
|Slett egenskap|`Cmd+Backspace`<br><br>hvis noen egenskaper er valgt, slettes utvalget i stedet.|
|Angre|`Cmd+Z`|
|Gjør om|`Cmd+Shift+Z`|

### Vim (avansert)

| Handling | Hurtigtast |
|---|---|
|Flytt ned|`j`|
|Flytt opp|`k`|
|Fokuser nøkkel|`h`|
|Fokuser verdi|`l`|
|Fokuser verdi (markør på slutten)|`A`|
|Fokuser verdi (markør i begynnelsen)|`i`|
|Opprett ny egenskap|`o`|

## Egenskapsformat

Egenskaper lagres i [YAML](https://yaml.org/)-format øverst i filen. YAML er et populært format som er enkelt å lese for både mennesker og datamaskiner.

Egenskapsnavn er atskilt fra verdiene med et kolon etterfulgt av et mellomrom:

```yaml
---
name: value
---
```

Selv om rekkefølgen på hvert navn-verdi-par ikke spiller noen rolle, må hvert navn være unikt innenfor et notat. Du kan for eksempel ikke ha mer enn én `tags`-egenskap.

Verdier kan være [[#Tekst|tekst]], [[#Tall|tall]], [[#Avkrysningsboks|avkrysningsbokser]], [[#Dato|datoer]], [[#Dato og klokkeslett|datoer og klokkeslett]] eller [[#Liste|lister]].

### Tekst

Tekstegenskaper inneholder en enkelt linje med tekst. Markdown-formatering gjengis ikke i tekstegenskaper. Hashtagger oppretter ikke tagger når de brukes i tekstegenskaper.

Tekstegenskaper kan inneholde URL-er og [[Interne lenker]] ved hjelp av `[[Lenke]]`-syntaksen. [[Interne lenker]] i tekstegenskaper må omsluttes av anførselstegn. Obsidian legger automatisk til disse hvis du manuelt skriver inn interne lenker i egenskaper, men vær nøye med å legge dem til når du bruker malutvidelser.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Liste

Listeegenskaper inneholder flere verdier. Hver verdi i en liste vises på sin egen linje, innledet med en bindestrek (-) og et mellomrom.

Listeverdier kan inneholde tekst, tall og [[Interne lenker]]. Når du bruker [[Interne lenker]] i listeegenskaper, omslutt dem med anførselstegn.

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

### Tall

Tallegenskaper må alltid være et bokstavelig tall, ikke et uttrykk med operatorer. Både heltall og desimaltall er tillatt.

```yaml
---
year: 1977
pie: 3.14
---
```

### Avkrysningsboks

Avkrysningsboksegenskaper er enten `true` eller `false`. I Live-forhåndsvisning vises dette som en avkrysningsboks.

```yaml
---
favorite: true
reply: false
last: # Ubestemt verdi; behandles ofte som false
```

### Dato

Datoegenskaper lagres i følgende format:

```yaml
---
date: 2020-08-21
---
```

Datovelgeren følger operativsystemets standard dato- og klokkeslettformat. Du kan endre det i systeminnstillingene:

> [!info]- Windows
> **[[Innstillinger]] → Tid og språk → Språk og region → Regionalt format → Endre formater**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Systeminnstillinger → Språk og region → Datoformat**
> 
> ![[Mac-OS-DateTime.png|450]]

Med [[Daglige notater]]-utvidelsen aktivert vil datoegenskapen i tillegg fungere som en intern lenke til det tilsvarende daglige notatet for den datoen.

![[Daglige notater#^daily-notes-date]]

### Dato og klokkeslett

Dato og klokkeslett-egenskaper inkluderer både en dato og et spesifikt tidspunkt, lagret i følgende format:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Som med [[#Dato|datoegenskaper]] følger dato- og tidsvelgeren operativsystemets standardformat. Du kan endre det i systeminnstillingene.

### Tagger

Tagger-egenskaper er en spesiell egenskapstype som brukes utelukkende av `tags`-egenskapen. Denne egenskapstypen kan ikke tilordnes andre egenskaper.

Tagger-egenskaper formateres som en liste, med hver tagg på sin egen linje innledet med en bindestrek (-) og et mellomrom.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

`tags`-egenskapen er en av Obsidians [[#Standardegenskaper]]. Se [[Tagger]] for mer informasjon om bruk av tagger i Obsidian.

### JSON-egenskaper

Selv om vi anbefaler å bruke YAML for å definere egenskaper, kan du også definere egenskaper med [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Merk at JSON-blokken vil bli lest, tolket og lagret som YAML.

## Standardegenskaper

Obsidian leveres med et sett av standardegenskaper:

| Egenskap     | Type | Beskrivelse                                                  |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | Liste | Se [[Redigering og formatering/Tagger\|Tagger]].                   |
| `aliases`    | Liste | Se [[Aliaser]].                                             |
| `cssclasses` | Liste | Lar deg style individuelle notater med [[CSS-utdrag]]. |

### Egenskaper for Obsidian Publish

Følgende standardegenskaper kan brukes med [[Introduksjon til Obsidian Publish|Obsidian Publish]]:

| Egenskap      | Beskrivelse                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Se [[Publiser innholdet ditt#Velg automatisk data som skal publiseres\|Velg automatisk data som skal publiseres]]. |
| `permalink`   | Se [[Permalenker\|Permalenker]].                                                                            |
| `description` | Se [[Forhåndsvisning av lenker på sosiale medier#Beskrivelse\|Beskrivelse]].                                               |
| `image`       | Se [[Forhåndsvisning av lenker på sosiale medier#Bilde\|Bilde]].                                                           |
| `cover`       | Se [[Forhåndsvisning av lenker på sosiale medier#Bilde\|Bilde]].                                                           |

### Utdaterte egenskaper

Disse egenskapene ble avviklet i Obsidian 1.4 og bør erstattes med sine moderne ekvivalenter. Støtte for dem som [[#Standardegenskaper]] er fjernet i Obsidian 1.9.

| Egenskap | Beskrivelse |
|-|-|
| `tag` | Utdatert alias for `tags`. |
| `alias` | Utdatert alias for `aliases`. |
| `cssclass` | Utdatert alias for `cssclasses`. |

> [!tip] Hvis du trenger å konvertere filene i hvelvet ditt til [[#Standardegenskaper]]-formatet, kan du bruke [[Markdown-importør]] for å endre hele hvelvet på én gang.
