---
permalink: links
cssclasses:
  - soft-embed
description: >-
  Apprenez à créer des liens vers des notes, des pièces jointes et d'autres
  fichiers depuis vos notes, à l'aide de liens internes.
publish: true
mobile: true
aliases:
  - How to/Liens internes
  - Internal links
localized: '2026-03-18'
---
Apprenez à créer des liens vers des notes, des pièces jointes et d'autres fichiers depuis vos notes, à l'aide de _liens internes_. En liant vos notes, vous pouvez créer un réseau de connaissances. ^b15695

Obsidian peut mettre à jour automatiquement les liens internes dans votre coffre lorsque vous renommez un fichier. Si vous préférez être invité à confirmer, vous pouvez désactiver cette option dans :

**[[Paramètres]]** → **[[Paramètres#Fichiers et liens|Fichiers et liens]]** → **[[Paramètres#Mettre à jour automatiquement les liens internes|Mettre à jour automatiquement les liens internes]]**.

## Formats pris en charge pour les liens internes

Obsidian prend en charge les formats de liens suivants :

- Lien wiki : `[[Three laws of motion]]` ou `[[Three laws of motion.md]]`
- Markdown : `[Three laws of motion](Three%20laws%20of%20motion)` ou `[Three laws of motion](Three%20laws%20of%20motion.md)`

Les exemples ci-dessus sont équivalents ; ils s'affichent de la même manière dans l'éditeur et pointent vers la même note.

> [!note] Note
> Lorsque vous utilisez le format Markdown, assurez-vous d'[encoder l'URL](https://fr.wikipedia.org/wiki/Encodage-pourcent) de la destination du lien. Par exemple, les espaces deviennent `%20`.

Par défaut, en raison de son format plus compact, Obsidian génère des liens au format lien wiki. Si l'interopérabilité est importante pour vous, vous pouvez désactiver les liens wiki et utiliser des liens Markdown à la place.

Pour utiliser le format Markdown :

1. Ouvrez les **[[Paramètres]]**.
2. Sous **Fichiers et liens**, désactivez **Utiliser les \[\[liens wiki\]\]**.

Même si vous désactivez le format lien wiki, vous pouvez toujours compléter automatiquement les liens en tapant deux crochets `[[`. Lorsque vous sélectionnez l'un des fichiers suggérés, Obsidian génère alors un lien Markdown.

> [!note] Caractères invalides
> Une chaîne contenant les caractères suivants pourrait ne pas fonctionner comme lien : `# | ^ : %% [[ ]]`.
> 
> Nous recommandons d'éviter ces caractères et de suivre les [bonnes pratiques de nommage de fichiers](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Lier un fichier

Pour créer un lien en mode édition, utilisez l'une des méthodes suivantes :

- Tapez `[[` dans l'éditeur, puis sélectionnez le fichier vers lequel vous souhaitez créer un lien.
- Sélectionnez du texte dans l'éditeur, puis tapez `[[`.
- Ouvrez la [[Palette de commandes]] puis sélectionnez Ajouter un lien interne.

![[Sélecteur rapide#^search-autocomplete-large]]

Bien que vous puissiez lier vers n'importe lequel des [[Formats de fichiers acceptés]], les liens vers des formats de fichiers autres que Markdown doivent inclure une extension de fichier, comme `[[Figure 1.png]]`.

> [!tip] Préfixer un lien interne avec un point d'exclamation (!) vous permet d'intégrer le contenu lié. Pour plus de détails, voir [[Incorporer des fichiers]].

> [!info] Fichiers exclus
> Les fichiers correspondant à vos motifs de [[Paramètres#Fichiers exclus|Fichiers exclus]] sont déprioritisés dans les suggestions de liens lors de la création de liens internes.

## Lier un entête dans une note

Vous pouvez lier des entêtes spécifiques dans des notes, également connus sous le nom de _liens d'ancrage_.

**Lier un entête dans la même note**

Pour lier un entête dans la même note, tapez `[[#` pour obtenir la liste des entêtes de la note vers lesquels créer un lien.

Par exemple, `[[#Prévisualiser un fichier lié]]` créera un lien vers [[#Prévisualiser un fichier lié]].

**Lier un entête dans une autre note**

Pour lier un entête dans une autre note, ajoutez un dièse (`#`) à la fin de la destination du lien, suivi du texte de l'entête.

Par exemple, `[[À propos d'Obsidian#Les liens sont des citoyens de première classe]]` créera un lien vers [[À propos d'Obsidian#Les liens sont des citoyens de première classe]].

**Lier des sous-entêtes**

Vous pouvez ajouter plusieurs symboles dièse pour chaque sous-entête.

Par exemple, `[[Aide et support#Questions et conseils#Signaler des bugs et demander des fonctionnalités]]` créera un lien vers [[Aide et support#Questions et conseils#Signaler des bugs et demander des fonctionnalités]].

**Rechercher des entêtes dans tout le coffre**

Pour rechercher des entêtes dans l'ensemble du coffre, utilisez la syntaxe `[[## entête]]`.

Par exemple, `[[##` recherchera de manière générique dans tout le coffre, tandis que `[[## équipe]]` recherchera tous les entêtes contenant le mot _équipe_.

> [!info]- Capture d'écran de la recherche d'un lien d'entête
>
> ![[internal-links-header.png#interface]]

## Lier un bloc dans une note

Un bloc est une unité de texte dans votre note, comme un paragraphe, un bloc de citation ou un élément de liste.

Vous pouvez lier un bloc en ajoutant `#^` à la fin de la destination de votre lien, suivi d'un identifiant de bloc unique. Par exemple : `[[2023-01-01#^37066d]]`. Heureusement, vous n'avez pas besoin de trouver manuellement l'identifiant — lorsque vous tapez l'accent circonflexe (`^`), une liste de suggestions apparaît, vous permettant de sélectionner le bon bloc.

Pour les *paragraphes simples*, placez un espace suivi d'un accent circonflexe `^` et de l'identifiant de bloc à la fin de la ligne :

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Pour les *blocs structurés* (listes, citations, encadrés, tableaux), l'identifiant de bloc doit être sur une ligne séparée, avec une ligne vide avant et après :

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Pour les *lignes spécifiques dans une liste*, l'identifiant de bloc peut être placé directement sur une puce :

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Nous ne prenons pas en charge les liens vers des parties spécifiques de citations, encadrés et tableaux.

**Rechercher des blocs dans tout le coffre**

Vous pouvez également rechercher des blocs à lier dans l'ensemble de votre coffre en utilisant la syntaxe `[[^^bloc]]`. Cependant, davantage d'éléments sont considérés comme des blocs par rapport aux [[#Lier un entête dans une note|liens d'entête]], cette liste sera donc beaucoup plus longue.

> [!info]- Capture d'écran de la recherche d'un lien de bloc
> ![[link-block-heading.png#interface]]

Vous pouvez également créer des identifiants de bloc lisibles en ajoutant un espace suivi d'un accent circonflexe (`^`) et de l'identifiant. Les identifiants de bloc ne peuvent contenir que des lettres latines, des chiffres et des tirets.

Par exemple, ajoutez `^quote-of-the-day` à la fin d'un bloc :

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Vous pouvez maintenant lier ce bloc en tapant `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interopérabilité
> Les références de bloc sont spécifiques à Obsidian et ne font pas partie du format Markdown standard. Les liens contenant des références de bloc ne fonctionneront pas en dehors d'Obsidian.

## Modifier le texte d'affichage du lien

Par défaut, Obsidian affiche le texte du lien tel qu'il apparaît. Par exemple :
- `[[Exemple]]` s'affiche comme [[Exemple]]
- `[[Exemple#Détails]]` s'affiche comme [[Exemple#Détails]]

Vous pouvez modifier l'affichage d'un lien en personnalisant son texte d'affichage :

**Format lien wiki** :
Utilisez une barre verticale (`|`) pour modifier le texte d'affichage.

- `[[Exemple|Nom personnalisé]]` apparaît comme [[Exemple|Nom personnalisé]]
- `[[Exemple#Détails|Nom de section]]` apparaît comme [[Exemple#Détails|Nom de section]]

**Format Markdown** :
Utilisez `[Texte d'affichage](URL du lien)` pour personnaliser l'apparence du lien.

- `[Nom personnalisé](Exemple.md)` apparaît comme [Nom personnalisé](Exemple.md)
- `[Nom de section](Exemple.md#Détails)` apparaît comme [Nom de section](Exemple.md#Détails)

Cette méthode est utile dans les situations ponctuelles où vous souhaitez modifier l'apparence d'un lien dans un contexte spécifique. Si vous souhaitez définir un nom de lien alternatif réutilisable dans tout votre coffre, envisagez d'utiliser un [[Alias|alias]] à la place.

Par exemple, si vous faites régulièrement référence à `[[Three laws of motion]]` sous le nom `[[The 3 laws]]`, ajouter « 3 laws » comme alias vous permet de taper simplement cela — sans avoir besoin d'ajouter un texte d'affichage personnalisé à chaque fois.

> [!tip] Astuce
> Utilisez le [[#Modifier le texte d'affichage du lien|texte d'affichage du lien]] lorsque vous souhaitez personnaliser l'apparence d'un lien *à un endroit précis*.
> 
> Utilisez les [[Alias|alias]] lorsque vous souhaitez faire référence à la même note en utilisant *différents noms* dans tout votre coffre.
^callout-internal-links-link-text

## Prévisualiser un fichier lié

> [!note] Note
> Pour prévisualiser les fichiers liés, vous devez d'abord activer l'[[Aperçu de page]].

Pour prévisualiser un fichier lié, survolez un lien interne. En mode édition, appuyez sur `Ctrl` (ou `Cmd` sur macOS) tout en survolant le lien avec le curseur. Un aperçu du contenu du fichier apparaît à côté du curseur.
