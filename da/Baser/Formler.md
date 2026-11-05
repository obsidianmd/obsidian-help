---
permalink: formulas
description: 'Formler gør dig i stand til at oprette beregnede egenskaber i baser ved at benytte data fra egenskaber. Du kan udføre beregninger, manipulere tekst, arbejde med datoer og meget mere.'
aliases:
  - baser/formler
  - Formler
  - Baser/Formler
---
Formler gør dig i stand til at oprette beregnede egenskaber i [[Introduktion til Baser|baser]] ved at benytte data fra [[Egenskaber|egenskaber]]. Du kan udføre beregninger, manipulere tekst, arbejde med datoer og meget mere.

## Hvad formler kan gøre

Formler kan hjælpe dig med at:

- **Beregne værdier**, tilføj priser, udregne totaler, eller udføre matematisk beregninger
- **Manipulere tekst**, kombinere strenge, skifte til store/små bogstaver, eller udtrække delstrenge
- **Arbejde med datoer**, beregne tidsforskelle, formatere datoer, eller beregne deadlines
- **Anvende logik**, benytte betingede udsagn for at vise forskellige værdier
- **Manipulere lister**, filtrere, sortere, mappe, eller samle listedata
- **Bruge linkede noter**, slå op eller opsummér egenskaber fra de noter, en note linker til. Se [[#Brug egenskaber fra linkede noter]].

## Opret en formel egenskab

Sådan opretter du en formel egenskab:

1. Klik på **Egenskaber** på værktøjslinjen i din base
2. Klik **Tilføj formel** i bunden af menuen
3. Angiv et navn til dinformel egenskab
4. Skriv din formel i **Formel** feltet
5. Luk dialogen

Formeleditoren vil autofuldføre [[Funktioner|funktioner]] og egenskabsnavne, mens du skriver for at validere din formelsyntaks. Der vises et grønt flueben, når din formel er gyldig.

Når formlen er oprettet, kan du anvende formel egenskaben på samme måde som andre egenskaber i din base. Tilføj den til [[Visninger|views]], brug den i filtre, sortér med den, og mere.

## Sådan skriver du en formel

Skriv et udtryk ved hjælp af egenskaber, operatorer og funktioner i formeleditoren.

### Reference egenskaber

Du kan referere forskellige egenskabstyper i dine formler:

- **Note egenskaber** — Egenskaber fra en notes [[Egenskaber|metadata]].
- **Fil egenskaber** — Indbyggede egenskber sådom `file.name`, `file.size`, eller `file.mtime`.
- **Formel egenskaber** — Andre formler ved brug af`formel.formel_navn`.

**Eksempler:**

- `pris * antal` — multiplicerer to noters egenskaber
- `fil.name + " - " + beskrivelse` — kombinerer filnavnet med en noteegenskab
- `formel.pris_pr-enhed * 1.1` — brug en anden noteegenskab

### Sådan anvender du operatorer

**Aritmetiske operatorer** udfører matematik på tal:

- `pris + moms` — Addition
- `pris - rabat` — Subtraktion
- `pris * antal` — Multiplikation
- `pris / antal` — Division
- `(del / af_det_hele) * 100` — benyt parenteser til at kontrollere rækkefølgen

**Sammenligningsoperatorer** sammenligner værdier:

- `pris > 100` — større end
- `alder < 18` — mindre end
- `status == "Færdig"` — lig med
- `status != "Færdig"` — ikke lig med
- `fil.mtime > now() - '7d'` — sammenlign datoer

**Boolske operatorer** kombinerer logiske betingelser:

- `!færdig` — ikke
- `pris > 0 && antal > 0` — og
- `haster || vigtigt` — eller

Lær mere i guiden: [[Basesyntaks#Operatorer|Basesyntaks]].

### Anvend funktioner

Funktioner udfører operationer på værdier. De tilgængelige funktioner afhænger af værdityperne du arbejder med- Se den komplette liste af [[Funktioner|funktioner]].

**Almindelige kategorier af funktioner:**

- **Globale funktioner** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Streng funktioner** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Tal funktioner** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Dato funktioner** — `format()`, `relative()`, `date()`, `time()`
- **Liste funktioner** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Eksempler:**

- `if(pris, "$" + pris.toFixed(2), "")` for at definere en betingelse med talformattering
- `fil.name.lower()` konverterer filnavnet til kun at have små bogstaver
- `tags.contains("haster")` tjekker om listen af tags indeholder en værdi
- `due_date.format("YYYY-MM-DD")` for at formatere en dato

## Brug egenskaber fra linkede noter

Formler kan læse egenskaber fra de noter, en note linker til. Du kan slå én værdi op fra en linket note, eller opsummere værdier fra flere linkede noter til en total, en optælling eller en liste.

For at læse en linket notes egenskaber skal du omdanne linket til en fil med `asFile()` og derefter bruge `properties`. Links gemt i egenskaber, såsom `projekt: "[[Redesign af websted]]"`, fungerer direkte på denne måde.

> [!warning] Resultater opdateres, når noten i rækken ændres
> Hvis du kun redigerer en linket note, opdateres opslag og opsummeringer i basen muligvis ikke, før du genåbner basen.

### Slå en værdi op

Vis `status` for den note, der er linket i `projekt`-egenskaben:

```js
project.asFile().properties.status
```

Hvis egenskaben kan indeholde enten ét link eller en liste af links, pak den ind i `list()` og tag det første link:

```js
list(project)[0].asFile().properties.status
```

### Opsummér værdier

Læg `timer` sammen for alle noter, der er linket i `opgaver`-egenskaben:

```js
tasks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

Tæl de linkede noter, hvis `status` ikke er "Færdig":

```js
tasks.filter(value.asFile().properties.status != "Done").length
```

List statusværdierne for de linkede noter uden duplikater:

```js
tasks.map(value.asFile().properties.status).unique()
```

### Opsummér værdier fra noter, der linker hertil

For at opsummere værdier fra de noter, der linker til en note, f.eks. opgaver der hver linker til deres projekt, brug `file.backlinks`:

```js
file.backlinks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

`file.backlinks` er langsom i store bokse. Når det er muligt, gem links i selve noten og opsummér dem med `map()` og `reduce()`, som vist ovenfor.

## Eksempler på formler

### Beregn en deadline

Sætter et projekts forfalsdato til 2 uger efter startdato:

```js
start_dato + "2w"
```

### Vis status på forsinkelse

Viser "Overskredet", hvis forfaldsdatoen er passeret og status ikke er sat til "Færdig":

```js
if(slutdato < now() && status != "Færdig", "Forsinket", "")
```

### Valuta formatering

Viser en pris med 2 decimaler og et valutasymbol:

```js
if(pris, "$" + pris.toFixed(2), "")
```

### Tæl antallet af elementer i en liste

Tæller antallet af elementer i en liste af egenskaber:

```js
opgaver.length
```

### Beregn prioritetsscore

Kombinér flere faktorer i en prioriteret score:
Combine multiple factors into a priority score:

```js
(påvirkning * haster) / indsats
```

### Kombinér takststrenge

Få det fulde navn ud fra fornavn og efternavn:
Create a full name from first and last name:

```js
for_navn + " " + efter_navn
```

### Beregn totale udgifter

Multiplicér de månedelige udgifter med antallet af måneder:

```js
månedligUdgift * formel.AntalMåneder.round()
```

## Data typer

Formler kan anvendes med forskelige typer data:

- **Tekststrenge** — Tekst i citationstegn: `"hej"` eller `'verden'`
- **Tal** — Numeriske værdier: `42`, `3.14`, `(2 + 2)`
- **Boolske værdier** — Sandt eller falsk: `true`, `false`
- **Datoer** — Oprette med `date()`, `today()`, or `now()`
- **Lister** — Samlinger af værdier: `[1, 2, 3]`
- **Ojekter** — Nøgle-værdi par: `{"navn": "værdi"}`

En formels output type afhænger af de brugte funktioner og data brugt.

## Sådan Refererer du til andre formler

Formler kan referere andre formler, oprette afledte beregninger. Fx. hvis du har en formel kaldet `pris_pr_enhed`:

```js
pris / antal
```

Så kan du referere til den i en anden formel:

```js
formel.pris_pr_enhed * 1.1
```

> [!warning] Undgå cirkulære referencer
> En formel kan ikke referere sig selv direkte eller indirekte gennem andre formler.
