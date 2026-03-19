---
permalink: bases/views/table
localized: '2026-03-18'

---
Le tableau est un type de [[Vues|vue]] que vous pouvez utiliser dans les [[Introduction aux Bases|Bases]].

Sélectionnez ![[lucide-table.svg#icon]]  **Tableau** dans le menu des vues pour afficher les fichiers sous forme de tableau avec une ligne par fichier, et des colonnes pour les [[Propriétés]] de ce fichier.

![Exemple d'une base montrant une vue tableau avec une liste de livres](bases-noshadow.png#interface)

## Paramètres

Les paramètres de la vue tableau peuvent être configurés dans les [[Vues#Paramètres de vue|Paramètres de vue]].

### Hauteur des lignes

La hauteur des lignes vous permet d'afficher plus d'informations. Choisissez entre **court**, **moyen**, **grand** et **très grand**.

## Résumés

Vous pouvez ajouter des résumés à une colonne de tableau pour calculer rapidement des valeurs comme des totaux, des moyennes ou des décomptes pour les lignes actuellement visibles dans la vue.

Les résumés sont liés à la vue, pas à la base. Chaque vue peut afficher des résumés différents pour la même colonne.

### Ajouter un résumé

1. Faites un clic droit sur l'en-tête de colonne dans une vue tableau.
2. Sélectionnez ![[lucide-calculator.svg#icon]] **Résumer…**.
3. Choisissez l'une des fonctions de résumé intégrées, ou sélectionnez ![[lucide-square-function.svg#icon]] **Ajouter un résumé** pour définir le vôtre.

Le résumé apparaît en bas de la colonne. Lorsque les résultats sont [[Vues#Trier et regrouper les résultats|regroupés]], le résumé de chaque groupe est affiché en haut du groupe.

Une fois la barre de résumé ajoutée, vous pouvez ajouter d'autres résumés pour d'autres colonnes en cliquant sur la cellule de résumé. La barre de résumé est masquée si tous les résumés sont supprimés.

### Résumés intégrés

Les résumés suivants sont disponibles par défaut. Les options peuvent varier selon le type de propriété.

#### Tous les types de propriétés

- **Vide** : nombre de lignes sans valeur.
- **Rempli** : nombre de lignes avec une valeur.
- **Unique** : nombre de valeurs distinctes.

#### Nombres

- **Moyenne** : moyenne de toutes les valeurs numériques.
- **Max** : plus grande valeur.
- **Médiane** : valeur médiane.
- **Min** : plus petite valeur.
- **Étendue** : différence entre le max et le min.
- **Écart-type** : écart-type.
- **Somme** : total de toutes les valeurs.

#### Dates

- **Plus ancienne** : la date la plus petite/ancienne.
- **Plus récente** : la date la plus grande/récente.
- **Étendue** : différence entre la plus ancienne et la plus récente.

#### Case à cocher

- **Cochées** : nombre de lignes où la case à cocher est activée.
- **Non cochées** : nombre de lignes où la case à cocher est désactivée.

### Résumés personnalisés

Vous pouvez définir votre propre résumé à l'aide d'une formule :

1. Dans le menu ![[lucide-calculator.svg#icon]] **Résumer…**, choisissez ![[lucide-square-function.svg#icon]] **Ajouter un résumé**.
2. Donnez un nom au résumé.
3. Saisissez une formule. La formule s'exécute sur la liste des valeurs de cette colonne (par exemple, en utilisant une [[Fonctions|fonction]] comme `values.reduce(...)`).
4. Enregistrez le résumé.

Les résumés personnalisés sont utiles lorsque vous avez besoin d'un calcul qui n'est pas couvert par les options intégrées.

## Raccourcis

Vous pouvez vous déplacer rapidement dans une vue tableau en utilisant les raccourcis souris et [[Raccourcis d'édition|clavier]] suivants.

- Maj-clic crée une sélection de cellules.
- Faites un clic droit sur une sélection de cellules pour accéder à des actions supplémentaires pour ces fichiers.

| Action                                                                                                                                                           | Raccourci            | macOS               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| Copier les cellules sélectionnées                                                                                                                                | `Ctrl+C`             | `Cmd+C`             |
| Coller les cellules sélectionnées                                                                                                                                | `Ctrl+V`             | `Cmd+V`             |
| Annuler les modifications des propriétés                                                                                                                         | `Ctrl+Z`             | `Cmd+Z`             |
| Rétablir les modifications des propriétés                                                                                                                        | `Ctrl+Maj+Z`        | `Cmd+Maj+Z`        |
| Sélectionner toutes les cellules du groupe actuel                                                                                                                | `Ctrl+A`             | `Cmd+A`             |
| Sélectionner toutes les cellules dans une direction donnée                                                                                                       | `Ctrl+Maj+Flèche`   | `Ctrl+Maj+Flèche`  |
| Sélectionner la colonne                                                                                                                                          | `Ctrl+Espace`        |                     |
| Sélectionner la ligne                                                                                                                                            | `Maj+Espace`         |                     |
| Activer la cellule actuelle — pour les cases à cocher, cela bascule la case, pour les formules, cela ouvre l'éditeur de formules                                | `Entrée`             |                     |
| Aller à la première colonne                                                                                                                                      | `Début`              |                     |
| Aller à la dernière colonne                                                                                                                                      | `Fin`                |                     |
| Naviguer vers le haut et le bas par hauteur de page                                                                                                              | `PageHaut`,`PageBas` |                     |
| Effacer la sélection de cellules actuelle                                                                                                                        | `Échap`              |                     |
| Effacer les cellules actuelles                                                                                                                                   | `Retour arrière`     |                     |
| Aller à la cellule suivante                                                                                                                                      | `Tab`                |                     |
| Aller à la cellule précédente                                                                                                                                    | `Maj-Tab`            |                     |
