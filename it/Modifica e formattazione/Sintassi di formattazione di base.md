---
permalink: syntax
publish: true
mobile: true
description: >-
  Scopri come applicare la formattazione di base alle tue note in Obsidian,
  utilizzando Markdown.
aliases:
  - Basic formatting syntax
---
Scopri come applicare la formattazione di base alle tue note, utilizzando [Markdown](https://daringfireball.net/projects/markdown/). Per una sintassi di formattazione più avanzata, consulta [[Advanced formatting syntax|Sintassi di formattazione avanzata]].

## Paragrafi

Per creare paragrafi in Markdown, usa una **riga vuota** per separare blocchi di testo. Ogni blocco di testo separato da una riga vuota viene trattato come un paragrafo distinto.

```md
Questo è un paragrafo.

Questo è un altro paragrafo.
```

Questo è un paragrafo.

Questo è un altro paragrafo.

Una riga vuota tra le righe di testo crea paragrafi separati. Questo è il comportamento predefinito in Markdown.

> [!tip]- Spazi vuoti multipli
> Più spazi vuoti adiacenti all'interno e tra i paragrafi vengono compressi in un singolo spazio quando visualizzati nella [[Views and editing mode#Vista lettura|vista lettura]] o sui siti di [[Introduction to Obsidian Publish|Obsidian Publish]].
> 
> ```md
> Più          spazi          adiacenti
> 
> 
> 
> e più righe vuote tra i paragrafi.
> ```
> 
> > Più          spazi          adiacenti
> > 
> > 
> > 
> > e più righe vuote tra i paragrafi.
> 
> Se vuoi impedire la compressione degli spazi o aggiungere più spazi vuoti, puoi usare i tag HTML `&nbsp;` (spazio non interrompibile) o `<br>` (interruzione di riga).

### Interruzioni di riga

Per impostazione predefinita in Obsidian, premere `Invio` una volta crea una nuova riga nella nota, ma questa viene trattata come una *continuazione* dello stesso paragrafo nell'output renderizzato, seguendo il comportamento tipico di Markdown. Per inserire un'interruzione di riga *all'interno* di un paragrafo senza iniziarne uno nuovo, puoi:

- Aggiungere **due spazi** alla fine di una riga prima di premere `Invio`, oppure
- Usare la scorciatoia `Shift+Invio` per inserire direttamente un'interruzione di riga.

> [!question]- Perché premere `Invio` più volte non crea più interruzioni di riga nella vista lettura?
> In Markdown, un singolo `Invio` viene ignorato e più `Invio` consecutivi producono solo un nuovo paragrafo. Questo comportamento è conforme alla regola di soft wrap di Markdown, dove le righe vuote extra non generano interruzioni di riga o paragrafi aggiuntivi — vengono compressi in una singola interruzione di paragrafo. Questo è il modo in cui Markdown gestisce il testo per impostazione predefinita, assicurando che i paragrafi scorrano naturalmente senza interruzioni impreviste.

Obsidian include un'impostazione **[[Settings#Non mostrare interruzioni di riga singole|Non mostrare interruzioni di riga singole]]**, che fa seguire a Obsidian la specifica standard di Markdown per le interruzioni di riga.

Per abilitare questa funzionalità:

1. Apri le **[[Settings|Impostazioni]]**.
2. Vai alla scheda **Editor**.
3. Abilita **Non mostrare interruzioni di riga singole**.

Quando **Non mostrare interruzioni di riga singole** è abilitato in Obsidian, le interruzioni di riga hanno tre comportamenti distinti a seconda di come le righe sono separate:

**Invio singolo senza spazi**: Un singolo `Invio` senza spazi finali combinerà le due righe separate in un'unica riga quando renderizzato.

```md
riga uno
riga due
```

Viene renderizzato come:

riga uno riga due

**Invio singolo con due o più spazi finali**: Se aggiungi due o più spazi alla fine della prima riga prima di premere `Invio`, le due righe rimangono parte dello stesso paragrafo, ma sono separate da un'interruzione di riga (elemento HTML `<br>`). Useremo due trattini bassi per rappresentare gli spazi in questo esempio.

```md
riga tre__  
riga quattro
```

Viene renderizzato come:

riga tre<br>
riga quattro

**Doppio invio (con o senza spazi finali)**: Premere `Invio` due volte (o più) separa le righe in due paragrafi distinti (elementi HTML `<p>`), indipendentemente dall'aggiunta di spazi alla fine della prima riga.

```md
riga cinque

riga sei
```

Viene renderizzato come:

<p>riga cinque</p>
<p>riga sei</p>

## Intestazioni

Per creare un'intestazione, aggiungi fino a sei simboli `#` prima del testo dell'intestazione. Il numero di simboli `#` definisce il livello dell'intestazione (come mostrato nella [[Outline|Struttura]]).

```md
# Questa è un'intestazione 1
## Questa è un'intestazione 2
### Questa è un'intestazione 3
#### Questa è un'intestazione 4
##### Questa è un'intestazione 5
###### Questa è un'intestazione 6
```

%% Queste intestazioni usano HTML per evitare di ingombrare la Struttura/Indice %%
<h1>Questa è un'intestazione 1</h1>
<h2>Questa è un'intestazione 2</h2>
<h3>Questa è un'intestazione 3</h3>
<h4>Questa è un'intestazione 4</h4>
<h5>Questa è un'intestazione 5</h5>
<h6>Questa è un'intestazione 6</h6>

## Grassetto, corsivo, evidenziazione

La formattazione del testo può essere applicata anche utilizzando le [[Editing shortcuts|scorciatoie di modifica]].

| Stile | Sintassi | Esempio | Risultato |
|-|-|-|-|
| Grassetto | `** **` o `__ __` | `**Testo in grassetto**` | **Testo in grassetto** |
| Corsivo | `* *` o `_ _` | `*Testo in corsivo*` | *Testo in corsivo* |
| Barrato | `~~ ~~` | `~~Testo barrato~~` | ~~Testo barrato~~ |
| Evidenziazione | `== ==` | `==Testo evidenziato==` | ==Testo evidenziato== |
| Grassetto e corsivo annidato | `** **` e `_ _` | `**Testo in grassetto e _corsivo annidato_**` | **Testo in grassetto e _corsivo annidato_** |
| Grassetto e corsivo | `*** ***` o `___ ___` | `***Testo in grassetto e corsivo***` | ***Testo in grassetto e corsivo*** |

La formattazione può essere forzata a essere visualizzata come testo normale aggiungendo una barra rovesciata `\` davanti ad essa.

\*\*Questa riga non sarà in grassetto\*\*

```markdown
\*\*Questa riga non sarà in grassetto\*\*
```

\**Questa riga sarà in corsivo e mostrerà gli asterischi*\*

```markdown
\**Questa riga sarà in corsivo e mostrerà gli asterischi*\*
```

## Collegamenti interni

Obsidian supporta due formati per i [[internal links|collegamenti interni]] tra le note:

- Collegamento wiki: `[[Tre leggi del moto]]`
- Markdown: `[Tre leggi del moto](Tre%20leggi%20del%20moto.md)`

## Collegamenti esterni

Se vuoi creare un collegamento a un URL esterno, puoi creare un collegamento inline racchiudendo il testo del collegamento tra parentesi quadre (`[ ]`) e poi l'URL tra parentesi tonde (`( )`).

```md
[Aiuto Obsidian](https://help.obsidian.md)
```

[Aiuto Obsidian](https://help.obsidian.md)

Puoi anche creare collegamenti esterni a file in altre cassaforti, collegandoti a un [[Obsidian URI|URI di Obsidian]].

```md
[Nota](obsidian://open?vault=MainVault&file=Note.md)
```

### Caratteri di escape per gli spazi nei collegamenti

Se il tuo URL contiene spazi vuoti, devi effettuare l'escape sostituendoli con `%20`.

```md
[La mia nota](obsidian://open?vault=MainVault&file=La%20mia%20nota.md)
```

Puoi anche effettuare l'escape dell'URL racchiudendolo tra parentesi angolari (`< >`).

```md
[La mia nota](<obsidian://open?vault=MainVault&file=La mia nota.md>)
```

## Immagini esterne

Puoi aggiungere immagini con URL esterni, aggiungendo un simbolo `!` prima di un [[#Collegamenti esterni|collegamento esterno]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Puoi modificare le dimensioni dell'immagine aggiungendo `|640x480` alla destinazione del collegamento, dove 640 è la larghezza e 480 è l'altezza.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Se specifichi solo la larghezza, l'immagine viene ridimensionata in base al suo rapporto d'aspetto originale. Per esempio:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Suggerimento
> Se vuoi aggiungere un'immagine dalla tua cassaforte, puoi anche [[Embed files#Incorporare un'immagine in una nota|incorporare un'immagine in una nota]].

## Citazioni

Puoi citare del testo aggiungendo un simbolo `>` prima del testo.

```md
> Gli esseri umani affrontano problemi sempre più complessi e urgenti, e la loro efficacia nell'affrontare questi problemi è una questione critica per la stabilità e il progresso continuo della società.

\- Doug Engelbart, 1961
```

> Gli esseri umani affrontano problemi sempre più complessi e urgenti, e la loro efficacia nell'affrontare questi problemi è una questione critica per la stabilità e il progresso continuo della società.

\- Doug Engelbart, 1961

> [!tip]- Suggerimento
> Puoi trasformare la tua citazione in un [[Callouts|riquadro]] aggiungendo `[!info]` come prima riga in una citazione.

## Elenchi

Puoi creare un elenco non ordinato aggiungendo un `-`, `*` o `+` prima del testo.

```md
- Primo elemento dell'elenco
- Secondo elemento dell'elenco
- Terzo elemento dell'elenco
```

- Primo elemento dell'elenco
- Secondo elemento dell'elenco
- Terzo elemento dell'elenco

Per creare un elenco ordinato, inizia ogni riga con un numero seguito da un simbolo `.` o `)`.

```md
1. Primo elemento dell'elenco
2. Secondo elemento dell'elenco
3. Terzo elemento dell'elenco
```

1. Primo elemento dell'elenco
2. Secondo elemento dell'elenco
3. Terzo elemento dell'elenco

```md
1) Primo elemento dell'elenco
2) Secondo elemento dell'elenco
3) Terzo elemento dell'elenco
```

1) Primo elemento dell'elenco
2) Secondo elemento dell'elenco
3) Terzo elemento dell'elenco

Puoi usare `Shift+Invio` per inserire un'[[#Interruzioni di riga|interruzione di riga]] all'interno di un elenco ordinato senza alterare la numerazione.

```md
1. Primo elemento dell'elenco
   
2. Secondo elemento dell'elenco
3. Terzo elemento dell'elenco
   
4. Quarto elemento dell'elenco
5. Quinto elemento dell'elenco
6. Sesto elemento dell'elenco
```

### Elenchi di attività

Per creare un elenco di attività, inizia ogni elemento dell'elenco con un trattino e uno spazio seguito da `[ ]`.

```md
- [x] Questa è un'attività completata.
- [ ] Questa è un'attività incompleta.
```

- [x] Questa è un'attività completata.
- [ ] Questa è un'attività incompleta.

Puoi attivare/disattivare un'attività nella vista lettura selezionando la casella di controllo.

> [!tip]- Suggerimento
> Puoi usare qualsiasi carattere all'interno delle parentesi quadre per contrassegnarla come completata.
>
> ```md
> - [x] Latte
> - [?] Uova
> - [-] Uova
> ```
>
> - [x] Latte
> - [?] Uova
> - [-] Uova

### Elenchi annidati

Puoi annidare qualsiasi tipo di elenco — ordinato, non ordinato o elenco di attività — sotto qualsiasi altro tipo di elenco.

Per creare un elenco annidato, applica un rientro a uno o più elementi dell'elenco. Puoi mescolare i tipi di elenco all'interno di una struttura annidata:

```md
1. Primo elemento dell'elenco
   1. Elemento annidato ordinato
2. Secondo elemento dell'elenco
   - Elemento annidato non ordinato
```

1. Primo elemento dell'elenco
   1. Elemento annidato ordinato
2. Secondo elemento dell'elenco
   - Elemento annidato non ordinato

Allo stesso modo, puoi creare un elenco di attività annidato applicando un rientro a uno o più elementi dell'elenco:

```md
- [ ] Attività 1
	- [ ] Sotto-attività 1
- [ ] Attività 2
	- [ ] Sotto-attività 1
```

- [ ] Attività 1
	- [ ] Sotto-attività 1
- [ ] Attività 2
	- [ ] Sotto-attività 1

Usa `Tab` o `Shift+Tab` per applicare o ridurre il rientro degli elementi dell'elenco selezionati per organizzarli facilmente.

## Barra orizzontale

Puoi usare tre o più asterischi `***`, trattini `---` o trattini bassi `___` su una riga a sé stante per aggiungere una barra orizzontale. Puoi anche separare i simboli con spazi.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Codice

Puoi formattare il codice sia inline all'interno di una frase, sia in un blocco dedicato.

### Codice inline

Puoi formattare il codice all'interno di una frase usando singoli apici inversi.

```md
Il testo tra `apici inversi` su una riga verrà formattato come codice.
```

Il testo tra `apici inversi` su una riga verrà formattato come codice.

Se vuoi inserire apici inversi in un blocco di codice inline, circondalo con doppi apici inversi in questo modo: inline ``codice con un apice inverso ` dentro``.

### Blocchi di codice

Per formattare il codice come blocco, racchiudilo con tre apici inversi o tre tilde.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

Puoi anche creare un blocco di codice applicando un rientro al testo usando `Tab` o 4 spazi vuoti.
`````md
    cd ~/Desktop
`````

Puoi aggiungere l'evidenziazione della sintassi a un blocco di codice, aggiungendo un codice di linguaggio dopo il primo set di apici inversi.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Obsidian usa Prism per l'evidenziazione della sintassi. Per maggiori informazioni, consulta [Linguaggi supportati](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS e viste di modifica
> La [[Views and editing mode#Modalità sorgente|modalità sorgente]] e l'[[Views and editing mode#Anteprima dal vivo|anteprima dal vivo]] non supportano PrismJS e potrebbero renderizzare l'evidenziazione della sintassi in modo diverso.

#### Annidare blocchi di codice

Quando hai bisogno di includere un blocco di codice all'interno di un altro blocco di codice (per esempio, quando documenti come usare i blocchi di codice), puoi usare più di tre apici inversi o tilde per il blocco di codice esterno.

Per annidare blocchi di codice, usa quattro o più apici inversi (o tilde) per il blocco esterno, mentre il blocco interno ne usa tre:
`````md
````md
Ecco come creare un blocco di codice:
```js
console.log("Hello world")
```
````
`````

Puoi anche mescolare apici inversi e tilde. Questo è particolarmente utile quando lavori con codice che genera altri blocchi di codice:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

Il principio chiave è che il blocco di codice esterno deve usare **più** caratteri di delimitazione (apici inversi o tilde) rispetto a qualsiasi blocco di codice interno, oppure usare un tipo diverso di carattere di delimitazione.

## Note a piè di pagina

Puoi aggiungere note a piè di pagina[^footnote] alle tue note usando la seguente sintassi:

[^footnote]: Questa è una nota a piè di pagina.

```md
Questa è una semplice nota a piè di pagina[^1].

[^1]: Questo è il testo referenziato.
[^2]: Aggiungi 2 spazi all'inizio di ogni nuova riga.
  Questo ti permette di scrivere note a piè di pagina che si estendono su più righe.
[^note]: Le note a piè di pagina con nome appaiono comunque come numeri, ma possono facilitare l'identificazione e il collegamento dei riferimenti.
```

Puoi anche inserire note a piè di pagina inline in una frase. Nota che l'accento circonflesso va fuori dalle parentesi quadre.

```md
Puoi anche usare note a piè di pagina inline. ^[Questa è una nota a piè di pagina inline.]
```

> [!note] Nota
> Le note a piè di pagina inline funzionano solo nella vista lettura, non nell'anteprima dal vivo.

## Commenti

Puoi aggiungere commenti racchiudendo il testo con `%%`. I commenti sono visibili solo nella vista di modifica.

```md
Questo è un commento %%inline%%.

%%
Questo è un commento a blocco.

I commenti a blocco possono estendersi su più righe.
%%
```

## Escape della sintassi Markdown

In alcuni casi, potresti dover visualizzare caratteri speciali in Markdown, come `*`, `_` o `#`, senza attivare la loro formattazione. Per visualizzare questi caratteri letteralmente, inserisci una barra rovesciata (`\`) davanti ad essi.

> [!example] Caratteri comuni da cui fare l'escape
> 
> - Asterisco: `\*`
> - Trattino basso: `\_`
> - Cancelletto: `\#`
> - Apice inverso: `` \` ``
> - Barra verticale (usata nelle tabelle): `\|`
> - Tilde: `\~`

```md
\*Questo testo non sarà in corsivo\*.
```

\*Questo testo non sarà in corsivo\*.

Quando lavori con elenchi numerati, potresti dover fare l'escape del punto dopo il numero per impedire la formattazione automatica dell'elenco. Inserisci la barra rovesciata (`\`) prima del punto, **non** prima del numero.

```md
1\. Questo non sarà un elemento dell'elenco.
```

1\. Questo non sarà un elemento dell'elenco.

## Scopri di più

Per approfondire la sintassi di formattazione avanzata, come tabelle, diagrammi ed espressioni matematiche, consulta [[Advanced formatting syntax|Sintassi di formattazione avanzata]].

Per saperne di più su come Obsidian analizza il Markdown, consulta [[Obsidian Flavored Markdown]].
