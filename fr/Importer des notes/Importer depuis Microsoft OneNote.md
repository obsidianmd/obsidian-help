---
permalink: import/onenote
localized: '2026-03-18'
---
Obsidian vous permet de migrer facilement vos notes depuis Microsoft OneNote en utilisant le [[Importer|module Importer]]. Celui-ci convertira vos données OneNote en fichiers Markdown durables, que vous pourrez utiliser avec Obsidian et de nombreuses autres applications.

Obsidian offre deux façons d'importer vos données OneNote :

1. **Compte Microsoft** : se connecte à votre compte Microsoft et importe les blocs-notes synchronisés avec OneDrive. Nécessite une connexion internet.
2. **Importation de fichiers** : utilise les fichiers d'exportation OneNote (`.onepkg` et `.one`). Ne nécessite ni compte ni connexion internet, et fonctionne pour les blocs-notes qui n'ont jamais été synchronisés.

## Importer depuis votre compte Microsoft

> [!Warning]
> Seuls les blocs-notes appartenant à votre compte peuvent être importés. Les blocs-notes partagés par d'autres personnes ne sont pas pris en charge, et un compte professionnel ou scolaire peut nécessiter l'approbation de votre organisation.

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **Microsoft OneNote**.
6. Cliquez sur **Sign in** pour ouvrir votre navigateur web sur la page de connexion Microsoft. Entrez les identifiants de votre compte Microsoft contenant vos blocs-notes OneNote. Plus d'informations sur le processus de connexion Microsoft sont disponibles ci-dessous.
7. Cliquez sur **Accept** pour autoriser Obsidian à consulter vos blocs-notes OneNote.
8. Cliquez sur **Open Link** pour permettre à votre navigateur de vous rediriger vers l'application Obsidian.
9. Dans l'application Obsidian, la boîte de dialogue d'Importer affichera maintenant que vous êtes connecté et listera vos blocs-notes et sections OneNote. Cochez les sections que vous souhaitez importer.
10. Cliquez sur **Import** et attendez que l'importation soit terminée.
11. C'est terminé !

Si vos blocs-notes appartiennent à un compte professionnel ou scolaire, OneNote peut refuser l'accès du module après votre connexion. Dans ce cas, un bouton **Use work or school access** apparaît à côté de **Sign out**. Utilisez-le pour vous reconnecter avec les permissions élargies nécessaires pour ces comptes. Votre organisation devra peut-être approuver cette permission avant qu'elle ne fonctionne.

### Dépannage

#### Aucune section ou aucun bloc-notes n'apparaît

Assurez-vous que les blocs-notes que vous essayez d'importer sont synchronisés avec OneDrive et visibles dans OneNote Web. Ils doivent vous appartenir (les blocs-notes partagés écrits par d'autres ne sont pas pris en charge).

Si une section spécifique est manquante, vérifiez qu'il ne s'agit pas d'une section verrouillée, car celles-ci sont invisibles tant que le verrouillage n'est pas supprimé.

S'il s'agit d'un bloc-notes professionnel ou scolaire, consultez la note sur **Use work or school access** ci-dessus.

#### Les notes importées sont vides ou ont du contenu manquant

Ce problème peut survenir sur les blocs-notes que vous utilisez rarement. Pour résoudre le problème, suivez ces étapes :

1. Ouvrez [OneNote Web](https://onenote.com/notebooks) dans votre navigateur.
2. **Faites un clic droit** sur les blocs-notes dont le contenu est manquant.
3. Sélectionnez **Exporter le bloc-notes** dans le menu.
4. **Décompressez** le fichier que vous venez de télécharger dans un dossier.
5. Téléversez vos blocs-notes OneNote [ici](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Ouvrez **Obsidian Importer** et essayez d'importer à nouveau.

Si vous avez suivi ces conseils et que votre problème n'est toujours pas résolu, il est possible qu'il y ait un problème temporaire avec les serveurs Microsoft. Si c'est le cas, attendez quelques minutes et réessayez. Si le problème persiste, veuillez ouvrir un ticket sur le [dépôt GitHub d'Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Importer des fichiers OneNote (.one, .onepkg)

L'importation de fichiers est une méthode alternative pour importer vos données OneNote. Elle lit les fichiers d'exportation créés par OneNote, et ne nécessite donc ni compte Microsoft ni connexion internet. Utilisez-la pour les blocs-notes stockés uniquement sur votre ordinateur, les blocs-notes auxquels votre compte ne peut pas accéder, ou lorsque vous préférez ne pas vous connecter.

### Exporter vos blocs-notes depuis OneNote

Nous recommandons d'exporter chaque bloc-notes en tant que **Package OneNote** (`.onepkg`). Un package contient toutes les sections du bloc-notes, ce qui vous permet d'exporter et d'importer un bloc-notes en une seule étape, et Importer listera ses sections pour que vous puissiez choisir.

L'exportation n'est disponible que dans **OneNote pour Windows**, l'application de bureau fournie avec Microsoft 365. L'application OneNote pour Mac et l'ancienne application OneNote pour Windows 10 ne peuvent pas exporter dans ces formats.

1. Ouvrez le bloc-notes que vous souhaitez exporter dans OneNote pour Windows.
2. Allez dans **Fichier → Exporter**.
3. Sous **Exporter l'élément actuel**, choisissez **Bloc-notes**.
4. Sous **Sélectionner le format**, choisissez **Package OneNote (\*.onepkg)**.
5. Cliquez sur **Exporter** et choisissez où enregistrer le fichier.
6. Répétez pour chaque bloc-notes que vous souhaitez importer.

Pour exporter une seule section, choisissez **Section** à l'étape 3 et **Section OneNote 2010-2016 (\*.one)** à l'étape 4.

Vous pouvez également importer les fichiers de section que OneNote conserve déjà sur le disque, sans rien exporter :

- Les blocs-notes stockés sur votre ordinateur se trouvent dans `Documents\OneNote Notebooks`, un fichier `.one` par section.
- Les sauvegardes des blocs-notes synchronisés se trouvent dans `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importer vos fichiers OneNote

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **Microsoft OneNote (.one, .onepkg)**.
6. Choisissez les fichiers `.onepkg` et `.one` que vous souhaitez importer. Vous pouvez sélectionner plusieurs fichiers à la fois, afin que tous vos blocs-notes puissent être importés ensemble.
7. Sous **Sections à importer**, les sections trouvées dans ces fichiers sont listées, toutes cochées. Décochez celles que vous ne souhaitez pas.
8. Optionnellement, choisissez un **Dossier de sortie** pour l'importation, l'emplacement où les pièces jointes doivent être enregistrées, et ce qui doit arriver aux **Notes existantes** si vous importez le même bloc-notes à nouveau.
9. Cliquez sur **Import** et attendez que l'importation soit terminée.
10. C'est terminé !

Chaque section devient un dossier, et chaque page qu'elle contient devient une note. Une sous-page est enregistrée dans un dossier nommé d'après la page au-dessus d'elle, ce qui conserve la structure affichée par OneNote et évite les collisions entre deux sous-pages portant le même nom. Les pages de la corbeille du bloc-notes ne sont pas importées.

### Limitations

- Les sections protégées par mot de passe sont stockées chiffrées, et leurs pages sont ignorées. Supprimez le mot de passe dans OneNote et exportez à nouveau pour les importer.
- Les fichiers protégés par des droits ne peuvent être ouverts que par un compte autorisé par la politique, et ne peuvent pas être lus par Importer.

## Confidentialité

Si vous choisissez d'importer en utilisant votre compte Microsoft, le module Obsidian Importer utilise [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) pour s'authentifier et importer vos blocs-notes OneNote. Cela accorde un jeton d'accès à court terme à votre compte qui est utilisé uniquement depuis votre ordinateur et n'est jamais stocké. Une fois l'importation terminée, vous pouvez optionnellement révoquer le jeton depuis la [page des applications et services Microsoft](https://account.live.com/consent/Manage).

L'importation de fichiers ne se connecte jamais à Microsoft : les fichiers que vous sélectionnez sont lus sur votre ordinateur, sans aucune connexion réseau.
