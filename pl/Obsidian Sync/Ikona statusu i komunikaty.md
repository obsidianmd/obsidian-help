---
permalink: sync/messages
publish: true
mobile: true
description: Ta strona wyjaśnia ikony statusu Obsidian Sync i zawiera szczegółowe informacje o dzienniku aktywności synchronizacji.
---
Obsidian Sync dostarcza kilka elementów wskazujących status synchronizacji, głównie [[#Ikona statusu synchronizacji]] oraz [[#Dziennik aktywności synchronizacji]]. Szczegóły dotyczące kontroli wersji w Obsidian Sync znajdziesz na stronie [[Historia wersji]].

## Ikona statusu synchronizacji

Ikona statusu synchronizacji znajduje się na [[Pasek stanu|pasku stanu]] w wersji desktopowej oraz na [[Pasek boczny#Otwieranie ukrytych pasków bocznych|prawym pasku bocznym]] na urządzeniach mobilnych i tabletach. Ikona odzwierciedla różne stany synchronizacji:

- ![[obsidian-icon-sync-synced.svg#icon]] **Zsynchronizowane**: Obsidian Sync w pełni zsynchronizował Twoje pliki. Ta ikona jest zazwyczaj zielona.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Synchronizowanie**: Obsidian aktualnie aktualizuje zdalny sejf. Ta ikona jest zazwyczaj fioletowa.
- ![[obsidian-icon-sync-paused.svg#icon]] **Wstrzymano**: Synchronizacja została wstrzymana, ale Obsidian nadal jest połączony ze zdalnym sejfem. Ikona jest zazwyczaj fioletowa.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Rozłączono**: Wtyczka podstawowa Sync jest aktywna, ale [[Sejfy lokalne i zdalne|sejf lokalny]] nie jest połączony ze zdalnym sejfem. Ta ikona jest zazwyczaj czerwona.

Kliknięcie lub dotknięcie ikony otwiera menu kontekstowe z następującymi opcjami:
- ![[obsidian-icon-sync-paused.svg#icon]] Wstrzymaj (lub ![[lucide-circle-play.svg#icon]] Wznów, jeśli wstrzymano)
- ![[lucide-history.svg#icon]] [[Historia wersji]] (Wyszarzone, jeśli nie przeglądasz notatki)
- ![[lucide-align-left.svg#icon]] Otwórz [[#Dziennik aktywności synchronizacji|Dziennik synchronizacji]]
- ![[lucide-trash-2.svg#icon]] [[Historia wersji#Przywracanie usuniętego pliku|Usunięte pliki]]
- ![[lucide-cog.svg#icon]] [[Opcje synchronizacji i synchronizacja selektywna|Opcje synchronizacji]]

## Dziennik aktywności synchronizacji

Obsidian Sync zawiera szczegółowy dziennik synchronizacji, który śledzi wszystkie interakcje między Twoimi lokalnymi plikami a zdalnym sejfem. Dziennik pokazuje przesyłanie, pobieranie, usuwanie oraz wszelkie problemy, takie jak konflikty scalania czy problemy z łącznością.

**Dostęp do dziennika aktywności:**
- Kliknij ikonę statusu synchronizacji na pasku stanu
- Przejdź do **[[Ustawienia]] → Sync → Dziennik aktywności**
- Użyj **Paleta poleceń → Sync: Otwórz dziennik aktywności**

Dziennik zawiera znaczniki czasu i szczegóły każdej operacji synchronizacji, co jest przydatne przy rozwiązywaniu problemów z synchronizacją.

> [!warning] Dziennik synchronizacji nie jest zachowywany po zamknięciu Obsidian. Jeśli napotkasz problem, upewnij się, że skopiujesz dziennik _przed_ zamknięciem aplikacji.

Dziennik kategoryzuje wiadomości na następujące typy:

- [[#Wiadomości ogólne]]
- [[#Komunikaty o błędach]]
- [[#Wiadomości o pominięciach]]
- [[#Wiadomości dotyczące konta]]

Możesz filtrować dziennik synchronizacji według **Wszystkie**, **Błędy**, **Pominięto** i **Scal konflikty**. Dodatkowo możesz przeszukiwać dziennik synchronizacji za pomocą pola wyszukiwania w oknie Sync.

> [!summary] Poniżej zamieściliśmy niektóre z wiadomości, które prawdopodobnie napotkałeś. Lista nie jest wyczerpująca. Jeśli doświadczasz problemu i masz wiadomość z dziennika synchronizacji, co do której nie masz pewności, [[Pomoc i wsparcie#Kontakt z pomocą techniczną Obsidian|skontaktuj się z pomocą techniczną Obsidian]].

### Wiadomości ogólne

To typowe codzienne wiadomości, które możesz napotkać.

**Connecting to server**  
Obsidian próbuje połączyć się z [[Obsidian Sync/Bezpieczeństwo i prywatność#Gdzie mogę znaleźć mój obecny serwer Sync i gdzie jest hostowany?|serwerem Sync]] Twojego zdalnego sejfu.

**Connected to server. Detecting changes...**  
Obsidian nawiązał połączenie i porównuje sejf lokalny ze zdalnym sejfem, aby określić, czy potrzebne są zmiany.

> [!info] Ta wiadomość może również wskazywać na inne potencjalne problemy z Sync. Jeśli widzisz ją wielokrotnie i uważasz, że nadal są elementy do synchronizacji, [[Pomoc i wsparcie#Kontakt z pomocą techniczną Obsidian|skontaktuj się z pomocą techniczną Obsidian]].

**Fully synced**  
- Sejf lokalny i zdalny są w pełni zsynchronizowane.

**Merging conflicted file**  
Wykryto konflikt podczas synchronizacji, a plik został scalony zamiast nadpisany. Zobacz [[Rozwiązywanie problemów z Obsidian Sync#Rozwiązywanie konfliktów|rozwiązywanie konfliktów]], aby uzyskać więcej informacji. Jeśli scalenie jest niepożądane, możesz przywrócić poprzednie wersje przez [[Historia wersji]] lub [[Odzyskiwanie plików]].

**Rejected server change**  
Zmiany na zdalnym sejfie są starsze niż wersja na Twoim urządzeniu lokalnym, więc wersja lokalna jest zachowywana, a zdalna zmiana jest ignorowana.

### Komunikaty o błędach

To wiadomości szczegółowo opisujące błąd podczas synchronizacji pliku.

**Out of memory**  
Ten problem zazwyczaj występuje na urządzeniach mobilnych, gdy nie ma wystarczającej ilości miejsca na dysku lub pamięci do pobrania pliku. Najczęściej dotyczy dużych plików, takich jak wideo.

### Wiadomości o pominięciach

To wiadomości szczegółowo opisujące, co zostało pominięte i potencjalnie dlaczego.

**Unable to download file with illegal name**

Plik zawiera [znak specjalny lub konwencję nazewnictwa](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names), która nie jest dozwolona w docelowym systemie operacyjnym. Dla ułatwienia możesz zmienić nazwę pliku na urządzeniu źródłowym, usuwając wszystkie znaki specjalne oprócz `-` i `_`.

Zauważ, że dotyczy to również plików z wieloma kropkami `.` w nazwie na urządzeniach z Androidem.

### Wiadomości dotyczące konta

To wiadomości związane ze zmianą subskrypcji lub konta.

**Vault limit exceeded**  
Twoje konto przekroczyło [[Najczęściej zadawane pytania#Jak duży może być każdy zdalny sejf|maksymalny rozmiar przechowywania]]. Załączniki i historia wersji przyczyniają się do tego rozmiaru. Nawet jeśli Twój sejf wydaje się mniejszy niż limit, starsze wersje i pliki mogą go przekroczyć.

Aby zmniejszyć rozmiar sejfu:
1. Otwórz **[[Ustawienia]] → Sync**.
2. Użyj opcji w sekcji **Rozmiar sejfu przekracza limit**, aby usunąć duże pliki.

**Vault not found**  
`{"res":"err","msg":"Vault not found."}`

Ten błąd może wystąpić w następujących przypadkach:

1. Sejf został usunięty z innego urządzenia.
2. Subskrypcja synchronizacji była nieaktywna przez ponad 30 dni, co spowodowało usunięcie zdalnego sejfu.
3. Subskrypcja została anulowana lub zwrócona, co spowodowało usunięcie zdalnego sejfu.

W takich przypadkach musisz [[Konfiguracja Obsidian Sync#Rozłączanie ze zdalnym sejfem|rozłączyć się ze zdalnym sejfem]] i [[Konfiguracja Obsidian Sync#Tworzenie nowego zdalnego sejfu|utworzyć nowy zdalny sejf]], upewniając się, że Twoje lokalne dane są zachowane.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**  
Twoje konto jest teraz w pełni wygasłe, ponieważ nie udało nam się przetworzyć płatności z zapisanej metody płatności.

Aby kontynuować korzystanie z Obsidian Sync, musisz ponownie subskrybować na [swoim koncie](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync wykrył, że nie jesteś obecnie zalogowany. Musisz zalogować się ponownie w aplikacji w sekcji [[Ustawienia#Ogólne#Konto|Konto]] w **[[Ustawienia|Ustawieniach]]**.

W niektórych przypadkach wtyczka społeczności może również uniemożliwić Obsidian Sync potwierdzenie statusu logowania Twojego konta. Przejdź do **[[Bezpieczeństwo wtyczek#Tryb ograniczony|trybu ograniczonego]]** i spróbuj ponownie.

### Wiadomości sieciowe

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync rozłączył się z serwerem Sync z nieznanego powodu. Sync będzie okresowo próbował ponownie połączyć się z serwerem.

Na iOS ta wiadomość wyświetla się jako następujący błąd:
`Null is not an object (evaluating 'this.socket.send')`

Oznacza dokładnie to samo co wiadomość `Unable to connect to server` i w żadnym wypadku nie wskazuje na inny problem.
