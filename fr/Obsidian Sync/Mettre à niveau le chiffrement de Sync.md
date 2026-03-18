---
permalink: sync/migrate
cssclasses:
  - soft-embed
description: 'Move your Sync vault to a different region, perform and encryption upgrade.'
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Upgrade Sync encryption
---
Par défaut, Obsidian Sync utilise le [[Sécurité et confidentialité#Chiffrement|chiffrement de bout en bout]] pour toutes vos données. Cela garantit que personne — pas même l'équipe Obsidian — ne peut accéder à vos notes.

Obsidian met occasionnellement à niveau le chiffrement de Sync pour maintenir les standards de [[Sécurité et confidentialité|sécurité]] les plus élevés. Si une mise à niveau du chiffrement est disponible, vous verrez une option intitulée **Mettre à niveau le chiffrement du coffre** dans **Paramètres Obsidian → Sync**. Ce processus vous permet également de changer votre [[Régions de Sync|région de Sync]].

## Versions de chiffrement

Tous les nouveaux coffres utilisent automatiquement le dernier chiffrement. Les coffres existants peuvent être mis à niveau à l'aide de l'assistant de migration. Notez que tous les appareils doivent utiliser une version de l'application Obsidian qui prend en charge la version de chiffrement de Sync vers laquelle vous migrez.

| Date de publication                                                     | Version de Sync | Version minimale de l'application |
| ----------------------------------------------------------------------- | --------------- | --------------------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3               | 1.8.3                             |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0               | 0.9.21                            |

## Mettre à niveau le chiffrement avec l'assistant de migration

Avant de continuer, créez une [[Sauvegarder vos fichiers Obsidian|sauvegarde]] de votre coffre pour éviter toute perte potentielle de données. Ce processus supprimera définitivement toutes les données de votre coffre distant avec l'ancien chiffrement, y compris l'historique des versions.

> [!danger] Les migrations sont destructrices
> 
> **[[Sauvegarder vos fichiers Obsidian|Sauvegardez]] toujours votre coffre avant de procéder à une migration.**
> 
> Lorsque vous migrez un coffre distant, vos données seront remplacées. Cela signifie :
> 
> 1. Les données distantes seront supprimées des serveurs Obsidian, et les données du coffre seront re-téléversées à leur place.
> 2. Tout l'[[Version history|historique des versions]] du coffre sera perdu.

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sélectionnez **Sync**.
3. Cliquez sur **Mettre à niveau le coffre**. Cette option ne sera visible que si une mise à niveau est disponible pour votre coffre distant.
4. Vérifiez vos sauvegardes et cliquez sur **Continuer**.
5. Dans **Nom du coffre**, entrez le nom du coffre distant.
6. Dans **Région**, choisissez la [[#Serveurs de synchronisation régionaux|région]] du serveur pour votre coffre distant.
7. Dans **Mot de passe de chiffrement**, choisissez un mot de passe pour votre coffre. Cela crée un coffre avec chiffrement de bout en bout. Le mot de passe du coffre est distinct de votre compte Obsidian et peut être différent pour chacun de vos coffres. Pour plus d'informations, consultez [[Sécurité et confidentialité]].
8. Une fois vos données re-téléversées avec le nouveau chiffrement, reconnectez-vous au nouveau coffre Sync sur vos autres appareils.
