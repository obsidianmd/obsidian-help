---
permalink: style-guide
publish: true
mobile: true
description: Questa pagina illustra la guida di stile per la scrittura della nostra documentazione di supporto.
aliases:
  - Style guide
---
La documentazione di Obsidian segue le linee guida di stile elencate in questa pagina. Queste linee guida si basano sulle migliori pratiche del settore, in particolare la [Google developer documentation style guide](<https://developers.google.com/style>) e la [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/). Per i casi limite non trattati di seguito, consultare quelle guide esterne come riferimenti secondari.

> [!tip]- Contribuisci
> La maggior parte della documentazione esisteva prima di questa guida di stile.
> 
> Se trovi violazioni di questa guida di stile, [crea un issue](https://github.com/obsidianmd/obsidian-docs/issues/new) e invia una pull request a [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologia e grammatica

### Stile linguistico

Per la nostra documentazione in inglese, si consiglia di utilizzare il [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) per servire al meglio il nostro pubblico mondiale e per facilitare le [[#Traduzioni]]. Questo significa:

- Evitare modi di dire ed espressioni culturalmente specifiche
- Usare la voce attiva e costruzioni frasali dirette
- Preferire parole semplici e comuni rispetto a terminologia complessa
- Essere espliciti piuttosto che impliciti
- Per le convenzioni ortografiche, usare l'inglese americano (ad es., 'organize' e non 'organise').

### Termini

- Preferire "keyboard shortcut" rispetto a "hotkey". Usare Hotkey quando ci si riferisce alla funzionalità specifica.
- Preferire "l'app Obsidian" su mobile e "l'applicazione Obsidian" su desktop.
- Preferire "sync" o "syncing" rispetto a "synchronise" o "synchronising".
- Preferire "search term" rispetto a "search query".
- Preferire "heading" rispetto a "header" quando ci si riferisce a un testo che introduce una sezione.
- Preferire "maximum" rispetto a "max" e "minimum" rispetto a "min".

### Nomi dei prodotti

I nomi dei prodotti Obsidian iniziano con "Obsidian", ad esempio "Obsidian Publish" e "Obsidian Sync".

Se un paragrafo diventa eccessivamente ripetitivo, è possibile usare la forma abbreviata nei riferimenti successivi.

Ad esempio:

_Per consentire la configurazione specifica per dispositivo, Obsidian Sync non sincronizza le proprie impostazioni. È necessario configurare Sync per ciascuno dei propri dispositivi._

### Interfaccia utente e interazioni

- Usare il **grassetto** per indicare il testo dei pulsanti.
- Preferire "seleziona" rispetto a "tocca" o "fai clic".
	- Per istruzioni specifiche per mobile, "tocca" è accettabile quando si descrivono interazioni touch poiché "fai clic" non è disponibile.
- Preferire "barra laterale" rispetto a "barra laterale" (forma separata).
- Preferire "esegui" rispetto a "invoca" ed "esegui" quando ci si riferisce a comandi o azioni.

Quando ci si riferisce a più interazioni dell'interfaccia in sequenza, usare il simbolo → (U+2192). Ad esempio, "**[[Impostazioni]] → Plugin della comunità**".

### Note, file e cartelle

- Usare "nota" quando ci si riferisce a un file Markdown nella cassaforte.
- Usare "file" quando ci si riferisce a estensioni di file diverse da Markdown.
- Preferire "nome della nota" rispetto a "titolo della nota".
- Preferire "nota attiva" rispetto a "nota corrente".
- Preferire "cartella" rispetto a "directory".
- Preferire "tipo di file" rispetto a "formato di file", a meno che non ci si riferisca specificamente al formato dei dati del contenuto del file.

Quando ci si sposta tra le note, usare "apri" se la destinazione è nascosta e "passa a" se sia la nota di origine che quella di destinazione sono aperte in pannelli separati.

### Documentazione di riferimento per le impostazioni

Quando possibile, qualsiasi impostazione dovrebbe essere documentata all'interno di Obsidian usando un testo descrittivo. Evitare di documentare un'impostazione specifica nell'Aiuto di Obsidian a meno che:

- Richieda una conoscenza più approfondita su come e quando usarla.
- Sia comunemente usata in modo errato o oggetto di domande frequenti.
- Cambi _drasticamente_ l'esperienza utente.

Considerare l'uso di un riquadro di tipo suggerimento se si desidera attirare l'attenzione su un'impostazione specifica.

### Termini direzionali

Usare il trattino nei termini direzionali quando vengono usati come aggettivi. Evitare il trattino quando la direzione è usata come sostantivo.

**Consigliato:**

- Seleziona **[[Impostazioni]]** nell'angolo in basso a sinistra.
- Seleziona **[[Impostazioni]]** in basso a sinistra.

**Non consigliato:**

- Seleziona **[[Impostazioni]]** nell'angolo in basso-sinistra.
- Seleziona **[[Impostazioni]]** nel basso-sinistra.

Preferire "in alto a sinistra" e "in alto a destra" rispetto a "nell'angolo superiore sinistro" e "nell'angolo superiore destro".

Non indicare una direzione quando ci si riferisce alle impostazioni. La posizione del controllo delle impostazioni dipende dal dispositivo.

**Consigliato:**

- Accanto a **Scegli caveau remoto**, seleziona **Scegli**.

**Non consigliato:**

- A destra di **Scegli caveau remoto**, seleziona **Scegli**.

Quando si descrive la direzione verticale negli elementi dell'interfaccia, usare "sopra" e "sotto" per le relazioni spaziali. Evitare "su" e "giù" poiché possono essere ambigui in contesti diversi.

**Consigliato:**

- La casella di cerca appare sopra l'elenco dei file.
- Opzioni aggiuntive sono disponibili sotto.

**Non consigliato:**

- La casella di cerca è su dall'elenco dei file.
- Più opzioni sono giù in basso.

### Istruzioni

Usare l'imperativo per i nomi delle guide, le intestazioni delle sezioni e le istruzioni passo-passo. Il modo imperativo è conciso e orientato all'azione, il che è più diretto per gli utenti che seguono le istruzioni.

- Preferire "Configura" rispetto a "Configurazione di"
- Preferire "Sposta un file" rispetto a "Spostamento di un file"
- Preferire "Importa le tue note" rispetto a "Importazione delle tue note"

### Stile delle maiuscole

Preferire lo *stile frase* rispetto allo *stile titolo* per intestazioni, pulsanti e titoli. Quando si fa riferimento a elementi dell'interfaccia, rispettare sempre le maiuscole/minuscole del testo nell'interfaccia.

**Consigliato:**

- Come Obsidian memorizza i dati

**Non consigliato:**

- Come Obsidian Memorizza I Dati

### Esempi

Preferire esempi realistici rispetto a termini senza senso.

**Consigliato:**

- `task:(chiama OR pianifica)`

**Non consigliato:**

- `task:(foo OR bar)`

### Nomi dei tasti e scorciatoie da tastiera

Quando ci si riferisce ai tasti della tastiera e alle scorciatoie, usare una notazione coerente.

**Nomi dei singoli tasti:**

Quando ci si riferisce a un carattere sulla tastiera per nome, aggiungere il carattere tra parentesi subito dopo il nome.

**Consigliato:**

- Premi il tasto trattino (-) per aggiungere un trattino.
- Usa il punto interrogativo (?) per cercare.

**Non consigliato:**

- Premi il tasto trattino per aggiungere un trattino.
- Usa il ? per cercare.
- Aggiungi un `-` davanti alla parola.

**Scorciatoie da tastiera:**

Formattare le scorciatoie da tastiera senza spazi intorno al segno più. Quando una scorciatoia differisce tra sistemi operativi, specificare entrambi.

**Consigliato:**

- Premi `Ctrl+Z` (Windows) o `Command+Z` (macOS) per annullare.
- Premi `Escape` per chiudere questa finestra.
- Usa `Tab` per spostarti tra i campi.

**Non consigliato:**

- Premi `Cmd+Z` per annullare.
- Premi `Ctrl + Z` (con spazi) per annullare.
- Premi `Ctrl/Cmd+Z` per annullare.

Per le scorciatoie identiche su tutte le piattaforme, non è necessario specificare il sistema operativo. In caso di dubbio se una scorciatoia differisce per piattaforma, specificare il sistema operativo per sicurezza. Windows e Linux usano tipicamente le stesse scorciatoie.

### Markdown

Usare righe vuote tra i blocchi Markdown:

**Consigliato:**

```md
# Intestazione 1

Questa è una sezione.

1. Primo elemento
2. Secondo elemento
3. Terzo elemento
```

**Non consigliato:**

```md
# Intestazione 1
Questa è una sezione.
1. Primo elemento
2. Secondo elemento
3. Terzo elemento
```

**Trattini lunghi negli elenchi:**

Usare i trattini lunghi (—) per separare i termini in grassetto dalle loro descrizioni negli elenchi puntati. Non usare trattini lunghi in semplici elenchi puntati nidificati con collegamenti.

**Consigliato:**

- **Menu Vista** — crea, modifica e cambia le viste.
- **Calcola valori** — aggiungi prezzi, calcola totali o esegui operazioni matematiche.

**Non consigliato:**

- [[Creare una base]] — Scopri come creare e incorporare una base.

### Immagini

Usare "**larghezza** x **altezza** pixel" per descrivere le dimensioni di immagini o schermi.

**Esempio:**

Dimensioni consigliate dell'immagine: 1920 x 1080 pixel.

## Struttura delle informazioni

### Tipi di riquadri

Usare i riquadri in modo strategico per evidenziare tipi specifici di informazioni:

**Suggerimento** (`[!tip]-`) - Consigli pratici o migliori pratiche che migliorano il flusso di lavoro dell'utente. Usare per scorciatoie, soluzioni alternative o informazioni non essenziali ma utili. Questi riquadri iniziano compressi.

**Info** (`[!info]+`) - Contesto aggiuntivo, informazioni di base o chiarimenti. Usare quando le informazioni aggiungono comprensione ma non sono necessarie per completare un'attività. Questi riquadri iniziano espansi.

**Avvertimento** (`[!warning]+`) - Avvertenze importanti che prevengono la perdita di dati, errori o conseguenze indesiderate. Usare con parsimonia per situazioni genuinamente rischiose. Questi riquadri non dovrebbero mai essere compressi.

**Esempio** (`[!example]-`) - Annotazioni generali o dettagli supplementari. Usare per informazioni tangenziali che alcuni utenti potrebbero trovare rilevanti. Questi riquadri iniziano compressi.

**Esempi:**
```md
> [!tip]- Usa le scorciatoie da tastiera
> Puoi velocizzare il tuo flusso di lavoro memorizzando le scorciatoie più usate.

> [!info]+ Questo è un componente aggiuntivo a pagamento
> Questa funzionalità richiede un abbonamento a pagamento per essere utilizzata.

> [!warning]+ Questa azione non può essere annullata
> L'eliminazione di una cassaforte è permanente. Considera di esportare le tue note prima.

> [!example]- Uso avanzato
> Puoi anche configurare questa impostazione tramite il menu Grafo.
```

### Elenchi vs. prosa

Usare gli elenchi quando si presentano elementi discreti che non hanno forti relazioni sequenziali o causali. Usare la prosa e i paragrafi quando gli elementi si basano l'uno sull'altro, richiedono spiegazione o traggono beneficio da un flusso narrativo.

**Usare un elenco per:**
- Un insieme di funzionalità non correlate
- Requisiti di installazione
- Opzioni di configurazione
- Passaggi per la risoluzione dei problemi

**Usare la prosa per:**
- Spiegazioni su come funziona qualcosa
- Flussi di lavoro con dipendenze
- Panoramiche concettuali
- Indicazioni che richiedono contesto

### Tabelle

Usare le tabelle per confrontare funzionalità, versioni o punti dati correlati dove l'allineamento facilita la comprensione. Evitare le tabelle per semplici elenchi o dati a singola colonna.

**Buon caso d'uso:**

| Funzionalità | Mobile | Desktop |
|---------|--------|---------|
| Sync | Sì | Sì |
| Plugin | No | Sì |
| Temi | Limitati | Completi |

### Riferimenti incrociati

Usare liberamente i collegamenti wiki interni (`[[Nome nota]]`) per aiutare gli utenti a navigare tra argomenti correlati. Tuttavia, evitare di collegare eccessivamente:

- Non collegare lo stesso termine più volte in una singola pagina
- Collegare solo quando la pagina di riferimento fornisce un contesto aggiuntivo significativo
- Usare testo del collegamento descrittivo quando utile: `[[Nome nota#Sezione|testo descrittivo]]`

**Esempio:**

Prima menzione: "Scopri [[Introduzione a Obsidian Sync|Obsidian Sync]] per mantenere la tua cassaforte aggiornata su tutti i dispositivi."
Menzioni successive: "Puoi configurare Sync per ogni dispositivo separatamente."

### Contenuto specifico per piattaforma

Quando si documentano funzionalità che differiscono tra piattaforme, usare le intestazioni di sezione per organizzare il contenuto.

Usare `Desktop` e `Mobile` come intestazioni di sottosezione per separare istruzioni o funzionalità specifiche per piattaforma.

**Consigliato:**
```md
## Personalizzare la barra degli strumenti

### Desktop

Nella versione desktop, puoi personalizzare la barra degli strumenti come segue:

- Riordina le azioni della barra degli strumenti trascinando e rilasciando le icone.
- Per nascondere azioni specifiche, fai clic con il tasto destro su uno spazio vuoto e deseleziona le azioni che vuoi nascondere.

### Mobile

Nella versione mobile, puoi personalizzare la barra degli strumenti tramite le impostazioni:

1. Apri **[[Impostazioni]]**.
2. Vai su **Aspetto**.
3. Seleziona **Gestisci** sotto **Configurazione barra multifunzione**.
```

> [!info]+ Quando creare sezioni separate?
> Creare sezioni separate solo se il contenuto differisce significativamente. Se le istruzioni sono sostanzialmente le stesse con piccole variazioni, usare note in linea.

## Icone e immagini

Includere icone e immagini quando rendono più facile spiegare concetti difficili da descrivere a parole, o quando è necessario mostrare parti importanti dell'applicazione Obsidian. Puoi salvare le immagini nella cartella `Attachments`.

- L'immagine dovrebbe rendere il testo che accompagna più facile da comprendere.

 **Esempio**: Una volta abilitato, il plugin [[Conteggio parole]] creerà una nuova voce nella barra di stato in basso.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Le immagini dovrebbero essere in formato `.png` o `.svg`.
- Se un'immagine appare troppo grande nella nota, ridimensionala al di fuori di Obsidian, o regola le sue dimensioni come spiegato in [[Incorporare file#Incorporare un'immagine in una nota|incorporare un'immagine in una nota]].
- In rari casi, potresti voler posizionare immagini particolarmente grandi o complesse in un [[Riquadri#Riquadri comprimibili|riquadro compresso]].
- Per finestre pop-up o modali, l'immagine dovrebbe mostrare l'intera finestra dell'applicazione Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Icone

Le icone [Lucide](https://lucide.dev/icons/) e le icone personalizzate di Obsidian possono essere usate accanto a elementi dettagliati per fornire una rappresentazione visiva di una funzionalità.

**Esempio:** Nella barra degli strumenti a sinistra, seleziona **Crea nuova lavagna** ( ![[lucide-layout-dashboard.svg#icon]] ) per creare un Canvas nella stessa cartella del file attivo.

**Linee guida per le icone**

- Salvare le icone nella cartella `Attachments/icons`.
- Aggiungere il prefisso `lucide-` prima del nome dell'icona Lucide.
- Aggiungere il prefisso `obsidian-icon-` prima del nome dell'icona Obsidian.

**Esempio:** L'icona per creare una nuova lavagna dovrebbe essere denominata `lucide-layout-dashboard`.

- Usare la versione SVG delle icone disponibili.
- Le icone dovrebbero avere una larghezza di `18` pixel, un'altezza di `18` pixel e uno spessore del tratto di `1.5`. Puoi regolare queste impostazioni nei dati SVG.

> [!info]- Regolare dimensioni e tratto in un SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="WIDTH" height="HEIGHT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STROKE-WIDTH" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Utilizzare l'ancora `icon` nelle immagini incorporate, per regolare la spaziatura attorno all'icona in modo che si allinei ordinatamente con il testo circostante.
- Le icone dovrebbero essere racchiuse tra parentesi. ( ![[lucide-cog.svg#icon]] )

**Esempio**: `( ![[lucide-cog.svg#icon]] )`

### Tag ancora per le immagini

I tag ancora per le immagini sono disponibili per aggiungere modifiche decorative alle immagini incorporate.

> [!warning] Avviso anteprima dal vivo
> I tag ancora delle icone non verranno visualizzati correttamente in **Anteprima dal vivo.** Usa la **Vista lettura** per confermare che il tag ancora sia stato applicato.

**Icona**

`![[lucide-menu.svg#icon]]`

Il tag ancora icona garantisce il corretto allineamento verticale per le icone usate per indicare elementi dell'interfaccia.

La prima icona menu usa il tag ancora ( ![[lucide-menu.svg#icon]] ), mentre la seconda icona menu ( ![[lucide-menu.svg]] ) no.

**Interfaccia**

`![[Vault picker.png#interface]]`

Il tag ancora interfaccia aggiunge un'ombra decorativa attorno all'immagine. Nella prima immagine, il tag ancora interfaccia è applicato.
![[Vault picker.png#interface]]
Al contrario, la seconda immagine non ha il tag ancora interfaccia applicato.

![[Vault picker.png]]

**Contorno**

`![[Backlinks.png#outline]]`

Il tag ancora contorno aggiunge un bordo sottile attorno all'immagine. Nella prima immagine, il tag ancora contorno è applicato.

> [!tip] Osserva l'angolo in basso a sinistra dell'immagine per vedere la differenza.

![[Backlinks.png#outline]]

La seconda immagine non ha il tag ancora contorno.

![[Backlinks.png]]

### Ottimizzazione

Le immagini rallentano il tempo di caricamento della pagina e occupano prezioso spazio di archiviazione di [[Introduzione a Obsidian Publish|Publish]]. Ottimizzare le immagini consente una riduzione delle dimensioni del file, mantenendo l'integrità visiva dell'immagine.

Sia le immagini che le icone dovrebbero essere ottimizzate.

> [!info] Strumenti per ottimizzare le immagini
> Ecco alcuni programmi consigliati per ridurre le dimensioni delle immagini.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Consigliamo un tasso di ottimizzazione del 65-75%.

## Layout

### Collegamenti interrotti

Prima di inviare la tua Pull Request, controlla eventuali collegamenti interrotti nella documentazione della traduzione su cui stai lavorando e correggili. I collegamenti interrotti possono verificarsi naturalmente nel tempo, quindi verificarne l'accuratezza aiuta a mantenere la qualità della documentazione.

Puoi verificare i collegamenti interrotti usando [[Plugin della community|plugin della community]] o strumenti disponibili nel tuo IDE.

### Descrizioni

Questa documentazione viene modificata su GitHub e pubblicata online tramite [[Introduzione a Obsidian Publish|Obsidian Publish]], che include [[Anteprime dei link per i social media#Descrizione|descrizioni]] per le schede social e altri elementi [[SEO]].

Se la pagina su cui stai lavorando non ha una [[Proprietà|proprietà]] `description`, aggiungine una. La descrizione dovrebbe essere di 150 caratteri o meno e fornire un riepilogo obiettivo del contenuto della pagina.

**Buono**: Scopri come creare modelli che catturano e organizzano automaticamente i metadati delle pagine web con Web Clipper.
**Da rivedere**: Impara come creare modelli che catturano e organizzano automaticamente i metadati dalle pagine web con Web Clipper.

### Direzioni

Quando scrivi o riscrivi [[#Istruzioni]] su come eseguire un'azione all'interno dell'app, assicurati di includere i passaggi sia per la versione mobile che per quella desktop.

Se non hai accesso a un dispositivo mobile o desktop, menzionalo quando invii la tua Pull Request.

## Traduzioni

Traduci l'intero contenuto quando completi una traduzione. Questo include, ma non si limita a:

- Nomi delle note
- Nomi delle cartelle
- Alias
- Nomi degli allegati
- Testo alternativo dei collegamenti
