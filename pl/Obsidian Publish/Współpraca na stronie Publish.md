---
permalink: publish/collaborate
publish: true
mobile: true
description: 'Dowiedz się, jak współpracować z innymi użytkownikami Obsidian na swojej stronie Obsidian Publish.'
---
Dowiedz się, jak współpracować na swojej stronie [[Wprowadzenie do Obsidian Publish|Obsidian Publish]] z innymi użytkownikami Obsidian. Dodając znajomych i współpracowników jako współautorów, mogą oni publikować zmiany na Twojej stronie.

Tylko właściciel strony potrzebuje aktywnej subskrypcji Obsidian Publish. Współpracownicy potrzebują jedynie [konta Obsidian](https://obsidian.md/account).

> [!warning] Przed opublikowaniem zmian na współdzielonej stronie upewnij się, że [[#Synchronizacja zmian między współpracownikami|zsynchronizujesz zmiany między współpracownikami]]. W przeciwnym razie ryzykujesz nadpisanie zmian innych współpracowników.

## Dodawanie współpracownika do strony

1. Na [[Menu wstążkowe|wstążce]] wybierz **Opublikuj zmiany** ![[lucide-send.svg#icon]] lub otwórz [[Lista poleceń|paletę poleceń]] i wpisz **Publish: Publish changes...**
2. W oknie dialogowym **Opublikuj zmiany** kliknij **Zmień ustawienia strony** ![[lucide-cog.svg#icon]].
3. Obok **Współpraca na stronie** wybierz **Zarządzaj**.
4. W polu **Zaproś użytkownika** wpisz adres e-mail współpracownika.
5. Wybierz **Dodaj**.

## Usuwanie współpracownika ze strony

1. Na [[Menu wstążkowe|wstążce]] wybierz **Opublikuj zmiany** ![[lucide-send.svg#icon]] lub otwórz [[Lista poleceń|paletę poleceń]] i wpisz **Publish: Publish changes...**
2. W oknie dialogowym **Opublikuj zmiany** kliknij **Zmień ustawienia strony** ![[lucide-cog.svg#icon]].
3. Obok **Współpraca na stronie** wybierz **Zarządzaj**.
4. Obok współpracownika, którego chcesz usunąć, wybierz **Usuń użytkownika** ![[lucide-x.svg#icon]].

## Synchronizacja zmian między współpracownikami

Obsidian Publish nie synchronizuje opublikowanych zmian między lokalnymi skarbcami automatycznie. Zamiast tego współpracownicy muszą ręcznie synchronizować zmiany od innych współpracowników.

Aby zaktualizować lokalną notatkę zmianami ze strony na żywo:

1. Na [[Menu wstążkowe|wstążce]] wybierz **Opublikuj zmiany** ![[lucide-send.svg#icon]] lub otwórz [[Lista poleceń|paletę poleceń]] i wpisz **Publish: Publish changes...**
2. Kliknij prawym przyciskiem myszy lub przytrzymaj zmianę, którą chcesz zsynchronizować, a następnie wybierz **Używaj wersji publicznej**. **Spowoduje to nadpisanie notatki w Twoim lokalnym skarbcu.**

> [!tip] Zalecamy korzystanie z innego narzędzia do synchronizacji zmian między skarbcami, takiego jak [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] lub [git](https://git-scm.com/).

## Uprawnienia

Poniższa tabela przedstawia dostępne uprawnienia do strony dla właścicieli i współpracowników:

| Akcja                                        | Współpracownik | Właściciel |
|----------------------------------------------|:--------------:|:----------:|
| Publikowanie nowych stron                    | ✓              | ✓          |
| Publikowanie zmian na opublikowanych stronach | ✓              | ✓          |
| Cofanie publikacji stron                     | ✓              | ✓          |
| Konfigurowanie opcji strony                  |                | ✓          |
| Zarządzanie uprawnieniami                    |                | ✓          |
