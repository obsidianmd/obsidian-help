---
permalink: manage-notes
publish: true
mobile: false
description: null
---
Możesz zarządzać plikami i folderami na kilka sposobów, korzystając ze [[Skróty klawiszowe|skrótów klawiszowych]], [[Lista poleceń|poleceń]] lub [[Przeglądarka plików|przeglądarki plików]].

## Tworzenie nowej notatki

Aby utworzyć nowy plik:

1. Naciśnij `Ctrl+N` (lub `Cmd+N` na macOS).
2. Wprowadź nazwę notatki, a następnie naciśnij `Enter`, aby rozpocząć edycję notatki.

Możesz także tworzyć notatki za pomocą [[Przeglądarka plików#Tworzenie nowej notatki|przeglądarki plików]] lub wybierając **Stwórz nową notatkę** z [[Lista poleceń|palety poleceń]].

> [!hint] Ograniczenia znaków systemu
> Obsidian przestrzega ograniczeń nazw plików systemu operacyjnego, na którym tworzysz notatkę. Jeśli planujesz [[Synchronizuj notatki między urządzeniami|synchronizować notatki między urządzeniami]], upewnij się, że nazwy plików są [bezpieczne dla innych systemów operacyjnych](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Otwieranie plików spoza sejfu

Na komputerze możesz otwierać i edytować pojedyncze pliki Markdown spoza sejfu. Pliki otwierają się w bieżącym oknie i pozostają w swojej oryginalnej lokalizacji.

> [!note] Wymaga Obsidian 1.14 i najnowszego instalatora
> [[Aktualizacja Obsidian#Aktualizacje instalatora|Zaktualizuj instalator]], pobierając Obsidian ze strony [obsidian.md/download](https://obsidian.md/download) i ponownie instalując aplikację.

Aby otworzyć plik Markdown:

1. Otwórz [[Lista poleceń|paletę poleceń]].
2. Wybierz **Otwórz plik spoza skarbca...**.
3. Wybierz plik Markdown na swoim komputerze.

Możesz również użyć menu **Otwórz za pomocą** w systemie operacyjnym i wybrać **Obsidian**. Aby domyślnie otwierać pliki Markdown w Obsidian, ustaw go jako domyślną aplikację dla plików `.md`.

Osadzone obrazy i linki do innych plików lokalnych są rozwiązywane względem folderu pliku Markdown. Użyj [[Konspekt|konspektu]], aby nawigować po nagłówkach, oraz [[Łącza wychodzące|łączy wychodzących]], aby przeglądać powiązane pliki.

### Podgląd plików za pomocą Quick Look

Na macOS zaznacz plik Markdown w Finderze i naciśnij `Spacja`, aby wyświetlić jego podgląd za pomocą **Quick Look**. Podgląd Quick Look działa nawet wtedy, gdy Obsidian jest zamknięty.

## Zmiana nazwy notatki

Aby zmienić nazwę aktywnej notatki:

1. Wybierz nazwę notatki u góry edytora (lub naciśnij `F2`).
2. Wprowadź nową nazwę, a następnie naciśnij `Enter`.

Gdy zmieniasz nazwę pliku, Obsidian automatycznie aktualizuje wszystkie linki do tego pliku.

Możesz zmienić nazwę notatki lub folderu bez ich otwierania, korzystając z [[Przeglądarka plików#Zmiana nazwy pliku lub folderu|przeglądarki plików]].

## Usuwanie notatki

Aby usunąć notatkę, wybierz **Więcej opcji → Usuń plik** w prawym górnym rogu aktywnej notatki.

Możesz też wybrać **Usuń aktywny plik** z [[Lista poleceń|palety poleceń]].

Możesz również usunąć notatkę lub folder, korzystając z [[Przeglądarka plików#Usuwanie pliku lub folderu|przeglądarki plików]].

> [!note] Co dzieje się z plikami po ich usunięciu?
> Aby zmienić sposób postępowania z usuniętymi plikami, wybierz jedną z poniższych opcji w **[[Ustawienia]] → Pliki i łącza**:
>
> - **Kosz systemowy**: Domyślnie usunięte pliki trafiają do kosza systemowego Twojego systemu operacyjnego. Aby przywrócić plik, użyj preferowanego menedżera plików.
> - **Kosz Obsidian**: Możesz wysyłać usunięte pliki do folderu `.trash` w swoim sejfie.
> - **Usuń trwale**: Pliki są natychmiast usuwane bez możliwości ich przywrócenia.
