---
permalink: plugins/format-converter
publish: true
mobile: true
description: Format converter este un modul integrat care îți permite să convertești Markdown din alte aplicații în formatul Obsidian.
---

Format converter este un [[Core plugins|modul integrat]] care îți permite să convertești Markdown din alte aplicații în formatul Obsidian. De asemenea, îți permite să convertești anumite [[Properties|Proprietăți]] la noile formate necesare. 

> [!warning] Avertisment
> Format converter îți convertește întregul seif pe baza setărilor tale. Fă o [[Back up your Obsidian files|copie de siguranță]] înainte de a efectua conversia.

Pentru a converti toate notele din seiful tău:

1. În [[Command palette|Paleta de comenzi]], selectează **Open format converter**. Acesta poate fi găsit și în [[Ribbon|Panglică]], cu pictograma **Open format converter** ![[lucide-binary.svg#icon]].
2. Activează formatele pe care vrei să le convertești.
3. Dă clic pe **Start conversion**.

Pentru mai multe informații, consultă [[Basic formatting syntax]].

## Formate acceptate

### Roam Research

Format converter poate converti următoarea sintaxă Roam Research:

- **Etichete**: Convertește `#tag` și `#[[tag]]` în `[[tag]]`
- **Evidențieri**: Convertește `^^highlight^^` în `==highlight==`
- **Elemente TODO**: Convertește `{{[[TODO]]}}` în `[ ]`

### Bear

Format converter poate converti următoarea sintaxă Bear:

- **Evidențieri**: Convertește `::highlight::` în `==highlight==`

### Zettelkasten

Format converter poate converti următoarea sintaxă Zettelkasten:

- **Legături complete**: Convertește `[[UID]]` în `[[UID File Name]]`
- **Legături simplificate**: Convertește `[[UID]]` în `[[UID File Name|File Name]]`

### [[Properties|Proprietăți]]

Începând cu Obsidian `1.9.3`, Format converter poate converti formatele de [[Properties#Deprecated properties|proprietăți depreciate]] la formatul curent:

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
