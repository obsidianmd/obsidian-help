---
permalink: publish/permalinks
localized: '2026-03-18'

---
Vous pouvez renommer l'URL de vos notes en utilisant des _permaliens_.

Par exemple, vous pouvez transformer ceci :

```
https://publish.obsidian.md/username/Company/About+us
```

En ceci :

```
https://publish.obsidian.md/username/about
```

Pour créer un permalien pour une note, ajoutez la propriété `permalink` à vos [[Propriétés]].

```yaml
---
permalink: about
---
```

Si quelqu'un visite une note en utilisant l'URL d'origine, il sera automatiquement redirigé vers le permalien.

## Rediriger d'anciennes notes

Renommer et supprimer des notes fait naturellement partie de l'entretien d'un coffre vivant. Bien qu'Obsidian mette automatiquement à jour les liens lorsque vous déplacez une note au sein de votre coffre local, d'autres sites web peuvent encore pointer vers vos anciennes notes sur votre site [[Introduction à Obsidian Publish|Obsidian Publish]]. Vous pouvez rediriger les lecteurs d'une note vers une autre.

Imaginez que vous souhaitiez déplacer une note d'un dossier à un autre :

- **Guides**
  - ~~Se faire des amis.md~~ (supprimé)
- **Tutoriels**
  - *Comment se faire des amis.md* (ajouté)

Après avoir déplacé la note, Obsidian met automatiquement à jour tous les liens au sein du coffre. Cependant, si vous publiez la modification sur votre site Publish, tout lien vers `/Guides/Se+faire+des+amis` aboutira à une erreur 404.

Pour rediriger les lecteurs de `/Guides/Se+faire+des+amis` vers `/Tutoriels/Comment+se+faire+des+amis`, vous devez ajouter un [[Alias|alias]] dans `Comment se faire des amis.md`, la note vers laquelle vous souhaitez rediriger.

```md
---
alias: Guides/Se faire des amis
---

# Comment se faire des amis
```

> [!important] Important
> Assurez-vous d'inclure le chemin complet vers l'ancienne note dans l'alias. Bien que l'utilisation du seul nom de la note comme alias fonctionne dans votre coffre local, Publish a besoin du chemin complet vers la note pour pouvoir effectuer la redirection.

Vous pouvez rediriger plusieurs notes en ajoutant un alias pour chacune.

```md
---
aliases: 
  - Guides/Se faire des amis
  - Développer des amitiés
---

# Comment se faire des amis
```
