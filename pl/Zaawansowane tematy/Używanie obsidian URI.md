Obsidian obsługuje niestandardowy protokół URI `obsidian://`, który może być używany do wyzwalania różnych akcji w aplikacji. Jest to powszechnie stosowane w systemie MacOS i aplikacjach mobilnych do automatyzacji i przepływu pracy między aplikacjami.

Jeśli masz zainstalowanego Obsidiana, ten link otworzy aplikację na Twoim urządzeniu: [Kliknij tutaj](obsidian://open)

## Instalowanie Obsidian URI

Aby upewnić się, że twój system operacyjny przekierowuje `obsidian://` URI do aplikacji Obsidian, mogą być dodatkowe kroki, które musisz wykonać.

- W systemie Windows, jednokrotne uruchomienie aplikacji powinno wystarczyć. Spowoduje to zarejestrowanie w rejestrze Windows niestandardowego handlera protokołu `obsidian://`.
- Na MacOS, jednokrotne uruchomienie aplikacji powinno być wystarczające, jednak Twoja aplikacja **musi** posiadać instalator w wersji 0.8.12 lub nowszej.
- Na Linuksie proces jest znacznie bardziej skomplikowany:
	- Po pierwsze, upewnij się, że utworzyłeś plik `obsidian.desktop`. [Spójrz tutaj po szczegóły](https://developer.gnome.org/integration-guide/stable/desktop-files.html.en)
	- Upewnij się, że twój plik pulpitu określa pole `Exec` jako `Exec=executable %u`. The `%u` jest używane do przekazywania `obsidian://` URIs do aplikacji.
	- Jeśli używasz instalatora AppImage, być może będziesz musiał rozpakować go używając `Obsidian-x.y.z.AppImage --appimage-extract`. Następnie upewnij się, że dyrektywa `Exec` wskazuje na rozpakowany plik wykonywalny.

## Używanie URI Obsidiana

URI Obsidiana są zazwyczaj w tym formacie:

```
obsidian://action?param1=value&param2=value
```

- Parametr `action` jest zazwyczaj akcją, którą chciałbyś wykonać.

### Kodowanie

==Ważne==

Upewnij się, że twoje wartości są poprawnie zakodowane URI. Na przykład, znaki ukośnika `/` muszą być zakodowane jako `%2F`, a znaki spacji muszą być zakodowane jako `%20`.

Jest to szczególnie ważne, ponieważ nieprawidłowo zakodowany "zarezerwowany" znak może złamać interpretację URI. [Zobacz tutaj po szczegóły](https://en.wikipedia.org/wiki/Percent-encoding)

### Dostępne akcje

#### Akcja `open`

Opis: Otwiera sejf Obsidiana, i ewentualnie plik w tym sejfie.

Możliwe parametry:

- `vault` może być albo nazwą sejfu, albo identyfikatorem sejfu.
	- Nazwa sejfu to po prostu nazwa folderu sejfu.
	- ID sejfu to losowy 16-znakowy kod przypisany do sejfu. To ID jest unikalne dla każdego folderu na Twoim komputerze. Przykład: `ef6ca3e3b524d22f`. Nie ma jeszcze łatwego sposobu na znalezienie tego ID, będzie on oferowany w przyszłości w oknie zmiany sejfów. Obecnie można go znaleźć w `%appdata%/obsidian/obsidian.json` w Windowsie. Dla MacOS, zamień `%appdata%` na `~/Library/Application Support/`. Dla Linuksa, zastąp `%appdata%` przez `~/.config/`.
- `file` może być albo nazwą pliku, albo ścieżką od katalogu głównego sejfu do określonego pliku.
	- Aby rozwiązać problem z plikiem docelowym, Obsidian używa tego samego systemu rozwiązywania linków, co zwykły `[[wikilink]]` wewnątrz sejfu.
	- Jeśli rozszerzenie pliku to `md`, rozszerzenie może zostać pominięte.
- `path` bezwzględna ścieżka do pliku w systemie plików.
	- Użycie tego parametru nadpisze zarówno `vault` jak i `file`.
	- Spowoduje to, że aplikacja będzie szukała najbardziej specyficznego sejfu, który zawiera podaną ścieżkę do pliku.
	- Następnie pozostała część ścieżki zastąpi parametr `file`.

Przykłady:

- `obsidian://open?vault=my%20vault`.
	To otwiera sejf `my vault`. Jeśli sejf jest już otwarty, zmienia skupienie na okno.

- `obsidian://open?vault=ef6ca3e3b524d22f`
	To otwiera sejf identyfikowany przez ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=my%20vault&file=my%20note`.
	To otwiera notatkę `my note` w sejfie `my vault`, zakładając, że `my note` istnieje, a plik to `my note.md`.

- `obsidian://open?vault=my%20vault&file=my%20note.md`
	To również otwiera notatkę `my note` w sejfie `my vault`.

- `obsidian://open?vault=my%20vault&file=path%2Fto%2Fmy%20note`.
	To otwiera notatkę znajdującą się pod adresem `path/to/my note` w sejfie `my vault`.

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`.
	Spowoduje to wyszukanie każdego sejfu, który zawiera ścieżkę `/home/user/my vault/path/to/my note`. Następnie pozostała część ścieżki jest przekazywana do parametru `file`. Na przykład, jeśli sejf istnieje pod adresem `/home/user/my vault`, to byłoby to równoważne parametrowi `file` ustawionemu na `path/to/my note`.

- `obsidian://open?path=D%3A%5CDocuments%5CMy%20vault%5CMy%20note`.
	Spowoduje to wyszukanie każdego sejfu, który zawiera ścieżkę `D:\Documents\My vault\My note`. Następnie, reszta ścieżki jest przekazywana do parametru `file`. Na przykład, jeśli sejf istnieje pod adresem `D:\Documents\My vault`, to będzie to równoważne parametrowi `file` ustawionemu na `My note`.
	
#### Akcja `search`

Opis: Otwiera okno wyszukiwania dla sejfu i opcjonalnie wykonuje zapytanie.

Możliwe parametry:

- `vault` może być albo nazwą albo identyfikatorem sejfu. To samo, co akcja `open`.
- `query` (opcjonalne) Zapytanie do wykonania.

Przykłady:

- `obsidian://search?vault=my%20vault`.
	To otwiera sejf `my vault`, i otwiera okno wyszukiwania.

- `obsidian://search?vault=my%20vault&query=MOC`.
	Otwiera to sejf `my vault`, otwiera okienko wyszukiwania i wykonuje wyszukiwanie dla `MOC`.
	
#### Akcja `new`

Opis: Tworzy nową notatkę w sejfie, opcjonalnie z jakąś zawartością.

Możliwe parametry:

- `vault` może być albo nazwą sejfu, albo identyfikatorem sejfu. To samo co akcja `open`.
- Nazwa` nazwa pliku, który ma być utworzony. Jeśli to jest określone, lokalizacja pliku zostanie wybrana na podstawie twoich preferencji "Domyślna lokalizacja dla nowych notatek".
- `file` ścieżka bezwzględna do sejfu, zawierająca nazwę. Zastąpi `name` jeśli jest określone.
- `path` globalnie bezwzględna ścieżka. Działa podobnie do opcji `path` w akcji `open`, która nadpisuje zarówno `vault` jak i `file`.
- `content` (opcjonalne) zawartość notatki.
- `silent` (opcjonalne) ustaw to, jeśli nie chcesz otwierać nowej notatki.

Przykłady:

- `obsidian://new?vault=my%20vault&name=my%20note`.
	To otwiera sejf `my vault`, i tworzy nową notatkę o nazwie `my note`.
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note`.
	To otwiera sejf `my vault`, i tworzy nową notatkę na `path/to/my note`.
	
#### Akcja `hook-get-address`

Opis: Punkt końcowy do użycia z [Hook](https://hookproductivity.com/). Kopiuje do schowka link markdown do aktualnie używanej notatki, jako URL `obsidian://open`. Użycie: `obsidian://hook-get-address`.

Możliwe parametry:

- `vault` (opcjonalny) może być albo nazwą sejfu, albo identyfikatorem sejfu. Jeśli nie zostanie podany, użyty zostanie bieżący lub ostatnio użyty sejf.

## Formaty skrócone

Oprócz powyższych formatów, istnieją jeszcze dwa skrócone formaty otwierania sejfów i plików:

- `obsidian://vault/my vault/my note` jest odpowiednikiem `obsidian://open?vault=my%20vault&file=my%20note`.
- `obsidian:///absolute/path/to/my note` jest równoważne z `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.