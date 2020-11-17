Per incorporare nelle note file allegati, come immagini o audio, utilizzare la sintassi `![[Nomefile.png]]` in questo modo:

![[Engelbart.jpg]]

![[Excerpt from Mother of All Demos (1968).ogg]]

Usando la stessa sintassi, è anche possibile incorporare le note:

![[Formati di file accettati]]

Quando si trascina e rilascia un'immagine, questa verrà copiata nella cartella degli allegati predefinita. L'immagine viene conservata come un normale file ed è sempre possibile accedervi tramite il file system. Per personalizzare la cartella predefinita in cui salvare le immagini, fare clic con il pulsante destro del mouse su una cartella in Esplora risorse e cliccare su "Imposta come cartella allegati" dal menu di scelta rapida.

---

### Note degli sviluppatori

La sintassi per le immagini è ispirata alla sintassi Markdown. Due osservazioni:

 1. `[Immagine](collegamento.png)` si collega all'immagine, mentre `![Immagine](collegamento.png)` la mostra effettivamente.

 2. La sintassi interna dei collegamenti si basa su questo presupposto: `[[Pagina]]` è una scorciatoia (o "zucchero sintattico") per `[Pagina](Pagina)`.

Per combinare queste due cose, si può utilizzare un terzo schema: `![[Pagina]]` dovrebbe corrispondere a `![Pagina](Pagina)`, che seguendo la convenzione delle immagini, se il titolo è identico al collegamento, dovrebbe essere visualizzato.

Esistono altre implementazioni, per esempio Roam Research usa `{{embed: ((NODE_ID))}}`. Abbiamo anche considerato di usare la sintassi `((Nome pagina))`, ma riteniamo che `![[Nome pagina]]` sia più coerente, più familiare e lasci più spazio agli altri simboli di avere i propri significati.