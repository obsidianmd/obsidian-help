---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Jak synchronizować notatki Obsidian między urządzeniami i platformami.
---
Obsidian przechowuje notatki lokalnie na Twoim urządzeniu, więc zawsze masz do nich dostęp, nawet offline. Aby uzyskać dostęp do notatek na wielu urządzeniach, musisz skonfigurować metodę synchronizacji.

Ten przewodnik omawia popularne metody synchronizacji, w tym wskazówki jak uniknąć utraty danych i zapewnić płynne działanie.

Zalecamy również zapoznanie się z naszym [[Tworzenie kopii zapasowej plików Obsidian|przewodnikiem tworzenia kopii zapasowych]], aby chronić swoje dane.

## Metody synchronizacji

W Obsidian Twoje dane są po prostu przechowywane jako pliki w folderze zwanym [[Sejfy lokalne i zdalne|skarbcem]]. Oznacza to, że istnieje wiele sposobów synchronizacji danych.

Oto kilka powszechnie używanych metod synchronizacji zgłaszanych przez członków [społeczności Obsidian](https://obsidian.md/community):

1. **Synchronizacja pierwszej strony**: [[#Obsidian Sync]]
2. **Synchronizacja chmurowa firm trzecich**: [[#iCloud]], [[#OneDrive]] i [[#Google Drive]]
3. **Synchronizacja lokalna**: [[#Syncthing]]
4. **Kontrola wersji**: [[#Git]] i [[#Working Copy]]

## Obsidian Sync

**Zalecane systemy**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Najprostszą i oficjalnie wspieraną metodą synchronizacji jest nasze rozwiązanie pierwszej strony: [[Wprowadzenie do Obsidian Sync|Obsidian Sync]].

Obsidian Sync utrzymuje synchronizację Twoich skarbców na wszystkich urządzeniach, korzystając ze zdalnego sejfu do tworzenia kopii danych. Lokalna kopia pozostaje na Twoich urządzeniach przez cały czas.

Postępuj zgodnie z [[Konfiguracja Obsidian Sync|przewodnikiem konfiguracji]], aby skonfigurować Obsidian Sync.

## iCloud

**Zalecane systemy**: `macOS`, `iOS`, `iPadOS`

iCloud może być używany do synchronizacji skarbców między iOS a macOS. Jednak **iCloud Drive na Windows** może prowadzić do duplikacji lub uszkodzenia plików.

**Jak utworzyć i przechowywać skarbiec w iCloud Drive**:

- **Włącz iCloud Drive**:
    - Na macOS: Przejdź do **Preferencje systemowe → Apple ID → iCloud → iCloud Drive**.
    - Na iOS: Przejdź do **Ustawienia → [Twoje imię] → iCloud → iCloud Drive**.
- **Utwórz nowy skarbiec w iCloud**:
    - Na macOS:
        1. Otwórz **Obsidian** i wybierz **Stwórz nowy sejf**.
        2. W oknie wyboru plików przejdź do **iCloud Drive → Obsidian**.
        3. Utwórz folder dla swojego skarbca i nadaj mu nazwę.
        4. Wybierz **Stwórz**, aby zakończyć.
    - Na iOS:
        1. Otwórz **Obsidian** i stuknij **Stwórz nowy sejf**.
        2. Wprowadź nazwę dla swojego skarbca.
        3. Włącz opcję **Przechowuj w iCloud**.
        4. Stuknij **Stwórz**.
- **Otwórz skarbiec na innym urządzeniu Apple**:
    - Na innym urządzeniu macOS lub iOS otwórz **Obsidian**, przejdź do [[Zarządzaj skarbcami|Przełącznika skarbców]] i wybierz **Otwórz folder jako sejf**. Przejdź do **iCloud Drive → Obsidian**.

> [!warning]+ Lokalizacja folderu na iOS i iPadOS
> Podczas korzystania z iCloud na urządzeniach mobilnych upewnij się, że Twój skarbiec jest przechowywany w prawidłowej lokalizacji: `iCloud Drive/Obsidian/[Nazwa Twojego skarbca]`.
> 
> Skarbce powinny znajdować się w folderze **Obsidian** w iCloud Drive. Folder po prawej stronie z ikoną Obsidian jest prawidłowy. Nie używaj zwykłego folderu bez ikony aplikacji.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Aby zweryfikować lokalizację skarbca, otwórz aplikację **Pliki**, stuknij **Przeglądaj**, wybierz **iCloud Drive** w sekcji **Lokalizacje** i potwierdź, że Twój skarbiec znajduje się w folderze **Obsidian**. Jeśli Twój skarbiec jest w innej lokalizacji, mogą wystąpić problemy z synchronizacją.

> [!tip] Najlepsze praktyki
> - Dla **macOS 14 (Sonoma) i starszych**: Wyłącz **Optymalizuj pamięć Maca** w ustawieniach iCloud, aby zapobiec przenoszeniu plików poza urządzenie. To ustawienie wpływa na całą pamięć iCloud na urządzeniu, nie tylko na Obsidian.
> - Dla **macOS 15 (Sequoia)**: Kliknij prawym przyciskiem myszy folder **Obsidian** w iCloud Drive i wybierz **Zachowaj pobrane**.

## OneDrive

**Zalecane systemy**: `Windows`, `macOS` (ograniczona funkcjonalność na Androidzie)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) jest popularną opcją pamięci w chmurze dla użytkowników Windows i macOS. Ma jednak ograniczenia na Androidzie i nie jest oficjalnie wspierany do synchronizacji skarbców Obsidian na iOS.

> [!info] Zachowaj pliki dostępne offline
> Przed użyciem OneDrive do synchronizacji upewnij się, że folder skarbca jest oznaczony jako **Zawsze zachowuj na tym urządzeniu**. Zapobiega to przenoszeniu plików przez OneDrive i sytuacji, w której Obsidian uznaje je za brakujące.

**Jak utworzyć i przechowywać skarbiec w OneDrive**:

1. **Skonfiguruj OneDrive**:
   - Na Windows: Zaloguj się przez aplikację OneDrive lub konto Microsoft.
   - Na macOS: Pobierz aplikację OneDrive i zaloguj się.
2. **Utwórz nowy skarbiec w OneDrive**:
   - Na Windows/macOS:
     1. Otwórz **Eksplorator plików** (Windows) lub **Finder** (macOS) i przejdź do **OneDrive → Dokumenty**.
     2. Utwórz nowy folder (np. \"Skarbiec Obsidian\").
     3. Otwórz **Obsidian**, wybierz **Stwórz nowy sejf** i wskaż folder OneDrive.
3. **Otwórz skarbiec na innym urządzeniu**:
   - Na innym urządzeniu otwórz **Obsidian**, przejdź do [[Zarządzaj skarbcami|Przełącznika skarbców]] i wybierz **Otwórz folder jako sejf**. Przejdź do **OneDrive → Dokumenty**.

> [!info] Synchronizacja z Androidem
> OneDrive może nie działać dobrze przy synchronizacji z Androidem. Rozważ użycie aplikacji takich jak [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) lub [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Najlepsze praktyki
> - Zawsze utrzymuj pliki skarbca jako **Dostępne offline**, klikając folder prawym przyciskiem myszy i wybierając **Zawsze zachowuj na tym urządzeniu**.
> - Unikaj używania funkcji **Pliki na żądanie** OneDrive dla skarbców, aby zapobiec problemom z synchronizacją.

## Google Drive

**Zalecane systemy**: `Windows`, `macOS`, `Android` (ograniczona funkcjonalność na iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) jest kolejnym popularnym rozwiązaniem pamięci w chmurze. Chociaż nie jest oficjalnie wspierany do synchronizacji skarbców Obsidian, możesz używać aplikacji i wtyczek firm trzecich do synchronizacji między urządzeniami.

> [!info] Wsparcie iOS
> Google Drive nie jest oficjalnie wspierany do synchronizacji skarbców Obsidian na iOS. Rozważ użycie rozwiązania lub wtyczki firmy trzeciej do synchronizacji na iOS.

**Jak utworzyć i przechowywać skarbiec w Google Drive**:

1. **Skonfiguruj Google Drive**:
    - Na Windows lub macOS: Pobierz aplikację Google Drive i zaloguj się.
    - Na Androidzie: Upewnij się, że Google Drive jest włączony i zalogowany.
2. **Utwórz nowy skarbiec w Google Drive**:
    - Na Windows/macOS:
        1. Otwórz **Eksplorator plików** (Windows) lub **Finder** (macOS) i przejdź do **Google Drive**.
        2. Utwórz nowy folder (np. \"Skarbiec Obsidian\").
        3. Otwórz **Obsidian**, wybierz **Stwórz nowy sejf** i wskaż folder Google Drive.
3. **Otwórz skarbiec na innym urządzeniu**:
    - Na innym urządzeniu otwórz **Obsidian**, przejdź do [[Zarządzaj skarbcami|Przełącznika skarbców]] i wybierz **Otwórz folder jako sejf**. Przejdź do folderu Google Drive.

> [!tip] Najlepsze praktyki
> - Ustaw pliki skarbca jako **Dostępne offline** w Google Drive, aby uniknąć problemów z synchronizacją spowodowanych przenoszeniem plików.
> - Dla iOS rozważ alternatywne metody, takie jak [[Wprowadzenie do Obsidian Sync|Obsidian Sync]], [[#iCloud]], lub użyj wtyczki **Remotely Save**.

## Syncthing

**Zalecane systemy**: `Windows`, `macOS`, `Linux`

Syncthing to zdecentralizowane narzędzie do synchronizacji plików, które nie polega na pamięci w chmurze. Synchronizuje skarbiec bezpośrednio między urządzeniami przez sieć lub internet.

> [!info]+ Wsparcie dla Androida
> Oficjalna aplikacja Syncthing na Androida nie jest już utrzymywana. Jednak fork społecznościowy o nazwie [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) kontynuuje aktywny rozwój i może być używany na urządzeniach z Androidem.

**Jak utworzyć i przechowywać skarbiec za pomocą Syncthing**:

1. **Skonfiguruj Syncthing**:
   - Zainstaluj Syncthing na każdym urządzeniu. Zapoznaj się ze [stroną Syncthing](https://syncthing.net/), aby uzyskać przewodniki instalacji.
   - Na Androidzie zainstaluj [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) z wydań na GitHubie lub F-Droid.
2. **Utwórz i skonfiguruj udostępniony folder**:
   - Na wszystkich urządzeniach:
     1. Otwórz Syncthing i utwórz udostępniony folder. Ustaw ścieżkę folderu na skarbiec Obsidian.
     2. Upewnij się, że ten sam folder jest wybrany na wszystkich urządzeniach.
     3. Skonfiguruj preferencje synchronizacji folderu (np. **Wyślij i odbierz** dla synchronizacji dwukierunkowej).
3. **Otwórz skarbiec w Obsidian**:
   - Po zsynchronizowaniu folderu między urządzeniami otwórz **Obsidian**, przejdź do [[Zarządzaj skarbcami|Przełącznika skarbców]] i wybierz **Otwórz folder jako sejf**.

> [!info] Dostępność urządzeń
> Syncthing działa najlepiej, gdy co najmniej jedno urządzenie jest zawsze włączone, aby zapewnić ciągłą synchronizację.

> [!tip] Najlepsze praktyki
> - Dla synchronizacji lokalnej upewnij się, że wszystkie urządzenia są podłączone do tej samej sieci.
> - Wyklucz `.obsidian` z synchronizacji, jeśli chcesz mieć osobne ustawienia na każdym urządzeniu.
> - Używaj wzorców ignorowania, aby uniknąć synchronizacji plików tymczasowych lub kopii zapasowych.

## Git

**Zalecane systemy**: `Windows`, `macOS`, `Linux`

**Git** to system kontroli wersji, który pozwala śledzić zmiany, współpracować z innymi i synchronizować skarbce za pośrednictwem repozytoriów takich jak GitHub, GitLab lub serwer własny.

**Jak synchronizować skarbiec za pomocą Git**:

1. **Skonfiguruj zdalne repozytorium**:
    - Utwórz repozytorium na platformie hostingowej Git (np. GitHub, GitLab lub serwer własny).
2. **Synchronizuj skarbiec**:
    1. Otwórz terminal lub interfejs graficzny Git (np. GitKraken, Sourcetree).
    2. Zainicjalizuj repozytorium Git w folderze skarbca za pomocą `git init`.
    3. Dodaj zdalne repozytorium: `git remote add origin [URL]`.
    4. Zatwierdź zmiany: `git add .` i `git commit -m "Twoja wiadomość"`.
    5. Wypchnij zmiany: `git push origin main`.
3. **Pobierz zmiany na innych urządzeniach**:
    - Sklonuj repozytorium na innym urządzeniu i pobierz zmiany za pomocą `git pull origin main`.

> [!info] Wymagana ręczna synchronizacja
> Git zapewnia silną kontrolę wersji, ale synchronizacja nie jest automatyczna. Musisz ręcznie wypychać i pobierać zmiany.

## Synchronizacja na iPhone i iPad

**Zalecane opcje**:
- [[Wprowadzenie do Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Unikaj łączenia usług synchronizacji
> Unikaj synchronizacji tego samego skarbca za pośrednictwem wielu usług (np. używając jednocześnie Obsidian Sync i iCloud), aby zapobiec konfliktom danych lub ich uszkodzeniu.

**Niewspierane opcje**:
Następujące usługi nie są oficjalnie wspierane na iOS, ale użytkownicy znaleźli obejścia przy użyciu narzędzi lub wtyczek firm trzecich:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Niektórzy użytkownicy z powodzeniem używają wtyczek takich jak **Remotely Save** lub **LiveSync** do synchronizacji skarbców na iOS. Jednak te metody nie są oficjalnie wspierane, a wyniki mogą się różnić.

### Working Copy

**Zalecane systemy**: `iOS`
**Wymaga**: [[#Git]]

**Working Copy** to klient Git dla iOS, który pozwala klonować, zatwierdzać i wypychać zmiany do repozytorium Git. Działa dobrze do synchronizacji skarbców Obsidian przez Git, chociaż niektóre funkcje wymagają płatnego zakupu w aplikacji.

**Jak synchronizować skarbiec za pomocą Working Copy**:

1. **Zainstaluj Working Copy**:
    - Pobierz aplikację **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** na iPhone lub iPad.
2. **Sklonuj repozytorium Git**:
    - Otwórz Working Copy, stuknij **Dodaj repozytorium** i wprowadź adres URL repozytorium (np. GitHub, GitLab).
3. **Połącz repozytorium z Obsidian**:
    - Połącz sklonowany folder repozytorium z pustym skarbcem w **Obsidian**.
4. **Zatwierdź i wypchnij zmiany**:
    - Po edycji notatek w Obsidian użyj Working Copy, aby **zatwierdzić** i **wypchnąć** zmiany do zdalnego repozytorium.
    - Na innych urządzeniach pobierz zmiany za pomocą Git, aby zsynchronizować skarbiec.

> [!info] Użycie przez społeczność
> Chociaż Working Copy nie jest oficjalnie wspierane, wielu użytkowników z powodzeniem używa go do synchronizacji skarbców z Git.

## Najczęściej zadawane pytania

**Dlaczego moja preferowana usługa synchronizacji nie jest oficjalnie wspierana?**

W przeciwieństwie do niektórych aplikacji do notatek, które uzyskują dostęp do jednego pliku na raz, Obsidian wymaga dostępu do całego skarbca ze względu na swoje funkcje (np. aktualizacja linków przy zmianie nazwy pliku). Utrudnia to niezawodne działanie niektórych usług z Obsidian.

**Dlaczego muszę zachować pliki jako „Dostępne offline"?**

Jeśli usługi takie jak OneDrive lub iCloud przenoszą pliki poza urządzenie (np. używając **Plików na żądanie** lub **Optymalizuj pamięć Maca**), Obsidian nie może uzyskać do nich dostępu, co powoduje problemy z synchronizacją. Oznacz folder skarbca jako **Zawsze zachowuj na tym urządzeniu** (OneDrive) lub upewnij się, że **Zachowaj pobrane** jest włączone (iCloud).

**Jak zarządzać różnymi konfiguracjami moich skarbców?**

Obsidian pozwala dostosować folder konfiguracji dla każdego urządzenia za pomocą funkcji [[Folder konfiguracji|Folderów konfiguracji]].
