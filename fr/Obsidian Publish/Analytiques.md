---
permalink: publish/analytics
localized: '2026-03-18'
aliases:
  - Analytics
---
## Prérequis

Pour utiliser les analytiques sur votre site [[Introduction à Obsidian Publish|Obsidian Publish]], vous avez besoin d'un [[Domaines personnalisés|domaine personnalisé]].

> [!important]
> Avant d'activer les analytiques, assurez-vous que vos lois et réglementations locales vous autorisent à suivre vos visiteurs. Selon les outils que vous utilisez, vous pourriez avoir besoin d'ajouter une bannière de consentement à votre site.

## Google Analytics

Pour activer Google Analytics sur votre site Obsidian Publish :

1. Dans le ruban, à gauche de la fenêtre de l'application, cliquez sur **Publier les modifications** ( ![[lucide-send.svg#icon]] ).
2. Dans la boîte de dialogue **Publier les modifications**, cliquez sur **Modifier les options du site** ( ![[lucide-cog.svg#icon]] ).
3. Dans **Code de suivi Google Analytics**, entrez votre code de suivi.

Pour utiliser Google Tag Manager au lieu de Google Analytics, utilisez du JavaScript personnalisé pour ajouter vos propres scripts.

## Plausible, Fathom et autres services d'analytiques

Vous pouvez ajouter la plupart des services d'analytiques à votre site via votre fichier [[Personnaliser votre site|publish.js]]. Assurez-vous de remplacer `yourdomain.com` par votre domaine, et le `src` du script par le script de votre fournisseur d'analytiques.

Voici un exemple utilisant [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

 La même approche peut être utilisée pour [Fathom Analytics](https://usefathom.com/). Notez le changement de `data-domain` à `data-site` — différents fournisseurs d'analytiques peuvent avoir un format différent pour l'insertion du script.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Dépannage

Pour vérifier que votre site utilise bien votre service d'analytiques, désactivez toute extension de navigateur bloquant les publicités, comme uBlock Origin, qui pourrait empêcher le script de suivi de s'exécuter.
