---
permalink: plugins/search
publish: true
mobile: true
description: Cerca és un connector principal que us ajuda a trobar dades a la vostra caixa forta d'Obsidian mitjançant termes de cerca i operadors per refinar els resultats.
---
Cerca és un [[Connectors principals|connector principal]] que t'ajuda a trobar dades a la teva cambra forta d'Obsidian utilitzant termes de cerca i operadors per restringir els resultats.

Per defecte, pots trobar la Cerca a la barra lateral esquerra ![[lucide-search.svg#icon]]. També pots obrir la Cerca prement `Ctrl+Shift+F` (Windows/Linux) o `Command+Shift+F` (macOS).

- **Cerca el text seleccionat**: Si selecciones text a l'editor i obres la Cerca amb la drecera de teclat, la Cerca et mostra els resultats per al text seleccionat.
- **Cerca termes de cerca recents**: Obre la Cerca amb un terme de cerca buit per llistar els termes de cerca recents. Fes clic a qualsevol d'ells per utilitzar el terme de cerca de nou.

> [!info] Fitxers exclosos
> Els fitxers que coincideixin amb els patrons de [[Configuració#Fitxers exclosos|Fitxers exclosos]] no apareixeran als resultats de la Cerca.

## Termes de cerca

Un terme de cerca és la paraula o frase que introdueixes al camp de cerca. Aprendre a escriure termes de cerca de manera efectiva pot ajudar-te a trobar ràpidament el que busques, fins i tot en cambres fortes grans. Obsidian només cerca els continguts de notes i Canvas.

> [!tip]- Cercar rutes i noms de fitxer
> Per defecte, només pots cercar les rutes i noms de fitxer de notes i Canvas. Per cercar una ruta o nom de fitxer de qualsevol fitxer a la cambra forta, utilitza l'operador `path` o `file`.

Cada paraula del terme de cerca es busca de manera independent dins de cada fitxer. Per cercar una frase exacta, envolta-la amb cometes, per exemple `"star wars"`. Per cercar text entre cometes dins d'una frase exacta, pots _escapar_ les cometes afegint una barra invertida (`\`) davant de la cometa, per exemple `"they said \"hello\" to each other"`.

Pots controlar si es retornen fitxers que continguin _totes_ les paraules del teu terme de cerca, o _qualsevol_ de les paraules:

- `meeting work` retorna fitxers que contenen tant `meeting` com `work`.
- `meeting OR work` retorna fitxers que contenen `meeting` o `work`.

Fins i tot pots combinar les dues opcions en el mateix terme de cerca.

- `meeting work OR meetup personal` retorna fitxers per a reunions de feina i trobades personals.

Pots utilitzar parèntesis per controlar la prioritat de cada expressió.

- `meeting (work OR meetup) personal` retorna fitxers que contenen `meeting`, `personal`, i `work` o `meetup`.

Per excloure, o negar, una paraula dels resultats de cerca, afegeix un guió (`-`) davant seu:

- `meeting -work` retorna fitxers que contenen `meeting` però no `work`.

Pots excloure múltiples expressions:

- `meeting -work -meetup` retorna fitxers que contenen `meeting` però no `work` ni `meetup`.

Pots excloure una combinació d'expressions utilitzant parèntesis:

- `meeting -(work meetup)` retorna fitxers que contenen `meeting` però no _alhora_ `work` i `meetup`.

Per filtrar resultats utilitzant els operadors menor que (`<`) i major que (`>`), envolta'ls amb claudàtors (`[]`) o cometes (`""`):

- `meeting [duration:<5]` retorna fitxers on meeting és present, i duration és menor que 5.
- `meeting [duration:>5]` retorna fitxers on meeting és present, i duration és major que 5.

> [!tip]- Explica el terme de cerca
> Si necessites depurar un terme de cerca complex, pots fer clic a **Explica el terme de cerca** a la Cerca per obtenir una explicació del teu terme de cerca.

## Operadors de cerca

Els operadors de cerca permeten termes de cerca més detallats per filtrar els resultats encara més.

Alguns operadors fins i tot et permeten afegir un terme de cerca imbricat dins de parèntesis, per exemple: `task:(call OR email)`.

| Operador de cerca | Descripció                                                                                                                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`           | Cerca text en el nom del fitxer. Coincideix amb qualsevol fitxer de la cambra forta.<p/>Exemple: `file:.jpg` o `file:202209`.                                                                                                                                                                                       |
| `path:`           | Cerca text en la ruta del fitxer. Coincideix amb qualsevol fitxer de la cambra forta.<p/>Exemple: `path:"Daily notes/2022-07"`.                                                                                                                                                                                     |
| `content:`        | Cerca text en el contingut del fitxer.<p/>Exemple: `content:"happy cat"`.                                                                                                                                                                                                                                          |
| `match-case:`     | Coincidència amb majúscules i minúscules.<p/>Exemple: `match-case:HappyCat`.                                                                                                                                                                                                                                       |
| `ignore-case:`    | Coincidència sense distinció de majúscules i minúscules.<p/>Exemple: `ignore-case:ikea`.                                                                                                                                                                                                                           |
| `tag:`            | Cerca etiqueta en el fitxer.<p/>Exemple: `tag:#work`.<p/>Tingues en compte que cercar `tag:#work` no retornarà resultats per `#myjob/work`.<br /><br />**Nota**: Com que `tag:` ignora les coincidències en blocs de codi i en contingut que no és Markdown, sovint és més ràpid i precís que una cerca de text complet normal per `#work`. |
| `line:`           | Cerca fitxers que continguin almenys una línia que coincideixi amb `x`.<p/>Exemple: `line:(mix flour)`.<p/><br>**Nota:** Utilitzar `-line` nega la cerca, és a dir, trobarà fitxers on cap línia coincideixi amb `x`.                                                                                               |
| `block:`          | Cerca coincidències en el mateix bloc.<p/>Exemple: `block:(dog cat)`.<p/>**Nota**: Com que `block:` requereix que la Cerca analitzi el contingut Markdown de cada fitxer, pot fer que el terme de cerca trigui més temps a completar-se.                                                                             |
| `section:`        | Cerca coincidències en la mateixa secció (text entre dos encapçalaments).<p/>Exemple: `section:(dog cat)`.                                                                                                                                                                                                         |
| `task:`           | Cerca coincidències en una [[Sintaxi de format bàsic#Llistes de tasques\|tasca]] bloc per bloc.<p/>Exemple: `task:call`.                                                                                                                                                                                           |
| `task-todo:`      | Cerca coincidències en una [[Sintaxi de format bàsic#Llistes de tasques\|tasca]] *no completada* bloc per bloc.<p/>Exemple: `task-todo:call`.                                                                                                                                                                      |
| `task-done:`      | Cerca coincidències en una [[Sintaxi de format bàsic#Llistes de tasques\|tasca]] *completada* bloc per bloc.<p/>Exemple: `task-done:call`.                                                                                                                                                                         |

## Cercar propietats

Pots utilitzar dades emmagatzemades a les [[Propietats]] en els teus termes de cerca.

Utilitza claudàtors al voltant del nom d'una propietat `[property]` per retornar fitxers amb aquella propietat:

- `[aliases]` retorna fitxers que contenen la propietat `aliases`

Utilitza claudàtors i dos punts `[property:value]` per retornar fitxers amb aquella propietat i valor:

- `[aliases:Name]` retorna fitxers on el valor de la propietat `aliases` és `Name`

Utilitza `null` com a valor per trobar propietats que no tenen cap valor:

- `[aliases:null]` retorna fitxers on la propietat `aliases` existeix però no té cap valor

> [!info]+ Valors buits
> L'operador `null` funciona quan una propietat està buida (p. ex., `aliases: `), però no quan la propietat conté cometes buides (`""`) o claudàtors buits (`[]`).

Tant la propietat com el valor permeten subconsultes, com ara parèntesis per agrupar, l'operador `OR`, cometes dobles per coincidència exacta, i expressions regulars.

- `[status:Draft OR Published]` retorna fitxers on el valor de la propietat `status` és `Draft` o `Published`

## Canviar la distinció de majúscules i minúscules

Per defecte, els termes de cerca no distingeixen entre majúscules i minúscules. Si vols cercar el cas exacte del teu terme de cerca, selecciona **Coincidència de majúscules i minúscules** ![[obsidian-icon-upper-lowercase.svg#icon]] dins la barra de cerca.

Aquesta configuració es pot alternar. Si la icona de **Coincidència de majúscules i minúscules** està ressaltada, significa que estàs fent una cerca amb distinció de majúscules i minúscules.

## Canviar l'ordre dels resultats

1. Introdueix un [[#Termes de cerca|terme de cerca]].
2. Sota el camp de cerca, selecciona el desplegable a la dreta.
3. Selecciona l'ordre que vulguis. Per defecte és "Ordena per nom de fitxer (A a Z)".

Les opcions disponibles són:

- Ordena per nom de fitxer (A a Z)
- Ordena per nom de fitxer (Z a A)
- Ordena per hora d'edició (nou a vell)
- Ordena per hora d'edició (vell a nou)
- Hora de creació (nou a vell)
- Hora de creació (vell a nou)

## Copiar els resultats de la cerca

1. Introdueix un [[#Termes de cerca|terme de cerca]].
2. Sota el camp de cerca, selecciona la icona de tres punts al costat del nombre de resultats.
3. Selecciona **Copia els resultats de la cerca**.

## Utilitzar expressions regulars

Una expressió regular és un conjunt de caràcters que descriuen un patró de text. Per utilitzar expressions regulars en el teu terme de cerca, envolta l'expressió amb barres inclinades (`/`).

- `/\d{4}-\d{2}-\d{2}/` coincideix amb una data ISO 8601, com ara 2022-01-01.

Fins i tot pots combinar expressions regulars amb operadors de cerca:

- `path:/\d{4}-\d{2}-\d{2}/` retorna fitxers amb una data a la ruta del fitxer.

Per a més informació sobre com escriure expressions regulars, consulta la [guia pràctica de Regex](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) de FreeCodeCamp o les [Expressions regulars](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) de Mozilla.

> [!info]+ Expressions regulars amb sabor JavaScript
> Les expressions regulars existeixen en diferents variants que poden semblar diferents entre si. Obsidian utilitza expressions regulars amb sabor JavaScript.

## Configurar la configuració de cerca

Per configurar la Cerca, selecciona **Configuració de cerca** ![[lucide-sliders-horizontal.svg#icon]] al costat dret de la barra de cerca per veure les opcions.

| Configuració              | Descripció                                                                  |
|---------------------------|-----------------------------------------------------------------------------|
| **Explica el terme de cerca** | Desglossa els termes de cerca i els explica en text sense format.           |
| **Redueix els resultats**     | Alterna si es mostra el context de la cerca.                                |
| **Mostra més context**        | Amplia el resultat de la cerca per mostrar més text al voltant de la coincidència. |

## Incrustar resultats de cerca en una nota

Per incrustar resultats de cerca en una nota, afegeix un bloc de codi `query`:

````
```query
embed OR search
```
````

[[Introducció a Obsidian Publish|Obsidian Publish]] no admet els [[Limitacions de Publish#Cerca|resultats de cerca]] incrustats. Per veure un exemple renderitzat en viu, utilitza el bloc de codi anterior dins la teva cambra forta.

![[search-query-rendered.png]]
