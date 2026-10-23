---
permalink: community-directory
description: Co pokazuje publiczna strona wtyczki lub motywu w katalogu społeczności Obsidian.
---
Każda wtyczka i motyw posiada publiczną stronę katalogową w [katalogu społeczności Obsidian](https://community.obsidian.md). Wybierz wtyczkę z [[Wtyczki społeczności#Przeglądanie wtyczek społeczności|Przeglądaj]] lub motyw z [[Motywy#Przeglądanie motywów|Przeglądaj]] w Obsidian, albo przejrzyj bezpośrednio [community.obsidian.md](https://community.obsidian.md), aby otworzyć jej stronę katalogową.

Ta strona pomoże Ci zrozumieć, co robi każda sekcja, z perspektywy użytkownika Obsidian.

> [!tip]- Jesteś deweloperem wtyczek lub motywów?
> Dowiedz się, jak przesyłać i zarządzać własnymi wtyczkami i motywami w [dokumentacji katalogu społeczności](https://docs.obsidian.md/community-directory).

## Nagłówek

Nagłówek pokazuje ikonę i nazwę wpisu, z plakietką **Official** (oficjalny), jeśli został stworzony przez oryginalnych twórców wtyczki lub motywu, a także ikonę i nazwę autora oraz łączną liczbę pobrań wpisu.

Wybierz **Add to Obsidian** (Dodaj do Obsidian), aby otworzyć wpis bezpośrednio w Obsidian i zainstalować go.

## Przegląd

Karta **Overview** (Przegląd) pokazuje zrzuty ekranu wpisu, jego pełny opis, fragment pliku README oraz siatkę powiązanych wtyczek lub motywów z tej samej kategorii.

## Karta oceny

Karta **Scorecard** (Karta oceny) pokazuje zautomatyzowane metryki kondycji i przeglądu wpisu.

Ogólna ocena kondycji, taka jak Excellent (Doskonała), jest rozbita na: higienę (czy obecne są README, licencja, przewodnik kontrybutora i opis), utrzymanie (ostatnia aktywność commitów i wydań), responsywność (ile zgłoszeń zostało zamkniętych i ilu kontrybutorów było ostatnio aktywnych) oraz adopcję (liczba instalacji i gwiazdek).

Sekcja przeglądu pokazuje wynik ostatniego zautomatyzowanego skanowania, taki jak Passed (Zaliczony), pogrupowany na: zaliczone kontrole (na przykład brak znanych podatnych zależności, brak zaciemnionego kodu, zweryfikowane atestacje artefaktów GitHub oraz jakich API Obsidian używa wpis, takich jak Vault Read lub Vault Write), ujawnienia (rzeczy, które wpis robi i które nie muszą być problemami, ale o których warto wiedzieć, takie jak dostęp do schowka lub wykonywanie żądań do zewnętrznych domen) oraz inne uwagi (takie jak używanie pamięci przeglądarki zamiast API danych wtyczek Obsidian).

> [!info]+ Interpretacja niższej oceny
> Wtyczka lub motyw z niższą oceną kondycji lub przeglądu niekoniecznie jest niebezpieczny, ale warto bliżej przyjrzeć się jej ujawnieniom przed instalacją. Pomyśl o tym jak o sygnalizacji świetlnej:
> - 🟢 Mało lub brak ujawnień oznacza niskie ryzyko
> - 🟡 Kilka ujawnień — warto sprawdzić takie kwestie jak dostęp do schowka lub sieci
> - 🔴 Wiele ujawnień lub ostrzeżeń oznacza, że powinieneś dokładnie przeanalizować, co wpis robi, zanim go zainstalujesz.

## Aktualizacje

Karta **Updates** (Aktualizacje) wyświetla historię wydań wpisu, z wersją i datą każdego wydania. Wybierz **View all releases on GitHub** (Zobacz wszystkie wydania na GitHub), aby zobaczyć pełną historię w repozytorium wpisu.

## Panel boczny

Obok kart, panel boczny pokazuje podsumowania kondycji i przeglądu odpowiadające karcie Scorecard, pełny opis wpisu oraz szczegóły takie jak: aktualna wersja, data ostatniej aktualizacji i utworzenia, liczba aktualizacji i pobrań, kompatybilna wersja Obsidian, obsługiwane platformy i licencja. Jeśli wpis nie jest darmowy, sekcja Payments (Płatności) wyjaśnia, jak działa jego model cenowy, na przykład płatne poziomy lub limity użytkowania. Jeśli autor dodał linki do wsparcia finansowego, pojawia się tu również link Support (Wsparcie), a także ikona autora lub organizacji, nazwa oraz linki do ich innych profili.

## Najczęściej zadawane pytania

**Jaka jest różnica między Free, Optional payment i Paid na stronie katalogowej?**
Free (Darmowy) oznacza, że nie ma żadnych płatności. Optional payment (Opcjonalna płatność) oznacza, że wpis korzysta z płatnej usługi zewnętrznej lub blokuje niektóre funkcje za płatnością, pozostając jednocześnie możliwy do użytkowania za darmo. Paid (Płatny) oznacza, że wpis jest dostępny wyłącznie po dokonaniu płatności.

Sprawdź sekcję Payments (Płatności) w panelu bocznym danego wpisu, aby poznać szczegóły dotyczące modelu cenowego.

**Dlaczego nie mogę znaleźć lub zainstalować wtyczki lub motywu, o których słyszałem w innych miejscach?**
Autor mógł je zarchiwizować. Archiwizacja usuwa wpis z katalogu społeczności i uniemożliwia nowe instalacje.

**Jaka jest różnica między ocenami Health i Review na stronie katalogowej?**
Health (Kondycja) odzwierciedla bieżącą higienę i utrzymanie wpisu, takie jak ostatnie commity i responsywność wobec zgłoszeń. Review (Przegląd) odzwierciedla wynik ostatniego zautomatyzowanego skanowania wydania.
