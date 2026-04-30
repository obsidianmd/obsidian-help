---
permalink: web-clipper/interpreter
aliases:
  - Fortolk websider
---
Fortolker er en funktion i [[Introduktion til Obsidian Web Clipper|Web Clipper]], der lader dig interagere med websider ved hjælp af naturligt sprog. Fortolker hjælper dig med at indfange og ændre data, som du vil gemme til Obsidian. For eksempel:

- Udtræk specifikke tekstfragmenter.
- Opsummér eller forklar information.
- Konvertér tekst fra ét format til et andet.
- Oversæt tekst til et andet sprog.

Fortolker udnytter sprogmodeller til at behandle information på en webside og returnere resultater ved hjælp af [[Variabler]], som du kan tilføje til dine [[Obsidian Web Clipper/Skabeloner|Web Clipper-skabeloner]].

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## Eksempler på prompts

Prompts bruger [[Variabler|variabel]]-syntaksen `{{"din prompt"}}`. Du kan bruge denne syntaks med enhver forespørgsel i naturligt sprog, f.eks.

- `{{"a summary of the page"}}` for at udtrække en opsummering af siden.
- `{{"a three bullet point summary, translated to French"}}` for at udtrække punktopstillinger om siden og oversætte dem til fransk.
- `{{"un resumé de la page en trois points"}}` for at udtrække tre punktopstillinger med en prompt på fransk.

Outputtet af dine prompts kan manipuleres yderligere med [[Filtre]]. Filtre behandles efter at prompt-svaret er modtaget fra modellen. For eksempel: `{{"a summary of the page"|blockquote}}` vil omdanne svaret til et blokcitat.

## Kom i gang

Fortolker fungerer med næsten enhver sprogmodeludbyder, herunder muligheder der kører privat på din enhed. Sådan opsætter du Fortolker:

1. Gå til sektionen **Fortolker** i Web Clipper-indstillinger.
2. Slå **Aktivér fortolker** til.
3. Konfigurer din udbyder og model, se sektionen [[Fortolk websider#Modeller|modeller]] nedenfor.
4. Tilføj [[Variabler|prompt-variabler]] til dine [[Obsidian Web Clipper/Skabeloner|skabeloner]].
5. Hvis din skabelon indeholder prompt-variabler, vil Fortolker-sektionen være synlig, når du [[Klip websider|klipper en side]]. Klik på **fortolk** for at behandle prompt-variablerne.

## Sådan fungerer det

Når Fortolker er aktiveret *og* din skabelon indeholder [[Variabler#Prompt-variabler|prompt-variabler]], vises en ny Fortolker-sektion i udvidelsesvinduet over knappen **Tilføj til Obsidian**. Denne sektion lader dig vælge en model og køre Fortolker for den aktuelle side.

Når du klikker på **fortolk**, sender Fortolker sidekonteksten til din valgte model sammen med *alle* prompts i din skabelon i én anmodning. Afhængigt af den modeludbyder du vælger, kan dette være et eksternt kald eller lokalt på din enhed. Modellen evaluerer dine prompts mod sidekonteksten og returnerer sine svar. Fortolker erstatter derefter prompt-variablerne med svardata.

Hele processen kan tage millisekunder eller mere end 30 sekunder afhængigt af den model du bruger og mængden af data du behandler.

## Kontekst

Begrebet *kontekst* refererer til de sidedata, som Fortolker bruger til at behandle prompts. Jo mindre konteksten er, desto hurtigere kører Fortolker.

Som standard bruger Fortolker hele sidens HTML som kontekst, men dette kan gøre prompts langsommere og dyrere end nødvendigt.

Du kan tilsidesætte standardkonteksten i Fortolkers **Avancerede indstillinger** og definere kontekst per [[Obsidian Web Clipper/Skabeloner|skabelon]].

For at definere en mere målrettet kontekst kan du bruge [[Variabler#Selektor-variabler|selektor-variabler]] (eller andre variabeltyper) til at fortolke en sektion af siden. Du kunne f.eks. bruge følgende selektor-variabel i din skabelons Fortolkerkontekst:

```
{{selectorHtml:#main}}
```

Dette ville kun køre Fortolker på `#main`-elementet på en webside, hvis det eksisterer. [[Filtre#HTML-behandling|HTML-behandlingsfiltre]] som `remove_html`, `strip_tags` og `strip_attr` kan være nyttige til yderligere at reducere kontekstlængden og fremskynde behandlingen.

## Modeller

> [!warning] Privatliv
> Ved at bruge en tredjeparts modeludbyder accepterer du deres vilkår og privatlivspolitik. Fortolker-anmodninger sendes direkte til den udbyder, du vælger. Obsidian indsamler eller gemmer ingen data om dine anmodninger.

### Forudindstillede udbydere

Fortolker inkluderer flere forudindstillede udbydere. For at bruge disse udbydere har du brug for en API-nøgle, som du kan få ved at logge ind på din udbyders konto. Du skal også beslutte, hvilke model(ler) du vil bruge.

| Udbyder            | API-nøgle                                                   | Modeller                                                                             |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic           | [API-nøgle](https://console.anthropic.com/settings/keys)   | [Modeller](https://docs.anthropic.com/en/docs/about-claude/models)                   |
| Azure&nbsp;OpenAI   | [API-nøgle](https://oai.azure.com/portal/)                 | [Modeller](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek            | [API-nøgle](https://platform.deepseek.com/api_keys)        | [Modeller](https://api-docs.deepseek.com/quick_start/pricing)                       |
| Google&nbsp;Gemini  | [API-nøgle](https://aistudio.google.com/apikey)            | [Modeller](https://ai.google.dev/gemini-api/docs/models/gemini)                     |
| Hugging Face        | [API-nøgle](https://huggingface.co/settings/tokens)        | [Modeller](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending) |
| Meta                | [API-nøgle](https://llama.developer.meta.com)              | [Modeller](https://llama.developer.meta.com/docs/models)                            |
| Ollama              | n/a                                                         | [Modeller](https://ollama.com/search)                                                |
| OpenAI              | [API-nøgle](https://platform.openai.com/api-keys)          | [Modeller](https://platform.openai.com/docs/models)                                 |
| OpenRouter          | [API-nøgle](https://openrouter.ai/settings/keys)           | [Modeller](https://openrouter.ai/models)                                             |
| Perplexity          | [API-nøgle](https://www.perplexity.ai/settings/api)        | [Modeller](https://docs.perplexity.ai/guides/model-cards)                           |
| xAI Grok            | [API-nøgle](https://console.x.ai/team/default/api-keys)    | [Modeller](https://docs.x.ai/docs/models)                                           |

### Valg af model

Generelt anbefaler vi at bruge små modeller med Web Clipper, fordi de er hurtigere og yder forholdsvis præcist til denne opgave. Eksempler på mindre modeller inkluderer **Anthropics Claude Haiku**, **Google Gemini Flash**, **Llama** med 3B eller 8B parametre, eller **OpenAIs Mini**-serie af modeller.

### Brugerdefinerede udbydere og modeller

For at tilføje en brugerdefineret udbyder og/eller model gå til Web Clipper **[[Indstillinger]]** → **Fortolker**:

- **Tilføj udbyder** for at konfigurere forudindstillede og brugerdefinerede udbydere.
- **Tilføj model** for at konfigurere forudindstillede og brugerdefinerede modeller.

Når du tilføjer en brugerdefineret udbyder, anbefaler vi at du bruger deres chat completions-endpoint som **Base-URL** — den ender typisk med `/chat/completions`.

### Lokale modeller

Fortolker kan bruge lokale modeller, som tilbyder større privatliv og offline-kompatibilitet. Der findes flere muligheder for at køre lokale modeller. En af de nemmeste at konfigurere er Ollama.

#### Ollama

[Ollama](https://ollama.com/) lader dig køre sprogmodeller lokalt og privat på din enhed.

Når du har hentet og installeret Ollama, skal du tilføje Ollama med **Tilføj udbyder** i Fortolker-indstillingerne. Ollama kræver ikke en API-nøgle. Vælg derefter en model fra [modellisten](https://ollama.com/search). Hvis du f.eks. vil bruge [Llama 3.2](https://ollama.com/library/llama3.2), klik på **Tilføj model**, og angiv:

- **Udbyder:** Ollama
- **Vis navn:** Llama 3.2, denne værdi kan tilpasses.
- **Model-ID:** `llama3.2`, dette skal matche model-ID'et fra Ollama nøjagtigt.

**Start Ollama-serveren**

For at tillade en browserudvidelse at interagere med Ollama skal du [give den eksplicit instruktion](https://github.com/ollama/ollama/issues/2308) når du kører serveren, ellers vil du se en `403`-fejl.

Luk Ollama-applikationen, og kør følgende kommando i din terminal. Protokollen skal ændres til din browsers udvidelsesprotokol, hvis du ikke bruger Chrome eller Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Kør derefter din model med Ollama på normal vis, f.eks.

```
ollama run llama3.2
```

**Kontekstlængde**

Ollamas kontekstvindue er som standard 2048 tokens. Dette er det maksimale antal tokens for beskeden og svaret. Når du klipper en lang webside, kan du nemt overskride denne grænse. Ollama vil fejle lydløst og returnere irrelevante resultater. Nogle muligheder:

- Forøg Ollamas `num_ctx`-parameter. Vær opmærksom på, at længere kontekst kræver mere hukommelse.
- Brug feltet [[#Kontekst]] i din skabelon til at angive en mere målrettet sektion af siden, eller trim konteksten med et [[Filtre|filter]] f.eks. `{{content|slice:0,1000}}`.
