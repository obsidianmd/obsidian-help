---
permalink: import/notion
localized: '2026-03-18'
aliases:
  - Import from Notion
---
Obsidian vous permet de migrer facilement vos notes depuis Notion en utilisant le [[Importer|plugin Importer]]. Cela convertira vos données Notion en fichiers Markdown durables que vous pouvez utiliser hors ligne avec Obsidian et de nombreuses autres applications.

Obsidian propose deux façons d'importer vos données Notion :

1. **L'import par API** préserve l'ensemble de votre espace de travail, y compris les bases de données et les formules qui sont converties en [[Introduction aux Bases|Bases]], mais nécessite un jeton d'intégration Notion et une connexion internet.
2. **L'import par fichier** ne préserve pas les bases de données mais ne nécessite ni jeton API ni connexion internet.

## Import par API

### Créer un jeton d'intégration API Notion

Pour accéder à vos données Notion via l'API, vous avez besoin d'un jeton d'intégration. Cette étape prend environ 2 minutes.

Le jeton est une longue chaîne de chiffres et de lettres commençant généralement par `ntn_...` qui vous permettra de télécharger vos données depuis Notion.

1. Connectez-vous à votre tableau de bord [Notion Integrations](https://www.notion.so/profile/integrations/internal).
2. Choisissez **New integration**.

![[notion-integration.png#interface]]

2. Donnez un nom à votre intégration, par ex. « Personnel ». N'importe quel nom peut être utilisé.
3. Choisissez l'espace de travail que vous souhaitez exporter.
4. Cliquez sur **Save** et continuez vers **Configure integration settings**.
5. Dans l'onglet **Configuration**, votre jeton API est accessible dans le champ **Internal Integration Secret**.
6. Sélectionnez **Show** puis **Copy**.
7. Enregistrez le jeton dans un endroit sûr comme votre gestionnaire de mots de passe.

![[notion-token.png#interface]]

Ensuite, donnez à votre intégration l'accès aux pages et bases de données Notion que vous souhaitez importer.

1. Allez dans l'onglet **Access** de l'intégration que vous venez de créer.
2. Cliquez sur **Edit access**.
3. Ajoutez les pages et bases de données que vous souhaitez importer.

Vous pouvez maintenant convertir vos données à l'aide d'Obsidian Importer.

### Importer vos données Notion via l'API

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** via la palette de commandes ou l'icône du ruban.
5. Sous **File format**, sélectionnez **Notion (API)**.
6. Sous **API token**, collez votre **Internal Integration Secret** depuis Notion.
7. Cliquez sur **Load** pour choisir les bases de données et pages que vous souhaitez importer.
8. Vérifiez et modifiez les options d'import.
9. Sélectionnez **Import** et attendez que l'import soit terminé.
10. C'est terminé !

### Limitations

> [!info] L'import par API est récent
> L'importateur API Notion est récent. En raison de la complexité des espaces de travail Notion, certains cas particuliers peuvent ne pas avoir été pris en compte. Si vous rencontrez des problèmes avec la conversion, [soumettez un rapport de bug](https://github.com/obsidianmd/obsidian-importer/issues) afin que nous puissions l'améliorer.

En raison des limites de débit de l'API Notion, l'import de grands espaces de travail peut prendre un temps considérable. Veuillez patienter.

En raison des limitations de l'API Notion, certaines données ne sont pas disponibles ou ne peuvent pas être converties :

- Seule la vue principale de chaque base de données est importée.
- Les [sources de données liées](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) ne sont pas importées : *"L'API de Notion ne prend actuellement pas en charge les sources de données liées. Lorsque vous partagez une base de données avec votre intégration, assurez-vous qu'elle contient la source de données d'origine !"*
- Fonctions `People` : `name()` et `email()`
- Fonctions `Text` : `style()` et `unstyle()`

De plus, Importer effectuera les modifications suivantes :

- Les pages sans pages enfants ni bases de données seront importées sous la forme `[nom_du_fichier].md` au lieu de `[nom_du_fichier]/[nom_du_fichier].md`.
- Les bases de données sont toujours représentées sous forme de dossiers nommés `[nom de la base de données]` avec un fichier `[nom de la base de données].base` à l'intérieur.

## Import par fichier

L'import par fichier est une méthode alternative pour importer vos données Notion. Cette méthode ne préserve pas les bases de données mais ne nécessite ni jeton API ni connexion internet.

### Exporter vos données depuis Notion

Pour préparer vos données à l'import, vous devrez exporter l'ensemble de votre espace de travail en utilisant le format d'export HTML de Notion. Nous vous recommandons de ne pas utiliser l'export Markdown de Notion car il omet des données importantes. Vous devez avoir un accès administrateur à l'espace de travail Notion pour exporter tout le contenu de l'espace de travail.

1. Allez dans **[[Paramètres]]** en haut de la barre latérale de Notion.
2. Sous **Workspace**, sélectionnez **General**.
3. Trouvez et sélectionnez **Export all workspace content**.
4. Sous **Export format**, sélectionnez **HTML**.
5. Choisissez **Include everything**.
6. Activez **Create folders for subpages**.
7. Vous recevrez un fichier `.zip` par adresse électronique ou directement dans le navigateur.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Importer votre fichier .zip Notion

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** via la palette de commandes ou l'icône du ruban.
5. Sous **File format**, sélectionnez **Notion (.zip)**.
6. Choisissez le fichier `.zip` contenant les fichiers Notion que vous souhaitez importer. *Il est recommandé d'importer tout votre Notion en une seule fois afin que les liens internes puissent être correctement réconciliés.*
7. _Facultativement_, sélectionnez un dossier pour l'import. Vos pages et bases de données Notion seront imbriquées dans ce dossier.
8. Activez **Save parent pages in subfolders** pour conserver la structure Notion. *Notez que dans Notion vous pouvez écrire du contenu dans des dossiers, ce qui n'est pas possible dans Obsidian : ces pages seront ajoutées comme sous-page dans le dossier.*
9. Sélectionnez **Import** et attendez que l'import soit terminé.
10. C'est terminé !

### Dépannage

Si vous rencontrez des problèmes lors de l'import depuis Notion :

- Assurez-vous d'utiliser **HTML** comme format d'export dans Notion, **pas Markdown**.
- Si Obsidian semble se figer pendant l'import, désactivez les modules complémentaires et réessayez.

Vous rencontrez autre chose ? Recherchez dans [le dépôt d'Importer](https://github.com/obsidianmd/obsidian-importer/issues) pour voir si d'autres personnes ont rencontré le même problème.

#### Importer de grands espaces de travail

Si vous importez un espace de travail de plusieurs gigaoctets de données, l'export depuis Notion peut contenir des fichiers `.zip` imbriqués. Dans ce cas, vous pouvez voir un message d'erreur d'import ressemblant à ceci :

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Si vous voyez cette erreur, vous pouvez décompresser le fichier provenant de Notion, puis importer les fichiers `Export-{id}-Part-1.zip` imbriqués.
