---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish oferuje klienta bezgłowego (headless) do publikowania sejfów bez korzystania z aplikacji desktopowej. Przydatny w potokach CI i zautomatyzowanych przepływach pracy.
---
[[Wprowadzenie do Obsidian Publish|Obsidian Publish]] oferuje klienta bezobsługowego do publikowania skarbców bez korzystania z aplikacji desktopowej. Przydatne w potokach CI i zautomatyzowanych przepływach pracy. Publikuj najnowsze zmiany według harmonogramu lub jako część potoku budowania.

Zainstaluj [[Obsidian Headless]] **(otwarta beta)**, aby korzystać z [[Wprowadzenie do Obsidian Publish|Obsidian Publish]] z wiersza poleceń bez aplikacji desktopowej Obsidian.

## Szybki start

Zainstaluj [[Obsidian Headless|Obsidian Headless]] **(otwarta beta)**:

```shell
npm install -g obsidian-headless
```

Musisz posiadać aktywną [[Wprowadzenie do Obsidian Publish|subskrypcję Obsidian Publish]].

```shell
# Zaloguj się
ob login

# Wyświetl swoje strony Publish
ob publish-list-sites

# Połącz lokalny skarbiec ze stroną Publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Podgląd zmian bez publikowania
ob publish --dry-run

# Opublikuj zmiany
ob publish
```

## Polecenia

### `ob publish-list-sites`

Wyświetla wszystkie strony Publish dostępne dla Twojego konta.

### `ob publish-create-site`

Tworzy nową stronę Publish.

```
ob publish-create-site --slug <slug>
```

| Opcja | Opis |
| --- | --- |
| `--slug` | Identyfikator URL dla Twojej strony (np. `my-notes` tworzy `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Łączy lokalny skarbiec ze stroną Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Opcja | Opis |
| --- | --- |
| `--site` | ID strony lub slug |
| `--path` | Ścieżka lokalnego skarbca (domyślnie: bieżący katalog) |

### `ob publish`

Publikuje zmiany ze skarbca na Twojej stronie. Domyślnie uwzględniane są tylko pliki z `publish: true` w metadanych początkowych.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Opcja | Opis |
| --- | --- |
| `--path` | Ścieżka lokalnego skarbca (domyślnie: bieżący katalog) |
| `--all` | Uwzględnij wszystkie pliki, nie tylko te z flagą publish |
| `--dry-run` | Pokaż zmiany bez publikowania |
| `--yes` | Opublikuj bez pytania o potwierdzenie |

### `ob publish-config`

Wyświetla lub zmienia ustawienia dołączania/wykluczania folderów dla skarbca. Uruchom bez opcji, aby wyświetlić bieżącą konfigurację.

```
ob publish-config [--path <local-path>] [options]
```

| Opcja | Opis |
| --- | --- |
| `--path` | Ścieżka lokalnego skarbca (domyślnie: bieżący katalog) |
| `--includes` | Foldery do dołączenia, oddzielone przecinkami (pusty ciąg, aby wyczyścić) |
| `--excludes` | Foldery do wykluczenia, oddzielone przecinkami (pusty ciąg, aby wyczyścić) |

### `ob publish-site-options`

Wyświetla lub aktualizuje ogólne ustawienia wyświetlania i nawigacji strony. Uruchom bez opcji, aby wyświetlić bieżące ustawienia.

```
ob publish-site-options [--path <local-path>] [options]
```

| Opcja | Opis |
| --- | --- |
| `--path` | Ścieżka lokalnego skarbca (domyślnie: bieżący katalog) |
| `--site-name` | Nazwa strony |
| `--index-file` | Ścieżka pliku strony głównej |
| `--logo` | Ścieżka pliku logo (pusty ciąg, aby wyczyścić) |
| `--show-navigation` | Pokaż menu nawigacji |
| `--show-graph` | Pokaż graf |
| `--show-outline` | Pokaż spis treści |
| `--show-search` | Pokaż szukaj |
| `--show-backlinks` | Pokaż linki zwrotne |
| `--show-hover-preview` | Pokaż podgląd po najechaniu kursorem |
| `--show-theme-toggle` | Pokaż przełącznik motywu |
| `--default-theme` | Domyślny motyw: `light` lub `dark` |
| `--readable-line-length` | Czytelna długość linii |
| `--strict-line-breaks` | Łamanie wiersza |
| `--hide-title` | Ukryj tytuł w linii |
| `--sliding-window` | Tryb przesuwanego okna |
| `--nav-order` | Kolejność nawigacji, ścieżki oddzielone przecinkami (pusty ciąg, aby wyczyścić) |
| `--nav-hidden` | Ukryte elementy nawigacji, ścieżki oddzielone przecinkami (pusty ciąg, aby wyczyścić) |

### `ob publish-unlink`

Rozłącza skarbiec ze stroną Publish.

```
ob publish-unlink [--path <local-path>]
```
