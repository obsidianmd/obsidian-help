---
permalink: plugins/note-composer
---
[[Kompozytor notatek]] to [[Wbudowane wtyczki|wtyczka podstawowa]], która pozwala scalić dwie notatki lub wyodrębnić część notatki do nowej notatki.

## Scalanie notatek

Scalanie notatek dodaje jedną notatkę do drugiej i usuwa pierwszą. Kompozytor notatek aktualizuje wszystkie linki, aby odwoływały się do scalonej notatki.

Gdy wybierasz notatkę, z którą chcesz scalić, możesz wybrać jedną z następujących metod:

- `Enter`: Dodaje notatkę źródłową na _końcu_ notatki docelowej.
- `Shift+Enter`: Dodaje notatkę źródłową na _początku_ notatki docelowej.
- `Ctrl+Enter` (lub `Cmd+Enter` na macOS): Tworzy nową notatkę z zawartością notatki źródłowej.

Aby scalić aktywną notatkę z inną notatką w skarbcu:

**Eksplorator plików**

1. W eksploratorze plików kliknij prawym przyciskiem myszy notatkę, którą chcesz scalić.
2. Kliknij **Scal cały plik z...**.
3. Wybierz notatkę, z którą chcesz scalić.
4. Kliknij **Scal**, aby potwierdzić.

**Paleta poleceń**

1. Otwórz [[Lista poleceń|paletę poleceń]].
2. Wybierz **Kompozytor notatek: Scal aktywny plik z innym...**.
3. Wybierz notatkę, z którą chcesz scalić.
4. Kliknij **Scal**, aby potwierdzić.

> [!tip] Wskazówka
> Domyślnie Kompozytor notatek prosi o potwierdzenie przed scaleniem notatek. Jeśli wyłączysz potwierdzenie i scalasz notatkę przez pomyłkę, nadal możesz ją odzyskać za pomocą wtyczki [[Odzyskiwanie plików]].

## Wyodrębnianie notatki

Gdy wybierasz notatkę, do której chcesz wyodrębnić zaznaczenie, możesz wybrać jedną z następujących metod:

- `Enter`: Dodaje zaznaczony tekst na _końcu_ notatki docelowej.
- `Shift+Enter`: Dodaje zaznaczony tekst na _początku_ notatki docelowej.
- `Ctrl+Enter` (lub `Cmd+Enter` na macOS): Tworzy nową notatkę z zaznaczonym tekstem.

Aby wyodrębnić tekst do nowej notatki:

**Edytor**

1. W **Trybie edycji** zaznacz tekst, który chcesz wyodrębnić.
2. Kliknij prawym przyciskiem myszy zaznaczony tekst.
3. Kliknij **Wyodrębnij aktywny wybór**.
4. Wybierz notatkę, do której chcesz wyodrębnić.

**Paleta poleceń**

1. W **Trybie edycji** zaznacz tekst, który chcesz wyodrębnić.
2. Otwórz [[Lista poleceń|paletę poleceń]].
3. Wybierz **Kompozytor notatek: Wyodrębnij aktywny wybór**.
4. Wybierz notatkę, do której chcesz wyodrębnić.

> [!tip] Wskazówka
> Domyślnie Kompozytor notatek zastępuje wyodrębniony tekst linkiem do notatki docelowej. W ustawieniach możesz również zmienić to zachowanie, aby zamiast tego [[Osadzanie plików|osadzić]] notatkę docelową lub nie zostawiać niczego.

## Plik szablonu

Konfigurując szablon, możesz dostosować zawartość przed dodaniem jej do nowej notatki. Aby użyć szablonu, wprowadź **Lokalizację szablonu** w ustawieniach wtyczki.

Szablon może zawierać następujące zmienne:

| Zmienna           | Opis                                                                                                                                                          |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Zawartość do scalenia lub wyodrębniony zaznaczony tekst. Jeśli nie uwzględnisz tej zmiennej, Kompozytor notatek doda zawartość na dole szablonu.              |
| `{{fromTitle}}`   | Nazwa notatki źródłowej.                                                                                                                                      |
| `{{newTitle}}`    | Nazwa notatki docelowej. Na przykład, aby dodać nazwę pliku jako nagłówek na górze pliku.                                                                     |
| `{{date:FORMAT}}` | Data utworzenia nowej notatki. Na przykład `{{date:YYYY-MM-DD}}`.                                                                                              |
