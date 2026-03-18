---
permalink: uri
localized: '2026-03-18'
---
L'URI Obsidian est un protocole URI personnalisé pris en charge par Obsidian qui vous permet de déclencher diverses actions, telles qu'ouvrir une note ou créer une note. L'URI Obsidian permet l'automatisation et les flux de travail inter-applications.

## Format d'URI

Les URI Obsidian utilisent le format suivant :

```
obsidian://action?param1=value&param2=value
```

Le paramètre `action` est l'action que vous souhaitez effectuer. Les actions disponibles incluent :

- `open` pour ouvrir une note.
- `new` pour créer ou ajouter du contenu à une note existante.
- `daily` pour créer ou ouvrir votre note quotidienne.
- `unique` pour créer une nouvelle note unique.
- `search` pour ouvrir une recherche.
- `choose-vault` pour ouvrir le gestionnaire de coffres.

> [!warning] Encodage
> Assurez-vous que vos valeurs sont correctement encodées en URI. Par exemple, les barres obliques `/` doivent être encodées en `%2F` et les espaces doivent être encodés en `%20`.
> 
 C'est particulièrement important car un caractère « réservé » mal encodé peut empêcher l'interprétation correcte de l'URI. [Voir ici pour plus de détails](https://en.wikipedia.org/wiki/Percent-encoding).

## Ouvrir une note

L'action `open` ouvre un coffre Obsidian, ou ouvre un fichier dans ce coffre.

### Exemples

- `obsidian://open?vault=my%20vault`
  Cela ouvre le coffre `my vault`. Si le coffre est déjà ouvert, le focus est mis sur la fenêtre.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Cela ouvre le coffre identifié par l'id `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Cela ouvre la note `my note.md` dans le coffre `my vault`, à condition que le fichier existe.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Cela recherchera tout coffre contenant le chemin `/home/user/my vault/path/to/my note`. Ensuite, le reste du chemin est transmis au paramètre `file`. Par exemple, si un coffre existe à `/home/user/my vault`, alors cela serait équivalent au paramètre `file` défini à `path/to/my note`.


> [!tip] Ouvrir un entête ou un bloc
> Avec un encodage URI correct, vous pouvez naviguer vers un entête ou un bloc dans une note. `Note%23Heading` naviguerait vers l'entête appelé « Heading », tandis que `Note%23%5EBlock` naviguerait vers le bloc appelé « Block ».

### Paramètres

- `vault` peut être soit le nom du coffre, soit l'id du coffre[^1].
- `file` peut être soit un nom de fichier, soit un chemin depuis la racine du coffre vers le fichier spécifié. Si l'extension du fichier est `md`, l'extension peut être omise.
- `path` un chemin absolu du système de fichiers vers un fichier.
  - L'utilisation de ce paramètre remplacera à la fois `vault` et `file`.
  - L'application recherchera le coffre le plus spécifique contenant le chemin de fichier spécifié.
  - Ensuite, le reste du chemin remplace le paramètre `file`.
- `prepend` ajoutera du contenu en haut du fichier et tentera de fusionner les propriétés.
- `append` ajoutera du contenu à la fin du fichier et tentera également de fusionner les propriétés.
- `paneType` (optionnel) détermine où la note sera ouverte dans l'interface.
  - s'il n'est pas présent, le dernier onglet actif est remplacé.
  - `paneType=tab` ouvre dans un nouvel onglet.
  - `paneType=split` ouvre dans un nouveau groupe d'onglets.
  - `paneType=window` ouvre dans une fenêtre détachée (bureau uniquement).

## Créer une note

L'action `new` crée une nouvelle note dans le coffre, éventuellement avec du contenu.

### Exemples

- `obsidian://new?vault=my%20vault&name=my%20note`
  Cela ouvre le coffre `my vault` et crée une nouvelle note appelée `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Cela ouvre le coffre `my vault` et crée une nouvelle note à `path/to/my note`.

### Paramètres

- `vault` peut être soit le nom du coffre, soit l'id du coffre[^1]. Identique à l'action `open`.
- `name` le nom du fichier à créer. Si cela est spécifié, l'emplacement du fichier sera choisi en fonction de vos préférences « Emplacement par défaut pour les nouvelles notes ».
- `file` un chemin absolu dans le coffre, incluant le nom. Remplacera `name` si spécifié.
- `path` un chemin absolu global. Fonctionne de manière similaire à l'option `path` dans l'action `open`, qui remplacera à la fois `vault` et `file`.
- `paneType` (optionnel) détermine où la note sera ouverte dans l'interface. Identique à l'action `open`.
- `content` (optionnel) le contenu de la note.
- `clipboard` (optionnel) utilise le contenu du presse-papiers au lieu de spécifier `content`.
- `silent` (optionnel) incluez ce paramètre si vous ne voulez pas ouvrir la nouvelle note.
- `append` (optionnel) incluez ce paramètre pour ajouter du contenu à un fichier existant si un tel fichier existe.
- `overwrite` (optionnel) écrase un fichier existant si un tel fichier existe, mais uniquement si `append` n'est pas défini.
- `x-success` (optionnel) voir [[#Utiliser les paramètres x-callback-url]].

## Créer ou ouvrir une note quotidienne

L'action `daily` crée ou ouvre votre note quotidienne. Le module [[Notes quotidiennes]] doit être activé.

### Exemples

- `obsidian://daily?vault=my%20vault`
  Cela ouvre le coffre `my vault` et crée ou ouvre la note quotidienne.

### Paramètres

L'action `daily` accepte les mêmes paramètres que l'action `new`.

## Note unique

L'action `unique` crée une nouvelle note unique dans le coffre. Le module [[Créateur de note unique]] doit être activé.

### Exemples

- `obsidian://unique?vault=my%20vault`
  Cela ouvre le coffre `my vault` et crée une nouvelle note unique.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Cela ouvre le coffre `my vault` et crée une nouvelle note unique avec le contenu `Hello World`.

### Paramètres

- `vault` peut être soit le nom du coffre, soit l'id du coffre[^1]. Identique à l'action `open`.
- `paneType` (optionnel) détermine où la note sera ouverte dans l'interface. Identique à l'action `open`.
- `content` (optionnel) le contenu de la note.
- `clipboard` (optionnel) utilise le contenu du presse-papiers au lieu de spécifier `content`.
- `x-success` (optionnel) voir [[#Utiliser les paramètres x-callback-url]].

## Ouvrir la recherche

L'action `search` ouvre [[Rechercher]] dans le coffre spécifié, et effectue éventuellement une recherche.

### Exemples

- `obsidian://search?vault=my%20vault`
  Cela ouvre le coffre `my vault` et ouvre [[Rechercher]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Cela ouvre le coffre `my vault`, ouvre [[Rechercher]] et effectue une recherche pour `Obsidian`.

### Paramètres

- `vault` peut être soit le nom du coffre, soit l'id du coffre[^1]. Identique à l'action `open`.
- `query` (optionnel) le terme de recherche à exécuter.

## Ouvrir le gestionnaire de coffres

L'action `choose-vault` ouvre le [[Gérer les coffres|gestionnaire de coffres]].

### Exemples

- `obsidian://choose-vault`

## Intégration avec Hook

Cette action URI Obsidian est destinée à être utilisée avec [Hook](https://hookproductivity.com/).

### Exemple

`obsidian://hook-get-address`

### Paramètres

- `vault` (optionnel) peut être soit le nom du coffre, soit l'id du coffre[^1]. S'il n'est pas fourni, le coffre actuel ou le dernier coffre ayant le focus sera utilisé.
- `x-success` (optionnel) voir [[#Utiliser les paramètres x-callback-url]].
- `x-error` (optionnel) voir [[#Utiliser les paramètres x-callback-url]].

Si `x-success` est défini, cette API l'utilisera comme x-callback-url. Sinon, elle copiera un lien Markdown de la note actuellement active dans le presse-papiers, sous forme d'URL `obsidian://open`.

## Utiliser les paramètres x-callback-url

Certains points d'accès acceptent les paramètres x-callback-url `x-success` et `x-error`. Lorsqu'ils sont fournis, Obsidian transmettra les informations suivantes au callback `x-success` :

- `name` le nom du fichier, sans l'extension de fichier.
- `url` l'URI `obsidian://` pour ce fichier.
- `file` (bureau uniquement) l'URL `file://` pour ce fichier.

Par exemple, si Obsidian reçoit
`obsidian://.....x-success=myapp://x-callback-url`, la réponse serait `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Formats abrégés

En plus des formats ci-dessus, deux formats « abrégés » supplémentaires sont disponibles pour ouvrir des coffres et des fichiers :

1. `obsidian://vault/my vault/my note` est équivalent à `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` est équivalent à `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Dépannage

### Enregistrer le protocole URI Obsidian

Sur Windows et macOS, exécuter l'application une fois devrait suffire pour enregistrer le protocole URI Obsidian sur votre ordinateur.

Sur Linux, le processus est beaucoup plus complexe :

1. Assurez-vous de créer un fichier `obsidian.desktop`. [Voir ici pour plus de détails](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Assurez-vous que votre fichier desktop spécifie le champ `Exec` comme `Exec=executable %u`. Le `%u` est utilisé pour transmettre les URI `obsidian://` à l'application.
3. Si vous utilisez le programme d'installation AppImage, vous devrez peut-être le décompresser en utilisant `Obsidian-x.y.z.AppImage --appimage-extract`. Assurez-vous ensuite que la directive `Exec` pointe vers l'exécutable décompressé.


[^1]: L'id du coffre est le code aléatoire de 16 caractères attribué au coffre, par exemple `ef6ca3e3b524d22f`. Cet id est unique par dossier sur votre ordinateur. L'id peut être trouvé en ouvrant le sélecteur de coffres et en cliquant sur « Copier l'ID du coffre » dans le menu contextuel du coffre souhaité.
