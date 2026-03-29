---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'Konvertor formátů je základní plugin, který umožňuje převádět Markdown z jiných aplikací do formátu Obsidian.'
---
[[Importér Markdown formátu]] je [[Základní pluginy|základní plugin]], který umožňuje převést Markdown z jiných aplikací do formátu Obsidian. Také umožňuje převést určité [[Vlastnosti]] do nových požadovaných formátů.

> [!warning] Varování
> Importér Markdown formátu převádí celý váš trezor na základě vašeho nastavení. [[Zálohování souborů Obsidian|Zálohujte své soubory Obsidian]] před provedením převodu.

Pro převod všech poznámek ve vašem trezoru:

1. V [[Paleta příkazů|paletě příkazů]] vyberte **Otevřít importér Markdown formátu**. Tuto možnost najdete také v [[Postranní panel nástrojů|postranním panelu nástrojů]] s ikonou **Otevřít importér Markdown formátu** ![[lucide-binary.svg#icon]].
2. Zapněte formáty, které chcete převést.
3. Klikněte na **Začít převod**.

Další informace naleznete v [[Základní syntaxe formátování]].

## Podporované formáty

### Roam Research

Importér Markdown formátu dokáže převést následující syntaxi Roam Research:

- **Štítky**: Převede `#tag` a `#[[tag]]` na `[[tag]]`
- **Zvýraznění**: Převede `^^highlight^^` na `==highlight==`
- **Položky TODO**: Převede `{{[[TODO]]}}` na `[ ]`

### Bear

Importér Markdown formátu dokáže převést následující syntaxi Bear:

- **Zvýraznění**: Převede `::highlight::` na `==highlight==`

### Zettelkasten

Importér Markdown formátu dokáže převést následující syntaxi Zettelkasten:

- **Úplné odkazy**: Převede `[[UID]]` na `[[UID File Name]]`
- **Zjednodušené odkazy**: Převede `[[UID]]` na `[[UID File Name|File Name]]`

### [[Vlastnosti]]

Od verze Obsidian `1.9.3` dokáže Importér Markdown formátu převést [[Vlastnosti#Zastaralé vlastnosti|zastaralé formáty vlastností]] na aktuální formát:

**Aliasy**

```yaml
# Před

alias: My Note Title

# Po

aliases:
  - My Note Title
```

**Štítky**

```yaml
# Před

tag: project, important

# Po

tags:
  - project
  - important
```

**CSS třídy**

```yaml
# Před

cssclass: custom-style

# Po

cssclasses:
  - custom-style
```
