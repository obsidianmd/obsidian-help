---
permalink: publish/social-share
localized: '2026-03-18'
aliases:
  - Social media link previews
---
De nombreux réseaux sociaux affichent un aperçu enrichi de votre site web lorsqu'un utilisateur partage un lien vers celui-ci. En utilisant les [[Propriétés]], vous pouvez personnaliser l'apparence de vos notes dans l'aperçu.

> [!warning]
> Les balises remplacées dans cette section sont **uniquement** visibles par les robots d'indexation. Les navigateurs web classiques reçoivent la page non modifiée pour des raisons de performance.

## Description

Obsidian génère automatiquement une description basée sur le contenu de la note, mais vous pouvez fournir la vôtre en utilisant `description`.

```yaml
---
description: Une introduction à notre système solaire.
---
```

> [!note] Balises meta
> `description` remplace la description générée automatiquement dans `<meta name="description" content="...">` et les équivalents pour `og:description` et `twitter:description`.

## Image

Vous pouvez utiliser une image personnalisée pour l'aperçu du lien, en ajoutant `image` ou `cover` avec un chemin vers l'image. L'image doit être téléversée sur Publish.

Le chemin peut être un chemin absolu depuis la racine de votre coffre :

```yaml
---
cover: "Attachments/Cover image.png"
---
```


Le chemin vers l'image est sensible à la casse. Dans notre exemple précédent, nous avons un chemin vers une image nommée `Cover image.png`. Le chemin ci-dessous ne fonctionnera pas, car la casse est incorrecte.

```yaml
---
cover: "Attachments/cover Image.png"
---
```


À la place d'un chemin absolu dans votre coffre, vous pouvez également utiliser une URL externe :

```yaml
---
image: "https://example.com/cover%20image.png"
---
```


`image` et `cover` sont identiques. N'utilisez qu'un seul des deux.

> [!note] Balises meta
> `image` et `cover` remplacent l'image générée automatiquement dans `<meta property="og:image" content="...">`.
