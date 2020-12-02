Ci sono alcune differenze di funzionamento tra i vari sistemi di PKM (Personal Knowledge Management) e i raccoglitori di appunti, ciò significa che spostarsi tra di essi può risultare un po' complicato. Per la maggior parte, se i documenti utilizzati possono essere convertiti in formato Markdown, funzioneranno abbastanza bene anche con Obsidian. Ma alcune cose, come tag e collegamenti, possono essere complicate.

Sul nostro Forum c'è un [post che contiene alcuni metodi sviluppati da altre persone](https://forum.obsidian.md/t/meta-post-migration-workflows/768). Al momento include:

- [Importazione da Notion](https://forum.obsidian.md/t/import-from-notion/636)
- [Importazione da Notion (automatizzata)](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728)
- [Importazione da Evernote](https://forum.obsidian.md/t/import-from-evernote/108)
- [Importazione da OneNote](https://forum.obsidian.md/t/new-tool-for-migration-from-onenote-updated-and-improved-version/3055)
- [Importazione da Apple Notes](https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
- [Importazione da Bear](https://forum.obsidian.md/t/import-from-bear-app/2284)
- [Importazione da Zkn3](https://forum.obsidian.md/t/migrating-from-zkn3-to-obsidian-without-losing-your-tags-and-internal-links-documentation/7457)
- [Importazione da TiddlyWiki 5](https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)

Se il sistema usato non si trova nell'elenco, controllare il post del forum. Nel tempo trascorso dalla scrittura del documento, qualcuno potrebbe avere risolto il problema.

Inoltre, i creatori di nvUltra, un altro programma per prendere appunti basato su Markdown, hanno stilato una lista di [modi per migrare a nvUltra](https://nvultra.com/help/importing). In molti casi, i metodi d'importazione sono identici o, almeno, sono un utile punto di partenza.

## Strumenti integrati

### Da Roam Research

Se si possiedono dati su Roam, è facile esportarli per gestirli in Obsidian:

> 1. In Roam, scegliere "Export all" dal menu:
> ![[Pasted image.png]]

> 2. Fare clic sul bottone blu "Export all":
> ![[Pasted image 1.png]]

> 3. Estrarre il contenuto del file "Roam-Export-xxxxxxxxxxxxx.zip" in una cartella.

> 4. In Obsidian, fare clic sul pulsante della cassaforte in basso a sinistra "Apri un altro vault -> Apri cartella come vault" e infine su "Apri".
> Scegliere la cartella dove sono appena stati estratti i dati di Roam.

> 5. Utilizzare lo strumento [[Importazione Markdown]] per convertire il formato Markdown di Roam Research nel formato di Obsidian.
> Può convertire `#tag` in `[[collegamenti]]` di Obsidian.
> Può anche convertire il testo `^^evidenziato^^` in `==evidenziato==`

### Da Bear

Se si sta importando da Bear, il plugin [[Importazione Markdown]] ha un'opzione per convertire `::highlight::` in `==highlight==`.

### Utilizzare Zettelkasten

Se si è già utilizzato in precedenza il metodo Zettelkasten per strutturare le note, ecco alcune informazioni interessanti:

I collegamenti di Obsidian richiedono una piena corrispondenza con i nomi delle note. Ciò significa che `[[202001010000]]` non viene collegato a `[[202001010000 Nota]]`.

Per risolvere il problema, utilizzare lo strumento [[Importazione Markdown]] per convertire i collegamenti Zettelkasten in `[[202001010000 Nota]]` o `[[202001010000 Nota|Nota]]`.

Si potrebbe anche essere interessati al plugin [[Prefissi Zettelkasten]].