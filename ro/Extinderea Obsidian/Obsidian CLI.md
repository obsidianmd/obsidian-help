---
permalink: cli
description: Orice puteți face în Obsidian poate fi făcut din linia de comandă.
aliases:
  - Obsidian CLI
---
Obsidian CLI este o interfață de linie de comandă care vă permite să controlați Obsidian din terminal, pentru scripting, automatizare și integrare cu instrumente externe.

Orice puteți face în Obsidian puteți face din linia de comandă. Obsidian CLI include chiar [[#Comenzi pentru dezvoltatori|comenzi pentru dezvoltatori]] pentru a accesa instrumentele de dezvoltare, a inspecta elemente, a face capturi de ecran, a reîncărca module și multe altele.

![[obsidian-cli.mp4#interface]]

> [!warning] Necesită pachetul de instalare Obsidian 1.12
> Utilizarea CLI necesită pachetul de instalare Obsidian 1.12. Consultați [[Actualizează Obsidian#Actualizări ale pachetului de instalare|ghidul de actualizare a versiunii pachetului de instalare]].

## Instalați Obsidian CLI

Actualizați la cea mai recentă [[Actualizează Obsidian|versiune a pachetului de instalare Obsidian]] (1.12.7+).

Activați Obsidian CLI în Obsidian:

1. Mergeți la **Setări** → **General**.
2. Activați **Interfață în linie de comandă**.
3. Urmați instrucțiunile pentru a înregistra Obsidian CLI.

Dacă întâmpinați probleme la instalarea Obsidian CLI, consultați [[#Depanare]].

## Primii pași

Obsidian CLI acceptă atât comenzi individuale, cât și o interfață de utilizator în terminal (TUI) cu ajutor interactiv și completare automată.

> [!info] Aplicația Obsidian trebuie să ruleze
> Obsidian CLI necesită ca aplicația Obsidian să ruleze. Dacă Obsidian nu rulează, prima comandă pe care o executați lansează Obsidian.
>
> Doriți să sincronizați fără aplicația desktop? Consultați [[Obsidian Headless|Obsidian Headless]].

### Rulați o comandă

Rulați o comandă individuală fără a deschide TUI:

```shell
# Run the help command
obsidian help
```

### Folosiți interfața de terminal

Folosiți TUI introducând `obsidian`. Comenzile ulterioare pot fi introduse fără `obsidian`.

```shell
# Open the TUI, then run help
obsidian
help
```

TUI acceptă completare automată, istoric al comenzilor și căutare inversă. Folosiți `Ctrl+R` pentru a căuta în istoricul comenzilor. Consultați [[#Combinații de taste]] pentru toate combinațiile disponibile.

## Exemple

Iată câteva exemple din ceea ce poate face Obsidian CLI.

### Utilizare zilnică

```shell
# Open today's daily note
obsidian daily

# Add a task to your daily note
obsidian daily:append content="- [ ] Buy groceries"

# Search your vault
obsidian search query="meeting notes"

# Read the active file
obsidian read

# List all tasks from your daily note
obsidian tasks daily

# Create a new note from a template
obsidian create name="Trip to Paris" template=Travel

# List all tags in your vault with counts
obsidian tags counts

# Compare two versions of a file
obsidian diff file=README from=1 to=3
```

### Pentru dezvoltatori

Multe [[#Comenzi pentru dezvoltatori]] sunt disponibile pentru dezvoltarea de module și teme. Aceste comenzi permit instrumentelor agentice de programare să testeze și să depaneze automat.

```shell
# Open developer tools
obsidian devtools

# Reload a community plugin you're developing
obsidian plugin:reload id=my-plugin

# Take a screenshot of the app
obsidian dev:screenshot path=screenshot.png

# Run JavaScript in the app console
obsidian eval code="app.vault.getFiles().length"
```

## Ghid rapid

### Folosiți parametri și marcaje

Comenzile pot folosi **parametri** și **marcaje**. Majoritatea comenzilor nu necesită niciun parametru sau marcaj. Parametrii obligatorii sunt marcați ca `required`. De exemplu:

```shell
# Create a new note using the default "Untitled" name
obsidian create
```

Un **parametru** primește o valoare, scrisă ca `parameter=value`. Dacă valoarea conține spații, încadrați-o în ghilimele:

```shell
# Create a new note called "Note" with content "Hello world"
obsidian create name=Note content="Hello world"
```

Un **marcaj** este un comutator boolean fără valoare. Includeți-l pentru a-l activa; de exemplu, `open` și `overwrite` sunt marcaje:

```shell
# Create a note and open it
obsidian create name=Note content="Hello" open overwrite
```

Pentru conținut pe mai multe linii, folosiți `\n` pentru linie nouă. Folosiți `\t` pentru tab.

```bash
obsidian create name=Note content="# Title\n\nBody text"
```

### Vizați un seif

Dacă directorul de lucru curent al terminalului este un director de seif, acel seif este folosit implicit. În caz contrar, este folosit seiful activ în prezent.

Folosiți `vault=<name>` sau `vault=<id>` pentru a viza un seif anume. Acesta trebuie să fie primul parametru înaintea comenzii:

```shell
obsidian vault=Notes daily
obsidian vault="My Vault" search query="test"
```

În TUI, folosiți `vault:open <name>` sau `<id>` pentru a comuta la un alt seif.

### Vizați un fișier

Multe comenzi acceptă parametrii `file` și `path` pentru a viza un fișier anume. Dacă niciunul nu este specificat, comanda se aplică implicit fișierului activ.

- `file=<name>` rezolvă fișierul folosind aceeași rezolvare a legăturilor ca [[Legături interne|legăturile interne]], potrivind după numele fișierului, fără a necesita calea completă sau extensia.
- `path=<path>` necesită calea exactă din rădăcina seifului, de ex. `folder/note.md`.

```shell
# These are equivalent if "Recipe.md" is the only file with that name
obsidian read file=Recipe
obsidian read path="Templates/Recipe.md"
```

### Copiați rezultatul

Adăugați `--copy` la orice comandă pentru a copia rezultatul în clipboard:

```shell
read --copy
search query="TODO" --copy
```


## Comenzi generale

### `help`

Afișează lista tuturor comenzilor disponibile.

| Parametru   | Descriere                                |
| ----------- | ----------------------------------------- |
| `<command>` | Afișează ajutor pentru o comandă anume. |

### `version`

Afișează versiunea Obsidian.

### `reload`

Reîncarcă fereastra aplicației.

### `restart`

Repornește aplicația.


## Baze

Comenzi pentru [[Introducere în Baze|Baze]].

### `bases`

Listează toate fișierele `.base` din seif.

### `base:views`

Listează vizualizările din fișierul de bază curent.

### `base:create`

Creează un element nou într-o bază. Implicit se folosește vizualizarea activă a bazei dacă nu este specificat niciun fișier.

```bash
file=<name>        # base file name
path=<path>        # base file path
view=<name>        # view name
name=<name>        # new file name
content=<text>     # initial content

open               # open file after creating
newtab             # open in new tab
```

### `base:query`

Interoghează o bază și returnează rezultatele.

```bash
file=<name>                    # base file name
path=<path>                    # base file path
view=<name>                    # view name to query
format=json|csv|tsv|md|paths   # output format (default: json)
```

## Marcaje

Comenzi pentru [[Marcaje]].

### `bookmarks`

Listează marcajele.

```bash
total              # return bookmark count
verbose            # include bookmark types
format=json|tsv|csv  # output format (default: tsv)
```

### `bookmark`

Adaugă un marcaj.

```bash
file=<path>        # file to bookmark
subpath=<subpath>  # subpath (heading or block) within file
folder=<path>      # folder to bookmark
search=<query>     # search query to bookmark
url=<url>          # URL to bookmark
title=<title>      # bookmark title
```

## Paleta de comenzi

Comenzi pentru [[Paleta de comenzi]] și [[Combinații de taste]]. Aceasta include toate comenzile înregistrate de module.

### `commands`

Listează ID-urile comenzilor disponibile.

```bash
filter=<prefix>    # filter by ID prefix
```

### `command`

Execută o comandă Obsidian.

```bash
id=<command-id>    # (required) command ID to execute
```

### `hotkeys`

Listează combinațiile de taste pentru toate comenzile.

```bash
total              # return hotkey count
verbose            # show if hotkey is custom
format=json|tsv|csv  # output format (default: tsv)
```

### `hotkey`

Obține combinația de taste pentru o comandă.

```bash
id=<command-id>    # (required) command ID

verbose            # show if custom or default
```

## Note zilnice

Comenzi pentru [[Note zilnice]].

### `daily`

Deschide nota zilnică.

```bash
paneType=tab|split|window    # pane type to open in
```

### `daily:path`

Obține calea notei zilnice. Returnează calea așteptată chiar dacă fișierul nu a fost încă creat.

### `daily:read`

Citește conținutul notei zilnice.

### `daily:append`

Adaugă conținut la finalul notei zilnice.

```bash
content=<text>     # (required) content to append
paneType=tab|split|window    # pane type to open in

inline             # append without newline
open               # open file after adding
```

### `daily:prepend`

Adaugă conținut la începutul notei zilnice.

```bash
content=<text>     # (required) content to prepend
paneType=tab|split|window    # pane type to open in

inline             # prepend without newline
open               # open file after adding
```

## Istoricul fișierelor

### `diff`

Listează sau compară versiuni din [[Recuperare fișiere]] locală și [[Introducere în Obsidian Sync|Sync]]. Versiunile sunt numerotate de la cea mai nouă la cea mai veche.

```bash
file=<name>          # file name
path=<path>          # file path
from=<n>             # version number to diff from
to=<n>               # version number to diff to
filter=local|sync    # filter by version source
```

**Exemple:**

```shell
# List all versions of the active file
diff

# List all versions of a specific file
diff file=Recipe

# Compare the latest version to the current file
diff file=Recipe from=1

# Compare two versions
diff file=Recipe from=2 to=1

# Only show Sync versions
diff filter=sync
```

### `history`

Listează versiunile doar din [[Recuperare fișiere]]. Consultați [[#Sync|sync:history]] pentru comanda echivalentă din Sync.

```bash
file=<name>        # file name
path=<path>        # file path
```

### `history:list`

Listează toate fișierele cu istoric local.

### `history:read`

Citește o versiune din istoricul local.

```bash
file=<name>        # file name
path=<path>        # file path
version=<n>        # version number (default: 1)
```

### `history:restore`

Restaurează o versiune din istoricul local.

```bash
file=<name>        # file name
path=<path>        # file path
version=<n>        # (required) version number
```

### `history:open`

Deschide recuperarea fișierelor.

```bash
file=<name>        # file name
path=<path>        # file path
```

## Fișiere și directoare

### `file`

Afișează informații despre fișier (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path
```

Exemplu:

```
path       Notes/Recipe.md
name       Recipe
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Listează fișierele din seif.

```bash
folder=<path>      # filter by folder
ext=<extension>    # filter by extension

total              # return file count
```

### `folder`

Afișează informații despre director.

```bash
path=<path>              # (required) folder path
info=files|folders|size  # return specific info only
```

### `folders`

Listează directoarele din seif.

```bash
folder=<path>      # filter by parent folder

total              # return folder count
```

### `open`

Deschide un fișier.

```bash
file=<name>        # file name
path=<path>        # file path

newtab             # open in new tab
```

### `create`

Creează sau suprascrie un fișier.

```bash
name=<name>        # file name
path=<path>        # file path
content=<text>     # initial content
template=<name>    # template to use

overwrite          # overwrite if file exists
open               # open file after creating
newtab             # open in new tab
```

### `read`

Citește conținutul fișierului (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path
```

### `append`

Adaugă conținut la finalul unui fișier (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path
content=<text>     # (required) content to append

inline             # append without newline
```

### `prepend`

Adaugă conținut după frontmatter (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path
content=<text>     # (required) content to prepend

inline             # prepend without newline
```

### `move`

Mută sau redenumește un fișier (implicit: fișierul activ). Aceasta va actualiza automat [[internal links]] dacă opțiunea este activată în [[Setări#Actualizează automat legăturile interne|setările seifului]].

```bash
file=<name>        # file name
path=<path>        # file path
to=<path>          # (required) destination folder or path
```

### `rename`

Redenumește un fișier (implicit: fișierul activ). Extensia fișierului este păstrată automat dacă este omisă din noul nume. Folosiți [[#`move`|move]] pentru a redenumi și muta un fișier în același timp. Aceasta va actualiza automat [[internal links]] dacă opțiunea este activată în [[Setări#Actualizează automat legăturile interne|setările seifului]].

```bash
file=<name>        # file name
path=<path>        # file path
name=<name>        # (required) new file name
```

### `delete`

Șterge un fișier (implicit: fișierul activ, implicit mutat la coșul de gunoi).

```bash
file=<name>        # file name
path=<path>        # file path

permanent          # skip trash, delete permanently
```

## Legături

Comenzi pentru [[Referințe]] și [[Legături de ieșire]].

### `backlinks`

Listează referințele către un fișier (implicit: fișierul activ).

```bash
file=<name>        # target file name
path=<path>        # target file path

counts             # include link counts
total              # return backlink count
format=json|tsv|csv  # output format (default: tsv)
```

### `links`

Listează legăturile de ieșire dintr-un fișier (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path

total              # return link count
```

### `unresolved`

Listează legăturile nerezolvate din seif.

```bash
total              # return unresolved link count
counts             # include link counts
verbose            # include source files
format=json|tsv|csv  # output format (default: tsv)
```

### `orphans`

Listează fișierele fără legături de intrare.

```bash
total              # return orphan count
```

### `deadends`

Listează fișierele fără legături de ieșire.

```bash
total              # return dead-end count
```

## Sumar

Comenzi pentru [[Sumar]].

### `outline`

Afișează titlurile pentru fișierul curent.

```bash
file=<name>        # file name
path=<path>        # file path
format=tree|md|json  # output format (default: tree)

total              # return heading count
```

## Module

Comenzi pentru [[Module de bază]] și [[Module comunitare]].

### `plugins`

Listează modulele instalate.

```bash
filter=core|community  # filter by plugin type

versions               # include version numbers
format=json|tsv|csv    # output format (default: tsv)
```

### `plugins:enabled`

Listează modulele activate.

```bash
filter=core|community  # filter by plugin type

versions               # include version numbers
format=json|tsv|csv    # output format (default: tsv)
```

### `plugins:restrict`

Comută sau verifică modul restricționat.

```bash
on                 # enable restricted mode
off                # disable restricted mode
```

### `plugin`

Obține informații despre modul.

```bash
id=<plugin-id>     # (required) plugin ID
```

### `plugin:enable`

Activează un modul.

```bash
id=<id>                # (required) plugin ID
filter=core|community  # plugin type
```

### `plugin:disable`

Dezactivează un modul.

```bash
id=<id>                # (required) plugin ID
filter=core|community  # plugin type
```

### `plugin:install`

Instalează un modul al comunității.

```bash
id=<id>            # (required) plugin ID

enable             # enable after install
```

### `plugin:uninstall`

Dezinstalează un modul al comunității.

```bash
id=<id>            # (required) plugin ID
```

### `plugin:reload`

Reîncarcă un modul (pentru dezvoltatori).

```bash
id=<id>            # (required) plugin ID
```

## Proprietăți

Comenzi legate de [[Proprietăți]].

### `aliases`

Listează aliasurile din seif. Folosiți `active` sau `file`/`path` pentru a afișa aliasurile unui anumit fișier.

```bash
file=<name>        # file name
path=<path>        # file path

total              # return alias count
verbose            # include file paths
active             # show aliases for active file
```

### `properties`

Listează proprietățile din seif. Folosiți `active` sau `file`/`path` pentru a afișa proprietățile unui anumit fișier.

```bash
file=<name>        # show properties for file
path=<path>        # show properties for path
name=<name>        # get specific property count
sort=count         # sort by count (default: name)
format=yaml|json|tsv  # output format (default: yaml)

total              # return property count
counts             # include occurrence counts
active             # show properties for active file
```

### `property:set`

Setează o proprietate pe un fișier (implicit: fișierul activ).

```bash
name=<name>                                    # (required) property name
value=<value>                                  # (required) property value
type=text|list|number|checkbox|date|datetime   # property type
file=<name>                                    # file name
path=<path>                                    # file path
```

### `property:remove`

Elimină o proprietate de pe un fișier (implicit: fișierul activ).

```bash
name=<name>        # (required) property name
file=<name>        # file name
path=<path>        # file path
```

### `property:read`

Citește valoarea unei proprietăți dintr-un fișier (implicit: fișierul activ).

```bash
name=<name>        # (required) property name
file=<name>        # file name
path=<path>        # file path
```

## Publish

Comenzi pentru [[Introducere în Obsidian Publish|Obsidian Publish]].

### `publish:site`

Afișează informații despre site-ul Publish (slug, URL).

### `publish:list`

Listează fișierele publicate.

```bash
total              # return published file count
```

### `publish:status`

Listează modificările pentru Publish.

```bash
total              # return change count
new                # show new files only
changed            # show changed files only
deleted            # show deleted files only
```

### `publish:add`

Publică un fișier sau toate fișierele modificate (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path

changed            # publish all changed files
```

### `publish:remove`

Anulează publicarea unui fișier (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path
```

### `publish:open`

Deschide fișierul pe site-ul publicat (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path
```

## Note aleatorii

Comenzi pentru [[Notă aleatorie]].

### `random`

Deschide o notă aleatorie.

```bash
folder=<path>      # limit to folder

newtab             # open in new tab
```

### `random:read`

Citește o notă aleatorie (include calea).

```bash
folder=<path>      # limit to folder
```

## Caută

Comenzi pentru [[Caută]].

### `search`

Caută text în seif. Returnează căile fișierelor care se potrivesc.

```bash
query=<text>       # (required) search query
path=<folder>      # limit to folder
limit=<n>          # max files
format=text|json   # output format (default: text)

total              # return match count
case               # case sensitive
```

### `search:context`

Caută cu contextul liniei care se potrivește. Returnează un rezultat în stil grep, `path:line: text`.

```bash
query=<text>       # (required) search query
path=<folder>      # limit to folder
limit=<n>          # max files
format=text|json   # output format (default: text)

case               # case sensitive
```

### `search:open`

Deschide vizualizarea de căutare.

```bash
query=<text>       # initial search query
```

## Sync

Comenzi pentru [[Introducere în Obsidian Sync|Obsidian Sync]].

> [!tip] Sincronizare fără aplicația desktop
> Aceste comenzi controlează Sync în cadrul aplicației Obsidian care rulează. Pentru a sincroniza seifuri din linia de comandă fără aplicația desktop, consultați [[Sync Headless]].

### `sync`

Pune pauză sau reia sincronizarea.

```bash
on                 # resume sync
off                # pause sync
```

### `sync:status`

Afișează starea și utilizarea Sync.

### `sync:history`

Listează istoricul versiunilor Sync pentru un fișier (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path

total              # return version count
```

### `sync:read`

Citește o versiune Sync (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path
version=<n>        # (required) version number
```

### `sync:restore`

Restaurează o versiune Sync (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path
version=<n>        # (required) version number
```

### `sync:open`

Deschide istoricul Sync (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path
```

### `sync:deleted`

Listează fișierele șterse din Sync.

```bash
total              # return deleted file count
```

## Etichete

Comenzi pentru [[Etichete]].

### `tags`

Listează etichetele din seif. Folosiți `active` sau `file`/`path` pentru a afișa etichetele unui anumit fișier.

```bash
file=<name>        # file name
path=<path>        # file path
sort=count         # sort by count (default: name)

total              # return tag count
counts             # include tag counts
format=json|tsv|csv  # output format (default: tsv)
active             # show tags for active file
```

### `tag`

Obține informații despre o etichetă.

```bash
name=<tag>         # (required) tag name

total              # return occurrence count
verbose            # include file list and count
```

## Sarcini

Comenzi pentru gestionarea sarcinilor.

### `tasks`

Listează sarcinile din seif. Folosiți `active` sau `file`/`path` pentru a afișa sarcinile unui anumit fișier.

```bash
file=<name>        # filter by file name
path=<path>        # filter by file path
status="<char>"    # filter by status character

total              # return task count
done               # show completed tasks
todo               # show incomplete tasks
verbose            # group by file with line numbers
format=json|tsv|csv  # output format (default: text)
active             # show tasks for active file
daily              # show tasks from daily note
```

**Exemple:**

```bash
# List all tasks in the vault
tasks

# List incomplete tasks in the vault
tasks todo

# List completed tasks from a specific file
tasks file=Recipe done

# List tasks from today's daily note
tasks daily

# Count tasks in daily note
tasks daily total

# List tasks with file paths and line numbers
tasks verbose

# Filter by custom status (quote special chars)
tasks 'status=?'
```

### `task`

Afișează sau actualizează o sarcină.

```bash
ref=<path:line>    # task reference (path:line)
file=<name>        # file name
path=<path>        # file path
line=<n>           # line number
status="<char>"    # set status character

toggle             # toggle task status
daily              # daily note
done               # mark as done
todo               # mark as todo
```

**Exemple:**

```bash
# Show task info
task file=Recipe line=8
task ref="Recipe.md:8"

# Toggle task completion
task ref="Recipe.md:8" toggle

# Toggle task in daily note
task daily line=3 toggle

# Set task status
task file=Recipe line=8 done      # → [x]
task file=Recipe line=8 todo      # → [ ]
task file=Recipe line=8 status=-  # → [-]
task daily line=3 done            # Mark daily note task as done
```


## Șabloane

Comenzi pentru [[Plugins/Șabloane|Șabloane]].

### `templates`

Listează șabloanele.

```bash
total              # return template count
```

### `template:read`

Citește conținutul unui șablon.

```bash
name=<template>    # (required) template name
title=<title>      # title for variable resolution

resolve            # resolve template variables
```

### `template:insert`

Inserează un șablon în fișierul activ.

```bash
name=<template>    # (required) template name
```

**Note:**
- Opțiunea `resolve` procesează variabilele `{{date}}`, `{{time}}`, `{{title}}`
- Folosiți `create path=<path> template=<name>` pentru a crea un fișier folosind un șablon

## Teme și fragmente

Comenzi pentru [[Teme]] și [[Fragmente CSS]].

### `themes`

Listează temele instalate.

```bash
versions           # include version numbers
```

### `theme`

Afișează tema activă sau obține informații.

```bash
name=<name>        # theme name for details
```

### `theme:set`

Setează tema activă.

```bash
name=<name>        # (required) theme name (empty for default)
```

### `theme:install`

Instalează o temă a comunității.

```bash
name=<name>        # (required) theme name

enable             # activate after install
```

### `theme:uninstall`

Dezinstalează o temă.

```bash
name=<name>        # (required) theme name
```

### `snippets`

Listează fragmentele CSS instalate.

### `snippets:enabled`

Listează fragmentele CSS activate.

### `snippet:enable`

Activează un fragment CSS.

```bash
name=<name>        # (required) snippet name
```

### `snippet:disable`

Dezactivează un fragment CSS.

```bash
name=<name>        # (required) snippet name
```

## Note unice

Comenzi pentru [[Creator de note unice]].

### `unique`

Creează o notă unică.

```bash
name=<text>        # note name
content=<text>     # initial content
paneType=tab|split|window    # pane type to open in

open               # open file after creating
```

## Seif

### `vault`

Afișează informații despre seif.

```bash
info=name|path|files|folders|size  # return specific info only
```

### `vaults`

Listează seifurile cunoscute.

```bash
total              # return vault count
verbose            # include vault paths
```

### `vault:open`

Comută la un alt seif (doar TUI).

```bash
name=<name>        # (required) vault name
```

## Vizualizator web

Comenzi pentru [[Vizualizator web]].

### `web`

Deschide un URL în vizualizatorul web.

```bash
url=<url>          # (required) URL to open

newtab             # open in new tab
```

## Număr de cuvinte

Comenzi pentru [[Număr de cuvinte]].

### `wordcount`

Numără cuvintele și caracterele (implicit: fișierul activ).

```bash
file=<name>        # file name
path=<path>        # file path

words              # return word count only
characters         # return character count only
```

## Spațiu de lucru

Comenzi pentru [[Spațiu de lucru]] și modulul [[Spații de lucru]].

### `workspace`

Afișează structura spațiului de lucru.

```bash
ids                # include workspace item IDs
```

### `workspaces`

Listează spațiile de lucru salvate.

```bash
total              # return workspace count
```

### `workspace:save`

Salvează aspectul curent ca spațiu de lucru.

```bash
name=<name>        # workspace name
```

### `workspace:load`

Încarcă un spațiu de lucru salvat.

```bash
name=<name>        # (required) workspace name
```

### `workspace:delete`

Șterge un spațiu de lucru salvat.

```bash
name=<name>        # (required) workspace name
```

### `tabs`

Listează filele deschise.

```bash
ids                # include tab IDs
```

### `tab:open`

Deschide o filă nouă.

```bash
group=<id>         # tab group ID
file=<path>        # file to open
view=<type>        # view type to open
```

### `recents`

Listează fișierele deschise recent.

```bash
total              # return recent file count
```

## Comenzi pentru dezvoltatori

Comenzi care vă ajută să dezvoltați [[Module comunitare]] și [[Teme]]. Aflați mai multe accesând [Obsidian Developer Documentation](https://docs.obsidian.md).

### `devtools`

Comută instrumentele de dezvoltare Electron.

### `dev:debug`

Atașează/detașează depanatorul Chrome DevTools Protocol.

```bash
on                 # attach debugger
off                # detach debugger
```

### `dev:cdp`

Rulează o comandă Chrome DevTools Protocol.

```bash
method=<CDP.method>  # (required) CDP method to call
params=<json>        # method parameters as JSON
```

### `dev:errors`

Afișează erorile JavaScript captate.

```bash
clear              # clear the error buffer
```

### `dev:screenshot`

Face o captură de ecran (returnează PNG codificat base64).

```bash
path=<filename>    # output file path
```

### `dev:console`

Afișează mesajele din consolă captate.

```bash
limit=<n>                        # max messages to show (default 50)
level=log|warn|error|info|debug  # filter by log level

clear                            # clear the console buffer
```

### `dev:css`

Inspectează CSS cu locațiile sursă.

```bash
selector=<css>     # (required) CSS selector
prop=<name>        # filter by property name
```

### `dev:dom`

Interoghează elemente DOM.

```bash
selector=<css>     # (required) CSS selector
attr=<name>        # get attribute value
css=<prop>         # get CSS property value

total              # return element count
text               # return text content
inner              # return innerHTML instead of outerHTML
all                # return all matches instead of first
```

### `dev:mobile`

Comută emularea mobilă.

```bash
on                 # enable mobile emulation
off                # disable mobile emulation
```

### `eval`

Execută JavaScript și returnează rezultatul.

```bash
code=<javascript>  # (required) JavaScript code to execute
```

## Combinații de taste

Aceste combinații sunt disponibile în [[#Folosiți interfața de terminal|TUI]].

### Navigare

| Acțiune                                                      | Combinație       |
| ------------------------------------------------------------- | -------------- |
| Mută cursorul la stânga                                       | `←` / `Ctrl+B` |
| Mută cursorul la dreapta (acceptă sugestia la sfârșitul liniei) | `→` / `Ctrl+F` |
| Sari la începutul liniei                                       | `Ctrl+A`       |
| Sari la sfârșitul liniei                                       | `Ctrl+E`       |
| Mută cu un cuvânt înapoi                                       | `Alt+B`        |
| Mută cu un cuvânt înainte                                      | `Alt+F`        |

### Editare

| Acțiune                       | Combinație                   |
| ------------------------------ | --------------------------- |
| Șterge până la începutul liniei | `Ctrl+U`                   |
| Șterge până la sfârșitul liniei | `Ctrl+K`                   |
| Șterge cuvântul anterior        | `Ctrl+W` / `Alt+Backspace` |

### Completare automată

| Acțiune                                                        | Combinație    |
| ---------------------------------------------------------------- | ----------- |
| Intră în modul de sugestii / acceptă sugestia selectată         | `Tab`       |
| Ieși din modul de sugestii                                       | `Shift+Tab` |
| Intră în modul de sugestii (de la o intrare nouă)                | `↓`         |
| Acceptă prima sugestie/sugestia selectată (la sfârșitul liniei) | `→`         |

### Istoric

| Acțiune                                                              | Combinație       |
| ---------------------------------------------------------------------- | -------------- |
| Intrarea anterioară din istoric / navighează în sugestii în sus       | `↑` / `Ctrl+P` |
| Intrarea următoare din istoric / navighează în sugestii în jos        | `↓` / `Ctrl+N` |
| Căutare inversă în istoric (tastați pentru a filtra, `Ctrl+R` pentru a parcurge) | `Ctrl+R`       |

### Altele

| Acțiune                                                | Combinație            |
| ------------------------------------------------------ | ------------------- |
| Execută comanda sau acceptă sugestia                   | `Enter`             |
| Anulează completarea automată / iese din modul de sugestii / golește intrarea | `Escape`            |
| Golește ecranul                                        | `Ctrl+L`            |
| Ieșire                                                 | `Ctrl+C` / `Ctrl+D` |

## Depanare

Dacă aveți probleme la rularea Obsidian CLI:

- Asigurați-vă că folosiți cea mai recentă [[Actualizează Obsidian|versiune a pachetului de instalare Obsidian]] (1.12.7 sau mai recentă).
- Dacă tocmai ați actualizat Obsidian de la o versiune anterioară, dezactivați setarea CLI și reactivați-o, apoi permiteți Obsidian să efectueze înregistrarea automată în PATH.
- Reporniți terminalul după înregistrarea CLI pentru ca modificările PATH să aibă efect.
- Obsidian trebuie să ruleze. CLI se conectează la instanța Obsidian care rulează.

### Windows

Obsidian CLI pe Windows necesită pachetul de instalare Obsidian 1.12.7+. Consultați [[Actualizează Obsidian|Actualizarea versiunii pachetului de instalare]].

Windows folosește un redirector de terminal care conectează Obsidian corect la stdin/stdout. Acest lucru este necesar deoarece Obsidian rulează în mod normal ca o aplicație GUI, incompatibilă cu ieșirile de terminal pe Windows. Când instalați Obsidian 1.12.7+, redirectorul de terminal `Obsidian.com` va fi adăugat în directorul unde ați instalat fișierul `Obsidian.exe`.

Înregistrarea CLI adaugă Obsidian în variabila PATH a utilizatorului, ceea ce are efect doar după repornirea terminalului.

### macOS

Înregistrarea CLI creează o legătură simbolică la `/usr/local/bin/obsidian` care indică spre binarul CLI inclus în aplicație. Acest lucru necesită privilegii de administrator — vi se va solicita confirmarea printr-un dialog de sistem.

Verificați că legătura simbolică există și indică spre binarul corect:

```
ls -l /usr/local/bin/obsidian
```

Dacă legătura simbolică lipsește, creați-o manual:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Dacă ați înregistrat anterior CLI cu o versiune mai veche de Obsidian, este posibil să aveți o intrare PATH rămasă în `~/.zprofile`. Noul proces de înregistrare o elimină automat, dar dacă aceasta rămâne, puteți șterge în siguranță liniile care încep cu `# Added by Obsidian` din `~/.zprofile`.

### Linux

Înregistrarea CLI copiază binarul CLI în `~/.local/bin/obsidian`. Acest lucru se face deoarece unele metode de instalare pe Linux rulează din directoare temporare care nu pot fi legate simbolic în mod persistent.

Asigurați-vă că `~/.local/bin` este în PATH. Adăugați următoarea linie în `~/.bashrc` sau `~/.zshrc` dacă nu este deja prezentă:

```
export PATH="$PATH:$HOME/.local/bin"
```

Verificați că binarul există:

```
ls -l ~/.local/bin/obsidian
```

Dacă binarul lipsește, copiați-l manual din directorul de instalare Obsidian:

```
cp /path/to/Obsidian/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```

