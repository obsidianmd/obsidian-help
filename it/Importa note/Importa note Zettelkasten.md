---
permalink: import/zettelkasten
aliases:
  - Import Zettelkasten notes
---
Se hai utilizzato il metodo Zettelkasten per nominare e collegare le tue note, potresti dover convertire i collegamenti da `[[UID]]` a `[[UID Titolo della mia nota]]`.

Ad esempio, se hai una nota con il nome `202301011230 Titolo della mia nota` e la colleghi da un'altra nota utilizzando solo l'UID, `[[202301011230]]`. Poiché Obsidian utilizza il nome completo della nota per risolvere i collegamenti interni, collegamenti come questi smetteranno di funzionare.

Per aggiornare tutti i collegamenti `[[UID]]` nella tua cassaforte in modo che utilizzino il nome completo della nota, usa lo [[Strumento importazione Markdown|Strumento importazione Markdown]].

1. Apri le **[[Impostazioni]]**.
2. In **Plugin principali**, abilita **Strumento importazione Markdown** e chiudi la finestra delle Impostazioni.
3. Nella barra degli strumenti, sul lato sinistro della finestra dell'app, seleziona **Apri strumento importazione Markdown** ( ![[lucide-binary.svg#icon]] ).
4. Abilita **Conversione collegamenti Zettelkasten**.
5. Seleziona **Avvia conversione**. Questo convertirà tutte le note dell'intera cassaforte.

> [!tip] Abbellimento collegamenti Zettelkasten
> Lo [[Strumento importazione Markdown]] può anche abbellire i tuoi collegamenti rimuovendo l'UID dal nome visualizzato. Ad esempio, `[[UID]]` viene convertito in `[[UID Titolo della mia nota|Titolo della mia nota]]`.
>
> Per abbellire i tuoi collegamenti Zettelkasten, abilita **Abbellimento collegamenti Zettelkasten** nella finestra dello strumento importazione Markdown.

Puoi anche utilizzare il plugin [[Note univoche]] per creare note Zettelkasten in Obsidian.
