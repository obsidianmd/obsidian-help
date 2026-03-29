---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Les propietats us permeten organitzar informació sobre una nota. Les propietats contenen dades estructurades com ara text, enllaços, dates, caselles de verificació i nombres.'
---
Les propietats us permeten organitzar informació sobre una nota. Les propietats contenen dades estructurades com text, enllaços, dates, caselles de selecció i números. Les propietats també es poden utilitzar en combinació amb [[Connectors de la comunitat]] que poden fer coses útils amb les vostres dades estructurades.

## Afegir propietats a una nota

Hi ha diverses maneres d'afegir una propietat a una nota:

- Utilitzeu l'[[Paleta d'ordres|ordre]] **Afegeix propietat a l'arxiu**.
- Utilitzeu la [[Tecles d'accés ràpid|drecera de teclat]] **`Cmd/Ctrl+;`**.
- Trieu **Afegeix propietat a l'arxiu** des del menú **Més accions** (que es mostra amb la icona de tres punts o fent clic dret a la pestanya).
- Escriviu `---` al principi del fitxer.

Un cop afegiu una propietat, apareixerà una fila a la part superior del fitxer amb dues entrades: el _nom_ de la propietat i el _valor_ de la propietat.

Per al nom, podeu triar el que vulgueu. Obsidian ofereix diverses propietats per defecte: `tags`, `cssclasses` i `aliases`.

Un cop trieu el nom de la propietat, podeu donar-li un valor.

### Tipus de propietat

A més d'un nom i un valor, les propietats també tenen un _tipus_. El tipus d'una propietat determina quin tipus de valors pot emmagatzemar i com Obsidian els gestiona. Per canviar el tipus d'una propietat, feu clic a la icona de tipus al costat del nom de la propietat i seleccioneu una opció diferent. També podeu gestionar els tipus de propietats utilitzant el connector principal [[Vista de propietats]].

Obsidian admet els tipus de propietats següents:

- **[[#Text]]**
- **[[#Llista]]**
- **[[#Número]]**
- **[[#Casella de selecció]]**
- **[[#Data]]**
- **[[#Data i hora]]**
- **[[#Etiquetes]]**

Un cop s'assigna un tipus de propietat a un nom de propietat, totes les propietats amb aquest nom a tota la cambra forta utilitzaran el mateix tipus.

## Usos avançats

### Cercar propietats

Les propietats tenen la seva pròpia [[Cerca|sintaxi de cerca]] que podeu utilitzar juntament amb altres termes de cerca i operadors. [[Cerca#Cercar propietats|Consulteu la sintaxi de cerca per a propietats]].

### Plantilles

Podeu afegir propietats a les [[Plantilles]].

Quan inseriu una plantilla a la nota activa, totes les propietats de la plantilla s'afegiran a la nota. Obsidian també fusionarà qualsevol propietat que existeixi a la vostra nota amb les propietats de la plantilla. ^templates-properties

### Canviar el nom de les propietats

Podeu canviar el nom d'una propietat fent clic dret sobre ella a la [[Vista de propietats|vista de totes les propietats]].

### Modes de visualització

Podeu canviar com es mostren les propietats a la vostra nota anant a **[[Configuració]] → Editor → Propietats en el document**. Les opcions són:

- **Visibles** (per defecte) – mostra les propietats a la part superior de la nota, si n'hi ha.
- **Amagades** – amaga les propietats, però es poden mostrar a la barra lateral mitjançant la [[Vista de propietats]].
- **Font** – mostra les propietats en format YAML de text sense format.

### Pedaços de CSS

Podeu utilitzar [[Pedaços de CSS]] per canviar l'aparença de notes específiques.

### No admès

Algunes funcionalitats no estan admeses actualment a Obsidian:

- **Propietats imbricades**: Per veure propietats imbricades, recomanem utilitzar el [[Vistes i mode d'edició#Mode de codi font|mode de codi font]].
- **Edició massiva de propietats**: Per a l'edició massiva en profunditat fora de la [[Vista de propietats]], recomanem utilitzar eines d'edició massiva com VSCode, scripts i connectors de la comunitat.
- **Markdown a les propietats**: Aquesta és una limitació intencionada, ja que les propietats estan pensades per a petites peces d'informació atòmiques que siguin llegibles tant per humans com per màquines.

## Dreceres de teclat

### Afegir una propietat

| Acció | Drecera de teclat |
|---|---|
|Afegir una nova propietat|`Cmd + ;`|

### Navegar entre propietats

Quan una propietat té el focus

| Acció | Drecera de teclat |
|---|---|
|Enfocar la propietat següent|`Fletxa avall` o `Tab`|
|Enfocar la propietat anterior|`Fletxa amunt` o `Shift+Tab`|
|Saltar a l'editor|`Alt+Fletxa avall`|

### Seleccionar propietats

| Acció | Drecera de teclat |
|---|---|
|Estendre la selecció cap amunt|`Shift+Fletxa amunt`|
|Estendre la selecció cap avall|`Shift+Fletxa avall`|
|Selecciona-ho tot|`Cmd+A`|

### Editar propietats

| Acció | Drecera de teclat |
|---|---|
|Editar nom de la propietat|`Fletxa esquerra`|
|Editar valor de la propietat|`Fletxa dreta`|
|Enfocar propietat|`Escape`|
|Suprimir propietat|`Cmd+Backspace`<br><br>si hi ha propietats seleccionades, suprimirà la selecció.|
|Desfés|`Cmd+Z`|
|Refés|`Cmd+Shift+Z`|

### Vim (avançat)

| Acció | Drecera de teclat |
|---|---|
|Moure avall|`j`|
|Moure amunt|`k`|
|Enfocar clau|`h`|
|Enfocar valor|`l`|
|Enfocar valor (cursor al final)|`A`|
|Enfocar valor (cursor al principi)|`i`|
|Crear nova propietat|`o`|

## Format de les propietats

Les propietats s'emmagatzemen en format [YAML](https://yaml.org/) a la part superior del fitxer. YAML és un format popular que és fàcil de llegir tant per humans com per ordinadors.

Els noms de les propietats se separen dels seus valors amb dos punts seguits d'un espai:

```yaml
---
name: value
---
```

Tot i que l'ordre de cada parell nom-valor no importa, cada nom ha de ser únic dins d'una nota. Per exemple, no podeu tenir més d'una propietat `tags`.

Els valors poden ser [[#Text|text]], [[#Número|números]], [[#Casella de selecció|caselles de selecció]], [[#Data|dates]], [[#Data i hora|dates i hores]], o [[#Llista|llistes]].

### Text

Les propietats de text contenen una sola línia de text. El format Markdown no es renderitza a les propietats de text. Les etiquetes amb coixinet no creen etiquetes quan s'utilitzen a propietats de text.

Les propietats de text poden contenir URL i [[Enllaços interns]] utilitzant la sintaxi `[[Enllaç]]`. Els [[Enllaços interns]] a les propietats de text han d'estar envoltats amb cometes. Obsidian les afegirà automàticament si introduïu manualment enllaços interns a les propietats, però aneu amb compte d'afegir-les quan utilitzeu connectors de plantilles.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Llista

Les propietats de llista contenen múltiples valors. Cada valor d'una llista apareix en la seva pròpia línia, precedit per un guió (-) i un espai.

Els valors de llista poden contenir text, números i [[Enllaços interns]]. Quan utilitzeu [[Enllaços interns]] a propietats de llista, envolteu-los amb cometes.

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

### Número

Les propietats de tipus número sempre han de ser un número literal, no una expressió amb operadors. Es permeten tant enters com decimals.

```yaml
---
year: 1977
pie: 3.14
---
```

### Casella de selecció

Les propietats de casella de selecció són `true` o `false`. En previsualització en viu, es mostra com una casella de selecció.

```yaml
---
favorite: true
reply: false
last: # Valor indeterminat; sovint tractat com a false
```

### Data

Les propietats de data s'emmagatzemen en el format següent:

```yaml
---
date: 2020-08-21
---
```

El selector de data segueix el format de data i hora per defecte del vostre sistema operatiu. Podeu canviar-lo a les preferències del sistema:

> [!info]- Windows
> **[[Configuració]] → Hora i idioma → Idioma i regió → Format regional → Canvia els formats**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Preferències del sistema → Idioma i regió → Format de data**
> 
> ![[Mac-OS-DateTime.png|450]]

Amb el connector [[Notes diàries]] activat, la propietat de data funcionarà addicionalment com un enllaç intern a la nota diària corresponent per a aquella data.

![[Notes diàries#^daily-notes-date]]

### Data i hora

Les propietats de data i hora inclouen tant una data com una hora específica, emmagatzemades en el format següent:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Com les [[#Data|propietats de data]], el selector de data i hora segueix el format per defecte del vostre sistema operatiu. Podeu canviar-lo a les preferències del sistema.

### Etiquetes

Les propietats d'etiquetes són un tipus de propietat especial utilitzat exclusivament per la propietat `tags`. Aquest tipus de propietat no es pot assignar a altres propietats.

Les propietats d'etiquetes es formategen com una llista, amb cada etiqueta en la seva pròpia línia precedida per un guió (-) i un espai.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

La propietat `tags` és una de les [[#Propietats per defecte]] d'Obsidian. Consulteu [[Etiquetes]] per a més informació sobre l'ús d'etiquetes a Obsidian.

### Propietats JSON

Tot i que recomanem utilitzar YAML per definir propietats, també podeu definir propietats utilitzant [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Tingueu en compte que el bloc JSON es llegirà, interpretarà i desarà com a YAML.

## Propietats per defecte

Obsidian ve amb un conjunt de propietats per defecte:

| Propietat    | Tipus  | Descripció                                                   |
| ------------ | ------ | ------------------------------------------------------------ |
| `tags`       | Llista | Consulteu [[Edició i format/Etiquetes\|Etiquetes]].        |
| `aliases`    | Llista | Consulteu [[Àlies]].                                        |
| `cssclasses` | Llista | Us permet aplicar estils a notes individuals utilitzant [[Pedaços de CSS]]. |

### Propietats per a Obsidian Publish

Les propietats per defecte següents es poden utilitzar amb [[Introducció a Obsidian Publish|Obsidian Publish]]:

| Propietat     | Descripció                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Consulteu [[Publica el teu contingut#Seleccionar automàticament dades per publicar\|Seleccionar automàticament dades per publicar]]. |
| `permalink`   | Consulteu [[Enllaços permanents\|Enllaços permanents]].                                                    |
| `description` | Consulteu [[Previsualitzacions d'enllaços a xarxes socials#Description\|Descripció]].                      |
| `image`       | Consulteu [[Previsualitzacions d'enllaços a xarxes socials#Image\|Imatge]].                                |
| `cover`       | Consulteu [[Previsualitzacions d'enllaços a xarxes socials#Image\|Imatge]].                                |

### Propietats obsoletes

Aquestes propietats van quedar obsoletes a Obsidian 1.4 i s'haurien de substituir pels seus equivalents moderns. El suport com a [[#Propietats per defecte]] es va eliminar a Obsidian 1.9.

| Propietat | Descripció |
|-|-|
| `tag` | Àlies obsolet per a `tags`. |
| `alias` | Àlies obsolet per a `aliases`. |
| `cssclass` | Àlies obsolet per a `cssclasses`. |

> [!tip] Si necessiteu convertir els fitxers de la vostra cambra forta al format de [[#Propietats per defecte]], podeu utilitzar l'[[Importador de format Markdown]] per canviar la vostra cambra forta de forma massiva.
