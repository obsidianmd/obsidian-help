---
permalink: callouts
description: >-
  This page details how to use callouts to include additional content without
  breaking the flow of your notes.
publish: true
mobile: true
localized: '2026-03-18'
---
Utilisez les encadrés pour inclure du contenu supplémentaire sans interrompre le fil de vos notes.

Pour créer un encadré, ajoutez `[!info]` à la première ligne d'un bloc de citation, où `info` est l'_identifiant de type_. L'identifiant de type détermine l'apparence et le comportement de l'encadré. Pour voir tous les types disponibles, consultez [[#Types pris en charge]]. Les encadrés sont également pris en charge nativement sur [[Introduction à Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Voici un titre d'encadré
> Voici un bloc d'encadré.
> Il prend en charge le **Markdown**, les [[Liens internes|liens wiki]] et les [[Incorporer des fichiers|intégrations]] !
> ![[Engelbart.jpg]]
```

> [!info] Voici un titre d'encadré
> Voici un bloc d'encadré.
> Il prend en charge le **Markdown**, les [[Liens internes|liens wiki]] et les [[Incorporer des fichiers|intégrations]] !
> ![[Engelbart.jpg]]

Vous pouvez insérer un encadré `[!note]` par défaut en utilisant la [[Palette de commandes|commande]] `Insérer un encadré`. Le curseur se positionne automatiquement dans le champ du nom de l'encadré, vous permettant de supprimer le nom par défaut et d'en saisir un nouveau avant de modifier le contenu.

Pour envelopper du contenu existant dans un encadré, sélectionnez le texte (y compris les listes, blocs de code, etc.) et exécutez la commande `Insérer un encadré`. Le contenu sélectionné sera automatiquement inclus dans l'encadré.

En [[Vues et mode d'édition#Aperçu en direct|aperçu en direct]], vous pouvez également faire un clic droit sur le nom de l'encadré pour changer le type d'encadré.


### Modifier le titre

Par défaut, le titre de l'encadré est son identifiant de type avec une majuscule initiale. Vous pouvez le modifier en ajoutant du texte après l'identifiant de type :

```markdown
> [!tip] Les encadrés peuvent avoir des titres personnalisés
> Comme celui-ci.
```

> [!tip] Les encadrés peuvent avoir des titres personnalisés
> Comme celui-ci.

Vous pouvez même omettre le corps pour créer des encadrés composés uniquement d'un titre :

```markdown
> [!tip] Encadré avec titre uniquement
```

> [!tip] Encadré avec titre uniquement

### Encadrés pliables

Vous pouvez rendre un encadré pliable en ajoutant un plus (`+`) ou un moins (`-`) directement après l'identifiant de type.

Un signe plus déplie l'encadré par défaut, tandis qu'un signe moins le plie.

```markdown
> [!faq]- Les encadrés sont-ils pliables ?
> Oui ! Dans un encadré pliable, le contenu est masqué lorsque l'encadré est plié.
```

> [!faq]- Les encadrés sont-ils pliables ?
> Oui ! Dans un encadré pliable, le contenu est masqué lorsqu'il est plié.

### Encadrés imbriqués

Vous pouvez imbriquer des encadrés sur plusieurs niveaux.

```markdown
> [!question] Les encadrés peuvent-ils être imbriqués ?
> > [!todo] Oui, ils le peuvent.
> > > [!example] Vous pouvez même utiliser plusieurs niveaux d'imbrication.
```

> [!question] Les encadrés peuvent-ils être imbriqués ?
> > [!todo] Oui, ils le peuvent.
> > > [!example] Vous pouvez même utiliser plusieurs niveaux d'imbrication.

### Personnaliser les encadrés

Les [[Extraits CSS]] et les [[Modules complémentaires]] peuvent définir des encadrés personnalisés, ou même remplacer la configuration par défaut.

Pour définir un encadré personnalisé, créez le bloc CSS suivant :

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

La valeur de l'attribut `data-callout` est l'identifiant de type que vous souhaitez utiliser, par exemple `[!custom-question-type]`.

- `--callout-color` définit la couleur d'arrière-plan en utilisant des nombres (0–255) pour le rouge, le vert et le bleu.
- `--callout-icon` peut être un identifiant d'icône provenant de [lucide.dev](https://lucide.dev), ou un élément SVG.

> [!warning] Note concernant les versions des icônes Lucide
> Obsidian met à jour périodiquement les icônes Lucide. La version actuelle incluse est indiquée ci-dessous ; utilisez ces icônes ou des versions antérieures dans les encadrés personnalisés.
> ![[Crédits#^lucide]]

> [!tip] Icônes SVG
> Au lieu d'utiliser une icône Lucide, vous pouvez également utiliser un élément SVG comme icône d'encadré.
>
> ```css
> --callout-icon: '<svg>...svg personnalisé...</svg>';
> ```

### Types pris en charge

Vous pouvez utiliser plusieurs types d'encadrés et alias. Chaque type est accompagné d'une couleur d'arrière-plan et d'une icône différentes.

Pour utiliser ces styles par défaut, remplacez `info` dans les exemples par l'un de ces types, comme `[!tip]` ou `[!warning]`. Les types d'encadrés peuvent également être modifiés en faisant un clic droit sur un encadré en mode aperçu en direct.

Sauf si vous [[#Personnaliser les encadrés|personnalisez les encadrés]], tout type non pris en charge utilise par défaut le type `note`. L'identifiant de type est insensible à la casse.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Alias : `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Alias : `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Alias : `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Alias : `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Alias : `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Alias : `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias : `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias : `cite`
