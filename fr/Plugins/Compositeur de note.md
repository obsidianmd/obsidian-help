---
permalink: plugins/note-composer
localized: '2026-03-18'
aliases:
  - Note composer
---
Le Compositeur de note est un [[Modules principaux|module principal]] qui vous permet de fusionner deux notes ou d'extraire une partie d'une note dans une nouvelle note.

## Fusionner des notes

La fusion de notes ajoute une note à une autre et supprime la première. Le Compositeur de note met à jour tous les liens pour référencer la note fusionnée.

Lorsque vous sélectionnez la note dans laquelle fusionner, vous pouvez choisir entre les méthodes suivantes :

- `Entrée` : Ajoute la note source à la _fin_ de la note de destination.
- `Maj+Entrée` : Ajoute la note source au _début_ de la note de destination.
- `Ctrl+Entrée` (ou `Cmd+Entrée` sur macOS) : Crée une nouvelle note avec le contenu de la note source.

Pour fusionner la note active avec une autre note de votre coffre :

**Explorateur de fichiers**

1. Dans l'explorateur de fichiers, faites un clic droit sur la note que vous souhaitez fusionner.
2. Cliquez sur **Fusionner le fichier entier avec…**.
3. Sélectionnez la note dans laquelle vous souhaitez fusionner.
4. Cliquez sur **Fusionner** pour confirmer.

**Palette de commandes**

1. Ouvrez la [[Palette de commandes]].
2. Sélectionnez **Compositeur de note : Fusionner le fichier actuel avec un autre fichier…**.
3. Sélectionnez la note dans laquelle vous souhaitez fusionner.
4. Cliquez sur **Fusionner** pour confirmer.

> [!tip] Astuce
> Par défaut, le Compositeur de note vous demande une confirmation avant de fusionner des notes. Si vous désactivez la confirmation et que vous fusionnez une note par erreur, vous pouvez toujours la récupérer avec le module [[Récupération de fichier]].

## Extraire une note

Lorsque vous sélectionnez la note dans laquelle extraire la sélection, vous pouvez choisir entre les méthodes suivantes :

- `Entrée` : Ajoute le texte sélectionné à la _fin_ de la note de destination.
- `Maj+Entrée` : Ajoute le texte sélectionné au _début_ de la note de destination.
- `Ctrl+Entrée` (ou `Cmd+Entrée` sur macOS) : Crée une nouvelle note avec le texte sélectionné.

Pour extraire du texte dans une nouvelle note :

**Éditeur**

1. En **mode d'édition**, sélectionnez le texte que vous souhaitez extraire.
2. Faites un clic droit sur le texte sélectionné.
3. Cliquez sur **Extraire la sélection actuelle…**.
4. Sélectionnez la note dans laquelle vous souhaitez extraire.

**Palette de commandes**

1. En **mode d'édition**, sélectionnez le texte que vous souhaitez extraire.
2. Ouvrez la [[Palette de commandes]].
3. Sélectionnez **Compositeur de note : Extraire la sélection actuelle…**.
4. Sélectionnez la note dans laquelle vous souhaitez extraire.

> [!tip] Astuce
> Par défaut, le Compositeur de note remplace le texte extrait par un lien vers la note de destination. Dans les paramètres, vous pouvez également choisir d'[[Incorporer des fichiers|intégrer]] la note de destination à la place, ou de ne rien laisser.

## Fichier modèle

En configurant un modèle, vous pouvez personnaliser le contenu avant de l'ajouter à la nouvelle note. Pour utiliser un modèle, saisissez un **Emplacement du fichier modèle** dans les paramètres du module.

Le modèle peut contenir les variables suivantes :

| Variable          | Description                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Le contenu à fusionner, ou le texte de la sélection extraite. Si vous n'incluez pas cette variable, le Compositeur de note ajoute le contenu en bas du modèle. |
| `{{fromTitle}}`   | Nom de la note source.                                                                                                                                   |
| `{{newTitle}}`    | Nom de la note de destination. Par exemple, pour ajouter le nom du fichier comme entête en haut du fichier.                                              |
| `{{date:FORMAT}}` | Date de création de la nouvelle note. Par exemple, `{{date:YYYY-MM-DD}}`.                                                                                |
