---
permalink: bases/functions
publish: true
mobile: true
description: Deze pagina beschrijft de functies die in Obsidian Bases worden gebruikt om gegevens uit eigenschappen te bewerken in filters en formules.
---
Functies worden gebruikt in [[Introductie tot Bases|Bases]] om gegevens uit [[Eigenschappen|eigenschappen]] te bewerken in [[Weergaven#Filters|filters]] en [[Formules|formules]]. Raadpleeg de [[Bases-syntaxis|bases-syntaxis]] referentie voor meer informatie over hoe je functies kunt gebruiken.

Afgezien van [[Functies#Globaal|Globale]] functies zijn de meeste functies afhankelijk van het type waarde dat je wilt wijzigen:

- [[Functies#Elke waarde|Elke waarde]]
- [[Functies#Datum|Datum]]
- [[Functies#Tekenreeks|Tekenreeks]]
- [[Functies#Getal|Getal]]
- [[Functies#Lijst|Lijst]]
- [[Functies#Koppeling|Koppeling]]
- [[Functies#Bestand|Bestand]]
- [[Functies#Object|Object]]
- [[Functies#Reguliere expressie|Reguliere expressie]]

## Globaal

Globale functies worden zonder type gebruikt.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Escapet speciale tekens in een tekenreeks zodat deze veilig kan worden opgenomen in HTML.

### `date()`

`date(date: string): date`

- `date(string): date` ontleedt de opgegeven tekenreeks en retourneert een datumobject.
- De `date`-tekenreeks moet de indeling `YYYY-MM-DD HH:mm:ss` hebben.

### `duration()`

`duration(value: string): duration`

- Ontleedt een tekenreeks als een duur. Zie de [[Bases-syntaxis#Datumberekeningen|sectie datumberekeningen]] voor de indeling van de `value`-tekenreeks.
- Duren hoeven niet expliciet te worden ontleed bij datumberekeningen (bijvoorbeeld `now() + '1d'`), maar wel bij berekeningen met duren (bijvoorbeeld `now() + (duration('1d') * 2)`).
- Bij berekeningen van duren met scalaire waarden moet de duur links staan. Bijvoorbeeld `duration('5h') * 2`, in plaats van `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Retourneert een bestandsobject voor het opgegeven bestand of pad.
- Voorbeeld: `file(link("[[bestandsnaam]]"))` of `file("pad naar bestand")`.

### `html()`

`html(html: string): html`

- Converteert een tekenreeks naar een codefragment dat als HTML wordt weergegeven.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` is de voorwaarde die wordt geëvalueerd.
- `trueResult` is de uitvoer als de voorwaarde waar is.
- `falseResult` is de optionele uitvoer als de voorwaarde onwaar is. Als deze niet wordt opgegeven, wordt `null` aangenomen.
- Retourneert `trueResult` als `condition` waar is, of een waarde heeft die als waar wordt beschouwd, anders `falseResult`.
- Voorbeeld: `if(isModified, "Gewijzigd", "Niet gewijzigd")`

### `image()`

`image(path: string | file | url): image`

- Retourneert een afbeeldingsobject dat de afbeelding in de weergave toont.
- Voorbeeld: `image(afbeelding-eigenschap)` of `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Retourneert een waarde die als pictogram in een weergave wordt weergegeven. De pictogramnaam moet overeenkomen met een ondersteund Lucide-pictogram.
- Voorbeeld: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Ontleedt een tekenreeks `path` en retourneert een Link-object dat wordt weergegeven als een koppeling naar het opgegeven pad.
- Geef optioneel de parameter `display` op om de weergavetekst van de koppeling te wijzigen.

### `list()`

`list(element: any): List`

- Als het opgegeven element een lijst is, wordt deze ongewijzigd geretourneerd.
- Anders wordt het opgegeven `element` in een lijst gewikkeld, waardoor een lijst met één element ontstaat.
- Deze functie kan handig zijn wanneer een eigenschap in de kluis een mix van tekenreeksen of lijsten bevat.
- Voorbeeld: `list("waarde")` retourneert `["waarde"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Retourneert het grootste van alle opgegeven getallen.

### `min()`

`min(value1: number, value2: number...): number`

- Retourneert het kleinste van alle opgegeven getallen.

### `now()`

`now(): date`

- `now()` retourneert een datumobject dat het huidige moment vertegenwoordigt.

### `number()`

`number(input: any): number`

- Probeert de opgegeven waarde als getal te retourneren.
- Datumobjecten worden geretourneerd als milliseconden sinds het Unix-tijdperk.
- Booleans retourneren 1 of 0.
- Tekenreeksen worden naar een getal ontleed en retourneren een fout als het resultaat ongeldig is.
- Voorbeeld: `number("3.4")` retourneert `3.4`.

### `duration()`

`duration(value: string): duration`

- Ontleedt een tekenreeks als een duur. Zie de [[Bases-syntaxis#Datumberekeningen|sectie datumberekeningen]] voor de indeling van de `value`-tekenreeks.
- Duren hoeven niet expliciet te worden ontleed bij datumberekeningen (bijvoorbeeld `now() + '1d'`), maar wel bij berekeningen met duren (bijvoorbeeld `now() + (duration('1d') * 2)`).
- Bij berekeningen van duren met scalaire waarden moet de duur links staan. Bijvoorbeeld `duration('5h') * 2`, in plaats van `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` retourneert een datumobject dat de huidige datum vertegenwoordigt. Het tijdgedeelte wordt op nul gezet.

### `random()`

`random(): number`

- `random()` retourneert een willekeurig getal tussen 0 en 1.
- De getalsgeneratie wordt vernieuwd wanneer een weergave wordt geladen. Wisselen tussen weergaven verandert het willekeurige getal.

## Elke waarde

Functies die je met elke waarde kunt gebruiken. Dit omvat tekenreeksen (bijv. `"hello"`), getallen (bijv. `42`), lijsten (bijv. `[1,2,3]`), objecten, en meer.

### `isTruthy()`

`any.isTruthy(): boolean`

- Retourneert de waarde omgezet naar een boolean.
- Voorbeeld: `1.isTruthy()` retourneert `true`.

### `isType()`

`any.isType(type: string): boolean`

- Retourneert true als de waarde van het opgegeven type is.
- Voorbeeld: `"voorbeeld".isType("string")` en `true.isType("boolean")` retourneren beide true.

### `toString()`

`any.toString(): string`

- Retourneert de tekenreeksrepresentatie van elke waarde.
- Voorbeeld: `123.toString()` retourneert `"123"`.

## Datum

Functies die je kunt gebruiken met een datum en tijd zoals `date("2025-05-27")`. Datumvergelijkingen kunnen worden uitgevoerd met [[Bases-syntaxis#Datumberekeningen|datumberekeningen]].

### Velden

De volgende velden zijn beschikbaar voor datums:

| Veld               | Type     | Beschrijving                    |
| ------------------ | -------- | ------------------------------- |
| `date.year`        | `number` | Het jaar van de datum           |
| `date.month`       | `number` | De maand van de datum (1–12)    |
| `date.day`         | `number` | De dag van de maand             |
| `date.hour`        | `number` | Het uur (0–23)                  |
| `date.minute`      | `number` | De minuut (0–59)               |
| `date.second`      | `number` | De seconde (0–59)               |
| `date.millisecond` | `number` | De milliseconde (0–999)         |

### `date()`

`date.date(): date`

- Retourneert een datumobject waarvan het tijdgedeelte is verwijderd.
- Voorbeeld: `now().date().format("YYYY-MM-DD HH:mm:ss")` retourneert een tekenreeks zoals "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` is de opmaaktekenreeks (bijv. `"YYYY-MM-DD"`).
- Retourneert de datum opgemaakt zoals opgegeven in een Moment.js-opmaaktekenreeks.
- Voorbeeld: `date.format("YYYY-MM-DD")` retourneert `"2025-05-27"`.

### `time()`

`date.time(): string`

- Retourneert de tijd.
- Voorbeeld: `now().time()` retourneert een tekenreeks zoals "23:59:59"

### `relative()`

`date.relative(): string`

- Retourneert een leesbare vergelijking van de datum met de huidige datum en tijd.
- Voorbeeld: `file.mtime.relative()` retourneert een waarde zoals `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Retourneert false.

## Tekenreeks

Functies die je kunt gebruiken met een reeks tekens zoals `"hello"`.

### Velden

| Veld            | Type     | Beschrijving                                 |
| --------------- | -------- | -------------------------------------------- |
| `string.length` | `number` | Het aantal tekens in de tekenreeks           |

### `contains()`

`string.contains(value: string): boolean`

- `value` is de deeltekenreeks waarnaar wordt gezocht.
- Retourneert true als de tekenreeks `value` bevat.
- Voorbeeld: `"hello".contains("ell")` retourneert `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` zijn een of meer deeltekenreeksen waarnaar wordt gezocht.
- Retourneert true als de tekenreeks alle `values` bevat.
- Voorbeeld: `"hello".containsAll("h", "e")` retourneert `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` zijn een of meer deeltekenreeksen waarnaar wordt gezocht.
- Retourneert true als de tekenreeks ten minste een van de `values` bevat.
- Voorbeeld: `"hello".containsAny("x", "y", "e")` retourneert `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` is de tekenreeks die aan het einde wordt gecontroleerd.
- Retourneert true als deze tekenreeks eindigt met `query`.
- Voorbeeld: `"hello".endsWith("lo")` retourneert `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Retourneert true als de tekenreeks geen tekens heeft, of niet aanwezig is.
- Voorbeeld: `"Hello world".isEmpty()` retourneert `false`.
- Voorbeeld: `"".isEmpty()` retourneert `true`.

### `lower()`

`string.lower(): string`

- Retourneert de tekenreeks omgezet naar kleine letters.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` is de waarde waarnaar wordt gezocht in de doeltekenreeks.
- `replacement` is de waarde waarmee gevonden patronen worden vervangen.
- Als `pattern` een tekenreeks is, worden alle voorkomens van het patroon vervangen.
- Als `pattern` een Regexp is, bepaalt de `g`-vlag of alleen het eerste of alle voorkomens worden vervangen.
- Voorbeeld: `"a:b:c:d".replace(/:/, "-")` retourneert `"a-b,c,d"`, terwijl `"a:b:c:d".replace(/:/g, "-")` retourneert `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` is het aantal keren dat de tekenreeks wordt herhaald.
- Voorbeeld: `"123".repeat(2)` retourneert `"123123"`

### `reverse()`

`string.reverse(): string`

- Keert de tekenreeks om.
- Voorbeeld: `"hello".reverse()` retourneert `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` is de inclusieve startindex.
- `end` is de optionele exclusieve eindindex.
- Retourneert een deeltekenreeks van `start` (inclusief) tot `end` (exclusief).
- Voorbeeld: `"hello".slice(1, 4)` retourneert `"ell"`.
- Als `end` wordt weggelaten, wordt er tot het einde van de tekenreeks gesneden.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` is het scheidingsteken voor het splitsen van de tekenreeks.
- `n` is een optioneel getal. Indien opgegeven bevat het resultaat de eerste `n` elementen.
- Retourneert een lijst van deeltekenreeksen.
- Voorbeeld: `"a,b,c,d".split(",", 3)` of `"a,b,c,d".split(/,/, 3)` retourneert `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` is de tekenreeks die aan het begin wordt gecontroleerd.
- Retourneert true als deze tekenreeks begint met `query`.
- Voorbeeld: `"hello".startsWith("he")` retourneert `true`.

### `title()`

`string.title(): string`

- Converteert de tekenreeks naar titelhoofdletters (eerste letter van elk woord als hoofdletter).
- Voorbeeld: `"hello world".title()` retourneert `"Hello World"`.

### `trim()`

`string.trim(): string`

- Verwijdert witruimte aan beide uiteinden van de tekenreeks.
- Voorbeeld: `"  hi  ".trim()` retourneert `"hi"`.

## Getal

Functies die je kunt gebruiken met numerieke waarden zoals `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Retourneert de absolute waarde van het getal.
- Voorbeeld: `(-5).abs()` retourneert `5`.

### `ceil()`

`number.ceil(): number`

- Rondt het getal naar boven af op het dichtstbijzijnde gehele getal.
- Voorbeeld: `(2.1).ceil()` retourneert `3`.

### `floor()`

`number.floor(): number`

- Rondt het getal naar beneden af op het dichtstbijzijnde gehele getal.
- Voorbeeld: `(2.9).floor()` retourneert `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Retourneert true als het getal niet aanwezig is.
- Voorbeeld: `5.isEmpty()` retourneert `false`.

### `round()`

`number.round(digits: number): number`

- Rondt het getal af op het dichtstbijzijnde gehele getal.
- Geef optioneel een `digits`-parameter op om op dat aantal decimalen af te ronden.
- Voorbeeld: `(2.5).round()` retourneert `3`, en `(2.3333).round(2)` retourneert `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` is het aantal decimalen.
- Retourneert een tekenreeks met het getal in vaste-kommanotatie.
- Voorbeeld: `(3.14159).toFixed(2)` retourneert `"3.14"`.

## Lijst

Functies die je kunt gebruiken met een geordende lijst van elementen zoals `[1, 2, 3]`.

### Velden

| Veld          | Type     | Beschrijving                          |
| ------------- | -------- | ------------------------------------- |
| `list.length` | `number` | Het aantal elementen in de lijst      |

### `contains()`

`list.contains(value: any): boolean`

- `value` is het element waarnaar wordt gezocht.
- Retourneert true als de lijst `value` bevat.
- Voorbeeld: `[1,2,3].contains(2)` retourneert `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` zijn een of meer elementen waarnaar wordt gezocht.
- Retourneert true als de lijst alle `values` bevat.
- Voorbeeld: `[1,2,3].containsAll(2,3)` retourneert `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` zijn een of meer elementen waarnaar wordt gezocht.
- Retourneert true als de lijst ten minste een van de `values` bevat.
- Voorbeeld: `[1,2,3].containsAny(3,4)` retourneert `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtert de elementen van deze lijst door een filterfunctie aan te roepen die de variabelen `index` en `value` gebruikt en een booleaanse waarde retourneert voor of het element behouden moet worden.
- `value` is de waarde van een item in de lijst.
- `index` is de index van de huidige waarde.
- Voorbeeld: `[1,2,3,4].filter(value > 2)` retourneert `[3,4]`.

### `flat()`

`list.flat(): list`

- Vlakt geneste lijsten af tot een enkele lijst.
- Voorbeeld: `[1,[2,3]].flat()` retourneert `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Retourneert true als de lijst geen elementen heeft.
- Voorbeeld: `[1,2,3].isEmpty()` retourneert `false`.

### `join()`

`list.join(separator: string): string`

- `separator` is de tekenreeks die tussen elementen wordt ingevoegd.
- Voegt alle lijstelementen samen tot een enkele tekenreeks.
- Voorbeeld: `[1,2,3].join(",")` retourneert `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transformeert elk element van deze lijst door een conversiefunctie aan te roepen die de variabelen `index` en `value` gebruikt en de nieuwe waarde retourneert die in de lijst wordt geplaatst.
- `value` is de waarde van een item in de lijst.
- `index` is de index van de huidige waarde.
- Voorbeeld: `[1,2,3,4].map(value + 1)` retourneert `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Reduceert de elementen van deze lijst tot een enkele waarde door voor elk element een expressie uit te voeren. De expressie kan de variabelen `index`, `value` en `acc` (de accumulator) gebruiken en moet de volgende accumulatorwaarde retourneren.
- `expression` wordt voor elk element in de lijst geëvalueerd.
- `value` is de waarde van het huidige item in de lijst.
- `index` is de index van het huidige item.
- `acc` is de tot nu toe opgebouwde waarde.
- Voorbeeld (som): `[1,2,3].reduce(acc + value, 0)` retourneert `6`.
- Voorbeeld (max): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` retourneert het grootste getal, of `null` als er geen is.

### `reverse()`

`list.reverse(): list`

- Keert de lijst ter plaatse om.
- Voorbeeld: `[1,2,3].reverse()` retourneert `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` is de inclusieve startindex.
- `end` is de optionele exclusieve eindindex.
- Retourneert een ondiepe kopie van een deel van de lijst van `start` (inclusief) tot `end` (exclusief).
- Voorbeeld: `[1,2,3,4].slice(1,3)` retourneert `[2,3]`.
- Als `end` wordt weggelaten, wordt er tot het einde van de lijst gesneden.

### `sort()`

`list.sort(): list`

- Sorteert lijstelementen van klein naar groot.
- Voorbeeld: `[3, 1, 2].sort()` retourneert `[1, 2, 3]`.
- Voorbeeld: `["c", "a", "b"].sort()` retourneert `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Verwijdert dubbele elementen.
- Voorbeeld: `[1,2,2,3].unique()` retourneert `[1,2,3]`.

## Koppeling

Functies die je kunt gebruiken op een koppeling. Koppelingen kunnen worden gemaakt vanuit een bestand (`file.asLink()`) of een pad (`link("pad")`).

### `asFile()`

`link.asFile(): file`

- Retourneert een bestandsobject als de koppeling verwijst naar een geldig lokaal bestand.
- Voorbeeld: `link("[[bestandsnaam]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Retourneert of het bestand dat door de `link` wordt vertegenwoordigd een koppeling naar `file` heeft.

## Bestand

Functies die je kunt gebruiken met bestanden in de kluis.

### Velden

De volgende velden zijn beschikbaar voor bestanden:

| Veld              | Type     | Beschrijving                                                      |
| ----------------- | -------- | ----------------------------------------------------------------- |
| `file.name`       | `string` | De naam van dit bestand.                                          |
| `file.basename`   | `string` | De naam van dit bestand zonder de bestandsextensie.               |
| `file.path`       | `string` | Het volledige pad naar dit bestand, relatief ten opzichte van de kluisbasis. |
| `file.folder`     | `string` | Het volledige pad naar de bovenliggende map.                      |
| `file.ext`        | `string` | De bestandsextensie voor dit bestand.                             |
| `file.size`       | `number` | De grootte van dit bestand, in bytes.                             |
| `file.properties` | `object` | De notitie-eigenschappen voor dit bestand.                        |
| `file.tags`       | `list`   | De labels voor dit bestand. Inclusief inline labels.              |
| `file.links`      | `list`   | De interne koppelingen binnen dit bestand.                        |
| `file.ctime`      | `date`   | Tijdstempel van wanneer dit bestand is aangemaakt.                |
| `file.mtime`      | `date`   | Tijdstempel van wanneer dit bestand voor het laatst is gewijzigd. |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` optionele weergavetekst voor de koppeling.
- Retourneert een Link-object dat als werkende koppeling wordt weergegeven.
- Voorbeeld: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` is een ander bestandsobject of tekenreekspad om te controleren.
- Retourneert true als `file` naar `otherFile` linkt.
- Voorbeeld: `file.hasLink(otherFile)` retourneert `true` als er een koppeling is van `file` naar `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Retourneert true als de notitie de opgegeven bestandseigenschap heeft.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` zijn een of meer labelnamen.
- Retourneert true als het bestand een van de labels in `values` heeft.
- Voorbeeld: `file.hasTag("tag1", "tag2")` retourneert `true` als het bestand label `#tag1` of `#tag2` heeft. Dit omvat ook eventuele [[Labels#Geneste labels|geneste labels]], zoals `#tag1/a` of `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` is de mapnaam die wordt gecontroleerd.
- Retourneert true als het bestand zich in de opgegeven map of een van de submappen bevindt.
- Voorbeeld: `file.inFolder("notes")` retourneert `true`.

## Object

Functies die je kunt gebruiken met een verzameling sleutel-waardeparen zoals `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Retourneert true als het object geen eigen eigenschappen heeft.
- Voorbeeld: `{}.isEmpty()` retourneert `true`.

### `keys()`

`object.keys(): list`

- Retourneert een lijst met de sleutels van het object.

### `values()`

`object.values(): list`

- Retourneert een lijst met de waarden van het object.

## Reguliere expressie

Functies die je kunt gebruiken met een reguliere-expressiepatroon. Voorbeeld: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` is de tekenreeks die wordt getest.
- Retourneert true als de reguliere expressie overeenkomt met `value`.
- Voorbeeld: `/abc/.matches("abcde")` retourneert `true`.
