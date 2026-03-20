---
permalink: import/apple-notes
aliases:
  - Import from Apple Notes
---
Obsidian ti permette di migrare facilmente le tue note da Apple Notes utilizzando il [[Importer|plugin Importer]]. Questo convertirà i tuoi dati di Apple Notes in file Markdown durevoli, che potrai usare con Obsidian e molte altre app.

Attualmente, Importer supporta la migrazione da Apple Notes solo su macOS. Non è ancora disponibile su iOS.

## Importa i dati di Apple Notes in Obsidian

Avrai bisogno del plugin ufficiale di Obsidian [[Importer]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri le **[[Settings|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** utilizzando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. Sotto **Formattazione file** scegli **Apple Notes**.
6. Clicca **Importa**.
7. Clicca **Apri** sul popup che appare con il titolo `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Attendi il completamento dell'importazione.
9. Hai finito!

## Contenuti supportati

Il plugin Obsidian Importer supporta praticamente tutti i tipi di contenuto di Apple Notes. Questo include tabelle, immagini, disegni, scansioni, PDF e collegamenti introdotti in iOS 17.

> [!Warning]
> Le note protette da password sono crittografate da Apple, quindi devono essere sbloccate prima dell'importazione. Tutte le note bloccate verranno saltate.

### Scansioni

Apple archivia le scansioni in diversi formati a seconda di come sono state create. Per preservare i dati originali, questo significa che verranno esportate in modo diverso.

* Le scansioni create o visualizzate su versioni precedenti di macOS o iOS verranno esportate come una serie di immagini non ritagliate.
* Le scansioni create o visualizzate su versioni più recenti di macOS o iOS verranno solitamente esportate come immagini ritagliate.
* Le scansioni che sono state modificate utilizzando le funzionalità introdotte in iOS 17 verranno solitamente esportate come PDF.

## Metodi di esportazione alternativi

Apple non fornisce un'opzione nativa per esportare le tue note. Tuttavia esistono diversi strumenti di terze parti come [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) di Chintan Ghate. Tieni presente che la maggior parte degli strumenti è limitata nei dati che possono esportare da Apple Notes e potrebbe non fornire dati di output completamente compatibili. Questi strumenti funzionano meglio se le tue note di Apple Notes sono principalmente di solo testo, con pochi allegati o funzionalità speciali come disegni e scansioni.

A seconda dello strumento utilizzato, l'esportazione potrebbe essere in formato Markdown o formato HTML. Segui le istruzioni in base al formato del file esportato:

- [[Import HTML files|Importa file HTML]]
- [[Import Markdown files|Importa file Markdown]]
