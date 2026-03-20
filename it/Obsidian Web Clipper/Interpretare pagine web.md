---
permalink: web-clipper/interpreter
aliases:
  - Interpret web pages
---
L'Interprete è una funzionalità di [[Introduction to Obsidian Web Clipper|Web Clipper]] che ti permette di interagire con le pagine web utilizzando il linguaggio naturale. L'Interprete ti aiuta a catturare e modificare i dati che vuoi salvare in Obsidian. Ad esempio:

- Estrarre frammenti di testo specifici.
- Riassumere o spiegare informazioni.
- Convertire testo da un formato a un altro.
- Tradurre testo in una lingua diversa.

L'Interprete sfrutta modelli linguistici per elaborare le informazioni su una pagina web e restituire risultati utilizzando le [[Variables|Variabili]] che puoi aggiungere ai tuoi [[Obsidian Web Clipper/Templates|Modelli di Web Clipper]].

![[web-clipper-interpreter-demo.mp4#interface]]

## Esempi di prompt

I prompt utilizzano la sintassi delle [[Variables|variabili]] `{{"il tuo prompt"}}`. Puoi utilizzare questa sintassi con qualsiasi query in linguaggio naturale, ad esempio:

- `{{"a summary of the page"}}` per estrarre un riepilogo della pagina.
- `{{"a three bullet point summary, translated to French"}}` per estrarre punti elenco sulla pagina e tradurli in francese.
- `{{"un resumé de la page en trois points"}}` per estrarre tre punti elenco utilizzando un prompt in francese.

L'output dei tuoi prompt può essere ulteriormente manipolato utilizzando i [[Filters|Filtri]]. I filtri vengono elaborati dopo che la risposta del prompt è stata ricevuta dal modello. Ad esempio: `{{"a summary of the page"|blockquote}}` trasformerà la risposta in una citazione in blocco.

## Per iniziare

L'Interprete funziona con quasi tutti i fornitori di modelli linguistici, comprese le opzioni che vengono eseguite privatamente sul tuo dispositivo. Per configurare l'Interprete:

1. Vai alla sezione **Interprete** nelle impostazioni di Web Clipper.
2. Attiva **Abilita interprete**.
3. Configura il tuo fornitore e il modello, vedi la sezione [[Interpret web pages#Modelli|modelli]] qui sotto.
4. Aggiungi [[Variables|variabili prompt]] ai tuoi [[Obsidian Web Clipper/Templates|modelli]].
5. Se il tuo modello include variabili prompt, la sezione Interprete sarà visibile quando [[Clip web pages|catturi una pagina]]. Fai clic su **interpretare** per elaborare le variabili prompt.

## Come funziona

Quando l'Interprete è abilitato *e* il tuo modello contiene [[Variables#Variabili prompt|variabili prompt]], una nuova sezione Interprete viene visualizzata nella finestra dell'estensione, sopra il pulsante **Aggiungi a Obsidian**. Questa sezione ti permette di selezionare un modello ed eseguire l'Interprete per la pagina corrente.

Quando fai clic su **interpretare**, l'Interprete invia il contesto della pagina al modello selezionato, insieme a *tutti* i prompt nel tuo modello in un'unica richiesta. A seconda del fornitore del modello che scegli, questa può essere una chiamata esterna o locale al tuo dispositivo. Il modello valuta i tuoi prompt rispetto al contesto della pagina e restituisce le sue risposte. L'Interprete quindi sostituisce le variabili prompt con i dati della risposta.

L'intero processo può richiedere millisecondi o più di 30 secondi a seconda del modello che utilizzi e della quantità di dati che stai elaborando.

## Contesto

Il termine *contesto* si riferisce ai dati della pagina che l'Interprete utilizza per elaborare i prompt. Più piccolo è il contesto, più velocemente viene eseguito l'Interprete.

Per impostazione predefinita, l'Interprete utilizza l'intero HTML della pagina come contesto, tuttavia questo può rendere i prompt più lenti e costosi del necessario.

Puoi sovrascrivere il contesto predefinito nelle **Impostazioni avanzate** dell'Interprete e definire il contesto per [[Obsidian Web Clipper/Templates|modello]].

Per definire un contesto più mirato, usa le [[Variables#Variabili selettore|variabili selettore]] (o altri tipi di variabili) per interpretare una sezione della pagina. Ad esempio, potresti usare la seguente variabile selettore nel contesto dell'Interprete del tuo modello:

```
{{selectorHtml:#main}}
```

Questo eseguirebbe l'Interprete solo sull'elemento `#main` di una pagina web, se esiste. I [[Filters#Elaborazione HTML|filtri di elaborazione HTML]] come `remove_html`, `strip_tags` e `strip_attr` possono essere utili per ridurre ulteriormente la lunghezza del contesto e velocizzare l'elaborazione.

## Modelli

> [!warning] Privacy
> Utilizzando un fornitore di modelli di terze parti accetti i loro termini e la loro politica sulla privacy. Le richieste dell'Interprete vengono inviate direttamente al fornitore che scegli. Obsidian non raccoglie né memorizza alcun dato sulle tue richieste.

### Fornitori preconfigurati

L'Interprete include diversi fornitori preconfigurati. Per utilizzare questi fornitori hai bisogno di una chiave API che puoi ottenere accedendo al tuo account del fornitore. Dovrai anche decidere quale/i modello/i utilizzare.

| Fornitore          | Chiave&nbsp;API                                             | Modelli                                                                              |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [Chiave&nbsp;API](https://console.anthropic.com/settings/keys) | [Modelli](https://docs.anthropic.com/en/docs/about-claude/models)                    |
| Azure&nbsp;OpenAI  | [Chiave&nbsp;API](https://oai.azure.com/portal/)            | [Modelli](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [Chiave API](https://platform.deepseek.com/api_keys)        | [Modelli](https://api-docs.deepseek.com/quick_start/pricing)                         |
| Google&nbsp;Gemini | [Chiave&nbsp;API](https://aistudio.google.com/apikey)       | [Modelli](https://ai.google.dev/gemini-api/docs/models/gemini)                       |
| Hugging Face       | [Chiave API](https://huggingface.co/settings/tokens)        | [Modelli](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)  |
| Meta               | [Chiave API](https://llama.developer.meta.com)              | [Modelli](https://llama.developer.meta.com/docs/models)                              |
| Ollama             | n/d                                                         | [Modelli](https://ollama.com/search)                                                 |
| OpenAI             | [Chiave&nbsp;API](https://platform.openai.com/api-keys)     | [Modelli](https://platform.openai.com/docs/models)                                   |
| OpenRouter         | [Chiave&nbsp;API](https://openrouter.ai/settings/keys)      | [Modelli](https://openrouter.ai/models)                                              |
| Perplexity         | [Chiave API](https://www.perplexity.ai/settings/api)        | [Modelli](https://docs.perplexity.ai/guides/model-cards)                             |
| xAI Grok           | [Chiave API](https://console.x.ai/team/default/api-keys)    | [Modelli](https://docs.x.ai/docs/models)                                             |

### Scegliere un modello

In generale raccomandiamo di utilizzare modelli piccoli con Web Clipper perché sono più veloci e offrono prestazioni abbastanza accurate per questo compito. Esempi di modelli più piccoli includono **Claude Haiku di Anthropic**, **Google Gemini Flash**, **Llama** con parametri 3B o 8B, o la serie di modelli **Mini di OpenAI**.

### Fornitori e modelli personalizzati

Per aggiungere un fornitore e/o modello personalizzato vai in **[[Settings|Impostazioni]]** di Web Clipper → **Interprete**:

- **Aggiungi fornitore** per configurare fornitori preconfigurati e personalizzati.
- **Aggiungi modello** per configurare modelli preconfigurati e personalizzati.

Quando aggiungi un fornitore personalizzato, raccomandiamo di utilizzare il loro endpoint di chat completions per l'**URL di base** — tipicamente termina con `/chat/completions`.

### Modelli locali

L'Interprete può utilizzare modelli locali che offrono maggiore privacy e compatibilità offline. Esistono diverse opzioni per eseguire modelli locali. Una delle più facili da configurare è Ollama.

#### Ollama

[Ollama](https://ollama.com/) ti permette di eseguire modelli linguistici localmente e privatamente sul tuo dispositivo.

Una volta scaricato e installato Ollama, aggiungi Ollama usando **Aggiungi fornitore** nelle impostazioni dell'Interprete. Ollama non richiede una chiave API. Quindi scegli un modello dall'[elenco dei modelli](https://ollama.com/search). Ad esempio, se vuoi utilizzare [Llama 3.2](https://ollama.com/library/llama3.2), fai clic su **Aggiungi modello**, quindi:

- **Fornitore:** Ollama
- **Nome visualizzato:** Llama 3.2, questo valore è personalizzabile.
- **ID del modello:** `llama3.2`, deve corrispondere esattamente all'ID del modello di Ollama.

**Avviare il server Ollama**

Per consentire a un'estensione del browser di interagire con Ollama devi [fornire istruzioni esplicite](https://github.com/ollama/ollama/issues/2308) durante l'esecuzione del server, altrimenti vedrai un errore `403`.

Chiudi l'app Ollama ed esegui il seguente comando nel tuo terminale. Il protocollo dovrebbe essere modificato con il protocollo dell'estensione del tuo browser se non utilizzi Chrome o Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Quindi esegui il tuo modello con Ollama nel modo normale, ad esempio:

```
ollama run llama3.2
```

**Lunghezza del contesto**

La finestra di contesto di Ollama è impostata per impostazione predefinita a 2048 token. Questo è il numero massimo di token per il messaggio e la risposta. Quando catturi una pagina web lunga puoi facilmente superare questo limite. Ollama fallirà silenziosamente e restituirà risultati irrilevanti. Alcune opzioni:

- Aumentare il parametro `num_ctx` di Ollama. Tieni presente che un contesto più lungo richiede più memoria.
- Usa il campo [[#Contesto]] nel tuo modello per fornire una sezione più mirata della pagina, oppure taglia il contesto usando un [[Filters|filtro]], ad esempio `{{content|slice:0,1000}}`.
