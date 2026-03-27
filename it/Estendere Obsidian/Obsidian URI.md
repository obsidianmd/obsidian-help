---
permalink: uri
---
L'URI di Obsidian è un protocollo URI personalizzato supportato da Obsidian che consente di attivare varie azioni, come aprire una nota o creare una nota. L'URI di Obsidian permette l'automazione e i flussi di lavoro tra app diverse.

## Formato URI

Gli URI di Obsidian utilizzano il seguente formato:

```
obsidian://action?param1=value&param2=value
```

Il parametro `action` è l'azione che si desidera eseguire. Le azioni disponibili includono:

- `open` per aprire una nota.
- `new` per creare o aggiungere a una nota esistente.
- `daily` per creare o aprire la nota quotidiana.
- `unique` per creare una nuova nota univoca.
- `search` per aprire una ricerca.
- `choose-vault` per aprire il gestore delle casseforti.

> [!warning] Codifica
> Assicurarsi che i valori siano correttamente codificati come URI. Ad esempio, i caratteri barra `/` devono essere codificati come `%2F` e i caratteri spazio devono essere codificati come `%20`.
> 
> Questo è particolarmente importante perché un carattere "riservato" codificato in modo errato può compromettere l'interpretazione dell'URI. [Vedere qui per i dettagli](https://en.wikipedia.org/wiki/Percent-encoding).

## Aprire una nota

L'azione `open` apre una cassaforte di Obsidian, oppure apre un file all'interno di quella cassaforte.

### Esempi

- `obsidian://open?vault=my%20vault`
  Questo apre la cassaforte `my vault`. Se la cassaforte è già aperta, mette a fuoco la finestra.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Questo apre la cassaforte identificata dall'ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Questo apre la nota `my note.md` nella cassaforte `my vault`, a condizione che il file esista.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Questo cercherà qualsiasi cassaforte che contenga il percorso `/home/user/my vault/path/to/my note`. Quindi, il resto del percorso viene passato al parametro `file`. Ad esempio, se esiste una cassaforte in `/home/user/my vault`, allora questo sarebbe equivalente al parametro `file` impostato su `path/to/my note`.


> [!tip] Aprire un'intestazione o un blocco
> Con la corretta codifica URI, è possibile navigare a un'intestazione o un blocco all'interno di una nota. `Note%23Heading` navigherebbe all'intestazione chiamata "Heading", mentre `Note%23%5EBlock` navigherebbe al blocco chiamato "Block".

### Parametri

- `vault` può essere il nome della cassaforte o l'ID della cassaforte[^1].
- `file` può essere un nome di file o un percorso dalla radice della cassaforte al file specificato. Se l'estensione del file è `md`, l'estensione può essere omessa.
- `path` un percorso assoluto del file system verso un file.
  - L'uso di questo parametro sovrascrive sia `vault` che `file`.
  - Questo farà sì che l'app cerchi la cassaforte più specifica che contiene il percorso del file specificato.
  - Quindi il resto del percorso sostituisce il parametro `file`.
- `prepend` aggiungerà all'inizio del file e tenterà di unire le proprietà.
- `append` aggiungerà alla fine del file e tenterà anche di unire le proprietà.
- `paneType` (opzionale) determina dove la nota verrà aperta nell'interfaccia.
  - se non presente, viene sostituita l'ultima scheda attiva.
  - `paneType=tab` apre in una nuova scheda.
  - `paneType=split` apre in un nuovo gruppo di schede.
  - `paneType=window` apre in una finestra pop-out (solo Desktop).

## Creare una nota

L'azione `new` crea una nuova nota nella cassaforte, opzionalmente con del contenuto.

### Esempi

- `obsidian://new?vault=my%20vault&name=my%20note`
  Questo apre la cassaforte `my vault` e crea una nuova nota chiamata `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Questo apre la cassaforte `my vault` e crea una nuova nota in `path/to/my note`.

### Parametri

- `vault` può essere il nome della cassaforte o l'ID della cassaforte[^1]. Come per l'azione `open`.
- `name` il nome del file da creare. Se specificato, la posizione del file verrà scelta in base alle preferenze "Posizione predefinita delle note".
- `file` un percorso assoluto della cassaforte, incluso il nome. Sovrascrive `name` se specificato.
- `path` un percorso globalmente assoluto. Funziona in modo simile all'opzione `path` nell'azione `open`, che sovrascrive sia `vault` che `file`.
- `paneType` (opzionale) determina dove la nota verrà aperta nell'interfaccia. Come per l'azione `open`.
- `content` (opzionale) il contenuto della nota.
- `clipboard` (opzionale) utilizza il contenuto degli appunti invece di specificare `content`.
- `silent` (opzionale) includere questo parametro se non si desidera aprire la nuova nota.
- `append` (opzionale) includere questo parametro per aggiungere a un file esistente, se presente.
- `overwrite` (opzionale) sovrascrive un file esistente, se presente, ma solo se `append` non è impostato.
- `x-success` (opzionale) vedere [[#Usare i parametri x-callback-url]].

## Creare o aprire la nota quotidiana

L'azione `daily` crea o apre la nota quotidiana. Il plugin [[Note del giorno|Note del giorno]] deve essere abilitato.

### Esempi

- `obsidian://daily?vault=my%20vault`
  Questo apre la cassaforte `my vault` e crea o apre la nota quotidiana.

### Parametri

L'azione `daily` accetta gli stessi parametri dell'azione `new`.

## Nota univoca

L'azione `unique` crea una nuova nota univoca nella cassaforte. Il plugin [[Plugins/Unique note creator|Note univoche]] deve essere abilitato.

### Esempi

- `obsidian://unique?vault=my%20vault`
  Questo apre la cassaforte `my vault` e crea una nuova nota univoca.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Questo apre la cassaforte `my vault` e crea una nuova nota univoca con il contenuto `Hello World`.

### Parametri

- `vault` può essere il nome della cassaforte o l'ID della cassaforte[^1]. Come per l'azione `open`.
- `paneType` (opzionale) determina dove la nota verrà aperta nell'interfaccia. Come per l'azione `open`.
- `content` (opzionale) il contenuto della nota.
- `clipboard` (opzionale) utilizza il contenuto degli appunti invece di specificare `content`.
- `x-success` (opzionale) vedere [[#Usare i parametri x-callback-url]].

## Aprire la ricerca

L'azione `search` apre [[Cerca|Cerca]] nella cassaforte specificata, e opzionalmente esegue una ricerca.

### Esempi

- `obsidian://search?vault=my%20vault`
  Questo apre la cassaforte `my vault` e apre [[Cerca|Cerca]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Questo apre la cassaforte `my vault`, apre [[Cerca|Cerca]] ed esegue una ricerca per `Obsidian`.

### Parametri

- `vault` può essere il nome della cassaforte o l'ID della cassaforte[^1]. Come per l'azione `open`.
- `query` (opzionale) il termine di ricerca da eseguire.

## Aprire il gestore delle casseforti

L'azione `choose-vault` apre il [[Gestisci casseforti|gestore delle casseforti]].

### Esempi

- `obsidian://choose-vault`

## Integrazione con Hook

Questa azione URI di Obsidian è pensata per l'uso con [Hook](https://hookproductivity.com/).

### Esempio

`obsidian://hook-get-address`

### Parametri

- `vault` (opzionale) può essere il nome della cassaforte o l'ID della cassaforte[^1]. Se non fornito, verrà utilizzata la cassaforte corrente o l'ultima con focus.
- `x-success` (opzionale) vedere [[#Usare i parametri x-callback-url]].
- `x-error` (opzionale) vedere [[#Usare i parametri x-callback-url]].

Se `x-success` è definito, questa API lo utilizzerà come x-callback-url. Altrimenti, copierà un collegamento Markdown della nota attualmente con focus negli appunti, come URL `obsidian://open`.

## Usare i parametri x-callback-url

Alcuni endpoint accettano i parametri x-callback-url `x-success` e `x-error`. Quando forniti, Obsidian passerà i seguenti dati al callback `x-success`:

- `name` il nome del file, senza l'estensione del file.
- `url` l'URI `obsidian://` per questo file.
- `file` (solo desktop) l'URL `file://` per questo file.

Ad esempio, se Obsidian riceve
`obsidian://.....x-success=myapp://x-callback-url`, la risposta sarà `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Formati abbreviati

Oltre ai formati sopra descritti, sono disponibili altri due formati "abbreviati" per aprire casseforti e file:

1. `obsidian://vault/my vault/my note` è equivalente a `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` è equivalente a `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Risoluzione dei problemi

### Registrare l'URI di Obsidian

Su Windows e macOS, eseguire l'app una volta dovrebbe essere sufficiente per registrare il protocollo URI di Obsidian sul computer.

Su Linux, il processo è molto più complesso:

1. Assicurarsi di creare un file `obsidian.desktop`. [Vedere qui per i dettagli](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Assicurarsi che il file desktop specifichi il campo `Exec` come `Exec=executable %u`. Il `%u` viene utilizzato per passare gli URI `obsidian://` all'app.
3. Se si utilizza il programma di installazione AppImage, potrebbe essere necessario scompattarlo usando `Obsidian-x.y.z.AppImage --appimage-extract`. Quindi assicurarsi che la direttiva `Exec` punti all'eseguibile scompattato.


[^1]: L'ID della cassaforte è il codice casuale di 16 caratteri assegnato alla cassaforte, ad esempio `ef6ca3e3b524d22f`. Questo ID è univoco per cartella sul computer. L'ID può essere trovato aprendo il selettore delle casseforti e cliccando "Copia ID vault" nel menu contestuale della cassaforte desiderata.
