---
permalink: plugins/file-recovery
publish: true
mobile: true
description: 'Odzyskiwanie plików chroni Twoją pracę przed przypadkową utratą danych, automatycznie zapisując migawki notatek w regularnych odstępach czasu.'
---
Odzyskiwanie plików to [[Wbudowane wtyczki|wtyczka podstawowa]], która chroni Twoją pracę przed przypadkowym usunięciem, uszkodzeniem plików lub niechcianymi zmianami, automatycznie zapisując pełne migawki notatek w regularnych odstępach czasu. Odzyskiwanie plików nie jest kompletnym rozwiązaniem do tworzenia kopii zapasowych — zalecamy również osobne [[Tworzenie kopii zapasowej plików Obsidian|tworzenie kopii zapasowych]] plików Obsidian.

Aby uniknąć zajmowania [[#Przechowywanie i wydajność|zbyt dużej ilości miejsca]], Obsidian przechowuje migawki przez określoną liczbę dni, po czym je usuwa. Migawki zapisują pełną zawartość plików, a nie tylko zmiany, co pozwala przywrócić dowolną wcześniejszą wersję.

> [!info]+ Informacja
> Domyślnie migawki są zapisywane co najmniej co 5 minut i przechowywane przez 7 dni. Oba interwały możesz skonfigurować w **[[Ustawienia]] → Wbudowane wtyczki → Odzyskiwanie plików**.

Migawki są przechowywane w [[Jak Obsidian przechowuje dane#Ustawienia globalne|ustawieniach globalnych]], poza skarbcem, aby zabezpieczyć się przed utratą danych związaną ze skarbcem. Oznacza to, że migawki są zapisywane z bezwzględną ścieżką do notatki. Jeśli niedawno przeniosłeś swój skarbiec, może być konieczne przeniesienie go z powrotem do lokalizacji, w której znajdował się w momencie tworzenia migawki.

> [!tip] Jeśli korzystasz z [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] lub [[Synchronizuj notatki między urządzeniami|innych usług synchronizacji]], migawki odzyskiwania plików nie będą synchronizowane między urządzeniami. Migawki są specyficzne dla danego urządzenia i pozostają lokalne na każdym urządzeniu.

## Przywracanie migawki

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym wybierz **Odzyskiwanie plików** w sekcji **Wbudowane wtyczki**.
3. W sekcji **Kopie zapasowe** wybierz **Podgląd**.
4. W polu nazwy pliku zacznij wpisywać nazwę pliku, który chcesz odzyskać — pojawi się lista sugestii.
5. Wybierz plik, naciśnij Enter, a zobaczysz listę dostępnych migawek.
6. Wybierz migawkę, którą chcesz przywrócić.
    1. Jeśli chcesz skopiować i wkleić do nowej notatki, wybierz przycisk **Kopiuj**.
    2. Jeśli chcesz całkowicie przywrócić plik, wybierz przycisk **Przywróć**.
7. Opcjonalnie możesz wyświetlić różnice między migawkami, włączając opcję **Pokaż zmiany**. Wyświetli to, jaka treść została dodana, usunięta lub zmodyfikowana między wersjami migawek.

## Czyszczenie historii migawek

> [!danger] Wyczyszczenie historii migawek nieodwracalnie usuwa wszystkie migawki w Twoim skarbcu.

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym wybierz **Odzyskiwanie plików** w sekcji **Wbudowane wtyczki**.
3. W sekcji **Wyczyść historię** wybierz **Usuń**.
4. Potwierdź, że chcesz usunąć wszystkie migawki, klikając **Usuń**.

## Przechowywanie i wydajność

Migawki odzyskiwania plików zazwyczaj zajmują minimalną ilość miejsca na dysku, ponieważ przechowywane są tylko zmienione pliki. Jednak w skarbcach z wieloma dużymi plikami lub częstymi edycjami migawki mogą się gromadzić z czasem. Monitoruj wykorzystanie pamięci i w razie potrzeby dostosuj okres przechowywania.

## Ograniczenia

- **Tryb blokady Apple**: Ta funkcja jest niedostępna na urządzeniach Apple z włączonym [trybem blokady](https://support.apple.com/en-us/105120), chyba że Obsidian jest wyłączony z tego ograniczenia.
- **Typy plików**: Za pomocą odzyskiwania plików można przywrócić tylko pliki `.md` i `.canvas`.
- **Lokalizacja skarbca**: Jeśli przeniesiesz skarbiec do innej lokalizacji bez użycia [[Zarządzaj skarbcami#Przenoszenie skarbca do innego folderu|przełącznika skarbców]], istniejące migawki mogą być niedostępne.
