---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'Konvertor formátů je základní plugin, který umožňuje převádět Markdown z jiných aplikací do formátu Obsidian.'
---
[[Importér Markdown formátu]] migruje [[Vlastnosti#Zastaralé vlastnosti|zastaralé formáty vlastností]] na aktuální formát používaný Obsidianem.

> [!warning] Zálohujte svůj trezor
> Převod se aplikuje na celý váš trezor. [[Zálohování souborů Obsidian|Zálohujte své soubory Obsidian]] před zahájením.

Pro převod vlastností ve vašich poznámkách:

1. Otevřete [[Paleta příkazů|paletu příkazů]].
2. Vyberte **Importér Markdown formátu: Migrace úvodních metadat**.
3. Vyberte **Začít převod**.

## Podporované formáty vlastností

Importér aktualizuje aliasy, štítky a CSS třídy ze zastaralých formátů:

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
