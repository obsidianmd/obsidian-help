---
permalink: bases/views
---
Widoki pozwalają organizować informacje w [[Wprowadzenie do baz danych|bazie danych]] na wiele sposobów. Baza może zawierać kilka widoków, a każdy widok może mieć unikalną konfigurację wyświetlania, sortowania i filtrowania plików.

Na przykład możesz chcieć utworzyć bazę o nazwie „Książki”, która ma osobne widoki dla „Listy do przeczytania” i „Ostatnio ukończone”.

## Pasek narzędzi

Na górze bazy znajduje się pasek narzędzi, który umożliwia interakcję z widokami i ich wynikami.

- ![[lucide-table.svg#icon]] **Menu widoków** — tworzenie, edytowanie i przełączanie widoków.
- **Wyniki** — ograniczanie, kopiowanie i eksportowanie plików.
- ![[lucide-arrow-up-down.svg#icon]] **Sortuj** — sortowanie plików.
- ![[lucide-stretch-horizontal.svg#icon]] **Grupuj** — grupowanie plików oraz zarządzanie kolejnością i widocznością grup.
- ![[lucide-list-filter.svg#icon]] **Filtr** — filtrowanie plików.
- ![[lucide-list.svg#icon]] **Atrybuty** — wybór atrybutów do wyświetlania i tworzenie [[Wzory|wzorów]].
- ![[lucide-search.svg#icon]] **Szukaj** — wyszukiwanie elementów na podstawie wyświetlanych atrybutów.
- ![[lucide-plus.svg#icon]] **Nowe** — tworzenie nowego pliku w bieżącym widoku.

Na telefonach opcje **Wyniki**, **Sortuj**, ![[lucide-stretch-horizontal.svg#icon]] **Grupuj** i **Atrybuty** znajdują się w menu ![[lucide-sliders-horizontal.svg#icon]] **Wyświetlanie**.

## Dodawanie i przełączanie widoków

Istnieją dwa sposoby dodania widoku do bazy:

- Kliknij nazwę widoku w lewym górnym rogu i wybierz ![[lucide-plus.svg#icon]] **Dodaj widok**.
- Użyj [[Paleta poleceń|palety poleceń]] i wybierz **Bazy danych: Dodaj widok**.

Pierwszy widok na liście widoków będzie wczytywany domyślnie. Przeciągaj widoki za ich ikonę, aby zmienić ich kolejność.

## Ustawienia widoku

Każdy widok ma własne opcje konfiguracji. Aby edytować ustawienia widoku:

1. Kliknij nazwę widoku w lewym górnym rogu.
2. Kliknij strzałkę w prawo obok widoku, który chcesz skonfigurować.

Alternatywnie *kliknij prawym przyciskiem myszy* nazwę widoku na pasku narzędzi bazy, aby szybko uzyskać dostęp do ustawień widoku.

## Układ

Widoki mogą być wyświetlane z różnymi układami, w tym jako ![[lucide-table.svg#icon]] **tabela**, ![[lucide-list.svg#icon]] **lista**, ![[lucide-layout-grid.svg#icon]] **karty**, ![[lucide-kanban-square.svg#icon]] **Kanban** i ![[lucide-map.svg#icon]] **mapa**. Dodatkowe układy mogą być dodawane przez [[Wtyczki społeczności]].

| Układ                           | Opis                                                                                                                       | Wersja&nbsp;aplikacji |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [[Widok tabeli\|Tabela]]     | Wyświetla pliki jako wiersze w tabeli. Kolumny są wypełniane z [[Atrybuty|atrybutów]] w notatkach.                         | 1.9                   |
| [[Widok kart\|Karty]]       | Wyświetla pliki jako siatkę kart. Pozwala tworzyć widoki typu galeria z obrazami.                                       | 1.9                   |
| [[Widok listy\|Lista]]       | Wyświetla pliki jako [[Podstawowa składnia formatowania#Listy\|listę]] z wypunktowanymi lub numerowanymi znacznikami.       | 1.10                  |
| [[Widok Kanban\|Kanban]]     | Wyświetla pliki jako karty zorganizowane w kolumny na podstawie zgrupowanego atrybutu.                                     | 1.14                  |
| [[Widok mapy\|Mapa]]         | Wyświetla pliki jako pinezki na interaktywnej mapie. Wymaga wtyczki Mapy.                                                  | 1.10                  |


## Filtry

Otwórz menu ![[lucide-list-filter.svg#icon]] **Filtr** na górze bazy, aby dodać filtry.

Baza bez filtrów pokazuje wszystkie pliki w sejfie. Filtry zawężają wyniki, aby wyświetlać tylko pliki spełniające określone kryteria. Na przykład możesz użyć filtrów, aby wyświetlać tylko pliki z określonym [[Tagi|tagiem]] lub w określonym folderze. Dostępnych jest wiele typów filtrów.

Filtry mogą być stosowane do wszystkich widoków w bazie lub tylko do jednego widoku, wybierając z dwóch sekcji w menu ![[lucide-list-filter.svg#icon]] **Filtr**.

- **Wszystkie widoki** stosuje filtry do wszystkich widoków w bazie.
- **Ten widok** stosuje filtry do aktywnego widoku.

#### Komponenty filtra

Filtry mają trzy komponenty:

1. **Atrybut** — pozwala wybrać [[Atrybuty|atrybut]] w sejfie, w tym [[Składnia baz danych#Atrybuty|atrybuty plików]].
2. **Operator** — pozwala wybrać sposób porównywania warunków. Lista dostępnych operatorów zależy od rodzaju atrybutu (tekst, data, liczba itp.).
3. **Wartość** — pozwala wybrać wartość do porównania. Wartości mogą zawierać wyrażenia matematyczne i [[Funkcje|funkcje]].

#### Spójniki

- **Wszystkie poniższe warunki są spełnione** to instrukcja `i` — wyniki będą wyświetlane tylko wtedy, gdy *wszystkie* warunki w grupie filtrów są spełnione.
- **Co najmniej jeden z poniższych warunków jest spełniony** to instrukcja `lub` — wyniki będą wyświetlane, jeśli *którykolwiek* z warunków w grupie filtrów jest spełniony.
- **Żaden z poniższych warunków nie jest spełniony** to instrukcja `nie` — wyniki nie będą wyświetlane, jeśli *którykolwiek* z warunków w grupie filtrów jest spełniony.

#### Grupy filtrów

Grupy filtrów pozwalają tworzyć bardziej złożoną logikę przez tworzenie kombinacji spójników.

#### Zaawansowany edytor filtrów

Kliknij przycisk kodu ![[lucide-code-xml.svg#icon]], aby użyć edytora **filtrowania zaawansowanego**. Wyświetla on surową [[Składnia baz danych|składnię]] filtra i może być używany z bardziej złożonymi [[Funkcje|funkcjami]], których nie można wyświetlić za pomocą interfejsu graficznego.

## Sortowanie i grupowanie wyników

Użyj menu ![[lucide-arrow-up-down.svg#icon]] **Sortuj**, aby ułożyć wyniki, oraz menu ![[lucide-stretch-horizontal.svg#icon]] **Grupuj**, aby organizować podobne elementy w sekcje.

Możesz ułożyć wyniki według jednego lub więcej atrybutów w kolejności rosnącej lub malejącej. Ułatwia to wyświetlanie notatek według nazwy, czasu ostatniej edycji lub dowolnego innego atrybutu — w tym wzorów.

Każdy widok może mieć kilka sortowań, ale grupować wyniki można tylko według jednego atrybutu.

### Dodawanie sortowania

1. Otwórz menu ![[lucide-arrow-up-down.svg#icon]] **Sortuj** na górze widoku.
2. Wybierz **Dodaj sortowanie**, a następnie wybierz atrybut, według którego chcesz sortować.
3. Jeśli masz wiele sortowań, przeciągnij je w górę lub w dół za pomocą uchwytu ![[lucide-grip-vertical.svg#icon]], aby zmienić ich priorytet.

Opcje porządkowania wyników zależą od rodzaju atrybutu:

- **Tekst**: sortowanie *alfabetycznie* (A→Z) lub w *odwrotnej kolejności alfabetycznej* (Z→A).
- **Liczba**: sortowanie od *najmniejszej do największej* (0→1) lub od *największej do najmniejszej* (1→0).
- **Data i czas**: sortowanie *od najstarszych* lub *od najnowszych*.

### Usuwanie sortowania

1. Otwórz menu ![[lucide-arrow-up-down.svg#icon]] **Sortuj** na górze widoku.
2. Kliknij przycisk kosza ![[lucide-trash-2.svg#icon]] obok sortowania, które chcesz usunąć.

### Grupowanie wyników

1. Otwórz menu ![[lucide-stretch-horizontal.svg#icon]] **Grupuj** na górze widoku. Na telefonach otwórz **Wyświetlanie → Grupuj**.
2. W sekcji **Grupuj według** wybierz atrybut.
3. Wybierz automatyczną kolejność sortowania lub wybierz **Ręcznie**, aby samodzielnie uporządkować grupy.

Aby zaprzestać grupowania wyników, kliknij przycisk kosza ![[lucide-trash-2.svg#icon]] obok atrybutu grupowania.

### Zmiana kolejności, ukrywanie i dodawanie grup

W menu ![[lucide-stretch-horizontal.svg#icon]] **Grupuj** wybierz **Ręcznie** z menu kolejności sortowania, aby zarządzać wyświetlanymi grupami i ich kolejnością.

- Zaznacz grupę, aby ją wyświetlić, lub odznacz, aby ją ukryć. Wybierz **Pokaż wszystko** lub **Ukryj wszystko**, aby zmienić widoczność wszystkich grup.
- Przeciągnij uchwyt ![[lucide-grip-vertical.svg#icon]] obok grupy, aby zmienić jej pozycję.
- Wybierz **Dodaj grupę** i wprowadź wartość, aby wyświetlić nową, pustą grupę. Nie tworzy to notatki ani nie zmienia istniejących notatek.

Aby przywrócić automatyczną kolejność grup i wyświetlić wszystkie grupy, wybierz automatyczną kolejność sortowania zamiast **Ręcznie**.

### Zwijanie grup

W układach [[Widok tabeli|tabela]], [[Widok kart|karty]] i [[Widok listy|lista]] kliknij nagłówek grupy, aby zwinąć lub rozwinąć tę grupę. Zwinięcie grupy tymczasowo ukrywa jej elementy bez zmiany ich atrybutów.

## Ograniczanie, kopiowanie i eksportowanie wyników

### Ograniczanie wyników

Menu *wyników* pokazuje liczbę wyników w widoku. Kliknij przycisk wyników, aby ograniczyć liczbę wyników i uzyskać dostęp do dodatkowych akcji.

### Kopiuj do schowka

Ta akcja kopiuje widok do schowka. Po skopiowaniu do schowka możesz wkleić go do pliku Markdown lub do innych aplikacji do edycji dokumentów, w tym arkuszy kalkulacyjnych takich jak Google Sheets, Excel i Numbers.

### Eksportuj CSV

Ta akcja zapisuje plik CSV bieżącego widoku.

## Osadzanie widoku

Możesz osadzać pliki baz danych w [[Osadzanie plików|dowolnym innym pliku]] za pomocą składni `![[Plik.base]]`. Użyty zostanie pierwszy widok na liście. Możesz zmienić kolejność, przeciągając widoki w menu widoków.

Aby określić domyślny widok dla osadzenia, użyj `![[Plik.base#Podgląd]]`.
