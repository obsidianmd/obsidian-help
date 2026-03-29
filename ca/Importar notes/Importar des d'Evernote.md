---
permalink: import/evernote
---
Obsidian et permet migrar fàcilment les teves notes des d'Evernote utilitzant el [[Importador|connector Importador]]. Això convertirà les teves dades d'Evernote a fitxers Markdown duradors, que pots utilitzar amb Obsidian i moltes altres aplicacions.

## Exporta les teves dades d'Evernote

Obsidian utilitza el format d'exportació d'Evernote, fitxers `.enex`.

Pots trobar les instruccions d'Evernote per exportar les teves dades [al lloc web d'Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Aquest mètode et permet exportar llibretes senceres des del client d'escriptori.

1. Ves a la pantalla de Llibretes.
2. Fes clic a **Més accions** ( `•••` ) i tria **Exportar llibreta...**
3. Selecciona **ENEX** com a format de fitxer.
3. Escull una ubicació per al teu fitxer `.enex` exportat.

## Importa les teves dades d'Evernote a Obsidian

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre **[[Configuració]]**.
2. Ves a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habilita el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la barra d'eines.
5. A **Format de fitxer** tria **Evernote (.enex)**.
6. Selecciona la ubicació del teu fitxer de còpia de seguretat d'Evernote.
7. Fes clic a **Importar** i espera fins que la importació s'hagi completat.
8. Ja està!

## Opcions d'importació avançades

### Mantenir la jerarquia d'etiquetes

L'exportació d'Evernote no conserva la jerarquia d'etiquetes. Per mantenir la jerarquia d'etiquetes, pots "aplanar" les etiquetes separades per "/". Per exemple, suposant que tens l'estructura d'etiquetes següent:

```
EtiquetaPare
    EtiquetaFill
```

El que has de fer per mantenir les etiquetes relacionades a Obsidian és:

1. Fes clic dret sobre l'EtiquetaFill.
2. Selecciona "Canvia el nom."
3. Canvia-li el nom a `EtiquetaPare/EtiquetaFill`.

### Gestió de piles de llibretes

Com que el procés d'exportació està limitat a llibretes individuals, el fitxer d'exportació per defecte no conté informació sobre les piles de llibretes. No obstant això, l'importador pot reconèixer patrons en el nom del fitxer enex per recrear les piles de llibretes com a carpetes.

Suposant que tens una llibreta anomenada ```LlibretaA``` en una pila anomenada ```Pila1```, pots recrear una pila de llibretes canviant el nom del fitxer enex a ```Pila1@@@LlibretaA```.

Això fa que les notes convertides es generin dins de la carpeta Pila1/LlibretaA.

### Més opcions

Per a opcions d'importació més avançades des d'Evernote també pots provar [importar via Yarle](https://github.com/akosbalasko/yarle).
