---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Przenieś swój sejf Sync do innego regionu, wykonaj aktualizację szyfrowania.'
---
Domyślnie Obsidian Sync wykorzystuje [[Bezpieczeństwo i prywatność#Szyfrowanie|szyfrowanie end-to-end]] dla wszystkich Twoich danych. Gwarantuje to, że nikt — nawet zespół Obsidian — nie może uzyskać dostępu do Twoich notatek.

Obsidian okresowo ulepsza szyfrowanie Sync, aby utrzymać najwyższe standardy [[Bezpieczeństwo i prywatność|bezpieczeństwa]]. Jeśli dostępna jest aktualizacja szyfrowania, zobaczysz opcję zatytułowaną **Aktualizuj szyfrowanie sejfu** w **Ustawienia Obsidian → Sync**. Ten proces pozwala również na zmianę [[Regiony Sync|regionu Sync]].

## Wersje szyfrowania

Wszystkie nowe sejfy automatycznie korzystają z najnowszego szyfrowania. Istniejące sejfy można zaktualizować za pomocą asystenta migracji. Pamiętaj, że wszystkie urządzenia muszą korzystać z wersji aplikacji Obsidian obsługującej wersję szyfrowania Sync, do której migrujesz.

| Data wydania                                                            | Wersja Sync | Minimalna wersja aplikacji |
| ----------------------------------------------------------------------- | ----------- | -------------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3           | 1.8.3                      |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0           | 0.9.21                     |

## Aktualizacja szyfrowania za pomocą asystenta migracji

Zanim przejdziesz dalej, utwórz [[Tworzenie kopii zapasowej plików Obsidian|kopię zapasową]] swojego sejfu, aby zapobiec potencjalnej utracie danych. Ten proces trwale usunie wszystkie dane w Twoim zdalnym sejfie ze starym szyfrowaniem, w tym historię wersji.

> [!danger] Migracje są destrukcyjne
> 
> **Zawsze [[Tworzenie kopii zapasowej plików Obsidian|wykonaj kopię zapasową]] swojego sejfu przed przystąpieniem do migracji.**
> 
> Podczas migracji zdalnego sejfu Twoje dane zostaną zastąpione. Oznacza to, że:
> 
> 1. Zdalne dane zostaną usunięte z serwerów Obsidian, a dane sejfu zostaną ponownie przesłane na ich miejsce.
> 2. Cała [[Historia wersji|historia wersji]] sejfu zostanie utracona.

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym wybierz **Sync**.
3. Kliknij **Aktualizuj sejf**. Ta opcja będzie widoczna tylko wtedy, gdy dostępna jest aktualizacja dla Twojego zdalnego sejfu.
4. Sprawdź ponownie kopie zapasowe i kliknij **Kontynuuj**.
5. W polu **Nazwa sejfu** wprowadź nazwę zdalnego sejfu.
6. W polu **Region** wybierz [[Konfiguracja Obsidian Sync#Regionalne serwery synchronizacji|region]] serwera dla Twojego zdalnego sejfu.
7. W polu **Hasło szyfrowania** wybierz hasło dla swojego sejfu. Spowoduje to utworzenie sejfu z szyfrowaniem end-to-end. Hasło sejfu jest oddzielne od Twojego konta Obsidian i może być inne dla każdego z Twoich sejfów. Więcej informacji znajdziesz w [[Bezpieczeństwo i prywatność]].
8. Po ponownym przesłaniu danych z nowym szyfrowaniem połącz się ponownie z nowym sejfem Sync na pozostałych urządzeniach.
