---
permalink: settings
description: Découvrez comment personnaliser Obsidian via l'interface des Paramètres.
publish: true
mobile: true
aliases:
  - How to/Paramètres
  - Settings
localized: '2026-03-18'
---
Les paramètres vous permettent de personnaliser votre expérience Obsidian. Configurez les options générales, les préférences de l'éditeur, l'apparence, les raccourcis clavier, et gérez les modules principaux et complémentaires.

## Ouvrir les paramètres

### Bureau

Dans la [[Barre latérale#Ouvrir les barres latérales masquées|barre latérale gauche]], sélectionnez **[[Paramètres]]** ( ![[lucide-cog.svg#icon]] ). Vous pouvez également ouvrir les paramètres avec la [[Palette de commandes]].

### Mobile

Dans la barre latérale gauche, sélectionnez **[[Paramètres]]** ( ![[lucide-cog.svg#icon]] ).

## Organisation des paramètres

Les paramètres sont organisés dans les catégories suivantes :

- **Options** — Paramètres principaux de l'application incluant [[#Général]], [[#Éditeur]], [[#Fichiers et liens]], [[#Apparence]], et [[#Raccourcis clavier]].
- **[[Modules principaux]]** — Modules intégrés fournis avec Obsidian.
- **[[Modules complémentaires]]** — Modules tiers installés depuis la communauté.

## Général

La page Général contient les informations de version, les paramètres de mise à jour, les préférences de langue et la gestion du compte.

### Version et mises à jour

Consultez votre version actuelle d'Obsidian et la version du programme d'installation en haut de la page. Sélectionnez **Vérifier les mises à jour** pour rechercher manuellement de nouvelles versions, ou sélectionnez **[Lire le journal des modifications](<https://obsidian.md/changelog/>)** pour consulter les notes de version.

**Mises à jour automatiques**

Lorsque cette option est activée, Obsidian vérifie automatiquement les nouvelles versions et vous notifie lorsque des mises à jour sont disponibles.

**Recevoir les versions en accès anticipé**

Mise à jour automatique vers les dernières [[Versions en accès anticipé]]. Ces versions incluent de nouvelles fonctionnalités mais peuvent être moins stables.

> [!info]+ Licence Catalyst requise
> Cette option est uniquement disponible pour les utilisateurs disposant d'une [[Licence Catalyst]].

### Langue

Sélectionnez votre langue préférée pour l'interface d'Obsidian. Sélectionnez **[[Traductions|Apprendre comment ajouter une nouvelle langue à Obsidian]]** pour contribuer à une traduction.

### Aide

Sélectionnez **[[Accueil|Ouvrir]]** pour accéder aux ressources d'aide, incluant la documentation, les forums communautaires et les guides de dépannage.

### Compte

Gérez votre compte Obsidian et vos licences.

**Votre compte**

Consultez les informations de votre compte, incluant le nom d'utilisateur et l'adresse électronique. Sélectionnez **[Gérer](https://obsidian.md/account)** pour accéder aux paramètres du compte, ou sélectionnez **Se déconnecter** pour vous déconnecter de l'application.

**Licence Catalyst**

Consultez l'état de votre licence Catalyst. Si vous disposez d'une [[Licence Catalyst]] active, votre niveau de licence apparaît ici.

**Licence commerciale**

Si vous soutenez [Obsidian pour le travail](<https://obsidian.md/blog/free-for-work/>), sélectionnez **Activer** pour entrer une clé de licence commerciale, ou sélectionnez **[Acheter](https://obsidian.md/account/commercial)** pour acquérir une licence. Sélectionnez **[[Licence commerciale|En savoir plus]]** pour des informations sur les licences commerciales.

### Avancé

#### Notifier si le démarrage prend plus de temps que prévu

Lorsque cette option est activée, Obsidian affiche une notification si le démarrage est inhabituellement lent. La notification inclut des informations de diagnostic sur la cause du délai. Sélectionnez l'icône du minuteur ( ![[lucide-timer.svg#icon]] ) à côté de ce paramètre pour [[Aide et support#Vérifier le temps de démarrage|vérifier votre temps de démarrage]].

## Éditeur

La page Éditeur contient les paramètres relatifs à la façon dont vous consultez et modifiez vos notes.

### Toujours mettre le focus sur les nouveaux onglets

Lorsque vous ouvrez un lien dans un nouvel onglet, basculer immédiatement vers celui-ci.

### Vue par défaut pour les nouveaux onglets

La vue par défaut dans laquelle un nouvel onglet de fichier Markdown est ouvert. Choisissez entre le [[Vues et mode d'édition#Mode lecture|mode lecture]] ou la [[Vues et mode d'édition#Vue d'édition|vue d'édition]].

### Mode d'édition par défaut

Le mode d'édition par défaut avec lequel un nouvel onglet démarre. Choisissez entre l'[[Vues et mode d'édition#Aperçu en direct|aperçu en direct]] ou le [[Vues et mode d'édition#Mode source|mode source]].

### Afficher le mode d'édition dans la barre d'état

Afficher le bouton de basculement du mode d'édition dans la [[Barre d'état|barre d'état]].

### Affichage

#### Longueur de ligne lisible

Limiter la longueur maximale des lignes. Moins de contenu est affiché à l'écran, mais les longs blocs de texte sont plus lisibles.

#### Sauts de ligne stricts

Les spécifications Markdown ignorent les [[Syntaxe de mise en forme de base#Sauts de ligne|sauts de ligne]] simples en mode lecture. Désactivez cette option pour rendre les sauts de ligne simples visibles.

#### Propriétés dans le document

Choisissez comment les [[Propriétés|propriétés]] sont affichées en haut des notes. Sélectionnez **source** pour afficher les propriétés en YAML brut.

#### Plier les entêtes

[[Plier]] tout le contenu sous un entête en sélectionnant l'icône de pliage à côté de celui-ci.

### Plier l'indentation

[[Plier]] une partie de l'indentation, comme les listes, en sélectionnant l'icône de pliage.

#### Afficher les numéros de ligne

Afficher les numéros de ligne dans la gouttière.

#### Afficher les guides d'indentation

Afficher les lignes verticales de relation entre les éléments de liste.

#### De droite à gauche (RTL)

Définit la direction par défaut du texte des notes de droite à gauche.

#### Appariement automatique des crochets

Apparier automatiquement les crochets et les guillemets.

#### Appariement automatique de la syntaxe Markdown

Apparier automatiquement les symboles pour le gras, l'italique, le code, et plus encore.

#### Listes intelligentes

Définir automatiquement l'indentation et placer correctement les éléments de liste.

#### Indenter avec des tabulations

Utiliser les tabulations pour indenter en appuyant sur la touche Tab. Désactivez cette option pour indenter avec 4 espaces.

#### Convertir le HTML collé en Markdown

Convertir automatiquement le HTML en Markdown lors du collage et du glisser-déposer depuis des pages web.

Utilisez `Ctrl/Cmd+Maj+V` pour coller le HTML sans conversion.

### Comportement

#### Vérification orthographique

Activer le correcteur orthographique. Sélectionnez l'icône d'engrenage pour supprimer les éléments enregistrés du dictionnaire personnalisé.

#### Langues de vérification orthographique

**Windows et Linux :**

Choisissez les langues à utiliser pour le correcteur orthographique. Sélectionnez l'icône plus (+) pour ajouter des langues. Pour supprimer une langue, sélectionnez le X à côté de celle-ci.

**macOS :**

Le correcteur orthographique natif détecte automatiquement la langue utilisée par le système d'exploitation.

#### Largeur visuelle de l'indentation

Nombre d'espaces qu'un caractère de tabulation affichera.

### Avancé

#### Raccourcis Vim

Utiliser les raccourcis Vim lors de l'édition.

## Fichiers et liens

La page Fichiers et liens contient les paramètres de gestion des fichiers, des liens et du comportement du coffre.

### Emplacement par défaut pour les nouvelles notes

Où les notes nouvellement créées sont placées. Les options incluent :

- **Dossier du coffre** — Les notes sont créées à la racine de votre coffre.
- **Même dossier que le fichier actuel** — Les notes sont créées dans le même dossier que la note actuellement active.
- **Dans le dossier spécifié ci-dessous** — Les notes sont créées dans un dossier spécifique que vous choisissez.

### Emplacement par défaut pour les nouvelles pièces jointes

Où les [[Pièces jointes|pièces jointes]] nouvellement ajoutées sont placées. Les options incluent :

- **Dossier du coffre** — Les pièces jointes sont placées à la racine de votre coffre.
- **Dans le dossier spécifié ci-dessous** — Les pièces jointes sont placées dans un dossier spécifique que vous choisissez.
- **Même dossier que le fichier actuel** — Les pièces jointes sont placées dans le même dossier que la note actuellement active.
- **Dans un sous-dossier du dossier actuel** — Les pièces jointes sont placées dans un sous-dossier du dossier de la note actuelle.

### Liens

#### Format des nouveaux liens

Quel format de liens insérer lors de la génération automatique de [[Liens internes|liens internes]]. Les options incluent :

- **Chemin le plus court possible** — Utilise le chemin unique le plus court vers le fichier lié.
- **Chemin relatif au fichier** — Utilise un chemin relatif au fichier actuel.
- **Chemin absolu dans le coffre** — Utilise le chemin complet depuis la racine du coffre.

#### Mettre à jour automatiquement les liens internes

Lorsque cette option est activée, Obsidian met automatiquement à jour les liens internes lorsque vous renommez un fichier. Désactivez cette option pour être invité à mettre à jour les liens après un renommage.

#### Utiliser les liens wiki

Générer automatiquement des liens wiki pour les `[[liens]]` et `![[images]]` au lieu de liens et images Markdown. Désactivez cette option pour générer des liens Markdown à la place.

#### Afficher tous les types de fichiers

Afficher les fichiers de toute extension même si Obsidian ne peut pas les ouvrir nativement, afin que vous puissiez les lier et les voir dans l'explorateur de fichiers et le sélecteur rapide.

### Corbeille

#### Confirmer la suppression de fichier

Demander confirmation avant de supprimer un fichier.

#### Fichiers supprimés

Ce qui arrive à un fichier après sa suppression. Les options incluent :

- **Déplacer vers la corbeille système** — Les fichiers sont déplacés vers la corbeille de votre système d'exploitation.
- **Déplacer vers la corbeille Obsidian** — Les fichiers sont déplacés vers le dossier `.trash` de votre coffre.
- **Supprimer définitivement** — Les fichiers sont définitivement supprimés et ne peuvent pas être récupérés.

### Avancé

#### Fichiers exclus

Les fichiers exclus seront masqués dans la [[Rechercher|Recherche]], la [[Vue graphique]], et les mentions non liées ([[Rétroliens]] et [[Liens sortants]]), et moins visibles dans le [[Sélecteur rapide]] et les suggestions de liens. Sélectionnez **Gérer** pour configurer les fichiers exclus.

#### Remplacer le dossier de configuration

Utiliser un [[Dossier de configuration|dossier de configuration]] différent de celui par défaut. Doit commencer par un point.

#### Autoriser les rappels URI

Activer l'utilisation de x-callback-url via x-success ou x-error lors du traitement des [[Obsidian URI|URI Obsidian]].

#### Reconstruire le cache du coffre

Reconstruit le [[Comment Obsidian stocke les données#Cache de métadonnées|cache de métadonnées]] du coffre. La reconstruction du cache peut prendre de quelques secondes à quelques minutes selon la taille de votre coffre. Sélectionnez **Reconstruire** pour lancer le processus.

## Apparence

La page Apparence contient les paramètres pour personnaliser l'aspect visuel d'Obsidian.

### Schéma de couleurs de base

Choisissez le schéma de couleurs par défaut d'Obsidian. Les options incluent :

- **S'adapter au système** — Correspond au mode clair ou sombre de votre système d'exploitation.
- **Clair** — Utilise le mode clair.
- **Sombre** — Utilise le mode sombre.

### Couleur d'accentuation

Choisissez la couleur d'accentuation utilisée dans toute l'application. Sélectionnez le sélecteur de couleur ou l'icône de réinitialisation pour personnaliser.

### Thèmes

Gérez les [[Thèmes|thèmes]] installés et parcourez les thèmes de la communauté. Sélectionnez **Gérer** pour voir et installer des thèmes. Le menu déroulant affiche votre thème actuellement actif. L'icône de dossier ( ![[lucide-folder-open.svg#icon]] ) ouvre le dossier des thèmes dans votre [[Dossier de configuration|dossier de configuration]].

### Thèmes communautaires actuels

Affiche le nombre de thèmes communautaires que vous avez installés.

### Police

#### Police de l'interface

Définir la police de base pour tout Obsidian. Sélectionnez **Gérer** pour choisir une police personnalisée ou entrer un nom de police.

#### Police du texte

Définir la police pour les vues d'édition et de lecture. Sélectionnez **Gérer** pour choisir une police personnalisée ou entrer un nom de police.

#### Police à chasse fixe

Définir la police pour les emplacements comme les blocs de code et les métadonnées. Sélectionnez **Gérer** pour choisir une police personnalisée ou entrer un nom de police.

#### Taille de la police

Taille de la police en pixels qui affecte les vues d'édition et de lecture. Ajustez à l'aide du curseur.

#### Ajustement rapide de la taille de police

Ajuster la taille de la police avec `Ctrl+Défilement` (Windows/Linux) ou `Cmd+Défilement` (macOS), ou en utilisant le geste de pincement sur le pavé tactile.

### Interface

#### Afficher le titre en ligne

Affiche le nom du fichier comme un titre modifiable en ligne avec le contenu du fichier. Le titre en ligne agit comme un entête dans Obsidian mais n'ajoute pas d'entête à votre note.

#### Afficher la barre de titre des onglets

Afficher l'en-tête en haut de chaque onglet.

#### Afficher le ruban

Afficher la barre d'outils verticale sur le côté de la fenêtre. En savoir plus sur le [[Ruban|ruban]].

#### Configuration du menu du ruban

Configurer les commandes qui apparaissent dans le menu du ruban. Sélectionnez **Gérer** pour personnaliser.

> [!info]+ Configuration du ruban sur mobile
> Sur mobile, la personnalisation du ruban fonctionne différemment. Voir [[Ruban#Mobile|Personnalisation du ruban sur mobile]] pour plus de détails.

### Avancé

#### Niveau de zoom

Contrôle le niveau de zoom global de l'application. Ajustez à l'aide du curseur.

#### Menus natifs

Les menus dans toute l'application correspondront au système d'exploitation. Ils ne seront pas affectés par votre thème.

#### Style de cadre de fenêtre

Détermine le style de la barre de titre des fenêtres d'Obsidian. Nécessite un redémarrage complet pour prendre effet. Les options incluent :

- **Cadre Obsidian** — Utilise le cadre de fenêtre personnalisé d'Obsidian.
- **Cadre natif** — Utilise le cadre de fenêtre par défaut de votre système d'exploitation.
- **Cadre masqué** — Masque complètement la barre de titre.

#### Icône d'application personnalisée

Définir une icône personnalisée pour l'application. Sélectionnez **Choisir** pour sélectionner un fichier d'icône (`.icns`, `.ico`, `.png`, ou `.svg`). En savoir plus sur les [[Apparence#Icône d'application personnalisée|icônes d'application personnalisées]].

#### Fenêtre translucide

Activer l'effet de translucidité pour renforcer la sensation de profondeur. Fonctionne mieux avec le mode sombre. Non pris en charge sur Linux.

> [!info]+ macOS uniquement
> Cette fonctionnalité est principalement conçue pour macOS. En savoir plus sur la [[Apparence#Translucidité|translucidité]].

#### Accélération matérielle

Active l'accélération matérielle, qui utilise votre GPU pour rendre Obsidian plus fluide. Si vous désactivez cette option, les performances de l'application peuvent être sévèrement dégradées mais cela peut résoudre certains problèmes rares.

### Extraits CSS

Gérez et consultez les [[Extraits CSS|extraits CSS]] stockés dans votre coffre. Les extraits CSS sont stockés dans `/coffre/.obsidian/snippets/`. Sélectionnez l'icône d'actualisation pour recharger les extraits, ou l'icône de dossier ( ![[lucide-folder-open.svg#icon]] ) pour ouvrir le dossier des extraits.

## Raccourcis clavier

La page [[Raccourcis clavier]] vous permet de consulter, définir et personnaliser les [[Raccourcis d'édition|raccourcis clavier]] pour les commandes dans Obsidian.

Utilisez la barre de recherche pour filtrer les commandes, et sélectionnez l'icône de filtre pour afficher uniquement les commandes avec des raccourcis clavier assignés. Pour ajouter un raccourci clavier, sélectionnez l'icône plus (+) à côté d'une commande. Pour supprimer un raccourci clavier, sélectionnez l'icône X à côté de la combinaison de touches.

## Modules principaux

Les [[Modules principaux]] sont des modules intégrés fournis avec Obsidian. Chaque module ajoute des fonctionnalités spécifiques à l'application.

Pour activer ou désactiver un module principal, sélectionnez le bouton à bascule à côté du nom du module. Sélectionnez l'icône plus ( ![[lucide-plus-circle.svg#icon]] ) pour voir les [[Raccourcis clavier]] du module. Sélectionnez l'icône de paramètres ( ![[lucide-settings.svg#icon]] ) pour ouvrir la page de paramètres du module.

Utilisez la barre de recherche pour filtrer les modules par nom.

## Modules complémentaires

Les [[Modules complémentaires]] sont des modules tiers créés par la communauté Obsidian. Parcourez et installez des modules en sélectionnant **Parcourir**.

### Mode restreint

Le [[Sécurité des plugins#Mode restreint|mode restreint]] désactive tous les modules complémentaires pour des raisons de sécurité. Sélectionnez **Activer et recharger** pour activer le mode restreint.

### Modules actuels

Affiche le nombre de modules complémentaires que vous avez installés. Sélectionnez **Vérifier les mises à jour** pour rechercher des mises à jour de modules.

### Modules installés

Consultez et gérez vos modules complémentaires installés. Utilisez la barre de recherche pour filtrer les modules par nom. Chaque module dispose d'icônes pour les paramètres, les raccourcis clavier, le financement, la désinstallation, et d'un bouton à bascule pour l'activer ou le désactiver.
