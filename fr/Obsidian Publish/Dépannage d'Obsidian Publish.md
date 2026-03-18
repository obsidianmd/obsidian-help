---
permalink: publish/troubleshoot
description: >-
  This page details some common problems that you may run into when using
  Obsidian Publish
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Troubleshoot Obsidian Publish
---
Cette page répertorie les problèmes courants que vous pourriez rencontrer avec [[Introduction à Obsidian Publish|Obsidian Publish]] et comment les résoudre.

Assurez-vous de consulter d'abord [[Fichiers média]] et [[Limitations de Publish|Limitations de Publish]].

## Général

### Publication de notes

**Je reçois une erreur de hachage lorsque j'essaie de publier une note.**

Utilisez-vous un [[Modules complémentaires|module complémentaire]] qui modifie la date de modification du fichier lors de la mise à jour ? Si c'est le cas, ce module peut entrer en conflit avec Publish. Veuillez signaler un bug au développeur du module pour résoudre le problème.

**Je reçois une erreur réseau inhabituelle, et j'ai un très grand site Publish.**

Il est probable que nous devions examiner votre base de données. Veuillez [[Aide et support#Contacter l'assistance Obsidian|contacter l'assistance Obsidian]] pour obtenir de l'aide.

## CSS et thèmes

**Mon CSS dans mon [[Dossier de configuration]] ne fonctionne pas sur Publish. Pourquoi ?**

Publish ne lit pas le dossier de configuration. À la place, vous devez créer un fichier `publish.css` dans le répertoire racine de votre coffre de publication. Vous pouvez en apprendre davantage à ce sujet dans [[Personnaliser votre site]].

**Mon CSS ne s'affiche pas de la même manière sur Publish que dans l'application. Pourquoi ?**

Le CSS d'Obsidian Publish n'est pas exactement le même que celui de l'application. Nous recommandons de [développer tout CSS et thème](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) spécifiquement pour Publish en partant de zéro.

En _général_, ce qui fonctionne pour le [[Vues et mode d'édition#Mode lecture|mode lecture]] a de fortes chances de fonctionner sur Publish.
