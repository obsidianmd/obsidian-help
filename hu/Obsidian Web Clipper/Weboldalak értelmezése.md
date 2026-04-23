---
permalink: web-clipper/interpreter
---
Az Értelmező a [[Bevezetés az Obsidian Web Clipper használatába|Web Clipper]] olyan funkciója, amely lehetővé teszi, hogy természetes nyelven lépj interakcióba a weboldalakkal. Az Értelmező segít rögzíteni és módosítani azokat az adatokat, amelyeket az Obsidianbe szeretnél menteni. Például:

- Konkrét szövegrészletek kinyerése.
- Információk összegzése vagy magyarázata.
- Szöveg konvertálása egyik formátumból a másikba.
- Szöveg fordítása más nyelvre.

Az Értelmező nyelvi modelleket használ a weboldal információinak feldolgozásához, és az eredményeket [[Változók]] segítségével adja vissza, amelyeket hozzáadhatsz a [[Obsidian Web Clipper/Sablonok|Web Clipper Sablonokhoz]].

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## Példák promptokra

A promptok a [[Változók|változó]] szintaxist használják: `{{"a promptod"}}`. Ezt a szintaxist bármilyen természetes nyelvű lekérdezéssel használhatod, pl.

- `{{"a summary of the page"}}` az oldal összefoglalásának kinyeréséhez.
- `{{"a three bullet point summary, translated to French"}}` felsoroláspontok kinyeréséhez az oldalról, majd franciára fordításukhoz.
- `{{"un resumé de la page en trois points"}}` három felsoroláspont kinyeréséhez francia nyelvű prompt használatával.

A promptjaid kimenetét tovább módosíthatod [[Szűrők]] segítségével. A szűrők a modell válaszának beérkezése után kerülnek feldolgozásra. Például: `{{"a summary of the page"|blockquote}}` a választ blokkidézetté alakítja.

## Első lépések

Az Értelmező szinte bármilyen nyelvi modell szolgáltatóval működik, beleértve az eszközödön helyileg futó opciókat is. Az Értelmező beállításához:

1. Lépj az **Értelmező** szakaszra a Web Clipper beállításokban.
2. Kapcsold be az **Értelmező engedélyezése** opciót.
3. Konfiguráld a szolgáltatót és a modellt, lásd a [[Weboldalak értelmezése#Modellek|modellek]] szakaszt alább.
4. Adj hozzá [[Változók|prompt változókat]] a [[Obsidian Web Clipper/Sablonok|sablonjaidhoz]].
5. Ha a sablonod prompt változókat tartalmaz, az Értelmező szekció látható lesz, amikor [[Weboldalak kivágása|kivágol egy oldalt]]. Kattints az **értelmezés** gombra a prompt változók feldolgozásához.

## Hogyan működik

Amikor az Értelmező engedélyezve van *és* a sablonod [[Változók#Prompt változók|prompt változókat]] tartalmaz, egy új Értelmező szekció jelenik meg a bővítmény ablakában, a **Hozzáadás az Obsidianhez** gomb felett. Ez a szekció lehetővé teszi a modell kiválasztását és az Értelmező futtatását az aktuális oldalon.

Amikor az **értelmezés** gombra kattintasz, az Értelmező elküldi az oldal kontextusát a kiválasztott modellnek, az összes sablonban lévő prompttal együtt egyetlen kérésben. A választott modell szolgáltatótól függően ez lehet külső hívás vagy az eszközödön helyi feldolgozás. A modell kiértékeli a promptjaidat az oldal kontextusával szemben, és visszaadja a válaszait. Az Értelmező ezután lecseréli a prompt változókat a válaszadatokra.

A teljes folyamat ezredmásodpercektől akár 30 másodpercig is tarthat, a használt modelltől és a feldolgozandó adatok mennyiségétől függően.

## Kontextus

A *kontextus* kifejezés az oldal azon adataira utal, amelyeket az Értelmező a promptok feldolgozásához használ. Minél kisebb a kontextus, annál gyorsabban fut az Értelmező.

Alapértelmezés szerint az Értelmező a teljes oldal HTML-jét használja kontextusként, azonban ez lassabbá és drágábbá teheti a promptokat a szükségesnél.

Az alapértelmezett kontextust felülírhatod az Értelmező **Haladó beállítások** menüjében, és [[Obsidian Web Clipper/Sablonok|sablononként]] definiálhatsz kontextust.

Célzottabb kontextus meghatározásához használj [[Változók#Szelektor változók|szelektor változókat]] (vagy más változótípusokat) az oldal egy szakaszának értelmezéséhez. Például a következő szelektor változót használhatod a sablonod Értelmező kontextusában:

```
{{selectorHtml:#main}}
```

Ez csak a weboldal `#main` elemén futtatná az Értelmezőt, ha az létezik. A [[Szűrők#HTML feldolgozás|HTML feldolgozó szűrők]] mint a `remove_html`, `strip_tags` és `strip_attr` hasznosak lehetnek a kontextus hosszának további csökkentéséhez és a feldolgozás gyorsításához.

## Modellek

> [!warning] Adatvédelem
> Harmadik féltől származó modell szolgáltató használatával elfogadod azok feltételeit és adatvédelmi szabályzatát. Az Értelmező kérései közvetlenül a választott szolgáltatóhoz kerülnek. Az Obsidian nem gyűjt és nem tárol semmilyen adatot a kéréseidről.

### Előre beállított szolgáltatók

Az Értelmező több előre beállított szolgáltatót tartalmaz. Ezek használatához API-kulcsra van szükséged, amelyet a szolgáltató fiókjába való bejelentkezéssel szerezhetsz be. Azt is el kell döntened, melyik modell(eke)t használod.

| Szolgáltató        | API&nbsp;kulcs                                              | Modellek                                                                             |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [API&nbsp;kulcs](https://console.anthropic.com/settings/keys) | [Modellek](https://docs.anthropic.com/en/docs/about-claude/models)                  |
| Azure&nbsp;OpenAI  | [API&nbsp;kulcs](https://oai.azure.com/portal/)             | [Modellek](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [API kulcs](https://platform.deepseek.com/api_keys)         | [Modellek](https://api-docs.deepseek.com/quick_start/pricing)                       |
| Google&nbsp;Gemini | [API&nbsp;kulcs](https://aistudio.google.com/apikey)        | [Modellek](https://ai.google.dev/gemini-api/docs/models/gemini)                     |
| Hugging Face       | [API kulcs](https://huggingface.co/settings/tokens)         | [Modellek](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending) |
| Meta               | [API kulcs](https://llama.developer.meta.com)               | [Modellek](https://llama.developer.meta.com/docs/models)                             |
| Ollama             | n/a                                                         | [Modellek](https://ollama.com/search)                                                |
| OpenAI             | [API&nbsp;kulcs](https://platform.openai.com/api-keys)      | [Modellek](https://platform.openai.com/docs/models)                                 |
| OpenRouter         | [API&nbsp;kulcs](https://openrouter.ai/settings/keys)       | [Modellek](https://openrouter.ai/models)                                            |
| Perplexity         | [API kulcs](https://www.perplexity.ai/settings/api)         | [Modellek](https://docs.perplexity.ai/guides/model-cards)                           |
| xAI Grok           | [API kulcs](https://console.x.ai/team/default/api-keys)     | [Modellek](https://docs.x.ai/docs/models)                                          |

### Modell kiválasztása

Általánosságban kis modelleket ajánlunk a Web Clipperhez, mert gyorsabbak és elég pontosan teljesítenek ehhez a feladathoz. Kisebb modellek közé tartozik például az **Anthropic Claude Haiku**, a **Google Gemini Flash**, a **Llama** 3B vagy 8B paraméterrel, vagy az **OpenAI Mini** modellsorozata.

### Egyéni szolgáltatók és modellek

Egyéni szolgáltató és/vagy modell hozzáadásához lépj a Web Clipper **[[Beállítások]]** → **Értelmező** menübe:

- **Szolgáltató hozzáadása** az előre beállított és egyéni szolgáltatók konfigurálásához.
- **Modell hozzáadása** az előre beállított és egyéni modellek konfigurálásához.

Egyéni szolgáltató hozzáadásakor javasoljuk, hogy a chat completions végpontot használd az **Alap URL** mezőben — ez általában `/chat/completions` végződésű.

### Helyi modellek

Az Értelmező helyi modelleket is képes használni, amelyek nagyobb adatvédelmet és offline kompatibilitást biztosítanak. Több lehetőség is létezik helyi modellek futtatására. Az egyik legkönnyebben konfigurálható az Ollama.

#### Ollama

Az [Ollama](https://ollama.com/) lehetővé teszi nyelvi modellek helyi és privát futtatását az eszközödön.

Miután letöltötted és telepítetted az Ollamát, add hozzá a **Szolgáltató hozzáadása** opcióval az Értelmező beállításokban. Az Ollama nem igényel API-kulcsot. Ezután válassz modellt a [modellek listájáról](https://ollama.com/search). Például ha a [Llama 3.2](https://ollama.com/library/llama3.2) modellt szeretnéd használni, kattints a **Modell hozzáadása** gombra, majd:

- **Szolgáltató:** Ollama
- **Megjelenített név:** Llama 3.2, ez az érték testreszabható.
- **Modell azonosító:** `llama3.2`, ennek pontosan egyeznie kell az Ollama modell azonosítójával.

**Az Ollama szerver indítása**

Ahhoz, hogy egy böngésző bővítmény kommunikálhasson az Ollamával, [kifejezett utasítást kell adnod](https://github.com/ollama/ollama/issues/2308) a szerver futtatásakor, különben `403` hibát fogsz látni.

Zárd be az Ollama alkalmazást, és futtasd a következő parancsot a terminálodban. A protokollt módosítsd a böngésződ bővítmény-protokolljára, ha nem Chrome-ot vagy Firefoxot használsz.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Ezután futtasd a modellt az Ollamával a szokásos módon, pl.

```
ollama run llama3.2
```

**Kontextus hossza**

Az Ollama kontextusablaka alapértelmezés szerint 2048 token. Ez az üzenet és a válasz maximális token száma. Hosszú weboldal kivágásakor könnyen túllépheted ezt a korlátot. Az Ollama csendben hibázik és irreleváns eredményeket ad vissza. Néhány lehetőség:

- Növeld meg az Ollama `num_ctx` paraméterét. Vedd figyelembe, hogy a hosszabb kontextus több memóriát igényel.
- Használd a [[#Kontextus]] mezőt a sablonodban, hogy célzottabb szakaszt adj meg az oldalból, vagy vágd le a kontextust [[Szűrők|szűrővel]], pl. `{{content|slice:0,1000}}`.
