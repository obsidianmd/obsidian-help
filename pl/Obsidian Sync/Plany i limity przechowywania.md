---
permalink: sync/plans
publish: true
mobile: true
description: Dowiedz się o różnych opcjach planów dostępnych dla Obsidian Sync.
---
## Plany

Aby synchronizować swoje notatki za pomocą [[Wprowadzenie do Obsidian Sync|Obsidian Sync]], potrzebujesz planu subskrypcyjnego. Możesz zakupić plan Sync, logując się na [swoje konto](https://obsidian.md/account/sync). Sprawdź [stronę Sync](https://obsidian.md/sync), aby poznać ceny.

Poniżej znajduje się porównanie planu Standard i Plus:

|                                                            | Sync Standard | Sync Plus       |
| ---------------------------------------------------------- | ------------- | --------------- |
| Zsynchronizowane sejfy                                     | 1             | 10              |
| Maksymalny rozmiar pliku                                   | 5 MB          | 200 MB          |
| Całkowita przestrzeń                                       | 1 GB          | 10 GB do 100 GB |
| [[Historia wersji]]                                        | 1 miesiąc     | 12 miesięcy     |
| Urządzenia                                                 | Bez limitu    | Bez limitu      |
| [[Współpraca nad wspólnym sejfem\|Współdzielone sejfy]]    | Tak           | Tak             |

## Limity przechowywania

Ilość danych, które możesz przechowywać za pomocą [[Wprowadzenie do Obsidian Sync|Obsidian Sync]], zależy od Twojego planu subskrypcyjnego. W planie Sync Plus możesz dokupić dodatkową przestrzeń do 100 GB poprzez [panel swojego konta](https://obsidian.md/account/sync). Więcej informacji znajdziesz w [[Najczęściej zadawane pytania]].

Istnieje jeden wspólny limit przechowywania dla całego konta, obejmujący wszystkie notatki we wszystkich sejfach. [[Historia wersji]] i [[Załączniki|załączniki]] również wliczają się do limitu przechowywania Twojego konta.

Gdy osiągniesz limit przechowywania konta, wtyczka Sync przestanie synchronizować pliki i zostaniesz poproszony o wyczyszczenie zdalnych sejfów.

### Identyfikowanie i usuwanie dużych plików

Aby zidentyfikować i usunąć duże pliki ze skarbca:

1. Otwórz **[[Ustawienia]] → Sync**.
2. Wybierz **Wyświetl największe pliki** obok **Rozmiar sejfu przekracza limit**.
	1. Jeśli nie widzisz **Rozmiar sejfu przekracza limit**, oznacza to, że ==jeszcze nie osiągnąłeś limitu rozmiaru==.
3. Zamknij okno **Wyświetl największe pliki**.
4. Usuń niektóre duże pliki, których już nie potrzebujesz.
5. Poczekaj, aż Obsidian Sync zakończy zadanie. Może to chwilę potrwać.
6. Otwórz **[[Ustawienia]] → Sync**.
7. Wybierz **Opróżnij** obok **Rozmiar sejfu przekracza limit**. Spowoduje to usunięcie skasowanych plików ze zdalnego sejfu w celu zwolnienia miejsca.

Po zsynchronizowaniu opróżnienia z serwerem Obsidian Sync powinien wznowić działanie.

### Tworzenie nowego zdalnego sejfu

Możesz **stworzyć nowy zdalny sejf**, aby wykluczyć duże pliki przed synchronizacją. Historia wersji dla Twoich plików zostanie zresetowana, jeśli utworzysz nowy zdalny sejf. Upewnij się, że nie potrzebujesz historii wersji dla starszych plików, zanim będziesz kontynuować.

Aby synchronizować z nowym zdalnym sejfem, wykonaj następujące kroki:

1. Otwórz **[[Ustawienia]] → Sync**.
2. Wybierz **Zarządzaj** obok **Zdalny sejf**.
3. Wybierz **Stwórz nowy sejf** i postępuj zgodnie z instrukcjami, aby go utworzyć. Jeśli zabraknie Ci sejfów, możesz najpierw [[Konfiguracja Obsidian Sync#Rozłączanie ze zdalnym sejfem|rozłączyć się]] z bieżącym zdalnym sejfem i [[Konfiguracja Obsidian Sync#Usuwanie zdalnego sejfu|usunąć]] go.
4. Skonfiguruj wykluczone pliki, zanim rozpoczniesz synchronizację z nowym zdalnym sejfem.
5. Uruchom ponownie Obsidian, aby zastosować zmiany.
6. Otwórz **[[Ustawienia]] → Sync**.
7. Wybierz Wznów, aby rozpocząć synchronizację z nowym zdalnym sejfem.

Nowy zdalny sejf powinien być mniejszy niż poprzedni, ze względu na brak historii wersji i wykluczonych plików.

## Ulepszanie planu

Możesz ulepszyć swój plan, logując się do [panelu swojego konta](https://obsidian.md/account/sync). Stamtąd będziesz mógł ulepszyć plan z Sync Standard do Sync Plus i zwiększyć przestrzeń do 100 GB.

## Obniżanie planu

Jeśli chcesz obniżyć swój plan Sync, ale Twoje wykorzystanie przestrzeni przekracza limit nowego planu, musisz zwolnić miejsce w zdalnym sejfie. Obecnie nie ma bezpośredniej metody szybkiego usunięcia konkretnych plików z istniejącego zdalnego sejfu. Wynika to z tego, że załączniki są przechowywane w historii wersji przez okres do dwóch tygodni, a historia wersji wlicza się do limitu przechowywania.

Najszybszym sposobem na zmniejszenie wykorzystania przestrzeni Sync jest utworzenie nowego zdalnego sejfu z wyłączonymi załącznikami, a następnie usunięcie starego zdalnego sejfu, który przekracza limity przechowywania. Pamiętaj, że w ten sposób utracisz historię wersji.

Jeśli obniżasz plan z Sync Plus do Sync Standard, musisz również zmniejszyć liczbę sejfów do jednego, zanim obniżenie planu będzie możliwe.

### Zachowywanie historii wersji

Załączniki są przechowywane w [[Historia wersji|historii wersji]] przez okres do dwóch tygodni. Jeśli planujesz obniżenie planu w najbliższej przyszłości, możesz zacząć od usunięcia załączników z lokalnego skarbca.

Po dwóch tygodniach zostaną one usunięte ze zdalnego sejfu i nie będą się już wliczać do limitu przechowywania. W tym momencie będziesz mógł obniżyć plan, zachowując jednocześnie historię wersji dla innych typów plików, takich jak pliki Markdown.
