---
permalink: bases/functions
publish: true
mobile: true
description: Ta strona opisuje funkcje używane w Obsidian Bases do manipulowania danymi z właściwości w filtrach i formułach.
---
Funkcje są używane w [[Wprowadzenie do Baz danych|Bazach danych]] do manipulowania danymi z [[Atrybuty|właściwości]] w [[Podglądy#Filtry|filtrach]] i [[Wzory|wzorach]]. Zapoznaj się z referencją [[Składnia Baz danych|składni baz danych]], aby dowiedzieć się więcej o tym, jak możesz używać funkcji.

Poza funkcjami [[Funkcje#Globalne|Globalnymi]], większość funkcji zależy od typu wartości, którą chcesz zmodyfikować:

- [[Funkcje#Dowolne|Dowolne]]
- [[Funkcje#Data|Data]]
- [[Funkcje#Ciąg znaków|Ciąg znaków]]
- [[Funkcje#Liczba|Liczba]]
- [[Funkcje#Lista|Lista]]
- [[Funkcje#Link|Link]]
- [[Funkcje#Plik|Plik]]
- [[Funkcje#Obiekt|Obiekt]]
- [[Funkcje#Wyrażenie regularne|Wyrażenie regularne]]

## Globalne

Funkcje globalne są używane bez typu.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Escapuje znaki specjalne w ciągu znaków, aby był bezpieczny do umieszczenia w HTML.

### `date()`

`date(date: string): date`

- `date(string): date` parsuje podany ciąg znaków i zwraca obiekt daty.
- Ciąg `date` powinien być w formacie `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Parsuje ciąg znaków jako czas trwania. Zobacz [[Składnia Baz danych#Arytmetyka dat|sekcję arytmetyki dat]] dla formatu ciągu `value`.
- Czasy trwania nie muszą być jawnie parsowane podczas wykonywania arytmetyki dat (na przykład `now() + '1d'`), ale muszą być parsowane podczas wykonywania arytmetyki na czasach trwania (na przykład `now() + (duration('1d') * 2)`).
- Podczas wykonywania arytmetyki na czasach trwania ze skalarami, czas trwania musi być po lewej stronie. Na przykład `duration('5h') * 2`, zamiast `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Zwraca obiekt pliku dla podanego pliku lub ścieżki.
- Przykład: `file(link("[[filename]]"))` lub `file("path to file")`.

### `html()`

`html(html: string): html`

- Konwertuje ciąg znaków na fragment kodu, który renderuje się jako HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` to warunek do oceny.
- `trueResult` to wynik, jeśli warunek jest prawdziwy.
- `falseResult` to opcjonalny wynik, jeśli warunek jest fałszywy. Jeśli nie zostanie podany, przyjmowana jest wartość `null`.
- Zwraca `trueResult`, jeśli `condition` jest prawdziwy lub jest wartością prawdziwą (truthy), w przeciwnym razie zwraca `falseResult`.
- Przykład: `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Zwraca obiekt obrazu, który renderuje obraz w podglądzie.
- Przykład: `image(image-property)` lub `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Zwraca wartość, która renderuje się jako ikona w podglądzie. Nazwa ikony musi odpowiadać obsługiwanej ikonie Lucide.
- Przykład: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Parsuje ciąg znaków `path` i zwraca obiekt Link, który renderuje się jako link do podanej ścieżki.
- Opcjonalnie podaj parametr `display`, aby zmienić tekst wyświetlany przez link.

### `list()`

`list(element: any): List`

- Jeśli podany element jest listą, zwraca go bez zmian.
- W przeciwnym razie opakowuje podany `element` w listę, tworząc listę z jednym elementem.
- Ta funkcja może być przydatna, gdy właściwość zawiera mieszankę ciągów znaków lub list w całym skarbcu.
- Przykład: `list("value")` zwraca `["value"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Zwraca największą z podanych liczb.

### `min()`

`min(value1: number, value2: number...): number`

- Zwraca najmniejszą z podanych liczb.

### `now()`

`now(): date`

- `now()` zwraca obiekt daty reprezentujący bieżący moment.

### `number()`

`number(input: any): number`

- Próbuje zwrócić podaną wartość jako liczbę.
- Obiekty dat zostaną zwrócone jako milisekundy od epoki uniksowej.
- Wartości logiczne zwrócą 1 lub 0.
- Ciągi znaków zostaną sparsowane na liczbę i zwrócą błąd, jeśli wynik jest nieprawidłowy.
- Przykład: `number("3.4")` zwraca `3.4`.

### `duration()`

`duration(value: string): duration`

- Parsuje ciąg znaków jako czas trwania. Zobacz [[Składnia Baz danych#Arytmetyka dat|sekcję arytmetyki dat]] dla formatu ciągu `value`.
- Czasy trwania nie muszą być jawnie parsowane podczas wykonywania arytmetyki dat (na przykład `now() + '1d'`), ale muszą być parsowane podczas wykonywania arytmetyki na czasach trwania (na przykład `now() + (duration('1d') * 2)`).
- Podczas wykonywania arytmetyki na czasach trwania ze skalarami, czas trwania musi być po lewej stronie. Na przykład `duration('5h') * 2`, zamiast `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` zwraca obiekt daty reprezentujący bieżącą datę. Część czasowa jest ustawiona na zero.

### `random()`

`random(): number`

- `random()` zwraca losową liczbę między 0 a 1.
- Generowanie liczb odświeża się za każdym razem, gdy podgląd jest ładowany. Nawigacja między podglądami zmienia losową liczbę.

## Dowolne

Funkcje, których możesz używać z dowolną wartością. Obejmuje to ciągi znaków (np. `"hello"`), liczby (np. `42`), listy (np. `[1,2,3]`), obiekty i inne.

### `isTruthy()`

`any.isTruthy(): boolean`

- Zwraca wartość skonwertowaną na wartość logiczną.
- Przykład: `1.isTruthy()` zwraca `true`.

### `isType()`

`any.isType(type: string): boolean`

- Zwraca true, jeśli wartość jest podanego typu.
- Przykład: `"example".isType("string")` i `true.isType("boolean")` oba zwracają true.

### `toString()`

`any.toString(): string`

- Zwraca reprezentację tekstową dowolnej wartości.
- Przykład: `123.toString()` zwraca `"123"`.

## Data

Funkcje, których możesz używać z datą i czasem, takim jak `date("2025-05-27")`. Porównania dat można wykonywać za pomocą [[Składnia Baz danych#Arytmetyka dat|arytmetyki dat]].

### Pola

Następujące pola są dostępne dla dat:

| Pole               | Typ      | Opis                         |
| ------------------ | -------- | ---------------------------- |
| `date.year`        | `number` | Rok daty                     |
| `date.month`       | `number` | Miesiąc daty (1–12)          |
| `date.day`         | `number` | Dzień miesiąca               |
| `date.hour`        | `number` | Godzina (0–23)               |
| `date.minute`      | `number` | Minuta (0–59)                |
| `date.second`      | `number` | Sekunda (0–59)               |
| `date.millisecond` | `number` | Milisekunda (0–999)          |

### `date()`

`date.date(): date`

- Zwraca obiekt daty z usuniętym czasem.
- Przykład: `now().date().format("YYYY-MM-DD HH:mm:ss")` zwraca ciąg znaków taki jak "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` to ciąg formatujący (np. `"YYYY-MM-DD"`).
- Zwraca datę sformatowaną zgodnie z ciągiem formatu Moment.js.
- Przykład: `date.format("YYYY-MM-DD")` zwraca `"2025-05-27"`.

### `time()`

`date.time(): string`

- Zwraca czas.
- Przykład: `now().time()` zwraca ciąg znaków taki jak "23:59:59"

### `relative()`

`date.relative(): string`

- Zwraca czytelne porównanie daty z bieżącą datą i czasem.
- Przykład: `file.mtime.relative()` zwraca wartość taką jak `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Zwraca false.

## Ciąg znaków

Funkcje, których możesz używać z sekwencją znaków, taką jak `"hello"`.

### Pola

| Pole            | Typ      | Opis                                   |
| --------------- | -------- | -------------------------------------- |
| `string.length` | `number` | Liczba znaków w ciągu znaków           |

### `contains()`

`string.contains(value: string): boolean`

- `value` to podciąg do wyszukania.
- Zwraca true, jeśli ciąg zawiera `value`.
- Przykład: `"hello".contains("ell")` zwraca `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` to jeden lub więcej podciągów do wyszukania.
- Zwraca true, jeśli ciąg zawiera wszystkie `values`.
- Przykład: `"hello".containsAll("h", "e")` zwraca `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` to jeden lub więcej podciągów do wyszukania.
- Zwraca true, jeśli ciąg zawiera co najmniej jedną z `values`.
- Przykład: `"hello".containsAny("x", "y", "e")` zwraca `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` to ciąg do sprawdzenia na końcu.
- Zwraca true, jeśli ten ciąg kończy się na `query`.
- Przykład: `"hello".endsWith("lo")` zwraca `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Zwraca true, jeśli ciąg nie ma znaków lub nie jest obecny.
- Przykład: `"Hello world".isEmpty()` zwraca `false`.
- Przykład: `"".isEmpty()` zwraca `true`.

### `lower()`

`string.lower(): string`

- Zwraca ciąg skonwertowany na małe litery.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` to wartość do wyszukania w docelowym ciągu.
- `replacement` to wartość, którą zostaną zastąpione znalezione wzorce.
- Jeśli `pattern` jest ciągiem znaków, wszystkie wystąpienia wzorca zostaną zastąpione.
- Jeśli `pattern` jest wyrażeniem regularnym, flaga `g` określa, czy zostanie zastąpione tylko pierwsze, czy wszystkie wystąpienia.
- Przykład: `""a:b:c:d".replace(/:/, "-")` zwraca `"a-b,c,d"`, natomiast `"a:b:c:d".replace(/:/g, "-")` zwraca `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` to liczba powtórzeń ciągu.
- Przykład: `"123".repeat(2)` zwraca `"123123"`

### `reverse()`

`string.reverse(): string`

- Odwraca ciąg znaków.
- Przykład: `"hello".reverse()` zwraca `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` to włączny indeks początkowy.
- `end` to opcjonalny wyłączny indeks końcowy.
- Zwraca podciąg od `start` (włącznie) do `end` (wyłącznie).
- Przykład: `"hello".slice(1, 4)` zwraca `"ell"`.
- Jeśli `end` zostanie pominięty, wycina do końca ciągu.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` to separator do dzielenia ciągu.
- `n` to opcjonalna liczba. Jeśli zostanie podana, wynik będzie zawierał pierwsze `n` elementów.
- Zwraca listę podciągów.
- Przykład: `"a,b,c,d".split(",", 3)` lub `"a,b,c,d".split(/,/, 3)` zwraca `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` to ciąg do sprawdzenia na początku.
- Zwraca true, jeśli ten ciąg zaczyna się od `query`.
- Przykład: `"hello".startsWith("he")` zwraca `true`.

### `title()`

`string.title(): string`

- Konwertuje ciąg na zapis tytułowy (pierwsza litera każdego słowa wielka).
- Przykład: `"hello world".title()` zwraca `"Hello World"`.

### `trim()`

`string.trim(): string`

- Usuwa białe znaki z obu końców ciągu.
- Przykład: `"  hi  ".trim()` zwraca `"hi"`.

## Liczba

Funkcje, których możesz używać z wartościami liczbowymi, takimi jak `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Zwraca wartość bezwzględną liczby.
- Przykład: `(-5).abs()` zwraca `5`.

### `ceil()`

`number.ceil(): number`

- Zaokrągla liczbę w górę do najbliższej liczby całkowitej.
- Przykład: `(2.1).ceil()` zwraca `3`.

### `floor()`

`number.floor(): number`

- Zaokrągla liczbę w dół do najbliższej liczby całkowitej.
- Przykład: `(2.9).floor()` zwraca `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Zwraca true, jeśli liczba nie jest obecna.
- Przykład: `5.isEmpty()` zwraca `false`.

### `round()`

`number.round(digits: number): number`

- Zaokrągla liczbę do najbliższej liczby całkowitej.
- Opcjonalnie podaj parametr `digits`, aby zaokrąglić do podanej liczby miejsc dziesiętnych.
- Przykład: `(2.5).round()` zwraca `3`, a `(2.3333).round(2)` zwraca `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` to liczba miejsc dziesiętnych.
- Zwraca ciąg znaków z liczbą w notacji stałoprzecinkowej.
- Przykład: `(3.14159).toFixed(2)` zwraca `"3.14"`.

## Lista

Funkcje, których możesz używać z uporządkowaną listą elementów, taką jak `[1, 2, 3]`.

### Pola

| Pole          | Typ      | Opis                           |
| ------------- | -------- | ------------------------------ |
| `list.length` | `number` | Liczba elementów na liście     |

### `contains()`

`list.contains(value: any): boolean`

- `value` to element do wyszukania.
- Zwraca true, jeśli lista zawiera `value`.
- Przykład: `[1,2,3].contains(2)` zwraca `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` to jeden lub więcej elementów do wyszukania.
- Zwraca true, jeśli lista zawiera wszystkie `values`.
- Przykład: `[1,2,3].containsAll(2,3)` zwraca `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` to jeden lub więcej elementów do wyszukania.
- Zwraca true, jeśli lista zawiera co najmniej jedną z `values`.
- Przykład: `[1,2,3].containsAny(3,4)` zwraca `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtruje elementy tej listy, wywołując funkcję filtrującą, która używa zmiennych `index` i `value`, i zwraca wartość logiczną określającą, czy element powinien zostać zachowany.
- `value` to wartość elementu na liście.
- `index` to indeks bieżącej wartości.
- Przykład: `[1,2,3,4].filter(value > 2)` zwraca `[3,4]`.

### `flat()`

`list.flat(): list`

- Spłaszcza zagnieżdżoną listę w pojedynczą listę.
- Przykład: `[1,[2,3]].flat()` zwraca `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Zwraca true, jeśli lista nie ma elementów.
- Przykład: `[1,2,3].isEmpty()` zwraca `false`.

### `join()`

`list.join(separator: string): string`

- `separator` to ciąg wstawiany między elementami.
- Łączy wszystkie elementy listy w jeden ciąg znaków.
- Przykład: `[1,2,3].join(",")` zwraca `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Przekształca każdy element tej listy, wywołując funkcję konwersji, która używa zmiennych `index` i `value`, i zwraca nową wartość do umieszczenia na liście.
- `value` to wartość elementu na liście.
- `index` to indeks bieżącej wartości.
- Przykład: `[1,2,3,4].map(value + 1)` zwraca `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Redukuje elementy tej listy do pojedynczej wartości, uruchamiając wyrażenie dla każdego elementu. Wyrażenie może używać zmiennych `index`, `value` i `acc` (akumulator) i powinno zwracać następną wartość akumulatora.
- `expression` jest obliczane dla każdego elementu na liście.
- `value` to wartość bieżącego elementu na liście.
- `index` to indeks bieżącego elementu.
- `acc` to dotychczasowa skumulowana wartość.
- Przykład (suma): `[1,2,3].reduce(acc + value, 0)` zwraca `6`.
- Przykład (max): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` zwraca największą liczbę lub `null`, jeśli nie ma żadnej.

### `reverse()`

`list.reverse(): list`

- Odwraca listę w miejscu.
- Przykład: `[1,2,3].reverse()` zwraca `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` to włączny indeks początkowy.
- `end` to opcjonalny wyłączny indeks końcowy.
- Zwraca płytką kopię części listy od `start` (włącznie) do `end` (wyłącznie).
- Przykład: `[1,2,3,4].slice(1,3)` zwraca `[2,3]`.
- Jeśli `end` zostanie pominięty, wycina do końca listy.

### `sort()`

`list.sort(): list`

- Sortuje elementy listy od najmniejszego do największego.
- Przykład: `[3, 1, 2].sort()` zwraca `[1, 2, 3]`.
- Przykład: `["c", "a", "b"].sort()` zwraca `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Usuwa zduplikowane elementy.
- Przykład: `[1,2,2,3].unique()` zwraca `[1,2,3]`.

## Link

Funkcje, których możesz używać na linku. Linki mogą być tworzone z pliku (`file.asLink()`) lub ścieżki (`link("path")`).

### `asFile()`

`link.asFile(): file`

- Zwraca obiekt pliku, jeśli link odnosi się do prawidłowego pliku lokalnego.
- Przykład: `link("[[filename]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Zwraca, czy plik reprezentowany przez `link` ma link do `file`.

## Plik

Funkcje, których możesz używać z plikami w skarbcu.

### Pola

Następujące pola są dostępne dla plików:

| Pole              | Typ      | Opis                                                                |
| ----------------- | -------- | ------------------------------------------------------------------- |
| `file.name`       | `string` | Nazwa tego pliku.                                                   |
| `file.basename`   | `string` | Nazwa tego pliku bez rozszerzenia.                                  |
| `file.path`       | `string` | Pełna ścieżka do tego pliku, względem katalogu głównego skarbca.    |
| `file.folder`     | `string` | Pełna ścieżka do folderu nadrzędnego.                               |
| `file.ext`        | `string` | Rozszerzenie tego pliku.                                            |
| `file.size`       | `number` | Rozmiar tego pliku w bajtach.                                       |
| `file.properties` | `object` | Właściwości notatki tego pliku.                                     |
| `file.tags`       | `list`   | Tagi tego pliku. Zawiera tagi wbudowane.                            |
| `file.links`      | `list`   | Łącza wewnętrzne w tym pliku.                                       |
| `file.ctime`      | `date`   | Znacznik czasu utworzenia tego pliku.                                |
| `file.mtime`      | `date`   | Znacznik czasu ostatniej modyfikacji tego pliku.                    |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` opcjonalny tekst wyświetlany dla linku.
- Zwraca obiekt Link, który renderuje się jako działający link.
- Przykład: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` to inny obiekt pliku lub ścieżka tekstowa do sprawdzenia.
- Zwraca true, jeśli `file` linkuje do `otherFile`.
- Przykład: `file.hasLink(otherFile)` zwraca `true`, jeśli istnieje link z `file` do `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Zwraca true, jeśli notatka posiada daną właściwość pliku.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` to jedna lub więcej nazw tagów.
- Zwraca true, jeśli plik posiada którykolwiek z tagów w `values`.
- Przykład: `file.hasTag("tag1", "tag2")` zwraca `true`, jeśli plik ma tag `#tag1` lub `#tag2`. Obejmuje to również wszelkie [[Tagi#Zagnieżdżone tagi|zagnieżdżone tagi]], takie jak `#tag1/a` lub `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` to nazwa folderu do sprawdzenia.
- Zwraca true, jeśli plik znajduje się w określonym folderze lub jednym z jego podfolderów.
- Przykład: `file.inFolder("notes")` zwraca `true`.

## Obiekt

Funkcje, których możesz używać z kolekcją par klucz-wartość, taką jak `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Zwraca true, jeśli obiekt nie ma własnych właściwości.
- Przykład: `{}.isEmpty()` zwraca `true`.

### `keys()`

`object.keys(): list`

- Zwraca listę zawierającą klucze obiektu.

### `values()`

`object.values(): list`

- Zwraca listę zawierającą wartości obiektu.

## Wyrażenie regularne

Funkcje, których możesz używać ze wzorcem wyrażenia regularnego. Przykład: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` to ciąg do przetestowania.
- Zwraca true, jeśli wyrażenie regularne pasuje do `value`.
- Przykład: `/abc/.matches("abcde")` zwraca `true`.
