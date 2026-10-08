---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Przenieś swój sejf Sync do innego regionu.
---
Kiedy tworzysz [[Sejfy lokalne i zdalne|zdalny sejf]] za pomocą [[Wprowadzenie do Obsidian Sync|Obsidian Sync]], Twoje dane są szyfrowane i przechowywane na jednym z regionalnych serwerów Sync firmy Obsidian. Ten przewodnik wyjaśnia, jak przenieść sejf Sync do innego serwera regionalnego.

## Dostępne regiony

Następujące regiony są dostępne w Obsidian Sync. Zalecamy korzystanie z opcji **Automatycznie** lub wybranie lokalizacji bliskiej Tobie, aby zmniejszyć opóźnienia i przyspieszyć proces synchronizacji.

![[Obsidian Sync/Bezpieczeństwo i prywatność#^sync-geo-regions]]

## Zapisz swoje ustawienia

Kiedy podłączasz urządzenie do nowego zdalnego sejfu, Sync może użyć ustawień, które masz włączone w danym momencie. Jeśli używasz różnych ustawień na różnych urządzeniach, zapisz je przed rozpoczęciem. Na przykład możesz nie synchronizować dużych plików multimedialnych z telefonem.

Na każdym urządzeniu korzystającym ze zdalnego sejfu otwórz **[[Ustawienia]] → Sync** i zapisz te ustawienia. Zrzut ekranu dobrze się do tego nadaje.

- **Synchronizacja selektywna**
- **Synchronizacja ustawień sejfu**
- **Pominięte foldery**
- Ustawienia specyficzne dla urządzenia, takie jak **Nazwa urządzenia** i **Rozwiązywanie konfliktów**

Zapoznaj się z [[Ustawienia synchronizacji i synchronizacja selektywna]], aby dowiedzieć się, co robi każde ustawienie i które z nich są domyślnie włączone.

## Zmiana regionu Sync

Aby zmienić region zdalnego sejfu, musisz odtworzyć sejf na innym serwerze Sync. Możesz również zmienić region, korzystając z asystenta migracji [[Ulepszanie szyfrowania Sync]], jeśli Twój zdalny sejf korzysta ze starszej wersji.

> [!danger] Migracje są destrukcyjne
> 
> **Zawsze wykonaj [[Tworzenie kopii zapasowej plików Obsidian|kopię zapasową]] sejfu przed przystąpieniem do migracji.**
> 
> Podczas migracji zdalnego sejfu Twoje dane zostaną zastąpione. Oznacza to, że:
> 
> 1. Zdalne dane zostaną usunięte z serwerów Obsidian, a dane sejfu zostaną ponownie przesłane na ich miejsce.
> 2. Cała [[Historia wersji|historia wersji]] sejfu zostanie utracona.

![[Konfiguracja Obsidian Sync#Rozłączanie ze zdalnym sejfem]]

Jeśli korzystasz z [[Plany i limity przechowywania|planu Standard]], będziesz musiał również [[Konfiguracja Obsidian Sync#Usuwanie zdalnego sejfu|usunąć zdalny sejf]] przed kontynuacją.

![[Konfiguracja Obsidian Sync#Tworzenie nowego zdalnego sejfu]]

## Ponowne podłączenie pozostałych urządzeń

Po zakończeniu synchronizacji nowego zdalnego sejfu na pierwszym urządzeniu przejdź do każdego innego urządzenia, które korzystało ze starego zdalnego sejfu. Pracuj nad jednym urządzeniem na raz.

1. Na urządzeniu [[Konfiguracja Obsidian Sync#Rozłączanie ze zdalnym sejfem|rozłącz się ze starym zdalnym sejfem]].
2. [[Konfiguracja Obsidian Sync#Synchronizacja zdalnego sejfu na innym urządzeniu|Połącz się z nowym zdalnym sejfem]]. Nie wybieraj jeszcze opcji **Rozpocznij synchronizację**.
3. Ustaw **Synchronizację selektywną**, **Synchronizację ustawień sejfu** i **Pominięte foldery** zgodnie z ustawieniami, które zapisałeś dla tego urządzenia.
4. Uruchom ponownie Obsidian. Na urządzeniu mobilnym lub tablecie może być konieczne wymuszenie zamknięcia aplikacji.
5. Wybierz **Rozpocznij synchronizację** lub **Wznów** i poczekaj, aż synchronizacja się zakończy, zanim przejdziesz do następnego urządzenia.

Ponadto możesz [[Konfiguracja Obsidian Sync#Usuwanie zdalnego sejfu|usunąć stary zdalny sejf]] po potwierdzeniu przejścia na nowy zdalny sejf i jego region.
