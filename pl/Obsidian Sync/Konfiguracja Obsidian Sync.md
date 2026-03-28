---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Zakupiłeś Obsidian Sync i jesteś gotowy, aby zacząć. Ten przewodnik pomoże Ci skonfigurować i dostosować ustawienia Obsidian Sync do codziennego użytku.'
---
Zakupiono Obsidian Sync i można rozpocząć pracę. Ten przewodnik pomoże Ci skonfigurować i dostosować ustawienia Obsidian Sync do codziennego użytku.

- **Nowy użytkownik Obsidian Sync?** Zobacz: [[#Konfiguracja Obsidian Sync po raz pierwszy]]
- **Podłączanie drugiego urządzenia?** Zobacz: [[#Synchronizacja zdalnego sejfu na innym urządzeniu]]
- **Potrzebujesz wprowadzić zmiany?** Zobacz: [[#Zarządzanie zdalnymi sejfami]]

## Konfiguracja Obsidian Sync po raz pierwszy

W tej sekcji utworzysz nowy [[Sejfy lokalne i zdalne|zdalny sejf]] i połączysz go z istniejącym lokalnym skarbcem. Nie musisz tworzyć nowego, pustego lokalnego skarbca, aby korzystać z Obsidian Sync w tym celu.

> [!info] Czy Twój obecny skarbiec znajduje się w folderze iCloud, OneDrive, Dropbox lub innej usługi synchronizacji? Jeśli **tak** lub **nie masz pewności**, przeczytaj [[Najczęściej zadawane pytania#Czy mogę używać zewnętrznej synchronizacji z Obsidian Sync?|ten artykuł]] oraz [[Przejście na Obsidian Sync]] przed kontynuowaniem.

**Wymagania wstępne**

- Konto Obsidian. Jeśli go nie masz, [zarejestruj się teraz](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Aktywna [[Plany i limity przechowywania|subskrypcja]] Obsidian Sync. Jeśli jej nie masz, wykup ją w [panelu swojego konta](https://obsidian.md/account/sync).
- **Zalecane**: Wdrożony [[Tworzenie kopii zapasowej plików Obsidian|system kopii zapasowych]] dla plików Obsidian. Usługa synchronizacji nie jest kopią zapasową.

### Zaloguj się na swoje konto Obsidian

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym wybierz **Ogólne**.
3. W sekcji **Konto → Twoje konto** wybierz **Zaloguj się**.
4. W polu **E-mail** wprowadź swój adres e-mail.
5. W polu **Hasło** wprowadź swoje hasło.
6. Wybierz **Zaloguj się**.

### Włącz Obsidian Sync

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym w sekcji **Opcje** wybierz **Wbudowane wtyczki**.
3. Włącz przełącznik **Sync**.

### Utwórz nowy zdalny sejf

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym wybierz **Sync**.
3. Obok **Zdalny sejf** wybierz **Wybierz**.
4. Wybierz **Stwórz nowy sejf**.
5. W polu **Nazwa sejfu** wprowadź nazwę zdalnego sejfu.
6. W polu **Region** wybierz [[Konfiguracja Obsidian Sync#Regionalne serwery synchronizacji|region]] serwera dla swojego zdalnego sejfu.
7. W polu **Hasło szyfrowania** wybierz hasło dla swojego sejfu. Spowoduje to utworzenie sejfu z szyfrowaniem end-to-end. Hasło sejfu jest oddzielne od hasła konta Obsidian i może być inne dla każdego z Twoich sejfów. Więcej informacji znajdziesz w artykule [[Bezpieczeństwo i prywatność]].
8. Wybierz **Stwórz**.

### Połącz ze zdalnym sejfem

1. Wybierz **Połącz** obok nowo utworzonego sejfu.
2. Wprowadź hasło skonfigurowane dla sejfu w polu **Hasło szyfrowania**, jeśli zdecydowałeś się na [[Obsidian Sync/Bezpieczeństwo i prywatność#Co oznacza szyfrowanie end-to-end?|szyfrowanie end-to-end]].
3. Wybierz **Odblokuj sejf**.
4. **Nie rozpoczynaj jeszcze synchronizacji.** Sprawdź ustawienia synchronizacji w sekcji [[#Dostosuj ustawienia Obsidian Sync|dostosuj ustawienia Obsidian Sync]].
    - Jeśli chcesz rozpocząć synchronizację natychmiast, przejdź do [[#Rozpocznij synchronizację z Obsidian Sync|rozpocznij synchronizację z Obsidian Sync]].
5. Jeśli jeszcze tego nie zrobiłeś, zamknij lub odrzuć wyskakujące okno z opcjami **Wyklucz foldery** i **Rozpocznij synchronizację**. Przejdź do następnego kroku.

#### Dostosuj ustawienia Obsidian Sync

1. Przejdź do **[[Ustawienia]]** → **Sync**, jeśli to konieczne.
2. Jeśli nazwa urządzenia nie została jeszcze dodana, dodaj ją, aby ułatwić czytanie dzienników Sync!
3. Przełącz ustawienia w sekcjach **Synchronizacja selektywna** i **Synchronizacja ustawień sejfu**, aby wskazać, które elementy powinny być synchronizowane ze zdalnym sejfem i z niego.
    - **Uwaga**: Jeśli niedawno rozłączyłeś się ze zdalnym sejfem i łączysz się ponownie bez ponownego uruchomienia aplikacji, niektóre ustawienia mogą być już włączone.
4. Jeśli wprowadzisz zmiany w jakichkolwiek ustawieniach, uruchom ponownie Obsidian całkowicie.
5. Po ponownym uruchomieniu Obsidian wróć do **[[Ustawienia]]** → **Sync**.

#### Rozpocznij synchronizację z Obsidian Sync

Jeśli rozpoczynasz synchronizację po połączeniu ze zdalnym sejfem, zobaczysz przycisk **Rozpocznij synchronizację**. Wybierz ten przycisk, aby rozpocząć synchronizację.

Jeśli rozpoczynasz synchronizację po dostosowaniu ustawień Obsidian Sync i ponownym uruchomieniu aplikacji, zobaczysz przycisk **Wznów** w ustawieniach Sync. Wybierz ten przycisk, aby rozpocząć synchronizację.

> [!done] Status synchronizacji
> Gdy Obsidian Sync zakończy synchronizację, w prawym dolnym rogu (komputer) lub na prawym pasku bocznym (urządzenie mobilne) pojawi się zielone kółko ze znacznikiem wyboru ![[obsidian-icon-sync-synced.svg#icon]]. Dziennik synchronizacji wyświetli również komunikat „Fully Synced" jako jeden z najnowszych wpisów.
>
> Więcej szczegółów na temat statusów synchronizacji znajdziesz w artykule [[Ikona statusu i komunikaty]].
^obsidian-sync-status

Aby połączyć inne urządzenia z nowo utworzonym i zsynchronizowanym zdalnym sejfem, przejdź do [[Konfiguracja Obsidian Sync#Synchronizacja zdalnego sejfu na innym urządzeniu|Synchronizacja zdalnego sejfu na innym urządzeniu]].

Aby dowiedzieć się więcej o ustawieniach i plikach, przejdź do [[Opcje synchronizacji i synchronizacja selektywna]].

## Synchronizacja zdalnego sejfu na innym urządzeniu

W tej sekcji zakładamy, że utworzyłeś już zdalny sejf i przesłałeś do niego dane. Teraz chcesz połączyć z nim inne urządzenia.

**Wymagania wstępne**
- Konto Obsidian. Jeśli go nie masz, [zarejestruj się teraz](https://obsidian.md/account#mode=signup).
- Aktywna subskrypcja Obsidian Sync. Jeśli jej nie masz, wykup ją w [panelu swojego konta](https://obsidian.md/account).
- Sync włączony w ustawieniach [[Wbudowane wtyczki|wbudowanych wtyczek]].
- Aktywny zdalny sejf. Jeśli jeszcze go nie utworzyłeś, najpierw utwórz [[Konfiguracja Obsidian Sync#Utwórz nowy zdalny sejf|zdalny sejf]].
- **Zalecane**: Wdrożony [[Tworzenie kopii zapasowej plików Obsidian|system kopii zapasowych]] dla plików Obsidian na najczęściej używanym urządzeniu. Usługa synchronizacji nie jest kopią zapasową.

### Synchronizacja sejfu z przełącznika skarbców

Jeśli właśnie zainstalowałeś Obsidian, po otwarciu programu zobaczysz [[Zarządzaj skarbcami|Przełącznik skarbców]]. Aby utworzyć nowy lokalny skarbiec z zawartości zdalnego sejfu, wykonaj następujące kroki.

1. Otwórz Obsidian (zakładając, że otwierasz go po raz pierwszy)
2. Wybierz jedną z opcji w zależności od instalacji:
	1. **Komputer**: W sekcji Połącz z Obsidian Sync wybierz **Konfiguracja**
	2. **Urządzenie mobilne/tablet**: **Konfiguracja Obsidian Sync**
3. Zaloguj się na swoje konto użytkownika Obsidian
	1. Jeśli skonfigurowano [[Uwierzytelnianie dwuskładnikowe|2FA]], wprowadź kod 2FA.
4. Zostaniesz poproszony o wybranie zdalnego sejfu, który chcesz zsynchronizować z tym urządzeniem. Wybierz **Połącz**.
5. Zostaniesz poproszony o wybranie nazwy dla lokalnego skarbca, który zostanie utworzony na urządzeniu do przechowywania tych danych. Wprowadź wybraną nazwę.
	1. Jeśli używasz [[Obsidian URI]], warto użyć tej samej nazwy co lokalny skarbiec na innym urządzeniu.
6. Wybierz **Stwórz**.
7. Okno zdalnych sejfów pojawi się na chwilę, gdy Obsidian Sync łączy się z serwerem i weryfikuje subskrypcję. Następnie zostanie wyświetlone okno *Ustaw połączenie*.
	1. Zdecydowanie zalecane jest zamknięcie lub przesunięcie w dół tego okna i najpierw [[#Dostosuj ustawienia Obsidian Sync|dostosowanie ustawień Obsidian Sync]].
	2. Jeśli zmienisz jakiekolwiek ustawienia Sync, odśwież lub uruchom ponownie Obsidian.

### Synchronizacja sejfu z ustawień Obsidian

Jeśli już utworzyłeś lokalny skarbiec na tym urządzeniu i chcesz połączyć go ze zdalnym sejfem, instrukcje są bardzo podobne do [[#Konfiguracja Obsidian Sync po raz pierwszy]].

![[Konfiguracja Obsidian Sync#Zaloguj się na swoje konto Obsidian]]

![[Konfiguracja Obsidian Sync#Włącz Obsidian Sync]]

#### Połącz ze zdalnym sejfem

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym wybierz **Sync**.
3. Obok **Wybierz zdalny sejf** kliknij **Wybierz**.
4. Kliknij **Połącz** obok zdalnego sejfu, z którym chcesz się połączyć.
5. W polu **Hasło szyfrowania** wprowadź hasło do swojego sejfu, jeśli je posiadasz.
6. Zostaniesz poproszony o rozpoczęcie synchronizacji. Zaleca się poczekać i najpierw dostosować ustawienia synchronizacji. Jeśli chcesz zsynchronizować cały skarbiec na urządzenie w obecnym stanie, możesz wybrać **Rozpocznij synchronizację**.

> [!warning] Jeśli skarbiec na Twoim urządzeniu zawiera już jakieś notatki (niezalecane), zostaniesz ostrzeżony, że notatki te zostaną scalone przed kontynuowaniem. Konflikty zostaną rozwiązane za pomocą [[Rozwiązywanie problemów z Obsidian Sync#Rozwiązywanie konfliktów|mechanizmu rozwiązywania konfliktów Sync]].

![[Konfiguracja Obsidian Sync#Dostosuj ustawienia Obsidian Sync]]

![[Konfiguracja Obsidian Sync#Rozpocznij synchronizację z Obsidian Sync]]

## Zarządzanie zdalnymi sejfami

Utworzyłeś i połączyłeś się ze zdalnym sejfem. Być może zsynchronizowałeś ten zdalny sejf z wieloma urządzeniami. Ta sekcja opisuje inne typowe instrukcje, które mogą być potrzebne przy zarządzaniu zdalnym sejfem.

### Rozłącz ze zdalnym sejfem

1. Otwórz **[[Ustawienia]]** Obsidian.
2. Wybierz **Sync** na pasku bocznym.
3. Kliknij przycisk **Rozłącz** obok Zdalnych sejfów.

Jesteś teraz rozłączony ze zdalnym sejfem i synchronizacja na tym urządzeniu nie jest już aktywna.

### Usuń zdalny sejf

> [!tip] Usunięcie zdalnego sejfu nie spowoduje usunięcia lokalnych danych na Twoim urządzeniu.

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym wybierz **Sync**.
3. Wybierz **Zarządzaj** obok Zdalnych sejfów. Otworzy się okno z listą Twoich zdalnych sejfów.
4. Wybierz ikonę kosza ![[lucide-trash-2.svg#icon]] obok zdalnego sejfu, który chcesz usunąć.
5. Potwierdź usunięcie, wybierając czerwony przycisk **Usuń**.
6. Twój zdalny sejf został usunięty.

> [!info] Jeśli ikona kosza nie jest widoczna, może być konieczne najpierw rozłączenie ze zdalnym sejfem. Po rozłączeniu wybierz przycisk **Wybierz**, aby otworzyć listę zdalnych sejfów.

### Regionalne serwery synchronizacji

Obsidian Sync pozwala wybrać lokalizację hostingu dla Twojego zdalnego sejfu. Jeśli używasz wersji Obsidian `1.4.16` lub starszej, lokalizacja zostanie wybrana automatycznie.

Jeśli nie masz pewności, w jakim regionie znajduje się Twój obecny sejf, zapoznaj się z artykułem [[Obsidian Sync/Bezpieczeństwo i prywatność#Gdzie mogę znaleźć mój obecny serwer Sync i gdzie jest hostowany?|Gdzie mogę znaleźć mój obecny serwer Sync i gdzie jest hostowany?]]

![[sync-regional-sync-servers.png#interface|300]]

Po wybraniu lokalizacji centrum danych **nie można** przenieść na inny serwer bez ponownego przesłania danych. Aby zmienić region, postępuj zgodnie z [[Regiony Sync|przewodnikiem regionów Sync]].

![[Obsidian Sync/Bezpieczeństwo i prywatność#^sync-geo-regions]]

## Następne kroki

Oto kilka sugerowanych dokumentów do przeczytania w następnej kolejności.

- Dowiedz się więcej o [[Opcje synchronizacji i synchronizacja selektywna|wybieraniu plików i ustawień do synchronizacji]].
- Sprawdź, co się dzieje, gdy Twój zdalny sejf [[Historia wersji|się zapełni]].
- [[Współpraca nad wspólnym sejfem]] z innym użytkownikiem Obsidian Sync.
- Zapoznaj się z [[Najczęściej zadawane pytania|FAQ dotyczącym Sync]], aby znaleźć odpowiedzi na typowe pytania.
