---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Obsidian umożliwia migrację danych z Airtable za pomocą [[Importuj notatki|wtyczki Importer]]. Konwertuje ona bazy danych Airtable na trwałe pliki Markdown, których można używać offline w Obsidian i wielu innych aplikacjach.

Każda tabela staje się folderem notatek z jedną notatką na rekord, plus plik [[Wprowadzenie do baz danych|bazy danych]], który odtwarza tabelę i jej podglądy. Ponieważ korzysta z API Airtable, importowanie wymaga osobistego tokenu dostępu i połączenia z internetem.

## Tworzenie osobistego tokenu dostępu Airtable

Aby uzyskać dostęp do danych Airtable przez API, potrzebujesz osobistego tokenu dostępu. Ten krok zajmuje około dwóch minut.

Token to długi ciąg liczb i liter, zwykle zaczynający się od `pat...`, który umożliwi pobranie danych z Airtable.

1. Zaloguj się do Airtable i przejdź do strony [Personal access tokens](https://airtable.com/create/tokens) w ustawieniach konta.
2. Wybierz **Create new token**.
3. Nadaj tokenowi nazwę, np. „Obsidian". Można użyć dowolnej nazwy.
4. W sekcji **Scopes** dodaj `data.records:read` i `schema.bases:read`.
5. W sekcji **Access** dodaj bazy, które chcesz zaimportować, lub wybierz wszystkie bazy w przestrzeni roboczej.
6. Wybierz **Create token**, a następnie **Copy**, aby skopiować token.
7. Zapisz token w bezpiecznym miejscu, np. w menedżerze haseł.

Airtable wyświetla token tylko raz. Jeśli go utracisz, utwórz nowy.

## Importowanie danych z Airtable

Potrzebujesz oficjalnej wtyczki Obsidian [[Importuj notatki|Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W polu **File format** wybierz **Airtable**.
6. W polu **Airtable Personal Access Token** kliknij **Połącz...**, aby dodać nowy sekret. W polu **ID** nadaj mu nazwę, np. `airtable`, a w polu **Sekret** wklej osobisty token dostępu.
7. Kliknij **Wczytaj**, aby przeglądać bazy, a następnie wybierz tabele do zaimportowania.
8. Przejrzyj i edytuj opcje importu.
9. Wybierz **Import**, aby skonfigurować sposób konwersji pól na notatki z [[Atrybuty|atrybutami]].
10. Wybierz **Kontynuuj**, aby przejrzeć wygenerowany szablon i podejrzeć przykłady z rekordów.
11. Wybierz **Import** i poczekaj na zakończenie importu.

## Opcje importu

- **Convert formulas** — wybierz, czy pola formuł, lookup, rollup i count mają być przepisywane jako [[Wzory|wzory baz danych]], z wykorzystaniem wartości obliczonej przez Airtable w przypadku braku odpowiednika, czy importowane wyłącznie jako wartości statyczne.
- **Pobierz załączniki** — zapisuje pliki załączników w sejfie, używając ustawień folderu załączników i formatu łączy. Gdy opcja jest wyłączona lub gdy pobieranie się nie powiedzie, notatka zawiera link do adresu URL pliku na Airtable.
- **View property name** — atrybut określający, do których podglądów Airtable należy rekord. Każdy podgląd w wygenerowanej bazie filtruje na podstawie tego atrybutu. Domyślnie `Views`.
- **Save Airtable record ID** — dodaje atrybut `airtable-id`, aby przyszłe importy mogły rozpoznać rekordy po przeniesieniu lub zmianie nazwy ich notatek.

## Konfiguracja sposobu importowania pól Airtable

W kroku konfiguracji pól możesz wybrać, jak każde pole zostanie zaimportowane.

Domyślnie każde pole Airtable staje się atrybutem. Możesz zmieniać nazwy lub usuwać atrybuty oraz modyfikować ich wartości przed przejściem do podglądu szablonu.

Pole podstawowe każdej tabeli dostarcza domyślną nazwę notatki. Możesz edytować szablon nazwy notatki w kroku podglądu. Rekordy są zawsze umieszczane w folderze nazwanym tak jak tabela.

Zobacz [[Szablony importera]], aby dostosować generowany Markdown.

## Co jest importowane

Dla bazy o nazwie `Projects` z tabelą `Tasks` importer tworzy:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Jedna notatka na rekord, z polem podstawowym jako tytułem notatki i pozostałymi polami rekordu jako [[Atrybuty|atrybutami]].
- Plik `.base` dla każdej tabeli, z każdym podglądem Airtable zmapowanym na [[Podglądy|podgląd bazy danych]]:
	- **Grid** staje się [[Podgląd Tabela|podglądem tabeli]].
	- **Gallery** staje się [[Podgląd Karty|podglądem kart]].
	- **List** staje się [[Podgląd Lista|podglądem listy]].
	- **Kanban** staje się [[Podgląd Kanban|podglądem kanban]] w Obsidian 1.14 i nowszych. Airtable nie udostępnia informacji o tym, według którego pola kanban jest grupowany, więc po zaimportowaniu należy [[Podgląd Kanban#Grupowanie kart w kolumny|wybrać atrybut do grupowania]]. Ponowny import zachowuje twój wybór.
- Typy pól Airtable są mapowane na typy atrybutów Obsidian, bez nadpisywania typów, które już zostały ustawione.
- Połączone rekordy stają się linkami do odpowiednich notatek.
- Załączniki są pobierane do sejfu zgodnie z ustawieniami sejfu.

## Ograniczenia

Ze względu na limity szybkości API Airtable importowanie dużych baz może zająć sporo czasu. Prosimy o cierpliwość.

Ze względu na ograniczenia API Airtable niektóre dane nie są dostępne lub nie mogą zostać skonwertowane:

- Wartości rollup nie są importowane. API nie udostępnia informacji o agregacji użytej do obliczenia wartości rollup, więc zapisywana jest tylko nazwa atrybutu wraz z wzorem bazy danych, gdy schemat pola zawiera wyrażenie.
- Formuły używające funkcji, dla których Obsidian nie ma odpowiednika, takich jak `SWITCH`, `FIND`, `REGEX_EXTRACT` i `SQRT`, są zastępowane wartością statyczną z Airtable.
- Importowane są tylko podglądy grid, gallery, list i kanban. Inne typy podglądów, takie jak calendar, timeline i Gantt, są pomijane.
- Linki do rekordów w tabelach, których nie wybrano, stają się zwykłym tytułem rekordu zamiast linku.
- Projekty interfejsów, automatyzacje, komentarze i historia zmian nie są importowane.

## Rozwiązywanie problemów

Jeśli napotkasz problemy z konwersją, [zgłoś błąd](https://github.com/obsidianmd/obsidian-importer/issues), abyśmy mogli go ulepszyć.
