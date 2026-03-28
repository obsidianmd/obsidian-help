---
permalink: web-clipper/capture
---
Po zainstalowaniu rozszerzenia przeglądarki [[Wprowadzenie do Obsidian Web Clipper|Web Clipper]] możesz uzyskać do niego dostęp na kilka sposobów, w zależności od przeglądarki:

1. Ikona Obsidian na pasku narzędzi przeglądarki.
2. Skróty klawiszowe, aby aktywować rozszerzenie z klawiatury.
3. Menu kontekstowe, klikając prawym przyciskiem myszy odwiedzaną stronę internetową.

Aby zapisać stronę w Obsidian, kliknij przycisk **Zapisz w Obsidian**.

## Przechwytywanie strony

Po otwarciu rozszerzenia Web Clipper wyodrębnia dane z bieżącej strony internetowej zgodnie z ustawieniami w Twoim [[Szablony|szablonie]]. Możesz tworzyć własne szablony i dostosowywać wynik za pomocą [[Zmienne|zmiennych]] i [[Filtry|filtrów]].

Domyślnie Web Clipper próbuje inteligentnie wyodrębnić jedynie główną treść artykułu, z wyłączeniem innych elementów na stronie. Możesz jednak zmienić to zachowanie w następujący sposób:

- Jeśli istnieje niestandardowy szablon, zostanie użyty Twój szablon.
- Jeśli jest zaznaczony fragment tekstu, zostanie użyte zaznaczenie. Możesz użyć `Ctrl/Cmd+A`, aby zaznaczyć całą stronę.
- Jeśli istnieją jakiekolwiek [[Wyróżnianie stron internetowych|wyróżnienia]], zostaną one użyte.

## Pobieranie obrazów

Obrazy nie są automatycznie pobierane podczas korzystania z Web Clipper. Zamiast tego obrazy zawierają link do ich internetowego adresu URL. Oszczędza to miejsce w skarbcu, ale oznacza, że obrazy nie będą dostępne offline ani gdy adres URL przestanie działać.

Możesz pobrać obrazy dla dowolnego pliku w Obsidian za pomocą [[Lista poleceń|polecenia]] o nazwie **Pobierz załączniki aktywnego pliku**. To polecenie można również przypisać do skrótu klawiszowego w Obsidian.

## Skróty klawiszowe

Web Clipper zawiera skróty klawiszowe, których możesz używać, aby przyspieszyć swoją pracę. Aby zmienić mapowania klawiszy, przejdź do **Ustawienia Web Clipper** → **Ogólne** i postępuj zgodnie z instrukcjami dla swojej przeglądarki. Mapowania można zmienić we wszystkich przeglądarkach z wyjątkiem Safari, które nie obsługuje edycji skrótów klawiszowych.

| Akcja                   | macOS         | Windows/Linux  |
| ----------------------- | ------------- | -------------- |
| Otwórz clipper          | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| Przechwyć               | `Opt+Shift+O` | `Alt+Shift+O`  |
| Tryb zakreślacza        | `Opt+Shift+H` | `Alt+Shift+H`  |

## Funkcje interfejsu

Interfejs Web Clipper jest podzielony na cztery sekcje:

1. **Nagłówek**, w którym możesz przełączać szablony, włączać [[Wyróżnianie stron internetowych|wyróżnianie]], [[Czytnik|tryb czytania]] oraz uzyskać dostęp do ustawień.
2. **Atrybuty** pokazują [[Atrybuty|metadane]] wyodrębnione ze strony, które zostaną zapisane jako [[Atrybuty]] w Obsidian.
3. **Treść notatki**, która zostanie zapisana w Obsidian.
4. **Stopka** pozwala wybrać skarbiec i folder oraz zapisać w Obsidian.

Funkcje nagłówka obejmują:

- Rozwijane menu **Szablon** do przełączania między zapisanymi [[Szablony|szablonami]] dodanymi w ustawieniach Web Clipper.
- Przycisk **Więcej (...)** do wyświetlania zmiennych strony, których możesz użyć w szablonach.
- Przycisk **Zakreślacz** do włączania [[Wyróżnianie stron internetowych|wyróżniania]].
- Przycisk **Koło zębate** do otwierania ustawień Web Clipper.

Funkcje stopki obejmują:

- Przycisk **Zapisz w Obsidian** do zapisywania danych w Obsidian.
- Rozwijane menu **Sejf** do przełączania między zapisanymi sejfami dodanymi w ustawieniach Web Clipper.
- Pole **Folder** do określenia folderu, w którym ma zostać zapisany plik.
- **Tłumacz** do uruchamiania [[Interpretowanie stron internetowych|zapytań w języku naturalnym]] na stronie.
