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

Ponadto możesz [[Konfiguracja Obsidian Sync#Usuwanie zdalnego sejfu|usunąć stary zdalny sejf]] po potwierdzeniu przejścia na nowy zdalny sejf i jego region.
