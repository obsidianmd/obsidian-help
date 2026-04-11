---
permalink: web-clipper/templates
description: 'Naucz się tworzyć szablony, które automatycznie przechwytują i organizują metadane stron internetowych za pomocą Web Clipper.'
---
[[Wprowadzenie do Obsidian Web Clipper|Web Clipper]] pozwala tworzyć szablony, które automatycznie przechwytują i organizują metadane ze stron internetowych. Przykładowe szablony są dostępne w repozytorium [clipper-templates](https://github.com/kepano/clipper-templates).

## Tworzenie lub edycja szablonu

Aby **stworzyć** szablon, przejdź do ustawień Web Clipper i kliknij przycisk **Nowy szablon** na pasku bocznym. Możesz również **zduplikować** szablon w menu **Więcej** w prawym górnym rogu.

Aby **edytować** szablon, wybierz szablon z paska bocznego. Twoje zmiany zostaną zapisane automatycznie.

Szablony wykorzystują [[Zmienne]] i [[Filtry]], które pozwalają dostosować sposób zapisywania treści.

## Importowanie i eksportowanie szablonów Web Clipper

Aby zaimportować szablon:

1. Otwórz rozszerzenie i kliknij ikonę koła zębatego **[[Ustawienia]]**.
2. Przejdź do dowolnego szablonu na liście.
3. Kliknij **Importuj** w prawym górnym rogu lub przeciągnij i upuść plik(i) szablonu `.json` w dowolne miejsce w obszarze szablonu.

Aby wyeksportować szablon, kliknij **Eksportuj** w prawym górnym rogu. Spowoduje to pobranie pliku szablonu `.json`. Możesz również skopiować dane szablonu do schowka za pomocą menu **Więcej**.

## Ustawienia szablonu

### Funkcje edytora

Określ, w jaki sposób treść z Web Clipper będzie dodawana do Obsidian:

- **Stwórz nową notatkę**
- **Dodaj do istniejącej notatki**, na górze lub na dole
- **Dodaj do codziennej notatki**, na górze lub na dole (wymaga aktywnej wtyczki [[Dziennik|Dziennik]])

### Automatyczne wyzwalanie szablonu

Wyzwalacze szablonu pozwalają automatycznie wybierać szablon na podstawie adresu URL bieżącej strony lub danych [schema.org](https://schema.org/). Możesz zdefiniować wiele reguł dla każdego szablonu, oddzielonych nową linią.

Pierwsze dopasowanie na liście szablonów określa, który szablon zostanie użyty. Możesz przeciągać szablony w górę i w dół w ustawieniach Web Clipper, aby zmienić kolejność dopasowywania szablonów.

#### Proste dopasowywanie URL

Proste dopasowywanie wyzwala szablon, jeśli adres URL bieżącej strony *zaczyna się od* podanego wzorca. Na przykład:

- `https://obsidian.md` dopasuje dowolny URL zaczynający się od tego tekstu.

#### Dopasowywanie wyrażeniami regularnymi

Możesz wyzwalać szablony na podstawie bardziej złożonych wzorców URL, używając wyrażeń regularnych. Umieść wzorzec regex między ukośnikami (`/`). Pamiętaj, aby poprzedzić znaki specjalne w wyrażeniach regularnych (takie jak `.` i `/`) odwrotnym ukośnikiem (`\`). Na przykład:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` dopasuje dowolną stronę referencyjną IMDB.

#### Dopasowywanie schema.org

Możesz wyzwalać szablony na podstawie danych [schema.org](https://schema.org/) obecnych na stronie. Użyj prefiksu `schema:` po którym podaj klucz schematu, który chcesz dopasować. Opcjonalnie możesz określić oczekiwaną wartość. Na przykład:

- `schema:@Recipe` dopasuje strony, gdzie typ schematu to „Recipe".
- `schema:@Recipe.name` dopasuje strony, gdzie `@Recipe.name` jest obecny.
- `schema:@Recipe.name=Cookie` dopasuje strony, gdzie `@Recipe.name` to „Cookie".

Wartości schema.org mogą być również używane do [[Zmienne#Zmienne Schema.org|wstępnego wypełniania danych w szablonach]].

### Kontekst zapytania

Gdy [[Interpreter|Tłumacz]] jest włączony, możesz używać [[Zmienne#Zmienne promptów|zmiennych promptów]] do wyodrębniania treści strony za pomocą języka naturalnego. Dla każdego szablonu możesz zdefiniować [[Interpreter#Kontekst|kontekst]], do którego Tłumacz ma dostęp.
