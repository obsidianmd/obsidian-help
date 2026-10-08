---
permalink: import/apple-notes
localized: '2026-03-18'
cssclasses:
  - soft-embed
---
Obsidian vous permet de migrer facilement vos notes depuis Apple Notes en utilisant le [[Importer|module Importer]]. Cela convertit vos données Apple Notes en fichiers Markdown durables que vous pouvez utiliser avec Obsidian et de nombreuses autres applications.

Actuellement, Importer ne prend en charge la migration depuis Apple Notes que sur macOS. Il n'est pas encore disponible sur iOS.

## Importer les données Apple Notes dans Obsidian

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **Apple Notes**.
6. Sélectionnez **Importer**.
7. Sélectionnez **Ouvrir** dans la fenêtre contextuelle intitulée `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Examinez le modèle généré et les aperçus d'exemples de vos notes.
9. Sélectionnez **Importer** et attendez que l'importation soit terminée.

## Personnaliser les notes importées

Avant le début de l'importation, Importer affiche un aperçu généré à partir de votre sélection Apple Notes. Vous pouvez modifier le modèle généré, les propriétés et le nom de la note, ou choisir un modèle Markdown depuis votre coffre. Voir [[Importer des modèles]].

## Contenu pris en charge

Le module Obsidian Importer prend en charge la quasi-totalité des types de contenu Apple Notes. Cela inclut les tableaux, les images, les dessins, les numérisations, les PDF et les liens introduits dans iOS 17.

> [!Warning]
> Les notes protégées par mot de passe sont chiffrées par Apple et doivent donc être déverrouillées avant d'être importées. Toutes les notes verrouillées seront ignorées.

### Numérisations

Apple stocke les numérisations dans différents formats selon la façon dont elles ont été créées. Pour préserver les données originales, cela signifie qu'elles seront exportées différemment.

* Les numérisations créées ou consultées sur des versions plus anciennes de macOS ou iOS seront exportées sous forme d'une série d'images non recadrées.
* Les numérisations créées ou consultées sur des versions plus récentes de macOS ou iOS seront généralement exportées sous forme d'images recadrées.
* Les numérisations qui ont été modifiées à l'aide des fonctionnalités introduites dans iOS 17 seront généralement exportées en tant que PDF.

## Modèles

Utilisez les [[Importer des modèles|modèles Importer]] pour configurer entièrement la façon dont vos données Apple Notes sont importées.

![[Importer des modèles#Variables]]

De plus, Apple Notes fournit la variable suivante.

| Variable       | Description                        |
| -------------- | ---------------------------------- |
| `{{isPinned}}` | Indique si la note est épinglée. |
