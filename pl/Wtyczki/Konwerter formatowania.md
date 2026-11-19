---
permalink: plugins/format-converter
publish: true
mobile: true
description: Konwerter formatów to podstawowa wtyczka umożliwiająca konwersję składni Markdown z innych aplikacji do formatu Obsidian.
---
Konwerter formatowania przenosi [[Atrybuty#Przestarzałe atrybuty|przestarzałe formaty atrybutów]] do aktualnego formatu używanego przez Obsidian.

> [!warning] Utwórz kopię zapasową sejfu
> Konwersja dotyczy całego sejfu. [[Tworzenie kopii zapasowej plików Obsidian|Utwórz kopię zapasową plików Obsidian]] przed rozpoczęciem.

Aby przekonwertować atrybuty w notatkach:

1. Otwórz [[Lista poleceń|paletę poleceń]].
2. Wybierz **Konwerter formatowania: Przenoszenie metadanych**.
3. Wybierz **Rozpocznij konwertowanie**.

## Obsługiwane formaty atrybutów

Konwerter aktualizuje aliasy, tagi i klasy CSS z przestarzałych formatów:

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
