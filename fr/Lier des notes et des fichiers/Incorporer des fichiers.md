---
permalink: embeds
cssclasses:
  - soft-embed
localized: '2026-03-18'
---
Les fichiers intégrés affichent leur contenu directement dans une note et restent à jour lorsque le fichier source change.

Pour intégrer un fichier de votre coffre, ajoutez un point d'exclamation (`!`) devant un [[Liens internes|lien interne]]. Vous pouvez intégrer des fichiers dans n'importe lequel des [[Formats de fichiers acceptés]].

> [!tip]- Intégration par glisser-déposer
> Sur ordinateur, vous pouvez également glisser-déposer les fichiers pris en charge directement dans votre note pour les intégrer automatiquement.

## Intégrer une note dans une autre note

Pour intégrer une note :

```md
![[Liens internes]]
```

Vous pouvez également intégrer des [[Liens internes#Lier un entête dans une note|entêtes]] et des [[Liens internes#Lier un bloc dans une note|blocs]] spécifiques.

```md
![[Liens internes#^b15695]]
```

Le texte ci-dessous est un exemple de bloc intégré :

![[Liens internes#^b15695]]

## Intégrer une image dans une note

Pour intégrer une image :

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Vous pouvez modifier les dimensions de l'image en ajoutant `|640x480` à la destination du lien, où 640 est la largeur et 480 est la hauteur.

```md
![[Engelbart.jpg|100x145]]
```

Si vous ne spécifiez que la largeur, l'image est redimensionnée proportionnellement. Par exemple, `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Vous pouvez également intégrer une image hébergée en externe en utilisant un lien Markdown. Vous pouvez contrôler la largeur et la hauteur en utilisant la même syntaxe qu'un lien wiki.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Intégrer un fichier audio dans une note

Pour intégrer un fichier audio :

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Intégrer un PDF dans une note

Pour intégrer un PDF :

```md
![[Document.pdf]]
```

Vous pouvez également ouvrir une page spécifique du PDF en ajoutant `#page=N` à la destination du lien, où `N` est le numéro de la page :

```md
![[Document.pdf#page=3]]
```

Vous pouvez aussi spécifier la hauteur en pixels du lecteur PDF intégré en ajoutant `#height=[nombre]` à la destination du lien. Par exemple :

```md
![[Document.pdf#height=400]]
```

## Intégrer un Canvas dans une note

Pour intégrer un [[Canvas|canvas]] :

```md
![[Mon canvas.canvas]]
```

> [!info]+ Les intégrations de Canvas affichent uniquement les formes
> Les canvas intégrés affichent les formes mais pas le texte à l'intérieur des cartes. Pour visualiser le canvas complet, ouvrez-le directement.

## Intégrer une liste dans une note

Pour intégrer une liste provenant d'une autre note, ajoutez d'abord un [[Liens internes#Lier un bloc dans une note|identifiant de bloc]] à votre liste :

```md

- élément de liste 1
- élément de liste 2

^my-list-id
```

Puis créez un lien vers la liste en utilisant l'identifiant de bloc :

```md
![[Ma note#^my-list-id]]
```

## Intégrer des résultats de recherche

![[Rechercher#Intégrer des résultats de recherche dans une note]]
