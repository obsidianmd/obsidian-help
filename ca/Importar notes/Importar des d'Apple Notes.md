---
permalink: import/apple-notes
---
Obsidian et permet migrar fàcilment les teves notes des d'Apple Notes utilitzant el [[Importador|connector Importador]]. Això convertirà les teves dades d'Apple Notes a fitxers Markdown duradors, que pots utilitzar amb Obsidian i moltes altres aplicacions.

Actualment, l'Importador només permet migrar des d'Apple Notes a macOS. Encara no està disponible a iOS.

## Importar dades d'Apple Notes a Obsidian

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre **[[Configuració]]**.
2. Ves a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la barra d'eines.
5. A **Format de fitxer** escull **Apple Notes**.
6. Fes clic a **Importar**.
7. Fes clic a **Obrir** a la finestra emergent que apareix amb el títol `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Espera fins que la importació s'hagi completat.
9. Ja has acabat!

## Contingut compatible

El connector Importador d'Obsidian admet pràcticament tots els tipus de contingut d'Apple Notes. Això inclou taules, imatges, dibuixos, escanejos, PDFs i enllaços introduïts a iOS 17.

> [!Warning]
> Les notes protegides amb contrasenya estan xifrades per Apple, per la qual cosa cal desbloquejar-les abans d'importar-les. Qualsevol nota bloquejada serà omesa.

### Escanejos

Apple emmagatzema els escanejos en diversos formats segons com es van crear. Per preservar les dades originals, això significa que s'exportaran de manera diferent.

* Els escanejos creats o visualitzats en versions anteriors de macOS o iOS s'exportaran com una sèrie d'imatges sense retallar.
* Els escanejos creats o visualitzats en versions més noves de macOS o iOS normalment s'exportaran com a imatges retallades.
* Els escanejos que han estat editats utilitzant les funcionalitats introduïdes a iOS 17 normalment s'exportaran com a PDFs.

## Mètodes d'exportació alternatius

Apple no proporciona una opció nativa per exportar les teves notes. No obstant això, existeixen diverses eines de tercers com [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) de Chintan Ghate. Tingues en compte que la majoria d'eines estan limitades en quines dades exporten d'Apple Notes i potser no proporcionen les dades de sortida més compatibles. Aquestes eines funcionen millor si les teves Apple Notes són principalment de text, i tenen pocs adjunts o funcionalitats especials com dibuixos i escanejos.

Depenent de l'eina que hagis utilitzat, l'exportació pot ser en format Markdown o format HTML. Segueix les instruccions segons el format de fitxer al qual has exportat:

- [[Importar fitxers HTML]]
- [[Importar fitxers Markdown]]
