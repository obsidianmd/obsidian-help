---
permalink: bases/functions
publish: true
mobile: true
description: Aquesta pàgina detalla les funcions utilitzades a Obsidian Bases per manipular dades de propietats en filtres i fórmules.
---
Les funcions s'utilitzen a [[Introducció a Bases|Bases]] per manipular dades de les [[Propietats|propietats]] en [[Vistes#Filtres|filtres]] i [[Fórmules|fórmules]]. Consulta la referència de [[Sintaxi de Bases|sintaxi de Bases]] per aprendre més sobre com pots utilitzar les funcions.

A part de les funcions [[Funcions#Globals|Globals]], la majoria de funcions depenen del tipus de valor que vols modificar:

- [[Funcions#Qualsevol|Qualsevol]]
- [[Funcions#Data|Data]]
- [[Funcions#Cadena de text|Cadena de text]]
- [[Funcions#Número|Número]]
- [[Funcions#Llista|Llista]]
- [[Funcions#Enllaç|Enllaç]]
- [[Funcions#Fitxer|Fitxer]]
- [[Funcions#Objecte|Objecte]]
- [[Funcions#Expressió regular|Expressió regular]]

## Globals

Les funcions globals s'utilitzen sense un tipus.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Escapa els caràcters especials d'una cadena de text per fer-la segura per a la seva inclusió en HTML.

### `date()`

`date(date: string): date`

- `date(string): date` analitza la cadena proporcionada i retorna un objecte de data.
- La cadena `date` ha de tenir el format `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Analitza una cadena com a durada. Consulta la [[Sintaxi de Bases#Aritmètica de dates|secció d'aritmètica de dates]] per al format de la cadena `value`.
- Les durades no necessiten ser analitzades explícitament quan es fa aritmètica de dates (per exemple, `now() + '1d'`), però sí quan es fa aritmètica amb durades (per exemple, `now() + (duration('1d') * 2)`).
- Quan es fa aritmètica amb durades i escalars, la durada ha d'estar a l'esquerra. Per exemple `duration('5h') * 2`, en lloc de `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Retorna un objecte de fitxer per al fitxer o ruta donats.
- Exemple: `file(link("[[nom_fitxer]]"))` o `file("ruta al fitxer")`.

### `html()`

`html(html: string): html`

- Converteix una cadena en un fragment de codi que es renderitza com a HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` és la condició a avaluar.
- `trueResult` és el resultat si la condició és certa.
- `falseResult` és el resultat opcional si la condició és falsa. Si no es proporciona, s'assumeix que és `null`.
- Retorna `trueResult` si `condition` és cert, o és un valor vertader, o `falseResult` en cas contrari.
- Exemple: `if(isModified, "Modificat", "No modificat")`

### `image()`

`image(path: string | file | url): image`

- Retorna un objecte d'imatge que renderitza la imatge a la vista.
- Exemple: `image(propietat-imatge)` o `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Retorna un valor que es renderitza com una icona en una vista. El nom de la icona ha de coincidir amb una icona Lucide compatible.
- Exemple: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Analitza una cadena `path` i retorna un objecte Link que es renderitza com un enllaç a la ruta donada.
- Opcionalment proporciona el paràmetre `display` per canviar el text que mostra l'enllaç.

### `list()`

`list(element: any): List`

- Si l'element proporcionat és una llista, el retorna sense modificar.
- En cas contrari, embolcalla l'`element` proporcionat en una llista, creant una llista amb un sol element.
- Aquesta funció pot ser útil quan una propietat conté una barreja de cadenes o llistes a la cambra forta.
- Exemple: `list("valor")` retorna `["valor"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Retorna el més gran de tots els números proporcionats.

### `min()`

`min(value1: number, value2: number...): number`

- Retorna el més petit de tots els números proporcionats.

### `now()`

`now(): date`

- `now()` retorna un objecte de data que representa el moment actual.

### `number()`

`number(input: any): number`

- Intenta retornar el valor proporcionat com un número.
- Els objectes de data es retornaran com a mil·lisegons des de l'epoch Unix.
- Els booleans retornaran 1 o 0.
- Les cadenes s'analitzaran com a número i retornaran un error si el resultat és invàlid.
- Exemple, `number("3.4")` retorna `3.4`.

### `duration()`

`duration(value: string): duration`

- Analitza una cadena com a durada. Consulta la [[Sintaxi de Bases#Aritmètica de dates|secció d'aritmètica de dates]] per al format de la cadena `value`.
- Les durades no necessiten ser analitzades explícitament quan es fa aritmètica de dates (per exemple, `now() + '1d'`), però sí quan es fa aritmètica amb durades (per exemple, `now() + (duration('1d') * 2)`).
- Quan es fa aritmètica amb durades i escalars, la durada ha d'estar a l'esquerra. Per exemple `duration('5h') * 2`, en lloc de `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` retorna un objecte de data que representa la data actual. La part de l'hora s'estableix a zero.

### `random()`

`random(): number`

- `random()` retorna un número aleatori entre 0 i 1.
- La generació del número s'actualitza cada cop que es carrega una vista. Navegar entre vistes canvia el número aleatori.

## Qualsevol

Funcions que pots utilitzar amb qualsevol valor. Això inclou cadenes de text (p. ex. `"hola"`), números (p. ex. `42`), llistes (p. ex. `[1,2,3]`), objectes, i més.

### `isTruthy()`

`any.isTruthy(): boolean`

- Retorna el valor convertit a booleà.
- Exemple: `1.isTruthy()` retorna `true`.

### `isType()`

`any.isType(type: string): boolean`

- Retorna cert si el valor és del tipus proporcionat.
- Exemple: `"exemple".isType("string")` i `true.isType("boolean")` retornen cert.

### `toString()`

`any.toString(): string`

- Retorna la representació en cadena de text de qualsevol valor.
- Exemple: `123.toString()` retorna `"123"`.

## Data

Funcions que pots utilitzar amb una data i hora com `date("2025-05-27")`. Les comparacions de dates es poden fer utilitzant l'[[Sintaxi de Bases#Aritmètica de dates|aritmètica de dates]].

### Camps

Els camps següents estan disponibles per a dates:

| Camp               | Tipus    | Descripció                    |
| ------------------ | -------- | ----------------------------- |
| `date.year`        | `number` | L'any de la data              |
| `date.month`       | `number` | El mes de la data (1–12)      |
| `date.day`         | `number` | El dia del mes                |
| `date.hour`        | `number` | L'hora (0–23)                 |
| `date.minute`      | `number` | El minut (0–59)               |
| `date.second`      | `number` | El segon (0–59)               |
| `date.millisecond` | `number` | El mil·lisegon (0–999)        |

### `date()`

`date.date(): date`

- Retorna un objecte de data amb l'hora eliminada.
- Exemple: `now().date().format("YYYY-MM-DD HH:mm:ss")` retorna una cadena com "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` és la cadena de format (p. ex., `"YYYY-MM-DD"`).
- Retorna la data formatada segons una cadena de format de Moment.js.
- Exemple: `date.format("YYYY-MM-DD")` retorna `"2025-05-27"`.

### `time()`

`date.time(): string`

- Retorna l'hora.
- Exemple: `now().time()` retorna una cadena com "23:59:59"

### `relative()`

`date.relative(): string`

- Retorna una comparació llegible de la data amb la data i hora actual.
- Exemple: `file.mtime.relative()` retorna un valor com `fa 3 dies`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Retorna fals.

## Cadena de text

Funcions que pots utilitzar amb una seqüència de caràcters com `"hola"`.

### Camps

| Camp            | Tipus    | Descripció                                   |
| --------------- | -------- | -------------------------------------------- |
| `string.length` | `number` | El nombre de caràcters de la cadena de text   |

### `contains()`

`string.contains(value: string): boolean`

- `value` és la subcadena a cercar.
- Retorna cert si la cadena conté `value`.
- Exemple: `"hello".contains("ell")` retorna `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` són una o més subcadenes a cercar.
- Retorna cert si la cadena conté totes les `values`.
- Exemple: `"hello".containsAll("h", "e")` retorna `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` són una o més subcadenes a cercar.
- Retorna cert si la cadena conté almenys una de les `values`.
- Exemple: `"hello".containsAny("x", "y", "e")` retorna `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` és la cadena a comprovar al final.
- Retorna cert si aquesta cadena acaba amb `query`.
- Exemple: `"hello".endsWith("lo")` retorna `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Retorna cert si la cadena no té caràcters, o no és present.
- Exemple: `"Hello world".isEmpty()` retorna `false`.
- Exemple: `"".isEmpty()` retorna `true`.

### `lower()`

`string.lower(): string`

- Retorna la cadena convertida a minúscules.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` és el valor a cercar a la cadena objectiu.
- `replacement` és el valor amb el qual substituir els patrons trobats.
- Si `pattern` és una cadena, totes les ocurrències del patró seran substituïdes.
- Si `pattern` és una Regexp, el flag `g` determina si només la primera o totes les ocurrències són substituïdes.
- Exemple: `""a:b:c:d".replace(/:/, "-")` retorna `"a-b,c,d"`, mentre que `"a:b:c:d".replace(/:/g, "-")` retorna `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` és el nombre de vegades que es repeteix la cadena.
- Exemple: `"123".repeat(2)` retorna `"123123"`

### `reverse()`

`string.reverse(): string`

- Inverteix la cadena.
- Exemple: `"hello".reverse()` retorna `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` és l'índex inicial inclusiu.
- `end` és l'índex final exclusiu opcional.
- Retorna una subcadena des de `start` (inclusiu) fins a `end` (exclusiu).
- Exemple: `"hello".slice(1, 4)` retorna `"ell"`.
- Si s'omet `end`, talla fins al final de la cadena.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` és el delimitador per dividir la cadena.
- `n` és un número opcional. Si es proporciona, el resultat tindrà els primers `n` elements.
- Retorna una llista de subcadenes.
- Exemple: `"a,b,c,d".split(",", 3)` o `"a,b,c,d".split(/,/, 3)` retorna `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` és la cadena a comprovar al principi.
- Retorna cert si aquesta cadena comença amb `query`.
- Exemple: `"hello".startsWith("he")` retorna `true`.

### `title()`

`string.title(): string`

- Converteix la cadena a format de títol (primera lletra de cada paraula en majúscula).
- Exemple: `"hello world".title()` retorna `"Hello World"`.

### `trim()`

`string.trim(): string`

- Elimina els espais en blanc dels dos extrems de la cadena.
- Exemple: `"  hi  ".trim()` retorna `"hi"`.

## Número

Funcions que pots utilitzar amb valors numèrics com `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Retorna el valor absolut del número.
- Exemple: `(-5).abs()` retorna `5`.

### `ceil()`

`number.ceil(): number`

- Arrodoneix el número cap amunt fins al nombre enter més proper.
- Exemple: `(2.1).ceil()` retorna `3`.

### `floor()`

`number.floor(): number`

- Arrodoneix el número cap avall fins al nombre enter més proper.
- Exemple: `(2.9).floor()` retorna `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Retorna cert si el número no és present.
- Exemple: `5.isEmpty()` retorna `false`.

### `round()`

`number.round(digits: number): number`

- Arrodoneix el número al nombre enter més proper.
- Opcionalment, proporciona un paràmetre `digits` per arrodonir a aquest nombre de dígits decimals.
- Exemple: `(2.5).round()` retorna `3`, i `(2.3333).round(2)` retorna `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` és el nombre de decimals.
- Retorna una cadena amb el número en notació de punt fix.
- Exemple: `(3.14159).toFixed(2)` retorna `"3.14"`.

## Llista

Funcions que pots utilitzar amb una llista ordenada d'elements com `[1, 2, 3]`.

### Camps

| Camp          | Tipus    | Descripció                             |
| ------------- | -------- | -------------------------------------- |
| `list.length` | `number` | El nombre d'elements de la llista      |

### `contains()`

`list.contains(value: any): boolean`

- `value` és l'element a cercar.
- Retorna cert si la llista conté `value`.
- Exemple: `[1,2,3].contains(2)` retorna `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` són un o més elements a cercar.
- Retorna cert si la llista conté tots els `values`.
- Exemple: `[1,2,3].containsAll(2,3)` retorna `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` són un o més elements a cercar.
- Retorna cert si la llista conté almenys un dels `values`.
- Exemple: `[1,2,3].containsAny(3,4)` retorna `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtra els elements d'aquesta llista cridant una funció de filtre, que utilitza les variables `index` i `value`, i retorna un valor booleà indicant si l'element s'ha de mantenir.
- `value` és el valor d'un element de la llista.
- `index` és l'índex del valor actual.
- Exemple: `[1,2,3,4].filter(value > 2)` retorna `[3,4]`.

### `flat()`

`list.flat(): list`

- Aplana llistes imbricades en una sola llista.
- Exemple: `[1,[2,3]].flat()` retorna `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Retorna cert si la llista no té elements.
- Exemple: `[1,2,3].isEmpty()` retorna `false`.

### `join()`

`list.join(separator: string): string`

- `separator` és la cadena a inserir entre els elements.
- Uneix tots els elements de la llista en una sola cadena.
- Exemple: `[1,2,3].join(",")` retorna `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transforma cada element d'aquesta llista cridant una funció de conversió, que utilitza les variables `index` i `value`, i retorna el nou valor a col·locar a la llista.
- `value` és el valor d'un element de la llista.
- `index` és l'índex del valor actual.
- Exemple: `[1,2,3,4].map(value + 1)` retorna `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Redueix els elements d'aquesta llista a un sol valor executant una expressió per a cada element. L'expressió pot utilitzar les variables `index`, `value` i `acc` (l'acumulador), i ha de retornar el següent valor de l'acumulador.
- `expression` s'avalua per a cada element de la llista.
- `value` és el valor de l'element actual de la llista.
- `index` és l'índex de l'element actual.
- `acc` és el valor acumulat fins ara.
- Exemple (suma): `[1,2,3].reduce(acc + value, 0)` retorna `6`.
- Exemple (màxim): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` retorna el número més gran, o `null` si no n'hi ha cap.

### `reverse()`

`list.reverse(): list`

- Inverteix la llista.
- Exemple: `[1,2,3].reverse()` retorna `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` és l'índex inicial inclusiu.
- `end` és l'índex final exclusiu opcional.
- Retorna una còpia superficial d'una porció de la llista des de `start` (inclusiu) fins a `end` (exclusiu).
- Exemple: `[1,2,3,4].slice(1,3)` retorna `[2,3]`.
- Si s'omet `end`, talla fins al final de la llista.

### `sort()`

`list.sort(): list`

- Ordena els elements de la llista de menor a major.
- Exemple: `[3, 1, 2].sort()` retorna `[1, 2, 3]`.
- Exemple: `["c", "a", "b"].sort()` retorna `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Elimina els elements duplicats.
- Exemple: `[1,2,2,3].unique()` retorna `[1,2,3]`.

## Enllaç

Funcions que pots utilitzar en un enllaç. Els enllaços es poden crear a partir d'un fitxer (`file.asLink()`) o una ruta (`link("ruta")`).

### `asFile()`

`link.asFile(): file`

- Retorna un objecte de fitxer si l'enllaç fa referència a un fitxer local vàlid.
- Exemple: `link("[[nom_fitxer]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Retorna si el fitxer representat per l'`link` té un enllaç cap a `file`.

## Fitxer

Funcions que pots utilitzar amb fitxers de la cambra forta.

### Camps

Els camps següents estan disponibles per a fitxers:

| Camp              | Tipus    | Descripció                                                     |
| ----------------- | -------- | -------------------------------------------------------------- |
| `file.name`       | `string` | El nom d'aquest fitxer.                                        |
| `file.basename`   | `string` | El nom d'aquest fitxer sense l'extensió.                       |
| `file.path`       | `string` | La ruta completa a aquest fitxer, relativa a l'arrel de la cambra forta. |
| `file.folder`     | `string` | La ruta completa a la carpeta pare.                            |
| `file.ext`        | `string` | L'extensió d'aquest fitxer.                                    |
| `file.size`       | `number` | La mida d'aquest fitxer, en bytes.                             |
| `file.properties` | `object` | Les propietats de la nota d'aquest fitxer.                     |
| `file.tags`       | `list`   | Les etiquetes d'aquest fitxer. Inclou etiquetes en línia.      |
| `file.links`      | `list`   | Els enllaços interns dins d'aquest fitxer.                     |
| `file.ctime`      | `date`   | Marca temporal de quan es va crear aquest fitxer.               |
| `file.mtime`      | `date`   | Marca temporal de l'última modificació d'aquest fitxer.        |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` text de visualització opcional per a l'enllaç.
- Retorna un objecte Link que es renderitza com un enllaç funcional.
- Exemple: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` és un altre objecte de fitxer o cadena de ruta a comprovar.
- Retorna cert si `file` enllaça amb `otherFile`.
- Exemple: `file.hasLink(otherFile)` retorna `true` si hi ha un enllaç des de `file` cap a `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Retorna cert si la nota té la propietat de fitxer donada.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` són un o més noms d'etiqueta.
- Retorna cert si el fitxer té alguna de les etiquetes de `values`.
- Exemple: `file.hasTag("tag1", "tag2")` retorna `true` si el fitxer té l'etiqueta `#tag1` o `#tag2`. També inclou qualsevol [[Etiquetes#Etiquetes imbricades|etiqueta imbricada]], com `#tag1/a` o `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` és el nom de la carpeta a comprovar.
- Retorna cert si el fitxer es troba a la carpeta especificada o en una de les seves subcarpetes.
- Exemple: `file.inFolder("notes")` retorna `true`.

## Objecte

Funcions que pots utilitzar amb una col·lecció de parells clau-valor com `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Retorna cert si l'objecte no té propietats pròpies.
- Exemple: `{}.isEmpty()` retorna `true`.

### `keys()`

`object.keys(): list`

- Retorna una llista que conté les claus de l'objecte.

### `values()`

`object.values(): list`

- Retorna una llista que conté els valors de l'objecte.

## Expressió regular

Funcions que pots utilitzar amb un patró d'expressió regular. Exemple: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` és la cadena a provar.
- Retorna cert si l'expressió regular coincideix amb `value`.
- Exemple: `/abc/.matches("abcde")` retorna `true`.
