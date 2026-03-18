---
permalink: teams/security
cssclasses:
  - soft-embed
localized: '2026-03-18'
aliases:
  - Security considerations for teams
---
Notre page [Sécurité](https://obsidian.md/security) compile les informations sur la manière dont Obsidian aborde la protection de vos données. C'est également le lieu où sont publiés les audits de sécurité réalisés par des tiers.

## Considérations

Obsidian est conçu pour fonctionner comme une application hors ligne et autonome. Obsidian prend également en charge les modules complémentaires et les thèmes personnalisés. De plus, nous fournissons un support officiel et non officiel pour divers services de synchronisation de fichiers.

Si vous n'avez pas l'intention d'utiliser des modules complémentaires ou des thèmes, ni [[Introduction à Obsidian Sync|Obsidian Sync]] ou [[Introduction à Obsidian Publish|Obsidian Publish]], vos procédures standard de sécurisation des applications s'appliqueront. Cependant, si vous prévoyez d'utiliser l'une de ces fonctionnalités, nous vous recommandons d'évaluer soigneusement leur adéquation à votre environnement de travail.

## Modules complémentaires et thèmes

Veuillez consulter la page [[Sécurité des plugins]] en complément de cette section.

L'équipe Obsidian examine tous les modules complémentaires et thèmes soumis au répertoire officiel, via notre [dépôt de publications](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Nous n'examinons pas les éléments communautaires qui n'ont pas été soumis au répertoire officiel.

Nous ne disposons pas d'une boutique communautaire pour les [[Extraits CSS]]. Ces fichiers sont généralement obtenus au sein de notre [Communauté Obsidian](https://obsidian.md/community) ou à partir de dépôts GitHub publics.

Nous exigeons le regroupement des ressources dans les extraits CSS et les thèmes. Cependant, nous avons fait une exception pour [Google Fonts](https://fonts.google.com/) afin de maintenir les performances sur les appareils mobiles, où l'impact du regroupement des polices est plus perceptible.

## Réseau et accès

Tout en privilégiant l'approche locale de notre application, Obsidian effectue des appels réseau en fonction des services et fonctionnalités que vous utilisez. Ces connexions réseau peuvent être désactivées via un pare-feu de domaine ou un verrouillage de l'application.

Obsidian établit ces connexions réseau sur le port HTTPS 443.

Voici la liste des connexions réseau qu'Obsidian effectue.

### Connexions provenant d'Obsidian

- **Mises à jour en accès anticipé** : Utilise `releases.obsidian.md`.
- **Gestion du compte et des licences** : Lors de l'accès à votre compte Obsidian dans les Paramètres et de l'application d'une licence commerciale, nous appelons `api.obsidian.md`.
- **Obsidian Sync** : Utilisé pour synchroniser vos notes entre appareils.
	- `sync-xx.obsidian.md`, où `xx` est un nombre entre 01 et 100.
- **Obsidian Publish** :
    1. Backend : `publish-main.obsidian.md` et `publish-xx.obsidian.md`, où `xx` est un nombre.
    2. Frontend : `publish.obsidian.md`.

### Connexions provenant de GitHub

Obsidian effectue des requêtes réseau vers `github.com` et `raw.githubusercontent.com`.

- **Publications publiques** : Si les mises à jour automatiques sont activées, Obsidian vérifie sur GitHub les publications publiques.
- **Thèmes et modules complémentaires tiers** :
    - Une vérification est effectuée toutes les 12 heures à partir du démarrage de l'application pour récupérer un fichier hébergé sur GitHub utilisé pour les « dépréciations de modules ». Ce fichier permet de désactiver à distance des versions spécifiques de modules connus pour mal fonctionner, provoquer des pertes de données, ou être potentiellement vulnérables ou malveillants.
    - Les modules activés peuvent générer du trafic réseau échappant au contrôle d'Obsidian et de GitHub.

### Autres connexions

- **Contenu en ligne intégré** : Lors de l'ouverture de notes qui intègrent du contenu en ligne, comme une image (`![chat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **Requêtes DNS** : Si un nom d'hôte doit être résolu avant d'établir une connexion, y compris le DNS over HTTPS. Consultez la [documentation de Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) pour plus d'informations.

## Questions fréquentes

### Sécurité du compte

**Obsidian prend-il en charge l'authentification unique (SSO) ?**
Obsidian ne prend pas en charge le SSO. Dans la plupart des cas d'utilisation, Obsidian ne nécessite pas de compte ni de connexion sur votre lieu de travail, sauf si vous utilisez [[Introduction à Obsidian Publish|Obsidian Publish]] ou [[Introduction à Obsidian Sync|Obsidian Sync]].

**Obsidian prend-il en charge l'authentification multi-facteurs (MFA) ?**
Obsidian prend en charge l'[[Authentification à 2 facteurs|authentification à 2 facteurs]] (2FA) pour les comptes Obsidian, mais ne prend pas en charge la 2FA pour l'ouverture et l'utilisation de l'application de base. Les utilisateurs d'[[Introduction à Obsidian Sync|Obsidian Sync]] et d'[[Introduction à Obsidian Publish|Obsidian Publish]] ayant activé la 2FA devront confirmer leur clé 2FA lors de leur première connexion à l'application.

### Évaluations et certifications

**Acceptez-vous les évaluations de sécurité de notre entreprise ?**
Nous exigeons un montant minimum de bon de commande avant d'envisager de compléter une évaluation de sécurité. Ces évaluations sont souvent chronophages et peuvent ne pas être applicables aux applications hors ligne comme Obsidian, car elles sont généralement conçues pour les services basés sur le cloud.

Cependant, vous pouvez renoncer à ce montant minimum de bon de commande en acceptant de payer des honoraires de provision. Veuillez contacter l'[[Aide et support#Contacter l'assistance Obsidian|assistance Obsidian]] pour vous renseigner sur cette option.

**Disposez-vous de certifications reconnues en matière de sécurité de l'information ou de normes de qualité, telles que ISO27001, NIST, COBIT, ou d'autres certifications ISO ou CSA ?**
Pas pour le moment. C'est quelque chose que nous pourrions explorer à l'avenir, mais pour l'instant, notre attention se porte sur nos [audits de sécurité](https://obsidian.md/security).
