---
permalink: plugins/format-converter
description: >-
  Importateur depuis des fichiers Markdown est un module principal qui vous
  permet de convertir du Markdown provenant d'autres applications au format
  Obsidian.
publish: true
mobile: true
aliases:
  - Plugins/Markdown format converter
localized: '2026-03-18'
---
Importateur depuis des fichiers Markdown est un [[Modules principaux|module principal]] qui vous permet de convertir du Markdown provenant d'autres applications au format Obsidian. Il vous permet également de convertir certaines [[Propriétés]] vers les nouveaux formats requis.

> [!warning] Avertissement
> L'importateur depuis des fichiers Markdown convertit l'intégralité de votre coffre en fonction de vos paramètres. [[Sauvegarder vos fichiers Obsidian|Sauvegardez vos fichiers Obsidian]] avant d'effectuer la conversion.

Pour convertir toutes les notes de votre coffre :

1. Dans la [[Palette de commandes]], sélectionnez **Ouvrir l'importateur depuis des fichiers Markdown**. Vous pouvez également y accéder depuis le [[Ruban]] avec l'icône **Ouvrir l'importateur depuis des fichiers Markdown** ( ![[lucide-binary.svg#icon]] ).
2. Activez les formats que vous souhaitez convertir.
3. Cliquez sur **Lancer la conversion**.

Pour plus d'informations, consultez [[Syntaxe de mise en forme de base]].

## Formats pris en charge

### Roam Research

L'importateur depuis des fichiers Markdown peut convertir la syntaxe Roam Research suivante :

- **Mots-clés** : Convertit `#tag` et `#[[tag]]` en `[[tag]]`
- **Surlignage** : Convertit `^^highlight^^` en `==highlight==`
- **Éléments TODO** : Convertit `{{[[TODO]]}}` en `[ ]`

### Bear

L'importateur depuis des fichiers Markdown peut convertir la syntaxe Bear suivante :

- **Surlignage** : Convertit `::highlight::` en `==highlight==`

### Zettelkasten

L'importateur depuis des fichiers Markdown peut convertir la syntaxe Zettelkasten suivante :

- **Liens complets** : Convertit `[[UID]]` en `[[UID Nom du fichier]]`
- **Liens simplifiés** : Convertit `[[UID]]` en `[[UID Nom du fichier|Nom du fichier]]`

### [[Propriétés]]

Depuis Obsidian `1.9.3`, l'importateur depuis des fichiers Markdown peut convertir les formats de [[Propriétés#Propriétés obsolètes|propriétés obsolètes]] vers le format actuel :

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
