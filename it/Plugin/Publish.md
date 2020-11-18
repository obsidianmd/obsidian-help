Il plugin Publish consente di pubblicare su un sito, dall'app Obsidian, le note dal vault.

Per ulteriori informazioni sul servizio Obsidian Publish™, cosa è incluso, come funziona, e i dettagli sulla privacy, vedere il servizio aggiuntivo [[Obsidian Publish]].

### Abilitare il plugin

In Obsidian, aprire Impostazioni > Plugin e abilitare il plugin Publish. L'icona di Publish (che assomiglia a un aeroplano di carta) apparirà sulla barra degli strumenti.

Per richiamare lo strumento è possibile impostare un tasto di scelta rapida oppure eseguire l'apposito comando dal Riquadro comandi.

### Impostare e configurare un sito

Nel plugin Publish è visibile un'opzione per creare un sito a partire da un ID univoco. Dopo la pubblicazione, il sito sarà disponibile all'indirizzo `https://publish.obisidian.md/{id-sito}`.

Dopo aver creato l'ID univoco, sarà possibile assegnare un nome al sito, selezionare una home page, impostare un tema e attivare/disattivare vari componenti come la Vista grafo, l'Indice, ecc. Per attivare queste opzioni, fare clic sull'icona a forma di ingranaggio accanto al nome del sito nella parte superiore del plugin Publish.

### Selezionare file per la pubblicazione

Dopo aver configurato il sito, sarà possibile pubblicare le proprie note.

Quando il sito è ancora vuoto, tutte le notte appaiono nella sezione "Nuovo", il che significa che sono nuove per il sito. Per scegliere quali file pubblicare, fare clic sul pulsante "Pubblica".

==Nota sulla privacy: Obsidian Publish non conosce (né conserva) le note che si sceglie di non pubblicare (né le note che successivamente vengono rimosse da un sito pubblicato).==

### Effettuare cambiamenti

Man mano si apportano modifiche alle note già pubblicate, tali modifiche verranno automaticamente selezionate quando si apre la finestra di dialogo di Publish. I file che si desidera non pubblicare sul sito possono essere deselezionati.

### Aggiungere collegamenti

Il pulsante "Aggiungi collegamenti" permette di includere nella pubblicazione tutte le note del vault che sono riferimenti (collegate) alle note attualmente selezionate. L'opzione consente di assicurarsi che non ci siano collegamenti interrotti sul sito pubblicato.

Per esempio, selezionando una nota A per la pubblicazione, supponendo che questa nota contenga collegamenti alle note P, Q e R, cliccando su "Aggiungi collegamenti", le note P, Q e R verranno selezionate per la pubblicazione insieme alla nota A.

Ogni volta che si clicca il pulsante "Aggiungi collegamenti", il plugin Publish cercherà i collegamenti all'interno di ogni file selezionato per la pubblicazione. Assicurarsi di controllare l'elenco dei file selezionati prima di fare clic sul pulsante "Pubblica".

### Cancellare note pubblicate

Tutte le note pubblicate possono essere cancellate in qualsiasi momento. Nel plugin Publish verranno elencate tutte le note pubblicate, ognuna delle quali sarà selezionabile per la cancellazione. L'eliminazione di una nota dal sito **non** comporta la rimozione dal vault. Tutte le note cancellate dal sito potranno essere ripubblicate in futuro.

### Eliminare l'intero sito

Per eliminare un intero sito, fare clic sull'icona "Cambia sito" (frecce) nella parte superiore del plugin Publish e poi cliccare sul pulsante X. Questa operazione cancellerà il sito pubblico ma non influirà sui file nel vault. Le note potranno essere ripubblicate in qualsiasi momento.