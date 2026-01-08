[[Obsidian]] est un logiciel de prise de notes et un logiciel de gestion des connaissances basé sur le format Markdown.

Le logiciel supporte actuellement tous les formats listés ci-dessous :
1. [[Formater vos notes#Les titres|Les titres]] 
2. [[Formater vos notes#Le formatage du texte|Le formatage du texte]]
3. [[Formater vos notes#Les images|Les images]]
4. [[Formater vos notes#Les liens|Les liens]]
5. [[Formater vos notes#Lignes de code intégrées|Lignes de code intégrées]]
6. [[Formater vos notes#Les blocs de code|Les blocs de code]]
7. [[Formater vos notes#Les notes de bas de page|Les notes de bas de page]]
8. [[Formater vos notes#Les formules mathématiques|Les formules mathématiques]]  

***

# Les titres

Pour créer des titres, inscrivez des `#` au début de la ligne de chaque titre. Un seul `#` fait un titre de niveau 1, deux `##` font un titre de niveau 2, etc.

# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3 
#### Titre de niveau 4
##### Titre de niveau 5
###### Titre de niveau 6

---

# Le formatage du texte

## Mettre des mots en gras et/ou en italique
Il existe deux syntaxe pour mettre le texte en italique ou en gras. Les `*` et les `_` qu'il faut mettre et début et à la fin de chaque morceau de texte qui doit être en italique ou en gras. Un seul symbole de chaque côté met le texte en italique, deux symboles le mettent en gras et trois symboles combinent les deux. Pour que cela fonctionne, il ne doit pas y avoir d'espace entre les symboles et le texte. 

*Ce texte est en italique*.
_Ce texte est aussi en italique_.

**Ce texte est en gras**.
__Ce texte est aussi en gras.__

_Vous **pouvez** combiner les deux_.

## Surligner le texte

Pour surligner le texte, mettez ==deux symboles "égale"== au début et à la fin de la ==portion de texte cible.== 

## Barrer des mots

Les mots entourés par deux tildes `~` de chaque côté apparaissent ~~barrés~~. 

## Les blocs de texte

Pour créer un bloc de texte, mettez le symbole `>` au début du paragraphe concerné. 

> *"Les existences humaines font face à des problèmes de plus en plus complexes et urgents, et leur efficacité dans la résolution de ces problèmes est cruciale pour la stabilité et la continuité du progrès de la société."*

\- Doug Engelbart, 1961.

>Vous pouvez ==~~***combiner***~~== les formatages comme bon vous semble.

## Les listes

- Item 1
- Item 2
  - Item 2a
  - Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b 

## Les liste de tâches

- [ ] Les #tags, les [liens](), et **le formatage du texte** sont pris en charge par les listes de tâches.
- [ ] La syntaxe requise pour commencer une liste est la suivante : `- [ ]`.
- [x] Elément complété.
- [ ] Elément non complété.
- [ ] Les tâches peuvent êtres complétées en mode prévisualisation.

## Les tableaux

Vous pouvez créer des tableaux en assemblant des listes de mots et en les divisant avec des tirets `-` (pour la première colonne), et ensuite séparer chaque colonne avec une barre verticale `|`. Pour en créer de façon plus intuitive, faite un clique droit là où vous voulez mettre le tableau, puis sélectionnez `Insérer > Tableau`. 

| Premier titre                  | Second titre                  |
| ------------------------------ | ----------------------------- |
| Contenu de la cellule 1        | Contenu de la cellule 2       |
| Contenu de la première colonne | Contenu de la seconde colonne |

| Les tableaux peuvent être justifiés avec une colonne | Un autre exemple avec un titre long |
| :--------------------------------------------------- | ----------------------------------: |
| avec le `:`                                          |                       Texte justifé |

Si vous mettez des liens dans les tableaux, ils vont fonctionner. Mais si vous utilisez des liens contenant un alias, cela devrait être espacé d'un `\` pour éviter que cela soit traité par le logiciel comme un élément de construction d'un tableau. 
	Pour faire un lien contenant un alias, mettez à l'intérieur du lien et après le titre réel de la note un `|` suivi du titre alternatif. Vous pouvez enregistrer des alias dans les [[propriétés]] de vos notes pour rendre leur utilisation future plus simple. 

| Premier titre                               | Second titre                       |
| ------------------------------------------- | ---------------------------------- |
| [[Formater vos notes\|Formatage des notes]] | [[Raccourcis clavier\|Raccourcis]] |

--- 
# Les images

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

---

# Les liens

http://obsidian.md - automatique !
[Obsidian](http://obsidian.md) 

Le style de liens Markdown peut être utilisé pour pointer vers un objet extérieur à la note que vous consultez, tel qu'une page Web, une image ou une vidéo se trouvant sur Internet, une note, une image, une vidéo ou un fichier audio se trouvant dans votre coffre. S'il y a de espaces dans le lien url, ils peuvent être remplacés en utilisant la syntaxe `%20` comme ceci `[image copiée](image%20copiée)` ou en entourant l'objet cible avec le caractères `<>` comme ceci `[lien démo](<lien démo>)`. 

>Pour en savoir plus sur les liens vers des notes, des images ou d'autres types de fichier, voir la page sur les [[fichiers incrémentés]]. 

---

# Lignes de code intégrées

Le texte entouré ``d'apostrophes inversées`` sera traité par le logiciel comme du code. 

---

# Les blocs de code

La syntaxe colorée est prise en charge par le langage spécifié le langage spécifié après la première série d'apostrophes inversées. Nous utilisons prismjs pour la syntaxe colorée. Une liste des langages pris en charge est disponible [sur leur site Internet](https://prismjs.com/#supported-languages).

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
    
    Le texte indenté avec la touche "tab" est formatté comme ceci et prend aussi l'apparence d'un bloc de code.

---

# Les notes de bas de page
Vous pouvez aussi intégrer à vos notes des renvois vers des notes de bas de pages. Pour cela, utilisez la syntaxe `[^].` Et sélectionnez "Note de bas de page" dans le sélecteur qui s'ouvre, puis écrivez le contenu de la note de bas de page.

Voici un exemple de note de bas de page simple : [^1] et voici une note de pas de page longue : [^2]


Le contenu de la note de bas de page s'affiche par défaut tout en bas de votre note, mais vous pouvez la déplacer où vous voulez par un simple copier-coller.

[^1]: Ceci est une note de bas de page simple.

[^2]: Ce ci est une note de pas de page longue. Elle est contient différentes sortes d'éléments et s'étend sur plusieurs paragraphes.
	
	{vous pouvez y mettre du code}
	Ou bien un [[Traduction d'Obsidian/Traduits/Déjà présents sur le hub/How to/Obsidian|lien vers une autre note]] 
	
	En fait, vous pouvez y inclure tout ce que vous voulez et la note de bas de page peut être aussi longue que vous le souhaitez.

# Les formules mathématique 

Vous pouvez écrire dans vos notes toutes sortes de formules mathématiques grâce à des petites lignes de code.  
En voici un exemple :

$$\begin{vmatrix}a & b\\
c & d
\end{vmatrix}=ad-bc$$

Vous pouvez aussi mettre des formules mathématique directement sur la même ligne que le texte : $e^{2i\pi} = 1$.

# Autres spécifités d'Obsidian

## Liens vers une page du coffre 

Lien vers une page : [[Traduction d'Obsidian/Traduits/Déjà présents sur le hub/How to/Obsidian|Lien interne]]. 

## Liens incrémentés 

Vous pouvez faire un lien vers une page de votre coffre en rendant son contenu visible sans avoir besoin de l'ouvrir (pour en savoir plus, consultez la page [[Fichiers incrémentés]]). 

# Note pour les développeur

Nous nous efforçons de fournir un maximum de capacité sans compromettre les formats existants, cependant la variété de formatages markdown que nous utilisons est quelques peu non-orthodoxe. Il s'agit dans l'ensemble du format CommonMark, avec l'ajout de quelques fonctionnalités venant du GitHub Flavored Markdown (GFM), une prise en charge partielle du format LaTex et notre propre syntaxe d'incrémentation. Pour en savoir plus, nous vous suggérons de consulter la note sur les [[Formats acceptés]].
