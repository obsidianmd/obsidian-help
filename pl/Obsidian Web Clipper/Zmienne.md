---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Szablony|Szablony Web Clipper]] mogą używać zmiennych do automatycznego wypełniania danych ze strony w szablonie. Zmienne mogą być używane w **nazwie notatki**, **lokalizacji notatki**, **atrybutach** i **treści notatki**. Zmienne można również modyfikować za pomocą [[Filtry|filtrów]].

Użyj ikony `...` w rozszerzeniu [[Wprowadzenie do Obsidian Web Clipper|Web Clipper]], aby uzyskać dostęp do zmiennych bieżącej strony do wykorzystania w szablonach. Istnieje pięć typów zmiennych, których możesz używać:

- [[Zmienne#Zmienne wstępnie zdefiniowane|Zmienne wstępnie zdefiniowane]]
- [[Zmienne#Zmienne promptów|Zmienne promptów]]
- [[Zmienne#Zmienne meta|Zmienne meta]]
- [[Zmienne#Zmienne selektorów|Zmienne selektorów]]
- [[Zmienne#Zmienne Schema.org|Zmienne Schema.org]]

## Zmienne wstępnie zdefiniowane

Zmienne wstępnie zdefiniowane są automatycznie generowane na podstawie zawartości strony. Zazwyczaj działają na większości stron internetowych.

Główną zmienną treści jest `{{content}}`, która zawiera treść artykułu, [[Wyróżnianie stron internetowych|wyróżnienia]] lub zaznaczenie, jeśli na stronie jest zaznaczony tekst. Należy pamiętać, że `{{content}}` próbuje wyodrębnić główną treść strony, co nie zawsze może odpowiadać Twoim potrzebom. W takim przypadku możesz użyć innych zmiennych wstępnie zdefiniowanych lub zmiennych selektorów, aby wyodrębnić potrzebną treść.

| Zmienna             | Opis                                                                                   |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Autor strony                                                                           |
| `{{content}}`       | Treść artykułu, [[Wyróżnianie stron internetowych\|wyróżnienia]] lub zaznaczenie, w formacie Markdown |
| `{{contentHtml}}`   | Treść artykułu, [[Wyróżnianie stron internetowych\|wyróżnienia]] lub zaznaczenie, w formacie HTML |
| `{{date}}`          | Bieżąca data, może być formatowana za pomocą filtra `date`                             |
| `{{description}}`   | Opis lub fragment                                                                      |
| `{{domain}}`        | Domena                                                                                 |
| `{{favicon}}`       | URL favicony                                                                           |
| `{{fullHtml}}`      | Nieprzetworzony HTML pełnej zawartości strony                                          |
| `{{highlights}}`    | [[Wyróżnianie stron internetowych\|Wyróżnienia]] z tekstem i znacznikami czasu         |
| `{{image}}`         | URL obrazu udostępniania społecznościowego                                             |
| `{{published}}`     | Data publikacji, może być formatowana za pomocą filtra `date`                          |
| `{{selection}}`     | Zaznaczenie w formacie Markdown                                                        |
| `{{selectionHtml}}` | Zaznaczenie w formacie HTML                                                            |
| `{{site}}`          | Nazwa strony lub wydawca                                                               |
| `{{title}}`         | Tytuł strony                                                                           |
| `{{time}}`          | Bieżąca data i godzina                                                                |
| `{{url}}`           | Bieżący URL                                                                            |
| `{{words}}`         | Liczba słów                                                                            |

## Zmienne promptów

Zmienne promptów wykorzystują modele językowe do wyodrębniania i modyfikowania danych za pomocą języka naturalnego. Zmienne promptów wymagają włączenia i skonfigurowania [[Interpretowanie stron internetowych|Tłumacza]].

Zmienne promptów używają składni `{{"podsumowanie strony"}}`. Cudzysłowy wokół promptu są ważne i odróżniają prompty od zmiennych wstępnie zdefiniowanych. Odpowiedzi promptów mogą być przetwarzane za pomocą [[Filtry|filtrów]], np. `{{"podsumowanie strony"|blockquote}}`.

### Kiedy używać zmiennych promptów

Zmienne promptów mają tę zaletę, że są niezwykle elastyczne i łatwe do napisania, jednak wiążą się z kilkoma kompromisami: wolniej się wykonują i mogą wiązać się z kosztami oraz kwestiami prywatności w zależności od wybranego [[Interpretowanie stron internetowych#Modele|operatora]].

W przeciwieństwie do innych typów zmiennych, zmienne promptów muszą być przetworzone przez zewnętrzny model językowy, więc są zastępowane dopiero po uruchomieniu [[Interpretowanie stron internetowych|Tłumacza]].

Najlepiej *nie* używać zmiennych promptów, jeśli dane, które chcesz wyodrębnić, mają spójny format, który można wyodrębnić za pomocą innych typów zmiennych.

Z drugiej strony zmienne promptów mogą być przydatne, jeśli dane, które chcesz wyodrębnić, mają *niespójny* format na różnych stronach internetowych. Na przykład możesz utworzyć [[Obsidian Web Clipper/Szablony|szablon]] do zapisywania książek, który jest niezależny od strony z książkami. Zmienne promptów takie jak `{{"autor książki"}}` będą działać na dowolnej stronie z książkami, podczas gdy zmienne selektorów zazwyczaj działają tylko na jednej stronie.

### Przykłady

Prompty mogą używać prawie dowolnego zapytania w języku naturalnym. W zależności od używanego modelu prompty mogą wyszukiwać lub tłumaczyć dane między językami.

- `{{"podsumowanie w trzech punktach, przetłumaczone na francuski"}}` aby wyodrębnić punkty dotyczące strony i przetłumaczyć je na francuski.
- `{{"un resumé de la page en trois points"}}` aby wyodrębnić trzy punkty za pomocą promptu w języku francuskim.

Prompty mogą przekształcać zawartość strony w JSON, który można manipulować za pomocą [[Filtry|filtrów]]. Na przykład:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Zmienne meta

Zmienne meta pozwalają wyodrębniać dane z [elementów meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) na stronie, w tym danych [Open Graph](https://ogp.me/) używanych do wypełniania podglądów udostępniania społecznościowego.

- `{{meta:name}}` zwraca zawartość znacznika meta name o podanej nazwie, np. `{{meta:name:description}}` dla znacznika meta `description`.
- `{{meta:property}}` zwraca zawartość znacznika meta property o podanej właściwości, np. `{{meta:property:og:title}}` dla znacznika meta `og:title`.

## Zmienne selektorów

Zmienne selektorów pozwalają wyodrębniać zawartość tekstową z elementów na stronie za pomocą [selektorów CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

Składnia to `{{selector:selectorCSS?atrybut}}`, gdzie `?atrybut` jest opcjonalny. Jeśli nie określono atrybutu, zwracana jest zawartość tekstowa elementu. Możesz również użyć `{{selectorHtml:selectorCSS}}`, aby uzyskać zawartość HTML elementu. Zmienne selektorów działają najlepiej na konkretnej stronie lub zestawie stron o spójnej strukturze HTML.

- `{{selector:h1}}` zwraca zawartość tekstową dowolnych elementów `h1` na stronie.
- `{{selector:.author}}` zwraca zawartość tekstową dowolnych elementów `.author` na stronie.
- `{{selector:img.hero?src}}` zwraca atrybut `src` obrazu z klasą `hero`.
- `{{selector:a.main-link?href}}` zwraca atrybut `href` znacznika kotwicy z klasą `main-link`.
- `{{selectorHtml:body|markdown}}` zwraca cały HTML elementu `body`, przekonwertowany na Markdown za pomocą [[Filtry#Przetwarzanie HTML|filtra]] `markdown`.
- Zagnieżdżone selektory CSS i kombinatory są obsługiwane, jeśli potrzebujesz większej precyzji.
- Jeśli wiele elementów pasuje do selektora, zwracana jest tablica, którą możesz przetwarzać za pomocą [[Filtry#Tablice i obiekty|filtrów tablic i obiektów]] takich jak `join` lub `map`.

Zmienne selektorów mogą być również używane bezpośrednio w [[Logika|logice szablonów]]:

- W pętlach: `{% for comment in selector:.comment %}...{% endfor %}`
- W warunkach: `{% if selector:.premium-badge %}...{% endif %}`
- W przypisywaniu zmiennych: `{% set items = selector:.list-item %}`

## Zmienne Schema.org

Zmienne schema pozwalają wyodrębniać dane z [schema.org](https://schema.org/) JSON-LD na stronie. Dane schema.org mogą być również używane do automatycznego [[Obsidian Web Clipper/Szablony#Dopasowywanie Schema.org|wyzwalania szablonu]].

- `{{schema:@Typ:klucz}}` zwraca wartość klucza ze schematu.
- `{{schema:@Typ:rodzic.dziecko}}` zwraca wartość zagnieżdżonej właściwości.
- `{{schema:@Typ:kluczTablicy}}` zwraca pierwszy element tablicy.
- `{{schema:@Typ:kluczTablicy[indeks].właściwość}}` zwraca element o określonym indeksie w tablicy.
- `{{schema:@Typ:kluczTablicy[*].właściwość}}` zwraca konkretną właściwość ze wszystkich elementów tablicy.

Możesz również użyć skróconej notacji bez określania typu schematu:

- `{{schema:author}}` dopasuje pierwszą właściwość `author` znalezioną w dowolnym typie schematu.
- `{{schema:name}}` dopasuje pierwszą właściwość `name` znalezioną w dowolnym typie schematu.

Ta skrócona notacja jest szczególnie przydatna, gdy nie znasz lub nie zależy Ci na konkretnym typie schematu, ale znasz nazwę szukanej właściwości.

Zagnieżdżone właściwości i dostęp do tablic działają zarówno z określonym `@Typem` schematu, jak i bez niego:

- `{{schema:author.name}}` znajdzie pierwszą właściwość `author`, a następnie uzyska dostęp do jej pod-właściwości `name`.
- `{{schema:author[0].name}}` uzyska dostęp do `name` pierwszego autora w tablicy autorów.
- `{{schema:author[*].name}}` zwróci tablicę wszystkich imion autorów.
