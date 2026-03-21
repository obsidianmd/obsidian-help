---
permalink: web-clipper/capture
aliases:
  - Clip web pages
---
Una volta installata l'estensione del browser [[Introduction to Obsidian Web Clipper|Web Clipper]], è possibile accedervi in diversi modi, a seconda del browser:

1. L'icona di Obsidian nella barra degli strumenti del browser.
2. Scorciatoie da tastiera, per attivare l'estensione dalla tastiera.
3. Menu contestuale, facendo clic destro sulla pagina web visitata.

Per salvare una pagina in Obsidian, fare clic sul pulsante **Aggiungi a Obsidian**.

## Catturare una pagina

Quando si apre l'estensione, Web Clipper estrae i dati dalla pagina web corrente seguendo le impostazioni nel [[Modelli|modello]]. È possibile creare modelli personalizzati e personalizzare l'output utilizzando [[variables|variabili]] e [[filters|filtri]].

Per impostazione predefinita, Web Clipper tenta di estrarre in modo intelligente solo il contenuto principale dell'articolo, escludendo gli altri elementi della pagina. Tuttavia, è possibile sovrascrivere questo comportamento nei seguenti modi:

- Se è presente un modello personalizzato, viene utilizzato il modello.
- Se è presente una selezione, viene utilizzata la selezione. È possibile usare `Ctrl/Cmd+A` per selezionare l'intera pagina.
- Se sono presenti delle [[Highlight web pages|evidenziazioni]], vengono utilizzate le evidenziazioni.

## Scaricare le immagini

Le immagini non vengono scaricate automaticamente quando si usa Web Clipper. Le immagini puntano invece al loro URL sul web. Questo risparmia spazio nella cassaforte, ma significa che le immagini non saranno accessibili offline o se l'URL smette di funzionare.

È possibile scaricare le immagini per qualsiasi file in Obsidian usando il [[Command palette|comando]] chiamato **Scarica allegati per il file attuale**. Questo comando può anche essere associato a una scorciatoia da tastiera in Obsidian.

## Scorciatoie da tastiera

Web Clipper include scorciatoie da tastiera utilizzabili per velocizzare il flusso di lavoro. Per modificare le mappature dei tasti andare in **Impostazioni di Web Clipper** → **Generale** e seguire le istruzioni per il proprio browser. Le mappature possono essere modificate per tutti i browser tranne Safari, che non supporta la modifica delle scorciatoie da tastiera.

| Azione                              | macOS          | Windows/Linux   |
| ----------------------------------- | -------------- | --------------- |
| Apri clipper                        | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Clip veloce                         | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Attiva/disattiva modalità evidenziatore | `Opt+Shift+H`  | `Alt+Shift+H`   |

## Funzionalità dell'interfaccia

L'interfaccia di Web Clipper è divisa in quattro sezioni:

1. **Intestazione** dove è possibile cambiare modello, attivare l'[[Highlight web pages|evidenziazione]], la [[Reader|modalità lettura]] e accedere alle impostazioni.
2. **Proprietà** mostra i [[Properties|metadati]] estratti dalla pagina che verranno salvati come [[Properties|Proprietà]] in Obsidian.
3. **Contenuto della nota** che verrà salvato in Obsidian.
4. **Piè di pagina** consente di selezionare la cassaforte e la cartella e di aggiungere a Obsidian.

Le funzionalità dell'intestazione includono:

- Menu a tendina **Modello** per passare tra i [[Modelli|modelli]] salvati aggiunti nelle impostazioni di Web Clipper.
- Pulsante **Più (...)** per visualizzare le variabili della pagina utilizzabili nei modelli.
- Pulsante **Evidenziatore** per attivare l'[[Highlight web pages|evidenziazione]].
- Pulsante **Ingranaggio** per aprire le impostazioni di Web Clipper.

Le funzionalità del piè di pagina includono:

- Pulsante **Aggiungi a Obsidian** per salvare i dati in Obsidian.
- Menu a tendina **Vault** per passare tra le cassaforti salvate aggiunte nelle impostazioni di Web Clipper.
- Campo **Cartella** per definire in quale cartella salvare.
- **Interprete** per eseguire [[Interpret web pages|prompt in linguaggio naturale]] sulla pagina.
