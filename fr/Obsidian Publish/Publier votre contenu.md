---
permalink: publish/publish
description: Découvrez comment publier votre contenu à l'aide d'Obsidian Publish.
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Publish your content
---
Cette page explique comment gérer votre contenu publié. Pour apprendre à personnaliser le style de votre site, consultez [[Personnaliser votre site]].

## Prérequis

- Un compte Obsidian. Si vous n'en avez pas, [inscrivez-vous maintenant](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Un abonnement Obsidian Publish actif. Si vous n'en avez pas, abonnez-vous depuis [le tableau de bord de votre compte](https://obsidian.md/account/publish).
- Le module principal **Publish** est [[Configurer Obsidian Publish#Activer Obsidian Publish|activé]].
- Un [[Gérer les sites#Créer un nouveau site|site Publish]] est créé.

## Publier des notes

1. Dans le **ruban**, sélectionnez **Publier les modifications** (![[lucide-send.svg#icon]]).
2. Dans la boîte de dialogue **Publier les modifications**, sélectionnez **NOUVEAU** pour afficher toutes les notes non publiées.
3. Sélectionnez les notes que vous souhaitez publier.
4. Sélectionnez **Publier**.

## Dépublier des notes

Les notes restent dans votre coffre local même après les avoir dépubliées.

1. Dans le **ruban**, sélectionnez **Publier les modifications** (![[lucide-send.svg#icon]]).
2. Dans la boîte de dialogue **Publier les modifications**, sélectionnez **INCHANGÉ** pour afficher toutes les notes publiées.
3. Sélectionnez les notes que vous souhaitez dépublier.
4. Sélectionnez **Publier**.

## Mettre à jour une note publiée

1. Dans le **ruban**, sélectionnez **Publier les modifications** (![[lucide-send.svg#icon]]).
2. Dans la boîte de dialogue **Publier les modifications**, sélectionnez **MODIFIÉ** pour afficher toutes les notes modifiées depuis la dernière publication.
3. Sélectionnez les notes que vous souhaitez mettre à jour.
4. Sélectionnez **Publier**.

> [!hint] La suppression des notes renommées ou retirées ainsi que des images de Publish se fait à cette étape. Vous devez cocher manuellement la case pour supprimer ces données, car elle n'est pas automatiquement sélectionnée par mesure de sécurité.

## Publier les données liées

Lors de la publication de notes contenant des liens vers d'autres notes ou des images intégrées, des liens brisés peuvent survenir si les notes liées ne sont pas également publiées. **Obsidian Publish** aide à prévenir cela en sélectionnant automatiquement les médias liés aux notes que vous avez déjà choisies.

Pour inclure toutes les notes liées, sélectionnez **Ajouter les liens** dans la boîte de dialogue **Publier les modifications**.

Avant de publier, vérifiez la sélection mise à jour pour vous assurer qu'elle n'inclut pas de données que vous n'êtes pas prêt à publier.

> [!tip] La fonction **Ajouter les liens** respecte les exclusions définies dans [[#Ignorer des données]].

## Sélectionner automatiquement les données à publier

Définissez `publish: true` dans les [[Propriétés]] d'une note pour l'inclure automatiquement à la publication en tant que note nouvelle ou modifiée.

Vous pouvez également sélectionner automatiquement des notes et des images liées dans des dossiers spécifiques en les ajoutant comme dossiers **Inclus** :

1. Dans le **ruban**, sélectionnez **Publier les modifications** (![[lucide-send.svg#icon]]) ou ouvrez la [[Palette de commandes]] et tapez **Publish: Publish changes...**.
2. Sélectionnez l'icône **Gérer les filtres de publication** (![[lucide-filter.svg#icon]]).
3. Dans la section **Dossiers inclus**, sélectionnez **Gérer**.
4. Choisissez les dossiers que vous souhaitez inclure dans le sélecteur.
5. Le dossier est ajouté à la liste des inclusions.
6. Sélectionnez **Terminé** lorsque vous avez fini.

### Ignorer des données

Pour ignorer une note dans Obsidian Publish, définissez `publish: false` dans les [[Propriétés]] de la note. La note n'apparaîtra plus dans la liste des notes à publier.

Vous pouvez également ignorer automatiquement des notes et des images dans des dossiers spécifiques en les ajoutant comme dossiers **Exclus** :

1. Dans le **ruban**, sélectionnez **Publier les modifications** (![[lucide-send.svg#icon]]) ou ouvrez la [[Palette de commandes]] et tapez **Publish: Publish changes...**.
2. Sélectionnez l'icône **Gérer les filtres de publication** (![[lucide-filter.svg#icon]]).
3. Dans la section **Dossiers exclus**, sélectionnez **Gérer**.
4. Choisissez les dossiers que vous souhaitez exclure dans le sélecteur.
5. Le dossier est ajouté à la liste des exclusions.
6. Sélectionnez **Terminé** lorsque vous avez fini.

> [!note] `publish: true` prévaut sur les dossiers exclus
> Si un fichier a `publish: true`, il sera quand même publié même s'il se trouve dans un dossier ou un filtre exclu. Cela s'explique par le fait que `publish: true` offre un contrôle plus spécifique.
