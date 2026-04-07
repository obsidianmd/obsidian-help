---
permalink: cli
description: Qualsiasi cosa tu possa fare in Obsidian può essere fatta dalla riga di comando.
---
Obsidian CLI è un'interfaccia a riga di comando che ti permette di controllare Obsidian dal tuo terminale per scripting, automazione e integrazione con strumenti esterni.

Qualsiasi cosa tu possa fare in Obsidian puoi farla dalla riga di comando. Obsidian CLI include anche [[#Comandi per sviluppatori|comandi per sviluppatori]] per accedere agli strumenti di sviluppo, ispezionare elementi, acquisire screenshot, ricaricare plugin e altro ancora.

![[obsidian-cli.mp4#interface]]

> [!warning] Richiede il programma di installazione di Obsidian 1.12
> L'utilizzo della CLI richiede il programma di installazione di Obsidian 1.12. Consulta la [[Aggiorna Obsidian#Aggiornamenti del programma di installazione|guida all'aggiornamento della versione del programma di installazione]].

## Installare Obsidian CLI

Aggiorna all'ultima [[Aggiorna Obsidian|versione del programma di installazione di Obsidian]] (1.12.7+).

Abilita Obsidian CLI in Obsidian:

1. Vai su **Impostazioni** → **Generale**.
2. Abilita **Interfaccia a riga di comando**.
3. Segui le istruzioni per registrare Obsidian CLI.

Se riscontri problemi nell'installazione di Obsidian CLI consulta [[#Risoluzione dei problemi]].

## Per iniziare

Obsidian CLI supporta sia comandi singoli che un'interfaccia utente terminale (TUI) con aiuto interattivo e completamento automatico.

> [!info] L'app Obsidian deve essere in esecuzione
> Obsidian CLI richiede che l'app Obsidian sia in esecuzione. Se Obsidian non è in esecuzione, il primo comando che esegui avvia Obsidian.
>
> Vuoi sincronizzare senza l'app desktop? Consulta [[Obsidian Headless|Obsidian Headless]].

### Eseguire un comando

Esegui un singolo comando senza aprire la TUI:

```shell
# Esegui il comando help
obsidian help
```

### Usare l'interfaccia terminale

Usa la TUI digitando `obsidian`. I comandi successivi possono essere inseriti senza `obsidian`.

```shell
# Apri la TUI, poi esegui help
obsidian
help
```

La TUI supporta il completamento automatico, la cronologia dei comandi e la ricerca inversa. Usa `Ctrl+R` per cercare nella cronologia dei comandi. Consulta [[#Scorciatoie da tastiera]] per tutte le scorciatoie disponibili.

## Esempi

Ecco alcuni esempi di ciò che Obsidian CLI può fare.

### Uso quotidiano

```shell
# Apri la nota quotidiana di oggi
obsidian daily

# Aggiungi un'attività alla nota quotidiana
obsidian daily:append content="- [ ] Comprare la spesa"

# Cerca nella cassaforte
obsidian search query="appunti riunione"

# Leggi il file attivo
obsidian read

# Elenca tutte le attività dalla nota quotidiana
obsidian tasks daily

# Crea una nuova nota da un modello
obsidian create name="Viaggio a Parigi" template=Viaggio

# Elenca tutte le etichette nella cassaforte con conteggi
obsidian tags counts

# Confronta due versioni di un file
obsidian diff file=README from=1 to=3
```

### Per sviluppatori

Molti [[#Comandi per sviluppatori]] sono disponibili per lo sviluppo di plugin e temi. Questi comandi permettono agli strumenti di programmazione agentici di testare e fare debug automaticamente.

```shell
# Apri gli strumenti per sviluppatori
obsidian devtools

# Ricarica un plugin della community che stai sviluppando
obsidian plugin:reload id=my-plugin

# Acquisisci uno screenshot dell'app
obsidian dev:screenshot path=screenshot.png

# Esegui JavaScript nella console dell'app
obsidian eval code="app.vault.getFiles().length"
```

## Come fare

### Usare parametri e flag

I comandi possono usare **parametri** e **flag**. La maggior parte dei comandi non richiede alcun parametro o flag. I parametri obbligatori sono contrassegnati come `required`. Per esempio:

```shell
# Crea una nuova nota usando il nome predefinito "Senza titolo"
obsidian create
```

Un **parametro** accetta un valore, scritto come `parametro=valore`. Se il valore contiene spazi, racchiudilo tra virgolette:

```shell
# Crea una nuova nota chiamata "Nota" con contenuto "Ciao mondo"
obsidian create name=Nota content="Ciao mondo"
```

Un **flag** è un interruttore booleano senza valore. Includilo per attivarlo, per esempio `open` e `overwrite` sono flag:

```shell
# Crea una nota e aprila
obsidian create name=Nota content="Ciao" open overwrite
```

Per contenuti multiriga usa `\n` per l'a capo. Usa `\t` per la tabulazione.

```bash
obsidian create name=Nota content="# Titolo\n\nTesto del corpo"
```

### Specificare una cassaforte

Se la directory di lavoro corrente del terminale è una cartella cassaforte, quella cassaforte viene usata per impostazione predefinita. Altrimenti, viene usata la cassaforte attualmente attiva.

Usa `vault=<nome>` o `vault=<id>` per specificare una cassaforte specifica. Questo deve essere il primo parametro prima del comando:

```shell
obsidian vault=Note daily
obsidian vault="La mia cassaforte" search query="test"
```

Nella TUI, usa `vault:open <nome>` o `<id>` per passare a una cassaforte diversa.

### Specificare un file

Molti comandi accettano parametri `file` e `path` per specificare un file. Se nessuno dei due viene fornito, il comando usa il file attivo per impostazione predefinita.

- `file=<nome>` risolve il file usando la stessa risoluzione dei [[Collegamenti interni|collegamenti wiki]], corrispondendo per nome file senza richiedere il percorso completo o l'estensione.
- `path=<percorso>` richiede il percorso esatto dalla radice della cassaforte, es. `cartella/nota.md`.

```shell
# Questi sono equivalenti se "Ricetta.md" è l'unico file con quel nome
obsidian read file=Ricetta
obsidian read path="Modelli/Ricetta.md"
```

### Copiare l'output

Aggiungi `--copy` a qualsiasi comando per copiare l'output negli appunti:

```shell
read --copy
search query="TODO" --copy
```


## Comandi generali

### `help`

Mostra l'elenco di tutti i comandi disponibili.

| Parametro   | Descrizione                             |
| ----------- | --------------------------------------- |
| `<command>` | Mostra l'aiuto per un comando specifico. |

### `version`

Mostra la versione di Obsidian.

### `reload`

Ricarica la finestra dell'app.

### `restart`

Riavvia l'app.


## Base

Comandi per [[Introduzione a Base|Base]].

### `bases`

Elenca tutti i file `.base` nella cassaforte.

### `base:views`

Elenca le viste nel file base corrente.

### `base:create`

Crea un nuovo elemento in una base. Usa la vista base attiva per impostazione predefinita se non viene specificato alcun file.

```bash
file=<name>        # nome del file base
path=<path>        # percorso del file base
view=<name>        # nome della vista
name=<name>        # nome del nuovo file
content=<text>     # contenuto iniziale

open               # apri il file dopo la creazione
newtab             # apri in una nuova scheda
```

### `base:query`

Interroga una base e restituisce i risultati.

```bash
file=<name>                    # nome del file base
path=<path>                    # percorso del file base
view=<name>                    # nome della vista da interrogare
format=json|csv|tsv|md|paths   # formato di output (predefinito: json)
```

## Segnalibri

Comandi per [[Segnalibri|Segnalibri]].

### `bookmarks`

Elenca i segnalibri.

```bash
total              # restituisce il conteggio dei segnalibri
verbose            # include i tipi di segnalibro
format=json|tsv|csv  # formato di output (predefinito: tsv)
```

### `bookmark`

Aggiungi un segnalibro.

```bash
file=<path>        # file da aggiungere ai segnalibri
subpath=<subpath>  # sottopercorso (intestazione o blocco) all'interno del file
folder=<path>      # cartella da aggiungere ai segnalibri
search=<query>     # query di ricerca da aggiungere ai segnalibri
url=<url>          # URL da aggiungere ai segnalibri
title=<title>      # titolo del segnalibro
```

## Tavolozza dei comandi

Comandi per la [[Riquadro comandi|tavolozza dei comandi]] e le [[Tasti di scelta rapida|scorciatoie da tastiera]]. Questo include tutti i comandi registrati dai plugin.

### `commands`

Elenca gli ID dei comandi disponibili.

```bash
filter=<prefix>    # filtra per prefisso dell'ID
```

### `command`

Esegui un comando Obsidian.

```bash
id=<command-id>    # (required) ID del comando da eseguire
```

### `hotkeys`

Elenca le scorciatoie da tastiera per tutti i comandi.

```bash
total              # restituisce il conteggio delle scorciatoie
verbose            # mostra se la scorciatoia è personalizzata
format=json|tsv|csv  # formato di output (predefinito: tsv)
```

### `hotkey`

Ottieni la scorciatoia da tastiera per un comando.

```bash
id=<command-id>    # (required) ID del comando

verbose            # mostra se personalizzata o predefinita
```

## Note quotidiane

Comandi per le [[Note del giorno|note quotidiane]].

### `daily`

Apri la nota quotidiana.

```bash
paneType=tab|split|window    # tipo di pannello in cui aprire
```

### `daily:path`

Ottieni il percorso della nota quotidiana. Restituisce il percorso previsto anche se il file non è ancora stato creato.

### `daily:read`

Leggi il contenuto della nota quotidiana.

### `daily:append`

Aggiungi contenuto alla fine della nota quotidiana.

```bash
content=<text>     # (required) contenuto da aggiungere
paneType=tab|split|window    # tipo di pannello in cui aprire

inline             # aggiungi senza a capo
open               # apri il file dopo l'aggiunta
```

### `daily:prepend`

Aggiungi contenuto all'inizio della nota quotidiana.

```bash
content=<text>     # (required) contenuto da aggiungere all'inizio
paneType=tab|split|window    # tipo di pannello in cui aprire

inline             # aggiungi senza a capo
open               # apri il file dopo l'aggiunta
```

## Cronologia file

### `diff`

Elenca o confronta versioni dal [[Recupero file|Recupero file]] locale e da [[Introduzione a Obsidian Sync|Sync]]. Le versioni sono numerate dalla più recente alla più vecchia.

```bash
file=<name>          # nome del file
path=<path>          # percorso del file
from=<n>             # numero di versione da cui confrontare
to=<n>               # numero di versione con cui confrontare
filter=local|sync    # filtra per origine della versione
```

**Esempi:**

```shell
# Elenca tutte le versioni del file attivo
diff

# Elenca tutte le versioni di un file specifico
diff file=Ricetta

# Confronta l'ultima versione con il file corrente
diff file=Ricetta from=1

# Confronta due versioni
diff file=Ricetta from=2 to=1

# Mostra solo le versioni Sync
diff filter=sync
```

### `history`

Elenca le versioni solo dal [[Recupero file|Recupero file]]. Consulta [[#Sync|sync:history]] per il comando Sync equivalente.

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
```

### `history:list`

Elenca tutti i file con cronologia locale.

### `history:read`

Leggi una versione dalla cronologia locale.

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
version=<n>        # numero di versione (predefinito: 1)
```

### `history:restore`

Ripristina una versione dalla cronologia locale.

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
version=<n>        # (required) numero di versione
```

### `history:open`

Apri il recupero file.

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
```

## File e cartelle

### `file`

Mostra informazioni sul file (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
```

Esempio:

```
path       Note/Ricetta.md
name       Ricetta
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Elenca i file nella cassaforte.

```bash
folder=<path>      # filtra per cartella
ext=<extension>    # filtra per estensione

total              # restituisce il conteggio dei file
```

### `folder`

Mostra informazioni sulla cartella.

```bash
path=<path>              # (required) percorso della cartella
info=files|folders|size  # restituisce solo informazioni specifiche
```

### `folders`

Elenca le cartelle nella cassaforte.

```bash
folder=<path>      # filtra per cartella principale

total              # restituisce il conteggio delle cartelle
```

### `open`

Apri un file.

```bash
file=<name>        # nome del file
path=<path>        # percorso del file

newtab             # apri in una nuova scheda
```

### `create`

Crea o sovrascrivi un file.

```bash
name=<name>        # nome del file
path=<path>        # percorso del file
content=<text>     # contenuto iniziale
template=<name>    # modello da usare

overwrite          # sovrascrivi se il file esiste
open               # apri il file dopo la creazione
newtab             # apri in una nuova scheda
```

### `read`

Leggi il contenuto del file (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
```

### `append`

Aggiungi contenuto alla fine di un file (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
content=<text>     # (required) contenuto da aggiungere

inline             # aggiungi senza a capo
```

### `prepend`

Aggiungi contenuto all'inizio dopo i metadati iniziali (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
content=<text>     # (required) contenuto da aggiungere all'inizio

inline             # aggiungi senza a capo
```

### `move`

Sposta o rinomina un file (predefinito: file attivo). I [[Collegamenti interni|collegamenti interni]] verranno aggiornati automaticamente se attivato nelle [[Impostazioni#Aggiorna sempre collegamenti interni|impostazioni della cassaforte]].

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
to=<path>          # (required) cartella o percorso di destinazione
```

### `rename`

Rinomina un file (predefinito: file attivo). L'estensione del file viene preservata automaticamente se omessa dal nuovo nome. Usa [[#`move`|move]] per rinominare e spostare un file contemporaneamente. I [[Collegamenti interni|collegamenti interni]] verranno aggiornati automaticamente se attivato nelle [[Impostazioni#Aggiorna sempre collegamenti interni|impostazioni della cassaforte]].

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
name=<name>        # (required) nuovo nome del file
```

### `delete`

Elimina un file (predefinito: file attivo, cestino per impostazione predefinita).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file

permanent          # salta il cestino, elimina permanentemente
```

## Collegamenti

Comandi per i [[Riferimenti|backlink]] e i [[Collegamenti in uscita|collegamenti in uscita]].

### `backlinks`

Elenca i backlink a un file (predefinito: file attivo).

```bash
file=<name>        # nome del file di destinazione
path=<path>        # percorso del file di destinazione

counts             # include il conteggio dei collegamenti
total              # restituisce il conteggio dei backlink
format=json|tsv|csv  # formato di output (predefinito: tsv)
```

### `links`

Elenca i collegamenti in uscita da un file (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file

total              # restituisce il conteggio dei collegamenti
```

### `unresolved`

Elenca i collegamenti non risolti nella cassaforte.

```bash
total              # restituisce il conteggio dei collegamenti non risolti
counts             # include il conteggio dei collegamenti
verbose            # include i file sorgente
format=json|tsv|csv  # formato di output (predefinito: tsv)
```

### `orphans`

Elenca i file senza collegamenti in entrata.

```bash
total              # restituisce il conteggio degli orfani
```

### `deadends`

Elenca i file senza collegamenti in uscita.

```bash
total              # restituisce il conteggio dei vicoli ciechi
```

## Struttura

Comandi per la [[Struttura|Struttura]].

### `outline`

Mostra le intestazioni per il file corrente.

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
format=tree|md|json  # formato di output (predefinito: tree)

total              # restituisce il conteggio delle intestazioni
```

## Plugin

Comandi per i [[Plugin principali|plugin principali]] e i [[Plugin della comunità|plugin della community]].

### `plugins`

Elenca i plugin installati.

```bash
filter=core|community  # filtra per tipo di plugin

versions               # include i numeri di versione
format=json|tsv|csv    # formato di output (predefinito: tsv)
```

### `plugins:enabled`

Elenca i plugin abilitati.

```bash
filter=core|community  # filtra per tipo di plugin

versions               # include i numeri di versione
format=json|tsv|csv    # formato di output (predefinito: tsv)
```

### `plugins:restrict`

Attiva/disattiva o controlla la modalità con restrizioni.

```bash
on                 # abilita la modalità con restrizioni
off                # disabilita la modalità con restrizioni
```

### `plugin`

Ottieni informazioni su un plugin.

```bash
id=<plugin-id>     # (required) ID del plugin
```

### `plugin:enable`

Abilita un plugin.

```bash
id=<id>                # (required) ID del plugin
filter=core|community  # tipo di plugin
```

### `plugin:disable`

Disabilita un plugin.

```bash
id=<id>                # (required) ID del plugin
filter=core|community  # tipo di plugin
```

### `plugin:install`

Installa un plugin della community.

```bash
id=<id>            # (required) ID del plugin

enable             # abilita dopo l'installazione
```

### `plugin:uninstall`

Disinstalla un plugin della community.

```bash
id=<id>            # (required) ID del plugin
```

### `plugin:reload`

Ricarica un plugin (per sviluppatori).

```bash
id=<id>            # (required) ID del plugin
```

## Proprietà

Comandi relativi alle [[Proprietà|proprietà]].

### `aliases`

Elenca gli alias nella cassaforte. Usa `active` o `file`/`path` per mostrare gli alias per un file specifico.

```bash
file=<name>        # nome del file
path=<path>        # percorso del file

total              # restituisce il conteggio degli alias
verbose            # include i percorsi dei file
active             # mostra gli alias per il file attivo
```

### `properties`

Elenca le proprietà nella cassaforte. Usa `active` o `file`/`path` per mostrare le proprietà per un file specifico.

```bash
file=<name>        # mostra le proprietà per il file
path=<path>        # mostra le proprietà per il percorso
name=<name>        # ottieni il conteggio di una proprietà specifica
sort=count         # ordina per conteggio (predefinito: nome)
format=yaml|json|tsv  # formato di output (predefinito: yaml)

total              # restituisce il conteggio delle proprietà
counts             # include i conteggi delle occorrenze
active             # mostra le proprietà per il file attivo
```

### `property:set`

Imposta una proprietà su un file (predefinito: file attivo).

```bash
name=<name>                                    # (required) nome della proprietà
value=<value>                                  # (required) valore della proprietà
type=text|list|number|checkbox|date|datetime   # tipo di proprietà
file=<name>                                    # nome del file
path=<path>                                    # percorso del file
```

### `property:remove`

Rimuovi una proprietà da un file (predefinito: file attivo).

```bash
name=<name>        # (required) nome della proprietà
file=<name>        # nome del file
path=<path>        # percorso del file
```

### `property:read`

Leggi il valore di una proprietà da un file (predefinito: file attivo).

```bash
name=<name>        # (required) nome della proprietà
file=<name>        # nome del file
path=<path>        # percorso del file
```

## Publish

Comandi per [[Introduzione a Obsidian Publish|Obsidian Publish]].

### `publish:site`

Mostra informazioni sul sito pubblicato (slug, URL).

### `publish:list`

Elenca i file pubblicati.

```bash
total              # restituisce il conteggio dei file pubblicati
```

### `publish:status`

Elenca le modifiche alla pubblicazione.

```bash
total              # restituisce il conteggio delle modifiche
new                # mostra solo i nuovi file
changed            # mostra solo i file modificati
deleted            # mostra solo i file eliminati
```

### `publish:add`

Pubblica un file o tutti i file modificati (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file

changed            # pubblica tutti i file modificati
```

### `publish:remove`

Rimuovi un file dalla pubblicazione (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
```

### `publish:open`

Apri il file sul sito pubblicato (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
```

## Note casuali

Comandi per [[Note casuali|Note casuali]].

### `random`

Apri una nota casuale.

```bash
folder=<path>      # limita a una cartella

newtab             # apri in una nuova scheda
```

### `random:read`

Leggi una nota casuale (include il percorso).

```bash
folder=<path>      # limita a una cartella
```

## Ricerca

Comandi per la [[Cerca|Ricerca]].

### `search`

Cerca testo nella cassaforte. Restituisce i percorsi dei file corrispondenti.

```bash
query=<text>       # (required) query di ricerca
path=<folder>      # limita a una cartella
limit=<n>          # numero massimo di file
format=text|json   # formato di output (predefinito: text)

total              # restituisce il conteggio delle corrispondenze
case               # distinzione maiuscole/minuscole
```

### `search:context`

Cerca con contesto delle righe corrispondenti. Restituisce output in stile grep `percorso:riga: testo`.

```bash
query=<text>       # (required) query di ricerca
path=<folder>      # limita a una cartella
limit=<n>          # numero massimo di file
format=text|json   # formato di output (predefinito: text)

case               # distinzione maiuscole/minuscole
```

### `search:open`

Apri la vista di ricerca.

```bash
query=<text>       # query di ricerca iniziale
```

## Sync

Comandi per [[Introduzione a Obsidian Sync|Obsidian Sync]].

> [!tip] Sincronizzare senza l'app desktop
> Questi comandi controllano Sync all'interno dell'app Obsidian in esecuzione. Per sincronizzare le cassaforti dalla riga di comando senza l'app desktop, consulta [[Sync headless]].

### `sync`

Metti in pausa o riprendi la sincronizzazione.

```bash
on                 # riprendi la sincronizzazione
off                # metti in pausa la sincronizzazione
```

### `sync:status`

Mostra lo stato e l'utilizzo della sincronizzazione.

### `sync:history`

Elenca la cronologia delle versioni di sincronizzazione per un file (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file

total              # restituisce il conteggio delle versioni
```

### `sync:read`

Leggi una versione di sincronizzazione (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
version=<n>        # (required) numero di versione
```

### `sync:restore`

Ripristina una versione di sincronizzazione (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
version=<n>        # (required) numero di versione
```

### `sync:open`

Apri la cronologia di sincronizzazione (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
```

### `sync:deleted`

Elenca i file eliminati nella sincronizzazione.

```bash
total              # restituisce il conteggio dei file eliminati
```

## Etichette

Comandi per le [[Etichette|Etichette]].

### `tags`

Elenca le etichette nella cassaforte. Usa `active` o `file`/`path` per mostrare le etichette per un file specifico.

```bash
file=<name>        # nome del file
path=<path>        # percorso del file
sort=count         # ordina per conteggio (predefinito: nome)

total              # restituisce il conteggio delle etichette
counts             # include i conteggi delle etichette
format=json|tsv|csv  # formato di output (predefinito: tsv)
active             # mostra le etichette per il file attivo
```

### `tag`

Ottieni informazioni su un'etichetta.

```bash
name=<tag>         # (required) nome dell'etichetta

total              # restituisce il conteggio delle occorrenze
verbose            # include l'elenco dei file e il conteggio
```

## Attività

Comandi per la gestione delle attività.

### `tasks`

Elenca le attività nella cassaforte. Usa `active` o `file`/`path` per mostrare le attività per un file specifico.

```bash
file=<name>        # filtra per nome del file
path=<path>        # filtra per percorso del file
status="<char>"    # filtra per carattere di stato

total              # restituisce il conteggio delle attività
done               # mostra le attività completate
todo               # mostra le attività incomplete
verbose            # raggruppa per file con numeri di riga
format=json|tsv|csv  # formato di output (predefinito: text)
active             # mostra le attività per il file attivo
daily              # mostra le attività dalla nota quotidiana
```

**Esempi:**

```bash
# Elenca tutte le attività nella cassaforte
tasks

# Elenca le attività incomplete nella cassaforte
tasks todo

# Elenca le attività completate da un file specifico
tasks file=Ricetta done

# Elenca le attività dalla nota quotidiana di oggi
tasks daily

# Conta le attività nella nota quotidiana
tasks daily total

# Elenca le attività con percorsi dei file e numeri di riga
tasks verbose

# Filtra per stato personalizzato (quota i caratteri speciali)
tasks 'status=?'
```

### `task`

Mostra o aggiorna un'attività.

```bash
ref=<path:line>    # riferimento dell'attività (percorso:riga)
file=<name>        # nome del file
path=<path>        # percorso del file
line=<n>           # numero di riga
status="<char>"    # imposta il carattere di stato

toggle             # alterna lo stato dell'attività
daily              # nota quotidiana
done               # segna come completata
todo               # segna come da fare
```

**Esempi:**

```bash
# Mostra informazioni sull'attività
task file=Ricetta line=8
task ref="Ricetta.md:8"

# Alterna il completamento dell'attività
task ref="Ricetta.md:8" toggle

# Alterna un'attività nella nota quotidiana
task daily line=3 toggle

# Imposta lo stato dell'attività
task file=Ricetta line=8 done      # → [x]
task file=Ricetta line=8 todo      # → [ ]
task file=Ricetta line=8 status=-  # → [-]
task daily line=3 done             # Segna come completata l'attività nella nota quotidiana
```


## Modelli

Comandi per i [[Modelli|Modelli]].

### `templates`

Elenca i modelli.

```bash
total              # restituisce il conteggio dei modelli
```

### `template:read`

Leggi il contenuto di un modello.

```bash
name=<template>    # (required) nome del modello
title=<title>      # titolo per la risoluzione delle variabili

resolve            # risolvi le variabili del modello
```

### `template:insert`

Inserisci un modello nel file attivo.

```bash
name=<template>    # (required) nome del modello
```

**Note:**
- L'opzione `resolve` elabora le variabili `{{date}}`, `{{time}}`, `{{title}}`
- Usa `create path=<percorso> template=<nome>` per creare un file con un modello

## Temi e frammenti

Comandi per i [[Temi|Temi]] e i [[Snippet CSS|frammenti CSS]].

### `themes`

Elenca i temi installati.

```bash
versions           # include i numeri di versione
```

### `theme`

Mostra il tema attivo o ottieni informazioni.

```bash
name=<name>        # nome del tema per i dettagli
```

### `theme:set`

Imposta il tema attivo.

```bash
name=<name>        # (required) nome del tema (vuoto per il predefinito)
```

### `theme:install`

Installa un tema della community.

```bash
name=<name>        # (required) nome del tema

enable             # attiva dopo l'installazione
```

### `theme:uninstall`

Disinstalla un tema.

```bash
name=<name>        # (required) nome del tema
```

### `snippets`

Elenca i frammenti CSS installati.

### `snippets:enabled`

Elenca i frammenti CSS abilitati.

### `snippet:enable`

Abilita un frammento CSS.

```bash
name=<name>        # (required) nome del frammento
```

### `snippet:disable`

Disabilita un frammento CSS.

```bash
name=<name>        # (required) nome del frammento
```

## Note univoche

Comandi per [[Note univoche|Note univoche]].

### `unique`

Crea una nota univoca.

```bash
name=<text>        # nome della nota
content=<text>     # contenuto iniziale
paneType=tab|split|window    # tipo di pannello in cui aprire

open               # apri il file dopo la creazione
```

## Cassaforte

### `vault`

Mostra informazioni sulla cassaforte.

```bash
info=name|path|files|folders|size  # restituisce solo informazioni specifiche
```

### `vaults`

Elenca le cassaforti conosciute.

```bash
total              # restituisce il conteggio delle cassaforti
verbose            # include i percorsi delle cassaforti
```

### `vault:open`

Passa a una cassaforte diversa (solo TUI).

```bash
name=<name>        # (required) nome della cassaforte
```

## Visualizzatore web

Comandi per il [[Visualizzatore web|Visualizzatore web]].

### `web`

Apri un URL nel visualizzatore web.

```bash
url=<url>          # (required) URL da aprire

newtab             # apri in una nuova scheda
```

## Conteggio parole

Comandi per il [[Conteggio parole|Conteggio parole]].

### `wordcount`

Conta parole e caratteri (predefinito: file attivo).

```bash
file=<name>        # nome del file
path=<path>        # percorso del file

words              # restituisce solo il conteggio delle parole
characters         # restituisce solo il conteggio dei caratteri
```

## Area di lavoro

Comandi per l'[[Area di lavoro|Area di lavoro]] e il plugin [[Aree di lavoro|Aree di lavoro]].

### `workspace`

Mostra l'albero dell'area di lavoro.

```bash
ids                # include gli ID degli elementi dell'area di lavoro
```

### `workspaces`

Elenca le aree di lavoro salvate.

```bash
total              # restituisce il conteggio delle aree di lavoro
```

### `workspace:save`

Salva il layout corrente come area di lavoro.

```bash
name=<name>        # nome dell'area di lavoro
```

### `workspace:load`

Carica un'area di lavoro salvata.

```bash
name=<name>        # (required) nome dell'area di lavoro
```

### `workspace:delete`

Elimina un'area di lavoro salvata.

```bash
name=<name>        # (required) nome dell'area di lavoro
```

### `tabs`

Elenca le schede aperte.

```bash
ids                # include gli ID delle schede
```

### `tab:open`

Apri una nuova scheda.

```bash
group=<id>         # ID del gruppo di schede
file=<path>        # file da aprire
view=<type>        # tipo di vista da aprire
```

### `recents`

Elenca i file aperti di recente.

```bash
total              # restituisce il conteggio dei file recenti
```

## Comandi per sviluppatori

Comandi per aiutarti a sviluppare [[Plugin della comunità|plugin della community]] e [[Temi|Temi]]. Scopri di più visitando la [Documentazione per sviluppatori Obsidian](https://docs.obsidian.md).

### `devtools`

Attiva/disattiva gli strumenti per sviluppatori Electron.

### `dev:debug`

Collega/scollega il debugger Chrome DevTools Protocol.

```bash
on                 # collega il debugger
off                # scollega il debugger
```

### `dev:cdp`

Esegui un comando Chrome DevTools Protocol.

```bash
method=<CDP.method>  # (required) metodo CDP da chiamare
params=<json>        # parametri del metodo come JSON
```

### `dev:errors`

Mostra gli errori JavaScript catturati.

```bash
clear              # cancella il buffer degli errori
```

### `dev:screenshot`

Acquisisci uno screenshot (restituisce PNG in base64).

```bash
path=<filename>    # percorso del file di output
```

### `dev:console`

Mostra i messaggi della console catturati.

```bash
limit=<n>                        # numero massimo di messaggi da mostrare (predefinito 50)
level=log|warn|error|info|debug  # filtra per livello di log

clear                            # cancella il buffer della console
```

### `dev:css`

Ispeziona CSS con posizioni nel sorgente.

```bash
selector=<css>     # (required) selettore CSS
prop=<name>        # filtra per nome della proprietà
```

### `dev:dom`

Interroga elementi DOM.

```bash
selector=<css>     # (required) selettore CSS
attr=<name>        # ottieni il valore dell'attributo
css=<prop>         # ottieni il valore della proprietà CSS

total              # restituisce il conteggio degli elementi
text               # restituisce il contenuto testuale
inner              # restituisce innerHTML invece di outerHTML
all                # restituisce tutte le corrispondenze invece della prima
```

### `dev:mobile`

Attiva/disattiva l'emulazione mobile.

```bash
on                 # abilita l'emulazione mobile
off                # disabilita l'emulazione mobile
```

### `eval`

Esegui JavaScript e restituisci il risultato.

```bash
code=<javascript>  # (required) codice JavaScript da eseguire
```

## Scorciatoie da tastiera

Queste scorciatoie sono disponibili nella [[#Usare l'interfaccia terminale|TUI]].

### Navigazione

| Azione                                                        | Scorciatoia     |
| ------------------------------------------------------------- | --------------- |
| Sposta il cursore a sinistra                                  | `←` / `Ctrl+B`  |
| Sposta il cursore a destra (accetta il suggerimento a fine riga) | `→` / `Ctrl+F` |
| Vai all'inizio della riga                                     | `Ctrl+A`        |
| Vai alla fine della riga                                      | `Ctrl+E`        |
| Sposta indietro di una parola                                 | `Alt+B`         |
| Sposta avanti di una parola                                   | `Alt+F`         |

### Modifica

| Azione                          | Scorciatoia                |
| ------------------------------- | -------------------------- |
| Elimina fino all'inizio della riga | `Ctrl+U`                |
| Elimina fino alla fine della riga  | `Ctrl+K`                |
| Elimina la parola precedente    | `Ctrl+W` / `Alt+Backspace` |

### Completamento automatico

| Azione                                               | Scorciatoia  |
| ---------------------------------------------------- | ------------ |
| Entra in modalità suggerimenti / accetta suggerimento selezionato | `Tab`       |
| Esci dalla modalità suggerimenti                     | `Shift+Tab`  |
| Entra in modalità suggerimenti (da input vuoto)      | `↓`          |
| Accetta primo/selezionato suggerimento (a fine riga) | `→`          |

### Cronologia

| Azione                                                             | Scorciatoia     |
| ------------------------------------------------------------------ | --------------- |
| Voce precedente nella cronologia / naviga suggerimenti verso l'alto | `↑` / `Ctrl+P` |
| Voce successiva nella cronologia / naviga suggerimenti verso il basso | `↓` / `Ctrl+N` |
| Ricerca inversa nella cronologia (digita per filtrare, `Ctrl+R` per scorrere) | `Ctrl+R`       |

### Altro

| Azione                                                   | Scorciatoia          |
| -------------------------------------------------------- | -------------------- |
| Esegui comando o accetta suggerimento                    | `Enter`              |
| Annulla completamento automatico / esci dai suggerimenti / cancella input | `Escape`             |
| Pulisci schermo                                          | `Ctrl+L`             |
| Esci                                                     | `Ctrl+C` / `Ctrl+D`  |

## Risoluzione dei problemi

Se hai problemi nell'esecuzione di Obsidian CLI:

- Assicurati di usare l'ultima [[Aggiorna Obsidian|versione del programma di installazione di Obsidian]] (1.12.7 o superiore).
- Se hai appena aggiornato Obsidian da una versione precedente, disattiva l'impostazione della CLI e riattivala, poi consenti a Obsidian di eseguire la registrazione automatica del PATH.
- Riavvia il terminale dopo aver registrato la CLI affinché le modifiche al PATH abbiano effetto.
- Obsidian deve essere in esecuzione. La CLI si connette all'istanza Obsidian in esecuzione.

### Windows

Obsidian CLI su Windows richiede il programma di installazione di Obsidian 1.12.7+. Consulta [[Aggiorna Obsidian|Aggiornamento della versione del programma di installazione]].

Windows utilizza un redirector terminale che connette Obsidian a stdin/stdout correttamente. Questo è necessario perché Obsidian normalmente viene eseguito come app GUI, incompatibile con gli output del terminale su Windows. Quando installi Obsidian 1.12.7+ il redirector terminale `Obsidian.com` verrà aggiunto nella cartella in cui hai installato il file `Obsidian.exe`.

La registrazione della CLI aggiunge Obsidian nella variabile PATH dell'utente, che ha effetto solo dopo aver riavviato il terminale.

### macOS

La registrazione della CLI crea un collegamento simbolico in `/usr/local/bin/obsidian` che punta al binario CLI incluso nell'app. Questo richiede privilegi di amministratore — verrà mostrata una finestra di dialogo di sistema.

Verifica che il collegamento simbolico esista e punti al binario corretto:

```
ls -l /usr/local/bin/obsidian
```

Se il collegamento simbolico manca, crealo manualmente:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Se hai precedentemente registrato la CLI con una versione più vecchia di Obsidian, potresti avere una voce PATH residua in `~/.zprofile`. Il nuovo processo di registrazione la rimuove automaticamente, ma se rimane, puoi eliminare in sicurezza le righe che iniziano con `# Added by Obsidian` da `~/.zprofile`.

### Linux

La registrazione della CLI copia il binario CLI in `~/.local/bin/obsidian`. Questo viene fatto perché alcuni metodi di installazione Linux vengono eseguiti da directory temporanee che non possono essere collegate simbolicamente in modo persistente.

Assicurati che `~/.local/bin` sia nel tuo PATH. Aggiungi quanto segue al tuo `~/.bashrc` o `~/.zshrc` se non lo è:

```
export PATH="$PATH:$HOME/.local/bin"
```

Verifica che il binario esista:

```
ls -l ~/.local/bin/obsidian
```

Se il binario manca, copialo manualmente dalla directory di installazione di Obsidian:

```
cp /percorso/di/Obsidian/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```
