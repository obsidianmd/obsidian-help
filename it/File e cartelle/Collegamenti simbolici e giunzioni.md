---
permalink: symlinks
aliases:
  - Symbolic links and junctions
---
Puoi utilizzare [collegamenti simbolici](https://en.wikipedia.org/wiki/Symbolic_link) (symlink) e [giunzioni](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) nella tua cassaforte per archiviare file al di fuori della cassaforte e della [[Come Obsidian archivia i dati#Impostazioni globali|cartella di sistema]].

> [!danger] Utilizzare a proprio rischio
> Sconsigliamo vivamente l'uso di collegamenti simbolici. Utilizzando collegamenti simbolici e giunzioni nella tua cassaforte, rischi di perdere o corrompere i tuoi dati, o di causare il crash di Obsidian. Assicurati di eseguire regolarmente backup della tua cassaforte e delle impostazioni.

Di seguito sono riportate alcune limitazioni o problemi di cui siamo a conoscenza e che potresti voler tenere a mente:

- I cicli di symlink non sono consentiti, per evitare il crash di Obsidian dovuto a un ciclo infinito.
- I target dei symlink devono essere completamente disgiunti dalla radice della cassaforte o da qualsiasi altro target di symlink. Disgiunti significa che una cartella non contiene l'altra, o viceversa. Obsidian ignora qualsiasi symlink a una cartella genitore della cassaforte, o da una cartella nella cassaforte a un'altra cartella nella stessa cassaforte. È una misura di sicurezza per assicurarsi di non ritrovarsi con file duplicati nella cassaforte, il che potrebbe rendere i collegamenti ambigui.
- I symlink potrebbero non funzionare bene con Obsidian Sync, o con _qualsiasi altro tipo di sincronizzazione_. Se il target di un symlink è a sua volta una cartella sincronizzata da una diversa cassaforte di Obsidian, potresti (potenzialmente) ritrovarti con conflitti di sincronizzazione o perdita di dati. Alcuni strumenti di sincronizzazione, come Git, non seguono i symlink, ma sincronizzano il _percorso_ a cui punta il symlink, il che potrebbe produrre risultati indesiderati se condividi la tua cassaforte con altre persone in questo modo.
- Il gestore file di Obsidian non può spostare file oltre i confini del dispositivo, quindi se crei un symlink a una cartella su un'unità diversa da quella della tua cassaforte, non potrai trascinare file tra quella cartella e altre cartelle usando l'esplora file di Obsidian. (Dovrai usare l'esplora risorse del tuo sistema operativo per tali spostamenti, e Obsidian vedrà lo spostamento come un'eliminazione e la creazione di un nuovo file. Inoltre, _non_ aggiornerà alcun collegamento che dipendeva dal percorso di quel file.)
- I symlink a file (a differenza dei symlink a cartelle) _potrebbero_ funzionare, ma non sono ufficialmente supportati al momento. Le modifiche effettuate al di fuori di Obsidian non vengono monitorate, quindi se modifichi il file direttamente, Obsidian non rileverà la modifica, non aggiornerà gli indici di ricerca, ecc.
- Creare symlink all'interno della cartella `.obsidian/` per condividerli tra cassaforti **ha un'alta probabilità di corrompere le impostazioni**, a meno che tu non sappia _davvero_ cosa stai facendo. Se decidi di procedere in questo modo, assicurati almeno di avere dei backup.
