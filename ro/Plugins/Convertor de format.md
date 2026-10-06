---
permalink: plugins/format-converter
publish: true
mobile: true
description: Format converter este un modul integrat care îți permite să convertești Markdown din alte aplicații în formatul Obsidian.
aliases:
  - Format converter
---
Format converter migrează [[Proprietăți#Deprecated properties|formatele de proprietăți depreciate]] la formatul curent utilizat de Obsidian.

> [!warning] Fă o copie de rezervă a seifului
> Conversia se aplică întregului seif. Fă o [[Fă copii de rezervă ale fișierelor Obsidian|copie de siguranță]] înainte de a începe.

Pentru a converti proprietățile din notele tale:

1. Deschide [[Paleta de comenzi|Paleta de comenzi]].
2. Selectează **Format converter: Frontmatter migration**.
3. Selectează **Start conversion**.

## Formate de proprietăți acceptate

Convertorul actualizează pseudonimele, etichetele și clasele CSS din formatele depreciate:

**Pseudonime (Aliases)**

```yaml
# Before

alias: My Note Title

# After

aliases:
  - My Note Title
```

**Etichete**

```yaml
# Before

tag: project, important

# After

tags:
  - project
  - important
```

**Clase CSS**

```yaml
# Before

cssclass: custom-style

# After

cssclasses:
  - custom-style
```
