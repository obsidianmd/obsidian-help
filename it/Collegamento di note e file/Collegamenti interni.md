---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Scopri come collegare note, allegati e altri file dalle tue note, utilizzando i collegamenti interni.
aliases:
  - Internal links
---
Scopri come collegare note, allegati e altri file dalle tue note, utilizzando i _collegamenti interni_. Collegando le note, puoi creare una rete di conoscenza. ^b15695

Obsidian può aggiornare automaticamente i collegamenti interni nella tua cassaforte quando rinomini un file. Se preferisci ricevere una richiesta di conferma, puoi disabilitare questa opzione in:

**[[Settings|Impostazioni]]** → **[[Settings#File e collegamenti|File e collegamenti]]** → **[[Settings#Aggiorna sempre collegamenti interni|Aggiorna sempre collegamenti interni]]**.

## Formati supportati per i collegamenti interni

Obsidian supporta i seguenti formati di collegamento:

- Collegamento wiki: `[[Three laws of motion]]` o `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` o `[Three laws of motion](Three%20laws%20of%20motion.md)`

Gli esempi precedenti sono equivalenti, appaiono nello stesso modo nell'editor e collegano alla stessa nota.

> [!note] Nota
> Quando si utilizza il formato Markdown, assicurati di [codificare l'URL](https://en.wikipedia.org/wiki/Percent-encoding) della destinazione del collegamento. Ad esempio, gli spazi vuoti diventano `%20`.

Per impostazione predefinita, grazie al suo formato più compatto, Obsidian genera collegamenti utilizzando il formato collegamento wiki. Se l'interoperabilità è importante per te, puoi disabilitare i collegamenti wiki e utilizzare invece i collegamenti Markdown.

Per utilizzare il formato Markdown:

1. Apri **[[Settings|Impostazioni]]**.
2. In **File e collegamenti**, disabilita **Usa \[\[Wikilinks\]\]**.

Anche se disabiliti il formato collegamento wiki, puoi comunque completare automaticamente i collegamenti digitando due parentesi quadre `[[`. Quando selezioni uno dei file suggeriti, Obsidian genera invece un collegamento Markdown.

> [!note] Caratteri non validi
> Una stringa che contiene i seguenti caratteri potrebbe non funzionare come collegamento: `# | ^ : %% [[ ]]`.
> 
> Si consiglia di evitare l'uso di questi caratteri e di seguire le [pratiche sicure per i nomi dei file](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Collegare un file

Per creare un collegamento nella vista Modifica, utilizza uno dei seguenti metodi:

- Digita `[[` nell'editor e poi seleziona il file a cui vuoi creare un collegamento.
- Seleziona del testo nell'editor e poi digita `[[`.
- Apri la [[Command palette|tavolozza dei comandi]] e poi seleziona Aggiungi collegamento interno.

![[Quick switcher#^search-autocomplete-large]]

Sebbene sia possibile collegare qualsiasi tipo tra i [[Accepted file formats|formati di file accettati]], i collegamenti a formati di file diversi da Markdown necessitano di includere un'estensione, come `[[Figure 1.png]]`.

> [!tip] Prefissare un collegamento interno con un punto esclamativo (!) consente di incorporare il contenuto collegato. Per maggiori dettagli, consulta [[Embed Files|Incorporare file]].

> [!info] File esclusi
> I file che corrispondono ai modelli dei tuoi [[Settings#File esclusi|File esclusi]] vengono deprioritizzati nei suggerimenti di collegamento quando si creano collegamenti interni.

## Collegare un'intestazione in una nota

Puoi collegare intestazioni specifiche nelle note, noti anche come _collegamenti ad àncora_.

**Collegamento a un'intestazione nella stessa nota**

Per collegare un'intestazione nella stessa nota, digita `[[#` per ottenere un elenco delle intestazioni nella nota a cui collegare.

Ad esempio, `[[#Anteprima di un file collegato]]` creerà un collegamento a [[#Anteprima di un file collegato]].

**Collegamento a un'intestazione in un'altra nota**

Per collegare un'intestazione in un'altra nota, aggiungi un cancelletto (`#`) alla fine della destinazione del collegamento, seguito dal testo dell'intestazione.

Ad esempio, `[[About Obsidian#I collegamenti sono elementi di prima classe]]` creerà un collegamento a [[About Obsidian#I collegamenti sono elementi di prima classe]].

**Collegamento a sotto-intestazioni**

Puoi aggiungere più simboli cancelletto per ogni sotto-intestazione.

Ad esempio, `[[Help and support#Questions and advice#Report bugs and request features]]` creerà un collegamento a [[Help and support#Questions and advice#Report bugs and request features]].

**Ricerca di intestazioni nell'intera cassaforte**

Per cercare intestazioni nell'intera cassaforte, utilizza la sintassi `[[## intestazione]]`.

Ad esempio, `[[##` cercherà genericamente nell'intera cassaforte, mentre `[[## team]]` cercherà tutte le intestazioni che contengono la parola _team_.

> [!info]- Screenshot della ricerca di un collegamento a intestazione
>
> ![[internal-links-header.png#interface]]

## Collegare un blocco in una nota

Un blocco è un'unità di testo nella tua nota, come un paragrafo, una citazione in blocco o un elemento di elenco.

Puoi collegare un blocco aggiungendo `#^` alla fine della destinazione del collegamento, seguito da un identificatore di blocco univoco. Ad esempio: `[[2023-01-01#^37066d]]`. Fortunatamente, non è necessario trovare manualmente l'identificatore: quando digiti l'accento circonflesso (`^`), apparirà un elenco di suggerimenti, che ti permetterà di selezionare il blocco corretto.

Per i *paragrafi semplici*, posiziona uno spazio vuoto seguito da un accento circonflesso `^` e l'identificatore di blocco alla fine della riga:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Per i *blocchi strutturati* (elenchi, citazioni, riquadri, tabelle), l'identificatore di blocco dovrebbe essere su una riga separata, con una riga vuota prima e dopo:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Per *righe specifiche all'interno di un elenco*, l'identificatore di blocco può essere posizionato direttamente su un punto elenco:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Non supportiamo i collegamenti a parti specifiche di citazioni, riquadri e tabelle.

**Ricerca di blocchi nell'intera cassaforte**

Puoi anche cercare blocchi a cui collegare nell'intera cassaforte utilizzando la sintassi `[[^^blocco]]`. Tuttavia, più elementi si qualificano come blocchi rispetto ai [[#Collegare un'intestazione in una nota|collegamenti a intestazioni]], quindi questo elenco sarà molto più lungo.

> [!info]- Screenshot della ricerca di un collegamento a blocco
> ![[link-block-heading.png#interface]]

Puoi anche creare identificatori di blocco leggibili aggiungendo uno spazio vuoto seguito da un accento circonflesso (`^`) e l'identificatore. Gli identificatori di blocco possono contenere solo lettere latine, numeri e trattini.

Ad esempio, aggiungi `^quote-of-the-day` alla fine di un blocco:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Ora puoi collegare il blocco digitando `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilità
> I riferimenti ai blocchi sono specifici di Obsidian e non fanno parte del formato Markdown standard. I collegamenti contenenti riferimenti ai blocchi non funzioneranno al di fuori di Obsidian.

## Cambiare il testo visualizzato del collegamento

Per impostazione predefinita, Obsidian mostra il testo del collegamento così come appare. Ad esempio:
- `[[Example]]` viene visualizzato come [[Example]]
- `[[Example#Details]]` viene visualizzato come [[Example#Details]]

Puoi cambiare il modo in cui un collegamento viene visualizzato personalizzando il suo testo visualizzato:

**Formato collegamento wiki**:
Usa una barra verticale (`|`) per cambiare il testo visualizzato.

- `[[Example|Nome personalizzato]]` appare come [[Example|Nome personalizzato]]
- `[[Example#Details|Nome sezione]]` appare come [[Example#Details|Nome sezione]]

**Formato Markdown**:
Usa `[Testo visualizzato](URL collegamento)` per personalizzare l'aspetto del collegamento.

- `[Nome personalizzato](Example.md)` appare come [Nome personalizzato](Example.md)
- `[Nome sezione](Example.md#Details)` appare come [Nome sezione](Example.md#Details)

Questo metodo è utile per situazioni occasionali in cui vuoi cambiare l'aspetto di un collegamento in un contesto specifico. Se desideri impostare un nome di collegamento alternativo che puoi riutilizzare in tutta la cassaforte, considera l'uso di un [[Aliases|alias]].

Ad esempio, se ti riferisci regolarmente a `[[Three laws of motion]]` come `[[The 3 laws]]`, aggiungere "3 laws" come alias ti permette di digitare solo quello, senza dover aggiungere testo visualizzato personalizzato ogni volta.

> [!tip] Suggerimento
> Usa il [[#Cambiare il testo visualizzato del collegamento|testo visualizzato del collegamento]] quando vuoi personalizzare l'aspetto di un collegamento *in un punto specifico*.
> 
> Usa gli [[Aliases|alias]] quando vuoi riferirti alla stessa nota usando *nomi diversi* in tutta la cassaforte.
^callout-internal-links-link-text

## Anteprima di un file collegato

> [!note] Nota
> Per visualizzare l'anteprima dei file collegati, devi prima abilitare [[Page preview|Anteprima pagina]].

Per visualizzare l'anteprima di un file collegato, passa il cursore su un collegamento interno. In modalità di modifica, premi `Ctrl` (o `Cmd` su macOS) mentre passi il cursore sul collegamento. Un'anteprima del contenuto del file appare accanto al cursore.
