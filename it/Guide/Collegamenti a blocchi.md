In Obsidian 0.9.5 e versioni successive, oltre a poter [[Collegamenti interni#Collegamenti a intestazioni|collegare le intestazioni]], è anche possibile creare collegamenti a blocchi.

### Cos'è un blocco?

Un "blocco" può essere un paragrafo, una citazione, un elenco, ecc. In generale, tutti gli elementi che hanno una riga vuota prima e una dopo, possono essere considerati blocchi. ^dcf64c

### Collegamenti a blocchi

Per creare un collegamento a un blocco in un file specifico, digitare `[[Nomefile` per visualizzare un elenco di file corrispondenti. Dopo aver selezionato un file, digitare `^` continuando a scrivere per identificare un blocco a cui collegarsi.

Premendo `Invio`, verrà creato un collegamento a quel blocco in un formato simile a `[[Nomefile#^dcf64c]]`, dove `dcf64c` è l'ID del blocco appena generato.

Se non si è sicuri del file in cui si trova un blocco, un altro metodo è quello di digitare `[[^^` per cercare in tutti i file. Verranno mostrati tutti i blocchi disponibili all'interno del vault. Se il vault è molto grande, l'operazione potrebbe richiedere un po' di tempo.

Per esempio, [[#^dcf64c]] è un collegamento a un blocco qui sopra.

### Incorporare o transcludere blocchi

Similmente al metodo utilizzato per [[Incorporare file]], è possibile utilizzare `!` davanti a un collegamento a un blocco per incorporarlo.

Ecco un esempio:

![[#^dcf64c]]

### ID personalizzati dei blocchi

Per creare ID a blocchi che siano leggibili in lingua naturale, inserire manualmente il `^proprio-id` dopo un blocco. Se si aggiunge il blocco alla fine di una riga, assicurarsi che sia presente almeno uno spazio di separazione.

Per fare riferimento a blocchi complessi, come le tabelle, inserire l'ID del blocco assicurandosi che sia presente una riga vuota sia prima che dopo l'ID del blocco.

Dopo aver assegnato manualmente un ID al blocco, quando si fa riferimento a quel blocco, si può utilizzare  `proprio-id` al posto dell'ID generato casualmente.,

Gli ID personalizzati dei blocchi possono contenere solo lettere, numeri e trattini.

### Interoperabilità

I riferimenti ai blocchi non fanno parte della sintassi classica di Markdown, si tratta invece di un'istruzione specifica utilizzata da Obsidian. Ciò significa che questi particolari collegamenti non funzioneranno al di fuori di Obsidian.

Un blocco può comunque essere ritrovato attraverso il suo ID eseguendo una ricerca all'interno del testo, sebbene si tratti di un processo manuale. La connessione non viene persa finché si dispone di un software in grado di eseguire ricerche in una cartella.