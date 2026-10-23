---
permalink: data-storage
publish: true
mobile: true
description: 'Ta strona wyjaśnia, w jaki sposób Obsidian przechowuje dane na Twoim urządzeniu.'
---
Obsidian przechowuje Twoje notatki jako [[Podstawowa składnia formatowania|sformatowane w Markdown]] pliki zwykłego tekstu w _sejfie_. Sejf to folder w Twoim lokalnym systemie plików, łącznie z podfolderami.

Ponieważ notatki to pliki zwykłego tekstu, możesz używać innych edytorów tekstu i menedżerów plików do edytowania i zarządzania notatkami. Obsidian automatycznie odświeża Twój sejf, aby nadążyć za wszelkimi zewnętrznymi zmianami.

Możesz utworzyć sejf wszędzie tam, gdzie pozwala na to Twój system operacyjny. Obsidian synchronizuje się z [[Wprowadzenie do Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git i wieloma innymi usługami firm trzecich.

Możesz otwierać wiele folderów jako osobne sejfy, na przykład aby oddzielić notatki do pracy i szkoły.

> [!warning] Sejfy w sejfach
> Ponieważ [[Łącza wewnętrzne]] są lokalne dla sejfu, zalecamy, aby nie tworzyć sejfów wewnątrz sejfów. Łącza mogą nie być poprawnie aktualizowane.

## Ustawienia sejfu

Obsidian tworzy [[Folder konfiguracji|folder konfiguracji]] `.obsidian` w folderze głównym sejfu, który zawiera preferencje specyficzne dla danego sejfu, takie jak [[Skróty klawiszowe|skróty klawiszowe]], [[Motywy|motywy]] i [[Wtyczki społeczności|wtyczki społeczności]].

Domyślnie większość systemów operacyjnych ukrywa foldery zaczynające się od kropki (`.`), więc może być konieczne zaktualizowanie ustawień menedżera plików, aby je zobaczyć.

- **macOS**: W Finderze naciśnij `Cmd+Shift+.` (kropka), aby wyświetlić ukryte pliki.
- **Windows**: [Pokaż ukryte pliki](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** W większości eksplorerów plików naciśnij `Ctrl + h`, aby wyświetlić ukryte pliki.

> [!tip] Dodawanie `.obsidian` do Git
> Pliki `.obsidian/workspace.json` i `.obsidian/workspaces.json` przechowują aktualny układ przestrzeni roboczej i aktualizują się za każdym razem, gdy otworzysz nowy plik. Jeśli używasz [Git](https://git-scm.com) do zarządzania swoim sejfem, możesz chcieć dodać te pliki do `.gitignore`.

## Ustawienia globalne

Obsidian przechowuje ustawienia globalne w folderze systemowym. Lokalizacja folderu systemowego zależy od używanego systemu operacyjnego.

- **macOS**: `/Users/twojanazwauzytkownika/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` lub `~/.config/obsidian/`

> [!warning] Nie twórz sejfu w folderze systemowym. Może to prowadzić do uszkodzenia danych lub ich utraty.

## IndexedDB

IndexedDB to niskopoziomowa baza danych po stronie klienta, której Obsidian używa do przechowywania danych backendu. Pomaga utrzymywać stan połączeń [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] i zachowuje [[#Pamięć podręczna metadanych|pamięć podręczną metadanych]] po zamknięciu aplikacji.

> [!warning] Jeśli tryb [Lockdown Mode](<https://support.apple.com/en-us/105120>) firmy Apple jest włączony, a Obsidian nie jest z niego wyłączony, te pliki bazy danych nie zostaną zapisane, co będzie wymagało ponownego indeksowania przy każdym uruchomieniu aplikacji.

### Pamięć podręczna metadanych

Aby zapewnić szybkie działanie aplikacji, Obsidian utrzymuje lokalny rejestr metadanych dotyczących plików w Twoim sejfie, zwany **pamięcią podręczną metadanych**. Te metadane obsługują wiele funkcji w całej aplikacji, od podglądu grafu po konspekt.

Obsidian utrzymuje tę pamięć podręczną w synchronizacji z plikami w Twoim sejfie, ale możliwe jest, że dane rozejdą się z plikami źródłowymi. Jeśli tak się stanie w Twoim sejfie, możesz odbudować pamięć podręczną metadanych w ustawieniach aplikacji w sekcji *Pliki i łącza*.
