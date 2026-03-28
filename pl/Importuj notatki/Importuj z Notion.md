---
permalink: import/notion
---
Obsidian umożliwia łatwe przeniesienie notatek z Notion za pomocą [[Importer|wtyczki Importer]]. Konwertuje ona dane z Notion na trwałe pliki Markdown, których możesz używać offline w Obsidian i wielu innych aplikacjach.

Obsidian oferuje dwa sposoby importowania danych z Notion:

1. **Import przez API** zachowuje cały obszar roboczy, w tym bazy danych i formuły, które są konwertowane na [[Wprowadzenie do Baz danych|Bazy danych]], ale wymaga tokenu integracji Notion i połączenia z internetem.
2. **Import plików** nie zachowuje baz danych, ale nie wymaga tokenu API ani połączenia z internetem.

## Import przez API

### Tworzenie tokenu integracji Notion API

Aby uzyskać dostęp do danych Notion przez API, potrzebujesz tokenu integracji. Ten krok zajmuje około 2 minut.

Token to długi ciąg liczb i liter, zwykle zaczynający się od `ntn_...`, który umożliwia pobranie danych z Notion.

1. Zaloguj się do panelu [Notion Integrations](https://www.notion.so/profile/integrations/internal).
2. Wybierz **New integration**.

![[notion-integration.png#interface]]

2. Nadaj integracji nazwę, np. „Personal". Można użyć dowolnej nazwy.
3. Wybierz obszar roboczy, który chcesz wyeksportować.
4. Kliknij **Save** i przejdź do **Configure integration settings**.
5. Na karcie **Configuration** token API jest dostępny w polu **Internal Integration Secret**.
6. Wybierz **Show**, a następnie **Copy**.
7. Zapisz token w bezpiecznym miejscu, na przykład w menedżerze haseł.

![[notion-token.png#interface]]

Następnie przyznaj integracji dostęp do stron i baz danych Notion, które chcesz zaimportować.

1. Przejdź do karty **Access** właśnie utworzonej integracji.
2. Kliknij **Edit access**.
3. Dodaj strony i bazy danych, które chcesz zaimportować.

Teraz możesz przekonwertować dane za pomocą Obsidian Importer.

### Importowanie danych z Notion przez API

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W polu **Format** wybierz **Notion (API)**
6. W polu **API token** wklej swój **Internal Integration Secret** z Notion.
7. Kliknij **Wczytaj**, aby wybrać bazy danych i strony do zaimportowania.
8. Przejrzyj i dostosuj opcje importu.
9. Wybierz **Importuj** i poczekaj na zakończenie importu
10. Gotowe!

### Ograniczenia

> [!info] Import przez API jest nowy
> Importer Notion API jest nowy. Ze względu na złożoność obszarów roboczych Notion niektóre przypadki brzegowe mogły nie zostać uwzględnione. Jeśli napotkasz problemy z konwersją, [zgłoś błąd](https://github.com/obsidianmd/obsidian-importer/issues), abyśmy mogli go ulepszyć.

Ze względu na limity szybkości API Notion importowanie dużych obszarów roboczych może zająć sporo czasu. Prosimy o cierpliwość.

Ze względu na ograniczenia API Notion niektóre dane nie są dostępne lub nie mogą zostać przekonwertowane:

- Importowany jest tylko główny widok każdej bazy danych.
- [Połączone źródła danych](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) nie są importowane: *„API Notion nie obsługuje obecnie połączonych źródeł danych. Udostępniając bazę danych swojej integracji, upewnij się, że zawiera oryginalne źródło danych!"*
- Funkcje `People`: `name()` i `email()`
- Funkcje `Text`: `style()` i `unstyle()`

Dodatkowo Importer wprowadzi następujące zmiany:

- Strony bez podstron ani baz danych zostaną zaimportowane jako `[nazwa_pliku].md` zamiast `[nazwa_pliku]/[nazwa_pliku].md`.
- Bazy danych są zawsze reprezentowane jako foldery o nazwie `[nazwa bazy danych]` z plikiem `[nazwa bazy danych].base` wewnątrz.

## Import plików

Import plików to alternatywny sposób importowania danych z Notion. Ta metoda nie zachowuje baz danych, ale nie wymaga tokenu API ani połączenia z internetem.

### Eksportowanie danych z Notion

Aby przygotować dane do importu, musisz wyeksportować cały obszar roboczy za pomocą formatu eksportu HTML w Notion. Zalecamy nieużywanie eksportu Markdown z Notion, ponieważ pomija on ważne dane. Musisz mieć uprawnienia administratora do obszaru roboczego Notion, aby wyeksportować całą zawartość.

1. Przejdź do **[[Ustawienia]]** u góry paska bocznego Notion.
2. W sekcji **Workspace** wybierz **General**.
3. Znajdź i wybierz **Export all workspace content**.
4. W polu **Export format** wybierz **HTML**.
5. Wybierz **Include everything**.
6. Włącz **Create folders for subpages**.
7. Otrzymasz plik `.zip` e-mailem lub bezpośrednio w przeglądarce.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Importowanie pliku .zip z Notion

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W polu **Format** wybierz **Notion (.zip)**
6. Wybierz plik `.zip` z danymi Notion, które chcesz zaimportować. *Zalecamy importowanie całej zawartości Notion naraz, aby łącza wewnętrzne mogły zostać prawidłowo odwzorowane.*
7. _Opcjonalnie_ wybierz folder docelowy importu. Strony i bazy danych Notion zostaną zagnieżdżone wewnątrz tego folderu.
8. Włącz **Save parent pages in subfolders**, aby zachować strukturę Notion. *Uwaga: w Notion można pisać treści w folderach — nie jest to możliwe w Obsidian, dlatego takie strony zostaną dodane jako podstrony w folderze.*
9. Wybierz **Importuj** i poczekaj na zakończenie importu
10. Gotowe!

### Rozwiązywanie problemów

Jeśli napotkasz problemy podczas importowania z Notion:

- Upewnij się, że w Notion używasz **HTML** jako formatu eksportu, **nie Markdown**.
- Jeśli Obsidian wydaje się zawieszać podczas importu, wyłącz wtyczki społeczności i spróbuj ponownie.

Napotkałeś inny problem? Przeszukaj [repozytorium Importer](https://github.com/obsidianmd/obsidian-importer/issues), aby sprawdzić, czy inni napotkali podobny problem.

#### Importowanie dużych obszarów roboczych

Jeśli importujesz obszar roboczy o rozmiarze wielu gigabajtów, eksport z Notion może zawierać zagnieżdżone pliki `.zip`. W takim przypadku możesz zobaczyć komunikat o błędzie importu wyglądający mniej więcej tak:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Jeśli zobaczysz ten błąd, rozpakuj plik z Notion, a następnie zaimportuj zagnieżdżone pliki `Export-{id}-Part-1.zip`.
