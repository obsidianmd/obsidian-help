---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian consente di migrare le note da Samsung Notes utilizzando il [[Importatore|plugin Importatore]]. Questo converte le note in file Markdown durevoli che è possibile utilizzare con Obsidian e molte altre app.

## Esportare le note da Samsung Notes

Samsung Notes salva ogni nota come file Samsung Notes (`.sdocx`).

1. Aprire Samsung Notes sul telefono o tablet.
2. Toccare e tenere premuta una nota, quindi selezionare tutte le note che si desidera esportare.
3. Toccare **Salva come file**, quindi scegliere **File Samsung Notes**.
4. Scegliere una cartella e toccare **Salva**.
5. Spostare i file `.sdocx` sul dispositivo in cui si utilizza Obsidian, ad esempio con un cavo USB, Quick Share o un'unità cloud.

Se si hanno molti file, è possibile inserirli in un file `.zip` e importare quello. Samsung Notes non include le sue cartelle nei file che salva, ma l'Importatore mantiene le cartelle all'interno del file `.zip`. Per mantenere le note organizzate, salvare le note di ogni cartella di Samsung Notes in una cartella con lo stesso nome prima di comprimerle.

## Importare i dati di Samsung Notes in Obsidian

È necessario il plugin ufficiale [[Importatore]] di Obsidian, che può essere [installato qui](obsidian://show-plugin?id=obsidian-importer).

1. Aprire **[[Impostazioni]]**.
2. Andare su **Plugin della comunità** e [installare l'Importatore](obsidian://show-plugin?id=obsidian-importer).
3. Abilitare il plugin Importatore.
4. Aprire il plugin **Importatore** utilizzando il riquadro comandi o l'icona nella barra multifunzione.
5. In **Formattazione file**, scegliere **Samsung Notes (.sdocx)**.
6. Selezionare i file `.sdocx`, o un file `.zip` che li contiene.
7. Selezionare **Importa** per rivedere il modello generato e visualizzare in anteprima esempi dalle note.
8. Selezionare **Importa** di nuovo e attendere il completamento dell'importazione.

## Limitazioni

- La scrittura a mano e le forme disegnate vengono importate come immagine SVG alla fine della nota. I tratti mantengono forma e colore, ma non la larghezza variabile di una penna sensibile alla pressione. Le forme e le linee vengono importate in nero.
- Le caselle di testo, le immagini posizionate sulla pagina e i PDF annotati non sono ancora importati.
- Gli elementi della lista di controllo vengono importati come non selezionati.
- I colori del testo, i tipi di carattere e le dimensioni carattere non vengono mantenuti.
- Sbloccare le note bloccate in Samsung Notes prima di esportarle.

## Modelli

Utilizzare i [[Modelli per l'importazione]] per configurare completamente il modo in cui i dati di Samsung Notes vengono importati.

![[Modelli per l'importazione#Variabili]]
