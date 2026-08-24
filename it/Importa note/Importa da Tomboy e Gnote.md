---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian consente di migrare le note da Tomboy e Gnote utilizzando il [[Importatore|plugin Importatore]] ufficiale. L'Importatore legge direttamente i file `.note` delle app e converte il loro contenuto XML in Markdown.

## Individuare i file delle note

Tomboy e Gnote normalmente archiviano le note in queste cartelle:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` o `~/.local/share/gnote`

La posizione esatta potrebbe essere diversa se la cartella dei dati è stata spostata o se si utilizza una versione differente dell'app.

## Importare le note di Tomboy o Gnote

1. Aprire **[[Impostazioni]] → Plugin della comunità** e [installare l'Importatore](obsidian://show-plugin?id=obsidian-importer).
2. Abilitare il plugin Importatore.
3. Aprire l'**Importatore** utilizzando il [[Riquadro comandi]] o l'icona nella barra multifunzione.
4. In **Formattazione file**, selezionare **Tomboy/Gnote (.note)**.
5. Scegliere i singoli file `.note` o la cartella che li contiene.
6. Rivedere le opzioni di importazione, il modello generato e gli esempi di anteprima.
7. Selezionare **Importa** e attendere il completamento dell'importazione.

## Modelli

Utilizzare i [[Modelli per l'importazione]] per configurare completamente il modo in cui i dati vengono importati.

![[Modelli per l'importazione#Variabili]]
