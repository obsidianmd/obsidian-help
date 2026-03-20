---
permalink: plugin-security
aliases:
  - Plugin security
---
Il team di Obsidian prende la sicurezza molto seriamente. Questa pagina spiega i rischi legati all'installazione dei plugin della community e cosa fa il team di Obsidian per affrontarli.

## Modalità con restrizioni

Per impostazione predefinita, Obsidian funziona in modalità con restrizioni per impedire l'esecuzione di codice di terze parti. Disabilitare la modalità con restrizioni solo se ci si fida degli autori dei plugin installati.

Per disattivare la modalità con restrizioni:

1. Aprire le **[[Impostazioni]]**.
2. Nel menu laterale, selezionare **Plugin della comunità**.
3. Selezionare **Attiva i plugin della comunità**.

Per attivare la modalità con restrizioni:

1. Aprire le **[[Impostazioni]]**.
2. Nel menu laterale, selezionare **Plugin della comunità**.
3. Accanto a **Modalità con restrizioni**, selezionare **Attiva**.

I plugin installati rimangono nella cassaforte anche se si attiva la modalità con restrizioni, ma vengono ignorati da Obsidian.

## Funzionalità dei plugin

A causa di limitazioni tecniche, Obsidian non può limitare in modo affidabile i plugin a permessi o livelli di accesso specifici. Ciò significa che i plugin ereditano i livelli di accesso di Obsidian. Di conseguenza, considerare i seguenti esempi di ciò che i plugin della community possono fare:

- I plugin della community possono accedere ai file sul computer.
- I plugin della community possono connettersi a internet.
- I plugin della community possono installare programmi aggiuntivi.

> [!tip] 
> Se si lavora con dati sensibili e si desidera installare un plugin della community, si raccomanda di eseguire un audit di sicurezza indipendente sul plugin prima di utilizzarlo.

## Processo di revisione dei plugin

I plugin della community vengono sottoposti a una revisione iniziale quando vengono inviati allo store dei plugin. Tutti i plugin devono rispettare le [Politiche per sviluppatori di Obsidian](https://docs.obsidian.md/Developer+policies).

Il team di Obsidian è piccolo e non è in grado di revisionare manualmente ogni nuova versione dei plugin della community. Ci affidiamo invece all'aiuto della community per identificare e segnalare problemi con i plugin.

- Se si scoprono vulnerabilità di sicurezza minori in un plugin della community, fare riferimento al file `security.md` o `readme.md` dell'autore del plugin per sapere come segnalarle. Per falle di categoria critica, segnalare il problema anche al [[Aiuto e supporto#Contattare il supporto Obsidian|supporto Obsidian]].
- Se si sospetta che un plugin della community sia malevolo, segnalarlo al [[Aiuto e supporto#Contattare il supporto Obsidian|supporto Obsidian]], o inviando un messaggio diretto ai nostri moderatori.
