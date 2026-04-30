---
permalink: web-clipper/interpreter
aliases:
  - Tolka webbsidor
---
Tolk är en funktion i [[Introduktion till Obsidian Web Clipper|Web Clipper]] som låter dig interagera med webbsidor med hjälp av naturligt språk. Tolk hjälper dig att fånga och modifiera data som du vill spara till Obsidian. Till exempel:

- Extrahera specifika textfragment.
- Sammanfatta eller förklara information.
- Konvertera text från ett format till ett annat.
- Översätta text till ett annat språk.

Tolk utnyttjar språkmodeller för att bearbeta information på en webbsida och returnera resultat med hjälp av [[Variabler]] som du kan lägga till i dina [[Obsidian Web Clipper/Mallar|Web Clipper-mallar]].

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## Exempel på promptar

Promptar använder [[Variabler|variabel]]-syntaxen `{{"din prompt"}}`. Du kan använda denna syntax med vilken fråga på naturligt språk som helst, t.ex.

- `{{"a summary of the page"}}` för att extrahera en sammanfattning av sidan.
- `{{"a three bullet point summary, translated to French"}}` för att extrahera punkter om sidan och översätta dem till franska.
- `{{"un resumé de la page en trois points"}}` för att extrahera tre punkter med en prompt på franska.

Resultatet av dina promptar kan vidare manipuleras med hjälp av [[Filter]]. Filter bearbetas efter att promptsvaret har mottagits från modellen. Till exempel: `{{"a summary of the page"|blockquote}}` kommer att omvandla svaret till ett blockcitat.

## Kom igång

Tolk fungerar med nästan alla leverantörer av språkmodeller, inklusive alternativ som körs privat på din enhet. För att konfigurera Tolk:

1. Gå till avsnittet **Tolk** i Web Clipper-inställningarna.
2. Aktivera **Aktivera tolk**.
3. Konfigurera din leverantör och modell, se avsnittet [[Tolka webbsidor#Modeller|modeller]] nedan.
4. Lägg till [[Variabler|promptvariabler]] i dina [[Obsidian Web Clipper/Mallar|mallar]].
5. Om din mall innehåller promptvariabler kommer Tolk-avsnittet att vara synligt när du [[Klipp webbsidor|klipper en sida]]. Klicka på **tolka** för att bearbeta promptvariablerna.

## Hur det fungerar

När Tolk är aktiverad *och* din mall innehåller [[Variabler#Promptvariabler|promptvariabler]], visas ett nytt Tolk-avsnitt i tilläggsfönstret, ovanför knappen **Lägg till i Obsidian**. Detta avsnitt låter dig välja en modell och köra Tolk för den aktuella sidan.

När du klickar på **tolka** skickar Tolk sidkontexten till din valda modell, tillsammans med *alla* promptar i din mall i en enda förfrågan. Beroende på vilken modellleverantör du väljer kan detta vara ett externt anrop eller lokalt på din enhet. Modellen utvärderar dina promptar mot sidkontexten och returnerar sina svar. Tolk ersätter sedan promptvariablerna med svarsdata.

Hela processen kan ta millisekunder eller mer än 30 sekunder beroende på vilken modell du använder och mängden data du bearbetar.

## Kontext

Termen *kontext* avser siddata som Tolk använder för att bearbeta promptar. Ju mindre kontext, desto snabbare körs Tolk.

Som standard använder Tolk hela sidans HTML som kontext, men detta kan göra promptar långsammare och dyrare än nödvändigt.

Du kan åsidosätta standardkontexten i Tolks **Avancerade inställningar** och definiera kontext per [[Obsidian Web Clipper/Mallar|mall]].

För att definiera en mer riktad kontext, använd [[Variabler#Selektorvariabler|selektorvariabler]] (eller andra variabeltyper) för att tolka en del av sidan. Till exempel kan du använda följande selektorvariabel i din malls Tolkkontext:

```
{{selectorHtml:#main}}
```

Detta skulle bara köra Tolk på elementet `#main` på en webbsida, om det finns. [[Filter#HTML-bearbetning|HTML-bearbetningsfilter]] som `remove_html`, `strip_tags` och `strip_attr` kan vara användbara för att ytterligare minska kontextlängden och snabba upp bearbetningen.

## Modeller

> [!warning] Integritet
> Genom att använda en tredjepartsleverantör av modeller godkänner du deras villkor och integritetspolicy. Tolkförfrågningar skickas direkt till den leverantör du väljer. Obsidian samlar inte in eller lagrar någon data om dina förfrågningar.

### Förinställda leverantörer

Tolk inkluderar flera förinställda leverantörer. För att använda dessa leverantörer behöver du en API-nyckel som du kan få genom att logga in på ditt leverantörskonto. Du behöver också bestämma vilken/vilka modell(er) du vill använda.

| Leverantör         | API-nyckel                                                  | Modeller                                                                             |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [API-nyckel](https://console.anthropic.com/settings/keys)   | [Modeller](https://docs.anthropic.com/en/docs/about-claude/models)                   |
| Azure&nbsp;OpenAI  | [API-nyckel](https://oai.azure.com/portal/)                 | [Modeller](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [API-nyckel](https://platform.deepseek.com/api_keys)        | [Modeller](https://api-docs.deepseek.com/quick_start/pricing)                        |
| Google&nbsp;Gemini | [API-nyckel](https://aistudio.google.com/apikey)            | [Modeller](https://ai.google.dev/gemini-api/docs/models/gemini)                      |
| Hugging Face       | [API-nyckel](https://huggingface.co/settings/tokens)        | [Modeller](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)  |
| Meta               | [API-nyckel](https://llama.developer.meta.com)              | [Modeller](https://llama.developer.meta.com/docs/models)                              |
| Ollama             | ej tillämpligt                                              | [Modeller](https://ollama.com/search)                                                |
| OpenAI             | [API-nyckel](https://platform.openai.com/api-keys)          | [Modeller](https://platform.openai.com/docs/models)                                  |
| OpenRouter         | [API-nyckel](https://openrouter.ai/settings/keys)           | [Modeller](https://openrouter.ai/models)                                             |
| Perplexity         | [API-nyckel](https://www.perplexity.ai/settings/api)        | [Modeller](https://docs.perplexity.ai/guides/model-cards)                            |
| xAI Grok           | [API-nyckel](https://console.x.ai/team/default/api-keys)    | [Modeller](https://docs.x.ai/docs/models)                                           |

### Välja en modell

Generellt rekommenderar vi att använda små modeller med Web Clipper eftersom de är snabbare och presterar ganska noggrant för denna uppgift. Exempel på mindre modeller inkluderar **Anthropics Claude Haiku**, **Google Gemini Flash**, **Llama** med 3B eller 8B parametrar, eller **OpenAI:s Mini**-serie av modeller.

### Anpassade leverantörer och modeller

För att lägga till en anpassad leverantör och/eller modell, gå till Web Clipper **[[Inställningar]]** → **Tolk**:

- **Lägg till leverantör** för att konfigurera förinställda och anpassade leverantörer.
- **Lägg till modell** för att konfigurera förinställda och anpassade modeller.

När du lägger till en anpassad leverantör rekommenderar vi att du använder deras chat completions-slutpunkt för **Bas-URL** — den slutar vanligtvis med `/chat/completions`.

### Lokala modeller

Tolk kan använda lokala modeller som erbjuder större integritet och offline-kompatibilitet. Det finns flera alternativ för att köra lokala modeller. Ett av de enklaste att konfigurera är Ollama.

#### Ollama

[Ollama](https://ollama.com/) låter dig köra språkmodeller lokalt och privat på din enhet.

När du har laddat ner och installerat Ollama, lägg till Ollama med **Lägg till leverantör** i Tolk-inställningarna. Ollama kräver ingen API-nyckel. Välj sedan en modell från [modelllistan](https://ollama.com/search). Om du till exempel vill använda [Llama 3.2](https://ollama.com/library/llama3.2), klicka på **Lägg till modell**, sedan:

- **Leverantör:** Ollama
- **Visningsnamn:** Llama 3.2, detta värde kan anpassas.
- **Modell-ID:** `llama3.2`, detta måste exakt matcha modell-ID:t från Ollama.

**Starta Ollama-servern**

För att tillåta ett webbläsartillägg att interagera med Ollama måste du [ge det explicit instruktion](https://github.com/ollama/ollama/issues/2308) när du kör servern, annars kommer du att se ett `403`-fel.

Stäng Ollama-appen och kör följande kommando i din terminal. Protokollet bör ändras till din webbläsares tilläggsprotokoll om du inte använder Chrome eller Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Kör sedan din modell med Ollama på vanligt sätt, t.ex.

```
ollama run llama3.2
```

**Kontextlängd**

Ollamas kontextfönster är som standard 2048 tokens. Detta är det maximala antalet tokens för meddelandet och svaret. När du klipper en lång webbsida kan du lätt överskrida denna gräns. Ollama kommer att tyst misslyckas och returnera irrelevanta resultat. Några alternativ:

- Öka Ollamas `num_ctx`-parameter. Var medveten om att längre kontext kräver mer minne.
- Använd fältet [[#Kontext]] i din mall för att ge en mer riktad del av sidan, eller trimma kontexten med ett [[Filter|filter]] t.ex. `{{content|slice:0,1000}}`.
