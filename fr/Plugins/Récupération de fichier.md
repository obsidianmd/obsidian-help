---
permalink: plugins/file-recovery
description: >-
  Récupération de fichier aide à protéger votre travail contre la perte
  involontaire de données en enregistrant automatiquement des instantanés de vos
  notes à intervalles réguliers.
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - File recovery
---
Récupération de fichier est un [[Modules principaux|module principal]] qui protège votre travail contre les suppressions accidentelles, la corruption de fichiers ou les modifications indésirables en enregistrant automatiquement des instantanés complets de vos notes à intervalles réguliers. Récupération de fichier n'est pas une solution de sauvegarde complète, et nous recommandons également de [[Sauvegarder vos fichiers Obsidian|sauvegarder]] vos fichiers Obsidian séparément.

Pour éviter d'occuper [[#Stockage et performance|trop d'espace]], Obsidian conserve les instantanés pendant un certain nombre de jours avant de les supprimer. Les instantanés capturent le contenu complet de vos fichiers, pas seulement les modifications, vous permettant de restaurer n'importe quelle version précédente.

> [!info]+ Info
> Par défaut, les instantanés sont enregistrés au minimum toutes les 5 minutes et conservés pendant 7 jours. Vous pouvez configurer ces deux intervalles sous **[[Paramètres]] → Modules principaux → Récupération de fichier**.

Les instantanés sont conservés dans les [[Comment Obsidian stocke les données#Paramètres globaux|paramètres globaux]], en dehors du coffre, pour pallier les pertes de données liées au coffre. Cela signifie que les instantanés sont stockés avec le chemin absolu vers la note. Si vous avez déplacé votre coffre récemment, vous devrez peut-être le remettre à l'emplacement où il se trouvait lorsque l'instantané a été pris.

> [!tip] Si vous utilisez [[Introduction à Obsidian Sync|Obsidian Sync]] ou [[Synchroniser vos notes entre appareils|d'autres services de synchronisation]], les instantanés de Récupération de fichier ne seront pas synchronisés entre les appareils. Les instantanés sont spécifiques à chaque appareil et restent locaux.

## Récupérer un instantané

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sélectionnez **Récupération de fichier** sous **Modules principaux**.
3. Sous **Instantanés**, sélectionnez **Afficher**.
4. Dans le champ de nom de fichier, commencez à saisir le nom du fichier que vous souhaitez récupérer, et vous verrez une liste de suggestions.
5. Sélectionnez le fichier, appuyez sur Entrée, et vous verrez une liste des instantanés disponibles.
6. Sélectionnez l'instantané que vous souhaitez récupérer.
    1. Si vous souhaitez copier et coller dans une nouvelle note, sélectionnez le bouton **Copier**.
    2. Si vous souhaitez restaurer le fichier complètement, sélectionnez le bouton **Restaurer**.
7. Vous pouvez optionnellement afficher les différences entre les instantanés en activant **Afficher les modifications**. Cela affiche le contenu ajouté, supprimé ou modifié entre les versions des instantanés.

## Effacer l'historique des instantanés

> [!danger] Effacer l'historique des instantanés supprime de manière irréversible tous les instantanés de votre coffre.

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sélectionnez **Récupération de fichier** sous **Modules principaux**.
3. Sous **Effacer l'historique**, sélectionnez **Effacer**.
4. Confirmez que vous souhaitez supprimer tous les instantanés en cliquant sur **Effacer**.

## Stockage et performance

Les instantanés de Récupération de fichier utilisent généralement un espace disque minimal, car ils ne stockent que les fichiers modifiés. Cependant, dans les coffres contenant de nombreux fichiers volumineux ou des modifications fréquentes, les instantanés peuvent s'accumuler avec le temps. Surveillez votre utilisation du stockage et ajustez la période de conservation si nécessaire.

## Limitations

- **Mode isolement Apple** : Cette fonctionnalité n'est pas disponible sur les appareils Apple avec le [mode isolement](https://support.apple.com/en-us/105120) activé, sauf si Obsidian en est exempté.
- **Types de fichiers** : Seuls les fichiers `.md` et `.canvas` peuvent être restaurés à l'aide de Récupération de fichier.
- **Emplacement du coffre** : Si vous déplacez votre coffre vers un autre emplacement sans utiliser le [[Gérer les coffres#Déplacer le coffre vers un autre dossier|sélecteur de coffre]], les instantanés existants pourraient ne plus être accessibles.
