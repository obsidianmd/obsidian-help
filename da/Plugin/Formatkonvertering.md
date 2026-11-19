---
description: 'Formatkonvertering er et kerneplugin, som lader dig konvertere Markdown fra andre applikationer til Obsidians Markdownformat.'
mobile: true
permalink: plugins/format-converter
publish: true
aliases:
  - plugins/formatkonvertering
  - Plugins/Formatkonvertering
---
Formatkonvertering migrerer [[Egenskaber#Udfasede egenskaber|udfasede egenskabsformater]] til det aktuelle format, som Obsidian bruger.

> [!warning] Sikkerhedskopiér din boks
> Konverteringen gælder hele din boks. [[Lav backup af dine Obsidian filer]], før du starter.

Sådan konverterer du egenskaberne i dine noter:

1. Åbn [[Kommandopaletten|kommandopaletten]].
2. Vælg **Formatkonvertering: Migrering af frontmatter**.
3. Vælg **Start konvertering**.

## Understøttede egenskabsformater

Konverteringen opdaterer aliases, tags og CSS-klasser fra udfasede formater:

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
