---
permalink: web-clipper/interpreter
---
Tolk er en funksjon i [[Introduksjon til Obsidian Web Clipper|Web Clipper]] som lar deg samhandle med nettsider ved hjelp av naturlig språk. Tolk hjelper deg med å fange og endre data du ønsker å lagre i Obsidian. For eksempel:

- Trekke ut spesifikke tekstfragmenter.
- Oppsummere eller forklare informasjon.
- Konvertere tekst fra ett format til et annet.
- Oversette tekst til et annet språk.

Tolk bruker språkmodeller til å behandle informasjon på en nettside, og returnerer resultater ved hjelp av [[Variabler]] som du kan legge til i dine [[Obsidian Web Clipper/Maler|Web Clipper-maler]].

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## Eksempler på ledetekster

Ledetekster bruker [[Variabler|variabel]]-syntaksen `{{"din ledetekst"}}`. Du kan bruke denne syntaksen med hvilken som helst spørring på naturlig språk, f.eks.

- `{{"a summary of the page"}}` for å trekke ut et sammendrag av siden.
- `{{"a three bullet point summary, translated to French"}}` for å trekke ut punkter om siden, og oversette dem til fransk.
- `{{"un resumé de la page en trois points"}}` for å trekke ut tre punkter med en ledetekst på fransk.

Resultatet av ledetekstene dine kan videre manipuleres med [[Filtre]]. Filtre behandles etter at svaret fra modellen er mottatt. For eksempel: `{{"a summary of the page"|blockquote}}` vil gjøre svaret om til et blokksitat.

## Kom i gang

Tolk fungerer med nesten alle leverandører av språkmodeller, inkludert alternativer som kjører privat på enheten din. For å sette opp Tolk:

1. Gå til **Tolk**-delen i Web Clipper-innstillingene.
2. Slå på **Aktiver tolk**.
3. Konfigurer leverandøren og modellen din, se [[Tolk nettsider#Modeller|modeller]]-delen nedenfor.
4. Legg til [[Variabler|ledetekstvariabler]] i [[Obsidian Web Clipper/Maler|malene]] dine.
5. Hvis malen din inneholder ledetekstvariabler, vil Tolk-delen være synlig når du [[Klipp ut nettsider|klipper en side]]. Klikk **tolk** for å behandle ledetekstvariablene.

## Slik fungerer det

Når Tolk er aktivert *og* malen din inneholder [[Variabler#Ledetekstvariabler|ledetekstvariabler]], vises en ny Tolk-del i utvidelsesvinduet, over **Legg til i Obsidian**-knappen. Denne delen lar deg velge en modell og kjøre Tolk for gjeldende side.

Når du klikker **tolk**, sender Tolk sidekonteksten til den valgte modellen, sammen med *alle* ledetekstene i malen din i én forespørsel. Avhengig av modelleverandøren du velger, kan dette være et eksternt kall eller lokalt på enheten din. Modellen evaluerer ledetekstene dine mot sidekonteksten, og returnerer svarene sine. Tolk erstatter deretter ledetekstvariablene med svardataene.

Hele prosessen kan ta millisekunder eller mer enn 30 sekunder, avhengig av modellen du bruker og mengden data du behandler.

## Kontekst

Begrepet *kontekst* refererer til sidedataene som Tolk bruker til å behandle ledetekster. Jo mindre konteksten er, desto raskere kjører Tolk.

Som standard bruker Tolk hele sidens HTML som kontekst, men dette kan gjøre ledetekster tregere og dyrere enn nødvendig.

Du kan overstyre standardkonteksten i Tolks **Avanserte innstillinger** og definere kontekst per [[Obsidian Web Clipper/Maler|mal]].

For å definere en mer målrettet kontekst, bruk [[Variabler#Selektor-variabler|selektor-variabler]] (eller andre variabeltyper) for å tolke en del av siden. For eksempel kan du bruke følgende selektor-variabel i malens tolkningskontekst:

```
{{selectorHtml:#main}}
```

 Dette ville bare kjøre Tolk på `#main`-elementet på en nettside, hvis det finnes. [[Filtre#HTML-behandling|HTML-behandlingsfiltre]] som `remove_html`, `strip_tags` og `strip_attr` kan være nyttige for å redusere kontekstlengden ytterligere og øke behandlingshastigheten.

## Modeller

> [!warning] Personvern
> Ved å bruke en tredjeparts modelleverandør godtar du deres vilkår og personvernpolicy. Tolkforespørsler sendes direkte til leverandøren du velger. Obsidian samler ikke inn eller lagrer noen data om forespørslene dine.

### Forhåndsinnstilte leverandører

Tolk inkluderer flere forhåndsinnstilte leverandører. For å bruke disse leverandørene trenger du en API-nøkkel som du kan få ved å logge inn på leverandørens konto. Du må også bestemme hvilke modell(er) du vil bruke.

| Leverandør         | API-nøkkel                                                  | Modeller                                                                             |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [API-nøkkel](https://console.anthropic.com/settings/keys)   | [Modeller](https://docs.anthropic.com/en/docs/about-claude/models)                   |
| Azure&nbsp;OpenAI  | [API-nøkkel](https://oai.azure.com/portal/)                 | [Modeller](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [API-nøkkel](https://platform.deepseek.com/api_keys)        | [Modeller](https://api-docs.deepseek.com/quick_start/pricing)                        |
| Google&nbsp;Gemini | [API-nøkkel](https://aistudio.google.com/apikey)            | [Modeller](https://ai.google.dev/gemini-api/docs/models/gemini)                      |
| Hugging Face       | [API-nøkkel](https://huggingface.co/settings/tokens)        | [Modeller](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending) |
| Meta               | [API-nøkkel](https://llama.developer.meta.com)              | [Modeller](https://llama.developer.meta.com/docs/models)                             |
| Ollama             | n/a                                                         | [Modeller](https://ollama.com/search)                                                |
| OpenAI             | [API-nøkkel](https://platform.openai.com/api-keys)          | [Modeller](https://platform.openai.com/docs/models)                                  |
| OpenRouter         | [API-nøkkel](https://openrouter.ai/settings/keys)           | [Modeller](https://openrouter.ai/models)                                             |
| Perplexity         | [API-nøkkel](https://www.perplexity.ai/settings/api)        | [Modeller](https://docs.perplexity.ai/guides/model-cards)                            |
| xAI Grok           | [API-nøkkel](https://console.x.ai/team/default/api-keys)    | [Modeller](https://docs.x.ai/docs/models)                                           |

### Velge en modell

Generelt anbefaler vi å bruke små modeller med Web Clipper fordi de er raskere og presterer ganske nøyaktig for denne oppgaven. Eksempler på mindre modeller inkluderer **Anthropics Claude Haiku**, **Google Gemini Flash**, **Llama** med 3B eller 8B parametere, eller **OpenAIs Mini**-serie av modeller.

### Egendefinerte leverandører og modeller

For å legge til en egendefinert leverandør og/eller modell, gå til Web Clipper **[[Innstillinger]]** → **Tolk**:

- **Legg til leverandør** for å konfigurere forhåndsinnstilte og egendefinerte leverandører.
- **Legg til modell** for å konfigurere forhåndsinnstilte og egendefinerte modeller.

Når du legger til en egendefinert leverandør, anbefaler vi at du bruker deres chat completions-endepunkt for **Base URL** — det ender vanligvis med `/chat/completions`.

### Lokale modeller

Tolk kan bruke lokale modeller som gir bedre personvern og frakoblet kompatibilitet. Det finnes flere alternativer for å kjøre lokale modeller. Et av de enkleste å konfigurere er Ollama.

#### Ollama

[Ollama](https://ollama.com/) lar deg kjøre språkmodeller lokalt og privat på enheten din.

Når du har lastet ned og installert Ollama, legg til Ollama ved å bruke **Legg til leverandør** i Tolk-innstillingene. Ollama krever ingen API-nøkkel. Velg deretter en modell fra [modelllisten](https://ollama.com/search). For eksempel, hvis du vil bruke [Llama 3.2](https://ollama.com/library/llama3.2), klikk **Legg til modell**, deretter:

- **Leverandør:** Ollama
- **Visningsnavn:** Llama 3.2, denne verdien kan tilpasses.
- **Modell-ID:** `llama3.2`, dette må samsvare nøyaktig med modell-ID-en fra Ollama.

**Start Ollama-serveren**

For å la en nettleserutvidelse samhandle med Ollama må du [gi den eksplisitt instruksjon](https://github.com/ollama/ollama/issues/2308) når du kjører serveren, ellers vil du se en `403`-feil.

Lukk Ollama-appen og kjør følgende kommando i terminalen din. Protokollen bør endres til nettleserens utvidelsesprotokoll hvis du ikke bruker Chrome eller Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Kjør deretter modellen din med Ollama på vanlig måte, f.eks.

```
ollama run llama3.2
```

**Kontekstlengde**

Ollamas kontekstvindu er som standard 2048 tokens. Dette er det maksimale antallet tokens for meldingen og svaret. Når du klipper en lang nettside kan du enkelt overskride denne grensen. Ollama vil feile uten varsling og returnere irrelevante resultater. Noen alternativer:

- Øk Ollamas `num_ctx`-parameter. Vær oppmerksom på at lengre kontekst krever mer minne.
- Bruk [[#Kontekst]]-feltet i malen din for å gi en mer målrettet del av siden, eller trim konteksten med et [[Filtre|filter]], f.eks. `{{content|slice:0,1000}}`.
