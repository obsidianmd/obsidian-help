---
permalink: publish/security
localized: '2026-03-18'

---
Vous pouvez choisir les notes que vous souhaitez publier sur [[Introduction à Obsidian Publish|Obsidian Publish]]. Le reste de vos notes reste en sécurité dans votre coffre.

Seules les notes que vous choisissez de publier sont envoyées aux serveurs d'Obsidian, et toutes les notes que vous dépubliez sont supprimées.

## Protection par mot de passe

Pour un meilleur contrôle d'accès sur votre site Publish, appliquez un mot de passe de site. Les visiteurs seront invités à saisir un mot de passe lorsqu'ils tenteront d'y accéder. Si vous décidez de supprimer le mot de passe du site par la suite, l'ensemble du site redeviendra visible par le public.

> [!warning] La protection individuelle par mot de passe pour les notes publiées n'est actuellement pas prise en charge.

### Ajouter un mot de passe de site

1. Dans le ruban, à gauche de la fenêtre de l'application, cliquez sur **Publier les modifications** ![[lucide-send.svg#icon]].
2. Dans la boîte de dialogue **Publier les modifications**, cliquez sur **Modifier les options du site** ![[lucide-cog.svg#icon]].
3. Sous **Autres paramètres du site**, à côté de **Mots de passe**, cliquez sur **Gérer**.
4. Cliquez sur **Nouveau mot de passe**.
5. Dans **Mot de passe**, saisissez un mot de passe pour votre site.
6. (Facultatif) Dans **Surnom**, saisissez un surnom pour le mot de passe, par exemple, la personne à qui vous souhaitez donner accès au site.
7. Cliquez sur **Ajouter ce mot de passe**.

### Supprimer un mot de passe de site

1. Dans le ruban, à gauche de la fenêtre de l'application, cliquez sur **Publier les modifications** ![[lucide-send.svg#icon]].
2. Dans la boîte de dialogue **Publier les modifications**, cliquez sur **Modifier les options du site** ![[lucide-cog.svg#icon]].
3. Sous **Autres paramètres du site**, à côté de **Mots de passe**, cliquez sur **Gérer**.
5. Cliquez sur l'icône en forme de croix à côté du mot de passe que vous souhaitez supprimer.

## Collecte de données
### Données des visiteurs

Par défaut, Obsidian Publish **ne collecte pas** les données des visiteurs, ne stocke pas de cookies et ne traite pas d'informations personnelles. Cependant, vous pouvez implémenter des analytiques ou enregistrer d'autres données utilisateur en [[Personnaliser votre site|personnalisant votre site]].

En tant que propriétaire du site, vous êtes responsable du respect du RGPD et des réglementations en matière de confidentialité dans votre région. Cela inclut la création de votre propre bannière de notification, qui peut être implémentée à l'aide de publish.js, et l'ajout d'une page de politique de confidentialité à votre site.

## Accès

Obsidian a un contrat avec [Cloudflare](https://www.cloudflare.com) pour fournir l'hébergement de nos sites Publish. Les serveurs sont hébergés à San Francisco, CA.

### Gérer l'accès à Obsidian Publish sur votre réseau

Pour réguler l'accès à Obsidian Publish sur votre réseau, vous devez gérer les domaines suivants :

- Frontend : `publish.obsidian.md`
- Backend : `publish-main.obsidian.md`

De plus, les services backend utilisent les sous-domaines suivants : `publish-xx.obsidian.md`, où `xx` est un nombre allant de `1 à 100`.

> [!tip] Si votre système de pare-feu le prend en charge, nous recommandons d'ajouter `publish-*.obsidian.md` à la liste blanche pour s'adapter à notre expansion continue des sous-domaines.
