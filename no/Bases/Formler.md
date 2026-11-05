---
permalink: formulas
description: 'Formler lar deg opprette beregnede egenskaper ved hjelp av data fra andre egenskaper. Du kan utføre beregninger, manipulere tekst, arbeide med datoer og mer.'
---
Formler lar deg opprette beregnede egenskaper i [[Introduksjon til Bases|Bases]] ved hjelp av data fra andre [[Egenskaper|egenskaper]]. Du kan utføre beregninger, manipulere tekst, arbeide med datoer og mer.

## Hva formler kan gjøre

Formler kan hjelpe deg med å:

- **Beregne verdier**, legge sammen priser, beregne totaler eller utføre matematiske operasjoner.
- **Manipulere tekst**, kombinere strenger, endre store/små bokstaver eller trekke ut delstrenger.
- **Arbeide med datoer**, beregne tidsforskjeller, formatere datoer eller bestemme tidsfrister.
- **Bruke logikk**, bruke betingede utsagn for å vise forskjellige verdier.
- **Behandle lister**, filtrere, sortere, kartlegge eller aggregere listedata.
- **Bruke lenkede notater**, slå opp eller rulle opp egenskaper fra notatene et notat lenker til. Se [[#Bruk egenskaper fra lenkede notater]].

## Opprett en formelegenskap

For å opprette en formelegenskap:

1. I basen din, klikk **Egenskaper** i verktøylinjen.
2. Klikk **Legg til formel** nederst i menyen.
3. Skriv inn et navn for formelegenskapen.
4. Skriv inn formelen i **Formel**-feltet.
5. Lukk dialogen.

Formelredigeringsprogrammet vil autofullføre [[Funksjoner|funksjons]]- og egenskapsnavn mens du skriver for å validere formelsyntaksen. Et grønt hakemerke vises når formelen er gyldig.

Når den er opprettet, kan du bruke en formelegenskap som enhver annen egenskap i basen din. Legg den til i [[Visninger|visninger]], bruk den i filtre, sorter etter den og mer.

## Skriv en formel

I formelredigeringsprogrammet skriver du et uttrykk ved hjelp av egenskaper, operatorer og funksjoner.

### Referer til egenskaper

Du kan referere til forskjellige typer egenskaper i formlene dine:

- **Notatlegenskaper** — Egenskaper fra et notats [[Egenskaper|startmetadata]].
- **Filegenskaper** — Innebygde egenskaper som `file.name`, `file.size` eller `file.mtime`.
- **Formelegenskaper** — Andre formler ved hjelp av `formula.formula_name`.

**Eksempler:**

- `price * quantity` — multiplisere to notatlegenskaper
- `file.name + " - " + description` — kombinere filnavn med en notategenskap
- `formula.price_per_unit * 1.1` — bruke en annen formelegenskap

### Bruk operatorer

**Aritmetiske operatorer** utfører matematikk på tall:

- `price + tax` — addisjon
- `price - discount` — subtraksjon
- `price * quantity` — multiplikasjon
- `price / quantity` — divisjon
- `(part / whole) * 100` — bruk parenteser for operasjonsrekkefølge

**Sammenligningsoperatorer** sammenligner verdier:

- `price > 100` — større enn
- `age < 18` — mindre enn
- `status == "Done"` — er lik
- `status != "Done"` — er ikke lik
- `file.mtime > now() - '7d'` — sammenligne datoer

**Boolske operatorer** kombinerer logiske betingelser:

- `!completed` — ikke
- `price > 0 && quantity > 0` — og
- `urgent || important` — eller

Les mer i [[Bases-syntaks#Operatorer|Bases-syntaks]].

### Bruk funksjoner

Funksjoner utfører operasjoner på verdier. De tilgjengelige funksjonene avhenger av typen verdi du arbeider med. Se den fullstendige listen over [[Funksjoner]].

**Vanlige funksjonskategorier:**

- **Globale funksjoner** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Strengfunksjoner** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Tallfunksjoner** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Datofunksjoner** — `format()`, `relative()`, `date()`, `time()`
- **Listefunksjoner** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Eksempler:**

- `if(price, "$" + price.toFixed(2), "")` for å definere en betingelse med tallformatering.
- `file.name.lower()` for å konvertere til små bokstaver.
- `tags.contains("urgent")` for å sjekke om tagglisten inneholder en verdi.
- `due_date.format("YYYY-MM-DD")` for å formatere en dato.

## Bruk egenskaper fra lenkede notater

Formler kan lese egenskaper fra notatene et notat lenker til. Du kan slå opp én verdi fra et lenket notat, eller rulle opp verdier fra flere lenkede notater til en total, en telling eller en liste.

For å lese et lenket notats egenskaper, gjør lenken om til en fil med `asFile()`, og bruk deretter `properties`. Lenker lagret i egenskaper, som `project: "[[Redesign av nettsted]]"`, fungerer på denne måten direkte.

> [!warning] Resultater oppdateres når notatet i raden endres
> Hvis du bare redigerer et lenket notat, kan oppslag og opprullinger i basen ikke oppdateres før du åpner basen på nytt.

### Slå opp en verdi

Vis `status` for notatet som er lenket i `project`-egenskapen:

```js
project.asFile().properties.status
```

Hvis egenskapen kan inneholde enten én lenke eller en liste med lenker, pakk den inn i `list()` og ta den første lenken:

```js
list(project)[0].asFile().properties.status
```

### Rull opp verdier

Legg sammen `hours` for hvert notat som er lenket i `tasks`-egenskapen:

```js
tasks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

Tell de lenkede notatene der `status` ikke er "Done":

```js
tasks.filter(value.asFile().properties.status != "Done").length
```

List opp statusene til de lenkede notatene, uten duplikater:

```js
tasks.map(value.asFile().properties.status).unique()
```

### Rull opp verdier fra notater som lenker hit

For å rulle opp verdier fra notater som lenker til et notat, for eksempel oppgaver som hver lenker til prosjektet sitt, bruk `file.backlinks`:

```js
file.backlinks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

`file.backlinks` er treg i store hvelv. Når du kan, lagre lenkene i selve notatet og rull dem opp med `map()` og `reduce()`, som vist ovenfor.

## Formeleksempler

### Beregn en tidsfrist

Sett et prosjekts forfallsdato til 2 uker etter startdatoen:

```js
start_date + "2w"
```

### Vis forfalt-status

Vis "Overdue" hvis forfallsdatoen er passert og status ikke er "Done":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formater valuta

Vis en pris med 2 desimaler og valutasymbol:

```js
if(price, "$" + price.toFixed(2), "")
```

### Tell listeelementer

Tell antall elementer i en listeegenskap:

```js
tasks.length
```

### Beregn prioritetspoeng

Kombiner flere faktorer til en prioritetspoengsum:

```js
(impact * urgency) / effort
```

### Kombiner tekstfelt

Lag et fullt navn fra fornavn og etternavn:

```js
first_name + " " + last_name
```

### Beregn totalkostnad

Multipliser månedlig kostnad med antall måneder eid:

```js
monthlyUses * formula.Owned.round()
```

## Datatyper

Formler arbeider med forskjellige typer data:

- **Strenger** — Tekst omsluttet av anførselstegn: `"hello"` eller `'world'`
- **Tall** — Numeriske verdier: `42`, `3.14`, `(2 + 2)`
- **Boolske verdier** — Sant eller usant: `true`, `false`
- **Datoer** — Opprettet med `date()`, `today()` eller `now()`
- **Lister** — Samlinger av verdier: `[1, 2, 3]`
- **Objekter** — Nøkkel-verdi-par: `{"name": "value"}`

Utdatatypen for en formel bestemmes av dataene og funksjonene som brukes.

## Referer til andre formler

Formler kan referere til andre formler, og skape avledede beregninger. For eksempel, hvis du har en formel kalt `price_per_unit`:

```js
price / quantity
```

Kan du referere til den i en annen formel:

```js
formula.price_per_unit * 1.1
```

> [!warning] Unngå sirkulære referanser
> En formel kan ikke referere til seg selv direkte eller indirekte gjennom andre formler.
