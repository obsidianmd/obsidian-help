---
permalink: plugins/file-explorer
publish: true
mobile: true
description: Przeglądarka plików to podstawowa wtyczka umożliwiająca zarządzanie plikami i folderami w sejfie.
---
Przeglądarka plików to [[Wbudowane wtyczki|wbudowana wtyczka]], która pozwala zarządzać plikami i folderami w twoim sejfie. Możesz przeglądać notatki i inne [[Obsługiwane formaty plików]] w swoim sejfie oraz wykonywać wiele typowych operacji na plikach:

- Tworzenie, usuwanie i zmiana nazw plików i folderów.
- Przenoszenie plików i folderów za pomocą przeciągania i upuszczania.
- Korzystanie z [[#Korzystanie z menu kontekstowego|menu kontekstowego]] w celu uzyskania dostępu do wszystkich dostępnych operacji.

> [!tip]- Przeciąganie i upuszczanie plików
> Możesz przeciągnąć plik z Przeglądarki plików do notatki, aby utworzyć do niego link, lub przeciągnąć plik do folderu w Przeglądarce plików, aby go skopiować.

## Tworzenie nowej notatki

Aby utworzyć nową notatkę w domyślnej lokalizacji nowych notatek:

1. Wybierz **Nowa notatka** ![[lucide-pen-line.svg#icon]] u góry Przeglądarki plików.
2. Wpisz nazwę notatki, a następnie naciśnij `Enter`.

> [!tip]- Zmiana domyślnej lokalizacji
> Możesz zmienić domyślną lokalizację nowych notatek w **[[Ustawienia]] → [[Ustawienia#Pliki i łącza|Pliki i łącza]] → [[Ustawienia#Domyślna lokalizacja nowej notatki|Domyślna lokalizacja nowej notatki]]**.

Aby utworzyć nową notatkę w określonym folderze:

1. Kliknij prawym przyciskiem myszy folder, a następnie wybierz **Nowa notatka**.
2. Wpisz nazwę notatki, a następnie naciśnij `Enter`.

## Tworzenie nowego folderu

Aby utworzyć nowy folder w katalogu głównym sejfu:

1. Wybierz **Nowy folder** ![[lucide-folder-plus.svg#icon]] u góry Przeglądarki plików.
2. Wpisz nazwę folderu, a następnie naciśnij `Enter`.

Aby utworzyć podfolder:

1. Kliknij prawym przyciskiem myszy folder, w którym chcesz utworzyć podfolder, a następnie wybierz **Nowy folder**.
2. Wpisz nazwę folderu, a następnie naciśnij `Enter`.

## Zmiana kolejności sortowania

Aby zmienić kolejność sortowania plików:

1.  Wybierz **Sortowanie** ![[lucide-arrow-up-narrow-wide.svg#icon]] u góry Przeglądarki plików.
2. Wybierz sposób sortowania plików. Możesz sortować rosnąco lub malejąco według nazwy pliku, czasu modyfikacji lub czasu stworzenia.

## Automatyczne ujawnianie aktywnego pliku

Gdy otworzysz notatkę, Przeglądarka plików może automatycznie przewinąć do niej i podświetlić ją w drzewie folderów. Pomaga to śledzić, gdzie w sejfie znajduje się aktywna notatka.

Aby przełączyć automatyczne ujawnianie:

- Wybierz **Automatyczne ujawnianie aktywnego pliku** ![[lucide-gallery-vertical.svg#icon]] u góry Przeglądarki plików.

Po włączeniu Przeglądarka plików będzie automatycznie podążać za aktywną notatką i ją ujawniać.

## Rozwijanie lub zwijanie wszystkich folderów

Możesz rozwinąć lub zwinąć wszystkie foldery w Przeglądarce plików jednocześnie.

Aby rozwinąć wszystkie foldery:

- Wybierz **Rozwiń wszystkie** ![[lucide-chevrons-up-down.svg#icon]] u góry Przeglądarki plików.

Aby zwinąć wszystkie foldery:

- Wybierz **Zwiń wszystkie** ![[lucide-chevrons-down-up.svg#icon]] u góry Przeglądarki plików.

## Usuwanie pliku lub folderu

1. Kliknij prawym przyciskiem myszy plik, który chcesz usunąć, a następnie wybierz **Usuń**.
2. Jeśli pojawi się monit o potwierdzenie usunięcia pliku, wybierz **Usuń**.

Więcej informacji znajdziesz w [[Zarządzanie notatkami#Usuwanie notatki|Usuwanie notatki]].

## Zmiana nazwy pliku lub folderu

1. Kliknij prawym przyciskiem myszy plik, którego nazwę chcesz zmienić, a następnie wybierz **Zmień nazwę**.
2. Wpisz nową nazwę, a następnie naciśnij `Enter`.

Więcej informacji znajdziesz w [[Zarządzanie notatkami#Zmiana nazwy notatki|Zmiana nazwy notatki]].

## Przenoszenie pliku lub folderu

Aby przenieść plik lub folder, możesz użyć przeciągania i upuszczania lub menu kontekstowego.

**Przeciągnij i upuść:**

- Przeciągnij plik lub folder do folderu, do którego chcesz go przenieść.
- Za pomocą `Alt-Click` (Windows/Linux) lub `Opt-Click` (macOS) możesz wybrać wiele pojedynczych plików i przeciągnąć je do innego folderu. Jeśli wszystkie znajdują się w jednym rzędzie, możesz użyć `Shift-Click`.

**Menu kontekstowe:**

1. Kliknij prawym przyciskiem myszy plik, a następnie wybierz **Przenieś plik do...**.
2. Wyszukaj nazwę folderu, do którego chcesz przenieść plik, a następnie wybierz go z listy.

## Korzystanie z menu kontekstowego

Menu kontekstowe wyświetla działania dostępne dla pliku lub folderu. Wiele opcji dotyczących plików pojawia się również w [[Menu Więcej opcji]].

### Komputer

Kliknij prawym przyciskiem myszy plik lub folder w Przeglądarce plików.

**Pliki**

- **Otwórz w nowej karcie** i **Otwórz po prawej** otwierają plik w nowej karcie lub w panelu po prawej stronie.
- **Otwórz w nowym oknie** otwiera plik w osobnym oknie. Zobacz [[Wyskakujące okna]].
- **Duplikuj** tworzy kopię pliku.
- **Przenieś plik do...** przenosi plik do innego folderu. Zobacz [[#Przenoszenie pliku lub folderu]].
- **Dodaj do ulubionych...** dodaje plik do ulubionych. Wymaga wtyczki Zakładki. Zobacz [[Zakładki#Dodawanie zakładki]].
- **Scal cały plik z...** łączy notatkę z inną. Wymaga wtyczki Kompozytor notatek. Zobacz [[Kompozytor notatek#Scalanie notatek]].
- **Opublikuj aktywny plik** publikuje notatkę na twojej stronie. Wymaga Obsidian Publish. Zobacz [[Wprowadzenie do Obsidian Publish|Publish]].
- **Skopiuj ścieżkę** kopiuje lokalizację pliku jako adres URL Obsidian, ze ścieżką z folderu sejfu lub z katalogu głównego systemu.
- **Otwórz historię wersji** pokazuje wcześniejsze wersje pliku. Wymaga aktywnej subskrypcji Obsidian Sync. Zobacz [[Historia wersji]].
- **Otwórz w aplikacji domyślnej** otwiera plik w aplikacji, której komputer używa dla danego typu pliku.
- **Pokaż w systemie plików** pokazuje plik w menedżerze plików. W macOS opcja nazywa się **Otwórz w Finderze**. W Windows i Linux — **Pokaż w folderze**.
- **Zmień nazwę...** zmienia nazwę pliku. Zobacz [[#Zmiana nazwy pliku lub folderu]].
- **Usuń** usuwa plik. Zobacz [[#Usuwanie pliku lub folderu]].

**Foldery**

- **Nowa notatka** i **Nowy folder** tworzą notatkę lub folder wewnątrz danego folderu. Zobacz [[#Tworzenie nowej notatki]] i [[#Tworzenie nowego folderu]].
- **Nowa tablica** tworzy tablicę w folderze. Zobacz [[Tablica]].
- **Nowa baza danych** tworzy bazę danych w folderze. Zobacz [[Wprowadzenie do Baz danych]].
- **Duplikuj** tworzy kopię folderu.
- **Przenieś folder do...** przenosi folder do innego folderu.
- **Szukaj w folderze** przeszukuje tylko pliki w danym folderze. Zobacz [[Wyszukiwanie]].
- **Dodaj do ulubionych...** dodaje folder do ulubionych.
- **Skopiuj ścieżkę** kopiuje lokalizację folderu z folderu sejfu lub z katalogu głównego systemu.
- **Pokaż w systemie plików** pokazuje folder w menedżerze plików — działa tak samo jak dla plików.
- **Zmień nazwę...** i **Usuń** zmieniają nazwę folderu lub go usuwają.

### Urządzenia mobilne

Naciśnij i przytrzymaj folder w Przeglądarce plików. Menu zawiera te same opcje co menu folderów na komputerze, z wyjątkiem **Dodaj do ulubionych...** i **Pokaż w systemie plików**.
