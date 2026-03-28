---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Właściwości pozwalają organizować informacje dotyczące notatki. Właściwości zawierają dane strukturalne, takie jak tekst, linki, daty, pola wyboru i liczby.'
---
Atrybuty pozwalają organizować informacje o notatce. Atrybuty zawierają ustrukturyzowane dane, takie jak tekst, linki, daty, pola wyboru i liczby. Atrybuty mogą być również używane w połączeniu z [[Wtyczki społeczności|wtyczkami społeczności]], które potrafią wykonywać przydatne operacje na ustrukturyzowanych danych.

## Dodawanie atrybutów do notatki

Istnieje kilka sposobów dodania atrybutu do notatki:

- Użyj [[Lista poleceń|polecenia]] **Dodaj atrybut**.
- Użyj [[Skróty klawiszowe|skrótu klawiszowego]] **`Cmd/Ctrl+;`**.
- Wybierz **Dodaj atrybut** z menu **Więcej opcji** (wywoływanego ikoną trzech kropek lub kliknięciem prawym przyciskiem myszy na karcie).
- Wpisz `---` na samym początku pliku.

Po dodaniu atrybutu na górze pliku pojawi się wiersz z dwoma polami: _nazwą_ atrybutu i _wartością_ atrybutu.

Jako nazwę możesz wybrać cokolwiek chcesz. Obsidian udostępnia kilka domyślnych atrybutów: `tags`, `cssclasses` i `aliases`.

Po wybraniu nazwy atrybutu możesz nadać mu wartość.

### Rodzaje atrybutów

Oprócz nazwy i wartości atrybuty mają również _rodzaj_. Rodzaj atrybutu określa, jakie wartości może przechowywać i jak Obsidian je obsługuje. Aby zmienić rodzaj atrybutu, kliknij ikonę rodzaju obok nazwy atrybutu i wybierz inną opcję. Możesz również zarządzać rodzajami atrybutów za pomocą wbudowanej wtyczki [[Panel atrybutów]].

Obsidian obsługuje następujące rodzaje atrybutów:

- **[[#Tekst]]**
- **[[#Lista]]**
- **[[#Liczba]]**
- **[[#Pole wyboru]]**
- **[[#Data]]**
- **[[#Data i godzina]]**
- **[[#Tagi]]**

Po przypisaniu rodzaju atrybutu do nazwy, wszystkie atrybuty o tej nazwie w całym skarbcu będą używać tego samego rodzaju.

## Zaawansowane zastosowania

### Wyszukiwanie atrybutów

Atrybuty mają własną [[Szukaj|składnię wyszukiwania]], której można używać razem z innymi terminami i operatorami wyszukiwania. [[Szukaj#Wyszukiwanie atrybutów|Zobacz składnię wyszukiwania atrybutów]].

### Szablony

Możesz dodawać atrybuty do [[Wtyczki/Szablony|szablonów]].

Gdy wstawisz szablon do aktywnej notatki, wszystkie atrybuty z szablonu zostaną dodane do notatki. Obsidian połączy również wszelkie atrybuty istniejące w notatce z atrybutami szablonu. ^templates-properties

### Zmiana nazwy atrybutów

Możesz zmienić nazwę atrybutu, klikając go prawym przyciskiem myszy w [[Panel atrybutów|widoku wszystkich atrybutów]].

### Tryby wyświetlania

Możesz zmienić sposób wyświetlania atrybutów w notatce, przechodząc do **[[Ustawienia]] → Edytor → Atrybuty pliku**. Dostępne opcje to:

- **Widoczne** (domyślnie) – wyświetla atrybuty na górze notatki, jeśli istnieją.
- **Ukryte** – ukrywa atrybuty, które nadal można wyświetlić na pasku bocznym za pomocą [[Panel atrybutów]].
- **Kod** – wyświetla atrybuty w formacie zwykłego tekstu YAML.

### Snippety CSS

Możesz używać [[Snippety CSS|snippetów CSS]], aby zmieniać wygląd konkretnych notatek.

### Nieobsługiwane funkcje

Kilka funkcji nie jest obecnie obsługiwanych w Obsidian:

- **Zagnieżdżone atrybuty**: Aby przeglądać zagnieżdżone atrybuty, zalecamy korzystanie z [[Podglądy i tryb edycji#Tryb źródłowy|trybu źródłowego]].
- **Masowa edycja atrybutów**: Do zaawansowanej masowej edycji poza [[Panel atrybutów|panelem atrybutów]] zalecamy narzędzia takie jak VSCode, skrypty i wtyczki społeczności.
- **Markdown w atrybutach**: Jest to celowe ograniczenie, ponieważ atrybuty są przeznaczone do małych, atomowych fragmentów informacji czytelnych zarówno dla ludzi, jak i maszyn.

## Skróty klawiszowe

### Dodawanie atrybutu

| Akcja | Skrót klawiszowy |
|---|---|
|Dodaj nowy atrybut|`Cmd + ;`|

### Nawigacja między atrybutami

Gdy atrybut jest aktywny:

| Akcja | Skrót klawiszowy |
|---|---|
|Przejdź do następnego atrybutu|`Strzałka w dół` lub `Tab`|
|Przejdź do poprzedniego atrybutu|`Strzałka w górę` lub `Shift+Tab`|
|Przejdź do edytora|`Alt+Strzałka w dół`|

### Zaznaczanie atrybutów

| Akcja | Skrót klawiszowy |
|---|---|
|Rozszerz zaznaczenie w górę|`Shift+Strzałka w górę`|
|Rozszerz zaznaczenie w dół|`Shift+Strzałka w dół`|
|Zaznacz wszystko|`Cmd+A`|

### Edycja atrybutów

| Akcja | Skrót klawiszowy |
|---|---|
|Edytuj nazwę atrybutu|`Strzałka w lewo`|
|Edytuj wartość atrybutu|`Strzałka w prawo`|
|Aktywuj atrybut|`Escape`|
|Usuń atrybut|`Cmd+Backspace`<br><br>jeśli jakiekolwiek atrybuty są zaznaczone, usunięte zostanie zaznaczenie.|
|Cofnij|`Cmd+Z`|
|Ponów|`Cmd+Shift+Z`|

### Vim (zaawansowane)

| Akcja | Skrót klawiszowy |
|---|---|
|Przesuń w dół|`j`|
|Przesuń w górę|`k`|
|Aktywuj klucz|`h`|
|Aktywuj wartość|`l`|
|Aktywuj wartość (kursor na końcu)|`A`|
|Aktywuj wartość (kursor na początku)|`i`|
|Utwórz nowy atrybut|`o`|

## Format atrybutów

Atrybuty są przechowywane w formacie [YAML](https://yaml.org/) na początku pliku. YAML to popularny format łatwy do odczytania zarówno przez ludzi, jak i komputery.

Nazwy atrybutów są oddzielone od wartości dwukropkiem, po którym następuje spacja:

```yaml
---
name: value
---
```

Kolejność par nazwa-wartość nie ma znaczenia, ale każda nazwa musi być unikalna w obrębie notatki. Na przykład nie można mieć więcej niż jednego atrybutu `tags`.

Wartości mogą być [[#Tekst|tekstem]], [[#Liczba|liczbami]], [[#Pole wyboru|polami wyboru]], [[#Data|datami]], [[#Data i godzina|datami i godzinami]] lub [[#Lista|listami]].

### Tekst

Atrybuty tekstowe zawierają pojedynczą linię tekstu. Formatowanie Markdown nie jest renderowane w atrybutach tekstowych. Hashtagi nie tworzą tagów, gdy są używane w atrybutach tekstowych.

Atrybuty tekstowe mogą zawierać adresy URL i [[Łącza wewnętrzne]] przy użyciu składni `[[Link]]`. [[Łącza wewnętrzne]] w atrybutach tekstowych muszą być otoczone cudzysłowami. Obsidian automatycznie je doda, jeśli ręcznie wpiszesz łącza wewnętrzne do atrybutów, ale uważaj, aby je dodawać podczas korzystania z wtyczek szablonów.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Lista

Atrybuty listowe zawierają wiele wartości. Każda wartość na liście pojawia się w osobnej linii, poprzedzona myślnikiem (-) i spacją.

Wartości listy mogą zawierać tekst, liczby i [[Łącza wewnętrzne]]. Gdy używasz [[Łącza wewnętrzne|łączy wewnętrznych]] w atrybutach listowych, otocz je cudzysłowami.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Liczba

Atrybuty liczbowe muszą zawsze być literalnymi liczbami, a nie wyrażeniami z operatorami. Dozwolone są zarówno liczby całkowite, jak i dziesiętne.

```yaml
---
year: 1977
pie: 3.14
---
```

### Pole wyboru

Atrybuty pól wyboru przyjmują wartości `true` lub `false`. W podglądzie na żywo wyświetlane są jako pole wyboru.

```yaml
---
favorite: true
reply: false
last: # Wartość nieokreślona; często traktowana jako false
```

### Data

Atrybuty daty są przechowywane w następującym formacie:

```yaml
---
date: 2020-08-21
---
```

Selektor daty korzysta z domyślnego formatu daty i godziny systemu operacyjnego. Możesz go zmienić w ustawieniach systemowych:

> [!info]- Windows
> **[[Ustawienia]] → Czas i język → Język i region → Format regionalny → Zmień formaty**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Preferencje systemowe → Język i region → Format daty**
> 
> ![[Mac-OS-DateTime.png|450]]

Gdy wtyczka [[Dziennik]] jest włączona, atrybut daty będzie dodatkowo działać jako łącze wewnętrzne do odpowiedniej codziennej notatki dla tej daty.

![[Dziennik#^daily-notes-date]]

### Data i godzina

Atrybuty daty i godziny zawierają zarówno datę, jak i konkretną godzinę, przechowywane w następującym formacie:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Podobnie jak [[#Data|atrybuty daty]], selektor daty i godziny korzysta z domyślnego formatu systemu operacyjnego. Możesz go zmienić w ustawieniach systemowych.

### Tagi

Atrybuty tagów to specjalny rodzaj atrybutu używany wyłącznie przez właściwość `tags`. Tego rodzaju atrybutu nie można przypisać do innych właściwości.

Atrybuty tagów są formatowane jako lista, w której każdy tag znajduje się w osobnej linii, poprzedzony myślnikiem (-) i spacją.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

Atrybut `tags` jest jednym z [[#Domyślne atrybuty|domyślnych atrybutów]] Obsidian. Zobacz [[Tagi]], aby uzyskać więcej informacji o używaniu tagów w Obsidian.

### Atrybuty JSON

Chociaż zalecamy używanie YAML do definiowania atrybutów, możesz również definiować atrybuty przy użyciu [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Należy pamiętać, że blok JSON zostanie odczytany, zinterpretowany i zapisany jako YAML.

## Domyślne atrybuty

Obsidian zawiera zestaw domyślnych atrybutów:

| Atrybut      | Rodzaj | Opis                                                         |
| ------------ | ------ | ------------------------------------------------------------ |
| `tags`       | Lista  | Zobacz [[Edycja i formatowanie/Tagi\|Tagi]].                |
| `aliases`    | Lista  | Zobacz [[Aliasy]].                                           |
| `cssclasses` | Lista  | Pozwala stylizować poszczególne notatki za pomocą [[Snippety CSS|snippetów CSS]]. |

### Atrybuty dla Obsidian Publish

Następujące domyślne atrybuty mogą być używane z [[Wprowadzenie do Obsidian Publish|Obsidian Publish]]:

| Atrybut       | Opis                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Zobacz [[Opublikuj swoją zawartość#Automatyczne wybieranie danych do publikacji\|Automatyczne wybieranie danych do publikacji]]. |
| `permalink`   | Zobacz [[Łącza stałe\|Łącza stałe]].                                                                      |
| `description` | Zobacz [[Podglądy linków w mediach społecznościowych#Opis\|Opis]].                                         |
| `image`       | Zobacz [[Podglądy linków w mediach społecznościowych#Obraz\|Obraz]].                                       |
| `cover`       | Zobacz [[Podglądy linków w mediach społecznościowych#Obraz\|Obraz]].                                       |

### Przestarzałe atrybuty

Te atrybuty zostały uznane za przestarzałe w Obsidian 1.4 i powinny zostać zastąpione ich nowoczesnymi odpowiednikami. Wsparcie dla nich jako [[#Domyślne atrybuty|domyślnych atrybutów]] zostało usunięte w Obsidian 1.9.

| Atrybut | Opis |
|-|-|
| `tag` | Przestarzały alias dla `tags`. |
| `alias` | Przestarzały alias dla `aliases`. |
| `cssclass` | Przestarzały alias dla `cssclasses`. |

> [!tip] Jeśli potrzebujesz przekonwertować pliki w swoim skarbcu do formatu [[#Domyślne atrybuty|domyślnych atrybutów]], możesz użyć [[Konwerter formatowania]], aby zmienić cały skarbiec masowo.
