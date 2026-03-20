---
permalink: html
publish: true
mobile: true
description: Scopri come usare HTML in Obsidian, incluse le limitazioni con il rendering Markdown e i requisiti dei blocchi HTML.
aliases:
  - HTML content
---
Obsidian supporta HTML per permetterti di visualizzare le tue note come desideri, o persino [[Incorporare pagine web|incorporare pagine web]]. Consentire HTML all'interno delle note comporta dei rischi. Per impedire che codice dannoso possa causare problemi, Obsidian _sanitizza_ qualsiasi HTML nelle tue note.

> [!example] 
> L'elemento `<script>` normalmente consente di eseguire JavaScript ogni volta che viene caricato. Se Obsidian non sanitizzasse l'HTML, un malintenzionato potrebbe convincerti a incollare un testo contenente JavaScript che estrae informazioni sensibili dal tuo computer e le invia a lui.

Detto ciò, poiché la sintassi Markdown non supporta tutte le forme di stile, l'uso di HTML sanitizzato può essere un ulteriore modo per migliorare la qualità delle tue note. Di seguito sono riportati alcuni degli utilizzi più comuni dell'HTML.

## Limitazioni dell'HTML

Obsidian ha limitazioni specifiche nell'uso dell'HTML nelle note:

### Nessun Markdown all'interno dell'HTML

Obsidian non renderizza la sintassi Markdown all'interno degli elementi HTML. Questa è una scelta di design intenzionale per l'ottimizzazione delle prestazioni e per mantenere bassa la complessità del parser nella gestione di documenti di grandi dimensioni.

Ad esempio, questo non funzionerà come previsto:

```md
<div>
Questo **non sarà** in grassetto e questo `non sarà` codice.
</div>
```

### I blocchi HTML devono essere autonomi

I blocchi HTML devono essere completi e non possono contenere righe vuote al loro interno. Le righe vuote interromperanno il blocco HTML.

Questo funzionerà:

```md
<table>
<tr>
<td>Contenuto qui</td>
</tr>
</table>
```

Questo non funzionerà correttamente:

```md
<table>

<tr>

<td>Contenuto qui</td>

</tr>

</table>
```

### Quando il Markdown sembra funzionare nell'HTML

Alcuni tag HTML inline come `<span>` o `<a>` hanno funzionalità limitate e possono sembrare renderizzare il Markdown, ma in realtà non è ciò che accade. Il Markdown viene elaborato al di fuori del contesto HTML.

Per maggiori dettagli su come Obsidian gestisce il Markdown, consulta [[Obsidian Flavored Markdown]].

## Utilizzi comuni dell'HTML

> [!info] Più dettagli sull'uso di `<iframe>` sono disponibili in [[Incorporare pagine web]].

### Commenti

I [[Sintassi di formattazione di base#Commenti|commenti Markdown]] sono il modo preferito per aggiungere commenti nascosti all'interno delle note. Tuttavia alcuni metodi di conversione delle note Markdown, come [Pandoc](https://pandoc.org), hanno un supporto limitato dei commenti Markdown. In quei casi, puoi usare un `<!-- Commento HTML -->` al loro posto!

### Sottolineatura

Se hai bisogno di sottolineare rapidamente un elemento nelle tue note, puoi usare `<u>Esempio</u>` per creare <u>il tuo testo sottolineato</u>.

### Span/Div

I tag span e div possono essere usati per applicare classi personalizzate da un [[Snippet CSS|frammento CSS]], o stili definiti personalizzati, su un'area selezionata di testo. Ad esempio, usando `<span style="font-family: cursive">il tuo testo</span>` puoi rapidamente <span style="font-family: cursive">cambiare il tuo font</span>.

## Barrato

Hai bisogno di barrare <s>del testo</s>? Usa `<s>questo</s>` per barrarlo.
