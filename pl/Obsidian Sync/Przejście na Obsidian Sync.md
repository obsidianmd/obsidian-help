---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Dowiedz się, jak przejść z obecnego rozwiązania synchronizacji na Obsidian Sync.'
---
Dowiedz się, jak przejść z aktualnego rozwiązania synchronizacji na Obsidian Sync.

> [!warning] Unikaj korzystania z wielu rozwiązań do synchronizacji tych samych plików
> [[Najczęściej zadawane pytania#Czy mogę używać zewnętrznej synchronizacji z Obsidian Sync?|Nie zalecamy]] korzystania z Obsidian Sync równocześnie z usługami przechowywania w chmurze (np. iCloud, Dropbox, OneDrive, Google Drive), ponieważ może to powodować konflikty. Jednak usługi przechowywania w chmurze mogą odgrywać rolę w Twojej strategii [[Tworzenie kopii zapasowej plików Obsidian|tworzenia kopii zapasowych]].

## Przenieś swój sejf poza usługę synchronizacji lub chmurę

Jeśli Twój sejf jest przechowywany w którejkolwiek z poniższych lokalizacji, prawdopodobnie jest synchronizowany przez usługę zewnętrzną:

- **Windows**: `C:\Users\Username\Desktop` lub `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` lub `/users/username/Documents`
- **iOS**: Folder **iCloud** w aplikacji Pliki
- **Inne**: Dowolny folder w usłudze synchronizacji, np. `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault` itp.

Android i Linux zazwyczaj mają mniej problemów z tym związanych, ale mimo to warto sprawdzić lokalizację sejfu na tych urządzeniach.

> [!tip] Jeśli Twój aktualny lokalny sejf jest połączony ze zdalnym sejfem, Obsidian spróbuje wykryć, czy sejf znajduje się w usłudze synchronizacji. Jeśli tak, zobaczysz komunikat na górze ustawień Obsidian Sync.

Aby uniknąć konfliktów z usługami synchronizacji, zalecamy przechowywanie sejfów Obsidian w następujących lokalizacjach:

- **Windows**: Zalecane lokalizacje w kolejności:
    1. `D:\` lub dowolny inny dysk na urządzeniu, który nie jest dyskiem C: ani dyskiem sieciowym
    2. `C:\Vaults` (jeśli masz uprawnienia do korzystania z dysku C:\)
    3. `C:\Users\Username\Vaults` (jeśli musisz przechowywać sejf w C:\Users\Username, upewnij się, że OneDrive nie jest ustawiony na usuwanie plików. OneDrive jest zazwyczaj mniej agresywny poza folderami `Desktop` i `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Brak konkretnych zaleceń ze względu na różnorodność systemów plików. Upewnij się tylko, że Obsidian ma pełne uprawnienia do odczytu/zapisu i że żadna usługa synchronizacji nie zarządza tym folderem.
- **iOS/iPadOS**: Przechowuj sejf w lokalizacji **Na moim iPhonie** lub **Na urządzeniu**.
- **Android**: Używaj folderu `Documents/` na swoim urządzeniu.

## Przenoszenie sejfu za pomocą Obsidian na komputerze

![[Zarządzaj skarbcami#Przenoszenie skarbca do innego folderu]]

## Przenoszenie sejfu na urządzeniu mobilnym

Na urządzeniach mobilnych Obsidian działa w środowisku izolowanym (sandboxed), co oznacza, że nie można przenosić sejfów w aplikacji tak jak na komputerze.

### Android

Systemy plików Androida różnią się znacznie w zależności od urządzenia, ale ogólnie wykonaj te same kroki, co przy ręcznym przenoszeniu sejfu, upewniając się, że jest on usunięty z wszelkich usług synchronizacji na urządzeniu.

### iOS i iPadOS

Aby przenieść istniejący sejf z iCloud na urządzenie, wykonaj następujące kroki:

> [!note] Jeśli masz już dane na innym urządzeniu i skonfigurowałeś Obsidian Sync, zalecamy zamiast tego [[Konfiguracja Obsidian Sync#Synchronizacja zdalnego sejfu na innym urządzeniu|skonfigurowanie nowego lokalnego sejfu z Sync]].

- Wykonaj [[Tworzenie kopii zapasowej plików Obsidian|kopię zapasową]] swojego sejfu.
- Utwórz nowy sejf na urządzeniu, upewniając się, że opcja **Zapisz w iCloud Drive** jest wyłączona.
- Wymuś zamknięcie aplikacji Obsidian na wszystkich urządzeniach, aby wstrzymać synchronizację.
- Otwórz aplikację **Pliki** na urządzeniu iOS/iPadOS.
- Przytrzymaj długo folder sejfu w **iCloud Drive → Obsidian**, a następnie wybierz **Przenieś**.
- Przenieś sejf do **Na moim iPhonie/Urządzeniu → Obsidian** i potwierdź, że jest widoczny.
- Stuknij **Kopiuj**.
- Wróć do **iCloud Drive → Obsidian** i usuń stary folder sejfu.

Po ponownym otwarciu Obsidian sejf powinien wyświetlać ikonę sejfu zamiast ikony chmury, co potwierdza, że nie znajduje się już w iCloud Drive. Obsidian Sync nie będzie również wyświetlać komunikatu ostrzegawczego w swoich ustawieniach.

## Następne kroki

- Chcesz rozpocząć korzystanie z Obsidian Sync? [[Konfiguracja Obsidian Sync]]
- Nadal potrzebujesz pomocy? Sprawdź [[Rozwiązywanie problemów z Obsidian Sync]]
