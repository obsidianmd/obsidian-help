---
permalink: web-clipper/interpreter
---
Překladač je funkce [[Úvod do Obsidian Web Clipper|Web Clipper]], která vám umožňuje interagovat s webovými stránkami pomocí přirozeného jazyka. Překladač vám pomáhá zachytit a upravit data, která chcete uložit do Obsidian. Například:

- Extrahovat konkrétní textové fragmenty.
- Shrnout nebo vysvětlit informace.
- Převést text z jednoho formátu do jiného.
- Přeložit text do jiného jazyka.

Překladač využívá jazykové modely ke zpracování informací na webové stránce a vrací výsledky pomocí [[Proměnné|proměnných]], které můžete přidat do svých [[Obsidian Web Clipper/Šablony|šablon Web Clipper]].

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## Příklady promptů

Prompty používají syntaxi [[Proměnné|proměnných]] `{{"váš prompt"}}`. Tuto syntaxi můžete použít s jakýmkoli dotazem v přirozeném jazyce, např.

- `{{"a summary of the page"}}` pro extrahování shrnutí stránky.
- `{{"a three bullet point summary, translated to French"}}` pro extrahování odrážek o stránce a jejich překlad do francouzštiny.
- `{{"un resumé de la page en trois points"}}` pro extrahování tří odrážek pomocí promptu ve francouzštině.

Výstup vašich promptů lze dále upravovat pomocí [[Filtry|filtrů]]. Filtry se zpracovávají poté, co je od modelu přijata odpověď na prompt. Například: `{{"a summary of the page"|blockquote}}` převede odpověď na blokovou citaci.

## Začínáme

Překladač funguje s téměř jakýmkoli poskytovatelem jazykových modelů, včetně možností, které běží soukromě na vašem zařízení. Nastavení Překladače:

1. Přejděte do sekce **Překladač** v nastavení Web Clipper.
2. Zapněte **Povolit překladač**.
3. Nastavte poskytovatele a model, viz sekce [[Interpretovat webové stránky#Modely|modely]] níže.
4. Přidejte [[Proměnné|proměnné promptů]] do svých [[Obsidian Web Clipper/Šablony|šablon]].
5. Pokud vaše šablona obsahuje proměnné promptů, sekce Překladač bude viditelná při [[Oříznutí webových stránek|oříznutí stránky]]. Klikněte na **Interpretovat** pro zpracování proměnných promptů.

## Jak to funguje

Když je Překladač zapnutý *a* vaše šablona obsahuje [[Proměnné#Promptové proměnné|proměnné promptů]], v okně rozšíření se zobrazí nová sekce Překladač nad tlačítkem **Přidat do Obsidianu**. Tato sekce vám umožňuje vybrat model a spustit Překladač pro aktuální stránku.

Když kliknete na **Interpretovat**, Překladač odešle kontext stránky vašemu vybranému modelu spolu se *všemi* prompty ve vaší šabloně v jednom požadavku. V závislosti na zvoleném poskytovateli modelu to může být externí volání nebo lokální na vašem zařízení. Model vyhodnotí vaše prompty oproti kontextu stránky a vrátí své odpovědi. Překladač pak nahradí proměnné promptů daty z odpovědi.

Celý proces může trvat milisekundy nebo více než 30 sekund v závislosti na modelu, který používáte, a množství zpracovávaných dat.

## Kontext

Termín *kontext* odkazuje na data stránky, která Překladač používá ke zpracování promptů. Čím menší je kontext, tím rychleji Překladač běží.

Ve výchozím nastavení Překladač používá celé HTML stránky jako svůj kontext, to však může způsobit, že prompty budou pomalejší a dražší, než je nutné.

Výchozí kontext můžete přepsat v **Rozšířených nastaveních** Překladače a definovat kontext pro každou [[Obsidian Web Clipper/Šablony|šablonu]].

Pro definování cílenějšího kontextu použijte [[Proměnné#Selektorové proměnné|proměnné selektoru]] (nebo jiné typy proměnných) k interpretaci části stránky. Například můžete ve svém kontextu Překladače v šabloně použít následující proměnnou selektoru:

```
{{selectorHtml:#main}}
```

 Toto by spustilo Překladač pouze na elementu `#main` webové stránky, pokud existuje. [[Filtry#Zpracování HTML|Filtry zpracování HTML]] jako `remove_html`, `strip_tags` a `strip_attr` mohou být užitečné pro další redukci délky kontextu a zrychlení zpracování.

## Modely

> [!warning] Soukromí
> Používáním poskytovatele modelu třetí strany souhlasíte s jejich podmínkami a zásadami ochrany soukromí. Požadavky Překladače jsou odesílány přímo poskytovateli, kterého zvolíte. Obsidian neshromažďuje ani neukládá žádná data o vašich požadavcích.

### Přednastavení poskytovatelé

Překladač obsahuje několik přednastavených poskytovatelů. Pro použití těchto poskytovatelů potřebujete API klíč, který získáte přihlášením do svého účtu u poskytovatele. Budete také muset rozhodnout, které modely použít.

| Poskytovatel       | API&nbsp;klíč                                               | Modely                                                                               |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [API&nbsp;klíč](https://console.anthropic.com/settings/keys) | [Modely](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [API&nbsp;klíč](https://oai.azure.com/portal/)               | [Modely](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [API klíč](https://platform.deepseek.com/api_keys)           | [Modely](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [API&nbsp;klíč](https://aistudio.google.com/apikey)          | [Modely](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [API klíč](https://huggingface.co/settings/tokens)           | [Modely](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [API klíč](https://llama.developer.meta.com)                 | [Modely](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | n/a                                                         | [Modely](https://ollama.com/search)                                                  |
| OpenAI             | [API&nbsp;klíč](https://platform.openai.com/api-keys)        | [Modely](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [API&nbsp;klíč](https://openrouter.ai/settings/keys)         | [Modely](https://openrouter.ai/models)                                               |
| Perplexity         | [API klíč](https://www.perplexity.ai/settings/api)           | [Modely](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [API klíč](https://console.x.ai/team/default/api-keys)       | [Modely](https://docs.x.ai/docs/models)                                              |

### Výběr modelu

Obecně doporučujeme používat malé modely s Web Clipper, protože jsou rychlejší a pro tento úkol fungují poměrně přesně. Příklady menších modelů zahrnují **Anthropic Claude Haiku**, **Google Gemini Flash**, **Llama** s 3B nebo 8B parametry nebo **OpenAI Mini** sérii modelů.

### Vlastní poskytovatelé a modely

Pro přidání vlastního poskytovatele a/nebo modelu přejděte do **[[Nastavení]]** Web Clipper → **Překladač**:

- **Přidat poskytovatele** pro konfiguraci přednastavených a vlastních poskytovatelů.
- **Přidat model** pro konfiguraci přednastavených a vlastních modelů.

Při přidávání vlastního poskytovatele doporučujeme použít jeho endpoint pro dokončení chatu jako **Základní URL** — typicky končí na `/chat/completions`.

### Lokální modely

Překladač může používat lokální modely, které nabízejí větší soukromí a kompatibilitu offline. Pro spouštění lokálních modelů existuje několik možností. Jednou z nejsnáze konfigurovatelných je Ollama.

#### Ollama

[Ollama](https://ollama.com/) vám umožňuje spouštět jazykové modely lokálně a soukromě na vašem zařízení.

Jakmile si Ollama stáhnete a nainstalujete, přidejte Ollama pomocí **Přidat poskytovatele** v nastavení Překladače. Ollama nevyžaduje API klíč. Poté vyberte model ze [seznamu modelů](https://ollama.com/search). Například pokud chcete použít [Llama 3.2](https://ollama.com/library/llama3.2), klikněte na **Přidat model**, poté:

- **Poskytovatel:** Ollama
- **Zobrazovaný název:** Llama 3.2, tato hodnota je přizpůsobitelná.
- **ID modelu:** `llama3.2`, musí přesně odpovídat ID modelu z Ollama.

**Spuštění serveru Ollama**

Aby mohlo rozšíření prohlížeče komunikovat s Ollama, musíte mu při spuštění serveru [dát explicitní instrukci](https://github.com/ollama/ollama/issues/2308), jinak se zobrazí chyba `403`.

Zavřete aplikaci Ollama a spusťte následující příkaz v terminálu. Protokol by měl být změněn na protokol rozšíření vašeho prohlížeče, pokud nepoužíváte Chrome nebo Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Poté spusťte svůj model s Ollama běžným způsobem, např.

```
ollama run llama3.2
```

**Délka kontextu**

Výchozí kontextové okno Ollama je 2048 tokenů. To je maximální počet tokenů pro zprávu a odpověď. Při ořezávání dlouhé webové stránky můžete tento limit snadno překročit. Ollama tiše selže a vrátí irelevantní výsledky. Některé možnosti:

- Zvýšit parametr `num_ctx` v Ollama. Mějte na paměti, že delší kontext vyžaduje více paměti.
- Použijte pole [[#Kontext]] ve vaší šabloně pro poskytnutí cílenější části stránky, nebo ořízněte kontext pomocí [[Filtry|filtru]], např. `{{content|slice:0,1000}}`.
