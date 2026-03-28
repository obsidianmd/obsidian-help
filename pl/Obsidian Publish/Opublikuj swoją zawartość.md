---
permalink: publish/publish
publish: true
mobile: true
description: 'Dowiedz się, jak publikować swoje treści za pomocą Obsidian Publish.'
---
Ta strona wyjaśnia, jak zarządzać opublikowaną zawartością. Aby dowiedzieć się, jak dostosować styl swojej strony, zobacz [[Dostosuj swoją stronę]].

## Wymagania wstępne

- Konto Obsidian. Jeśli go nie masz, [zarejestruj się teraz](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Aktywna subskrypcja Obsidian Publish. Jeśli jej nie masz, wykup ją w [panelu swojego konta](https://obsidian.md/account/publish).
- Wtyczka podstawowa **Publish** jest [[Skonfiguruj Obsidian Publish#Włącz Obsidian Publish|włączona]].
- [[Zarządzaj stronami#Tworzenie nowej strony|Strona Publish]] została utworzona.

## Publikowanie notatek

1. Na **wstążce** wybierz **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. W oknie dialogowym **Opublikuj zmiany** wybierz **NOWE**, aby wyświetlić wszystkie nieopublikowane notatki.
3. Zaznacz notatki, które chcesz opublikować.
4. Wybierz **Opublikuj**.

## Cofanie publikacji notatek

Notatki pozostają w Twoim lokalnym skarbcu nawet po cofnięciu ich publikacji.

1. Na **wstążce** wybierz **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. W oknie dialogowym **Opublikuj zmiany** wybierz **BEZ ZMIAN**, aby wyświetlić wszystkie opublikowane notatki.
3. Zaznacz notatki, których publikację chcesz cofnąć.
4. Wybierz **Opublikuj**.

## Aktualizowanie opublikowanej notatki

1. Na **wstążce** wybierz **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. W oknie dialogowym **Opublikuj zmiany** wybierz **ZMIENIONE**, aby wyświetlić wszystkie notatki zmodyfikowane od ostatniej publikacji.
3. Zaznacz notatki, które chcesz zaktualizować.
4. Wybierz **Opublikuj**.

> [!hint] Usuwanie przemianowanych lub usuniętych notatek i obrazów z Publish odbywa się w tym kroku. Musisz ręcznie zaznaczyć pole wyboru, aby usunąć te dane, ponieważ ze względów bezpieczeństwa nie są one automatycznie zaznaczane.

## Publikowanie powiązanych danych

Podczas publikowania notatek zawierających linki do innych notatek lub osadzone obrazy mogą wystąpić uszkodzone linki, jeśli powiązane notatki nie zostaną również opublikowane. **Obsidian Publish** pomaga temu zapobiec, automatycznie zaznaczając multimedia powiązane z notatkami, które już wybrałeś.

Aby uwzględnić wszystkie powiązane notatki, wybierz **Dodaj powiązane** w oknie dialogowym **Opublikuj zmiany**.

Przed publikacją przejrzyj zaktualizowany wybór, aby upewnić się, że nie zawiera danych, których nie jesteś jeszcze gotowy opublikować.

> [!tip] Funkcja **Dodaj powiązane** uwzględnia wszelkie wykluczenia zdefiniowane w [[#Ignorowanie danych]].

## Automatyczne zaznaczanie danych do publikacji

Ustaw `publish: true` w [[Atrybuty|atrybutach]] notatki, aby automatycznie uwzględnić ją do publikacji jako nową lub zmienioną notatkę.

Możesz również automatycznie zaznaczać notatki i powiązane obrazy w określonych folderach, dodając je jako foldery **Wybrane**:

1. Na **wstążce** wybierz **Opublikuj zmiany** ![[lucide-send.svg#icon]] lub otwórz [[Lista poleceń|paletę poleceń]] i wpisz **Publish: Publish changes...**.
2. Wybierz ikonę **Ustaw filtry publikacji** ![[lucide-filter.svg#icon]].
3. W sekcji **Wybrane foldery** wybierz **Zarządzaj**.
4. Wybierz foldery, które chcesz uwzględnić, z podpowiedzi.
5. Folder zostanie dodany do listy wybranych.
6. Wybierz **Gotowe**, gdy skończysz.

### Ignorowanie danych

Aby zignorować notatkę w Obsidian Publish, ustaw `publish: false` w [[Atrybuty|atrybutach]] notatki. Notatka nie będzie się już pojawiać na liście notatek do publikacji.

Możesz również automatycznie ignorować notatki i obrazy w określonych folderach, dodając je jako foldery **Pominięte**:

1. Na **wstążce** wybierz **Opublikuj zmiany** ![[lucide-send.svg#icon]] lub otwórz [[Lista poleceń|paletę poleceń]] i wpisz **Publish: Publish changes...**.
2. Wybierz ikonę **Ustaw filtry publikacji** ![[lucide-filter.svg#icon]].
3. W sekcji **Pominięte foldery** wybierz **Zarządzaj**.
4. Wybierz foldery, które chcesz wykluczyć, z podpowiedzi.
5. Folder zostanie dodany do listy pominiętych.
6. Wybierz **Gotowe**, gdy skończysz.

> [!note] `publish: true` nadpisuje pominięte foldery
> Jeśli plik ma ustawione `publish: true`, nadal zostanie opublikowany, nawet jeśli znajduje się w folderze lub filtrze, który jest wykluczony. Dzieje się tak, ponieważ `publish: true` zapewnia bardziej szczegółową kontrolę.
