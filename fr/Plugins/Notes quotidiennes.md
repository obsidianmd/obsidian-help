---
permalink: plugins/daily-notes
aliases:
  - Plugins/Modules principaux/Notes quotidiennes
  - Daily notes
localized: '2026-03-18'
---
Notes quotidiennes est un [[Modules principaux|module principal]] qui ouvre une note basée sur la date du jour, ou la crée si elle n'existe pas. Utilisez les notes quotidiennes pour créer des journaux, des listes de tâches ou des relevés quotidiens de vos découvertes de la journée.

Pour ouvrir la note quotidienne du jour, vous pouvez :

- Cliquer sur **Ouvrir la note quotidienne** ( ![[lucide-calendar.svg#icon]] ) dans le [[Ruban|ruban]].
- Exécuter **Ouvrir la note quotidienne** depuis la [[Palette de commandes]].
- [[Raccourcis clavier#Définir des raccourcis clavier|Utiliser un raccourci clavier]] pour la commande **Ouvrir la note quotidienne**.

Par défaut, Obsidian crée une nouvelle note vide nommée d'après la date du jour au format AAAA-MM-JJ.

> [!tip] Si vous préférez que vos notes quotidiennes soient dans un dossier séparé, vous pouvez définir l'<u>emplacement des nouveaux fichiers</u> dans les options du module pour changer l'endroit où Obsidian crée les nouvelles notes quotidiennes.

> [!example]- Sous-dossiers automatiques
> Vous pouvez organiser automatiquement vos notes quotidiennes dans des dossiers en utilisant la fonctionnalité **Format de date**.
> 
> Par exemple, si vous définissez le format de date comme `YYYY/MMMM/YYYY-MMM-DD`, vos notes seront créées sous la forme `2023/January/2023-Jan-01`. 
> 
> Vous pouvez explorer davantage d'options de formatage sur le site de documentation de [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Créer une note quotidienne à partir d'un modèle

Si vos notes quotidiennes ont la même structure, vous pouvez utiliser un [[Plugins/Modèles|modèle]] pour ajouter du contenu prédéfini à vos notes quotidiennes lors de leur création.

1. Créez une nouvelle note nommée « Modèle quotidien » avec le texte suivant (ou tout ce qui vous convient !) :

   ```md
   # {{date:YYYY-MM-DD}}

   ## Tâches

   - [ ]
   ```

2. Ouvrez les **[[Paramètres]]**.
3. Dans la barre latérale, cliquez sur **Notes quotidiennes** sous **Options des modules**.
4. Dans le champ texte à côté de **Emplacement du fichier modèle**, sélectionnez la note « Modèle quotidien ».

Obsidian utilisera le modèle la prochaine fois que vous créerez une nouvelle note quotidienne.

## Notes quotidiennes et propriétés

Lorsque le module Notes quotidiennes est activé et qu'une propriété de date est présente dans une note, Obsidian tentera automatiquement de générer un lien vers la note quotidienne correspondant à ce jour spécifique. Par exemple, si une note intitulée `example.md` contient une propriété de date comme `2023-01-01`, cette date se transformera en lien cliquable dans la section d'[[Vues et mode d'édition#Aperçu en direct|aperçu en direct]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
