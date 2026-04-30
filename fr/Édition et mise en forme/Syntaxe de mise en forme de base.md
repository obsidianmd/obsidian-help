---
permalink: syntax
description: 'Apprenez à appliquer la mise en forme de base à vos notes dans Obsidian, en utilisant Markdown.'
publish: true
mobile: true
aliases:
  - How to/Formater vos notes
localized: '2026-03-18'
---
Apprenez à appliquer la mise en forme de base à vos notes, en utilisant [Markdown](https://daringfireball.net/projects/markdown/). Pour une syntaxe de mise en forme plus avancée, consultez [[Syntaxe de mise en forme avancée]].

## Paragraphes

Pour créer des paragraphes en Markdown, utilisez une **ligne vide** pour séparer les blocs de texte. Chaque bloc de texte séparé par une ligne vide est traité comme un paragraphe distinct.

```md
Ceci est un paragraphe.

Ceci est un autre paragraphe.
```

Ceci est un paragraphe.

Ceci est un autre paragraphe.

Une ligne vide entre les lignes de texte crée des paragraphes séparés. C'est le comportement par défaut en Markdown.

> [!tip]- Espaces multiples
> Les espaces adjacents multiples au sein des paragraphes et entre eux sont réduits à un seul espace lorsqu'ils sont affichés en [[Vues et mode d'édition#Mode lecture|mode lecture]] ou sur les sites [[Introduction à Obsidian Publish|Obsidian Publish]].
> 
> ```md
> Plusieurs          espaces          adjacents
> 
> 
> 
> et plusieurs sauts de ligne entre les paragraphes.
> ```
> 
> > Plusieurs          espaces          adjacents
> > 
> > 
> > 
> > et plusieurs sauts de ligne entre les paragraphes.
> 
> Si vous souhaitez empêcher la réduction des espaces ou ajouter plusieurs espaces vides, vous pouvez utiliser les balises HTML `&nbsp;` (espace insécable) ou `<br>` (saut de ligne).

### Sauts de ligne

Par défaut dans Obsidian, appuyer une fois sur `Entrée` crée une nouvelle ligne dans votre note, mais celle-ci est traitée comme une *continuation* du même paragraphe dans le rendu, conformément au comportement typique de Markdown. Pour insérer un saut de ligne *à l'intérieur* d'un paragraphe sans commencer un nouveau paragraphe, vous pouvez soit :

- Ajouter **deux espaces** à la fin d'une ligne avant d'appuyer sur `Entrée`, ou
- Utiliser le raccourci `Maj+Entrée` pour insérer directement un saut de ligne.

> [!question]- Pourquoi plusieurs appuis sur `Entrée` ne créent-ils pas plus de sauts de ligne en mode lecture ?
> En Markdown, un seul `Entrée` est ignoré, et plusieurs appuis consécutifs sur `Entrée` ne produisent qu'un seul nouveau paragraphe. Ce comportement est conforme à la règle de retour à la ligne souple de Markdown, où les lignes vides supplémentaires ne génèrent pas de sauts de ligne ou de paragraphes additionnels — ils sont réduits en une seule coupure de paragraphe. C'est ainsi que Markdown gère le texte par défaut, garantissant que les paragraphes s'enchaînent naturellement sans coupures inattendues.

Obsidian inclut un paramètre **[[Paramètres#Sauts de ligne stricts|Sauts de ligne stricts]]**, qui fait en sorte qu'Obsidian suive la spécification standard de Markdown pour les sauts de ligne.

Pour activer cette fonctionnalité :

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans l'onglet **Éditeur**.
3. Activez **Sauts de ligne stricts**.

Lorsque **Sauts de ligne stricts** est activé dans Obsidian, les sauts de ligne ont trois comportements distincts selon la façon dont les lignes sont séparées :

**Retour simple sans espaces** : un seul `Entrée` sans espaces en fin de ligne combine les deux lignes séparées en une seule ligne lors du rendu.

```md
ligne un
ligne deux
```

S'affiche comme :

ligne un ligne deux

**Retour simple avec deux espaces ou plus en fin de ligne** : si vous ajoutez deux espaces ou plus à la fin de la première ligne avant d'appuyer sur `Entrée`, les deux lignes restent dans le même paragraphe, mais sont séparées par un saut de ligne (élément HTML `<br>`). Nous utiliserons deux tirets bas pour représenter les espaces dans cet exemple.

```md
ligne trois__  
ligne quatre
```

S'affiche comme :

ligne trois<br>
ligne quatre

**Double retour (avec ou sans espaces en fin de ligne)** : appuyer deux fois (ou plus) sur `Entrée` sépare les lignes en deux paragraphes distincts (éléments HTML `<p>`), que vous ajoutiez ou non des espaces à la fin de la première ligne.

```md
ligne cinq

ligne six
```

S'affiche comme :

<p>ligne cinq</p>
<p>ligne six</p>

## Entêtes

Pour créer un entête, ajoutez jusqu'à six symboles `#` avant le texte de votre entête. Le nombre de symboles `#` définit le niveau de l'entête (comme indiqué dans le [[Plan]]).

```md
# Ceci est un entête 1
## Ceci est un entête 2
### Ceci est un entête 3
#### Ceci est un entête 4
##### Ceci est un entête 5
###### Ceci est un entête 6
```

%% Ces entêtes utilisent du HTML pour ne pas encombrer le Plan/Table des matières %%
<h1>Ceci est un entête 1</h1>
<h2>Ceci est un entête 2</h2>
<h3>Ceci est un entête 3</h3>
<h4>Ceci est un entête 4</h4>
<h5>Ceci est un entête 5</h5>
<h6>Ceci est un entête 6</h6>

## Gras, italique, surlignage

La mise en forme du texte peut également être appliquée à l'aide des [[Raccourcis d'édition]].

| Style | Syntaxe | Exemple | Résultat |
|-|-|-|-|
| Gras | `** **` ou `__ __` | `**Texte en gras**` | **Texte en gras** |
| Italique | `* *` ou `_ _`  | `*Texte en italique*` | *Texte en italique* |
| Barré | `~~ ~~` |  `~~Texte barré~~` | ~~Texte barré~~ |
| Surlignage | `== ==` |  `==Texte surligné==` | ==Texte surligné== |
| Gras et italique imbriqué | `** **` et `_ _`  | `**Texte en gras et _italique imbriqué_**` | **Texte en gras et _italique imbriqué_** |
| Gras et italique | `*** ***` ou `___ ___` |  `***Texte en gras et italique***` | ***Texte en gras et italique*** |

La mise en forme peut être forcée à s'afficher en texte brut en ajoutant une barre oblique inverse `\` devant.

\*\*Cette ligne ne sera pas en gras\*\*

```markdown
\*\*Cette ligne ne sera pas en gras\*\*
```

\**Cette ligne sera en italique et affichera les astérisques*\*

```markdown
\**Cette ligne sera en italique et affichera les astérisques*\*
```

## Liens internes

Obsidian prend en charge deux formats pour les [[Liens internes|liens internes]] entre notes :

- Lien wiki : `[[Trois lois du mouvement]]`
- Markdown : `[Trois lois du mouvement](Trois%20lois%20du%20mouvement.md)`

## Liens externes

Si vous souhaitez créer un lien vers une URL externe, vous pouvez créer un lien en ligne en entourant le texte du lien de crochets (`[ ]`), puis l'URL de parenthèses (`( )`).

```md
[Aide Obsidian](https://help.obsidian.md)
```

[Aide Obsidian](https://help.obsidian.md)

Vous pouvez également créer des liens externes vers des fichiers dans d'autres coffres, en utilisant un [[Obsidian URI|URI Obsidian]].

```md
[Note](obsidian://open?vault=MainVault&file=Note.md)
```

### Échapper les espaces dans les liens

Si votre URL contient des espaces, vous devez les échapper en les remplaçant par `%20`.

```md
[Ma Note](obsidian://open?vault=MainVault&file=Ma%20Note.md)
```

Vous pouvez également échapper l'URL en l'entourant de chevrons (`< >`).

```md
[Ma Note](<obsidian://open?vault=MainVault&file=Ma Note.md>)
```

## Images externes

Vous pouvez ajouter des images avec des URL externes en ajoutant un symbole `!` devant un [[#Liens externes|lien externe]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Vous pouvez modifier les dimensions de l'image en ajoutant `|640x480` à la destination du lien, où 640 est la largeur et 480 la hauteur.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Si vous ne spécifiez que la largeur, l'image est redimensionnée selon son rapport d'aspect original. Par exemple :

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Astuce
> Si vous souhaitez ajouter une image depuis votre coffre, vous pouvez également [[Incorporer des fichiers#Incorporer une image dans une note|incorporer une image dans une note]].

## Citations

Vous pouvez citer du texte en ajoutant un symbole `>` avant le texte.

```md
> Les êtres humains font face à des problèmes de plus en plus complexes et urgents, et leur efficacité à traiter ces problèmes est une question critique pour la stabilité et le progrès continu de la société.

\- Doug Engelbart, 1961
```

> Les êtres humains font face à des problèmes de plus en plus complexes et urgents, et leur efficacité à traiter ces problèmes est une question critique pour la stabilité et le progrès continu de la société.

\- Doug Engelbart, 1961

> [!tip]- Astuce
> Vous pouvez transformer votre citation en [[Mises en avant (callouts)|encadré]] en ajoutant `[!info]` comme première ligne d'une citation.

## Listes

Vous pouvez créer une liste non ordonnée en ajoutant un `-`, `*` ou `+` avant le texte.

```md
- Premier élément de liste
- Deuxième élément de liste
- Troisième élément de liste
```

- Premier élément de liste
- Deuxième élément de liste
- Troisième élément de liste

Pour créer une liste ordonnée, commencez chaque ligne par un nombre suivi d'un symbole `.` ou `)`.

```md
1. Premier élément de liste
2. Deuxième élément de liste
3. Troisième élément de liste
```

1. Premier élément de liste
2. Deuxième élément de liste
3. Troisième élément de liste

```md
1) Premier élément de liste
2) Deuxième élément de liste
3) Troisième élément de liste
```

1) Premier élément de liste
2) Deuxième élément de liste
3) Troisième élément de liste

Vous pouvez utiliser `Maj+Entrée` pour insérer un [[#Sauts de ligne|saut de ligne]] dans une liste ordonnée sans modifier la numérotation.

```md
1. Premier élément de liste
   
2. Deuxième élément de liste
3. Troisième élément de liste
   
4. Quatrième élément de liste
5. Cinquième élément de liste
6. Sixième élément de liste
```

### Listes de tâches

Pour créer une liste de tâches, commencez chaque élément par un tiret et un espace suivis de `[ ]`.

```md
- [x] Ceci est une tâche terminée.
- [ ] Ceci est une tâche non terminée.
```

- [x] Ceci est une tâche terminée.
- [ ] Ceci est une tâche non terminée.

Vous pouvez cocher une tâche en mode lecture en sélectionnant la case à cocher.

> [!tip]- Astuce
> Vous pouvez utiliser n'importe quel caractère entre les crochets pour marquer la tâche comme terminée.
>
> ```md
> - [x] Lait
> - [?] Œufs
> - [-] Œufs
> ```
>
> - [x] Lait
> - [?] Œufs
> - [-] Œufs

### Listes imbriquées

Vous pouvez imbriquer n'importe quel type de liste — ordonnée, non ordonnée ou liste de tâches — sous n'importe quel autre type de liste.

Pour créer une liste imbriquée, indentez un ou plusieurs éléments de liste. Vous pouvez mélanger les types de listes au sein d'une structure imbriquée :

```md
1. Premier élément de liste
   1. Élément imbriqué ordonné
2. Deuxième élément de liste
   - Élément imbriqué non ordonné
```

1. Premier élément de liste
   1. Élément imbriqué ordonné
2. Deuxième élément de liste
   - Élément imbriqué non ordonné

De même, vous pouvez créer une liste de tâches imbriquée en indentant un ou plusieurs éléments :

```md
- [ ] Tâche 1
	- [ ] Sous-tâche 1
- [ ] Tâche 2
	- [ ] Sous-tâche 1
```

- [ ] Tâche 1
	- [ ] Sous-tâche 1
- [ ] Tâche 2
	- [ ] Sous-tâche 1

Utilisez `Tab` ou `Maj+Tab` pour indenter ou désindenter les éléments de liste sélectionnés afin de les organiser facilement.

## Ligne horizontale

Vous pouvez utiliser trois étoiles `***` ou plus, des tirets `---` ou des tirets bas `___` sur une ligne seule pour ajouter une barre horizontale. Vous pouvez également séparer les symboles par des espaces.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Code

Vous pouvez mettre en forme du code soit en ligne au sein d'une phrase, soit dans son propre bloc.

### Code en ligne

Vous pouvez mettre en forme du code au sein d'une phrase en utilisant des accents graves simples.

```md
Le texte entre `accents graves` sur une ligne sera formaté comme du code.
```

Le texte entre `accents graves` sur une ligne sera formaté comme du code.

Si vous souhaitez mettre des accents graves dans un bloc de code en ligne, entourez-le de doubles accents graves comme ceci : code en ligne ``avec un accent grave ` à l'intérieur``.

### Blocs de code

Pour mettre en forme du code sous forme de bloc, encadrez-le de trois accents graves ou plus ou de trois tildes ou plus.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

Vous pouvez également créer un bloc de code en indentant le texte avec `Tab` ou 4 espaces.
`````md
    cd ~/Desktop
`````

Vous pouvez ajouter la coloration syntaxique à un bloc de code en ajoutant un code de langage après le premier jeu d'accents graves.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Obsidian utilise Prism pour la coloration syntaxique. Pour plus d'informations, consultez [Langages pris en charge](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS et les vues d'édition
> Le [[Vues et mode d'édition#Mode source|mode source]] et l'[[Vues et mode d'édition#Aperçu en direct|aperçu en direct]] ne prennent pas en charge PrismJS, et peuvent afficher la coloration syntaxique différemment.

#### Blocs de code imbriqués

Lorsque vous devez inclure un bloc de code à l'intérieur d'un autre bloc de code (par exemple, lors de la documentation de l'utilisation des blocs de code), vous pouvez utiliser plus de trois accents graves ou tildes pour le bloc de code externe.

Pour imbriquer des blocs de code, utilisez quatre accents graves (ou tildes) ou plus pour le bloc externe, tandis que le bloc interne en utilise trois :
`````md
````md
Voici comment créer un bloc de code :
```js
console.log("Hello world")
```
````
`````

Vous pouvez également mélanger les accents graves et les tildes. C'est particulièrement utile lorsque vous travaillez avec du code qui génère d'autres blocs de code :
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

Le principe clé est que le bloc de code externe doit utiliser **plus** de caractères de délimitation (accents graves ou tildes) que tout bloc de code interne, ou utiliser un type de caractère de délimitation différent.

## Notes de bas de page

Vous pouvez ajouter des notes de bas de page[^footnote] à vos notes en utilisant la syntaxe suivante :

[^footnote]: Ceci est une note de bas de page.

```md
Ceci est une simple note de bas de page[^1].

[^1]: Ceci est le texte référencé.
[^2]: Ajoutez 2 espaces au début de chaque nouvelle ligne.
  Cela vous permet d'écrire des notes de bas de page sur plusieurs lignes.
[^note]: Les notes de bas de page nommées apparaissent toujours sous forme de numéros, mais peuvent faciliter l'identification et la liaison des références.
```

Vous pouvez également intégrer des notes de bas de page en ligne dans une phrase. Notez que l'accent circonflexe se place à l'extérieur des crochets.

```md
Vous pouvez également utiliser des notes de bas de page en ligne. ^[Ceci est une note de bas de page en ligne.]
```

> [!note] Note
> Les notes de bas de page en ligne fonctionnent uniquement en mode lecture, pas en aperçu en direct.

Utilisez la [[Vue des notes de bas de page]] pour voir toutes les notes de bas de page d'une note.

## Commentaires

Vous pouvez ajouter des commentaires en entourant le texte avec `%%`. Les commentaires ne sont visibles qu'en mode d'édition.

```md
Ceci est un commentaire %%en ligne%%.

%%
Ceci est un commentaire bloc.

Les commentaires blocs peuvent s'étendre sur plusieurs lignes.
%%
```

## Échapper la syntaxe Markdown

Dans certains cas, vous pouvez avoir besoin d'afficher des caractères spéciaux en Markdown, tels que `*`, `_` ou `#`, sans déclencher leur mise en forme. Pour afficher ces caractères littéralement, placez une barre oblique inverse (`\`) devant eux.

> [!example] Caractères courants à échapper
> 
> - Astérisque : `\*`
> - Tiret bas : `\_`
> - Dièse : `\#`
> - Accent grave : `` \` ``
> - Barre verticale (utilisée dans les tableaux) : `\|`
> - Tilde : `\~`

```md
\*Ce texte ne sera pas en italique\*.
```

\*Ce texte ne sera pas en italique\*.

Lorsque vous travaillez avec des listes numérotées, vous pouvez avoir besoin d'échapper le point après le nombre pour empêcher la mise en forme automatique de liste. Placez la barre oblique inverse (`\`) avant le point, **pas** avant le nombre.

```md
1\. Ceci ne sera pas un élément de liste.
```

1\. Ceci ne sera pas un élément de liste.

## En savoir plus

Pour en savoir plus sur la syntaxe de mise en forme avancée, comme les tableaux, les diagrammes et les expressions mathématiques, consultez [[Syntaxe de mise en forme avancée]].

Pour en savoir plus sur la façon dont Obsidian analyse le Markdown, consultez [[Obsidian Flavored Markdown]].
