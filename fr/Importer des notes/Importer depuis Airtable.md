---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Obsidian vous permet de migrer vos données depuis Airtable en utilisant le [[Importer|plugin Importer]]. Cela convertit vos bases Airtable en fichiers Markdown durables que vous pouvez utiliser hors ligne avec Obsidian et de nombreuses autres applications.

Chaque table devient un dossier de notes avec une note par enregistrement, ainsi qu'un fichier [[Introduction aux Bases|Base]] qui recrée la table et ses vues. Comme il utilise l'API Airtable, l'importation nécessite un jeton d'accès personnel et une connexion internet.

## Créer un jeton d'accès personnel Airtable

Pour accéder à vos données Airtable via l'API, vous avez besoin d'un jeton d'accès personnel. Cette étape prend environ deux minutes.

Le jeton est une longue chaîne de chiffres et de lettres commençant généralement par `pat...` qui vous permettra de télécharger vos données depuis Airtable.

1. Connectez-vous à Airtable et rendez-vous sur la page [Personal access tokens](https://airtable.com/create/tokens) dans les paramètres de votre compte.
2. Choisissez **Create new token**.
3. Donnez un nom à votre jeton, par exemple « Obsidian ». N'importe quel nom peut être utilisé.
4. Sous **Scopes**, ajoutez `data.records:read` et `schema.bases:read`.
5. Sous **Access**, ajoutez les bases que vous souhaitez importer, ou choisissez toutes les bases d'un espace de travail.
6. Choisissez **Create token**, puis **Copy** pour copier le jeton.
7. Enregistrez le jeton dans un endroit sûr comme votre gestionnaire de mots de passe.

Airtable n'affiche le jeton qu'une seule fois. Si vous le perdez, créez-en un nouveau.

## Importer vos données Airtable

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **File format**, sélectionnez **Airtable**.
6. Sous **Airtable Personal Access Token**, cliquez sur **Lier...** pour ajouter un nouveau secret. Pour l'**id**, donnez-lui un nom comme `airtable`, et pour le **Secret**, collez votre jeton d'accès personnel.
7. Cliquez sur **Charger** pour parcourir vos bases, puis sélectionnez les tables que vous souhaitez importer.
8. Vérifiez et modifiez les options d'importation.
9. Sélectionnez **Import** pour configurer comment vos champs seront convertis en notes avec des [[Propriétés|propriétés]].
10. Sélectionnez **Continuer** pour examiner le modèle généré et prévisualiser des exemples de vos enregistrements.
11. Sélectionnez **Import** et attendez que l'importation soit terminée.

## Options d'importation

- **Convert formulas** — choisissez si les champs de formule, de recherche (lookup), de cumul (rollup) et de comptage sont réécrits en [[Formules|formules Bases]], avec repli sur la valeur calculée par Airtable lorsqu'il n'y a pas d'équivalent, ou importés uniquement en tant que valeurs statiques.
- **Télécharger les pièces jointes** — enregistre les fichiers joints dans votre coffre, en utilisant vos paramètres de dossier de pièces jointes et de format de lien. Lorsque cette option est désactivée, ou lorsqu'un téléchargement échoue, la note renvoie vers l'URL du fichier sur Airtable.
- **View property name** — la propriété qui enregistre à quelles vues Airtable un enregistrement appartient. Chaque vue dans la Base générée filtre sur cette propriété. Par défaut : `Views`.
- **Save Airtable record ID** — ajoute une propriété `airtable-id` afin que les importations futures puissent reconnaître les enregistrements après que leurs notes ont été déplacées ou renommées.

## Configurer comment les champs Airtable sont importés

Dans l'étape de configuration des champs, vous pouvez choisir comment chaque champ est importé.

Par défaut, chaque champ Airtable devient une propriété. Vous pouvez renommer ou supprimer des propriétés et modifier leurs valeurs avant de passer à l'aperçu du modèle.

Le champ principal de chaque table fournit le nom de note par défaut. Vous pouvez modifier le modèle de nom de note depuis l'étape d'aperçu. Les enregistrements sont toujours placés dans un dossier portant le nom de leur table.

Consultez [[Modèles de l'importateur]] pour personnaliser le Markdown généré.

## Ce qui est importé

Pour une base nommée `Projects` avec une table `Tasks`, l'importateur crée :

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Une note par enregistrement, avec le champ principal comme titre de la note et les autres champs de l'enregistrement comme [[Propriétés|propriétés]].
- Un fichier `.base` par table, avec chaque vue Airtable associée à une [[Vues|vue Bases]] :
	- **Grid** devient un [[Tableau]].
	- **Gallery** devient une [[Galerie]].
	- **List** devient une [[Liste]].
	- Tous les autres types de vues sont convertis en vue tableau.
- Les types de champs Airtable sont associés aux types de propriétés Obsidian, sans écraser les types que vous avez déjà définis.
- Les enregistrements liés deviennent des liens vers les notes correspondantes.
- Les pièces jointes sont téléchargées dans votre coffre en utilisant les paramètres de votre coffre.


## Limitations

En raison des limites de débit de l'API Airtable, l'importation de bases volumineuses peut prendre un temps considérable. Veuillez patienter.

En raison des limitations de l'API Airtable, certaines données ne sont pas disponibles ou ne peuvent pas être converties :

- Les valeurs de cumul (rollup) ne sont pas importées. L'API n'expose pas l'agrégation utilisée pour la valeur calculée d'un rollup, seul le nom de la propriété est donc écrit, accompagné d'une formule Bases lorsque le schéma du champ expose une expression.
- Les formules utilisant des fonctions pour lesquelles Obsidian n'a pas d'équivalent, telles que `SWITCH`, `FIND`, `REGEX_EXTRACT` et `SQRT`, utilisent la valeur statique d'Airtable comme repli.
- Seules les vues grille, galerie et liste sont importées. Les autres types de vues, tels que calendrier, kanban, chronologie et Gantt, sont ignorés.
- Les liens vers des enregistrements dans des tables que vous n'avez pas sélectionnées deviennent le titre en texte brut de l'enregistrement plutôt qu'un lien.
- Les conceptions d'interfaces, les automatisations, les commentaires et l'historique des révisions ne sont pas importés.

## Résolution de problèmes

Si vous rencontrez des problèmes lors de la conversion, [soumettez un rapport de bogue](https://github.com/obsidianmd/obsidian-importer/issues) afin que nous puissions l'améliorer.
