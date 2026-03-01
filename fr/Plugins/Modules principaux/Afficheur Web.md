L'afficheur Web est un [[Modules principaux|module principal]] vous permettant d'ouvrir des pages internet directement dans l'interface d'Obsidian. Cela vous permet de lire du contenu, de naviguer et faire des recherches sans avoir besoin de quitter le logiciel et de visualiser une page Web à côté d'une note Obsidian plus facilement en les faisant apparaître dans deux [[Travailler avec plusieurs volets|volets]] distincts.

Les pages Web sont ainsi ouvertes dans leur propre onglet que vous pouvez réarranger comme vous voulez, de la même façon qu'une [[Travailler avec plusieurs notes|note]] classique. Vous pouvez aussi l'ouvrir dans une nouvelle fenêtre comme si c'était une autre application. Toutes les cartes de pages Web intégrées dans des toiles [[Canvas]] peuvent être ouvertes sous la forme d'onglets dans l'afficheur Web.

> [!NOTE] Les paramètres de base
> En allant dans **[[Paramètres]] → Afficheur Web**, vous avez la possibilité de choisir le moteur de recherche qu'il utilisera ainsi que la page d'accueil qui s'ouvre lorsque vous mettez en route l'afficheur Web (par défaut, il n'y a pas de page d'accueil, mais cela ne vous empêche pas de faire une recherche). Vous pouvez aussi choisir d'activer ou désactiver l'option consistant à ouvrir les liens externes dans Obsidian plutôt que dans le navigateur de votre ordinateur. 

L'afficheur Web ne remplace pas votre navigateur de base. Il vous donne un moyen rapide et facile d'accéder à des pages Web lorsque vous faites des recherches en utilisant Obsidian. Cela ne vous donne pas accès à toutes les fonctionnalités d'un véritable navigateur, telles que notamment les [[Afficheur Web#Sécurité|fonctionnalités de sécurité]], les extensions ou certaines fonctionnalités d'ergonomie.

## La vue lecture

Cliquez sur l'**icône en forme de lunettes** (en haut à droite) pour voir le texte de la page Web avec la même ergonomie que les notes Obsidian. Cette fonctionnalité fonctionne en nettoyant le contenu de la bibliothèque *Readability* de Mozilla Firefox. 

## Enregistrer une page Web dans votre coffre

Cliquez sur le bouton **Plus d'actions** (les trois points en haut à droite) pour enregistrer une page Web dans votre coffre. Une note au format Markdown contenant un lien vers la page Web ainsi que quelques informations de bases sur celle-ci sera alors créée. Vous pouvez personnaliser l'emplacement de la page sauvegardée en allant dans **[[Paramètres]] → Afficheur Web**. 

Si vous préférez, vous pouvez aussi l'enregistrer en tant que [[signet]].

## Blocage des publicités

L'afficheur Web bloque les publicités par défaut. Vous pouvez personnaliser cela en ajoutant des listes de blocages telles que celles du site [Easylist](https://easylist.to/). Vous avez aussi la possibilité de désactiver le bloqueur de publicités et de personnaliser sa fréquence de mise à jours. 

## Sécurité

Si vous utiliser des modules Obsidian tiers, nous vous recommandons d'utiliser votre navigateur habituel pour les tâches sensibles et les sites protégés par un mot de passe. 

L'afficheur Web est basé sur la même fonctionnalité [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) que celle qui vous permet d'[[Fichiers incrémentés|incrémenter]] des pages Web dans [[Canvas]]. L'afficheur Web a fait l'objet d'un [audit indépendant](https://obsidian.md/blog/cure53-second-client-audit/) afin de vérifier sa mise en conformité en matière de sécurité.

Les modules d'Obsidian n'ont [[Sécurité des modules#Capacités des modules|pas de restrictions]] au niveau des permissions qui leur sont accordées. Cela permet une meilleure puissance des fonctionnalités, mais le désavantage de cela est que cela implique des compromis en matière de sécurité. Lorsque Obsidian est en cours d'exécution, les modules tiers ont un accès complet aux cookies de l'afficheur Web. 
