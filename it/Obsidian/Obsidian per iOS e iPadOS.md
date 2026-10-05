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
- Aprire Cattura rapida
- Creare una nuova nota
- Aprire una nota specifica
- Aprire la nota quotidiana
- Aprire la ricerca
- Aprire Obsidian

### Widget per la schermata Home

I widget per la schermata Home consentono di:
- Aprire Cattura rapida
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

## Cattura rapida

Cattura rapida ti permette di salvare testo nel tuo vault dalla schermata di blocco, dal Centro di Controllo o dai widget della schermata Home. A seconda della posizione di cattura selezionata, Cattura rapida può creare una nuova nota o aggiungere il testo a una nota esistente.

![[ios-quick-capture-view.png|400]]

> [!note] Nota
> Cattura rapida è disponibile su iOS e iPadOS 26 e versioni successive.

Per catturare del testo:

1. Aggiungi il widget **Cattura rapida** alla schermata di blocco, al Centro di Controllo o alla schermata Home.
2. Tocca il widget per aprire Cattura rapida.
3. Inserisci il testo.
4. Per cambiare dove verrà salvato il testo, tocca la posizione di cattura nella parte superiore dello schermo e seleziona un'altra posizione.
5. Tocca il segno di spunta per salvare il testo.

**Nota**: Se le Attività in tempo reale sono abilitate, la nota di cattura rapida appare anche sulla schermata di blocco e, sui modelli di iPhone supportati, nella Dynamic Island. Tocca la barra o l'Attività in tempo reale per continuare a modificare.

![[ios-quick-capture-live-activity.png|400]]

### Posizioni di cattura

Le posizioni di cattura determinano dove Cattura rapida salva il testo. Una posizione di cattura può:

- Creare una nuova nota in una cartella selezionata, con un modello opzionale e un nome nota personalizzato.
- Aggiungere il testo in coda o in testa alla nota quotidiana.
- Aggiungere il testo in coda o in testa a una nota aggiunta come segnalibro.
- Aggiungere il testo in coda o in testa a un'altra nota selezionata.

Per creare una posizione di cattura:
1. Apri Cattura rapida.
2. Tocca la posizione di cattura nella parte superiore dello schermo.
3. Tocca il pulsante più (+).
4. Seleziona un comportamento e configura le impostazioni opzionali.
5. Tocca **Salva**.

Puoi anche usare **Apri nota dopo la cattura** per scegliere se Obsidian apre la nota di destinazione dopo aver salvato la cattura.

![[ios-quick-capture-locations.png|400]]

![[ios-quick-capture-config.png|400]]

### Modelli per Cattura rapida

Puoi applicare un modello per formattare il testo catturato. I modelli di Cattura rapida supportano i seguenti segnaposto:

| Segnaposto | Descrizione |
| --- | --- |
| `{{content}}` | Testo catturato |
| `{{date}}` | Data corrente |
| `{{time}}` | Ora corrente |
| `{{latitude}}` | Latitudine corrente |
| `{{longitude}}` | Longitudine corrente |
| `{{shortAddress}}` | Forma abbreviata dell'indirizzo corrente |
| `{{fullAddress}}` | Indirizzo corrente completo |
| `{{googleMapsLink}}` | Collegamento a Google Maps della posizione corrente |
| `{{appleMapsLink}}` | Collegamento a Apple Maps della posizione corrente |
| `{{openStreetMapLink}}` | Collegamento a OpenStreetMap della posizione corrente |

Per configurare un widget Cattura rapida per una posizione di cattura specifica, segui i passaggi in [[#Personalizzare i widget]]. I widget della schermata Home possono visualizzare più posizioni di cattura.

![[ios-quick-capture-widget.png|400]]

## Comandi Rapidi

Obsidian si integra con l'app Comandi Rapidi di Apple, permettendoti di creare potenti automazioni. I comandi rapidi disponibili includono:

- **Cattura rapida** — Apri Cattura rapida usando una posizione di cattura configurata
- **Apri segnalibro** - Apri una nota aggiunta come segnalibro dal tuo vault
- **Apri nuova nota** — Crea una nuova nota nella tua cassaforte
- **Apri nota giornaliera** — Vai direttamente alla nota quotidiana di oggi
- **Cattura nella Nota Quotidiana** — Aggiungi testo in coda o in testa alla nota quotidiana senza aprire l'app Obsidian
- **Cattura nel Segnalibro** — Aggiungi testo in coda o in testa a una nota aggiunta come segnalibro senza aprire l'app Obsidian
- **Ottieni nota con segnalibro** — Ottieni il testo da una nota aggiunta come segnalibro
- **Ottieni nota giornaliera** — Ottieni il testo da una nota giornaliera
- **Cerca nel vault** — Cerca una parola chiave nel tuo vault
- **Aggiungi collegamento ai segnalibri** — Aggiungi un collegamento web ai tuoi segnalibri
- **Apri Obsidian** — Apre Obsidian

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
| `{{url}}` | URL dell'articolo |
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
