---
permalink: publish/troubleshoot
publish: true
mobile: true
description: 'Ta strona opisuje niektóre typowe problemy, na które możesz natrafić podczas korzystania z Obsidian Publish.'
---
Ta strona zawiera listę typowych problemów, które możesz napotkać korzystając z [[Wprowadzenie do Obsidian Publish|Obsidian Publish]], oraz sposoby ich rozwiązywania.

Upewnij się, że najpierw zapoznałeś się z [[Pliki multimedialne]] i [[Ograniczenia Publish|Ograniczenia Publish]].

## Ogólne

### Publikowanie notatek

**Podczas próby publikacji notatki pojawia się błąd hash.**

Czy używasz [[Wtyczki społeczności|wtyczki społeczności]], która edytuje czas modyfikacji pliku podczas aktualizacji? Jeśli tak, ta wtyczka może powodować konflikt z Publish. Prosimy o zgłoszenie błędu do dewelopera wtyczki w celu rozwiązania problemu.

**Otrzymuję dziwny błąd sieciowy i mam bardzo dużą stronę Publish.**

Prawdopodobnie musimy zbadać Twoją bazę danych. Prosimy [[Pomoc i wsparcie#Kontakt ze wsparciem Obsidian|skontaktuj się z pomocą Obsidian]] w celu uzyskania pomocy.

## CSS i motywy

**Mój CSS w moim [[Folder konfiguracji|folderze konfiguracji]] nie działa w Publish. Dlaczego?**

Publish nie odczytuje danych z folderu konfiguracji. Zamiast tego musisz utworzyć plik `publish.css` w katalogu głównym swojego skarbca publikacyjnego. Więcej na ten temat dowiesz się w [[Dostosuj swoją stronę]].

**Mój CSS wygląda inaczej w Publish niż w aplikacji. Dlaczego?**

CSS Obsidian Publish nie jest dokładnie taki sam jak w aplikacji. Zalecamy [tworzenie CSS i motywów](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) specjalnie dla Publish od podstaw.

_Ogólnie_ rzecz biorąc, to co działa w [[Podglądy i tryb edycji#Widok czytania|widoku czytania]] ma duże prawdopodobieństwo działania w Publish.
