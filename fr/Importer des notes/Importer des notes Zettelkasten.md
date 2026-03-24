---
permalink: import/zettelkasten
localized: '2026-03-18'

---
Si vous avez utilisé la méthode Zettelkasten pour nommer et lier vos notes, vous devrez peut-être convertir les liens de `[[UID]]` à `[[UID Titre de ma note]]`.

Par exemple, si vous avez une note nommée `202301011230 Titre de ma note` et que vous y faites référence depuis une autre note en utilisant uniquement l'UID, `[[202301011230]]`. Comme Obsidian utilise le nom complet de la note pour résoudre les liens internes, des liens comme ceux-ci ne fonctionneront plus.

Pour mettre à jour tous les liens `[[UID]]` de votre coffre afin d'utiliser le nom complet de la note, utilisez le module [[Importateur depuis des fichiers Markdown]].

1. Ouvrez les **[[Paramètres]]**.
2. Sous **Modules principaux**, activez **Importateur depuis des fichiers Markdown** et fermez la fenêtre des Paramètres.
3. Dans le ruban, sur le côté gauche de la fenêtre de l'application, sélectionnez **Ouvrir le convertisseur de format** ![[lucide-binary.svg#icon]].
4. Activez **Correcteur de liens Zettelkasten**.
5. Sélectionnez **Démarrer la conversion**. Cela convertira toutes les notes de l'intégralité de votre coffre.

> [!tip] Embellisseur de liens Zettelkasten
> Le module [[Importateur depuis des fichiers Markdown]] peut également embellir vos liens en supprimant l'UID du nom affiché. Par exemple, `[[UID]]` est converti en `[[UID Titre de ma note|Titre de ma note]]`.
>
> Pour embellir vos liens Zettelkasten, activez **Embellisseur de liens Zettelkasten** dans la fenêtre du convertisseur de format.

Vous pouvez également utiliser le [[Créateur de note unique]] pour créer des notes Zettelkasten dans Obsidian.
