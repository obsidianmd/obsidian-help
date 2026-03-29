---
permalink: cli
description: Qualsevol cosa que pugueu fer a Obsidian es pot fer des de la línia d'ordres.
---
La CLI d'Obsidian és una interfície de línia d'ordres que et permet controlar Obsidian des del teu terminal per a scripting, automatització i integració amb eines externes.

Qualsevol cosa que puguis fer a Obsidian, la pots fer des de la línia d'ordres. La CLI d'Obsidian fins i tot inclou [[#Ordres per a desenvolupadors|ordres per a desenvolupadors]] per accedir a eines de desenvolupament, inspeccionar elements, fer captures de pantalla, recarregar connectors, i molt més.

![[obsidian-cli.mp4#interface]]

> [!warning] Requereix l'instal·lador d'Obsidian 1.12
> L'ús de la CLI requereix l'instal·lador d'Obsidian 1.12. Consulta la [[Actualitza Obsidian#Actualitzacions de l'instal·lador|guia d'actualització de la versió de l'instal·lador]].

## Instal·lar la CLI d'Obsidian

Actualitza a la darrera [[Actualitza Obsidian|versió de l'instal·lador d'Obsidian]] (1.11.7) i a la darrera [[Versions d'accés anticipat|versió d'accés anticipat]] (1.12.x).

Activa la CLI d'Obsidian a Obsidian:

1. Ves a **Configuració** → **General**.
2. Activa **Interfície de línia d'ordres**.
3. Segueix les instruccions per registrar la CLI d'Obsidian.

Si tens problemes instal·lant la CLI d'Obsidian, consulta [[#Resolució de problemes]].

## Primers passos

La CLI d'Obsidian admet tant ordres individuals com una interfície d'usuari de terminal (TUI) amb ajuda interactiva i compleció automàtica.

> [!info] L'aplicació Obsidian ha d'estar en execució
> La CLI d'Obsidian requereix que l'aplicació Obsidian estigui en execució. Si Obsidian no s'està executant, la primera ordre que executis iniciarà Obsidian.
>
> Vols sincronitzar sense l'aplicació d'escriptori? Consulta [[Sync sense interfície|Obsidian sense interfície]].

### Executar una ordre

Executa una ordre individual sense obrir la TUI:

```shell
# Executa l'ordre d'ajuda
obsidian help
```

### Utilitzar la interfície de terminal

Utilitza la TUI escrivint `obsidian`. Les ordres posteriors es poden introduir sense `obsidian`.

```shell
# Obre la TUI, després executa help
obsidian
help
```

La TUI admet compleció automàtica, historial d'ordres i cerca inversa. Utilitza `Ctrl+R` per cercar al teu historial d'ordres. Consulta [[#Dreceres de teclat]] per a totes les dreceres disponibles.

## Exemples

Aquí tens alguns exemples del que pot fer la CLI d'Obsidian.

### Ús quotidià

```shell
# Obre la nota diària d'avui
obsidian daily

# Afegeix una tasca a la teva nota diària
obsidian daily:append content="- [ ] Comprar queviures"

# Cerca a la teva cambra forta
obsidian search query="notes de reunió"

# Llegeix el fitxer actiu
obsidian read

# Llista totes les tasques de la teva nota diària
obsidian tasks daily

# Crea una nova nota a partir d'una plantilla
obsidian create name="Viatge a París" template=Viatge

# Llista totes les etiquetes de la teva cambra forta amb recomptes
obsidian tags counts

# Compara dues versions d'un fitxer
obsidian diff file=README from=1 to=3
```

### Per a desenvolupadors

Moltes [[#Ordres per a desenvolupadors]] estan disponibles per al desenvolupament de connectors i temes. Aquestes ordres permeten que eines de codificació agentiva puguin provar i depurar automàticament.

```shell
# Obre les eines de desenvolupament
obsidian devtools

# Recarrega un connector de la comunitat que estàs desenvolupant
obsidian plugin:reload id=my-plugin

# Fes una captura de pantalla de l'aplicació
obsidian dev:screenshot path=screenshot.png

# Executa JavaScript a la consola de l'aplicació
obsidian eval code="app.vault.getFiles().length"
```

## Com fer-ho

### Utilitzar paràmetres i indicadors

Les ordres poden utilitzar **paràmetres** i **indicadors**. La majoria d'ordres no requereixen cap paràmetre ni indicador. Els paràmetres obligatoris estan marcats com a `required`. Per exemple:

```shell
# Crea una nova nota amb el nom per defecte "Sense títol"
obsidian create
```

Un **paràmetre** pren un valor, escrit com a `paràmetre=valor`. Si el valor conté espais, envolta'l entre cometes:

```shell
# Crea una nova nota anomenada "Nota" amb contingut "Hola món"
obsidian create name=Nota content="Hola món"
```

Un **indicador** és un commutador booleà sense valor. Inclou-lo per activar-lo, per exemple `open` i `overwrite` són indicadors:

```shell
# Crea una nota i obre-la
obsidian create name=Nota content="Hola" open overwrite
```

Per a contingut multilínia utilitza `\n` per a salt de línia. Utilitza `\t` per a tabulació.

```bash
obsidian create name=Nota content="# Títol\n\nCos del text"
```

### Apuntar a una cambra forta

Si el directori de treball actual del teu terminal és una carpeta de cambra forta, s'utilitza aquesta cambra forta per defecte. En cas contrari, s'utilitza la cambra forta activa actualment.

Utilitza `vault=<nom>` o `vault=<id>` per apuntar a una cambra forta específica. Això ha de ser el primer paràmetre abans de la teva ordre:

```shell
obsidian vault=Notes daily
obsidian vault="La meva cambra forta" search query="prova"
```

A la TUI, utilitza `vault:open <nom>` o `<id>` per canviar a una cambra forta diferent.

### Apuntar a un fitxer

Moltes ordres accepten paràmetres `file` i `path` per apuntar a un fitxer específic. Si no se'n proporciona cap, l'ordre s'aplica al fitxer actiu per defecte.

- `file=<nom>` resol el fitxer utilitzant la mateixa resolució d'enllaços que els [[Enllaços interns|enllaços wiki]], fent coincidir pel nom del fitxer sense requerir la ruta completa ni l'extensió.
- `path=<ruta>` requereix la ruta exacta des de l'arrel de la cambra forta, p. ex. `carpeta/nota.md`.

```shell
# Això és equivalent si "Recepta.md" és l'únic fitxer amb aquest nom
obsidian read file=Recepta
obsidian read path="Plantilles/Recepta.md"
```

### Copiar la sortida

Afegeix `--copy` a qualsevol ordre per copiar la sortida al porta-retalls:

```shell
read --copy
search query="PENDENT" --copy
```


## Ordres generals

### `help`

Mostra la llista de totes les ordres disponibles.

| Paràmetre   | Descripció                            |
| ----------- | ------------------------------------- |
| `<command>` | Mostra l'ajuda per a una ordre específica. |

### `version`

Mostra la versió d'Obsidian.

### `reload`

Recarrega la finestra de l'aplicació.

### `restart`

Reinicia l'aplicació.


## Bases

Ordres per a [[Introducció a Bases|Bases]].

### `bases`

Llista tots els fitxers `.base` de la cambra forta.

### `base:views`

Llista les vistes del fitxer base actual.

### `base:create`

Crea un nou element en una base. Per defecte utilitza la vista base activa si no s'especifica cap fitxer.

```bash
file=<name>        # nom del fitxer base
path=<path>        # ruta del fitxer base
view=<name>        # nom de la vista
name=<name>        # nom del nou fitxer
content=<text>     # contingut inicial

open               # obre el fitxer després de crear-lo
newtab             # obre en una nova pestanya
```

### `base:query`

Consulta una base i retorna resultats.

```bash
file=<name>                    # nom del fitxer base
path=<path>                    # ruta del fitxer base
view=<name>                    # nom de la vista a consultar
format=json|csv|tsv|md|paths   # format de sortida (per defecte: json)
```

## Marcadors

Ordres per a [[Marcadors]].

### `bookmarks`

Llista els marcadors.

```bash
total              # retorna el recompte de marcadors
verbose            # inclou els tipus de marcadors
format=json|tsv|csv  # format de sortida (per defecte: tsv)
```

### `bookmark`

Afegeix un marcador.

```bash
file=<path>        # fitxer a marcar
subpath=<subpath>  # subruta (encapçalament o bloc) dins del fitxer
folder=<path>      # carpeta a marcar
search=<query>     # consulta de cerca a marcar
url=<url>          # URL a marcar
title=<title>      # títol del marcador
```

## Paleta d'ordres

Ordres per a la [[Paleta d'ordres]] i les [[Tecles d'accés ràpid]]. Això inclou totes les ordres registrades pels connectors.

### `commands`

Llista els ID d'ordres disponibles.

```bash
filter=<prefix>    # filtra per prefix d'ID
```

### `command`

Executa una ordre d'Obsidian.

```bash
id=<command-id>    # (required) ID de l'ordre a executar
```

### `hotkeys`

Llista les dreceres de teclat per a totes les ordres.

```bash
total              # retorna el recompte de dreceres
verbose            # mostra si la drecera és personalitzada
format=json|tsv|csv  # format de sortida (per defecte: tsv)
```

### `hotkey`

Obté la drecera de teclat per a una ordre.

```bash
id=<command-id>    # (required) ID de l'ordre

verbose            # mostra si és personalitzada o per defecte
```

## Notes diàries

Ordres per a [[Notes diàries]].

### `daily`

Obre la nota diària.

```bash
paneType=tab|split|window    # tipus de panell on obrir
```

### `daily:path`

Obté la ruta de la nota diària. Retorna la ruta esperada encara que el fitxer no s'hagi creat.

### `daily:read`

Llegeix el contingut de la nota diària.

### `daily:append`

Afegeix contingut al final de la nota diària.

```bash
content=<text>     # (required) contingut a afegir
paneType=tab|split|window    # tipus de panell on obrir

inline             # afegeix sense salt de línia
open               # obre el fitxer després d'afegir
```

### `daily:prepend`

Afegeix contingut al principi de la nota diària.

```bash
content=<text>     # (required) contingut a afegir al principi
paneType=tab|split|window    # tipus de panell on obrir

inline             # afegeix sense salt de línia
open               # obre el fitxer després d'afegir
```

## Historial de fitxers

### `diff`

Llista o compara versions de la [[Recuperació de fitxers|Recuperació de fitxers]] local i [[Introducció a Obsidian Sync|Sync]]. Les versions estan numerades de la més nova a la més antiga.

```bash
file=<name>          # nom del fitxer
path=<path>          # ruta del fitxer
from=<n>             # número de versió des d'on comparar
to=<n>               # número de versió fins on comparar
filter=local|sync    # filtra per font de la versió
```

**Exemples:**

```shell
# Llista totes les versions del fitxer actiu
diff

# Llista totes les versions d'un fitxer específic
diff file=Recepta

# Compara la darrera versió amb el fitxer actual
diff file=Recepta from=1

# Compara dues versions
diff file=Recepta from=2 to=1

# Mostra només les versions de Sync
diff filter=sync
```

### `history`

Llista versions només de [[Recuperació de fitxers]]. Consulta [[#Sync|sync:history]] per a l'ordre equivalent de Sync.

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
```

### `history:list`

Llista tots els fitxers amb historial local.

### `history:read`

Llegeix una versió de l'historial local.

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
version=<n>        # número de versió (per defecte: 1)
```

### `history:restore`

Restaura una versió de l'historial local.

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
version=<n>        # (required) número de versió
```

### `history:open`

Obre la recuperació de fitxers.

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
```

## Fitxers i carpetes

### `file`

Mostra informació del fitxer (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
```

Exemple:

```
path       Notes/Recepta.md
name       Recepta
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Llista els fitxers de la cambra forta.

```bash
folder=<path>      # filtra per carpeta
ext=<extension>    # filtra per extensió

total              # retorna el recompte de fitxers
```

### `folder`

Mostra informació de la carpeta.

```bash
path=<path>              # (required) ruta de la carpeta
info=files|folders|size  # retorna només informació específica
```

### `folders`

Llista les carpetes de la cambra forta.

```bash
folder=<path>      # filtra per carpeta pare

total              # retorna el recompte de carpetes
```

### `open`

Obre un fitxer.

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer

newtab             # obre en una nova pestanya
```

### `create`

Crea o sobreescriu un fitxer.

```bash
name=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
content=<text>     # contingut inicial
template=<name>    # plantilla a utilitzar

overwrite          # sobreescriu si el fitxer existeix
open               # obre el fitxer després de crear-lo
newtab             # obre en una nova pestanya
```

### `read`

Llegeix el contingut del fitxer (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
```

### `append`

Afegeix contingut al final d'un fitxer (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
content=<text>     # (required) contingut a afegir

inline             # afegeix sense salt de línia
```

### `prepend`

Afegeix contingut al principi després de les metadades inicials (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
content=<text>     # (required) contingut a afegir al principi

inline             # afegeix sense salt de línia
```

### `move`

Mou o canvia el nom d'un fitxer (per defecte: fitxer actiu). Això actualitzarà automàticament els [[Enllaços interns|enllaços interns]] si està activat a la [[Configuració#Sempre actualitza els enllaços interns|configuració de la cambra forta]].

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
to=<path>          # (required) carpeta o ruta de destinació
```

### `rename`

Canvia el nom d'un fitxer (per defecte: fitxer actiu). L'extensió del fitxer es conserva automàticament si s'omet del nou nom. Utilitza [[#`move`|move]] per canviar el nom i moure un fitxer alhora. Això actualitzarà automàticament els [[Enllaços interns|enllaços interns]] si està activat a la [[Configuració#Sempre actualitza els enllaços interns|configuració de la cambra forta]].

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
name=<name>        # (required) nou nom del fitxer
```

### `delete`

Suprimeix un fitxer (per defecte: fitxer actiu, a la paperera per defecte).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer

permanent          # omet la paperera, suprimeix permanentment
```

## Enllaços

Ordres per a [[Retroenllaços]] i [[Enllaços sortints]].

### `backlinks`

Llista els enllaços inversos a un fitxer (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer objectiu
path=<path>        # ruta del fitxer objectiu

counts             # inclou recomptes d'enllaços
total              # retorna el recompte d'enllaços inversos
format=json|tsv|csv  # format de sortida (per defecte: tsv)
```

### `links`

Llista els enllaços sortints d'un fitxer (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer

total              # retorna el recompte d'enllaços
```

### `unresolved`

Llista els enllaços no resolts de la cambra forta.

```bash
total              # retorna el recompte d'enllaços no resolts
counts             # inclou recomptes d'enllaços
verbose            # inclou fitxers font
format=json|tsv|csv  # format de sortida (per defecte: tsv)
```

### `orphans`

Llista els fitxers sense enllaços entrants.

```bash
total              # retorna el recompte d'òrfes
```

### `deadends`

Llista els fitxers sense enllaços sortints.

```bash
total              # retorna el recompte de fitxers sense sortida
```

## Esquema

Ordres per a l'[[Esquema]].

### `outline`

Mostra els encapçalaments del fitxer actual.

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
format=tree|md|json  # format de sortida (per defecte: tree)

total              # retorna el recompte d'encapçalaments
```

## Connectors

Ordres per als [[Connectors principals]] i els [[Connectors de la comunitat]].

### `plugins`

Llista els connectors instal·lats.

```bash
filter=core|community  # filtra per tipus de connector

versions               # inclou números de versió
format=json|tsv|csv    # format de sortida (per defecte: tsv)
```

### `plugins:enabled`

Llista els connectors activats.

```bash
filter=core|community  # filtra per tipus de connector

versions               # inclou números de versió
format=json|tsv|csv    # format de sortida (per defecte: tsv)
```

### `plugins:restrict`

Commuta o comprova el mode restringit.

```bash
on                 # activa el mode restringit
off                # desactiva el mode restringit
```

### `plugin`

Obté informació d'un connector.

```bash
id=<plugin-id>     # (required) ID del connector
```

### `plugin:enable`

Activa un connector.

```bash
id=<id>                # (required) ID del connector
filter=core|community  # tipus de connector
```

### `plugin:disable`

Desactiva un connector.

```bash
id=<id>                # (required) ID del connector
filter=core|community  # tipus de connector
```

### `plugin:install`

Instal·la un connector de la comunitat.

```bash
id=<id>            # (required) ID del connector

enable             # activa després d'instal·lar
```

### `plugin:uninstall`

Desinstal·la un connector de la comunitat.

```bash
id=<id>            # (required) ID del connector
```

### `plugin:reload`

Recarrega un connector (per a desenvolupadors).

```bash
id=<id>            # (required) ID del connector
```

## Propietats

Ordres relacionades amb les [[Propietats]].

### `aliases`

Llista els àlies de la cambra forta. Utilitza `active` o `file`/`path` per mostrar els àlies d'un fitxer específic.

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer

total              # retorna el recompte d'àlies
verbose            # inclou rutes de fitxers
active             # mostra els àlies del fitxer actiu
```

### `properties`

Llista les propietats de la cambra forta. Utilitza `active` o `file`/`path` per mostrar les propietats d'un fitxer específic.

```bash
file=<name>        # mostra propietats del fitxer
path=<path>        # mostra propietats de la ruta
name=<name>        # obté el recompte d'una propietat específica
sort=count         # ordena per recompte (per defecte: nom)
format=yaml|json|tsv  # format de sortida (per defecte: yaml)

total              # retorna el recompte de propietats
counts             # inclou recomptes d'ocurrències
active             # mostra propietats del fitxer actiu
```

### `property:set`

Estableix una propietat en un fitxer (per defecte: fitxer actiu).

```bash
name=<name>                                    # (required) nom de la propietat
value=<value>                                  # (required) valor de la propietat
type=text|list|number|checkbox|date|datetime   # tipus de propietat
file=<name>                                    # nom del fitxer
path=<path>                                    # ruta del fitxer
```

### `property:remove`

Elimina una propietat d'un fitxer (per defecte: fitxer actiu).

```bash
name=<name>        # (required) nom de la propietat
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
```

### `property:read`

Llegeix el valor d'una propietat d'un fitxer (per defecte: fitxer actiu).

```bash
name=<name>        # (required) nom de la propietat
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
```

## Publish

Ordres per a [[Introducció a Obsidian Publish|Obsidian Publish]].

### `publish:site`

Mostra informació del lloc de publicació (slug, URL).

### `publish:list`

Llista els fitxers publicats.

```bash
total              # retorna el recompte de fitxers publicats
```

### `publish:status`

Llista els canvis de publicació.

```bash
total              # retorna el recompte de canvis
new                # mostra només fitxers nous
changed            # mostra només fitxers canviats
deleted            # mostra només fitxers eliminats
```

### `publish:add`

Publica un fitxer o tots els fitxers canviats (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer

changed            # publica tots els fitxers canviats
```

### `publish:remove`

Despublica un fitxer (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
```

### `publish:open`

Obre el fitxer al lloc publicat (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
```

## Notes aleatòries

Ordres per a [[Nota aleatòria]].

### `random`

Obre una nota aleatòria.

```bash
folder=<path>      # limita a una carpeta

newtab             # obre en una nova pestanya
```

### `random:read`

Llegeix una nota aleatòria (inclou la ruta).

```bash
folder=<path>      # limita a una carpeta
```

## Cerca

Ordres per a [[Cerca]].

### `search`

Cerca text a la cambra forta. Retorna rutes de fitxers coincidents.

```bash
query=<text>       # (required) consulta de cerca
path=<folder>      # limita a una carpeta
limit=<n>          # nombre màxim de fitxers
format=text|json   # format de sortida (per defecte: text)

total              # retorna el recompte de coincidències
case               # coincidència amb majúscules i minúscules
```

### `search:context`

Cerca amb context de línia coincident. Retorna sortida estil grep `ruta:línia: text`.

```bash
query=<text>       # (required) consulta de cerca
path=<folder>      # limita a una carpeta
limit=<n>          # nombre màxim de fitxers
format=text|json   # format de sortida (per defecte: text)

case               # coincidència amb majúscules i minúscules
```

### `search:open`

Obre la vista de cerca.

```bash
query=<text>       # consulta de cerca inicial
```

## Sync

Ordres per a [[Introducció a Obsidian Sync|Obsidian Sync]].

> [!tip] Sincronitza sense l'aplicació d'escriptori
> Aquestes ordres controlen Sync dins de l'aplicació Obsidian en execució. Per sincronitzar cambres fortes des de la línia d'ordres sense l'aplicació d'escriptori, consulta [[Sync sense interfície]].

### `sync`

Pausa o reprèn la sincronització.

```bash
on                 # reprèn la sincronització
off                # pausa la sincronització
```

### `sync:status`

Mostra l'estat i l'ús de la sincronització.

### `sync:history`

Llista l'historial de versions de sincronització per a un fitxer (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer

total              # retorna el recompte de versions
```

### `sync:read`

Llegeix una versió de sincronització (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
version=<n>        # (required) número de versió
```

### `sync:restore`

Restaura una versió de sincronització (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
version=<n>        # (required) número de versió
```

### `sync:open`

Obre l'historial de sincronització (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
```

### `sync:deleted`

Llista els fitxers eliminats a la sincronització.

```bash
total              # retorna el recompte de fitxers eliminats
```

## Etiquetes

Ordres per a les [[Etiquetes]].

### `tags`

Llista les etiquetes de la cambra forta. Utilitza `active` o `file`/`path` per mostrar les etiquetes d'un fitxer específic.

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
sort=count         # ordena per recompte (per defecte: nom)

total              # retorna el recompte d'etiquetes
counts             # inclou recomptes d'etiquetes
format=json|tsv|csv  # format de sortida (per defecte: tsv)
active             # mostra etiquetes del fitxer actiu
```

### `tag`

Obté informació d'una etiqueta.

```bash
name=<tag>         # (required) nom de l'etiqueta

total              # retorna el recompte d'ocurrències
verbose            # inclou llista de fitxers i recompte
```

## Tasques

Ordres per a la gestió de tasques.

### `tasks`

Llista les tasques de la cambra forta. Utilitza `active` o `file`/`path` per mostrar les tasques d'un fitxer específic.

```bash
file=<name>        # filtra per nom de fitxer
path=<path>        # filtra per ruta de fitxer
status="<char>"    # filtra per caràcter d'estat

total              # retorna el recompte de tasques
done               # mostra tasques completades
todo               # mostra tasques incompletes
verbose            # agrupa per fitxer amb números de línia
format=json|tsv|csv  # format de sortida (per defecte: text)
active             # mostra tasques del fitxer actiu
daily              # mostra tasques de la nota diària
```

**Exemples:**

```bash
# Llista totes les tasques de la cambra forta
tasks

# Llista tasques incompletes de la cambra forta
tasks todo

# Llista tasques completades d'un fitxer específic
tasks file=Recepta done

# Llista tasques de la nota diària d'avui
tasks daily

# Compta tasques de la nota diària
tasks daily total

# Llista tasques amb rutes de fitxer i números de línia
tasks verbose

# Filtra per estat personalitzat (posa entre cometes els caràcters especials)
tasks 'status=?'
```

### `task`

Mostra o actualitza una tasca.

```bash
ref=<path:line>    # referència de la tasca (ruta:línia)
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer
line=<n>           # número de línia
status="<char>"    # estableix el caràcter d'estat

toggle             # commuta l'estat de la tasca
daily              # nota diària
done               # marca com a fet
todo               # marca com a pendent
```

**Exemples:**

```bash
# Mostra informació de la tasca
task file=Recepta line=8
task ref="Recepta.md:8"

# Commuta la compleció de la tasca
task ref="Recepta.md:8" toggle

# Commuta una tasca de la nota diària
task daily line=3 toggle

# Estableix l'estat de la tasca
task file=Recepta line=8 done      # → [x]
task file=Recepta line=8 todo      # → [ ]
task file=Recepta line=8 status=-  # → [-]
task daily line=3 done             # Marca la tasca de la nota diària com a feta
```


## Plantilles

Ordres per a les [[Plantilles|Plantilles]].

### `templates`

Llista les plantilles.

```bash
total              # retorna el recompte de plantilles
```

### `template:read`

Llegeix el contingut d'una plantilla.

```bash
name=<template>    # (required) nom de la plantilla
title=<title>      # títol per a la resolució de variables

resolve            # resol les variables de la plantilla
```

### `template:insert`

Insereix una plantilla al fitxer actiu.

```bash
name=<template>    # (required) nom de la plantilla
```

**Notes:**
- L'opció `resolve` processa les variables `{{date}}`, `{{time}}`, `{{title}}`
- Utilitza `create path=<ruta> template=<nom>` per crear un fitxer amb una plantilla

## Temes i fragments

Ordres per a [[Temes]] i [[Pedaços de CSS]].

### `themes`

Llista els temes instal·lats.

```bash
versions           # inclou números de versió
```

### `theme`

Mostra el tema actiu o obté informació.

```bash
name=<name>        # nom del tema per a detalls
```

### `theme:set`

Estableix el tema actiu.

```bash
name=<name>        # (required) nom del tema (buit per al per defecte)
```

### `theme:install`

Instal·la un tema de la comunitat.

```bash
name=<name>        # (required) nom del tema

enable             # activa després d'instal·lar
```

### `theme:uninstall`

Desinstal·la un tema.

```bash
name=<name>        # (required) nom del tema
```

### `snippets`

Llista els fragments CSS instal·lats.

### `snippets:enabled`

Llista els fragments CSS activats.

### `snippet:enable`

Activa un fragment CSS.

```bash
name=<name>        # (required) nom del fragment
```

### `snippet:disable`

Desactiva un fragment CSS.

```bash
name=<name>        # (required) nom del fragment
```

## Notes úniques

Ordres per al [[Creador de notes úniques]].

### `unique`

Crea una nota única.

```bash
name=<text>        # nom de la nota
content=<text>     # contingut inicial
paneType=tab|split|window    # tipus de panell on obrir

open               # obre el fitxer després de crear-lo
```

## Cambra forta

### `vault`

Mostra informació de la cambra forta.

```bash
info=name|path|files|folders|size  # retorna només informació específica
```

### `vaults`

Llista les cambres fortes conegudes.

```bash
total              # retorna el recompte de cambres fortes
verbose            # inclou rutes de les cambres fortes
```

### `vault:open`

Canvia a una cambra forta diferent (només TUI).

```bash
name=<name>        # (required) nom de la cambra forta
```

## Visor web

Ordres per al [[Visor web]].

### `web`

Obre una URL al visor web.

```bash
url=<url>          # (required) URL a obrir

newtab             # obre en una nova pestanya
```

## Comptador de paraules

Ordres per al [[Comptador de paraules]].

### `wordcount`

Compta paraules i caràcters (per defecte: fitxer actiu).

```bash
file=<name>        # nom del fitxer
path=<path>        # ruta del fitxer

words              # retorna només el recompte de paraules
characters         # retorna només el recompte de caràcters
```

## Espai de treball

Ordres per a l'[[Espai de treball]] i el connector [[Espais de treball]].

### `workspace`

Mostra l'arbre de l'espai de treball.

```bash
ids                # inclou ID dels elements de l'espai de treball
```

### `workspaces`

Llista els espais de treball desats.

```bash
total              # retorna el recompte d'espais de treball
```

### `workspace:save`

Desa la disposició actual com a espai de treball.

```bash
name=<name>        # nom de l'espai de treball
```

### `workspace:load`

Carrega un espai de treball desat.

```bash
name=<name>        # (required) nom de l'espai de treball
```

### `workspace:delete`

Suprimeix un espai de treball desat.

```bash
name=<name>        # (required) nom de l'espai de treball
```

### `tabs`

Llista les pestanyes obertes.

```bash
ids                # inclou ID de les pestanyes
```

### `tab:open`

Obre una nova pestanya.

```bash
group=<id>         # ID del grup de pestanyes
file=<path>        # fitxer a obrir
view=<type>        # tipus de vista a obrir
```

### `recents`

Llista els fitxers oberts recentment.

```bash
total              # retorna el recompte de fitxers recents
```

## Ordres per a desenvolupadors

Ordres per ajudar-te a desenvolupar [[Connectors de la comunitat]] i [[Temes]]. Aprèn'n més visitant la [Documentació per a desenvolupadors d'Obsidian](https://docs.obsidian.md).

### `devtools`

Commuta les eines de desenvolupament d'Electron.

### `dev:debug`

Adjunta/desadjunta el depurador del Chrome DevTools Protocol.

```bash
on                 # adjunta el depurador
off                # desadjunta el depurador
```

### `dev:cdp`

Executa una ordre del Chrome DevTools Protocol.

```bash
method=<CDP.method>  # (required) mètode CDP a cridar
params=<json>        # paràmetres del mètode en JSON
```

### `dev:errors`

Mostra els errors de JavaScript capturats.

```bash
clear              # esborra el búfer d'errors
```

### `dev:screenshot`

Fa una captura de pantalla (retorna PNG en base64).

```bash
path=<filename>    # ruta del fitxer de sortida
```

### `dev:console`

Mostra els missatges de consola capturats.

```bash
limit=<n>                        # nombre màxim de missatges a mostrar (per defecte 50)
level=log|warn|error|info|debug  # filtra per nivell de registre

clear                            # esborra el búfer de la consola
```

### `dev:css`

Inspecciona CSS amb ubicacions de font.

```bash
selector=<css>     # (required) selector CSS
prop=<name>        # filtra per nom de propietat
```

### `dev:dom`

Consulta elements del DOM.

```bash
selector=<css>     # (required) selector CSS
attr=<name>        # obté el valor d'un atribut
css=<prop>         # obté el valor d'una propietat CSS

total              # retorna el recompte d'elements
text               # retorna el contingut de text
inner              # retorna innerHTML en lloc d'outerHTML
all                # retorna totes les coincidències en lloc de la primera
```

### `dev:mobile`

Commuta l'emulació mòbil.

```bash
on                 # activa l'emulació mòbil
off                # desactiva l'emulació mòbil
```

### `eval`

Executa JavaScript i retorna el resultat.

```bash
code=<javascript>  # (required) codi JavaScript a executar
```

## Dreceres de teclat

Aquestes dreceres estan disponibles a la [[#Utilitzar la interfície de terminal|TUI]].

### Navegació

| Acció                                                 | Drecera        |
| ----------------------------------------------------- | -------------- |
| Mou el cursor a l'esquerra                            | `←` / `Ctrl+B` |
| Mou el cursor a la dreta (accepta suggeriment al final de la línia) | `→` / `Ctrl+F` |
| Salta a l'inici de la línia                           | `Ctrl+A`       |
| Salta al final de la línia                            | `Ctrl+E`       |
| Retrocedeix una paraula                               | `Alt+B`        |
| Avança una paraula                                    | `Alt+F`        |

### Edició

| Acció                          | Drecera                    |
| ------------------------------ | -------------------------- |
| Suprimeix fins a l'inici de la línia | `Ctrl+U`                   |
| Suprimeix fins al final de la línia  | `Ctrl+K`                   |
| Suprimeix la paraula anterior  | `Ctrl+W` / `Alt+Backspace` |

### Compleció automàtica

| Acció                                                  | Drecera     |
| ------------------------------------------------------ | ----------- |
| Entra en mode de suggeriments / accepta el suggeriment seleccionat | `Tab`       |
| Surt del mode de suggeriments                          | `Shift+Tab` |
| Entra en mode de suggeriments (des d'entrada buida)    | `↓`         |
| Accepta el primer/seleccionat suggeriment (al final de la línia) | `→`         |

### Historial

| Acció                                                          | Drecera        |
| -------------------------------------------------------------- | -------------- |
| Entrada d'historial anterior / navega suggeriments amunt       | `↑` / `Ctrl+P` |
| Entrada d'historial següent / navega suggeriments avall        | `↓` / `Ctrl+N` |
| Cerca inversa a l'historial (escriu per filtrar, `Ctrl+R` per ciclar) | `Ctrl+R`       |

### Altres

| Acció                                                  | Drecera             |
| ------------------------------------------------------ | ------------------- |
| Executa l'ordre o accepta el suggeriment               | `Enter`             |
| Desfés la compleció automàtica / surt del mode de suggeriments / esborra l'entrada | `Escape`            |
| Esborra la pantalla                                    | `Ctrl+L`            |
| Surt                                                   | `Ctrl+C` / `Ctrl+D` |

## Resolució de problemes

Si tens problemes executant la CLI d'Obsidian:

- Assegura't que estàs utilitzant la darrera [[Actualitza Obsidian|versió de l'instal·lador d'Obsidian]] (1.12.4 o superior).
- Reinicia el teu terminal després de registrar la CLI perquè els canvis al PATH tinguin efecte.
- Obsidian ha d'estar en execució. La CLI es connecta a la instància d'Obsidian en execució. Si Obsidian no s'està executant, la primera ordre de la CLI hauria d'iniciar l'aplicació.

### Windows

La CLI d'Obsidian a Windows requereix l'instal·lador d'Obsidian 1.12.4+. Consulta [[Actualitza Obsidian|Actualització de la versió de l'instal·lador]].

Windows utilitza un redirector de terminal que connecta Obsidian a stdin/stdout correctament. Això és necessari perquè Obsidian normalment s'executa com una aplicació GUI que és incompatible amb les sortides de terminal a Windows. Quan instal·lis Obsidian 1.12.4+, el redirector de terminal `Obsidian.com` s'afegirà a la carpeta on has instal·lat el fitxer `Obsidian.exe`.

### macOS

El registre de la CLI afegeix el directori binari d'Obsidian al teu PATH mitjançant `~/.zprofile`. Si tens problemes, comprova el següent:

El teu fitxer `~/.zprofile` hauria de contenir la línia següent. Si falta, pots afegir-la manualment:

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### Shells alternatius

El registre de la CLI només modifica `~/.zprofile`, que és utilitzat per zsh (el shell per defecte de macOS). Si utilitzes un shell diferent, afegeix el directori binari d'Obsidian al fitxer de configuració del teu shell manualment:

- Bash: afegeix `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` a `~/.bash_profile`
- Fish: executa `fish_add_path /Applications/Obsidian.app/Contents/MacOS`


### Linux

El registre de la CLI crea un enllaç simbòlic a `/usr/local/bin/obsidian` que apunta al binari d'Obsidian (requereix sudo).

#### AppImage

Per a instal·lacions AppImage, l'enllaç simbòlic apunta al fitxer `.AppImage` en lloc del binari intern, ja que la ruta de muntatge canvia a cada inici. Si sudo falla, l'enllaç simbòlic es crea a `~/.local/bin/obsidian` com a alternativa. Si tens problemes, comprova el següent.

Comprova que l'enllaç simbòlic existeix i apunta al binari correcte:

```
ls -l /usr/local/bin/obsidian
```

Si l'enllaç simbòlic falta, crea'l manualment:

```
sudo ln -s /path/to/obsidian /usr/local/bin/obsidian
```

Si l'enllaç simbòlic es va crear a `~/.local/bin/` en lloc, assegura't que aquest directori estigui al teu PATH. Afegeix el següent al teu `~/.bashrc` o `~/.zshrc`:

```
export PATH="$PATH:$HOME/.local/bin"
```

Si l'enllaç simbòlic es trenca després de moure o canviar el nom del fitxer `.AppImage`, torna a registrar la CLI o actualitza l'enllaç simbòlic manualment.

#### Snap

El paquet Snap emmagatzema les dades de compilacions Insider al seu propi directori de dades d'usuari. Si la CLI no detecta el fitxer `.asar` de compilacions Insider, estableix `XDG_CONFIG_HOME` perquè apunti a la ruta de configuració de Snap:

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

Afegeix això al teu `~/.bashrc` o `~/.zshrc` per fer-ho persistent.


#### Flatpak

Obsidian intenta fer-ho automàticament, però a continuació tens les instruccions manuals. Si és una instal·lació de sistema:

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

Si és una instal·lació d'usuari:

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
