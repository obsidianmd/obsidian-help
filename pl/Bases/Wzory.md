---
permalink: formulas
description: 'Formuły pozwalają tworzyć obliczane właściwości na podstawie danych z innych właściwości. Możesz wykonywać obliczenia, manipulować tekstem, pracować z datami i nie tylko.'
---
Wzory umożliwiają tworzenie obliczanych atrybutów w [[Wprowadzenie do Baz danych|Bazach danych]] z wykorzystaniem danych z innych [[Atrybuty|atrybutów]]. Możesz wykonywać obliczenia, manipulować tekstem, pracować z datami i nie tylko.

## Co potrafią wzory

Wzory mogą pomóc w:

- **Obliczaniu wartości** — dodawaniu cen, wyliczaniu sum lub wykonywaniu operacji matematycznych.
- **Manipulowaniu tekstem** — łączeniu ciągów, zmianie wielkości liter lub wyodrębnianiu podciągów.
- **Pracy z datami** — obliczaniu różnic czasu, formatowaniu dat lub wyznaczaniu terminów.
- **Stosowaniu logiki** — używaniu instrukcji warunkowych do wyświetlania różnych wartości.
- **Przetwarzaniu list** — filtrowaniu, sortowaniu, mapowaniu lub agregowaniu danych list.

## Tworzenie atrybutu wzoru

Aby stworzyć atrybut wzoru:

1. W bazie danych kliknij **Atrybuty** na pasku narzędzi.
2. Kliknij **Dodaj wzór** na dole menu.
3. Wpisz nazwę atrybutu wzoru.
4. Wpisz wzór w polu **Wzór**.
5. Zamknij okno dialogowe.

Edytor wzorów automatycznie uzupełnia nazwy [[Funkcje|funkcji]] i atrybutów podczas pisania, walidując składnię wzoru. Zielony znacznik pojawia się, gdy wzór jest poprawny.

Po utworzeniu możesz używać atrybutu wzoru jak każdego innego atrybutu w bazie danych. Dodawaj go do [[Podglądy|podglądów]], używaj w filtrach, sortuj według niego i nie tylko.

## Pisanie wzoru

W edytorze wzorów wpisz wyrażenie używając atrybutów, operatorów i funkcji.

### Odwoływanie się do atrybutów

W wzorach możesz odwoływać się do różnych typów atrybutów:

- **Atrybuty notatki** — Atrybuty z [[Atrybuty|metadanych początkowych]] notatki.
- **Atrybuty pliku** — Wbudowane atrybuty jak `file.name`, `file.size` lub `file.mtime`.
- **Atrybuty wzorów** — Inne wzory używając `formula.nazwa_wzoru`.

**Przykłady:**

- `price * quantity` — mnożenie dwóch atrybutów notatki
- `file.name + " - " + description` — połączenie nazwy pliku z atrybutem notatki
- `formula.price_per_unit * 1.1` — użycie innego atrybutu wzoru

### Używanie operatorów

**Operatory arytmetyczne** wykonują operacje matematyczne na liczbach:

- `price + tax` — dodawanie
- `price - discount` — odejmowanie
- `price * quantity` — mnożenie
- `price / quantity` — dzielenie
- `(part / whole) * 100` — użycie nawiasów dla kolejności operacji

**Operatory porównania** porównują wartości:

- `price > 100` — większe niż
- `age < 18` — mniejsze niż
- `status == "Done"` — równe
- `status != "Done"` — nierówne
- `file.mtime > now() - '7d'` — porównanie dat

**Operatory logiczne** łączą warunki logiczne:

- `!completed` — negacja
- `price > 0 && quantity > 0` — i
- `urgent || important` — lub

Dowiedz się więcej w [[Składnia Baz danych#Operatory|Składnia Baz danych]].

### Używanie funkcji

Funkcje wykonują operacje na wartościach. Dostępne funkcje zależą od typu wartości, z którą pracujesz. Zobacz pełną listę [[Funkcje|Funkcji]].

**Popularne kategorie funkcji:**

- **Funkcje globalne** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Funkcje tekstowe** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Funkcje liczbowe** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Funkcje dat** — `format()`, `relative()`, `date()`, `time()`
- **Funkcje list** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Przykłady:**

- `if(price, "$" + price.toFixed(2), "")` do definiowania warunku z formatowaniem liczb.
- `file.name.lower()` do konwersji na małe litery.
- `tags.contains("urgent")` do sprawdzenia, czy lista tagów zawiera wartość.
- `due_date.format("YYYY-MM-DD")` do formatowania daty.

## Przykłady wzorów

### Obliczanie terminu

Ustaw termin projektu na 2 tygodnie po dacie rozpoczęcia:

```js
start_date + "2w"
```

### Wyświetlanie statusu zaległości

Pokaż "Overdue" jeśli termin minął i status nie jest "Done":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formatowanie waluty

Wyświetl cenę z 2 miejscami po przecinku i symbolem waluty:

```js
if(price, "$" + price.toFixed(2), "")
```

### Zliczanie elementów listy

Policz liczbę elementów we właściwości listy:

```js
tasks.length
```

### Obliczanie wyniku priorytetu

Połącz wiele czynników w wynik priorytetu:

```js
(impact * urgency) / effort
```

### Łączenie pól tekstowych

Stwórz pełne imię z imienia i nazwiska:

```js
first_name + " " + last_name
```

### Obliczanie całkowitego kosztu

Pomnóż koszt miesięczny przez liczbę posiadanych miesięcy:

```js
monthlyUses * formula.Owned.round()
```

## Typy danych

Wzory pracują z różnymi typami danych:

- **Ciągi tekstowe** — Tekst ujęty w cudzysłowy: `"hello"` lub `'world'`
- **Liczby** — Wartości liczbowe: `42`, `3.14`, `(2 + 2)`
- **Wartości logiczne** — Prawda lub fałsz: `true`, `false`
- **Daty** — Tworzone za pomocą `date()`, `today()` lub `now()`
- **Listy** — Kolekcje wartości: `[1, 2, 3]`
- **Obiekty** — Pary klucz-wartość: `{"name": "value"}`

Typ wyjściowy wzoru jest określany przez dane i użyte funkcje.

## Odwoływanie się do innych wzorów

Wzory mogą odwoływać się do innych wzorów, tworząc obliczenia pochodne. Na przykład, jeśli masz wzór o nazwie `price_per_unit`:

```js
price / quantity
```

Możesz się do niego odwołać w innym wzorze:

```js
formula.price_per_unit * 1.1
```

> [!warning] Unikaj odwołań cyklicznych
> Wzór nie może odwoływać się do samego siebie bezpośrednio ani pośrednio przez inne wzory.
