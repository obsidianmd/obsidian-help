---
permalink: import/apple-notes
localized: '2026-03-18'
aliases:
  - Import from Apple Notes
---
Obsidian vous permet de migrer facilement vos notes depuis Apple Notes en utilisant le [[Importer|plugin Importer]]. Cela convertira vos données Apple Notes en fichiers Markdown durables, que vous pouvez utiliser avec Obsidian et de nombreuses autres applications.

Actuellement, Importer ne prend en charge la migration depuis Apple Notes que sur macOS. Il n'est pas encore disponible sur iOS.

## Importer les données Apple Notes dans Obsidian

Vous aurez besoin du plugin officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le plugin Importer.
4. Ouvrez le plugin **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **Apple Notes**.
6. Cliquez sur **Importer**.
7. Cliquez sur **Ouvrir** dans la fenêtre contextuelle qui apparaît, intitulée `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Attendez que l'importation soit terminée.
9. C'est terminé !

## Contenu pris en charge

Le plugin Obsidian Importer prend en charge la quasi-totalité des types de contenu Apple Notes. Cela inclut les tableaux, les images, les dessins, les numérisations, les PDF et les liens introduits dans iOS 17.

> [!Warning]
> Les notes protégées par mot de passe sont chiffrées par Apple et doivent donc être déverrouillées avant d'être importées. Toutes les notes verrouillées seront ignorées.

### Numérisations

Apple stocke les numérisations dans différents formats selon la façon dont elles ont été créées. Pour préserver les données originales, cela signifie qu'elles seront exportées différemment.

* Les numérisations créées ou consultées sur des versions plus anciennes de macOS ou iOS seront exportées sous forme d'une série d'images non recadrées.
* Les numérisations créées ou consultées sur des versions plus récentes de macOS ou iOS seront généralement exportées sous forme d'images recadrées.
* Les numérisations qui ont été modifiées à l'aide des fonctionnalités introduites dans iOS 17 seront généralement exportées en tant que PDF.

## Méthodes d'exportation alternatives

Apple ne fournit pas d'option native pour exporter vos notes. Cependant, plusieurs outils tiers existent, comme [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) de Chintan Ghate. Veuillez noter que la plupart des outils sont limités dans les données qu'ils exportent depuis Apple Notes et pourraient ne pas fournir les données de sortie les plus compatibles. Ces outils fonctionnent mieux si vos notes Apple Notes sont principalement constituées de texte, avec peu de pièces jointes ou de fonctionnalités spéciales comme les dessins et les numérisations.

Selon l'outil que vous avez utilisé, l'exportation peut être au format Markdown ou au format HTML. Suivez les instructions en fonction du format de fichier vers lequel vous avez exporté :

- [[Importer des fichiers HTML]]
- [[Importer des fichiers Markdown]]
