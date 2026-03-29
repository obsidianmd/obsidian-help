---
permalink: plugins/note-composer
---
El [[Connectors principals|connector principal]] [[Compositor de notes]] et permet fusionar dues notes o extreure part d'una nota en una nova nota.

## Fusionar notes

Fusionar notes afegeix una nota a una altra i elimina la primera. El compositor de notes actualitza tots els enllaços per referenciar la nota fusionada.

Quan seleccionis la nota on vols fusionar, pots escollir entre els mètodes següents:

- `Enter`: Afegeix la nota d'origen al _final_ de la nota de destinació.
- `Shift+Enter`: Afegeix la nota d'origen a l'_inici_ de la nota de destinació.
- `Ctrl+Enter` (o `Cmd+Enter` a macOS): Crea una nota nova amb el contingut de la nota d'origen.

Per fusionar la nota activa amb una altra nota de la teva cambra forta:

**Explorador de fitxers**

1. A l'explorador de fitxers, fes clic dret a la nota que vols fusionar.
2. Fes clic a **Fusiona tot el fitxer amb...**.
3. Selecciona la nota on vols fusionar.
4. Fes clic a **Fusiona** per confirmar.

**Paleta d'ordres**

1. Obre la [[Paleta d'ordres]].
2. Selecciona **Compositor de notes: Fusiona el fitxer actual amb un altre fitxer...**.
3. Selecciona la nota on vols fusionar.
4. Fes clic a **Fusiona** per confirmar.

> [!tip] Consell
> Per defecte, el compositor de notes et demana confirmació en fusionar notes. Si desactives la confirmació i fusiones una nota per error, encara la pots recuperar amb el connector [[Recuperació de fitxers]].

## Extreure nota

Quan seleccionis la nota on vols extreure la selecció, pots escollir entre els mètodes següents:

- `Enter`: Afegeix el text seleccionat al _final_ de la nota de destinació.
- `Shift+Enter`: Afegeix el text seleccionat a l'_inici_ de la nota de destinació.
- `Ctrl+Enter` (o `Cmd+Enter` a macOS): Crea una nota nova amb el text seleccionat.

Per extreure text en una nota nova:

**Editor**

1. Mentre estàs a l'**Editor**, selecciona el text que vols extreure.
2. Fes clic dret al text seleccionat.
3. Fes clic a **Extreu la selecció actual...**.
4. Selecciona la nota on vols extreure.

**Paleta d'ordres**

1. Mentre estàs a l'**Editor**, selecciona el text que vols extreure.
2. Obre la [[Paleta d'ordres]].
3. Selecciona **Compositor de notes: Extreu la selecció actual...**.
4. Selecciona la nota on vols extreure.

> [!tip] Consell
> Per defecte, el compositor de notes substitueix el text extret amb un enllaç a la nota de destinació. A la configuració, també pots canviar per [[Incrustar fitxers|incrustar]] la nota de destinació, o per no deixar res al seu lloc.

## Fitxer de plantilla

Configurant una plantilla, pots personalitzar el contingut abans d'afegir-lo a la nota nova. Per utilitzar una plantilla, introdueix una **Ubicació del fitxer de plantilla** a la configuració del connector.

La plantilla pot contenir les variables següents:

| Variable          | Descripció                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | El contingut per fusionar, o la selecció de text extret. Si no inclous aquesta variable, el compositor de notes afegeix el contingut al final de la plantilla. |
| `{{fromTitle}}`   | Nom de la nota d'origen.                                                                                                                                 |
| `{{newTitle}}`    | Nom de la nota de destinació. Per exemple, per afegir el nom del fitxer com a encapçalament a la part superior del fitxer.                                |
| `{{date:FORMAT}}` | Data de creació de la nota nova. Per exemple, `{{date:YYYY-MM-DD}}`.                                                                                     |
