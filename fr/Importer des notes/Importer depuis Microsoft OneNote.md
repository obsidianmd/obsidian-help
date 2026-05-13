---
permalink: import/onenote
localized: '2026-03-18'

---
Obsidian vous permet de migrer facilement vos notes depuis Microsoft OneNote en utilisant le [[Importer|module Importer]]. Celui-ci convertira vos données OneNote en fichiers Markdown durables, que vous pourrez utiliser avec Obsidian et de nombreuses autres applications.

> [!Warning]
> Seuls les blocs-notes appartenant à votre compte personnel peuvent être importés. Les notes partagées, ou les comptes professionnels et scolaires ne sont pas pris en charge.

## Importer vos données OneNote dans Obsidian

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

![[OneNote-Importer-Select-Sections.png]]

10. Cliquez sur **Import** et attendez que l'importation soit terminée.
11. C'est terminé !

## Dépannage

### Aucune section ou aucun bloc-notes n'apparaît

Assurez-vous que les blocs-notes que vous essayez d'importer sont synchronisés avec OneDrive et visibles dans OneNote Web. Ils doivent vous appartenir (les blocs-notes partagés écrits par d'autres ne sont pas pris en charge).

Si une section spécifique est manquante, vérifiez qu'il ne s'agit pas d'une section verrouillée — celles-ci sont invisibles tant que le verrouillage n'est pas supprimé.

### Les notes importées sont vides ou ont du contenu manquant

Ce problème peut survenir sur les blocs-notes que vous utilisez rarement. Pour résoudre le problème, suivez ces étapes :

1. Ouvrez [OneNote Web](https://onenote.com/notebooks) dans votre navigateur.
2. **Faites un clic droit** sur les blocs-notes dont le contenu est manquant.
3. Sélectionnez **Exporter le bloc-notes** dans le menu.
4. **Décompressez** le fichier que vous venez de télécharger dans un dossier.
5. Téléversez vos blocs-notes OneNote [ici](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Ouvrez **Obsidian Importer** et essayez d'importer à nouveau.

Si vous avez suivi ces conseils et que votre problème n'est toujours pas résolu, il est possible qu'il y ait un problème temporaire avec les serveurs Microsoft. Si c'est le cas, attendez quelques minutes et réessayez. Si le problème persiste, veuillez ouvrir un ticket sur le [dépôt GitHub d'Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Confidentialité

Le module Obsidian Importer utilise [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) pour s'authentifier auprès de votre compte Microsoft et importer vos blocs-notes OneNote. Cela accorde un jeton d'accès à court terme à votre compte qui est utilisé uniquement depuis votre ordinateur et n'est jamais stocké. Une fois l'importation terminée, vous pouvez optionnellement révoquer le jeton depuis la [page des applications et services Microsoft](https://account.live.com/consent/Manage).
