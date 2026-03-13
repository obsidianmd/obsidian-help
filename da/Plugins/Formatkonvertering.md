---
description: Formatkonvertering er et kerneplugin, som lader dig konvertere Markdown fra andre applikationer til Obsidians Markdownformat.
mobile: true
permalink: plugins/formatkonvertering
publish: true
---

"Formatkonvertering" er et [[Kerneplugins|kerneplugin]], som lader dig konvertere Markdown fra andre applikationer til Obsidians Markdownformat. Det tillader sig også, at konvertere bestemte [[Egenskaber|egenskaber]] til Obsidians format. 

> [!warning]
> "Formatkonvertering" konverterer hele din boks baseret på dine indstillinger. [[Lav backup af dine Obsidian filer]] før du anvender dplKommandopaletten|kommandopaletteSådan konverterer du alle dine noter i din boks:

1. Vælg **Åbn Markdown-importør** i [[Kommandopaletten|kommandopaletten]]. Denne kommando kan også findes i [[Båndmenu|båndmenuen]] med ikonet ( ![[lucide-binary.svg#icon]] )
2. Aktiver de formater, som du vil konvertere
3. Klik **Start konvertering**

Du kan få mere information i guiden: [[Grundlæggende formaterings syntaks]].

## Understøttede formater

### Roam Research

"Formatkonvertering" kan konvertere følgende Roam Research syntaks:

- **Tags**: Konverteres til `#tag` og `#[[tag]]` til `[[tag]]`
- **Fremhævninger**: konverterer `^^Fremhævning^^` til `==Fremhævning==`
- **TODO elementer**: Konverterer `{{[[TODO]]}}` til `[ ]`

### Bear

"Formatkonvertering" kan konvertere følgende Bear syntaks:

- **Fremhævninger**: Konverterer `::Fremhævning::` til `==Fremhævning==`

### Zettelkasten

"Formatkonvertering" kan konvertere følgende Zettelkasten syntaks:

- **Fulde links**: Konverterer `[[UID]]` til `[[UID Filnavn]]`
- **Pæne links**: Konverterer `[[UID]]` til `[[UID Filnavn|Filnavn]]`

### [[Egenskaber]]

Siden Obsidian version `1.9.3` kan dette plugin konvertere [[Egenskaber#Udfasede egenskaber|udfasede egenskaber]] til følgende format:

**Aliases**

```yaml
# Før

alias: Min notetitel

# Efter

aliases:
  - Min notetitel
```

**Tags**

```yaml
# Før

tag: projekt, vigtigt

# Efter

tags:
  - projekt
  - vigtigt
```

**CSS Classes**

```yaml
# Før

cssclass: custom-style

# Efter

cssclasses:
  - custom-style
```
