---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian działa jako aplikacja lokalna na urządzeniach każdego członka Twojego zespołu. Jest zaprojektowany do pracy zarówno online, jak i offline, w sposób bezpieczny i prywatny, dając Ci pełną kontrolę nad danymi zespołu. Obsidian nie jest dostępny jako aplikacja webowa, dlatego konieczne będzie wdrożenie aplikacji na urządzeniach członków zespołu.

## Instalacja i aktualizacja Obsidian

Twój zespół może pobrać Obsidian z naszej [strony pobierania](https://obsidian.md/download). Wydania są również dostępne na naszej [stronie wydań GitHub](https://github.com/obsidianmd/obsidian-releases/releases), która zawiera linki do [dziennika zmian](https://obsidian.md/changelog/).

> [!tip] Dla użytkowników Windows, którzy potrzebują instalatora systemowego, uniwersalny plik `.exe` zawiera opcję instalacji Obsidian dla wszystkich użytkowników.

Jeśli w aplikacji włączone są aktualizacje automatyczne, przyszłe wersje będą instalowane automatycznie po ponownym uruchomieniu Obsidian przez użytkowników. Ponadto zalecamy okresowe przeprowadzanie [[Aktualizuj Obsidian#Aktualizacje instalatora|aktualizacji instalatora]], aby otrzymywać najnowsze aktualizacje frameworka Electron, w tym poprawki bezpieczeństwa.

Jeśli szukasz informacji o tym, jak ograniczyć dostęp sieciowy do Obsidian podczas tego procesu, zapoznaj się z sekcją [[Kwestie bezpieczeństwa dla zespołów#Sieć i dostęp|sieć i dostęp]].

## Dostosowywanie Obsidian

Obsidian jest łatwy do modyfikacji, aby dopasować go do potrzeb Twojego zespołu. Dzięki rozbudowanemu API i dużemu ekosystemowi użytkowników, Obsidian oferuje dostęp do licznych wtyczek, motywów i narzędzi uzupełniających.

W przypadku pytań dotyczących bezpieczeństwa w tych tematach, zapoznaj się z [[Kwestie bezpieczeństwa dla zespołów]].

### Foldery konfiguracji

[[Folder konfiguracji]] to miejsce, w którym [[Słowniczek#Skarbiec|skarbiec]] Obsidian przechowuje swoje ustawienia aplikacji. Domyślnie folder ten nosi nazwę `.obsidian`, ale masz możliwość [[Folder konfiguracji#Zmiana folderu konfiguracji|zmiany nazwy folderu konfiguracji]] zgodnie ze swoimi preferencjami.

Zalecamy stworzenie standardowego szablonu folderu konfiguracji do wdrożenia na urządzeniach członków zespołu.

### Wtyczki

[[Wbudowane wtyczki]] to opcjonalne funkcje stworzone przez zespół Obsidian. Funkcje te są zintegrowane w podstawowym kodzie aplikacji i mogą być włączane lub wyłączane.

[[Wtyczki społeczności]] to funkcje stworzone przez osoby trzecie, dodawane do aplikacji Obsidian i instalowane za pośrednictwem katalogu społeczności. Wtyczki zewnętrzne wykorzystują [Obsidian API](https://github.com/obsidianmd/obsidian-api). Wtyczki znajdują się w folderze `.obsidian/plugins` w skarbcu i mogą być instalowane ręcznie w tej lokalizacji.

### Motywy i snippety

[[Motywy]] wizualnie zmieniają interfejs Obsidian. Podobnie jak wtyczki, motywy można pobierać z naszego katalogu społeczności. Motywy znajdują się w folderze `.obsidian/themes` w skarbcu.

[[Snippety CSS|Snippety]] to małe pliki `.css`, które wizualnie modyfikują aspekty interfejsu Obsidian. W niektórych przypadkach mogą również dodawać ulepszenia funkcjonalne. Snippety znajdują się w folderze `.obsidian/snippets` w skarbcu.

## Najczęściej zadawane pytania

W przypadku pytań dotyczących zarządzania kontem i bezpieczeństwa, zapoznaj się z [[Kwestie bezpieczeństwa dla zespołów#Bezpieczeństwo konta|bezpieczeństwo konta]].

### Wdrażanie

**Czy mogę wdrażać licencje na wielu instalacjach jednocześnie?**
Obecnie nie obsługujemy wdrażania licencji za pomocą skryptu wdrożeniowego, na przykład w pliku `.json`. Jeśli jesteś zainteresowany tą funkcją dla swojego zespołu, prześlij [prośbę o funkcję](https://forum.obsidian.md/c/feature-requests/8).

**Czy Obsidian może blokować określone funkcje lub konfiguracje za pomocą ustawienia lub flagi aplikacji?**
Obecnie możesz to zrobić, blokując dostęp do edycji folderu `.obsidian` lub konkretnych plików i folderów w nim zawartych, opisanych powyżej. Jeśli jesteś zainteresowany większą kontrolą dostępu dla swojego zespołu, prześlij [prośbę o funkcję](https://forum.obsidian.md/c/feature-requests/8).
