---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync oferuje klienta bezgłowego (headless) do synchronizacji sejfów bez korzystania z aplikacji desktopowej. Przydatny w potokach CI, agentach i zautomatyzowanych przepływach pracy. Synchronizuj najnowsze zmiany lub utrzymuj pliki stale aktualne.'
---
[[Wprowadzenie do Obsidian Sync|Obsidian Sync]] oferuje klienta bezobsługowego do synchronizacji skarbców bez korzystania z aplikacji desktopowej. Przydatny w potokach CI, agentach i zautomatyzowanych przepływach pracy. Synchronizuj najnowsze zmiany lub utrzymuj pliki stale aktualne.

Zainstaluj [[Bezobsługowy Sync|Obsidian Headless]] **(otwarta beta)**, aby korzystać z [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] z wiersza poleceń bez aplikacji desktopowej Obsidian. Bezobsługowy Sync wykorzystuje te same [[Bezpieczeństwo i prywatność|zabezpieczenia szyfrowania i prywatności]] co aplikacja desktopowa, w tym szyfrowanie end-to-end.

## Szybki start

> [!error] Wykonaj kopię zapasową danych przed rozpoczęciem
> 1. Zawsze wykonuj kopię zapasową danych przed rozpoczęciem na wypadek nieoczekiwanych sytuacji.
> 2. Nie używaj *jednocześnie* synchronizacji aplikacji desktopowej i Bezobsługowego Sync na tym samym urządzeniu, ponieważ może to powodować konflikty danych. Używaj tylko jednej metody synchronizacji na urządzenie.

Zainstaluj [[Bezobsługowy Sync|Obsidian Headless]] **(otwarta beta)**:

```shell
npm install -g obsidian-headless
```

Musisz posiadać aktywną [[Plany i limity przechowywania|subskrypcję Obsidian Sync]].

```shell
# Zaloguj się
ob login

# Wyświetl zdalne sejfy
ob sync-list-remote

# Skonfiguruj skarbiec do synchronizacji
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Uruchom jednorazową synchronizację
ob sync

# Uruchom ciągłą synchronizację (obserwuje zmiany)
ob sync --continuous
```

## Polecenia

### `ob sync-list-remote`

Wyświetla listę wszystkich zdalnych sejfów dostępnych dla Twojego konta, w tym sejfów udostępnionych.

### `ob sync-list-local`

Wyświetla listę lokalnie skonfigurowanych skarbców i ich ścieżek.

### `ob sync-create-remote`

Tworzy nowy zdalny sejf.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Opcja | Opis |
| --- | --- |
| `--name` | Nazwa sejfu (wymagana) |
| `--encryption` | `standard` dla szyfrowania zarządzanego, `e2ee` dla szyfrowania end-to-end |
| `--password` | Hasło szyfrowania end-to-end (pytane, jeśli pominięte) |
| `--region` | [[Regiony Sync\|Region]] serwera (automatycznie, jeśli pominięty) |

### `ob sync-setup`

Konfiguruje synchronizację między lokalnym skarbcem a zdalnym sejfem.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Opcja | Opis |
| --- | --- |
| `--vault` | ID lub nazwa zdalnego sejfu (wymagane) |
| `--path` | Katalog lokalny (domyślnie: bieżący katalog) |
| `--password` | Hasło szyfrowania E2E (pytane, jeśli pominięte) |
| `--device-name` | Nazwa urządzenia wyświetlana w [[Historia wersji\|historii wersji synchronizacji]] |
| `--config-dir` | Nazwa [[Folder konfiguracji\|folderu konfiguracji]] (domyślnie: `.obsidian`) |

### `ob sync`

Uruchamia synchronizację dla skonfigurowanego skarbca.

```
ob sync [--path <local-path>] [--continuous]
```

| Opcja | Opis |
| --- | --- |
| `--path` | Ścieżka lokalnego skarbca (domyślnie: bieżący katalog) |
| `--continuous` | Uruchom ciągle, obserwując zmiany |

### `ob sync-config`

Wyświetla lub zmienia [[Opcje synchronizacji i synchronizacja selektywna|opcje synchronizacji]] skarbca. Uruchom bez opcji, aby wyświetlić bieżącą konfigurację.

```
ob sync-config [--path <local-path>] [options]
```

| Opcja                 | Opis                                                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Ścieżka lokalnego skarbca (domyślnie: bieżący katalog)                                                                                                                                                        |
| `--mode`              | Tryb synchronizacji: `bidirectional` (domyślny), `pull-only` (tylko pobieranie, ignorowanie lokalnych zmian) lub `mirror-remote` (tylko pobieranie, cofanie lokalnych zmian)                                    |
| `--conflict-strategy` | `merge` lub `conflict`                                                                                                                                                                                         |
| `--file-types`        | Typy załączników do synchronizacji: `image`, `audio`, `video`, `pdf`, `unsupported` (rozdzielone przecinkami, puste aby wyczyścić)                                                                              |
| `--configs`           | Kategorie konfiguracji do synchronizacji: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (rozdzielone przecinkami, puste aby wyłączyć synchronizację konfiguracji) |
| `--excluded-folders`  | Foldery do wykluczenia (rozdzielone przecinkami, puste aby wyczyścić)                                                                                                                                           |
| `--device-name`       | Nazwa urządzenia identyfikująca tego klienta w historii wersji synchronizacji                                                                                                                                   |
| `--config-dir`        | Nazwa folderu konfiguracji (domyślnie: `.obsidian`)                                                                                                                                                             |

### `ob sync-status`

Wyświetla status synchronizacji i konfigurację skarbca.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Rozłącza skarbiec od synchronizacji i usuwa zapisane dane uwierzytelniające.

```
ob sync-unlink [--path <local-path>]
```

## Moduły natywne

Obsidian Headless zawiera prekompilowany natywny dodatek do ustawiania czasu utworzenia pliku (birthtime) w systemach Windows i macOS. Pozwala to zachować oryginalne znaczniki czasu utworzenia podczas pobierania plików z serwera.

Dodatek jest przeznaczony dla N-API w wersji 3, więc skompilowane pliki binarne są stabilne pod względem ABI i działają w różnych wersjach Node.js bez ponownej kompilacji.

W systemie Linux birthtime nie jest obsługiwany — dodatek nie jest dołączony, a synchronizacja działa normalnie bez niego.

Prekompilowane pliki binarne są dostępne dla:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
