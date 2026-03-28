---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Ta strona zawiera listę rzadkich problemów, które możesz napotkać w Obsidian Sync, oraz sposoby ich rozwiązania.'
---
Ta strona zawiera listę nietypowych problemów, które możesz napotkać podczas korzystania z [[Wprowadzenie do Obsidian Sync|Obsidian Sync]], oraz sposoby ich rozwiązywania. Przed kontynuowaniem zalecamy zapoznanie się ze stronami [[Ikona statusu i komunikaty]] oraz [[Najczęściej zadawane pytania]].

## Ogólne

### Rozwiązywanie konfliktów

Konflikt występuje, gdy zmienisz ten sam plik na dwóch lub więcej urządzeniach, zanim zostaną zsynchronizowane. Na przykład edytujesz notatkę na komputerze. Zanim ta zmiana zostanie przesłana, zmieniasz tę samą notatkę na telefonie.

Konflikty zdarzają się częściej, gdy pracujesz w trybie offline. Jest więcej zmian i dłuższy czas między synchronizacjami, co zwiększa prawdopodobieństwo konfliktów.

#### Jak Obsidian Sync obsługuje konflikty

Gdy Obsidian Sync wykryje konflikt, wynik zależy od typu pliku:

- **Pliki Markdown**: Obsidian Sync scala zmiany za pomocą algorytmu [diff-match-patch](https://github.com/google/diff-match-patch) firmy Google.
- **Inne typy plików**: W przypadku wszystkich pozostałych plików, w tym plików Canvas, Obsidian stosuje podejście „wygrywa ostatnia modyfikacja". Najnowsza zmodyfikowana wersja zastępuje wcześniejsze wersje.

W przypadku konfliktów w ustawieniach Obsidian, takich jak ustawienia wtyczek, Obsidian Sync scala pliki JSON. Nakłada klucze z lokalnego pliku JSON na zdalny plik JSON.

#### Opcje rozwiązywania konfliktów

Począwszy od Obsidian 1.9.7, możesz wybrać sposób obsługi konfliktów. Aby skonfigurować to ustawienie:

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym wybierz **Synchronizacja**.
3. W sekcji **[[Opcje synchronizacji i synchronizacja selektywna#Rozwiązywanie konfliktów|Rozwiązywanie konfliktów]]** wybierz preferowaną opcję:
   - **Scal automatycznie** (domyślnie): Obsidian Sync łączy wszystkie zmiany z różnych urządzeń w jeden plik. Zapisuje to wszystkie edycje, ale czasem może tworzyć zduplikowany tekst lub problemy z formatowaniem. Będziesz musiał je naprawić ręcznie.
   - **Stwórz plik konfliktu**: Gdy Obsidian znajdzie sprzeczne zmiany, tworzy osobny plik konfliktu zamiast automatycznego scalania. Możesz wtedy przejrzeć obie wersje i scalić je samodzielnie. Daje to pełną kontrolę nad końcowym rezultatem.

> [!warning]+ Skonfiguruj na wszystkich urządzeniach
> Ustawienia rozwiązywania konfliktów są specyficzne dla urządzenia. Musisz skonfigurować preferowaną opcję na każdym ze swoich urządzeń. Zapewni to takie samo zachowanie na wszystkich synchronizowanych urządzeniach.

**Wzorzec nazewnictwa plików konfliktu**

Gdy używasz opcji „Stwórz plik konfliktu", Obsidian tworzy nowy plik z następującym wzorcem nazwy:

```
oryginalna-nazwa-notatki (Conflicted copy nazwa-urządzenia RRRRMMDDGGMM).md
```

Na przykład, jeśli konflikt wystąpi w notatce o nazwie `Notatki ze spotkania.md`, plik konfliktu może mieć nazwę:

```
Notatki ze spotkania (Conflicted copy MójMacBook2 202411281430).md
```

Plik konfliktu zawiera zmiany z urządzenia, na którym wykryto konflikt. Oryginalny plik zachowuje wersję zdalną. Możesz porównać oba pliki i ręcznie scalić zawartość.

> [!info]+ Sprawdź dziennik synchronizacji
> Aby sprawdzić, kiedy wystąpiły konflikty, otwórz [[Ikona statusu i komunikaty#Dziennik synchronizacji Sync|Dziennik synchronizacji]]. Filtruj według „Scal konflikty" lub wyszukaj „Conflict".

### Sync usunął notatkę, którą właśnie utworzyłem na dwóch urządzeniach

Obsidian Sync zazwyczaj próbuje [[#Rozwiązywanie konfliktów|rozwiązać konflikty]] poprzez scalanie sprzecznych notatek między urządzeniami. Jednak problemy mogą wystąpić u użytkowników, którzy automatycznie tworzą lub zmieniają notatki przy uruchomieniu. Dotyczy to [[Dziennik|Dziennika]] lub korzystania z wtyczki społeczności [Templater](https://github.com/SilentVoid13/Templater).

Jeśli utworzysz notatkę lokalnie na jednym urządzeniu, a w ciągu kilku minut Sync pobierze zdalną wersję tej samej notatki, Sync zachowa wersję zdalną bez scalania obu. W takim przypadku możesz odzyskać wersję lokalną za pomocą [[Odzyskiwanie plików]].

### Sync nie synchronizuje moich wtyczek i aktualizacji ustawień

Obsidian [[Najczęściej zadawane pytania#Czy Obsidian Sync odświeża moje ustawienia na żywo?|nie odświeża na żywo wszystkich ustawień]]. Po zaktualizowaniu ustawień lub wtyczek musisz ponownie uruchomić Obsidian na innych urządzeniach, aby zobaczyć zmiany. Na urządzeniach mobilnych może być konieczne wymuszenie zamknięcia aplikacji.

> [!example]- Zmiana motywu
> - Na głównym urządzeniu (zwykle komputerze) zmieniasz motyw z niestandardowego z powrotem na domyślny.
> - Dziennik synchronizacji potwierdza, że zaktualizowane pliki zostały wysłane do zdalnego sejfu, ale urządzenie mobilne nadal wyświetla niestandardowy motyw.
> - Na urządzeniu mobilnym sprawdź dziennik synchronizacji, aby potwierdzić odbiór zaktualizowanego pliku `appearance.json`.
> - Odśwież lub uruchom ponownie Obsidian na urządzeniu mobilnym.
> - Po odświeżeniu lub ponownym uruchomieniu urządzenie mobilne powinno wyświetlać ten sam motyw co komputer.

### Moje pliki ciągle znikają z Sync zaraz po ich przywróceniu

Ten problem najczęściej występuje w systemie Windows. Windows Defender może poddawać kwarantannie pliki z blokami kodu, co powoduje znikanie niektórych notatek.

Inną częstą przyczyną jest podwójna synchronizacja. Dzieje się tak, gdy Obsidian Sync działa równocześnie z inną usługą synchronizacji.

![[Przejście na Obsidian Sync#Przenieś swój sejf z zewnętrznej usługi synchronizacji lub magazynu w chmurze]]

---

Wreszcie, może się to zdarzyć, gdy przywrócisz plik na jednym urządzeniu, a następnie zostanie on usunięty z drugiego urządzenia. Dzieje się tak, gdy nazwa pliku zawiera [[Ikona statusu i komunikaty#Pominięte komunikaty|niedozwolone znaki]].

## Android

**Moje urządzenie usuwa załączniki, które otrzymuję przez Sync**

Ten problem prawdopodobnie wynika z zarządzania załącznikami przez Google lub Android Photos. Aby zapobiec zmienianiu plików otrzymanych przez Sync przez system, dodaj plik `.nomedia` [do swojego sejfu](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) na urządzeniu z Androidem.

> [!tip]- Użyj wtyczki
> Wtyczka społeczności [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) ułatwia to zadanie. Zainstaluj ją na swoim telefonie z Androidem. Pamiętaj, że pliki `.nomedia` nie są synchronizowane między urządzeniami przez Obsidian Sync.
