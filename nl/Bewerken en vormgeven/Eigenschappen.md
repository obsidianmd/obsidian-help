---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Eigenschappen stellen u in staat om informatie over een notitie te organiseren. Eigenschappen bevatten gestructureerde gegevens zoals tekst, links, datums, selectievakjes en getallen.'
---
Eigenschappen stellen je in staat om informatie over een notitie te organiseren. Eigenschappen bevatten gestructureerde gegevens zoals tekst, koppelingen, datums, selectievakjes en getallen. Eigenschappen kunnen ook worden gebruikt in combinatie met [[Communityplug-ins]] die nuttige dingen kunnen doen met je gestructureerde gegevens.

## Eigenschappen toevoegen aan een notitie

Er zijn verschillende manieren om een eigenschap aan een notitie toe te voegen:

- Gebruik de [[Opdrachtenpaneel|opdracht]] **Voeg bestandseigenschap toe**.
- Gebruik de **`Cmd/Ctrl+;`** [[Sneltoetsen|sneltoets]].
- Kies **Voeg bestandseigenschap toe** in het menu **Meer acties** (dat je opent via het pictogram met drie puntjes of door rechts te klikken op het tabblad).
- Typ `---` helemaal aan het begin van een bestand.

Zodra je een eigenschap toevoegt, verschijnt er een rij bovenaan het bestand met twee invoervelden: de _naam_ van de eigenschap en de _waarde_ van de eigenschap.

Voor de naam kun je alles kiezen wat je wilt. Obsidian biedt verschillende standaard eigenschappen: `tags`, `cssclasses` en `aliases`.

Zodra je de eigenschapnaam hebt gekozen, kun je er een waarde aan geven.

### Eigenschapstypen

Naast een naam en waarde hebben eigenschappen ook een _type_. Het type van een eigenschap bepaalt welk soort waarden het kan opslaan en hoe Obsidian ermee omgaat. Om het type van een eigenschap te wijzigen, klik je op het typepictogram naast de eigenschapnaam en selecteer je een andere optie. Je kunt eigenschapstypen ook beheren met de kernplug-in [[Eigenschappenvenster]].

Obsidian ondersteunt de volgende eigenschapstypen:

- **[[#Tekst]]**
- **[[#Lijst]]**
- **[[#Getal]]**
- **[[#Selectievakje]]**
- **[[#Datum]]**
- **[[#Datum & tijd]]**
- **[[#Labels]]**

Zodra een eigenschapstype is toegewezen aan een eigenschapnaam, zullen alle eigenschappen met die naam in je hele kluis hetzelfde type gebruiken.

## Geavanceerd gebruik

### Eigenschappen zoeken

Eigenschappen hebben hun eigen [[Zoeken|zoeksyntaxis]] die je kunt gebruiken samen met andere zoektermen en operatoren. [[Zoeken#Eigenschappen zoeken|Zie zoeksyntaxis voor eigenschappen]].

### Sjablonen

Je kunt eigenschappen toevoegen aan [[Sjablonen]].

Wanneer je een sjabloon invoegt in de actieve notitie, worden alle eigenschappen uit het sjabloon aan de notitie toegevoegd. Obsidian zal ook eventuele eigenschappen die al in je notitie bestaan samenvoegen met eigenschappen in het sjabloon. ^templates-properties

### Eigenschappen hernoemen

Je kunt een eigenschap hernoemen door er rechts op te klikken in de [[Eigenschappenvenster|Alle eigenschappenweergave]].

### Weergavemodi

Je kunt wijzigen hoe eigenschappen worden weergegeven in je notitie door naar **[[Instellingen]] → Editor → Eigenschappen in het document** te gaan. De opties zijn:

- **Zichtbaar** (standaard) – toont eigenschappen bovenaan de notitie, als die er zijn.
- **Verborgen** – verbergt eigenschappen, maar ze kunnen nog steeds worden weergegeven in de zijbalk via [[Eigenschappenvenster]].
- **Bron** – toont eigenschappen in platte tekst YAML-indeling.

### CSS-fragmenten

Je kunt [[CSS-fragmenten]] gebruiken om het uiterlijk van specifieke notities te veranderen.

### Niet ondersteund

Enkele functies worden momenteel niet ondersteund in Obsidian:

- **Geneste eigenschappen**: Om geneste eigenschappen te bekijken, raden we aan de [[Weergaven en bewerkingsmodus#Bronmodus|bronmodus]] te gebruiken.
- **Bulkbewerking van eigenschappen**: Voor uitgebreide bulkbewerking buiten [[Eigenschappenvenster]] raden we aan om bulkbewerkingstools te gebruiken zoals VSCode, scripts en community-plugins.
- **Markdown in eigenschappen**: Dit is een bewuste beperking omdat eigenschappen bedoeld zijn voor kleine, atomaire stukjes informatie die zowel door mensen als machines leesbaar zijn.

## Sneltoetsen

### Een eigenschap toevoegen

| Actie | Sneltoets |
|---|---|
|Nieuwe eigenschap toevoegen|`Cmd + ;`|

### Navigeren tussen eigenschappen

Wanneer een eigenschap geselecteerd is

| Actie | Sneltoets |
|---|---|
|Volgende eigenschap selecteren|`Pijl omlaag` of `Tab`|
|Vorige eigenschap selecteren|`Pijl omhoog` of `Shift+Tab`|
|Naar editor springen|`Alt+Pijl omlaag`|

### Eigenschappen selecteren

| Actie | Sneltoets |
|---|---|
|Selectie naar boven uitbreiden|`Shift+Pijl omhoog`|
|Selectie naar beneden uitbreiden|`Shift+Pijl omlaag`|
|Alles selecteren|`Cmd+A`|

### Eigenschappen bewerken

| Actie | Sneltoets |
|---|---|
|Eigenschapnaam bewerken|`Pijl links`|
|Eigenschapwaarde bewerken|`Pijl rechts`|
|Eigenschap focussen|`Escape`|
|Eigenschap verwijderen|`Cmd+Backspace`<br><br>als er eigenschappen zijn geselecteerd, wordt de selectie verwijderd.|
|Ongedaan maken|`Cmd+Z`|
|Opnieuw|`Cmd+Shift+Z`|

### Vim (geavanceerd)

| Actie | Sneltoets |
|---|---|
|Omlaag|`j`|
|Omhoog|`k`|
|Naam focussen|`h`|
|Waarde focussen|`l`|
|Waarde focussen (cursor aan einde)|`A`|
|Waarde focussen (cursor aan begin)|`i`|
|Nieuwe eigenschap aanmaken|`o`|

## Eigenschapindeling

Eigenschappen worden opgeslagen in [YAML](https://yaml.org/)-indeling bovenaan het bestand. YAML is een populaire indeling die gemakkelijk leesbaar is voor zowel mensen als computers.

Eigenschapnamen worden gescheiden van hun waarden door een dubbele punt gevolgd door een spatie:

```yaml
---
name: value
---
```

Hoewel de volgorde van elk naam-waardepaar er niet toe doet, moet elke naam uniek zijn binnen een notitie. Je kunt bijvoorbeeld niet meer dan één `tags`-eigenschap hebben.

Waarden kunnen [[#Tekst|tekst]], [[#Getal|getallen]], [[#Selectievakje|selectievakjes]], [[#Datum|datums]], [[#Datum & tijd|datums en tijden]] of [[#Lijst|lijsten]] zijn.

### Tekst

Teksteigenschappen bevatten een enkele regel tekst. Markdown-opmaak wordt niet weergegeven in teksteigenschappen. Hashtags maken geen labels aan wanneer ze in teksteigenschappen worden gebruikt.

Teksteigenschappen kunnen URL's en [[Interne koppelingen]] bevatten met de `[[Koppeling]]`-syntaxis. [[Interne koppelingen]] in teksteigenschappen moeten omgeven zijn met aanhalingstekens. Obsidian voegt deze automatisch toe als je handmatig interne koppelingen in eigenschappen invoert, maar let erop dat je ze toevoegt wanneer je sjabloonplug-ins gebruikt.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Lijst

Lijsteigenschappen bevatten meerdere waarden. Elke waarde in een lijst verschijnt op een eigen regel, voorafgegaan door een koppelteken (-) en een spatie.

Lijstwaarden kunnen tekst, getallen en [[Interne koppelingen]] bevatten. Wanneer je [[Interne koppelingen]] in lijsteigenschappen gebruikt, omgeef ze dan met aanhalingstekens.

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

### Getal

Eigenschappen van het type getal moeten altijd een letterlijk getal zijn, geen uitdrukking met operatoren. Zowel gehele getallen als decimalen zijn toegestaan.

```yaml
---
year: 1977
pie: 3.14
---
```

### Selectievakje

Selectievakje-eigenschappen zijn ofwel `true` of `false`. In live voorbeeld wordt dit weergegeven als een selectievakje.

```yaml
---
favorite: true
reply: false
last: # Onbepaalde waarde; wordt vaak als false behandeld
```

### Datum

Datumeigenschappen worden opgeslagen in de volgende indeling:

```yaml
---
date: 2020-08-21
---
```

De datumkiezer volgt de standaard datum- en tijdindeling van je besturingssysteem. Je kunt dit wijzigen in je systeeminstellingen:

> [!info]- Windows
> **[[Instellingen]] → Tijd en taal → Taal en regio → Regionale indeling → Indelingen wijzigen**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Systeemvoorkeuren → Taal en regio → Datumindeling**
> 
> ![[Mac-OS-DateTime.png|450]]

Met de [[Dagnotities]]-plug-in ingeschakeld, zal de datumeigenschap ook fungeren als een interne koppeling naar de bijbehorende dagelijkse notitie voor die datum.

![[Dagnotities#^daily-notes-date]]

### Datum & tijd

Datum & tijd-eigenschappen bevatten zowel een datum als een specifiek tijdstip, opgeslagen in de volgende indeling:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Net als bij [[#Datum|datumeigenschappen]] volgt de datum- en tijdkiezer de standaardindeling van je besturingssysteem. Je kunt dit wijzigen in je systeeminstellingen.

### Labels

Labeleigenschappen zijn een speciaal eigenschapstype dat uitsluitend wordt gebruikt door de `tags`-eigenschap. Dit eigenschapstype kan niet aan andere eigenschappen worden toegewezen.

Labeleigenschappen worden opgemaakt als een lijst, waarbij elke tag op een eigen regel staat, voorafgegaan door een koppelteken (-) en een spatie.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

De `tags`-eigenschap is een van Obsidians [[#Standaardeigenschappen]]. Zie [[Labels]] voor meer informatie over het gebruik van labels in Obsidian.

### JSON-eigenschappen

Hoewel we aanbevelen om YAML te gebruiken voor het definiëren van eigenschappen, kun je eigenschappen ook definiëren met [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Let op dat het JSON-blok wordt gelezen, geïnterpreteerd en opgeslagen als YAML.

## Standaardeigenschappen

Obsidian wordt geleverd met een set standaardeigenschappen:

| Eigenschap   | Type  | Beschrijving                                                 |
| ------------ | ----- | ------------------------------------------------------------ |
| `tags`       | Lijst | Zie [[Labels]].                                              |
| `aliases`    | Lijst | Zie [[Aliassen]].                                            |
| `cssclasses` | Lijst | Hiermee kun je individuele notities opmaken met [[CSS-fragmenten]]. |

### Eigenschappen voor Obsidian Publish

De volgende standaardeigenschappen kunnen worden gebruikt met [[Inleiding tot Obsidian Publish|Obsidian Publish]]:

| Eigenschap    | Beschrijving                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Zie [[Je inhoud publiceren#Automatisch gegevens selecteren om te publiceren\|Automatisch gegevens selecteren om te publiceren]]. |
| `permalink`   | Zie [[Permalinks\|Permalinks]].                                                                            |
| `description` | Zie [[Linkvoorbeelden op sociale media#Description\|Beschrijving]].                                        |
| `image`       | Zie [[Linkvoorbeelden op sociale media#Image\|Afbeelding]].                                                |
| `cover`       | Zie [[Linkvoorbeelden op sociale media#Image\|Afbeelding]].                                                |

### Verouderde eigenschappen

Deze eigenschappen zijn verouderd sinds Obsidian 1.4 en moeten worden vervangen door hun moderne equivalenten. Ondersteuning hiervoor als [[#Standaardeigenschappen]] is verwijderd in Obsidian 1.9.

| Eigenschap | Beschrijving |
|-|-|
| `tag` | Verouderd alias voor `tags`. |
| `alias` | Verouderd alias voor `aliases`. |
| `cssclass` | Verouderd alias voor `cssclasses`. |

> [!tip] Als je de bestanden in je kluis moet converteren naar de indeling van [[#Standaardeigenschappen]], kun je [[Markdown-indeling importeren]] gebruiken om je kluis in één keer aan te passen.
