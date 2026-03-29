---
permalink: style-guide
publish: true
mobile: true
description: Aquesta pàgina explica la guia d'estil per redactar la nostra documentació de suport.
---
La documentació d'Obsidian segueix les directrius d'estil indicades en aquesta pàgina. Aquestes directrius es basen en les millors pràctiques del sector, especialment la [guia d'estil de documentació per a desenvolupadors de Google](<https://developers.google.com/style>) i la [guia d'estil de Microsoft](https://learn.microsoft.com/en-us/style-guide/). Per als casos no coberts a continuació, consulteu aquestes guies externes com a referències secundàries.

> [!tip]- Contribueix
> La major part de la documentació existia abans que existís aquesta guia d'estil.
> 
> Si trobeu alguna infracció d'aquesta guia d'estil, si us plau [creeu una incidència](https://github.com/obsidianmd/obsidian-docs/issues/new) i envieu una sol·licitud d'extracció a [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologia i gramàtica

### Estil lingüístic

Per a la nostra documentació en anglès, es recomana utilitzar [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) per servir millor la nostra audiència mundial i per ajudar amb les [[#Traduccions]]. Això significa:

- Evitar expressions idiomàtiques i culturalment específiques
- Utilitzar la veu activa i la construcció directa de frases
- Preferir paraules simples i comunes per sobre de terminologia complexa
- Ser explícit en lloc d'implícit
- Per a les convencions ortogràfiques, utilitzar l'anglès americà (per exemple, 'organize' i no 'organise').

### Termes

- Preferiu "drecera de teclat" per sobre de "tecla d'accés ràpid". Utilitzeu Tecla d'accés ràpid quan us referiu a la funcionalitat específica.
- Preferiu "l'aplicació Obsidian" en mòbil, i "l'aplicació Obsidian" en escriptori.
- Preferiu "sincronitzar" o "sincronització" per sobre de "sincronitzar" amb formes més llargues.
- Preferiu "terme de cerca" per sobre de "consulta de cerca".
- Preferiu "encapçalament" per sobre de "capçalera" quan us referiu a un text que introdueix una secció.
- Preferiu "màxim" per sobre de "màx." i "mínim" per sobre de "mín.".

### Noms de producte

Els noms de producte d'Obsidian comencen amb "Obsidian", per exemple "Obsidian Publish" i "Obsidian Sync".

Si un paràgraf es torna massa repetitiu, podeu utilitzar la forma curta en les referències posteriors.

Per exemple:

_Per permetre la configuració específica per dispositiu, Obsidian Sync no sincronitza la seva pròpia configuració. Cal configurar Sync per a cadascun dels vostres dispositius._

### Interfície d'usuari i interaccions

- Utilitzeu **negreta** per indicar el text dels botons
- Preferiu "seleccioneu" per sobre de "toqueu" o "feu clic".
	- Per a instruccions específiques de mòbil, "toqueu" és acceptable quan es descriuen interaccions tàctils ja que "feu clic" no està disponible.
- Preferiu "barra lateral" per sobre de "barra del costat".
- Preferiu "executeu" per sobre de "invoqueu" quan us referiu a ordres o accions.

Quan us referiu a múltiples interaccions d'interfície d'usuari en seqüència, utilitzeu el símbol → (U+2192). Per exemple, "**[[Configuració]] → Connectors de la comunitat**".

### Notes, fitxers i carpetes

- Utilitzeu "nota" quan us referiu a un fitxer Markdown a la cambra forta.
- Utilitzeu "fitxer" quan us referiu a altres extensions de fitxer que no siguin Markdown.
- Preferiu "nom de la nota" per sobre de "títol de la nota".
- Preferiu "nota activa" per sobre de "nota actual".
- Preferiu "carpeta" per sobre de "directori".
- Preferiu "tipus de fitxer" per sobre de "format de fitxer", tret que us referiu específicament al format de dades del contingut del fitxer.

Quan navegueu entre notes, utilitzeu "obriu" si la destinació està oculta, i "canvieu" si tant la nota d'origen com la de destinació estan obertes en panells separats.

### Documentació de referència per a la configuració

Quan sigui possible, qualsevol configuració hauria de documentar-se dins d'Obsidian utilitzant un text descriptiu. Eviteu documentar una configuració específica a l'Ajuda d'Obsidian tret que:

- Requereixi un coneixement més profund sobre com i quan utilitzar-la.
- S'utilitzi malament freqüentment o es pregunti sovint.
- Canviï _dràsticament_ l'experiència de l'usuari.

Considereu utilitzar un bloc destacat de consell si voleu cridar l'atenció sobre una configuració específica.

### Termes direccionals

Utilitzeu el guionet en els termes direccionals quan s'utilitzen com a adjectius. Eviteu el guionet quan la direcció s'utilitza com a substantiu.

**Recomanat:**

- Seleccioneu **[[Configuració]]** a la cantonada inferior esquerra.
- Seleccioneu **[[Configuració]]** a la part inferior esquerra.

**No recomanat:**

- Seleccioneu **[[Configuració]]** a la cantonada inferior esquerra (sense guionet).
- Seleccioneu **[[Configuració]]** a la inferior-esquerra.

Preferiu "superior esquerra" i "superior dreta" per sobre de "dalt a l'esquerra" i "dalt a la dreta".

No indiqueu una direcció quan us referiu a la configuració. La ubicació del control de configuració depèn del dispositiu.

**Recomanat:**

- Al costat de **Tria una cambra remota**, seleccioneu **Escull**.

**No recomanat:**

- A la dreta de **Tria una cambra remota**, seleccioneu **Escull**.

Quan descriviu la direcció vertical en elements de la interfície d'usuari, utilitzeu "sobre" i "sota" per a relacions espacials. Eviteu "amunt" i "avall" ja que són ambigus en diferents contextos.

**Recomanat:**

- El quadre de cerca apareix sobre la llista de fitxers.
- Hi ha opcions addicionals disponibles a sota.

**No recomanat:**

- El quadre de cerca és amunt de la llista de fitxers.
- Més opcions són avall a sota.

### Instruccions

Utilitzeu imperatius per als noms de les guies, encapçalaments de seccions i instruccions pas a pas. El mode imperatiu és concís i orientat a l'acció, cosa que és més directa per als usuaris que segueixen instruccions.

- Preferiu "Configura" per sobre de "Configurant"
- Preferiu "Mou un fitxer" per sobre de "Movent un fitxer"
- Preferiu "Importa les teves notes" per sobre de "Important les teves notes"

### Ús de majúscules

Preferiu la *capitalització de frase* per sobre de la *capitalització de títol* per als encapçalaments, botons i títols. Quan feu referència a elements de la interfície d'usuari, sempre coincidiu amb la capitalització del text a la interfície.

**Recomanat:**

- Com Obsidian emmagatzema les dades

**No recomanat:**

- Com Obsidian Emmagatzema Les Dades

### Exemples

Preferiu exemples realistes per sobre de termes sense sentit.

**Recomanat:**

- `task:(trucada OR planificació)`

**No recomanat:**

- `task:(foo OR bar)`

### Noms de tecles i dreceres de teclat

Quan us referiu a tecles del teclat i dreceres, utilitzeu una notació consistent.

**Noms de tecles individuals:**

Quan us referiu a un caràcter del teclat pel nom, afegiu el caràcter entre parèntesis just després del nom.

**Recomanat:**

- Premeu la tecla guió (-) per afegir un guió.
- Utilitzeu el signe d'interrogació (?) per cercar.

**No recomanat:**

- Premeu la tecla guió per afegir un guió.
- Utilitzeu el ? per cercar.
- Afegiu un `-` davant de la paraula.

**Dreceres de teclat:**

Formateu les dreceres de teclat sense espais al voltant del signe de suma. Quan una drecera difereix entre sistemes operatius, especifiqueu ambdós.

**Recomanat:**

- Premeu `Ctrl+Z` (Windows) o `Command+Z` (macOS) per desfer.
- Premeu `Escape` per tancar aquesta finestra.
- Utilitzeu `Tab` per moure-us entre camps.

**No recomanat:**

- Premeu `Cmd+Z` per desfer.
- Premeu `Ctrl + Z` (amb espais) per desfer.
- Premeu `Ctrl/Cmd+Z` per desfer.

Per a dreceres que són idèntiques en totes les plataformes, no cal que especifiqueu el sistema operatiu. Si no esteu segurs de si una drecera difereix segons la plataforma, especifiqueu el sistema operatiu per precaució. Windows i Linux típicament utilitzen les mateixes dreceres.

### Markdown

Utilitzeu línies en blanc entre blocs Markdown:

**Recomanat:**

```md
# Encapçalament 1

Aquesta és una secció.

1. Primer element
2. Segon element
3. Tercer element
```

**No recomanat:**

```md
# Encapçalament 1
Aquesta és una secció.
1. Primer element
2. Segon element
3. Tercer element
```

**Guions llargs en llistes:**

Utilitzeu guions llargs (—) per separar termes en negreta de les seves descripcions en llistes amb vinyetes. No utilitzeu guions llargs en llistes imbricades simples amb enllaços.

**Recomanat:**

- **Menú de vista** — creeu, editeu i canvieu vistes.
- **Calcula valors** — afegiu preus, computeu totals o realitzeu operacions matemàtiques.

**No recomanat:**

- [[Crear una base]] — Apreneu a crear i incrustar una base.

### Imatges

Utilitzeu "**amplada** x **alçada** píxels" per descriure dimensions d'imatge o pantalla.

**Exemple:**

Dimensions d'imatge recomanades: 1920 x 1080 píxels.

## Estructura de la informació

### Tipus de blocs destacats

Utilitzeu els blocs destacats estratègicament per ressaltar tipus específics d'informació:

**Consell** (`[!tip]-`) - Consells pràctics o bones pràctiques que milloren el flux de treball de l'usuari. Utilitzeu-lo per a dreceres, solucions alternatives o informació no essencial però útil. Aquests blocs destacats comencen contrets.

**Informació** (`[!info]+`) - Context addicional, informació de fons o aclariments. Utilitzeu-lo quan la informació afegeix comprensió però no és necessària per completar una tasca. Aquests blocs destacats comencen oberts.

**Advertència** (`[!warning]+`) - Precaucions importants que prevenen la pèrdua de dades, errors o conseqüències no desitjades. Utilitzeu-lo amb moderació per a situacions genuïnament arriscades. Aquests blocs destacats no s'haurien de contraure mai.

**Exemple** (`[!example]-`) - Apartat generals o detalls complementaris. Utilitzeu-lo per a informació tangencial que alguns usuaris poden trobar rellevant. Aquests blocs destacats comencen contrets.

**Exemples:**
```md
> [!tip]- Utilitzeu dreceres de teclat
> Podeu accelerar el vostre flux de treball memoritzant les dreceres més utilitzades.

> [!info]+ Això és un complement de pagament
> Aquesta funcionalitat requereix una subscripció de pagament per utilitzar-la.

> [!warning]+ Aquesta acció no es pot desfer
> Eliminar una cambra forta és permanent. Considereu exportar les vostres notes primer.

> [!example]- Ús avançat
> També podeu configurar aquest paràmetre a través del menú del Gràfic.
```

### Llistes vs. prosa

Utilitzeu llistes quan presenteu elements discrets que no tenen relacions seqüencials o causals fortes. Utilitzeu prosa i paràgrafs quan els elements es construeixen uns sobre els altres, requereixen explicació o es beneficien d'un flux narratiu.

**Utilitzeu una llista per a:**
- Un conjunt de funcionalitats no relacionades
- Requisits d'instal·lació
- Opcions de configuració
- Passos de resolució de problemes

**Utilitzeu prosa per a:**
- Explicacions de com funciona alguna cosa
- Fluxos de treball amb dependències
- Visions generals conceptuals
- Orientació que requereix context

### Taules

Utilitzeu taules per comparar funcionalitats, versions o punts de dades relacionats on l'alineació ajuda a la comprensió. Eviteu taules per a llistes simples o dades d'una sola columna.

**Bon cas d'ús:**

| Funcionalitat | Mòbil | Escriptori |
|---------------|-------|-----------|
| Sync | Sí | Sí |
| Connectors | No | Sí |
| Temes | Limitat | Complet |

### Referències creuades

Utilitzeu enllaços wiki interns (`[[Nom de la nota]]`) de manera generosa per ajudar els usuaris a navegar per temes relacionats. No obstant això, eviteu l'excés d'enllaços:

- No enllaceu el mateix terme múltiples vegades en una sola pàgina
- Enllaceu només quan la pàgina referenciada proporcioni un context addicional significatiu
- Utilitzeu text d'enllaç descriptiu quan sigui útil: `[[Nom de la nota#Secció|text descriptiu]]`

**Exemple:**

Primera menció: "Apreneu sobre [[Introducció a Obsidian Sync|Obsidian Sync]] per mantenir la vostra cambra forta actualitzada entre dispositius."
Menció posterior: "Podeu configurar Sync per a cada dispositiu per separat."

### Contingut específic per plataforma

Quan documenteu funcionalitats que difereixen entre plataformes, utilitzeu encapçalaments de secció per organitzar el contingut.

Utilitzeu `Escriptori` i `Mòbil` com a encapçalaments de subsecció per separar instruccions o funcionalitats específiques per plataforma.

**Recomanat:**
```md
## Personalitza la cinta

### Escriptori

A la versió d'escriptori, podeu personalitzar la cinta de la següent manera:

- Reorganitzeu l'ordre de les accions de la cinta arrossegant i deixant anar les icones.
- Per amagar accions específiques, feu clic dret en un espai buit i desmarqueu les accions que voleu amagar.

### Mòbil

A la versió mòbil, podeu personalitzar la cinta a través de la configuració:

1. Obriu **[[Configuració]]**.
2. Navegueu a **Aparença**.
3. Feu clic a **Gestionar** sota **Configuració de la cinta**.
```

> [!info]+ Quan crear seccions?
> Creeu seccions separades només si el contingut difereix significativament. Si les instruccions són en gran part les mateixes amb variacions menors, utilitzeu notes en línia en comptes.

## Icones i imatges

Incloeu icones i imatges quan facilitin l'explicació de coses difícils de descriure amb paraules, o quan necessiteu mostrar parts importants de l'aplicació Obsidian. Podeu desar les imatges a la carpeta `Attachments`.

- La imatge hauria de fer el text que l'acompanya més fàcil d'entendre.

 **Exemple**: Un cop activat, el connector [[Comptador de paraules]] crearà una nova entrada a la barra d'estat inferior.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Les imatges haurien d'estar en format `.png` o `.svg`.
- Si una imatge es veu massa gran a la nota, feu-la més petita fora d'Obsidian, o ajusteu les seves dimensions com s'explica a [[Incrustar fitxers#Incrustar una imatge en una nota|incrustar una imatge en una nota]].
- En casos rars, podeu col·locar imatges especialment grans o complexes en un [[Destacats#Blocs destacats plegables|bloc destacat plegat]].
- Per a finestres emergents o modals, la imatge hauria de mostrar tota la finestra de l'aplicació Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Icones

Les icones de [Lucide](https://lucide.dev/icons/) i les icones personalitzades d'Obsidian es poden utilitzar al costat d'elements detallats per proporcionar una representació visual d'una funcionalitat.

**Exemple:** A la barra d'eines de l'esquerra, seleccioneu **Crea un llenç nou** ![[lucide-layout-dashboard.svg#icon]] per crear un llenç a la mateixa carpeta que el fitxer actiu.

**Directrius per a les icones**

- Deseu les icones a la carpeta `Attachments/icons`.
- Afegiu el prefix `lucide-` abans del nom de la icona de Lucide.
- Afegiu el prefix `obsidian-icon-` abans del nom de la icona d'Obsidian.

**Exemple:** La icona per crear un llenç nou hauria d'anomenar-se `lucide-layout-dashboard`.

- Utilitzeu la versió SVG de les icones disponibles.
- Les icones haurien de tenir `18` píxels d'amplada, `18` píxels d'alçada i un gruix de traç de `1.5`. Podeu ajustar aquesta configuració a les dades SVG.

> [!info]- Ajustar la mida i el traç en un SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="AMPLADA" height="ALÇADA" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="GRUIX-DE-TRAÇ" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Utilitzeu l'àncora `icon` en imatges incrustades, per ajustar l'espaiat al voltant de la icona de manera que s'alineï correctament amb el text del voltant.
- Les icones haurien d'estar envoltades per parèntesis. ![[lucide-cog.svg#icon]]

**Exemple**: `![[lucide-cog.svg#icon]]`

### Etiquetes d'àncora d'imatge

Les etiquetes d'àncora d'imatge estan disponibles per afegir canvis decoratius a les imatges incrustades.

> [!warning] Advertència de previsualització en viu
> Les etiquetes d'àncora d'icona no es mostraran correctament en **Previsualització en viu.** Utilitzeu la **Vista de lectura** per confirmar que l'etiqueta d'àncora s'ha aplicat.

**Icona**

`![[lucide-menu.svg#icon]]`

L'etiqueta d'àncora d'icona assegura l'alineació vertical correcta per a les icones utilitzades per indicar elements de la interfície.

La primera icona de menú utilitza l'etiqueta d'àncora ![[lucide-menu.svg#icon]], mentre que la segona icona de menú ( ![[lucide-menu.svg]] ) no.

**Interfície**

`![[Vault picker.png#interface]]`

L'etiqueta d'àncora d'interfície afegeix una ombra decorativa al voltant de la imatge. A la primera imatge, l'etiqueta d'àncora d'interfície està aplicada.
![[Vault picker.png#interface]]
En canvi, la segona imatge no té l'àncora d'interfície aplicada.

![[Vault picker.png]]

**Contorn**

`![[Backlinks.png#outline]]`

L'etiqueta d'àncora de contorn afegeix una vora subtil al voltant de la imatge. A la primera imatge, l'etiqueta d'àncora de contorn està aplicada.

> [!tip] Observeu la part inferior esquerra de la imatge per veure la diferència.

![[Backlinks.png#outline]]

La segona imatge no té l'etiqueta d'àncora de contorn.

![[Backlinks.png]]

### Optimització

Les imatges alenteixen el temps de càrrega de la pàgina i ocupen un espai d'emmagatzematge valuós d'[[Introducció a Obsidian Publish|Publish]]. Optimitzar les imatges permet una reducció de la mida del fitxer, però manté la integritat visual de la imatge.

Tant les imatges com les icones haurien de ser optimitzades.

> [!info] Eines per optimitzar imatges
> Aquí teniu alguns programes recomanats per reduir la mida de les vostres imatges.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Recomanem una taxa d'optimització del 65-75%.

## Disposició

### Enllaços trencats

Abans d'enviar la vostra sol·licitud d'extracció, comproveu si hi ha enllaços trencats a la documentació de la traducció en la qual esteu treballant i corregiu-los. Els enllaços trencats poden aparèixer de manera natural amb el temps, així que verificar la seva precisió ajuda a mantenir la qualitat de la documentació.

Podeu comprovar els enllaços trencats utilitzant [[Connectors de la comunitat]] o eines disponibles al vostre IDE.

### Descripcions

Aquesta documentació s'edita a GitHub i s'allotja en línia mitjançant [[Introducció a Obsidian Publish|Obsidian Publish]], que inclou [[Previsualitzacions d'enllaços a xarxes socials#Descripció|descripcions]] per a targetes socials i altres elements [[SEO]].

Si la pàgina en la qual esteu treballant no té una [[Propietats|propietat]] `description`, afegiu-ne una. La descripció hauria de tenir 150 caràcters o menys i proporcionar un resum objectiu del contingut de la pàgina.

**Bo**: Apreneu a crear plantilles que capturen i organitzen metadades de pàgines web automàticament amb Web Clipper.
**Podria millorar-se**: Apreneu com crear plantilles que automàticament capturen i organitzin metadades de pàgines web amb Web Clipper.

### Indicacions

Quan escriviu o reescriviu [[#Instruccions]] sobre com realitzar una acció dins de l'aplicació, assegureu-vos d'incloure passos tant per a la versió mòbil com per a la d'escriptori.

Si no teniu accés a un dispositiu mòbil o d'escriptori, mencioneu-ho quan envieu la vostra sol·licitud d'extracció.

## Traduccions

Traduïu la totalitat del contingut quan completeu una traducció. Això inclou, però no es limita a:

- Noms de notes
- Noms de carpetes
- Àlies
- Noms d'adjunts
- Text alternatiu d'enllaços
