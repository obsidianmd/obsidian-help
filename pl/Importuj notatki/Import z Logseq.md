---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian umożliwia migrację notatek z grafów Logseq opartych na plikach (obecnie nazywanych "Logseq OG") za pomocą oficjalnej [[Szablony importera|wtyczki Importer]]. Importer odczytuje pliki Markdown Logseq bezpośrednio i konwertuje formatowanie specyficzne dla Logseq na trwałe pliki, które możesz używać offline z Obsidian i innymi aplikacjami.

## Zanim zaczniesz

- Utwórz kopię zapasową swojego grafu Logseq i skarbca Obsidian.
- Znajdź folder główny swojego grafu Logseq. Zwykle zawiera on foldery o nazwach `pages`, `journals`, `assets` i `logseq`.
- Upewnij się, że używasz grafu Logseq opartego na plikach. Grafy bazodanowe Logseq nie są jeszcze obsługiwane.

## Importuj swój graf Logseq

Potrzebujesz oficjalnej wtyczki Obsidian [[Szablony importera|Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]] → Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
2. Włącz wtyczkę Importer.
3. Otwórz **Importer** za pomocą [[Lista poleceń|Palety poleceń]] lub ikony na wstążce.
4. W polu **Format pliku** wybierz **Logseq**.
5. W polu **Wybierz folder** wskaż folder główny swojego grafu. Wybierz folder zawierający `pages` i `journals`, a nie którykolwiek z tych folderów osobno.
6. Przejrzyj wykryte foldery i wyklucz te, których nie chcesz importować.
7. Wybierz folder docelowy oraz miejsce przechowywania zaimportowanych załączników.
8. Przejrzyj opcje importu i podgląd przykładów skonwertowanych notatek.
9. Wybierz **Importuj** i poczekaj na zakończenie importu.

## Ograniczenia

- Tablice (whiteboards) nie są importowane.
- Zapytania (queries) są zachowywane jako bloki kodu, jeśli zdecydujesz się je zachować.
- Dynamiczne makra szablonów Logseq pozostają jako zwykły tekst.
- Harmonogramy fiszek Logseq, adnotacje PDF i inne dane specyficzne dla aplikacji nie są migrowane.

## Ustawienia

Importer konwertuje typowe konwencje Logseq, w tym:

- Właściwości stron na [[Atrybuty]] Obsidian.
- Aliasy stron, tagi, przestrzenie nazw i linki.
- Stany przepływu pracy na znaczniki list z polami wyboru, z zachowaniem priorytetów i dat jako czytelnego tekstu.
- Identyfikatory bloków, odwołania do bloków i osadzenia bloków na linki i osadzenia Obsidian.
- Nazwy plików dziennika i linki dat.
- Wyróżnienia, listy numerowane, bloki Org, osadzenia multimediów i pliki powiązane z folderu `assets` grafu.

### Dzienniki

Domyślnie opcja **Użyj ustawień codziennych notatek** jest włączona. Importowane dzienniki używają folderu i formatu daty skonfigurowanych przez wtyczkę podstawową [[Dziennik|Dziennik]]. Może to spowodować umieszczenie dzienników poza folderem docelowym wybranym w Importerze.

Jeśli wyłączysz tę opcję, dzienniki są zapisywane w folderze `Journals` wewnątrz wybranego folderu docelowego i używają formatu nazwy notatki `YYYY-MM-DD`.

### Spłaszczanie konspektów

Logseq używa zagnieżdżonych punktów wypunktowania jako struktury strony. Domyślnie Importer zachowuje tę strukturę konspektu. Włącz opcję **Spłaszcz konspekty**, aby przekonwertować bloki konspektu na kombinację akapitów, nagłówków i zwykłych list. Zadania i grupy elementów przypominających listy pozostają elementami list, ale konwersja jest heurystyczna. Przejrzyj kilka przykładów w podglądzie przed zaimportowaniem dużego grafu.

### Zachowywanie niekompatybilnych danych

Zapytania Logseq, fiszki i wpisy śledzenia czasu nie mają bezpośrednich odpowiedników w Obsidian. Opcje importu pozwalają wybrać, czy zachować każdy rodzaj treści. Zachowane treści pozostają jako zwykły tekst.

- **Zachowaj zapytania** — zachowuje zapytania jako ogrodzone bloki kodu lub kod wbudowany.
- **Zachowaj fiszki** — zachowuje znaczniki `#card` i wrappery cloze jako zwykły tekst.
- **Zachowaj śledzenie czasu** — zachowuje wpisy `LOGBOOK` i `CLOCK` jako zwykły tekst.

## Szablony

Użyj [[Szablony importera|Szablonów importera]], aby w pełni skonfigurować sposób importowania danych z Logseq.

![[Szablony importera#Zmienne]]

## Rozwiązywanie problemów

Jeśli Importer nie znajdzie żadnych notatek, upewnij się, że wybrałeś folder główny grafu i że skonfigurowane foldery stron lub dzienników zawierają pliki Markdown.

Jeśli załącznik jest zgłaszany jako brakujący, potwierdź, że wskazywany plik nadal istnieje w folderze `assets` grafu.

W przypadku innych problemów przeszukaj [tracker zgłoszeń Importera](https://github.com/obsidianmd/obsidian-importer/issues) lub prześlij zgłoszenie błędu z małym przykładowym grafem.
