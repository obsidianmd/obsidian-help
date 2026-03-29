---
permalink: formulas
description: 'Formules stellen je in staat om berekende eigenschappen te maken met behulp van gegevens uit andere eigenschappen. Je kunt berekeningen uitvoeren, tekst bewerken, met datums werken en meer.'
---
Formules stellen je in staat om berekende eigenschappen te maken in [[Introductie tot Bases|Bases]] met behulp van gegevens uit andere [[Eigenschappen|eigenschappen]]. Je kunt berekeningen uitvoeren, tekst bewerken, met datums werken en meer.

## Wat formules kunnen doen

Formules kunnen je helpen om:

- **Waarden berekenen**, prijzen optellen, totalen berekenen of wiskundige bewerkingen uitvoeren.
- **Tekst bewerken**, tekenreeksen combineren, hoofdlettergebruik wijzigen of substrings extraheren.
- **Met datums werken**, tijdverschillen berekenen, datums opmaken of deadlines bepalen.
- **Logica toepassen**, voorwaardelijke instructies gebruiken om verschillende waarden weer te geven.
- **Lijsten verwerken**, lijstgegevens filteren, sorteren, transformeren of aggregeren.

## Een formule-eigenschap aanmaken

Om een formule-eigenschap aan te maken:

1. Klik in je basis op **Eigenschappen** in de werkbalk.
2. Klik op **Formule toevoegen** onderaan het menu.
3. Voer een naam in voor je formule-eigenschap.
4. Typ je formule in het veld **Formule**.
5. Sluit het dialoogvenster.

De formule-editor vult [[Functies|functie]]- en eigenschapnamen automatisch aan terwijl je typt om je formulesyntaxis te valideren. Een groen vinkje verschijnt wanneer je formule geldig is.

Eenmaal aangemaakt kun je een formule-eigenschap gebruiken zoals elke andere eigenschap in je basis. Voeg het toe aan [[Weergaven|weergaven]], gebruik het in filters, sorteer erop en meer.

## Een formule schrijven

Typ in de formule-editor een expressie met behulp van eigenschappen, operatoren en functies.

### Eigenschappen verwijzen

Je kunt verschillende typen eigenschappen verwijzen in je formules:

- **Notitie-eigenschappen** — Eigenschappen uit de [[Eigenschappen|voormetadata]] van een notitie.
- **Bestandseigenschappen** — Ingebouwde eigenschappen zoals `file.name`, `file.size` of `file.mtime`.
- **Formule-eigenschappen** — Andere formules via `formula.formule_naam`.

**Voorbeelden:**

- `price * quantity` — twee notitie-eigenschappen vermenigvuldigen
- `file.name + " - " + description` — bestandsnaam combineren met een notitie-eigenschap
- `formula.price_per_unit * 1.1` — een andere formule-eigenschap gebruiken

### Operatoren gebruiken

**Rekenkundige operatoren** voeren berekeningen uit op getallen:

- `price + tax` — optellen
- `price - discount` — aftrekken
- `price * quantity` — vermenigvuldigen
- `price / quantity` — delen
- `(part / whole) * 100` — haakjes gebruiken voor bewerkingsvolgorde

**Vergelijkingsoperatoren** vergelijken waarden:

- `price > 100` — groter dan
- `age < 18` — kleiner dan
- `status == "Done"` — gelijk aan
- `status != "Done"` — niet gelijk aan
- `file.mtime > now() - '7d'` — datums vergelijken

**Booleaanse operatoren** combineren logische voorwaarden:

- `!completed` — niet
- `price > 0 && quantity > 0` — en
- `urgent || important` — of

Meer informatie in [[Bases-syntaxis#Operatoren|Bases-syntaxis]].

### Functies gebruiken

Functies voeren bewerkingen uit op waarden. De beschikbare functies zijn afhankelijk van het type waarde waarmee je werkt. Zie de volledige lijst van [[Functies]].

**Veelgebruikte functiecategorieën:**

- **Globale functies** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Tekenreeksfuncties** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Getalfuncties** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Datumfuncties** — `format()`, `relative()`, `date()`, `time()`
- **Lijstfuncties** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Voorbeelden:**

- `if(price, "$" + price.toFixed(2), "")` om een voorwaarde met getalopmaak te definiëren.
- `file.name.lower()` om naar kleine letters te converteren.
- `tags.contains("urgent")` om te controleren of de taglijst een waarde bevat.
- `due_date.format("YYYY-MM-DD")` om een datum op te maken.

## Formulevoorbeelden

### Een deadline berekenen

Stel de einddatum van een project in als 2 weken na de startdatum:

```js
start_date + "2w"
```

### Achterstallige status weergeven

Toon "Achterstallig" als de einddatum is verstreken en de status niet "Done" is:

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Valuta opmaken

Toon een prijs met 2 decimalen en een valutasymbool:

```js
if(price, "$" + price.toFixed(2), "")
```

### Lijstitems tellen

Tel het aantal items in een lijsteigenschap:

```js
tasks.length
```

### Prioriteitsscore berekenen

Combineer meerdere factoren tot een prioriteitsscore:

```js
(impact * urgency) / effort
```

### Tekstvelden combineren

Maak een volledige naam van voor- en achternaam:

```js
first_name + " " + last_name
```

### Totale kosten berekenen

Vermenigvuldig de maandelijkse kosten met het aantal maanden in bezit:

```js
monthlyUses * formula.Owned.round()
```

## Gegevenstypen

Formules werken met verschillende typen gegevens:

- **Tekenreeksen** — Tekst tussen aanhalingstekens: `"hello"` of `'world'`
- **Getallen** — Numerieke waarden: `42`, `3.14`, `(2 + 2)`
- **Booleaans** — Waar of onwaar: `true`, `false`
- **Datums** — Aangemaakt met `date()`, `today()` of `now()`
- **Lijsten** — Verzamelingen van waarden: `[1, 2, 3]`
- **Objecten** — Sleutel-waardeparen: `{"name": "value"}`

Het uitvoertype van een formule wordt bepaald door de gebruikte gegevens en functies.

## Andere formules verwijzen

Formules kunnen naar andere formules verwijzen, waardoor afgeleide berekeningen ontstaan. Als je bijvoorbeeld een formule hebt met de naam `price_per_unit`:

```js
price / quantity
```

Kun je er in een andere formule naar verwijzen:

```js
formula.price_per_unit * 1.1
```

> [!warning] Vermijd circulaire verwijzingen
> Een formule kan niet direct of indirect via andere formules naar zichzelf verwijzen.
