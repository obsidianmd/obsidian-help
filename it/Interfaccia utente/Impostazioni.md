---
permalink: settings
publish: true
mobile: true
description: Scopri come personalizzare Obsidian attraverso l'interfaccia delle Impostazioni.
aliases:
  - Settings
---
Le impostazioni permettono di personalizzare l'esperienza con Obsidian. Configura le opzioni generali, le preferenze dell'editor, l'aspetto, le scorciatoie da tastiera e gestisci sia i plugin principali che quelli della community.

## Aprire le Impostazioni

### Desktop

Nella [[Barra laterale#Aprire le barre laterali nascoste|barra laterale sinistra]], seleziona **[[Impostazioni|Impostazioni]]** ![[lucide-cog.svg#icon]]. È possibile aprire le Impostazioni anche con la [[Riquadro comandi|tavolozza dei comandi]].

### Mobile

Nella barra laterale sinistra, seleziona **[[Impostazioni|Impostazioni]]** ![[lucide-cog.svg#icon]].

## Organizzazione delle impostazioni

Le impostazioni sono organizzate nelle seguenti categorie:

- **Opzioni** — Impostazioni principali dell'applicazione tra cui [[#Generale]], [[#Editor]], [[#File e collegamenti]], [[#Aspetto]] e [[#Scorciatoie da tastiera]].
- **[[Plugin principali|Plugin principali]]** — Plugin integrati forniti con Obsidian.
- **[[Plugin della comunità|Plugin della community]]** — Plugin di terze parti installati dalla community.

## Generale

La pagina Generale contiene informazioni sulla versione, impostazioni di aggiornamento, preferenze di lingua e gestione dell'account.

### Versione e aggiornamenti

Visualizza la versione corrente di Obsidian e la versione del programma di installazione nella parte superiore della pagina. Seleziona **Controlla aggiornamenti** per verificare manualmente la disponibilità di nuove versioni, oppure seleziona **[Leggi il registro delle modifiche](<https://obsidian.md/it/changelog/>)** per visualizzare le note di rilascio.

**Aggiornamenti automatici**

Quando abilitato, Obsidian verifica automaticamente la disponibilità di nuove versioni e notifica quando sono disponibili aggiornamenti.

**Ricevi versioni insider**

Aggiornamento automatico alle ultime [[Versioni ad accesso anticipato|versioni ad accesso anticipato]]. Queste versioni includono nuove funzionalità ma potrebbero essere meno stabili.

> [!info]+ Licenza Catalyst richiesta
> Questa opzione è disponibile solo per gli utenti con una [[Licenza Catalyst|licenza Catalyst]].

### Lingua

Seleziona la lingua preferita per l'interfaccia di Obsidian. Seleziona **[[Traduzioni|Scopri come aggiungere una nuova lingua a Obsidian]]** per contribuire a una traduzione.

### Aiuto

Seleziona **[[Home|Apri]]** per accedere alle risorse di aiuto, inclusi documentazione, forum della community e guide alla risoluzione dei problemi.

### Account

Gestisci il tuo account Obsidian e le licenze.

**Il tuo account**

Visualizza le informazioni del tuo account, inclusi nome utente ed email. Seleziona **[Gestisci](https://obsidian.md/it/account)** per accedere alle impostazioni dell'account, oppure seleziona **Esci** per disconnetterti dall'app.

**Licenza Catalyst**

Visualizza lo stato della tua licenza Catalyst. Se possiedi una [[Licenza Catalyst|licenza Catalyst]] attiva, il livello della licenza viene mostrato qui.

**Licenza commerciale**

Se supporti [Obsidian per il lavoro](<https://obsidian.md/it/blog/free-for-work/>), seleziona **Attiva** per inserire una chiave di licenza commerciale, oppure seleziona **[Acquista](https://obsidian.md/it/account/commercial)** per comprare una licenza. Seleziona **[[Licenza commerciale|Scopri di più]]** per informazioni sulle licenze commerciali.

### Avanzate

#### Notifica se l'avvio richiede più tempo del previsto

Quando abilitato, Obsidian visualizza una notifica se l'avvio è insolitamente lento. La notifica include informazioni diagnostiche sulla causa del ritardo. Seleziona l'icona del timer ![[lucide-timer.svg#icon]] accanto a questa impostazione per [[Aiuto e supporto#Controllare il tempo di avvio|controllare il tempo di avvio]].

## Editor

La pagina Editor contiene le impostazioni per la visualizzazione e la modifica delle note.

### Passa sempre alle nuove schede

Quando apri un collegamento in una nuova scheda, passa subito alla nuova scheda.

### Visualizzazione predefinita per le nuove schede

La visualizzazione predefinita con cui viene aperta una nuova scheda di file Markdown. Scegli tra [[Viste e modalità di modifica#Vista lettura|Vista lettura]] o [[Viste e modalità di modifica#Modifica|Modifica]].

### Modalità di modifica predefinita

La modalità di modifica predefinita con cui aprire una nuova scheda. Scegli tra [[Viste e modalità di modifica#Anteprima dal vivo|Anteprima dal vivo]] o [[Viste e modalità di modifica#Modalità sorgente|Modalità sorgente]].

### Stato dell'editor

Mostra il selettore della modalità di modifica nella [[Barra di stato|barra di stato]].

### Aspetto

#### Migliora leggibilità delle righe

Limita la lunghezza massima delle righe. Mostra meno contenuti sullo schermo ma rende i paragrafi lunghi più leggibili.

#### Non mostrare interruzioni di riga singole

Le specifiche Markdown ignorano le [[Sintassi di formattazione di base#Interruzioni di riga|interruzioni di riga]] singole nella vista lettura. Disattiva questa opzione per rendere visibili le interruzioni di riga singole.

#### Proprietà nel documento

Scegli come vengono visualizzate le [[Proprietà|proprietà]] nella parte superiore delle note. Seleziona **Codice** per mostrare le proprietà come YAML grezzo.

#### Comprimi intestazioni

[[Comprimi/espandi|Comprimi]] tutto il contenuto sotto un'intestazione selezionando l'icona di compressione accanto ad essa.

### Comprimi indentazioni

[[Comprimi/espandi|Comprimi]] parte di un'indentazione, come gli elenchi, selezionando l'icona di compressione.

#### Numeri di riga

Mostra il numero delle righe sul margine dell'editor.

#### Guide di indentazione

Mostra linee verticali di collegamento tra gli elenchi come guida visiva.

#### Da destra a sinistra (RTL)

Imposta la direzione del testo delle note da destra a sinistra.

#### Chiusura automatica delle parentesi

Chiude le parentesi e le virgolette automaticamente.

#### Completamento automatico della sintassi Markdown

Accoppia automaticamente i simboli per il grassetto, il corsivo, il codice e altro.

#### Indentazione intelligente delle liste

Gestisce automaticamente l'indentazione e i marcatori delle liste.

#### Utilizza le tabulazioni

Usa le tabulazioni per indentare premendo il tasto Tab. Disattiva questa opzione per indentare usando 4 spazi.

#### Converti automaticamente HTML

Converte automaticamente l'HTML in Markdown durante il copia-incolla e il trascinamento da pagine web.

Usa `Ctrl/Cmd+Shift+V` per incollare HTML senza convertirlo.

### Comportamento

#### Controllo ortografico

Attiva il controllo ortografico. Seleziona l'icona dell'ingranaggio per rimuovere le voci salvate dal dizionario personalizzato.

#### Lingue del controllo ortografico

**Windows e Linux:**

Scegli le lingue del controllo ortografico da usare. Seleziona l'icona più (+) per aggiungere lingue. Per rimuovere una lingua, seleziona la X accanto ad essa.

**macOS:**

Il controllo ortografico nativo rileva automaticamente la lingua utilizzata dal sistema operativo.

#### Dimensione tabulazione

Numero di spazi da usare per la tabulazione.

### Avanzate

#### Tasti di scelta rapida Vim

Permette di utilizzare la mappatura dei tasti di Vim nell'editor.

## File e collegamenti

La pagina File e collegamenti contiene le impostazioni per la gestione dei file, i collegamenti e il comportamento della cassaforte.

### Posizione predefinita delle note

Indica dove inserire le note appena create. Le opzioni includono:

- **Cartella principale del vault** — Le note vengono create nella radice della cassaforte.
- **Stessa cartella del file** — Le note vengono create nella stessa cartella della nota attualmente attiva.
- **Cartella personalizzata** — Le note vengono create in una cartella specifica a tua scelta.

### Posizione predefinita dei nuovi allegati

Dove vengono inseriti i nuovi [[Allegati|allegati]]. Le opzioni includono:

- **Cartella principale del vault** — Gli allegati vengono inseriti nella radice della cassaforte.
- **Cartella personalizzata** — Gli allegati vengono inseriti in una cartella specifica a tua scelta.
- **Stessa cartella del file** — Gli allegati vengono inseriti nella stessa cartella della nota attualmente attiva.
- **Sottocartella della cartella attuale** — Gli allegati vengono inseriti in una sottocartella all'interno della cartella della nota corrente.

### Collegamenti

#### Formato dei nuovi collegamenti

Quale formato di collegamento inserire durante la generazione automatica dei [[Collegamenti interni|collegamenti interni]]. Le opzioni includono:

- **Percorso più breve** — Usa il percorso univoco più breve verso il file collegato.
- **Percorso relativo al file** — Usa un percorso relativo al file corrente.
- **Percorso assoluto nella cassaforte** — Usa il percorso completo dalla radice della cassaforte.

#### Aggiorna sempre collegamenti interni

Quando abilitato, Obsidian aggiorna automaticamente i collegamenti interni quando rinomini un file. Disattiva questa opzione per ricevere una richiesta di aggiornamento dei collegamenti dopo la rinomina.

#### Usa Wikilink

Genera automaticamente Wikilink per `[[collegamenti]]` e `![[immagini]]` invece di collegamenti e immagini Markdown. Disabilita questa opzione per generare collegamenti Markdown.

#### Mostra tutti i tipi di file

Mostra i file con qualsiasi estensione anche se Obsidian non può aprirli nativamente, in modo da poterli collegare e vederli nell'esplora file e nel selettore rapido.

### Cestino

#### Conferma eliminazione file

Chiedi conferma prima di eliminare un file.

#### File eliminati

Indica cosa fare con i file dopo averli eliminati. Le opzioni includono:

- **Sposta nel cestino di sistema** — I file vengono spostati nel cestino del sistema operativo.
- **Sposta nel cestino di Obsidian** — I file vengono spostati nella cartella `.trash` nella cassaforte.
- **Elimina definitivamente** — I file vengono eliminati definitivamente e non possono essere recuperati.

### Avanzate

#### File esclusi

I file esclusi vengono nascosti in [[Cerca|Cerca]], [[Vista grafo|vista grafo]] e Menzioni scollegate ([[Riferimenti|Riferimenti]] e [[Collegamenti in uscita|Collegamenti in uscita]]), e sono meno visibili nel [[Selezione rapida|selettore rapido]] e nei suggerimenti dei collegamenti. Seleziona **Gestisci** per configurare i file esclusi.

#### Cambia cartella di configurazione

Usa una [[Cartella di configurazione|cartella di configurazione]] diversa da quella predefinita. Deve iniziare con un punto.

#### Abilita callback URI

Abilita l'uso di x-callback-url tramite x-success o x-error durante la gestione degli [[Obsidian URI|URI di Obsidian]].

#### Ricostruisci cache del vault

Ricostruisce la [[Come Obsidian archivia i dati#Cache dei metadati|cache dei metadati]] della cassaforte. La ricostruzione della cache potrebbe richiedere da pochi secondi a qualche minuto a seconda della dimensione della cassaforte. Seleziona **Ricostruisci** per avviare il processo.

## Aspetto

La pagina Aspetto contiene le impostazioni per personalizzare l'aspetto di Obsidian.

### Tema di base

Combinazione di colori predefinita di Obsidian. Le opzioni includono:

- **Adatta al sistema** — Si adatta alla modalità chiara o scura del sistema operativo.
- **Chiaro** — Usa la modalità chiara.
- **Scuro** — Usa la modalità scura.

### Colore d'accento

Scegli un colore d'accento da utilizzare nell'app. Seleziona il selettore di colore o l'icona di reset per personalizzare.

### Temi

Gestisci i [[Temi|temi]] installati e sfoglia i temi della community. Seleziona **Gestisci** per visualizzare e installare temi. Il menu a tendina mostra il tema attualmente attivo. L'icona della cartella ![[lucide-folder-open.svg#icon]] apre la cartella dei temi nella [[Cartella di configurazione|cartella di configurazione]].

### Temi della comunità installati

Mostra il numero di temi della community installati.

### Tipi di carattere

#### Carattere interfaccia

Imposta il carattere di base per Obsidian. Seleziona **Gestisci** per scegliere un carattere personalizzato o inserire il nome di un carattere.

#### Carattere testo

Imposta il carattere per la vista Modifica e la vista Lettura. Seleziona **Gestisci** per scegliere un carattere personalizzato o inserire il nome di un carattere.

#### Carattere monospazio

Imposta il carattere per posti come i blocchi di codice e i metadati iniziali. Seleziona **Gestisci** per scegliere un carattere personalizzato o inserire il nome di un carattere.

#### Dimensione carattere

Dimensione del carattere in pixel che ha effetto su editor e anteprima. Regola tramite il cursore.

#### Regolazione rapida carattere

Regola la dimensione del carattere con `Ctrl+Scroll` (Windows/Linux) o `Cmd+Scroll` (macOS), oppure usando il gesto di pinch-zoom sul trackpad.

### Interfaccia

#### Titolo in linea

Mostra il nome del file come titolo modificabile in linea con il contenuto del file. Il titolo in linea funziona come un'intestazione all'interno di Obsidian ma non aggiunge un'intestazione alla nota.

#### Mostra barra del titolo della scheda

Visualizza intestazione nella parte superiore di ogni scheda.

#### Mostra barra multifunzione

Visualizza la barra degli strumenti verticale sul lato della finestra. Scopri di più sulla [[Barra multifunzione|barra degli strumenti]].

#### Configurazione barra multifunzione

Configura i pulsanti visualizzati nella barra laterale primaria. Seleziona **Gestisci** per personalizzare.

> [!info]+ Configurazione barra multifunzione su mobile
> Su mobile, la personalizzazione della barra multifunzione funziona in modo diverso. Consulta [[Barra multifunzione#Mobile|Personalizzazione della barra multifunzione su mobile]] per i dettagli.

### Avanzate

#### Livello zoom

Livello di zoom generale dell'app. Regola tramite il cursore.

#### Menu nativi

Rende i menu nell'app come quelli del sistema operativo. Se attivo, i menu non saranno influenzati dal tema dell'app.

#### Cornice della finestra

Seleziona lo stile della cornice delle finestre di Obsidian. Riavviare l'app per applicare le modifiche. Le opzioni includono:

- **Cornice Obsidian** — Usa la cornice personalizzata di Obsidian.
- **Cornice nativa** — Usa la cornice predefinita del sistema operativo.
- **Cornice nascosta** — Nasconde completamente la barra del titolo.

#### Icona dell'app personalizzata

Imposta icona personalizzata per l'applicazione. Seleziona **Scegli** per selezionare un file icona (`.icns`, `.ico`, `.png` o `.svg`). Scopri di più sulle [[Aspetto#Icona dell'app personalizzata|icone personalizzate dell'app]].

#### Finestra Traslucida

Attiva l'effetto di traslucenza per aumentare il senso di profondità. Rende meglio in modalità scura. Non supportato su Linux.

> [!info]+ Solo macOS
> Questa funzionalità è progettata principalmente per macOS. Scopri di più sulla [[Aspetto#Trasparenza|traslucenza]].

#### Accelerazione hardware

Attiva l'accelerazione hardware. Utilizza la tua GPU per rendere Obsidian più fluido. Se disattivata, le prestazioni dell'app possono essere notevolmente ridotte ma potrebbe risolvere alcuni problemi rari.

### Snippet CSS

Gestisci e visualizza gli [[Snippet CSS|snippet CSS]] memorizzati nella cassaforte. Gli snippet CSS sono memorizzati in `/vault/.obsidian/snippets/`. Seleziona l'icona di aggiornamento per ricaricare gli snippet, o l'icona della cartella ![[lucide-folder-open.svg#icon]] per aprire la cartella degli snippet.

## Scorciatoie da tastiera

La pagina [[Tasti di scelta rapida|Scorciatoie da tastiera]] permette di visualizzare, impostare e personalizzare le [[Scorciatoie di modifica|scorciatoie da tastiera]] per i comandi in Obsidian.

Usa la barra di ricerca per filtrare i comandi e seleziona l'icona del filtro per mostrare solo i comandi con scorciatoie assegnate. Per aggiungere una scorciatoia, seleziona l'icona più (+) accanto a un comando. Per rimuovere una scorciatoia, seleziona l'icona X accanto alla combinazione di tasti.

## Plugin principali

I [[Plugin principali|plugin principali]] sono plugin integrati forniti con Obsidian. Ogni plugin aggiunge funzionalità specifiche all'app.

Per abilitare o disabilitare un plugin principale, seleziona l'interruttore accanto al nome del plugin. Seleziona l'icona più ![[lucide-plus-circle.svg#icon]] per visualizzare le [[Tasti di scelta rapida|scorciatoie da tastiera]] del plugin. Seleziona l'icona delle impostazioni ![[lucide-settings.svg#icon]] per aprire la pagina delle impostazioni del plugin.

Usa la barra di ricerca per filtrare i plugin per nome.

## Plugin della community

I [[Plugin della comunità|plugin della community]] sono plugin di terze parti creati dalla community di Obsidian. Sfoglia e installa plugin selezionando **Sfoglia**.

### Modalità con restrizioni

La [[Sicurezza dei plugin#Modalità con restrizioni|modalità con restrizioni]] disabilita tutti i plugin della community per sicurezza. Seleziona **Attiva** per abilitare la modalità con restrizioni.

### Plugin installati

Mostra il numero di plugin della community installati. Seleziona **Controlla aggiornamenti** per verificare la disponibilità di aggiornamenti dei plugin.

### Plugin installati

Visualizza e gestisci i plugin della community installati. Usa la barra di ricerca per filtrare i plugin per nome. Ogni plugin ha icone per impostazioni, scorciatoie da tastiera, finanziamento, disinstallazione e un interruttore per abilitarlo o disabilitarlo.
