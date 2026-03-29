---
permalink: formulas
description: 'Formler låter dig skapa beräknade egenskaper med hjälp av data från andra egenskaper. Du kan utföra beräkningar, manipulera text, arbeta med datum och mer.'
---
Formler låter dig skapa beräknade egenskaper i [[Introduktion till baser|baser]] med hjälp av data från andra [[Egenskaper|egenskaper]]. Du kan utföra beräkningar, manipulera text, arbeta med datum och mer.

## Vad formler kan göra

Formler kan hjälpa dig att:

- **Beräkna värden**, summera priser, beräkna totaler eller utföra matematiska operationer.
- **Manipulera text**, kombinera strängar, ändra versaler/gemener eller extrahera delsträngar.
- **Arbeta med datum**, beräkna tidsskillnader, formatera datum eller bestämma deadlines.
- **Tillämpa logik**, använda villkorssatser för att visa olika värden.
- **Bearbeta listor**, filtrera, sortera, mappa eller aggregera listdata.

## Skapa en formelegenskap

Så här skapar du en formelegenskap:

1. I din bas, klicka på **Egenskaper** i verktygsfältet.
2. Klicka på **Lägg till formel** längst ner i menyn.
3. Ange ett namn för din formelegenskap.
4. Skriv din formel i fältet **Formel**.
5. Stäng dialogen.

Formelredigeraren kommer att autokomplettera [[Funktioner|funktions]]- och egenskapsnamn medan du skriver för att validera din formelsyntax. En grön bockmarkering visas när din formel är giltig.

När den är skapad kan du använda en formelegenskap som vilken annan egenskap som helst i din bas. Lägg till den i [[Vyer|vyer]], använd den i filter, sortera efter den och mer.

## Skriv en formel

I formelredigeraren skriver du ett uttryck med egenskaper, operatorer och funktioner.

### Referera egenskaper

Du kan referera olika typer av egenskaper i dina formler:

- **Anteckningsegenskaper** — Egenskaper från en antecknings [[Egenskaper|frontmatter]].
- **Filegenskaper** — Inbyggda egenskaper som `file.name`, `file.size` eller `file.mtime`.
- **Formelegenskaper** — Andra formler med `formula.formula_name`.

**Exempel:**

- `price * quantity` — multiplicera två anteckningsegenskaper
- `file.name + " - " + description` — kombinera filnamn med en anteckningsegenskap
- `formula.price_per_unit * 1.1` — använd en annan formelegenskap

### Använd operatorer

**Aritmetiska operatorer** utför matematik på tal:

- `price + tax` — addera
- `price - discount` — subtrahera
- `price * quantity` — multiplicera
- `price / quantity` — dividera
- `(part / whole) * 100` — använd parenteser för operationsordning

**Jämförelseoperatorer** jämför värden:

- `price > 100` — större än
- `age < 18` — mindre än
- `status == "Done"` — lika med
- `status != "Done"` — inte lika med
- `file.mtime > now() - '7d'` — jämför datum

**Booleska operatorer** kombinerar logiska villkor:

- `!completed` — inte
- `price > 0 && quantity > 0` — och
- `urgent || important` — eller

Läs mer i [[Baser-syntax#Operatorer|Baser-syntax]].

### Använd funktioner

Funktioner utför operationer på värden. De tillgängliga funktionerna beror på vilken typ av värde du arbetar med. Se den fullständiga listan över [[Funktioner]].

**Vanliga funktionskategorier:**

- **Globala funktioner** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Strängfunktioner** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Talfunktioner** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Datumfunktioner** — `format()`, `relative()`, `date()`, `time()`
- **Listfunktioner** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Exempel:**

- `if(price, "$" + price.toFixed(2), "")` för att definiera ett villkor med talformatering.
- `file.name.lower()` för att konvertera till gemener.
- `tags.contains("urgent")` för att kontrollera om tagglistan innehåller ett värde.
- `due_date.format("YYYY-MM-DD")` för att formatera ett datum.

## Formelexempel

### Beräkna en deadline

Ange ett projekts förfallodatum som 2 veckor efter startdatumet:

```js
start_date + "2w"
```

### Visa förseningsstatus

Visa "Försenad" om förfallodatumet har passerat och statusen inte är "Klar":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formatera valuta

Visa ett pris med 2 decimaler och valutasymbol:

```js
if(price, "$" + price.toFixed(2), "")
```

### Räkna listobjekt

Räkna antalet objekt i en listegenskap:

```js
tasks.length
```

### Beräkna prioritetspoäng

Kombinera flera faktorer till en prioritetspoäng:

```js
(impact * urgency) / effort
```

### Kombinera textfält

Skapa ett fullständigt namn från för- och efternamn:

```js
first_name + " " + last_name
```

### Beräkna totalkostnad

Multiplicera månadskostnad med antal ägda månader:

```js
monthlyUses * formula.Owned.round()
```

## Datatyper

Formler arbetar med olika typer av data:

- **Strängar** — Text omsluten av citattecken: `"hello"` eller `'world'`
- **Tal** — Numeriska värden: `42`, `3.14`, `(2 + 2)`
- **Booleska värden** — Sant eller falskt: `true`, `false`
- **Datum** — Skapade med `date()`, `today()` eller `now()`
- **Listor** — Samlingar av värden: `[1, 2, 3]`
- **Objekt** — Nyckel-värde-par: `{"name": "value"}`

Utdatatypen för en formel bestäms av den data och de funktioner som används.

## Referera andra formler

Formler kan referera andra formler, vilket skapar härledda beräkningar. Till exempel, om du har en formel som heter `price_per_unit`:

```js
price / quantity
```

Kan du referera den i en annan formel:

```js
formula.price_per_unit * 1.1
```

> [!warning] Undvik cirkulära referenser
> En formel kan inte referera sig själv direkt eller indirekt genom andra formler.
