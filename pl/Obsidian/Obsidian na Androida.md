---
permalink: android
---
Aplikacja mobilna Obsidian na Androida przenosi zaawansowane możliwości tworzenia notatek na Twoje urządzenie z Androidem. Możesz ją pobrać z [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) lub jako [plik APK](https://obsidian.md/download).
Obsługuje Androida w wersji 5.1 i nowszych.

Ta strona opisuje funkcje specyficzne dla Androida, w tym widżety, integrację z Szybkimi ustawieniami i skróty.

## Synchronizacja

Aby zsynchronizować notatki z Obsidian na Androidzie, zobacz [[Synchronizuj notatki między urządzeniami]].

## Lokalizacja sejfu

Gdy uruchomisz Obsidian na Androidzie, zostaniesz poproszony o wybór miejsca przechowywania danych sejfu. Możesz wybrać **pamięć urządzenia** (zalecane) lub **pamięć aplikacji**.

### Pamięć urządzenia

W przypadku opcji **pamięć urządzenia** dane są przechowywane we współdzielonej lokalizacji na urządzeniu. Pozwala to innym aplikacjom i usługom na dostęp do Twojego sejfu Obsidian, np. zewnętrznym narzędziom do [[Synchronizuj notatki między urządzeniami|synchronizacji]].

Jest to zalecana opcja, ponieważ oferuje lepszą kompatybilność z narzędziami do synchronizacji i zapewnia zachowanie danych nawet po odinstalowaniu aplikacji. Wymaga jednak dodatkowych uprawnień dostępu do plików na urządzeniu.

Ze względu na ograniczenia Androida Obsidian będzie wymagać dostępu do „Wszystkich plików", aby działać niezawodnie. Google zaleca to dla aplikacji takich jak Obsidian, które są uznawane za „aplikacje do zarządzania dokumentami". [Dowiedz się więcej](https://developer.android.com/training/data-storage/manage-all-files).

Aplikacja używa tego uprawnienia wyłącznie po to, aby umożliwić Ci dostęp do danych na urządzeniu. Twoje dane nigdy nie są dla nas dostępne. Aby dowiedzieć się więcej o tym, jak chronimy Twoje dane i zapewniamy prywatność, odwiedź naszą [stronę Bezpieczeństwo](https://obsidian.md/security).

### Pamięć aplikacji

W przypadku opcji **pamięć aplikacji** dane są przechowywane w prywatnej pamięci aplikacji Obsidian. Zapewnia to izolację danych od innych aplikacji dla większej prywatności.

Jest to dobra opcja, jeśli nie korzystasz z zewnętrznych narzędzi do synchronizacji i preferujesz ściślejszą izolację notatek na poziomie aplikacji.

Przy tej opcji możesz korzystać z [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] i zewnętrznych wtyczek do synchronizacji dostępnych w [[Wtyczki społeczności|Wtyczkach społeczności]], ale nie możesz używać narzędzi takich jak Syncthing, które wymagają współdzielonej pamięci.

> [!warning] Odinstalowanie Obsidian usunie Twoje lokalne notatki, jeśli korzystasz z pamięci aplikacji
> Jeśli używasz opcji **Pamięć aplikacji**, lokalne dane sejfu zostaną usunięte po odinstalowaniu aplikacji. Dane sejfu Obsidian na innych urządzeniach nie zostaną usunięte.

## Widżety

Obsidian na Androida oferuje kilka opcji widżetów umożliwiających szybki dostęp do sejfów i notatek z ekranu głównego. Dostępne widżety to:

- **Otwórz notatkę** — Otwórz konkretną notatkę
- **Nowa notatka** — Utwórz nową notatkę
- **Szukaj** — Uruchom zapytanie wyszukiwania
- **Codzienna notatka** — Otwórz codzienną notatkę
- **Otwórz Obsidian** — Uruchom aplikację

> [!note] Uwaga
> Te widżety są statyczne i nie wyświetlają podglądu wybranej notatki ani sejfu.

Aby dodać widżety do ekranu głównego:
1. Dotknij i przytrzymaj dowolne miejsce na ekranie głównym
2. Wybierz „Widżety"
3. Znajdź Obsidian, a następnie wybierz widżet, którego chcesz użyć.

> [!note] Uwaga
> Widżety Obsidian można zmieniać rozmiar. Aby zmienić rozmiar widżetu, dotknij go i przytrzymaj, a następnie przeciągnij uchwyty zmiany rozmiaru.

Możesz dodać wiele widżetów tego samego typu, aby otwierać różne pliki lub uruchamiać różne zapytania wyszukiwania.

Aby skonfigurować widżet, przytrzymaj go na ekranie głównym, a następnie znajdź opcję „Edytuj" lub „Konfiguruj". Pozwoli to określić parametry wymagane do działania widżetu po dotknięciu, takie jak plik lub ścieżka, zapytanie wyszukiwania i nazwa sejfu.

Więcej informacji o widżetach na Androidzie znajdziesz w tym [artykule pomocy Google](https://support.google.com/android/answer/9450271?hl=en).

## Kafelki Szybkich ustawień

Wymaga Androida 7.0 lub nowszego.

Dodaj kafelek Szybkich ustawień Obsidian, aby mieć szybki dostęp do aplikacji z panelu powiadomień. Działa na ekranie głównym i ekranie blokady.

> [!note] Uwaga
> W odróżnieniu od widżetów aplikacji, możesz dodać tylko jeden kafelek Szybkich ustawień tego samego typu.

Aby dodać kafelek Szybkich ustawień do panelu powiadomień:

1. Otwórz panel powiadomień, zazwyczaj przesuwając palcem w dół od paska stanu. Uwaga: może być konieczne przesunięcie jeszcze raz, aby zobaczyć więcej opcji.
2. W kafelkach Szybkich ustawień wybierz „Edytuj" — zazwyczaj jest to ta sama sekcja, w której znajdują się przełączniki Wi-Fi, Bluetooth i blokady orientacji.
3. Znajdź i wybierz kafelek Szybkich ustawień Obsidian, a następnie przenieś go w wybrane miejsce.
4. Aby skonfigurować kafelek Szybkich ustawień, dotknij go i przytrzymaj, aby wyświetlić ekran konfiguracji.

Więcej informacji o Szybkich ustawieniach na Androidzie znajdziesz w tym [artykule pomocy Google](https://support.google.com/android/answer/9083864?hl=en).

## Skróty

Wymaga Androida 7.1 lub nowszego.

Obsidian udostępnia skróty aplikacji, do których można uzyskać dostęp na kilka sposobów:

- Przytrzymanie ikony aplikacji Obsidian
- Przeciągnięcie ikony skrótu na ekran główny
- Dostęp przez pasek wyszukiwania w launcherze (dostępne u większości producentów urządzeń)

Dostępne skróty:

- **Otwórz notatkę** — Otwórz konkretną notatkę w sejfie
- **Codzienna notatka** — Przejdź bezpośrednio do dzisiejszej codziennej notatki

> [!note] Uwaga
> Skróty w Obsidian 1.11 nie są konfigurowalne i zostaną przebudowane w późniejszych wersjach, aby oferować bardziej dynamiczne opcje dostosowane do Twoich konkretnych notatek.
