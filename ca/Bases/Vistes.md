---
permalink: bases/views
---
Les vistes us permeten organitzar la informació d'una [[Introducció a Bases|Base]] de múltiples maneres. Una base pot contenir diverses vistes, i cada vista pot tenir una configuració única per mostrar, ordenar i filtrar fitxers.

Per exemple, podeu voler crear una base anomenada "Llibres" que tingui vistes separades per a "Llista de lectura" i "Acabats recentment".

## Barra d'eines

A la part superior d'una base hi ha una barra d'eines que us permet interactuar amb les vistes i els seus resultats.

- ![[lucide-table.svg#icon]] **Menú de vistes** — crear, editar i canviar de vista.
- **Resultats** — limitar, copiar i exportar fitxers.
- ![[lucide-arrow-up-down.svg#icon]] **Ordena** — ordena i agrupa fitxers.
- ![[lucide-list-filter.svg#icon]] **Filtre** — filtra fitxers.
- ![[lucide-list.svg#icon]] **Propietats** — escull les propietats a mostrar i crea [[Fórmules|fórmules]].
- ![[lucide-search.svg#icon]] **Cerca** — cerca elements utilitzant les seves propietats mostrades.
- ![[lucide-plus.svg#icon]] **Nou** — crea un fitxer nou a la vista actual.

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

Les vistes es poden mostrar amb diferents disposicions, incloent ![[lucide-table.svg#icon]] **taula**, ![[lucide-list.svg#icon]] **llista**, ![[lucide-layout-grid.svg#icon]] **targetes** i ![[lucide-map.svg#icon]] **mapa**. Es poden afegir disposicions addicionals mitjançant [[Connectors de la comunitat]]. Algunes disposicions encara s'estan desenvolupant i requereixen [[Versions d'accés anticipat|versions d'accés anticipat]] d'Obsidian.

| Disposició                    | Descripció                                                                                                                           | Versió de l'aplicació |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| [[Vista de taula\|Taula]]     | Mostra els fitxers com a files en una taula. Les columnes es poblen a partir de les [[Propietats|propietats]] de les vostres notes.  | 1.9                   |
| [[Vista de targetes\|Targetes]] | Mostra els fitxers com una graella de targetes. Us permet crear vistes tipus galeria amb imatges.                                   | 1.9                   |
| [[Vista de llista\|Llista]]   | Mostra els fitxers com una [[Sintaxi de format bàsic#Llistes\|llista]] amb vinyetes o números.                                      | 1.10                  |
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

Obriu el menú ![[lucide-arrow-up-down.svg#icon]] **Ordena** per ordenar i agrupar els resultats d'una vista.

Podeu organitzar els resultats per una o més propietats en ordre ascendent o descendent. Això facilita llistar notes per nom, darrera hora d'edició o qualsevol altra propietat — incloent fórmules.

També podeu agrupar els resultats per una propietat per organitzar elements similars en seccions visualment diferenciades. Actualment, Obsidian permet agrupar per una sola propietat.

### Afegir una ordenació

1. Obriu el menú ![[lucide-arrow-up-down.svg#icon]] **Ordena** a la part superior de la vista.
2. Escolliu la propietat per la qual voleu ordenar (o agrupar).
3. Si teniu múltiples ordenacions, arrossegueu-les amunt o avall utilitzant el mànec ![[lucide-grip-vertical.svg#icon]] per canviar-ne la prioritat.

Les opcions per ordenar els resultats depenen del tipus de propietat:

- **Text**: ordena *per ordre alfabètic* (A→Z) o en *ordre alfabètic invers* (Z→A).
- **Número**: ordena de *més petit a més gran* (0→1) o de *més gran a més petit* (1→0).
- **Data i hora**: ordena de *vell a nou*, o de *nou a antic*.

### Eliminar una ordenació

1. Obriu el menú ![[lucide-arrow-up-down.svg#icon]] **Ordena** a la part superior de la vista.
2. Feu clic al botó de paperera ![[lucide-trash-2.svg#icon]] al costat de l'ordenació o agrupació que voleu eliminar.

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
