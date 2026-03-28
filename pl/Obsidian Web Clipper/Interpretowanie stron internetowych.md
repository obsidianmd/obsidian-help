---
permalink: web-clipper/interpreter
---
Tłumacz to funkcja [[Wprowadzenie do Obsidian Web Clipper|Web Clipper]], która umożliwia interakcję ze stronami internetowymi przy użyciu języka naturalnego. Tłumacz pomaga przechwytywać i modyfikować dane, które chcesz zapisać w Obsidian. Na przykład:

- Wyodrębnianie określonych fragmentów tekstu.
- Podsumowywanie lub wyjaśnianie informacji.
- Konwertowanie tekstu z jednego formatu na inny.
- Tłumaczenie tekstu na inny język.

Tłumacz wykorzystuje modele językowe do przetwarzania informacji na stronie internetowej i zwraca wyniki za pomocą [[Zmienne|zmiennych]], które możesz dodać do swoich [[Obsidian Web Clipper/Szablony|szablonów Web Clipper]].

![[web-clipper-interpreter-demo.mp4#interface]]

## Przykłady promptów

Prompty używają [[Zmienne|składni zmiennych]] `{{"twój prompt"}}`. Możesz używać tej składni z dowolnym zapytaniem w języku naturalnym, np.

- `{{"a summary of the page"}}` aby wyodrębnić podsumowanie strony.
- `{{"a three bullet point summary, translated to French"}}` aby wyodrębnić punkty dotyczące strony i przetłumaczyć je na francuski.
- `{{"un resumé de la page en trois points"}}` aby wyodrębnić trzy punkty używając promptu po francusku.

Wyniki promptów można dalej modyfikować za pomocą [[Filtry|filtrów]]. Filtry są przetwarzane po otrzymaniu odpowiedzi od modelu. Na przykład: `{{"a summary of the page"|blockquote}}` zamieni odpowiedź w cytat blokowy.

## Pierwsze kroki

Tłumacz działa z prawie każdym dostawcą modeli językowych, w tym z opcjami działającymi prywatnie na Twoim urządzeniu. Aby skonfigurować Tłumacza:

1. Przejdź do sekcji **Tłumacz** w ustawieniach Web Clipper.
2. Włącz **Włącz tłumacza**.
3. Skonfiguruj operatora i model, zobacz sekcję [[Interpretowanie stron internetowych#Modele|modele]] poniżej.
4. Dodaj [[Zmienne|zmienne promptów]] do swoich [[Obsidian Web Clipper/Szablony|szablonów]].
5. Jeśli Twój szablon zawiera zmienne promptów, sekcja Tłumacza będzie widoczna, gdy [[Wycinanie stron internetowych|wycinasz stronę]]. Kliknij **wyślij zapytanie**, aby przetworzyć zmienne promptów.

## Jak to działa

Gdy Tłumacz jest włączony *i* Twój szablon zawiera [[Zmienne#Zmienne promptów|zmienne promptów]], w oknie rozszerzenia wyświetlana jest nowa sekcja Tłumacza, nad przyciskiem **Zapisz w Obsidian**. Ta sekcja pozwala wybrać model i uruchomić Tłumacza dla bieżącej strony.

Po kliknięciu **wyślij zapytanie** Tłumacz wysyła kontekst strony do wybranego modelu wraz ze *wszystkimi* promptami z szablonu w jednym żądaniu. W zależności od wybranego operatora modelu może to być wywołanie zewnętrzne lub lokalne na Twoim urządzeniu. Model ocenia Twoje prompty w kontekście strony i zwraca odpowiedzi. Tłumacz następnie zastępuje zmienne promptów danymi odpowiedzi.

Cały proces może trwać od milisekund do ponad 30 sekund, w zależności od używanego modelu i ilości przetwarzanych danych.

## Kontekst

Termin *kontekst* odnosi się do danych strony, które Tłumacz wykorzystuje do przetwarzania promptów. Im mniejszy kontekst, tym szybciej działa Tłumacz.

Domyślnie Tłumacz używa całego kodu HTML strony jako kontekstu, jednak może to sprawiać, że prompty będą wolniejsze i droższe niż to konieczne.

Możesz nadpisać domyślny kontekst w **Zaawansowanych ustawieniach** Tłumacza i zdefiniować kontekst dla każdego [[Obsidian Web Clipper/Szablony|szablonu]].

Aby zdefiniować bardziej ukierunkowany kontekst, użyj [[Zmienne#Zmienne selektorów|zmiennych selektorów]] (lub innych typów zmiennych) do interpretacji sekcji strony. Na przykład możesz użyć następującej zmiennej selektora w kontekście Tłumacza szablonu:

```
{{selectorHtml:#main}}
```

Spowoduje to uruchomienie Tłumacza tylko na elemencie `#main` strony internetowej, jeśli istnieje. [[Filtry#Przetwarzanie HTML|Filtry przetwarzania HTML]] takie jak `remove_html`, `strip_tags` i `strip_attr` mogą być przydatne do dalszego zmniejszenia długości kontekstu i przyspieszenia przetwarzania.

## Modele

> [!warning] Prywatność
> Korzystając z zewnętrznego operatora modelu, akceptujesz jego warunki i politykę prywatności. Żądania Tłumacza są wysyłane bezpośrednio do wybranego operatora. Obsidian nie zbiera ani nie przechowuje żadnych danych o Twoich żądaniach.

### Wstępnie skonfigurowani operatorzy

Tłumacz zawiera kilku wstępnie skonfigurowanych operatorów. Aby korzystać z tych operatorów, potrzebujesz klucza API, który możesz uzyskać, logując się na konto operatora. Musisz również zdecydować, których modeli użyć.

| Operator           | Klucz&nbsp;API                                              | Modele                                                                               |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [Klucz&nbsp;API](https://console.anthropic.com/settings/keys) | [Modele](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [Klucz&nbsp;API](https://oai.azure.com/portal/)               | [Modele](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [Klucz API](https://platform.deepseek.com/api_keys)           | [Modele](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [Klucz&nbsp;API](https://aistudio.google.com/apikey)          | [Modele](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [Klucz API](https://huggingface.co/settings/tokens)           | [Modele](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [Klucz API](https://llama.developer.meta.com)                 | [Modele](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | nie dotyczy                                                    | [Modele](https://ollama.com/search)                                                  |
| OpenAI             | [Klucz&nbsp;API](https://platform.openai.com/api-keys)        | [Modele](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [Klucz&nbsp;API](https://openrouter.ai/settings/keys)         | [Modele](https://openrouter.ai/models)                                               |
| Perplexity         | [Klucz API](https://www.perplexity.ai/settings/api)           | [Modele](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [Klucz API](https://console.x.ai/team/default/api-keys)       | [Modele](https://docs.x.ai/docs/models)                                              |

### Wybór modelu

Ogólnie zalecamy używanie małych modeli z Web Clipper, ponieważ są szybsze i działają wystarczająco dokładnie w tym zastosowaniu. Przykłady mniejszych modeli to **Anthropic Claude Haiku**, **Google Gemini Flash**, **Llama** z parametrami 3B lub 8B, lub seria modeli **OpenAI Mini**.

### Niestandardowi operatorzy i modele

Aby dodać niestandardowego operatora i/lub model, przejdź do **[[Ustawienia]]** Web Clipper → **Tłumacz**:

- **Dodaj operatora** aby skonfigurować wstępnie zdefiniowanych i niestandardowych operatorów.
- **Dodaj model** aby skonfigurować wstępnie zdefiniowane i niestandardowe modele.

Dodając niestandardowego operatora, zalecamy użycie jego endpointu chat completions jako **Adres URL** — zazwyczaj kończy się on na `/chat/completions`.

### Modele lokalne

Tłumacz może korzystać z modeli lokalnych, które zapewniają większą prywatność i kompatybilność offline. Istnieje kilka opcji uruchamiania modeli lokalnych. Jedną z najłatwiejszych do skonfigurowania jest Ollama.

#### Ollama

[Ollama](https://ollama.com/) pozwala uruchamiać modele językowe lokalnie i prywatnie na Twoim urządzeniu.

Po pobraniu i zainstalowaniu Ollama dodaj Ollama za pomocą **Dodaj operatora** w ustawieniach Tłumacza. Ollama nie wymaga klucza API. Następnie wybierz model z [listy modeli](https://ollama.com/search). Na przykład, jeśli chcesz użyć [Llama 3.2](https://ollama.com/library/llama3.2), kliknij **Dodaj model**, a następnie:

- **Operator:** Ollama
- **Wyświetlana nazwa:** Llama 3.2, tę wartość można dostosować.
- **ID modelu:** `llama3.2`, musi dokładnie odpowiadać ID modelu z Ollama.

**Uruchomienie serwera Ollama**

Aby umożliwić rozszerzeniu przeglądarki interakcję z Ollama, musisz [dać mu wyraźne uprawnienia](https://github.com/ollama/ollama/issues/2308) podczas uruchamiania serwera, w przeciwnym razie zobaczysz błąd `403`.

Zamknij aplikację Ollama i uruchom następujące polecenie w terminalu. Protokół należy zmienić na protokół rozszerzenia Twojej przeglądarki, jeśli nie używasz Chrome lub Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Następnie uruchom model z Ollama w normalny sposób, np.

```
ollama run llama3.2
```

**Długość kontekstu**

Domyślne okno kontekstu Ollama wynosi 2048 tokenów. Jest to maksymalna liczba tokenów dla wiadomości i odpowiedzi. Podczas wycinania długiej strony internetowej można łatwo przekroczyć ten limit. Ollama po cichu zawiedzie i zwróci nieistotne wyniki. Kilka opcji:

- Zwiększ parametr `num_ctx` Ollama. Pamiętaj, że dłuższy kontekst wymaga więcej pamięci.
- Użyj pola [[#Kontekst]] w swoim szablonie, aby dostarczyć bardziej ukierunkowaną sekcję strony, lub przytnij kontekst za pomocą [[Filtry|filtra]], np. `{{content|slice:0,1000}}`.
