---
permalink: configuration-folder
publish: true
mobile: true
description: 'Dowiedz się, jak uzyskać dostęp do folderu konfiguracyjnego i zarządzać nim na urządzeniach stacjonarnych i mobilnych.'
---
Folder konfiguracji Obsidian zawiera wszystkie pliki ustawień dotyczące Twojego [[Zarządzaj skarbcami|skarbca]].

Domyślnie folder konfiguracji nosi nazwę `.obsidian` i znajduje się w folderze skarbca. Jeśli korzystasz z usługi synchronizacji lub chcesz testować różne profile w tym samym skarbcu, możesz zmienić folder konfiguracji.

## Dostęp do folderu konfiguracji

### Komputer

Na komputerze folder `.obsidian` znajduje się w folderze skarbca. Możesz uzyskać do niego dostęp za pomocą systemowego menedżera plików.

### Urządzenia mobilne

Dostęp do folderu konfiguracji różni się w zależności od platformy:

**iOS i iPadOS**

Na iOS i iPadOS nie ma domyślnego sposobu dostępu do folderu `.obsidian`. Aby przeglądać i edytować ukryte pliki oraz foldery, potrzebujesz aplikacji zewnętrznej, na przykład:

- **Taio** — Darmowa aplikacja z podstawowymi funkcjami przeglądania i edycji nazw folderów i plików.
- **Textastic** — Płatna aplikacja z zaawansowanymi możliwościami edycji plików.

**Android**

Aby uzyskać dostęp do folderu `.obsidian` na Androidzie:

1. Otwórz systemowy menedżer plików.
2. Włącz opcję „Pokaż ukryte pliki" w ustawieniach.
3. Przejdź do folderu skarbca. Folder `.obsidian` pojawi się na najwyższym poziomie.

> [!tip]- Alternatywne menedżery plików
> Jeśli domyślny menedżer plików nie posiada opcji „Pokaż ukryte pliki", zainstaluj aplikację menedżera plików, która zawiera tę funkcję.

## Zmiana folderu konfiguracji

Aby ustawić folder konfiguracji:

1. Otwórz **[[Ustawienia]] → Pliki i łącza**.
2. W polu **Zastąp folder konfiguracji** wpisz nazwę swojego profilu, zaczynając od kropki (`.`). Na przykład `.obsidian-awesome`.
3. Uruchom ponownie Obsidian, aby zmiany zostały zastosowane.

> [!info] Żadne ustawienia z obecnego folderu konfiguracji nie zostaną przeniesione do nowego folderu konfiguracji. Jednak poprzedni folder konfiguracji pozostanie w folderze skarbca.
