---
permalink: publish/sites
---
Ta strona wyjaśnia, jak zarządzać stronami [[Wprowadzenie do Obsidian Publish|Obsidian Publish]].

Strona to kolekcja notatek hostowana przez Obsidian Publish i dostępna online, pod adresem Obsidian Publish lub [[Niestandardowe domeny|niestandardową domeną]].

## Tworzenie nowej strony

> [!note] Liczba stron, które możesz jednocześnie posiadać, jest określona przez Twoją subskrypcję Obsidian Publish. Przed utworzeniem nowej strony upewnij się, że Twoja subskrypcja na to pozwala.

1. Na wstążce, po lewej stronie okna aplikacji, kliknij **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. Jeśli masz już istniejącą stronę, kliknij **Zmień stronę** ![[lucide-repeat.svg#icon]].
3. W polu **ID strony** wprowadź ścieżkę, którą chcesz nadać swojej stronie. Na przykład strona z ID `my-amazing-site` jest dostępna pod adresem publish.obsidian.md/my-amazing-site.
4. Kliknij **Stwórz**.

## Usuwanie istniejącej strony

> [!note] Notatki pozostają w Twoim skarbcu nawet po usunięciu strony.

1. Na wstążce, po lewej stronie okna aplikacji, kliknij **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. Kliknij **Zmień stronę** ![[lucide-repeat.svg#icon]].
3. Kliknij **Usuń stronę** ![[lucide-x.svg#icon]] po prawej stronie strony, którą chcesz usunąć.
4. Kliknij **Usuń**, aby potwierdzić.

## Przełączanie między stronami

1. Na wstążce, po lewej stronie okna aplikacji, kliknij **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. Kliknij **Zmień stronę** ![[lucide-repeat.svg#icon]].
3. Kliknij **Wybierz** po prawej stronie strony, na którą chcesz się przełączyć.

## Zmiana ID strony

1. Na wstążce, po lewej stronie okna aplikacji, kliknij **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. Kliknij **Zmień stronę** ![[lucide-repeat.svg#icon]].
3. Kliknij **Edytuj ID strony** ![[lucide-edit-3.svg#icon]] po prawej stronie strony, którą chcesz edytować.
4. W polu **ID strony** wprowadź nowe ID dla swojej strony.
5. Kliknij **Zmień**.

## Wyświetlanie opcji strony

1. Na wstążce, po lewej stronie okna aplikacji, kliknij **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. W oknie dialogowym **Opublikuj zmiany** kliknij **Zmień ustawienia strony** ![[lucide-cog.svg#icon]].

## Opcje strony

### Ogólne

| Opcja                                    | Typ        | Opis                                                                                                                                    |
| ---------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Nazwa strony                             | Pole       | Publiczna nazwa i tytuł Twojej strony Obsidian Publish.                                                                                |
| Strona główna                            | Pole       | Lokalizacja pliku Markdown, który ma pełnić rolę strony głównej.                                                                       |
| Logo                                     | Pole       | Obraz, który ma pełnić rolę banera Twojej strony. Obraz musi [[Opublikuj swoją zawartość#Publish notes\|być opublikowany]].            |
| Współpraca na stronie                    | Przycisk   | Określ innych użytkowników, którym chcesz nadać dostęp do edycji opublikowanych notatek. Użytkownicy muszą posiadać konto Obsidian.    |
| Niestandardowa domena                    | Przycisk   | [[Niestandardowe domeny]]                                                                                                               |
| Wyłącz indeksowanie w wyszukiwarkach     | Przełącznik | Zapobiega indeksowaniu Twojej strony przez szanujące zasady wyszukiwarki poprzez dodanie pliku `robots.txt`.                           |

### Wygląd

| Opcja                    | Typ        | Opis                                                                                                          |
|--------------------------|------------|---------------------------------------------------------------------------------------------------------------|
| Motyw                    | Lista      | Wybierz, jak motyw prezentuje się na Twojej stronie: **Jasny**, **Ciemny** lub **Dostosuj do systemu**.       |
| Tryb jasny lub ciemny    | Przełącznik | Pozwól użytkownikom przełączać tryb **Jasny**/**Ciemny** za pomocą przycisku przełącznika na Twojej stronie. |

## Przeglądanie strony

| Opcja                      | Typ         | Opis                                                                                                              |
|---------------------------|-------------|-------------------------------------------------------------------------------------------------------------------|
| Pokaż podgląd po najechaniu kursorem | Przełącznik | Włącz lub wyłącz podgląd strony po najechaniu kursorem na aktywny link wewnętrzny.                              |
| Ukryj tytuł strony        | Przełącznik | Włącz lub wyłącz wyświetlanie tytułu w linii opublikowanej notatki.                                             |
| Czytelna długość linii     | Przełącznik | Włącz lub wyłącz czytelną długość linii na Twojej stronie.                                                      |
| Łamanie wiersza            | Przełącznik | Włącz lub wyłącz wyświetlanie pojedynczych łamań wiersza na Twojej stronie.                                     |
| Grupuj strony              | Przełącznik | Włącz lub wyłącz [[Karty#Stack tab groups\|karty w stosie]] na Twojej stronie.                                  |

### Komponenty

| Opcja                      | Typ         | Opis                                                                                                                                                    |
|---------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pokaż menu                | Przełącznik | Włącz lub wyłącz widok [[Eksplorator plików|eksploratora plików]] na Twojej stronie Publish.                                                           |
| Dostosuj menu              | Przycisk    | [[Dostosuj swoją stronę#Customize navigation\|Dostosuj]] kolejność wyświetlania plików, jeśli opcja **Pokaż menu** jest włączona.                     |
| Pokaż pasek wyszukiwania  | Przełącznik | Włącz lub wyłącz pasek wyszukiwania na Twojej stronie.                                                                                                 |
| Pokaż graf                | Przełącznik | Włącz lub wyłącz widok grafu w prawym pasku bocznym Twojej strony.                                                                                     |
| Pokaż spis treści         | Przełącznik | Włącz lub wyłącz widok [[Konspekt\|spisu treści]] na Twojej stronie.                                                                                   |
| Pokaż linki zwrotne       | Przełącznik | Włącz lub wyłącz [[Linki zwrotne]] na Twojej stronie.                                                                                                  |

### Inne ustawienia strony

| Opcja                                   | Typ       | Opis                                                                                                                    |
| --------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| Hasła                                   | Przycisk  | [[Obsidian Publish/Bezpieczeństwo i prywatność#Add a site password\|Ustaw hasło]], aby ograniczyć dostęp do całej strony.      |
| Kod śledzenia Google Analytics          | Pole      | **Tylko dla niestandardowej domeny**. Umieść tutaj kod śledzenia Google Analytics dla Twojej strony.                    |
