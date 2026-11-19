---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'Muodon muunnin on ydinlaajennus, jonka avulla voit muuntaa muiden sovellusten Markdown-muotoilun Obsidian-muotoon.'
---
Muotoilumuunnin muuntaa [[Määreet#Vanhentuneet määreet|vanhentuneet määremuodot]] Obsidianin nykyiseen muotoon.

> [!warning] Varmuuskopioi holvisi
> Muuntaminen koskee koko holviasi. [[Varmuuskopioi Obsidian-tiedostosi]] ennen aloittamista.

Muistiinpanojen määreiden muuntaminen:

1. Avaa [[Komentovalikko]].
2. Valitse **Muotoilumuunnin: Alkulehtien muuntaminen**.
3. Valitse **Aloita muuntaminen**.

## Tuetut määremuodot

Muunnin päivittää aliakset, tunnisteet ja CSS-luokat vanhentuneista muodoista:

**Aliakset**

```yaml
# Ennen

alias: My Note Title

# Jälkeen

aliases:
  - My Note Title
```

**Tunnisteet**

```yaml
# Ennen

tag: project, important

# Jälkeen

tags:
  - project
  - important
```

**CSS-luokat**

```yaml
# Ennen

cssclass: custom-style

# Jälkeen

cssclasses:
  - custom-style
```
