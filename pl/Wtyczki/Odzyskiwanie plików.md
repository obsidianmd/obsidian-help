---
permalink: plugins/file-recovery
publish: true
mobile: true
description: 'Odzyskiwanie plików chroni Twoją pracę przed przypadkową utratą danych, automatycznie zapisując kopie zapasowe notatek w regularnych odstępach czasu.'
---
Odzyskiwanie plików to [[Wbudowane wtyczki|wbudowana wtyczka]], która chroni twoją pracę przed przypadkowym usunięciem, uszkodzeniem plików lub niechcianymi zmianami, automatycznie zapisując pełne kopie zapasowe notatek w regularnych odstępach czasu. Odzyskiwanie plików nie jest kompletnym rozwiązaniem do tworzenia kopii zapasowych — zalecamy również osobne [[Tworzenie kopii zapasowej plików Obsidian|tworzenie kopii zapasowych]] plików Obsidian.

Aby uniknąć zajmowania [[#Przechowywanie i wydajność|zbyt dużej ilości miejsca]], Obsidian przechowuje kopie zapasowe przez określoną liczbę dni, po czym je usuwa. Kopie zapasowe zapisują pełną zawartość plików, a nie tylko zmiany, co pozwala przywrócić dowolną wcześniejszą wersję.

> [!info]+ Informacja
> Domyślnie kopie zapasowe są zapisywane co najmniej co 5 minut i przechowywane przez 7 dni. Oba interwały możesz skonfigurować w **[[Ustawienia]] → Wbudowane wtyczki → Odzyskiwanie plików**.

Kopie zapasowe są przechowywane w [[Jak Obsidian przechowuje dane#Ustawienia globalne|ustawieniach globalnych]], poza sejfem, aby zabezpieczyć się przed utratą danych związaną z sejfem. Oznacza to, że kopie zapasowe są zapisywane z bezwzględną ścieżką do notatki. Jeśli niedawno przeniosłeś swój sejf, może być konieczne przeniesienie go z powrotem do lokalizacji, w której znajdował się w momencie tworzenia kopii zapasowej.

> [!tip] Jeśli korzystasz z [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] lub [[Synchronizuj notatki między urządzeniami|innych usług synchronizacji]], kopie zapasowe odzyskiwania plików nie będą synchronizowane między urządzeniami. Kopie zapasowe są specyficzne dla danego urządzenia i pozostają lokalne na każdym urządzeniu.

## Przywracanie kopii zapasowej

1. Otwórz **[[Ustawienia]]**.
2. Na panelu bocznym wybierz **Odzyskiwanie plików** w sekcji **Wbudowane wtyczki**.
3. W sekcji **Kopie zapasowe** wybierz **Podgląd**.
4. W polu nazwy pliku zacznij wpisywać nazwę pliku, który chcesz odzyskać — pojawi się lista sugestii.
5. Wybierz plik, naciśnij Enter, a zobaczysz listę dostępnych kopii zapasowych.
6. Wybierz kopię zapasową, którą chcesz przywrócić.
    1. Jeśli chcesz skopiować i wkleić do nowej notatki, wybierz przycisk **Kopiuj**.
    2. Jeśli chcesz całkowicie przywrócić plik, wybierz przycisk **Przywróć**.
7. Opcjonalnie możesz wyświetlić różnice między kopiami zapasowymi, włączając opcję **Pokaż zmiany**. Wyświetli to, jaka treść została dodana, usunięta lub zmodyfikowana między wersjami kopii zapasowych.

## Czyszczenie historii kopii zapasowych

> [!danger] Wyczyszczenie historii kopii zapasowych nieodwracalnie usuwa wszystkie kopie zapasowe w twoim sejfie.

1. Otwórz **[[Ustawienia]]**.
2. Na panelu bocznym wybierz **Odzyskiwanie plików** w sekcji **Wbudowane wtyczki**.
3. W sekcji **Wyczyść historię** wybierz **Usuń**.
4. Potwierdź, że chcesz usunąć wszystkie kopie zapasowe, klikając **Usuń**.

## Przechowywanie i wydajność

Kopie zapasowe odzyskiwania plików zazwyczaj zajmują minimalną ilość miejsca na dysku, ponieważ przechowywane są tylko zmienione pliki. Jednak w sejfach z wieloma dużymi plikami lub częstymi edycjami kopie zapasowe mogą się gromadzić z czasem. Monitoruj wykorzystanie pamięci i w razie potrzeby dostosuj okres przechowywania.

## Ograniczenia

- **Tryb blokady Apple**: Ta funkcja jest niedostępna na urządzeniach Apple z włączonym [trybem blokady](https://support.apple.com/en-us/105120), chyba że Obsidian jest wyłączony z tego ograniczenia.
- **Typy plików**: Za pomocą odzyskiwania plików można przywrócić tylko pliki `.md` i `.canvas`.
- **Lokalizacja sejfu**: Jeśli przeniesiesz sejf do innej lokalizacji bez użycia [[Zarządzaj sejfami#Przenoszenie sejfu do innego folderu|przełącznika sejfów]], istniejące kopie zapasowe mogą być niedostępne.
