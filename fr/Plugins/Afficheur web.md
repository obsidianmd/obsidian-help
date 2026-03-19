---
permalink: plugins/web-viewer
aliases:
  - Plugins/Modules principaux/Afficheur Web
localized: '2026-03-18'
---
La visionneuse web est un [[Modules principaux|module principal]] qui vous permet d'ouvrir des liens externes dans Obsidian sur ordinateur. Cela vous permet de lire le contenu des liens sans quitter l'application et facilite le multitâche dans les projets de recherche web.

Les liens externes s'ouvrent sous forme d'[[Onglets|onglet]] que vous pouvez réorganiser, diviser et ouvrir dans une [[Fenêtres détachées|fenêtre détachée]]. Toutes les cartes de pages web intégrées dans les fichiers [[Canvas]] peuvent être ouvertes sous forme d'onglets de la visionneuse web.

La visionneuse web ne remplace pas votre navigateur principal. Elle offre un moyen rapide d'accéder aux pages web pour vos recherches dans Obsidian. Cependant, elle n'offre pas les fonctionnalités complètes, les contrôles de sécurité ou l'extensibilité d'un navigateur dédié.

## Mode lecture

Cliquez sur l'icône de lunettes pour afficher une version en texte brut de la page web. Cette fonctionnalité fonctionne en nettoyant le contenu à l'aide de la bibliothèque Readability de Mozilla, développée pour Firefox.

## Enregistrer dans le coffre

Cliquez sur l'icône d'actions supplémentaires pour enregistrer une page web dans votre coffre. Vous pouvez personnaliser l'emplacement de sauvegarde en allant dans **[[Paramètres]]** → **Visionneuse web**.

## Blocage des publicités

La visionneuse web bloque les publicités par défaut. Vous pouvez personnaliser les règles de blocage des publicités en ajoutant des listes telles qu'[Easylist](https://easylist.to/).

## Sécurité

Si vous utilisez des modules complémentaires Obsidian tiers, nous vous recommandons d'utiliser votre navigateur principal pour les tâches sensibles et les sites protégés par mot de passe au lieu de la visionneuse web.

La visionneuse web est basée sur la même fonctionnalité [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) qui vous permet d'intégrer des pages web dans [[Canvas]]. La visionneuse web a fait l'objet d'un [audit indépendant](https://obsidian.md/fr/blog/cure53-second-client-audit/) pour vérifier qu'elle a été implémentée de manière sécurisée.

Les modules Obsidian [[Sécurité des plugins#Capacités des modules|ne sont pas isolés]] et ont un contrôle approfondi sur l'application. Cette conception permet des fonctionnalités puissantes mais comporte également des compromis en matière de sécurité. Lorsqu'Obsidian est en cours d'exécution, les modules complémentaires tiers ont un accès complet aux cookies de la visionneuse web.
