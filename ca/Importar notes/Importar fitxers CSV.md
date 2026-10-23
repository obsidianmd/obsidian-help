---
permalink: import/csv
cssclasses:
  - soft-embed
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
7. Selecciona **Importar** per configurar com es convertiran les dades del teu fitxer CSV a notes amb [[Propietats]].
8. Selecciona **Continua** per revisar la plantilla generada i previsualitzar exemples de les teves files.
9. Selecciona **Importar** i espera que la importació finalitzi.

## Configurar com s'importen els camps CSV

En el pas de configuració dels camps, pots triar com s'importen les dades. L'Importador genera una plantilla a partir de les capçaleres del CSV, utilitza la primera columna com a nom inicial de la nota i crea una propietat per a cada columna.

## Plantilles

Utilitza les [[Plantilles de l'Importador|Plantilles de l'Importador]] per configurar completament com s'importen les teves dades.

Cada columna del CSV està disponible utilitzant la seva capçalera. Si una columna no té capçalera, l'Importador utilitza el nom de columna generat.

Utilitza la notació amb claudàtors perquè els espais i la puntuació es gestionin de manera segura:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Plantilles de l'Importador#Variables]]
