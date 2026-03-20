---
permalink: data-storage
publish: true
mobile: true
description: Questa pagina spiega come Obsidian archivia i dati sul tuo dispositivo.
aliases:
  - How Obsidian stores data
---
Obsidian archivia le tue note come file di [[Sintassi di formattazione di base|testo normale formattato in Markdown]] in una _cassaforte_. Una cassaforte è una cartella nel tuo file system locale, comprese eventuali sottocartelle.

Poiché le note sono file di testo normale, puoi utilizzare altri editor di testo e gestori di file per modificare e gestire le note. Obsidian aggiorna automaticamente la tua cassaforte per rimanere al passo con eventuali modifiche esterne.

Puoi creare una cassaforte ovunque il tuo sistema operativo lo consenta. Obsidian si sincronizza con [[Introduzione a Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git e molti altri servizi di terze parti.

Puoi aprire più cartelle come cassaforti individuali, ad esempio per separare le note del lavoro da quelle della scuola.

> [!warning] Cassaforti dentro cassaforti
> Poiché i [[Collegamenti interni]] sono locali alla cassaforte, consigliamo di non creare cassaforti all'interno di altre cassaforti. I collegamenti potrebbero non essere aggiornati correttamente.

## Impostazioni della cassaforte

Obsidian crea una [[cartella di configurazione]] `.obsidian` nella cartella radice della cassaforte, che contiene le preferenze specifiche di quella cassaforte, come [[scorciatoie da tastiera]], [[temi]] e [[plugin della community]].

Per impostazione predefinita, la maggior parte dei sistemi operativi nasconde le cartelle che iniziano con un punto (`.`), quindi potrebbe essere necessario aggiornare le impostazioni del gestore di file per visualizzarla.

- **macOS**: Nel Finder, premi `Cmd+Maiusc+.` (punto) per mostrare i file nascosti.
- **Windows**: [Mostra file nascosti](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Nella maggior parte dei gestori di file, premi `Ctrl + h` per mostrare i file nascosti.

> [!tip] Aggiungere `.obsidian` a Git
> I file `.obsidian/workspace.json` e `.obsidian/workspaces.json` memorizzano il layout corrente dell'area di lavoro e si aggiornano ogni volta che apri un nuovo file. Se usi [Git](https://git-scm.com) per gestire la tua cassaforte, potresti voler aggiungere questi file al `.gitignore`.

## Impostazioni globali

Obsidian archivia le impostazioni globali in una cartella di sistema. La posizione della cartella di sistema dipende dal sistema operativo in uso.

- **macOS**: `/Users/tuonomeutente/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` o `~/.config/obsidian/`

> [!warning] Non creare una cassaforte nella cartella di sistema. Questo potrebbe causare dati corrotti o perdita di dati.

## IndexedDB

IndexedDB è un database lato client di basso livello che Obsidian utilizza per l'archiviazione backend. Aiuta a mantenere lo stato delle connessioni di [[Introduzione a Obsidian Sync|Obsidian Sync]] e preserva la [[#Cache dei metadati]] quando l'applicazione viene chiusa.

> [!warning] Se la [Modalità di isolamento](<https://support.apple.com/en-us/105120>) di Apple è abilitata e Obsidian non è escluso, questi file di database non verranno salvati, richiedendo la reindicizzazione ogni volta che l'app viene avviata.

### Cache dei metadati

Per offrire un'esperienza rapida durante l'uso dell'app, Obsidian mantiene un registro locale dei metadati sui file nella tua cassaforte chiamato **cache dei metadati**. Questi metadati alimentano molte funzionalità nell'app, dalla vista grafo alla vista struttura.

Obsidian mantiene questa cache sincronizzata con i file nella tua cassaforte, ma è possibile che i dati perdano la sincronizzazione con i file sottostanti. Nel caso in cui questo accada alla tua cassaforte, puoi ricostruire la cache dei metadati dalle impostazioni dell'app nella sezione *File e collegamenti*.
