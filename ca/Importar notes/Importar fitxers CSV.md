---
permalink: import/csv
---
Obsidian et permet importar dades de fitxers CSV utilitzant el [[Importador|connector Importador]] oficial. Això és útil si tens dades tabulars emmagatzemades en aplicacions com Excel, Google Sheets, Numbers, Notion o Airtable.

La importació de CSV genera fitxers Markdown per a cada fila i un fitxer [[Introducció a Bases|Base]] que mostra tots els fitxers importats com una taula.

Si estàs important notes d'una aplicació específica, potser voldràs revisar primer la llista d'aplicacions compatibles amb el [[Importador|connector Importador]] per comprovar si hi ha un convertidor específic que preservi millor les dades que estàs migrant.

## Crear notes a partir de dades CSV a Obsidian

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre **[[Configuració]]**.
2. Ves a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habilita el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la barra d'eines.
5. A **Format de fitxer** tria **CSV (.csv).**
6. Selecciona la ubicació del teu fitxer CSV.
7. Fes clic a **Importar** per configurar com es convertiran les dades del teu fitxer CSV a notes amb [[Propietats]].
8. Fes clic a **Continua** i espera fins que la importació s'hagi completat.
9. Ja està!

## Configurar com s'importen els camps CSV

En el segon pas de la importació de CSV, pots triar com s'importen les dades utilitzant una plantilla.

Cada columna del teu fitxer CSV té assignada una variable anomenada `{{column_name}}` que representa el nom de la capçalera al teu fitxer. Pots utilitzar aquesta variable per definir el títol de la nota, la ubicació, el contingut i les [[Propietats|propietats]].
