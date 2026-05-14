---
permalink: plugin-security
localized: '2026-03-18'
---
L'équipe d'Obsidian prend la sécurité au sérieux. Cette page explique les risques liés à l'installation de modules complémentaires, et ce que l'équipe d'Obsidian fait pour y remédier.

## Mode restreint

Par défaut, Obsidian fonctionne en mode restreint pour empêcher l'exécution de code tiers. Ne désactivez le mode restreint que si vous faites confiance aux auteurs des modules que vous installez.

Pour désactiver le mode restreint :

1. Ouvrez les **[[Paramètres]]**.
2. Dans le menu latéral, sélectionnez **Modules complémentaires**.
3. Sélectionnez **Activer les modules complémentaires**.

Pour activer le mode restreint :

1. Ouvrez les **[[Paramètres]]**.
2. Dans le menu latéral, sélectionnez **Modules complémentaires**.
3. À côté de **Mode restreint**, sélectionnez **Activer**.

Les modules installés restent dans votre coffre même si vous activez le mode restreint, mais ils sont ignorés par Obsidian.

## Capacités des modules

En raison de limitations techniques, Obsidian ne peut pas restreindre de manière fiable les modules à des permissions ou niveaux d'accès spécifiques. Cela signifie que les modules hériteront des niveaux d'accès d'Obsidian. Par conséquent, voici quelques exemples de ce que les modules complémentaires peuvent faire :

- Les modules complémentaires peuvent accéder aux fichiers sur votre ordinateur.
- Les modules complémentaires peuvent se connecter à internet.
- Les modules complémentaires peuvent installer des programmes supplémentaires.

> [!tip] 
> Si vous travaillez avec des données sensibles et souhaitez installer un module complémentaire, nous vous recommandons d'effectuer un audit de sécurité indépendant du module avant de l'utiliser.

## Processus d'examen des modules

Tous les modules complémentaires doivent respecter les [Politiques pour les développeurs Obsidian](https://docs.obsidian.md/Developer+policies). Obsidian analyse automatiquement chaque version de module à la recherche de vulnérabilités de sécurité, de problèmes de qualité du code et de logiciels malveillants. La page de chaque module dans le [répertoire des modules](https://community.obsidian.md) affiche les résultats sous forme d'un tableau de bord de sécurité.

Les examens manuels se poursuivent pour les modules populaires, mis en avant et signalés.

- Si vous découvrez une vulnérabilité de sécurité dans un module complémentaire, consultez le fichier `security.md` ou `readme.md` de l'auteur du module pour savoir comment la signaler. Pour les failles critiques, veuillez également signaler le problème à l'[[Aide et support#Contacter l'assistance Obsidian|assistance Obsidian]].
- Si vous suspectez qu'un module complémentaire est malveillant, vous pouvez le signaler directement depuis sa page dans le répertoire des modules, le signaler à l'[[Aide et support#Contacter l'assistance Obsidian|assistance Obsidian]], ou envoyer un message privé à nos modérateurs.
