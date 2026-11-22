---
permalink: web-clipper/filters
---
Filtry pozwalają modyfikować [[Zmienne|zmienne]] w [[Obsidian Web Clipper/Szablony|szablonach Web Clipper]]. Filtry stosuje się do zmiennych za pomocą składni `{{variable|filter}}`.

- Filtry działają z każdym rodzajem [[Zmienne|zmiennej]], w tym ze zmiennymi `prompt`, `meta`, `selector` i `schema`.
- Filtry można łączyć w łańcuchy, np. `{{variable|filter1|filter2}}`, i są stosowane w kolejności, w jakiej zostały dodane.

## Daty

Konwertowanie i modyfikowanie dat.

### `date`

Konwertuje datę do określonego formatu, [zobacz dokumentację](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` konwertuje bieżącą datę do formatu "YYYY-MM-DD".
- Użyj `date:("outputFormat", "inputFormat")`, aby określić format wejściowy, np. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` parsuje "12/01/2024" i zwraca `"2024-12-01"`.

### `date_modify`

Modyfikuje datę, dodając lub odejmując określoną ilość czasu, [zobacz dokumentację](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` zwraca `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` zwraca `"2024-10-01"`

### `duration`

Konwertuje ciągi czasu trwania w formacie ISO 8601 lub sekundy na sformatowane ciągi czasowe. Używa tokenów: `HH` (godziny z dopełnieniem), `H` (godziny), `mm` (minuty z dopełnieniem), `m` (minuty), `ss` (sekundy z dopełnieniem), `s` (sekundy).

- `"PT1H30M"|duration:"HH:mm:ss"` zwraca `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` zwraca `"1:01:05"`.
- Ustawienie `duration` bez parametrów używa `HH:mm:ss` powyżej 1 godziny, `mm:ss` poniżej 1 godziny.
- Obsługuje zarówno ciągi czasu trwania ISO 8601 (np. `PT6702S`, `PT1H30M`), jak i zwykłe sekundy.

## Konwersja tekstu i wielkość liter

Konwersja ciągów tekstowych z jednego formatu na inny.

### `camel`

Konwertuje tekst na `camelCase`.

### `capitalize`

Zamienia pierwszy znak wartości na wielką literę, a resztę na małe litery, np. `"hELLO wORLD"|capitalize` zwraca `"Hello world"`.

### `decode_uri`

Dekoduje ciąg zakodowany w URI, np. `"%E4%BD%A0%E5%A5%BD"|decode_uri` zwraca `"你好"`.

- `"hello%20world"|decode_uri` zwraca `"hello world"`.
- Zwraca oryginalny ciąg, jeśli dekodowanie się nie powiedzie (np. nieprawidłowe sekwencje URI).

### `encode_uri`

Koduje tekst do użycia w adresie URL, w tym znaki zarezerwowane, takie jak `/`, `?` i `&`.

- `"hello world/page"|encode_uri` zwraca `hello%20world%2Fpage`.

### `indent`

Dodaje wcięcie z użyciem spacji do każdej niepustej linii. Domyślnie dwie spacje.

- `indent:4` dodaje wcięcie czterech spacji do każdej linii.
- `indent:0` pozostawia tekst bez zmian.

### `kebab`

Konwertuje tekst na `kebab-case`.

### `lower`

Konwertuje tekst na `małe litery`.

### `pascal`

Konwertuje tekst na `PascalCase`.

### `replace`

Zastępuje wystąpienia określonego tekstu:

- Proste zastąpienie: `"hello!"|replace:",":""` usuwa wszystkie przecinki.
- Wielokrotne zastąpienie: `"hello world"|replace:("e":"a","o":"0")` zwraca `"hall0 w0rld"`.
- Zastąpienia są stosowane w kolejności, w jakiej zostały określone.
- Aby usunąć określony tekst, użyj `""` jako wartości zastępczej.
- Znaki specjalne, w tym `: | { } ( ) ' "`, powinny być poprzedzone odwrotnym ukośnikiem w szukanym wyrażeniu, np. `\:` aby wyszukać dosłowny dwukropek.

Obsługiwane są wyrażenia regularne z użyciem składni JavaScript:

- Zastąpienie wszystkich samogłosek: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Bez rozróżniania wielkości liter: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Wielokrotne wyrażenia regularne: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Dostępne flagi: `g` (globalna), `i` (bez rozróżniania wielkości liter), `m` (wieloliniowa), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Konwertuje tekst na bezpieczną nazwę pliku.

- Domyślnie `safe_name` stosuje najbardziej konserwatywne reguły sanityzacji.
- Reguły specyficzne dla systemu operacyjnego można zastosować za pomocą `safe_name:os`, gdzie `os` może być `windows`, `mac` lub `linux`, aby zastosować reguły tylko dla danego systemu operacyjnego.

### `snake`

Konwertuje tekst na `snake_case`.

### `title`

Konwertuje tekst na `Wielkość Liter Tytułu`, np. `"hello world"|title` zwraca `"Hello World"`.

### `trim`

Usuwa białe znaki z obu końców ciągu.

- `"  hello world  "|trim` zwraca `"hello world"`.

### `truncate`

Skraca tekst do określonej liczby znaków i kończy go znakiem `…`. Sufiks jest wliczany do limitu.

- `"A concise introduction"|truncate:10` zwraca `A concise…`.
- `"A concise introduction"|truncate:(12, "...")` zwraca `A concise...`.
- `"A concise introduction"|truncate:(9, "")` zwraca `A concise`.

### `truncatewords`

Skraca tekst do określonej liczby słów i dodaje `…`.

- `"A concise introduction to Knap"|truncatewords:3` zwraca `A concise introduction…`.
- `"A concise introduction to Knap"|truncatewords:(3, "")` zwraca `A concise introduction`.

### `unescape`

Konwertuje sekwencje ucieczki cudzysłowów i znaków nowej linii na znaki dosłowne.

- `"Line 1\\nLine 2"|unescape` zwraca tekst w dwóch liniach.
- `'He said \\"hello\\"'|unescape` zwraca `He said "hello"`.

### `uncamel`

Konwertuje camelCase lub PascalCase na słowa oddzielone spacjami, które można dalej formatować innymi filtrami, takimi jak `title` lub `capitalize`.

- `"camelCase"|uncamel` zwraca `"camel case"`.
- `"PascalCase"|uncamel` zwraca `"pascal case"`.

### `upper`

Konwertuje wartość na wielkie litery, np. `"hello world"|upper` zwraca `"HELLO WORLD"`.

## Formatowanie tekstu

Zastosowanie [[Podstawowa składnia formatowania|podstawowej składni formatowania]] i [[Zaawansowana składnia formatowania|zaawansowanej składni formatowania]] do tekstu.

### `blockquote`

Dodaje prefix cytatu Markdown (`> `) do każdej linii danych wejściowych.

### `bold`

Otacza tekst znacznikami pogrubienia.

- `"Important"|bold` zwraca `**Important**`.
- `"Important"|bold:_` zwraca `__Important__`.

### `callout`

Tworzy [[Bloki informacyjne|blok wyróżnienia]] z opcjonalnymi parametrami: `{{variable|callout:("type", "title", foldState)}}`

- `type` to rodzaj objaśnienia, domyślnie "info"
- `title` to tytuł objaśnienia, domyślnie pusty
- `foldState` to wartość logiczna ustawiająca stan zwijania (true — zwinięty, false — rozwinięty, null — nie do zwijania)

### `code`

Formatuje tekst jako kod w linii. Tekst wieloliniowy lub parametr języka tworzy zamiast tego blok kodu z ogrodzeniem.

- `"const answer = 42"|code` zwraca `` `const answer = 42` ``.
- `"const answer = 42"|code:"typescript"` zwraca blok kodu oznaczony jako `typescript`.

### `code_block`

Zawsze tworzy blok kodu z ogrodzeniem, z opcjonalnym językiem, np. `code_block:"typescript"`.

### `comment`

Otacza tekst znacznikami [[Podstawowa składnia formatowania#Komentarze|komentarza]].

- `"Hidden note"|comment` zwraca `%%Hidden note%%`.

### `embed`

Konwertuje ciągi, tablice lub obiekty na [[Osadzanie plików|osadzenia]].

- Dla ciągów: `"diagram.png"|embed` zwraca `![[diagram.png]]`.
- Dla ciągów z aliasem: `"Project Atlas"|embed:"Preview"` zwraca `![[Project Atlas|Preview]]`.
- Dla obiektów: `{"one.md": "One", "two.md": "Two"}|embed` zwraca osadzenia z kluczami jako plikami i wartościami jako aliasami.

### `escape_md`

Dodaje odwrotny ukośnik przed znakami interpunkcyjnymi Markdown, aby wyświetlały się jako zwykły tekst.

- `"# Draft *title*"|escape_md` zwraca `\# Draft \*title\*`.

### `footnote`

Konwertuje tablicę lub obiekt na listę przypisów Markdown.

- Dla tablic: `["first item","second item"]|footnote` zwraca: `[^1]: first item` itd.
- Dla obiektów: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` zwraca: `[^first-note]: Content 1` itd.

### `fragment_link`

Konwertuje ciągi i tablice na linki [fragmentów tekstowych](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Domyślnie używa "link" jako tekstu linku.

- `highlights|fragment_link` zwraca `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` zwraca `Highlight content [custom title](text-fragment-url)`

### `h1` do `h6`

Zamienia każdą niepustą linię w nagłówek odpowiedniego poziomu.

- `"Introduction"|h2` zwraca `## Introduction`.

### `hard_break`

Dodaje dwie spacje przed każdym pojedynczym znakiem nowej linii, dzięki czemu podziały linii są widoczne w trybie odczytu. Puste linie między akapitami pozostają bez zmian.

### `highlight`

Otacza tekst znacznikami wyróżnienia.

- `"Remember this"|highlight` zwraca `==Remember this==`.
- Dodaj [[Podstawowa składnia formatowania#Kolory wyróżnień|kolor wyróżnienia]] za pomocą `red`, `orange`, `yellow`, `green`, `blue` lub `purple`, np. `"Remember this"|highlight:blue` zwraca `==🔵Remember this==`.

### `hr`

Dodaje linię poziomą (`---`) po tekście, oddzieloną pustą linią.

- `"Section end"|hr` dodaje linię po tekście.
- `hr:before` dodaje ją przed tekstem, a `hr:both` dodaje po obu stronach.

### `image`

Konwertuje ciągi, tablice lub obiekty na składnię obrazów Markdown.

- Dla ciągów: `"image.jpg"|image:"alt text"` zwraca `![alt text](image.jpg)`.
- Dla tablic: `["image1.jpg","image2.jpg"]|image:"alt text"` zwraca tablicę ciągów obrazów Markdown z tym samym tekstem alternatywnym dla wszystkich obrazów.
- Dla obiektów: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` zwraca ciągi obrazów Markdown z tekstem alternatywnym z kluczy obiektu.

### `italic`

Otacza tekst znacznikami kursywy.

- `"Emphasized"|italic` zwraca `*Emphasized*`.
- `"Emphasized"|italic:_` zwraca `_Emphasized_`.

### `link`

Konwertuje ciągi, tablice lub obiekty na składnię linków Markdown (nie mylić z [[Filtry#`wikilink`|wikilink]]).

- Dla ciągów: `"url"|link:"author"` zwraca `[author](url)`.
- Dla tablic: `["url1","url2"]|link:"author"` zwraca tablicę linków Markdown z tym samym tekstem dla wszystkich linków.
- Dla obiektów: `{"url1": "Author 1", "url2": "Author 2"}|link` zwraca linki Markdown z tekstem odpowiadającym kluczom obiektu.

### `list`

Konwertuje tablicę na listę Markdown.

- `list` konwertuje na listę wypunktowaną.
- `list:task` konwertuje na listę zadań.
- `list:numbered` konwertuje na listę numerowaną.
- `list:numbered-task` konwertuje na listę zadań z numeracją.

### `math`

Formatuje tekst jako [[Zaawansowana składnia formatowania#Matematyka|formułę matematyczną]] w linii. Tekst wieloliniowy tworzy blok matematyczny.

- `"x^2 + y^2"|math` zwraca `$x^2 + y^2$`.

### `math_block`

Zawsze tworzy blok matematyczny z `$$` w liniach przed i po tekście.

### `strike`

Otacza tekst znacznikami przekreślenia.

- `"Removed"|strike` zwraca `~~Removed~~`.

### `table`

Konwertuje tablicę lub tablicę obiektów na [[Zaawansowana składnia formatowania#Tabele|tabelę Markdown]]:

- Dla tablicy obiektów używa kluczy obiektu jako nagłówków.
- Dla tablicy tablic tworzy tabelę, w której każda zagnieżdżona tablica stanowi wiersz.
- Dla prostej tablicy tworzy tabelę jednokolumnową z nagłówkiem "Value".
- Niestandardowe nagłówki kolumn można określić za pomocą: `table:("Column 1", "Column 2", "Column 3")`. W przypadku użycia z prostą tablicą automatycznie dzieli dane na wiersze na podstawie liczby określonych kolumn.

### `table_pretty`

Działa jak [[Filtry#`table`|table]] i dopełnia kolumny do równej szerokości, aby tabela była wyrównana w trybie źródłowym.

### `wikilink`

Konwertuje ciągi, tablice lub obiekty na składnię [[Łączenie notatek|odnośników wiki]] Obsidian.

- Dla ciągów: `"page"|wikilink` zwraca `[[page]]`.
- Dla ciągów z aliasem: `"page"|wikilink:"alias"` zwraca `[[page|alias]]`.
- Dla tablic: `["page1","page2"]|wikilink` zwraca tablicę odnośników wiki bez aliasów.
- Dla tablic z aliasem: `["page1","page2"]|wikilink:"alias"` zwraca tablicę odnośników wiki z tym samym aliasem dla wszystkich linków.
- Dla obiektów: `{"page1": "alias1", "page2": "alias2"}|wikilink` zwraca odnośniki wiki z kluczami jako nazwami stron i wartościami jako aliasami.

## Liczby

`calc`, `round` i `length` zwracają liczby, zachowując ich typ w kolejnych filtrach i przypisaniach zmiennych. `number_format` zwraca tekst.

### `calc`

Wykonuje podstawowe operacje arytmetyczne na liczbach.

- Obsługiwane operatory: `+`, `-`, `*`, `/`, `**` (lub `^`) dla potęgowania.
- Przykład: `5|calc:"+10"` zwraca `15`.
- Przykład: `2|calc:"**3"` zwraca `8` (2 do sześcianu).
- Zwraca oryginalne dane wejściowe, jeśli są puste, nie są liczbą lub obliczenie daje nieskończony wynik.

### `length`

Zwraca długość ciągów, tablic lub liczbę kluczy w obiektach.

- Dla ciągów: `"hello"|length` zwraca `5`.
- Dla tablic: `["a","b","c"]|length` zwraca `3`.
- Tablica z jednym elementem nadal liczy się jako jeden: `[42]|length` zwraca `1`.
- Dla obiektów: `{"a":1,"b":2}|length` zwraca `2`.

### `number_format`

Formatuje liczbę z określoną liczbą miejsc po przecinku oraz opcjonalnymi separatorami dziesiętnym i tysięcznym.

- `1234.567|number_format:2` zwraca `"1,234.57"`.
- `1234.567|number_format:(2,",",".")` zwraca `"1.234,57"`.
- Tablice i obiekty są formatowane rekurencyjnie.

### `round`

Zaokrągla liczbę do najbliższej liczby całkowitej lub do określonej liczby miejsc po przecinku.

- Bez parametrów: `3.7|round` zwraca `4`.
- Z określoną liczbą miejsc po przecinku: `3.14159|round:2` zwraca `3.14`.
- Tablice i obiekty zachowują swoją strukturę, a wartości liczbowe są zaokrąglane rekurencyjnie. Ciągi liczbowe stają się liczbami, np. `["1.234","2.345"]|round:2` zwraca `[1.23,2.35]`.
- Nieprawidłowe dane wejściowe, takie jak `"42abc"`, są zachowywane bez konwersji na liczbę.

## Przetwarzanie HTML

Przetwarzanie zawartości HTML i konwersja HTML na Markdown. Pamiętaj, że wejściowa [[Zmienne|zmienna]] musi zawierać zawartość HTML, np. używając `{{fullHtml}}`, `{{contentHtml}}` lub zmiennej `{{selectorHtml:}}`.

### `html_to_json`

Konwertuje HTML na ustrukturyzowany JSON zawierający tag, atrybuty i elementy potomne każdego elementu. Węzły tekstowe używają formatu `{"type":"text","content":"..."}`. Można to łączyć z filtrami takimi jak `map`, `object` i `template`, aby przekształcić wyodrębniony HTML.

### `markdown`

Konwertuje ciąg na ciąg sformatowany w [[Obsidian Flavored Markdown]].

- Przydatne w połączeniu ze zmiennymi zwracającymi HTML, takimi jak `{{contentHtml}}`, `{{fullHtml}}` i zmienne selektorowe, np. `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Usuwa tylko określone atrybuty HTML z tagów.

- Przykład: `'<div class="test" id="example">Content</div>'|remove_attr:"class"` zwraca `<div id="example">Content</div>`.
- Wiele atrybutów: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Usuwa określone elementy HTML wraz z ich zawartością z ciągu.

- Obsługuje nazwę tagu, klasę lub id, np. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Aby usunąć tylko tagi lub atrybuty HTML bez usuwania zawartości, użyj filtrów `strip_tags` lub `strip_attr`.

### `remove_tags`

Usuwa tylko określone tagi HTML. Zachowuje zawartość tagów.

- Przykład: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` zwraca `"<p>Hello world!</p>"`.
- Wiele tagów: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Zastępuje tagi HTML, zachowując zawartość i atrybuty tagu.

- `{{fullHtml|replace_tags:"strong":"h2"}}` zastępuje wszystkie tagi `<strong>` tagami `<h2>`.

### `strip_attr`

Usuwa **wszystkie** atrybuty HTML z ciągu.

- Użyj `strip_attr:("class, id")`, aby zachować określone atrybuty.
- Przykład: `'<div class="test" id="example">Content</div>'|strip_attr:("class")` zwraca `<div class="test">Content</div>`.

### `strip_md`

Usuwa **całe** formatowanie Markdown i zwraca ciąg zwykłego tekstu, np. zamieniając `**text**` na `text`.

- Zamienia sformatowany tekst na niesformatowany zwykły tekst, w tym pogrubienie, kursywę, wyróżnienia, nagłówki, kod, cytaty blokowe, tabele, listy zadań i odnośniki wiki.
- Całkowicie usuwa tabele, przypisy, obrazy i elementy HTML.
- `stripmd` jest aliasem.

### `strip_tags`

Usuwa **wszystkie** tagi HTML z ciągu. Zawartość wewnątrz tagu jest zachowywana.

- Użyj `strip_tags:("p,strong,em")`, aby zachować określone tagi.
- Przykład: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` zwraca `Hello <b>world</b>!`.

## Tablice i obiekty

Przetwarzanie tablic i obiektów.

### `compact`

Usuwa wartości `null` i puste ciągi z tablic i obiektów. Zachowuje `0` i `false`.

- `[null,"","one",0,false,"two"]|compact` zwraca `["one",0,false,"two"]`.

### `first`

Zwraca pierwszy element tablicy, zachowując jego typ. Obiekty i zagnieżdżone tablice są wyświetlane jako JSON.

- `["a","b","c"]|first` zwraca `"a"`.
- Pusta tablica zwraca `null`, co wyświetla się jako pusty tekst.
- Jeśli dane wejściowe nie są tablicą, zwraca dane wejściowe bez zmian.

### `join`

Łączy elementy tablicy w ciąg.

- `["a","b","c"]|join` zwraca `"a,b,c"`.
- Można określić niestandardowy separator: `["a","b","c"]|join:" "` zwraca `"a b c"`. Użyj `join:"\n"`, aby oddzielić elementy znakiem nowej linii.
- Przydatne po `split` lub `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` zwraca `"b c"`.

### `last`

Zwraca ostatni element tablicy, zachowując jego typ. Obiekty i zagnieżdżone tablice są wyświetlane jako JSON.

- `["a","b","c"]|last` zwraca `"c"`.
- Pusta tablica zwraca `null`, co wyświetla się jako pusty tekst.
- Jeśli dane wejściowe nie są tablicą, zwraca dane wejściowe bez zmian.

### `map`

Stosuje transformację do każdego elementu tablicy za pomocą składni `map:item => item.property` lub `map:item => item.nested.property` dla zagnieżdżonych właściwości.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` zwraca `["obsidian", "amethyst"]`.
- Używaj nawiasów dla literałów obiektowych i złożonych wyrażeń: `map:item => ({key: value})`, np.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` zwraca `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Obsługiwane są również literały ciągów, np. `["rock", "pop"]|map:item => "genres/${item}"` zwraca `["genres/rock", "genres/pop"]`.

Łącz `map` z filtrem `template`, np. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Dla mapowań z literałami ciągów użyj `${str}` w szablonie, np. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Uwaga: Wbudowanych filtrów nie można używać wewnątrz `map`. Oznacza to, że na przykład przycinanie każdej wartości tablicy nie jest możliwe za pomocą `map`.

### `merge`

Dodaje nowe wartości do tablicy.

- Dla tablic: `["a","b"]|merge:("c","d")` zwraca `["a","b","c","d"]`.
- Pojedyncza wartość: `["a","b"]|merge:"c"` zwraca `["a","b","c"]`.
- Jeśli dane wejściowe nie są tablicą, tworzy nową tablicę: `"a"|merge:("b","c")` zwraca `["a","b","c"]`.
- Wartości mogą być ujęte w cudzysłowy: `["a"]|merge:('b,"c,d",e')` zwraca `["a","b","c,d","e"]`.

### `nth`

Zachowuje n-te elementy tablicy, używając składni w stylu CSS nth-child i wzorców grupowych. Wszystkie pozycje są liczone od 1 (pierwszy element to pozycja 1).

- `array|nth:3` zachowuje tylko trzeci element.
- `array|nth:3n` zachowuje co trzeci element (3, 6, 9 itd.).
- `array|nth:n+3` zachowuje trzeci i wszystkie kolejne elementy.

Wynik pozostaje tablicą dla kolejnych filtrów kolekcji. Jeśli zawiera pojedynczą wartość prymitywną, ta wartość jest wyświetlana bez nawiasów tablicowych i przekazywana bezpośrednio do filtrów tekstowych, np. `[1,2]|nth:2` wyświetla `2`.

Składnia wzorca grupowego dla powtarzających się struktur:

- `array|nth:1,2,3:5` zachowuje pozycje 1, 2, 3 z każdej grupy 5 elementów. Przykład: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` zwraca `[1,2,3,6,7,8]`.

### `object`

Manipuluje danymi obiektu:

- `object:array` konwertuje obiekt na tablicę par klucz-wartość.
- `object:keys` zwraca tablicę kluczy obiektu.
- `object:values` zwraca tablicę wartości obiektu.
- Przykład: `{"a":1,"b":2}|object:array` zwraca `[["a",1],["b",2]]`.

### `parse_json`

Parsuje tekst JSON na wartość z zachowaniem typu. Użyj tego przed filtrami kolekcji lub serializacją YAML, gdy zmienna zawiera tekst JSON, np. `'[1,2]'|parse_json|yaml:flow` zwraca `[1,2]`.

### `reverse`

Odwraca ciągi, tablice i kolejność wpisów w obiektach.

- `"abc"|reverse` zwraca `"cba"`.
- `["a","b","c"]|reverse` zwraca `["c","b","a"]`.

### `slice`

Wyodrębnia fragment ciągu lub tablicy.

- Dla ciągów: `"hello"|slice:1,4` zwraca `"ell"`.
- Dla tablic: `["a","b","c","d"]|slice:1,3` zwraca `["b","c"]`.
- Jeśli podano tylko jeden parametr, wycina od tego indeksu do końca: `"hello"|slice:2` zwraca `"llo"`.
- Ujemne indeksy liczą od końca: `"hello"|slice:-3` zwraca `"llo"`.
- Drugi parametr jest wyłączny: `"hello"|slice:1,4` zawiera znaki o indeksach 1, 2 i 3.
- Użycie ujemnego drugiego parametru wyklucza elementy od końca: `"hello"|slice:0,-2` zwraca `"hel"`.

### `sort`

Sortuje tablicę w kolejności rosnącej. Liczby są sortowane według wartości.

- `[10,2,1]|sort` zwraca `[1,2,10]`.
- `["a","c","b"]|sort:"desc"` zwraca `["c","b","a"]`.
- Dla tablic obiektów podaj właściwość: `[{"name":"Lin"},{"name":"Ada"}]|sort:"name"` zwraca `[{"name":"Ada"},{"name":"Lin"}]`. Użyj `sort:("name", "desc")`, aby odwrócić kolejność. Elementy bez danej właściwości trafiają na koniec.

### `split`

Dzieli ciąg na tablicę podciągów.

- `"a,b,c"|split:","` zwraca `["a","b","c"]`.
- `"hello world"|split:" "` zwraca `["hello","world"]`.
- Jeśli nie podano separatora, dzieli na każdy znak: `"hello"|split` zwraca `["h","e","l","l","o"]`.
- Wyrażenia regularne mogą być używane jako separatory: `"a1b2c3"|split:[0-9]` zwraca `["a","b","c",""]`. Ostatni element jest pusty, ponieważ ciąg kończy się separatorem.

### `sum`

Sumuje liczby w tablicy. Tekst, który nie jest liczbą, jest pomijany, a pusta tablica zwraca `0`.

- `[10,"2.5","","none"]|sum` zwraca `12.5`.
- Dla tablic obiektów podaj właściwość: `[{"amount":10},{"amount":"2.5"}]|sum:"amount"` zwraca `12.5`.

### `template`

Stosuje ciąg szablonu do obiektu lub tablicy obiektów, używając składni `object|template:"Template with ${variable}"`.

- Dostęp do zagnieżdżonych właściwości: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` zwraca `"Obsidian"`.
- Dla obiektów: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` zwraca `"obsidian has a hardness of 5"`.
- Dla tablic: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` zwraca sformatowaną listę.

Działa z literałami ciągów z `map` przy użyciu `${str}`:

- Przykład: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` zwraca sformatowaną listę.

### `unique`

Usuwa zduplikowane wartości z tablic i obiektów.

- Dla tablic prymitywów: `[1,2,2,3,3]|unique` zwraca `[1,2,3]`.
- Dla tablic obiektów: `[{"a":1},{"b":2},{"a":1}]|unique` zwraca `[{"a":1},{"b":2}]`.
- Dla obiektów usuwa właściwości ze zduplikowanymi wartościami, zachowując klucz ostatniego wystąpienia.
- Dla ciągów zwraca dane wejściowe bez zmian.

### `where`

Zachowuje elementy tablicy, których właściwość odpowiada podanej wartości. Typ musi się również zgadzać, więc liczba `1` nie pasuje do tekstu `"1"`.

- `[{"title":"One","published":true},{"title":"Two","published":false}]|where:("published", true)` zwraca `[{"title":"One","published":true}]`.
- Użyj ścieżki z kropką dla zagnieżdżonych właściwości, np. `where:("author.name", "Ada")`.

## YAML

### `yaml`

Formatuje wartość jako YAML. Ciągi są zawsze ujęte w cudzysłowy, w tym ciągi takie jak `"null"`, `"true"` i `"123"`. Faktyczne wartości null, logiczne i liczbowe pozostają bez cudzysłowów.

- Tablice i obiekty domyślnie używają stylu blokowego. Użyj `yaml:flow` dla kompaktowych kolekcji w linii.
- Użyj `parse_json` najpierw, aby serializować tekst JSON jako dane strukturalne zamiast ciągu w cudzysłowie.

### `yaml_property`

Formatuje nazwaną właściwość YAML, w tym wcięcia dla tablic i obiektów. Ciągi i wartości typowane podlegają tym samym regułom co `yaml`.

- `"42.567"|round:2|yaml_property:"price"` zwraca `price: 42.57`.
