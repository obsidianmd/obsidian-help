---
permalink: style-guide
description: >-
  Cette page explique le guide de style pour la rédaction de notre documentation
  d'assistance.
publish: true
mobile: true
localized: '2026-03-18'

---
La documentation d'Obsidian suit les directives de style listées sur cette page. Ces directives sont basées sur les meilleures pratiques de l'industrie, en particulier le [guide de style de documentation pour développeurs de Google](<https://developers.google.com/style>) et le [guide de style de Microsoft](https://learn.microsoft.com/en-us/style-guide/). Pour les cas particuliers non couverts ci-dessous, consultez ces guides externes comme références secondaires.

> [!tip]- Contribuer
> La majeure partie de la documentation existait avant ce guide de style.
> 
> Si vous trouvez des violations de ce guide de style, veuillez [créer un ticket](https://github.com/obsidianmd/obsidian-docs/issues/new) et soumettre une pull request à [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologie et grammaire

### Style linguistique

Pour notre documentation en anglais, il est recommandé d'utiliser l'[anglais international](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) pour mieux servir notre audience mondiale et faciliter les [[#Traductions]]. Cela signifie :

- Éviter les expressions idiomatiques et culturellement spécifiques
- Utiliser la voix active et des constructions de phrases directes
- Préférer des mots simples et courants plutôt qu'une terminologie complexe
- Être explicite plutôt qu'implicite
- Pour les conventions orthographiques, utiliser l'anglais américain (par ex., 'organize' et non 'organise').

### Termes

- Préférer « raccourci clavier » plutôt que « hotkey ». Utiliser Raccourci clavier lorsqu'on fait référence à la fonctionnalité spécifique.
- Préférer « l'application Obsidian » sur mobile, et « l'application Obsidian » sur bureau.
- Préférer « sync » ou « synchronisation » plutôt que « synchroniser » lorsqu'on désigne le processus.
- Préférer « terme de recherche » plutôt que « requête de recherche ».
- Préférer « entête » plutôt que « en-tête » lorsqu'on fait référence à un texte qui introduit une section.
- Préférer « maximum » plutôt que « max » et « minimum » plutôt que « min ».

### Noms de produits

Les noms de produits Obsidian commencent par « Obsidian », par exemple « Obsidian Publish » et « Obsidian Sync ».

Si un paragraphe devient trop répétitif, vous pouvez utiliser la forme courte dans les références suivantes.

Par exemple :

_Pour permettre une configuration spécifique à chaque appareil, Obsidian Sync ne synchronise pas ses propres paramètres. Vous devez configurer Sync pour chacun de vos appareils._

### Interface utilisateur et interactions

- Utiliser le **gras** pour indiquer le texte des boutons.
- Préférer « sélectionnez » plutôt que « appuyez sur » ou « cliquez sur ».
	- Pour les instructions spécifiques au mobile, « appuyez sur » est acceptable pour décrire les interactions tactiles car « cliquez » n'est pas disponible.
- Préférer « barre latérale » plutôt que « barre de côté ».
- Préférer « exécutez » plutôt que « invoquez » lorsqu'on fait référence à des commandes ou des actions.

Lorsqu'on fait référence à plusieurs interactions d'interface dans une séquence, utilisez le symbole → (U+2192). Par exemple, « **[[Paramètres]] → Modules complémentaires** ».

### Notes, fichiers et dossiers

- Utilisez « note » lorsque vous faites référence à un fichier Markdown dans le coffre.
- Utilisez « fichier » lorsque vous faites référence à d'autres extensions de fichiers que Markdown.
- Préférer « nom de la note » plutôt que « titre de la note ».
- Préférer « note active » plutôt que « note actuelle ».
- Préférer « dossier » plutôt que « répertoire ».
- Préférer « type de fichier » plutôt que « format de fichier », sauf si vous faites spécifiquement référence au format de données du contenu du fichier.

Lorsque vous naviguez entre les notes, utilisez « ouvrir » si la destination est masquée, et « basculer » si la note source et la note de destination sont toutes deux ouvertes dans des panneaux séparés.

### Documentation de référence pour les paramètres

Dans la mesure du possible, tout paramètre devrait être documenté dans Obsidian à l'aide d'un texte descriptif. Évitez de documenter un paramètre spécifique dans l'aide d'Obsidian sauf si :

- Il nécessite des connaissances plus approfondies sur comment et quand l'utiliser.
- Il est couramment mal utilisé ou fait l'objet de questions fréquentes.
- Il modifie _radicalement_ l'expérience utilisateur.

Envisagez d'utiliser un encadré de type astuce si vous souhaitez attirer l'attention sur un paramètre spécifique.

### Termes directionnels

Utilisez un trait d'union pour les termes directionnels lorsqu'ils sont utilisés comme adjectifs. Évitez le trait d'union lorsque la direction est utilisée comme nom.

**Recommandé :**

- Sélectionnez **[[Paramètres]]** dans le coin inférieur gauche.
- Sélectionnez **[[Paramètres]]** en bas à gauche.

**Non recommandé :**

- Sélectionnez **[[Paramètres]]** dans le coin inférieur-gauche.
- Sélectionnez **[[Paramètres]]** dans l'inférieur gauche.

Préférer « supérieur gauche » et « supérieur droit » plutôt que « haut gauche » et « haut droit ».

N'indiquez pas de direction lorsque vous faites référence aux paramètres. L'emplacement du contrôle des paramètres dépend de l'appareil.

**Recommandé :**

- À côté de **Choisir le coffre distant**, sélectionnez **Choisir**.

**Non recommandé :**

- À droite de **Choisir le coffre distant**, sélectionnez **Choisir**.

Lorsque vous décrivez une direction verticale dans les éléments d'interface, utilisez « au-dessus » et « en dessous » pour les relations spatiales. Évitez « en haut » et « en bas » car ils sont ambigus dans différents contextes.

**Recommandé :**

- La barre de recherche apparaît au-dessus de la liste des fichiers.
- Des options supplémentaires sont disponibles en dessous.

**Non recommandé :**

- La barre de recherche est en haut de la liste des fichiers.
- Plus d'options sont en bas.

### Instructions

Utilisez l'impératif pour les noms de guides, les entêtes de sections et les instructions pas à pas. L'impératif est concis et orienté vers l'action, ce qui est plus direct pour les utilisateurs qui suivent des instructions.

- Préférer « Configurer » plutôt que « Configuration de »
- Préférer « Déplacer un fichier » plutôt que « Déplacement d'un fichier »
- Préférer « Importer vos notes » plutôt que « Importation de vos notes »

### Casse de phrase

Préférer la *casse de phrase* plutôt que la *casse de titre* pour les entêtes, boutons et titres. Lorsque vous faites référence à des éléments d'interface, respectez toujours la casse du texte dans l'interface.

**Recommandé :**

- Comment Obsidian stocke les données

**Non recommandé :**

- Comment Obsidian Stocke Les Données

### Exemples

Préférer des exemples réalistes plutôt que des termes absurdes.

**Recommandé :**

- `task:(appeler OR planifier)`

**Non recommandé :**

- `task:(foo OR bar)`

### Noms de touches et raccourcis clavier

Lorsque vous faites référence aux touches du clavier et aux raccourcis, utilisez une notation cohérente.

**Noms de touches individuelles :**

Lorsque vous faites référence à un caractère du clavier par son nom, ajoutez le caractère entre parenthèses juste après le nom.

**Recommandé :**

- Appuyez sur la touche tiret (-) pour ajouter un tiret.
- Utilisez le point d'interrogation (?) pour rechercher.

**Non recommandé :**

- Appuyez sur la touche tiret pour ajouter un tiret.
- Utilisez le ? pour rechercher.
- Ajoutez un `-` devant le mot.

**Raccourcis clavier :**

Formatez les raccourcis clavier sans espaces autour du signe plus. Lorsqu'un raccourci diffère entre les systèmes d'exploitation, précisez les deux.

**Recommandé :**

- Appuyez sur `Ctrl+Z` (Windows) ou `Command+Z` (macOS) pour annuler.
- Appuyez sur `Escape` pour fermer cette fenêtre.
- Utilisez `Tab` pour naviguer entre les champs.

**Non recommandé :**

- Appuyez sur `Cmd+Z` pour annuler.
- Appuyez sur `Ctrl + Z` (avec des espaces) pour annuler.
- Appuyez sur `Ctrl/Cmd+Z` pour annuler.

Pour les raccourcis identiques sur toutes les plateformes, il n'est pas nécessaire de préciser le système d'exploitation. Si vous n'êtes pas sûr qu'un raccourci diffère selon la plateforme, précisez le système d'exploitation par précaution. Windows et Linux utilisent généralement les mêmes raccourcis.

### Markdown

Utilisez des sauts de ligne entre les blocs Markdown :

**Recommandé :**

```md
# Entête 1

Ceci est une section.

1. Premier élément
2. Deuxième élément
3. Troisième élément
```

**Non recommandé :**

```md
# Entête 1
Ceci est une section.
1. Premier élément
2. Deuxième élément
3. Troisième élément
```

**Tirets cadratins dans les listes :**

Utilisez des tirets cadratins (—) pour séparer les termes en gras de leurs descriptions dans les listes à puces. N'utilisez pas de tirets cadratins dans les listes imbriquées simples avec des liens.

**Recommandé :**

- **Menu d'affichage** — créer, modifier et changer de vue.
- **Calculer des valeurs** — ajouter des prix, calculer des totaux ou effectuer des opérations mathématiques.

**Non recommandé :**

- [[Créer une base]] — Apprenez à créer et intégrer une base.

### Images

Utilisez « **largeur** x **hauteur** pixels » pour décrire les dimensions d'images ou d'écrans.

**Exemple :**

Dimensions d'image recommandées : 1920 x 1080 pixels.

## Structure de l'information

### Types d'encadrés

Utilisez les encadrés de manière stratégique pour mettre en évidence des types d'informations spécifiques :

**Astuce** (`[!tip]-`) - Conseils pratiques ou bonnes pratiques qui améliorent le flux de travail de l'utilisateur. À utiliser pour les raccourcis, les solutions de contournement ou les informations utiles mais non essentielles. Ces encadrés sont repliés par défaut.

**Info** (`[!info]+`) - Contexte supplémentaire, informations de fond ou clarifications. À utiliser lorsque l'information ajoute de la compréhension mais n'est pas nécessaire pour accomplir une tâche. Ces encadrés sont dépliés par défaut.

**Avertissement** (`[!warning]+`) - Mises en garde importantes qui préviennent la perte de données, les erreurs ou les conséquences non souhaitées. À utiliser avec parcimonie pour les situations véritablement risquées. Ces encadrés ne doivent jamais être repliés.

**Exemple** (`[!example]-`) - Remarques générales ou détails complémentaires. À utiliser pour les informations tangentielles que certains utilisateurs pourraient trouver pertinentes. Ces encadrés sont repliés par défaut.

**Exemples :**
```md
> [!tip]- Utiliser les raccourcis clavier
> Vous pouvez accélérer votre flux de travail en mémorisant les raccourcis les plus utilisés.

> [!info]+ Ceci est un module payant
> Cette fonctionnalité nécessite un abonnement payant pour être utilisée.

> [!warning]+ Cette action est irréversible
> La suppression d'un coffre est permanente. Pensez d'abord à exporter vos notes.

> [!example]- Utilisation avancée
> Vous pouvez également configurer ce paramètre via le menu du graphe.
```

### Listes vs. prose

Utilisez des listes lorsque vous présentez des éléments distincts qui n'ont pas de relations séquentielles ou causales fortes. Utilisez de la prose et des paragraphes lorsque les éléments s'appuient les uns sur les autres, nécessitent des explications ou bénéficient d'un flux narratif.

**Utilisez une liste pour :**
- Un ensemble de fonctionnalités sans rapport entre elles
- Les prérequis d'installation
- Les options de configuration
- Les étapes de dépannage

**Utilisez de la prose pour :**
- Les explications sur le fonctionnement de quelque chose
- Les flux de travail avec des dépendances
- Les aperçus conceptuels
- Les conseils nécessitant du contexte

### Tableaux

Utilisez des tableaux pour comparer des fonctionnalités, des versions ou des points de données associés où l'alignement facilite la compréhension. Évitez les tableaux pour les listes simples ou les données à une seule colonne.

**Bon cas d'utilisation :**

| Fonctionnalité | Mobile | Bureau |
|----------------|--------|--------|
| Sync | Oui | Oui |
| Modules | Non | Oui |
| Thèmes | Limité | Complet |

### Références croisées

Utilisez des liens wiki internes (`[[Nom de la note]]`) généreusement pour aider les utilisateurs à naviguer vers les sujets connexes. Cependant, évitez de créer trop de liens :

- Ne liez pas le même terme plusieurs fois sur une même page
- Créez un lien uniquement lorsque la page référencée fournit un contexte supplémentaire significatif
- Utilisez un texte de lien descriptif quand c'est utile : `[[Nom de la note#Section|texte descriptif]]`

**Exemple :**

Première mention : « Découvrez [[Introduction à Obsidian Sync|Obsidian Sync]] pour garder votre coffre à jour sur tous vos appareils. »
Mention ultérieure : « Vous pouvez configurer Sync pour chaque appareil séparément. »

### Contenu spécifique à une plateforme

Lorsque vous documentez des fonctionnalités qui diffèrent entre les plateformes, utilisez des entêtes de section pour organiser le contenu.

Utilisez `Bureau` et `Mobile` comme entêtes de sous-section pour séparer les instructions ou fonctionnalités spécifiques à chaque plateforme.

**Recommandé :**
```md
## Personnaliser le ruban

### Bureau

Sur la version bureau, vous pouvez personnaliser le ruban comme suit :

- Réorganisez l'ordre des actions du ruban en glissant-déposant les icônes.
- Pour masquer des actions spécifiques, faites un clic droit sur un espace vide et décochez les actions que vous souhaitez masquer.

### Mobile

Sur la version mobile, vous pouvez personnaliser le ruban via les paramètres :

1. Ouvrez les **[[Paramètres]]**.
2. Accédez à **Apparence**.
3. Sélectionnez **Gérer** sous **Menu du ruban**.
```

> [!info]+ Quand créer des sections ?
> Créez des sections séparées uniquement si le contenu diffère de manière significative. Si les instructions sont largement identiques avec des variations mineures, utilisez plutôt des notes en ligne.

## Icônes et images

Incluez des icônes et des images lorsqu'elles facilitent l'explication de choses difficiles à décrire avec des mots, ou lorsque vous devez montrer des parties importantes de l'application Obsidian. Vous pouvez enregistrer les images dans le dossier `Attachments`.

- L'image doit rendre le texte qu'elle accompagne plus facile à comprendre.

 **Exemple** : Une fois activé, le module [[Nombre de mots]] créera une nouvelle entrée dans votre barre d'état en bas de l'écran.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Les images doivent être au format `.png` ou `.svg`.
- Si une image semble trop grande dans la note, réduisez-la en dehors d'Obsidian, ou ajustez ses dimensions comme expliqué dans [[Incorporer des fichiers#Intégrer une image dans une note|l'intégration d'une image dans une note]].
- Dans de rares cas, vous pouvez placer des images particulièrement grandes ou complexes dans un [[Callouts#Encadrés pliables|encadré replié]].
- Pour les fenêtres pop-up ou les modales, l'image doit montrer l'intégralité de la fenêtre de l'application Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Icônes

Les icônes [Lucide](https://lucide.dev/icons/) et les icônes personnalisées d'Obsidian peuvent être utilisées aux côtés d'éléments détaillés pour fournir une représentation visuelle d'une fonctionnalité.

**Exemple :** Dans le ruban à gauche, sélectionnez **Créer un nouveau canvas** ( ![[lucide-layout-dashboard.svg#icon]] ) pour créer un canvas dans le même dossier que le fichier actif.

**Directives pour les icônes**

- Stockez les icônes dans le dossier `Attachments/icons`.
- Ajoutez le préfixe `lucide-` avant le nom de l'icône Lucide.
- Ajoutez le préfixe `obsidian-icon-` avant le nom de l'icône Obsidian.

**Exemple :** L'icône pour créer un nouveau canvas devrait être nommée `lucide-layout-dashboard`.

- Utilisez la version SVG des icônes disponibles.
- Les icônes doivent avoir une largeur de `18` pixels, une hauteur de `18` pixels et une épaisseur de trait de `1.5`. Vous pouvez ajuster ces paramètres dans les données SVG.

> [!info]- Ajuster la taille et le trait dans un SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="LARGEUR" height="HAUTEUR" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="ÉPAISSEUR-DE-TRAIT" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Utilisez l'ancre `icon` dans les images intégrées, pour ajuster l'espacement autour de l'icône afin qu'elle s'aligne proprement avec le texte environnant.
- Les icônes doivent être entourées de parenthèses. ( ![[lucide-cog.svg#icon]] )

**Exemple** : `( ![[lucide-cog.svg#icon]] )`

### Balises d'ancrage pour les images

Les balises d'ancrage pour les images sont disponibles pour ajouter des modifications décoratives aux images intégrées.

> [!warning] Avertissement pour l'aperçu en direct
> Les balises d'ancrage pour les icônes ne s'afficheront pas correctement en **aperçu en direct.** Utilisez le **mode lecture** pour confirmer que la balise d'ancrage a été appliquée.

**Icône**

`![[lucide-menu.svg#icon]]`

La balise d'ancrage icône assure un alignement vertical correct pour les icônes utilisées pour indiquer les éléments d'interface.

La première icône de menu utilise la balise d'ancrage ( ![[lucide-menu.svg#icon]] ), tandis que la seconde icône de menu ( ![[lucide-menu.svg]] ) ne l'utilise pas.

**Interface**

`![[Vault picker.png#interface]]`

La balise d'ancrage interface ajoute une ombre portée décorative autour de l'image. Dans la première image, la balise d'ancrage interface est appliquée.
![[Vault picker.png#interface]]
En revanche, la seconde image n'a pas l'ancrage interface appliqué.

![[Vault picker.png]]

**Contour**

`![[Backlinks.png#outline]]`

La balise d'ancrage contour ajoute une bordure subtile autour de l'image. Dans la première image, la balise d'ancrage contour est appliquée.

> [!tip] Observez le coin inférieur gauche de l'image pour voir la différence.

![[Backlinks.png#outline]]

La seconde image n'a pas la balise d'ancrage contour.

![[Backlinks.png]]

### Optimisation

Les images ralentissent le temps de chargement de la page et occupent un espace de stockage précieux sur [[Introduction à Obsidian Publish|Publish]]. L'optimisation des images permet de réduire la taille des fichiers tout en maintenant l'intégrité visuelle de l'image.

Les images et les icônes doivent être optimisées.

> [!info] Outils pour optimiser les images
> Voici quelques programmes recommandés pour réduire la taille de vos images.
> - **Windows :** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS :** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Nous recommandons un taux d'optimisation de 65-75 %.

## Mise en page

### Liens cassés

Avant de soumettre votre Pull Request, veuillez vérifier s'il y a des liens cassés dans la documentation de la traduction sur laquelle vous travaillez, et corrigez-les. Les liens cassés peuvent apparaître naturellement au fil du temps, donc vérifier leur exactitude aide à maintenir la qualité de la documentation.

Vous pouvez vérifier les liens cassés en utilisant des [[Modules complémentaires]] ou des outils disponibles dans votre IDE.

### Descriptions

Cette documentation est éditée sur GitHub et hébergée en ligne via [[Introduction à Obsidian Publish|Obsidian Publish]], qui inclut des [[Aperçus de liens sur les réseaux sociaux#Description|descriptions]] pour les cartes sociales et d'autres éléments [[SEO]].

Si la page sur laquelle vous travaillez n'a pas de [[Propriétés|propriété]] `description`, veuillez en ajouter une. La description doit faire 150 caractères ou moins et fournir un résumé objectif du contenu de la page.

**Bon** : Apprenez à créer des modèles qui capturent et organisent automatiquement les métadonnées de pages web avec Web Clipper.
**À améliorer** : Apprenez comment créer des modèles qui capturent et organisent automatiquement les métadonnées issues de pages web avec Web Clipper.

### Directions

Lorsque vous rédigez ou réécrivez des [[#Instructions]] sur la façon d'effectuer une action dans l'application, assurez-vous d'inclure les étapes pour les versions mobile et bureau.

Si vous n'avez pas accès à un appareil mobile ou de bureau, veuillez le mentionner lors de la soumission de votre Pull Request.

## Traductions

Traduisez l'intégralité du contenu lors d'une traduction. Cela inclut, sans s'y limiter :

- Les noms des notes
- Les noms des dossiers
- Les alias
- Les noms des pièces jointes
- Le texte alternatif des liens
