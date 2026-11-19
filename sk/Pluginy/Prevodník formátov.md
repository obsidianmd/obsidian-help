---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'Konvertor formátu je základný doplnok, ktorý umožňuje konvertovať Markdown z iných aplikácií do formátu Obsidian.'
---
Prevodník formátov migruje [[Vlastnosti#Zastarané vlastnosti|zastarané formáty vlastností]] na aktuálny formát používaný aplikáciou Obsidian.

> [!warning] Zálohujte si trezor
> Konverzia sa aplikuje na celý váš trezor. [[Zálohovanie súborov Obsidian|Zálohujte si súbory Obsidian]] predtým, než začnete.

Ak chcete konvertovať vlastnosti vo vašich poznámkach:

1. Otvorte [[Paleta príkazov|paletu príkazov]].
2. Vyberte **Prevodník formátov: Frontmatter migrácia**.
3. Vyberte **Spustiť konverziu**.

## Podporované formáty vlastností

Prevodník aktualizuje aliasy, značky a CSS triedy zo zastaraných formátov:

**Aliasy**

```yaml
# Pred

alias: My Note Title

# Po

aliases:
  - My Note Title
```

**Značky**

```yaml
# Pred

tag: project, important

# Po

tags:
  - project
  - important
```

**CSS triedy**

```yaml
# Pred

cssclass: custom-style

# Po

cssclasses:
  - custom-style
```
