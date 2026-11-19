---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian et permet migrar les teves notes de Samsung Notes utilitzant el [[Importador|connector Importador]]. Això converteix les teves notes a fitxers Markdown durables que pots utilitzar amb Obsidian i moltes altres aplicacions.

## Exporta les teves notes de Samsung Notes

Samsung Notes desa cada nota com un fitxer de Samsung Notes (`.sdocx`).

1. Obre Samsung Notes al teu telèfon o tauleta.
2. Mantén premuda una nota, després selecciona totes les notes que vulguis exportar.
3. Toca **Desa com a fitxer**, després escull **Fitxer de Samsung Notes**.
4. Escull una carpeta i toca **Desa**.
5. Mou els fitxers `.sdocx` al dispositiu on utilitzes Obsidian, per exemple amb un cable USB, Quick Share o un disc al núvol.

Si tens molts fitxers, pots posar-los en un fitxer `.zip` i importar-lo en lloc d'importar-los individualment. Samsung Notes no inclou les seves carpetes als fitxers que desa, però l'Importador conserva les carpetes dins del fitxer `.zip`. Per mantenir les teves notes organitzades, desa les notes de cada carpeta de Samsung Notes en una carpeta amb el mateix nom abans de comprimir-les.

## Importa les teves dades de Samsung Notes a Obsidian

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre **[[Configuració]]**.
2. Ves a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habilita el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la barra d'eines.
5. Sota **Format de fitxer**, escull **Samsung Notes (.sdocx)**.
6. Selecciona els teus fitxers `.sdocx`, o un fitxer `.zip` que els contingui.
7. Selecciona **Importa** per revisar la plantilla generada i previsualitzar exemples de les teves notes.
8. Selecciona **Importa** de nou i espera que la importació acabi.

## Limitacions

- L'escriptura a mà i les formes dibuixades s'importen com una imatge SVG al final de la nota. Els traços conserven la seva forma i color, però no l'amplada variable d'un llapis sensible a la pressió. Les formes i línies s'importen en negre.
- Les caixes de text, les imatges col·locades a la pàgina i els PDFs anotats encara no s'importen.
- Els elements de llista de verificació s'importen com a no marcats.
- Els colors del text, els tipus de lletra i les mides de la font no es conserven.
- Desbloqueja les notes bloquejades a Samsung Notes abans d'exportar-les.

## Plantilles

Utilitza les [[Plantilles de l'importador]] per configurar completament com s'importen les teves dades de Samsung Notes.

![[Plantilles de l'importador#Variables]]
