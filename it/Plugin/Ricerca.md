![[Search.png]]

La Ricerca è una funzionalità potente e può creare confusione. Nella maggior parte dei casi funzionerà semplicemente digitando ciò che si vuole trovare. Ma Ricerca possiede anche molte funzionalità per affinare in dettaglio il campo di ricerca.

### Ricerche complesse

Cliccando sul pulsante "Descrizione ricerca" mentre si effettua una ricerca, verrà fornita una spiegazione di ciò che si sta cercando, il che può essere molto utile durante la messa a punto di una query di ricerca complicata.

- Le parole separate da spazi vengono cercate separatamente in ogni nota. Per esempio, la query `foo bar` mostrerà note che includono sia  `foo` che `bar` in qualunque posizione all'interno della nota.
- Per cercare parole consecutive separate da spazi, usare le `"Parole virgolettate"`. Per esempio, la query `"foo bar"` tra virgolette mostrerà tutte le note che includono quelle parole l'una accanto all'altra. Per cercare effettivamente una stringa che include le virgolette, usare il carattere di escape: `\"`. Lo stesso vale per la barra rovesciata: `\\`.
- Usare l'operatore booleano `OR` per cercare l'una o l'altra parola. Usare `-` per negare una query. Lo spazio può essere utilizzato come operatore booleano "AND".
	- Per esempio: `foo OR bar` mostrerà tutte le note che contengono una delle due parole, non è necessario che siano nella stessa nota. `foo -bar` mostrerà tutte le note che contengono `foo` ma che non contengono anche `bar`.
- Le parentesi possono essere usate per raggruppare operatori booleani. Per esempio: `(a OR b) (c OR d)`. Utile per creare ricerche complesse e assicurarsi che le cose avvengano nell'ordine desiderato.
- L'utilizzo di espressioni regolari (regex) nella ricerca è consentito. Usare il carattere Slash per denotare un'espressione regolare. Per esempio: `/[a-z]{3}/`.
- Sono disponibili diversi operatori speciali. Alcuni operatori consentono query di ricerca annidate usando le parentesi. Per esempio: `file:("treno" OR -"3no")`.
	- `file:` eseguirà una sottoquery sui nomi dei file. Per esempio: `file:".jpg"`. Se si usano i prefissi Zettelkasten può essere utile restringere gli intervalli di tempo, per esempio `file:"202007"`per cercare tutti i file creati a luglio 2020.
	- `path:` eseguirà una sottoquery sui percorsi dei file a partire dalla cartella principale. Per esempio: `file:"Daily Notes/2020-07"`.
	- `match-case:` e `ignore-case:` eseguono una sottoquery che sovrascrive la regola per la distinzione tra maiuscole e minuscole.

### Impostazioni di ricerca

Durante la ricerca, sono disponibili alcuni interruttori:

- `Comprimi risultati` consente di mostrare solo i nomi delle note corrispondenti, oppure le righe intere in cui appaiono le corrispondenze. Questi risultati estesi possono essere attivati per ciascuna nota cliccando sul triangolino accanto al nome del file.
- `Maiuscole/minuscole` consente di tenere in considerazione, oppure di non tenere in considerazione, la differenza tra lettere maiuscole e minuscole. Per sovrascrivere l'opzione all'interno della ricerca, usare `match-case:` per attivare la sensibilità alle maiuscole nella sottoquery e `ignore-case:` per disattivarla, come spiegato sopra.
- `Descrizione ricerca` mostra in dettaglio come sta operando la query di ricerca.
