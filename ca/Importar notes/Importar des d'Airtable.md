---
permalink: import/airtable
---
Obsidian et permet migrar les teves dades des d'Airtable utilitzant el [[Importador|connector Importador]]. Això convertirà les teves bases d'Airtable a fitxers Markdown duradors que pots utilitzar fora de línia amb Obsidian i moltes altres aplicacions.

Cada taula es converteix en una carpeta de notes amb una nota per registre, més un fitxer [[Introducció a Bases|Base]] que recrea la taula i les seves vistes. Com que utilitza l'API d'Airtable, la importació requereix un token d'accés personal i una connexió a internet.

## Crear un token d'accés personal d'Airtable

Per accedir a les teves dades d'Airtable a través de l'API necessites un token d'accés personal. Aquest pas triga aproximadament 1 minut a completar.

El token és una cadena llarga de números i lletres que normalment comença amb `pat...` que et permetrà descarregar les teves dades d'Airtable.

1. Inicia la sessió a Airtable i ves a la pàgina de [Tokens d'accés personal](https://airtable.com/create/tokens) a la configuració del teu compte.
2. Escull **Crear nou token**.
3. Dona un nom al teu token, per exemple "Obsidian". Es pot utilitzar qualsevol nom.
4. Sota **Scopes**, afegeix `data.records:read` i `schema.bases:read`.
5. Sota **Access**, afegeix les bases que vols importar, o escull totes les bases d'un espai de treball.
6. Escull **Crear token**, després **Copia** el token.
7. Desa el token en un lloc segur com el teu gestor de contrasenyes.

Airtable només mostra el token un cop. Si el perds, crea'n un de nou.

## Importar les teves dades d'Airtable

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre la **[[Configuració]]**.
2. Ves a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habilita el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la barra d'eines.
5. Sota **Format de fitxer** selecciona **Airtable (API)**.
6. Sota **Token d'accés personal d'Airtable**, enganxa el token que has creat.
7. Fes clic a **Carrega** per navegar per les teves bases, després selecciona les taules que vols importar.
8. Revisa i edita les opcions d'importació.
9. Selecciona **Importa** per configurar com es convertiran els teus camps en notes amb [[Propietats|propietats]].
10. Fes clic a **Continua** i espera fins que la importació es completi.
11. Ja està!

### Opcions d'importació

- **Convertir fórmules** — escull si els camps de fórmula, cerca, agrupació i comptatge es reescriuen com a [[Fórmules|fórmules de Bases]], recorrent al valor calculat per Airtable quan no hi ha equivalent, o s'importen només com a valors estàtics.
- **Descarrega adjunts** — desa els fitxers adjunts a la teva cambra forta, utilitzant la configuració de la carpeta d'adjunts i el format d'enllaç. Quan està desactivat, o quan una descàrrega falla, la nota enllaça a l'URL del fitxer a Airtable.
- **Nom de la propietat de vista** — la propietat que registra a quines vistes d'Airtable pertany un registre. Cada vista de la Base generada filtra per aquesta propietat. Per defecte és `base`.
- **Importació incremental** — afegeix una propietat `airtable-id` a cada nota perquè una importació posterior pugui ometre els registres que ja s'han importat. En una importació completa, aquesta propietat s'elimina de nou.

## Configurar com s'importen els camps d'Airtable

En el segon pas de la importació, pots escollir com s'importa cada camp.

Cada camp de les teves taules s'atribueix una variable anomenada `{{field_name}}`. Per defecte, cada camp es converteix en una propietat, i pots utilitzar aquestes variables per canviar el nom de les propietats, canviar els seus valors, o escriure contingut al cos de cada nota.

El camp principal de cada taula sempre s'utilitza com a títol de la nota, i els registres sempre es col·loquen en una carpeta amb el nom de la seva taula, de manera que aquestes opcions no són configurables.

## Què s'importa

Per a una base anomenada `Projects` amb una taula `Tasks`, l'importador crea:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Una nota per registre, amb el camp principal com a títol de la nota, i els altres camps del registre com a [[Propietats|propietats]].
- Un fitxer `.base` per taula, amb cada vista d'Airtable mapejada a una [[Vistes|vista de Bases]]:
	- **Grid** es converteix en una [[Vista de taula]].
	- **Gallery** es converteix en [[Vista de targetes]].
	- **List** es converteix en una [[Vista de llista]].
	- Tots els altres tipus de vista es converteixen en vista de taula.
- Els tipus de camp d'Airtable es mapegen als tipus de propietat d'Obsidian, sense sobreescriure els tipus que ja hagis establert.
- Els registres enllaçats es converteixen en enllaços a les notes corresponents.
- Els adjunts es descarreguen a la teva cambra forta utilitzant la configuració de la teva cambra forta.

## Limitacions

> [!info] La importació d'Airtable és nova
> L'importador d'Airtable és nou. Si trobes problemes amb la conversió, [envia un informe d'error](https://github.com/obsidianmd/obsidian-importer/issues) perquè puguem millorar-lo.

A causa dels límits de velocitat de l'API d'Airtable, importar bases grans pot trigar un temps considerable. Si us plau, sigues pacient.

A causa de limitacions de l'API d'Airtable, algunes dades no estan disponibles o no es poden convertir:

- Els valors de rollup no s'importen. L'API no exposa l'agregació utilitzada per al valor calculat d'un rollup, de manera que només s'escriu el nom de la propietat, juntament amb una fórmula de Bases quan l'esquema del camp exposa una expressió.
- Les fórmules que utilitzen funcions per a les quals Obsidian no té equivalent, com `SWITCH`, `FIND`, `REGEX_EXTRACT` i `SQRT`, recorren al valor estàtic d'Airtable.
- Només s'importen les vistes de graella, galeria i llista. Altres tipus de vista, com calendari, kanban, línia temporal i Gantt, s'ignoren.
- Els enllaços a registres en taules que no has seleccionat es converteixen en el títol en text sense format del registre en lloc d'un enllaç.
- Els dissenys d'interfície, automatitzacions, comentaris i historial de revisions no s'importen.
