---
permalink: web-clipper/interpreter
---
L'Intèrpret és una funcionalitat del [[Introducció a Obsidian Web Clipper|Web Clipper]] que et permet interactuar amb pàgines web utilitzant llenguatge natural. L'Intèrpret t'ajuda a capturar i modificar dades que vols desar a Obsidian. Per exemple:

- Extreure fragments de text específics.
- Resumir o explicar informació.
- Convertir text d'un format a un altre.
- Traduir text a un idioma diferent.

L'Intèrpret aprofita models de llenguatge per processar informació d'una pàgina web i retornar resultats utilitzant [[Variables]] que pots afegir a les teves [[Obsidian Web Clipper/Plantilles|Plantilles del Web Clipper]].

![[web-clipper-interpreter-demo.mp4#interface]]

## Exemples de prompts

Els prompts utilitzen la sintaxi de [[Variables|variable]] `{{"el teu prompt"}}`. Pots utilitzar aquesta sintaxi amb qualsevol consulta en llenguatge natural, p. ex.

- `{{"a summary of the page"}}` per extreure un resum de la pàgina.
- `{{"a three bullet point summary, translated to French"}}` per extreure vinyetes sobre la pàgina i traduir-les al francès.
- `{{"un resumé de la page en trois points"}}` per extreure tres vinyetes utilitzant un prompt en francès.

La sortida dels teus prompts es pot manipular encara més utilitzant [[Filtres]]. Els filtres es processen després que es rebi la resposta del prompt del model. Per exemple: `{{"a summary of the page"|blockquote}}` convertirà la resposta en una cita en bloc.

## Començar

L'Intèrpret funciona amb gairebé qualsevol proveïdor de models de llenguatge, incloent opcions que s'executen de manera privada al teu dispositiu. Per configurar l'Intèrpret:

1. Ves a la secció **Intèrpret** a la configuració del Web Clipper.
2. Activa **Habilitar intèrpret**.
3. Configura el teu proveïdor i model, consulta la secció de [[Interpretar pàgines web#Models|models]] a continuació.
4. Afegeix [[Variables|variables de prompt]] a les teves [[Obsidian Web Clipper/Plantilles|plantilles]].
5. Si la teva plantilla inclou variables de prompt, la secció de l'Intèrpret serà visible quan [[Retallar pàgines web|retallis una pàgina]]. Fes clic a **interpretar** per processar les variables de prompt.

## Com funciona

Quan l'Intèrpret està activat *i* la teva plantilla conté [[Variables#Variables de sol·licitud|variables de prompt]], es mostra una nova secció d'Intèrpret a la finestra de l'extensió, sobre el botó **Agregar a Obsidian**. Aquesta secció et permet seleccionar un model i executar l'Intèrpret per a la pàgina actual.

Quan fas clic a **interpretar**, l'Intèrpret envia el context de la pàgina al model seleccionat, juntament amb *tots* els prompts de la teva plantilla en una sola petició. Depenent del proveïdor de model que triïs, això pot ser una crida externa o local al teu dispositiu. El model avalua els teus prompts contra el context de la pàgina i retorna les seves respostes. L'Intèrpret aleshores substitueix les variables de prompt amb les dades de resposta.

Tot el procés pot trigar mil·lisegons o més de 30 segons depenent del model que utilitzis i la quantitat de dades que estiguis processant.

## Context

El terme *context* es refereix a les dades de la pàgina que l'Intèrpret utilitza per processar prompts. Com més petit sigui el context, més ràpid s'executa l'Intèrpret.

Per defecte, l'Intèrpret utilitza tot l'HTML de la pàgina com a context, però això pot fer que els prompts siguin més lents i costosos del necessari.

Pots sobreescriure el context per defecte a la **Configuració avançada** de l'Intèrpret i definir el context per [[Obsidian Web Clipper/Plantilles|plantilla]].

Per definir un context més específic utilitza [[Variables#Variables de selector|variables de selector]] (o altres tipus de variables) per interpretar una secció de la pàgina. Per exemple, podries utilitzar la següent variable de selector al context de l'Intèrpret de la teva plantilla:

```
{{selectorHtml:#main}}
```

Això només executaria l'Intèrpret sobre l'element `#main` d'una pàgina web, si existeix. Els [[Filtres#Processament d'HTML|filtres de processament HTML]] com `remove_html`, `strip_tags` i `strip_attr` poden ser útils per reduir encara més la longitud del context i accelerar el processament.

## Models

> [!warning] Privacitat
> En utilitzar un proveïdor de models de tercers acceptes els seus termes i política de privacitat. Les peticions de l'Intèrpret s'envien directament al proveïdor que triïs. Obsidian no recull ni emmagatzema cap dada sobre les teves peticions.

### Proveïdors preestablerts

L'Intèrpret inclou diversos proveïdors preestablerts. Per utilitzar aquests proveïdors necessites una clau d'API que pots obtenir iniciant la sessió al compte del teu proveïdor. També hauràs de decidir quin(s) model(s) utilitzar.

| Proveïdor          | Clau&nbsp;d'API                                              | Models                                                                               |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic           | [Clau&nbsp;d'API](https://console.anthropic.com/settings/keys) | [Models](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI   | [Clau&nbsp;d'API](https://oai.azure.com/portal/)            | [Models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek            | [Clau d'API](https://platform.deepseek.com/api_keys)        | [Models](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini  | [Clau&nbsp;d'API](https://aistudio.google.com/apikey)       | [Models](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face        | [Clau d'API](https://huggingface.co/settings/tokens)        | [Models](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta                | [Clau d'API](https://llama.developer.meta.com)              | [Models](https://llama.developer.meta.com/docs/models)                               |
| Ollama              | n/a                                                         | [Models](https://ollama.com/search)                                                  |
| OpenAI              | [Clau&nbsp;d'API](https://platform.openai.com/api-keys)     | [Models](https://platform.openai.com/docs/models)                                    |
| OpenRouter          | [Clau&nbsp;d'API](https://openrouter.ai/settings/keys)      | [Models](https://openrouter.ai/models)                                               |
| Perplexity          | [Clau d'API](https://www.perplexity.ai/settings/api)        | [Models](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok            | [Clau d'API](https://console.x.ai/team/default/api-keys)    | [Models](https://docs.x.ai/docs/models)                                              |

### Escollir un model

En general recomanem utilitzar models petits amb el Web Clipper perquè són més ràpids i funcionen amb prou precisió per a aquesta tasca. Exemples de models més petits inclouen **Claude Haiku d'Anthropic**, **Google Gemini Flash**, **Llama** amb paràmetres de 3B o 8B, o la sèrie de models **Mini d'OpenAI**.

### Proveïdors i models personalitzats

Per afegir un proveïdor i/o model personalitzat ves a la **[[Configuració]]** del Web Clipper → **Intèrpret**:

- **Agregar proveïdor** per configurar proveïdors preestablerts i personalitzats.
- **Agregar model** per configurar models preestablerts i personalitzats.

Quan afegeixis un proveïdor personalitzat, recomanem que utilitzis el seu punt final de completacions de xat per a la **URL base** — normalment acaba amb `/chat/completions`.

### Models locals

L'Intèrpret pot utilitzar models locals que ofereixen més privacitat i compatibilitat sense connexió. Existeixen diverses opcions per executar models locals. Una de les més fàcils de configurar és Ollama.

#### Ollama

[Ollama](https://ollama.com/) et permet executar models de llenguatge localment i de manera privada al teu dispositiu.

Un cop hagis descarregat i instal·lat Ollama, afegeix Ollama utilitzant **Agregar proveïdor** a la configuració de l'Intèrpret. Ollama no requereix una clau d'API. Després tria un model de la [llista de models](https://ollama.com/search). Per exemple, si vols utilitzar [Llama 3.2](https://ollama.com/library/llama3.2), fes clic a **Agregar model**, i aleshores:

- **Proveïdor:** Ollama
- **Nom per mostrar:** Llama 3.2, aquest valor és personalitzable.
- **ID del model:** `llama3.2`, ha de coincidir exactament amb l'ID del model d'Ollama.

**Iniciar el servidor d'Ollama**

Per permetre que una extensió del navegador interactuï amb Ollama has de [donar-li instruccions explícites](https://github.com/ollama/ollama/issues/2308) quan executis el servidor, o sinó veuràs un error `403`.

Tanca l'aplicació d'Ollama i executa la següent ordre al teu terminal. El protocol s'ha de canviar al protocol d'extensió del teu navegador si no utilitzes Chrome o Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Després executa el teu model amb Ollama de la manera habitual, p. ex.

```
ollama run llama3.2
```

**Longitud del context**

La finestra de context d'Ollama per defecte és de 2048 tokens. Aquest és el nombre màxim de tokens per al missatge i la resposta. Quan retallis una pàgina web llarga pots superar fàcilment aquest límit. Ollama fallarà silenciosament i retornarà resultats irrellevants. Algunes opcions:

- Augmentar el paràmetre `num_ctx` d'Ollama. Tingues en compte que un context més llarg requereix més memòria.
- Utilitza el camp [[#Context]] a la teva plantilla per proporcionar una secció més específica de la pàgina, o retalla el context utilitzant un [[Filtres|filtre]], p. ex. `{{content|slice:0,1000}}`.
