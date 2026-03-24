---
permalink: snippets
publish: true
mobile: true
description: Scopri come modificare parti dell'aspetto dell'app Obsidian senza creare un tema completo.
aliases:
  - CSS snippets
---
Scopri come modificare aspetti dell'aspetto dell'applicazione Obsidian senza dover [creare un tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Se cerchi indicazioni su come gestire i CSS per [[Introduzione a Obsidian Publish|Obsidian Publish]], assicurati di consultare [[Personalizzare il sito]].

CSS è un linguaggio che controlla l'aspetto dell'HTML. Aggiungendo frammenti CSS, puoi modificare parti dell'interfaccia utente di Obsidian, come la dimensione e il colore delle intestazioni. Obsidian dispone di [variabili CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) che ti aiutano a personalizzare l'interfaccia facilmente.

Obsidian cerca i frammenti CSS all'interno della [[Cartella di configurazione|cartella di configurazione]] della cassaforte.

## Aggiungere un frammento

Per aggiungere un frammento CSS su **Desktop** ![[lucide-monitor-check.svg#icon]], segui questi passaggi:

1. Apri le **[[Impostazioni]]** ![[lucide-settings.svg#icon]].
2. In **Aspetto → Snippet CSS**, seleziona **Apri cartella snippet** ![[lucide-folder-open.svg#icon]].
3. Nella cartella degli snippet, crea un file CSS contenente il tuo frammento.
4. In Obsidian, sotto **Aspetto → Snippet CSS**, seleziona **Ricarica snippet** ![[lucide-refresh-cw.svg#icon]] per visualizzare il frammento nell'elenco.
5. Abilita il frammento facendo clic sull'interruttore.

Per aggiungere un frammento CSS su **Mobile/Tablet** ![[obsidian-icon-smartphone.svg#icon]], puoi seguire questi passaggi:

1. Apri un gestore di file e trova la tua cassaforte. Puoi verificare la posizione della cassaforte in _Gestisci casseforti…_ toccando la tua cassaforte e guardando il percorso.
2. Apri la [[Cartella di configurazione]] e crea una cartella chiamata `snippets` se non esiste.
3. Aggiungi il tuo frammento CSS a questa cartella.
4. Apri le **[[Impostazioni]]** di Obsidian ![[lucide-settings.svg#icon]].
5. Seleziona **Aspetto** sulla sinistra.
6. Scorri verso il basso fino alla sezione **Snippet CSS**.
7. Tocca **Ricarica snippet** ![[lucide-refresh-cw.svg#icon]] per aggiornare l'elenco.
8. Tocca l'interruttore per abilitare il frammento.

In alternativa, puoi
- [[Sincronizza le note tra dispositivi|Sincronizzare]] qualsiasi modifica con il tuo servizio di sincronizzazione.
- Utilizzare un plugin della community per creare un frammento direttamente da Obsidian.

Una volta abilitato, Obsidian rileverà automaticamente le modifiche ai frammenti CSS e le applicherà quando salvi il file.

> [!tip] Non è necessario riavviare Obsidian perché le modifiche abbiano effetto. Tuttavia, potrebbe essere necessario utilizzare il comando della [[Riquadro comandi]] per ricaricare Obsidian senza salvare per vedere le modifiche nel tema o nella nota corrente.

## Scrivere CSS per Obsidian

Obsidian offre diversi metodi che rendono la scrittura di CSS più semplice e potente.

Dispone di numerose [variabili CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) per modificare facilmente parti di Obsidian e un [[Proprietà#Tipi di proprietà|tipo di proprietà]] integrato per cambiare l'aspetto di una o più note.

> [!example] Variabili
> Crea un file chiamato `headers.css` con il seguente contenuto per cambiare i colori dei sei [[Sintassi di formattazione di base#Intestazioni|livelli di intestazione]] nei colori dell'arcobaleno:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] Classi CSS
> Assegna il nome di una classe CSS personalizzata (o un elenco di classi CSS) a una [[Proprietà|proprietà]] predefinita `cssclasses` per rendere una o più note diverse dalle altre.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
> }
> ```
> 
> **YAML/Proprietà**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> In ogni nota che contiene il valore `red-border` nella proprietà `cssclasses`, le immagini vengono visualizzate con un bordo rosso.

Per assicurarti che il file CSS sia valido e formattato correttamente, ti consigliamo di verificarlo con uno strumento come [CSS Validation Service](https://jigsaw.w3.org/css-validator/), poiché un CSS non valido non funzionerà.

## Scopri di più

- Se sei nuovo al CSS, consulta [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) di Mozilla.
- Per ulteriori informazioni sulla personalizzazione di Obsidian, consulta:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
