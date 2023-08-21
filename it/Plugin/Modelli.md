Il plugin Modelli consente di inserire rapidamente frammenti di testo nella nota corrente.

### Impostare la cartella dei modelli

I modelli sono semplicemente note in formato Markdown, come tutto il resto in Obsidian.

Per definire file come modelli, inserirli in una cartella e impostare quella cartella in Impostazioni → Modelli → "Posizione cartella dei modelli" dopo aver abilitato il plugin.

### Inserire modelli

Dopo aver impostato la posizione della cartella, utilizzare l'apposita icona della barra degli strumenti per inserire un modello. Come sempre, è possibile impostare un tasto di scelta rapida per questa opzione o utilizzare il Riquadro comandi per accedervi.

Il frammento di modello verrà inserito nella posizione corrente del cursore, il testo speciale verrà sostituito dai valori correnti al momento dell'inserimento (vedi sotto).

### Inserire data e ora

Dalle impostazioni del plugin Modelli, è possibile impostare i formati per data e ora.

Dopo aver impostato questi formati, le stringhe `{{date}}` e `{{time}}` nei modelli, verranno sostituite da data e ora correnti al momento dell'inserimento.

Per la documentazione sul formato della sintassi, [vedere qui](https://momentjs.com/docs/#/displaying/format/).

_Suggerimento: per avere due formati di date o due formati di ore, si può usare `{{time}}` come un secondo `{{date}}`, o `{{date}}` come un secondo `{{time}}`._

### Formati una tantum

Oltre a `{{date}}` e `{{time}}`, i quali funzioneranno in ogni modello, è possibile scrivere `{{date:YYYY-MM-DD}}` per inserire una data con un certo formato solo una volta. Il formato `{{date}}` verrà sovrascritto. Ciò che si trova dopo i `:` sarà considerato parte del formato.

`{{time:HH:mm}}` funziona in modo simile.

### Utilizzare formati di data personalizzati altrove

Attualmente, i formati delle date come `{{date:YYYY-MM-DD}}` e `{{time:HH:mm}}` funzionano anche nei modelli dei plugin [[Note del giorno]] e [[Prefissi Zettelkasten]]. Mentre i formati `{{date}}` e `{{time}}` non sono ancora disponibili.