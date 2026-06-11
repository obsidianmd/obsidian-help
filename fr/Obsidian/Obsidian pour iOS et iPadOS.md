---
permalink: ios
localized: '2026-03-18'
---
L'application mobile Obsidian pour iOS et iPadOS apporte de puissantes capacités de prise de notes à votre iPhone et iPad. Vous pouvez la télécharger depuis l'[Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Cette page couvre les fonctionnalités spécifiques à iOS, notamment les widgets, l'intégration de Siri et les Raccourcis.

## Synchronisation

Pour des informations sur la synchronisation des notes entre appareils, veuillez consulter [[Synchroniser vos notes entre appareils]].

## Widgets

Obsidian pour iOS propose plusieurs widgets pour effectuer des actions rapides sur votre coffre.

> [!note] Note
> Les widgets sont disponibles sur iOS et iPadOS 18 et versions ultérieures.
> Les widgets ne sont pas disponibles lorsque l'option « Exiger Face ID » est utilisée pour déverrouiller l'application.

### Widgets de l'écran de verrouillage et du Centre de contrôle

Les widgets de l'écran de verrouillage et du Centre de contrôle vous permettent de :
- Créer une nouvelle note
- Ouvrir une note spécifique
- Ouvrir la note quotidienne
- Ouvrir la recherche
- Ouvrir Obsidian

### Widgets de l'écran d'accueil

Les widgets de l'écran d'accueil vous permettent de :
- Créer une note
- Afficher une note
- Ouvrir votre note quotidienne

### Personnaliser les widgets

Vous pouvez personnaliser les widgets selon votre flux de travail, par exemple en choisissant le coffre à utiliser ou en spécifiant une note particulière à ouvrir.

- **Widgets de l'écran d'accueil :** Appuyez longuement sur le widget, puis sélectionnez **Modifier le widget**.
- **Widgets de l'écran de verrouillage :** Appuyez longuement sur votre écran de verrouillage, touchez **Personnaliser**, sélectionnez l'écran de verrouillage, puis touchez le widget que vous souhaitez personnaliser.
- **Widgets du Centre de contrôle :** Ouvrez le Centre de contrôle, touchez le bouton **+** en haut à gauche pour commencer la modification, puis touchez le widget que vous souhaitez personnaliser.

Options de configuration du widget **Nouvelle note** :

![[ios-new-note-configuration.png|400]]

Options de configuration du widget **Afficher la note** :

![[ios-view-note-configuration.png|400]]

## Raccourcis

Obsidian s'intègre avec l'application Raccourcis d'Apple, vous permettant de créer de puissantes automatisations. Les raccourcis disponibles incluent :

- **Ouvrir une note** — Ouvrir une note spécifique dans votre coffre
- **Créer une nouvelle note** — Créer une nouvelle note dans votre coffre
- **Ouvrir la note quotidienne** — Accéder directement à la note quotidienne du jour
- **Capturer dans la note quotidienne** — Ajouter du texte au début ou à la fin de la note quotidienne sans ouvrir l'application Obsidian
- **Capturer dans un signet** — Ajouter du texte au début ou à la fin d'une note marquée comme signet sans ouvrir l'application Obsidian

Les raccourcis de capture sont particulièrement utiles pour la prise de notes rapide, car ils vous permettent d'ajouter du contenu à une note en arrière-plan.

## Feuille de partage

La feuille de partage d'Obsidian vous permet de capturer du contenu depuis des pages web. Elle fonctionne également avec des applications comme YouTube et d'autres réseaux sociaux.

> [!note]
> - La feuille de partage native est disponible sur iOS et iPadOS 18 et versions ultérieures.
> - Les fonctionnalités de la feuille de partage décrites dans cette section nécessitent Obsidian 1.13.0 ou une version ultérieure.

Utilisez la feuille de partage pour envoyer rapidement du contenu depuis une autre application vers Obsidian :
1. Dans une autre application, touchez le bouton **Partager**.
2. Sélectionnez **Obsidian**.
3. Choisissez un emplacement.
4. Vérifiez ou modifiez le contenu capturé.
5. Touchez **Enregistrer**.

![[ios-share-sheet-extension.png|400]]

### Emplacements

Les emplacements vous permettent de décider où le contenu partagé doit aller avant de l'enregistrer.

Les emplacements peuvent capturer vers :
- **Nouvelle note** — Créer une nouvelle note dans un coffre ou un dossier.
- **Note quotidienne** — Ajouter du contenu au début ou à la fin de la note quotidienne du jour.
- **Note marquée comme signet** — Ajouter du contenu au début ou à la fin d'une note marquée comme signet.
- **Note** — Choisir une note existante dans votre coffre.
- **Nouveau signet** — Enregistrer une URL partagée dans les signets d'Obsidian.

![[ios-share-sheet-locations.png|400]]

### Personnaliser les emplacements

Vous pouvez créer des emplacements pour des flux de travail courants, comme enregistrer des articles dans une boîte de réception, ajouter des citations à votre note quotidienne ou ajouter des liens aux signets.

Pour personnaliser les emplacements :

1. Ouvrez Obsidian depuis la feuille de partage iOS.
2. Touchez l'emplacement actuel dans la barre d'outils.
3. Touchez le bouton **+** pour créer un nouvel emplacement, ou sélectionnez un emplacement existant pour le modifier.
4. Choisissez le coffre, le comportement et les paramètres optionnels.

Selon le type de `Comportement`, vous pouvez configurer des options telles que :
- Dossier
- Modèle
- Groupe de signets
- Position d'ajout au début ou à la fin
- Si les liens partagés capturent le **Texte complet** ou uniquement l'**URL**

![[ios-share-sheet-add-location.png|400]]

### Utiliser un modèle lors du partage

Vous pouvez utiliser un modèle lors du partage de contenu depuis la feuille de partage. Les modèles vous permettent de formater le contenu web capturé avec des détails tels que le titre de la page, l'auteur, le site source et la date de publication.

Pour configurer un emplacement avec un modèle :

1. Ouvrez Obsidian depuis la feuille de partage iOS.
2. Touchez l'emplacement actuel dans la barre d'outils.
3. Touchez le bouton **+** pour créer un nouvel emplacement.
4. Saisissez un nom pour l'emplacement.
5. Sélectionnez un coffre.
6. Définissez **Comportement** sur **Nouvelle note**.
7. Dans la section **Optionnel**, touchez **Modèle**.
8. Sélectionnez une note de votre coffre à utiliser comme modèle.
9. Touchez **Enregistrer** pour sauvegarder l'emplacement.

![[ios-share-sheet-set-template.png|400]]

Lorsque vous partagez un lien en utilisant cet emplacement, Obsidian applique d'abord le modèle, puis ajoute le contenu partagé.

Variables de modèle prises en charge :

| Variable | Description |
| --- | --- |
| `{{author}}` | Auteur de l'article |
| `{{description}}` | Description ou résumé de l'article |
| `{{domain}}` | Nom de domaine du site web |
| `{{favicon}}` | URL du favicon du site web |
| `{{image}}` | URL de l'image principale de l'article |
| `{{published}}` | Date de publication de l'article, utilisant le format de date par défaut |
| `{{published: YYYY-MM-DD}}` | Date de publication utilisant un format de date personnalisé |
| `{{site}}` | Nom du site web |
| `{{title}}` | Titre de l'article |
| `{{wordCount}}` | Nombre total de mots dans le contenu extrait |

Vous pouvez également utiliser les variables de modèle standard pour la date et l'heure :

| Variable | Description |
| --- | --- |
| `{{date}}` | Date actuelle |
| `{{date: YYYY-MM-DD}}` | Date actuelle utilisant un format personnalisé |
| `{{time}}` | Heure actuelle |
| `{{time: HH:mm}}` | Heure actuelle utilisant un format personnalisé |

## Intégration de Siri

Vous pouvez utiliser les commandes vocales de Siri pour interagir avec Obsidian :

- « Capturer avec Obsidian »
- « Capturer dans Obsidian »
- « Ouvrir ma note quotidienne dans Obsidian »
- « Rechercher dans Obsidian »

## Intégration de Spotlight

Lorsque vous recherchez « Obsidian » dans Spotlight sur iOS, vous verrez des actions rapides :
- Nouvelle note
- Rechercher
- Note quotidienne
