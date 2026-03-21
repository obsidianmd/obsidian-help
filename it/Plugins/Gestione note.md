---
permalink: plugins/note-composer
aliases:
  - Note composer
---
Gestione note è un [[Plugin principali|plugin principale]] che consente di unire due note o estrarre parte di una nota in una nuova nota.

## Unire le note

L'unione delle note aggiunge una nota a un'altra e rimuove la prima. Gestione note aggiorna tutti i collegamenti per fare riferimento alla nota unita.

Quando selezioni la nota in cui unire, puoi scegliere tra i seguenti metodi:

- `Invio`: Aggiunge la nota sorgente alla _fine_ della nota di destinazione.
- `Shift+Invio`: Aggiunge la nota sorgente all'_inizio_ della nota di destinazione.
- `Ctrl+Invio` (o `Cmd+Invio` su macOS): Crea una nuova nota con il contenuto della nota sorgente.

Per unire la nota attiva con un'altra nota nella cassaforte:

**Esplora file**

1. Nell'Esplora file, fai clic destro sulla nota che desideri unire.
2. Fai clic su **Unisci intero file con...**.
3. Seleziona la nota in cui desideri unire.
4. Fai clic su **Unisci** per confermare.

**Tavolozza dei comandi**

1. Apri la [[Riquadro comandi]].
2. Seleziona **Gestione note: Unisci file attuale con un altro file...**.
3. Seleziona la nota in cui desideri unire.
4. Fai clic su **Unisci** per confermare.

> [!tip] Suggerimento
> Per impostazione predefinita, Gestione note chiede conferma durante l'unione delle note. Se disabiliti la conferma e unisci una nota per errore, puoi comunque recuperarla con il plugin [[Recupero file]].

## Estrarre una nota

Quando selezioni la nota in cui estrarre la selezione, puoi scegliere tra i seguenti metodi:

- `Invio`: Aggiunge il testo selezionato alla _fine_ della nota di destinazione.
- `Shift+Invio`: Aggiunge il testo selezionato all'_inizio_ della nota di destinazione.
- `Ctrl+Invio` (o `Cmd+Invio` su macOS): Crea una nuova nota con il testo selezionato.

Per estrarre il testo in una nuova nota:

**Editor**

1. Nella vista **Modifica**, seleziona il testo che desideri estrarre.
2. Fai clic destro sul testo selezionato.
3. Fai clic su **Estrai selezione attuale...**.
4. Seleziona la nota in cui desideri estrarre.

**Tavolozza dei comandi**

1. Nella vista **Modifica**, seleziona il testo che desideri estrarre.
2. Apri la [[Riquadro comandi]].
3. Seleziona **Gestione note: Estrai selezione attuale...**.
4. Seleziona la nota in cui desideri estrarre.

> [!tip] Suggerimento
> Per impostazione predefinita, Gestione note sostituisce il testo estratto con un collegamento alla nota di destinazione. Nelle impostazioni, puoi anche scegliere di [[Incorporare file|incorporare]] la nota di destinazione, oppure di non lasciare nulla al suo posto.

## File modello

Configurando un modello, puoi personalizzare il contenuto prima di aggiungerlo alla nuova nota. Per utilizzare un modello, inserisci una **Posizione file modello** nelle impostazioni del plugin.

Il modello può contenere le seguenti variabili:

| Variabile          | Descrizione                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Il contenuto da unire o la selezione di testo estratta. Se non includi questa variabile, Gestione note aggiunge il contenuto in fondo al modello. |
| `{{fromTitle}}`   | Nome della nota sorgente.                                                                                                                                 |
| `{{newTitle}}`    | Nome della nota di destinazione. Ad esempio, per aggiungere il nome del file come intestazione in cima al file.                                                     |
| `{{date:FORMAT}}` | Data di creazione della nuova nota. Ad esempio, `{{date:YYYY-MM-DD}}`.                                                                                       |
