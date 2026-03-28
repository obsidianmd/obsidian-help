---
permalink: plugins/format-converter
publish: true
mobile: true
description: Konwerter formatów to podstawowa wtyczka umożliwiająca konwersję składni Markdown z innych aplikacji do formatu Obsidian.
---
Konwerter formatowania to [[Wbudowane wtyczki|wbudowana wtyczka]], która pozwala konwertować Markdown z innych aplikacji do formatu Obsidian. Umożliwia również konwersję niektórych [[Atrybuty|atrybutów]] do nowych wymaganych formatów.

> [!warning] Ostrzeżenie
> Konwerter formatowania konwertuje cały sejf na podstawie ustawień. [[Tworzenie kopii zapasowej plików Obsidian|Utwórz kopię zapasową plików Obsidian]] przed wykonaniem konwersji.

Aby przekonwertować wszystkie notatki w sejfie:

1. W [[Lista poleceń|palecie poleceń]] wybierz **Otwórz konwerter formatowania**. Można go również znaleźć na [[Menu wstążkowe|wstążce]] za pomocą ikony **Otwórz konwerter formatowania** ![[lucide-binary.svg#icon]].
2. Włącz formaty, które chcesz przekonwertować.
3. Kliknij **Rozpocznij konwertowanie**.

Więcej informacji znajdziesz w [[Podstawowa składnia formatowania]].

## Obsługiwane formaty

### Roam Research

Konwerter formatowania może konwertować następującą składnię Roam Research:

- **Tagi**: Konwertuje `#tag` i `#[[tag]]` na `[[tag]]`
- **Wyróżnienia**: Konwertuje `^^highlight^^` na `==highlight==`
- **Elementy TODO**: Konwertuje `{{[[TODO]]}}` na `[ ]`

### Bear

Konwerter formatowania może konwertować następującą składnię Bear:

- **Wyróżnienia**: Konwertuje `::highlight::` na `==highlight==`

### Zettelkasten

Konwerter formatowania może konwertować następującą składnię Zettelkasten:

- **Pełne linki**: Konwertuje `[[UID]]` na `[[UID File Name]]`
- **Czytelne linki**: Konwertuje `[[UID]]` na `[[UID File Name|File Name]]`

### [[Atrybuty]]

Od wersji Obsidian `1.9.3` konwerter formatowania może konwertować [[Atrybuty#Przestarzałe atrybuty|przestarzałe formaty atrybutów]] do aktualnego formatu:

**Aliasy**

```yaml
# Przed

alias: My Note Title

# Po

aliases:
  - My Note Title
```

**Tagi**

```yaml
# Przed

tag: project, important

# Po

tags:
  - project
  - important
```

**Klasy CSS**

```yaml
# Przed

cssclass: custom-style

# Po

cssclasses:
  - custom-style
```
