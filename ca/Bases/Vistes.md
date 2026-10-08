---
permalink: bases/views
---
Les vistes us permeten organitzar la informació d'una [[Introducció a Bases|Base]] de múltiples maneres. Una base pot contenir diverses vistes, i cada vista pot tenir una configuració única per mostrar, ordenar i filtrar fitxers.

Per exemple, podeu voler crear una base anomenada "Llibres" que tingui vistes separades per a "Llista de lectura" i "Acabats recentment".

## Barra d'eines

A la part superior d'una base hi ha una barra d'eines que us permet interactuar amb les vistes i els seus resultats.

- ![[lucide-table.svg#icon]] **Menú de vistes** — crear, editar i canviar de vista.
- **Resultats** — limitar, copiar i exportar fitxers.
- ![[lucide-arrow-up-down.svg#icon]] **Ordena** — ordena fitxers.
- ![[lucide-stretch-horizontal.svg#icon]] **Agrupa** — agrupa fitxers i gestiona l'ordre i la visibilitat dels grups.
- ![[lucide-list-filter.svg#icon]] **Filtre** — filtra fitxers.
- ![[lucide-list.svg#icon]] **Propietats** — escull les propietats a mostrar i crea [[Fórmules|fórmules]].
- ![[lucide-search.svg#icon]] **Cerca** — cerca elements utilitzant les seves propietats mostrades.
- ![[lucide-plus.svg#icon]] **Nou** — crea un fitxer nou a la vista actual.

Als telèfons, **Resultats**, **Ordena**, ![[lucide-stretch-horizontal.svg#icon]] **Agrupa** i **Propietats** es troben dins del menú ![[lucide-sliders-horizontal.svg#icon]] **Visualització**.

## Afegir i canviar de vista

Hi ha dues maneres d'afegir una vista a una base:

- Feu clic al nom de la vista a la part superior esquerra i seleccioneu ![[lucide-plus.svg#icon]] **Afegeix una vista**.
- Utilitzeu la [[Paleta d'ordres|paleta d'ordres]] i seleccioneu **Bases: Afegeix una vista**.

La primera vista de la vostra llista de vistes es carregarà per defecte. Arrossegueu les vistes per la seva icona per canviar-ne l'ordre.

## Configuració de la vista

Cada vista té les seves pròpies opcions de configuració. Per editar la configuració d'una vista:

1. Feu clic al nom de la vista a la part superior esquerra.
2. Feu clic a la fletxa dreta al costat de la vista que voleu configurar.

Alternativament, feu *clic dret* al nom de la vista a la barra d'eines de la base per accedir ràpidament a la configuració de la vista.

## Disposició

Les vistes es poden mostrar amb diferents disposicions, incloent ![[lucide-table.svg#icon]] **taula**, ![[lucide-list.svg#icon]] **llista**, ![[lucide-layout-grid.svg#icon]] **targetes**, ![[lucide-kanban-square.svg#icon]] **Kanban** i ![[lucide-map.svg#icon]] **mapa**. Es poden afegir disposicions addicionals mitjançant [[Connectors de la comunitat]].

| Disposició                    | Descripció                                                                                                                           | Versió de l'aplicació |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| [[Vista de taula\|Taula]]     | Mostra els fitxers com a files en una taula. Les columnes es poblen a partir de les [[Propietats|propietats]] de les vostres notes.  | 1.9                   |
| [[Vista de targetes\|Targetes]] | Mostra els fitxers com una graella de targetes. Us permet crear vistes tipus galeria amb imatges.                                   | 1.9                   |
| [[Vista de llista\|Llista]]   | Mostra els fitxers com una [[Sintaxi de format bàsic#Llistes\|llista]] amb vinyetes o números.                                      | 1.10                  |
| [[Vista Kanban\|Kanban]]      | Mostra els fitxers com a targetes organitzades en columnes basades en una propietat agrupada.                                        | 1.14                  |
| [[Vista de mapa\|Mapa]]       | Mostra els fitxers com a punts en un mapa interactiu. Requereix el connector Maps.                                                  | 1.10                  |


## Filtres

Obriu el menú ![[lucide-list-filter.svg#icon]] **Filtre** a la part superior d'una base per afegir filtres.

Una base sense filtres mostra tots els fitxers de la vostra cambra forta. Els filtres redueixen els resultats per mostrar només els fitxers que compleixen criteris específics. Per exemple, podeu utilitzar filtres per mostrar només fitxers amb una [[Etiquetes|etiqueta]] específica o dins d'una carpeta específica. Hi ha molts tipus de filtres disponibles.

Els filtres es poden aplicar a totes les vistes d'una base, o només a una vista individual, escollint entre les dues seccions del menú ![[lucide-list-filter.svg#icon]] **Filtre**.

- **Totes les vistes** aplica filtres a totes les vistes de la base.
- **Aquesta vista** aplica filtres a la vista activa.

#### Components d'un filtre

Els filtres tenen tres components:

1. **Propietat** — us permet escollir una [[Propietats|propietat]] de la vostra cambra forta, incloent les [[Sintaxi de Bases#Propietats del fitxer|propietats del fitxer]].
2. **Operador** — us permet escollir com comparar les condicions. La llista d'operadors disponibles depèn del tipus de propietat (text, data, número, etc.)
3. **Valor** — us permet escollir el valor amb el qual esteu comparant. Els valors poden incloure matemàtiques i [[Funcions|funcions]].

#### Conjuncions

- **Totes les següents són certes** és una declaració `and` — els resultats només es mostraran si es compleixen *totes* les condicions del grup de filtres.
- **Qualsevol de les següents és certa** és una declaració `or` — els resultats es mostraran si es compleix *qualsevol* de les condicions del grup de filtres.
- **Cap de les següents és certa** és una declaració `not` — els resultats no es mostraran si es compleix *qualsevol* de les condicions del grup de filtres.

#### Grups de filtres

Els grups de filtres us permeten crear lògica més complexa creant combinacions de conjuncions.

#### Editor de filtres avançat

Feu clic al botó de codi ![[lucide-code-xml.svg#icon]] per utilitzar l'editor de **filtre avançat**. Això mostra la [[Sintaxi de Bases|sintaxi]] en brut del filtre, i es pot utilitzar amb [[Funcions|funcions]] més complexes que no es poden mostrar mitjançant la interfície de clic.

## Ordenar i agrupar resultats

Utilitzeu el menú ![[lucide-arrow-up-down.svg#icon]] **Ordena** per organitzar els resultats, i el menú ![[lucide-stretch-horizontal.svg#icon]] **Agrupa** per organitzar elements similars en seccions.

Podeu organitzar els resultats per una o més propietats en ordre ascendent o descendent. Això facilita llistar notes per nom, darrera hora d'edició o qualsevol altra propietat — incloent fórmules.

Cada vista pot tenir diverses ordenacions, però només pot agrupar els resultats per una sola propietat.

### Afegir una ordenació

1. Obriu el menú ![[lucide-arrow-up-down.svg#icon]] **Ordena** a la part superior de la vista.
2. Seleccioneu **Afegeix ordenació**, després escolliu la propietat per la qual voleu ordenar.
3. Si teniu múltiples ordenacions, arrossegueu-les amunt o avall utilitzant el mànec ![[lucide-grip-vertical.svg#icon]] per canviar-ne la prioritat.

Les opcions per ordenar els resultats depenen del tipus de propietat:

- **Text**: ordena *per ordre alfabètic* (A→Z) o en *ordre alfabètic invers* (Z→A).
- **Número**: ordena de *més petit a més gran* (0→1) o de *més gran a més petit* (1→0).
- **Data i hora**: ordena de *vell a nou*, o de *nou a antic*.

### Eliminar una ordenació

1. Obriu el menú ![[lucide-arrow-up-down.svg#icon]] **Ordena** a la part superior de la vista.
2. Seleccioneu el botó de paperera ![[lucide-trash-2.svg#icon]] al costat de l'ordenació que voleu eliminar.

### Agrupar resultats

1. Obriu el menú ![[lucide-stretch-horizontal.svg#icon]] **Agrupa** a la part superior de la vista. Als telèfons, obriu **Visualització → Agrupa**.
2. Sota **Agrupa per**, escolliu una propietat.
3. Escolliu un ordre automàtic, o seleccioneu **Manual** per ordenar els grups vosaltres mateixos.

Per deixar d'agrupar els resultats, seleccioneu el botó de paperera ![[lucide-trash-2.svg#icon]] al costat de la propietat d'agrupació.

### Reordenar, amagar i afegir grups

Al menú ![[lucide-stretch-horizontal.svg#icon]] **Agrupa**, seleccioneu **Manual** al menú d'ordre per gestionar quins grups apareixen i en quin ordre.

- Marqueu un grup per mostrar-lo, o desmarqueu-lo per amagar-lo. Seleccioneu **Mostra-ho tot** o **Amaga-ho tot** per canviar la visibilitat de tots els grups.
- Arrossegueu el mànec ![[lucide-grip-vertical.svg#icon]] al costat d'un grup per canviar-ne la posició.
- Seleccioneu **Afegeix un grup** i introduïu un valor per mostrar un grup nou i buit. Això no crea una nota ni modifica les notes existents.

Per restaurar l'ordre automàtic dels grups i mostrar-los tots, escolliu un ordre automàtic en lloc de **Manual**.

### Contraure grups

A les disposicions de [[Vista de taula|taula]], [[Vista de targetes|targetes]] i [[Vista de llista|llista]], seleccioneu l'encapçalament d'un grup per contraure'l o expandir-lo. Contraure un grup amaga temporalment els seus elements sense canviar-ne les propietats.

## Limitar, copiar i exportar resultats

### Limitar resultats

El menú de *resultats* mostra el nombre de resultats a la vista. Feu clic al botó de resultats per limitar el nombre de resultats i accedir a accions addicionals.

### Copia-ho al porta-retalls

Aquesta acció copia la vista al vostre porta-retalls. Un cop al porta-retalls, podeu enganxar-ho en un fitxer Markdown o en altres aplicacions de documents, incloent fulls de càlcul com Google Sheets, Excel i Numbers.

### Exportar CSV

Aquesta acció desa un CSV de la vostra vista actual.

## Incrustar una vista

Podeu incrustar fitxers de base en [[Incrustar fitxers|qualsevol altre fitxer]] utilitzant la sintaxi `![[Fitxer.base]]`. S'utilitzarà la primera vista de la llista. Podeu canviar l'ordre arrossegant les vistes al menú de vistes.

Per especificar la vista per defecte d'una incrustació, utilitzeu `![[Fitxer.base#Vista]]`.
