---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'Konvertor formátu je základný doplnok, ktorý umožňuje konvertovať Markdown z iných aplikácií do formátu Obsidian.'
---
Prevodník formátov je [[Vstavané pluginy|základný plugin]], ktorý vám umožňuje konvertovať Markdown z iných aplikácií do formátu Obsidian. Taktiež vám umožňuje konvertovať určité [[Vlastnosti]] do nových požadovaných formátov.

> [!warning] Varovanie
> Prevodník formátov konvertuje celý váš trezor na základe vašich nastavení. [[Zálohovanie súborov Obsidian|Zálohujte si súbory Obsidian]] predtým, než vykonáte konverziu.

Ak chcete konvertovať všetky poznámky vo vašom trezore:

1. V [[Paleta príkazov|palete príkazov]] vyberte **Otvoriť importér Markdown formátu**. Tento príkaz nájdete aj v [[Panel nástrojov|paneli nástrojov]] ako ikonu **Otvoriť importér Markdown formátu** ![[lucide-binary.svg#icon]].
2. Zapnite formáty, ktoré chcete konvertovať.
3. Kliknite na **Spustiť konverziu**.

Viac informácií nájdete v [[Základná syntax formátovania]].

## Podporované formáty

### Roam Research

Prevodník formátov dokáže konvertovať nasledujúcu syntax Roam Research:

- **Značky**: Konvertuje `#tag` a `#[[tag]]` na `[[tag]]`
- **Zvýraznenia**: Konvertuje `^^highlight^^` na `==highlight==`
- **Položky TODO**: Konvertuje `{{[[TODO]]}}` na `[ ]`

### Bear

Prevodník formátov dokáže konvertovať nasledujúcu syntax Bear:

- **Zvýraznenia**: Konvertuje `::highlight::` na `==highlight==`

### Zettelkasten

Prevodník formátov dokáže konvertovať nasledujúcu syntax Zettelkasten:

- **Úplné odkazy**: Konvertuje `[[UID]]` na `[[UID File Name]]`
- **Skrátené odkazy**: Konvertuje `[[UID]]` na `[[UID File Name|File Name]]`

### [[Vlastnosti]]

Od verzie Obsidian `1.9.3` dokáže Prevodník formátov konvertovať [[Vlastnosti#Zastarané vlastnosti|zastarané formáty vlastností]] na aktuálny formát:

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
