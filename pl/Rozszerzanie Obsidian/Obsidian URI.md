---
permalink: uri
---
Obsidian URI to niestandardowy protokół URI obsługiwany przez Obsidian, który umożliwia wyzwalanie różnych akcji, takich jak otwieranie notatki lub tworzenie notatki. Obsidian URI umożliwia automatyzację i przepływy pracy między aplikacjami.

## Format URI

Obsidian URI używa następującego formatu:

```
obsidian://action?param1=value&param2=value
```

Parametr `action` to akcja, którą chcesz wykonać. Dostępne akcje obejmują:

- `open` aby otworzyć notatkę.
- `new` aby stworzyć lub dodać do istniejącej notatki.
- `daily` aby stworzyć lub otworzyć codzienną notatkę.
- `unique` aby stworzyć nową unikatową notatkę.
- `search` aby otworzyć wyszukiwanie.
- `choose-vault` aby otworzyć menedżer skarbców.

> [!warning] Kodowanie
> Upewnij się, że wartości są prawidłowo zakodowane w formacie URI. Na przykład znaki ukośnika `/` muszą być zakodowane jako `%2F`, a znaki spacji muszą być zakodowane jako `%20`.
> 
> Jest to szczególnie ważne, ponieważ nieprawidłowo zakodowany „zarezerwowany" znak może zaburzyć interpretację URI. [Szczegóły znajdziesz tutaj](https://en.wikipedia.org/wiki/Percent-encoding).

## Otwieranie notatki

Akcja `open` otwiera skarbiec Obsidian lub otwiera plik w tym skarbcu.

### Przykłady

- `obsidian://open?vault=my%20vault`
  Otwiera skarbiec `my vault`. Jeśli skarbiec jest już otwarty, ustawia fokus na okno.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Otwiera skarbiec identyfikowany przez ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Otwiera notatkę `my note.md` w skarbcu `my vault`, zakładając, że plik istnieje.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Wyszuka dowolny skarbiec zawierający ścieżkę `/home/user/my vault/path/to/my note`. Następnie pozostała część ścieżki jest przekazywana do parametru `file`. Na przykład, jeśli skarbiec istnieje pod ścieżką `/home/user/my vault`, to byłoby to równoważne z parametrem `file` ustawionym na `path/to/my note`.


> [!tip] Otwieranie nagłówka lub bloku
> Przy prawidłowym kodowaniu URI możesz nawigować do nagłówka lub bloku w notatce. `Note%23Heading` przeniesie do nagłówka o nazwie „Heading", natomiast `Note%23%5EBlock` przeniesie do bloku o nazwie „Block".

### Parametry

- `vault` może być nazwą skarbca lub ID skarbca[^1].
- `file` może być nazwą pliku lub ścieżką od katalogu głównego skarbca do określonego pliku. Jeśli rozszerzenie pliku to `md`, rozszerzenie można pominąć.
- `path` bezwzględna ścieżka systemowa do pliku.
  - Użycie tego parametru nadpisze zarówno `vault`, jak i `file`.
  - Spowoduje to, że aplikacja wyszuka najbardziej pasujący skarbiec zawierający określoną ścieżkę pliku.
  - Następnie pozostała część ścieżki zastępuje parametr `file`.
- `prepend` doda na początku pliku i spróbuje scalić właściwości.
- `append` doda na końcu pliku i również spróbuje scalić właściwości.
- `paneType` (opcjonalne) określa, gdzie notatka zostanie otwarta w interfejsie.
  - jeśli nie podano, ostatnia aktywna karta zostanie zastąpiona.
  - `paneType=tab` otwórz w nowej karcie.
  - `paneType=split` otwórz w nowej grupie kart.
  - `paneType=window` otwórz w oknie wyskakującym (tylko na komputerze).

## Tworzenie notatki

Akcja `new` tworzy nową notatkę w skarbcu, opcjonalnie z pewną zawartością.

### Przykłady

- `obsidian://new?vault=my%20vault&name=my%20note`
  Otwiera skarbiec `my vault` i tworzy nową notatkę o nazwie `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Otwiera skarbiec `my vault` i tworzy nową notatkę pod ścieżką `path/to/my note`.

### Parametry

- `vault` może być nazwą skarbca lub ID skarbca[^1]. Tak samo jak w akcji `open`.
- `name` nazwa pliku do utworzenia. Jeśli jest podana, lokalizacja pliku zostanie wybrana na podstawie preferencji „Domyślna lokalizacja nowej notatki".
- `file` bezwzględna ścieżka w skarbcu, łącznie z nazwą. Nadpisze `name`, jeśli jest podana.
- `path` globalnie bezwzględna ścieżka. Działa podobnie jak opcja `path` w akcji `open`, która nadpisze zarówno `vault`, jak i `file`.
- `paneType` (opcjonalne) określa, gdzie notatka zostanie otwarta w interfejsie. Tak samo jak w akcji `open`.
- `content` (opcjonalne) zawartość notatki.
- `clipboard` (opcjonalne) użycie zawartości schowka zamiast określania `content`.
- `silent` (opcjonalne) dołącz ten parametr, jeśli nie chcesz otwierać nowej notatki.
- `append` (opcjonalne) dołącz ten parametr, aby dodać do istniejącego pliku, jeśli taki istnieje.
- `overwrite` (opcjonalne) nadpisz istniejący plik, jeśli taki istnieje, ale tylko wtedy, gdy `append` nie jest ustawione.
- `x-success` (opcjonalne) zobacz [[#Używanie parametrów x-callback-url]].

## Tworzenie lub otwieranie codziennej notatki

Akcja `daily` tworzy lub otwiera codzienną notatkę. Wtyczka [[Dziennik|Dziennik]] musi być włączona.

### Przykłady

- `obsidian://daily?vault=my%20vault`
  Otwiera skarbiec `my vault` i tworzy lub otwiera codzienną notatkę.

### Parametry

Akcja `daily` akceptuje te same parametry co akcja `new`.

## Unikatowa notatka

Akcja `unique` tworzy nową unikatową notatkę w skarbcu. Wtyczka [[Wtyczki/Kreator niepowtarzalnych notatek|Kreator niepowtarzalnych notatek]] musi być włączona.

### Przykłady

- `obsidian://unique?vault=my%20vault`
  Otwiera skarbiec `my vault` i tworzy nową unikatową notatkę.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Otwiera skarbiec `my vault` i tworzy nową unikatową notatkę z zawartością `Hello World`.

### Parametry

- `vault` może być nazwą skarbca lub ID skarbca[^1]. Tak samo jak w akcji `open`.
- `paneType` (opcjonalne) określa, gdzie notatka zostanie otwarta w interfejsie. Tak samo jak w akcji `open`.
- `content` (opcjonalne) zawartość notatki.
- `clipboard` (opcjonalne) użycie zawartości schowka zamiast określania `content`.
- `x-success` (opcjonalne) zobacz [[#Używanie parametrów x-callback-url]].

## Otwieranie wyszukiwania

Akcja `search` otwiera [[Szukaj|wyszukiwanie]] w określonym skarbcu i opcjonalnie wykonuje wyszukiwanie.

### Przykłady

- `obsidian://search?vault=my%20vault`
  Otwiera skarbiec `my vault` i otwiera [[Szukaj|wyszukiwanie]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Otwiera skarbiec `my vault`, otwiera [[Szukaj|wyszukiwanie]] i wykonuje wyszukiwanie frazy `Obsidian`.

### Parametry

- `vault` może być nazwą skarbca lub ID skarbca[^1]. Tak samo jak w akcji `open`.
- `query` (opcjonalne) fraza wyszukiwania do wykonania.

## Otwieranie menedżera skarbców

Akcja `choose-vault` otwiera [[Zarządzaj skarbcami|menedżer skarbców]].

### Przykłady

- `obsidian://choose-vault`

## Integracja z Hook

Ta akcja Obsidian URI jest przeznaczona do użytku z [Hook](https://hookproductivity.com/).

### Przykład

`obsidian://hook-get-address`

### Parametry

- `vault` (opcjonalne) może być nazwą skarbca lub ID skarbca[^1]. Jeśli nie podano, zostanie użyty bieżący lub ostatnio aktywny skarbiec.
- `x-success` (opcjonalne) zobacz [[#Używanie parametrów x-callback-url]].
- `x-error` (opcjonalne) zobacz [[#Używanie parametrów x-callback-url]].

Jeśli `x-success` jest zdefiniowane, to API użyje go jako x-callback-url. W przeciwnym razie skopiuje link Markdown bieżącej aktywnej notatki do schowka jako adres URL `obsidian://open`.

## Używanie parametrów x-callback-url

Niektóre punkty końcowe akceptują parametry x-callback-url `x-success` i `x-error`. Gdy są podane, Obsidian dostarczy następujące informacje do callbacku `x-success`:

- `name` nazwa pliku, bez rozszerzenia.
- `url` URI `obsidian://` dla tego pliku.
- `file` (tylko na komputerze) adres URL `file://` dla tego pliku.

Na przykład, jeśli Obsidian otrzyma
`obsidian://.....x-success=myapp://x-callback-url`, odpowiedzią będzie `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Formaty skrócone

Oprócz powyższych formatów dostępne są dwa dodatkowe „skrócone" formaty do otwierania skarbców i plików:

1. `obsidian://vault/my vault/my note` jest równoważne z `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` jest równoważne z `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Rozwiązywanie problemów

### Rejestrowanie Obsidian URI

W systemach Windows i macOS jednokrotne uruchomienie aplikacji powinno wystarczyć do zarejestrowania protokołu Obsidian URI na komputerze.

W systemie Linux jest to bardziej złożony proces:

1. Upewnij się, że utworzyłeś plik `obsidian.desktop`. [Szczegóły znajdziesz tutaj](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Upewnij się, że plik desktop określa pole `Exec` jako `Exec=executable %u`. `%u` służy do przekazywania URI `obsidian://` do aplikacji.
3. Jeśli używasz instalatora AppImage, może być konieczne rozpakowanie go za pomocą `Obsidian-x.y.z.AppImage --appimage-extract`. Następnie upewnij się, że dyrektywa `Exec` wskazuje na rozpakowany plik wykonywalny.


[^1]: ID skarbca to losowy 16-znakowy kod przypisany do skarbca, na przykład `ef6ca3e3b524d22f`. To ID jest unikalne dla każdego folderu na komputerze. ID można znaleźć, otwierając przełącznik skarbców i klikając „Skopiuj ID sejfu" w menu kontekstowym wybranego skarbca.
