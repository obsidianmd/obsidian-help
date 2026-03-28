---
permalink: manage-vaults
---
**Skarbiec** to folder w systemie plików, który zawiera Twoje notatki, [[Załączniki|załączniki]] oraz [[Folder konfiguracji|folder konfiguracji]] z ustawieniami specyficznymi dla Obsidian. Aby uzyskać więcej informacji o skarbcach, zapoznaj się z [[Jak Obsidian przechowuje dane]].

Możesz zarządzać swoimi skarbcami za pomocą **Przełącznika sejfów**. *Profil sejfu* otwiera się przy pierwszym uruchomieniu Obsidian.

Aby otworzyć przełącznik sejfów z istniejącego skarbca, wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]] na dole [[Pasek boczny|lewego paska bocznego]]. Możesz też wybrać **Otwórz inny sejf** z [[Lista poleceń|palety poleceń]].

## Tworzenie nowego skarbca

1. Na komputerze otwórz Obsidian.
2. W lewym dolnym rogu wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]].
3. Pojawi się menu kontekstowe. Wybierz **Zarządzaj sejfami...**.
3. Po prawej stronie **Stwórz nowy sejf** wybierz **Stwórz**.
4. W polu **Nazwa sejfu** wpisz nazwę swojego skarbca.
5. Kliknij **Przeglądaj**, aby wybrać miejsce, w którym zostanie utworzony nowy skarbiec.
6. Kliknij **Stwórz**.

## Tworzenie skarbca z istniejącego folderu

1. Na komputerze otwórz Obsidian.
2. W lewym dolnym rogu wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]].
3. Pojawi się menu kontekstowe. Wybierz **Zarządzaj sejfami...**.
3. Po prawej stronie **Otwórz folder jako sejf** kliknij **Otwórz**.
4. W przeglądarce plików wybierz folder, którego chcesz użyć jako skarbiec.
5. Kliknij **Otwórz**.

> [!tip] Otwieranie sejfu z Obsidian Sync
> Jeśli chcesz otworzyć zdalny sejf za pomocą Obsidian Sync, zapoznaj się z [[Konfiguracja Obsidian Sync]].

## Zmiana nazwy skarbca

Ponieważ nazwa skarbca i nazwa folderu bazowego są takie same, zmiana nazwy skarbca powoduje również zmianę nazwy folderu.

1. Na komputerze otwórz Obsidian.
2. W lewym dolnym rogu wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]].
3. Pojawi się menu kontekstowe. Wybierz **Zarządzaj sejfami...**.
4. Na liście sejfów wybierz **Więcej opcji** ![[lucide-more-horizontal.svg#icon]] obok skarbca, którego nazwę chcesz zmienić.
5. Wybierz **Zmień nazwę sejfu**.
6. Wpisz nową nazwę skarbca i naciśnij `Enter`.

## Przenoszenie skarbca do innego folderu

1. Na komputerze otwórz Obsidian.
2. W lewym dolnym rogu wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]].
3. Pojawi się menu kontekstowe. Wybierz **Zarządzaj sejfami...**.
4. Zamknij okno bieżącego skarbca, pozostawiając otwarte okno **Zarządzaj skarbcami**.
5. Na liście sejfów wybierz **Więcej opcji** ![[lucide-more-horizontal.svg#icon]] obok skarbca, który chcesz przenieść.
6. Wybierz **Przenieś sejf**, a następnie wybierz nową lokalizację.

Niektóre systemy operacyjne nie pozwalają na przenoszenie skarbca za pomocą przełącznika sejfów. W takich przypadkach musisz przenieść skarbiec ręcznie:

1. Zamknij Obsidian.
2. Przenieś folder skarbca do nowej lokalizacji, unikając folderów synchronizowanych przez inne usługi.
3. Ponownie otwórz Obsidian.
4. Kliknij ikonę **Profil sejfu** w lewym dolnym rogu ![[lucide-chevrons-up-down.svg#icon]].
5. Z wyskakującego menu wybierz **Zarządzaj sejfami...**.
6. Obok **Otwórz folder jako sejf** kliknij **Otwórz**.
7. Przejdź do nowego folderu skarbca i wybierz go.
8. Kliknij **Otwórz**.
9. Sprawdź, czy zawartość skarbca nie uległa zmianie. W razie potrzeby ponownie włącz wtyczki społeczności, przechodząc do **[[Ustawienia]] → Wtyczki społeczności → Wyłącz tryb ograniczony**.

## Usuwanie skarbca

Usunięcie skarbca powoduje jedynie usunięcie go z listy sejfów.

1. Na komputerze otwórz Obsidian.
2. W lewym dolnym rogu wybierz **Profil sejfu** ![[lucide-chevrons-up-down.svg#icon]].
3. Pojawi się menu kontekstowe. Wybierz **Zarządzaj sejfami...**.
4. Na liście sejfów wybierz **Więcej opcji** ![[lucide-more-horizontal.svg#icon]] obok skarbca, który chcesz usunąć.
5. Wybierz **Usuń z listy**.

## Przenoszenie ustawień do innego skarbca

Aby użyć tych samych ustawień w innym skarbcu, użyj preferowanego menedżera plików (lub terminala), aby skopiować folder `.obsidian` z katalogu głównego źródłowego skarbca do katalogu głównego docelowego skarbca.

Może być konieczne ponowne uruchomienie Obsidian, aby zastosować zmiany.

> [!note] Gdzie znajdę folder `.obsidian`?
> Domyślnie większość systemów operacyjnych ukrywa foldery zaczynające się od kropki (`.`). Aby uzyskać więcej informacji o folderze `.obsidian` i sposobie dostępu do niego, zapoznaj się z [[Jak Obsidian przechowuje dane#Ustawienia skarbca|ustawieniami skarbca]] oraz [[Folder konfiguracji|folderami konfiguracji]].
