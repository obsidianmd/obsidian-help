Obsidian supporta il protocollo URI personalizzato  `obsidian://` che può essere utilizzato per attivare varie azioni all'interno dell'app. Questo protocollo è comunemente usato su MacOS per flussi di lavoro tra app.

## Installare l'URI di Obsidian

Per assicurarsi che il sistema operativo reindirizzi gli URI `obsidian://` verso l'applicazione Obsidian, potrebbero essere necessari dei passaggi aggiuntivi.

- Su Windows, dovrebbe essere sufficiente avviare Obsidian la prima volta. Il protocollo dell'URI `obsidian://` verrà automaticamente salvato nel registro di sistema.
- Su MacOS, dovrebbe essere sufficiente avviare Obsidian la prima volta, tuttavia, ciò è valido soltanto per l'installer dell'app dalla versione 0.8.12 e successive.
- Su Linux, il processo è molto più complesso:
	- Per prima cosa, creare un file `obsidian.desktop`. [Vedere qui per i dettagli](https://developer.gnome.org/integration-guide/stable/desktop-files.html.en)
	- Assicurarsi che  il campo `Exec` nel file desktop sia `Exec=executable %u`. L'opzione `%u` è utilizzata per passare gli URI `obsidian://` all'applicazione.
	- Se si utilizza un programma d'installazione AppImage, potrebbe essere necessario decomprimerlo con il comando `Obsidian-x.y.z.AppImage --appimage-extract`. Infine, assicurarsi che la direttiva `Exec` punti all'eseguibile scompattato.

## Utilizzare gli URI di Obsidian

Gli URI di Obsidian hanno solitamente questo aspetto:

```
obsidian://action?param1=valore&param2=valore
```

- Di solito `action` indica l'azione da eseguire.

### Codifica

==Importante==

Assicurarsi che i valori siano correttamente codificati come URI. Ad esempio, il carattere slash `/` deve essere codificato come `%2F` e gli spazi come `%20`.
Questo è particolarmente importante poiché un carattere "riservato" e impropriamente codificato può interrompere l'interpretazione dell'URI. [Vedere qui per i dettagli](https://en.wikipedia.org/wiki/Percent-encoding)

### Azioni disponibili

#### Azione `open`

Descrizione: Apre un Vault di Obsidian, ed eventualmente un file all'interno del Vault.

Possibili parametri:

- `vault` può indicare sia il nome del Vault che il suo ID.
	- Il nome del Vault è semplicemente il nome della cartella del Vault.
	- L'ID del Vault è un codice casuale di 16 caratteri assegnato al Vault. Sul computer, questo ID è univoco per ogni cartella. Per esempio: `ef6ca3e3b524d22f`.
- `file` può indicare sia il nome del file che il suo percorso completo.
	- Per recuperare il file indicato, Obsidian utilizza lo stesso meccanismo di risoluzione dei collegamenti `[[wikilink]]` all'interno del Vault.
	- Se l'estensione del file è `md`, l'estensione del file può essere omessa.
- `path` indica il percorso assoluto di un file all'interno del file system.
	- L'utilizzo di questo parametro sovrascriverà sia `vault` che `file`.
	- L'app cercherà il percorso del Vault che contiene il percorso del file specificato.
	- Infine, il resto del percorso verrà inviato al parametro `file`.

Esempi:

- `obsidian://open?vault=mio%20vault`
	Apre il Vault `mio vault`. Se il Vault è già aperto, la finestra andrà in primo piano.

- `obsidian://open?vault=ef6ca3e3b524d22f`
	Apre il Vault identificato dall'ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=mio%20vault&file=mia%20nota`
	Apre la nota `mia nota` all'interno del Vault `mio vault`, assumendo che `mia nota` esista e il nome del file sia `mia nota.md`.

- `obsidian://open?vault=mio%20vault&file=mia%20nota.md`
	Come sopra, apre la nota `mia nota` che si trova nel Vault `mio vault`.

- `obsidian://open?vault=mio%20vault&file=posizione%2Fdella%2Fmia%20nota`
	Apre la nota situata in `posizione/della/mia nota` nel Vault `mio vault`.

- `obsidian://open?path=%2Fhome%2Fuser%2Fmio%20vault%2Fposizione%2Fdella%2Fmia%20nota`
	Cerca un Vault che contiene il percorso `/home/user/mio vault/posizione/della/mia nota`. Una volta trovato, il resto del percorso viene assegnato al parametro `file`. Per esempio, se esiste un Vault in `/home/user/mio vault`, al parametro `file` viene assegnato il valore `posizione/della/mia nota`.

- `obsidian://open?path=D%3A%5CDocumenti%5CMio%20vault%5CMia%20nota`
	Cerca un Vault che contiene il percorso `D:\Documenti\Mio vault\Mia nota`. Una volta trovato, il resto del percorso viene assegnato al parametro `file`. Per esempio, se esiste un Vault in `D:\Documenti\Mio vault`, al parametro `file` viene assegnato il valore `Mia nota`.
	
#### Azione `search`

Descrizione: Apre il riquadro di ricerca nel Vault. Opzionalmente esegue una ricerca.

Possibili parametri:

- `vault` può indicare sia il nome del Vault che il suo ID. Come l'azione `open`.
- `query` (opzionale) La query di ricerca da eseguire.

Esempi:

- `obsidian://search?vault=mio%20vault`
	Apre il Vault `mio vault`, dopodiché apre il riquadro di ricerca.

- `obsidian://search?vault=mio%20vault&query=MOC`
	Apre il Vault `mio vault`, poi apre il riquadro di ricerca, infine effettua una ricerca per il termine `MOC`.

## Forme abbreviate

Oltre alle forme sopra indicate, sono disponibili due ulteriori formati "abbreviati" per aprire Vault e file:

- `obsidian://vault/mio vault/mia nota` corrisponde a `obsidian://open?vault=mio%20vault&file=mia%20nota`
- `obsidian:///percorso/assoluto/della/mia nota` corrisponde a `obsidian://open?path=%2Fpercorso%2Fassoluto%2Fdella%2Fmia%20nota`
