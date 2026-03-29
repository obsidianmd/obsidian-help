---
permalink: import/apple-journal
---
Obsidian et permet migrar fàcilment les teves entrades de diari des d'Apple Journal utilitzant el [[Importador|connector Importador]].
Això convertirà els teus diaris a fitxers Markdown durables, que pots utilitzar amb Obsidian i moltes altres aplicacions.

## Exporta les teves dades d'Apple Journal

### A l'iPhone
Segueix les instruccions per [Imprimir i exportar entrades al Journal a l'iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Ves a l'aplicació Journal al teu iPhone.
2. Escull un diari o toca Totes les entrades.
3. Toca el botó Més a la part superior de la pantalla.
4. Toca Exportar, i després escull Exportar.
5. Escull una ubicació i després toca el botó Seleccionat.

### Al Mac (Tahoe)
Segueix les instruccions per [Imprimir i exportar entrades al Journal al Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Ves a l'aplicació Journal al teu Mac.
2. Ves a Fitxer > Exportar, i després escull Exportar.

## Importa les dades d'Apple Journal a Obsidian

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre la **[[Configuració]]**.
2. Ves a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habilita el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la barra d'eines.
5. A **Format de fitxer**, escull **Apple Journal (HTML Export)**.
6. A **Fitxers a importar**, selecciona la carpeta amb les dades exportades, normalment _AppleJournalEntries_, o fitxers individuals de _Entries_.
7. Revisa i edita les altres opcions d'importació.
8. Selecciona Importar i espera fins que la importació es completi.
9. Ja has acabat!


## Contingut compatible

El connector pot importar metadades de Journal com a metadades inicials, com ara _state-of-mind_, _contacts_, _location_ i _workout-route_.

> [!note] Nota
> El connector no importa recursos. Els adjunts com fotos, vídeos i enregistraments d'àudio s'ignoren.
