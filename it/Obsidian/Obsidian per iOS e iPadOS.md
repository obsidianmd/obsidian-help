---
permalink: ios
aliases:
  - Obsidian for iOS and iPadOS
---
L'app mobile di Obsidian per iOS e iPadOS offre potenti funzionalità di gestione degli appunti sul tuo iPhone e iPad. Puoi scaricarla dall'[Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Questa pagina illustra le funzionalità specifiche di iOS, tra cui widget, integrazione con Siri e Comandi Rapidi.

## Sync

Per informazioni sulla sincronizzazione delle note tra dispositivi, consulta [[Sincronizza le note tra dispositivi|Sincronizzare le note tra dispositivi]].

## Widget

Obsidian per iOS offre diversi widget per eseguire azioni rapide sulla tua cassaforte.

> [!note] Nota
> I widget sono disponibili su iOS e iPadOS 18 e versioni successive.
> I widget non sono disponibili quando si utilizza "Richiedi Face ID" per sbloccare l'app.


### Widget per schermata di blocco e Centro di Controllo

I widget per la schermata di blocco e il Centro di Controllo consentono di:
- Creare una nuova nota
- Aprire una nota specifica
- Aprire la nota quotidiana
- Aprire la ricerca
- Aprire Obsidian

### Widget per la schermata Home

I widget per la schermata Home consentono di:
- Creare una nota
- Visualizzare una nota
- Aprire la nota quotidiana

### Personalizzare i widget

Puoi personalizzare i widget per adattarli al tuo flusso di lavoro, ad esempio scegliendo quale cassaforte utilizzare o specificando una particolare nota da aprire.

- **Widget della schermata Home:** Tocca e tieni premuto il widget, quindi seleziona **Modifica widget**.
- **Widget della schermata di blocco:** Tocca e tieni premuto sulla schermata di blocco, tocca **Personalizza**, seleziona la schermata di blocco, quindi tocca il widget che vuoi personalizzare.
- **Widget del Centro di Controllo:** Apri il Centro di Controllo, tocca il pulsante **+** in alto a sinistra per iniziare la modifica, quindi tocca il widget che vuoi personalizzare.

Opzioni di configurazione del widget **Nuova nota**:

![[ios-new-note-configuration.png|400]]

Opzioni di configurazione del widget **Visualizza nota**:

![[ios-view-note-configuration.png|400]]

## Comandi Rapidi

Obsidian si integra con l'app Comandi Rapidi di Apple, permettendoti di creare potenti automazioni. I comandi rapidi disponibili includono:

- **Apri una nota** — Apri una nota specifica nella tua cassaforte
- **Crea una nuova nota** — Crea una nuova nota nella tua cassaforte
- **Apri nota giornaliera** — Vai direttamente alla nota quotidiana di oggi
- **Cattura nella Nota Quotidiana** — Aggiungi testo in coda o in testa alla nota quotidiana senza aprire l'app Obsidian
- **Cattura nel Segnalibro** — Aggiungi testo in coda o in testa a una nota aggiunta come segnalibro senza aprire l'app Obsidian

I comandi rapidi di cattura sono particolarmente utili per prendere appunti velocemente, poiché consentono di aggiungere contenuto a una nota in background.

## Foglio di condivisione

Il foglio di condivisione di Obsidian ti permette di catturare contenuti dalle pagine web. Funziona anche con app come YouTube e altri social network.

> [!note]
> - Il foglio di condivisione nativo è disponibile su iOS e iPadOS 18 e versioni successive.
> - Le funzionalità del foglio di condivisione descritte in questa sezione richiedono Obsidian 1.13.0 o versioni successive.

Usa il foglio di condivisione per inviare rapidamente contenuti da un'altra app a Obsidian:
1. In un'altra app, tocca il pulsante **Condividi**.
2. Seleziona **Obsidian**.
3. Scegli una Posizione.
4. Rivedi o modifica il contenuto catturato.
5. Tocca **Salva**.

![[ios-share-sheet-extension.png|400]]

### Posizioni

Le Posizioni ti permettono di decidere dove inviare il contenuto condiviso prima di salvarlo.

Le Posizioni possono catturare verso:
- **Nuova nota** — Crea una nuova nota in un vault o in una cartella.
- **Nota giornaliera** — Aggiungi contenuto in coda o in testa alla nota quotidiana di oggi.
- **Nota aggiunta come segnalibro** — Aggiungi contenuto in coda o in testa a una nota aggiunta come segnalibro.
- **Nota** — Scegli una nota esistente nel tuo vault.
- **Nuovo segnalibro** — Salva un URL condiviso nei segnalibri di Obsidian.

![[ios-share-sheet-locations.png|400]]

### Personalizzare le Posizioni

Puoi creare Posizioni per flussi di lavoro comuni, come salvare articoli in una casella di posta, aggiungere citazioni alla nota quotidiana o aggiungere collegamenti ai segnalibri.

Per personalizzare le Posizioni:

1. Apri Obsidian dal foglio di condivisione di iOS.
2. Tocca la Posizione corrente nella barra degli strumenti.
3. Tocca il pulsante **+** per creare una nuova Posizione, oppure seleziona una Posizione esistente per modificarla.
4. Scegli il vault, il comportamento e le impostazioni opzionali.

A seconda del tipo di `Comportamento`, puoi configurare opzioni come:
- Cartella
- Modello
- Gruppo di segnalibri
- Posizione di aggiunta in coda o in testa
- Se i collegamenti condivisi catturano il **Testo completo** o solo l'**URL**

![[ios-share-sheet-add-location.png|400]]

### Usare un modello durante la condivisione

Puoi usare un modello quando condividi contenuti dal foglio di condivisione. I modelli ti permettono di formattare il contenuto web catturato con dettagli come il titolo della pagina, l'autore, il sito web di origine e la data di pubblicazione.

Per configurare una Posizione con un modello:

1. Apri Obsidian dal foglio di condivisione di iOS.
2. Tocca la Posizione corrente nella barra degli strumenti.
3. Tocca il pulsante **+** per creare una nuova Posizione.
4. Inserisci un nome per la Posizione.
5. Seleziona un vault.
6. Imposta **Comportamento** su **Nuova nota**.
7. Nella sezione **Opzionale**, tocca **Modello**.
8. Seleziona una nota dal tuo vault da usare come modello.
9. Tocca **Salva** per salvare la Posizione.

![[ios-share-sheet-set-template.png|400]]

Quando condividi un collegamento usando questa Posizione, Obsidian applica prima il modello e poi aggiunge il contenuto condiviso.

Segnaposto supportati nel modello:

| Segnaposto | Descrizione |
| --- | --- |
| `{{author}}` | Autore dell'articolo |
| `{{description}}` | Descrizione o sommario dell'articolo |
| `{{domain}}` | Nome di dominio del sito web |
| `{{favicon}}` | URL della favicon del sito web |
| `{{image}}` | URL dell'immagine principale dell'articolo |
| `{{published}}` | Data di pubblicazione dell'articolo, nel formato data predefinito |
| `{{published: YYYY-MM-DD}}` | Data di pubblicazione con formato data personalizzato |
| `{{site}}` | Nome del sito web |
| `{{title}}` | Titolo dell'articolo |
| `{{wordCount}}` | Numero totale di parole nel contenuto estratto |

Puoi anche usare i segnaposto standard per data e ora del modello:

| Segnaposto | Descrizione |
| --- | --- |
| `{{date}}` | Data corrente |
| `{{date: YYYY-MM-DD}}` | Data corrente con formato personalizzato |
| `{{time}}` | Ora corrente |
| `{{time: HH:mm}}` | Ora corrente con formato personalizzato |

## Integrazione con Siri

Puoi usare i comandi vocali di Siri per interagire con Obsidian:

- "Cattura usando Obsidian"
- "Cattura in Obsidian"
- "Apri la mia nota quotidiana in Obsidian"
- "Cerca in Obsidian"

## Integrazione con Spotlight

Quando cerchi "Obsidian" in Spotlight di iOS, vedrai azioni rapide:
- Nuova nota
- Cerca
- Nota quotidiana
