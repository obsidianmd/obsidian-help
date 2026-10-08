---
permalink: web-clipper/interpreter
---
Interpreter este o funcție [[Introducere în Obsidian Web Clipper|Web Clipper]] care îți permite să interacționezi cu paginile web folosind limbaj natural. Interpreter te ajută să capturezi și să modifici datele pe care vrei să le salvezi în Obsidian. De exemplu:

- Extrage fragmente specifice de text.
- Rezumă sau explică informații.
- Convertește textul dintr-un format în altul.
- Traduce textul într-o altă limbă.

Interpreter folosește modele de limbaj pentru a procesa informațiile de pe o pagină web și returnează rezultate folosind [[Variabile|variabile]] pe care le poți adăuga în [[Obsidian Web Clipper/Șabloane|șabloanele Web Clipper]].

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## Exemple de prompturi

Prompturile folosesc sintaxa de [[Variabile|variabilă]] `{{"your prompt"}}`. Poți folosi această sintaxă cu orice interogare în limbaj natural, de ex.

- `{{"a summary of the page"}}` pentru a extrage un rezumat al paginii.
- `{{"a three bullet point summary, translated to French"}}` pentru a extrage puncte cheie despre pagină și a le traduce în franceză.
- `{{"un resumé de la page en trois points"}}` pentru a extrage trei puncte cheie folosind un prompt în franceză.

Rezultatul prompturilor tale poate fi manipulat în continuare folosind [[Filtre|filtre]]. Filtrele sunt procesate după ce răspunsul la prompt este primit de la model. De exemplu: `{{"a summary of the page"|blockquote}}` va transforma răspunsul într-un citat.

## Primii pași

Interpreter funcționează cu aproape orice furnizor de model de limbaj, inclusiv opțiuni care rulează privat pe dispozitivul tău. Pentru a configura Interpreter:

1. Mergi la secțiunea **Interpreter** din setările Web Clipper.
2. Activează comutatorul **Activează Interpreter**.
3. Configurează furnizorul și modelul tău, vezi secțiunea [[Interpretor#Models|modele]] de mai jos.
4. Adaugă [[Variabile|variabile prompt]] la [[Obsidian Web Clipper/Șabloane|șabloanele]] tale.
5. Dacă șablonul tău include variabile prompt, secțiunea Interpreter va fi vizibilă atunci când [[Salvează pagini web|salvezi o pagină]]. Dă clic pe **interpretează** pentru a procesa variabilele prompt.

## Cum funcționează

Când Interpreter este activat *și* șablonul tău conține [[Variabile#Prompt variables|variabile prompt]], o nouă secțiune Interpreter este afișată în fereastra extensiei, deasupra butonului **Adaugă în Obsidian**. Această secțiune îți permite să selectezi un model și să rulezi Interpreter pentru pagina curentă.

Când dai clic pe **interpretează**, Interpreter trimite contextul paginii către modelul selectat, împreună cu *toate* prompturile din șablonul tău, într-o singură cerere. În funcție de furnizorul de model pe care îl alegi, aceasta poate fi un apel extern sau unul local pe dispozitivul tău. Modelul evaluează prompturile tale în raport cu contextul paginii și returnează răspunsurile sale. Interpreter apoi înlocuiește variabilele prompt cu datele din răspuns.

Întregul proces poate dura milisecunde sau mai mult de 30 de secunde, în funcție de modelul folosit și de cantitatea de date pe care o procesezi.

## Context

Termenul *context* se referă la datele paginii pe care Interpreter le folosește pentru a procesa prompturile. Cu cât contextul este mai mic, cu atât Interpreter rulează mai rapid. 

Implicit, Interpreter folosește întregul HTML al paginii ca și context, însă acest lucru poate face ca prompturile să fie mai lente și mai costisitoare decât este necesar.

Poți suprascrie contextul implicit în **Setările avansate** ale Interpreter și poți defini contextul pentru fiecare [[Obsidian Web Clipper/Șabloane|șablon]] în parte.

Pentru a defini un context mai bine țintit, folosește [[Variabile#Selector variables|variabile selector]] (sau alte tipuri de variabile) pentru a interpreta o secțiune a paginii. De exemplu, ai putea folosi următoarea variabilă selector în contextul Interpreter al șablonului tău:

```
{{selectorHtml:#main}}
```

 Aceasta ar rula Interpreter doar pe elementul `#main` al unei pagini web, dacă acesta există. [[Filtre#HTML processing|Filtrele de procesare HTML]] precum `remove_html`, `strip_tags` și `strip_attr` pot fi utile pentru a reduce și mai mult lungimea contextului și a accelera procesarea.

## Modele

> [!warning] Confidențialitate
> Prin folosirea unui furnizor terț de model, ești de acord cu termenii și politica sa de confidențialitate. Cererile Interpreter sunt trimise direct către furnizorul pe care îl alegi. Obsidian nu colectează și nu stochează nicio dată despre cererile tale.

### Furnizori prestabiliți

Interpreter include mai mulți furnizori prestabiliți. Pentru a folosi acești furnizori ai nevoie de o cheie API pe care o poți obține autentificându-te în contul furnizorului tău. Va trebui de asemenea să decizi ce model(e) să folosești.

| Furnizor           | Cheie&nbsp;API                                                | Modele                                                                               |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [Cheie&nbsp;API](https://console.anthropic.com/settings/keys) | [Modele](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [Cheie&nbsp;API](https://oai.azure.com/portal/)               | [Modele](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [Cheie API](https://platform.deepseek.com/api_keys)           | [Modele](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [Cheie&nbsp;API](https://aistudio.google.com/apikey)          | [Modele](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [Cheie API](https://huggingface.co/settings/tokens)           | [Modele](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [Cheie API](https://llama.developer.meta.com)                 | [Modele](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | n/a                                                         | [Modele](https://ollama.com/search)                                                  |
| OpenAI             | [Cheie&nbsp;API](https://platform.openai.com/api-keys)        | [Modele](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [Cheie&nbsp;API](https://openrouter.ai/settings/keys)         | [Modele](https://openrouter.ai/models)                                               |
| Perplexity         | [Cheie API](https://www.perplexity.ai/settings/api)           | [Modele](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [Cheie API](https://console.x.ai/team/default/api-keys)       | [Modele](https://docs.x.ai/docs/models)                                              |

### Alegerea unui model

În general, recomandăm folosirea modelelor mici cu Web Clipper deoarece sunt mai rapide și au o precizie destul de bună pentru această sarcină. Exemple de modele mai mici includ **Claude Haiku de la Anthropic**, **Google Gemini Flash**, **Llama** cu 3B sau 8B parametri, sau seria de modele **Mini** de la OpenAI.

### Furnizori și modele personalizate

Pentru a adăuga un furnizor și/sau un model personalizat, mergi la **[[Setări|Setările]]** Web Clipper → **Interpreter**:

- **Adaugă furnizor** pentru a configura furnizori prestabiliți și personalizați.
- **Adaugă model** pentru a configura modele prestabilite și personalizate.

Când adaugi un furnizor personalizat, îți recomandăm să folosești punctul lor final pentru finalizarea conversațiilor (chat completions) ca **URL de bază** — de obicei se termină cu `/chat/completions`.

### Modele locale

Interpreter poate folosi modele locale, care oferă o confidențialitate mai mare și compatibilitate offline. Există mai multe opțiuni pentru rularea modelelor locale. Una dintre cele mai ușor de configurat este Ollama.

#### Ollama

[Ollama](https://ollama.com/) îți permite să rulezi modele de limbaj local și privat pe dispozitivul tău. 

După ce ai descărcat și instalat Ollama, adaugă Ollama folosind **Adaugă furnizor** în setările Interpreter. Ollama nu necesită o cheie API. Apoi alege un model din [lista de modele](https://ollama.com/search). De exemplu, dacă vrei să folosești [Llama 3.2](https://ollama.com/library/llama3.2), dă clic pe **Adaugă model**, apoi:

- **Furnizor:** Ollama
- **Nume afișat:** Llama 3.2, această valoare este personalizabilă.
- **ID model:** `llama3.2`, aceasta trebuie să corespundă exact cu ID-ul modelului din Ollama.

**Pornește serverul Ollama**

Pentru a permite unei extensii de browser să interacționeze cu Ollama, trebuie să [oferi o instrucțiune explicită](https://github.com/ollama/ollama/issues/2308) atunci când rulezi serverul, altfel vei vedea o eroare `403`. 

Închide aplicația Ollama și rulează următoarea comandă în terminalul tău. Protocolul trebuie schimbat cu protocolul extensiei browserului tău dacă nu folosești Chrome sau Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Apoi rulează modelul tău cu Ollama în mod obișnuit, de ex.

```
ollama run llama3.2
```

**Lungimea contextului**

Fereastra de context a Ollama este implicit de 2048 de jetoane (tokens). Acesta este numărul maxim de jetoane pentru mesaj și răspuns. Când salvezi o pagină web lungă, poți depăși cu ușurință această limită. Ollama va eșua silențios și va returna rezultate irelevante. Câteva opțiuni:

- Crește parametrul `num_ctx` al Ollama. Ține cont că un context mai lung necesită mai multă memorie.
- Folosește câmpul [[#Context]] din șablonul tău pentru a oferi o secțiune mai bine țintită a paginii, sau reduce contextul folosind un [[Filtre|filtru]], de ex. `{{content|slice:0,1000}}`.
