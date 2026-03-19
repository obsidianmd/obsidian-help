---
permalink: html
publish: true
mobile: true
description: >-
  Apprenez à utiliser le HTML dans Obsidian, y compris les limitations du rendu
  Markdown et les exigences des blocs HTML.
aliases:
  - Advanced Use/Nettoyage HTML
---
Obsidian prend en charge le HTML pour vous permettre d'afficher vos notes comme vous le souhaitez, ou même d'[[Intégrer des pages web|intégrer des pages web]]. Autoriser le HTML dans vos notes comporte des risques. Pour empêcher du code malveillant de causer des dommages, Obsidian _assainit_ tout le HTML dans vos notes.

> [!example]
> L'élément `<script>` permet normalement d'exécuter du JavaScript à chaque chargement. Si Obsidian n'assainissait pas le HTML, un attaquant pourrait vous convaincre de coller un texte contenant du JavaScript qui extrairait des informations sensibles de votre ordinateur et les lui renverrait.

Cela dit, puisque la syntaxe Markdown ne prend pas en charge toutes les formes de mise en forme, utiliser du HTML assaini peut être un moyen supplémentaire d'améliorer la qualité de vos notes. Nous avons inclus certaines des utilisations les plus courantes du HTML.

## Limitations du HTML

Obsidian a des limitations spécifiques lors de l'utilisation du HTML dans vos notes :

### Pas de Markdown à l'intérieur du HTML

Obsidian ne rend pas la syntaxe Markdown à l'intérieur des éléments HTML. Il s'agit d'un choix de conception intentionnel pour optimiser les performances et maintenir une faible complexité de l'analyseur lors de la gestion de documents volumineux.

Par exemple, ceci ne fonctionnera pas comme prévu :

```md
<div>
Ceci **ne sera pas** en gras et ceci `ne sera pas` du code.
</div>
```

### Les blocs HTML doivent être autonomes

Les blocs HTML doivent être complets et ne peuvent pas contenir de lignes vides en leur sein. Les lignes vides interrompront le bloc HTML.

Ceci fonctionnera :

```md
<table>
<tr>
<td>Contenu ici</td>
</tr>
</table>
```

Ceci ne fonctionnera pas correctement :

```md
<table>

<tr>

<td>Contenu ici</td>

</tr>

</table>
```

### Quand le Markdown semble fonctionner dans le HTML

Certaines balises HTML en ligne comme `<span>` ou `<a>` ont des fonctionnalités limitées et peuvent sembler rendre le Markdown, mais ce n'est pas réellement ce qui se passe. Le Markdown est traité en dehors du contexte HTML.

Pour plus de détails sur la façon dont Obsidian gère le Markdown, consultez [[Obsidian Flavored Markdown]].

## Utilisations courantes du HTML

> [!info] Plus de détails sur l'utilisation de `<iframe>` sont disponibles dans [[Intégrer des pages web]].

### Commentaires

Les [[Syntaxe de mise en forme de base#Commentaires|commentaires Markdown]] sont la méthode recommandée pour ajouter des commentaires cachés dans vos notes. Cependant, certaines méthodes de conversion de notes Markdown, comme [Pandoc](https://pandoc.org), ont un support limité des commentaires Markdown. Dans ces cas, vous pouvez utiliser un `<!-- Commentaire HTML -->` à la place !

### Soulignement

Si vous avez besoin de souligner rapidement un élément dans vos notes, vous pouvez utiliser `<u>Exemple</u>` pour créer <u>votre texte souligné</u>.

### Span/Div

Les balises span et div peuvent être utilisées pour appliquer des classes personnalisées provenant d'un [[Extraits CSS|extrait CSS]], ou une mise en forme définie sur mesure, à une zone de texte sélectionnée. Par exemple, utiliser `<span style="font-family: cursive">votre texte</span>` peut vous permettre de rapidement <span style="font-family: cursive">changer votre police</span>.

## Texte barré

Besoin de barrer <s>du texte</s> ? Utilisez `<s>ceci</s>` pour le barrer.
