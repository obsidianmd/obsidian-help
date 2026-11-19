---
permalink: formulas
description: 'Les fórmules us permeten crear propietats calculades utilitzant dades d''altres propietats. Podeu fer càlculs, manipular text, treballar amb dates i molt més.'
---
Les fórmules et permeten crear propietats calculades a [[Introducció a Bases|Bases]] utilitzant dades d'altres [[Propietats|propietats]]. Pots realitzar càlculs, manipular text, treballar amb dates, i molt més.

## Què poden fer les fórmules

Les fórmules et poden ajudar a:

- **Calcular valors**, sumar preus, computar totals o realitzar operacions matemàtiques.
- **Manipular text**, combinar cadenes, canviar majúscules/minúscules o extreure subcadenes.
- **Treballar amb dates**, calcular diferències de temps, formatar dates o determinar terminis.
- **Aplicar lògica**, utilitzar sentències condicionals per mostrar valors diferents.
- **Processar llistes**, filtrar, ordenar, mapejar o agregar dades de llistes.
- **Utilitzar notes enllaçades**, consultar o agregar propietats de les notes a les quals una nota enllaça. Consulta [[#Utilitzar propietats de notes enllaçades]].

## Crear una propietat de fórmula

Per crear una propietat de fórmula:

1. A la teva base, fes clic a **Propietats** a la barra d'eines.
2. Fes clic a **Afegeix una fórmula** a la part inferior del menú.
3. Introdueix un nom per a la teva propietat de fórmula.
4. Escriu la teva fórmula al camp **Fórmula**.
5. Tanca el diàleg.

L'editor de fórmules completarà automàticament els noms de [[Funcions|funcions]] i propietats mentre escrius per validar la sintaxi de la teva fórmula. Apareix una marca de verificació verda quan la teva fórmula és vàlida.

Un cop creada, pots utilitzar una propietat de fórmula com qualsevol altra propietat a la teva base. Afegeix-la a [[Vistes|vistes]], utilitza-la en filtres, ordena per ella, i molt més.

## Escriure una fórmula

A l'editor de fórmules, escriu una expressió utilitzant propietats, operadors i funcions.

### Referència a propietats

Pots fer referència a diferents tipus de propietats a les teves fórmules:

- **Propietats de nota** — Propietats de les [[Propietats|metadades inicials]] d'una nota.
- **Propietats del fitxer** — Propietats integrades com `file.name`, `file.size` o `file.mtime`.
- **Propietats de fórmula** — Altres fórmules utilitzant `formula.nom_fórmula`.

**Exemples:**

- `price * quantity` — multiplicar dues propietats de nota
- `file.name + " - " + description` — combinar el nom del fitxer amb una propietat de nota
- `formula.price_per_unit * 1.1` — utilitzar una altra propietat de fórmula

### Utilitzar operadors

Els **operadors aritmètics** realitzen operacions matemàtiques amb números:

- `price + tax` — sumar
- `price - discount` — restar
- `price * quantity` — multiplicar
- `price / quantity` — dividir
- `(part / whole) * 100` — utilitzar parèntesis per l'ordre d'operacions

Els **operadors de comparació** comparen valors:

- `price > 100` — més gran que
- `age < 18` — més petit que
- `status == "Done"` — igual a
- `status != "Done"` — diferent de
- `file.mtime > now() - '7d'` — comparar dates

Els **operadors booleans** combinen condicions lògiques:

- `!completed` — no
- `price > 0 && quantity > 0` — i
- `urgent || important` — o

Aprèn'n més a [[Sintaxi de Bases#Operadors|Sintaxi de Bases]].

### Utilitzar funcions

Les funcions realitzen operacions sobre valors. Les funcions disponibles depenen del tipus de valor amb el qual treballis. Consulta la llista completa de [[Funcions]].

**Categories comunes de funcions:**

- **Funcions globals** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Funcions de cadena** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Funcions numèriques** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Funcions de data** — `format()`, `relative()`, `date()`, `time()`
- **Funcions de llista** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Exemples:**

- `if(price, "$" + price.toFixed(2), "")` per definir un condicional amb format numèric.
- `file.name.lower()` per convertir a minúscules.
- `tags.contains("urgent")` per comprovar si la llista d'etiquetes conté un valor.
- `due_date.format("YYYY-MM-DD")` per formatar una data.

## Utilitzar propietats de notes enllaçades

Les fórmules poden llegir propietats de les notes a les quals una nota enllaça. Pots consultar un valor d'una nota enllaçada, o agregar valors de diverses notes enllaçades en un total, un recompte o una llista.

Per llegir les propietats d'una nota enllaçada, converteix l'enllaç en un fitxer amb `asFile()` i després utilitza `properties`. Els enllaços emmagatzemats en propietats, com ara `project: "[[Redisseny del web]]"`, funcionen d'aquesta manera directament.

> [!warning] Els resultats s'actualitzen quan canvia la nota de la fila
> Si només edites una nota enllaçada, les consultes i agregacions a la base poden no actualitzar-se fins que tornis a obrir la base.

### Consultar un valor

Mostra l'`status` de la nota enllaçada a la propietat `project`:

```js
project.asFile().properties.status
```

Si la propietat pot contenir un sol enllaç o una llista d'enllaços, embolica-la amb `list()` i pren el primer enllaç:

```js
list(project)[0].asFile().properties.status
```

### Agregar valors

Suma les `hours` de cada nota enllaçada a la propietat `tasks`:

```js
tasks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

Compta les notes enllaçades on l'`status` no és "Done":

```js
tasks.filter(value.asFile().properties.status != "Done").length
```

Llista els estats de les notes enllaçades, sense duplicats:

```js
tasks.map(value.asFile().properties.status).unique()
```

### Agregar valors de notes que enllacen aquí

Per agregar valors de les notes que enllacen a una nota, com ara tasques que cadascuna enllaça al seu projecte, utilitza `file.backlinks`:

```js
file.backlinks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

`file.backlinks` és lent en cambres fortes grans. Quan puguis, emmagatzema els enllaços a la mateixa nota i agrega'ls amb `map()` i `reduce()`, com es mostra més amunt.

## Exemples de fórmules

### Calcular un termini

Establir la data de lliurament d'un projecte com 2 setmanes després de la data d'inici:

```js
start_date + "2w"
```

### Mostrar l'estat de retard

Mostrar "Endarrerit" si la data de lliurament ha passat i l'estat no és "Fet":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formatar moneda

Mostrar un preu amb 2 decimals i símbol de moneda:

```js
if(price, "$" + price.toFixed(2), "")
```

### Comptar elements d'una llista

Comptar el nombre d'elements en una propietat de llista:

```js
tasks.length
```

### Calcular puntuació de prioritat

Combinar múltiples factors en una puntuació de prioritat:

```js
(impact * urgency) / effort
```

### Combinar camps de text

Crear un nom complet a partir del nom i cognom:

```js
first_name + " " + last_name
```

### Calcular cost total

Multiplicar el cost mensual pel nombre de mesos de propietat:

```js
monthlyUses * formula.Owned.round()
```

## Tipus de dades

Les fórmules treballen amb diferents tipus de dades:

- **Cadenes** — Text entre cometes: `"hello"` o `'world'`
- **Números** — Valors numèrics: `42`, `3.14`, `(2 + 2)`
- **Booleans** — Cert o fals: `true`, `false`
- **Dates** — Creades amb `date()`, `today()` o `now()`
- **Llistes** — Col·leccions de valors: `[1, 2, 3]`
- **Objectes** — Parells clau-valor: `{"name": "value"}`

El tipus de sortida d'una fórmula ve determinat per les dades i funcions utilitzades.

## Fer referència a altres fórmules

Les fórmules poden fer referència a altres fórmules, creant càlculs derivats. Per exemple, si tens una fórmula anomenada `price_per_unit`:

```js
price / quantity
```

Pots fer-hi referència en una altra fórmula:

```js
formula.price_per_unit * 1.1
```

> [!warning] Evita les referències circulars
> Una fórmula no pot fer referència a si mateixa directament o indirectament a través d'altres fórmules.
