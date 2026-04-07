---
permalink: cli
description: 'Wszystko, co możesz zrobić w Obsidian, można wykonać z poziomu wiersza poleceń.'
---
Obsidian CLI to interfejs wiersza poleceń, który pozwala kontrolować Obsidian z terminala w celu tworzenia skryptów, automatyzacji i integracji z zewnętrznymi narzędziami.

Wszystko, co możesz zrobić w Obsidian, możesz zrobić z wiersza poleceń. Obsidian CLI zawiera nawet [[#Polecenia deweloperskie|polecenia deweloperskie]] do uzyskiwania dostępu do narzędzi deweloperskich, inspekcji elementów, robienia zrzutów ekranu, przeładowywania wtyczek i nie tylko.

![[obsidian-cli.mp4#interface]]

> [!warning] Wymaga instalatora Obsidian 1.12
> Korzystanie z CLI wymaga instalatora Obsidian 1.12. Zapoznaj się z [[Aktualizuj Obsidian#Aktualizacje instalatora|przewodnikiem aktualizacji wersji instalatora]].

## Instalacja Obsidian CLI

Zaktualizuj do najnowszej [[Aktualizuj Obsidian|wersji instalatora Obsidian]] (1.12.7+).

Włącz Obsidian CLI w Obsidian:

1. Przejdź do **Ustawienia** → **Ogólne**.
2. Włącz **Interfejs wiersza poleceń**.
3. Postępuj zgodnie z instrukcjami, aby zarejestrować Obsidian CLI.

Jeśli napotkasz problemy z instalacją Obsidian CLI, zobacz [[#Rozwiązywanie problemów]].

## Rozpoczęcie pracy

Obsidian CLI obsługuje zarówno pojedyncze polecenia, jak i terminalowy interfejs użytkownika (TUI) z interaktywną pomocą i autouzupełnianiem.

> [!info] Aplikacja Obsidian musi być uruchomiona
> Obsidian CLI wymaga, aby aplikacja Obsidian była uruchomiona. Jeśli Obsidian nie jest uruchomiony, pierwsze wykonane polecenie uruchomi Obsidian.
>
> Szukasz synchronizacji bez aplikacji desktopowej? Zobacz [[Bezobsługowy Sync|Obsidian Headless]].

### Uruchomienie polecenia

Uruchom pojedyncze polecenie bez otwierania TUI:

```shell
# Uruchom polecenie pomocy
obsidian help
```

### Korzystanie z interfejsu terminala

Użyj TUI, wpisując `obsidian`. Kolejne polecenia mogą być wprowadzane bez `obsidian`.

```shell
# Otwórz TUI, następnie uruchom pomoc
obsidian
help
```

TUI obsługuje autouzupełnianie, historię poleceń i wyszukiwanie wsteczne. Użyj `Ctrl+R`, aby przeszukać historię poleceń. Zobacz [[#Skróty klawiszowe]], aby poznać wszystkie dostępne skróty.

## Przykłady

Oto kilka przykładów tego, co Obsidian CLI potrafi.

### Codzienne użycie

```shell
# Otwórz dzisiejszy dziennik
obsidian daily

# Dodaj zadanie do dziennika
obsidian daily:append content="- [ ] Kupić zakupy"

# Przeszukaj skarbiec
obsidian search query="notatki ze spotkań"

# Odczytaj aktywny plik
obsidian read

# Wylistuj wszystkie zadania z dziennika
obsidian tasks daily

# Utwórz nową notatkę z szablonu
obsidian create name="Podróż do Paryża" template=Podróż

# Wylistuj wszystkie tagi w skarbcu z liczbą wystąpień
obsidian tags counts

# Porównaj dwie wersje pliku
obsidian diff file=README from=1 to=3
```

### Dla deweloperów

Wiele [[#Polecenia deweloperskie|poleceń deweloperskich]] jest dostępnych do tworzenia wtyczek i motywów. Te polecenia pozwalają narzędziom agentycznym automatycznie testować i debugować.

```shell
# Otwórz narzędzia deweloperskie
obsidian devtools

# Przeładuj wtyczkę społeczności, którą rozwijasz
obsidian plugin:reload id=my-plugin

# Zrób zrzut ekranu aplikacji
obsidian dev:screenshot path=screenshot.png

# Uruchom JavaScript w konsoli aplikacji
obsidian eval code="app.vault.getFiles().length"
```

## Jak to zrobić

### Używanie parametrów i flag

Polecenia mogą używać **parametrów** i **flag**. Większość poleceń nie wymaga żadnych parametrów ani flag. Wymagane parametry są oznaczone jako `required`. Na przykład:

```shell
# Utwórz nową notatkę z domyślną nazwą "Bez tytułu"
obsidian create
```

**Parametr** przyjmuje wartość, zapisaną jako `parametr=wartość`. Jeśli wartość zawiera spacje, umieść ją w cudzysłowach:

```shell
# Utwórz nową notatkę o nazwie "Notatka" z treścią "Witaj świecie"
obsidian create name=Notatka content="Witaj świecie"
```

**Flaga** to przełącznik logiczny bez wartości. Dodaj ją, aby ją włączyć, na przykład `open` i `overwrite` to flagi:

```shell
# Utwórz notatkę i otwórz ją
obsidian create name=Notatka content="Witaj" open overwrite
```

Dla treści wieloliniowej użyj `\n` jako nowej linii. Użyj `\t` jako tabulatora.

```bash
obsidian create name=Notatka content="# Tytuł\n\nTreść tekstu"
```

### Wskazanie skarbca

Jeśli bieżący katalog roboczy terminala jest folderem skarbca, ten skarbiec jest używany domyślnie. W przeciwnym razie używany jest aktualnie aktywny skarbiec.

Użyj `vault=<nazwa>` lub `vault=<id>`, aby wskazać konkretny skarbiec. Musi to być pierwszy parametr przed poleceniem:

```shell
obsidian vault=Notatki daily
obsidian vault="Mój Skarbiec" search query="test"
```

W TUI użyj `vault:open <nazwa>` lub `<id>`, aby przełączyć się na inny skarbiec.

### Wskazanie pliku

Wiele poleceń akceptuje parametry `file` i `path`, aby wskazać konkretny plik. Jeśli żaden nie zostanie podany, polecenie domyślnie odnosi się do aktywnego pliku.

- `file=<nazwa>` rozwiązuje plik używając tej samej rozdzielczości linków co [[Łącza wewnętrzne|odnośniki wiki]], dopasowując po nazwie pliku bez wymagania pełnej ścieżki lub rozszerzenia.
- `path=<ścieżka>` wymaga dokładnej ścieżki od katalogu głównego skarbca, np. `folder/notatka.md`.

```shell
# Te polecenia są równoważne, jeśli "Przepis.md" jest jedynym plikiem o tej nazwie
obsidian read file=Przepis
obsidian read path="Szablony/Przepis.md"
```

### Kopiowanie wyniku

Dodaj `--copy` do dowolnego polecenia, aby skopiować wynik do schowka:

```shell
read --copy
search query="TODO" --copy
```


## Polecenia ogólne

### `help`

Pokaż listę wszystkich dostępnych poleceń.

| Parametr    | Opis                                        |
| ----------- | ------------------------------------------- |
| `<command>` | Pokaż pomoc dla konkretnego polecenia.      |

### `version`

Pokaż wersję Obsidian.

### `reload`

Przeładuj okno aplikacji.

### `restart`

Uruchom ponownie aplikację.


## Bazy danych

Polecenia dla [[Wprowadzenie do Baz danych|Baz danych]].

### `bases`

Wylistuj wszystkie pliki `.base` w skarbcu.

### `base:views`

Wylistuj podglądy w bieżącym pliku bazy.

### `base:create`

Utwórz nowy element w bazie. Domyślnie odnosi się do aktywnego podglądu bazy, jeśli nie podano pliku.

```bash
file=<name>        # nazwa pliku bazy
path=<path>        # ścieżka pliku bazy
view=<name>        # nazwa podglądu
name=<name>        # nazwa nowego pliku
content=<text>     # początkowa treść

open               # otwórz plik po utworzeniu
newtab             # otwórz w nowej karcie
```

### `base:query`

Zapytaj bazę i zwróć wyniki.

```bash
file=<name>                    # nazwa pliku bazy
path=<path>                    # ścieżka pliku bazy
view=<name>                    # nazwa podglądu do zapytania
format=json|csv|tsv|md|paths   # format wyjścia (domyślnie: json)
```

## Ulubione

Polecenia dla [[Ulubione]].

### `bookmarks`

Wylistuj zakładki.

```bash
total              # zwróć liczbę zakładek
verbose            # uwzględnij typy zakładek
format=json|tsv|csv  # format wyjścia (domyślnie: tsv)
```

### `bookmark`

Dodaj zakładkę.

```bash
file=<path>        # plik do dodania do zakładek
subpath=<subpath>  # podścieżka (nagłówek lub blok) w pliku
folder=<path>      # folder do dodania do zakładek
search=<query>     # zapytanie wyszukiwania do dodania do zakładek
url=<url>          # URL do dodania do zakładek
title=<title>      # tytuł zakładki
```

## Paleta poleceń

Polecenia dla [[Lista poleceń]] i [[Skróty klawiszowe]]. Obejmuje to wszystkie polecenia zarejestrowane przez wtyczki.

### `commands`

Wylistuj dostępne ID poleceń.

```bash
filter=<prefix>    # filtruj po prefiksie ID
```

### `command`

Wykonaj polecenie Obsidian.

```bash
id=<command-id>    # (required) ID polecenia do wykonania
```

### `hotkeys`

Wylistuj skróty klawiszowe dla wszystkich poleceń.

```bash
total              # zwróć liczbę skrótów klawiszowych
verbose            # pokaż czy skrót jest niestandardowy
format=json|tsv|csv  # format wyjścia (domyślnie: tsv)
```

### `hotkey`

Pobierz skrót klawiszowy dla polecenia.

```bash
id=<command-id>    # (required) ID polecenia

verbose            # pokaż czy niestandardowy czy domyślny
```

## Dziennik

Polecenia dla [[Dziennik]].

### `daily`

Otwórz dziennik.

```bash
paneType=tab|split|window    # typ panelu do otwarcia
```

### `daily:path`

Pobierz ścieżkę dziennika. Zwraca oczekiwaną ścieżkę, nawet jeśli plik nie został jeszcze utworzony.

### `daily:read`

Odczytaj zawartość dziennika.

### `daily:append`

Dołącz treść na końcu dziennika.

```bash
content=<text>     # (required) treść do dołączenia
paneType=tab|split|window    # typ panelu do otwarcia

inline             # dołącz bez nowej linii
open               # otwórz plik po dodaniu
```

### `daily:prepend`

Dołącz treść na początku dziennika.

```bash
content=<text>     # (required) treść do dołączenia na początku
paneType=tab|split|window    # typ panelu do otwarcia

inline             # dołącz bez nowej linii
open               # otwórz plik po dodaniu
```

## Historia plików

### `diff`

Wylistuj lub porównaj wersje z lokalnego [[Odzyskiwanie plików|odzyskiwania plików]] i [[Wprowadzenie do Obsidian Sync|Sync]]. Wersje są numerowane od najnowszej do najstarszej.

```bash
file=<name>          # nazwa pliku
path=<path>          # ścieżka pliku
from=<n>             # numer wersji do porównania od
to=<n>               # numer wersji do porównania do
filter=local|sync    # filtruj według źródła wersji
```

**Przykłady:**

```shell
# Wylistuj wszystkie wersje aktywnego pliku
diff

# Wylistuj wszystkie wersje konkretnego pliku
diff file=Przepis

# Porównaj najnowszą wersję z bieżącym plikiem
diff file=Przepis from=1

# Porównaj dwie wersje
diff file=Przepis from=2 to=1

# Pokaż tylko wersje Sync
diff filter=sync
```

### `history`

Wylistuj wersje tylko z [[Odzyskiwanie plików]]. Zobacz [[#Sync|sync:history]] dla odpowiadającego polecenia Sync.

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
```

### `history:list`

Wylistuj wszystkie pliki z lokalną historią.

### `history:read`

Odczytaj wersję z lokalnej historii.

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
version=<n>        # numer wersji (domyślnie: 1)
```

### `history:restore`

Przywróć wersję z lokalnej historii.

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
version=<n>        # (required) numer wersji
```

### `history:open`

Otwórz odzyskiwanie plików.

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
```

## Pliki i foldery

### `file`

Pokaż informacje o pliku (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
```

Przykład:

```
path       Notatki/Przepis.md
name       Przepis
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Wylistuj pliki w skarbcu.

```bash
folder=<path>      # filtruj po folderze
ext=<extension>    # filtruj po rozszerzeniu

total              # zwróć liczbę plików
```

### `folder`

Pokaż informacje o folderze.

```bash
path=<path>              # (required) ścieżka folderu
info=files|folders|size  # zwróć tylko konkretne informacje
```

### `folders`

Wylistuj foldery w skarbcu.

```bash
folder=<path>      # filtruj po folderze nadrzędnym

total              # zwróć liczbę folderów
```

### `open`

Otwórz plik.

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku

newtab             # otwórz w nowej karcie
```

### `create`

Utwórz lub nadpisz plik.

```bash
name=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
content=<text>     # początkowa treść
template=<name>    # szablon do użycia

overwrite          # nadpisz jeśli plik istnieje
open               # otwórz plik po utworzeniu
newtab             # otwórz w nowej karcie
```

### `read`

Odczytaj zawartość pliku (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
```

### `append`

Dołącz treść na końcu pliku (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
content=<text>     # (required) treść do dołączenia

inline             # dołącz bez nowej linii
```

### `prepend`

Dołącz treść na początku po metadanych początkowych (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
content=<text>     # (required) treść do dołączenia na początku

inline             # dołącz bez nowej linii
```

### `move`

Przenieś lub zmień nazwę pliku (domyślnie: aktywny plik). Automatycznie zaktualizuje [[Łącza wewnętrzne|łącza wewnętrzne]], jeśli jest to włączone w [[Ustawienia#Zawsze aktualizuj łącza wewnętrzne|ustawieniach skarbca]].

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
to=<path>          # (required) folder docelowy lub ścieżka
```

### `rename`

Zmień nazwę pliku (domyślnie: aktywny plik). Rozszerzenie pliku jest zachowywane automatycznie, jeśli zostanie pominięte w nowej nazwie. Użyj [[#`move`|move]], aby zmienić nazwę i przenieść plik jednocześnie. Automatycznie zaktualizuje [[Łącza wewnętrzne|łącza wewnętrzne]], jeśli jest to włączone w [[Ustawienia#Zawsze aktualizuj łącza wewnętrzne|ustawieniach skarbca]].

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
name=<name>        # (required) nowa nazwa pliku
```

### `delete`

Usuń plik (domyślnie: aktywny plik, domyślnie do kosza).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku

permanent          # pomiń kosz, usuń trwale
```

## Łącza

Polecenia dla [[Linki zwrotne]] i [[Łącza wychodzące]].

### `backlinks`

Wylistuj linki zwrotne do pliku (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku docelowego
path=<path>        # ścieżka pliku docelowego

counts             # uwzględnij liczbę linków
total              # zwróć liczbę linków zwrotnych
format=json|tsv|csv  # format wyjścia (domyślnie: tsv)
```

### `links`

Wylistuj łącza wychodzące z pliku (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku

total              # zwróć liczbę łączy
```

### `unresolved`

Wylistuj nierozwiązane łącza w skarbcu.

```bash
total              # zwróć liczbę nierozwiązanych łączy
counts             # uwzględnij liczbę łączy
verbose            # uwzględnij pliki źródłowe
format=json|tsv|csv  # format wyjścia (domyślnie: tsv)
```

### `orphans`

Wylistuj pliki bez łączy przychodzących.

```bash
total              # zwróć liczbę osieroconych plików
```

### `deadends`

Wylistuj pliki bez łączy wychodzących.

```bash
total              # zwróć liczbę ślepych zaułków
```

## Konspekt

Polecenia dla [[Konspekt]].

### `outline`

Pokaż nagłówki bieżącego pliku.

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
format=tree|md|json  # format wyjścia (domyślnie: tree)

total              # zwróć liczbę nagłówków
```

## Wtyczki

Polecenia dla [[Wbudowane wtyczki]] i [[Wtyczki społeczności]].

### `plugins`

Wylistuj zainstalowane wtyczki.

```bash
filter=core|community  # filtruj po typie wtyczki

versions               # uwzględnij numery wersji
format=json|tsv|csv    # format wyjścia (domyślnie: tsv)
```

### `plugins:enabled`

Wylistuj włączone wtyczki.

```bash
filter=core|community  # filtruj po typie wtyczki

versions               # uwzględnij numery wersji
format=json|tsv|csv    # format wyjścia (domyślnie: tsv)
```

### `plugins:restrict`

Przełącz lub sprawdź tryb ograniczony.

```bash
on                 # włącz tryb ograniczony
off                # wyłącz tryb ograniczony
```

### `plugin`

Pobierz informacje o wtyczce.

```bash
id=<plugin-id>     # (required) ID wtyczki
```

### `plugin:enable`

Włącz wtyczkę.

```bash
id=<id>                # (required) ID wtyczki
filter=core|community  # typ wtyczki
```

### `plugin:disable`

Wyłącz wtyczkę.

```bash
id=<id>                # (required) ID wtyczki
filter=core|community  # typ wtyczki
```

### `plugin:install`

Zainstaluj wtyczkę społeczności.

```bash
id=<id>            # (required) ID wtyczki

enable             # włącz po instalacji
```

### `plugin:uninstall`

Odinstaluj wtyczkę społeczności.

```bash
id=<id>            # (required) ID wtyczki
```

### `plugin:reload`

Przeładuj wtyczkę (dla deweloperów).

```bash
id=<id>            # (required) ID wtyczki
```

## Atrybuty

Polecenia związane z [[Atrybuty]].

### `aliases`

Wylistuj aliasy w skarbcu. Użyj `active` lub `file`/`path`, aby pokazać aliasy dla konkretnego pliku.

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku

total              # zwróć liczbę aliasów
verbose            # uwzględnij ścieżki plików
active             # pokaż aliasy aktywnego pliku
```

### `properties`

Wylistuj atrybuty w skarbcu. Użyj `active` lub `file`/`path`, aby pokazać atrybuty dla konkretnego pliku.

```bash
file=<name>        # pokaż atrybuty dla pliku
path=<path>        # pokaż atrybuty dla ścieżki
name=<name>        # pobierz liczbę konkretnego atrybutu
sort=count         # sortuj po liczbie (domyślnie: nazwa)
format=yaml|json|tsv  # format wyjścia (domyślnie: yaml)

total              # zwróć liczbę atrybutów
counts             # uwzględnij liczbę wystąpień
active             # pokaż atrybuty aktywnego pliku
```

### `property:set`

Ustaw atrybut na pliku (domyślnie: aktywny plik).

```bash
name=<name>                                    # (required) nazwa atrybutu
value=<value>                                  # (required) wartość atrybutu
type=text|list|number|checkbox|date|datetime   # rodzaj atrybutu
file=<name>                                    # nazwa pliku
path=<path>                                    # ścieżka pliku
```

### `property:remove`

Usuń atrybut z pliku (domyślnie: aktywny plik).

```bash
name=<name>        # (required) nazwa atrybutu
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
```

### `property:read`

Odczytaj wartość atrybutu z pliku (domyślnie: aktywny plik).

```bash
name=<name>        # (required) nazwa atrybutu
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
```

## Publish

Polecenia dla [[Wprowadzenie do Obsidian Publish|Obsidian Publish]].

### `publish:site`

Pokaż informacje o stronie Publish (slug, URL).

### `publish:list`

Wylistuj opublikowane pliki.

```bash
total              # zwróć liczbę opublikowanych plików
```

### `publish:status`

Wylistuj zmiany do publikacji.

```bash
total              # zwróć liczbę zmian
new                # pokaż tylko nowe pliki
changed            # pokaż tylko zmienione pliki
deleted            # pokaż tylko usunięte pliki
```

### `publish:add`

Opublikuj plik lub wszystkie zmienione pliki (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku

changed            # opublikuj wszystkie zmienione pliki
```

### `publish:remove`

Cofnij publikację pliku (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
```

### `publish:open`

Otwórz plik na opublikowanej stronie (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
```

## Losowe notatki

Polecenia dla [[Losowa notatka]].

### `random`

Otwórz losową notatkę.

```bash
folder=<path>      # ogranicz do folderu

newtab             # otwórz w nowej karcie
```

### `random:read`

Odczytaj losową notatkę (zawiera ścieżkę).

```bash
folder=<path>      # ogranicz do folderu
```

## Szukaj

Polecenia dla [[Szukaj]].

### `search`

Przeszukaj skarbiec pod kątem tekstu. Zwraca pasujące ścieżki plików.

```bash
query=<text>       # (required) zapytanie wyszukiwania
path=<folder>      # ogranicz do folderu
limit=<n>          # maksymalna liczba plików
format=text|json   # format wyjścia (domyślnie: text)

total              # zwróć liczbę wyników
case               # wielkość liter ma znaczenie
```

### `search:context`

Szukaj z kontekstem pasujących linii. Zwraca wynik w stylu grep `ścieżka:linia: tekst`.

```bash
query=<text>       # (required) zapytanie wyszukiwania
path=<folder>      # ogranicz do folderu
limit=<n>          # maksymalna liczba plików
format=text|json   # format wyjścia (domyślnie: text)

case               # wielkość liter ma znaczenie
```

### `search:open`

Otwórz widok wyszukiwania.

```bash
query=<text>       # początkowe zapytanie wyszukiwania
```

## Sync

Polecenia dla [[Wprowadzenie do Obsidian Sync|Obsidian Sync]].

> [!tip] Synchronizacja bez aplikacji desktopowej
> Te polecenia kontrolują Sync w uruchomionej aplikacji Obsidian. Aby synchronizować skarbce z wiersza poleceń bez aplikacji desktopowej, zobacz [[Bezobsługowy Sync]].

### `sync`

Wstrzymaj lub wznów synchronizację.

```bash
on                 # wznów synchronizację
off                # wstrzymaj synchronizację
```

### `sync:status`

Pokaż status synchronizacji i wykorzystanie.

### `sync:history`

Wylistuj historię wersji Sync dla pliku (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku

total              # zwróć liczbę wersji
```

### `sync:read`

Odczytaj wersję Sync (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
version=<n>        # (required) numer wersji
```

### `sync:restore`

Przywróć wersję Sync (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
version=<n>        # (required) numer wersji
```

### `sync:open`

Otwórz historię Sync (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
```

### `sync:deleted`

Wylistuj usunięte pliki w Sync.

```bash
total              # zwróć liczbę usuniętych plików
```

## Tagi

Polecenia dla [[Tagi]].

### `tags`

Wylistuj tagi w skarbcu. Użyj `active` lub `file`/`path`, aby pokazać tagi dla konkretnego pliku.

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
sort=count         # sortuj po liczbie (domyślnie: nazwa)

total              # zwróć liczbę tagów
counts             # uwzględnij liczbę tagów
format=json|tsv|csv  # format wyjścia (domyślnie: tsv)
active             # pokaż tagi aktywnego pliku
```

### `tag`

Pobierz informacje o tagu.

```bash
name=<tag>         # (required) nazwa tagu

total              # zwróć liczbę wystąpień
verbose            # uwzględnij listę plików i liczbę
```

## Zadania

Polecenia do zarządzania zadaniami.

### `tasks`

Wylistuj zadania w skarbcu. Użyj `active` lub `file`/`path`, aby pokazać zadania dla konkretnego pliku.

```bash
file=<name>        # filtruj po nazwie pliku
path=<path>        # filtruj po ścieżce pliku
status="<char>"    # filtruj po znaku statusu

total              # zwróć liczbę zadań
done               # pokaż ukończone zadania
todo               # pokaż nieukończone zadania
verbose            # grupuj po pliku z numerami linii
format=json|tsv|csv  # format wyjścia (domyślnie: text)
active             # pokaż zadania aktywnego pliku
daily              # pokaż zadania z dziennika
```

**Przykłady:**

```bash
# Wylistuj wszystkie zadania w skarbcu
tasks

# Wylistuj nieukończone zadania w skarbcu
tasks todo

# Wylistuj ukończone zadania z konkretnego pliku
tasks file=Przepis done

# Wylistuj zadania z dzisiejszego dziennika
tasks daily

# Policz zadania w dzienniku
tasks daily total

# Wylistuj zadania ze ścieżkami plików i numerami linii
tasks verbose

# Filtruj po niestandardowym statusie (użyj cudzysłowów dla znaków specjalnych)
tasks 'status=?'
```

### `task`

Pokaż lub zaktualizuj zadanie.

```bash
ref=<path:line>    # odniesienie do zadania (ścieżka:linia)
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku
line=<n>           # numer linii
status="<char>"    # ustaw znak statusu

toggle             # przełącz status zadania
daily              # codzienna notatka
done               # oznacz jako ukończone
todo               # oznacz jako do zrobienia
```

**Przykłady:**

```bash
# Pokaż informacje o zadaniu
task file=Przepis line=8
task ref="Przepis.md:8"

# Przełącz ukończenie zadania
task ref="Przepis.md:8" toggle

# Przełącz zadanie w dzienniku
task daily line=3 toggle

# Ustaw status zadania
task file=Przepis line=8 done      # → [x]
task file=Przepis line=8 todo      # → [ ]
task file=Przepis line=8 status=-  # → [-]
task daily line=3 done             # Oznacz zadanie z dziennika jako ukończone
```


## Szablony

Polecenia dla [[Szablony]].

### `templates`

Wylistuj szablony.

```bash
total              # zwróć liczbę szablonów
```

### `template:read`

Odczytaj zawartość szablonu.

```bash
name=<template>    # (required) nazwa szablonu
title=<title>      # tytuł do rozwiązania zmiennych

resolve            # rozwiąż zmienne szablonu
```

### `template:insert`

Wstaw szablon do aktywnego pliku.

```bash
name=<template>    # (required) nazwa szablonu
```

**Uwagi:**
- Opcja `resolve` przetwarza zmienne `{{date}}`, `{{time}}`, `{{title}}`
- Użyj `create path=<ścieżka> template=<nazwa>`, aby utworzyć plik z szablonu

## Motywy i snippety

Polecenia dla [[Motywy]] i [[Snippety CSS]].

### `themes`

Wylistuj zainstalowane motywy.

```bash
versions           # uwzględnij numery wersji
```

### `theme`

Pokaż aktywny motyw lub pobierz informacje.

```bash
name=<name>        # nazwa motywu dla szczegółów
```

### `theme:set`

Ustaw aktywny motyw.

```bash
name=<name>        # (required) nazwa motywu (puste dla domyślnego)
```

### `theme:install`

Zainstaluj motyw społeczności.

```bash
name=<name>        # (required) nazwa motywu

enable             # aktywuj po instalacji
```

### `theme:uninstall`

Odinstaluj motyw.

```bash
name=<name>        # (required) nazwa motywu
```

### `snippets`

Wylistuj zainstalowane snippety CSS.

### `snippets:enabled`

Wylistuj włączone snippety CSS.

### `snippet:enable`

Włącz snippet CSS.

```bash
name=<name>        # (required) nazwa snippetu
```

### `snippet:disable`

Wyłącz snippet CSS.

```bash
name=<name>        # (required) nazwa snippetu
```

## Niepowtarzalne notatki

Polecenia dla [[Kreator niepowtarzalnych notatek]].

### `unique`

Utwórz niepowtarzalną notatkę.

```bash
name=<text>        # nazwa notatki
content=<text>     # początkowa treść
paneType=tab|split|window    # typ panelu do otwarcia

open               # otwórz plik po utworzeniu
```

## Skarbiec

### `vault`

Pokaż informacje o skarbcu.

```bash
info=name|path|files|folders|size  # zwróć tylko konkretne informacje
```

### `vaults`

Wylistuj znane skarbce.

```bash
total              # zwróć liczbę skarbców
verbose            # uwzględnij ścieżki skarbców
```

### `vault:open`

Przełącz na inny skarbiec (tylko TUI).

```bash
name=<name>        # (required) nazwa skarbca
```

## Przeglądarka internetowa

Polecenia dla [[Przeglądarka internetowa]].

### `web`

Otwórz URL w przeglądarce internetowej.

```bash
url=<url>          # (required) URL do otwarcia

newtab             # otwórz w nowej karcie
```

## Liczba słów

Polecenia dla [[Liczba słów]].

### `wordcount`

Policz słowa i znaki (domyślnie: aktywny plik).

```bash
file=<name>        # nazwa pliku
path=<path>        # ścieżka pliku

words              # zwróć tylko liczbę słów
characters         # zwróć tylko liczbę znaków
```

## Obszar roboczy

Polecenia dla [[Obszar roboczy]] i wtyczki [[Obszary robocze]].

### `workspace`

Pokaż drzewo obszaru roboczego.

```bash
ids                # uwzględnij ID elementów obszaru roboczego
```

### `workspaces`

Wylistuj zapisane obszary robocze.

```bash
total              # zwróć liczbę obszarów roboczych
```

### `workspace:save`

Zapisz bieżący układ jako obszar roboczy.

```bash
name=<name>        # nazwa obszaru roboczego
```

### `workspace:load`

Wczytaj zapisany obszar roboczy.

```bash
name=<name>        # (required) nazwa obszaru roboczego
```

### `workspace:delete`

Usuń zapisany obszar roboczy.

```bash
name=<name>        # (required) nazwa obszaru roboczego
```

### `tabs`

Wylistuj otwarte karty.

```bash
ids                # uwzględnij ID kart
```

### `tab:open`

Otwórz nową kartę.

```bash
group=<id>         # ID grupy kart
file=<path>        # plik do otwarcia
view=<type>        # typ podglądu do otwarcia
```

### `recents`

Wylistuj ostatnio otwierane pliki.

```bash
total              # zwróć liczbę ostatnich plików
```

## Polecenia deweloperskie

Polecenia pomocne w tworzeniu [[Wtyczki społeczności]] i [[Motywy|motywów]]. Dowiedz się więcej, odwiedzając [Dokumentację deweloperską Obsidian](https://docs.obsidian.md).

### `devtools`

Przełącz narzędzia deweloperskie Electron.

### `dev:debug`

Dołącz/odłącz debugger Chrome DevTools Protocol.

```bash
on                 # dołącz debugger
off                # odłącz debugger
```

### `dev:cdp`

Uruchom polecenie Chrome DevTools Protocol.

```bash
method=<CDP.method>  # (required) metoda CDP do wywołania
params=<json>        # parametry metody jako JSON
```

### `dev:errors`

Pokaż przechwycone błędy JavaScript.

```bash
clear              # wyczyść bufor błędów
```

### `dev:screenshot`

Zrób zrzut ekranu (zwraca PNG w base64).

```bash
path=<filename>    # ścieżka pliku wyjściowego
```

### `dev:console`

Pokaż przechwycone komunikaty konsoli.

```bash
limit=<n>                        # maksymalna liczba komunikatów do wyświetlenia (domyślnie 50)
level=log|warn|error|info|debug  # filtruj po poziomie logowania

clear                            # wyczyść bufor konsoli
```

### `dev:css`

Inspekcja CSS z lokalizacjami źródłowymi.

```bash
selector=<css>     # (required) selektor CSS
prop=<name>        # filtruj po nazwie właściwości
```

### `dev:dom`

Zapytaj elementy DOM.

```bash
selector=<css>     # (required) selektor CSS
attr=<name>        # pobierz wartość atrybutu
css=<prop>         # pobierz wartość właściwości CSS

total              # zwróć liczbę elementów
text               # zwróć zawartość tekstową
inner              # zwróć innerHTML zamiast outerHTML
all                # zwróć wszystkie dopasowania zamiast pierwszego
```

### `dev:mobile`

Przełącz emulację mobilną.

```bash
on                 # włącz emulację mobilną
off                # wyłącz emulację mobilną
```

### `eval`

Wykonaj JavaScript i zwróć wynik.

```bash
code=<javascript>  # (required) kod JavaScript do wykonania
```

## Skróty klawiszowe

Te skróty są dostępne w [[#Korzystanie z interfejsu terminala|TUI]].

### Nawigacja

| Akcja                                                      | Skrót           |
| ---------------------------------------------------------- | --------------- |
| Przesuń kursor w lewo                                      | `←` / `Ctrl+B`  |
| Przesuń kursor w prawo (akceptuje sugestię na końcu linii) | `→` / `Ctrl+F`  |
| Przeskocz na początek linii                                 | `Ctrl+A`        |
| Przeskocz na koniec linii                                   | `Ctrl+E`        |
| Cofnij się o jedno słowo                                    | `Alt+B`         |
| Przejdź o jedno słowo do przodu                             | `Alt+F`         |

### Edycja

| Akcja                          | Skrót                       |
| ------------------------------ | --------------------------- |
| Usuń do początku linii         | `Ctrl+U`                    |
| Usuń do końca linii            | `Ctrl+K`                    |
| Usuń poprzednie słowo          | `Ctrl+W` / `Alt+Backspace`  |

### Autouzupełnianie

| Akcja                                              | Skrót        |
| -------------------------------------------------- | ------------ |
| Wejdź w tryb sugestii / zaakceptuj wybraną sugestię | `Tab`        |
| Wyjdź z trybu sugestii                              | `Shift+Tab`  |
| Wejdź w tryb sugestii (z pustego wejścia)           | `↓`          |
| Zaakceptuj pierwszą/wybraną sugestię (na końcu linii) | `→`        |

### Historia

| Akcja                                                               | Skrót           |
| ------------------------------------------------------------------- | --------------- |
| Poprzedni wpis historii / nawiguj sugestie w górę                   | `↑` / `Ctrl+P`  |
| Następny wpis historii / nawiguj sugestie w dół                     | `↓` / `Ctrl+N`  |
| Wyszukiwanie wsteczne w historii (pisz aby filtrować, `Ctrl+R` aby przełączać) | `Ctrl+R` |

### Inne

| Akcja                                                         | Skrót                |
| ------------------------------------------------------------- | -------------------- |
| Wykonaj polecenie lub zaakceptuj sugestię                     | `Enter`              |
| Cofnij autouzupełnianie / wyjdź z trybu sugestii / wyczyść wejście | `Escape`       |
| Wyczyść ekran                                                 | `Ctrl+L`             |
| Wyjdź                                                         | `Ctrl+C` / `Ctrl+D`  |

## Rozwiązywanie problemów

Jeśli masz problemy z uruchomieniem Obsidian CLI:

- Upewnij się, że używasz najnowszej [[Aktualizuj Obsidian|wersji instalatora Obsidian]] (1.12.7 lub nowszej).
- Jeśli właśnie zaktualizowałeś Obsidian z wcześniejszej wersji, wyłącz ustawienie CLI i włącz je ponownie, a następnie pozwól Obsidian wykonać automatyczną rejestrację PATH.
- Uruchom ponownie terminal po zarejestrowaniu CLI, aby zmiany PATH weszły w życie.
- Obsidian musi być uruchomiony. CLI łączy się z uruchomioną instancją Obsidian.

### Windows

Obsidian CLI na Windows wymaga instalatora Obsidian 1.12.7+. Zobacz [[Aktualizuj Obsidian|Aktualizacja wersji instalatora]].

Windows używa przekierowywacza terminala, który prawidłowo łączy Obsidian ze stdin/stdout. Jest to konieczne, ponieważ Obsidian normalnie działa jako aplikacja GUI, która jest niekompatybilna z wyjściami terminala na Windows. Po zainstalowaniu Obsidian 1.12.7+ przekierowywacz terminala `Obsidian.com` zostanie dodany do folderu, w którym zainstalowano plik `Obsidian.exe`.

Rejestracja CLI dodaje Obsidian do zmiennej PATH użytkownika, co wchodzi w życie dopiero po ponownym uruchomieniu terminala.

### macOS

Rejestracja CLI tworzy dowiązanie symboliczne w `/usr/local/bin/obsidian` wskazujące na plik binarny CLI dołączony do aplikacji. Wymaga to uprawnień administratora — zostaniesz poproszony o to w oknie dialogowym systemu.

Sprawdź, czy dowiązanie symboliczne istnieje i wskazuje na prawidłowy plik binarny:

```
ls -l /usr/local/bin/obsidian
```

Jeśli dowiązanie symboliczne nie istnieje, utwórz je ręcznie:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Jeśli wcześniej zarejestrowałeś CLI ze starszą wersją Obsidian, możesz mieć pozostały wpis PATH w `~/.zprofile`. Nowy proces rejestracji usuwa go automatycznie, ale jeśli pozostaje, możesz bezpiecznie usunąć linie zaczynające się od `# Added by Obsidian` z `~/.zprofile`.

### Linux

Rejestracja CLI kopiuje plik binarny CLI do `~/.local/bin/obsidian`. Dzieje się tak, ponieważ niektóre metody instalacji na Linuksie uruchamiają się z katalogów tymczasowych, do których nie można tworzyć trwałych dowiązań symbolicznych.

Upewnij się, że `~/.local/bin` jest w PATH. Dodaj następujące do `~/.bashrc` lub `~/.zshrc`, jeśli tak nie jest:

```
export PATH="$PATH:$HOME/.local/bin"
```

Sprawdź, czy plik binarny istnieje:

```
ls -l ~/.local/bin/obsidian
```

Jeśli plik binarny nie istnieje, skopiuj go ręcznie z katalogu instalacyjnego Obsidian:

```
cp /path/to/Obsidian/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```
