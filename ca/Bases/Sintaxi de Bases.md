---
permalink: bases/syntax
publish: true
mobile: true
description: Aquesta pàgina ofereix una introducció a la sintaxi de Bases a Obsidian.
---
Quan [[Crear una base|crees una base]] a Obsidian, es desa com a fitxer `.base`. Les bases normalment s'editen fent servir la interfície de l'aplicació, però la sintaxi també es pot editar manualment i incrustar en un bloc de codi.

La sintaxi de [[Introducció a Bases|Bases]] defineix [[Vistes]], filtres i [[Fórmules|fórmules]]. Les bases han de ser YAML vàlid que s'ajusti a l'esquema definit a continuació.

## Exemple

Aquí tens un exemple d'un fitxer base. Repassarem cada secció en detall.

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

### Filtres

Per defecte, una base inclou tots els fitxers de la cambra forta. No hi ha cap `from` o `source` com a SQL o Dataview. La secció `filters` et permet definir condicions per reduir el conjunt de dades.

```yaml
# Filtre simple:
filters:
  and:
    - file.hasTag("tag")

# Filtre complex:
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

Hi ha dues oportunitats per aplicar filtres:

1. Al nivell global de `filters` (mostrat més amunt) on s'apliquen a totes les vistes de la base.
2. Al nivell de `view` on s'apliquen només a una vista específica.

Aquestes dues seccions són funcionalment equivalents i quan s'avaluen per a una vista es concatenen amb un `AND`.

La secció `filters` conté una única sentència de filtre com a cadena de text, o un objecte de filtre definit recursivament. Els objectes de filtre poden contenir `and`, `or` o `not`. Aquestes claus són una llista heterogènia d'altres objectes de filtre o sentències de filtre en cadenes de text. Una sentència de filtre és una línia que s'avalua com a vertadera o falsa quan s'aplica a una nota. Pot ser una de les següents:

- Una comparació bàsica utilitzant operadors aritmètics estàndard.
- Una funció. Hi ha una varietat de [[Funcions]] integrades, i els connectors poden afegir funcions addicionals.

La sintaxi i les funcions disponibles per a filtres i fórmules són les mateixes.

### Fórmules

La secció `formulas` defineix [[Fórmules|propietats de fórmula]] que es poden mostrar a totes les vistes del fitxer base.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Les propietats de fórmula admeten operadors aritmètics bàsics i una varietat de [[Funcions]] integrades. En el futur, els connectors podran afegir funcions per utilitzar en fórmules.

Pots referenciar propietats de diferents maneres segons el seu tipus:

- Les **propietats de nota** són propietats definides a les metadades inicials de la nota. Per exemple `note.price` o `note["price"]`.  
  Si no s'especifica cap prefix, s'assumeix que la propietat és una propietat de `note`.
- Les **propietats de fitxer** descriuen el propi fitxer.  
  Per exemple `file.size` o `file.ext`. També pots referenciar l'objecte fitxer directament, p. ex., `file.hasLink()`.
- Les **propietats de fórmula** són altres fórmules de la base.  
  Exemple `formula.formatted_price`.

Una fórmula pot utilitzar valors d'altres propietats de fórmula, sempre que no hi hagi cap referència circular.  

Les propietats de fórmula sempre s'emmagatzemen com a cadenes de text en YAML, però el seu **tipus de dades de sortida** real es determina pel tipus de les dades subjacents i el valor de retorn de qualsevol funció utilitzada.

Tingues en compte que l'ús de cometes imbricades és necessari per incloure literals de text al camp YAML. Els literals de text han d'estar tancats entre cometes simples o dobles.

### Propietats

La secció `properties` permet emmagatzemar informació de configuració sobre cada propietat. Depèn de cada vista individual com utilitzar aquests valors de configuració. Per exemple, a les taules el nom per mostrar s'utilitza per als encapçalaments de columna.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Els noms per mostrar no s'utilitzen en filtres ni fórmules.

### Resums

La secció `summaries` es pot utilitzar per definir fórmules de resum personalitzades. A més de definir fórmules de resum aquí, hi ha diverses fórmules de resum per defecte disponibles.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

En aquest exemple, la fórmula `customAverage` és la mateixa que la `Average` per defecte, excepte que el valor s'arrodoneix a un nombre diferent de decimals. A les fórmules de resum, la paraula clau `values` és una llista que conté tots els valors d'aquella propietat a través de totes les notes del conjunt de resultats. La fórmula de resum ha de retornar un únic `Value`.

Tingues en compte que aquesta secció `summaries` és diferent de la secció `summaries` a la configuració de la vista (explicada a continuació) on les fórmules de resum s'assignen a propietats específiques.

#### Fórmules de resum per defecte

| Nom       | Tipus d'entrada | Descripció                                                              |
| --------- | --------------- | ----------------------------------------------------------------------- |
| Average   | Número          | La mitjana matemàtica de tots els números dels valors d'entrada.        |
| Min       | Número          | El número més petit dels valors d'entrada.                              |
| Max       | Número          | El número més gran dels valors d'entrada.                               |
| Sum       | Número          | La suma de tots els números de l'entrada.                               |
| Range     | Número          | La diferència entre `Max` i `Min`.                                      |
| Median    | Número          | La mediana matemàtica de tots els números dels valors d'entrada.        |
| Stddev    | Número          | La desviació estàndard de tots els números dels valors d'entrada.       |
| Earliest  | Data            | La data més antiga dels valors d'entrada.                               |
| Latest    | Data            | La data més recent dels valors d'entrada.                               |
| Range     | Data            | La diferència entre `Latest` i `Earliest`.                              |
| Checked   | Booleà          | El nombre de valors `true`.                                             |
| Unchecked | Booleà          | El nombre de valors `false`.                                            |
| Empty     | Qualsevol       | El nombre de valors de l'entrada que estan buits.                       |
| Filled    | Qualsevol       | El nombre de valors de l'entrada que no estan buits.                    |
| Unique    | Qualsevol       | El nombre de valors únics de l'entrada.                                 |

### Vistes

La secció `views` defineix com es poden renderitzar les dades. Cada entrada a la llista `views` defineix una vista separada de les mateixes dades, i es poden tenir tantes vistes diferents com sigui necessari.

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

- `type` selecciona entre els tipus de vista integrats i afegits per connectors.
- `name` és el nom per mostrar, i es pot utilitzar per definir la vista per defecte.
- `filters` són exactament els mateixos que els descrits anteriorment, però s'apliquen només a la vista.
- `groupBy` especifica una propietat i una direcció d'ordenació. El valor de la propietat especificada per a cada fila s'utilitza per col·locar la fila en grups.
- `summaries` associa noms de propietat a un resum amb nom. Els resums realitzen una agregació sobre la propietat a través de totes les files.

Les [[Vistes]] poden afegir dades addicionals per emmagatzemar qualsevol informació necessària per mantenir l'estat o renderitzar correctament, però els autors de connectors han de tenir cura de no utilitzar claus ja en ús pel connector principal de Bases. Com a exemple, una vista de taula pot utilitzar això per limitar el nombre de files o per seleccionar quina columna s'utilitza per ordenar les files i en quina direcció. Un tipus de vista diferent, com un mapa, podria utilitzar això per associar quina propietat de la nota correspon a la latitud i longitud i quina propietat s'ha de mostrar com a títol del marcador.

En el futur, l'API permetrà a les vistes llegir i escriure aquests valors, permetent que la vista construeixi la seva pròpia interfície de configuració.

## Propietats

Hi ha tres tipus de propietats utilitzades a les bases:

1. **Propietats de nota**, emmagatzemades a les metadades inicials dels fitxers Markdown.
2. **Propietats de fitxer**, accessibles per a tots els tipus de fitxer.
3. **Propietats de fórmula**, definides al propi fitxer `.base` (veure més amunt).

### Propietats de nota

Les [[Propietats|propietats de nota]] només estan disponibles per a fitxers Markdown, i s'emmagatzemen a les metadades inicials YAML de cada nota. Aquestes propietats es poden accedir utilitzant el format `note.author` o simplement `author` com a abreviatura.

### Propietats de fitxer

Les propietats de fitxer fan referència al fitxer que s'està provant o avaluant actualment. Les propietats de fitxer estan disponibles per a tots els [[Formats de fitxer acceptats|tipus de fitxer]], inclosos els adjunts.

Per exemple, un filtre `file.ext == "md"` serà vertader per a tots els fitxers Markdown i fals en cas contrari.

| Propietat     | Tipus  | Descripció                                                    |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Llista | Llista de fitxers d'enllaços inversos. Nota: Aquesta propietat és costosa en rendiment. Quan sigui possible, invertiu la cerca i utilitzeu `file.links`. No actualitza automàticament els resultats quan la cambra forta canvia. |
| `file.ctime`  | Data   | Hora de creació                                               |
| `file.embeds` | Llista | Llista de totes les incrustacions a la nota                   |
| `file.ext`    | Cadena | Extensió del fitxer                                           |
| `file.file`   | Fitxer | Objecte fitxer, només utilitzable en funcions específiques    |
| `file.folder` | Cadena | Ruta de la carpeta del fitxer                                 |
| `file.links`  | Llista | Llista de tots els enllaços interns a la nota, incloses les metadades inicials |
| `file.mtime`  | Data   | Hora de modificació                                           |
| `file.name`   | Cadena | Nom del fitxer                                                |
| `file.path`   | Cadena | Ruta del fitxer                                               |
| `file.properties`   | Objecte | Totes les propietats del fitxer. Nota: No actualitza automàticament els resultats quan la cambra forta canvia. |
| `file.size`   | Número | Mida del fitxer                                               |
| `file.tags`   | Llista | Llista de totes les etiquetes al contingut del fitxer i a les metadades inicials |

### Accedir a propietats amb `this`

Utilitza l'objecte `this` per accedir a les propietats del fitxer. A què fa referència `this` dependrà d'on es mostri la base.

Quan la base s'obre a l'àrea de contingut principal, `this` apunta a les propietats del propi fitxer base. Per exemple, utilitzar `this.file.folder` retorna la ruta de la carpeta on es troba la base.

Quan la base està incrustada en un altre fitxer, `this` apunta a les propietats del fitxer _que incrusta_ (la nota o Canvas que conté la base). Per exemple, utilitzar `this.file.name` retorna el nom del fitxer que incrusta, no el de la base.

Quan la base és a una barra lateral, `this` fa referència al fitxer actiu a l'àrea de contingut principal. Això et permet crear consultes basades en el fitxer actiu. Per exemple, pots utilitzar `file.hasLink(this.file)` per replicar el panell d'enllaços inversos.

## Operadors

### Operadors aritmètics

Els operadors aritmètics realitzen operacions aritmètiques amb números. Per exemple, `radius * (2 * 3.14)`.

| Operador | Descripció  |
| -------- | ----------- |
| `+`      | suma        |
| `-`      | resta       |
| `*`      | multiplicar |
| `/`      | dividir     |
| `%`      | mòdul       |
| `( )`    | parèntesi   |

### Aritmètica de dates

Les dates es poden modificar afegint i restant durades. Les unitats de durada accepten múltiples formats:

| Unitat                   | Durada  |
| ------------------------ | ------- |
| `y`, `year`, `years`     | any     |
| `M`, `month`, `months`   | mes     |
| `d`, `day`, `days`       | dia     |
| `w`, `week`, `weeks`     | setmana |
| `h`, `hour`, `hours`     | hora    |
| `m`, `minute`, `minutes` | minut   |
| `s`, `second`, `seconds` | segon   |

Per modificar o desplaçar objectes Date, utilitza l'operador `+` o `-` amb una cadena de durada. Per exemple, `date + "1M"` afegeix 1 mes a la data, mentre que `date - "2h"` resta 2 hores de la data.

La [[Funcions|funció]] global `today()` es pot utilitzar per obtenir la data actual, i `now()` es pot utilitzar per obtenir la data actual amb l'hora.

- `now() + "1 day"` retorna una data i hora exactament 24 hores des del moment d'execució.
- `file.mtime > now() - "1 week"` retorna `true` si el fitxer s'ha modificat durant l'última setmana.
- `date("2024-12-01") + "1M" + "4h" + "3m"` retorna un objecte Date que representa `2025-01-01 04:03:00`.
- Resta dues dates per obtenir la diferència en mil·lisegons entre les dues, per exemple, `now() - file.ctime`.
- Per obtenir la part de data d'una Date amb hora, utilitza `datetime.date()`.
- Per formatar un objecte Date, utilitza la funció `format()`, per exemple `datetime.format("YYYY-MM-DD")`.

### Operadors de comparació

Els operadors de comparació es poden utilitzar per comparar números o objectes Date. Igual i diferent es poden utilitzar amb qualsevol tipus de valor, no només números i dates.

| Operador | Descripció            |
| -------- | --------------------- |
| `==`     | igual                 |
| `!=`     | diferent              |
| `>`      | més gran que          |
| `<`      | més petit que         |
| `>=`     | més gran o igual que  |
| `<=`     | més petit o igual que |

### Operadors booleans

Els operadors booleans es poden utilitzar per combinar o invertir valors lògics, resultant en un valor vertader o fals.

| Operador | Descripció |
| -------- | ---------- |
| `!`      | no lògic   |
| `&&`     | i lògic    |
| \|\|     | o lògic    |

## Funcions

Consulta la [[Funcions|llista de funcions]] que es poden utilitzar en fórmules i [[Vistes|filtres]].

## Tipus

Les bases tenen un sistema de tipus que utilitzen les fórmules i els filtres per aplicar funcions a les propietats.

### Cadenes, números i booleans

Les cadenes, números i booleans són valors "primitius" que no requereixen una funció per crear-los.

- Les cadenes s'envolten entre cometes simples o dobles, per exemple `"message"`.
- Els números s'escriuen com a dígits, i opcionalment es poden envoltar entre parèntesis per a més claredat. Per exemple, `1` o `(2.5)`.
- Els booleans s'escriuen com `true` o `false` sense cometes.

### Dates i durades

Les dates representen una data específica, o una data i hora depenent de la funció utilitzada per crear-les, o el tipus que s'ha assignat a la [[Propietats|propietat]].

- Per construir una data, utilitza la funció `date`, per exemple `date("2025-01-01 12:00:00")`
- Per modificar una data, afegeix o elimina una durada, per exemple `now() + "1 hour"` o `today() + "7d"`
- Compara dates utilitzant operadors de comparació (p. ex. `>` o `<`) i operadors aritmètics (per exemple, `(now() + "1d") - now()` retorna `86400000` mil·lisegons.)
- Per extreure parts d'una data, utilitza els camps disponibles (`now().hour`), o una funció de conveniència (`now.time()`).
- Molts altres [[Funcions|camps i funcions]] estan disponibles als objectes de data.

### Objectes i llistes

- Converteix un element individual en una llista utilitzant la funció `list()`. Això és especialment útil per a propietats que poden contenir una mescla de llistes o valors individuals.
- Accedeix als elements de la llista utilitzant claudàtors i un índex basat en 0. Per exemple, `property[0]` retorna el primer element de la llista.
- Accedeix als elements d'un objecte utilitzant claudàtors i el nom de l'element o notació de punt. Per exemple, `property.subprop` o `property["subprop"]`.

### Fitxers i enllaços

Els [[Enllaçar notes|enllaços wiki]] a les [[Propietats|propietats de les metadades inicials]] es reconeixen automàticament com a objectes d'enllaç. Els enllaços es renderitzaran com un enllaç clicable a la [[Vistes|vista]].

- Per construir un enllaç, utilitza la [[Funcions|funció]] global `link`, per exemple `link("filename")` o `link("https://obsidian.md")`.
- Pots crear un enllaç des de qualsevol cadena de text, per exemple, `link(file.ctime.date().toString())`.
- Per establir el text a mostrar, passa una cadena o icona opcional com a segon paràmetre, per exemple `link("filename", "display")` o `link("filename", icon("plus"))`.

Un objecte File es pot convertir en un enllaç utilitzant `file.asLink()` amb un text a mostrar opcional.

Els enllaços es poden comparar amb `==` i `!=`. Són equivalents sempre que apuntin al mateix fitxer, o si el fitxer no existeix quan es cerca, el text de l'enllaç ha de ser idèntic.

Els enllaços es poden comparar amb fitxers com `file` o `this`. Seran equivalents si l'enllaç es resol al fitxer. Per exemple, `author == this`.

Els enllaços també es poden comprovar amb la contenció de llistes, per exemple, `authors.contains(this)`.
