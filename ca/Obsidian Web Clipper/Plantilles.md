---
permalink: web-clipper/templates
description: Apreneu a crear plantilles que capturin i organitzin automàticament les metadades de pàgines web amb Web Clipper.
---
[[Introducció a Obsidian Web Clipper|Web Clipper]] us permet crear plantilles que capturen i organitzen automàticament metadades de pàgines web. Trobareu plantilles d'exemple al [repositori clipper-templates](https://github.com/kepano/clipper-templates).

## Crear o editar una plantilla

Per **crear** una plantilla, aneu a la configuració del Web Clipper i feu clic al botó **Nova plantilla** a la barra lateral. També podeu **duplicar** una plantilla al menú **Més** accions a la cantonada superior dreta.

Per **editar** una plantilla, escolliu una plantilla de la barra lateral. Els vostres canvis es desaran automàticament.

Les plantilles fan ús de [[Variables]] i [[Filtres]], que us permeten personalitzar com es desarà el contingut.

## Importar i exportar plantilles del Web Clipper

Per importar una plantilla:

1. Obriu l'extensió i feu clic a la icona d'engranatge de **[[Configuració]]**.
2. Aneu a qualsevol plantilla de la llista.
3. Feu clic a **Importar** a la part superior dreta o arrossegueu i deixeu anar els vostres fitxers de plantilla `.json` en qualsevol lloc de l'àrea de plantilles.

Per exportar una plantilla, feu clic a **Exportar** a la part superior dreta. Això baixarà el fitxer `.json` de la plantilla. També podeu copiar les dades de la plantilla al porta-retalls mitjançant el menú **Més**.

## Configuració de les plantilles

### Comportament

Definiu com el contingut del Web Clipper s'afegirà a Obsidian:

- **Crear una nota nova**
- **Afegir a una nota existent**, a la part superior o inferior
- **Afegir a la nota diària**, a la part superior o inferior (requereix que el connector de [[Notes diàries]] estigui actiu)

### Activar automàticament una plantilla

Els activadors de plantilla us permeten seleccionar automàticament una plantilla basant-se en l'URL de la pàgina actual o en les dades de [schema.org](https://schema.org/). Podeu definir múltiples regles per a cada plantilla, separades per una línia nova.

La primera coincidència a la vostra llista de plantilles determina quina plantilla s'utilitza. Podeu arrossegar les plantilles amunt i avall a la configuració del Web Clipper per canviar l'ordre en què es fan coincidir les plantilles.

#### Coincidència simple d'URL

La coincidència simple activa una plantilla si l'URL de la pàgina actual *comença amb* el patró donat. Per exemple:

- `https://obsidian.md` coincidirà amb qualsevol URL que comenci amb aquest text.

#### Coincidència amb expressió regular

Podeu activar plantilles basant-vos en patrons d'URL més complexos utilitzant expressions regulars. Tanqueu el vostre patró d'expressió regular entre barres inclinades (`/`). Recordeu escapar els caràcters especials en patrons d'expressió regular (com `.` i `/`) amb una barra inversa (`\`). Per exemple:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` coincidirà amb qualsevol pàgina de referència d'IMDB.

#### Coincidència amb schema.org

Podeu activar plantilles basant-vos en les dades de [schema.org](https://schema.org/) presents a la pàgina. Utilitzeu el prefix `schema:` seguit de la clau d'schema que voleu fer coincidir. Opcionalment, podeu especificar un valor esperat. Per exemple:

- `schema:@Recipe` coincidirà amb pàgines on el tipus d'schema sigui "Recipe".
- `schema:@Recipe.name` coincidirà amb pàgines on `@Recipe.name` estigui present.
- `schema:@Recipe.name=Cookie` coincidirà amb pàgines on `@Recipe.name` sigui "Cookie".

Els valors de schema.org també es poden utilitzar per [[Variables#Variables Schema.org|omplir prèviament dades a les plantilles]].

### Context de l'intèrpret

Quan l'[[Interpretar pàgines web|Intèrpret]] està activat, podeu utilitzar [[Variables#Variables de sol·licitud|variables de petició]] per extreure contingut de la pàgina amb llenguatge natural. Per a cada plantilla podeu definir el [[Interpretar pàgines web#Context|context]] al qual l'intèrpret té accés.
