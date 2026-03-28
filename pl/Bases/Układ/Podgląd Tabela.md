---
permalink: bases/views/table
---
Tabela to rodzaj [[Podglądy|podglądu]], którego możesz użyć w [[Wprowadzenie do Baz danych|Bazach danych]].

Wybierz ![[lucide-table.svg#icon]]  **Tabela** z menu podglądu, aby wyświetlić pliki jako tabelę z wierszem dla każdego pliku i kolumnami dla [[Atrybuty|atrybutów]] tego pliku.

![Przykład bazy danych pokazującej podgląd tabeli z listą książek](bases-noshadow.png#interface)

## Ustawienia

Ustawienia podglądu tabeli można skonfigurować w [[Podglądy#Ustawienia podglądu|Ustawieniach podglądu]].

### Wysokość wiersza

Wysokość wiersza pozwala wyświetlić więcej informacji. Wybierz między **krótki**, **średni**, **wysoki** i **bardzo wysoki**.

## Podsumowania

Możesz dodać podsumowania do kolumny tabeli, aby szybko obliczać wartości takie jak sumy, średnie lub liczby dla wierszy aktualnie widocznych w podglądzie.

Podsumowania są powiązane z podglądem, a nie z bazą. Każdy podgląd może wyświetlać różne podsumowania dla tej samej kolumny.

### Dodawanie podsumowania

1. Kliknij prawym przyciskiem myszy nagłówek kolumny w podglądzie tabeli.
2. Wybierz ![[lucide-calculator.svg#icon]] **Podsumuj…**.
3. Wybierz jedną z wbudowanych funkcji podsumowania lub wybierz ![[lucide-square-function.svg#icon]] **Dodaj podsumowanie**, aby zdefiniować własne.

Podsumowanie pojawia się na dole kolumny. Gdy wyniki są [[Podglądy#Sortowanie i grupowanie wyników|pogrupowane]], podsumowanie dla każdej grupy jest wyświetlane na górze grupy.

Po dodaniu paska podsumowania możesz dodać więcej podsumowań dla innych kolumn, klikając komórkę podsumowania. Pasek podsumowania jest ukryty, jeśli wszystkie podsumowania zostaną usunięte.

### Wbudowane podsumowania

Poniższe podsumowania są dostępne domyślnie. Opcje mogą się różnić w zależności od rodzaju atrybutu.

#### Wszystkie rodzaje atrybutów

- **Brak wartości**: liczba wierszy bez wartości.
- **Wypełnione**: liczba wierszy z wartością.
- **Niepowtarzalne**: liczba odrębnych wartości.

#### Liczby

- **Średnia**: średnia wszystkich wartości liczbowych.
- **Maks.**: największa wartość.
- **Mediana**: wartość mediany.
- **Min.**: najmniejsza wartość.
- **Zakres**: różnica między maks. a min.
- **Odch. std.**: odchylenie standardowe.
- **Suma**: suma wszystkich wartości.

#### Daty

- **Najwcześniejsza**: najmniejsza/najstarsza data.
- **Najpóźniejsza**: największa/najnowsza data.
- **Zakres**: różnica między najwcześniejszą a najpóźniejszą.

#### Pole wyboru

- **Zaznaczone**: liczba wierszy, w których pole wyboru jest włączone.
- **Niezaznaczone**: liczba wierszy, w których pole wyboru jest wyłączone.

### Niestandardowe podsumowania

Możesz zdefiniować własne podsumowanie za pomocą wzoru:

1. W menu ![[lucide-calculator.svg#icon]] **Podsumuj…** wybierz ![[lucide-square-function.svg#icon]] **Dodaj podsumowanie**.
2. Nadaj podsumowaniu nazwę.
3. Wprowadź wzór. Wzór jest wykonywany na liście wartości w danej kolumnie (na przykład za pomocą [[Funkcje|funkcji]] takiej jak `values.reduce(...)`).
4. Zapisz podsumowanie.

Niestandardowe podsumowania są przydatne, gdy potrzebujesz obliczenia, które nie jest objęte wbudowanymi opcjami.

## Skróty

Możesz szybko poruszać się po podglądzie tabeli, korzystając z poniższych skrótów myszy i [[Skróty edycji|skrótów klawiszowych]].

- Shift-kliknięcie tworzy zaznaczenie komórek.
- Kliknij prawym przyciskiem myszy zaznaczenie komórek, aby uzyskać dostęp do dodatkowych akcji dla tych plików.

| Akcja                                                                                                                          | Skrót               | macOS              |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ------------------ |
| Kopiuj zaznaczone komórki                                                                                                      | `Ctrl+C`            | `Cmd+C`            |
| Wklej zaznaczone komórki                                                                                                       | `Ctrl+V`            | `Cmd+V`            |
| Cofnij zmiany atrybutów                                                                                                        | `Ctrl+Z`            | `Cmd+Z`            |
| Ponów zmiany atrybutów                                                                                                         | `Ctrl+Shift+Z`      | `Cmd+Shift+Z`      |
| Zaznacz wszystkie komórki w bieżącej grupie                                                                                    | `Ctrl+A`            | `Cmd+A`            |
| Zaznacz wszystkie komórki w danym kierunku                                                                                     | `Ctrl+Shift+Arrow`  | `Ctrl+Shift+Arrow` |
| Zaznacz kolumnę                                                                                                                | `Ctrl+Space`        |                    |
| Zaznacz wiersz                                                                                                                 | `Shift+Space`       |                    |
| Aktywuj bieżącą komórkę — dla pól wyboru przełącza pole wyboru, dla wzorów otwiera edytor wzorów                              | `Enter`             |                    |
| Przejdź do pierwszej kolumny                                                                                                   | `Home`              |                    |
| Przejdź do ostatniej kolumny                                                                                                   | `End`               |                    |
| Nawiguj w górę i w dół o wysokość strony                                                                                       | `PageUp`,`PageDown` |                    |
| Wyczyść bieżące zaznaczenie komórek                                                                                            | `Esc`               |                    |
| Wyczyść bieżące komórki                                                                                                        | `Backspace`         |                    |
| Przejdź do następnej komórki                                                                                                   | `Tab`               |                    |
| Przejdź do poprzedniej komórki                                                                                                 | `Shift-Tab`         |                    |
