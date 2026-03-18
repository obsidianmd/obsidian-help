---
permalink: early-access
aliases:
  - Advanced Use/Versions Beta
  - Early access versions
localized: '2026-03-18'
---
Accédez en avant-première aux prochaines versions en activant les _versions en accès anticipé_. Les versions en accès anticipé sont uniquement disponibles pour les utilisateurs disposant d'une [[Licence Catalyst]].

> [!warning]
> Les versions en accès anticipé sont des versions bêta. Elles incluent de nouvelles fonctionnalités mais peuvent être moins stables. N'activez pas les versions en accès anticipé si vous préférez une expérience plus fiable.
> 
> Sachez que les développeurs de modules complémentaires et de thèmes reçoivent les versions en accès anticipé en même temps que tout le monde. Soyez patients avec les développeurs qui doivent effectuer des mises à jour pour prendre en charge les nouvelles fonctionnalités.

## Activer les versions en accès anticipé sur ordinateur

Pour recevoir les versions en accès anticipé dès qu'elles sont disponibles, suivez ces étapes :

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sélectionnez **Général**.
3. Sous **Compte → Votre compte**, sélectionnez **Se connecter**.
4. Dans **Adresse électronique**, entrez votre adresse électronique.
5. Dans **Mot de passe**, entrez votre mot de passe.
6. Une fois connecté, retournez dans les **[[Paramètres]]**.
7. Dans la barre latérale, sélectionnez **Général**.
8. Sous **Application**, activez **Recevoir les versions en accès anticipé**.
9. Cliquez sur **Vérifier les mises à jour** puis sur **Relancer**.

## Installer les versions en accès anticipé sur les appareils mobiles

Pour trouver les instructions d'installation des versions en accès anticipé sur votre appareil mobile, suivez ces étapes :

1. Téléchargez et installez [Discord](<https://discord.com>).
2. Rejoignez le [serveur Discord d'Obsidian](https://discord.gg/obsidianmd).
3. [[Licence Catalyst#Obtenir votre badge Discord|Obtenez votre badge Discord]] pour accéder aux canaux des pré-versions.
4. Dans le canal `#insider-welcome`, vous trouverez les instructions pour accéder à votre téléchargement en fonction de votre type d'appareil.

## Signaler des problèmes et autres retours

Si vous découvrez un problème dans une version en accès anticipé, pensez à le signaler à l'équipe d'Obsidian. Avant de signaler un problème, effectuez une recherche sur le [forum](https://forum.obsidian.md/) ou Discord pour vérifier si quelqu'un l'a déjà signalé.

Pour signaler un problème, utilisez l'un des canaux suivants :

- Sur Discord, signalez le problème dans le canal `#insider-release` correspondant.
- Sur le forum, créez un nouveau sujet dans [Bug reports](https://forum.obsidian.md/c/bug-reports/7).

Lorsque vous signalez un problème, indiquez la version du build et le système d'exploitation sur lequel vous l'exécutez. Vous pouvez trouver la version du build dans **[[Paramètres]] → À propos → Application → Version actuelle**.

## Revenir aux versions publiques sur ordinateur

Pour revenir aux versions publiques (et non en accès anticipé) sur ordinateur :

1. Désactivez les versions en accès anticipé.
   1. Ouvrez les **[[Paramètres]]**.
   2. Dans la barre latérale, sélectionnez **Général**.
   3. Sous **Application**, désactivez **Recevoir les versions en accès anticipé**.
2. Fermez Obsidian.
3. Supprimez le fichier `obsidian-VERSION.asar`, où `VERSION` est la version d'Obsidian.
   - Windows : `%APPDATA%\obsidian\obsidian-VERSION.asar`
   - Mac : `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
   - Linux : `~/.config/obsidian/obsidian-VERSION.asar`
4. Redémarrez Obsidian.

## Revenir aux versions publiques sur mobile

Pour revenir aux versions publiques (et non en accès anticipé) sur mobile :

1. Sauvegardez les données de votre coffre
2. Désinstallez Obsidian
3. Réinstallez Obsidian depuis le Play Store ou l'App Store d'Apple
4. Restaurez les données de votre coffre à partir de vos sauvegardes
5. Ouvrez Obsidian
