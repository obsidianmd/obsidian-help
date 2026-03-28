---
permalink: import/apple-journal
---
Obsidian umożliwia łatwe przeniesienie wpisów z dziennika Apple Journal za pomocą [[Importer|wtyczki Importer]].
Spowoduje to konwersję Twoich wpisów do trwałych plików Markdown, które możesz używać z Obsidian i wieloma innymi aplikacjami.

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
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W polu **Format pliku** wybierz **Apple Journal (HTML Export)**.
6. W polu **Pliki do importu** wybierz folder z wyeksportowanymi danymi, zazwyczaj _AppleJournalEntries_, lub poszczególne pliki z _Entries_.
7. Przejrzyj i edytuj pozostałe opcje importu.
8. Wybierz Importuj i poczekaj, aż import się zakończy.
9. Gotowe!


## Obsługiwana zawartość

Wtyczka może importować metadane Dziennika jako metadane początkowe, takie jak _stan umysłu_, _kontakty_, _lokalizacja_ i _trasa ćwiczeń_.

> [!note] Uwaga
> Wtyczka nie importuje zasobów. Załączniki takie jak zdjęcia, filmy i nagrania dźwiękowe są pomijane.
