---
permalink: bases/views
localized: '2026-03-18'
aliases:
  - Views
---
Les vues vous permettent d'organiser les informations dans une [[Introduction aux Bases|base]] de plusieurs manières. Une base peut contenir plusieurs vues, et chaque vue peut avoir une configuration unique pour afficher, trier et filtrer les fichiers.

Par exemple, vous pouvez créer une base appelée « Livres » avec des vues séparées pour « Liste de lecture » et « Terminés récemment ».

## Barre d'outils

En haut d'une base se trouve une barre d'outils qui vous permet d'interagir avec les vues et leurs résultats.

- ![[lucide-table.svg#icon]] **Menu des vues** — créer, modifier et basculer entre les vues.
- **Résultats** — limiter, copier et exporter des fichiers.
- ![[lucide-arrow-up-down.svg#icon]] **Trier** — trier et regrouper les fichiers.
- ![[lucide-list-filter.svg#icon]] **Filtre** — filtrer les fichiers.
- ![[lucide-list.svg#icon]] **Propriétés** — choisir les propriétés à afficher et créer des [[Formules|formules]].
- ![[lucide-plus.svg#icon]] **Nouveau** — créer un nouveau fichier dans la vue actuelle.

## Ajouter et basculer entre les vues

Il existe deux façons d'ajouter une vue à une base :

- Cliquez sur le nom de la vue en haut à gauche et sélectionnez ![[lucide-plus.svg#icon]] **Ajouter une vue**.
- Utilisez la [[Palette de commandes|palette de commandes]] et sélectionnez **Bases : Ajouter une vue**.

La première vue de votre liste de vues se charge par défaut. Glissez les vues par leur icône pour modifier leur ordre.

## Paramètres de vue

Chaque vue possède ses propres options de configuration. Pour modifier les paramètres d'une vue :

1. Cliquez sur le nom de la vue en haut à gauche.
2. Cliquez sur la flèche droite à côté de la vue que vous souhaitez configurer.

Vous pouvez aussi faire un *clic droit* sur le nom de la vue dans la barre d'outils de la base pour accéder rapidement aux paramètres de la vue.

## Disposition

Les vues peuvent être affichées avec différentes dispositions, notamment sous forme de ![[lucide-table.svg#icon]] **tableau**, ![[lucide-list.svg#icon]] **liste**, ![[lucide-layout-grid.svg#icon]] **cartes** et ![[lucide-map.svg#icon]] **carte géographique**. Des dispositions supplémentaires peuvent être ajoutées par les [[Plugins communautaires|modules complémentaires]]. Certaines dispositions sont encore en cours de développement et nécessitent les [[Versions en accès anticipé|pré-versions]] d'Obsidian.

| Disposition             | Description                                                                                                                         | Version de l'application |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| [[Table view\|Tableau]] | Affiche les fichiers sous forme de lignes dans un tableau. Les colonnes sont alimentées par les [[properties\|propriétés]] de vos notes. | 1.9                      |
| [[Cards view\|Cartes]]  | Affiche les fichiers sous forme de grille de cartes. Permet de créer des vues de type galerie avec des images.                     | 1.9                      |
| [[List view\|Liste]]    | Affiche les fichiers sous forme de [[Syntaxe de mise en forme de base#Lists\|liste]] avec des puces ou des numéros.                         | 1.10                     |
| [[Map view\|Carte géographique]] | Affiche les fichiers sous forme d'épingles sur une carte interactive. Nécessite le module Maps.                            | 1.10                     |


## Filtres

Ouvrez le menu ![[lucide-list-filter.svg#icon]] **Filtre** en haut d'une base pour ajouter des filtres.

Une base sans filtres affiche tous les fichiers de votre coffre. Les filtres réduisent les résultats pour n'afficher que les fichiers répondant à des critères spécifiques. Par exemple, vous pouvez utiliser des filtres pour n'afficher que les fichiers avec un [[Étiquettes|mot-clé]] spécifique ou dans un dossier particulier. De nombreux types de filtres sont disponibles.

Les filtres peuvent être appliqués à toutes les vues d'une base, ou à une seule vue en choisissant parmi les deux sections du menu ![[lucide-list-filter.svg#icon]] **Filtre**.

- **Toutes les vues** applique les filtres à toutes les vues de la base.
- **Cette vue** applique les filtres à la vue active.

#### Composants d'un filtre

Les filtres ont trois composants :

1. **Propriété** — vous permet de choisir une [[Propriétés|propriété]] de votre coffre, y compris les [[Syntaxe des Bases#Propriétés de fichier|propriétés de fichier]].
2. **Opérateur** — vous permet de choisir comment comparer les conditions. La liste des opérateurs disponibles dépend du type de propriété (texte, date, nombre, etc.)
3. **Valeur** — vous permet de choisir la valeur à laquelle vous comparez. Les valeurs peuvent inclure des calculs et des [[Fonctions|fonctions]].

#### Conjonctions

- **Toutes les conditions suivantes sont vraies** est une instruction `et` — les résultats ne seront affichés que si *toutes* les conditions du groupe de filtres sont remplies.
- **L'une des conditions suivantes est vraie** est une instruction `ou` — les résultats seront affichés si *l'une* des conditions du groupe de filtres est remplie.
- **Aucune des conditions suivantes n'est vraie** est une instruction `non` — les résultats ne seront pas affichés si *l'une* des conditions du groupe de filtres est remplie.

#### Groupes de filtres

Les groupes de filtres vous permettent de créer une logique plus complexe en combinant des conjonctions.

#### Éditeur de filtre avancé

Cliquez sur le bouton code ![[lucide-code-xml.svg#icon]] pour utiliser l'éditeur de **filtre avancé**. Celui-ci affiche la [[Syntaxe des Bases|syntaxe]] brute du filtre et peut être utilisé avec des [[Fonctions|fonctions]] plus complexes qui ne peuvent pas être représentées via l'interface pointer-cliquer.

## Trier et regrouper les résultats

Ouvrez le menu ![[lucide-arrow-up-down.svg#icon]] **Trier** pour trier et regrouper les résultats d'une vue.

Vous pouvez organiser les résultats par une ou plusieurs propriétés en ordre croissant ou décroissant. Cela facilite le classement des notes par nom, date de dernière modification ou toute autre propriété — y compris les formules.

Vous pouvez également regrouper les résultats par propriété pour organiser les éléments similaires en sections visuellement distinctes. Actuellement, Obsidian prend en charge le regroupement par une seule propriété.

### Ajouter un tri

1. Ouvrez le menu ![[lucide-arrow-up-down.svg#icon]] **Trier** en haut de la vue.
2. Choisissez la propriété par laquelle vous souhaitez trier (ou regrouper).
3. Si vous avez plusieurs tris, glissez-les vers le haut ou le bas à l'aide de la poignée ![[lucide-grip-vertical.svg#icon]] pour modifier leur priorité.

Les options d'ordonnancement des résultats dépendent du type de propriété :

- **Texte** : tri *alphabétique* (A→Z) ou en *ordre alphabétique inverse* (Z→A).
- **Nombre** : tri du *plus petit au plus grand* (0→1) ou du *plus grand au plus petit* (1→0).
- **Date et heure** : tri de l'*ancien au récent* ou du *récent à l'ancien*.

### Supprimer un tri

1. Ouvrez le menu ![[lucide-arrow-up-down.svg#icon]] **Trier** en haut de la vue.
2. Cliquez sur le bouton corbeille ![[lucide-trash-2.svg#icon]] à côté du tri ou du regroupement que vous souhaitez supprimer.

## Limiter, copier et exporter les résultats

### Limiter les résultats

Le menu *résultats* affiche le nombre de résultats dans la vue. Cliquez sur le bouton résultats pour limiter le nombre de résultats et accéder à des actions supplémentaires.

### Copier dans le presse-papiers

Cette action copie la vue dans votre presse-papiers. Une fois dans votre presse-papiers, vous pouvez la coller dans un fichier Markdown ou dans d'autres applications de documents, y compris des tableurs comme Google Sheets, Excel et Numbers.

### Exporter en CSV

Cette action enregistre un fichier CSV de votre vue actuelle.

## Intégrer une vue

Vous pouvez intégrer des fichiers de base dans [[Incorporer des fichiers|n'importe quel autre fichier]] en utilisant la syntaxe `![[Fichier.base]]`. La première vue de la liste sera utilisée. Vous pouvez modifier l'ordre en glissant les vues dans le menu des vues.

Pour spécifier la vue par défaut d'une intégration, utilisez `![[Fichier.base#Vue]]`.
