---
permalink: bases/syntax
publish: true
mobile: true
description: Ta strona stanowi wprowadzenie do składni Bases w Obsidian.
---
Kiedy [[Tworzenie bazy danych|tworzysz bazę danych]] w Obsidian, jest ona zapisywana jako plik `.base`. Bazy danych są zwykle edytowane za pomocą interfejsu aplikacji, ale ich składnię można również edytować ręcznie i osadzać w bloku kodu.

Składnia [[Wprowadzenie do Baz danych|Baz danych]] definiuje [[Podglądy|podglądy]], filtry i [[Wzory|wzory]]. Bazy danych muszą być poprawnym YAML-em zgodnym ze schematem zdefiniowanym poniżej.

## Przykład

Oto przykład pliku bazy danych. Omówimy szczegółowo każdą sekcję.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Filtry

Domyślnie baza danych obejmuje każdy plik w skarbcu. Nie ma `from` ani `source` jak w SQL lub Dataview. Sekcja `filters` pozwala zdefiniować warunki zawężające zbiór danych.

```yaml
# Prosty filtr:
filters:
  and:
    - file.hasTag("tag")

# Złożony filtr:
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Filtry można zastosować na dwa sposoby:

1. Na globalnym poziomie `filters` (jak pokazano powyżej), gdzie mają zastosowanie do wszystkich podglądów w bazie.
2. Na poziomie `view`, gdzie mają zastosowanie tylko do konkretnego podglądu.

Te dwie sekcje są funkcjonalnie równoważne, a przy ewaluacji dla podglądu są łączone operatorem `AND`.

Sekcja `filters` zawiera pojedynczą instrukcję filtrowania jako ciąg znaków lub rekurencyjnie zdefiniowany obiekt filtra. Obiekty filtrów mogą zawierać jedną z wartości `and`, `or` lub `not`. Te klucze są heterogeniczną listą innych obiektów filtrów lub instrukcji filtrowania w postaci ciągów znaków. Instrukcja filtrowania to wiersz, który po zastosowaniu do notatki daje wartość prawdziwą lub fałszywą. Może to być jedno z poniższych:

- Proste porównanie z użyciem standardowych operatorów arytmetycznych.
- Funkcja. Dostępnych jest wiele wbudowanych [[Funkcje|funkcji]], a wtyczki mogą dodawać kolejne.

Składnia i dostępne funkcje dla filtrów i wzorów są takie same.

### Wzory

Sekcja `formulas` definiuje [[Wzory|właściwości wzorów]], które mogą być wyświetlane we wszystkich podglądach w pliku bazy danych.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Właściwości wzorów obsługują podstawowe operatory arytmetyczne i różnorodne wbudowane [[Funkcje|funkcje]]. W przyszłości wtyczki będą mogły dodawać funkcje do użycia we wzorach.

Możesz odwoływać się do właściwości na różne sposoby w zależności od ich typu:

- **Właściwości notatki** to właściwości zdefiniowane w metadanych początkowych notatki. Na przykład `note.price` lub `note["price"]`.
  Jeśli nie podano prefiksu, przyjmuje się, że właściwość jest typu `note`.
- **Właściwości pliku** opisują sam plik.
  Na przykład `file.size` lub `file.ext`. Można również bezpośrednio odwoływać się do obiektu pliku, np. `file.hasLink()`.
- **Właściwości wzorów** to inne wzory w bazie danych.
  Przykład: `formula.formatted_price`.

Wzór może używać wartości z innych właściwości wzorów, pod warunkiem, że nie ma odwołań cyklicznych.

Właściwości wzorów są zawsze przechowywane jako ciągi znaków w YAML, ale ich faktyczny **typ danych wyjściowych** jest określany przez typ danych bazowych i wartość zwracaną przez użyte funkcje.

Zwróć uwagę, że zagnieżdżone cudzysłowy są konieczne, aby uwzględnić literały tekstowe w polu YAML. Literały tekstowe muszą być ujęte w pojedyncze lub podwójne cudzysłowy.

### Atrybuty

Sekcja `properties` pozwala przechowywać informacje konfiguracyjne o każdej właściwości. Od poszczególnego podglądu zależy, jak wykorzysta te wartości konfiguracyjne. Na przykład w tabelach wyświetlana nazwa jest używana jako nagłówek kolumny.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Wyświetlane nazwy nie są używane w filtrach ani wzorach.

### Podsumowania

Sekcja `summaries` może być używana do definiowania niestandardowych wzorów podsumowań. Oprócz definiowania wzorów podsumowań tutaj, dostępnych jest kilka domyślnych wzorów podsumowań.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

W tym przykładzie wzór `customAverage` jest taki sam jak domyślny `Average`, z tą różnicą, że wartość jest zaokrąglana do innej liczby miejsc. We wzorach podsumowań słowo kluczowe `values` to lista zawierająca wszystkie wartości danej właściwości ze wszystkich notatek w zbiorze wyników. Wzór podsumowania powinien zwrócić pojedynczą wartość `Value`.

Zwróć uwagę, że ta sekcja `summaries` różni się od sekcji `summaries` w konfiguracji podglądu (opisanej poniżej), gdzie wzory podsumowań są przypisywane do konkretnych właściwości.

#### Domyślne wzory podsumowań

| Nazwa     | Typ wejściowy | Opis                                                          |
| --------- | ------------- | ------------------------------------------------------------- |
| Average   | Liczba        | Średnia arytmetyczna wszystkich liczb z wartości wejściowych.  |
| Min       | Liczba        | Najmniejsza liczba z wartości wejściowych.                    |
| Max       | Liczba        | Największa liczba z wartości wejściowych.                     |
| Sum       | Liczba        | Suma wszystkich liczb z wartości wejściowych.                 |
| Range     | Liczba        | Różnica między `Max` i `Min`.                                 |
| Median    | Liczba        | Mediana wszystkich liczb z wartości wejściowych.              |
| Stddev    | Liczba        | Odchylenie standardowe wszystkich liczb z wartości wejściowych. |
| Earliest  | Data          | Najwcześniejsza data z wartości wejściowych.                  |
| Latest    | Data          | Najpóźniejsza data z wartości wejściowych.                    |
| Range     | Data          | Różnica między `Latest` i `Earliest`.                         |
| Checked   | Boolean       | Liczba wartości `true`.                                       |
| Unchecked | Boolean       | Liczba wartości `false`.                                      |
| Empty     | Dowolny       | Liczba pustych wartości wejściowych.                          |
| Filled    | Dowolny       | Liczba niepustych wartości wejściowych.                       |
| Unique    | Dowolny       | Liczba unikalnych wartości wejściowych.                       |

### Podglądy

Sekcja `views` definiuje sposób renderowania danych. Każdy wpis na liście `views` definiuje osobny podgląd tych samych danych i może być ich dowolna liczba.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` wybiera spośród wbudowanych i dodanych przez wtyczki typów podglądów.
- `name` to wyświetlana nazwa, która może być użyta do zdefiniowania domyślnego podglądu.
- `filters` działają dokładnie tak samo jak opisano powyżej, ale mają zastosowanie tylko do tego podglądu.
- `groupBy` określa właściwość i kierunek sortowania. Wartość podanej właściwości dla każdego wiersza służy do umieszczania wiersza w grupach.
- `summaries` mapuje nazwy właściwości na nazwane podsumowania. Podsumowania wykonują agregację właściwości we wszystkich wierszach.

[[Podglądy]] mogą dodawać dodatkowe dane do przechowywania wszelkich informacji potrzebnych do zachowania stanu lub prawidłowego renderowania, jednak autorzy wtyczek powinni unikać używania kluczy już wykorzystywanych przez podstawową wtyczkę Baz danych. Przykładowo podgląd tabeli może używać tego do ograniczenia liczby wierszy lub wyboru kolumny sortowania i jej kierunku. Inny typ podglądu, taki jak mapa, mógłby używać tego do mapowania, która właściwość notatki odpowiada szerokości i długości geograficznej, a która powinna być wyświetlana jako tytuł pinezki.

W przyszłości API pozwoli podglądom odczytywać i zapisywać te wartości, umożliwiając podglądowi budowanie własnego interfejsu konfiguracji.

## Atrybuty

W bazach danych używane są trzy rodzaje właściwości:

1. **Właściwości notatki**, przechowywane w metadanych początkowych plików Markdown.
2. **Właściwości pliku**, dostępne dla wszystkich typów plików.
3. **Właściwości wzorów**, zdefiniowane w samym pliku `.base` (patrz wyżej).

### Właściwości notatki

[[Atrybuty|Właściwości notatki]] są dostępne tylko dla plików Markdown i są przechowywane w metadanych początkowych YAML każdej notatki. Dostęp do tych właściwości można uzyskać w formacie `note.author` lub po prostu `author` jako skrót.

### Właściwości pliku

Właściwości pliku odnoszą się do aktualnie testowanego lub ewaluowanego pliku. Właściwości pliku są dostępne dla wszystkich [[Obsługiwane formaty plików|typów plików]], w tym załączników.

Na przykład filtr `file.ext == "md"` będzie prawdziwy dla wszystkich plików Markdown, a fałszywy w pozostałych przypadkach.

| Właściwość    | Typ    | Opis                                                          |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Lista  | Lista plików z linkami zwrotnymi. Uwaga: Ta właściwość jest wymagająca wydajnościowo. Gdy to możliwe, odwróć wyszukiwanie i użyj `file.links`. Nie odświeża automatycznie wyników po zmianie skarbca. |
| `file.ctime`  | Data   | Czas stworzenia                                               |
| `file.embeds` | Lista  | Lista wszystkich osadzeń w notatce                            |
| `file.ext`    | Ciąg   | Rozszerzenie pliku                                            |
| `file.file`   | Plik   | Obiekt pliku, używalny tylko w określonych funkcjach          |
| `file.folder` | Ciąg   | Ścieżka folderu pliku                                        |
| `file.links`  | Lista  | Lista wszystkich łączy wewnętrznych w notatce, w tym metadanych początkowych |
| `file.mtime`  | Data   | Czas modyfikacji                                              |
| `file.name`   | Ciąg   | Nazwa pliku                                                   |
| `file.path`   | Ciąg   | Ścieżka pliku                                                |
| `file.properties`   | Obiekt | Wszystkie właściwości pliku. Uwaga: Nie odświeża automatycznie wyników po zmianie skarbca. |
| `file.size`   | Liczba | Rozmiar pliku                                                 |
| `file.tags`   | Lista  | Lista wszystkich tagów w treści pliku i metadanych początkowych |

### Dostęp do właściwości za pomocą `this`

Użyj obiektu `this`, aby uzyskać dostęp do właściwości pliku. To, do czego odnosi się `this`, zależy od miejsca wyświetlania bazy danych.

Gdy baza jest otwarta w głównym obszarze treści, `this` wskazuje na właściwości samego pliku bazy danych. Na przykład użycie `this.file.folder` zwraca ścieżkę folderu, w którym znajduje się baza.

Gdy baza jest osadzona w innym pliku, `this` wskazuje na właściwości _osadzającego_ pliku (notatki lub Canvas, który zawiera bazę). Na przykład użycie `this.file.name` zwraca nazwę osadzającego pliku, a nie bazy.

Gdy baza znajduje się na pasku bocznym, `this` odnosi się do aktywnego pliku w głównym obszarze treści. Pozwala to tworzyć zapytania oparte na aktywnym pliku. Na przykład możesz użyć `file.hasLink(this.file)`, aby odtworzyć panel linków zwrotnych.

## Operatory

### Operatory arytmetyczne

Operatory arytmetyczne wykonują działania arytmetyczne na liczbach. Na przykład `radius * (2 * 3.14)`.

| Operator | Opis        |
| -------- | ----------- |
| `+`      | plus        |
| `-`      | minus       |
| `*`      | mnożenie    |
| `/`      | dzielenie   |
| `%`      | modulo      |
| `( )`    | nawiasy     |

### Arytmetyka dat

Daty można modyfikować, dodając i odejmując czas trwania. Jednostki czasu trwania akceptują wiele formatów:

| Jednostka                | Czas trwania |
| ------------------------ | ------------ |
| `y`, `year`, `years`     | rok          |
| `M`, `month`, `months`   | miesiąc      |
| `d`, `day`, `days`       | dzień        |
| `w`, `week`, `weeks`     | tydzień      |
| `h`, `hour`, `hours`     | godzina      |
| `m`, `minute`, `minutes` | minuta       |
| `s`, `second`, `seconds` | sekunda      |

Aby modyfikować lub przesuwać obiekty Date, użyj operatora `+` lub `-` z ciągiem czasu trwania. Na przykład `date + "1M"` dodaje 1 miesiąc do daty, a `date - "2h"` odejmuje 2 godziny od daty.

Globalna [[Funkcje|funkcja]] `today()` może być użyta do pobrania bieżącej daty, a `now()` do pobrania bieżącej daty z czasem.

- `now() + "1 day"` zwraca datę i czas dokładnie 24 godziny od momentu wykonania.
- `file.mtime > now() - "1 week"` zwraca `true`, jeśli plik został zmodyfikowany w ciągu ostatniego tygodnia.
- `date("2024-12-01") + "1M" + "4h" + "3m"` zwraca obiekt Date reprezentujący `2025-01-01 04:03:00`.
- Odejmij dwie daty, aby uzyskać różnicę w milisekundach między nimi, na przykład `now() - file.ctime`.
- Aby uzyskać część datową z daty z czasem, użyj `datetime.date()`.
- Aby sformatować obiekt Date, użyj funkcji `format()`, na przykład `datetime.format("YYYY-MM-DD")`.

### Operatory porównania

Operatory porównania mogą być używane do porównywania liczb lub obiektów Date. Równe i nierówne mogą być używane z dowolnym rodzajem wartości, nie tylko liczbami i datami.

| Operator | Opis                      |
| -------- | ------------------------- |
| `==`     | równe                     |
| `!=`     | nierówne                  |
| `>`      | większe niż               |
| `<`      | mniejsze niż              |
| `>=`     | większe lub równe         |
| `<=`     | mniejsze lub równe        |

### Operatory logiczne

Operatory logiczne mogą być używane do łączenia lub odwracania wartości logicznych, dając w wyniku wartość prawda lub fałsz.

| Operator | Opis        |
| -------- | ----------- |
| `!`      | logiczne NIE |
| `&&`     | logiczne I   |
| \|\|     | logiczne LUB |

## Funkcje

Zobacz [[Funkcje|listę funkcji]], które mogą być używane we wzorach i [[Podglądy|filtrach]].

## Typy

Bazy danych mają system typów, który jest używany przez wzory i filtry do stosowania funkcji na właściwościach.

### Ciągi znaków, liczby i wartości logiczne

Ciągi znaków, liczby i wartości logiczne to „prymitywne" wartości, które nie wymagają funkcji do utworzenia.

- Ciągi znaków są ujęte w pojedyncze lub podwójne cudzysłowy, na przykład `"message"`.
- Liczby są zapisywane jako cyfry i opcjonalnie mogą być ujęte w nawiasy dla przejrzystości. Na przykład `1` lub `(2.5)`.
- Wartości logiczne zapisuje się jako `true` lub `false` bez cudzysłowów.

### Daty i czas trwania

Daty reprezentują konkretną datę lub datę i czas, w zależności od funkcji użytej do ich utworzenia lub typu przypisanego do [[Atrybuty|właściwości]].

- Aby skonstruować datę, użyj funkcji `date`, na przykład `date("2025-01-01 12:00:00")`
- Aby zmodyfikować datę, dodaj lub odejmij czas trwania, na przykład `now() + "1 hour"` lub `today() + "7d"`
- Porównuj daty za pomocą operatorów porównania (np. `>` lub `<`) i operatorów arytmetycznych (na przykład `(now() + "1d") - now()` zwraca `86400000` milisekund).
- Aby wyodrębnić części daty, użyj dostępnych pól (`now().hour`) lub funkcji pomocniczych (`now.time()`).
- Wiele innych [[Funkcje|pól i funkcji]] jest dostępnych na obiektach daty.

### Obiekty i listy

- Zamień pojedynczy element na listę za pomocą funkcji `list()`. Jest to szczególnie przydatne w przypadku właściwości, które mogą zawierać mieszankę list i pojedynczych wartości.
- Dostęp do elementów listy uzyskuje się za pomocą nawiasów kwadratowych i indeksu zaczynającego się od 0. Na przykład `property[0]` zwraca pierwszy element z listy.
- Dostęp do elementów obiektu uzyskuje się za pomocą nawiasów kwadratowych i nazwy elementu lub notacji z kropką. Na przykład `property.subprop` lub `property["subprop"]`.

### Pliki i łącza

[[Łączenie notatek|Odnośniki wiki]] we [[Atrybuty|właściwościach metadanych początkowych]] są automatycznie rozpoznawane jako obiekty Link. Łącza będą renderowane jako klikalne linki w [[Podglądy|podglądzie]].

- Aby skonstruować łącze, użyj globalnej [[Funkcje|funkcji]] `link`, na przykład `link("filename")` lub `link("https://obsidian.md")`.
- Możesz utworzyć łącze z dowolnego ciągu znaków, na przykład `link(file.ctime.date().toString())`.
- Aby ustawić wyświetlany tekst, podaj opcjonalny ciąg znaków lub ikonę jako drugi parametr, na przykład `link("filename", "display")` lub `link("filename", icon("plus"))`.

Obiekt File można zamienić na łącze za pomocą `file.asLink()` z opcjonalnym wyświetlanym tekstem.

Łącza można porównywać za pomocą `==` i `!=`. Są równoważne, o ile wskazują na ten sam plik, a jeśli plik nie istnieje po wyszukaniu, ich tekst łącza musi być identyczny.

Łącza można porównywać z plikami, takimi jak `file` lub `this`. Będą równe, jeśli łącze prowadzi do tego pliku. Na przykład `author == this`.

Łącza można również sprawdzać w zawieraniu list, na przykład `authors.contains(this)`.
