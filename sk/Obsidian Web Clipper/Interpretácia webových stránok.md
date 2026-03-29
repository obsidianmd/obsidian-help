---
permalink: web-clipper/interpreter
---
Interpret je funkcia [[Úvod do Obsidian Web Clipper|Web Clipper]], ktorá vám umožňuje interagovať s webovými stránkami pomocou prirodzeného jazyka. Interpret vám pomáha zachytávať a upravovať dáta, ktoré chcete uložiť do Obsidian. Napríklad:

- Extrahovať konkrétne textové fragmenty.
- Zhrnúť alebo vysvetliť informácie.
- Konvertovať text z jedného formátu do druhého.
- Preložiť text do iného jazyka.

Interpret využíva jazykové modely na spracovanie informácií na webovej stránke a vracia výsledky pomocou [[Premenné|premenných]], ktoré môžete pridať do svojich [[Obsidian Web Clipper/Šablóny|šablón Web Clipper]].

![[web-clipper-interpreter-demo.mp4#interface]]

## Príklady promptov

Prompty používajú [[Premenné|syntax premenných]] `{{"váš prompt"}}`. Túto syntax môžete použiť s akýmkoľvek dopytom v prirodzenom jazyku, napr.

- `{{"a summary of the page"}}` na extrahovanie zhrnutia stránky.
- `{{"a three bullet point summary, translated to French"}}` na extrahovanie odrážok o stránke a ich preklad do francúzštiny.
- `{{"un resumé de la page en trois points"}}` na extrahovanie troch bodov pomocou promptu vo francúzštine.

Výstup vašich promptov je možné ďalej upravovať pomocou [[Filtre|filtrov]]. Filtre sa spracúvajú po prijatí odpovede od modelu. Napríklad: `{{"a summary of the page"|blockquote}}` zmení odpoveď na blokovú citáciu.

## Začíname

Interpret funguje s takmer akýmkoľvek poskytovateľom jazykových modelov, vrátane možností, ktoré bežia súkromne na vašom zariadení. Na nastavenie Interpretu:

1. Prejdite do sekcie **Interpret** v nastaveniach Web Clipper.
2. Zapnite **Povoliť Interpret**.
3. Nakonfigurujte svojho poskytovateľa a model, pozrite si sekciu [[Interpretácia webových stránok#Modely|modely]] nižšie.
4. Pridajte [[Premenné|promptové premenné]] do svojich [[Obsidian Web Clipper/Šablóny|šablón]].
5. Ak vaša šablóna obsahuje promptové premenné, sekcia Interpret bude viditeľná keď [[Zachytávanie webových stránok|zachytíte stránku]]. Kliknutím na **interpret** spracujete promptové premenné.

## Ako to funguje

Keď je Interpret povolený *a* vaša šablóna obsahuje [[Premenné#Promptové premenné|promptové premenné]], v okne rozšírenia sa zobrazí nová sekcia Interpret nad tlačidlom **Pridať do Obsidian**. Táto sekcia vám umožňuje vybrať model a spustiť Interpret pre aktuálnu stránku.

Keď kliknete na **interpret**, Interpret odošle kontext stránky vášmu vybranému modelu spolu so *všetkými* promptmi vo vašej šablóne v jednej požiadavke. V závislosti od poskytovateľa modelu, ktorého si vyberiete, to môže byť externé volanie alebo lokálne na vašom zariadení. Model vyhodnotí vaše prompty voči kontextu stránky a vráti svoje odpovede. Interpret potom nahradí promptové premenné dátami z odpovede.

Celý proces môže trvať milisekundy alebo viac ako 30 sekúnd v závislosti od modelu, ktorý používate, a množstva spracovávaných dát.

## Kontext

Pojem *kontext* sa vzťahuje na dáta stránky, ktoré Interpret používa na spracovanie promptov. Čím menší kontext, tým rýchlejšie Interpret beží.

V predvolenom nastavení Interpret používa celý HTML stránky ako svoj kontext, avšak to môže spôsobiť, že prompty budú pomalšie a drahšie, než je potrebné.

Predvolený kontext môžete prepísať v **Rozšírených nastaveniach** Interpretu a definovať kontext pre každú [[Obsidian Web Clipper/Šablóny|šablónu]].

Na definovanie cielenejšieho kontextu použite [[Premenné#Selektorové premenné|selektorové premenné]] (alebo iné typy premenných) na interpretáciu sekcie stránky. Napríklad vo svojej šablóne v kontexte Interpretu môžete použiť nasledujúcu selektorovú premennú:

```
{{selectorHtml:#main}}
```

Toto spustí Interpret iba na elemente `#main` webovej stránky, ak existuje. [[Filtre#Spracovanie HTML|Filtre spracovania HTML]] ako `remove_html`, `strip_tags` a `strip_attr` môžu byť užitočné na ďalšie zníženie dĺžky kontextu a zrýchlenie spracovania.

## Modely

> [!warning] Súkromie
> Používaním poskytovateľa modelu tretej strany súhlasíte s ich podmienkami a zásadami ochrany súkromia. Požiadavky Interpretu sa odosielajú priamo poskytovateľovi, ktorého si vyberiete. Obsidian nezhromažďuje ani neukladá žiadne dáta o vašich požiadavkách.

### Prednastavení poskytovatelia

Interpret zahŕňa niekoľko prednastavených poskytovateľov. Na používanie týchto poskytovateľov potrebujete API kľúč, ktorý získate prihlásením do svojho účtu u poskytovateľa. Tiež sa budete musieť rozhodnúť, ktorý model/modely použiť.

| Poskytovateľ       | API&nbsp;kľúč                                               | Modely                                                                               |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Anthropic           | [API&nbsp;kľúč](https://console.anthropic.com/settings/keys) | [Modely](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI   | [API&nbsp;kľúč](https://oai.azure.com/portal/)               | [Modely](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek            | [API kľúč](https://platform.deepseek.com/api_keys)           | [Modely](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini  | [API&nbsp;kľúč](https://aistudio.google.com/apikey)          | [Modely](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face        | [API kľúč](https://huggingface.co/settings/tokens)           | [Modely](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta                | [API kľúč](https://llama.developer.meta.com)                 | [Modely](https://llama.developer.meta.com/docs/models)                               |
| Ollama              | n/a                                                          | [Modely](https://ollama.com/search)                                                  |
| OpenAI              | [API&nbsp;kľúč](https://platform.openai.com/api-keys)        | [Modely](https://platform.openai.com/docs/models)                                    |
| OpenRouter          | [API&nbsp;kľúč](https://openrouter.ai/settings/keys)         | [Modely](https://openrouter.ai/models)                                               |
| Perplexity          | [API kľúč](https://www.perplexity.ai/settings/api)           | [Modely](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok            | [API kľúč](https://console.x.ai/team/default/api-keys)       | [Modely](https://docs.x.ai/docs/models)                                              |

### Výber modelu

Vo všeobecnosti odporúčame používať s Web Clipper malé modely, pretože sú rýchlejšie a pre túto úlohu fungujú pomerne presne. Príklady menších modelov zahŕňajú **Anthropic Claude Haiku**, **Google Gemini Flash**, **Llama** s 3B alebo 8B parametrami, alebo **OpenAI Mini** sériu modelov.

### Vlastní poskytovatelia a modely

Na pridanie vlastného poskytovateľa a/alebo modelu prejdite do **[[Nastavenia]]** Web Clipper → **Interpret**:

- **Pridať poskytovateľa** na konfiguráciu prednastavených a vlastných poskytovateľov.
- **Pridať model** na konfiguráciu prednastavených a vlastných modelov.

Pri pridávaní vlastného poskytovateľa odporúčame použiť jeho endpoint pre chat completions ako **Base URL** — zvyčajne končí na `/chat/completions`.

### Lokálne modely

Interpret môže používať lokálne modely, ktoré ponúkajú väčšie súkromie a offline kompatibilitu. Existuje niekoľko možností na spustenie lokálnych modelov. Jednou z najjednoduchších na konfiguráciu je Ollama.

#### Ollama

[Ollama](https://ollama.com/) vám umožňuje spúšťať jazykové modely lokálne a súkromne na vašom zariadení.

Po stiahnutí a inštalácii Ollama pridajte Ollama pomocou **Pridať poskytovateľa** v nastaveniach Interpretu. Ollama nevyžaduje API kľúč. Potom vyberte model zo [zoznamu modelov](https://ollama.com/search). Napríklad ak chcete použiť [Llama 3.2](https://ollama.com/library/llama3.2), kliknite na **Pridať model**, potom:

- **Poskytovateľ:** Ollama
- **Zobrazovaný názov:** Llama 3.2, táto hodnota je prispôsobiteľná.
- **ID modelu:** `llama3.2`, toto musí presne zodpovedať ID modelu z Ollama.

**Spustenie servera Ollama**

Aby ste umožnili rozšíreniu prehliadača komunikovať s Ollama, musíte mu [dať explicitné povolenie](https://github.com/ollama/ollama/issues/2308) pri spúšťaní servera, inak uvidíte chybu `403`.

Zatvorte aplikáciu Ollama a spustite nasledujúci príkaz vo vašom termináli. Protokol by mal byť zmenený na protokol rozšírenia vášho prehliadača, ak nepoužívate Chrome alebo Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Potom spustite svoj model s Ollama bežným spôsobom, napr.

```
ollama run llama3.2
```

**Dĺžka kontextu**

Predvolené kontextové okno Ollama je 2048 tokenov. Toto je maximálny počet tokenov pre správu a odpoveď. Pri zachytávaní dlhej webovej stránky môžete tento limit ľahko prekročiť. Ollama ticho zlyhá a vráti irelevantné výsledky. Niektoré možnosti:

- Zvýšiť parameter `num_ctx` v Ollama. Uvedomte si, že dlhší kontext vyžaduje viac pamäte.
- Použite pole [[#Kontext]] vo vašej šablóne na poskytnutie cielenejšej sekcie stránky, alebo orezať kontext pomocou [[Filtre|filtra]], napr. `{{content|slice:0,1000}}`.
