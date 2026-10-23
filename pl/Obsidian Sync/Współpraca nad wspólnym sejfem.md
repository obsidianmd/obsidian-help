---
permalink: sync/collaborate
publish: true
mobile: true
description: 'Ta strona opisuje, jak współpracować z innymi użytkownikami Obsidian Sync.'
---
Dzięki [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] możesz współpracować ze swoim zespołem nad wspólnym sejfem.

Wszyscy współpracownicy muszą posiadać aktywną subskrypcję Sync, aby uzyskać dostęp do wspólnego sejfu. Dołączenie do wspólnego sejfu nie wlicza się do [[Najczęściej zadawane pytania#Ile zdalnych sejfów mogę mieć?|limitu sejfów]].

Jeśli zdalny sejf jest [[Bezpieczeństwo i prywatność|szyfrowany end-to-end]], współpracownicy muszą wprowadzić hasło szyfrowania podczas konfiguracji sejfu.

## Zarządzanie użytkownikami

### Dodawanie użytkowników

Aby zaprosić użytkownika do wspólnego zdalnego sejfu:

1. Otwórz **[[Ustawienia]]**.
2. W menu bocznym wybierz **Sync**.
3. Obok **Zdalny sejf** wybierz **Zarządzaj**.
4. Obok zdalnego sejfu, który chcesz udostępnić, wybierz **Zarządzaj udostępnianiem** ![[lucide-users.svg#icon]].
5. W polu **Zaproś użytkownika** wprowadź e-mail użytkownika, którego chcesz zaprosić.
6. Wybierz **Dodaj**.

### Usuwanie użytkowników

1. Otwórz **[[Ustawienia]]**.
2. W menu bocznym wybierz **Sync**.
3. Obok **Zdalny sejf** wybierz **Zarządzaj**.
4. Obok użytkownika, któremu chcesz odebrać dostęp, wybierz **Usuń użytkownika** ![[lucide-x.svg#icon]].

## Współpraca z zespołem

### Uprawnienia

Szczegółowe uprawnienia nie są jeszcze obsługiwane. Wszyscy współpracownicy otrzymują takie same uprawnienia jak właściciel sejfu, z jednym wyjątkiem: tylko właściciel sejfu może zapraszać współpracowników.

### Edycja na żywo

Wspólne sejfy umożliwiają zespołom pracę nad zestawem plików, jednak Obsidian nie obsługuje jeszcze wspólnej edycji na żywo tego samego pliku. Nie zobaczysz kursora drugiego użytkownika, a jego zmiany pojawią się dopiero po zsynchronizowaniu.

Jeśli wielu użytkowników edytuje ten sam plik w tym samym czasie, [[Rozwiązywanie problemów z Obsidian Sync#Rozwiązywanie konfliktów|zmiany zostaną scalone]] podczas procesu synchronizacji. Zmiany można przeglądać i przywracać za pomocą [[Historia wersji|Historii wersji]].

![[version-history-collaboration.png]]^version-history-image

## Ograniczenia

Pamiętaj, że Obsidian Sync ma [[Najczęściej zadawane pytania|ograniczenia]], które mogą wpływać na Twój zespół:

- Maksymalna liczba współpracowników we wspólnym sejfie wynosi 20 użytkowników.
- Maksymalny rozmiar pliku dla załączników zależy od [[Plany i limity przechowywania|planu]] hosta Twojego zdalnego sejfu — 5 MB dla Planu Standard i 200 MB dla Planu Plus.

Dowiedz się więcej o [[Sync dla zespołów|Sync dla zespołów]].
