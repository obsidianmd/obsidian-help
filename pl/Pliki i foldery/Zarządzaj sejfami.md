---
permalink: manage-vaults
---
**Sejf** to folder w systemie plików, który zawiera Twoje notatki, [[Załączniki|załączniki]] oraz [[Folder konfiguracji|folder konfiguracji]] z ustawieniami specyficznymi dla Obsidian. Aby uzyskać więcej informacji o sejfach, zapoznaj się z [[Jak Obsidian przechowuje dane]].

Możesz zarządzać swoimi sejfami za pomocą **Przełącznika sejfów**. *Profil sejfu* otwiera się przy pierwszym uruchomieniu Obsidian.

Aby otworzyć przełącznik sejfów z istniejącego sejfu, wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]] na dole [[Panel boczny|lewego panelu bocznego]]. Możesz też wybrać **Otwórz inny sejf** z [[Lista poleceń|palety poleceń]].

## Tworzenie nowego sejfu

1. Na komputerze otwórz Obsidian.
2. W lewym dolnym rogu wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]].
3. Pojawi się menu kontekstowe. Wybierz **Zarządzaj sejfami...**.
3. Po prawej stronie **Stwórz nowy sejf** wybierz **Stwórz**.
4. W polu **Nazwa sejfu** wpisz nazwę swojego sejfu.
5. Kliknij **Przeglądaj**, aby wybrać miejsce, w którym zostanie utworzony nowy sejf.
6. Kliknij **Stwórz**.

## Tworzenie sejfu z istniejącego folderu

1. Na komputerze otwórz Obsidian.
2. W lewym dolnym rogu wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]].
3. Pojawi się menu kontekstowe. Wybierz **Zarządzaj sejfami...**.
3. Po prawej stronie **Otwórz folder jako sejf** kliknij **Otwórz**.
4. W przeglądarce plików wybierz folder, którego chcesz użyć jako sejf.
5. Kliknij **Otwórz**.

> [!tip] Otwieranie sejfu z Obsidian Sync
> Jeśli chcesz otworzyć zdalny sejf za pomocą Obsidian Sync, zapoznaj się z [[Konfiguracja Obsidian Sync]].

## Zmiana nazwy sejfu

Ponieważ nazwa sejfu i nazwa folderu bazowego są takie same, zmiana nazwy sejfu powoduje również zmianę nazwy folderu.

1. Na komputerze otwórz Obsidian.
2. W lewym dolnym rogu wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]].
3. Pojawi się menu kontekstowe. Wybierz **Zarządzaj sejfami...**.
4. Na liście sejfów wybierz **Więcej opcji** ![[lucide-more-horizontal.svg#icon]] obok sejfu, którego nazwę chcesz zmienić.
5. Wybierz **Zmień nazwę sejfu**.
6. Wpisz nową nazwę sejfu i naciśnij `Enter`.

## Przenoszenie sejfu do innego folderu

1. Na komputerze otwórz Obsidian.
2. W lewym dolnym rogu wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]].
3. Pojawi się menu kontekstowe. Wybierz **Zarządzaj sejfami...**.
4. Zamknij okno bieżącego sejfu, pozostawiając otwarte okno **Zarządzaj sejfami**.
5. Na liście sejfów wybierz **Więcej opcji** ![[lucide-more-horizontal.svg#icon]] obok sejfu, który chcesz przenieść.
6. Wybierz **Przenieś sejf**, a następnie wybierz nową lokalizację.

Niektóre systemy operacyjne nie pozwalają na przenoszenie sejfu za pomocą przełącznika sejfów. W takich przypadkach musisz przenieść sejf ręcznie:

1. Zamknij Obsidian.
2. Przenieś folder sejfu do nowej lokalizacji, unikając folderów synchronizowanych przez inne usługi.
3. Ponownie otwórz Obsidian.
4. Kliknij ikonę **Profil sejfu** w lewym dolnym rogu ![[lucide-chevrons-up-down.svg#icon]].
5. Z wyskakującego menu wybierz **Zarządzaj sejfami...**.
6. Obok **Otwórz folder jako sejf** kliknij **Otwórz**.
7. Przejdź do nowego folderu sejfu i wybierz go.
8. Kliknij **Otwórz**.
9. Sprawdź, czy zawartość sejfu nie uległa zmianie. W razie potrzeby ponownie włącz wtyczki społeczności, przechodząc do **[[Ustawienia]] → Wtyczki społeczności → Wyłącz tryb ograniczony**.

## Usuwanie sejfu

Usunięcie sejfu powoduje jedynie usunięcie go z listy sejfów.

1. Na komputerze otwórz Obsidian.
2. W lewym dolnym rogu wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]].
3. Pojawi się menu kontekstowe. Wybierz **Zarządzaj sejfami...**.
4. Na liście sejfów wybierz **Więcej opcji** ![[lucide-more-horizontal.svg#icon]] obok sejfu, który chcesz usunąć.
5. Wybierz **Usuń z listy**.

## Przenoszenie ustawień do innego sejfu

Aby użyć tych samych ustawień w innym sejfie, użyj preferowanego menedżera plików (lub terminala), aby skopiować folder `.obsidian` z katalogu głównego źródłowego sejfu do katalogu głównego docelowego sejfu.

Może być konieczne ponowne uruchomienie Obsidian, aby zastosować zmiany.

> [!note] Gdzie znajdę folder `.obsidian`?
> Domyślnie większość systemów operacyjnych ukrywa foldery zaczynające się od kropki (`.`). Aby uzyskać więcej informacji o folderze `.obsidian` i sposobie dostępu do niego, zapoznaj się z [[Jak Obsidian przechowuje dane#Ustawienia sejfu|ustawieniami sejfu]] oraz [[Folder konfiguracji|folderami konfiguracji]].
