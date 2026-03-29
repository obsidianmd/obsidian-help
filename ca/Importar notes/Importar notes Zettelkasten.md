---
permalink: import/zettelkasten
---
Si heu estat utilitzant el mètode Zettelkasten per nomenar i enllaçar les vostres notes, pot ser que necessiteu convertir els enllaços de `[[UID]]` a `[[UID El títol de la meva nota]]`.

Per exemple, si teniu una nota amb el nom `202301011230 El títol de la meva nota` i hi enllaceu des d'una altra nota utilitzant només l'UID, `[[202301011230]]`. Com que Obsidian utilitza el nom complet de la nota per resoldre els enllaços interns, enllaços com aquests es trencaran.

Per actualitzar tots els enllaços `[[UID]]` de la vostra cambra forta perquè utilitzin el nom complet de la nota, feu servir l'[[Importador de format Markdown]].

1. Obriu la **[[Configuració]]**.
2. Sota **Connectors principals**, habiliteu l'**Importador de format Markdown** i tanqueu la finestra de Configuració.
3. A la barra d'eines, al costat esquerre de la finestra de l'aplicació, seleccioneu **Obrir el convertidor de format** ![[lucide-binary.svg#icon]].
4. Habiliteu el **Reparador d'enllaços Zettelkasten**.
5. Seleccioneu **Inicia la conversió**. Això convertirà totes les notes de la vostra cambra forta sencera.

> [!tip] Embellidor d'enllaços Zettelkasten
> L'[[Importador de format Markdown]] també pot embellir els vostres enllaços eliminant l'UID del nom per mostrar. Per exemple, `[[UID]]` es converteix en `[[UID El títol de la meva nota|El títol de la meva nota]]`.
>
> Per embellir els vostres enllaços Zettelkasten, habiliteu l'**Embellidor d'enllaços Zettelkasten** a la finestra del convertidor de format.

També podeu utilitzar el [[Creador de notes úniques]] per crear notes Zettelkasten a Obsidian.
