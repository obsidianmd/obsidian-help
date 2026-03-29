---
permalink: web-clipper/interpreter
---
Interpreter is een functie van [[Introductie tot Obsidian Web Clipper|Web Clipper]] waarmee je met webpagina's kunt communiceren in natuurlijke taal. Interpreter helpt je bij het vastleggen en aanpassen van gegevens die je wilt opslaan in Obsidian. Bijvoorbeeld:

- Specifieke tekstfragmenten extraheren.
- Informatie samenvatten of uitleggen.
- Tekst van het ene formaat naar het andere converteren.
- Tekst naar een andere taal vertalen.

Interpreter maakt gebruik van taalmodellen om informatie op een webpagina te verwerken en resultaten terug te geven met behulp van [[Variabelen]] die je kunt toevoegen aan je [[Obsidian Web Clipper/Sjablonen|Web Clipper-sjablonen]].

![[web-clipper-interpreter-demo.mp4#interface]]

## Voorbeelden van prompts

Prompts gebruiken de [[Variabelen|variabele]]-syntaxis `{{"je prompt"}}`. Je kunt deze syntaxis gebruiken met elke query in natuurlijke taal, bijv.

- `{{"a summary of the page"}}` om een samenvatting van de pagina te extraheren.
- `{{"a three bullet point summary, translated to French"}}` om opsommingstekens over de pagina te extraheren en ze naar het Frans te vertalen.
- `{{"un resumé de la page en trois points"}}` om drie opsommingstekens te extraheren met een prompt in het Frans.

De uitvoer van je prompts kan verder worden bewerkt met behulp van [[Filters]]. Filters worden verwerkt nadat het antwoord van het model is ontvangen. Bijvoorbeeld: `{{"a summary of the page"|blockquote}}` zal het antwoord omzetten in een blokcitaat.

## Aan de slag

Interpreter werkt met vrijwel elke taalmodelprovider, inclusief opties die privé op je apparaat draaien. Om Interpreter in te stellen:

1. Ga naar het gedeelte **Interpreter** in de Web Clipper-instellingen.
2. Schakel **Interpreter inschakelen** in.
3. Configureer je provider en model, zie het gedeelte [[Webpagina's interpreteren#Modellen|modellen]] hieronder.
4. Voeg [[Variabelen|promptvariabelen]] toe aan je [[Obsidian Web Clipper/Sjablonen|sjablonen]].
5. Als je sjabloon promptvariabelen bevat, is het Interpreter-gedeelte zichtbaar wanneer je [[Webpagina's knippen|een pagina knipt]]. Klik op **interpreteren** om de promptvariabelen te verwerken.

## Hoe het werkt

Wanneer Interpreter is ingeschakeld *en* je sjabloon [[Variabelen#Promptvariabelen|promptvariabelen]] bevat, wordt een nieuw Interpreter-gedeelte weergegeven in het extensievenster, boven de knop **Toevoegen aan Obsidian**. In dit gedeelte kun je een model selecteren en Interpreter uitvoeren voor de huidige pagina.

Wanneer je op **interpreteren** klikt, stuurt Interpreter de paginacontext naar je geselecteerde model, samen met *alle* prompts in je sjabloon in één verzoek. Afhankelijk van de modelprovider die je kiest, kan dit een externe aanroep zijn of lokaal op je apparaat. Het model evalueert je prompts aan de hand van de paginacontext en geeft zijn antwoorden terug. Interpreter vervangt vervolgens de promptvariabelen door de antwoordgegevens.

Het hele proces kan milliseconden duren of meer dan 30 seconden, afhankelijk van het model dat je gebruikt en de hoeveelheid gegevens die je verwerkt.

## Context

De term *context* verwijst naar de paginagegevens die Interpreter gebruikt om prompts te verwerken. Hoe kleiner de context, hoe sneller Interpreter draait.

Standaard gebruikt Interpreter de volledige pagina-HTML als context, maar dit kan prompts trager en duurder maken dan nodig.

Je kunt de standaardcontext overschrijven in de **Geavanceerde instellingen** van Interpreter en context per [[Obsidian Web Clipper/Sjablonen|sjabloon]] definiëren.

Om een meer gerichte context te definiëren, gebruik je [[Variabelen#Selectorvariabelen|selectorvariabelen]] (of andere variabeletypen) om een gedeelte van de pagina te interpreteren. Je kunt bijvoorbeeld de volgende selectorvariabele gebruiken in de Interpreter-context van je sjabloon:

```
{{selectorHtml:#main}}
```

Dit zou Interpreter alleen uitvoeren op het `#main`-element van een webpagina, als dat bestaat. [[Filters#HTML-verwerking|HTML-verwerkingsfilters]] zoals `remove_html`, `strip_tags` en `strip_attr` kunnen nuttig zijn om de contextlengte verder te verminderen en de verwerking te versnellen.

## Modellen

> [!warning] Privacy
> Door een externe modelprovider te gebruiken ga je akkoord met hun voorwaarden en privacybeleid. Interpreter-verzoeken worden rechtstreeks naar de provider van je keuze gestuurd. Obsidian verzamelt of bewaart geen gegevens over je verzoeken.

### Vooraf ingestelde providers

Interpreter bevat verschillende vooraf ingestelde providers. Om deze providers te gebruiken heb je een API-sleutel nodig die je kunt verkrijgen door in te loggen op je provideraccount. Je moet ook beslissen welk(e) model(len) je wilt gebruiken.

| Provider           | API-sleutel                                                 | Modellen                                                                             |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [API-sleutel](https://console.anthropic.com/settings/keys)  | [Modellen](https://docs.anthropic.com/en/docs/about-claude/models)                   |
| Azure&nbsp;OpenAI  | [API-sleutel](https://oai.azure.com/portal/)                | [Modellen](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [API-sleutel](https://platform.deepseek.com/api_keys)       | [Modellen](https://api-docs.deepseek.com/quick_start/pricing)                       |
| Google&nbsp;Gemini | [API-sleutel](https://aistudio.google.com/apikey)           | [Modellen](https://ai.google.dev/gemini-api/docs/models/gemini)                     |
| Hugging Face       | [API-sleutel](https://huggingface.co/settings/tokens)       | [Modellen](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending) |
| Meta               | [API-sleutel](https://llama.developer.meta.com)             | [Modellen](https://llama.developer.meta.com/docs/models)                             |
| Ollama             | n.v.t.                                                      | [Modellen](https://ollama.com/search)                                                |
| OpenAI             | [API-sleutel](https://platform.openai.com/api-keys)         | [Modellen](https://platform.openai.com/docs/models)                                 |
| OpenRouter         | [API-sleutel](https://openrouter.ai/settings/keys)          | [Modellen](https://openrouter.ai/models)                                            |
| Perplexity         | [API-sleutel](https://www.perplexity.ai/settings/api)       | [Modellen](https://docs.perplexity.ai/guides/model-cards)                           |
| xAI Grok           | [API-sleutel](https://console.x.ai/team/default/api-keys)   | [Modellen](https://docs.x.ai/docs/models)                                           |

### Een model kiezen

Over het algemeen raden we aan om kleine modellen te gebruiken met Web Clipper omdat ze sneller zijn en redelijk nauwkeurig presteren voor deze taak. Voorbeelden van kleinere modellen zijn **Anthropic's Claude Haiku**, **Google Gemini Flash**, **Llama** met 3B of 8B parameters, of **OpenAI's Mini**-serie modellen.

### Aangepaste providers en modellen

Om een aangepaste provider en/of model toe te voegen, ga je naar Web Clipper **[[Instellingen]]** → **Interpreter**:

- **Provider toevoegen** om vooraf ingestelde en aangepaste providers te configureren.
- **Model toevoegen** om vooraf ingestelde en aangepaste modellen te configureren.

Bij het toevoegen van een aangepaste provider raden we aan om het chat completions-eindpunt te gebruiken voor de **Basis-URL** — dit eindigt doorgaans op `/chat/completions`.

### Lokale modellen

Interpreter kan lokale modellen gebruiken die meer privacy en offline compatibiliteit bieden. Er bestaan verschillende opties om lokale modellen te draaien. Een van de gemakkelijkst te configureren is Ollama.

#### Ollama

[Ollama](https://ollama.com/) laat je taalmodellen lokaal en privé op je apparaat draaien.

Zodra je Ollama hebt gedownload en geïnstalleerd, voeg je Ollama toe via **Provider toevoegen** in de Interpreter-instellingen. Ollama vereist geen API-sleutel. Kies vervolgens een model uit de [modellenlijst](https://ollama.com/search). Als je bijvoorbeeld [Llama 3.2](https://ollama.com/library/llama3.2) wilt gebruiken, klik dan op **Model toevoegen** en vul in:

- **Provider:** Ollama
- **Weergavenaam:** Llama 3.2, deze waarde is aanpasbaar.
- **Model-ID:** `llama3.2`, dit moet exact overeenkomen met het model-ID van Ollama.

**De Ollama-server starten**

Om een browserextensie met Ollama te laten communiceren, moet je het [expliciet toestemming geven](https://github.com/ollama/ollama/issues/2308) bij het starten van de server, anders krijg je een `403`-fout.

Sluit de Ollama-app en voer het volgende commando uit in je terminal. Het protocol moet worden aangepast naar het extensieprotocol van je browser als je geen Chrome of Firefox gebruikt.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Start vervolgens je model met Ollama op de gebruikelijke manier, bijv.

```
ollama run llama3.2
```

**Contextlengte**

Het contextvenster van Ollama is standaard ingesteld op 2048 tokens. Dit is het maximale aantal tokens voor het bericht en het antwoord. Bij het knippen van een lange webpagina kun je deze limiet gemakkelijk overschrijden. Ollama zal stilzwijgend falen en irrelevante resultaten retourneren. Enkele opties:

- Verhoog de `num_ctx`-parameter van Ollama. Houd er rekening mee dat een langere context meer geheugen vereist.
- Gebruik het [[#Context]]-veld in je sjabloon om een meer gericht gedeelte van de pagina te bieden, of trim de context met behulp van een [[Filters|filter]] bijv. `{{content|slice:0,1000}}`.
