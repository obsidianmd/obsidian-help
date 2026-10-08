---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian us permet importar fàcilment fitxers HTML individuals i carpetes senceres de fitxers HTML mitjançant el [[Importador|connector d'importació]] oficial. Això és útil si voleu desar llocs web sencers en format [[Obsidian Flavored Markdown|Markdown]], o si voleu importar dades d'una eina que exporta a HTML.

Si esteu important notes des d'una aplicació específica, potser voldreu revisar primer la llista d'aplicacions compatibles amb el [[Importador|connector d'importació]] per comprovar si hi ha un convertidor específic que preservi millor les dades que esteu migrant.

## Importar dades HTML a Obsidian

Necessitareu el connector oficial d'Obsidian [[Importador]], que podeu [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obriu **[[Configuració]]**.
2. Aneu a **Connectors de la comunitat** i [instal·leu l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habiliteu el connector Importador.
4. Obriu el connector **Importador** mitjançant la paleta d'ordres o la icona de la barra d'eines.
5. A **Format de fitxer** trieu **HTML (.html).**
6. Seleccioneu la ubicació dels vostres fitxers o carpetes HTML.
7. Seleccioneu **Importar** per revisar la plantilla generada i previsualitzar exemples dels vostres fitxers.
8. Seleccioneu **Importar** de nou i espereu que la importació finalitzi.

### Importar configuracions

- **Límit de mida dels adjunts**: Omet la importació d'adjunts més grans que la mida especificada.
- **Mida mínima d'imatge**: Omet la importació d'imatges més petites que la mida especificada en qualsevol dimensió. Es pot utilitzar per ometre icones i logotips.

## Plantilles

Utilitzeu les [[Plantilles de l'importador|plantilles de l'Importador]] per configurar completament com s'importen les vostres dades.

![[Plantilles de l'importador#Variables]]

A més, les importacions HTML proporcionen moltes de les mateixes variables que el [[Introducció a Obsidian Web Clipper|Web Clipper]]:

| Variable | Descripció |
| --- | --- |
| `{{author}}` | Autor de la pàgina. |
| `{{contentHtml}}` | Contingut extret de la pàgina en format HTML. |
| `{{description}}` | Descripció o extracte de la pàgina. |
| `{{domain}}` | Domini de la pàgina. |
| `{{favicon}}` | URL del favicon. |
| `{{fullHtml}}` | HTML sense processar de la pàgina completa. |
| `{{image}}` | URL de la imatge de compartició social. |
| `{{language}}` | Idioma de la pàgina. |
| `{{published}}` | Data de publicació, que es pot formatar amb el filtre `date`. |
| `{{site}}` | Nom del lloc o editor. |
| `{{url}}` | URL d'origen trobada al document importat, quan estigui disponible. |
| `{{words}}` | Recompte de paraules. |
