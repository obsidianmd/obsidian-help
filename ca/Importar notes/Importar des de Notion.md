---
permalink: import/notion
cssclasses:
  - soft-embed
---
Obsidian et permet migrar fàcilment les teves notes des de Notion utilitzant el [[Importador|connector Importador]]. Això convertirà les teves dades de Notion a fitxers Markdown duradors que pots utilitzar fora de línia amb Obsidian i moltes altres aplicacions.

Obsidian ofereix dues maneres d'importar les teves dades de Notion:

1. **Compte de Notion (recomanat)** es connecta directament al teu espai de treball i et permet conservar bases de dades i fórmules que es converteixen a [[Introducció a Bases|Bases]]. Requereix un token d'integració de Notion i una connexió a internet.
2. **Importació per fitxer** utilitza els fitxers d'exportació `.zip` de Notion. No conserva les bases de dades però no requereix un token d'API ni connexió a internet.

## Importar des del teu compte de Notion

### Crear un token d'accés a l'API de Notion

Per accedir a les teves dades de Notion mitjançant l'API necessites un token d'accés. Aquest pas triga uns dos minuts a completar-se.

El token és una cadena llarga de números i lletres que normalment comença amb `ntn_...` i que et permetrà descarregar les teves dades de Notion.

1. Inicia la sessió al teu panell de [Connexions de Notion](https://app.notion.com/developers/connections).
2. Escull **New connection**.
	1. Dona un nom a la teva connexió, p. ex. "Personal". Es pot utilitzar qualsevol nom.
	2. Escull **Access token** com a mètode d'autenticació.
	3. Escull l'espai de treball que vols exportar com a **Installable in**.

![[notion-integration.png#interface]]

3. Fes clic a **Create connection**.
4. A la pestanya **Configuration** el teu token d'API és accessible al camp **Access token**.
5. Selecciona **Show** i després **Copy**.
6. Desa el token en un lloc segur com el teu gestor de contrasenyes.

![[notion-token.png#interface]]

A continuació, dona accés a la teva connexió a les pàgines i bases de dades de Notion que vols importar.

1. Vés a la pestanya **Content access** de la connexió que acabes de crear.
2. Afegeix les pàgines i bases de dades que vols importar.

![[notion-content.png#interface]]

Ara pots convertir les teves dades utilitzant l'Importador d'Obsidian.

### Importar les teves dades de Notion via API

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre **[[Configuració]]**.
2. Vés a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habilita el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la barra d'eines.
5. Sota **Format del fitxer** selecciona **Notion (API)**
6. Sota **API token**, fes clic a **Enllaça...** per afegir un nou secret. Per a l'**ID**, dona-li un nom com `notion`, i per al **Secret** enganxa el teu **Access token** de Notion.
7. Fes clic a **Carrega** per escollir les bases de dades i pàgines que vols importar.
8. Revisa i edita les opcions d'importació.
9. Selecciona **Importar** i espera fins que la importació sigui completa
10. Ja has acabat!

### Limitacions

> [!info] La importació per API és nova
> L'importador de l'API de Notion és nou. A causa de la complexitat dels espais de treball de Notion, alguns casos especials poden no haver-se tingut en compte. Si trobes problemes amb la conversió, [envia un informe d'error](https://github.com/obsidianmd/obsidian-importer/issues) perquè puguem millorar-lo.

A causa dels límits de velocitat de l'API de Notion, importar espais de treball grans pot trigar un temps considerable. Si us plau, tingues paciència.

A causa de les limitacions de l'API de Notion algunes dades no estan disponibles o no es poden convertir:

- Només s'importa la vista principal de cada base de dades.
- Les [fonts de dades vinculades](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) no s'importen: *"L'API de Notion no admet actualment fonts de dades vinculades. Quan comparteixis una base de dades amb la teva integració, assegura't que contingui la font de dades original!"*
- Funcions `People`: `name()` i `email()`
- Funcions `Text`: `style()` i `unstyle()`

A més, l'Importador farà els canvis següents:

- Les pàgines sense pàgines secundàries o bases de dades s'importaran com a `[nom del fitxer].md` en lloc de `[nom del fitxer]/[nom del fitxer].md`.
- Les bases de dades sempre es representen com a carpetes amb el nom `[nom de la base de dades]` amb un fitxer `[nom de la base de dades].base` al seu interior.

## Importar fitxers de Notion (.zip)

La importació per fitxer és una manera alternativa d'importar les teves dades de Notion. Aquest mètode no conserva les bases de dades però no requereix un token d'API ni connexió a internet.

### Exportar les teves dades de Notion

Per preparar les teves dades per a la importació, hauràs d'exportar tot el teu espai de treball utilitzant el format d'exportació HTML de Notion. Recomanem que no utilitzis l'exportació Markdown de Notion ja que omet dades importants. Has de tenir accés d'administrador a l'espai de treball de Notion per exportar tot el contingut de l'espai de treball.

1. Vés a **Settings** a la part superior de la barra lateral de Notion.
2. Sota **Workspace** selecciona **General**.
3. Troba i selecciona **Export all workspace content**.
4. Sota **Export format** selecciona **HTML**.
5. Escull **Include everything**.
6. Habilita **Create folders for subpages**.
7. Rebràs un fitxer `.zip` per correu electrònic o directament al navegador.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Importar el teu fitxer .zip de Notion

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre **[[Configuració]]**.
2. Vés a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habilita el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la barra d'eines.
5. Sota **Format del fitxer** selecciona **Notion (.zip)**
6. Escull el fitxer `.zip` amb els fitxers de Notion que vols importar. *Es recomana importar tot el teu Notion alhora perquè els enllaços interns es puguin conciliar correctament.*
7. _Opcionalment_, selecciona una carpeta per a la importació. Les teves pàgines i bases de dades de Notion s'imbricaran dins d'aquesta carpeta.
8. Habilita **Desa les pàgines pare en subcarpetes** per mantenir l'estructura de Notion. *Tingues en compte que a Notion pots escriure contingut en carpetes, això no és possible a Obsidian i aquestes pàgines s'afegiran com a subpàgina dins de la carpeta.*
9. Selecciona **Importar** i espera fins que la importació sigui completa
10. Ja has acabat!

### Resolució de problemes

Si trobes problemes en importar des de Notion:

- Assegura't d'utilitzar **HTML** com a format d'exportació a Notion, **no Markdown**.
- Si Obsidian sembla congelar-se durant la importació, desactiva els connectors de la comunitat i torna-ho a intentar.

Has trobat alguna altra cosa? Cerca al [repositori de l'Importador](https://github.com/obsidianmd/obsidian-importer/issues) per veure si altres persones ho han experimentat.

#### Importar espais de treball grans

Si estàs important un espai de treball amb múltiples gigabytes de dades, l'exportació des de Notion pot contenir fitxers `.zip` imbricats. En aquest cas pots veure un missatge d'error d'importació que s'assembla a alguna cosa com això:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Si veus aquest error, pots descomprimir el fitxer de Notion i després importar els fitxers `Export-{id}-Part-1.zip` imbricats.
