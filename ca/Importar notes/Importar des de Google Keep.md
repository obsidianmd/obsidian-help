---
permalink: import/google-keep
---
Obsidian et permet migrar fàcilment les teves notes de Google Keep utilitzant el [[Importador|connector Importador]]. Això convertirà les teves dades de Google Keep a fitxers Markdown duradors, que pots utilitzar amb Obsidian i moltes altres aplicacions.

## Exporta les teves dades de Google Keep

1. Ves a [Google Takeout](https://takeout.google.com/settings/takeout) i inicia sessió al teu compte de Google.
2. Fes clic a **Desselecciona-ho tot** a la cantonada superior dreta.
3. Desplaça't cap avall i selecciona **Keep** de la llista.
4. Desplaça't fins al final de la pàgina i fes clic a **Següent pas**.
5. A la pantalla següent, fes clic al botó **Crear exportació**.
6. Baixa el fitxer `.zip` un cop estigui disponible.

## Importa les teves dades de Google Keep a Obsidian

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre **[[Configuració]]**.
2. Ves a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habilita el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la cinta.
5. A **Format de fitxer** escull **Google Keep (.zip).**
6. Selecciona la ubicació del teu fitxer `.zip`.
7. Fes clic a **Importar** i espera fins que la importació es completi.
8. Ja està!

### Funcionalitats compatibles

- Totes les llistes de verificació s'importaran com a elements de primer nivell perquè Google Keep no exporta la informació de sagnat.
- Els recordatoris i les assignacions d'usuaris a les notes no s'importaran perquè aquestes funcionalitats no són compatibles amb Obsidian.
- Tota la resta d'informació s'hauria d'importar com a combinació de contingut i etiquetes.
