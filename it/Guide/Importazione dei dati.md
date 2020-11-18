Ci sono alcune differenze di funzionamento tra i vari sistemi di PKM (Personal Knowledge Management) e i raccoglitori di appunti, ciò significa che spostarsi tra di essi può risultare un po' complicato. Per la maggior parte, se i documenti utilizzati possono essere convertiti in formato Markdown, funzioneranno abbastanza bene anche con Obsidian. Ma alcune cose, come tag e collegamenti, possono essere complicate.

Sul nostro Forum c'è un [post che contiene alcuni metodi sviluppati da altre persone](https://forum.obsidian.md/t/meta-post-migration-workflows/768). Al momento include:

  * [Migrazione da Apple Note a Obsidian](https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
  * [Migrazione da TiddlyWiki 5 a Obsidian](https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)
  * [Importazione da Notion](https://forum.obsidian.md/t/import-from-notion/636)
  * [Importazione da Evernote](https://forum.obsidian.md/t/import-from-evernote/108)

Se il sistema usato non si trova nell'elenco, controllare il post del forum. Nel tempo trascorso dalla scrittura del documento, qualcuno potrebbe avere risolto il problema.

Inoltre, i creatori di nvUltra, un altro programma per prendere appunti basato su Markdown, hanno stilato una lista di [modi per migrare a nvUltra](https://nvultra.com/help/importing). In molti casi, i metodi d'importazione sono identici o, almeno, sono un utile punto di partenza.

## Strumenti integrati

### Da Roam Research

Se si possiedono dati su Roam, è facile esportarli per gestirli in Obsidian:

> 1. In Roam, scegliere "Export all" dal menu:
> ![[Pasted image.png]]

> 2. Cliccare il bottone blu "Export all":
> ![[Pasted image 1.png]]

> 3. Estrarre il contenuto del file "Roam-Export-xxxxxxxxxxxxx.zip" in una cartella.

> 4. In Obsidian, cliccare sul pulsante della cassaforte in basso a sinistra "Apri un altro vault -> Apri cartella come vault" e infine su "Apri".
> Scegliere la cartella dove sono appena stati estratti i dati di Roam.

> 5. Utilizzare lo strumento [[Importazione Markdown]] per convertire il formato Markdown di Roam Research nel formato di Obsidian.
> Può convertire `#tag` in `[[collegamenti]]` di Obsidian.
> Può anche convertire il testo `^^evidenziato^^` in `==evidenziato==`

### Utilizzare Zettelkasten

Se si è già utilizzato in precedenza il metodo Zettelkasten per strutturare le note, ecco alcune informazioni interessanti:

I collegamenti di Obsidian richiedono una piena corrispondenza con i nomi delle note. Ciò significa che `[[202001010000]]` non viene collegato a `[[202001010000 Nota]]`.

Per risolvere il problema, utilizzare lo strumento [[Importazione Markdown]] per convertire i collegamenti Zettelkasten in `[[202001010000 Nota]]` o `[[202001010000 Nota|Nota]]`.

Si potrebbe anche essere interessati al plugin [[Prefissi Zettelkasten]].