---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian vous permet de migrer des notes depuis un graphe Logseq basé sur des fichiers (désormais appelé « Logseq OG ») en utilisant le [[Importer|module Importer]] officiel. Importer lit directement les fichiers Markdown de Logseq et convertit le formatage spécifique à Logseq en fichiers durables que vous pouvez utiliser hors ligne avec Obsidian et d'autres applications.

## Avant de commencer

- Sauvegardez votre graphe Logseq et votre coffre Obsidian.
- Localisez le dossier racine de votre graphe Logseq. Il contient normalement des dossiers nommés `pages`, `journals`, `assets` et `logseq`.
- Assurez-vous d'utiliser un graphe Logseq basé sur des fichiers. Les graphes Logseq en base de données ne sont pas encore pris en charge.

## Importer votre graphe Logseq

Vous avez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez **[[Paramètres]] → Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
2. Activez le module Importer.
3. Ouvrez **Importer** en utilisant la [[Palette de commandes]] ou l'icône du ruban.
4. Sous **Format de fichier**, sélectionnez **Logseq**.
5. Sous **Choisir un dossier**, sélectionnez le dossier racine de votre graphe. Sélectionnez le dossier qui contient `pages` et `journals`, et non l'un de ces dossiers individuellement.
6. Passez en revue les dossiers détectés et excluez ceux que vous ne souhaitez pas importer.
7. Choisissez un dossier de sortie et l'emplacement où les pièces jointes importées doivent être stockées.
8. Passez en revue les options d'importation et prévisualisez des exemples de notes converties.
9. Sélectionnez **Importer** et attendez la fin de l'importation.

## Limitations

- Les tableaux blancs ne sont pas importés.
- Les requêtes sont conservées sous forme de blocs de code si vous choisissez de les garder.
- Les macros de modèles dynamiques de Logseq restent en texte littéral.
- La planification des cartes mémoire, les annotations PDF et les autres données spécifiques à l'application Logseq ne sont pas migrées.

## Paramètres

Importer convertit les conventions courantes de Logseq, notamment :

- Les propriétés de page en [[Propriétés]] Obsidian.
- Les alias de page, mots-clés, espaces de noms et liens.
- Les états de flux de travail en marqueurs de liste à cases à cocher, avec les priorités et les dates conservées sous forme de texte lisible.
- Les identifiants de bloc, les références de bloc et les intégrations de bloc en liens et intégrations Obsidian.
- Les noms de fichiers de journal et les liens de date.
- Les surlignages, listes numérotées, blocs Org, intégrations de médias et fichiers liés depuis le dossier `assets` du graphe.

### Journaux

Par défaut, **Utiliser les paramètres des notes quotidiennes** est activé. Les journaux importés utilisent le dossier et le format de date configurés par le module principal [[Notes quotidiennes]]. Cela peut placer les journaux en dehors du dossier de sortie sélectionné dans Importer.

Si vous désactivez cette option, les journaux sont écrits dans un dossier `Journals` à l'intérieur du dossier de sortie sélectionné et utilisent le format de nom de note `YYYY-MM-DD`.

### Aplatir les plans

Logseq utilise des puces imbriquées comme structure d'une page. Par défaut, Importer préserve cette structure en plan. Activez **Aplatir les plans** pour convertir les blocs du plan en une combinaison de paragraphes, entêtes et listes conventionnelles. Les tâches et les groupes d'éléments de type liste restent des éléments de liste, mais la conversion est heuristique. Examinez plusieurs exemples dans l'aperçu avant d'importer un graphe volumineux.

### Conserver les données incompatibles

Les requêtes, cartes mémoire et entrées de suivi du temps de Logseq n'ont pas d'équivalents directs dans Obsidian. Les options d'importation vous permettent de choisir si vous souhaitez conserver chaque type de contenu. Lorsqu'il est conservé, il reste sous forme de texte brut.

- **Conserver les requêtes** préserve les requêtes sous forme de blocs de code délimités ou de code en ligne.
- **Conserver les cartes mémoire** préserve les marqueurs `#card` et les enveloppes de texte à trous sous forme de texte brut.
- **Conserver le suivi du temps** préserve les entrées `LOGBOOK` et `CLOCK` sous forme de texte brut.

## Modèles

Utilisez les [[Importer des modèles|modèles d'Importer]] pour configurer entièrement la façon dont vos données Logseq sont importées.

![[Importer des modèles#Variables]]

## Dépannage

Si Importer ne trouve aucune note, assurez-vous d'avoir sélectionné le dossier racine du graphe et que les dossiers de pages ou de journaux configurés contiennent des fichiers Markdown.

Si une pièce jointe est signalée comme manquante, confirmez que le fichier référencé existe toujours dans le dossier `assets` du graphe.

Pour d'autres problèmes, consultez le [suivi des problèmes d'Importer](https://github.com/obsidianmd/obsidian-importer/issues) ou soumettez un rapport de bogue avec un petit graphe d'exemple.
