---
permalink: resources
description: >-
  Find support resources, report security or community violations, and learn how
  to contribute to Obsidian.
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Help and support
---
Trouvez des ressources d'assistance, signalez des problèmes de sécurité ou des violations communautaires, et apprenez comment contribuer à Obsidian.

## Questions et conseils

Si vous avez une question sur l'utilisation d'Obsidian, ou si vous souhaitez faire connaissance avec d'autres utilisateurs d'Obsidian, vous pouvez rejoindre l'un de nos canaux communautaires :

- [[Coffre bac à sable|Explorer le coffre de démonstration]]
- [Rejoindre notre serveur Discord](https://discord.gg/obsidianmd)
- [Visiter le forum](https://forum.obsidian.md/)

### Signaler des bugs et demander des fonctionnalités

> [!tip]- Vérifiez d'abord les doublons
> Avant de demander une nouvelle fonctionnalité ou de signaler un bug, veuillez parcourir les autres publications pour vous assurer que personne ne l'a déjà soumis.

Si vous souhaitez suggérer une fonctionnalité dans Obsidian, rendez-vous sur [Demandes de fonctionnalités](https://forum.obsidian.md/c/feature-requests/8).

Si vous souhaitez signaler un bug dans Obsidian, rendez-vous sur [Rapports de bugs](https://forum.obsidian.md/c/bug-reports/7). Les rapports de bugs sont déplacés vers le [Cimetière des bugs](https://forum.obsidian.md/c/bug-graveyard/12) une fois résolus.

### Collecter les informations de débogage

Lorsque vous rencontrez un bug ou avez besoin de l'aide de l'[[#Contacter l'assistance Obsidian|assistance Obsidian]], fournir les informations de débogage peut être très utile. Voici comment les obtenir :

1. Ouvrez la [[Palette de commandes|palette de commandes]].
2. Tapez **Show debug info**.
3. Sélectionnez l'option **Show debug info** mise en surbrillance.
4. Sélectionnez **Copy to clipboard**.
5. Collez les informations copiées dans votre rapport de bug ou votre courriel à l'assistance Obsidian.

### Vérifier le temps de démarrage

Vous pouvez vérifier combien de temps Obsidian met à démarrer en utilisant la fonctionnalité **Startup time**.

1. Ouvrez **[[Paramètres|Paramètres]] → Général → Avancé**.
2. À côté de **Notify if startup takes longer than expected**, sélectionnez l'**icône de minuterie**.
3. Une fenêtre **Startup time** apparaîtra, affichant des informations de chronométrage détaillées :
   - **Total app startup** : temps de lancement global.
   - **Initialization** : temps passé à charger l'application elle-même.
   - **Vault** : temps de chargement des fichiers de votre coffre.
   - **Workspace** : temps de restauration des onglets et de la disposition.
   - **Core plugins** : temps utilisé par les modules principaux actifs.
4. Vous pouvez sélectionner **Copy to clipboard** pour copier le rapport à des fins de dépannage ou de partage.

De plus, vous pouvez activer **Notify if startup takes longer than expected** pour recevoir un avertissement si le démarrage est anormalement lent.

### Capturer les journaux de la console

Lorsque vous devez signaler un bug lié à un module Obsidian ou lorsque l'[[#Contacter l'assistance Obsidian|assistance Obsidian]] vous demande de fournir des informations de journal, vous devrez peut-être accéder à la console Obsidian depuis l'application Obsidian. Voici comment procéder selon votre système d'exploitation :

- **Windows/Linux** : `Ctrl+Shift+I`
- **macOS** : `Command+Option+I`

> [!info]+ Méthode d'accès alternative
> Si vous utilisez le style de cadre de fenêtre **Obsidian frame**, vous pouvez également accéder à la console Obsidian via le menu du titre.

Une fois la console de développement ouverte :

1. Sélectionnez **console** dans le menu supérieur.
2. Choisissez l'option du menu latéral **errors**. Les erreurs éventuelles seront affichées sous la forme `# errors`.
3. Sélectionnez l'un des messages d'erreur en rouge.
4. Choisissez l'option **Save as...** Cela sauvegardera toutes les erreurs de la console.
5. Enregistrez le fichier journal sur votre appareil.
6. Joignez le fichier journal à votre rapport de bug ou votre courriel à l'assistance Obsidian.

![[help-support-console-menu.png#interface|600]]

> [!warning]+ Accès à la console sur mobile
> Les appareils mobiles et les tablettes ont un accès limité à leurs consoles de développement. Pour ces utilisateurs, nous recommandons d'utiliser le module complémentaire [Logstravaganza](https://obsidian.md/plugins?id=logstravaganza) pour générer automatiquement les données du journal de la console dans une note Markdown.

### Contacter l'assistance Obsidian

Obsidian offre une assistance par courriel uniquement pour les demandes concernant les [[Licence commerciale|licences commerciales]], votre compte, le paiement et les services complémentaires ([[Introduction à Obsidian Sync|Obsidian Sync]] et [[Introduction à Obsidian Publish|Obsidian Publish]]). Si vous avez besoin d'aide sur l'un de ces sujets, [envoyez un courriel à l'équipe Obsidian](mailto:support@obsidian.md).

## Signaler un problème de sécurité

Si vous avez découvert un problème de sécurité dans Obsidian, ou si vous soupçonnez qu'un module est malveillant, veuillez [envoyer un courriel à l'équipe Obsidian](mailto:support@obsidian.md).

## Signaler une violation du Code de conduite

Que vous soyez victime ou témoin d'une violation de notre [[Code de conduite de la communauté|Code de conduite communautaire]], vous pouvez signaler l'incident à notre équipe de modération.

Signalez l'incident sur l'un des canaux communautaires suivants :

- [[Code de conduite de la communauté#Report on Discord|Signaler sur Discord]]
- [[Code de conduite de la communauté#Report on the forum|Signaler sur le forum]]

## Contribuer à Obsidian

Vous souhaitez mettre vos compétences et votre temps libre au service d'Obsidian ? Voici les domaines où nous avons vraiment besoin de votre aide :

- Aidez vos collègues utilisateurs d'Obsidian en répondant aux questions sur notre [serveur Discord](https://discord.gg/obsidianmd), notre [forum](https://forum.obsidian.md/), ou le reddit [ObsidianMD](https://old.reddit.com/r/ObsidianMD/).
- [[Développeurs|Développeurs]], nous avons vraiment besoin de votre aide pour enrichir notre [Documentation pour développeurs Obsidian](https://github.com/obsidianmd/obsidian-developer-docs).
- Connaissez-vous une langue écrite autre que l'anglais ? Envisagez de contribuer à nos [[Traductions|Traductions]] dans d'autres langues.
- Y a-t-il quelque chose dans cette documentation d'aide qui est obsolète ou confus ? Consultez le [[Guide de style|Guide de style]] et soumettez un [ticket et une pull request](https://github.com/obsidianmd/obsidian-help/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).
- Si vous le pouvez, vous pouvez [[Contributions financières|contribuer financièrement]] en utilisant l'un de nos services complémentaires payants.
