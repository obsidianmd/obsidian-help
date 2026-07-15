---
permalink: ios
---
Aplikacja mobilna Obsidian na iOS i iPadOS przenosi zaawansowane możliwości tworzenia notatek na Twojego iPhone'a i iPada. Możesz ją pobrać z [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Ta strona opisuje funkcje specyficzne dla iOS, w tym widżety, integrację z Siri oraz Skróty.

## Synchronizacja

Informacje o synchronizowaniu notatek między urządzeniami znajdziesz w artykule [[Synchronizuj notatki między urządzeniami|Synchronizuj notatki między urządzeniami]].

## Widżety

Obsidian na iOS oferuje kilka widżetów umożliwiających szybkie działania na sejfie.

> [!note] Uwaga
> Widżety są dostępne na iOS i iPadOS 18 i nowszych.
> Widżety nie są dostępne podczas korzystania z opcji „Wymagaj Face ID" do odblokowania aplikacji.


### Widżety ekranu blokady i Centrum sterowania

Widżety ekranu blokady i Centrum sterowania umożliwiają:
- Tworzenie nowej notatki
- Otwieranie konkretnej notatki
- Otwieranie dziennika
- Otwieranie wyszukiwania
- Otwieranie Obsidian

### Widżety ekranu głównego

Widżety ekranu głównego umożliwiają:
- Tworzenie notatki
- Wyświetlanie notatki
- Otwieranie dziennika

### Dostosowywanie widżetów

Możesz dostosować widżety do swojego przepływu pracy, np. wybierając sejf lub wskazując konkretną notatkę do otwarcia.

- **Widżety ekranu głównego:** Dotknij i przytrzymaj widżet, a następnie wybierz **Edytuj widżet**.
- **Widżety ekranu blokady:** Dotknij i przytrzymaj ekran blokady, dotknij **Dostosuj**, wybierz ekran blokady, a następnie dotknij widżetu, który chcesz dostosować.
- **Widżety Centrum sterowania:** Otwórz Centrum sterowania, dotknij przycisku **+** w lewym górnym rogu, aby rozpocząć edycję, a następnie dotknij widżetu, który chcesz dostosować.

Opcje konfiguracji widżetu **Nowa notatka**:

![[ios-new-note-configuration.png|400]]

Opcje konfiguracji widżetu **Podgląd notatki**:

![[ios-view-note-configuration.png|400]]

## Skróty

Obsidian integruje się z aplikacją Skróty firmy Apple, umożliwiając tworzenie zaawansowanych automatyzacji. Dostępne skróty obejmują:

- **Otwórz notatkę** — Otwiera konkretną notatkę w sejfie
- **Stwórz nową notatkę** — Tworzy nową notatkę w sejfie
- **Otwórz dziennik** — Przechodzi bezpośrednio do dzisiejszego dziennika
- **Przechwyć do dziennika** — Dołącza lub wstawia tekst do dziennika bez otwierania aplikacji Obsidian
- **Przechwyć do zakładki** — Dołącza lub wstawia tekst do notatki z zakładek bez otwierania aplikacji Obsidian

Skróty przechwytywania są szczególnie przydatne do szybkiego tworzenia notatek, ponieważ pozwalają dodawać treść do notatki w tle.

## Arkusz udostępniania

Obsidian oferuje rozszerzenie arkusza udostępniania, którego możesz używać w innych aplikacjach do wysyłania linków, tekstu, obrazów lub dokumentów do sejfu Obsidian.

> [!note]
> - Natywny arkusz udostępniania jest dostępny na iOS i iPadOS 18 i nowszych.
> - Funkcje arkusza udostępniania opisane w tej sekcji wymagają Obsidian 1.13.0 lub nowszego.

1. Otwórz stronę internetową w Safari, a następnie dotknij przycisku **Udostępnij**.
2. W menu udostępniania przesuń palcem w lewo po rzędzie aplikacji, dotknij **Więcej**, a następnie dotknij **Edytuj**.
3. Włącz **Obsidian**, aby pojawiło się w menu udostępniania.
4. Dotknij przycisku **Dodaj** obok Obsidian, aby dodać go do **Ulubionych**.
5. (Opcjonalne) Przeciągnij przycisk **Zmień kolejność** obok Obsidian, aby zmienić jego pozycję w Ulubionych.
6. Dotknij **Gotowe**.
7. Z powrotem w menu udostępniania Safari dotknij **Obsidian**.
8. Po dotknięciu Obsidian pojawi się arkusz udostępniania Obsidian, umożliwiający udostępnienie wybranej treści do sejfu.

![[ios-share-sheet-extension.png|400]]

### Lokalizacje

Lokalizacje pozwalają zdecydować, gdzie trafią udostępnione treści, zanim je zapiszesz.

Lokalizacje mogą przechwytywać do:
- **Nowa notatka** — Tworzy nową notatkę w skarbcu lub folderze.
- **Dziennik** — Dołącza lub wstawia treść do dzisiejszego dziennika.
- **Notatka z zakładek** — Dołącza lub wstawia treść do notatki z zakładek.
- **Notatka** — Wybiera istniejącą notatkę w skarbcu.
- **Nowa zakładka** — Zapisuje udostępniony URL w zakładkach Obsidian.

![[ios-share-sheet-locations.png|400]]

### Dostosowywanie lokalizacji

Możesz tworzyć lokalizacje dla typowych przepływów pracy, np. zapisywanie artykułów do skrzynki odbiorczej, dołączanie cytatów do dziennika lub dodawanie linków do zakładek.

Aby dostosować lokalizacje:

1. Otwórz Obsidian z arkusza udostępniania iOS.
2. Dotknij bieżącej lokalizacji na pasku narzędzi.
3. Dotknij przycisku **+**, aby utworzyć nową lokalizację, lub wybierz istniejącą lokalizację do edycji.
4. Wybierz skarbiec, zachowanie i opcjonalne ustawienia.

W zależności od typu `Zachowanie` możesz skonfigurować opcje takie jak:
- Folder
- Szablon
- Grupa zakładek
- Pozycja dołączania lub wstawiania
- Czy udostępniane linki przechwytują **Pełny tekst** czy tylko **URL**

![[ios-share-sheet-add-location.png|400]]

### Używanie szablonu podczas udostępniania

Możesz użyć szablonu podczas udostępniania treści z arkusza udostępniania. Szablony pozwalają formatować przechwycone treści internetowe z takimi szczegółami jak tytuł strony, autor, witryna źródłowa i data publikacji.

Aby skonfigurować lokalizację z szablonem:

1. Otwórz Obsidian z arkusza udostępniania iOS.
2. Dotknij bieżącej lokalizacji na pasku narzędzi.
3. Dotknij przycisku **+**, aby utworzyć nową lokalizację.
4. Wprowadź nazwę lokalizacji.
5. Wybierz skarbiec.
6. Ustaw **Zachowanie** na **Nowa notatka**.
7. W sekcji **Opcjonalne** dotknij **Szablon**.
8. Wybierz notatkę ze skarbca, która posłuży jako szablon.
9. Dotknij **Zapisz**, aby zapisać lokalizację.

![[ios-share-sheet-set-template.png|400]]

Gdy udostępniasz link za pomocą tej lokalizacji, Obsidian najpierw stosuje szablon, a następnie dodaje udostępnioną treść.

Obsługiwane symbole zastępcze szablonu:

| Symbol zastępczy | Opis |
| --- | --- |
| `{{author}}` | Autor artykułu |
| `{{description}}` | Opis lub podsumowanie artykułu |
| `{{domain}}` | Nazwa domeny witryny |
| `{{favicon}}` | URL faviconu witryny |
| `{{image}}` | URL głównego obrazu artykułu |
| `{{published}}` | Data publikacji artykułu w domyślnym formacie daty |
| `{{published: YYYY-MM-DD}}` | Data publikacji w niestandardowym formacie daty |
| `{{site}}` | Nazwa witryny |
| `{{title}}` | Tytuł artykułu |
| `{{url}}` | URL artykułu |
| `{{wordCount}}` | Łączna liczba słów w wyodrębnionej treści |

Możesz również użyć standardowych symboli zastępczych daty i godziny:

| Symbol zastępczy | Opis |
| --- | --- |
| `{{date}}` | Bieżąca data |
| `{{date: YYYY-MM-DD}}` | Bieżąca data w niestandardowym formacie |
| `{{time}}` | Bieżąca godzina |
| `{{time: HH:mm}}` | Bieżąca godzina w niestandardowym formacie |

## Integracja z Siri

Możesz używać poleceń głosowych Siri do interakcji z Obsidian:

- „Capture using Obsidian"
- „Capture to Obsidian"
- „Open my daily note in Obsidian"
- „Search in Obsidian"

## Integracja ze Spotlight

Gdy wyszukujesz „Obsidian" w iOS Spotlight, zobaczysz szybkie akcje:
- Nowa notatka
- Wyszukiwarka
- Dziennik
