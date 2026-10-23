---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian et permet migrar notes d'un graf de Logseq basat en fitxers (ara anomenat "Logseq OG") utilitzant el [[Importador|connector Importador]] oficial. L'Importador llegeix els fitxers Markdown de Logseq directament i converteix el format específic de Logseq en fitxers duradors que pots utilitzar fora de línia amb Obsidian i altres aplicacions.

## Abans de començar

- Fes una còpia de seguretat del teu graf de Logseq i de la teva cambra forta d'Obsidian.
- Localitza la carpeta arrel del teu graf de Logseq. Normalment conté carpetes anomenades `pages`, `journals`, `assets` i `logseq`.
- Assegura't que estàs utilitzant un graf de Logseq basat en fitxers. Els grafs de base de dades de Logseq encara no estan suportats.

## Importa el teu graf de Logseq

Necessites el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre **[[Configuració]] → Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
2. Habilita el connector Importador.
3. Obre l'**Importador** utilitzant la [[Paleta d'ordres]] o la icona de la barra d'eines.
4. A **Format de fitxer**, selecciona **Logseq**.
5. A **Tria una carpeta**, selecciona la carpeta arrel del teu graf. Selecciona la carpeta que conté `pages` i `journals`, no cap d'aquestes carpetes individualment.
6. Revisa les carpetes detectades i exclou les que no vulguis importar.
7. Tria una carpeta de sortida i on s'han d'emmagatzemar els fitxers adjunts importats.
8. Revisa les opcions d'importació i previsualitza exemples de les notes convertides.
9. Selecciona **Importar** i espera que la importació acabi.

## Limitacions

- Les pissarres no s'importen.
- Les consultes es preserven com a blocs de codi si tries mantenir-les.
- Les macros de plantilles dinàmiques de Logseq romanen com a text literal.
- La programació de targetes de memòria de Logseq, les anotacions de PDF i altres dades específiques de l'aplicació no es migren.

## Configuració

L'Importador converteix les convencions comunes de Logseq, incloent:

- Propietats de pàgina en [[Propietats]] d'Obsidian.
- Àlies de pàgina, etiquetes, espais de noms i enllaços.
- Estats de flux de treball en marcadors de llistes amb caselles de selecció, amb prioritats i dates preservades com a text llegible.
- IDs de bloc, referències de bloc i incrustacions de bloc en enllaços i incrustacions d'Obsidian.
- Noms de fitxer de diari i enllaços de data.
- Ressaltats, llistes numerades, blocs Org, incrustacions multimèdia i fitxers enllaçats de la carpeta `assets` del graf.

### Diaris

Per defecte, **Utilitza la configuració de notes diàries** està activat. Els diaris importats utilitzen la carpeta i el format de data configurats pel connector principal [[Notes diàries]]. Això pot col·locar els diaris fora de la carpeta de sortida seleccionada a l'Importador.

Si desactives aquesta opció, els diaris s'escriuen en una carpeta `Journals` dins de la carpeta de sortida seleccionada i utilitzen el format de nom de nota `YYYY-MM-DD`.

### Aplanar esquemes

Logseq utilitza vinyetes imbricades com a estructura d'una pàgina. Per defecte, l'Importador preserva aquesta estructura d'esquema. Habilita **Aplanar esquemes** per convertir els blocs d'esquema en una combinació de paràgrafs, encapçalaments i llistes convencionals. Les tasques i grups d'elements semblants a llistes romanen com a elements de llista, però la conversió és heurística. Revisa diversos exemples a la previsualització abans d'importar un graf gran.

### Preservar dades incompatibles

Les consultes, targetes de memòria i entrades de seguiment de temps de Logseq no tenen equivalents directes a Obsidian. Les opcions d'importació et permeten triar si mantenir cada tipus de contingut. Quan es mantenen, romanen com a text sense format.

- **Mantenir consultes** preserva les consultes com a blocs de codi delimitit o codi en línia.
- **Mantenir targetes de memòria** preserva els marcadors `#card` i els embolcalls cloze com a text sense format.
- **Mantenir seguiment de temps** preserva les entrades `LOGBOOK` i `CLOCK` com a text sense format.

## Plantilles

Utilitza [[Plantilles de l'importador]] per configurar completament com s'importen les teves dades de Logseq.

![[Plantilles de l'importador#Variables]]

## Resolució de problemes

Si l'Importador no troba cap nota, assegura't que has seleccionat la carpeta arrel del graf i que les carpetes configurades de pàgines o diaris contenen fitxers Markdown.

Si es reporta un fitxer adjunt com a absent, confirma que el fitxer referenciat encara existeix a la carpeta `assets` del graf.

Per a altres problemes, cerca al [seguiment d'incidències de l'Importador](https://github.com/obsidianmd/obsidian-importer/issues) o envia un informe d'error amb un graf d'exemple petit.
