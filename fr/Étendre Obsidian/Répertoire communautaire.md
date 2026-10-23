---
permalink: community-directory
description: Ce que la page de référencement public d'un plugin ou d'un thème affiche dans le répertoire communautaire d'Obsidian.
---
Chaque module et thème dispose d'une page publique dans le [répertoire communautaire d'Obsidian](https://community.obsidian.md). Sélectionnez un module depuis [[Modules complémentaires#Parcourir les modules complémentaires|Parcourir]], ou un thème depuis [[Thèmes#Parcourir les thèmes|Parcourir]], dans Obsidian, ou naviguez directement sur [community.obsidian.md](https://community.obsidian.md), pour ouvrir sa page de présentation.

Cette page vous aidera à comprendre ce que fait chaque section, du point de vue d'un utilisateur d'Obsidian.

> [!tip]- Êtes-vous développeur de modules ou de thèmes ?
> Apprenez à soumettre et gérer vos propres modules et thèmes dans la [documentation du répertoire communautaire](https://docs.obsidian.md/community-directory).

## En-tête

L'en-tête affiche l'icône et le nom de l'entrée, avec un badge **Officiel** si elle a été créée par les créateurs originaux du module ou du thème, ainsi que l'icône et le nom de l'auteur et le nombre total de téléchargements de l'entrée.

Sélectionnez **Ajouter à Obsidian** pour ouvrir l'entrée directement dans Obsidian et l'installer.

## Aperçu

L'onglet **Aperçu** affiche les captures d'écran de l'entrée, sa description longue, un extrait de son fichier README, et une grille de modules ou thèmes associés dans la même catégorie.

## Fiche d'évaluation

L'onglet **Fiche d'évaluation** affiche des métriques automatisées de santé et d'analyse pour l'entrée.

Une note de santé globale, telle qu'Excellent, est décomposée en hygiène (présence d'un README, d'une licence, d'un guide de contribution et d'une description), maintenance (activité récente de commits et de versions), réactivité (nombre de problèmes clôturés et nombre de contributeurs récemment actifs), et adoption (nombre d'installations et d'étoiles).

La section d'analyse affiche le résultat de la dernière analyse automatisée, tel que Réussi, regroupé en vérifications réussies (par exemple, aucune dépendance vulnérable connue, pas de code obfusqué, attestations d'artefacts GitHub vérifiées, et quelles API Obsidian l'entrée utilise, comme Lecture du coffre ou Écriture du coffre), divulgations (choses que l'entrée fait qui ne sont pas nécessairement des problèmes mais dont vous devriez être informé, comme l'accès à votre presse-papiers ou les requêtes vers des domaines externes), et autres remarques (comme l'utilisation du stockage du navigateur au lieu des API de données de module d'Obsidian).

> [!info]+ Interpréter un score plus bas
> Un module ou thème avec un score de santé ou d'analyse plus bas n'est pas nécessairement dangereux, mais il vaut la peine d'examiner de plus près ses divulgations avant de l'installer. Considérez cela comme un feu tricolore :
> - 🟢 Peu ou pas de divulgations signifie un risque faible
> - 🟡 Quelques divulgations, à vérifier pour des éléments comme l'accès au presse-papiers ou au réseau
> - 🔴 Plusieurs divulgations ou avertissements signifie que vous devriez examiner attentivement ce que fait l'entrée avant de l'installer.

## Mises à jour

L'onglet **Mises à jour** liste l'historique des versions de l'entrée, avec la version et la date de chaque publication. Sélectionnez **Voir toutes les versions sur GitHub** pour consulter l'historique complet dans le dépôt de l'entrée.

## Barre latérale

À côté des onglets, la barre latérale affiche des résumés de santé et d'analyse correspondant à l'onglet Fiche d'évaluation, la description longue de l'entrée, et des détails tels que sa version actuelle, sa date de dernière mise à jour et de création, son nombre de mises à jour et de téléchargements, la version compatible d'Obsidian, les plateformes prises en charge et la licence. Si l'entrée n'est pas gratuite, une section Paiements explique le fonctionnement de sa tarification, par exemple les paliers payants ou les limites d'utilisation. Si l'auteur a ajouté des liens de financement, un lien de soutien apparaît également ici, ainsi que l'icône, le nom de l'auteur ou de l'organisation, et des liens vers leurs autres profils.

## Questions fréquentes

**Quelle est la différence entre Gratuit, Paiement optionnel et Payant sur une page ?**
Gratuit signifie qu'aucun paiement n'est impliqué. Paiement optionnel signifie que l'entrée repose sur un service tiers payant, ou verrouille certaines fonctionnalités derrière un paiement, tout en restant utilisable gratuitement. Payant signifie que l'entrée n'est accessible qu'avec un paiement.

Consultez la section Paiements de la page dans la barre latérale pour connaître les détails de la tarification d'une entrée en particulier.

**Pourquoi ne puis-je pas trouver ou installer un module ou un thème dont j'ai entendu parler ailleurs ?**
L'auteur l'a peut-être archivé. L'archivage supprime une entrée du répertoire communautaire et empêche les nouvelles installations.

**Quelle est la différence entre les scores de Santé et d'Analyse sur une page ?**
La Santé reflète l'hygiène et la maintenance continues de l'entrée, comme les commits récents et la réactivité aux problèmes. L'Analyse reflète le résultat de la dernière analyse automatisée d'une version.
