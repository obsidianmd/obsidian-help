---
permalink: publish/customize
publish: true
description: Scopri come personalizzare l'aspetto e lo stile del tuo sito Obsidian Publish.
aliases:
  - Customize your site
---
Questa pagina spiega come personalizzare l'aspetto e lo stile del tuo sito [[Introduzione a Obsidian Publish|Obsidian Publish]].

## Risorse statiche

Puoi personalizzare il tuo sito [[Pubblicare i contenuti#Pubblicare le note|pubblicando]] i seguenti file sul tuo sito:

- `publish.css` per aggiungere CSS personalizzato
- `publish.js` per aggiungere JavaScript personalizzato
- `favicon-32x32.png` per impostare la favicon

**Note:**

- Le [variabili CSS per Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) sono disponibili sul nostro sito di documentazione.
- Poiché Obsidian non supporta i file CSS o JavaScript, è necessario utilizzare un'altra applicazione per crearli e modificarli.
- Sia `publish.css` che `publish.js` devono trovarsi nella directory principale (`/`) della cassaforte.
- Per impostazione predefinita, `publish.css` e `publish.js` non appaiono nell'esplora file, ma è comunque possibile pubblicarli dalla finestra di dialogo **Pubblica modifiche**.
- Per utilizzare JavaScript personalizzato con `publish.js`, è necessario configurare un [[Domini personalizzati]].

Per le favicon, Obsidian Publish supporta le seguenti convenzioni di denominazione, dove `32` rappresenta le dimensioni dell'icona in pixel:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Si consiglia di fornire una o più delle seguenti dimensioni:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Hai la flessibilità di posizionare le favicon ovunque all'interno della cassaforte, purché vengano pubblicate sul tuo sito.

## Utilizzare un tema della community

Per utilizzare uno dei temi della community per il tuo sito:

1. Apri la cassaforte nell'esplora file predefinito del tuo sistema operativo.
2. Vai alla cartella delle impostazioni della cassaforte (predefinita: `.obsidian`).
3. Apri la cartella `themes`.
4. Copia il file CSS del tema che desideri utilizzare per il tuo sito.
5. Incolla il file nella cartella principale della cassaforte.
6. Rinomina il file CSS in `publish.css`.
7. [[Pubblicare i contenuti#Pubblicare le note|Pubblica]] `publish.css`.

**Note:**

- Se lo stile non si aggiorna entro pochi minuti, prova a svuotare la cache del browser.
- Puoi passare dalla modalità chiara a quella scura nelle [[Gestione siti#Visualizzare le opzioni del sito|opzioni del sito]].
- Molti temi della community utilizzano **Style Settings** per la personalizzazione dello stile, ma queste impostazioni non funzionano su Obsidian Publish.

> [!tip] Sviluppare temi
> Non riesci a trovare il tema adatto a te? Scopri come [creare un tema per Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) da solo.

## Abilitare le funzionalità dell'interfaccia

Puoi attivare o disattivare diverse funzionalità dell'interfaccia per il tuo sito, come la vista grafo o un indice.

Sfoglia le funzionalità dell'interfaccia disponibili nelle sezioni **Esperienza di lettura** e **Componenti** nelle [[Gestione siti#Visualizzare le opzioni del sito|opzioni del sito]].

### Personalizzare la navigazione

All'interno di Obsidian Publish, hai la possibilità di personalizzare l'ordine di navigazione e la visualizzazione di file e cartelle all'interno di Publish tramite l'[[Esplora file]]. Gli elementi di navigazione sono elencati in ordine di pubblicazione per impostazione predefinita. Le note non pubblicate non appariranno in questo pannello.

#### Accedere alle opzioni di Personalizza navigazione

1. Nella [[Barra multifunzione]], seleziona **Pubblica modifiche** (![[lucide-send.svg#icon]]) oppure apri la [[Riquadro comandi]] e digita **Publish: Pubblica modifiche...**
2. Nella finestra di dialogo **Pubblica modifiche**, seleziona **Modifica le opzioni del sito** ( ![[lucide-cog.svg#icon]] ).
3. In **Impostazioni componenti**, accanto a **Personalizza navigazione**, seleziona il pulsante **Gestisci**.

Apparirà una nuova finestra pop-up intitolata **Navigazione** sopra la finestra **Modifica le opzioni del sito**.

#### Modificare gli elementi di navigazione

Nella sezione denominata **Anteprima navigazione**, puoi modificare l'ordine di visualizzazione dei contenuti pubblicati.

1. Seleziona la cartella o la nota che desideri modificare.
2. Trascina la nota o la cartella verso l'alto o verso il basso fino alla posizione desiderata.
3. In basso a destra nella finestra **Navigazione**, seleziona **Fatto**.

Publish invierà le modifiche alla navigazione al tuo sito.

#### Nascondere e mostrare gli elementi di navigazione

Se ci sono note o cartelle che hai pubblicato, ma che non vuoi rendere visibili nella navigazione, puoi scegliere di nascondere quegli elementi.

1. Seleziona la cartella o la nota che desideri modificare.
2. Fai clic con il pulsante destro e seleziona **Nascondi nella navigazione**. L'elemento dovrebbe ora scomparire dall'**Anteprima navigazione**.
3. In basso a destra nella finestra **Navigazione**, seleziona **Fatto**.

Publish invierà le modifiche alla navigazione al tuo sito.

> [!tip] Puoi **Mostrare i nascosti** selezionando la casella di controllo a destra del titolo **Anteprima navigazione**

## Domande frequenti

**Posso spostare i file da una cartella all'altra all'interno della Navigazione?**

No. La struttura di navigazione dei file per le note all'interno delle cartelle deve essere mantenuta. Puoi modificare l'ordine delle note all'interno delle cartelle (inclusa la radice della cassaforte) e l'ordine delle cartelle all'interno di altre cartelle.

**Posso modificare l'ordine di più note e cartelle prima di selezionare Fatto?**

Sì.

**Come posso annullare queste modifiche?**

- **Ordine di visualizzazione**: Seleziona l'icona **Ripristina predefinito** (freccia di rotazione in senso antiorario) accanto a **Ordine degli elementi di navigazione**. Questo ripristinerà gli elementi di navigazione in ordine alfabetico.
- **Stato nascosto**: Seleziona l'icona **Ripristina predefinito** (freccia di rotazione in senso antiorario) accanto a **Nascondi pagine o cartelle dalla navigazione**. Questo ripristinerà gli elementi di navigazione nascosti in uno stato visibile.
