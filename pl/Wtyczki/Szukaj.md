---
permalink: plugins/search
publish: true
mobile: true
description: 'Wyszukiwanie to podstawowa wtyczka, która pomaga znajdować dane w Twoim sejfie Obsidian za pomocą wyszukiwanych fraz i operatorów w celu zawężenia wyników.'
---
Szukaj to [[Wbudowane wtyczki|wtyczka podstawowa]], która pomaga odnajdywać dane w skarbcu Obsidian za pomocą wyszukiwanych fraz i operatorów zawężających wyniki.

Domyślnie Szukaj znajduje się w lewym pasku bocznym ![[lucide-search.svg#icon]]. Możesz również otworzyć Szukaj, naciskając `Ctrl+Shift+F` (Windows/Linux) lub `Command+Shift+F` (macOS).

- **Wyszukiwanie zaznaczonego tekstu**: Jeśli zaznaczysz tekst w edytorze i otworzysz Szukaj za pomocą skrótu klawiszowego, zostaną wyświetlone wyniki wyszukiwania dla zaznaczonego tekstu.
- **Wyszukiwanie ostatnich fraz**: Otwórz Szukaj z pustą frazą wyszukiwania, aby wyświetlić listę ostatnio używanych fraz. Kliknij dowolną z nich, aby użyć jej ponownie.

> [!info] Pominięte pliki
> Pliki pasujące do wzorców w [[Ustawienia#Pominięte pliki|Pominiętych plikach]] nie będą wyświetlane w wynikach wyszukiwania.

## Frazy wyszukiwania

Fraza wyszukiwania to słowo lub wyrażenie, które wpisujesz w pole wyszukiwania. Umiejętność efektywnego tworzenia fraz wyszukiwania pomoże Ci szybko znaleźć to, czego szukasz, nawet w dużych skarbcach. Obsidian przeszukuje wyłącznie zawartość notatek i tablic Canvas.

> [!tip]- Wyszukiwanie ścieżek i nazw plików
> Domyślnie możesz wyszukiwać tylko ścieżki i nazwy plików notatek oraz tablic Canvas. Aby wyszukać ścieżkę lub nazwę dowolnego pliku w skarbcu, użyj operatora `path` lub `file`.

Każde słowo we frazie wyszukiwania jest dopasowywane niezależnie w każdym pliku. Aby wyszukać dokładną frazę, otocz ją cudzysłowami, na przykład `"star wars"`. Aby wyszukać tekst w cudzysłowach wewnątrz dokładnej frazy, możesz _wyeskejpować_ cudzysłowy, dodając przed nimi ukośnik wsteczny (`\`), na przykład `"they said \"hello\" to each other"`.

Możesz kontrolować, czy mają być zwracane pliki zawierające _wszystkie_ słowa z frazy wyszukiwania, czy _dowolne_ z nich:

- `meeting work` zwraca pliki zawierające zarówno `meeting`, jak i `work`.
- `meeting OR work` zwraca pliki zawierające `meeting` lub `work`.

Możesz nawet łączyć oba podejścia w tej samej frazie wyszukiwania.

- `meeting work OR meetup personal` zwraca pliki dotyczące spotkań służbowych i spotkań prywatnych.

Możesz używać nawiasów, aby kontrolować priorytet każdego wyrażenia.

- `meeting (work OR meetup) personal` zwraca pliki zawierające `meeting`, `personal` oraz `work` lub `meetup`.

Aby wykluczyć lub zanegować słowo z wyników wyszukiwania, dodaj przed nim łącznik (`-`):

- `meeting -work` zwraca pliki zawierające `meeting`, ale nie `work`.

Możesz wykluczać wiele wyrażeń:

- `meeting -work -meetup` zwraca pliki zawierające `meeting`, ale nie `work` ani `meetup`.

Możesz wykluczać kombinację wyrażeń za pomocą nawiasów:

- `meeting -(work meetup)` zwraca pliki zawierające `meeting`, ale nie _jednocześnie_ `work` i `meetup`.

Aby filtrować wyniki za pomocą operatorów mniejszy niż (`<`) i większy niż (`>`), otocz je nawiasami kwadratowymi (`[]`) lub cudzysłowami (`""`):

- `meeting [duration:<5]` zwraca pliki, w których występuje meeting, a duration jest mniejsze niż 5.
- `meeting [duration:>5]` zwraca pliki, w których występuje meeting, a duration jest większe niż 5.

> [!tip]- Wyjaśnij frazę wyszukiwania
> Jeśli musisz debugować złożoną frazę wyszukiwania, możesz kliknąć **Wyjaśnij frazę wyszukiwania** w Szukaj, aby uzyskać wyjaśnienie frazy.

## Operatory wyszukiwania

Operatory wyszukiwania umożliwiają bardziej precyzyjne frazy wyszukiwania, aby jeszcze dokładniej filtrować wyniki.

Niektóre operatory pozwalają nawet dodać zagnieżdżoną frazę wyszukiwania w nawiasach, na przykład: `task:(call OR email)`.

| Operator wyszukiwania | Opis                                                                                                                                                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file:`               | Wyszukuje tekst w nazwie pliku. Dopasowuje dowolny plik w skarbcu.<p/>Przykład: `file:.jpg` lub `file:202209`.                                                                                                                                                                                                         |
| `path:`               | Wyszukuje tekst w ścieżce pliku. Dopasowuje dowolny plik w skarbcu.<p/>Przykład: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                         |
| `content:`            | Wyszukuje tekst w zawartości pliku.<p/>Przykład: `content:"happy cat"`.                                                                                                                                                                                                                                                |
| `match-case:`         | Dopasowanie z rozróżnianiem wielkości liter.<p/>Przykład: `match-case:HappyCat`.                                                                                                                                                                                                                                       |
| `ignore-case:`        | Dopasowanie bez rozróżniania wielkości liter.<p/>Przykład: `ignore-case:ikea`.                                                                                                                                                                                                                                         |
| `tag:`                | Wyszukuje tag w pliku.<p/>Przykład: `tag:#work`.<p/>Pamiętaj, że wyszukiwanie `tag:#work` nie zwróci wyników dla `#myjob/work`.<br /><br />**Uwaga**: Ponieważ `tag:` ignoruje dopasowania w blokach kodu i w zawartości innej niż Markdown, jest często szybsze i dokładniejsze niż zwykłe wyszukiwanie pełnotekstowe `#work`. |
| `line:`               | Wyszukuje pliki zawierające co najmniej jedną linię pasującą do `x`.<p/>Przykład: `line:(mix flour)`.<p/><br>**Uwaga:** Użycie `-line` neguje wyszukiwanie, co oznacza, że znajdzie pliki, w których żadna linia nie pasuje do `x`.                                                                                     |
| `block:`              | Wyszukuje dopasowania w tym samym bloku.<p/>Przykład: `block:(dog cat)`.<p/>**Uwaga**: Ponieważ `block:` wymaga od Szukaj parsowania zawartości Markdown w każdym pliku, fraza wyszukiwania może potrzebować więcej czasu na zakończenie.                                                                                |
| `section:`            | Wyszukuje dopasowania w tej samej sekcji (tekst między dwoma nagłówkami).<p/>Przykład: `section:(dog cat)`.                                                                                                                                                                                                             |
| `task:`               | Wyszukuje dopasowania w [[Podstawowa składnia formatowania#Listy zadań\|zadaniu]] na zasadzie blok po bloku.<p/>Przykład: `task:call`.                                                                                                                                                                                  |
| `task-todo:`          | Wyszukuje dopasowania w *nieukończonym* [[Podstawowa składnia formatowania#Listy zadań\|zadaniu]] na zasadzie blok po bloku.<p/>Przykład: `task-todo:call`.                                                                                                                                                             |
| `task-done:`          | Wyszukuje dopasowania w *ukończonym* [[Podstawowa składnia formatowania#Listy zadań\|zadaniu]] na zasadzie blok po bloku.<p/>Przykład: `task-done:call`.                                                                                                                                                                |

## Wyszukiwanie atrybutów

Możesz używać danych przechowywanych w [[Atrybuty|atrybutach]] w swoich frazach wyszukiwania.

Użyj nawiasów kwadratowych wokół nazwy atrybutu `[atrybut]`, aby zwrócić pliki zawierające ten atrybut:

- `[aliases]` zwraca pliki zawierające atrybut `aliases`

Użyj nawiasów kwadratowych i dwukropka `[atrybut:wartość]`, aby zwrócić pliki z danym atrybutem i wartością:

- `[aliases:Name]` zwraca pliki, w których wartość atrybutu `aliases` to `Name`

Użyj `null` jako wartości, aby znaleźć atrybuty bez wartości:

- `[aliases:null]` zwraca pliki, w których atrybut `aliases` istnieje, ale nie ma wartości

> [!info]+ Puste wartości
> Operator `null` działa, gdy atrybut jest pusty (np. `aliases: `), ale nie gdy atrybut zawiera puste cudzysłowy (`""`) lub puste nawiasy kwadratowe (`[]`).

Zarówno atrybut, jak i wartość pozwalają na podzapytania, takie jak nawiasy do grupowania, operator `OR`, cudzysłowy do dokładnego dopasowania oraz wyrażenia regularne.

- `[status:Draft OR Published]` zwraca pliki, w których wartość atrybutu `status` to `Draft` lub `Published`

## Zmiana rozróżniania wielkości liter

Domyślnie frazy wyszukiwania nie rozróżniają wielkości liter. Jeśli chcesz wyszukiwać z dokładnym rozróżnianiem wielkości liter, wybierz **Rozróżniaj wielkość liter** ![[obsidian-icon-upper-lowercase.svg#icon]] wewnątrz paska wyszukiwania.

To ustawienie można przełączać. Jeśli ikona **Rozróżniaj wielkość liter** jest podświetlona, oznacza to, że aktualnie wyszukujesz z rozróżnianiem wielkości liter.

## Zmiana kolejności sortowania wyników

1. Wpisz [[#Frazy wyszukiwania|frazę wyszukiwania]].
2. Pod polem wyszukiwania wybierz listę rozwijaną po prawej stronie.
3. Wybierz żądaną kolejność sortowania. Domyślna to „wg nazwy (od A do Z)".

Dostępne są następujące opcje:

- wg nazwy (od A do Z)
- wg nazwy (od Z do A)
- wg daty edycji (od najnowszych)
- wg daty edycji (od najstarszych)
- wg daty utworzenia (od najnowszych)
- wg daty utworzenia (od najstarszych)

## Kopiowanie wyników wyszukiwania

1. Wpisz [[#Frazy wyszukiwania|frazę wyszukiwania]].
2. Pod polem wyszukiwania wybierz ikonę trzech kropek obok liczby wyników.
3. Wybierz **Kopiuj wyniki wyszukiwania**.

## Używanie wyrażeń regularnych

Wyrażenie regularne to zestaw znaków opisujących wzorzec tekstowy. Aby użyć wyrażeń regularnych we frazie wyszukiwania, otocz wyrażenie ukośnikami (`/`).

- `/\d{4}-\d{2}-\d{2}/` dopasowuje datę w formacie ISO 8601, np. 2022-01-01.

Możesz nawet łączyć wyrażenia regularne z operatorami wyszukiwania:

- `path:/\d{4}-\d{2}-\d{2}/` zwraca pliki z datą w ścieżce pliku.

Aby uzyskać więcej informacji o pisaniu wyrażeń regularnych, zapoznaj się z [praktycznym przewodnikiem po wyrażeniach regularnych](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) na FreeCodeCamp lub [dokumentacją wyrażeń regularnych](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) na Mozilla.

> [!info]+ Wyrażenia regularne w stylu JavaScript
> Wyrażenia regularne występują w różnych odmianach, które mogą się od siebie różnić. Obsidian używa wyrażeń regularnych w stylu JavaScript.

## Konfiguracja ustawień wyszukiwania

Aby skonfigurować Szukaj, wybierz **Ustawienia wyszukiwania** ![[lucide-sliders-horizontal.svg#icon]] po prawej stronie paska wyszukiwania, aby zobaczyć przełączniki.

| Ustawienie                       | Opis                                                                           |
|----------------------------------|--------------------------------------------------------------------------------|
| **Wyjaśnij frazę wyszukiwania** | Rozkłada frazę wyszukiwania i wyjaśnia ją zwykłym tekstem.                     |
| **Zwiń wyniki wyszukiwania**     | Przełącza, czy wyświetlać kontekst wyszukiwania.                               |
| **Pokaż dodatkowy kontekst**     | Rozwija wynik wyszukiwania, aby pokazać więcej tekstu wokół dopasowania.        |

## Osadzanie wyników wyszukiwania w notatce

Aby osadzić wyniki wyszukiwania w notatce, dodaj blok kodu `query`:

````
```query
embed OR search
```
````

[[Wprowadzenie do Obsidian Publish|Obsidian Publish]] nie obsługuje osadzonych [[Ograniczenia Publish#Szukaj|wyników wyszukiwania]]. Aby zobaczyć wyrenderowany przykład na żywo, użyj powyższego bloku kodu w swoim skarbcu.

![[search-query-rendered.png]]
