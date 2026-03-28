---
permalink: bases/views
---
Podglądy pozwalają organizować informacje w [[Wprowadzenie do Baz danych|bazie danych]] na wiele sposobów. Baza może zawierać kilka podglądów, a każdy podgląd może mieć unikalną konfigurację wyświetlania, sortowania i filtrowania plików.

Na przykład możesz chcieć stworzyć bazę o nazwie „Książki", która ma osobne podglądy dla „Listy do przeczytania" i „Ostatnio ukończone".

## Pasek narzędzi

Na górze bazy znajduje się pasek narzędzi, który umożliwia interakcję z podglądami i ich wynikami.

- ![[lucide-table.svg#icon]] **Menu podglądów** — tworzenie, edytowanie i przełączanie podglądów.
- **Wyniki** — ograniczanie, kopiowanie i eksportowanie plików.
- ![[lucide-arrow-up-down.svg#icon]] **Sortuj** — sortowanie i grupowanie plików.
- ![[lucide-list-filter.svg#icon]] **Filtr** — filtrowanie plików.
- ![[lucide-list.svg#icon]] **Atrybuty** — wybór atrybutów do wyświetlania i tworzenie [[Wzory|wzorów]].
- ![[lucide-search.svg#icon]] **Szukaj** — wyszukiwanie elementów na podstawie wyświetlanych atrybutów.
- ![[lucide-plus.svg#icon]] **Nowe** — tworzenie nowego pliku w bieżącym podglądzie.

## Dodawanie i przełączanie podglądów

Istnieją dwa sposoby dodania podglądu do bazy:

- Kliknij nazwę podglądu w lewym górnym rogu i wybierz ![[lucide-plus.svg#icon]] **Dodaj podgląd**.
- Użyj [[Lista poleceń|palety poleceń]] i wybierz **Bazy danych: Dodaj podgląd**.

Pierwszy podgląd na liście podglądów będzie wczytywany domyślnie. Przeciągaj podglądy za ich ikonę, aby zmienić ich kolejność.

## Ustawienia podglądu

Każdy podgląd ma własne opcje konfiguracji. Aby edytować ustawienia podglądu:

1. Kliknij nazwę podglądu w lewym górnym rogu.
2. Kliknij strzałkę w prawo obok podglądu, który chcesz skonfigurować.

Alternatywnie *kliknij prawym przyciskiem myszy* nazwę podglądu na pasku narzędzi bazy, aby szybko uzyskać dostęp do ustawień podglądu.

## Układ

Podglądy mogą być wyświetlane z różnymi układami, w tym jako ![[lucide-table.svg#icon]] **tabela**, ![[lucide-list.svg#icon]] **lista**, ![[lucide-layout-grid.svg#icon]] **karty** i ![[lucide-map.svg#icon]] **mapa**. Dodatkowe układy mogą być dodawane przez [[Wtyczki społeczności]]. Niektóre układy są wciąż rozwijane i wymagają [[Wersje wczesnego dostępu|wersji wczesnego dostępu]] Obsidian.

| Układ                           | Opis                                                                                                                       | Wersja&nbsp;aplikacji |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [[Podgląd Tabela\|Tabela]]     | Wyświetla pliki jako wiersze w tabeli. Kolumny są wypełniane z [[Atrybuty|atrybutów]] w notatkach.                         | 1.9                   |
| [[Podgląd Karty\|Karty]]       | Wyświetla pliki jako siatkę kart. Pozwala tworzyć podglądy typu galeria z obrazami.                                       | 1.9                   |
| [[Podgląd Lista\|Lista]]       | Wyświetla pliki jako [[Podstawowa składnia formatowania#Listy\|listę]] z wypunktowanymi lub numerowanymi znacznikami.       | 1.10                  |
| [[Podgląd Mapa\|Mapa]]         | Wyświetla pliki jako pinezki na interaktywnej mapie. Wymaga wtyczki Mapy.                                                  | 1.10                  |


## Filtry

Otwórz menu ![[lucide-list-filter.svg#icon]] **Filtr** na górze bazy, aby dodać filtry.

Baza bez filtrów pokazuje wszystkie pliki w skarbcu. Filtry zawężają wyniki, aby wyświetlać tylko pliki spełniające określone kryteria. Na przykład możesz użyć filtrów, aby wyświetlać tylko pliki z określonym [[Tagi|tagiem]] lub w określonym folderze. Dostępnych jest wiele typów filtrów.

Filtry mogą być stosowane do wszystkich podglądów w bazie lub tylko do jednego podglądu, wybierając z dwóch sekcji w menu ![[lucide-list-filter.svg#icon]] **Filtr**.

- **Wszystkie podglądy** stosuje filtry do wszystkich podglądów w bazie.
- **Ten podgląd** stosuje filtry do aktywnego podglądu.

#### Komponenty filtra

Filtry mają trzy komponenty:

1. **Atrybut** — pozwala wybrać [[Atrybuty|atrybut]] w skarbcu, w tym [[Składnia Baz danych#Atrybuty|atrybuty plików]].
2. **Operator** — pozwala wybrać sposób porównywania warunków. Lista dostępnych operatorów zależy od rodzaju atrybutu (tekst, data, liczba itp.).
3. **Wartość** — pozwala wybrać wartość do porównania. Wartości mogą zawierać wyrażenia matematyczne i [[Funkcje|funkcje]].

#### Spójniki

- **Każde z poniższych stwierdzeń jest prawdziwe** to instrukcja `i` — wyniki będą wyświetlane tylko wtedy, gdy *wszystkie* warunki w grupie filtrów są spełnione.
- **Którekolwiek z poniższych stwierdzeń jest prawdziwe** to instrukcja `lub` — wyniki będą wyświetlane, jeśli *którykolwiek* z warunków w grupie filtrów jest spełniony.
- **Żadne z poniższych stwierdzeń nie jest prawdziwe** to instrukcja `nie` — wyniki nie będą wyświetlane, jeśli *którykolwiek* z warunków w grupie filtrów jest spełniony.

#### Grupy filtrów

Grupy filtrów pozwalają tworzyć bardziej złożoną logikę przez tworzenie kombinacji spójników.

#### Zaawansowany edytor filtrów

Kliknij przycisk kodu ![[lucide-code-xml.svg#icon]], aby użyć edytora **filtrowania zaawansowanego**. Wyświetla on surową [[Składnia Baz danych|składnię]] filtra i może być używany z bardziej złożonymi [[Funkcje|funkcjami]], których nie można wyświetlić za pomocą interfejsu graficznego.

## Sortowanie i grupowanie wyników

Otwórz menu ![[lucide-arrow-up-down.svg#icon]] **Sortuj**, aby sortować i grupować wyniki w podglądzie.

Możesz ułożyć wyniki według jednego lub więcej atrybutów w kolejności rosnącej lub malejącej. Ułatwia to wyświetlanie notatek według nazwy, czasu ostatniej edycji lub dowolnego innego atrybutu — w tym wzorów.

Możesz również grupować wyniki według atrybutu, aby organizować podobne elementy w wizualnie wyodrębnione sekcje. Obecnie Obsidian obsługuje grupowanie tylko według jednego atrybutu.

### Dodawanie sortowania

1. Otwórz menu ![[lucide-arrow-up-down.svg#icon]] **Sortuj** na górze podglądu.
2. Wybierz atrybut, według którego chcesz sortować (lub grupować).
3. Jeśli masz wiele sortowań, przeciągnij je w górę lub w dół za pomocą uchwytu ![[lucide-grip-vertical.svg#icon]], aby zmienić ich priorytet.

Opcje porządkowania wyników zależą od rodzaju atrybutu:

- **Tekst**: sortowanie *alfabetycznie* (A→Z) lub w *odwrotnej kolejności alfabetycznej* (Z→A).
- **Liczba**: sortowanie od *najmniejszej do największej* (0→1) lub od *największej do najmniejszej* (1→0).
- **Data i czas**: sortowanie *od najstarszych* lub *od najnowszych*.

### Usuwanie sortowania

1. Otwórz menu ![[lucide-arrow-up-down.svg#icon]] **Sortuj** na górze podglądu.
2. Kliknij przycisk kosza ![[lucide-trash-2.svg#icon]] obok sortowania lub grupowania, które chcesz usunąć.

## Ograniczanie, kopiowanie i eksportowanie wyników

### Ograniczanie wyników

Menu *wyników* pokazuje liczbę wyników w podglądzie. Kliknij przycisk wyników, aby ograniczyć liczbę wyników i uzyskać dostęp do dodatkowych akcji.

### Kopiuj do schowka

Ta akcja kopiuje podgląd do schowka. Po skopiowaniu do schowka możesz wkleić go do pliku Markdown lub do innych aplikacji do edycji dokumentów, w tym arkuszy kalkulacyjnych takich jak Google Sheets, Excel i Numbers.

### Eksportuj CSV

Ta akcja zapisuje plik CSV bieżącego podglądu.

## Osadzanie podglądu

Możesz osadzać pliki baz danych w [[Osadzanie plików|dowolnym innym pliku]] za pomocą składni `![[Plik.base]]`. Użyty zostanie pierwszy podgląd na liście. Możesz zmienić kolejność, przeciągając podglądy w menu podglądów.

Aby określić domyślny podgląd dla osadzenia, użyj `![[Plik.base#Podgląd]]`.
