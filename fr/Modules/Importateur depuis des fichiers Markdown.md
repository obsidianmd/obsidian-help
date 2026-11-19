---
permalink: plugins/format-converter
description: Importateur depuis des fichiers Markdown est un module principal qui vous permet de convertir du Markdown provenant d'autres applications au format Obsidian.
publish: true
mobile: true
aliases:
  - Modules/Markdown format converter
  - Plugins/Markdown format converter
localized: '2026-03-18'
---
L'importateur depuis des fichiers Markdown migre les [[Propriétés#Propriétés obsolètes|formats de propriétés obsolètes]] vers le format actuel utilisé par Obsidian.

> [!warning] Sauvegardez votre coffre
> La conversion s'applique à l'intégralité de votre coffre. [[Sauvegarder vos fichiers Obsidian|Sauvegardez vos fichiers Obsidian]] avant de commencer.

Pour convertir les propriétés de vos notes :

1. Ouvrez la [[Palette de commandes]].
2. Sélectionnez **Convertisseur de fichiers Markdown : Migration des métadonnées**.
3. Sélectionnez **Lancer la conversion**.

## Formats de propriétés pris en charge

Le convertisseur met à jour les alias, mots-clés et classes CSS depuis les formats obsolètes :

**Alias**

```yaml
# Avant

alias: Mon titre de note

# Après

aliases:
  - Mon titre de note
```

**Mots-clés**

```yaml
# Avant

tag: projet, important

# Après

tags:
  - projet
  - important
```

**Classes CSS**

```yaml
# Avant

cssclass: style-personnalisé

# Après

cssclasses:
  - style-personnalisé
```
