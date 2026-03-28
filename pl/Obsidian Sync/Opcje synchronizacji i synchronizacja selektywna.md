---
permalink: sync/settings
publish: true
mobile: true
description: Ta strona wyjaśnia ustawienia synchronizacji i pomaga w wyborze plików do synchronizacji.
---
Gdy [[Plany i limity przechowywania#Tworzenie nowego zdalnego sejfu|tworzysz zdalny sejf]] i [[Konfiguracja Obsidian Sync#Połącz ze zdalnym sejfem|łączysz się z nim]], wbudowana wtyczka Sync staje się miejscem zarządzania Twoim zdalnym sejfem.

## Opcje synchronizacji

**Zdalny sejf**
Ta sekcja pokazuje aktualnie połączony zdalny sejf. Zawiera przycisk **Rozłącz** do odłączenia od zdalnego sejfu oraz przycisk **Zarządzaj** do wyświetlenia wszystkich zdalnych sejfów, do których Twoje konto ma dostęp (w tym udostępnionych sejfów poprzez [[Współpraca nad wspólnym sejfem|współpracę]]).

> [!warning]+ Zdalny sejf w zewnętrznej usłudze synchronizacji
> Jeśli Twój zdalny sejf znajduje się w zewnętrznej usłudze synchronizacji, zobaczysz czerwony komunikat o błędzie. Postępuj zgodnie z instrukcjami w [[Przejście na Obsidian Sync]], aby rozwiązać ten problem.

**Status synchronizacji**
Wyświetla bieżący status synchronizacji zdalnego sejfu. Ta sekcja zawiera przycisk **Wstrzymaj** lub **Wznów**, w zależności od statusu.

**Nazwa urządzenia**
Przypisz unikalną nazwę urządzeniu, które jest aktualnie synchronizowane. Pomaga to śledzić aktywność w [[Ikona statusu i komunikaty#Dziennik aktywności synchronizacji|dzienniku synchronizacji]]. To ustawienie jest specyficzne dla urządzenia, podobnie jak [[#Synchronizacja selektywna]].

**[[#Rozwiązywanie konfliktów]]**
Wybierz sposób rozwiązywania konfliktów, gdy modyfikujesz plik na wielu urządzeniach. To ustawienie jest specyficzne dla urządzenia, podobnie jak [[#Synchronizacja selektywna]].

**Usunięte pliki**
Zawiera przycisk **Podgląd** lub **Przywróć** usunięte pliki. Więcej szczegółów znajdziesz w [[Historia wersji]].

**Rozmiar sejfu**
Wyświetla pasek postępu pokazujący, ile miejsca w pamięci synchronizacji jest wykorzystywane.

> [!tip]- Czas przetwarzania serwera
> Aktualizacja bieżącego użycia może zająć do 30 minut ze względu na przetwarzanie po stronie serwera.

**Kontakt z pomocą techniczną**
Zawiera instrukcje dotyczące [[Pomoc i wsparcie#Kontakt z pomocą techniczną Obsidian|kontaktu z pomocą techniczną Obsidian]], w tym opcje **Kopiuj informacje debugowania** i **Wsparcie przez email**.

### Rozwiązywanie konfliktów

Wybierz sposób rozwiązywania konfliktów, gdy modyfikujesz plik na wielu urządzeniach przed synchronizacją. Możesz automatycznie scalać zmiany lub tworzyć oddzielne pliki konfliktów do ręcznego przeglądu. Zobacz [[Rozwiązywanie problemów z Obsidian Sync#Rozwiązywanie konfliktów|Rozwiązywanie konfliktów]], aby poznać szczegóły działania konfliktów i sposoby konfiguracji tego ustawienia.

> [!warning]+ Konfiguracja na każdym urządzeniu
> To ustawienie musi być skonfigurowane oddzielnie na każdym urządzeniu.

---

W ustawieniach wbudowanej wtyczki Sync możesz również wybrać, co synchronizować. Ta sekcja obejmuje **synchronizację selektywną** i **synchronizację ustawień sejfu** wraz z powiązanymi zastrzeżeniami.

## Synchronizacja selektywna

Pliki synchronizowane do Twojego [[Sejfy lokalne i zdalne|zdalnego sejfu]] wliczają się do Twojego [[Najczęściej zadawane pytania#Jak duży może być każdy zdalny sejf|limitu przechowywania]]. Domyślnie Obsidian Sync aktywuje **synchronizację selektywną** dla następujących typów plików:
- Obrazy
- Audio
- Wideo
- PDF

Aby synchronizować dodatkowe typy plików, włącz opcję `Synchronizuj wszystkie inne typy plików`.

Domyślne ustawienia **synchronizacji ustawień sejfu** obejmują:
- Inne typy plików
- Ustawienia główne
- Wygląd
- Motywy i snippety
- Skróty klawiszowe
- Lista aktywnych wbudowanych wtyczek
- Ustawienia wbudowanych wtyczek

Aby synchronizować wtyczki społeczności, ręcznie włącz **Lista aktywnych wtyczek społeczności** i **Lista zainstalowanych wtyczek społeczności**.

### Zmiana typów plików do synchronizacji

1. Otwórz **[[Ustawienia]] → Sync**.
2. W sekcji **Synchronizacja selektywna** włącz typy plików, które chcesz synchronizować.
3. Uruchom ponownie aplikację, aby zastosować nowe ustawienia. Na urządzeniach mobilnych lub tabletach może być wymagane wymuszenie zamknięcia.

Pamiętaj, że Twój [[Plany i limity przechowywania|plan Sync]] określa maksymalny rozmiar pliku, który możesz synchronizować. Plan Standard pozwala na synchronizację plików do 5 MB, a plan Plus obsługuje pliki do 200 MB.

> [!info]+ Pominięte pliki pozostają w zdalnym sejfie
> Dodanie pliku do listy **Pominięte pliki** nie usuwa go ze zdalnego sejfu, jeśli został już zsynchronizowany. Skonfiguruj ustawienia Sync przed synchronizacją, aby uniknąć niepotrzebnego zajmowania przestrzeni.

### Pomijanie folderu podczas synchronizacji

Domyślnie Obsidian synchronizuje wszystkie pliki i foldery w Twoim skarbcu. Aby pominąć określony folder podczas synchronizacji:
1. Otwórz **[[Ustawienia]] → Sync**.
2. Obok **Pominięte foldery** wybierz **Zarządzaj**.
3. Wybierz folder, który chcesz pominąć z listy.
4. Wybierz **Gotowe**.

Aby usunąć folder z listy pominiętych, kliknij przycisk ![[lucide-x.svg#icon]] obok nazwy folderu.

#### Zawsze pomijane podczas synchronizacji

##### Kopie zapasowe odzyskiwania plików

Kopie zapasowe we wtyczce [[Odzyskiwanie plików]] nie są synchronizowane przez Obsidian Sync, ponieważ są przechowywane w [[Jak Obsidian przechowuje dane#Ustawienia globalne|ustawieniach globalnych]].

##### Ukryte pliki i foldery

Pliki i foldery zaczynające się od `.` są traktowane jako ukryte i pomijane podczas synchronizacji. Jedynym wyjątkiem jest [[Folder konfiguracji|folder konfiguracji]] skarbca (`.obsidian`), który jest synchronizowany.

Typowe przykłady ukrytych plików i folderów, które nie są synchronizowane:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Ustawienia synchronizacji

Ustawienia synchronizacji nie są synchronizowane między urządzeniami. Musisz je skonfigurować oddzielnie na każdym urządzeniu w zależności od potrzeb.

## Aktualizacja ustawień synchronizowanego skarbca

Aby zmodyfikować ustawienia synchronizacji na wielu urządzeniach, wykonaj następujące kroki:

> [!tip]- Urządzenie główne i dodatkowe
> Terminy „urządzenie główne" i „dodatkowe" służą jedynie do zachowania przejrzystości. Sync nie rozróżnia między nimi.

### Urządzenie główne

Urządzenie główne jest źródłem prawdy. Zmiany wprowadzone tutaj są synchronizowane na wszystkich pozostałych urządzeniach.

1. Przejdź do **[[Ustawienia]] → Sync**.
2. Aktywuj żądane ustawienia w sekcji **Synchronizacja ustawień sejfu**.
3. Odśwież lub uruchom ponownie Obsidian. Na urządzeniach mobilnych lub tabletach może być wymagane wymuszenie zamknięcia.
4. Poczekaj, aż ustawienia zsynchronizują się ze zdalnym sejfem.

### Urządzenie(a) dodatkowe

Urządzenia dodatkowe (takie jak telefon) otrzymują aktualizacje z urządzenia głównego.

1. Przejdź do **[[Ustawienia]] → Sync**.
2. Włącz niezbędne ustawienia w sekcji **Synchronizacja ustawień sejfu**.
3. Poczekaj na pobranie zmian ze zdalnego sejfu.
4. Odśwież lub uruchom ponownie aplikację, aby zastosować zsynchronizowane ustawienia. Na urządzeniach mobilnych lub tabletach może być wymagane wymuszenie zamknięcia.

### Ponowne ładowanie ustawień

Niektóre ustawienia mogą być ładowane na gorąco, podczas gdy inne wymagają ponownego uruchomienia:

- **Ładowanie na gorąco**: Większość konfiguracji Obsidian, w tym skróty klawiszowe i właściwości, ustawienia wyglądu oraz konfiguracje już włączonych wbudowanych wtyczek.
- **Wymagane ponowne uruchomienie**: Zmiany CSS (np. [[Snippety CSS]], [[Motywy]]), konfiguracje widoku grafu oraz stany wbudowanych wtyczek (np. włączanie/wyłączanie Dziennika).

Wtyczki społeczności zazwyczaj nie obsługują ładowania na gorąco i wymagają ponownego uruchomienia po zastosowaniu nowych ustawień.

> [!info]+ Dla deweloperów wtyczek
> Dowiedz się, jak [zintegrować funkcję ładowania na gorąco z Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Profile ustawień

Obsidian Sync może synchronizować wiele [[Folder konfiguracji|folderów konfiguracji]] do tego samego zdalnego sejfu, umożliwiając tworzenie oddzielnych profili (np. jednego dla urządzeń mobilnych, drugiego dla laptopa).

### Tworzenie profilu ustawień

Aby utworzyć nowy profil ustawień:

1. Otwórz **[[Ustawienia]] → Pliki i łącza**.
2. W polu **Zastąp folder konfiguracji** wpisz nazwę profilu, zaczynając od kropki (`.`), np. `.obsidian-mobile`.
3. Uruchom ponownie Obsidian, aby zastosować zmiany.

> [!info]+ Unikaj ponownego pobierania wtyczek i motywów
> Zmiana profilu ustawień wymaga ponownej konfiguracji ustawień synchronizacji. Aby uniknąć ponownego pobierania wtyczek i motywów, skopiuj istniejący folder `.obsidian` i zmień jego nazwę na zgodną z nowym profilem (np. `.obsidian-mobile`) przed wprowadzeniem zmian.
