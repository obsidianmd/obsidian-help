---
permalink: plugins/daily-notes
aliases:
  - Daily notes
---
Note del giorno è un [[Plugin principali|plugin principale]] che apre una nota basata sulla data odierna, o la crea se non esiste. Utilizza le note del giorno per creare diari, liste di cose da fare o registri quotidiani per le cose scoperte durante la giornata.

Per aprire la nota del giorno, puoi:

- Fare clic su **Apri nota del giorno** ( ![[lucide-calendar.svg#icon]] ) nella [[Ribbon|barra degli strumenti]].
- Eseguire **Apri nota del giorno** dalla [[Command palette|tavolozza dei comandi]].
- [[Hotkeys#Impostare le scorciatoie da tastiera|Usare una scorciatoia da tastiera]] per il comando **Apri nota del giorno**.

Per impostazione predefinita, Obsidian crea una nuova nota vuota con il nome della data odierna nel formato AAAA-MM-GG.

> [!tip] Se preferisci avere le note del giorno in una cartella separata, puoi impostare la <u>Posizione dei nuovi file</u> nelle opzioni del plugin per modificare dove Obsidian crea le nuove note del giorno.

> [!example]- Sottocartelle automatiche
> Puoi organizzare automaticamente le tue note del giorno in cartelle utilizzando la funzionalità **Formato data**.
> 
> Ad esempio, se imposti il formato data come `YYYY/MMMM/YYYY-MMM-DD`, le tue note verranno create come `2023/January/2023-Jan-01`. 
> 
> Puoi esplorare ulteriori opzioni di formattazione sul sito della documentazione di [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Creare una nota del giorno da un modello

Se le tue note del giorno hanno la stessa struttura, puoi utilizzare un [[Modelli|modello]] per aggiungere contenuto predefinito alle note del giorno quando le crei.

1. Crea una nuova nota chiamata "Modello giornaliero" con il seguente testo (o qualsiasi cosa abbia senso per te!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Attività

   - [ ]
   ```

2. Apri le **[[Settings|Impostazioni]]**.
3. Nella barra laterale, fai clic su **Note del giorno** sotto **Opzioni plugin**.
4. Nella casella di testo accanto a **Posizione file modello**, seleziona la nota "Modello giornaliero".

Obsidian utilizzerà il modello la prossima volta che creerai una nuova nota del giorno.

## Note del giorno e proprietà

Quando il plugin Note del giorno è attivato ed è presente una proprietà data all'interno di qualsiasi nota, Obsidian tenterà automaticamente di generare un collegamento alla nota del giorno per quel giorno specifico. Ad esempio, se una nota intitolata `esempio.md` include una proprietà data come `2023-01-01`, questa data si trasformerà in un collegamento cliccabile nella sezione [[Views and editing mode#Anteprima dal vivo|anteprima dal vivo]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
