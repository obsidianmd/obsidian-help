---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Szablony to podstawowa wtyczka, która pozwala wstawiać wcześniej zdefiniowane fragmenty tekstu do aktywnej notatki.'
---
Szablony to [[Wbudowane wtyczki|wbudowana wtyczka]], która pozwala wstawiać wcześniej zdefiniowane fragmenty tekstu do aktywnej notatki.

## Ustawianie folderu szablonów

1. W lewym dolnym rogu kliknij **[[Ustawienia]]** ![[lucide-cog.svg#icon]].
2. W sekcji **Wbudowane wtyczki → Szablony → Lokalizacja folderu szablonów** wprowadź folder zawierający twoje szablony.

## Zmienne szablonów

Możesz dodawać dynamiczne informacje do swoich szablonów, używając _zmiennych szablonów_. Gdy wstawiasz szablon zawierający zmienną szablonu, wtyczka Szablony zastępuje ją odpowiednią wartością.

| Zmienna     | Opis                                                         |
|-------------|--------------------------------------------------------------|
| `{{title}}` | Tytuł aktywnej notatki.                                     |
| `{{date}}`  | Dzisiejsza data. **Domyślny format:** `YYYY-MM-DD`.         |
| `{{time}}`  | Bieżąca godzina. **Domyślny format:** `HH:mm`.             |

Zarówno `{{date}}`, jak i `{{time}}` pozwalają zmienić domyślny format za pomocą _ciągu formatującego_.

Aby ustawić ciąg formatujący, dodaj dwukropek (`:`) a następnie ciąg [tokenów formatu Moment.js](https://momentjs.com/docs/#/displaying/format/), na przykład `{{date:YYYY-MM-DD}}`.

Możesz używać `{{date}}` i `{{time}}` zamiennie z ciągami formatującymi, na przykład `{{time:YYYY-MM-DD}}`.

Domyślne formaty daty i godziny możesz zmienić w sekcji **[[Ustawienia]] → Szablony → Format daty** oraz **[[Ustawienia]] → Szablony → Format godziny**. ^template-settings-date-time-formatting

> [!tip] Wskazówka
> Możesz również używać zmiennych szablonów `{{date}}` i `{{time}}` we wtyczkach [[Dziennik]] i [[Kreator niepowtarzalnych notatek]].

## Tworzenie szablonu

W [[#Ustawianie folderu szablonów|folderze szablonów]] [[Zarządzanie notatkami#Tworzenie nowej notatki|utwórz notatkę]] zawierającą tekst, który ma się pojawić po użyciu szablonu. Możesz użyć [[#Zmienne szablonów|zmiennych szablonów]] do dynamicznego tekstu, takiego jak bieżąca data.

Oto przykładowy szablon do notatek z nauki:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Kluczowe pojęcia


## Ważne szczegóły


## Przykłady


## Pytania
- 

## Podsumowanie


## Powiązane tematy
- [[]]
```

## Wstawianie szablonu do aktywnej notatki

**Ważne:** Aby wstawić szablon, musisz najpierw [[#Ustawianie folderu szablonów|ustawić folder szablonów]].

1. Na wstążce kliknij **Wstaw szablon**.
2. Wybierz szablon do wstawienia w pozycji kursora w aktywnej notatce.

Aby wstawić szablon za pomocą [[Lista poleceń|palety poleceń]] lub [[Skróty klawiszowe#Ustawianie skrótu klawiszowego|niestandardowego skrótu klawiszowego]], użyj polecenia `Szablony: Wstaw szablon`.

Zawartość szablonu jest wstawiana w bieżącej pozycji kursora. Jeśli kursor nie znajduje się w treści notatki, zawartość jest wstawiana w ostatniej pozycji kursora.

### Atrybuty szablonu

![[Atrybuty#^templates-properties]]

## Wstawianie bieżącej daty i godziny do aktywnej notatki

Użyj poleceń `Szablony: Wstaw bieżącą datę` i `Szablony: Wstaw bieżącą godzinę`, aby wstawić bieżącą datę i godzinę w bieżącej pozycji kursora. Podobnie jak polecenie `Wstaw szablon`, można to zrobić za pomocą [[Lista poleceń|palety poleceń]] lub [[Skróty klawiszowe#Ustawianie skrótu klawiszowego|niestandardowego skrótu klawiszowego]].

Wstawiane data i godzina używają [[#^template-settings-date-time-formatting|formatowania ustawionego w ustawieniach wtyczki]].
