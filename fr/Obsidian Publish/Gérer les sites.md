---
permalink: publish/sites
localized: '2026-03-18'

---
Cette page explique comment gérer les sites [[Introduction à Obsidian Publish|Obsidian Publish]].

Un site est une collection de notes hébergée par Obsidian Publish et disponible en ligne, soit via une adresse Obsidian Publish, soit via un [[Domaines personnalisés|domaine personnalisé]].

## Créer un nouveau site

> [!note] Le nombre de sites que vous pouvez avoir simultanément est déterminé par votre abonnement Obsidian Publish. Avant de créer un nouveau site, assurez-vous que votre abonnement le permet.

1. Dans le ruban, à gauche de la fenêtre de l'application, cliquez sur **Publier les modifications** ( ![[lucide-send.svg#icon]] ).
2. Si vous avez déjà un site existant, cliquez sur **Changer de site** ( ![[lucide-repeat.svg#icon]] ).
3. Dans **Identifiant du site**, entrez le chemin souhaité pour votre site. Par exemple, un site avec l'identifiant `my-amazing-site` est disponible à l'adresse publish.obsidian.md/my-amazing-site.
4. Cliquez sur **Créer**.

## Supprimer un site existant

> [!note] Les notes restent dans votre coffre même après la suppression d'un site.

1. Dans le ruban, à gauche de la fenêtre de l'application, cliquez sur **Publier les modifications** ( ![[lucide-send.svg#icon]] ).
2. Cliquez sur **Changer de site** ( ![[lucide-repeat.svg#icon]] ).
3. Cliquez sur **Supprimer le site** ( ![[lucide-x.svg#icon]] ) à droite du site que vous souhaitez supprimer.
4. Cliquez sur **Supprimer** pour confirmer.

## Basculer entre les sites

1. Dans le ruban, à gauche de la fenêtre de l'application, cliquez sur **Publier les modifications** ( ![[lucide-send.svg#icon]] ).
2. Cliquez sur **Changer de site** ( ![[lucide-repeat.svg#icon]] ).
3. Cliquez sur **Choisir** à droite du site vers lequel vous souhaitez basculer.

## Modifier l'identifiant du site

1. Dans le ruban, à gauche de la fenêtre de l'application, cliquez sur **Publier les modifications** ( ![[lucide-send.svg#icon]] ).
2. Cliquez sur **Changer de site** ( ![[lucide-repeat.svg#icon]] ).
3. Cliquez sur **Modifier l'identifiant du site** ( ![[lucide-edit-3.svg#icon]] ) à droite du site que vous souhaitez modifier.
4. Dans **Identifiant du site**, entrez le nouvel identifiant pour votre site.
5. Cliquez sur **Modifier**.

## Voir les options du site

1. Dans le ruban, à gauche de la fenêtre de l'application, cliquez sur **Publier les modifications** ( ![[lucide-send.svg#icon]] ).
2. Dans la boîte de dialogue **Publier les modifications**, cliquez sur **Modifier les options du site** ( ![[lucide-cog.svg#icon]] ).

## Options du site

### Général

| Option                                         | Type   | Description                                                                                                                              |
| ---------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Nom du site                                    | Champ  | Le nom public et le titre de votre site Obsidian Publish.                                                                                |
| Fichier de la page d'accueil                   | Champ  | L'emplacement du fichier Markdown que vous souhaitez utiliser comme page d'accueil.                                                      |
| Logo                                           | Champ  | L'image que vous souhaitez utiliser comme bannière de votre site. L'image doit [[Publier votre contenu#Publier des notes\|être publiée]]. |
| Collaboration sur le site                      | Bouton | Déclarez d'autres utilisateurs auxquels vous souhaitez donner accès pour modifier vos notes publiées. Les utilisateurs doivent avoir un compte Obsidian. |
| Domaine personnalisé                           | Bouton | [[Domaines personnalisés]]                                                                                                               |
| Interdire l'indexation par les moteurs de recherche | Bascule | Empêchez les moteurs de recherche respectueux d'explorer votre site en ajoutant un fichier `robots.txt`.                                 |

### Apparence

| Option                      | Type        | Description                                                                                            |
|-----------------------------|-------------|--------------------------------------------------------------------------------------------------------|
| Thème                       | Liste déroulante | Choisissez comment votre thème s'affiche sur votre site ; **Clair**, **Sombre** ou **Adapté au système**. |
| Bascule Clair/Sombre        | Bascule     | Permettre aux utilisateurs de basculer entre les modes **Clair**/**Sombre** avec un bouton sur votre site. |

## Expérience de lecture

| Option                        | Type    | Description                                                                                                |
|-------------------------------|---------|----------------------------------------------------------------------------------------------------------|
| Afficher l'aperçu au survol  | Bascule | Activer ou désactiver l'aperçu de page au survol d'un lien interne actif.                                 |
| Masquer le titre de la page  | Bascule | Activer ou désactiver l'affichage du titre en ligne d'une note publiée.                                    |
| Longueur de ligne lisible    | Bascule | Activer ou désactiver la longueur de ligne lisible sur votre site.                                         |
| Sauts de ligne stricts       | Bascule | Activer ou désactiver l'affichage des sauts de ligne simples sur votre site.                               |
| Empiler les pages            | Bascule | Activer ou désactiver les [[Onglets#Empiler les groupes d'onglets\|onglets empilés]] sur votre site.       |

### Composants

| Option                          | Type    | Description                                                                                                                                        |
|---------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Afficher la navigation          | Bascule | Activer ou désactiver la vue de l'[[Explorateur de fichiers]] sur votre site Publish.                                                              |
| Personnaliser la navigation     | Bouton  | [[Personnaliser votre site#Personnaliser la navigation\|Personnalisez]] l'ordre d'affichage de vos fichiers si **Afficher la navigation** est activé. |
| Afficher la barre de recherche  | Bascule | Activer ou désactiver une barre de recherche sur votre site.                                                                                       |
| Afficher la vue graphique       | Bascule | Activer ou désactiver la vue graphique dans la barre latérale droite de votre site.                                                                |
| Afficher la table des matières  | Bascule | Activer ou désactiver la vue [[Plan\|Table des matières]] sur votre site.                                                                          |
| Afficher les liens retour       | Bascule | Activer ou désactiver les [[Rétroliens]] sur votre site.                                                                                           |

### Autres paramètres du site

| Option                                  | Type    | Description                                                                                                                                     |
| --------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Mots de passe                           | Bouton  | [[Obsidian Publish/Sécurité et confidentialité#Ajouter un mot de passe au site\|Définir un mot de passe]] pour restreindre l'accès à l'ensemble de votre site. |
| Code de suivi Google Analytics          | Champ   | **URL de domaine personnalisé uniquement**. Placez ici votre code de suivi Google Analytics.                                                     |
