Mostra una rappresentazione grafica dei [[collegamenti interni]] tra le note.

Le note coi maggiori riferimenti appaiono come nodi più grandi all'interno del grafo.

![[Pasted image 10.png]]

### Suggerimenti per la visualizzazione

- Passare con il mouse su un nodo per evidenziare le sue connessioni, tutto il resto apparirà in dissolvenza.
- Trascinare i nodi per riordinare il grafo. Utile quando i nodi si sovrappongono ad altri.

### Suggerimenti per l'esplorazione

- Per ingrandire la visuale, usare la rotellina del mouse o `+` e `-` sulla tastiera.
- Per fare una panoramica, trascinare lo sfondo o usare i tasti freccia sulla tastiera.
- Per accelerare i movimenti, tenere premuto `Shift` durante l'esplorazione .

### [[CSS personalizzati]]

Poiché il grafo viene mostrato usando `<canvas>` e WebGL, non è possibile manipolare l'aspetto di noti e collegamenti usando i CSS. Per personalizzare il grafo, abbiamo creato un modo per convertire i colori CSS in comandi WebGL.

#### Sono supportate le seguenti classi CSS:

```
.graph-view.color-fill
.graph-view.color-fill-tag (dipendente dal tema)
.graph-view.color-fill-attachment (dipendente dal tema)
.graph-view.color-arrow
.graph-view.color-circle
.graph-view.color-line
.graph-view.color-text
.graph-view.color-fill-highlight
.graph-view.color-line-highlight
.graph-view.color-fill-unresolved
```

\* "dipendente dal tema" significa che potrebbe essere necessario aggiungere `.theme-dark` o `.theme-light` a seconda del tema. Vedere [[Vista grafo#CSS personalizzati#Predefiniti]].

#### Sono supportate le seguenti regole CSS:

```css
 .graph-view.color-class {
	/* Supporta tutti i formati dei colori CSS, come #HEX, rgb e rgba */
	color:   #FFF;
	color:   #FFFFFF;
	color:   rgb(0, 0, 0);
	color:   rgba(0, 0, 0, 1);
	/* Opacity (similmente a rgba) rende il colore trasparente */
	opacity: 0.5;
}
```

#### Predefiniti:

Ecco l'elenco di regole CSS predefinite utilizzate da Obsidian. Possono essere sovrascritte usando una regola identica o [più specifica](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). Ciò vale specialmente per `.color-fill-tag` e `.color-fill-attachment`. Come ultima risorsa, aggiungere `!important` alla fine della regola.

```css
.graph-view.color-fill,
.theme-dark .graph-view.color-fill-tag,
.theme-light .graph-view.color-fill-tag,
.theme-dark .graph-view.color-fill-attachment,
.theme-light .graph-view.color-fill-attachment,
.graph-view.color-arrow,
.graph-view.color-circle,
.graph-view.color-line,
.graph-view.color-text,
.graph-view.color-fill-highlight,
.graph-view.color-line-highlight,
.graph-view.color-fill-unresolved {}
```