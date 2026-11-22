---
permalink: import/apple-journal
cssclasses:
  - soft-embed
---
Obsidian umożliwia łatwe przeniesienie wpisów z dziennika Apple Journal za pomocą [[Importer|wtyczki Importer]]. Konwertuje ona wpisy do trwałych plików Markdown, których możesz używać z Obsidian i wieloma innymi aplikacjami.

## Eksportowanie danych z Apple Journal

### Na iPhone
Postępuj zgodnie z instrukcjami [Drukowanie i eksportowanie wpisów w Dzienniku na iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Przejdź do aplikacji Dziennik na swoim iPhone.
2. Wybierz dziennik lub stuknij Wszystkie wpisy.
3. Stuknij przycisk Więcej u góry ekranu.
4. Stuknij Eksportuj, a następnie wybierz Eksportuj.
5. Wybierz lokalizację, a następnie stuknij przycisk Wybrano.

### Na Macu (Tahoe)
Postępuj zgodnie z instrukcjami [Drukowanie i eksportowanie wpisów w Dzienniku na Macu](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Przejdź do aplikacji Dziennik na swoim Macu.
2. Przejdź do Plik > Eksportuj, a następnie wybierz Eksportuj.

## Importowanie danych Apple Journal do Obsidian

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz Importer w ustawieniach lub za pomocą [[Paleta poleceń|palety poleceń]].
5. W polu **Format pliku** wybierz **Apple Journal (HTML Export)**.
6. W polu **Pliki do importu** wybierz folder z wyeksportowanymi danymi, zazwyczaj _AppleJournalEntries_, lub poszczególne pliki z _Entries_.
7. Przejrzyj i edytuj pozostałe opcje importu.
8. Wybierz **Importuj**, aby przejrzeć wygenerowany szablon i podgląd przykładów z twoich wpisów.
9. Wybierz **Importuj** ponownie i poczekaj, aż import się zakończy.

## Szablony

Użyj [[Szablony importera|szablonów importera]], aby w pełni skonfigurować sposób importowania danych z Apple Journal.

![[Szablony importera#Zmienne]]

Gdy opcja **Add metadata as frontmatter** jest włączona, metadane Apple Journal są zamieniane na [[Atrybuty|atrybuty]]. W zależności od wpisu mogą to być `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media` i `workout-route`.

Aby odczytać te metadane, użyj zmiennej `properties`. Na przykład użyj `{{properties.location}}` dla lokalizacji lub `{{properties["state-of-mind"]}}` dla stanu umysłu.
