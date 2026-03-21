---
permalink: resources
publish: true
mobile: true
description: Trova risorse di supporto, segnala problemi di sicurezza o violazioni della community e scopri come contribuire a Obsidian.
aliases:
  - Help and support
---
Trova risorse di supporto, segnala problemi di sicurezza o violazioni della community e scopri come contribuire a Obsidian.

## Domande e consigli

Se hai una domanda su come usare Obsidian, o vuoi conoscere altri utenti di Obsidian, puoi unirti a uno dei nostri canali della community:

- [[Vault sandbox|Esplora il vault sandbox]]
- [Unisciti al nostro server Discord](https://discord.gg/obsidianmd)
- [Visita il forum](https://forum.obsidian.md/)

### Segnalare bug e richiedere funzionalità

> [!tip]- Controlla prima i duplicati
> Prima di richiedere una nuova funzionalità o segnalare un bug, controlla gli altri post per assicurarti che qualcun altro non l'abbia già inviato.

Se vuoi suggerire una funzionalità in Obsidian, vai su [Richieste di funzionalità](https://forum.obsidian.md/c/feature-requests/8).

Se vuoi segnalare un bug in Obsidian, vai su [Segnalazioni di bug](https://forum.obsidian.md/c/bug-reports/7). Le segnalazioni di bug vengono spostate nel [Cimitero dei bug](https://forum.obsidian.md/c/bug-graveyard/12) una volta risolte.

### Raccogliere informazioni di debug

Quando riscontri un bug o hai bisogno di assistenza dal [[#Contattare il supporto Obsidian|supporto Obsidian]], fornire informazioni di debug può essere molto utile. Ecco come ottenerle:

1. Apri la [[Riquadro comandi]].
2. Digita **Mostra informazioni di debug**.
3. Seleziona l'opzione evidenziata **Mostra informazioni di debug**.
4. Seleziona **Copia negli Appunti**.
5. Incolla le informazioni copiate nella tua segnalazione di bug o nell'email al supporto Obsidian.

### Controllare il tempo di avvio

Puoi controllare quanto tempo impiega Obsidian ad avviarsi utilizzando la funzionalità **Tempo di avvio**.

1. Apri **[[Impostazioni]] → Generale → Avanzate**.
2. Accanto a **Notifica se l'avvio richiede più tempo del previsto**, seleziona l'**icona del timer**.
3. Apparirà una finestra **Tempo di avvio**, che mostra informazioni dettagliate sui tempi:
   - **Avvio totale dell'app**: Tempo complessivo di lancio.
   - **Inizializzazione**: Tempo impiegato per caricare l'app stessa.
   - **Cassaforte**: Tempo per caricare i file della tua cassaforte.
   - **Area di lavoro**: Tempo per ripristinare schede e layout.
   - **Plugin principali**: Tempo utilizzato dai plugin principali attivi.
4. Puoi selezionare **Copia negli Appunti** per copiare il report per la risoluzione dei problemi o la condivisione.

Inoltre, puoi attivare **Notifica se l'avvio richiede più tempo del previsto** per ricevere un avviso se l'avvio è insolitamente lento.

### Catturare i log della console

Quando devi segnalare un bug relativo a un plugin di Obsidian o quando il [[#Contattare il supporto Obsidian|supporto Obsidian]] ti richiede di fornire informazioni di log, potresti dover accedere alla console di Obsidian dall'interno dell'applicazione Obsidian. Ecco come farlo in base al tuo sistema operativo:

- **Windows/Linux**: `Ctrl+Shift+I`
- **macOS**: `Command+Option+I`

> [!info]+ Metodo di accesso alternativo
> Se stai usando la Cornice della finestra **Cornice Obsidian**, puoi anche accedere alla console di Obsidian tramite il menu del titolo.

Una volta aperta la console per sviluppatori:

1. Seleziona **console** nel menu in alto.
2. Scegli l'opzione del menu laterale **errori**. Eventuali errori saranno visualizzati come `# errori`.
3. Seleziona uno dei messaggi di errore rossi.
4. Scegli l'opzione **Salva come...** Questo salverà tutti gli errori nella console.
5. Salva il file di log sul tuo dispositivo.
6. Allega il file di log alla tua segnalazione di bug o all'email al supporto Obsidian.

![[help-support-console-menu.png#interface|600]]

> [!warning]+ Accesso alla console su mobile
> I dispositivi mobile e i tablet hanno accesso limitato alle loro console per sviluppatori. Per questi utenti, consigliamo di utilizzare il plugin della community [Logstravaganza](https://obsidian.md/it/plugins?id=logstravaganza) per generare automaticamente i dati del log della console in una nota Markdown.

### Contattare il supporto Obsidian

Obsidian offre supporto via email solo per richieste relative a [[Licenza commerciale|licenze commerciali]], il tuo account, pagamenti e servizi aggiuntivi ([[Introduzione a Obsidian Sync|Obsidian Sync]] e [[Introduzione a Obsidian Publish|Obsidian Publish]]). Se hai bisogno di aiuto su uno di questi argomenti, [invia un'email al team di Obsidian](mailto:support@obsidian.md).

## Segnalare un problema di sicurezza

Se hai scoperto un problema di sicurezza in Obsidian, o se sospetti che un plugin sia malevolo, [invia un'email al team di Obsidian](mailto:support@obsidian.md).

## Segnalare una violazione del Codice di Condotta

Che tu sia vittima o testimone di una violazione del nostro [[Codice di condotta della comunità]], puoi segnalare l'incidente al nostro team di moderatori.

Segnala l'incidente su uno dei seguenti canali della community:

- [[Codice di condotta della comunità#Segnalare su Discord|Segnalare su Discord]]
- [[Codice di condotta della comunità#Segnalare sul forum|Segnalare sul forum]]

## Contribuire a Obsidian

Sei interessato a mettere a disposizione le tue competenze e il tuo tempo libero per Obsidian? Ecco dove potremmo davvero aver bisogno del tuo aiuto:

- Aiuta i tuoi colleghi utenti di Obsidian rispondendo alle domande sul nostro [server Discord](https://discord.gg/obsidianmd), sul nostro [forum](https://forum.obsidian.md/), o sul reddit [ObsidianMD](https://old.reddit.com/r/ObsidianMD/).
- [[Developers|Sviluppatori]], potremmo davvero aver bisogno del vostro aiuto per espandere la nostra [Documentazione per sviluppatori Obsidian](https://github.com/obsidianmd/obsidian-developer-docs).
- Conosci qualche lingua scritta oltre all'inglese? Considera di contribuire alle nostre [[Traduzioni]] in altre lingue.
- C'è qualcosa in questa documentazione di aiuto che è obsoleto o confuso? Consulta la [[Guida di stile]] e invia una [issue e pull request](https://github.com/obsidianmd/obsidian-help/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).
- Se puoi, puoi [[Contributi finanziari|contribuire finanziariamente]] utilizzando uno dei nostri servizi aggiuntivi a pagamento.
