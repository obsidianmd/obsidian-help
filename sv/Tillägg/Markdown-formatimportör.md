---
permalink: plugins/format-converter
publish: true
mobile: true
description: Formatkonverterare är ett kärntillägg som låter dig konvertera Markdown från andra applikationer till Obsidian-format.
---
Markdown-formatimportören migrerar [[Egenskaper#Föråldrade egenskaper|föråldrade egenskapsformat]] till det aktuella formatet som används av Obsidian.

> [!warning] Säkerhetskopiera ditt valv
> Konverteringen gäller hela ditt valv. [[Säkerhetskopiera dina Obsidian-filer]] innan du börjar.

För att konvertera egenskaperna i dina anteckningar:

1. Öppna [[Kommandopalett]].
2. Välj **Markdown-formatimportör: Frontmatter-migrering**.
3. Välj **Starta konvertering**.

## Egenskapsformat som stöds

Importören uppdaterar aliaser, taggar och CSS-klasser från föråldrade format:

**Aliaser**

```yaml
# Före

alias: My Note Title

# Efter

aliases:
  - My Note Title
```

**Taggar**

```yaml
# Före

tag: project, important

# Efter

tags:
  - project
  - important
```

**CSS-klasser**

```yaml
# Före

cssclass: custom-style

# Efter

cssclasses:
  - custom-style
```
