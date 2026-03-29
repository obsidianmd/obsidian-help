---
permalink: bases/syntax
publish: true
mobile: true
description: Deze pagina biedt een inleiding tot de Bases-syntax in Obsidian.
---
Wanneer je een [[Een base aanmaken|base aanmaakt]] in Obsidian, wordt deze opgeslagen als een `.base`-bestand. Bases worden doorgaans bewerkt via de app-interface, maar de syntaxis kan ook handmatig worden bewerkt en ingesloten in een codeblok.

De [[Introductie tot Bases|Bases]]-syntaxis definieert [[Weergaven]], filters en [[Formules|formules]]. Bases moeten geldige YAML zijn die voldoet aan het hieronder gedefinieerde schema.

## Voorbeeld

Hier is een voorbeeld van een base-bestand. We lopen elk onderdeel gedetailleerd door.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Filters

Standaard bevat een base elk bestand in de kluis. Er is geen `from` of `source` zoals in SQL of Dataview. De `filters`-sectie laat je voorwaarden definiëren om de dataset te verkleinen.

```yaml
# Eenvoudige filter:
filters:
  and:
    - file.hasTag("tag")

# Complexe filter:
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Er zijn twee mogelijkheden om filters toe te passen:

1. Op het globale `filters`-niveau (hierboven weergegeven) waar ze van toepassing zijn op alle weergaven in de base.
2. Op het `view`-niveau waar ze alleen van toepassing zijn op een specifieke weergave.

Deze twee secties zijn functioneel equivalent en bij het evalueren voor een weergave worden ze samengevoegd met een `AND`.

De `filters`-sectie bevat ofwel een enkele filterinstructie als tekenreeks, ofwel een recursief gedefinieerd filterobject. Filterobjecten kunnen een van `and`, `or` of `not` bevatten. Deze sleutels zijn een heterogene lijst van andere filterobjecten of filterinstructies in tekenreeksen. Een filterinstructie is een regel die evalueert tot waar of onwaar wanneer toegepast op een notitie. Het kan een van de volgende zijn:

- Een eenvoudige vergelijking met standaard rekenkundige operatoren.
- Een functie. Een verscheidenheid aan [[Functies]] is ingebouwd, en plug-ins kunnen extra functies toevoegen.

De syntaxis en beschikbare functies voor filters en formules zijn hetzelfde.

### Formules

De `formulas`-sectie definieert [[Formules|formule-eigenschappen]] die weergegeven kunnen worden in alle weergaven in het base-bestand.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Formule-eigenschappen ondersteunen standaard rekenkundige operatoren en een verscheidenheid aan ingebouwde [[Functies]]. In de toekomst kunnen plug-ins functies toevoegen voor gebruik in formules.

Je kunt naar eigenschappen verwijzen op verschillende manieren, afhankelijk van hun type:

- **Notitie-eigenschappen** zijn eigenschappen die gedefinieerd zijn in de voormetadata van de notitie. Bijvoorbeeld `note.price` of `note["price"]`.  
  Als er geen prefix is opgegeven, wordt aangenomen dat de eigenschap een `note`-eigenschap is.
- **Bestandseigenschappen** beschrijven het bestand zelf.  
  Bijvoorbeeld `file.size` of `file.ext`. Je kunt ook rechtstreeks naar het bestandsobject verwijzen, bijv. `file.hasLink()`.
- **Formule-eigenschappen** zijn andere formules in de base.  
  Voorbeeld `formula.formatted_price`.

Een formule kan waarden gebruiken van andere formule-eigenschappen, zolang er geen kringverwijzing is.  

Formule-eigenschappen worden altijd opgeslagen als tekenreeksen in YAML, maar hun werkelijke **uitvoergegevenstype** wordt bepaald door het type van de onderliggende gegevens en de retourwaarde van eventueel gebruikte functies.

Let op dat het gebruik van geneste aanhalingstekens nodig is om tekstliteralen op te nemen in het YAML-veld. Tekstliteralen moeten worden ingesloten in enkele of dubbele aanhalingstekens.

### Eigenschappen

De `properties`-sectie maakt het mogelijk configuratie-informatie over elke eigenschap op te slaan. Het is aan de individuele weergave hoe deze configuratiewaarden worden gebruikt. In tabellen wordt de weergavenaam bijvoorbeeld gebruikt voor de kolomkoppen.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Weergavenamen worden niet gebruikt in filters of formules.

### Samenvattingen

De `summaries`-sectie kan worden gebruikt om aangepaste samenvattingsformules te definiëren. Naast het definiëren van samenvattingsformules hier, zijn er verschillende standaard samenvattingsformules beschikbaar.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

In dit voorbeeld is de `customAverage`-formule hetzelfde als de standaard `Average`, behalve dat de waarde wordt afgerond op een ander aantal decimalen. In samenvattingsformules is het sleutelwoord `values` een lijst die alle waarden voor die eigenschap bevat over elke notitie in de resultaatset. De samenvattingsformule moet een enkele `Value` retourneren.

Merk op dat deze `summaries`-sectie verschilt van de `summaries`-sectie in de weergaveconfiguratie (hieronder uitgelegd) waar samenvattingsformules aan specifieke eigenschappen worden toegewezen.

#### Standaard samenvattingsformules

| Naam      | Invoertype | Beschrijving                                                   |
| --------- | ---------- | ------------------------------------------------------------- |
| Average   | Getal     | Het wiskundige gemiddelde van alle getallen uit de invoerwaarden.   |
| Min       | Getal     | Het kleinste getal uit de invoerwaarden.                    |
| Max       | Getal     | Het grootste getal uit de invoerwaarden.                     |
| Sum       | Getal     | De som van alle getallen in de invoer.                          |
| Range     | Getal     | Het verschil tussen `Max` en `Min`.                       |
| Median    | Getal     | De wiskundige mediaan van alle getallen uit de invoerwaarden. |
| Stddev    | Getal     | De standaarddeviatie van alle getallen uit de invoerwaarden.  |
| Earliest  | Datum       | De vroegste datum uit de invoerwaarden.                      |
| Latest    | Datum       | De laatste datum uit de invoerwaarden.                        |
| Range     | Datum       | Het verschil tussen `Latest` en `Earliest`.               |
| Checked   | Boolean    | Het aantal `true`-waarden.                                  |
| Unchecked | Boolean    | Het aantal `false`-waarden.                                 |
| Empty     | Elk        | Het aantal waarden in de invoer dat leeg is.             |
| Filled    | Elk        | Het aantal waarden in de invoer dat niet leeg is.         |
| Unique    | Elk        | Het aantal unieke waarden in de invoer.                     |

### Weergaven

De `views`-sectie definieert hoe de gegevens kunnen worden weergegeven. Elke vermelding in de `views`-lijst definieert een afzonderlijke weergave van dezelfde gegevens, en er kunnen zoveel verschillende weergaven zijn als nodig.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` selecteert uit de ingebouwde en door plug-ins toegevoegde weergavetypen.
- `name` is de weergavenaam en kan worden gebruikt om de standaardweergave te definiëren.
- `filters` zijn precies hetzelfde als hierboven beschreven, maar zijn alleen van toepassing op de weergave.
- `groupBy` specificeert een eigenschap en sorteerrichting. De waarde van de opgegeven eigenschap voor elke rij wordt gebruikt om de rij in groepen te plaatsen.
- `summaries` koppelt eigenschapnamen aan een benoemde samenvatting. Samenvattingen voeren een aggregatie uit op de eigenschap over alle rijen.

[[Weergaven]] kunnen aanvullende gegevens opslaan om alle informatie op te slaan die nodig is om de status te behouden of correct weer te geven, maar plug-in-auteurs moeten ervoor zorgen dat ze geen sleutels gebruiken die al in gebruik zijn door de kernplug-in Bases. Een tabelweergave kan dit bijvoorbeeld gebruiken om het aantal rijen te beperken of om te selecteren welke kolom wordt gebruikt om rijen te sorteren en in welke richting. Een ander weergavetype zoals een kaart kan dit gebruiken om aan te geven welke eigenschap in de notitie overeenkomt met de breedte- en lengtegraad en welke eigenschap moet worden weergegeven als de titel van de pin.

In de toekomst zal de API weergaven in staat stellen deze waarden te lezen en te schrijven, waardoor de weergave zijn eigen interface voor configuratie kan bouwen.

## Eigenschappen

Er zijn drie soorten eigenschappen die in bases worden gebruikt:

1. **Notitie-eigenschappen**, opgeslagen in de voormetadata van Markdown-bestanden.
2. **Bestandseigenschappen**, beschikbaar voor alle bestandstypen.
3. **Formule-eigenschappen**, gedefinieerd in het `.base`-bestand zelf (zie hierboven).

### Notitie-eigenschappen

[[Eigenschappen|Notitie-eigenschappen]] zijn alleen beschikbaar voor Markdown-bestanden en worden opgeslagen in de YAML-voormetadata van elke notitie. Deze eigenschappen zijn toegankelijk met het formaat `note.author` of simpelweg `author` als afkorting.

### Bestandseigenschappen

Bestandseigenschappen verwijzen naar het bestand dat momenteel wordt getest of geëvalueerd. Bestandseigenschappen zijn beschikbaar voor alle [[Geaccepteerde bestandsformaten|bestandstypen]], inclusief bijlagen.

Een filter `file.ext == "md"` zal bijvoorbeeld waar zijn voor alle Markdown-bestanden en anders onwaar.

| Eigenschap      | Type   | Beschrijving                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Lijst   | Lijst van terugverwijzingsbestanden. Let op: Deze eigenschap is prestatie-intensief. Keer indien mogelijk de opzoeking om en gebruik `file.links`. Vernieuwt resultaten niet automatisch wanneer de kluis wordt gewijzigd. |
| `file.ctime`  | Datum   | Tijdstip gemaakt                                                  |
| `file.embeds` | Lijst   | Lijst van alle insluitingen in de notitie                                |
| `file.ext`    | Tekenreeks | Bestandsextensie                                                |
| `file.file`   | Bestand   | Bestandsobject, alleen bruikbaar in specifieke functies                |
| `file.folder` | Tekenreeks | Pad van de bestandsmap                                       |
| `file.links`  | Lijst   | Lijst van alle interne koppelingen in de notitie, inclusief voormetadata |
| `file.mtime`  | Datum   | Tijdstip gewijzigd                                                 |
| `file.name`   | Tekenreeks | Bestandsnaam                                                     |
| `file.path`   | Tekenreeks | Pad van het bestand                                              |
| `file.properties`   | Object | Alle eigenschappen van het bestand. Let op: Vernieuwt resultaten niet automatisch wanneer de kluis wordt gewijzigd. |
| `file.size`   | Getal | Bestandsgrootte                                                     |
| `file.tags`   | Lijst   | Lijst van alle tags in de bestandsinhoud en voormetadata          |

### Eigenschappen benaderen met `this`

Gebruik het `this`-object om bestandseigenschappen te benaderen. Waarnaar `this` verwijst, hangt af van waar de base wordt weergegeven.

Wanneer de base wordt geopend in het hoofdinhoudsgebied, verwijst `this` naar eigenschappen van het base-bestand zelf. Bijvoorbeeld, het gebruik van `this.file.folder` retourneert het mappad waar de base zich bevindt.

Wanneer de base is ingesloten in een ander bestand, verwijst `this` naar eigenschappen van het _insluitende_ bestand (de notitie of het Canvas dat de base bevat). Bijvoorbeeld, het gebruik van `this.file.name` retourneert de naam van het insluitende bestand, niet de base.

Wanneer de base in een zijbalk staat, verwijst `this` naar het actieve bestand in het hoofdinhoudsgebied. Hiermee kun je zoekopdrachten maken op basis van het actieve bestand. Je kunt bijvoorbeeld `file.hasLink(this.file)` gebruiken om het terugverwijzingenpaneel na te bootsen.

## Operatoren

### Rekenkundige operatoren

Rekenkundige operatoren voeren berekeningen uit op getallen. Bijvoorbeeld `radius * (2 * 3.14)`.

| Operator | Beschrijving |
| -------- | ----------- |
| `+`      | plus        |
| `-`      | min       |
| `*`      | vermenigvuldigen    |
| `/`      | delen      |
| `%`      | modulo      |
| `( )`    | haakjes |

### Datumrekenkunde

Datums kunnen worden gewijzigd door duur toe te voegen of af te trekken. Duureenheden accepteren meerdere formaten:

| Eenheid                     | Duur |
| ------------------------ | -------- |
| `y`, `year`, `years`     | jaar     |
| `M`, `month`, `months`   | maand    |
| `d`, `day`, `days`       | dag      |
| `w`, `week`, `weeks`     | week     |
| `h`, `hour`, `hours`     | uur      |
| `m`, `minute`, `minutes` | minuut   |
| `s`, `second`, `seconds` | seconde  |

Om Datum-objecten te wijzigen of te verschuiven, gebruik je de `+` of `-` operator met een duurtekenreeks. Bijvoorbeeld, `date + "1M"` voegt 1 maand toe aan de datum, terwijl `date - "2h"` 2 uur aftrekt van de datum.

De globale [[Functies|functie]] `today()` kan worden gebruikt om de huidige datum op te halen, en `now()` kan worden gebruikt om de huidige datum met tijd op te halen.

- `now() + "1 day"` retourneert een datum-tijd precies 24 uur na het moment van uitvoering.
- `file.mtime > now() - "1 week"` retourneert `true` als het bestand binnen de afgelopen week is gewijzigd.
- `date("2024-12-01") + "1M" + "4h" + "3m"` retourneert een Datum-object dat `2025-01-01 04:03:00` vertegenwoordigt.
- Trek twee datums van elkaar af om het verschil in milliseconden te krijgen, bijvoorbeeld `now() - file.ctime`.
- Om het datumgedeelte van een Datum met tijd te krijgen, gebruik je `datetime.date()`.
- Om een Datum-object op te maken, gebruik je de `format()`-functie, bijvoorbeeld `datetime.format("YYYY-MM-DD")`.

### Vergelijkingsoperatoren

Vergelijkingsoperatoren kunnen worden gebruikt om getallen of Datum-objecten te vergelijken. Gelijk aan en niet gelijk aan kunnen worden gebruikt met elk type waarde, niet alleen getallen en datums.

| Operator | Beschrijving              |
| -------- | ------------------------ |
| `==`     | gelijk aan                   |
| `!=`     | niet gelijk aan                |
| `>`      | groter dan             |
| `<`      | kleiner dan                |
| `>=`     | groter dan of gelijk aan |
| `<=`     | kleiner dan of gelijk aan    |

### Booleaanse operatoren

Booleaanse operatoren kunnen worden gebruikt om logische waarden te combineren of om te keren, wat resulteert in een waar of onwaar waarde.

| Operator | Beschrijving |
| -------- | ----------- |
| `!`      | logisch niet |
| `&&`     | logisch en |
| \|\|     | logisch of  |

## Functies

Zie de [[Functies|lijst van functies]] die kunnen worden gebruikt in formules en [[Weergaven|filters]].

## Typen

Bases hebben een typesysteem dat door formules en filters wordt gebruikt om functies toe te passen op eigenschappen.

### Tekenreeksen, getallen en booleans

Tekenreeksen, getallen en booleans zijn "primitieve" waarden waarvoor geen functie nodig is om ze aan te maken.

- Tekenreeksen worden ingesloten in enkele of dubbele aanhalingstekens, bijvoorbeeld `"message"`.
- Getallen worden geschreven als cijfers en kunnen optioneel worden ingesloten in haakjes voor de duidelijkheid. Bijvoorbeeld `1` of `(2.5)`.
- Booleans worden geschreven als `true` of `false` zonder aanhalingstekens.

### Datums en duur

Datums vertegenwoordigen een specifieke datum, of een datum en tijd, afhankelijk van de functie die is gebruikt om ze aan te maken, of het type dat is toegewezen aan de [[Eigenschappen|eigenschap]].

- Om een datum te construeren, gebruik je de `date`-functie, bijvoorbeeld `date("2025-01-01 12:00:00")`
- Om een datum te wijzigen, voeg je een duur toe of trek je deze af, bijvoorbeeld `now() + "1 hour"` of `today() + "7d"`
- Vergelijk datums met vergelijkingsoperatoren (bijv. `>` of `<`) en rekenkundige operatoren (bijvoorbeeld `(now() + "1d") - now()` retourneert `86400000` milliseconden.)
- Om delen van een datum te extraheren, gebruik je de beschikbare velden (`now().hour`), of een gemaksfunctie (`now.time()`).
- Veel andere [[Functies|velden en functies]] zijn beschikbaar op datum-objecten.

### Objecten en lijsten

- Maak van een enkel element een lijst met de `list()`-functie. Dit is vooral handig voor eigenschappen die een mix van lijsten of enkele waarden kunnen bevatten.
- Benader lijstelementen met vierkante haken en een op 0 gebaseerde index. Bijvoorbeeld `property[0]` retourneert het eerste element uit de lijst.
- Benader objectelementen met vierkante haken en de elementnaam of puntnotatie. Bijvoorbeeld `property.subprop` of `property["subprop"]`.

### Bestanden en koppelingen

[[Notities koppelen|Wiki-links]] in [[Eigenschappen|voormetadata-eigenschappen]] worden automatisch herkend als koppelingsobjecten. Koppelingen worden weergegeven als een klikbare koppeling in de [[Weergaven|weergave]].

- Om een koppeling te construeren, gebruik je de globale `link` [[Functies|functie]], bijvoorbeeld `link("filename")` of `link("https://obsidian.md")`.
- Je kunt een koppeling maken van elke tekenreeks, bijvoorbeeld `link(file.ctime.date().toString())`.
- Om de weergavetekst in te stellen, geef je een optionele tekenreeks of pictogram mee als tweede parameter, bijvoorbeeld `link("filename", "display")` of `link("filename", icon("plus"))`.

Een Bestandsobject kan worden omgezet in een koppeling met `file.asLink()` met een optionele weergavetekst.

Koppelingen kunnen worden vergeleken met `==` en `!=`. Ze zijn equivalent zolang ze naar hetzelfde bestand verwijzen, of als het bestand niet bestaat bij opzoeken, dan moet hun koppelingstekst identiek zijn.

Koppelingen kunnen worden vergeleken met bestanden zoals `file` of `this`. Ze zijn gelijk als de koppeling naar het bestand verwijst. Bijvoorbeeld `author == this`.

Koppelingen kunnen ook worden gecontroleerd in lijstbevattingen, bijvoorbeeld `authors.contains(this)`.
